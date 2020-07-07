let animation = () => {
    let img = document.querySelector(".heroImg");
    console.log("object", img);
    img.classList.add('visible');

    return hi();
}
let hi = () =>{
    let text = document.querySelector(".hi");
    let letterArr = [...text.textContent];

    text.textContent = "";
    letterArr.map(char => {
        return (text.innerHTML += `<span>${char}</span>`)
    })

    let letter = 0;
    let timer = setInterval(() => {
        let span = text.querySelectorAll('span')[letter];
        span
            .classList
            .add('fade');

        letter++;
        if (letter === letterArr.length) {
            clearInterval(timer);
            myName();
            return;
        }

    }, 100);
}
let myName = () => {
    let text = document.querySelector(".myName");
    let letterArr = [...text.textContent];
    text.textContent = "";
    letterArr.map(char => {
        return (text.innerHTML += `<span>${char}</span>`)
    })
    let letter = 0;
    let timer = setInterval(() => {
        let span = text.querySelectorAll('span')[letter];
        span
            .classList
            .add('fade');
        if (letter >= 12) {
            span
                .classList
                .add('white');
        }
        letter++;
        if (letter === letterArr.length) {
            clearInterval(timer);
            im();
            return;
        }

    }, 100)
}
let im = () => {
    let text = document.querySelector(".im");
    let letterArr = [...text.textContent];
    text.textContent = "";
    console.log("object", letterArr);

    letterArr.map(char => {
        return (text.innerHTML += `<span>${char}</span>`)
    })
    let letter = 0;
    let timer = setInterval(() => {
        let span = text.querySelectorAll('span')[letter];
        span
            .classList
            .add('fade');
        if (letter >= 14) {
            span
                .classList
                .add('white');
        }
        if(letter == 13){
           span.classList.add('twoColors');

        }
        letter++;
        if (letter === letterArr.length) {
            clearInterval(timer);
            return;
        }
    }, 100);
}

export default animation;