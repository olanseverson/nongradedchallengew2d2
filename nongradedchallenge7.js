// SOAL 1

let angka1= 5;
let angka2= 3;

if (angka1>angka2){
    console.log(false)
} else if (angka1<angka2) {
    console.log(true)
} else {
    console.log(-1)
}
// END OF SOAL 1


//SOAL 2 

function cekLulus (nama, nilai, absen) { 
    // nilai and absen must valid value
    if (nilai>70 && absen < 5){
        console.log(nama + ": LULUS")
    }
    else {
        console.log(nama+ ": TIDAK LULUS")
    }
}

function cekNilaiValid (nilai){
    // if valid, return true
    return nilai>=0 && nilai <=100
}

function cekAbsenValid (absen){
    // if valid, return true
    return absen >=0
}

let nama='momo'
let nilai= 100
let absen= 0;

if (!cekNilaiValid(nilai) || !cekAbsenValid(absen)){
    console.log('input tidak valid') // condition where nilai or absen is not valid input
} else {
    cekLulus(nama, nilai, absen)
}

// END of SOAL 2

// SOAL 3
//detik to menit converter

function detikToMenit(detik){
    let menit = (detik/60)|0
    if (menit===0){
        console.log(detik)
    }
    else {
        console.log(menit + ":" + detik%60)
    }
}

detikToMenit(232)

// END of SOAL 3

// SOAL 4
let x = Math.floor(Math.random() * 5)+1;
console.log(x)
switch (x) {
    case 1: 
        console.log('coba lagi ya');
        break;
    case 2: 
        console.log("selamat kamu mendapatkan kupon sebanyak 5");
        break;
    case 3: 
        console.log("selamat kamu mendapatkan kupon sebanyak 10")
        break;
    case 4: 
        console.log("selamat kamu mendapatkan kupon sebanyak 50")
        break;
    case 5: 
        console.log("WOW, kamu menang jackpot! Selamat!!")
}

// END of SOAL 4