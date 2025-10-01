async function getFirstAdvice(){
    try {
    const response = await fetch("https://api.adviceslip.com/advice/117");
    const data = await response.json();
    document.getElementById('adviceNumber').innerText = data.slip.id;
    document.querySelector('.advice').innerText = "\"" + data.slip.advice + "\"";
    } catch (error) {
    console.error("Error fetching advice:", error);
  }
};
getFirstAdvice();


document.querySelector(".diceButton").addEventListener("click",async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    // console.log("Advice ID:", data.slip.id);
    // console.log("Advice:", data.slip.advice);
    document.getElementById('adviceNumber').innerText = data.slip.id;
    document.querySelector('.advice').innerText = "\"" + data.slip.advice + "\"";



  } catch (error) {
    console.error("Error fetching advice:", error);
  }
});

