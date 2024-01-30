window.onload = () => {
    alert("Vous vous retrouvez devant une sorte de coffre-fort, il n'y a qu'une horloge sur la porte, étrange, cela vous fait penser à une roue de combinaison...\nVous trouvez un pense-bête derrière le coffre-fort !");
    let nbEnigmSolved = parseInt(localStorage.getItem("nbEnigmSolved"));
    let pos = 0;
    let code;

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
      
      hourHandImg.style.transform = "rotate(0deg)";
      minutehandImg.style.transform = "rotate(0deg)";
  
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          isDraggingHour = isDraggingMinute = false;
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
            
          calMinutes = (rotationAngle / 6);
          console.log("RotationAngle: ", rotationAngle, "\ncalMinutes: ", calMinutes);
          if (calMinutes >= 60 || calMinutes <= -60) {
            calMinutes = 0;
          }
          else if (calMinutes < 0){
            calMinutes = 60 + calMinutes;
          }
        }
  
        code = `${String(
          String(Math.abs(calHours)) + "h" +String(Math.abs(calMinutes))
        )}`;
      }

    };
  
    // Créez plusieurs horloges en appelant la fonction createClock avec des identifiants uniques
    createClock(`hourHand`, `minHand`, `log`);
    
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", () => {
        checkFinish();
      });


    function checkFinish()
      {
        if (code != undefined)
        {
          localStorage.setItem(pos, code);
          pos +=1;
        }
        let answer = "";
        for (let i = 0; i < 3; i++) {
            let char = localStorage.getItem(i) == null ? "" : localStorage.getItem(i);
            answer += char;
        }
        console.log(answer);
        if (localStorage.getItem(2) != undefined)
        {
          if (answer == "4h308h150h0")
          {
            let userConfirm = window.confirm("Bien joué, vous avez ouvert le coffre-fort !");
  
            if (userConfirm){
              for (let i = 0; i < 3; i++) {
                localStorage.removeItem(i)
              }
              if (nbEnigmSolved == 4) localStorage.setItem("nbEnigmSolved", nbEnigmSolved+1)
              window.location = document.location.href+ "/../lobby.html";
            } 
          }
          else {
            for (let i = 0; i < 3; i++) {
              localStorage.removeItem(i)
            }
            alert("Mauvais code reessaye...");
            pos = 0;
          }
        }

      }
  };
  