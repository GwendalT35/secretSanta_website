window.addEventListener("load", (event) => {
    let documentWidth = document.documentElement.clientWidth;
    let documentHeight = document.documentElement.clientHeight;
    console.log(documentHeight, documentWidth)
    let invButton = document.getElementById("invButton");
    let centerX = documentWidth / 2;
    let centerY = documentHeight / 2;
    invButton.style.top = centerY + 'px';
    invButton.style.left = centerX + 'px';
    invButton.style.width = "1100px";
    invButton.style.height = documentHeight + "px";

    invButton.addEventListener("click", () =>{
        let solvedEnigm = localStorage.getItem("nbEnigmSolved") == null ? parseInt(localStorage.setItem("nbEnigmSolved", 0)): parseInt(localStorage.getItem("nbEnigmSolved"));
        let video = document.getElementById("bgVideo");
        video.className = "zoom";
        setTimeout(() =>{
            window.location = document.location.href + "stage/lobby.html";
        }, 1000)
        console.log("inv button clciked")
    });
    // const box = document.querySelector(".box");
    // const pageX = document.getElementById("x");
    // const pageY = document.getElementById("y");

    // function updateDisplay(event) {
    // pageX.innerText = event.pageX;
    // pageY.innerText = event.pageY;
    // }

    // box.addEventListener("mousemove", updateDisplay, false);
    // box.addEventListener("mouseenter", updateDisplay, false);
    // box.addEventListener("mouseleave", updateDisplay, false);
  });