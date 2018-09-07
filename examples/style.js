const random = require( 'random-world' );
const Table = require( '../' );

const table = new Table( [
    Array( 4 ).fill( '' ).map( () => random.city() ),
    Array( 4 ).fill( '' ).map( () => random.city() ),
    Array( 4 ).fill( '' ).map( () => random.city() ),
    Array( 4 ).fill( '' ).map( () => random.city() ),
    Array( 4 ).fill( '' ).map( () => random.city() ),
    Array( 4 ).fill( '' ).map( () => random.city() ),
    Array( 4 ).fill( '' ).map( () => random.city() )
], {
    style : {
        header : {
            color : 'red'
        },
        cell : {
            color : 'green'
        },
        border : {
            color : 'yellow'
        }
    }
} );

table.rows[ 3 ].cells[ 2 ].style = {
    bg : 'white',
    color : 'red',
    underline : true
};

table.setHeader( [ 'Header1', 'Header2', 'Header3', 'Header4' ] );

console.log( table );
