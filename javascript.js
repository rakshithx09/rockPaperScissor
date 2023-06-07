let usch, cmp, cmpsc = 0, ussc = 0, cmpch, us, name, totalRounds, nextround, count=1, flag=0;
function showCustomPrompt() {
  const customPrompt = document.getElementById('customPrompt');
  customPrompt.style.display = 'flex';
}

function processInput() {
  const nameInput = document.getElementById('nameInput');
  name = nameInput.value;
  console.log('Entered Name:', name);

  const customPrompt = document.getElementById('customPrompt');
  customPrompt.style.display = 'none';
  showCustomPrompt2();
}

function showCustomPrompt2() {
  const customPrompt2 = document.getElementById('customPrompt2');
  customPrompt2.style.display = 'flex';
  document.getElementById('name').textContent = `Hey ${name}, How many rounds do u wanna play?`
}

function processInput2() {
  const numInput = document.getElementById('numInput');
  totalRounds = parseInt(numInput.value);
  console.log('Entered Number of Rounds:', totalRounds);

  const customPrompt2 = document.getElementById('customPrompt2');
  customPrompt2.style.display = 'none';
  showCustomPrompt3() ;
  
}

function showCustomPrompt3() {
  const customPrompt3 = document.getElementById('customPrompt3');
  customPrompt3.style.display = 'flex';
}


function processInput31() {
  const customPrompt3 = document.getElementById('customPrompt3');
  usch="rock" ;
  playgame();
  customPrompt3.style.display = 'none';
  uschoice.textContent="ROCK" ;
  if(count==totalRounds){
    setTimeout(() => {
      showCustomPromptID() ;
    }, 1000)
    }
}

function processInput32() {
  const customPrompt3 = document.getElementById('customPrompt3');
  usch="paper" ;
  playgame();
  customPrompt3.style.display = 'none';
  uschoice.textContent="PAPER" ;
  if(count==totalRounds){
    setTimeout(() => {
      showCustomPromptID() ;
    }, 1000)
    }
}

function processInput33() {
  const customPrompt3 = document.getElementById('customPrompt3');
  usch="scissor" ;
  playgame();
  customPrompt3.style.display = 'none';
  uschoice.textContent="SCISSOR" ;
  if(count==totalRounds){
    setTimeout(() => {
      showCustomPromptID() ;
    }, 1000)
    }
}

function showCustomPromptID() {
  const customPromptID = document.getElementById('customPromptID');
  customPromptID.style.display = 'flex';
  const result=document.getElementById('result') ;
  let finalR;
  if(ussc>cmpsc){
  finalR="You Win!" ;
  }else if(ussc<cmpsc){
    finalR="You Lose!";
  }else {
    finalR="Its a Tie!" ;
  }
  result.textContent=finalR ;
  
}

roundboard=document.getElementById('roundBoard');
userboard=document.getElementById('userboard');
compboard=document.getElementById('compboard');
nextround=document.getElementById('NR') ;
uschoice=document.getElementById('uschoice');
compchoice=document.getElementById('compchoice');
resultb=document.getElementById('resultb');
nextround.addEventListener('click', () => {
  if(count<totalRounds){
    count++ ;
    roundboard.textContent=count;
    showCustomPrompt3();
    console.log("count is " + count) ;
  }
  

  
})



document.addEventListener('DOMContentLoaded', function () {
  showCustomPrompt(); 
});

console.log("hey");

function playgame() {
  console.log("playing");
  
    
    
    
    cmp = Math.floor(Math.random() * 3 + 1);
    console.log(cmp);
    switch (cmp) {
      case 1: cmpch = "rock";
      compchoice.textContent="ROCK";
        break;
      case 2: cmpch = "paper";
      compchoice.textContent="PAPER";
        break;
      case 3: cmpch = "sccissor";
      compchoice.textContent="SCISSOR";
    }
    console.log(cmpch);
    
    
    
    
    
    
    
      console.log("user choice " + usch);
      console.log("cmp choice " + cmpch);
      switch (true) {
  
        case (usch == "rock" && cmpch == "rock"):
          console.log("TIE");
          resultb.textContent="TIE" ;
          console.log("userScore : " + ussc + " omputerScore : " + cmpsc);
          break;
  
        case (usch == "rock" && cmpch == "paper"):
          console.log("computer wins");
          cmpsc++;
          resultb.textContent="Computer Wins!"
          compboard.textContent=cmpsc ;
          console.log("userScore : " + ussc + " computerScore : " + cmpsc);
          break;
  
        case (usch == "rock" && cmpch == "sccissor"):
          console.log("User wins");
          ussc++;
          resultb.textContent="User Wins!" ;
          userboard.textContent=ussc ;
          console.log("userScore : " + ussc + " computerScore : " + cmpsc);
          break;
  
        case (usch == "paper" && cmpch == "rock"):
          console.log("User wins");
          ussc++;
          resultb.textContent="User Wins!" ;
          userboard.textContent=ussc ;
          console.log("userScore : " + ussc + " computerScore : " + cmpsc);
          break;
  
        case (usch == "paper" && cmpch == "paper"):
          console.log("TIE");
          resultb.textContent="TIE" ;
          console.log("userScore : " + ussc + " computerScore : " + cmpsc);
          break;
  
        case (usch == "paper" && cmpch == "sccissor"):
          console.log("computer wins");
          cmpsc++;
          resultb.textContent="Computer Wins!"
          compboard.textContent=cmpsc ;
          console.log("userScore : " + ussc + " computerScore : " + cmpsc);
          break;
  
        case (usch == "scissor" && cmpch == "rock"):
          console.log("computer wins");
          cmpsc++;
          resultb.textContent="Computer Wins!"
          compboard.textContent=cmpsc ;
          console.log("userScore : " + ussc + " computerScore : " + cmpsc);
          break;
  
        case (usch == "scissor" && cmpch == "paper"):
          console.log("user wins");
          ussc++;
          resultb.textContent="User Wins!" ;
          userboard.textContent=ussc ;
          console.log("userScore : " + ussc + " computerScore : " + cmpsc);
          break;
  
        case (usch == "scissor" && cmpch == "sccissor"):
          console.log("TIE");
          resultb.textContent="TIE" ;
          console.log("userScore : " + ussc + " computerScore : " + cmpsc);
          break;
      }
    
  
    
    };
    
    





