# PRAKTIKUM 1 HTML DASAR
<br>
Nama : Irvan Wahyudin <br>
Nim : 312510359

<h3>Struktur Dasar HTML</h3>
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>

```      
<!DOCTYPE html>
<html>

<head>
    <title>Praktikum HTML Dasar</title>
</head>

<body>
</body>

</html>

```
   </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/irvanwahyudin01/Tugas-Pemrograman/blob/main/pertemuan%2012/img/per12.1.png" width="450" height="450">
    </td>
  </tr>
</table>

1. `` <!DOCTYPE html> ``itu digunakan untuk menyatakan dokumen menggunakan standar HTML5

2. `` <head> ... </head> ``: Bagian yang berisi informasi meta (metadata) tentang dokumen, seperti pengaturan halaman atau judul, yang tidak ditampilkan langsung di area konten browser.

3. `` <title>Praktikum HTML Dasar</title ``: Elemen di dalam <head> yang menentukan judul halaman web; judul ini akan muncul di tab browser.
4. `` <body> ... </body> ``: Bagian utama yang menampung seluruh konten visual halaman web yang akan dilihat pengguna (seperti teks, gambar, atau tombol). 



<h3>Membuat Paragraf</h3>

Membuat paragraf kita tuliskan di dalam elemen ``<body> .. </body>``
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>
      
  ```
!DOCTYPE html>
<html>

<head>
    <title>Praktikum HTML Dasar</title>
</head>

<body>
    <p>
        Kami sedang belajar HTML dasar pada mata kuliah Pemrograman Web.
        Praktikum ini digunakan untuk mengenal tag-tag dasar HTML.
    </p>
    <p>
        HTML digunakan untuk menyusun struktur dan konten halaman web.
        Browser akan menampilkan hasil interpretasi dari dokumen HTML.
    </p>
</body>

</html>
```
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/irvanwahyudin01/Tugas-Pemrograman/blob/main/pertemuan%2012/img/per12.1.png" width="450" height="450">
  </td>
  </tr>
</table>

1. `` <p> ... </p> ``: Ini adalah tag paragraph (paragraf) dalam HTML. Tag ini berfungsi untuk membuat blok teks atau paragraf baru pada halaman web.



<h3>Menambahkan Judul</h3>

Membuat judul berarti diatas conten yang kita inginkan
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>

  ```
!DOCTYPE html>
<html>

<head>
    <title>Praktikum HTML Dasar</title>
</head>

<body>
    <!-- judul utama -->
    <h1>Belajar Dasar HTML</h1>
    <!-- subjudul -->
    <h2>Paragraf pada HTML</h2>
    <p>
        Kami sedang belajar HTML dasar pada mata kuliah Pemrograman Web.
        Praktikum ini digunakan untuk mengenal tag-tag dasar HTML.
    </p>
    <p>
        HTML digunakan untuk menyusun struktur dan konten halaman web.
        Browser akan menampilkan hasil interpretasi dari dokumen HTML.
    </p>
</body>

</html>
```
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/irvanwahyudin01/Tugas-Pemrograman/blob/main/pertemuan%2012/img/per12.1.png" width="450" height="450">
  </td>
  </tr>
</table>

1. `` <!-- judul utama --> `` dan ``<!-- subjudul -->`` adalah tag komentar, Komentar digunakan untuk memberikan informasi tambahan atau sebagai penanda pada bagian kode bagi programmer.

2. `` <h1>Belajar Dasar HTML</h1> `` Ini adalah tag heading, Heading digunakan sebagai judul atau subjudul pada sebuah halaman web. Tag ``<h1>`` merupakan level utama, yang berarti ini adalah judul utama dari halaman tersebut.

3. `` <<h2>Paragraf pada HTML</h2> `` ini merupakan tag heading level kedua. Tag ``<h2>`` ditempatkan setelah ``<h1>`` dan digunakan sebagai subjudul.
 

<h3>Memformat Text</h3>

kita coba format text seperti ``<strong>, <b>, <em>, <mark>, <small>, <del>, dan <ins>``
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>

```
<!DOCTYPE html>
<html>

<head>
    <title>Praktikum HTML Dasar</title>
</head>

<body>
    <!-- judul utama -->
    <h1>Belajar Dasar HTML</h1>
    <!-- subjudul -->
    <h2>Paragraf pada HTML</h2>
    <p>
        Kami sedang belajar <b>HTML dasar</b> pada mata kuliah Pemrograman Web.
        Praktikum ini digunakan untuk mengenal tag-tag dasar HTML.
    </p>
    <p>
        HTML digunakan untuk menyusun <strong>struktur dan konten</strong> halaman web.
        Browser akan menampilkan hasil interpretasi dari dokumen HTML.
    </p>
    <p>
        Latihan pemformatan lainnya: Kita bisa membuat teks <em>ditekankan</em>,
        atau memberikan <mark>penanda kuning</mark> pada kata penting. Terkadang
        kita butuh teks yang ukurannya <small>lebih kecil</small>. Kita juga bisa
        menandai teks yang <del>dicoret atau salah</del> dan menggantinya dengan
        teks yang baru <ins>disisipkan</ins>.
    </p>
</body>

</html>
```
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/irvanwahyudin01/Tugas-Pemrograman/blob/main/pertemuan%2012/img/per12.1.png" width="450" height="450">
  </td>
  </tr>
</table>

1. `` <em> ... /em>``: (Emphasized text) untuk memberikan penekanan pada kalimat, yang secara bawaan akan ditampilkan dengan huruf miring oleh browser.
2. `` <mark> .. </mark> ``: (Marked text) untuk memberikan efek sorotan atau stabilo pada teks, biasanya ditampilkan dengan latar belakang kuning.
3. `` <small> ... </small> ``: (Smaller text) untuk membuat ukuran huruf pada kata tersebut menjadi lebih kecil dibandingkan teks normal di sekitarnya.
4. `` <del> ... </del> ``: (Deleted text) untuk menandai teks yang dianggap sudah dihapus atau diganti, yang akan ditampilkan dengan coretan garis mendatar di tengah teks.
5. ``<ins> ... </ins> ``: (Inserted text)untuk menandai teks yang baru saja ditambahkan atau disisipkan, biasanya ditampilkan dengan garis bawah (underline).



<h3>Menyisipkan dan Mengatur Ukuran Gambar</h3>
Kita buat folder images untuk menyimpan gambarnya.
<img src="https://github.com/irvanwahyudin01/Tugas-Pemrograman/blob/main/pertemuan%2014/img/per14.2.png" width="250" height="150">
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>

```
<!DOCTYPE html>
<html>

<head>
    <title>Praktikum HTML Dasar</title>
</head>

<body>
    <!-- judul utama -->
    <h1>Belajar Dasar HTML</h1>
    <!-- subjudul -->
    <h2>Paragraf pada HTML</h2>
    <p>
        Kami sedang belajar <b>HTML dasar</b> pada mata kuliah Pemrograman Web.
        Praktikum ini digunakan untuk mengenal tag-tag dasar HTML.
    </p>
    <p>
        HTML digunakan untuk menyusun <strong>struktur dan konten</strong> halaman web.
        Browser akan menampilkan hasil interpretasi dari dokumen HTML.
    </p>
    <p>
        Latihan pemformatan lainnya: Kita bisa membuat teks <em>ditekankan</em>, atau memberikan <mark>penanda
            kuning</mark> pada
        kata penting. Terkadang kita butuh teks yang ukurannya <small>lebih kecil</small>. Kita juga bisa menandai teks
        yang <del>dicoret atau salah</del> dan menggantinya dengan teks yang baru <ins>disisipkan</ins>.
    </p>
    <h3>Menambahkan Gambar</h3>
    <img src="images/profil.jpg" width="200" alt="Foto profil mahasiswa" title="Foto Profil Mahasiswa">
</body>

</html>
```
 </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/irvanwahyudin01/Tugas-Pemrograman/blob/main/pertemuan%2012/img/per12.1.png" width="450" height="450">
  </td>
  </tr>
</table>


1. `` <img ... >`` Ini adalah elemen tag tunggal (tanpa tag penutup) yang digunakan untuk menampilkan gambar ke dalam halaman web.
2. `` src="images/profil.jpg" `` Ini adalah atribut wajib yang menentukan lokasi (path) dari gambar tersebut.
3. `` width="200" `` Atribut ini berfungsi untuk mengatur ukuran lebar gambar menjadi 200 piksel.
4. `` alt="Foto profil mahasiswa" `` Berfungsi sebagai deskripsi alternatif (Alternative Text). Teks ini akan muncul jika gambar gagal dimuat oleh browser (misalnya karena salah ketik nama file atau file tidak ada) dan juga penting bagi pembaca layar.
5. ``title="Foto Profil Mahasiswa" ``Atribut ini memberikan judul atau keterangan tambahan pada gambar. Teks ini biasanya akan muncul sebagai kotak kecil (tooltip) ketika pengguna mengarahkan kursor mouse (hover) ke atas gambar tersebut.



<h3>Menambahkan Hyperlink</h3>
saya menambahkan halaman 2 saya
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>

```
<!DOCTYPE html>
<html>

<head>
    <title>Praktikum HTML Dasar</title>
</head>

<body>
    <!-- judul utama -->
    <h1>Belajar Dasar HTML</h1>
    <!-- subjudul -->
    <h2>Paragraf pada HTML</h2>
    <p>
        Kami sedang belajar <b>HTML dasar</b> pada mata kuliah Pemrograman Web.
        Praktikum ini digunakan untuk mengenal tag-tag dasar HTML.
    </p>
    <p>
        HTML digunakan untuk menyusun <strong>struktur dan konten</strong> halaman web.
        Browser akan menampilkan hasil interpretasi dari dokumen HTML.
    </p>
    <p>
        Latihan pemformatan lainnya: Kita bisa membuat teks <em>ditekankan</em>, atau memberikan <mark>penanda
            kuning</mark> pada
        kata penting. Terkadang kita butuh teks yang ukurannya <small>lebih kecil</small>. Kita juga bisa menandai teks
        yang <del>dicoret atau salah</del> dan menggantinya dengan teks yang baru <ins>disisipkan</ins>.
    </p>

    <h3>Menambahkan Gambar</h3>
    <img src="images/profil.jpg" width="200" alt="Foto profil mahasiswa" title="Foto Profil Mahasiswa">

    <!-- navigasi halaman -->
    <nav>
        <a href="index.html">Dasar HTML</a>
        <a href="halaman2.html">Halaman 2</a>
        <a href="https://www.google.com">Website Eksternal</a>
    </nav>
    <hr>
</body>

</html>
```
 </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/irvanwahyudin01/Tugas-Pemrograman/blob/main/pertemuan%2012/img/per12.1.png" width="450" height="450">
  </td>
  </tr>
</table>


1. `` <nav> ... </nav>`` ini digunakan untuk membungkus atau mengelompokkan elemen-elemen yang berfungsi sebagai tautan navigasi halaman.
2. `` <a href="..."> ... </a> `` Tag <a> (anchor) berfungsi untuk membuat link atau tautan yang menghubungkan ke halaman lain, dengan atribut href sebagai penentu URL atau alamat tujuannya.
3. `` <hr> `` Ini adalah tag pendukung yang berfungsi untuk menambahkan garis horizontal pada halaman web, yang berguna sebagai pemisah antar bagian konten.

