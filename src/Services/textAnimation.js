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
       
    }, 50);


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
         leter++;
         if(leter === leterArr.length){
             clearInterval(timer);
             im();
             return;
         }

        },50)
}
let im = () =>{
    let text = document.querySelector(".im");
    let leterArr = [...text.textContent];
    text.textContent = "";
    leterArr.map(char =>{
        return (text.innerHTML += `<span>${char}</span>`)
    })
    let leter = 0;
    let timer = setInterval(()=>{
        let span = text.querySelectorAll('span')[leter];
        span.classList.add('fade');
        leter++;
        if(leter === leterArr.length){
            clearInterval(timer);
            return;
        }
    },50);
}

export default animation;