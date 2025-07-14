let addInput = document.querySelector(".todo-input");
let addButton = document.querySelector(".todo-button");
let list = document.querySelector(".list");
let heading = document.querySelector(".saved-heading");


addButton.addEventListener("click",()=>{

    if(addInput.value != ""){
    heading.style.display = "none";
    // Create li
    let li = document.createElement("li");
    list.append(li);
    // create input
    let addedInput = document.createElement("input");
    addedInput.disabled = true;
    addedInput.className += "added-input";
    addedInput.style.padding = "2px"
    addedInput.style.outline = "none";
    addedInput.value = addInput.value;
    li.appendChild(addedInput);
    addInput.value = "";
    // Create div
    let div = document.createElement("div");
    li.appendChild(div)
    //Save Button
    let save = document.createElement("button")
    save.innerHTML = "<i class='fa-solid fa-floppy-disk save-btn-logo'></i>";
    save.style.display = "none";
    div.appendChild(save)
    // Create edit button
    let editbtn = document.createElement("button");
    editbtn.innerHTML = "<i class='fa-solid fa-pen-to-square edit-btn-logo'></i>";

    editbtn.addEventListener("click",() =>{
        save.style.display = "block";
        addedInput.disabled = false;
        addedInput.style.border = "1px solid black";
        addedInput.style.borderRadius = "5px";
        console.log(addedInput.value);
        

        save.addEventListener("click", () =>{
            save.style.display = "none";
            addedInput.disabled = true;
            addedInput.value = addedInput.value;
            console.log(addedInput.value);
            addedInput.style.border = "none";

        })
    })
    div.appendChild(editbtn);
    // Create Delete button
    let delbtn = document.createElement("button");
    delbtn.innerHTML = "<i class='fa-solid fa-trash del-btn-logo'></i>";
    delbtn.addEventListener("click", () =>{
        li.remove();
    })
    div.appendChild(delbtn);
    }

    else{
        alert("Please Add a Todo")
    }
})
