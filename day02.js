const fs = require( "fs" );
const data = fs.readFileSync( "day02.list.txt", "utf-8" );

const sourcecode = data.split( "," ).map( ( input ) => parseInt( input, 10 ) );

function run( code ) {
	let pointer = 0;
	while ( code[ pointer ] !== 99 ) {
		switch ( code[ pointer ] ) {
			case 1:
				code[ code[ pointer + 3 ] ] = code[ code[ pointer + 1 ] ] + code[ code[ pointer + 2 ] ];
				break;
			case 2:
				code[ code[ pointer + 3 ] ] = code[ code[ pointer + 1 ] ] * code[ code[ pointer + 2 ] ];
				break;
		}

		pointer += 4;
	}

	return code[ 0 ];
}

let code = [ ...sourcecode ];
let noun = 1;
let verb = 1;

while ( run( code ) !== 19690720 ) {
	verb += ( noun === 99 ) ? 1 : 0;
	noun += ( noun < 99 ) ? 1 : -99;

	code = [ ...sourcecode ];
	code[ 1 ] = noun;
	code[ 2 ] = verb;
}

console.log( 100 * code[ 1 ] + code[ 2 ] );
