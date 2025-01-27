// 3 lloje te funksioneve
// 2 menyra per mu shkrujt funksionet

// function SayHello() {
//     console.log("Hello");
// }
// //Shendrru SayHello ne formatin arrow function
// function Ec() {
//     console.log("Jom tu ec")
// }
// //arrow function
// let ec2 = () => {
//     console.log("Jom tu ec")
// }
// let SayHello2 = () => {
//     console.log("Hello")
// }

// SayHello()
// SayHello()
// SayHello()
// Ec()
// ec2()

// 3 llojet e funksioneve
// 1.Funksionet pa parametra dhe pa return
// function SayHello() {
//          console.log("Hello");
//      }
// 2.Funksionet qe kane parametra
// function SayHello(emri) {
// console,log("SayHello" + emri)} 
// 3.Funksionet qe kan return
// function CiftApoTek(njeNumer) {
//     if (njeNumer % 2 ==0) {
//         return "cift";
//     } else {
//         return "tek";
//     }
// }
//  console.log(CiftApoTek(15));
//  let rezultati = CiftApoTek(2);
//  CiftApoTek(10);
//  CiftApoTek(3);


// function SayHello() {
//     console.log("Hello");
//  }

// let rezultati2 = prompt("si e keni emrin");
// //SayHello("m");

// SayHello(rezultati);

// let vitiilindjes = prompt ("shkruaj vitin e lindjes");
 
// function KalkuloMoshen(vlera) {
//     console.log(2025 - vlera);
// }

// KalkuloMoshen(vitiilindjes);

// let vitiilindjes = prompt ("shkruaj vitin e lindjes");

// function KalkuloMoshen(vlera) {
//     let rezultati = 2025 - vlera;
//     return rezultati; //24
// }
// let mosha = KalkuloMoshen(vitiilindjes);
// console.log("variabla mosha" + mosha);

// console.log(KalkuloMoshen(vitiilindjes));

// function numriMeIMadh(numri1,numri2) {
//    if (numri1 > numri2) {
//     return numri1;
//    } else if (bumri1 == numri2) {
//     return "Numrat jan te barabart"
//    } else if {
//     return numri2;
//    }
// }

// console.log(numriMeIMadh(14,15));

// function repeatWord(fjala, numriiPerseritjeve) {
//     for (let i = 1; i <= numriiPerseritjeve; i++) {
//         console.log(fjala);
//     }
// }

// repeatWord("mirjeta", 15);
// repeatWord("mirjeta1234", 10);
// repeatWord("a", 100);
// repeatWord(12345 , 4);

// function mbledh(nr1=200 , nr2=100) {
//     console.log(nr1 , nr2);
//     return nr1 + nr2;
// }

// function double(vlera) {
//     return vlera * 2;
// }

// function fuqija(nr1) {
//     return nr1 * nr1
// }

// function fuqija (nr1) {
//     if (nr1 == 0 || nr1 == 1) {
//         return "nuk ki nevoj me ngrit ne fuqi"
//     }
//     return nr1 * nr1;
// }
// console.log(fuqija(1));

// function seyHello() {
//     console.log("Hello")
// }

// let bardhi = () =>{
//     console.log("Hello")
// }

// let bardhi = (nr1) => {
//     if (nr1 == 0 || nr1 == 1) {
//         return "nuk ki nevoj me ngrit ne fuqi"
//     }
//     return nr1 * nr1;
// }
// console.log(fuqija(1));

// function guesstheword (fjala) {
//     let fjalaEZgjedhur = "scantech";
//     if (fjalaEZgjedhur == fjala) {
//         alert("Urime e ki gjet fjalen");
//     } else{
//         alert("Nuk e ki gjet")
//     }
// }

// let fjalaEuserit = prompt("qelloja fjalen");
// guesstheword(fjalaEuserit);

// function aKaA(fjala) {
//     for (let i = 0; i < fjala.length; i++) {
//         if (fjala[i] === "a") {
//             return true;
//         }
//     }
// }

// aKaA("vueuvvrygreyfre");

// console.log(aKaA("gsygyd"));

function CiftApoTek(vargu) {
    for (let index = 0; index < vargu.length; index++ ){
         if (vargu[index] % 2 ==0) {
        return "cift";
    } else {
        return "tek";
    } 
    }
 
}
//  console.log(CiftApoTek(15));
//  let rezultati = CiftApoTek(2);
 CiftApoTek([1,2,3,4,5,6]);
 console.log(CiftApoTek([1,2,3,4,5,6,]))
 
 
