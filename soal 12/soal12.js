class BangunDatar {
    constructor(nama){
        this.nama = nama
    }
    luasBangungDatar () {
        return ("")
    }
    kelilingBangunDatar () {
        return ("")
    }
}

class Lingkaran {
    constructor (r){
        this.phi = 22.7
        this.r = r
    }
    get aphi () {
        return this.phi;
    }
    set aphi (x) {
        this.phi = x;
    }
    luasLingkaran () {
        return (phi * r * r)
    }
    kelilingLingkaran () {
        return (2 * r * phi)
    }
}
class Persegi {
    constructor (s){
        this.s = s
    }
    get as (){
        return this.s;
    }
    set as (y){
        this.s = y;
    }
    luasPersegi () {
        return (s * s)
    }
    kelilingPersegi () {
        return (4 * s)
    }
}
myPersegi = new Persegi (2)
myLingkaran = new Lingkaran (7)

// console.log (luasBangungDatar)
// console.log (kelilingBangunDatar)
console.log (luasLingkaran)
console.log (kelilingLingkaran)
console.log (luasPersegi)
console.log (kelilingPersegi)
