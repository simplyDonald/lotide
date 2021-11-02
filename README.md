# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @simplydonald/lotide`

**Require it:**

`const _ = require('@simplydonald/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays`: takes two arrays as parameters and checks for equality.
* `Head`: this function returns the first element of any array passed into it.
* `countLetters`: takes an string parameter and retuns an object specifying the number of letters in the string as a key-value pair.