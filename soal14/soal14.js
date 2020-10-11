const volumeBalok = (p, l, t) => {
    hasil = p * l * t;
    return hasil;
}
const hasilPertama = (volumeBalok(2, 3, 4))

const volumeKubus = (s) => {
    hasil = s * s * s;
    return hasil;
}
const hasilKedua = (volumeKubus(4))
const hasilVolume = `${hasilPertama}, ${hasilKedua}`
console.log (hasilVolume)
