//Overview:We need to change the color of body according to the button clicked.
//So first we select the button and body 

const btn=document.querySelectorAll('.button')
const body=document.querySelector('body')

//No we need to iterate through btn using loop..so we use forEach loop bcz it is Node list.

btn.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);//you will get attribute and value of the btn.
    
    if(e.target.id==='grey'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='blue'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='yellow'){
        body.style.backgroundColor=e.target.id
    }
  })
})
