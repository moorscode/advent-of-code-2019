const fs = require( "fs" );
const data = fs.readFileSync( "day01.list.txt", "utf-8" );

const rows = data.split( "\n" ).filter( ( x ) => x ).map( ( row ) => parseInt( row, 10 ) );

const fuel = rows
	.map( ( row ) => Math.floor( row / 3 ) - 2 )
	.reduce( ( acc, current ) => {
		return acc + current;
	}, 0 );

console.log( fuel );
