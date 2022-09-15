// BTS Binary Search Tree = Tree
const { pilas, colas } = require("./myADT");

class Node {
    constructor(data) {
        this.left = null;
        this.data = data;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    insert(data) {
        var newNode = new Node(data);
        this.size++;
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(node, data) {
        if (node === null)
            return null;
        else if (data < node.data)
            return this.search(node.left, data);
        else if (data > node.data)
            return this.search(node.right, data);
        else
            return node;
    }
    ordenarNIvel(node, nivel) {

    }

    imprimirAnchura(node, nivel) {
        if (node != null) {
            //this.ordenarNIvel(node, nivel);
            this.imprimirAnchura(node.left, nivel + 1);
            console.log(node.data + "(" + nivel + ")");
            //console.log(node, "(", nivel,")"); 
            this.imprimirAnchura(node.right, nivel + 1);
        }
    }
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.postorder(node.right);
        }
    }
    preOrder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    orden_nivel(node) {
        /*const colaN = new colas();
            colaN.enqueue(node);
            let h=[],i=0;
            while (!colaN.isEmpty()) {
                let current = colaN.peek();
                //console.log(h+current.data);
                h[i]=current.data;
                i++;
                colaN.dequeue();
                if (current.left != null) {
                    colaN.enqueue(current.left);
                }
                if (current.right != null) {
                    colaN.enqueue(current.right);
                }
            }
            console.log(h);*/
        /*for (let o = 0; o < i; o++) {
            
            
        }*/
        const cola = new colas();
        cola.enqueue(node);
        cola.enqueue(null);
        let r = "", i = 0;
        console.log("NIVEL " + i)
        i++;
        while (!cola.isEmpty()) {
            let current = cola.peek();
            //r = r + current + ", ";
            if (current == null) {
                //r = r + "\n";
                cola.enqueue(null);
                cola.dequeue();
                current = cola.peek();
                if (current == null) {
                    break;
                }
                console.log("NIVEL " + i)
                i++;
            }
            console.log(current.data);
            cola.dequeue();
            if (current.left != null) {
                cola.enqueue(current.left);
            }
            if (current.right != null) {
                cola.enqueue(current.right);
            }

        }

        /*const pilaN = new pilas();
        pilaN.push(node);
        while (!pilaN.isEmpty()) {
            let current = pilaN.peek();
            console.log(current.data);
            pilaN.pop();
            if (current.left != null) {
                pilaN.push(current.left);
            }
            if (current.right != null) {
                pilaN.push(current.right);
            }
        }*/
    }

}

const arbol = new Tree();
arbol.insert(15);
arbol.insert(25);
arbol.insert(10);
arbol.insert(7);
arbol.insert(22);
arbol.insert(17);
arbol.insert(13);
arbol.insert(5);
arbol.insert(9);
arbol.insert(27);

//arbol.postorder(arbol.root);

arbol.orden_nivel(arbol.root);

//arbol.inOrder(arbol.root);
//arbol.preOrder(arbol.root);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

//arbol.imprimirAnchura(arbol.root, 0);

/*console.log(arbol);

console.log(arbol.search(arbol.root, 17));*/


