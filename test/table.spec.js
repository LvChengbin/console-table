const Table = require( '../lib/table' );

describe( 'Table', () => {
    it( 'toString', () => {
        const table = new Table( {
            x : 1,
            y : 2,
            key : 'value',
            name : 'LvChengbin'
        } ); 

        console.log( table );

    } ); 
} );
