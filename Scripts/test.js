const listArray = [];

function addToList(selected) {
    if (listArray.length < 5) {
        const name = selected.parentNode.parentNode.children[0].innerText;
        listArray.push(name);
        display(listArray);
        selected.disabled = 'true';
    }
    else {
        alert("You Can't Select More Than 5 Players");
    }
}


function display(displayArray) {

    const tableBody = document.getElementById("player-list");
    tableBody.innerHTML = "";
    for (let i = 0; i < listArray.length; i++) {
        let displayName = displayArray[i];
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${displayName}</td>
        `
        tableBody.appendChild(tr)
    }
    document.getElementById('selectedPlayerNumber').innerText = listArray.length
}