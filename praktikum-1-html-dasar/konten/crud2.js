var akses=document.getElementById("t-login");
akses.innerHTML= "Akses Terbuka";
var ListBarang = ["Buku","Sendal","Baju"];

function ShowBarang(){
    var Showbarang = document.getElementById("show-barang");
    Showbarang.innerHTML= "";
    var Showfungsi = document.getElementById("show-fungsi");
    Showfungsi.innerHTML="";
for(var a=0;a<ListBarang.length;a++){
    var BtnEdit = "<a href='#' onclick='EditBarang("+a+")'>Edit</a>";
    var BtnDelete= "<a href='#' onclick='DeleteBarang("+a+")'>Delete</a>";

    Showbarang.innerHTML += "<li>"+ListBarang[a];  
    Showfungsi.innerHTML += "<li>["+BtnEdit+"|"+BtnDelete+"]</li>";
}
}

function TambahBarang(){
    var tambah = document.querySelector("input[name=barang]")
    ListBarang.push(tambah.value);

    ShowBarang()
}
function EditBarang(id){
    var rubah="";
    var edit = prompt("Merubah dengan nama apa?"+rubah,ListBarang[id])
    ListBarang[id]=edit;
    while(ListBarang[id] == ""){
        rubah +="Masukan nama barang!";       
        EditBarang(id);
    }

ShowBarang();
}
function DeleteBarang(id){

    ListBarang.splice(id,1);

ShowBarang();
}
ShowBarang();

