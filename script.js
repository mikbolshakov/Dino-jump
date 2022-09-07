const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  } 
  setTimeout(function() {
    dino.classList.remove("jump");
  }, 400) 
}
/*класс jump из css добавляет прыжок. classList добавляет класс
setTimeout позволяет вызвать функцию один раз через определенный интервал.
classList удаляет класс через 0,4 сек, чтобы при новом нажатии на клавиатуру 
снова появился класс и заново отработал код из css*/

let isAlive = setInterval(function() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("GAME OVER!!!")
  }
}, 10)

/*setInterval позволяет вызывать функцию регулярно через определенный интервал
parseInt разбивает строковый элемент и возвращает целое число
getComputedStyle возвращает объект, содержащий все css свойства элемента
getPropertyValue получаем значение свойств объекта в строковом значении, которые необходимо обработать*/