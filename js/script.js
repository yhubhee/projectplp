const hide = document.querySelector(".icon")
const hideicon = document.querySelector(".icon i")
const dropdown = document.querySelector(".dropdown")

hide.onclick = function(){
    dropdown.classList.toggle("open")
    isOpen = dropdown.classList.contains("open")
        hideicon.classList = isOpen
            ?"fa-solid fa-xmark"
            :"fa-solid fa-bars"
}

// alert("njdkbluk")