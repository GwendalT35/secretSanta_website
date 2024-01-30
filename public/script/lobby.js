window.onload = () =>{
    
    let hourHandImg = document.getElementById("minHand1");
    let divEnigm = [];
    let solvedEnigm = localStorage.getItem("nbEnigmSolved") == null ? parseInt(localStorage.setItem("nbEnigmSolved", 0)): parseInt(localStorage.getItem("nbEnigmSolved"));
    if (solvedEnigm == NaN) solvedEnigm = 0;
    
    console.log("solvedEnigm = ", solvedEnigm+1);
    
    for (let i = 1; i <= (solvedEnigm+1); i++) {
        console.log("i:", i);
        divEnigm.push(document.getElementById(`enigme${i}`));
        divEnigm[i-1].addEventListener("click", () =>{
            enigme(i);
        });
    }
    let rotationDegree = 30 * (solvedEnigm+1);
    console.log(solvedEnigm);
    hourHandImg.style.transform = `rotate(${rotationDegree}deg)`;
    console.log(divEnigm);

    let playSound12 = localStorage.getItem("playSound12");
    if (playSound12 == "true") {
        var audioElement = document.createElement('audio');
        audioElement.src = "../assets/en12.mp3";
        audioElement.play();
        audioElement.loop = true;
    }
    
    
}
function enigme(index=0){
    if (index==0)
    {
        alert("no enigm loaded");
        return -1;
    } 
    window.location =  document.location.href + `/../${index}.html`;
}
