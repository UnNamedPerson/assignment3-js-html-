var bodyTag;
var makeSelectTag;
var modelSelectTag;
var trimOptionsSelectTag;
// var imageSRC;
// divs declarations.
var makeDiv;
var modelDiv;
var trimOptionsDiv;
var h3Tag;
var h1TagSpace; // this tag is created to allocate space between the image and the last select element.
var imageDescriptionDiv;

window.onload = function () {

    bodyTag = document.getElementsByTagName("body")[0];

    makes = []; // array of makes that was never used throughuot of this document.
    chevyModels = []; // another array that was never used.

    makeSelectTag = document.createElement("select");
    // make select element created with id
    makeSelectTag.id = "makeSelect";
    makeSelectTag.className = "select";

    modelSelectTag = document.createElement("select");
    // model select element created with id
    modelSelectTag.id = "modelSelect";
    modelSelectTag.className = "select";

    trimOptionsSelectTag = document.createElement("select");
    // trim options select element created with id
    trimOptionsSelectTag.id = "trimOptions";
    trimOptionsSelectTag.className = "select";

    makeDiv = document.createElement("div");
    // make division created with class name
    makeDiv.className = "make-div";

    modelDiv = document.createElement("div");
    // model division created with class name
    modelDiv.className = "model-div";

    trimOptionsDiv = document.createElement("div");
    // trim options division created with class name
    trimOptionsDiv.className = "trimOptions-div";

    // description tag created as h3 element.
    h3Tag = document.createElement("h3");
    h3Tag.id = "h3";
    h3Tag.appendChild(document.createTextNode(". "));

    // h1TagSpace = document.createElement("h1Space");
    // h1TagSpace.id = "h3";
    // h1TagSpace.appendChild(document.createTextNode(" "));

    // image and description division created with class name.
    imageDescriptionDiv = document.createElement("div");
    imageDescriptionDiv.className = "image-Description";

    // the function that builds the first selection options (make) and from which the rest of the selections will follow.
    populateSelect1(carsJSON.makes);

}

// a function for populating the first select tag.
function populateSelect1(makes) {

    while (makeSelectTag.childElementCount > 0) {
        console.log("inside model select cleaning");
        console.log(makeSelectTag.childElementCount);
        makeSelectTag.removeChild(makeSelectTag.lastChild);
    }
    if (modelDiv.childElementCount > 0) {
        modelDiv.removeChild(modelDiv.lastChild);
    }

    var optionTag = document.createElement("option");
    optionTag.appendChild(document.createTextNode("please choose a make. ")); // initial choice in the select.
    makeSelectTag.appendChild(optionTag); // adding the first option to the make select tag.

    for (i = 0; i < makes.length; i++) {
        var optionTag = document.createElement("option");
        optionTag.setAttribute("value", makes[i].makeName); // setting the attributes makes.

        // when choosing a make option.
        makeSelectTag.onchange = function () {
            while (imageDescriptionDiv.childElementCount > 0) { // handels the image and description tags clearing
                console.log("inside imageDescriptionDiv cleaning");
                imageDescriptionDiv.removeChild(imageDescriptionDiv.lastChild);
            }
            while (trimOptionsSelectTag.childElementCount > 0) { // handels the trim options tag clearing.
                console.log("inside trim select cleaning");
                console.log(trimOptionsSelectTag.childElementCount);
                trimOptionsSelectTag.removeChild(trimOptionsSelectTag.lastChild);
            }
            if (trimOptionsDiv.childElementCount > 0) { // maight be unncessary
                trimOptionsDiv.removeChild(trimOptionsDiv.lastChild);
            }
            console.log(carsJSON.makes[this.selectedIndex - 1].makeName);
            populateSelect2(carsJSON.makes[this.selectedIndex - 1].models, carsJSON.makes[this.selectedIndex - 1].makeName);  // passing models that were chosen.
        };

        optionTag.appendChild(document.createTextNode(makes[i].makeName));
        makeSelectTag.appendChild(optionTag);
    }
    makeDiv.appendChild(makeSelectTag);
    bodyTag.appendChild(makeDiv);
}

function populateSelect2(models, makeString) {

    while (modelSelectTag.childElementCount > 0) {
        console.log("inside model select cleaning");
        console.log(modelSelectTag.childElementCount);
        modelSelectTag.removeChild(modelSelectTag.lastChild);
    }

    var optionTag = document.createElement("option");
    optionTag.appendChild(document.createTextNode("please choose a model.")); // initial choice in the select.
    modelSelectTag.appendChild(optionTag);

    for (i = 0; i < models.length; i++) {
        var optionTag = document.createElement("option");
        optionTag.setAttribute("value", models[i].modelName); // setting the attributes of models.
        // console.log(models[0].modelName);
        modelSelectTag.onchange = function () {
            h3Tag.replaceChild(document.createTextNode(" "), h3Tag.lastChild);
            console.log(models[this.selectedIndex - 1].modelName);
            populateSelect3(models[this.selectedIndex - 1].trimOptions, makeString, models[this.selectedIndex - 1].modelName); // passing trim options to the thrid select function.
        };
        optionTag.appendChild(document.createTextNode(models[i].modelName));
        modelSelectTag.appendChild(optionTag);
    }

    modelDiv.appendChild(modelSelectTag);
    bodyTag.appendChild(modelDiv);
}

function populateSelect3(trimOptions, makeString, modelString) { // function for adding options to the trim select and pass the array of options.

    // clearing the image, description and trim options in select (this only happens in case of using the second or firts select after populating the third)

    while (imageDescriptionDiv.childElementCount > 0) {
        console.log("inside imageDescriptionDiv cleaning");
        imageDescriptionDiv.removeChild(imageDescriptionDiv.lastChild);
    }

    while (trimOptionsSelectTag.childElementCount > 0) {
        console.log("inside trim select cleaning");
        console.log(trimOptionsSelectTag.childElementCount);
        trimOptionsSelectTag.removeChild(trimOptionsSelectTag.lastChild);
    }

    var optionTag = document.createElement("option");
    optionTag.appendChild(document.createTextNode("please choose a trim Option.")); // initial choice in the select.
    trimOptionsSelectTag.appendChild(optionTag);

    for (i = 0; i < trimOptions.length; i++) {
        var optionTag = document.createElement("option");
        optionTag.setAttribute("value", trimOptions[i]); // setting the attributes trim option.
        trimOptionsSelectTag.onchange = function () {
            console.log(trimOptions[this.selectedIndex - 1]); // test console here.
            imageAndDescription(trimOptions[this.selectedIndex - 1], makeString, modelString);
        };
        console.log(trimOptions[i]);
        optionTag.appendChild(document.createTextNode(trimOptions[i]));
        trimOptionsSelectTag.appendChild(optionTag);
    }
    trimOptionsDiv.appendChild(trimOptionsSelectTag);
    bodyTag.appendChild(trimOptionsDiv);

}

function imageAndDescription(trimstring, makeString, modelString) { // this function is for setting the photo and description under the photo
    while (imageDescriptionDiv.childElementCount > 0) {
        console.log("inside imageDescriptionDiv cleaning");
        imageDescriptionDiv.removeChild(imageDescriptionDiv.lastChild);
    }
    var imageSRC = document.createElement("IMG");
    imageSRC.id = "carImageTag";
    imageSRC.setAttribute("style", "height:400px; width:450px;");

    console.log(("img/").concat(makeString).concat("_").concat(modelString).concat("_").concat(trimstring.concat(".jpg"))); // printing to console to check that I got the right image path.
    imageSRC.src = ("img/").concat(makeString).concat("_").concat(modelString).concat("_").concat(trimstring.concat(".jpg")); // a long line of concatenations to get the image source from (img) file.
    h3Tag.appendChild(document.createTextNode(makeString.concat("  ").concat(modelString).concat(" with the ").concat(trimstring).concat(" option.")));

    imageDescriptionDiv.appendChild(imageSRC);
    imageDescriptionDiv.appendChild(h3Tag);
    bodyTag.appendChild(imageDescriptionDiv);
}
