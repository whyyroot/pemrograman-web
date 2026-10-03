function proses(){
    var namastr = (document.fform.nama.value);
    var nimstr = (document.fform.nim.value);
    var jkstr = (document.fform.jk.value);
    var agstr = (document.fform.ag.value);
    var jstr = (document.fform.j.value);
    var kstr = (document.fform.k.value);
    var str = "";
    document.fform.onama.value = namastr;
    document.fform.onim.value = nimstr;
    document.fform.ojk.value = jkstr;
    document.fform.oag.value = agstr;
    document.fform.oj.value = jstr;
    document.fform.ok.value = kstr;
   
    if(fform.st.checked == true){
        str="Nikah";
        document.fform.ost.value = str;
    }
    else{
        str="Belum nikah";
        document.fform.ost.value = str;
    }
}