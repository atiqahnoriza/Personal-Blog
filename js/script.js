const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(elementTop < screenHeight - 100){
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// Falling flower animation
function createFlower(){
  const flower = document.createElement("div");
  flower.classList.add("falling-flower");
  flower.innerHTML = "✿";

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = Math.random() * 4 + 5 + "s";
  flower.style.fontSize = Math.random() * 18 + 18 + "px";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 9000);
}

setInterval(createFlower, 600);