const fs = require( "fs" );
const data = fs.readFileSync( "day01.list.txt", "utf-8" );

const rows = data.split( "\n" ).filter( ( x ) => x ).map( ( row ) => parseInt( row, 10 ) );

function getFuel( amount ) {
	let fuel = Math.max( 0, Math.floor( amount / 3 ) - 2 );
	if ( fuel > 0 ) {
		fuel += getFuel( fuel );
	}
	return fuel;
}

const totalFuel = rows
	.map( getFuel )
	.reduce( ( acc, current ) => {
		return acc + current;
	}, 0 );

console.log( totalFuel );
