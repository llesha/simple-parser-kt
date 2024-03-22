import { byClass, byId, changeVisibility } from "./utils.js";

Array.from(byClass("dropdown-name")).forEach(dropdown => dropdown.onclick = () => {
    changeVisibility(dropdown.nextElementSibling)
})

Array.from(byClass("option-choice")).forEach(option => option.onclick = () => {
    Array.from(option.parentElement.getElementsByClassName("option-choice")).forEach(e => {
        e.innerHTML = e.innerText
    })
    let tick = document.createElement("span");
    tick.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 -80 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`;
    option.appendChild(tick);
})

let newGroup = byId("new-group");
newGroup.onclick = () => {
    let input = document.createElement("input")
    input.setAttribute("type", "text");

    input.onkeydown = (e) => {
        if (e.key.toLowerCase() == "enter") {
            _createGroupFromInput(input)
        }
    }
    input.onblur = () => { _createGroupFromInput(input) }
    newGroup.parentElement.insertBefore(input, newGroup)
    input.focus()
}

function _createGroupFromInput(input) {
    let value = input.value;
    input.remove()
    if (value != "") {
        let addedGroup = newGroup.cloneNode();
        addedGroup.removeAttribute("id")
        addedGroup.innerText = value
        addedGroup.classList.add("dropdown")

        addedGroup.appendChild(_createClose());
        addedGroup.appendChild(_createDropdownBody())

        _groupOnClick(addedGroup)
        newGroup.parentElement.insertBefore(addedGroup, newGroup)
    }
}

function _groupOnClick(group) {
    group.onclick = () => {
        console.log(group)
    }
}

function _createClose() {
    let close = document.createElement("span");
    close.classList.add("close");
    close.innerText = "×"
    close.onclick = (event) => {
        close.parentElement.remove()
        event.stopImmediatePropagation()
    }

    return close
}

function _createDropdownBody() {
    let body = document.createElement("div")
    body.classList.add("dropdown-body")

    return body;
}