window.onload = () => {
    console.log("Script loaded");
    let nbEnigmSolved = parseInt(localStorage.getItem("nbEnigmSolved"));
    alert("Vous arrivez devant une table avec des cartes ressemblant à des composants d'une montre et des emplacements.")
    let cardsContainer = document.querySelector('.cards');
    let imgArr = ['pile.png', 'pcb.jpg', 'v12.jpg', 'engrenage.png', 'clock.png', 'quartz.gif'];
    let arrShuffled = imgArr.sort(() => Math.random() - 0.5);
    let w = cardsContainer.offsetWidth;
    let totalarc = 270;
    let numcards = imgArr.length;
    let angles = Array(numcards).fill('').map((a, i) => (totalarc / numcards * (i + 1)) - (totalarc / 2 + (totalarc / numcards) / 2));
    let margins = angles.map((a, i) => w / numcards * (i + 1));

    let boxesContainer = document.querySelector('.container');
    let items = document.querySelectorAll(".container .box");

    let imgAns = [];

    function handleDragStart(e) {
        console.log("dragStart");
        this.style.opacity = '0.4';
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e) {
        console.log("dragEnd");
        this.style.opacity = "1";

        // Hide the card once its image is placed in the box
        if (this.parentNode.classList.contains('box')) {
            this.style.display = 'none';
        }
    }

    function handleDragOver(e) {
        console.log("dragOver");
        e.preventDefault();
        return false;
    }

    function handleDragEnter(e) {
        console.log("dragEnter");
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        console.log("dragLeave");
        this.classList.remove('over');
    }

    function handleDrop(e) {
        console.log("drop");
        e.stopPropagation();
        e.preventDefault();
    
        let droppedBox = this;
    
        if (dragSrcEl !== this && droppedBox.classList.contains('box')) {
            // Clone the dragged image before appending it to the dropped box
            let img = document.createElement('img');
            img.src = dragSrcEl.querySelector('img').src;
    
            // Append the cloned image to the dropped box
            droppedBox.innerHTML = '';
            droppedBox.appendChild(img);
    
            // Perform any other actions you need with the dropped image and box
            console.log(`Image dropped into Box ${droppedBox.id}`);
            
            // Reset styles and classes
            dragSrcEl.style.opacity = "1";
            droppedBox.classList.remove('over');
    
            // Clear imgAns array after each drop
            imgAns = [];
            items = document.querySelectorAll(".box img");
            items.forEach(item => {
                let tmp = item.src.split("/");
                imgAns.push(tmp[tmp.length - 1].split(".")[0]);
            });
            console.log(imgAns, ": ", JSON.stringify(imgAns) == JSON.stringify(['pile', 'pcb', 'v12', 'engrenage', 'clock', 'quartz']))
            if (JSON.stringify(imgAns) == JSON.stringify(['pile', 'pcb', 'v12', 'engrenage', 'clock', 'quartz'])){
                if (nbEnigmSolved == 2) localStorage.setItem("nbEnigmSolved", nbEnigmSolved+1)
                alert("Vous avez reconstitué la montre à quartz, étonnant !")
                window.location = document.location.href+ "/../lobby.html";
            }  
        }
    }
    
    

    function handleMouseEnter(e) {
        // Show the card when mouse enters if it's not in a box
        if (!e.srcElement.parentNode.classList.contains('box')) {
            e.srcElement.style.display = 'block';
        }
        e.srcElement.style.transform += "scale(1.2)";
        e.srcElement.style.zIndex = "1";
    }

    function handleMouseLeave(e) {
        // Hide the card when mouse leaves if it's not in a box
        if (!e.srcElement.parentNode.classList.contains('box')) {
            e.srcElement.style.display = 'none';
        }
        e.srcElement.style = e.srcElement.originalStyle;
    }

    angles.forEach((a, i) => {
        let angleCard = a;
        let s = `transform: rotate(${angleCard}deg); margin-left: ${margins[i]}px;`;

        let card = document.createElement('div');
        card.className = 'card';
        card.id = i;
        card.originalStyle = s; // Store original style for resetting
        card.style.cssText = s;
        let img = document.createElement('img');
        img.src = `../assets/${arrShuffled[i]}`
        card.appendChild(img);
        cardsContainer.appendChild(card);

        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);
    });

    items.forEach(box => {
        // Set ondragover attribute to allow the box to accept drops
        box.ondragstart = handleDragStart;
        box.ondragend = handleDragEnd;
        box.ondragover = handleDragOver;
        box.ondragenter = handleDragEnter;
        box.ondragleave = handleDragLeave;
        box.ondrop = handleDrop;
    });
}