var akses = document.getElementById("t-login");
akses.innerHTML= "<a href='#' onclick='login()'>Buka Akses</a>"
function login(){
    
    var Kesempatan= 3;
/*
do{
    var pw = prompt("Masukan password website 'CRUD'...");
if(coba<=0){
    alert("Kesempatan anda telah habis");
    history.go(-1);
}
else{
C
}

coba=coba-1;
}
while(pw == "CRUD"){
    alert("Selamat Anda Mendapatkan Akses");
    location.replace("./crud2.php");
}*/

coba();
function coba(){
    var pw = prompt("Masukan password website 'CRUD'...");
if(pw== "CRUD"){
    alert("Selamat Anda Mendapatkan Akses");
    location.replace("./crud2.html","_self");
}
else if(Kesempatan>0){
alert("Kata sandi SALAH, sisa kesempatan : "+Kesempatan);
Kesempatan=Kesempatan-1;
coba();
}
else{
    alert("Kesempatan anda telah habis");
    history.go(-1);
}}
}