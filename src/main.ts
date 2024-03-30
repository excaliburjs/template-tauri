import * as ex from 'excalibur';
import { invoke } from "@tauri-apps/api/tauri";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});


const game = new ex.Engine({
    displayMode: ex.DisplayMode.FitScreenAndFill
});
const hello = new ex.Label({
    text: 'Hello Tauri! 💖🎉',
    pos: game.screen.center.sub(ex.vec(0, 100)),
    color: ex.Color.White,
    font: new ex.Font({
        family: 'Segoe UI Light',
        size: 50,
        textAlign: ex.TextAlign.Center,
        baseAlign: ex.BaseAlign.Alphabetic
    })
});

game.add(hello);
game.start();