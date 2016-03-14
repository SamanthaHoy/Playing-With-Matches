function getRandomIntInclusive(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function calcMatches (matchCount){
//   this.matchCount = matchCount;
//   if ((element1.innerHTML === element2.innerHTML) &&
//   (element2.innerHTML === element3.innerHTML) &&
//   (element1.innerHTML === element3.innerHTML))
//     { return this.matchCount-- ;}
//   else
//     { return this.matchCount;}
// }

// function dispMatchingNumber (num1,num2,num3,num4){
// 	var dispNum;
//   if (num1 !== 0 && num2 !==0 && num3 !==0){
//     dispNum = num1 + "," + num2 + "," + num3 ;
//     }
//   else if (num1 !==0 && num2 !==0){
//     dispNum = num1 + "," + num2;
//     }
//   else if (num1 !==0 && num3 !==0){
//     dispNum = num1 + "," + num3;
//     }
//   else if (num2 !==0 && num3 !==0){
//       dispNum = num2 + "," + num3;
//     }
//   else if (num3 !==0){
//     dispNum = num3;
//     }
//   else if (num2 !==0){
//     dispNum = num2;
//     }
//   else if (num1 !==0){
//       dispNum = num1;
//       }
//
//   document.getElementById("message").innerHTML =
//     "These numbers match for "  + dispNum + " with a count of " + num4 ;
// };

function dispMatchingNumberRow (row,mesg,num){
	document.getElementById(mesg).innerHTML =
    "In row" + row + " matching numbers found for " + num ;
}
function dispMatchingNumberCol (col,mesg,num){
  document.getElementById(mesg).innerHTML =
    "In col" + col + " matching numbers found for " + num ;
}
function dispMatchingNumberDiag (coordinates,mesg,num){
  document.getElementById(mesg).innerHTML =
    "In diagonal blocks " + coordinates + " matching numbers found for " + num ;
}

var numMatched = 0;
var numMatched2 = 0;
var numMatched3 = 0;
var numMatched4 = 0;
var numMatched5 = 0;
var numMatched6 = 0;
var numMatched7 = 0;
var numMatched8 = 0;

// var noOfMatches = 0;
var element1 = document.getElementById("divSection1");
element1.innerHTML = getRandomIntInclusive(1,9);

var element2 = document.getElementById("divSection2");
element2.innerHTML = getRandomIntInclusive(1,9);

var element3 = document.getElementById("divSection3");
element3.innerHTML = getRandomIntInclusive(1,9);

var element4 = document.getElementById("divSection4");
element4.innerHTML = getRandomIntInclusive(1,9);

var element5 = document.getElementById("divSection5");
element5.innerHTML = getRandomIntInclusive(1,9);

var element6 = document.getElementById("divSection6");
element6.innerHTML = getRandomIntInclusive(1,9);

var element7 = document.getElementById("divSection7");
element7.innerHTML = getRandomIntInclusive(1,9);

var element8 = document.getElementById("divSection8");
element8.innerHTML = getRandomIntInclusive(1,9);

var element9 = document.getElementById("divSection9");
element9.innerHTML = getRandomIntInclusive(1,9);

// document.getElementById("myButton").addEventListener("click", reloadPage);
document.getElementById("myButton").addEventListener("click", function(){
    location.reload();
});
// row1
if (element1.innerHTML === element2.innerHTML) {
      // document.getElementsById("divSection3").classList.remove("highlight");
    document.getElementById("divSection1").classList.add("highlight");
    document.getElementById("divSection2").classList.add("highlight");
    numMatched = document.getElementById("divSection1").innerHTML ;
    // noOfMatches++;
    dispMatchingNumberRow(1,"message1",numMatched);
}
if (element2.innerHTML === element3.innerHTML) {
    document.getElementById("divSection2").classList.add("highlight");
    document.getElementById("divSection3").classList.add("highlight");
    numMatched = document.getElementById("divSection2").innerHTML ;
    // noOfMatches++;
    dispMatchingNumberRow(1,"message1",numMatched);
}
if (element1.innerHTML === element3.innerHTML) {
    document.getElementById("divSection1").classList.add("highlight");
    document.getElementById("divSection3").classList.add("highlight");
    numMatched = document.getElementById("divSection3").innerHTML ;
    // noOfMatches++;
    dispMatchingNumberRow(1,"message1",numMatched);
}

// row2
if (element4.innerHTML === element5.innerHTML) {
      // document.getElementsById("divSection3").classList.remove("highlight");
    document.getElementById("divSection4").classList.add("highlight");
    document.getElementById("divSection5").classList.add("highlight");
    numMatched2 = document.getElementById("divSection4").innerHTML ;
    // noOfMatches++;
    dispMatchingNumberRow(2,"message2",numMatched2);
}
if (element5.innerHTML === element6.innerHTML) {
    document.getElementById("divSection5").classList.add("highlight");
    document.getElementById("divSection6").classList.add("highlight");
    numMatched2 = document.getElementById("divSection5").innerHTML ;
    // noOfMatches++;
    dispMatchingNumberRow(2,"message2",numMatched2);
}
if (element4.innerHTML === element6.innerHTML) {
    document.getElementById("divSection4").classList.add("highlight");
    document.getElementById("divSection6").classList.add("highlight");
    numMatched2 = document.getElementById("divSection4").innerHTML ;
    // noOfMatches++;
    dispMatchingNumberRow(2,"message2",numMatched2);
}

// row3
if (element7.innerHTML === element8.innerHTML) {
      // document.getElementsById("divSection3").classList.remove("highlight");
    document.getElementById("divSection7").classList.add("highlight");
    document.getElementById("divSection8").classList.add("highlight");
    numMatched3 = document.getElementById("divSection7").innerHTML ;
    // noOfMatches++;
    dispMatchingNumberRow(3,"message3",numMatched3);
}
    if (element8.innerHTML === element9.innerHTML) {
    document.getElementById("divSection8").classList.add("highlight");
    document.getElementById("divSection9").classList.add("highlight");
    numMatched3 = document.getElementById("divSection8").innerHTML ;
    // noOfMatches++;
    dispMatchingNumberRow(3,"message3",numMatched3);
}
if (element7.innerHTML === element9.innerHTML) {
    document.getElementById("divSection7").classList.add("highlight");
    document.getElementById("divSection9").classList.add("highlight");
    numMatched3 = document.getElementById("divSection7").innerHTML ;
    // noOfMatches++;
    dispMatchingNumberRow(3,"message3",numMatched3);
}
//  column 1
if (element1.innerHTML === element4.innerHTML) {
    document.getElementById("divSection1").classList.add("highlight");
    document.getElementById("divSection4").classList.add("highlight");
    numMatched4 = document.getElementById("divSection1").innerHTML ;
    // noOfMatches++;
    dispMatchingNumberCol(1,"message4",numMatched4);
}
if (element4.innerHTML === element7.innerHTML) {
    document.getElementById("divSection4").classList.add("highlight");
    document.getElementById("divSection7").classList.add("highlight");
    numMatched4 = document.getElementById("divSection4").innerHTML ;
    // noOfMatches++;
      dispMatchingNumberCol(1,"message4",numMatched4);
}
if (element1.innerHTML === element7.innerHTML) {
    document.getElementById("divSection1").classList.add("highlight");
    document.getElementById("divSection7").classList.add("highlight");
    numMatched4 = document.getElementById("divSection1").innerHTML ;
    // noOfMatches++;
      dispMatchingNumberCol(1,"message4",numMatched4);
}

// column 2

if (element2.innerHTML === element5.innerHTML){
  document.getElementById("divSection2").classList.add("highlight");
  document.getElementById("divSection5").classList.add("highlight");
  numMatched5 = document.getElementById("divSection2").innerHTML ;
  dispMatchingNumberCol(2,"message5",numMatched5);
}
if (element5.innerHTML === element8.innerHTML){
  document.getElementById("divSection5").classList.add("highlight");
  document.getElementById("divSection8").classList.add("highlight");
  numMatched5 = document.getElementById("divSection5").innerHTML;
  dispMatchingNumberCol(2,"message5",numMatched5);
}
if (element2.innerHTML === element8.innerHTML){
  document.getElementById("divSection2").classList.add("highlight");
  document.getElementById("divSection8").classList.add("highlight");
  numMatched5 = document.getElementById("divSection2").innerHTML ;
  dispMatchingNumberCol(2,"message5",numMatched5);
}

// column 3

if (element3.innerHTML === element6.innerHTML){
  document.getElementById("divSection3").classList.add("highlight");
  document.getElementById("divSection6").classList.add("highlight");
  numMatched6 = document.getElementById("divSection3").innerHTML ;
  dispMatchingNumberCol(3,"message6",numMatched6);
}
if (element6.innerHTML === element9.innerHTML){
  document.getElementById("divSection6").classList.add("highlight");
  document.getElementById("divSection9").classList.add("highlight");
  numMatched6 = document.getElementById("divSection6").innerHTML;
  dispMatchingNumberCol(3,"message6",numMatched6);
}
if (element3.innerHTML === element9.innerHTML){
  document.getElementById("divSection3").classList.add("highlight");
  document.getElementById("divSection9").classList.add("highlight");
  numMatched6 = document.getElementById("divSection2").innerHTML ;
  dispMatchingNumberCol(3,"message6",numMatched6);
}

// diagonal top left to bottom right
if (element1.innerHTML === element5.innerHTML &&
    element5.innerHTML === element9.innerHTML){
    document.getElementById("divSection1").classList.add("highlight");
    document.getElementById("divSection5").classList.add("highlight");
    document.getElementById("divSection9").classList.add("highlight");
    numMatched7 = document.getElementById("divSection1").innerHTML;
    dispMatchingNumberDiag("1,5,9","message7",numMatched7);
    // console.log ("Diagonal 1,5,9:" + numMatched7);
    }
  else if (element1.innerHTML === element5.innerHTML ){
    document.getElementById("divSection1").classList.add("highlight");
    document.getElementById("divSection5").classList.add("highlight");
    numMatched7 = document.getElementById("divSection1").innerHTML;
    dispMatchingNumberDiag("1,5","message7",numMatched7);
    // console.log ("Diagonal 1-5: " + numMatched7);
    }
    else if (element5.innerHTML === element9.innerHTML){
      document.getElementById("divSection5").classList.add("highlight");
      document.getElementById("divSection9").classList.add("highlight");
      numMatched7 = document.getElementById("divSection5").innerHTML;
      dispMatchingNumberDiag("5,9","message7",numMatched7);
      // console.log ("Diagonal 5-9: " + numMatched7);
    }

// diagonal top right to bottom left
if (element3.innerHTML === element5.innerHTML &&
    element5.innerHTML === element9.innerHTML){
    document.getElementById("divSection3").classList.add("highlight");
    document.getElementById("divSection5").classList.add("highlight");
    document.getElementById("divSection7").classList.add("highlight");
    numMatched8 = document.getElementById("divSection3").innerHTML;
    dispMatchingNumberDiag("3,5,7","message8",numMatched8);
    // console.log ("Diagonal 3,5,7: " + numMatched8);
    }
  else if (element3.innerHTML === element5.innerHTML){
    document.getElementById("divSection3").classList.add("highlight");
    document.getElementById("divSection5").classList.add("highlight");
    numMatched8 = document.getElementById("divSection3").innerHTML;
    dispMatchingNumberDiag("3,5","message8",numMatched8);
    console.log ("Diagonal 3-5: " + numMatched8);
    }
    else if (element5.innerHTML === element7.innerHTML){
      document.getElementById("divSection5").classList.add("highlight");
      document.getElementById("divSection7").classList.add("highlight");
      numMatched8 = document.getElementById("divSection5").innerHTML;
      dispMatchingNumberDiag("5,7","message8",numMatched8);
      console.log ("Diagonal 5-7: " + numMatched8);
    }
