/**
 * সিগারা সামুচা জিলাপির হিসাব
ফাংশন নাম দিতে হবে pandacost
 */

// function pandaCost(singra, shapucha, jalapi){
//     if(typeof singra !== 'number' || typeof shapucha !== 'number' || typeof jalapi !== 'number'){
//     return "plese valide integer numbers"
//     }
//     else{
//         let singraPrice = 7;
//         let shapuchaPrice = 10;
//         let jalapiPrice = 15;
    
//         let total = singra * singraPrice + shapucha * shapuchaPrice + jalapi * jalapiPrice;
//         return total;
//     }
  
// }
// console.log(pandaCost(1, 3, 2));

/**
 *  পিকিন বাজেট বের করা নিয়ম 
 * ফাংশন নাম হবে picnicBudget


function picnicBudget(paricepit){
    if(typeof paricepit !== 'number' || paricepit < 0){
    return "paraticepit shode be valid number";
    }
    else{
        let frist100Cost = 0;
        let secound101To200cCost = 0;
        let remingeCost = 0;
        let totalCost = 0;

        if(paricepit <= 100){
            frist100Cost = paricepit * 5000;
            return frist100Cost; 
        }
        else if(paricepit <= 200){
            frist100Cost = 5000 * 100;
            secound101To200cCost = (paricepit - 100) * 4000;
            totalCost = frist100Cost + secound101To200cCost;
            return totalCost;
        }
        else{
            frist100Cost = 5000 * 100;
            secound101To200cCost = 4000 * 100;
            remingeCost = (paricepit - 200) * 3000;
            totalCost = frist100Cost + secound101To200cCost + remingeCost;
            return totalCost;

        }
        }
        }

        console.log(picnicBudget(202));
 */
/**
 * ফাংশন নাম AnaToVori
 * ফাংশন প্যারামিটার থাকবে Ana
 */

function AnaToVori(Ana){
  if(typeof Ana !=='number' || typeof Ana < 0){
    return 'Ana to vori kie cholo ta jana hoba'
  }
  else{
    const Vori = Ana * 0.0625;
    return Vori;
}
  }


   
console.log(AnaToVori(16));

/**
 * সিগারা সামুচা জিলাপির হিসাব
ফাংশন নাম দিতে হবে pandacost
 */




// function pandaCost(singra, shapucha, jalapi){

//     if(typeof singra !== 'number' || typeof shapucha !== 'number' || typeof jalapi !== 'number'){
//         return ' ami glapia khabo'
//     }
//     else{
//     let singraPrice = 7;
//     let shapuchaPrice = 10;
//     let jalapiPrice = 15;

//     let total = singra * singraPrice + shapucha * shapuchaPrice + jalapi * jalapiPrice;
//     return total;
//     }
// }
// console.log(pandaCost(4, 3, 1));