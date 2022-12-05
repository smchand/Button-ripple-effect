const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{{
    const x(event.pageX - btnEl.offSsetLeft);
    const y(event.pageY - btnEl.offSsetTop)

    btnEl.getElementsByClassName.setProperty("--xPos", x + "ps")
    
}})