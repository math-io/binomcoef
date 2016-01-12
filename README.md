binomcoef
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [binomial coefficient][binomial-coefficient].

The [binomial coefficient][binomial-coefficient] of two non-negative integers `n` and `k` is defined as

<div class="equation" align="center" data-raw-text="
    \binom nk = \frac{n!}{k!\,(n-k)!} \quad \text{for }\ 0\leq k\leq n" data-equation="eq:binomial_coefficient">
	<img src="https://cdn.rawgit.com/math-io/binomcoef/8ccdd18bf294feceb72b0c010191329a962ee522/docs/img/eqn1.svg" alt="Factorial formula for the Binomial coefficient.">
	<br>
</div>

It can be generalized for any two real numbers `n` and `k` as follows

<div class="equation" align="center" data-raw-text="{n \choose k}= \frac{\Gamma(n+1)}{\Gamma(k+1) \Gamma(n-k+1)}= \frac{1}{(n+1) \operatorname{Beta}(n-k+1,k+1)}" data-equation="eq:generalized_binomial_coefficient">
	<img src="https://cdn.rawgit.com/math-io/binomcoef/8ccdd18bf294feceb72b0c010191329a962ee522/docs/img/eqn2.svg" alt="Generalized version of the Binomial coefficient for real numbers.">
	<br>
</div>

where `Γ` denotes the [Gamma function][gamma-function] and `Beta` is the [Beta function][beta-function].

## Installation

``` bash
$ npm install math-binomcoef
```


## Usage

``` javascript
var binomcoef = require( 'math-binomcoef' );
```


#### binomcoef( x, y )

Computes the [Binomial coefficient][binomial-coefficient].

``` javascript
var val = binomcoef( 8, 2 );
// returns 28

val = binomcoef( 0, 0 );
// returns 1

val = binomcoef( -4, 2 );
// returns 10

val = binomcoef( 2, -1 );
// returns 0

val = binomcoef( 3, 1.5 );
// returns ~3.395
```


## Implementation

Instead of evaluating the factorial form, which is inefficient and prone to overflow for large inputs arguments, this module computes the following multiplicative representation of the binomial coefficient for integer arguments

<div class="equation" align="center" data-raw-text="\binom nk = \prod_{i=1}^k \frac{n+1-i}{i}" data-equation="eq:multiplicative_representation">
	<img src="https://cdn.rawgit.com/math-io/binomcoef/8ccdd18bf294feceb72b0c010191329a962ee522/docs/img/eqn3.svg" alt="Multiplicative definition of the Binomial coefficient.">
	<br>
</div>

For non-integer inputs, the function computes `- ln( n + 1 ) - ln( Beta( n - k + 1, k + 1 ) )` and returns the power this value to base [e][e].


## Examples

``` javascript
var binomcoef = require( 'math-binomcoef' );

for ( var x = 5; x > 0; x-- ) {
	for ( var y = 0; y < 5; y++ ) {
		console.log( 'x: %d, \t y: %d, \t f(x,y): %d', x, y, binomcoef( x, y ) );
	}
}

```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-binomcoef.svg
[npm-url]: https://npmjs.org/package/math-binomcoef

[build-image]: http://img.shields.io/travis/math-io/binomcoef/master.svg
[build-url]: https://travis-ci.org/math-io/binomcoef

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/binomcoef/master.svg
[coverage-url]: https://codecov.io/github/math-io/binomcoef?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/binomcoef.svg
[dependencies-url]: https://david-dm.org/math-io/binomcoef

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/binomcoef.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/binomcoef

[github-issues-image]: http://img.shields.io/github/issues/math-io/binomcoef.svg
[github-issues-url]: https://github.com/math-io/binomcoef/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[beta-function]: https://en.wikipedia.org/wiki/Beta_function
[binomial-coefficient]: https://en.wikipedia.org/wiki/Binomial_coefficient
[compute-io]: https://github.com/compute-io/
[e]: https://en.wikipedia.org/wiki/E_%28mathematical_constant%29
[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function
