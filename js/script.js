var elem = document.getElementById("moveSlider");
var right = 0;
var nbrSlider = document.getElementsByClassName("imgContainer").length;
var id = setInterval(moveSlider, 10);
var vitesse = 10;
var interval = 2;
var widthSlider = 800;
elem.style.width = (nbrSlider * widthSlider) + 'px';
var maxPosition = (nbrSlider * widthSlider) - widthSlider;
var multiplicateur = 8;
console.log("SliderRefresh");

//Move fonctionne
function moveSlider() {
    var positionNextSlider = [];
    positionNextSlider.push(0);
    for (var i = 1; i < nbrSlider; i++) {
        let nbrSlider = widthSlider * i;
        positionNextSlider.push(nbrSlider);
    }

    if (right >= maxPosition) {
        clearInterval(id);
        right = maxPosition;
        elem.style.right = right + 'px';
        notMoveForReset();


    } else {
        right += interval;
        elem.style.right = right + 'px';
        for (var i = 0; i < positionNextSlider.length; i++) {
            if (right == positionNextSlider[i]) {
                notMove(right);
            }
        }



    }
}

//Reset fonctionne
function resetSlider() {
    if (right <= -1) {
        clearInterval(id);
        right = 0;
        elem.style.right = right + 'px';
        id = setInterval(moveSlider, vitesse);
    } else {
        right -= (interval + multiplicateur);
        elem.style.right = right + 'px';
    }

}


// NotMoveForReset fonctionne
function notMoveForReset() {
    id = setInterval(function () {
        clearInterval(id);
        id = setInterval(resetSlider, vitesse);
    }, 3000);

}

//notMove fonctionne
function notMove(right) {
    clearInterval(id);
    elem.style.right = right + 'px';
    id = setInterval(function () {
        clearInterval(id);
        id = setInterval(moveSlider, vitesse);
    }, 3000);

}

//Next fonctionne
function nextSlider() {
    var positionNextSlider = [];
    positionNextSlider.push(0);
    for (var i = 1; i < nbrSlider; i++) {
        let nbrSlider = widthSlider * i;
        positionNextSlider.push(nbrSlider);
    }
    if (positionNextSlider.length == nbrSlider) {
        for (var i = 0; i < positionNextSlider.length; i++) {
            if (right == positionNextSlider[positionNextSlider.length - 1]) {
                right = positionNextSlider[0];
                elem.style.right = right + 'px';
                notMove(right);
                break;
            } else {
                if (right >= positionNextSlider[i] && right < positionNextSlider[i + 1]) {
                    right = positionNextSlider[i + 1];
                    elem.style.right = right + 'px';
                    notMove(right);
                    break;
                }
            }
        }
    }
}

//Right fonctionne
function rightSlider() {
    var positionNextSlider = [];
    let valeur = nbrSlider * widthSlider;

    for (var i = 0; i < nbrSlider; i++) {
        valeur = valeur - 800;
        positionNextSlider.push(valeur);
    }
    for (var i = 0; i < positionNextSlider.length; i++) {
        console.log("Verification du tableau positionNextSlider numero " + i + " : " + positionNextSlider[i]);
    }
    if (positionNextSlider.length == (nbrSlider)) {
        let positionLast = nbrSlider - 1;
        for (var i = 0; i < positionNextSlider.length; i++) {
            if (right == 0 && right <= widthSlider) {
                right = positionNextSlider[0];
                console.log(positionNextSlider[0]);
                elem.style.right = right + 'px';
                notMove(right);
                break;
            } else {
                if (right > positionNextSlider[i] && right <= positionNextSlider[i - 1]) {
                    right = positionNextSlider[i];
                    console.log(positionNextSlider[i]);
                    elem.style.right = right + 'px';
                    notMove(right);
                    break;
                }
            }
        }


    }
}


