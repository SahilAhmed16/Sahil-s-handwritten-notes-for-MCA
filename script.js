const words = [
    "Notes",
    "Study Materials",
    "Handwritten PDFs",
    "Semester Resources"
];

let index = 0;
let letterIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

    if(letterIndex < words[index].length){

        typing.textContent += words[index][letterIndex];

        letterIndex++;

        setTimeout(typeEffect,100);

    } else {

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(letterIndex > 0){

        typing.textContent =
        words[index].substring(0,letterIndex-1);

        letterIndex--;

        setTimeout(eraseEffect,50);

    } else {

        index++;

        if(index >= words.length){
            index = 0;
        }

        setTimeout(typeEffect,300);
    }

}

typeEffect();