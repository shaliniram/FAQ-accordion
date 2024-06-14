const icons = document.querySelectorAll(".icon")


icons.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        const parent = icon.parentElement.nextElementSibling;

        console.log(parent.className)
        parent.classList.remove('hide')
        const img = icon.querySelector('img'); // Find the img element within the div
        if (img) {
           img.src = "assets/images/icon-minus.svg"; // Log the src attribute of the img element
        } 
    })
})

