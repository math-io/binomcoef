'use strict';

var binomcoef = require( './../lib' );

for ( var x = 5; x > 0; x-- ) {
	for ( var y = 0; y < 5; y++ ) {
		console.log( 'x: %d, \t y: %d, \t f(x,y): %d', x, y, binomcoef( x, y ) );
	}
}
