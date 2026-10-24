# PRAKTIKUM 4 CSS Lanjutan
<br>
Nama : Irvan Wahyudin <br>
Nim : 312510359
<br><br>


dan berikut adalah [jawaban soal-soal](#Jawab-Pertanyaan-Berikut) dari modul.<br>
Try for html me >>><a href="https://whyyroot.github.io/pemrograman-web/praktikum-3-css-dasar/lab2_css_dasar.html"><img src="https://img.shields.io/badge/CLICK_IN_HERE-8A2BE2"/></a>  
<h3>Membuat Struktur HTML</h3>
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>
<details>
<summary><b>📂 Klik untuk melihat Source Code HTML</b></summary>
  
```      
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wisata Alam</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="container">
    </div>
</body>

</html>
```

</details>
   </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-3-css-dasar/Screenshot_1.jpg" width="450" height="450">
    </td>
  </tr>
</table>

1. `` <meta name="viewport" content="width=device-width, initial-scale=1.0"> ``: Tag ini sangat penting untuk membuat halaman web menjadi responsif. Ini menginstruksikan browser agar menyesuaikan lebar halaman dengan ukuran layar perangkat pengguna (seperti di HP atau laptop).
2. ``<header>`` dan ``<nav>`` : Ini adalah elemen semantik HTML5. <header> digunakan sebagai wadah untuk bagian kepala konten (judul halaman), sedangkan <nav> digunakan khusus sebagai wadah untuk tautan menu navigasi antarkelaman.
3. - ``<div id="intro">``: Tag <div> (division) adalah wadah atau kontainer kosong yang digunakan untuk mengelompokkan beberapa elemen.
   - Atribut ``id="intro"`` memberikan identitas unik pada wadah tersebut. Nantinya, identitas ini akan dipanggil oleh kode CSS untuk mengatur desain khusus pada area perkenalan ini.
4. ``class="button btn-primary"``: Atribut class pada tag <a> berfungsi untuk memberikan nama kelompok gaya. Berbeda dengan id yang unik, class bisa digunakan berulang kali.


<h3>Menambahkan CSS Internal</h3>
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>
<details>
<summary><b>📂 Klik untuk melihat Source Code HTML</b></summary>
      
  ```
<header>
            <h1>WISATA ALAM</h1>
        </header>
        <nav>
            <a href="home.html" class="active">Home</a>
            <a href="artikel.html">Artikel</a>
            <a href="about.html">About</a>
            <a href="kontak.html">Kontak</a>
        </nav>
        <section id="hero"></section>
        <section id="wrapper">
            <section id="main"></section>
            <aside id="sidebar"></aside>
        </section>
        <footer>
            <p>&copy; 2021 - Wisata Alam Indonesia</p>
        </footer>
```
</details>
<details>
<summary><b>📂 Klik untuk melihat Source Code CSS</b></summary>
  
```
/* import google font */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap');

/* Reset CSS */
* {
    margin: 0;
    padding: 0;
}

body {
    line-height: 1;
    font-size: 100%;
    font-family: 'Open Sans', sans-serif;
    color: #5a5a5a;
}

#container {
    width: 980px;
    margin: 0 auto;
    box-shadow: 0 0 1em #cccccc;
}

/* header */
header {
    padding: 20px;
}

header h1 {
    margin: 20px 10px;
    color: #b5b5b5;
}

/* navigasi */
nav {
    display: block;
    background-color: #1f5faa;
}

nav a {
    padding: 15px 30px;
    display: inline-block;
    color: #ffffff;
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
}

nav a.active,
nav a:hover {
    background-color: #2b83ea;
}
```
</details>
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-3-css-dasar/Screenshot_3.jpg" width="450" height="450">
  </td>
  </tr>
</table>

1. `` body { ... } ``: Memberikan gaya untuk seluruh isi halaman web.
   - ``font-family: 'Open Sans', sans-serif;``: Mengubah jenis huruf dasar seluruh halaman menjadi "Open Sans". Jika font tersebut tidak tersedia di perangkat pengguna, browser akan menggunakan font cadangan bertipe sans-serif.
2. ``header { ... }`` : Memberikan gaya khusus untuk elemen ``<header>``.
   - ``min-height: 80px;`` : Menetapkan tinggi minimal area header sebesar 80 piksel.
   - ``border-bottom: 1px solid #77CCEF;`` : Membuat garis pembatas di bagian bawah header dengan ketebalan 1 piksel, berbentuk garis tegas (solid), dan berwarna biru muda ``(#77CCEF)``.
3. ``h1 { ... }`` : Mengatur tampilan teks judul ``<h1>``.
   - ``font-size: 24px;`` : Mengatur ukuran huruf judul menjadi 24 piksel.
   - ``color: #0F189F;`` : Mengubah warna teks judul menjadi biru tua.
   - ``text-align: center;`` : : Mengatur posisi teks agar berada persis di tengah halaman (rata tengah).
   - ``padding: 20px 10px;`` : Memberikan ruang kosong di dalam elemen (jarak antara batas elemen dengan teks). Angka 20px untuk jarak atas-bawah, dan 10px untuk jarak kiri-kanan.
5. ``h1 i { ... }`` : Ini adalah descendant selector. Aturan ini hanya akan berlaku untuk tag`` <i>`` (teks miring) yang posisinya berada di dalam tag ``<h1>``.
   - ``color: #6d6a6b;`` : Mengubah warna teks khusus pada bagian "Inline CSS" (yang diapit tag ``<i>`` di HTML Anda sebelumnya) menjadi warna abu-abu.



<h3>Menambahkan External CSS</h3>

<table border="0">
  <tr>
    <td valign="top"><h3>Code</h3>
<details>
<summary><b>📂 Klik untuk melihat Source Code HTML</b></summary>
  
Tambahkan di antara ``<section id="hero"> ... </section>``
      
  ```
  <h1>Selamat Datang Di Wisata Alam</h1>
  <p>Temukan keindahan alam nusantara yang tak terjamah, dari pantai tropis yang mempesona hingga pegunungan
    megah yang menantang. Mulai petualangan Anda dan pelajari kekayaan budaya serta keanekaragaman hayati
    Indonesia bersama kami.</p>
  <a href="home.html" class="btn btn-large">Learn more &raquo;</a>
```
</details>
<details>
<summary><b>📂 Klik untuk melihat Source Code CSS</b></summary>
  
```
/* Hero Panel */
#hero {
  background-color: #e4e4e5;
  padding: 50px 20px;
  margin-bottom: 20px;
}
#hero h1 {
  margin-bottom: 20px;
  font-size: 35px;
}
#hero p {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 25px;
}
```
</details>
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-3-css-dasar/Screenshot_4.jpg" width="450" height="450">
  </td>
  </tr>
</table>

1. ``nav { ... }`` : Mengatur tampilan dasar wadah navigasi.
   - ``background: #20A759;`` memberikan warna latar hijau.
   - ``color: #fff;`` membuat warna dasar teks menjadi putih.
   - ``padding: 10px;`` memberi jarak kosong di bagian dalam kotak sebesar 10 piksel agar tidak menempel di tepi.
2. ``nav a { ... }`` : Mengatur tampilan teks tautan (link) di dalam navigasi.
   - ``text-decoration: none;`` berfungsi untuk menghilangkan garis bawah bawaan yang biasanya ada pada setiap link.
   - ``padding: 10px 20px;`` memperluas area tautan sehingga menyerupai tombol yang nyaman untuk diklik.
3. ``nav .active, nav a:hover { ... }`` : Mengatur efek visual dan status aktif.
   - ``:hover`` adalah pseudo-class yang memicu perubahan ketika kursor mouse diarahkan ke atas link tersebut. Latar belakangnya akan berubah menjadi hijau tua (#0B6B3A).
   - ``.active`` adalah class yang biasanya ditambahkan secara manual pada HTML untuk menandai menu halaman mana yang sedang dibuka oleh pengguna saat ini, sehingga menu tersebut akan terus berwarna hijau tua.
4. ``<link rel="stylesheet" href="style_eksternal.css" type="text/css">`` : Ini adalah metode penerapan External CSS.
   - Tag ini harus diletakkan di dalam blok ``<head>`` pada dokumen HTML Anda.
   - Atribut ``href="style_eksternal.css"`` berfungsi untuk mengimpor atau menghubungkan halaman HTML tersebut dengan sebuah file CSS terpisah yang bernama ``style_eksternal.css``.
      

<h3>Menambahkan CSS Selector</h3>

<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>
<details>
<summary><b>📂 Klik untuk melihat Source Code HTML</b></summary>
  
Tambahkan di antara ``<section id="hero"> ... </section>``
      
  ```
<div class="widget-box">
  <h3 class="title">Artikel Populer</h3>
   <ul>
     <li><a href="#">Top 10 Pantai Tersembunyi di Indonesia</a></li>
     <li><a href="#">Menjelajahi Taman Nasional Komodo</a></li>
     <li><a href="#">Tips Berwisata Ramah Lingkungan</a></li>
     <li><a href="#">Kuliner Khas Jawa yang Wajib Dicoba</a></li>
     <li><a href="#">Transportasi Antar Pulau di Indonesia</a></li>
   </ul>
</div>
<div class="widget-box">
  <h3 class="title">Berita Terkini</h3>
  <p>Pemerintah Indonesia meluncurkan program Visa Digital Nomad untuk mendukung pekerja jarak jauh
     nternasional yang ingin bekerja sambil menikmati keindahan alam Indonesia. Informasi lebih
     lanjut tersedia di portal imigrasi.</p>
</div>
```
</details>
<details>
<summary><b>📂 Klik untuk melihat Source Code CSS</b></summary>
  
```
/* main content */
#wrapper {
    margin: 0;
}

#main {
    float: left;
    width: 640px;
    padding: 20px;
}

/* sidebar area */
#sidebar {
    float: left;
    width: 260px;
    padding: 20px;
}

/* widget */
.widget-box {
    border: 1px solid #eee;
    margin-bottom: 20px;
}

.widget-box .title {
    padding: 10px 16px;
    background-color: #428bca;
    color: #fff;
}

.widget-box ul {
    list-style-type: none;
}

.widget-box li {
    border-bottom: 1px solid #eee;
}

.widget-box li a {
    padding: 10px 16px;
    color: #333;
    display: block;
    text-decoration: none;
}

.widget-box li:hover a {
    background-color: #eee;
}

.widget-box p {
    padding: 15px;
    line-height: 25px;
}
```
</details>
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-3-css-dasar/Screenshot_5.jpg" width="450" height="450">
  </td>
  </tr>
</table>

<h3>Menambahkan CSS Selector</h3>

<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>
<details>
<summary><b>📂 Klik untuk melihat Source Code CSS</b></summary>
  
```
/* footer */
footer {
    clear: both;
    background-color: #1d1d1d;
    padding: 20px;
    color: #eee;
}
```
</details>
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-3-css-dasar/Screenshot_5.jpg" width="450" height="450">
  </td>
  </tr>
</table>

<h3>Menambahkan CSS Selector</h3>

<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>
<details>
<summary><b>📂 Klik untuk melihat Source Code HTML</b></summary>
  
Tambahkan di antara ``<section id="main"> ... </section>``
      
  ```
<div class="row">
  <div class="box">
    <img src="img/raja_ampat.jpeg" alt="raja ampat" class="image-circle">
    <h3>Surga Bawah Laut</h3>
    <p>Jelajahi terumbu karang warna-warni dan kehidupan laut eksklusif di perairan Raja Ampat dan
      Labuan Bajo. Terumbu karang paling beragam di dunia menanti Anda.</p>
    <a href="#" class="btn btn-default">View detail</a>
  </div>
  <div class="box">
    <img src="img/bromo.jpeg" alt="gunung bromo" class="image-circle">
    <h3>Petualangan Gunung Berapi</h3>
    <p>Taklukkan puncak-puncak dramatis seperti Bromo dan Rinjani. Nikmati pemandangan matahari
      terbit yang menakjubkan dan kawah yang mengagumkan.</p>
    <a href="#" class="btn btn-default">View detail</a>
  </div>
  <div class="box">
    <img src="img/candi-borobudur.jpg" alt="candi borobudur" class="image-circle">
    <h3>Warisan Budaya</h3>
    <p>Rasakan kekayaan sejarah dan spiritualitas di Candi Borobudur dan situs warisan UNESCO
      lainnya. Pelajari tradisi lokal yang hidup.
      euismod.</p>
    <a href="#" class="btn btn-default">View detail</a>
  </div>
</div>
```
</details>
<details>
<summary><b>📂 Klik untuk melihat Source Code CSS</b></summary>
  
```
/* box */
.box {
    display: block;
    float: left;
    width: 33.333333%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 0 10px;
    text-align: center;
}

.box h3 {
    margin: 15px 0;
}

.box p {
    line-height: 20px;
    font-size: 14px;
    margin-bottom: 15px;
}

.box img {
    width: 110px;
    height: 110px;
    border: 0;
    vertical-align: middle;
    object-fit: cover;
}

.image-circle {
    border-radius: 50%;
}

.row {
    margin: 0 -10px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.row:after,
.row:before,
.entry:after,
.entry:before {
    content: '';
    display: table;
}

.row:after,
.entry:after {
    clear: both;
}
```
</details>
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-3-css-dasar/Screenshot_5.jpg" width="450" height="450">
  </td>
  </tr>
</table>


<h3>Menambahkan CSS Selector</h3>

<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>
<details>
<summary><b>📂 Klik untuk melihat Source Code HTML</b></summary>
  
Tambahkan di antara ``<section id="main"> ... </section>``,
dibawahnya ``<div class="row"> ... </div>``
      
  ```
<hr class="divider" />
<article class="entry">
  <h2>Destinasi Bulan Ini: Bali</h2>
  <img src="img/bali.jpeg" alt="bali">
  <p>Bali, Pulau Dewata, menawarkan lebih dari sekadar pantai. Temukan ketenangan di Ubud,
    pelajari tarian tradisional, dan nikmati kuliner lokal. Rasakan harmoni antara manusia,
    alam, dan budaya. Dapatkan panduan wisata lengkap dan penawaran eksklusif untuk perjalanan
  Anda.</p>
</article>
<hr class="divider" />
<article class="entry">
  <h2>Destinasi Impian: Banda Neira</h2>
  <img src="img/banda-neira.jpeg" alt="banda neira" class="right-img">
  <p>Banda Neira, kepingan surga di Maluku Tengah, menawarkan perpaduan memukau antara kekayaan
    sejarah dan pesona alam. Jelajahi benteng-benteng kolonial yang megah, nikmati keindahan taman
    laut yang eksotis, dan saksikan kemegahan Gunung Api Banda dari kejauhan. Tempat yang pernah
    menjadi pusat rempah-rempah dunia ini adalah destinasi wajib bagi pecinta wisata bahari dan
    sejarah.</p>
</article>
```
</details>
<details>
<summary><b>📂 Klik untuk melihat Source Code CSS</b></summary>
  
```
.divider {
    border: 0;
    border-top: 1px solid #eeeeee;
    margin: 40px 0;
}

/* entry */

.entry {
    margin: 15px 0;
}

.entry h2 {
    margin-bottom: 20px;
}

.entry p {
    line-height: 25px;
}

.entry img {
    width: 150px;
    height: 150px;
    float: left;
    border-radius: 5px;
    margin-right: 15px;
    object-fit: cover;
}

.entry .right-img {
    float: right;
}   
```
</details>
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-3-css-dasar/Screenshot_5.jpg" width="450" height="450">
  </td>
  </tr>
</table>
1. ID Selector (``#intro`` dan ``#intro h1``)
   - ``#intro`` : Menargetkan elemen HTML yang memiliki atribut ``id="intro"``. Kode ini memberikan warna latar kebiruan (``#418fb1``), garis tepi (border) berwarna hijau setebal 1 piksel, tinggi minimal 100 piksel, dan jarak ke dalam (padding) 10 piksel.
   - ``#intro h1`` : Descendant selector ini hanya menargetkan tag ``<h1>`` yang berada di dalam kontainer ``#intro``. Teks judul tersebut diubah menjadi putih (``color: #fff;``) dan rata kiri (``text-align: left;``). Aturan ini akan menimpa desain ``<h1>`` sebelumnya yang diatur rata tengah.
2. Class Selector (.button dan .btn-primary)
   - ``.button`` : Menargetkan elemen dengan atribut ``class="button"``. Kode ini menyulap teks biasa menjadi bentuk tombol dengan memberikan latar belakang abu-abu (``#bebcbd``), teks putih, menghapus garis bawah tautan (``text-decoration: none;``), dan memberikan jarak (padding dan margin).
   - ``display: inline-block;`` : Properti penting pada ``.button`` agar elemen inline seperti ``<a>`` bisa menerima pengaturan tinggi, lebar, margin, dan padding secara sempurna layaknya sebuah balok, tetapi tetap berjejer ke samping layaknya teks.
   - ``.btn-primary`` : Ini adalah kelas modifikasi (modifier) yang tugasnya hanya satu, yaitu menimpa warna latar belakang menjadi merah (``#E42A42``).


# Jawab Pertanyaan Berikut
1. Lakukan eksperimen dengan mengubah dan menambah properti dan nilai pada kode CSS
dengan mengacu pada CSS Cheat Sheet yang diberikan pada file terpisah dari modul ini.
  - Menambahkan ``border-radius: 10px;`` pada ``.button`` untuk membuat sudut tombol menjadi melengkung atau membulat.
  - Menambahkan warna backgroud pada body untuk mengubah seluruh latar belakang halaman.
  - menambahkan ``box-shadow: 2px 2px 5px black;`` pada ``#intro`` untuk memberikan efek bayangan pada kotak.
    <details>
    <summary><b>📂 Hasil experimen</b></summary>
    <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-3-css-dasar/Screenshot_6.jpg" width="450" height="450">
    </details>

2. Apa perbedaan pendeklarasian CSS elemen ``h1 {...}`` dengan ``#intro h1 {...}``? berikan penjelasannya!
  - ``h1 {...}`` (Element Selector): Deklarasi ini bersifat global. Gaya yang didefinisikan di dalamnya akan diterapkan pada seluruh tag ``<h1>`` yang ada di dokumen HTML tersebut, di mana pun letaknya.
  - ``#intro h1 {...}`` (Descendant Selector): Deklarasi ini bersifat spesifik. Gaya ini hanya akan diterapkan pada tag ``<h1>`` yang posisinya berada di dalam elemen yang memiliki atribut ``id="intro"``. Tag ``<h1>`` yang berada di luar elemen ``#intro`` tidak akan terpengaruh. Deklarasi ini memiliki bobot spesifisitas (prioritas) yang lebih tinggi daripada h1 biasa.
3. Apabila ada deklarasi CSS secara internal, lalu ditambahkan CSS eksternal dan inline
CSS pada elemen yang sama. Deklarasi manakah yang akan ditampilkan pada browser?
Berikan penjelasan dan contohnya!
  - Inline CSS memiliki spesifisitas paling tinggi (prioritas utama) karena gaya tersebut ditulis langsung menempel pada tag HTML-nya.
  - Jika Inline CSS tidak ada, browser akan melihat Internal CSS dan Eksternal CSS. Di antara keduanya, deklarasi yang ditulis paling akhir (paling bawah) di dalam bagian ``<head>`` yang akan menang.
  - contoh dalam backgroud body
    
    <details>
      <summary><b>📂 Code experimen</b></summary>
      
      ```
      <head>
      <!-- Eksternal CSS mengatur body menjadi warna BIRU -->
      <link rel="stylesheet" href="style.css">
      
      <!-- Internal CSS mengatur body menjadi warna HIJAU -->
      <style>
          body { background: green; }
      </style>
      </head>
      <!-- Inline CSS mengatur body menjadi warna MERAH -->
      <body style="background: red;">
          <p>backgroud akan berubah menjadi warna merah.</p>
      </body>
  
      ```
    </details>
    <details>
      <summary><b>📂 Hasilnya</b></summary>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-3-css-dasar/Screenshot_7.jpg" width="450" height="450">
    </details>
5. Pada sebuah elemen HTML terdapat ID dan Class, apabila masing-masing selector
tersebut terdapat deklarasi CSS, maka deklarasi manakah yang akan ditampilkan pada
browser? Berikan penjelasan dan contohnya! ( ``<p id="paragraf-1" class="textparagraf">``
)
  - Apabila sebuah elemen memiliki ID dan Class secara bersamaan, dan keduanya memiliki deklarasi CSS yang saling bertabrakan (misalnya mengatur warna yang berbeda), maka deklarasi dari ID Selector yang akan ditampilkan pada browser.
  - karena ID memiliki bobot spesifisitas yang jauh lebih tinggi dibandingkan Class. ID dirancang untuk menjadi penanda unik (hanya boleh ada satu di satu halaman), sehingga browser memprioritaskan gaya pada ID tersebut di atas kelas yang bisa dipakai berulang kali.
  - contohnya
    
    <details>
      <summary><b>📂 Code experimen</b></summary>
      
     ```
    <style>
    #kotak-utama { background: red; } /* ID Selector */
    .kotak { background: blue; }     /* Class Selector */
    </style>

    <!-- Elemen memiliki ID dan Class -->
    <div id="kotak-utama" class="kotak">
        Warna latar elemen ini adalah MERAH.
    </div>

    ```
    </details>
    <details>
      <summary><b>📂 Hasilnya</b></summary>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-3-css-dasar/Screenshot_8.jpg" width="450" height="450">
    </details>
