/**
 Write a function, `filter` which takes two arguments: 

It should return a new array of zero or more elements from `inputArray` which individually pass the test represented by `predicateFn`.  

To do this it should call `predicateFn` on each element of `inputArray` and collect the ones
 for which `predicateFn` returns true - eventually returning the collected array.

 * @param inputArray - an array (of anything)
 * @param predicateFn - a function
 * @returns the filtered array
 * 
 * psuedocode...
 * FUNCTION myFilter(inputArray, predicateFn)
 *      filteredArray = []
 *      FOR element of inputArray
 *          IF (predicateFn(element)===TRUE)
 *            filteredArray.push(predicateFn(element))
 *          ENDIF
 *      ENDFOR
 *      RETURN filteredAray
 * ENDFUNCTION
 */
 function myFilter(inputArray, predicateFn) {
    const filteredArray = []
    for (element of inputArray) {
        if (predicateFn(element)===true) {
          filteredArray.push(element)
          }
    }
    return filteredArray
  }
  
  module.exports = myFilter;

  
