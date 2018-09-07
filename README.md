# cli-table

Simply to render `Object`s or `Array`s as tables on the command line in node.js scripts.

## Installation

```bash
$ npm i @lvchengbin/cli-table --save
```

## Usage

If an `Object` is passed to the constructor, the table will be rendered as a `key=>value` map with the keys in the first column and the values in the second column.

```js
const random = require( 'random-world' );
const Table = require( '../lib/table' );

const obj = {};

for( let i = 0; i < 10; i += 1 ) {
    obj[ random.fullname() ] = random.city();
}

const table = new Table( obj ); 

console.log( table );
```
![Screenshot]()
