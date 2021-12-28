import { decrmentLifes } from "../../../Common/Lifes/decrementLifes.js";
import { incrementScore } from "../../../Common/Score/incrementScore.js";
import { addResultModal } from "../../../Common/Results/result.js";

function lamp(options, timer) {
  let lampCount = 0;

  const field = document.getElementById("deployField");

  const lamps = {
    lamp1: {
      x: 10,
      y: 7,
    },
    lamp2: {
      x: 87,
      y: 73,
    },
    lamp3: {
      x: 66,
      y: 17,
    },
    lamp4: {
      x: 4,
      y: 58,
    },
    lamp5: {
      x: 44,
      y: 44,
    },
  };

  let count = 1;

  deployLamp(lamps);
  deployLamp(lamps);

  function deployLamp(lamps) {
    let rowLamp = createLamp();

    rowLamp.style.top = `${lamps[`lamp${count}`].x}`;
    rowLamp.style.left = `${lamps[`lamp${count}`].y}`;
    rowLamp.src = "Pictures/lampOff.jpg";
    count++;
    field.appendChild(rowLamp);
  }

  function createLamp() {
    let node = document.createElement("img");

    node.classList.add("lamp", `lamp${count}`);
    node.id = `lamp${count}`;

    return node;
  }

  let timerId = setInterval(() => deployLamp(lamps), 2000);
  setTimeout(() => {
    clearInterval(timerId);
  }, 6000);

  field.addEventListener("click", (event) => {
    let target = event.target;
    if (!target.classList.contains("lamp")) return;

    target.src = "Pictures/lampOn.jpg";

    lampCount++;
    if (lampCount === 6) {
      timer.clearTimer();
      incrementScore(options.Score);
      document.body.appendChild(addResultModal(true, options.Score, "/Levels/Lvl_2/lvl2.html"));
      setTimeout(() => {
        document.querySelector(".resultLayer").classList.add("open");
      }, 1);
    }
  });
}

export { lamp };
