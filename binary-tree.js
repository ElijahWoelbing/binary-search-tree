class Tree {
    constructor() {
        this.root = null;
    }

    // add Node
    add(n) {
        if (this.root === null) {
            this.root = n;
        } else {
            this.root.append(n);
        }
    }

    // print nodes of tree 
    print() {
        this.root.print()
    }

    // helper functions to create tree from array;
    static fromArray(array) {
        let tree = new Tree();
        for (let i = 0; i < array.length; i++) {
            tree.add(new Node(array[i]))
        }
        return tree;
    }

    // find node in tree
    search(n) {
        return this.root.find(n)
    }
}

class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }

    // add a node in correct position
    append(n) {
        if (n.val < this.val) {
            if (this.left == null) {
                this.left = n;
            } else {
                this.left.append(n);
            }
        } else if (n.val > this.val) {
            if (this.right == null) {
                this.right = n;
            } else {
                this.right.append(n);
            }
        }
    }

    // visit and print
    print() {
        if (this.left !== null) {
            this.left.print();
        }
        console.log(this.val);
        if (this.right !== null) {
            this.right.print();
        }
    }

    // find value
    find(n) {
        if (this.val === n) {
            return this
        } else if (n < this.val && this.left !== null) {
            return this.left.find(n)
        } else if (n > this.val && this.right !== null) {
            return this.right.find(n)
        }
        return null;
    }

}

let tree = Tree.fromArray([1, 2, 23, 25]);
tree.add(new Node(5));
tree.print();
console.log(tree.search(23));
