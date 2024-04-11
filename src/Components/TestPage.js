import React, { useEffect, useRef } from "react";
import "../App.css";

const TestPage = () => {
  const x = useRef(280);
  const y = useRef(200);
  const shield_x = useRef(9999);
  const shield_y = useRef(9999);
  const shield_radius = useRef(40);
  // const vxl = useRef(0);
  const vxr = useRef(0);
  const vy = useRef(0);
  const vx = useRef(0);
  const hitFloor = useRef(false);
  // const resetGame = useRef(false);
  function resetGame() {
    x.current = 280;
    y.current = 200;
    vy.current = 0;
    start();
  }
  function start() {
    const canvas = document.getElementById("Canvas");
    const ctx = canvas.getContext("2d");

    // class Projectile {
    //   constructor({ position, velocity }) {
    //     this.position = position;
    //     this.velocity = velocity;
    //     this.radius = 5;
    //   }

    //   draw() {
    //     ctx.beginPath();
    //   }
    // }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(
        shield_x.current,
        shield_y.current,
        shield_radius.current,
        0,
        2 * Math.PI
      );
      ctx.stroke();
      ctx.fillRect(x.current, y.current, 50, 50);
      x.current = x.current + vx.current;
      // x.current = x.current + vxl.current;
      x.current = x.current + vxr.current;
      y.current = y.current + vy.current;

      // console.log(y.current);
      // console.log(vy.current);
    }
    setInterval(function gravity() {
      if (y.current >= canvas.height - 100) {
        hitFloor.current = true;
        // console.log(hitFloor.current);
        y.current = canvas.height - 100;
      }
      if (!hitFloor.current && vy.current <= 10) {
        vy.current = vy.current + 0.02;
      }
      update();
    }, 30);

    // update();
    document.addEventListener("keydown", function (e) {
      // console.log(e.code);
      if (e.code === "KeyH") {
        vy.current = vy.current - 1;
        hitFloor.current = false;

        // console.log(x.current);
        update();
      }

      if (e.code === "KeyG" && shield_radius.current !== 0) {
        setInterval(() => {
          shield_x.current = x.current + 25;
          shield_y.current = y.current + 25;
          // update();
        });
      }
      if (e.code === "KeyG" && shield_radius.current === 0) {
        shield_radius.current = 40;
      }
    });
    document.addEventListener("keyup", function (e) {
      if (e.code === "KeyH") {
        vy.current = 0;
        update();
      }
      if (e.code === "KeyG") {
        shield_radius.current = 0;
        update();
      }
    });
  }
  useEffect(() => {
    start();
    // update();
  }, []);
  // console.log("ive rerendered");
  // console.log(vy.current);
  return (
    <>
      <div className="StartRow">
        <div
          className="Start_Button"
          onClick={() => {
            resetGame();
            console.log(vy.current);
            // start();
          }}
        >
          <div className="NavButtonText">START</div>
        </div>
      </div>
      <div id="PlayArena">
        {/* <div id="Character"></div> */}
        <canvas id="Canvas" width="600" height="600"></canvas>
      </div>
    </>
  );
};

export default TestPage;
