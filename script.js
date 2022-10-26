const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let sortedArray = [];
let startOfArray;
let endOfArray;
root = null; 

// 1
const Node = (data, left = null, right = null) => {
    this.data = data

    return { data, left, right };
}


function sortArrays(leftarray, rightarray) { // merge sort pt1
    let sortedArray = [];
    while (leftarray.length && rightarray.length) {
        if (leftarray[0] < rightarray[0]) {
            sortedArray.push(leftarray.shift());
        } else {
            sortedArray.push(rightarray.shift());
        }
    }
    return [ ...sortedArray, ...leftarray, ...rightarray ];
}

function mergeSort(testArray) { // merge sort pt2

    let halfway = testArray.length / 2;
    
    if (testArray.length < 2) {
        return testArray;

    }
        
    const lefthalf = testArray.splice(0, halfway);
    return sortArrays(mergeSort(lefthalf), mergeSort(testArray));
};

// 2
const Tree = (unsortedArray) => {

    // sorts the array and corrects variables.
    let semiSortedArray = [...new Set(unsortedArray)];
    sortedArray = mergeSort(semiSortedArray);
    console.log(sortedArray); 
    endOfArray = sortedArray.length;
    startOfArray = 0;

    // 3
    const buildTree = (sortedArray, start, end) => {

        if (start > end) {
            return null;
        }

        let mid = parseInt((start + end) / 2);
        let node = Node(sortedArray[mid]);
        node.left = buildTree(sortedArray, start, mid - 1);
        node.right = buildTree(sortedArray, mid + 1, end);
        return node;
    }

    // 4
    const insert = (root, data) => {
        if (root == null) {
            root = Node(data)
            return root;
        }
        if (data < root.data) {
            root.left = insert(root.left, data);
        } else if (data > root.data) {
            root.right = insert(root.right, data);
        }

        return root;
    }
    
    const remove = (root, data) => {
        if (root == null) {
            return root;
        }

        if (data < root.data) {
            root.left = remove(root.left, data)
        } else if (data > root.data) {
            root.right = remove(root.right, data);
        }

        else {
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }

                root.data = minValue(root.right);
                root.right = remove(root.right, root.data);
            }
            return root;
    } 
    
    function minValue(root)  {  
        let minv = root.data;
            while (root.left != null)
            {
                minv = root.left.data;
                root = root.left;
            }
            return minv;
    }      

    // 5
    const find = (root, data) => {
        if (root == null || root.data == data) {
            console.log(root);
            return root;
        }
        if (data < root.data) {
            return find(root.left, data);
        } else if (data > root.data) {
            return find(root.right, data);
        }
    }

    // 6 FIGURE THIS OUT AND PROCEED.
    // const levelOrder = (breadth(node)) => {
    //     console.log("test");
    // }

    // const breadth = (node) => {

    // }

    // 7
    const inorder = (func) => {
        
    }
   
    const preorder = (func) => {
        
    }

    const postorder = (func) => {
        
    }

    // 8
    const height = (node) => {

    }

    // 9
    const depth = (node) => {

    }

    // 10
    const isBalanced = (node) => {

    }

    // 11 
    const rebalance = (node) => {

    }

    // other
    const prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }

    return { buildTree, root, prettyPrint, sortedArray, startOfArray, endOfArray, insert, remove, find, levelOrder, preorder, postorder, inorder, height, depth, isBalanced, rebalance };
}

// const endOfArray = sortedArray.length; // get this after it's sorted ? ? 
// const startOfArray = 0;

const tree = Tree(unsortedArray);
root = tree.buildTree(sortedArray, startOfArray, endOfArray - 1);

tree.prettyPrint(root);
console.log("/////////////////////////////////////////////")

tree.insert(root, 100);
tree.prettyPrint(root);
console.log("/////////////////////////////////////////////")

tree.remove(root, 324);
tree.prettyPrint(root);
console.log("/////////////////////////////////////////////")

tree.find(root, 7);
tree.prettyPrint(root);
console.log("/////////////////////////////////////////////")
