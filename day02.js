const fs = require( "fs" );
const data = fs.readFileSync( "day02.list.txt", "utf-8" );

const code = data.split( "," ).map( ( input ) => parseInt( input, 10 ) );

let pointer = 0;
while ( code[ pointer ] !== 99 ) {
	console.log( pointer, code[ pointer ] );
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

console.log( code );
