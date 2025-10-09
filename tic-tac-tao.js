  let btn = document.querySelectorAll(".box");
      let msg = document.querySelector(".msg-container");
      let msgtext = document.getElementById("msg");
      let restbtn = document.getElementById("rest-game");
      let newbtn = document.getElementById("new-game");
      let hide = document.querySelector(".hide");
      let ply1 = document.getElementById("ply1");
      let ply2 = document.getElementById("ply2");

      let winpattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      let plyer1= prompt("enter player one name:");
      let plyer2 = prompt("enter player two name:");
        ply1.innerText = `player 1: ${plyer1} (x)`;
        ply2.innerText = `player 2: ${plyer2} (o)`;

      let turn = true;
      btn.forEach((element) => {
        element.addEventListener("click", (e) => {
          if (turn && element.innerHTML === "") {
            element.innerHTML = "x";
            turn = false;
          } else if (!turn && element.innerHTML === "") {
            element.innerHTML = "o";
            turn = true;
          }
          checkwinner();
        });
      });
      const checkwinner = () => {
        for (let pattern of winpattern) {
          //   console.log(
          //     btn[pattern[0]].innerText,
          //     btn[pattern[1]].innerText,
          //     btn[pattern[2]].innerText
          //   );
          let val1 = btn[pattern[0]].innerText;
          let val2 = btn[pattern[1]].innerText;
          let val3 = btn[pattern[2]].innerText;
          if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
              console.log(`Congratulation the winner is ${val1}`);
                if(val1 === "x"){
                    val1 = plyer1;}
                else{
                    val1 = plyer2;}
              showWinner(val1);
              
            }
          }
        }
        btn.forEach((element) => {
          if (element.innerHTML != "") {
            let full = true;
            for (let i = 0; i < btn.length; i++) {
              if (btn[i].innerHTML === "") {
                full = false;
              }
            }
            if (full) {
              msgtext.innerText = "Game is Tie";
              msg.classList.remove("hide");
            }
          }
        });
      };
      const disabled = ()=>{
     btn.forEach(element => {
            element.disabled= true;
        });
      }
      const showWinner = (winner) => {
        msgtext.innerText = `The winner is ${winner}`;
        disabled();
        msg.classList.remove("hide");
       
      };
      restbtn.addEventListener("click", () => {
        btn.forEach((element) => {
          element.innerHTML = "";
        });
        msg.classList.add("hide");
      });
      newbtn.addEventListener("click", () => {
        btn.forEach((element) => {
          element.innerHTML = "";
        });
        msg.classList.add("hide");
      });
      