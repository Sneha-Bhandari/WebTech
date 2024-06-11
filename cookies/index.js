//Cookies are data, stored in small text files, on your computer.
document.cookie = "username=Sneha Bhandari"; 
document.cookie = "username1=Sujita Rijal";
document.cookie = "username2=Hesela Bhusal";

console.log(document.cookie)

console.log(document.cookie.match("username"))


document.cookie="username4=Arnav Bhandari";
const cookies=document.cookie.split(";");

for(cookie of cookies){
    const data=(cookie.split("=")).toString();
    if(data.includes("username4")){
        
    }
}


//function setCookie(cname, cvalue, exdays) {
    //const d = new Date();
   // d.setTime(d.getTime() + (exdays*24*60*60*1000));
   // let expires = "expires="+ d.toUTCString();
   // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  //}