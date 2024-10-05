const inputText = document.getElementById('text');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputText.value === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
    }
}