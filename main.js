const button = document.getElementById('nyc');
const content = document.getElementById('nyc-content');

button.addEventListener('click', function() {
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
  } else {
    content.classList.add('hidden');
  }
});

const button2 = document.getElementById('london');
const content2 = document.getElementById('london-content');

button2.addEventListener('click', function() {
  if (content2.classList.contains('hidden')) {
    content2.classList.remove('hidden');
  } else {
    content2.classList.add('hidden');
  }
});

const button3 = document.getElementById('futian');
const content3 = document.getElementById('futian-content');

button3.addEventListener('click', function() {
  if (content3.classList.contains('hidden')) {
    content3.classList.remove('hidden');
  } else {
    content3.classList.add('hidden');
  }
});

const button4 = document.getElementById('shanghai');
const content4 = document.getElementById('shanghai-content');

button4.addEventListener('click', function() {
  if (content4.classList.contains('hidden')) {
    content4.classList.remove('hidden');
  } else {
    content4.classList.add('hidden');
  }
});

const button5 = document.getElementById('fushun');
const content5 = document.getElementById('fushun-content');

button5.addEventListener('click', function() {
  if (content5.classList.contains('hidden')) {
    content5.classList.remove('hidden');
  } else {
    content5.classList.add('hidden');
  }
});

var myIndex = 0;
var myIndex2 = 0;
var myIndex3 = 0;
var myIndex4 = 0;
var myIndex5 = 0;

carousel();
carousel2();
carousel3();
carousel4();
carousel5();

function carousel() {
  var i;
  var x = document.getElementsByClassName("nyc-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function carousel2() {
  var i2;
  var x2 = document.getElementsByClassName("london-img");
  for (i2 = 0; i2 < x2.length; i2++) {
    x2[i2].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x2.length) {myIndex2 = 1}    
  x2[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 2000); // Change image every 2 seconds
}

function carousel3() {
  var i3;
  var x3 = document.getElementsByClassName("futian-img");
  for (i3 = 0; i3 < x3.length; i3++) {
    x3[i3].style.display = "none";  
  }
  myIndex3++;
  if (myIndex3 > x3.length) {myIndex3 = 1}    
  x3[myIndex3-1].style.display = "block";  
  setTimeout(carousel3, 2000); // Change image every 2 seconds
}

function carousel4() {
  var i4;
  var x4 = document.getElementsByClassName("shanghai-img");
  for (i4 = 0; i4 < x4.length; i4++) {
    x4[i4].style.display = "none";  
  }
  myIndex4++;
  if (myIndex4 > x4.length) {myIndex4 = 1}    
  x4[myIndex4-1].style.display = "block";  
  setTimeout(carousel4, 2000); // Change image every 2 seconds
}

function carousel5() {
  var i5;
  var x5 = document.getElementsByClassName("fushun-img");
  for (i5 = 0; i5 < x5.length; i5++) {
    x5[i5].style.display = "none";  
  }
  myIndex5++;
  if (myIndex5 > x5.length) {myIndex5 = 1}    
  x5[myIndex5-1].style.display = "block";  
  setTimeout(carousel5, 2000); // Change image every 2 seconds
}
// function carousel() {
//   var i2;
//   var x2 = document.getElementsByClassName("london-img");
//   for (i2 = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
