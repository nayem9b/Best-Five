
var elems = document.getElementsByClassName("angka");
for(var i = 0; i < elems.length; i++) {
    elems[i].disabled = true;
}

//   button disable er kaj ta thik korar lagbe

//    document.getElementsByClassName('btn').addEventListener('click',function(){
//     document.getElementsByClassName("btn").disabled = true;
//    })

                //  Player Cost........
document.getElementById('calculate-button').addEventListener('click', function(){
    const perPlayerCostString= document.getElementById('perPlayerCost').value;
    const perPlayerCostValue= parseInt(perPlayerCostString);
    const playerTotalCost= perPlayerCostValue*playerList.length;
  
  
    if (isNaN(perPlayerCostValue)) {
      alert('Please provide a valid number for per Player');
      return;
     }
     else if(perPlayerCostValue<0){
      alert('Per Player Cost can not be a negative value');
      return;
     }
   
  
    const player= document.getElementById('expenses-span-value').innerText= playerTotalCost;
  })


                // Manager and Coach cost .......
  document.getElementById('calculate-total').addEventListener('click',function(){
    const managerCostString= document.getElementById('manager-cost').value;
    const managerCostValue= parseInt(managerCostString);
    const perPlayerCostString= document.getElementById('perPlayerCost').value;
    const perPlayerCostValue= parseInt(perPlayerCostString);
    const playerTotalCost= perPlayerCostValue*playerList.length;
    if (isNaN(managerCostValue)) {
        alert('Please provide a valid number for Manager Cost');
        return;
       }
       else if(managerCostValue<0){
        alert('Manager Cost can not be a negative value');
        return;
       }
    
    console.log(managerCostValue);
    
    const coachCostString= document.getElementById('coach-cost').value;
    const coachCostValue= parseInt(coachCostString);
    if (isNaN(coachCostValue)) {
        alert('Please provide a valid number for Coach Cost');
        return;
       }
       else if(coachCostValue<0){
        alert('Coach Cost can not be a negative value');
        return;
       }
    console.log(coachCostValue);

    const total = document.getElementById('total').innerText= (managerCostValue+ coachCostValue + playerTotalCost);
})

const playerList = [];

function displayPlayer()
{
    const totalSelectedPlayers = document.getElementById("total-selected-players");
    totalSelectedPlayers.innerText = playerList.length;
   
    
    const playerListContainer = document.getElementById("selected-player");
    playerListContainer.textContent = '';

    for(let i = 0; i < playerList.length; i++)
    {

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${playerList[i].playerName}</td>
        `;
        playerListContainer.appendChild(tr);
    }
       if(playerList.length>5){
        alert("Can not select more than five players")
        return;
    }
//   6 joner beshi add hoye jacche. pore thik korar lagbe
    // playerListContainer.appendChild(tr);


  
}

function addToTable(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const player = {
        playerName: playerName
        
    }
     playerList.push(player);
    
    displayPlayer();
}
