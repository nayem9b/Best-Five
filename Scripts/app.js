document.getElementById('calculate-button').addEventListener('click', function(){
  const perPlayerCostString= document.getElementById('perPlayerCost').value;
  const perPlayerCostValue= parseInt(perPlayerCostString);
  const player= document.getElementById('expenses-span-value').innerText= perPlayerCostValue;
})

document.getElementById('calculate-total').addEventListener('click',function(){
    const managerCostString= document.getElementById('manager-cost').value;
    const managerCostValue= parseInt(managerCostString);
    
    console.log(managerCostValue);
    
    const coachCostString= document.getElementById('coach-cost').value;
    const coachCostValue= parseInt(coachCostString);
    console.log(coachCostValue);

    const total = document.getElementById('total').innerText= (managerCostValue+ coachCostValue);
})