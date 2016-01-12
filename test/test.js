'use strict';

// MODULES //

var test = require( 'tape' );
var isfinite = require( 'validate.io-finite' );
var isnan = require( 'validate.io-nan' );
var abs = require( 'math-abs' );
var binomcoef = require( './../lib' );


// FIXTURES //

var n = require( './fixtures/n.json' );
var k = require( './fixtures/k.json' );
var expected = require( './fixtures/expected.json' );
var i;
var v;
for ( i = 0; i < expected.length; i++ ) {
	v = expected[ i ];
	if ( v === 'Inf' ) {
		expected[ i ] = Number.POSITIVE_INFINITY;
	}
	else if ( v === 'NaN' ) {
		expected[ i ] = NaN;
	}
}


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof binomcoef === 'function', 'main export is a function' );
	t.end();
});

test( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val = binomcoef( NaN, 2 );
	t.notOk( val === val, 'returns NaN' );
	val = binomcoef( 4, NaN );
	t.notOk( val === val, 'returns NaN' );
	t.end();
});

test( 'the function computes the binomial coefficient', function test( t ) {
	var actual;
	var b1;
	var b2;
	var i;
	for ( i = 0; i < n.length; i++ ) {
		actual =  binomcoef( n[ i ], k[ i ] );

		b1 = isfinite( actual );
		b2 = isfinite( expected[ i ] );
		t.equal( b1, b2, 'returned result is ' + ( (b2) ? 'finite' : 'not finite' ) );

		b1 = isnan( actual );
		b2 = isnan( expected[ i ] );
		t.equal( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 ) {
			t.ok( abs( actual - expected[ i ] ) < 1e-14, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected[ i ] + '.' );
		}
	}
	t.end();
});
