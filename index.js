// let initialCountDown = 25 * 1000; 
// let countDownEl = document.getElementById("countdown"); 

// let interval = setInterval(() => {
//     initialCountDown -= 100;
//     if (initialCountDown <= 0 ) {
//         clearInterval(interval); 
//         setTimeout(()=> {
//             document.getElementById('late').classList.remove('d-none');
//         },10000)
//     }
//     countDownEl.innerText = formatCountDown(initialCountDown);
// }, 100)

// function formatCountDown(ms) {
//     let seconds = Math.floor((ms / 1000) % 60);
//     let minutes = Math.floor(( ms / 1000 / 60 ) % 60);
//     let milli = ms % 1000; 
//     console.log(milli)
//     console.log(padding(milli,1));
//     return padding(minutes,2) + ":" + padding(seconds,2) + "." + padding(milli,1)
// }

// function padding(num, padLength) {
//     if (num.toString().length < padLength) {
//         return "0".repeat(padLength-num.toString().length) + num;
//     } if (num.toString().length > padLength) {
//         return num.toString().substring(0,padLength);
//     } else {
//         return num.toString() || "0";
//     }
// }