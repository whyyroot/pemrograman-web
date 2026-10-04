# PRAKTIKUM 1 HTML DASAR
<br>
Nama : Irvan Wahyudin <br>
Nim : 312510359

dan berikut adalah [jawaban soal-soal](#Jawab-Pertanyaan-Berikut) dari modul
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
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-1-html-dasar/praktikum-1-1.png" width="450" height="450">
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
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-1-html-dasar/praktikum-1-2.png" width="450" height="450">
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
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-1-html-dasar/praktikum-1-3.png" width="450" height="450">
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
        Kami sedang belajar <b>HTML dasar</b> pada mata
 kuliah Pemrograman Web. Praktikum ini digunakan untuk
mengenal tag-tag dasar HTML.
    </p>
    <p>
        HTML digunakan untuk menyusun <strong>struktur
        dan konten</strong> halaman web. Browser akan
        menampilkan hasil interpretasi dari dokumen HTML.
    </p>
    <p>
        Latihan pemformatan lainnya: Kita bisa membuat
        teks <em>ditekankan</em>, atau memberikan
        <mark>penanda kuning</mark> pada kata penting.
        Terkadang kita butuh teks yang ukurannya
        <small>lebih kecil</small>. Kita juga bisa
        menandai teks yang <del>dicoret atau salah</del>
        dan menggantinya dengan teks yang baru
        <ins>disisipkan</ins>.
    </p>
</body>

</html>
```
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-1-html-dasar/praktikum-1-5.png" width="450" height="450">
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
<img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-1-html-dasar/praktikum-1-4.png" width="250" height="150">
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
        Kami sedang belajar <b>HTML dasar</b> pada mata
 kuliah Pemrograman Web. Praktikum ini digunakan untuk
mengenal tag-tag dasar HTML.
    </p>
    <p>
        HTML digunakan untuk menyusun <strong>struktur
        dan konten</strong> halaman web. Browser akan
        menampilkan hasil interpretasi dari dokumen HTML.
    </p>
    <p>
        Latihan pemformatan lainnya: Kita bisa membuat
        teks <em>ditekankan</em>, atau memberikan
        <mark>penanda kuning</mark> pada kata penting.
        Terkadang kita butuh teks yang ukurannya
        <small>lebih kecil</small>. Kita juga bisa
        menandai teks yang <del>dicoret atau salah</del>
        dan menggantinya dengan teks yang baru
        <ins>disisipkan</ins>.
    </p>
    <h3>Menambahkan Gambar</h3>
    <img src="images/profil.jpg" width="200"
    alt="Foto profil mahasiswa" title="Foto Profil Mahasiswa">
</body>

</html>
```
 </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-1-html-dasar/praktikum-1-6.png" width="450" height="450">
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
        Kami sedang belajar <b>HTML dasar</b> pada mata
 kuliah Pemrograman Web. Praktikum ini digunakan untuk
mengenal tag-tag dasar HTML.
    </p>
    <p>
        HTML digunakan untuk menyusun <strong>struktur
        dan konten</strong> halaman web. Browser akan
        menampilkan hasil interpretasi dari dokumen HTML.
    </p>
    <p>
        Latihan pemformatan lainnya: Kita bisa membuat
        teks <em>ditekankan</em>, atau memberikan
        <mark>penanda kuning</mark> pada kata penting.
        Terkadang kita butuh teks yang ukurannya
        <small>lebih kecil</small>. Kita juga bisa
        menandai teks yang <del>dicoret atau salah</del>
        dan menggantinya dengan teks yang baru
        <ins>disisipkan</ins>.
    </p>
    <h3>Menambahkan Gambar</h3>
    <img src="images/profil.jpg" width="200"
    alt="Foto profil mahasiswa" title="Foto Profil Mahasiswa">
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
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-1-html-dasar/praktikum-1-7.png" width="450" height="450">
      halaman ke 2 saya :
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-1-html-dasar/praktikum-1-9.png" width="450" height="450">
  </td>
  </tr>
</table>


1. `` <nav> ... </nav>`` ini digunakan untuk membungkus atau mengelompokkan elemen-elemen yang berfungsi sebagai tautan navigasi halaman.
2. `` <a href="..."> ... </a> `` Tag <a> (anchor) berfungsi untuk membuat link atau tautan yang menghubungkan ke halaman lain, dengan atribut href sebagai penentu URL atau alamat tujuannya.
3. `` <hr> `` Ini adalah tag pendukung yang berfungsi untuk menambahkan garis horizontal pada halaman web, yang berguna sebagai pemisah antar bagian konten.



<h3>Menambahkan List</h3>
kita tambahkan daftar keahlian dan daftar langkah belajar menggunakan unordered list dan ordered list.
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
        Kami sedang belajar <b>HTML dasar</b> pada mata
 kuliah Pemrograman Web. Praktikum ini digunakan untuk
mengenal tag-tag dasar HTML.
    </p>
    <p>
        HTML digunakan untuk menyusun <strong>struktur
        dan konten</strong> halaman web. Browser akan
        menampilkan hasil interpretasi dari dokumen HTML.
    </p>
    <p>
        Latihan pemformatan lainnya: Kita bisa membuat
        teks <em>ditekankan</em>, atau memberikan
        <mark>penanda kuning</mark> pada kata penting.
        Terkadang kita butuh teks yang ukurannya
        <small>lebih kecil</small>. Kita juga bisa
        menandai teks yang <del>dicoret atau salah</del>
        dan menggantinya dengan teks yang baru
        <ins>disisipkan</ins>.
    </p>
    <h3>Menambahkan Gambar</h3>
    <img src="images/profil.jpg" width="200"
    alt="Foto profil mahasiswa" title="Foto Profil Mahasiswa">

    <h2>Keahlian</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
    <h2>Urutan Belajar</h2>
    <ol>
        <li>Mempelajari struktur HTML</li>
        <li>Mempelajari tag dan atribut</li>
        <li>Membuat halaman HTML</li>
        <li>Menguji halaman pada browser</li>
    </ol>

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
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-1-html-dasar/praktikum-1-8.png" width="450" height="450">
  </td>
  </tr>
</table>


1. `` <ul> ... </ul>`` tag ``<ul>`` (Unordered List) digunakan untuk membuat daftar tanpa nomor.
2. `` <ol> ... </ol> `` tag ``<ol>`` (Ordered List) digunakan untuk membuat daftar berurutan.
3. `` <li> ... </li> `` tag ``<li>`` (List Item) berfungsi untuk mendefinisikan setiap poin atau baris item tunggal yang ada di dalam sebuah daftar.

# Jawab Pertanyaan Berikut
1. Apa fungsi deklarasi ``<!DOCTYPE html>`` pada dokumen HTML?
   - Fungsi deklarasi ``<!DOCTYPE html>`` adalah untuk menyatakan bahwa dokumen tersebut menggunakan standar HTML5. Deklarasi ini ditulis pada bagian paling awal dokumen HTML dan digunakan untuk validasi elemen halaman web.
2. Apa perbedaan antara tag, elemen, dan atribut pada HTML?
   - Tag: Penanda awalan dan akhiran dari sebuah elemen HTML, dibuat dengan kurung siku ``(<...>)`` dan biasanya berpasangan (ada pembuka dan penutup, meskipun ada pengecualian).
   - Elemen: Komponen yang menyusun dokumen HTML, secara sederhana dipahami sebagai kombinasi dari tag pembuka, isi, tag penutup, dan atribut jika diperlukan.
   - Atribut: Memberikan informasi tambahan kepada sebuah elemen, dan biasanya ditulis pada tag pembuka.
3. Apa perbedaan ``<p>`` dengan ``<br>``? Jelaskan penggunaannya.
   - ``<p>`` adalah tag yang digunakan untuk membuat paragraf, yaitu untuk menampilkan teks atau artikel sebagai satu kesatuan blok teks.
   - ``<br>`` adalah tag pendukung yang digunakan untuk berpindah baris (membuat baris baru) di dalam sebuah paragraf atau area teks lainnya, tanpa membuat paragraf baru. Tag ``<br>`` juga merupakan elemen yang tidak memiliki pasangan penutup.
4. Apa fungsi atribut href pada tag ``<a>``?
   - Fungsi atribut href pada tag ``<a>`` (anchor/hyperlink) adalah sebagai penentu URL atau alamat tujuan tautan tersebut.
5. Apa perbedaan hyperlink ke halaman internal dengan hyperlink ke website eksternal?
   - Hyperlink internal: Menghubungkan satu halaman web dengan halaman web lain yang masih berada di dalam situs web yang sama.
   - Hyperlink eksternal: Menghubungkan halaman web ke situs web lain di luar domain saat ini.
6. Apa fungsi atribut src dan alt pada tag ``<img>``?
   - src: Berfungsi untuk menentukan URL atau path (lokasi) file gambar yang akan ditampilkan.
   - alt: Berfungsi untuk memberikan deskripsi tentang gambar tersebut (teks alternatif yang muncul jika gambar gagal dimuat, dan penting untuk aksesibilitas).
7. Apa perbedaan penggunaan ``<ul>`` dan ``<ol>``?
   - ``<ul>`` (Unordered List): Digunakan untuk membuat daftar tanpa nomor (biasanya menggunakan simbol bullet).
   - ``<ol>`` (Ordered List): Digunakan untuk membuat daftar yang berurutan, biasanya menggunakan angka atau huruf berurutan.
8. Apa yang terjadi jika path gambar pada atribut src salah?
   - Jika path gambar pada atribut src salah, maka browser tidak dapat menemukan gambar tersebut dan gambar tidak akan ditampilkan.
9. Mengapa struktur heading h1 sampai h6 perlu digunakan secara terstruktur?
   - Penggunaan terstruktur (berurutan dari level tertinggi ke terendah) penting untuk menunjukkan hierarki dan struktur dokumen, membedakan mana yang merupakan judul utama dan mana yang subjudul.
10. Apa fungsi komentar ``<!-- ... -->`` dalam kode HTML?
    - Komentar merupakan bagian kode yang diabaikan oleh browser dan tidak ditampilkan pada halaman web. Fungsinya adalah untuk memberikan informasi tambahan atau penanda pada bagian kode bagi pengembang, atau untuk menonaktifkan kode sementara.

