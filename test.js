let value = null;
justanarray = "";
// 1
const Node = (data, left = null, right = null) => {
    this.data = data

    return { data, left, right };
}

// 2
const Tree = (unsortedArray) => {

    const testfunc1 = (value) => {
        console.log(value);
        value = "new value"
        return value;
    }
    

    value = "initial value";

    return { testfunc1 , value };
}

console.log(value)
const tree = Tree(justanarray);
console.log(value);
console.log(tree.value);
tree.testfunc1(value);
console.log(value);
console.log(tree.value);
console.log(tree.testfunc1(value));

// only issue is that i couldn't figure out how to use the old variable and just update it
// instead i had to create an updatedRoot variable for the updated tree.