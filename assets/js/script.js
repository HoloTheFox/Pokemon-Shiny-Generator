/**
 * Created by Ruben on 10/12/2016.
 */

var pokemon = ["Bewear", "Carbink", "Emolga", "Goodra", "Grimer-Alola", "Krookodile", "Lapras", "Masquerain", "Mimikyu",
    "Primarina", "Raichu-Alola", "Ribombee", "Silvally", "Starmie", "Toxapex", "Tsareena", "Umbreon",
    "Whimsicott", "Wigglytuff", "Wishiwashi-Solo"];

var amountOfPokemon = pokemon.length;

var generatePokemonHandler = function (e) {
    e.preventDefault();
    var generatedPokemonIndex = parseInt(Math.random() * 20);
    var generatedPokemonName = pokemon[generatedPokemonIndex];
    var cleanedUpName = pokemon[generatedPokemonIndex];

    if (cleanedUpName.indexOf("-") != -1) {
        cleanedUpName = cleanedUpName.replace("-", " ").concat(" form")
    }

    $(this).css("float", "right");

    $(".generated").slideDown().children("img")
        .attr("src", "images/" + generatedPokemonName + ".png")
        .attr("alt", generatedPokemonName )
        .attr("title", generatedPokemonName)
        .parent().children("div.menu").children("p").text("Name: " + cleanedUpName);
};

var clickHandler = function () {
    $("div.menu").slideToggle();
};

var changePictureWishi = function (e) {
    if ($(this).attr("alt") == "Wishiwashi-Solo") {
        $(this).attr("src", "images/Wishiwashi-School.png").attr("alt", "Wishiwashi-School").attr("title", "Wishiwashi-School").parent().find("div.menu").children("p").text("Name: Wishiwashi School form");
    }

};

var changePictureWishiBack = function (e) {
    if ($(this).attr("alt") == "Wishiwashi-School") {
        $(this).attr("src", "images/Wishiwashi-Solo.png").attr("alt", "Wishiwashi-Solo").attr("title", "Wishiwashi-Solo").parent().find("div.menu").children("p").text("Name: Wishiwashi Solo form");
    }

};



$(document).ready(function () {
    $(".generateButton").on("click", generatePokemonHandler).parent().parent().siblings("header").children("h2").append(amountOfPokemon);
    $("div.generated").on("click" , clickHandler).children("img").css('width', '600px').css('height','auto').on("mouseenter", changePictureWishi).on("mouseleave", changePictureWishiBack);

});