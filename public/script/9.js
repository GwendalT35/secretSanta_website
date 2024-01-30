window.onload = () =>{
    let answer = document.getElementById("guess");
    let nbEnigmSolved = parseInt(localStorage.getItem("nbEnigmSolved"));

    alert("Derrière la porte se trouve une affiche avec des horloges, à quoi peuvent bien correspondre ces symboles ?\nVous voyez des caractères en dessous, cela vous fait peut-être penser à une autre énigme...");
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          if (answer.value.toLowerCase() == "cabochon"){
            alert("Vous êtes fier de vous, mais vous vous demandez s'il en a fini avec son alphabet de merde...");
            if (nbEnigmSolved == 8) localStorage.setItem("nbEnigmSolved", nbEnigmSolved+1)
            window.location = document.location.href+ "/../lobby.html";
          }
        }
      });
}