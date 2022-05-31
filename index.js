// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = function(arrayParameter) {
  let daftarBelanjaan = [];
  for (let index = 0; index < arrayParameter.length; index++)  {
      let isiDaftar = "- " + arrayParameter[index].nama + " x " + arrayParameter[index].kuantitas;
      daftarBelanjaan.push(isiDaftar);
  }
  return daftarBelanjaan;  
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = function(arrayParameter) {
  let totalHarga = 0;
  for (let index = 0; index < arrayParameter.length; index++)  {
    let hargaItem = arrayParameter[index].harga * arrayParameter[index].kuantitas;
    totalHarga += hargaItem;
  }
  return totalHarga;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
