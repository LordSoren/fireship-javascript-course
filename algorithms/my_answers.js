function cumSum(arr){
    // this function takes an array of numbers and returns a number that is the sum of everything in the array.
    let sum = 0;
    for (const val in arr){
        sum = sum + val;
    }
    return sum;
}

function cumSumReduce(arr){
    return arr.reduce((acc, cur) => acc + cur, 0);
}

function binSearchRec(arr, target, start=0, end=arr.length-1){
    let ind = Math.floor((end + start)/2); //I got this point wrong on my own. Need to remember this.
    let val = arr[ind];
    if ((start >= end) && (val !== target)){
        //base case:
        return -1;
    }else if(val===target) {
        // target found
        return ind;
    } else if (val > target) {
        // target is greater than val of current ind.
        return binSearchRec(arr, target, start, ind-1);
    } else {
        //  target must be less than val of current ind.
        return binSearchRec(arr, target, ind+1, end);
    }
}

//my original version did not correctly account for the fact that the Map natively tracks insertion order.
//accounting for this makes the tutorial's "delete and replace" approach much more efficient than implementing a linked-list with pointers like this is C.
class LRU {
    constructor (size){
        this.lruMap = new Map();
        this.size = size;
    }

    getItem(key){
        const item = this.lruMap.get(key);
        if (item){
            this.lruMap.delete(key);
            this.lruMap.set(key, item);
        }
        return item;
    }

    putItem(key, value){
        if(this.lruMap.has(key)){
            this.lruMap.delete(key);
        }else if (this.lruMap.size == this.capacity){
            this.lruMap.delete(this.oldestItem);
        }
        this.lruMap.set(key, value);
    }

    get oldestItem(){
        return this.lruMap.keys().next().value;
    }

}


console.log("CumSum: " + cumSum([1,2,3,4]));
const arr = [11,22,33,44,55,66,77,88,99];
console.log("Bin Search: " + binSearchRec(arr, 33));
const cache = new LRU(5);
cache.putItem('a', 1);
console.log("cache retrieval: "+ cache.getItem('a'));