
let deletAll = document.getElementById('deletAll');
let item = document.getElementById('todo-item');


function additem() {
    let list = document.getElementById('list');
    list.innerHTML += `
    <li>
    <input class="Editinput" type="text" value="${item.value}" disabled>
    <button onclick="deletebtn(this)">Delete</button>
    <button onclick="editBtn(this)">Edit</button>
    </li>
    
    `
    console.log(list)
    item.value = "";
}

deletAll.addEventListener('click', () => {
    let list = document.getElementById('list');
    list.innerHTML = "";

})

let edit = false;
function editBtn(e) {
    if (edit) {
        e.parentNode.childNodes[1].disabled = true;
        e.parentNode.childNodes[1].blur();
        e.parentNode.childNodes[5].innerHTML = "Edit";
        e.parentNode.childNodes[1].style.color = "black";
        edit = false;
    } else {
        e.parentNode.childNodes[1].disabled = false;
        e.parentNode.childNodes[1].focus();
        e.parentNode.childNodes[5].innerHTML = "Update";
        e.parentNode.childNodes[1].style.color = "red";

        edit = true;

    }
}

function deletebtn(e) {
    e.parentNode.remove();
}

