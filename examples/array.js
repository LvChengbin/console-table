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
] );

table.setHeader( [ 'Header1', 'Header2', 'Header3', 'Header4' ] );

console.log( table );
