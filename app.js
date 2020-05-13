// Output need to be hidden at first
document.querySelector('#output').style.visibility = 'hidden';

defaultFunction();


// When no change observed in select option
function defaultFunction() {
    kilogramsFunction();
}


document.querySelector('#weight-type').addEventListener('change', function (e) {

    // Get weight type
    let weightType = e.target.value;

    if (weightType === 'Kilograms') {
        kilogramsFunction();
    }

    else if (weightType === 'Grams') {
        gramsFunction();
    }

    else if (weightType === 'Ounces') {
        ouncesFunction();
    }

    else if (weightType === 'Pounds') {
        poundsFunction();
    }
});


function kilogramsFunction() {
    // Adding event listener to input
    let kgsInput = document.querySelector('#weightInput').addEventListener('input', function (e) {

        // Kg input value
        let kgs = e.target.value;

        // Make output visible
        document.querySelector('#output').style.visibility = 'visible';

        //Perform required calculation for respective conversion

        // Kgs to grams
        document.querySelector('#gramsOutput').innerHTML = `<h4>Grams :</h4>
        ${kgs * 1000}`;

        // Kgs to pounds
        document.querySelector('#poundsOutput').innerHTML = `<h4>Pounds :</h4>
        ${kgs * 2.20462}`;

        // Kgs to ounces
        document.querySelector('#ouncesOutput').innerHTML = `<h4>Ounces :</h4>
        ${kgs * 35.274}`;
    });

}

function gramsFunction() {
    // Adding event listener to input
    let gramsInput = document.querySelector('#weightInput').addEventListener('input', function (e) {

        // Kg input value
        let grams = e.target.value;

        // Make output visible
        document.querySelector('#output').style.visibility = 'visible';

        // Perform required calculation for respective conversion

        // Grams to pounds
        document.querySelector('#gramsOutput').innerHTML = `<h4>Pounds :</h4> 
        ${grams * 0.00220462}`;

        // Grams to kgs
        document.querySelector('#poundsOutput').innerHTML = `<h4>Kilograms :</h4>
        ${grams * 0.001}`;

        // Grams to ounces
        document.querySelector('#ouncesOutput').innerHTML = `<h4>Ounces :</h4> 
        ${grams * 0.035274}`;
    });


}

function ouncesFunction() {
    // Adding event listener to input
    let ouncesInput = document.querySelector('#weightInput').addEventListener('input', function (e) {

        // Kg input value
        let ounces = e.target.value;

        // Make output visible
        document.querySelector('#output').style.visibility = 'visible';

        //Perform required calculation for respective conversion

        // Ounces to grams
        document.querySelector('#gramsOutput').innerHTML = `<h4>Grams :</h4> 
        ${ounces * 28.3495}`;

        // Ounces to kgs
        document.querySelector('#poundsOutput').innerHTML = `<h4>Kilograms :</h4>
        ${ounces * 0.0283495}`;

        // Ounces to pounds
        document.querySelector('#ouncesOutput').innerHTML = `<h4>Pounds :</h4> 
        ${ounces * 0.0625}`;
    });

}

function poundsFunction() {
    // Adding event listener to input
    let poundsInput = document.querySelector('#weightInput').addEventListener('input', function (e) {

        // Kg input value
        let pounds = e.target.value;

        // Make output visible
        document.querySelector('#output').style.visibility = 'visible';

        // Perform required calculation for respective conversion

        // Pounds to grams
        document.querySelector('#gramsOutput').innerHTML = `<h4>Grams :</h4> 
        ${pounds * 453.592}`;

        // Pounds to kgs
        document.querySelector('#poundsOutput').innerHTML = `<h4>Kilograms :</h4>
        ${pounds * 0.453592}`;

        // Pounds to ounces
        document.querySelector('#ouncesOutput').innerHTML = `<h4>Ounces :</h4> 
        ${pounds * 16}`;
    });

}