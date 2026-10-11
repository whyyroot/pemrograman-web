# PRAKTIKUM 2 HTML Lanjutan
<br>
Nama : Irvan Wahyudin <br>
Nim : 312510359
<br><br>


dan berikut adalah [jawaban soal-soal](#Jawab-Pertanyaan-Berikut) dari modul.<br>
Try for html me >>><a href="https://whyyroot.github.io/pemrograman-web/praktikum-2-html-lanjutan/index.html"><img src="https://img.shields.io/badge/CLICK_IN_HERE-8A2BE2"/></a>  
<h3>Membuat Tabel Mahasiswa</h3>
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>

```      
<!DOCTYPE html>
<html>

<head>
    <title>HTML Lanjutan</title>
</head>

<body>
    <h1>Data Mahasiswa</h1>
    <table border="1">
        <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Program Studi</th>
        </tr>
        <tr>
            <td>31241001</td>
            <td>Andi</td>
            <td>Teknik Informatika</td>
        </tr>
        <tr>
            <td>31241002</td>
            <td>Budi</td>
            <td>Teknik Informatika</td>
        </tr>
    </table>
</body>

</html>

```
   </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-2-html-lanjutan/Screenshot_1.jpg" width="450" height="450">
    </td>
  </tr>
</table>

1. `` <table border="1"> ... </table> ``Ini adalah tag utama untuk membuat struktur tabel. Atribut `border="1"` digunakan untuk menampilkan garis batas (bingkai) pada tabel dan sel-selnya agar terlihat lebih jelas.
2. `` <tr> ... </tr> ``: Tag ini berfungsi untuk membuat sebuah baris mendatar di dalam tabel.
3. `` <th> ... </th> ``: Tag ini digunakan untuk membuat sel judul kolom (header).
4. `` <td> ... </td> ``: Tag ini digunakan untuk membuat sel data biasa yang berisi informasi tabel.


<h3>Tabel dengan thead, tbody, dan tfoot</h3>
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>
      
  ```
<table border="1">
        <caption>Nilai Praktikum</caption>
        <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Nilai</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Andi</td>
                <td>85</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Budi</td>
                <td>90</td>
            </tr>
            <tr>
                <td>3</td>
                <td>why</td>
                <td>85</td>
            </tr>
            <tr>
                <td>4</td>
                <td>andi</td>
                <td>95</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2">Rata-rata</td>
                <td>87.5</td>
            </tr>
        </tfoot>
    </table>
```
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-2-html-lanjutan/Screenshot_2.jpg" width="450" height="450">
  </td>
  </tr>
</table>

1. `` <caption> ``: Digunakan untuk memberikan teks judul pada tabel.
2. ``<thead>, <tbody>, dan <tfoot>``: Ketiga tag ini berfungsi untuk mengelompokkan baris-baris tabel (<tr>) menjadi tiga bagian logis:
3. - ``<thead>``: (Table Head): Bagian kepala tabel. Digunakan khusus untuk membungkus baris yang berisi judul-judul kolom (<th>).
   - ``<tbody>`` (Table Body): Bagian tubuh atau isi utama tabel. Di sinilah semua baris data inti (``<td>``) diletakkan.
   - ``<tfoot>`` (Table Foot): Bagian kaki tabel. Biasanya digunakan untuk meletakkan baris informasi tambahan di akhir tabel, seperti total, jumlah, atau rata-rata.
4. ``colspan="2"``: Fungsinya adalah untuk melakukan merge atau menggabungkan dua kolom menjadi satu sel yang lebar.



<h3>Membuat Form Registrasi Mahasiswa</h3>
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>

  ```
<!DOCTYPE html>
<html>

<head>
    <title>HTML Lanjutan</title>
</head>

<body>
    <h1>Form Registrasi Mahasiswa</h1>
    <form>
        <label for="nama">Nama Lengkap</label><br>
        <input type="text" id="nama" name="nama"><br><br>
        <label for="email">Email</label><br>
        <input type="email" id="email" name="email"><br><br>
        <label for="password">Password</label><br>
        <input type="password" id="password" name="password"><br><br>
        <label for="tanggal">Tanggal Lahir</label><br>
        <input type="date" id="tanggal" name="tanggal"><br><br>
        <button type="submit">Daftar</button>
        <button type="reset">Reset</button>
    </form>
</body>

</html>
```
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-2-html-lanjutan/Screenshot_3.jpg" width="450" height="450">
  </td>
  </tr>
</table>

1. `` <form> ... </form> `` dan ``<!-- subjudul -->``: Ini adalah tag utama (wadah) untuk membuat sebuah formulir.
2. `` <label for="..."> ``: Tag ini berfungsi untuk membuat label atau keterangan teks bagi sebuah kolom input.
3. - ``type="text"``: Membuat kolom input teks biasa satu baris (untuk Nama Lengkap).
   - ``type="email"``: Membuat kolom input khusus email. Browser modern biasanya akan memberikan peringatan otomatis jika format email yang diketikkan salah (tidak ada tanda '@').
   - ``type="password"``: Membuat kolom input kata sandi. Teks yang diketikkan pengguna akan disembunyikan dan diubah menjadi titik-titik atau bintang agar aman dari pandangan orang lain.
   - ``type="date"``: Membuat kolom input tanggal.
4. Atribut ``id`` dan ``name`` pada ``<input>``:
   - ``id``: Sebagai identitas unik elemen tersebut (digunakan untuk dipasangkan dengan label, atau untuk styling CSS dan manipulasi JavaScript).
   - ``name``: Nama variabel atau "kunci" data yang akan dikirimkan ke server ketika formulir disubmit (misalnya dikirim ke database).
5. ``<button type="..."> ... </button>``: Tag untuk membuat tombol yang bisa diklik.
   - ``type="submit"``: Tombol ini berfungsi untuk mengirimkan seluruh data yang telah diisi di dalam form tersebut untuk diproses (biasanya ke server).
   - ``type="reset"``: Tombol ini berfungsi untuk mengosongkan kembali atau mereset seluruh kolom input di dalam form tersebut ke keadaan semula/kosong.
 

<h3>Radio Button dan Checkboxt</h3>

kita lanjutkan di dalam ``<form> ... </form>``
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>

```
<!DOCTYPE html>
<html>

<head>
    <title>HTML Lanjutan</title>
</head>

<body>
    <h1>Form Registrasi Mahasiswa</h1>
    <form>
        <label for="nama">Nama Lengkap</label><br>
        <input type="text" id="nama" name="nama"><br><br>
        <label for="email">Email</label><br>
        <input type="email" id="email" name="email"><br><br>
        <label for="password">Password</label><br>
        <input type="password" id="password" name="password"><br><br>
        <label for="tanggal">Tanggal Lahir</label><br>
        <input type="date" id="tanggal" name="tanggal"><br><br>

        <h2>Jenis Kelamin</h2>
        <input type="radio" id="laki" name="jk" value="L">
        <label for="laki">Laki-laki</label>
        <input type="radio" id="perempuan" name="jk" value="P">
        <label for="perempuan">Perempuan</label>
        <h2>Keahlian</h2>
        <input type="checkbox" id="html" name="skill" value="HTML">
        <label for="html">HTML</label>
        <input type="checkbox" id="css" name="skill" value="CSS">
        <label for="css">CSS</label>
        <input type="checkbox" id="js" name="skill" value="JavaScript">
        <label for="js">JavaScript</label>
        <button type="submit">Daftar</button>
        <button type="reset">Reset</button>
    </form>
</body>

</html>
```
  </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-2-html-lanjutan/Screenshot_4.jpg" width="450" height="450">
  </td>
  </tr>
</table>

1. ``<input type="radio">``: Digunakan ketika pengguna hanya diizinkan memilih satu opsi dari beberapa pilihan yang ada (pilihan tunggal). Penggunaan name yang persis sama inilah yang membuat keduanya menjadi satu kelompok. Jika Anda mengklik "Laki-laki", maka pilihan pada "Perempuan" akan otomatis terhapus/berpindah.
2. ``<input type="checkbox">``: Digunakan ketika pengguna diizinkan memilih lebih dari satu opsi sekaligus, atau bahkan tidak memilih sama sekali (pilihan ganda).
3. Atribut ``value="..."``: Baik pada radio maupun checkbox, atribut value berisi data sebenarnya yang akan dikirimkan ke server/database ketika tombol "Submit" ditekan.



<h3>Select dan Textarea</h3>

<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>

```
<!DOCTYPE html>
<html>

<head>
    <title>HTML Lanjutan</title>
</head>

<body>
    <h1>Form Registrasi Mahasiswa</h1>
    <form>
        <label for="nama">Nama Lengkap</label><br>
        <input type="text" id="nama" name="nama"><br><br>
        <label for="email">Email</label><br>
        <input type="email" id="email" name="email"><br><br>
        <label for="password">Password</label><br>
        <input type="password" id="password" name="password"><br><br>
        <label for="tanggal">Tanggal Lahir</label><br>
        <input type="date" id="tanggal" name="tanggal"><br><br>

        <h2>Jenis Kelamin</h2>
        <input type="radio" id="laki" name="jk" value="L">
        <label for="laki">Laki-laki</label>
        <input type="radio" id="perempuan" name="jk" value="P">
        <label for="perempuan">Perempuan</label>
        <h2>Keahlian</h2>
        <input type="checkbox" id="html" name="skill" value="HTML">
        <label for="html">HTML</label>
        <input type="checkbox" id="css" name="skill" value="CSS">
        <label for="css">CSS</label>
        <input type="checkbox" id="js" name="skill" value="JavaScript">
        <label for="js">JavaScript</label>

        <label for="prodi">Program Studi</label>
        <select id="prodi" name="prodi">
            <option value="">-- Pilih Prodi --</option>
            <option value="ti">Teknik Informatika</option>
            <option value="si">Sistem Informasi</option>
        </select>
        <br><br>
        <label for="alamat">Alamat</label><br>
        <textarea id="alamat" name="alamat" rows="5" cols="40"></textarea>
        <button type="submit">Daftar</button>
        <button type="reset">Reset</button>
    </form>
</body>

</html>
```
 </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-2-html-lanjutan/Screenshot_5.jpg" width="450" height="450">
  </td>
  </tr>
</table>


1. ``<select>`` Tag ini digunakan untuk membuat sebuah kotak menu pilihan (dropdown list).
2. `` <option> `` Tag ini diletakkan di dalam ``<select>`` dan berfungsi untuk mendefinisikan item-item pilihan yang tersedia.
3. ``<textarea>`` Berbeda dengan ``<input type="text">`` yang hanya mengizinkan pengetikan dalam satu baris pendek, tag ``<textarea>`` digunakan untuk menampung teks yang panjang dan terdiri dari banyak baris, seperti alamat lengkap, komentar, pesan, atau deskripsi
4. Atribut ``rows="5"`` Menentukan tinggi kotak teks yang terlihat di layar (dalam hal ini, tingginya setara dengan 5 baris teks).
5. Atribut ``cols="40"`` Menentukan lebar kotak teks yang terlihat di layar (dalam hal ini, lebarnya setara dengan 40 karakter huruf).



<h3>Validasi Form Dasar</h3>
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>

```
<!DOCTYPE html>
<html>

<head>
    <title>HTML Lanjutan</title>
</head>

<body>
    <h1>Form Registrasi Mahasiswa</h1>
    <form>
        <form>
            <label for="nama">Nama</label>
            <input type="text" id="nama" name="nama" required minlength="3">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="umur">Umur</label>
            <input type="number" id="umur" name="umur" min="17" max="60" required>
            <button type="submit">Kirim</button>
        </form>
    </form>
</body>

</html>
```
 </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-2-html-lanjutan/Screenshot_6.jpg" width="450" height="450">
  </td>
  </tr>
</table>


1. `` <label for="alamat">Alamat</label>`` Membuat teks keterangan "Alamat".
2. `` <textarea id="alamat" name="alamat" rows="5" cols="40"></textarea> `` Membuat kotak isian teks yang luas dan mendukung banyak baris (multi-baris) untuk mengetikkan alamat lengkap.



<h3>Menambahkan Multimedia</h3>
Kita buat folder media untuk menyimpan filenya.
<img src="https://github.com/whyyroot/pemrograman-web/blob/main/img//praktikum-2-html-lanjutan/fd.jpg" width="250" height="150">
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>
      
```
<!DOCTYPE html>
<html>

<head>
    <title>HTML Lanjutan</title>
</head>

<body>
    <h1>Form Registrasi Mahasiswa</h1>
    <form>
        <form>
            <label for="nama">Nama</label>
            <input type="text" id="nama" name="nama" required minlength="3">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="umur">Umur</label>
            <input type="number" id="umur" name="umur" min="17" max="60" required>
            <button type="submit">Kirim</button>
        </form>
    </form>

    <h2>Audio</h2>
    <audio controls>
        <source src="media/audio.mp3" type="audio/mpeg">
        Browser tidak mendukung audio.
    </audio>
    <h2>Video</h2>
    <video controls width="480">
        <source src="media/video.mp4" type="video/mp4">
        Browser tidak mendukung video.
    </video>
</body>

</html>
```
 </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-2-html-lanjutan/Screenshot_7.jpg" width="450" height="450">
  </td>
  </tr>
</table>


<h3>Mini Project</h3>
<table boder="0">
  <tr>
    <td valign="top"><h3>Code</h3>
      
```
<!DOCTYPE html>
<html>

<head>
    <title>Biodata Mahasiswa</title>
</head>

<body>
    <header>
        <h1>Biodata Mahasiswa</h1>
    </header>
    <nav>
        <a href="index.html">Beranda</a>
        <a href="#biodata">Biodata</a>
        <a href="#form">Form</a>
    </nav>
    <main>
        <section id="biodata">
            <h2>Data Mahasiswa</h2>
            <table border="1">
                <tr>
                    <th>Data</th>
                    <th>Keterangan</th>
                </tr>
                <tr>
                    <td>NIM</td>
                    <td>312510359</td>
                </tr>
                <tr>
                    <td>Nama</td>
                    <td>Irvan Wahyudin</td>
                </tr>
                <tr>
                    <td>Program Studi</td>
                    <td>Teknik Informatika</td>
                </tr>
            </table>
        </section>
        <section id="form">
            <h2>Form Biodata</h2>
            <form>
                <label for="nama">Nama</label>
                <input type="text" id="nama" name="nama" required>
                <br><br>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
                <br><br>
                <label for="prodi">Program Studi</label>
                <select id="prodi" name="prodi" required>
                    <option value="">-- Pilih --</option>
                    <option value="ti">Teknik Informatika</option>
                    <option value="si">Sistem Informasi</option>
                </select>
                <br><br>
                <label for="alamat">Alamat</label><br>
                <textarea id="alamat" name="alamat" required></textarea>
                <br><br>
                <button type="submit">Simpan</button>
                <button type="reset">Reset</button>
            </form>
        </section>
        <h2>Audio</h2>
        <audio controls>
            <source src="media/audio.mp3" type="audio/mpeg">
            Browser tidak mendukung audio.
        </audio>
        <h2>Video</h2>
        <video controls width="480">
            <source src="media/video.mp4" type="video/mp4">
            Browser tidak mendukung video.
        </video>
    </main>
    <footer>
        <p>&copy; 2026 Teknik Informatika</p>
    </footer>
</body>

</html>
```
 </td>
    <td valign="top"><h3>Tampilan</h3>
      <img src="https://github.com/whyyroot/pemrograman-web/blob/main/img/praktikum-2-html-lanjutan/Screenshot_8.jpg" width="450" height="450">
  </td>
  </tr>
</table>

1. ``<audio> dan <video>`` Tag utama yang bertindak sebagai wadah pemutar suara dan gambar bergerak.
2. ``controls`` Atribut yang memunculkan antarmuka pemutar media, seperti tombol putar (play), jeda (pause), pengatur volume, dan garis waktu (timeline).
3. ``<source>`` Mendefinisikan lokasi file media melalui atribut src (misalnya di dalam folder media/) dan jenis file melalui atribut type (seperti audio/mpeg atau video/mp4) agar dapat dibaca dengan benar oleh browser.
4. ``width="480"`` Mengatur lebar spesifik untuk pemutar video sebesar 480 piksel di layar.

# Jawab Pertanyaan Berikut
1. Apa fungsi ``<table>, <tr>, <th>, dan <td>``?
  - ``<table>``: Elemen atau wadah utama untuk membuat struktur tabel.
  - ``<tr>`` (Table Row): Membuat sebuah baris mendatar di dalam tabel.
  - ``<th>`` (Table Header): Membuat sel khusus untuk judul kolom atau judul baris.
  - `` <td> ``(Table Data): Membuat sel standar yang berisi data atau informasi dalam tabel.

2. Apa perbedaan ``<th>`` dan ``<td>``?
  - Tag ``<th>`` digunakan untuk mendefinisikan sel header atau judul, sehingga teks di dalamnya secara otomatis akan ditampilkan bercetak tebal (bold) dan posisinya berada di tengah sel (center).

3. Apa fungsi colspan pada tabel?
  - Atribut colspan berfungsi untuk menggabungkan dua kolom atau lebih menjadi satu sel tunggal yang membentang lebar ke samping di dalam baris yang sama.

4. Apa fungsi ``<form>`` dalam HTML?
  - Tag ``<form>`` berfungsi sebagai wadah utama yang mengelompokkan elemen-elemen input (seperti kolom teks, pilihan, dan tombol) untuk menerima masukan data dari pengguna dan mengirimkan data tersebut ke server web untuk diproses.

5. Apa perbedaan radio button dan checkbox?
  - Radio button (``<input type="radio">``): Digunakan ketika pengguna hanya boleh memilih satu opsi dari serangkaian pilihan yang ada dalam satu kelompok (pilihan tunggal).
  - Checkbox (``<input type="checkbox">``): Digunakan ketika pengguna diizinkan untuk memilih banyak opsi sekaligus, satu opsi, atau bahkan tidak memilih sama sekali (pilihan ganda).

6. Mengapa ``<label>`` sebaiknya terhubung dengan id input melalui atribut for?
  - Menghubungkan ``<label>`` dengan id menggunakan atribut for akan meningkatkan aksesibilitas (terutama untuk pembaca layar) dan mempermudah interaksi pengguna. Ketika teks label tersebut diklik, browser akan secara otomatis menempatkan kursor atau menyeleksi kolom input yang menjadi pasangannya.

7. Apa perbedaan ``<textarea>`` dengan ``<input type="text">``?
  - Tag ``<textarea>`` digunakan untuk menampung masukan teks yang panjang dan mendukung format banyak baris (multi-line), seperti alamat atau kolom komentar. Tag ``<input type="text">`` hanya digunakan untuk menampung masukan teks pendek dalam satu baris tunggal (single-line), seperti nama atau asal kota.

8. Apa fungsi semantic HTML seperti ``<header>, <nav>, <main>, <section>, <article>, <aside>, dan <footer>``?
  - Elemen semantik berfungsi untuk mendeskripsikan makna dan struktur logika dari sebuah bagian halaman web secara jelas kepada browser, mesin pencari (SEO), dan teknologi aksesibilitas (screen reader). Elemen ini memberitahu sistem bagian mana yang merupakan kepala halaman, navigasi utama, konten utama, artikel mandiri, bilah sisi, atau kaki halaman.

9. Apa fungsi required, min, max, dan minlength?
Keempatnya merupakan atribut validasi formulir (form validation):
  - required: Mencegah formulir dikirim jika kolom tersebut masih kosong (wajib diisi).
  - min: Menetapkan batas nilai angka paling kecil yang diizinkan untuk diinput (untuk tipe angka).
  - max: Menetapkan batas nilai angka paling besar yang diizinkan untuk diinput (untuk tipe angka).
  - minlength: Menetapkan batas jumlah karakter (huruf/angka) paling sedikit yang harus diketikkan oleh pengguna.

11. Apa perbedaan elemen ``<audio>`` dan ``<video>``?
  - Tag ``<audio>`` dikhususkan untuk menyematkan dan memutar file media berupa suara atau musik yang murni tidak memiliki komponen visual. Tag ``<video>`` dikhususkan untuk menyematkan file media berupa gambar bergerak (film) yang membutuhkan dimensi panjang dan lebar di layar untuk menampilkan visual, biasanya sekaligus disertai dengan suara.
