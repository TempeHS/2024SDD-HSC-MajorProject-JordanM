//alert("Hello, world"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "Debug the innerHTML"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
console.log("Debug the console log"); //Output to the console (Open dev tools and look at the console)
 
/*
psudeo code
START
GET myArray
SET array length = L
SET myArray[0] = x
SET i = 1
SET index = 0
COUNT LOOP from 0 to myArray.length - 1
    IF x > myArray[i]
        i++
    ELSE x < myArray[i]
    x = myArray[i]
    index = i
    i++
END COUNT LOOP
PRINT "The max value is " + x
PRINT "The max index is " + index
END
*/

/*
//WORKING - Find greatest number and its index
let myArray = [8, 9, 6, 1, 0, 3, 5, 7, 2, 4 ];
var x = myArray[0];
var i = 0;
const L = myArray.length;
var index = 0;

function findHighestNumber ()
{
    if(x > myArray[i])
    {
        i++;
    }
    else
    {
        x = myArray[i];
        index = i;
        i++
    }
}

do
{
    findHighestNumber();
}
while(i < L)

alert("The Largest number is this array is: " + x + ". The index of this number is: " + index + ".");
*/


/*
//NOT WORKING - Sort array and display highest number

let myArray = [8, 9, 6, 1, 0, 3, 5, 7, 2, 4 ];
var x = 0;
var i = 0;
const a = myArray.length;
var end = 0;

function numbersort()
{   
    x = myArray[0];
    i = i + 1;
    if(x < myArray[i])
    {
        x = myArray[i];
        numbersort();
    }
    else(x > myArray[i])
    {
        var differnce = x - myArray[i];
        myArray[i] = myArray[i] + differnce;
        x = x - differnce;
        x = myArray[i];
        numbersort();
    }
}


alert(myArray[i]);
alert(myArray.length);
*/