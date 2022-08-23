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

    const total = document.getElementById('total').innerText= (managerCostValue+ coachCostValue + playerTotalCost);
})


                       // player data table.....

    const playerList = [];

    function displayPlayer()
    {
    const totalSelectedPlayers = document.getElementById("total-selected-players");
    totalSelectedPlayers.innerText = playerList.length;
   
     const playerListContainer = document.getElementById("selected-player");
    playerListContainer.textContent = '';

    for(let i = 0; i < playerList.length; i++)
    {
        if(playerList.length>5){
            alert("Can not select more than five players")
            return playerList();
        } 
        else{
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <th>${i+1}</th>
            <td>${playerList[i].playerName}</td>
            `;
            playerListContainer.appendChild(tr);
        }
       
    }
}

function addToTable(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const player = {
        playerName: playerName
        
    }
     playerList.push(player);
    
    displayPlayer();
}

// function disableButton(button) {
//     document.getElementById(btn1.id).disabled = true;
// }  
// function disableButton(button) {
//     document.getElementById(btn2.id).disabled = true;
// }  
// function disableButton(button) {
//     document.getElementById(btn3.id).disabled = true;
// }  
// function disableButton(button) {
//     document.getElementById(btn5.id).disabled = true;
// }  
//   document.getElementById('btn4').disabled=true;

//   const buttons = document.getElementsById("btn2");
//     for (let i = 0; i < buttons.length; i++) {
//       buttons[i].disabled = true;
//     }

document.getElementById('btn1').addEventListener('click',function(){
    document.getElementById(btn1.id).disabled = true;
})
document.getElementById('btn2').addEventListener('click',function(){
    document.getElementById(btn2.id).disabled = true;
})
document.getElementById('btn3').addEventListener('click',function(){
    document.getElementById(btn3.id).disabled = true;
})
document.getElementById('btn4').addEventListener('click',function(){
    document.getElementById(btn4.id).disabled = true;
})
document.getElementById('btn5').addEventListener('click',function(){
    document.getElementById(btn5.id).disabled = true;
})
document.getElementById('btn6').addEventListener('click',function(){
    document.getElementById(btn6.id).disabled = true;
})
document.getElementById('btn7').addEventListener('click',function(){
    document.getElementById(btn7.id).disabled = true;
})
document.getElementById('btn8').addEventListener('click',function(){
    document.getElementById(btn8.id).disabled = true;
})
document.getElementById('btn9').addEventListener('click',function(){
    document.getElementById(btn9.id).disabled = true;
})

