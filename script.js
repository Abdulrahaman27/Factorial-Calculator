const submitBtn = document.getElementById("submit-btn");
const resultDisplay = document.getElementById("result-display");

submitBtn.addEventListener("click", ()=> {
  const input = document.getElementById("number-input").value;
  const num = parseInt(input);
  
  if(num < 0){
    resultDisplay.textContent = `Please input a valid positive integer`
  }else {
    let result = 1n;
    for(let i = num; i > 0; i--){
      result *= BigInt(i);
    }
    resultDisplay.innerHTML = `The Factorial of <b>${num}</b> is <b>${result.toString()}</b>`;
  }
})