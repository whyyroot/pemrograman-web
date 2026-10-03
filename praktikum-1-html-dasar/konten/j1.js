function mulai(){
    var b1 = parseFloat(document.form1.b1.value);
    if(isNaN(b1))
        b1 = 0.0;
    var b2 = parseFloat(document.form1.b2.value);
    if(isNaN(b2))
        b2 = 0.0;
    var p = (document.form2.pilihan.value);
    if(p == "")
        alert("Pilih yang ada ingin lakukan");
    else{
        //tambah
        if (p == "tambah"){var hasil = b1+b2;}
        //kali
        else if(p == "kali"){var hasil = b1*b2;}        
        //else{
            //pengurangan
            else if (p == "kurang"){var hasil = b1-b2;}
            // bagi
            else if (p == "bagi"){var hasil = b1/b2;}
        //}
    alert("hasil penjumlahan = "+hasil);
    }
}