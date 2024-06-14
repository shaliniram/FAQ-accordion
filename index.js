const icons = document.querySelectorAll(".icon")


icons.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        const parent = icon.parentElement.nextElementSibling;

        console.log(parent.className)
        parent.classList.toggle('hide')
        const img = icon.querySelector('img'); // Find the img element within the div
        if (img) {
            if (parent.classList.contains('hide')) {
                img.src = "assets/images/icon-plus.svg"; // Image for hidden state
            } else {
                img.src = "assets/images/icon-minus.svg"; // Image for visible state
            }
        }
    })
})

