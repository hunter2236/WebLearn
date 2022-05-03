
var numOne=document.getElementById("num-one");
var numTwo=document.getElementById("num-two");
var addSum=document.getElementById("add-sum");
addSum.innerHTML="your sum is: 0";

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
    //null, undefined, NaN
    var one=parseFloat(numOne.value) || 0;
    var two=parseFloat(numTwo.value) || 0;
    addSum.innerHTML="your sum is: " + (one+two);
}

numOne.addEventListener("click", function(){
    console.log("click");
});

numOne.addEventListener("mouseenter", function(){
    console.log("mouseenter");
});

numOne.addEventListener("mouseleave", function(){
    console.log("mouseleave");
});

numOne.addEventListener("focus", function(){
    console.log("focus");
});

numOne.addEventListener("blur", function(){
    console.log("blur");
});


var simon=document.getElementById("simon");
simon.addEventListener("click", pinkLink);

var bruce=document.getElementById("bruce");
bruce.addEventListener("click", pinkLink);

var ben=document.getElementById("ben");
ben.addEventListener("click", pinkLink);

function pinkLink(){
    var images = document.querySelectorAll("img");
    images.forEach(function iterImages(value, index){
        value.className="hide";
    });

    var picId=this.attributes["data-img"].value;
    console.log(picId);
    var pic=document.getElementById(picId);
    if(pic.className==="hide"){
        pic.className="";
    }else{
        pic.className="hide";
    }
}


var checklist=document.getElementById("checklist");
var items=checklist.querySelectorAll("li");
var inputs=checklist.querySelectorAll("input");


items.forEach(function iterImages(value, index){
    value.addEventListener("click", editItem);
});

inputs.forEach(function iterImages(value, index){
    value.addEventListener("blur", updateItem);
    value.addEventListener("keypress", itemKeypress);
});

function editItem(){
    if(this.className!=="edit"){
        this.className="edit";
        var input=this.querySelector("input");
        input.focus();
        input.setSelectionRange(0, input.value.length);
    }
}


function updateItem(){
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className="";
}

function itemKeypress(event){
    console.log(event);
    if(event.which===13){
        updateItem.call(this);
    }
}
