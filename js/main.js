var elForm = document.querySelector("#form")
var elInput = document.querySelector("#input")

elForm.addEventListener("submit", function (evt){

    evt.preventDefault();

    var inputValue = elInput.value.trim()
    
    function arraySearch(sentece, number) {

        var toxirrrrArray = sentece.split(" ");

        var toxirrrr = "";

        for (let i = 0; i < toxirrrrArray.length; i++) {

            if (toxirrrrArray[i].length > toxirrrr.length) {
                toxirrrr = toxirrrrArray[i];
            }

        }

        return toxirrrr

    }

    var array = arraySearch(inputValue);

    document.querySelector("#text").innerHTML = array;
})