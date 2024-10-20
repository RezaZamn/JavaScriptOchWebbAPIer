const btnDraw = document.querySelector('#btnDraw')
const cardOutput = document.querySelector('#card-output')

btnDraw.addEventListener('click', function () {

      fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
            .then(res => res.json())

            .then(data => {
                  console.log(data)
                  const cardImage = data.cards[0].image       //URL till korts bilden
                  const img = document.createElement('img')   //Skapar ett image element
                  img.setAttribute('src', cardImage)          //Sätter bildens källa till cardImage

                  //Rensar tidigare kort och informationen om det
                  document.getElementById('cardOutput').innerHTML = '';
                  document.getElementById('cardInfo').innerHTML = '';



                  document.getElementById('cardOutput').appendChild(img) //Lägger till bilden i cardOutput-diven 

                  //Beskrivningen av den dragna kortet
                  const cardValue = data.cards[0].value  //Hämtar value för kortet 
                  const cardSuit = data.cards[0].suit    //Hämtar sort av det kortet

                  document.getElementById('cardInfo').innerHTML = `<p>Value: ${cardValue} av ${cardSuit}</p>` //Använder innerHTML för att visa information


            })
            .catch(error => console.error('Failed to get response', error))


})