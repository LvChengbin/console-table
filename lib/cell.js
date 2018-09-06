const util = require( 'util' );
const style = require( 'cli-style' );
const is = require( '@lvchengbin/is' );

module.exports = class Cell {
    constructor( content, options = {} ) {

        if( is.array( content ) ) {
            content = content.join( ', ' );
        } else if( !is.string( content ) ){
            content = util.inspect( content );
        }

        this.content = content.trim();
        Object.assign( this, options );
        if( !this.style ) {
            this.style = {};
        }
    }

    get length() {
        return this.content ? this.content.length : 0;
    }

    inspect() {
        return this.toString();
    }

    toString() {
        return style( this.content, this.style );
    }

    toJSON() {
        return this.content;
    }
}
