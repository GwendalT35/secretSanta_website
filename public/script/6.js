window.onload = () =>{
    let nbEnigmSolved = parseInt(localStorage.getItem("nbEnigmSolved"));
    let answer = document.getElementById("guess");
    alert("Encore ce jeu de merde... Bon je sais ce que je dois faire -_-");
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          if (answer.value.toLowerCase() == "f"){
            alert("Bien joué, vous avez trouvé la bonne porte !\nEn espérant que ce soit le dernier, il est chiant ce Chronos...");
            if (nbEnigmSolved == 5) localStorage.setItem("nbEnigmSolved", nbEnigmSolved+1)
            window.location = document.location.href+ "/../lobby.html";
          }
        }
      });
}