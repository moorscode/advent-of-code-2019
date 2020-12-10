const fs = require( "fs" );
const data = fs.readFileSync( "day03.list.txt", "utf-8" );

const wires = data.split( "\n" ).map( ( row ) => {
	return row.split( "," ).map( ( direction ) => {
		return { direction: direction.substr( 0, 1 ), length: parseInt( direction.substr( 1, direction.length ), 10 ) };
	} );
} );

const map = [];
const cross = [];

for ( let wire = 0; wire < wires.length; wire++ ) {
	let x = 0;
	let y = 0;
	let steps = 0;

	for ( const instruction of Object.values( wires[ wire ] ) ) {
		let dirX = 0;
		let dirY = 0;

		switch ( instruction.direction ) {
			case "L":
				dirX = -1;
				break;
			case "R":
				dirX = 1;
				break;
			case "U":
				dirY = -1;
				break;
			case "D":
				dirY = 1;
				break;
		}

		for ( let i = 0; i < instruction.length; i++ ) {
			steps++;
			x += dirX * 1;
			y += dirY * 1;

			if ( wire === 0 ) {
				map[ x ] = map[ x ] || [];
				map[ x ][ y ] = steps;
			}
			if ( wire === 1 && !! map[ x ] && !! map[ x ][ y ] ) {
				// Add the distance to the list; to easily sort and conclude.
				cross.push( map[ x ][ y ] + steps );
			}
		}
	}
}

// Sort the cross-sections, lowest one is what we're looking for.
const sorted = cross.sort( ( a, b ) => a - b );

console.log( sorted[ 0 ] );

