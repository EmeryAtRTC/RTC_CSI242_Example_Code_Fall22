let inputNumber1;
let submitNumber1;
let displayNumber1;

//elements for number 5
let containerNumber5;
let boxNumber5;
//coordinates for the location of the box
let xPos;
let yPos;
//speed of the box
let boxSpeed;

//fields for number6
let submitNumber6;
let displayNumber6;
let carList;

//field for number 7
let selectedCar;


//use the load event like a constructor
//constructor assings values to the fields
window.addEventListener('load', function(){
    //Assign all my fields
    containerNumber5 = document.getElementById('containerNumber5');
    boxNumber5 = document.getElementById('boxNumber5');
    xPos = 0;
    yPos = 0;
    boxSpeed = 1;
    document.body.addEventListener('keypress', moveBox);
    //assignment for number 6
    submitNumber6 = document.getElementById('submitNumber6');
    displayNumber6 = document.getElementById('displayNumber6');
    loadCars();
    submitNumber6.addEventListener('click', displayCars);
    //number 7
    displayNumber6.addEventListener('click', test);

});

//Let's create moveBox 
//this moveBox is going to take an event
//The event can tell us about how the keypress was triggered
function moveBox(event){

    //console.log(event.key);
    if(event.key.toLowerCase() === 'w'){
        if(yPos <= 0){
            return;
        }
        //reducing the y coordinate by the speed
        yPos -= boxSpeed;
        //actually move the box
        boxNumber5.style.top = yPos + 'px';
    }
    else if(event.key.toLowerCase() === 's'){
        if(yPos >=  170){
            return;
        }
        //adding to the y coordinate by the speed
        yPos += boxSpeed;
        //actually move the box
        boxNumber5.style.top = yPos + 'px';
    }
    else if(event.key.toLowerCase() === 'd'){
        if(xPos >= 270){
            return;
        }
        //adding to the x coordinate by the speed
        xPos += boxSpeed;
        //actually move the box
        boxNumber5.style.left = xPos + 'px';
    }
    else if(event.key.toLowerCase() === 'a'){
        if(xPos <= 0){
            return;
        }
        //reducing the x coordinate by the speed
        xPos -= boxSpeed;
        //actually move the box
        boxNumber5.style.left = xPos + 'px';
    }
}

//Constructor function for a car
function Car(year, make, model, milage, price){
    this.year = year;
    this.make = make;
    this.model = model;
    this.milage = milage;
    this.price = price;
    //toString() function
    this.toString = function(){
        return `${this.year} ${this.make} ${this.model} ${this.milage} ${this.price}`;
    }
}

//function that loads the carList
function loadCars(){
    carList = [];
    carList.push(new Car(2010, 'chevy', 'fastcar', 21890, 38473));
    carList.push(new Car(2015, 'ford', 'truck', 215439, 10000));
    carList.push(new Car(2021, 'geo', 'metro', 29304, 12000));
    carList.push(new Car(1990, 'red', 'wagon', 100, 5));
    carList.push(new Car(2001, 'magic', 'carpet', 100000000, 120938120938));
    
}
//this is the function that displays the carList
function displayCars(){
    //clear the display
    displayNumber6.innerHTML = "";
    //we have to go through the list
    for(const car of carList){
        //we create a list item element
        let element = document.createElement('li');
        element.textContent = car.toString();
        displayNumber6.appendChild(element);
    }
}

function test(event){
    //We need the index of the list item that got clicked
    //If we have the index of the list item that got clicked
    //we have the index of the corresponding car in the array
    console.log(event.target);
    //if we have the list item could you find what index it is at
    //in the unordered list?
    //you are looking for the index of what got clicked on
    //There is an array indexOf method [10, 2, 5, 20]
    //let index = numbers.indexOf(20);

    selectedCar = carList[selectedIndex];
    //display the selected car

}