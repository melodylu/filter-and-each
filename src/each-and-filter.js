(function() {
  'use strict';

  window._ = {};

// mel test variables below
// var animals = ['tiger', 'monkey', 'slug', 'kitten', 'parrot'];
// var animalsObj = {cage1: 'tiger', cage2: 'monkey', cage3: 'slug', cage4:'kitten', cage5:'parrot'};

// var print = function (value, key, collection){
//   console.log(value);
// }



  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {

    if (Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var i in collection){
        iterator(collection[i], i, collection);
      }
    }
  };


_.each(animals, print)

_.each(animalsObj, print)


  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test){
    // your code goes here
  };

}());