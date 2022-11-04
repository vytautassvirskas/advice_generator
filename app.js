const adviceHeading=document.querySelector(".advice__heading")
const adviceText=document.querySelector(".advice__text")
const adviceBtn=document.querySelector(".advice__btn")

async function getAdvice(){
    try {
        const resp=await fetch("https://api.adviceslip.com/advice");
        const data =await resp.json()
        adviceHeading.innerText="advice "+"#"+data.slip.id
        adviceText.innerText=`"${data.slip.advice}"`
        console.log(data.slip)
        
    } catch (error) {
        console.log(error);
    }
}

getAdvice();

adviceBtn.addEventListener("click",getAdvice)