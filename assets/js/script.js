/**
 * Created by Ruben on 15/02/2017.
 */

var persoon = {Name:"", Email:"", Country:"", Gender:""};

var submitHandler = function (e) {
    e.preventDefault();
    $("input:not([type='submit'],[type='radio']), input[type='radio']:checked, select").each(function (i) {
        if (i === 2)
        {
            persoon[Object.keys(persoon)[i]] = $(this).find('option:selected').text();
        } else {
            persoon[Object.keys(persoon)[i]] = $(this).val();
        }

    });
    alert(persoonGegevens());
};

var persoonGegevens = function () {
    var generatedGegevens = "";
    generatedGegevens += "Input received\n";
    for (i in persoon) {
        generatedGegevens += "\n" + i + ": " + persoon[i];
    }
    return generatedGegevens;
};

$(document).ready(function () {
    $("form").on("submit", submitHandler);
});