let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
    penulis: ["john doe"],
    tahunTerbit : [2020]
}
let buku = {
    nama: ["pemograman dasar"],
    jumlahHalaman : [172],
    warnaSampul : ["hitam"]
} 
let combined = [...warna, ...buku.warnaSampul, ...dataBukuTambahan.penulis, ...dataBukuTambahan.tahunTerbit, ...buku.nama, ...buku.jumlahHalaman]
console.log(combined);