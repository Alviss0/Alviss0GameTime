//запуск видео

import { incrementScore } from "../../../Common/Score/incrementScore.js";
import { addResultModal } from "../../../Common/Results/result.js";
import { decrmentLifes } from "../../../Common/Lifes/decrementLifes.js";

function video(options, timer) {
  let strt = document.getElementById("buttonStart");
  let idlink = document.getElementById("video_play");

  strt.addEventListener("click", () => {
    idlink.play();
    strt.classList.add("button_hide");
  });

  //   function delete_btn(button) {
  //     button.remove();
  //   }

  const scnd = document.getElementById("time_id");
  const correct_time_min = 12;
  const correct_time_max = 14;
  let check_res = document.getElementById("buttonCheckResult");

  check_res.addEventListener("click", () => {
    if (correct_time_min < scnd.value && scnd.value < correct_time_max) {
      timer.clearTimer();
      incrementScore(options.Score);
      document.body.appendChild(addResultModal(true, options.Score, "/Levels/Lvl_3/lvl3.html"));
      setTimeout(() => {
        document.querySelector(".resultLayer").classList.add("open");
      }, 1);
      console.log("si");
    } else {
      timer.clearTimer();
      decrmentLifes();
      location.reload();
      console.log("no");
    }
  });
}

export { video };
