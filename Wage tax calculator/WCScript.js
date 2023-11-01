//alert("Hello, world"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "Debug the innerHTML"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
console.log("Debug the console log"); //Output to the console (Open dev tools and look at the console)

/*
//WAGE/TAX CALCULATOR
START
SET sal to GET keyboard input
IF weekly pressed
    time = 52
    sal = normSal(time)
ELSE IF fortnightly pressed
    time = 26
    sal = normSal(time)
ELSE IF monthly pressed
    time = 12
    sal = normSal(time)
ELSE IF yearly pressed
    sal = sal
END IF 

IF sal >= 0 AND sal <= 19999
    tax = 0.1
    amount = calcTAX(tax, sal)
ELSE IF sal >= 20000 AND sal <= 39999
    tax = 0.2
    sal = sal - 20000
    amount = calcTAX(tax, sal)
ELSE IF sal > 40000
    tax = 0.3
    sal = sal - 40000
    amount = calcTAX(tax, sal)
END IF





START SUBROUTINE calcTAX(a, b)
    IF tax === 0.1
        return b - (b * a)
    ELSE if tax === 0.2
        return (b - (b * a)) + (20000 - (20000 * 0.1))
    ELSE if tax === 0.3
        return (b - (b * a)) + (40000 - (40000 * 0.1)) + (20000 - (20000 * 0.1))
END

START SUBROUNTINE normSal(a)
    return sal * a
END

START SUBROUNTINE printUI (sal, tax)
    DISPLAY "Net salery is: " + sal + ", tax liability is: $" + tax"
END
*/


function calcTAX(tax, sal) 
{
    if (tax === 0.1) 
    {
      return sal - sal * tax;
    } 
    else if (tax === 0.2) 
    {
      return (sal - sal * tax) + (20000 - 20000 * 0.1);
    } 
    else if (tax === 0.3) 
    {
      return (sal - sal * tax) + (40000 - 40000 * 0.1) + (20000 - 20000 * 0.1);
    }
  }
  
  function normSal(a) 
  {
    return sal * a;
  }
  
  function printUI(sal, tax) 
  {
    console.log("Net salary is: $" + sal + ", tax liability is: $" + tax);
  }
  

  var sal = parseFloat(prompt("Enter your salary:"));
  
  if (sal >= 0 && sal <= 19999) 
  {
    var tax = 0.1;
    var amount = calcTAX(tax, sal);
  } 
  else if (sal >= 20000 && sal <= 39999) 
  {
    var tax = 0.2;
    sal -= 20000;
    var amount = calcTAX(tax, sal);
  } 
  else if (sal > 40000) 
  {
    var tax = 0.3;
    sal -= 40000;
    var amount = calcTAX(tax, sal);
  }
  

  var payFrequency = prompt("Enter your pay frequency (weekly, fortnightly, monthly, or yearly):");
  
  if (payFrequency === "weekly") 
  {
    var time = 52;
    sal = normSal(time);
  } 
  else if (payFrequency === "fortnightly") 
  {
    var time = 26;
    sal = normSal(time);
  } 
  else if (payFrequency === "monthly") 
  {
    var time = 12;
    sal = normSal(time);
  } 
 
  
 
amount = calcTAX(tax, sal);

alert("Net salary is: $" + sal + ", tax liability is: $" + amount3);
  