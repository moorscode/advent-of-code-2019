const start = 136760;
const end = 595730;

const valid = [];

for ( let i = start; i <= end; i++ ) {
	const parts = i.toString().split( "" ).map( ( n ) => parseInt( n, 10 ) );

	let checks = 0;

	// Check for doubles
	for ( let x = 0; x < 5; x++ ) {
		if ( parts[ x ] === parts[ x + 1 ] ) {
			checks += 1;
			break;
		}
	}

	for ( let x = 0; x < 5; x++ ) {
		if ( parts[ x ] > parts[ x + 1 ] ) {
			checks -= 1;
			break;
		}
	}

	if ( checks > 0 ) {
		valid.push( i );
	}
}

console.log( valid.length );
