window.onload = () => {
  alert("Vous vous retrouvez devant la porte du Temple du Dieu du Temps, cependant la porte est fermé par un code... Vous trouvez une note")
  let nbEnigmSolved = parseInt(localStorage.getItem("nbEnigmSolved"));
  const createClock = (hourHandId, minuteHandId, displayId) => {
    let isDraggingHour = false;
    let isDraggingMinute = false;
    let initialX, initialY;
    let currentX = 0, currentY = 0;
    let rotationAngle = 0;
    const rotationIncrement = 30;

    const hourHandImg = document.getElementById(hourHandId);
    const minutehandImg = document.getElementById(minuteHandId);

    let calMinutes = 0, calHours = 0;
    let pos = hourHandId[hourHandId.length - 1]
    hourHandImg.style.transform = "rotate(0deg)";
    minutehandImg.style.transform = "rotate(0deg)";
    
    

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        isDraggingHour = isDraggingMinute = false;
      }
    });
    
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 116) {
        for (let i = 1; i < 8; i++) {
          localStorage.setItem(i, String.fromCharCode(0));
        }
      }
    });

    hourHandImg.addEventListener("mousedown", (e) => {
      isDraggingHour = true;
      initialX = e.clientX - currentX;
      initialY = e.clientY - currentY;
    });

    minutehandImg.addEventListener("mousedown", (e) => {
      isDraggingMinute = true;
      initialX = e.clientX - currentX;
      initialY = e.clientY - currentY;
    });

    hourHandImg.addEventListener("mouseup", () => {
      isDraggingHour = false;
    });

    minutehandImg.addEventListener("mouseup", () => {
      isDraggingMinute = false;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDraggingHour || isDraggingMinute) {
          const newX = e.clientX - initialX;
          const newY = e.clientY - initialY;
          const deltaX = newX - currentX;
          const deltaY = newY - currentY;
          currentX = newX;
          currentY = newY;
          const distanceX = Math.abs(deltaX);
  
          if (distanceX >= 1) {
            const rotationDirection = deltaX > 0 ? 1 : -1;
            const rotationIncrementAdjusted = rotationDirection * rotationIncrement;
            rotationAngle += rotationIncrementAdjusted;

            if (rotationAngle >= 360 || rotationAngle <= -360) rotationAngle = 0;
  
            const targetImg = isDraggingHour ? hourHandImg : minutehandImg;
            targetImg.style.transform = `rotate(${rotationAngle}deg)`;
  
            const handType = isDraggingHour ? "hour" : "minute";
            updateDisplay(handType);
          }
        }
    });

    document.addEventListener("mouseleave", () => {
      isDraggingHour = isDraggingMinute = false;
    });

    function updateDisplay(hand = "") {
      if (hand === "hour") {
        calHours = rotationAngle / 30;
        console.log("calHours: ", calHours);
        if (calHours >= 12 || calHours <= -12) {
          calHours = 0;
        }
        else if (calHours < 0){
          calHours = 12 + calHours;
        }
        console.log("calHoursDebug: ", calHours);
      } else if (hand === "minute") {
        calMinutes = rotationAngle / 6;

        if (calMinutes >= 60 || calMinutes <= -60) {
          calMinutes = 0;
        }
        else if (calMinutes < 0){
          calMinutes = 60 + calMinutes;
        }
      }

      code = `${String.fromCharCode(
        String(Math.abs(calHours)) + String(Math.abs(calMinutes) / 5)
      )}`;
      localStorage.setItem(pos, code);
      
    }

  };

  // Créez plusieurs horloges en appelant la fonction createClock avec des identifiants uniques
  for (let i = 1; i < 8; i++) {
      createClock(`hourHand${i}`, `minHand${i}`, `log${i}`);
  }
  
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", () => {
      checkFinish();
    });


  function checkFinish()
  {
    let answer = "";
    for (let i = 1; i < 8; i++) {
        let char = localStorage.getItem(i) == null ? "" : localStorage.getItem(i);
      answer += char;
    }
    console.log("\nanswer: ", answer);
    if (answer == "Chronos")
    {
      let userConfirm = window.confirm("Bien joué, vous êtes entré avec le mot de passe Chronos !");
      console.log(userConfirm);
      if (userConfirm){
        for (let i = 1; i < 8; i++) {
          localStorage.removeItem(i)
        }
        if (nbEnigmSolved == 0) localStorage.setItem("nbEnigmSolved", nbEnigmSolved+1)
        window.location = document.location.href+ "/../lobby.html";
      } 
    } 
    else alert(`La réponse rentré est : ${answer}, réessaye !`)
  }    
};
  