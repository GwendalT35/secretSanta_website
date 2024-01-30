window.onload = () => {
    let nbEnigmSolved = parseInt(localStorage.getItem("nbEnigmSolved"));

    let answerBtn = document.getElementById("answer");
    let frequency = document.getElementById("frequency");
    let word = document.querySelector('p')
    let interv = 'undefined'
    let INITIAL_WORD = "Gnomon";
    let finalWord = "";

    alert("Vous vous retrouvez devant un écran vous demandant une fréquence, cela aurait-il un rapport avec une montre ?")
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getRandomLetter() {
     var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
     return alphabet[rand(0,alphabet.length - 1)]
    }

    frequency.addEventListener('input', () =>  {
      clearInterval(interv);
      console.log("time: ", frequency.value);
      if (frequency.value == 2**15) {
        clearInterval(interv);
        word.innerHTML = INITIAL_WORD;
        answerBtn.disabled = false;
       }
       else {
        interv = setInterval(function() {
          finalWord = ''
          for(var x=0;x<INITIAL_WORD.length;x++) {
            finalWord += getRandomLetter()
          }
          word.innerHTML = finalWord
         }, Math.exp(frequency.value / 5000));
       }
    })

    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        if (answer.value.toLowerCase() == "gnomon"){
          if (nbEnigmSolved == 7) localStorage.setItem("nbEnigmSolved", nbEnigmSolved+1)
          alert("Bien joué, maintenant vous savez que l'horloge d'une montre à quartz est de 32768 Hz, pas sûr que ce soit très utile comme info...\nPS: le Gnomon est l'ancêtre du cadran solaire.")
          window.location = document.location.href+ "/../lobby.html";
        }
      }
    });
}
