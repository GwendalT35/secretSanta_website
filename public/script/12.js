window.onload = () => {
    console.log("Script loaded");
    alert("Vous venez de passer la dernière porte, mais vous vous demandez si vous êtes encore à l'intérieur ou à l'extérieur...")
    let nbEnigmSolved = parseInt(localStorage.getItem("nbEnigmSolved"));
    let backButton = document.getElementById("back");

    localStorage.setItem("playSound12", true);


    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {

          if (answer.value.toLowerCase() == "zeus")
          {
              backButton.disabled = "";
          }
          else if (answer.value.toLowerCase() == "wilsdorf"){
            localStorage.setItem("playSound12", false);
            alert("Prendre l'air vous a fait du bien, vous êtes fatigué de cette aventure, qui sait ce qui vous attend pour la suite...");
            if (nbEnigmSolved == 10) localStorage.setItem("nbEnigmSolved", nbEnigmSolved+1)
            window.location = document.location.href+ "/../fin.html";
          }
          else {
            alert("raté !");
          }
        }
      });

    backButton.addEventListener("click", () => {
        window.location = document.location.href+ "/../../";
    });

}