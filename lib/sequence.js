const Cell = require( './cell' );

module.exports = class Sequence {
    constructor( options = {} ) {
        Object.assign( this, options );
        this.cells = [];
    }

    addCell( cell ) {
        if( cell instanceof Cell ) {
            this.cells.push( cell );
        } else {
            this.cells.push( new Cell( cell ) );
        }
        return this;
    }

    get width() {
        let w = 0;
        for( const cell of this.cells ) {
            if( cell.length > w ) w = cell.length;
        }
        return w;
    }

    get length() {
        return this.cells.length;
    }

    toJSON() {
        return this.cells;
    }

    [ Symbol.iterator ]() {
        return {
            i : 0,
            cells : this.cells,
            next() {
                if( this.i >= this.cells.length ) {
                    return { done : true };
                }
                return {
                    done : false,
                    value : this.cells[ this.i++ ]
                }
            }
        };
    }
}
