function proses(){
    var namad = (document.fform.nama.value);
    var tujuand = (document.fform.tujuan.value);
    var kelasd = (document.fform.kelas.value);
    var jtiketd = parseFloat(document.fform.jtiket.value);
    if(isNaN(jtiketd)){
        alert("Silakan Input Nama & Jumlah Tiket!");
    }
 else if(namad==""){
       alert("Silakan Input Nama & Jumlah Tiket!");
    }
    else{
    var ht = "";
    var st = "";
    var d = "";
    var tb = ""; 

    if(tujuand == "jakarta"){
        if(kelasd == "esekutif"){
            
            ht = 70000;
        }
        else if (kelasd == "bisnis"){
            ht = 40000;
        }
        else{
            ht = 10000;
        }
    }
    else if(tujuand == "solo"){
        if(kelasd == "esekutif"){
            ht = 80000;
        }
        else if(kelasd == "bisnis"){
            ht = 50000;
        }
        else{
            ht = 20000;
        }
    }
    else{
        if(kelasd == "esekutif"){
            ht = 90000;
        }
        else if(kelasd == "bisnis"){
            ht = 60000;
        }
        else{
            ht = 30000;
        }
    }
    st = ht*jtiketd;
    if(document.fform.member.checked==true){
        d = st * 0.10;
    }
    else{
        d = 0.0;
    }
    
    tb = st - d;
    document.fform.oht.value=eval(ht);
    document.fform.ost.value =eval(st);
    document.fform.od.value=eval(d);
    document.fform.otb.value=eval(tb);
   }
}