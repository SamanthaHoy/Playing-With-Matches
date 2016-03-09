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

function dispMatchingNumber (num1,num2){
  document.getElementById("message").innerHTML =
    "These numbers match for "  + num1 + " with a count of " + num2 ;
}

var numMatched ;
var noOfMatches = 0 ;

var element1 = document.getElementById("divSection1");
element1.innerHTML = getRandomIntInclusive(1,9);

var element2 = document.getElementById("divSection2");
element2.innerHTML = getRandomIntInclusive(1,9);

var element3 = document.getElementById("divSection3");
element3.innerHTML = getRandomIntInclusive(1,9);

if (element1.innerHTML === element2.innerHTML) {
      // document.getElementsById("divSection3").classList.remove("highlight");
    document.getElementById("divSection1").classList.add("highlight");
    document.getElementById("divSection2").classList.add("highlight");
    numMatched = document.getElementById("divSection1").innerHTML ;
    noOfMatches++;
    dispMatchingNumber(numMatched,noOfMatches);
  }
if (element2.innerHTML === element3.innerHTML) {
    document.getElementById("divSection2").classList.add("highlight");
    document.getElementById("divSection3").classList.add("highlight");
    numMatched = document.getElementById("divSection2").innerHTML ;
    noOfMatches++;
    dispMatchingNumber(numMatched,noOfMatches);
  }

if (element1.innerHTML === element3.innerHTML) {
    document.getElementById("divSection1").classList.add("highlight");
    document.getElementById("divSection3").classList.add("highlight");
    numMatched = document.getElementById("divSection3").innerHTML ;
    noOfMatches++;
    dispMatchingNumber(numMatched,noOfMatches);
  }
