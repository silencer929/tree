class Tree{
	constructor(){
		this.root=null;
	}
	addValue(value){
		if(this.root==null){
				this.root=new Node(value)
		}else{
			this.root.addNode(value);
		}
	}
	traverse(){
		this.root.visit();

	}
	search(value){
		this.root.search(value);
	}
	draw(cxt){
		var offset=40;
		var height=20;
		var width=20;
		var IW=400/2;
		var IH=20;
		if(this.root !=null){
			this.root.draw(cxt,IW,IH,height, width, offset)
		}
	}
}

class Node
{
	constructor(value)
	{
		this.left=null;
		this.right=null;
		this.value=value;
	}
	addNode(value){
		if(value < this.value){
			if(this.left==null){
				this.left=new Node(value);
			}
			else{
				this.left.addNode(value);
			}
		}
		else{
			if(this.right==null){
				this.right=new Node(value);
			}else{
				this.right.addNode(value);
			}
		}
	}
	visit(){
		if(this.left !=null){
			this.left.visit();
		}
		console.log(this.value);
		if(this.right !=null){
			this.right.visit();
		}
	}
	search(value){
		if(this.value==value){
			return console.log("found: " +value)
		}else if(value>this.value && this.right !=null){
			this.right.search(value);
		}
		else if(value < this.value && this.left !=null){
			this.right.search(value);
		}else{
			return console.log( " The  value: " +value+ " was not found")
		}
	}
	draw(cxt,IW,IH,height, width, offset, op="+"){
		if(this.value!=null){
			cxt.strokeStyle="white";
			cxt.moveTo(IW,IH+width);
			if(op=="+"){
				cxt.lineTo(IW - offset, IH+offset)
			}
			else{
				cxt.lineTo(IW + offset, IH + offset)
			}
			cxt.rect(IW, IH, width,height);
			cxt.stroke();
			if(this.left !=null){
				this.left.draw(cxt,IW-offset,IH+offset,height,width,offset, op="-");
			}
			if(this.right !=null){
				this.right.draw(cxt,IW+offset,IH+offset,height,width,offset);
			}
		}
	}
}
export {Tree, Node};