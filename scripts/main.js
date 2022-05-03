// piece of code that does one or more actions
// do not repeat yourself



function go(name, age){
    console.log("Name is " + name + ", age is " + age);
}

function add(first, second){
    return first+second;
}

//go('Will', 34);
//go('Laura', 28);
var sum=add(1,2);
alert(sum);

var myList=['apples','oranges','banans'];
myList[3]='pineapples';
myList[0]='watermelon';
myList[4]=go;
myList[5]=['Will', 'Laura'];

//// pop first element
//alert(myList.shift());
//// pop last element
//alert(myList.pop());

myList.forEach(function(value, index){
    console.log(value, index);
});

document.querySelector('.done');
document.querySelector('#checklist');
