const random = require( 'random-world' );
const Table = require( '../lib/table' );

const obj = {};

for( let i = 0; i < 10; i += 1 ) {
    obj[ random.fullname() ] = random.city();
}

const table = new Table( obj ); 

console.log( table );
