//basic print statement
console.log('javascript is dope');

//Inititalizing variables
var num = 10; 
var string = 'Hello World';
var isRad = true;

//basic if statement loop
if(num == 10){
    console.log('num is equal to 10');
}
else{
    console.log('hell naw')
}

//basic for loop
for(var i=0; i < 10; i++){
    console.log(i);
}


//array
var groceries = ['Milk', 'Eggs', 'Cheese'];

for(var i = 0; i < groceries.length; i++){
    console.log(groceries[i]);
}

//creating function
function listGroceries(){
    for(var i = 0; i < groceries.length; i++){
        console.log(groceries[i]);
    }
}

//calling functoin
listGroceries();

document.getElementById('box').addEventListener('click', function(){
    alert('You clicked the box!')
}); 