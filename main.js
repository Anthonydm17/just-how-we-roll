/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
 let d6Mean = document.querySelector("#d6-rolls-mean");
 let d6Median = document.querySelector("#d6-rolls-median");
 let d6Mode = document.querySelector("#d6-rolls-mode");
 let d6Image = document.querySelector("#d6-roll");
 
 let double6Mean = document.querySelector("#double-d6-rolls-mean");
 let double6Median = document.querySelector("#double-d6-rolls-median");
 let double6Mode = document.querySelector("#double-d6-rolls-mode");
 let double6Image1 = document.querySelector("#double-d6-roll-1");
 let double6Image2 = document.querySelector("#double-d6-roll-2");
 
 let d12Mean = document.querySelector("#d12-rolls-mean");
 let d12Median = document.querySelector("#d12-rolls-median");
 let d12Mode = document.querySelector("#d12-rolls-mode");
 let d12Image = document.querySelector("#d12-roll");
 
 let d20Mean = document.querySelector("#d20-rolls-mean");
 let d20Median = document.querySelector("#d20-rolls-median");
 let d20Mode = document.querySelector("#d20-rolls-mode");
 let d20Image = document.querySelector("#d20-roll");

function defaultDisplay() {

  d6Mean.innerText = "NA";
  d6Median.innerText = "NA";
  d6Mode.innerText = "NA";
  d6Image.src = "images/start/d6.png";

  double6Mean.innerText = "NA";
  double6Median.innerText = "NA";
  double6Mode.innerText = "NA";
  double6Image1.src = "images/start/d6.png";
  double6Image2.src = "images/start/d6.png";

  d12Mean.innerText = "NA";
  d12Median.innerText = "NA";
  d12Mode.innerText = "NA";
  d12Image.src = "images/start/d12.jpeg";

  d20Mean.innerText = "NA";
  d20Median.innerText = "NA";
  d20Mode.innerText = "NA";
  d20Image.src = "images/start/d20.jpg";
}



defaultDisplay();
/*******************
 * EVENT LISTENERS *
 *******************/

 let d6 = document.querySelector("#d6");
d6.addEventListener("click", function () {
  let d6Roll = getRandomNumber(6);
  console.log(d6Roll);

  if (d6Roll === 1) {
    d6Image.src = "images/d6/1.png";
  }
  else if (d6Roll === 2) {
    d6Image.src = "images/d6/2.png";
  }
  else if (d6Roll === 3) {
    d6Image.src = "images/d6/3.png";
  }
  else if (d6Roll === 4) {
    d6Image.src = "images/d6/4.png";
  }
  else if (d6Roll === 5) {
    d6Image.src = "images/d6/5.png";
  }
  else if (d6Roll === 6) {
    d6Image.src = "images/d6/6.png";
  }
  sixes.push(d6Roll);
  d6Mean.innerText = mean(sixes);
  d6Median.innerText = median(sixes);
  d6Mode. innerText = getMode(sixes);

})


let double6 = document.querySelector("#double-d6");
double6.addEventListener("click", function () {

  let double6Roll = getRandomNumber(6);
  let double6Roll2 = getRandomNumber(6);
  console.log(double6Roll);
  console.log(double6Roll2);


  if (double6Roll === 1) {
    double6Image1.src = "images/d6/1.png";
  }
  else if (double6Roll === 2) {
    double6Image1.src = "images/d6/2.png";
  }
  else if (double6Roll === 3) {
    double6Image1.src = "images/d6/3.png";
  }
  else if (double6Roll === 4) {
    double6Image1.src = "images/d6/4.png";
  }
  else if (double6Roll === 5) {
    double6Image1.src = "images/d6/5.png";
  }
  else if (double6Roll === 6) {
    double6Image1.src = "images/d6/6.png";
  }



  if (double6Roll2 === 1) {
    double6Image2.src = "images/d6/1.png";
  }
  else if (double6Roll2 === 2) {
    double6Image2.src = "images/d6/2.png";
  }
  else if (double6Roll2 === 3) {
    double6Image2.src = "images/d6/3.png";
  }
  else if (double6Roll2 === 4) {
    double6Image2.src = "images/d6/4.png";
  }
  else if (double6Roll2 === 5) {
    double6Image2.src = "images/d6/5.png";
  }
  else if (double6Roll2 === 6) {
    double6Image2.src = "images/d6/6.png";
  }

  doubleSixes.push(double6Roll + double6Roll2);
  double6Mean.innerText = mean(doubleSixes);
  double6Median.innerText = median(doubleSixes);
  double6Mode.innerText = getMode(doubleSixes);
})

let d12 = document.querySelector('#d12');
d12.addEventListener("click", function () {
  let d12Roll = getRandomNumber(12);
  console.log(d12Roll);

  if (d12Roll === 1) {
    d12Image.src = "images/numbers/1.png";
  }
  else if (d12Roll === 2) {
    d12Image.src = "images/numbers/2.png";
  }
  else if (d12Roll === 3) {
    d12Image.src = "images/numbers/3.png";
  }
  else if (d12Roll === 4) {
    d12Image.src = "images/numbers/4.png";
  }
  else if (d12Roll === 5) {
    d12Image.src = "images/numbers/5.png";
  }
  else if (d12Roll === 6) {
    d12Image.src = "images/numbers/6.png";
  }
  else if (d12Roll === 7) {
    d12Image.src = "images/numbers/7.png";
  }
  else if (d12Roll === 8) {
    d12Image.src = "images/numbers/8.png";
  }
  else if (d12Roll === 9) {
    d12Image.src = "images/numbers/9.png";
  }
  else if (d12Roll === 10) {
    d12Image.src = "images/numbers/10.png";
  }
  else if (d12Roll === 11) {
    d12Image.src = "images/numbers/11.png";
  }
  else if (d12Roll === 12) {
    d12Image.src = "images/numbers/12.png";
  }

  twelves.push(d12Roll);
  d12Mean.innerText = mean(twelves);
  d12Median.innerText = median(twelves);
  d12Mode.innerText = getMode(twelves);

})


let d20 = document.querySelector('#d20');
d20.addEventListener("click", function () {
  let d20Roll = getRandomNumber(20);
  console.log(d20Roll);

  if (d20Roll === 1) {
    d20Image.src = "images/numbers/1.png";
  }
  else if (d20Roll === 2) {
    d20Image.src = "images/numbers/2.png";
  }
  else if (d20Roll === 3) {
    d20Image.src = "images/numbers/3.png";
  }
  else if (d20Roll === 4) {
    d20Image.src = "images/numbers/4.png";
  }
  else if (d20Roll === 5) {
    d20Image.src = "images/numbers/5.png";
  }
  else if (d20Roll === 6) {
    d20Image.src = "images/numbers/6.png";
  }
  else if (d20Roll === 7) {
    d20Image.src = "images/numbers/7.png";
  }
  else if (d20Roll === 8) {
    d20Image.src = "images/numbers/8.png";
  }
  else if (d20Roll === 9) {
    d20Image.src = "images/numbers/9.png";
  }
  else if (d20Roll === 10) {
    d20Image.src = "images/numbers/10.png";
  }
  else if (d20Roll === 11) {
    d20Image.src = "images/numbers/11.png";
  }
  else if (d20Roll === 12) {
    d20Image.src = "images/numbers/12.png";
  }
  else if (d20Roll === 13) {
    d20Image.src = "images/numbers/13.png";
  }
  else if (d20Roll === 14) {
    d20Image.src = "images/numbers/14.png";
  }
  else if (d20Roll === 15) {
    d20Image.src = "images/numbers/15.png";
  }
  else if (d20Roll === 16) {
    d20Image.src = "images/numbers/16.png";
  }
  else if (d20Roll === 17) {
    d20Image.src = "images/numbers/17.png";
  }
  else if (d20Roll === 18) {
    d20Image.src = "images/numbers/18.png";
  }
  else if (d20Roll === 19) {
    d20Image.src = "images/numbers/19.png";
  }
  else if (d20Roll === 20) {
    d20Image.src = "images/numbers/20.png";
  }

  twenties.push(d20Roll);
  d20Mean.innerText = mean(twenties);
  d20Median.innerText = median(twenties);
  d20Mode.innerText = getMode(twenties)
})


 


/******************
 * RESET FUNCTION *
 ******************/

 let reset = document.querySelector('#reset-button');
 reset.addEventListener("click", function () {
  defaultDisplay();
})

/****************
 * MATH SECTION *
 ****************/

 function mean(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum / arr.length).toFixed(2);
}




// median (center)
function median(arr) {
  let sortedNumbers = sortByNumber(arr);

  if (sortedNumbers.length === 1) {
    return sortedNumbers[0];
  }
  if (sortedNumbers.length === 2) {
    return (sortedNumbers[0] + sortedNumbers[1]) / 2;
  }
  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[(sortedNumbers.length / 2) - 1] + sortedNumbers[(sortedNumbers.length / 2)]) / 2;
  }
  else {
    return (sortedNumbers[Math.floor(sortedNumbers.length / 2)]).toFixed(2);
  }
}


function getMedian(arr){
  if(arr.length === 0){
    return 0;
  }

  let sorted = sortByNumber(arr);

  if (sorted.length %2 === 0){
    // array is even

  }
  else{
    // array is odd
    let middleIndex = Math.floor(sorted.length/2); 
  }
}



