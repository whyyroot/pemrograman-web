var list = ["Belajar HTML","Belajar CSS"];

function ShowList(){
    var ShowList = document.getElementById("show-list");
    ShowList.innerHTML="";
    var ShowCek = document.getElementById("show-cek");
    ShowCek.innerHTML ="";
    for(var a=0;a<list.length;a++){
        var ceklis = "<span  id='list-cek' onclick='pilih("+a+")'>X</span>" ;

        ShowList.innerHTML+="<li id='list-konten'>"+list[a]+"</li>";
        ShowCek.innerHTML+="<li>"+ceklis+"</li>";
    }
   
}
function gas(){
var tes = (document.fform.tambah.value);
if(tes==""){
    alert("Anda belum mengisi apapun! ");
}
else{
    var tambah = document.querySelector("input[name=tambah]"); 
        list.push(tambah.value);
        ShowList();
}}

function pilih(id){
list.splice(id,1);

ShowList();
alert("Berhasil Terhapus")
}
ShowList();