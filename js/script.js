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

// h1.innerHTML = nameSurname("Aysun ","Ismayilova")


// task 2

// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// let b = ["memmed","asif"]

// let h1 = document.querySelector('.n')
// function getArray(array) {
//     return array
//   }

// h1.innerHTML = getArray(b)

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

//     }


// let sayHi = () => alert("Hello!");

// sayHi();

// alert("Hello")
// let result= 5
// function sum(a, b) {
//     let result = a + b;
  
//     return result;
//   }

//   console.log(result);

// console.log(sum(3,2));

// function show() {
//     return{

//     }
// }

// let user = {
//     name:"Shahlar",
//     age: 20,
//     position: "lkdsnfkls"
   
// }

// Object.assign(user, )
// console.log(user);
// user.surname = "Abbasov"

// // let arr = ["name","Shahlar","Sevda"]

// // for (const aysun in arr) {
// //    console.log(aysun);
// // }

// console.log(user);


// TASK 4


// let h1 = document.querySelector(".w")
// let word = "happy";
// let name = "Shahlar";
// let reverseWord = (a) => {
//     return a.split('').reverse().join('')
// }
// h1.innerHTML = reverseWord(name)
// console.log(Reverse);


// TASK 5
// let h1 = document.querySelector(".w")
// let str = "we are learning";
// let arr2 = "Bu gun tasklara cehd var"
// let capitalize = (text) => {

//    let word = text.split(' ')
//    console.log(word);
//    let x=""
//        for (let i = 0; i < word.length; i++) {
//         // console.log( word[i][0].toUpperCase() + word[i].slice(1));
//       x +=   word[i][0].toUpperCase() + word[i].slice(1) + " "

//     console.log(x);
      
       
        
      
//     }
//     return x

  
// }




// h1.innerHTML = capitalize(arr2)

// TASK 6

// let h1= document.querySelector(".w")

// let count = (text) => {

//     let words = text.split(' ')
//     // words = words.trim()
//     console.log(words.length);
    
    
//     return words.length;
    
// }

// let text = "we are learning";

// h1.innerHTML = count(text );
// console.log(text);


// TASK 7


// let MinMax = (arr) => {
   
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//    console.log(min);
//    let a = `${min}, ${max}`
//     return a;
// }

// let num = [45, 14, 26, 32];
// let h1 = document.querySelector(".w")
// h1.innerHTML = MinMax(num);


// let obj = {
//     name:'shahlar',
//     surname:'abbasov',
//     age:28
// }


// for (const key in obj) {
//    console.log(obj[key]);
        
//     }

// 25.05.2024
// TASK 8

// function theLongestWord(sentence) {
//     let words = sentence.split(' ');
//     let longestWord = "";
//    for (const word of words) {
//        if (word.length > longestWord.length) {
//         longestWord = word;
//        }
//    }
    
//     return longestWord;

// }
// let sentence = "Bu gun hava soyuqdur";
// let h1 = document.querySelector('.w');
// h1.innerHTML = theLongestWord(sentence);

// TASK 9

// function sumArr(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
// let numbers = [1, 2, 45, 6, 23, 9];
// let h1 = document.querySelector('.w');
// h1.innerHTML = sumArr(numbers);

// TASK 10

// function array(numbers) {

//     return numbers.sort((a,b)=>a-b);
    
// }
// let numbers = [16, 28, 45, 62, 23, 19];
// let h1 = document.querySelector('.w');
// h1.innerHTML = array(numbers);
