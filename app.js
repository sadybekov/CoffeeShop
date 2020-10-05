// espresso

function addone(item) {
  var addit = document.getElementById(item).innerHTML;
  addit++;
  document.getElementById(item).innerHTML = addit;

}

function subone(item) {
  var subit = document.getElementById(item).innerHTML;
  subit--;
  if (subit >= 0) {
    document.getElementById(item).innerHTML = subit;
  } else {
    subit = 0;
  }
}
/*
//americano
function addone(item) {
  var addit = document.getElementById(item).innerHTML;
  addit++;
  document.getElementById(item).innerHTML = addit;
}

function subone(item) {
  var subit = document.getElementById(item).innerHTML;
  subit--;
  if (subit >= 0) {
    document.getElementById(item).innerHTML = subit;
  } else {
    subit = 0;
  }
}

/*
//latte
function addlat() {
  var addlat = document.getElementById('latte').innerHTML;
  addit++;
  document.getElementById('latte').innerHTML = addit;
};

function sublat() {
  var sublat = document.getElementById('latte').innerHTML;
  subit--;
  if (subit >= 0) {
    document.getElementById('latte').innerHTML = subit;
  } else {
    subit = 0;
  }
};


//cappucino

function addone() {
  var addit = document.getElementById('cappucino').innerHTML;
  addit++;
  document.getElementById('cappucino').innerHTML = addit;
}

function subone() {
  var subit = document.getElementById('cappucino').innerHTML;
  subit--;
  if (subit >= 0) {
    document.getElementById('cappucino').innerHTML = subit;
  } else {
    subit = 0;
  }
}
//Hot Chocolate

function addone() {
  var addit = document.getElementById('hot').innerHTML;
  addit++;
  document.getElementById('hot').innerHTML = addit;
}

function subone() {
  var subit = document.getElementById('hot').innerHTML;
  subit--;
  if (subit >= 0) {
    document.getElementById('hot').innerHTML = subit;
  } else {
    subit = 0;
  }
}
// Muffin
function addone() {
  var addit = document.getElementById('muffin').innerHTML;
  addit++;
  document.getElementById('muffin').innerHTML = addit;
}

function subone() {
  var subit = document.getElementById('muffin').innerHTML;
  subit--;
  if (subit >= 0) {
    document.getElementById('muffin').innerHTML = subit;
  } else {
    subit = 0;
  }
}
//Almond Croissant
function addone() {
  var addit = document.getElementById('almond').innerHTML;
  addit++;
  document.getElementById('almond').innerHTML = addit;
}

function subone() {
  var subit = document.getElementById('almond').innerHTML;
  subit--;
  if (subit >= 0) {
    document.getElementById('almond').innerHTML = subit;
  } else {
    subit = 0;
  }
}
//Chocolata
function addone() {
  var addit = document.getElementById('chocolata').innerHTML;
  addit++;
  document.getElementById('chocolata').innerHTML = addit;
}

function subone() {
  var subit = document.getElementById('chocolata').innerHTML;
  subit--;
  if (subit >= 0) {
    document.getElementById('chocolata').innerHTML = subit;
  } else {
    subit = 0;
  }
} */