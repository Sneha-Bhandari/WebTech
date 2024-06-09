//Cookies are data, stored in small text files, on your computer.
document.cookie = "username=John Doe";
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }