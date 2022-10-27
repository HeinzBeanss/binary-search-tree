const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let sortedArray = [];
let startOfArray;
let endOfArray;
let root = null; 

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
    root = buildTree(sortedArray, startOfArray, endOfArray - 1);
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
    
    const maxHeight = (root) => {
        if (root == null) {
            return 0;
        } else {
            let lheight = maxHeight(root.left);
            let rheight = maxHeight(root.right);

            if (lheight > rheight) {
                return (lheight + 1)
            } else {
                return (rheight + 1)
            }
        }
    }
    

    const levelOrder = (root) => {
        let levelorderarray = [];
        const levelOrderRec = (root) => {

            let h = maxHeight(root);
            let i; // get rid soon
            for (let i = 0; i <= h; i++) {
                printCurrentLevel(root, i); 
            }
            return levelorderarray;
        }

        const printCurrentLevel = (root, level) => {
        
            if (root == null) {
                return;
            }
            if (level == 1) {
                levelorderarray.push(root.data);
            } else if (level > 1) {
                printCurrentLevel(root.left, level - 1);
                printCurrentLevel(root.right, level - 1);
            }
            return levelorderarray;
        }

    levelOrderRec(root);
    return levelorderarray;
    }   

    // 7
    const inorder = (root) => {

        let inorderarray = [];
        const inorderRec = (root) => {
        if (root == null) {
            return;
        }
        inorderRec(root.left);
        inorderarray.push(root.data);
        inorderRec(root.right); 
        return inorderarray;
        }

        inorderRec(root);
        return inorderarray;
    }
   
    const preorder = (root) => {
        let preorderarray = [];
        const preorderRec = (root) => {
            if (root == null) {
                return;
            }
            preorderarray.push(root.data);
            preorderRec(root.left);
            preorderRec(root.right);
            return preorderarray;
        }
        preorderRec(root);
        return preorderarray;
    }

    const postorder = (root) => {
        let postorderarray = [];
        const postorderRec = (root) => {
            if (root == null) {
                return;
            }
            postorderRec(root.left);
            postorderRec(root.right);
            postorderarray.push(root.data);
            return postorderarray;
        }
        
        postorderRec(root);
        return postorderarray;
    }

    // 8
    const height = (root) => {
                
        if (node == null) {
            return -1;
        } else {
            let lheight = height(node.left);
            let rheight = height(node.right);

            if (lheight > rheight) {
                return (lheight + 1)
            } else {
                return (rheight + 1)
            } 
        }

    }

    // 9
    const depth = (root, node) => {

        // console.log(node);
        // console.log(root);
        
        if (root == null) {
            return -1;
        } 

        let depthcounter = -1;

        if ((root.data == node.data)||
        (depthcounter = depth(root.left, node)) >= 0 ||
        (depthcounter = depth(root.right,  node)) >= 0) {
            return depthcounter + 1;
        }
        return depthcounter;
        
    }

    // 10
    const isBalanced = (root) => {

        const height = (root) => {
            if (root == null) {
                return 0;
            }
            return Math.max(height(root.left), height(root.right)) + 1;
        }

        if (root == null) {
            return true;
        }
        let lh = height(root.left);
        let rh = height(root.right);

        if (Math.abs(lh - rh) <= 1 && isBalanced(root.left)== true && isBalanced(root.right)== true) {
        return true;
        }

        return false;
    }

    // 11 
    const rebalance = (root) => {

        console.log(inorder(root));
        let arraybeforesort = inorder(root);
        let semiarraybeforesort = [... new Set(arraybeforesort)];
        let arrayToBalance = mergeSort(semiarraybeforesort);
        let endOfArrayToBalance = arrayToBalance.length;
        startOfArray = 0;

        updatedRoot = buildTree(arrayToBalance, startOfArray, endOfArrayToBalance - 1);
        // ^ add nw
        console.log(root);
        console.log(root);
        console.log(root);
        // prettyPrint(root);
        // console.log(isBalanced(root));
        // console.log(levelOrder(root));
        // console.log(inorder(root));
        // console.log(preorder(root));
        // console.log(postorder(root));
        // so  it's all fine here, but it doesn't return properly?
        
        return updatedRoot;
    }    // ^ add nw

    // other
    const prettyPrint = (node, prefix = '', isLeft = true) => {
        // console.log(node);
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }

      

    return { buildTree, root, prettyPrint, sortedArray, startOfArray, endOfArray, insert, remove, find, levelOrder, preorder, postorder, inorder, height, depth, isBalanced, rebalance};
}

// const endOfArray = sortedArray.length; // get this after it's sorted ? ? 
// const startOfArray = 0;

// const tree = Tree(unsortedArray);
// root = tree.buildTree(sortedArray, startOfArray, endOfArray - 1);

// tree.prettyPrint(root);
// console.log("/////////////////////////////////////////////")

// tree.insert(root, 100);
// tree.prettyPrint(root);
// console.log("/////////////////////////////////////////////")

// tree.remove(root, 324);
// tree.prettyPrint(root);
// console.log("/////////////////////////////////////////////")

// tree.find(root, 7);
// tree.prettyPrint(root);
// console.log("/////////////////////////////////////////////")

// tree.levelOrder(find(root, 324));

// tree.prettyPrint(root);
// console.log(tree.height(tree.find(root, 9)));
// console.log("/////////////////////////////////////////////")

// tree.prettyPrint(root);
// console.log(tree.depth(root, tree.find(root, 23)));
// console.log("/////////////////////////////////////////////")

// tree.prettyPrint(root);
// console.log(tree.levelOrder(root));
// console.log("/////////////////////////////////////////////")

// tree.prettyPrint(root);
// console.log("/////////////////////////////////////////////")
// console.log(tree.inorder(root));
// console.log(tree.preorder(root));
// console.log(tree.postorder(root));

// tree.prettyPrint(root);
// console.log("///////////////////////////");
// console.log(tree.isBalanced(root));

// tree.prettyPrint(root);
// console.log("///////////////////////////");
// tree.rebalance(root);
// tree.prettyPrint(root);

// DRIVER SCRIPT TO MAKE SURE EVERYTHING WORKS... PAUSECHAMP:


let randomNewArray = [5, 1, 7, 5, 90, 1, 565, 3, 13, 5, 13, 6, 78, 34, 4928, 34, 3948, 2, 234, 14, 45, 4567, 44144, 113, 87];
const tree = Tree(randomNewArray);
tree.prettyPrint(root);
console.log("#1 is complete");

console.log(tree.isBalanced(root));
console.log("#2 is complete");

console.log(tree.levelOrder(root));
console.log(tree.inorder(root));
console.log(tree.preorder(root));
console.log(tree.postorder(root));
console.log("#3 is complete");

tree.insert(root, 10310410);
tree.insert(root, 14914148);
tree.insert(root, 41841748);
tree.insert(root, 9319371974);
tree.prettyPrint(root);
console.log("#4 is complete");

console.log(tree.isBalanced(root));
console.log("#5 is complete");

tree.rebalance(root);
tree.prettyPrint(updatedRoot);
console.log("#6 is complete");

console.log(tree.isBalanced(updatedRoot));
console.log("#7 is complete");

console.log(tree.levelOrder(updatedRoot));
console.log(tree.inorder(updatedRoot));
console.log(tree.preorder(updatedRoot));
console.log(tree.postorder(updatedRoot));
console.log("#8 is complete");