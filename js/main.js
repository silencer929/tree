import {Tree, Node} from "./tree.js";
var tree;
var canvas=document.querySelector("#tree");
canvas.width=400;
canvas.height=400;
var cxt=canvas.getContext("2d");
console.log(cxt)
var arr=[ 10,5,15,7,2,9,31];
function makeTree(){
	tree= new Tree();
	for(var i=0; i<arr.length;i++){
		tree.addValue(arr[i]);
	}
	console.log(tree);
	tree.traverse();
	tree.draw(cxt);
}
function draw(){
}
document.addEventListener("DOMContentLoaded",()=>{
	makeTree()
	draw();
})