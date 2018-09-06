const random = require( 'random-world' );
const Table = require( '../' );

const table = new Table( [
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
    Array( 5 ).fill( '' ).map( () => random.city() ),
] );

console.log( table );
