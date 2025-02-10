function calculate (op)
{
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let result;

    if (isNaN(num1) || isNaN(num2))
    {
        result = "Please enter valid numbers.";
    }

    else
    {
        switch (op)
        {
            case '+':
                result =   `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
                break;
        
            case '-':
                result = `The difference of ${num1} and ${num2} is ${num1 - num2}.`;
                break;
            
            case '*':
                result = `The product of ${num1} and ${num2} is ${num1 * num2}.`;
                break;

            case '/':
                    result = `The quotient of ${num1} and ${num2} is ${num1 / num2}.`;
                break;

            case '%':
                result = `The remainder of ${num1} and ${num2} is ${num1 % num2}.`;
                break;
        }
    }
    document.getElementById('result').textContent = result;
}
