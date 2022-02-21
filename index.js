// Your code here
const dodger = document.getElementById("dodger");
//MOVE DODGER LEFT
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
//MOVE DODGER RIGHT
  function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left < 360){
        dodger.style.left = `${left + 1}px`;
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });