"use strict";


// 1. printIndices
function printIndices(items) {

  for (const item of items) {
    console.log(`${ item } ${ items.indexOf(item) }`);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {

  const results = [];

  for (const item of items) {
    if ((items.indexOf(item) % 2) === 0) {
      results.push(item);
    }
  }

  return results;
}

// 3. smallestNItems
function smallestNItems(items, n) {
  
  const sortedItems = items.sort((a , b) => a-b);

  const sortedNItems = sortedItems.slice(0,n);

  return sortedNItems.reverse();


}
