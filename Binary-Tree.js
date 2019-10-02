class node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class binaryTree{
    constructor(){
        this.root=null;
    }

    //helper functions
    insertNode(root, newNode) {

        if (this.root == null) this.root=newNode;
        else {
            var temp = root;
            if (newNode.data < temp.data) {
                if (temp.left == null) { temp.left = newNode; return; }
                else this.insertNode(temp.left, newNode);
            }
            else if (newNode.data > temp.data){
                if (temp.right == null) {temp.right = newNode; return;}
                else this.insertNode(temp.right, newNode)
            }
        }
    }
}

var BT=new binaryTree();
var newNode1= new node(5);
var newNode2= new node(6);
var newNode3= new node(4);
var newNode4= new node(3);
BT.insertNode(BT.root, newNode1);
BT.insertNode(BT.root, newNode2);
BT.insertNode(BT.root, newNode3);
BT.insertNode(BT.root, newNode4);
console.log(BT)