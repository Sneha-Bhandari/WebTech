//form handling:
//name,contact,email,gender,address,Description,DOB,username,password,faculty,batch,

function formSubmit(event){

  event.preventDefault();
 let a = document.getElementById("name").value;
 console.log(a);

 let b=document.getElementById("2").value;
 console.log(b);

 let c= document.getElementById("email").value;
 console.log(c);

 let d= document.getElementById("password").value;
 console.log(d);

 //let e= document.getElementById("number").value;
 //console.log(e);

 let f=document.getElementById("6").value;
 console.log(f);

 let g= document.getElementById("7").value;
 console.log(g);

 let h=document.querySelector('input[name="gender1"]:checked').value;
 console.log(h);

 let i=document.getElementById("9").value;
 console.log(i);

 let j= document.getElementById("10").value;
 console.log(j);


}

// name: /^[A-Z a-z]+$/
// number: /^[9][7-8][0-9]{8}$/
// email: /^[a-zA-Z0-9]+[@][a-z]+[.][a-z]+$/
// Regular expressions
const nameRegex = /^[A-Za-z]+$/;
const numberRegex = /^[9][7-8][0-9]{8}$/;
const emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;

// Function to validate form
function validateForm() {
    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');
    const emailInput = document.getElementById('email');

    const name = nameInput.value.trim();
    const number = numberInput.value.trim();
    const email = emailInput.value.trim();

    if (!nameRegex.test(name)) {
        alert('Please enter a valid name');
        nameInput.focus();
        return false;
    }

    if (!numberRegex.test(number)) {
        alert('Please enter a valid number starting with 97 or 98 and has 10 digits');
        numberInput.focus();
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        emailInput.focus();
        return false;
    }

    return true;
}




const form = document.getElementById('form');

// function validateName(Fname){
//     const nameRegex = /^[A-Za-z]+$/;
//     return nameRegex.test(Fname);
// }


function formSubmit(event){
    event.preventDefault();

    let input2 = document.getElementById('name').value;
    const nameRegex =  /^[A-Za-z]+$/;
    console.log(nameRegex.test(input2));
   
    let input3 = document.querySelector('input[name="gender1"]:checked').value;
    const genderRegex = /^(male|female)$/;
    console.log(genderRegex.test(input3));

   let input4 = document.getElementById('password').value
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    console.log(passwordRegex.test(input4));

}