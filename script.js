const tb = document.querySelector(".themeball");
const rct = document.querySelector(".rect");
const prd = document.querySelector(".prdcts");
const crd = document.querySelectorAll(".card");

let arind = 0

let arr = [
    { txt: "black",color: "bubrgandi_1", clr: "rgb(199, 155, 166)"},
    { txt: "black",color: "green_2" , clr:"rgb(215, 218, 179)"},
    { txt: "white",color: "red_2" , clr:"rgb(163, 39, 53)"},
]
let rt = document.documentElement.style

let full = 1;
function dark_light(){
    if(arind<arr.length){
        if(arr[arind].txt == "white"){
            rt.setProperty('--ballclr', `${arr[arind].clr}`);
            tb.style = `left: 0vw; top: 0vh; width: 100vw; height: 100vh; background-color: ${arr[arind].clr}; border-radius: 0%;`;
            rt.setProperty('--bclr', 'white');
            rt.setProperty('--wclr', 'black');
            let intrvl = setInterval(() => {
                rt.setProperty('--bgclr', `${arr[arind].clr}`);
                tb.style = `left: 80vw; top: 20vh; width: 60px; height: 60px; background-color: transparent; border-radius: 50%;`;
                clearInterval(intrvl)
                arind++;
            }, 2000);
        }else{
            rt.setProperty('--ballclr', `${arr[arind].clr}`);
            tb.style = `left: 0vw; top: 0vh; width: 100vw; height: 100vh; background-color: ${arr[arind].clr}; border-radius: 0%;`;
            rt.setProperty('--bclr', 'black');
            rt.setProperty('--wclr', 'white');
            let intrvl = setInterval(() => {
                rt.setProperty('--bgclr', `${arr[arind].clr}`);
                tb.style = `left: 80vw; top: 20vh; width: 60px; height: 60px; background-color: transparent; border-radius: 50%;`;
                clearInterval(intrvl)
                arind++;
            }, 2000);
        }
    }else{
        arind = 0
        if(arr[arind].txt == "white"){
            rt.setProperty('--ballclr', `${arr[arind].clr}`);
            tb.style = `left: 0vw; top: 0vh; width: 100vw; height: 100vh; background-color: ${arr[arind].clr}; border-radius: 0%;`;
            rt.setProperty('--bclr', 'white');
            rt.setProperty('--wclr', 'black');
            let intrvl = setInterval(() => {
                rt.setProperty('--bgclr', `${arr[arind].clr}`);
                tb.style = `left: 80vw; top: 20vh; width: 60px; height: 60px; background-color: transparent; border-radius: 50%;`;
                clearInterval(intrvl)
                arind++;
            }, 2000);
        }else{
            rt.setProperty('--ballclr', `${arr[arind].clr}`);
            tb.style = `left: 0vw; top: 0vh; width: 100vw; height: 100vh; background-color: ${arr[arind].clr}; border-radius: 0%;`;
            rt.setProperty('--bclr', 'black');
            rt.setProperty('--wclr', 'white');
            let intrvl = setInterval(() => {
                rt.setProperty('--bgclr', `${arr[arind].clr}`);
                tb.style = `left: 80vw; top: 20vh; width: 60px; height: 60px; background-color: transparent; border-radius: 50%;`;
                clearInterval(intrvl)
                arind++;
            }, 2000);
        }
    }
    
};