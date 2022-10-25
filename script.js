const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const endOfArray = unsortedArray.length;
const startOfArray = 0;

const Node = (data, left = null, right = null) => {
    this.data = data
    // this.left = left, 
    // this.right = right

    return { data, left, right };
}

const Tree = (array) => {

    root = null;

    // v v v v this is from an unsorted array. 
    const buildTree = (unsortedArray, start, end) => {

        // sort the array, then give it a new vairable called sortedArray, then proceed. 
        // i'm just using  .osrt assuming it's fine.. then removing duplicates. 

        let sortedArray = unsortedArray.sort(); 

        if (start > end) {
            return null;
        }

        let mid = parseInt((start + end) / 2);
        let node = Node(sortedArray[mid]);
    }
}

console.log(unsortedArray);
let sortedArray = unsortedArray.sort();
console.log(sortedArray);
let doubleSortedArray = [...new Set(sortedArray)];
console.log(doubleSortedArray);

// take unsorted array
// use Set on it to get rid of any duplicates
// use merge sort on this new array now, impliment that.
// then you can convert it into a tree.