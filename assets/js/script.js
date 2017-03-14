/**
 * Created by Ruben on 10/12/2016.
 */


var globalPokemonObject;

var clickHandler = function (e) {
    e.preventDefault();
    console.log($(this));
    $(this).css("float", "right");
    ajaxGETByID(getRandomNumber());
};


var getRandomNumber = function () {
    return Math.floor((Math.random() * 721) + 1);
};

var ajaxGETByID = function (ID) {
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/" + ID,
        method: "GET",
        dataType: 'json'
    }).done(function (data, textStatus, jqXHR) {
        continueAjaxDone(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error occured: " + errorThrown);
    });
};

var getPokemonID = function () {
    return globalPokemonObject.id;
};

var getPokemonNAME = function () {
    return globalPokemonObject.forms[0].name;
};

var getPokemonSPRITE = function () {
    return globalPokemonObject.sprites.front_default;
};

var getPokemonSHINYSPRITE = function () {
    return globalPokemonObject.sprites.front_shiny;
};

var continueAjaxDone = function (data) {
    globalPokemonObject = data;
    // console.log(globalPokemonObject);
    // console.log(getPokemonSPRITE());
    // console.log(getPokemonNAME());
    // console.log(getPokemonID());

    $(".generated").slideDown().children("img")
        .attr("src", getPokemonSHINYSPRITE())
        .attr("alt", getPokemonNAME())
        .attr("title", getPokemonNAME())
        .parent()
        .children("div.menu")
        .children("p")
        .text("Name: " + "");
};

$(document).ready(function () {
    $(".generateButton").on("click", clickHandler);
});