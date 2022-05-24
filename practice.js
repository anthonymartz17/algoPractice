
function diagonalDifference(arr) {

    let mainDiaFinder = arr[0] + 1;
    let secDiaFinder = arr[0] - 1;
     let currentIndex= 1;
     let currentIndexSec= secDiaFinder + 1;
    let mainDiag = 0
    let secDiag = 0

    

   
    for (let i = 0; i < arr.length; i++){

        if( i == currentIndex){
          
            mainDiag += arr[i]
            currentIndex += mainDiaFinder
        }
        if(i == currentIndexSec && i != arr.length -1 ){
          
               
                secDiag += arr[i]
                currentIndexSec += secDiaFinder
                
             
        }

      
    }
 
   
    console.log(Math.abs(Math.max(mainDiag,secDiag)- Math.min(mainDiag,secDiag)))
}



diagonalDifference([
    3,
    11, 2, 4,
    4, 5, 6,
    10, 8, -12
   
    ]);


  

// function aVeryBigSum(ar) {
//    let sum = 0
//     for(let i = 0; i < ar.length; i++){

//         sum += ar[i]
//     }
    
//     console.log(sum)


// }


// aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);




// function compareTriplets(a, b) {
//    let alice = 0;
//    let bob = 0;

//    for(let i = 0; i <= a.length; i++){

//        if(a[i] > b[i]) { alice += 1 }
    
//        else if(a[i] < b[i]) { bob += 1 } 

//    }

//    console.log([alice,bob])

// }
// compareTriplets([2,3,1,7,3], [4,1,8,2,9]);





// function fizzBuzz(n) {
    
//     for(let i = 1; i <= n; i++){
         
//         if(i % 3 == 0 && i % 5 == 0){
         
//             console.log('FizzBuzz')
            
//         }
//         else if(i % 3 == 0 && i % 5 != 0){
//             console.log('Fizz')
            
//         }else if(i % 3 != 0 && i % 5 == 0){
//             console.log('Buzz')
//         }else{
//             console.log(i)
//         }
//     }

   
// }

// fizzBuzz(29);