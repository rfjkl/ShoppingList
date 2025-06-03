const input = document.getElementById("item")
const form = document.querySelector("form")
const list = document.querySelector("ul")
const listItem = document.querySelector("li")
const footer = document.querySelector("footer")
const hideWarning = document.getElementById("hideWarning")
let removeItem = document.querySelectorAll(".removeItem")
updateRemoveItem()

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    if(input.value != ""){
        ListAppend(input.value)
    }else{
        window.alert("Preencha o nome do item")
    }
    input.value = ""
})

function ListAppend (input) {
    const newListItem = document.createElement("li")
    newListItem.innerHTML = listItem.innerHTML
    newListItem.querySelector("span").textContent = input
    
    list.append(newListItem)
    updateRemoveItem()
}

function updateRemoveItem () {
    removeItem = document.querySelectorAll(".removeItem")
    for (let i = 0; i < removeItem.length; i++){
            removeItem[i].addEventListener("click", () =>{
            removeItem[i].parentElement.remove()
            const removeCheck = document.getElementsByClassName("select")
            for (let j = 0; j < removeCheck.length; j++){
                if(removeCheck[j].checked){
                    removeCheck[j].parentElement.parentElement.remove()
                }
            }
            footer.classList.remove("hide")
        })
    }
}

hideWarning.addEventListener("click", () =>{
    footer.classList.add("hide")
})