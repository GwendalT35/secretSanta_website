// $(document).ready(function() {

//     var progress = $('.progressbar .progress')

//     function counterInit( fValue, lValue ) {

//     var counter_value = parseInt( $('.counter').text() );
//     counter_value++;

//     if( counter_value >= fValue && counter_value <= lValue ) {

//         $('.counter').text( counter_value + '%' );
//         progress.css({ 'width': counter_value + '%' });

//         setTimeout( function() {
//         counterInit( fValue, lValue );
//         }, 50 );


//     }
//         if (counter_value === 100){
//             let counter = document.getElementById("text_counter");
//             counter.innerHTML = 'Bien joué tu as gagné un bon pour une pipe !';
//             let img = document.createElement("img");
//             img.src = "https://www.mon-diplome.fr/Diplome/700-1377523-Bon%20pour%20une%20pipe.jpg";
//             counter.appendChild(img);
//             setTimeout(()=>{
//                 img.src = "";
//                 img.src = "https://www.gif-maniac.com/gifs/52/52183.gif";
//                 counter.appendChild(img)
//                 document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3O3Z9AHT4Fbz_pZLu6G--gv7DCUlBbaeVQ&usqp=CAU')";
//                 let finalDate = new Date("January 22, 2024").getTime();
//                 let currentDate = new Date("December 25, 2023").getTime();
//                 let percentDate = (100-(((finalDate/1000 - currentDate/1000) / 86400)*100) / 31)
//                 console.log(percentDate);
//                 counter.innerHTML = `Nan j'rigole le site est pas là pour ça...</br>RDV ici le 22/01/2024</br>${percentDate}%`;
//                 progress.css({ 'width': percentDate + '%' });
//             }, 2000)
//         }


//     }

//     counterInit( 0, 100 );

//     });

$(document).ready(function() {
    let progress = $('.progressbar .progress');
    let counter = document.getElementById("text_counter");
    let img = document.createElement("img");
    img.src = "";
    img.src = "https://www.gif-maniac.com/gifs/52/52183.gif";
    counter.appendChild(img)
    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3O3Z9AHT4Fbz_pZLu6G--gv7DCUlBbaeVQ&usqp=CAU')";
    let finalDate = new Date("January 22, 2024").getTime();
    setInterval(()=>{
        let currentDate = new Date().getTime();
        let percentDate = (100-(((finalDate/1000 - currentDate/1000) / 86400)*100) / 31)
        counter.innerHTML = `Nan j'rigole le site est pas là pour ça...</br>RDV ici le 22/01/2024</br>${percentDate}%`;
        counter.appendChild(img)
        progress.css({ 'width': percentDate + '%' });
    }, 1000)

});