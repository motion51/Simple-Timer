let input = document.querySelectorAll("input");
let btn = document.querySelector("button");

let num = 0;
let num2 = 0;


function timer() {
    if (num == 60) {
        num = 0;
        num2 += 1;
    }
    num += 1;
    // num++;
    input[0].value = num2;
    input[1].value = num;

    if(num2 == 59){
        num2 = 0;
    }
}

function play(e) {
    if(btn.textContent == "Play"){
    console.log("Hii");
    setInterval(() => {
        timer();
    }, 1000);
    btn.textContent = "Pause";
} else{
    location.reload();
}
};




