const start = 136760;
const end = 595730;

const valid = [];

for ( let i = start; i <= end; i++ ) {
	const parts = i.toString().split( "" ).map( ( n ) => parseInt( n, 10 ) );

	let skip = false;

	for ( let x = 0; x < 5; x++ ) {
		if ( parts[ x ] > parts[ x + 1 ] ) {
			skip = true;
			break;
		}
	}

	if ( skip ) {
		continue;
	}

	// Check for doubles.
	let hasDouble = false;
	for ( let x = 0; x < 5; x++ ) {
		let double = false;
		if ( parts[ x ] === parts[ x + 1 ] ) {
			double = true;
			if ( parts[ x - 1 ] && parts[ x ] === parts[ x - 1 ] ) {
				double = false;
			}
			if ( parts[ x + 2 ] && parts[ x ] === parts[ x + 2 ] ) {
				double = false;
			}
		}
		if ( double ) {
		    hasDouble = double;
			break;
		}
	}

	if ( hasDouble ) {
		valid.push( i );
	}
}

console.log( valid.length );
