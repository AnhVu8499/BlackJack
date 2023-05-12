function realTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").innerHTML = timeString;
}
setInterval(realTime, 1000);

function openLogin() {
    //const popup = window.open("https://dev5693.deawie29ynm2d.amplifyapp.com/", "Popup", "width=700,height=700");
    const popup = window.open("http://localhost:3000/", "Popup", "width=800,height=1200");
    popup.focus(); 
}

function openRegister() {
    const popup = window.open("http://localhost:3000/signup", "Popup", "width=1000,height=1100");
    popup.focus(); 
}


  window.opener.location.href = "http://127.0.0.1:5501/Gameplay/devApp.html";