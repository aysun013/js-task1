// task 1:

// let x = prompt('How old are you?');

// if (x>20) {
//     alert('yasiniz uygundur')
// }
// else if(x<18) {
//     alert('yasiniz azdir')
// }else(
//     alert('hec biri')
// )



// task 2:

// let n =0

// while (n<3) {
//     alert(n)
// n++
    
// };


// task 3:

// let a = prompt('is saatlariniz ne zamandir?');

// if(9 < a && a < 18) {
// alert('is saatlari doğrudur')
// }
//  else{
//    alert('is saatlari yanlisdir')
// } 

// let i =1

// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//     console.log(i + " forun icindeki");
//   }

//   console.log(i);

// let arr = [ 3, 2, 5, 4, 8, 10];
// let arrsum = 0

// for (let i = 0; i < arr.length; i++) {
    
    
//      arrsum  += arr[i]

 
                    
//     console.log(arrsum);

// }
// console.log(sum[1]);


// task 4


// function Salam() {
//   console.log('salam');  
// }

// Salam() invoked





// function Sum(x,y) {

//    let a = x * 2
//    let b = y + 10
//     console.log(a,b);
// }

// Sum(3,5)

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [];

// for (let i = a.length - 1; i >= 0; i--) {
//     arr2[arr2.length] = a[i];
    

// }

// console.log(arr2);
// (function Together() {
    
    //     console.log(true);
    
    // })()
    // self-invoked function
    
 
    // function Fokus(a) {
    //     console.log(a);
    // }
    // Fokus('salam')

// let h2 = document.querySelector('.Aysun')

// function declaration
// function salam(){
//     console.log('salam');
// }

// function Niye(b) {
   
    
//     return (
    
//     )


// }


// h2.innerHTML = Niye(2)

// console.log(Niye(3));

// salam()

// let a = function(){
//     return 'Sevda'
// }

// console.log(a());


// var a = 'Aysun'

// function Fulname() {
//    var a;
//     console.log(a);
// }

// Fulname()


// var z = "car"

// if (true) {
//     var z;
//     console.log(z);
// }

// console.log(z);

// let name = 'soul'
// let h1=document.querySelector('.a')

// function lalala() {
// let name = 'inside out'

// let message = 'animation ' + name;
// console.log(message);
// return message
  
// }
// h1.innerHTML = lalala()

// lalala()
// console.log(lalala());

// TASK 2

// let h1=document.querySelector('.a')
// function task(b) {
   
//     return b**3+2
    
// }
// let result = task(3);

// h1.innerHTML = task(3)


// let a = function Aysun(soyad) {
//     console.log("Aysun", soyad);
// }

// a("Ismayilov")






// a("Ismayoliova")

// let age = prompt("What is your age?", 18);

// let welcome;

// if (age < 18) {
//     welcome = function() {
//         alert("Hello!");
//     };
//     welcome()


// } else {
//     welcome = function() {
//         alert("Greetings!");
//     };
//     welcome()

// }

// welcome(); // ok now
// welcome()
// let age = 16; // take 16 as an example

// if (age < 18) {
// //   welcome();               // \   (runs)
//                            //  |
//   function welcome() {     //  |
//     alert("Hello!");       //  |  Function Declaration is available
//   }                        //  |  everywhere in the block where it's declared
//                            //  |
// //   welcome();               // /   (runs)

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }
// }


// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.
// function hesab(a) {
//    return a+2
    
// }

// function sum(x) {
//   return  x + hesab(2)
// }

// console.log(sum(5));

// task 1

// let h1=document.querySelector('.n')
// function nameSurname(a,s) {
//     return a + s
// };

// h1.innerHTML = nameSurname("Aysun","Ismayilova")


// task 2

// let h1 = document.querySelector('.n')
// function getArray(array) {
//     return array
//   }

// h1.innerHTML = [1, 2, 3, 4, 5, 6, 7];

// task 3

// let age = prompt('how old are you?');

// if (age > 30) {
//         dayday = function() {
//             alert("senin yasinda olan masin day day masinidir");
//         };
//         dayday()
//     } else if (age < 30){
//         dayday = function() {
//             alert("senin yasinda olan masin qenaetcildir");
//         };
//          dayday()
//     } else {
//         dayday = function() {
//             alert("olmusen");
//         };
//         dayday()

//     };




