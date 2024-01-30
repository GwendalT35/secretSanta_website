window.onload = () =>{
    let answer = document.getElementById("guess");
    let nbEnigmSolved = parseInt(localStorage.getItem("nbEnigmSolved"));

    alert("Vous arrivez dans une salle sombre et insalubre avec un seul passage...\nAvant de rentrée, vous apercevez une image de labyrinthe et des indications, ce n'est pas sans vous rappeler un certain jeu...");
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          if (answer.value.toLowerCase() == "j"){
            alert("Bien joué, vous avez trouvé la bonne porte !\nParfois suivre le mur de gauche n'est pas la solution...");
            if (nbEnigmSolved == 1) localStorage.setItem("nbEnigmSolved", nbEnigmSolved+1)
            window.location = document.location.href+ "/../lobby.html";
          }
        }
      });
}