//SOAL 1
let jumlahBaju=0;
while (jumlahBaju<20){
    console.log("jumlah baju masih " + jumlahBaju + " dari 20")
    jumlahBaju++;
}
console.log("jumlah baju sekarang sudah " + jumlahBaju)
console.log("Selamat mencuci :)")
// END OF SOAL 1

// SOAL 2

// for looping
console.log("INI LOOPING FOR PERTAMA")
for (let i=1; i<=20; i++){
    console.log(i + " - I love coding")
}

console.log("INI LOOPING FOR KEDUA")
for (let i=20; i>0; i--){
    console.log(i + " - I will become web developer")
}

// while looping
i=2;
console.log("INI LOOPING WHILE PERTAMA")
while (i<20){
    console.log(i + " - I love coding")
    i=i+2
}

console.log("INI LOOPING WHILE KEDUA")
while (i>0){
    console.log(i + " - I will become web developer")
    i=i-2
}
// END OF SOAL 2

// SOAL 3
for (let i=1;i<=100; i=i+3){
    if (i%2==0){
        console.log(i + " - genap")
    } else {
        console.log(i + " - ganjil")
    }
}

for (let i=50;i<=200; i=i+5){
    if (i%3==0){
        console.log(i + " - faktor 3")
    } else {
        console.log(i + " - tidak bisa dibagi 3")
    }
}

for (let i=100;i<=200; i=i+7){
    if (i%8==0){
        console.log(i)
    }
}
// END OF SOAL 3

// SOAL 4
let rows1=5
for (var i=1; i<=rows1; i++){
    console.log("*")
}

let rows2=5
for (var i=1; i<=rows2; i++){
    let bintang= ""
    for (var j=1; j<=rows2; j++){
        bintang= bintang + "*"
    }
    console.log(bintang)
}

let rows3=10
for (var i=1; i<=rows3; i++){
    let bintang= ""
    for (var j=1; j<=i; j++){
        bintang= bintang + "*"
    }
    console.log(bintang)
}

let rows4=10
for (var i=1; i<=rows4; i++){
    let bintang= ""
    for (var j=1; j<=rows4-i+1; j++){
        bintang= bintang + "*"
    }
    console.log(bintang)
}
// END OF SOAL 4