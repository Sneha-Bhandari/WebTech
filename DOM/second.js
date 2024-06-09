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

function formSubmit(event){
    event.preventDefault();

    let input2 = document.getElementById('name').value;
    var nameRegex =  /^[A-Za-z]+$/;
    if(!nameRegex.test(input2)){
        document.getElementById("nameError").innerText='  name should contain alphabet only *';
        event.preventDefault();
    }
    console.log(input2);
   
    
    let input3 = document.getElementById('address').value;
    var addressRegex =  /^[A-Za-z0-9]+$/;
    if(!addressRegex.test(input3)){
        document.getElementById("addressError").innerText='Address is required *';
        event.preventDefault();
    }
    console.log(input3);

    let input5 = document.getElementById('email').value;
    var emailRegex =  /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
    if(!emailRegex.test(input5)){
        document.getElementById("emailError").innerText='Invalid email format *';
        event.preventDefault();
    }
    console.log(input5);
   
    let input4 = document.getElementById('password').value;
    var passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(input4)){
        document.getElementById("passwordError").innerText='password must be strong *';
        event.preventDefault();
    }
    console.log(input4);
}

//validdata= true
// if (   ){
    //validdata= false
//}

 // array ko sum vitra vako nested array [1[2,3,4[5,6[7,8[9,10[11[ number or array]]]]]]3,5,2] 
 //array vaye loop , number vaye sum by using recursive function

 