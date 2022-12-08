
let previewStatePressed = input.buttonIsPressed(Button.A);
let bornin = control.millis();

let makej = function() {
   if (input.buttonIsPressed(Button.A)) {
       let actualStateA = input.buttonIsPressed(Button.A) 

       {
        bornin = control.millis(); // ulození času stisku
        previewStatePressed = true;
       }
   } else {
       if (previewStatePressed) {
           basic.showNumber(control.millis() - bornin) //rozdíl časů
           previewStatePressed = false;
       }
   }
}
while (true) {
   makej()
}






//6. radek misto input.buttonIsPressed(Buton.A) muze byt true ()

// let number1 = 4
// let previewStateAPressed = input.buttonIsPressed(Button.A);

// let borin = control.millis();

// let makej2A = () => {
//     number1 -= 1
//     whaleysans.showNumber(number1)

// }
// let makej2B = () => {
//     number1 += 1
//     whaleysans.showNumber(number1)
// }

// let makej = function() {
// }

// input.onButtonPressed(Button.A, makej2A);
// input.onButtonPressed(Button.B, makej2B);

// let makej = function () {
//     if (input.buttonIsPressed(Button.A)) {
// /        let actualStateA = input.buttonIsPressed(Button.A) 

 //       {
 //        number1 -= 1
 //        previewStatePressed = true;
//
 //       }
 //   } else {
 //       previewStatePressed = false;
//    }
//
//    if (input.buttonIsPressed(Button.B)) {
 //       let actualStateB = input.buttonIsPressed(Button.B)
 //       {
 //        number1 += 1
//         previewStatePressed = true;
//
 //       }
 //   } else {
  //      previewStatePressed = false;
 //   }
//
 //   whaleysans.showNumber(number1)
//}


    
//while (true) {
//    makej()
//}