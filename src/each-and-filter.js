(function() {
  'use strict';

  window._ = {};


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




  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test){
    var returnArray = [];

    if (Array.isArray(collection)){
      for (var i = 0; i < collection.length; i++) {
          if (test(collection[i])){
            returnArray.push(collection[i])
          };
        }
    }

    return returnArray;


  };

}());