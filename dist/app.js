"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const case_1_1 = require("./case_1");
const case_2_1 = require("./case_2");
console.log('#Case 1');
console.log('1. Buah apa saja yang dimiliki Andi (fruitName)?\n', (0, case_1_1.getFruits)(), '\n');
console.log('2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?', (0, case_1_1.getAmountContainer)(), '\n');
console.log('3. Berapa total stock buah yang ada di masing-masing wadah?', (0, case_1_1.getStockOnContainer)(), '\n');
console.log('4. Apakah ada komentar terkait kasus di atas?', '\nData fruits memiliki data yang tidak konsisten seperti id yang duplikat, nama yang sama. ini membuat kebingungan sebuah data di buat unik berdasarkan apa, pada umumnya suatu data dinilai unik berdasarkan ID, unik berarti tidak sama dan tidak boleh duplikat. pada kasus ini saya membuat ulang data fruit agar tidak mempunyai duplikasi berdasarkan id, jika terdapat data yang id yang sama, maka ambil satu data dari beberapa data tersebut.', '\n');
console.log('#Case 2');
console.log('5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.', (0, case_2_1.getCountComments)(), '\n');
console.log('#Case 3');
console.log('Buatlah minimal 1 halaman untuk memperkenalkan sebuah UMKM. Desain bebas.Buatlah semenarik mungkin. Boleh dibuat sebagai website ataupun mobile app(bebas pilih). Jika diperlukan, diperbolehkan untuk membuat backend sederhana.\n', 'Berikut merupakan website yang berhasil dibuat menggunakan next.js dan tailwind, https://case3.aristocaesar.my.id');
