const strip = require( 'strip-ansi' );
const Cell = require( '../lib/cell' );

describe( 'Cell', () => {
    it( 'toString', () => {
        const str = 'a green bold string with an underline';
        const cell = new Cell( str, {
            style : {
                color : 'green',
                bold : true,
                underline : true
            }
        } );       
        console.log( cell );

        expect( strip( cell.inspect() ) ).toEqual( str );
    } ); 

    it( 'toJSON', () => {
        const cell = new Cell( 'a green string', {
            style : {
                color : 'green'
            }
        } );       
        expect( cell.toJSON() ).toEqual( 'a green string' );
    } ); 

} );
