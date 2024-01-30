window.onload = () =>{
    console.log("Script loaded");
    let nbEnigmSolved = parseInt(localStorage.getItem("nbEnigmSolved"));

    let submitButton = document.getElementById("submit");
    let secondEnigm = document.getElementsByClassName("en2");
    let story = document.getElementById("story");
    let items;
    let enigme = 1;

    let answer = ["Naissance de Cronos",
                  "Castration d'Ouranos",
                  "Règne des Titans",
                  "Mariage avec Rhéa",
                  "Dévoration de ses enfants",
                  "Naissance de Zeus",
                  "La ruse de Rhéa",
                  "La Titanomachie",
                  "Libération temporaire",
                  "Exil continu dans le Tartare"]

    loadEnigme(enigme);

    function handleDragStart(e) {
        this.style.opacity = '0.4';
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);

        
    }
    function handleDragEnd(e) {
        this.style.opacity = "1";
        Array.from(items).forEach(item => {
            item.classList.remove('over');
        });
    }
    function handleDragOver(e){
        e.preventDefault();
        return false;
    }
    function handleDragEnter(e) {
        this.classList.add('over');
    }
    function handleDragLeave(e) {
        this.classList.remove('over');
    
    }
    function handleDrop(e) {
        e.stopPropagation();
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }
    
    submitButton.addEventListener("click", () => {
        if (enigme == 1) {
            let answerItems = document.querySelectorAll(".container .box");
            answerItems = Array.from(answerItems);
            answerItems.forEach(element => {
                answerItems.push(element.textContent);
            });
            answerItems = answerItems.slice(3);
            if (JSON.stringify(answerItems) == JSON.stringify(['Chronos','Kairos','Aiôn'])){
                enigme +=1;
                loadEnigme(enigme);
                alert("Le tableau s'ouvre en laissant apparaitre d'autres tablettes...\n");
            }
        }
        else {
            let answerItems = document.getElementsByClassName("en2-title");
            answerItems = Array.from(answerItems);
            answerItems.forEach(element => {
                answerItems.push(element.textContent);
            });
            answerItems = answerItems.splice(10);
            if (JSON.stringify(answerItems) == JSON.stringify(answer)){
                if (nbEnigmSolved == 3) localStorage.setItem("nbEnigmSolved", nbEnigmSolved+1)
                alert("L'histoire de Cronos vous laisse sans voix et vous décidez de prendre la porte qui s'est ouverte... ")
                window.location = document.location.href+ "/../lobby.html";
            }
        }
    })

    function loadEnigme(idEnigme){
        if (idEnigme == 1){
            items = document.querySelectorAll(".container .box");

            Array.from(secondEnigm).forEach(element => {
                element.style.display = "none";
            });
        }
        else {
            Array.from(items).forEach(element => {
                element.style.display = "none";
            })
           items = document.getElementsByClassName("en2")
           

            Array.from(secondEnigm).forEach(element => {
                element.style.display = "";
            });

            story.innerText = "Seule l'histoire du Titan vous ouvrira la voie."
        }

        Array.from(items).forEach(function(element) {
            element.addEventListener('dragstart', handleDragStart);
            element.addEventListener('dragover', handleDragOver);
            element.addEventListener('dragenter', handleDragEnter);
            element.addEventListener('dragleave', handleDragLeave);
            element.addEventListener('dragend', handleDragEnd);
            element.addEventListener('drop', handleDrop);
        });
    }

}
