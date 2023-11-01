//alert("Hello, world"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "Debug the innerHTML"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
console.log("Debug the console log"); //Output to the console (Open dev tools and look at the console)
 /*
let myArray = [8, 9, 6, 1, 0, 3, 5, 7, 2, 4 ];
*/

/*
//CALCULATOR
START
    SET num1 to GET keyboard input
    SET pressed to GET calc key
    SET num2 to GET keyboard input
    SET result
    IF plus pressed
        result = addnum (num1, num2)
    ELSE IF minus pressed
        result = subtractnum (num1, num2)
    ELSE IF multiply pressed
        result = multiplynum (num1, num2)
    ELSE IF divide pressed
        result = dividenum (num1, num2)
    ELSE IF squared pressed
        result = squarednum (num1)
    ENDIF
    DISPLAY result
END

BEGIN SUBROUNTINE addnum(a, b)
    return a + b
END SUBROUNTINE

BEGIN SUBROUNTINE subtractnum(a, b)
    return a - b
END SUBROUNTINE

BEGIN SUBROUNTINE multiplynum(a, b)
    return a * b
END SUBROUNTINE

BEGIN SUBROUNTINE dividenum(a, b)
    return a / b
END SUBROUNTINE

BEGIN SUBROUNTINE squarednum(a)
    return a * a
END SUBROUNTINE
*/

var num1; 
var num2;
var process;
var ans;

calc();

function calc()
{
    num1 = Number(prompt("Insert a number between 1 and 10."));
    if (num1 > 10)
    {
        alert("That is not a number between 1 and 10. Please try again");
        calc();
    }
    else if (num1 < 1)
    {
        alert("That is not a number between 1 and 10. Please try again");
        calc();
    }
    else if (num1 == NaN)
    {
        alert("That is not a number between 1 and 10. Please try again");
        calc();
    }
    else
    {
        process = prompt("Please enter either Add, Subtract, Multiply, Divide or Square.");
        if (process === "Add" || process === "add" || process === "+" || process === "plus" || process === "Plus")
        {
            ans = addnum (num1);
        }
        else if (process === "Subtract" || process === "subtract" || process === "-")
        {
            ans = subtractnum (num1);
        }
        else if (process === "Multiply" || process === "multiply" || process === "*" || process === "x" || process === "times" || process === "Times")
        {
            ans = multiplynum (num1);
        }
        else if (process === "Divide" || process === "divide" || process === "/")
        {
            ans = dividenum (num1);
        }
        else if (process === "Squared" || process === "squared" || process === "^2")
        {
            ans = squarednum (num1);
        }
    }
    alert(ans);
}

function addnum(a)
{
    num2 = Number(prompt("Insert a number between 1 and 10."));
            if (num2 > 10)
            {
                alert("That is not a number between 1 and 10. Please try again");
                addnum(a);
            }
            else if (num2 < 1)
            {
                alert("That is not a number between 1 and 10. Please try again");
                addnum(a);
            }
            else if (num2 == NaN)
            {
                alert("That is not a number between 1 and 10. Please try again");
                addnum(a);
            }
            else
            {
                return a + num2;
            }
}

function subtractnum(a)
{
    num2 = prompt("Insert a number between 1 and 10.");
            if (num2 > 10)
            {
                alert("That is not a number between 1 and 10. Please try again");
                subtractnum(a);
            }
            else if (num2 < 1)
            {
                alert("That is not a number between 1 and 10. Please try again");
                subtractnum(a);
            }
            else if (num2 == NaN)
            {
                alert("That is not a number between 1 and 10. Please try again");
                subtractnum(a);
            }
            else
            {
                var b = num2;
                return a-b;
            }
}

function multiplynum(a)
{
    num2 = prompt("Insert a number between 1 and 10.");
            if (num2 > 10)
            {
                alert("That is not a number between 1 and 10. Please try again");
                multiplynum(a);
            }
            else if (num2 < 1)
            {
                alert("That is not a number between 1 and 10. Please try again");
                multiplynum(a);
            }
            else if (num2 == NaN)
            {
                alert("That is not a number between 1 and 10. Please try again");
                multiplynum(a);
            }
            else
            {
                var b = num2;
                return a*b;
            }
}

function dividenum(a)
{
    num2 = prompt("Insert a number between 1 and 10.");
            if (num2 > 10)
            {
                alert("That is not a number between 1 and 10. Please try again");
                dividenum(a);
            }
            else if (num2 < 1)
            {
                alert("That is not a number between 1 and 10. Please try again");
                dividenum(a);
            }
            else if (num2 == NaN)
            {
                alert("That is not a number between 1 and 10. Please try again");
                dividenum(a);
            }
            else
            {
                var b = num2;
                return a/b;
            }
}

function squarednum(a)
{
    return a*a;
}