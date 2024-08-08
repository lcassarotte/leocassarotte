function abreProt(){
    novaJanela = window.open (`https://www.figma.com/proto/4M0iCzllDOFZqOIVIygiPC/PROT%C3%93TIPO-01?node-id=31-9&starting-point-node-id=31%3A9&t=MS7ktrMGc12suT1i-1`,`_blank`,`width=800`,`height=800`);
}

function abreDiscord(){
    novaJanela = window.open(`https://discord.com/download`, `_blank`, `width=800`,`height=800`);
}

function abreInsta(){
    novaJanela = window.open (`https://www.instagram.com/lcassarotte/`, `_blank`, `width=800`,`height=800`);
}

function abreX (){
    novaJanela = window.open (`https://x.com/leocassarotte`,`_blank`, `width=800`,`height=800`);
}

function radiofun(){
    alert(`Salário muito baixo, procure outro!`);
}

function radiofun2(){
    alert(`Salário interessante, me diga as condições de contrato!`);
}

function radiofun3(){
    alert(`Ótimo!!! Por favor, entre em contato!`);
}

function msgEnv(){
    alert(`Mensagem Enviada!`);
}

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});