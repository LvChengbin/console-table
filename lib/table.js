const is = require( '@lvchengbin/is' );
const style = require( 'cli-style' );
const Sequence = require( './sequence' );
const Cell = require( './cell' );

const INIT = Symbol( 'init' );
const MODE = Symbol( 'mode' );

const offcut = {
    t: '─', // top
    tm : '┬', // top middle
    tl : '┌', // top left
    tr : '┐', // top right
    b : '─', // bottom
    bm : '┴', // bottom middle
    bl : '└', // bottom left
    br : '┘', // bottom right
    l : '│', // left
    ml : '├', // right
    mh : '─', // middle horizontal
    mm : '┼', // middle middle
    r : '│', // right
    mr : '┤', // middle right
    mv : '│' // middle vertical 
};

const assign = Object.assign;

class Table {
    constructor( data, options = {} ) {
        this.style = assign( {
            header : {
                color : '#a2bf88'
            },
            cell : {
                color : 'white'
            },
            border : {
                color : '#999999',
            }
        }, options.style || {} );

        const oc = assign( {}, offcut, options.offcut || {} );
        this.offcut = {};

        for( const name in oc ) {
            this.offcut[ name ] = style( oc[ name ], this.style.border || {} );
        }

        this.rows = [];
        this.columns = [];

        if( data && is.object( data ) ) {
            this[ MODE ] = 'map';
            if( this.style.header && !this.style.header.align ) {
                this.style.header.align = 'right';
            }
        } else if( data && !is.array( data ) ) {
            data = [ data ];
        }

        this[ INIT ]( data );
    }

    [ INIT ]( data ) {
        if( this[ MODE ] === 'map' ) {
            for( const prop in data ) {
                this.addRow( [ prop, data[ prop ] ] );
            }
        } else if( data ) {
            for( const item of data ) {
                this.addRow( item );
            }
        }
    }

    setHeader( data ) {
        if( this[ MODE ] === 'map' ) {
            throw new TypeError( 'Cannot add headers while MODE is map' );
        }
        this.addRow( data, true );
    }

    addRow( data, header = false ) {
        const style = this.style;
        const row = new Sequence( {
            isHeader : header
        } );

        if( this[ MODE ] === 'map' ) {
            const th = new Cell( data[ 0 ], {
                type : 'header',
                style : style.header
            } );

            row.addCell( th );
            this.addCellIntoColumn( th, 0 );

            const td = new Cell( data[ 1 ], {
                style : style.cell
            } );

            row.addCell( td );
            this.addCellIntoColumn( td, 1 );
        } else {
            let i = 0;
            for( const item of data ) {
                const td = new Cell( item, {
                    type : header ? 'header' : '',
                    style : header? style.header : style.cell
                } );
                row.addCell( td );
                this.addCellIntoColumn( td, i++, header );
            }
        }

        if( header ) {
            this.rows.unshift( row );
        } else {
            this.rows.push( row );
        }
        return this;
    }

    addCellIntoColumn( cell, position, prepend = false ) {
        if( !this.columns[ position ] ) {
            const column = new Sequence();
            this.columns[ position ] = column;
        }
        this.columns[ position ].addCell( cell, prepend )
    }

    addCellIntoRow( cell, position ) {
        if( !this.rows[ position ] ) {
            const row = new Sequence();
            this.rows[ position ] = row;
        }
        this.rows[ position ].addCell( cell )
    }

    toString() {
        const widths = [];
        for( const column of this.columns ) {
            widths.push( column.width );
        }
        const padding = this.style.padding || 1;
        const lines = [];

        for( let i = 0, l = this.rows.length; i < l; i += 1 ) {
            const row = this.rows[ i ];
            lines.push( this.border( i, widths, padding ) );
            lines.push( this.wrap( row, widths, padding ) );
        }
        lines.push( this.border( this.rows.length, widths, padding ) );

        return lines.join( '\n' );
    }

    wrap( row, widths, padding ) {
        const oc = this.offcut;
        const spaces = Array( padding + 1 ).join( ' ' );
        let line = oc.l;
        let i = 0;
        for( const item of row ) {
            const text = spaces + item.toString() + spaces;
            const pad = widths[ i ] - item.length + 1;
            if( item.style.align === 'right' ) {
                line += ( pad > 0 ? Array( pad ).join( ' ' ) : '' ) + text + oc.mv;
            } else {
                line += text + ( pad > 0 ? Array( pad ).join( ' ' ) : '' ) + oc.mv;
            }
            i++;
        }
        return line.substr( 0, line.length - oc.mv.length ) + oc.r;
    }

    border( n, widths, padding ) {
        const oc = this.offcut;
        let line = '';
        let m, r, l;
        if( n === 0 ) {
            line += oc.tl;
            l = oc.t;
            m = oc.tm;
            r = oc.tr;
        } else if( n === this.rows.length ) {
            line += oc.bl;
            l = oc.b;
            m = oc.bm;
            r = oc.br;
        } else {
            line += oc.ml;
            l = oc.mh;
            m = oc.mm;
            r = oc.mr;
        }

        for( const w of widths ) {
            line += Array( w + 1 + padding * 2 ).join( l ) + m;
        }

        return line.substr( 0, line.length - m.length ) + r;
    }

    inspect() {
        return this.toString();
    }

    toJSON() {
        return this.rows;
    }
}

module.exports = Table;
