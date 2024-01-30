window.onload = () =>{
    
    alert("Vous voyez une horloge au loin, sans aiguilles, étrange... Cependant, on dirait qu'on peut appuyer sur les chiffres.");
    let nbEnigmSolved = parseInt(localStorage.getItem("nbEnigmSolved"));
    let answerText = document.getElementById("answer");
    let submitBtn = document.getElementById("submit");
    let buttonArr = document.getElementsByClassName("btn");
    buttonArr = Array.from(buttonArr);

    console.log(answerText.innerText);

    buttonArr.forEach((e, i) => {
        e.addEventListener("click", () =>{
            answerText.innerText += (i+1);
            console.log("clicked: ", answerText.innerText);
        });
    });

    submitBtn.addEventListener("click", () =>{
        if(answerText.innerText == "731018"){
            alert("Les codes n'ont plus de secret pour vous !");
            if (nbEnigmSolved == 9) localStorage.setItem("nbEnigmSolved", nbEnigmSolved+1)
            window.location = document.location.href+ "/../lobby.html";
        }
	else {
            answerText.innerText = "";
        }
    });

}