 let animation = () => {
    let text = document.querySelector(".hi");
    let leterArr = [...text.textContent];
    text.textContent = "";
    leterArr.map(char => {
        return  (text.innerHTML += `<span>${char}</span>`)
    })
    
    let leter = 0;
    let timer = setInterval(()=>{
            let span = text.querySelectorAll('span')[leter];
            span.classList.add('fade');
            leter++;
        if(leter === leterArr.length){
            clearInterval(timer);
            myName();
            return;
        }
       
    }, 100);


}
let myName = () =>{
    let text = document.querySelector(".myName");
    let leterArr = [...text.textContent];
    text.textContent = "";
    leterArr.map(char =>{
        return (text.innerHTML += `<span>${char}</span>`)
     })
     let leter = 0;
     let timer = setInterval(()=>{
         let span = text.querySelectorAll('span')[leter];
         span.classList.add('fade');
         if(leter >= 12){
             span.classList.add('white');
         }
         leter++;
         if(leter === leterArr.length){
             clearInterval(timer);
             im();
             return;
         }

        },100)
}
let im = () =>{
    let text = document.querySelector(".im");
    let leterArr = [...text.textContent];
    text.textContent = "";
    console.log("object", leterArr);

    leterArr.map(char =>{
        return (text.innerHTML += `<span>${char}</span>`)
    })
    let leter = 0;
    let timer = setInterval(()=>{
        let span = text.querySelectorAll('span')[leter];
        span.classList.add('fade');
        if(leter >= 18){
            span.classList.add('white');
        }
        leter++;
        if(leter === leterArr.length){
            clearInterval(timer);
            return;
        }
    },100);
}

export default animation;