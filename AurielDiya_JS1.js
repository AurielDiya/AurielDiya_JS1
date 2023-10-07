const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// FOR STATEMENTS
  console.log("Ini Contoh For Statements");
  rl.question('Masukkan nama: ', (nama) => {
    let jumlahHuruf = 0;
    for (let i = 0; i < nama.length; i++) {
      if (nama[i] !== ' ') {
        jumlahHuruf++;
      }
    }
    console.log("Jumlah huruf dalam nama '" + nama + "' adalah: " + jumlahHuruf);
    console.log("\n");

// FUNCTION STATEMENTS
  console.log("Ini Contoh Function");
  rl.question('Masukkan bilangan pertama: ', (input1) => {
    const bilangan1 = parseFloat(input1);
    if (isNaN(bilangan1)) {
      console.log("Input tidak valid untuk bilangan pertama.");
      rl.close();
      return;
    }
    rl.question('Masukkan bilangan kedua: ', (input2) => {
      const bilangan2 = parseFloat(input2);

      if (isNaN(bilangan2)) {
        console.log("Input tidak valid untuk bilangan kedua.");
        rl.close();
        return;
      }
      // Memanggil function
      const rataRata = hitungRataRata(bilangan1, bilangan2);
      console.log("Rata-rata dari " + bilangan1 + " dan " + bilangan2 + " adalah: " + rataRata);
      function hitungRataRata(bilangan1, bilangan2) {
        return (bilangan1 + bilangan2) / 2;
      }

      console.log("\n");

// IF, ELSE IF, NESTED IF
      console.log("Ini Contoh If, Else if, Nested if");
      rl.question('Masukkan nilai Anda: ', (input) => {
        const nilai = parseFloat(input);
        if (isNaN(nilai)) {
          console.log("Input tidak valid. Harap masukkan angka.");
        } else if (nilai < 0 || nilai > 100) {
          console.log("Input tidak valid. Masukkan angka rentang 0-100.");
        } else {
          if (nilai >= 90) {
            console.log("Nilai Anda adalah A");
          } else if (nilai >= 80) {
            console.log("Nilai Anda adalah B");
          } else if (nilai >= 70) {
            console.log("Nilai Anda adalah C");
          } else if (nilai >= 60) {
            console.log("Nilai Anda adalah D");
          } else {
            console.log("Nilai Anda adalah E");
          }
          // Pesan remedial selalu ditampilkan jika nilai kurang dari 50
          if (nilai < 50) {
            console.log("Anda perlu remedial");
          } else {
            console.log("Anda tidak perlu remedial");
          }
        }
        console.log("\n");

// SWITCH CASE
        console.log("Ini Contoh Switch Case");
        rl.question('Masukkan kode produk: ', (input) => {
          const kodeProduk = input;
          switch (kodeProduk) {
            case 'A123':
              console.log("Nama Produk: AQUA 600 ml");
              break;
            case 'B456':
              console.log("Nama Produk: YAKULT");
              break;
            case 'C789':
              console.log("Nama Produk: YAMI-YAMI");
              break;
            default:
              console.log("Kode produk tidak dikenali.");
          }
          console.log("\n");

// WHILE, DO WHILE
          console.log("Ini Contoh While, Do While");
          rl.question('Masukkan angka untuk menghitung faktorial: ', (input) => {
            const a = parseInt(input);
            if (isNaN(a)) {
              console.log("Input tidak valid. Harap masukkan angka.");
              rl.close();
              return;
            }
            let faktorialWhile = 1;
            let faktorialDoWhile = 1;
            let d = 1;
            console.log("Proses perhitungan faktorial dari " + a + ":");
            // Menggunakan while loop
            let faktorialStringWhile = a + "! (while) = ";
            while (d <= a) {
              faktorialWhile *= d;
              faktorialStringWhile += d;
              if (d < a) {
                faktorialStringWhile += "x";
              }
              d++;
            }
            // Menggunakan do-while loop
            d = 1;
            let faktorialStringDoWhile = a + "! (do-while) = ";
            do {
              faktorialDoWhile *= d;
              faktorialStringDoWhile += d;
              if (d < a) {
                faktorialStringDoWhile += "x";
              }
              d++;
            } while (d <= a);
            faktorialStringWhile += " = " + faktorialWhile;
            faktorialStringDoWhile += " = " + faktorialDoWhile;
            console.log(faktorialStringWhile);
            console.log(faktorialStringDoWhile);
            rl.close();
          });
        });
      });
    });
  });
});
