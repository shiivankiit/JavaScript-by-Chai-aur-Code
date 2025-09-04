const form = document.querySelector('form')//we need to select the form bcz submit button is present inside the form.
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')

    if(height===''||height<0||isNaN(height)){
        result.innerHTML=`Please geave a valid height  ${height}`;
    }else if (weight===''||weight<0||isNaN(weight)){
        result.innerHTML=`Please geave a valid Weight  ${weight}`;
    }else {
        const bmi=(weight / ((height*height)/10000)).toFixed(2);
        //show the result
        result.innerHTML=`<span>${bmi}</span>`
    }
});

// What ${height} means
// The syntax `${height}` is called template literal interpolation in JavaScript.
// It allows you to embed the value of a variable inside a string.
// Example:
// let height = 170;
// console.log(`The height is ${height}`);