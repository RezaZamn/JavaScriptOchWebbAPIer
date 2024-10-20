
// Här hämtas resfrenser till HTML-elementmed hjälp av deras ID
const character = document.querySelector('#inputName')  //Hämtar input fältet
const btnSearch = document.getElementById('btnSearch')  //Hämtar sök-knappen
const output = document.querySelector('#Output')        //Hämtar textrutan som resultatet visas


btnSearch.addEventListener('click', () => {

    const characterName = character.value.trim();  //Hämtar användarens input

    if (characterName) {
        output.value = ''      //Rensar output
        getApi(characterName)  //Skickar användarens input till getApi funktionen
    }
    else {
        output.value = 'Please enter a character name'
    }

})


const getApi = (name) => {
    const fullUri = `https://www.swapi.tech/api/people/?name=${name}`

    fetch(fullUri)
        .then(res => res.json())  //Omvandlar API-svaret till json

        .then(data => {
            console.log(data)
            if (data.result && data.result.length > 0) {

                const character = data.result[0].properties;  //Lägger karaktär objektet i character variabel
                output.value =

                `
                 Name: ${character.name},
                 Height: ${character.height} cm,
                 Mass: ${character.mass} kg,
                 Gender:${character.gender},
                 Hair-color: ${character.hair_color}

                `
            }

            else (
                output.value = 'Character not found.'
            )

        })

        .catch(err => console.error(err))

}

//Lägger till en Listener för Enter-tangantenluke
character.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {   //kontrollerar om Enter trycks
        btnSearch.click();       // Search knapp click-händelse
    }

})






