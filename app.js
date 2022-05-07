$("document").ready(function() {
  const chatBotC = $('.chatbot-c')[0];
  $('.theme-btn').click(function() {
    $('body').toggleClass('light');
    $('.user-choix').toggleClass('light');
  })  
  const footerText= document.querySelector('.footer-text')
  const buttonWeb = document.querySelector('.website');
  const buttonThemes = document.querySelector('.themes');
  console.log(GeneralData.english.buttonwebsite)
  activeLangBtn();
  starterFctn();
  function activeLangBtn() {
    const langbuttons = document.querySelectorAll('.lang-anchor')
    langbuttons.forEach(lang => {
      lang.addEventListener('click',() => {
        if(lang.innerText =='EN') {
          starterEnFctn()
          footerText.innerText = GeneralData.english.footer;
          buttonWeb.innerText = GeneralData.english.buttonwebsite;
          buttonThemes.innerText = GeneralData.english.buttonnewtheme;
        } else {
          starterFrFctn()
          footerText.innerText = GeneralData.french.footer;
          buttonWeb.innerText = GeneralData.french.buttonwebsite;
          buttonThemes.innerText = GeneralData.french.buttonnewtheme;
        }
      })
    })
  }
  function starterFctn(){
    $('.themes').click(function() {
      newTheme();
    })
    chatBotC.innerHTML="";
    chatBotC.innerHTML= ` <div class="lea-message-cont"><div class="lea-message"><p class="welcome-message">Choose a language / Choisissez un langage :</p></div>
  `
    chatBotC.innerHTML += `<div class="choix-questions">
  <div class="choix">
      <h2>English</h2>
  </div>
  <div class="choix">
      <h2>French</h2>
  </div></div>`
    const choices = document.querySelectorAll('.choix');
    choices.forEach(choice => {
      choice.addEventListener('click',() => {
        if( choice.innerText == 'English') {
          var lg = 'english';
          starterEnFctn();
          footerText.innerText = GeneralData.english.footer;
          buttonWeb.innerText = GeneralData.english.buttonwebsite;
          buttonThemes.innerText = GeneralData.english.buttonnewtheme;
              
        } else {
          var lg = 'french';
          starterFrFctn(); 
          footerText.innerText = GeneralData.french.footer;
          buttonWeb.innerText = GeneralData.french.buttonwebsite;
          buttonThemes.innerText = GeneralData.french.buttonnewtheme;
            
        }
      })
    })

  }
  function starterEnFctn() {
    var langButtonEn = $('.lang-anchor')[0]
    var langButtonFr = $('.lang-anchor')[1]
    langButtonEn.classList.add('active')
    langButtonFr.classList.remove('active')
    langAttr = 'english'
    welcomeMessage();
    

    
  }
  function starterFrFctn() {
    var langButtonEn = $('.lang-anchor')[0]
    var langButtonFr = $('.lang-anchor')[1]
    langButtonEn.classList.remove('active')
    langButtonFr.classList.add('active')
    langAttr = 'french'
    welcomeMessage();
    

  }
  function welcomeMessage() {
    
    //fonction de départ coder en dur!
    chatBotC.innerHTML="";
    indexmessage=0;
    choixContainerNumber = 0;
    
    


//dots premier
    setTimeout(function() {
      chatBotC.innerHTML = `<div class="lea-message-cont">
      <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
       </div>
      <div class="lea-icon lea-icon${indexmessage}"></div></div>`
      setTimeout(function(){
        $('.dots').hide();
      },2000)   //t1
    },100)



//message 1er
    setTimeout(function(){
      
      $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
      <span class="span-lea ">Léa</span>
      <p class="welcome-message">${GeneralData[langAttr].welcomemessage1}</p>
    </div>`
  
    
    setTimeout(function() {
      var icondisap = "lea-icon" + indexmessage;
      console.log(icondisap)
      $('.' + icondisap).css('opacity', '0');
    },200)  //delaybetweennewmessageandicondisappear const 
    },2100)  //t1+delaybetweendotmessage  (delay constant)









  //2e dots
    setTimeout(function() {
      indexmessage ++;
  
    console.log(indexmessage + "au 2e dots")
      chatBotC.innerHTML += `<div class="lea-message-cont">
      <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
       </div>
      <div class="lea-icon lea-icon${indexmessage}"></div></div>`
      setTimeout(function(){
        $('.dots').hide();
      },2000) //t2 
    },2400) //t1 + delaybetweendotmessage + delaybetweenmessagenewdots (constant)



  //2e message
    setTimeout(function(){
      $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
      
      <p class="welcome-message">${GeneralData[langAttr].welcomemessage2}</p>
    </div>`
  //on fait disparaitre l'icone de la classe span-lea0 au bout de 2.4s.
    setTimeout(function() {
      var spanDisap = "lea-icon" + indexmessage;
      console.log(spanDisap)
      $('.' + spanDisap).css('opacity', '0');
    },200)
    },4400)




    
  //3e dots 
  setTimeout(function() {
    indexmessage ++;
    console.log(indexmessage +"au 3e dots")
    chatBotC.innerHTML += `<div class="lea-message-cont">
    <div class="dots">
        <div class="dot dot1"></div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
     </div>
    <div class="lea-icon"></div></div>`
    setTimeout(function(){
      $('.dots').hide();
    },2000)
  },4700)
  


  //3e vague de messages
  setTimeout(function(){
    
    $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
    
    <p class="welcome-message">${GeneralData[langAttr].welcomemessage3}</p>
  </div>`
//on fait disparaitre l'icone de la classe span-lea0 au bout de 2.4s.
  setTimeout(function() {
    let spanDisap = "lea-icon" + indexmessage;
    console.log(spanDisap)
    $('.' + spanDisap).css('opacity', '0');
  },300)
  },6700)


  //Proposition des thèmes 
  setTimeout(function() {

    //run a loop through all array crée les choix.
    chatBotC.innerHTML += ` <div class="choix-questions choix-questions${choixContainerNumber}">
    <div class="choix thchoix th1">
        <h2>${GeneralData[langAttr].anxiety}</h2>
    </div>
    <div class="choix thchoix th2">
        <h2>${GeneralData[langAttr].fatigue}</h2>
    </div>
    <div class="choix thchoix th3">
        <h2>${GeneralData[langAttr].depression}</h2>
    </div>
    <div class="choix thchoix th4">
        <h2>${GeneralData[langAttr].sleep}</h2>
    </div>
    <div class="choix thchoix th5">
        <h2>${GeneralData[langAttr].pain}</h2>
    </div>
   
  </div>`

    //Gestion onclick sur les thèmes à remettre dans proposechoiceT
  $('.th1').click(function() {
    var innerTextButton = document.querySelector('.th1').innerText;
    chosenButtonDisplay(innerTextButton);     
    setTimeout(function() {
      EntreeAnxiety();
    },150)  
  });
  $('.th2').click(function() {
   
    
    var innerTextButton = document.querySelector('.th2').innerText;
    chosenButtonDisplay(innerTextButton);     
    setTimeout(function() {
      EntreeFatigue();
    },150)  
  });
  $('.th3').click(function() {
    
    var innerTextButton = document.querySelector('.th3').innerText;
    chosenButtonDisplay(innerTextButton);     
    setTimeout(function() {
      EntreeDepression();
    },150)  
  });
  $('.th4').click(function() {
    
    var innerTextButton = document.querySelector('.th4').innerText;
    chosenButtonDisplay(innerTextButton);     
    setTimeout(function() {
      EntreeSleep();
    },150)  
  });
  $('.th5').click(function() {
    
    var innerTextButton = document.querySelector('.th5').innerText;
    chosenButtonDisplay(innerTextButton);     
    setTimeout(function() {
      EntreePain();
    },150)  
  });

  },6800)

  }
  //FIN STARTER






  function enterTheme() {
    rd1see=false;
    rd2see=false;
    rd3see=false;
    rd4see=false;
    rd5see=false;
    rd6see=false;
    rd7see=false;
    rd8see=false;
   
  }

  //function d'entree de themes
  function EntreeAnxiety() {
    enterTheme();  
    var pd1 = dataTheme[langAttr].anxiety.questions.pd1; 
    var pd2 = dataTheme[langAttr].anxiety.questions.pd5;
    proposeChoice2(pd1,pd2)
  }
  function EntreeFatigue() {
    enterTheme();  
    var pd1 = dataTheme[langAttr].fatigue.questions.pd1; 
    var pd2 = dataTheme[langAttr].fatigue.questions.pd2;
    var pd3 = dataTheme[langAttr].fatigue.questions.pd3;
    var pd4 = dataTheme[langAttr].fatigue.questions.pd4;
    proposeChoice4(pd1,pd2,pd3,pd4)
    
  }
  function EntreeDepression() {
    enterTheme();  
    var pd1 = dataTheme[langAttr].depression.questions.pd1; 
    var pd2 = dataTheme[langAttr].depression.questions.pd2;
    var pd3 = dataTheme[langAttr].depression.questions.pd3;
    proposeChoice3(pd1,pd2,pd3)
  }
  function EntreeSleep() {
    enterTheme();  //ROBIN2
    var pd1 = dataTheme[langAttr].sleep.questions.pd1; 
    var pd2 = dataTheme[langAttr].sleep.questions.pd2;
    var pd3 = dataTheme[langAttr].sleep.questions.pd6;
    proposeChoice3(pd1,pd2,pd3)
  }
  function EntreePain() {
    enterTheme();  //ROBIN2
    var pd1 = dataTheme[langAttr].pain.questions.pd1; 
    var pd2 = dataTheme[langAttr].pain.questions.pd2;
    proposeChoice2(pd1,pd2)

  }

 function newTheme() {
  var newthemeMessage = dataTheme[langAttr].proposetheme;
  cleanResponses()
  setTimeout(function(){
    indexmessage ++
    //dots
    chatBotC.innerHTML += `<div class="lea-message-cont">
    <div class="dots">
        <div class="dot dot1"></div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
     </div>
    <div class="lea-icon"></div></div>`
    setTimeout(function(){
      $('.dots').hide();
      $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
      <span class="span-lea ">Léa</span>
      <p class="welcome-message">${newthemeMessage}</p>
    </div>`
    
      var newtheme1= GeneralData[langAttr].anxiety;
      var newtheme2= GeneralData[langAttr].fatigue;
      var newtheme3= GeneralData[langAttr].depression;
      var newtheme4= GeneralData[langAttr].sleep;
      var newtheme5= GeneralData[langAttr].pain;
      proposeChoice5T(newtheme1,newtheme2,newtheme3,newtheme4,newtheme5)
      
    },1000)
  },300)
 
}

function proposeChoice5T(propositionDirect1, propositionDirect2, propositionDirect3, propositionDirect4, propositionDirect5) {
  setTimeout(function() {
    choixContainerNumber++;
  chatBotC.innerHTML += `<div class="choix-questions choix-questions${choixContainerNumber}">
  <div class="thchoix choix th1">
      <h2>${propositionDirect1}</h2>
  </div><div class="thchoix choix th2">
  <h2>${propositionDirect2}</h2>
  </div><div class="thchoix choix th3">
  <h2>${propositionDirect3}</h2>
  </div><div class="thchoix choix th4">
  <h2>${propositionDirect4}</h2>
  </div><div class="thchoix choix th5">
  <h2>${propositionDirect5}</h2>
  </div></div>`
  $('.th1').click(function() {
    
    
    var innerTextButton = document.querySelector('.th1').innerText;
    chosenButtonDisplay(innerTextButton);     
    setTimeout(function() {
      EntreeAnxiety();
    },150)  
  });
  $('.th2').click(function() {
    
    var innerTextButton = document.querySelector('.th2').innerText;
    chosenButtonDisplay(innerTextButton);     
    setTimeout(function() {
      EntreeFatigue();
    },150)  
  });
  $('.th3').click(function() {
   
    var innerTextButton = document.querySelector('.th3').innerText;
    chosenButtonDisplay(innerTextButton);     
    setTimeout(function() {
      EntreeDepression();
    },150)  
  });
  $('.th4').click(function() {
    
    var innerTextButton = document.querySelector('.th4').innerText;
    chosenButtonDisplay(innerTextButton);     
    setTimeout(function() {
      EntreeSleep();
    },150)  
  });
  $('.th5').click(function() {
    
    var innerTextButton = document.querySelector('.th5').innerText;
    chosenButtonDisplay(innerTextButton);     
    setTimeout(function() {
      EntreePain();
    },150)  
  });
  },500)
  
}
  //FIN THEME




// FUNCTION clean button
  function chosenButtonDisplay(textButton) {
    var choixcon= '.choix-questions' + choixContainerNumber;
    var choixcontainer = document.querySelector(choixcon); //recupere le bon container de la bonne rangée ! (la dernière)
    let children = choixcontainer.children;
    for (let i = 0; i < children.length; i++) {
       children[i].style.display = "none";
    }  //efface tous les choix 
    choixcontainer.innerHTML +=`<div class="user-choix"><h2>${textButton}</h2></div>` //affiche la proposition choisie par l'utilisateur
  }



 
 
  
  function proposeChoice1(propositionDirect1) {
    setTimeout(function() {
      choixContainerNumber++;
    chatBotC.innerHTML += `<div class="choix-questions choix-questions${choixContainerNumber}">
    <div class="choix choix${choixContainerNumber} c1">
        <h2>${propositionDirect1}</h2>
    </div></div>`

    var choicesclass= '.choix' + choixContainerNumber;
    var choicesX = document.querySelectorAll(choicesclass);
    if ( rd1see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd1;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd1;
        let depression1 = dataTheme[langAttr].depression.questions.pd1;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd1;
        let pain1 = dataTheme[langAttr].pain.questions.pd1;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd2see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd2;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd2;
        let depression1 = dataTheme[langAttr].depression.questions.pd2;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd2;
        let pain1 = dataTheme[langAttr].pain.questions.pd2;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd3see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd3;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd3;
        let depression1 = dataTheme[langAttr].depression.questions.pd3;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd3;
        let pain1 = dataTheme[langAttr].pain.questions.pd3;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd4see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd4;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd4;
        let depression1 = dataTheme[langAttr].depression.questions.pd4;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd4;
        let pain1 = dataTheme[langAttr].pain.questions.pd4;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd5see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd5;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd5;
        let depression1 = dataTheme[langAttr].depression.questions.pd5;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd5;
        let pain1 = dataTheme[langAttr].pain.questions.pd5;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd6see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd6;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd6;
        let depression1 = dataTheme[langAttr].depression.questions.pd6;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd6;
        let pain1 = dataTheme[langAttr].pain.questions.pd6;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd7see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd7;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd7;
        let depression1 = dataTheme[langAttr].depression.questions.pd7;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd7;
        let pain1 = dataTheme[langAttr].pain.questions.pd7;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd8see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd8;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd8;
        let depression1 = dataTheme[langAttr].depression.questions.pd8;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd8;
        let pain1 = dataTheme[langAttr].pain.questions.pd8;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
     
    lookChoice();
    },500)
  }

  function proposeChoice2(propositionDirect1, propositionDirect2, id1, id2) {
    choixContainerNumber++;
    setTimeout(function() {
      
    chatBotC.innerHTML += `<div class="choix-questions choix-questions${choixContainerNumber}">
    <div class="choix choix${choixContainerNumber} c1" id="${id1}">
        <h2>${propositionDirect1}</h2>
    </div><div class="choix choix${choixContainerNumber} c2" id="${id2}">
    <h2>${propositionDirect2}</h2>
    </div></div>`
    var choicesclass= '.choix' + choixContainerNumber;
    var choicesX = document.querySelectorAll(choicesclass);
    if ( rd1see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd1;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd1;
        let depression1 = dataTheme[langAttr].depression.questions.pd1;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd1;
        let pain1 = dataTheme[langAttr].pain.questions.pd1;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd2see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd2;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd2;
        let depression1 = dataTheme[langAttr].depression.questions.pd2;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd2;
        let pain1 = dataTheme[langAttr].pain.questions.pd2;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd3see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd3;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd3;
        let depression1 = dataTheme[langAttr].depression.questions.pd3;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd3;
        let pain1 = dataTheme[langAttr].pain.questions.pd3;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd4see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd4;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd4;
        let depression1 = dataTheme[langAttr].depression.questions.pd4;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd4;
        let pain1 = dataTheme[langAttr].pain.questions.pd4;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd5see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd5;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd5;
        let depression1 = dataTheme[langAttr].depression.questions.pd5;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd5;
        let pain1 = dataTheme[langAttr].pain.questions.pd5;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd6see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd6;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd6;
        let depression1 = dataTheme[langAttr].depression.questions.pd6;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd6;
        let pain1 = dataTheme[langAttr].pain.questions.pd6;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd7see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd7;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd7;
        let depression1 = dataTheme[langAttr].depression.questions.pd7;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd7;
        let pain1 = dataTheme[langAttr].pain.questions.pd7;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd8see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd8;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd8;
        let depression1 = dataTheme[langAttr].depression.questions.pd8;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd8;
        let pain1 = dataTheme[langAttr].pain.questions.pd8;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    lookChoice();
    //onclick
     

        
      
    },500)
  }

  function proposeChoice3(propositionDirect1, propositionDirect2, propositionDirect3) {
    setTimeout(function() {
      choixContainerNumber++;
    chatBotC.innerHTML += `<div class="choix-questions choix-questions${choixContainerNumber}">
    <div class="choix choix${choixContainerNumber} c1">
        <h2>${propositionDirect1}</h2>
    </div><div class="choix choix${choixContainerNumber} c2">
    <h2>${propositionDirect2}</h2>
    </div><div class="choix choix${choixContainerNumber} c3">
    <h2>${propositionDirect3}</h2>
    </div></div>`
    var choicesclass= '.choix' + choixContainerNumber;
    var choicesX = document.querySelectorAll(choicesclass);
    if ( rd1see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd1;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd1;
        let depression1 = dataTheme[langAttr].depression.questions.pd1;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd1;
        let pain1 = dataTheme[langAttr].pain.questions.pd1;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd2see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd2;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd2;
        let depression1 = dataTheme[langAttr].depression.questions.pd2;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd2;
        let pain1 = dataTheme[langAttr].pain.questions.pd2;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd3see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd3;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd3;
        let depression1 = dataTheme[langAttr].depression.questions.pd3;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd3;
        let pain1 = dataTheme[langAttr].pain.questions.pd3;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd4see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd4;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd4;
        let depression1 = dataTheme[langAttr].depression.questions.pd4;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd4;
        let pain1 = dataTheme[langAttr].pain.questions.pd4;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd5see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd5;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd5;
        let depression1 = dataTheme[langAttr].depression.questions.pd5;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd5;
        let pain1 = dataTheme[langAttr].pain.questions.pd5;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd6see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd6;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd6;
        let depression1 = dataTheme[langAttr].depression.questions.pd6;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd6;
        let pain1 = dataTheme[langAttr].pain.questions.pd6;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd7see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd7;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd7;
        let depression1 = dataTheme[langAttr].depression.questions.pd7;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd7;
        let pain1 = dataTheme[langAttr].pain.questions.pd7;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd8see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd8;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd8;
        let depression1 = dataTheme[langAttr].depression.questions.pd8;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd8;
        let pain1 = dataTheme[langAttr].pain.questions.pd8;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    lookChoice();
    },500)

  }
  function proposeChoice4(propositionDirect1, propositionDirect2, propositionDirect3, propositionDirect4) {
    setTimeout(function() {
      choixContainerNumber++;
    chatBotC.innerHTML += `<div class="choix-questions choix-questions${choixContainerNumber}">
    <div class="choix choix${choixContainerNumber} c1">
        <h2>${propositionDirect1}</h2>
    </div><div class="choix choix${choixContainerNumber} c2">
    <h2>${propositionDirect2}</h2>
    </div><div class="choix choix${choixContainerNumber} c3">
    <h2>${propositionDirect3}</h2>
    </div><div class="choix choix${choixContainerNumber} c4">
    <h2>${propositionDirect4}</h2>
    </div></div>`
    var choicesclass= '.choix' + choixContainerNumber;
    var choicesX = document.querySelectorAll(choicesclass);
    if ( rd1see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd1;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd1;
        let depression1 = dataTheme[langAttr].depression.questions.pd1;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd1;
        let pain1 = dataTheme[langAttr].pain.questions.pd1;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd2see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd2;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd2;
        let depression1 = dataTheme[langAttr].depression.questions.pd2;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd2;
        let pain1 = dataTheme[langAttr].pain.questions.pd2;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd3see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd3;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd3;
        let depression1 = dataTheme[langAttr].depression.questions.pd3;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd3;
        let pain1 = dataTheme[langAttr].pain.questions.pd3;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd4see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd4;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd4;
        let depression1 = dataTheme[langAttr].depression.questions.pd4;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd4;
        let pain1 = dataTheme[langAttr].pain.questions.pd4;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd5see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd5;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd5;
        let depression1 = dataTheme[langAttr].depression.questions.pd5;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd5;
        let pain1 = dataTheme[langAttr].pain.questions.pd5;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd6see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd6;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd6;
        let depression1 = dataTheme[langAttr].depression.questions.pd6;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd6;
        let pain1 = dataTheme[langAttr].pain.questions.pd6;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd7see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd7;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd7;
        let depression1 = dataTheme[langAttr].depression.questions.pd7;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd7;
        let pain1 = dataTheme[langAttr].pain.questions.pd7;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd8see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd8;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd8;
        let depression1 = dataTheme[langAttr].depression.questions.pd8;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd8;
        let pain1 = dataTheme[langAttr].pain.questions.pd8;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    lookChoice();
  },500)
  }
  function proposeChoice5(propositionDirect1, propositionDirect2, propositionDirect3, propositionDirect4, propositionDirect5) {
    setTimeout(function() {
      choixContainerNumber++;
    chatBotC.innerHTML += `<div class="choix-questions choix-questions${choixContainerNumber}">
    <div class="choix choix${choixContainerNumber} c1">
        <h2>${propositionDirect1}</h2>
    </div><div class="choix choix${choixContainerNumber} c2">
    <h2>${propositionDirect2}</h2>
    </div><div class="choix choix${choixContainerNumber} c3">
    <h2>${propositionDirect3}</h2>
    </div><div class="choix choix${choixContainerNumber} c4">
    <h2>${propositionDirect4}</h2>
    </div><div class="choix choix${choixContainerNumber} c5">
    <h2>${propositionDirect5}</h2>
    </div></div>`
    
    var choicesclass= '.choix' + choixContainerNumber;
    var choicesX = document.querySelectorAll(choicesclass);
    if ( rd1see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd1;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd1;
        let depression1 = dataTheme[langAttr].depression.questions.pd1;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd1;
        let pain1 = dataTheme[langAttr].pain.questions.pd1;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd2see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd2;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd2;
        let depression1 = dataTheme[langAttr].depression.questions.pd2;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd2;
        let pain1 = dataTheme[langAttr].pain.questions.pd2;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd3see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd3;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd3;
        let depression1 = dataTheme[langAttr].depression.questions.pd3;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd3;
        let pain1 = dataTheme[langAttr].pain.questions.pd3;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd4see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd4;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd4;
        let depression1 = dataTheme[langAttr].depression.questions.pd4;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd4;
        let pain1 = dataTheme[langAttr].pain.questions.pd4;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd5see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd5;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd5;
        let depression1 = dataTheme[langAttr].depression.questions.pd5;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd5;
        let pain1 = dataTheme[langAttr].pain.questions.pd5;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd6see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd6;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd6;
        let depression1 = dataTheme[langAttr].depression.questions.pd6;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd6;
        let pain1 = dataTheme[langAttr].pain.questions.pd6;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd7see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd7;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd7;
        let depression1 = dataTheme[langAttr].depression.questions.pd7;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd7;
        let pain1 = dataTheme[langAttr].pain.questions.pd7;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }
    if ( rd8see ) {
      for (let i = 0; i < choicesX.length; i++) {
        let buttonText = choicesX[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd8;
        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd8;
        let depression1 = dataTheme[langAttr].depression.questions.pd8;
        let sleep1 = dataTheme[langAttr].sleep.questions.pd8;
        let pain1 = dataTheme[langAttr].pain.questions.pd8;
        if ( buttonText == anxiety1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == fatigue1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == depression1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == sleep1) {
          choicesX[i].style.display ="none";
        } else if ( buttonText == pain1) {
          choicesX[i].style.display ="none";
        } else {

        }
      }
    }

    
    

    lookChoice();
    
    },500);
  }

  function proposeChoice6(p1,p2,p3,p4,p5,p6) {
    setTimeout(function() {
      choixContainerNumber++;
    chatBotC.innerHTML += `<div class="choix-questions choix-questions${choixContainerNumber}">
    <div class="choix choix${choixContainerNumber} c1">
        <h2>${p1}</h2>
    </div><div class="choix choix${choixContainerNumber} c2">
    <h2>${p2}</h2>
    </div><div class="choix choix${choixContainerNumber} c3">
    <h2>${p3}</h2>
    </div><div class="choix choix${choixContainerNumber} c4">
    <h2>${p4}</h2>
    </div><div class="choix choix${choixContainerNumber} c5">
    <h2>${p5}</h2>
    </div><div class="choix choix${choixContainerNumber} c5">
    <h2>${p6}</h2>
    </div></div>`
    
    lookChoice();
    
    },500)
  }
  function proposeChoice8(p1,p2,p3,p4,p5,p6,p7,p8) {
    setTimeout(function() {
      choixContainerNumber++;
    chatBotC.innerHTML += `<div class="choix-questions choix-questions${choixContainerNumber}">
    <div class="choix choix${choixContainerNumber} c1">
        <h2>${p1}</h2>
    </div><div class="choix choix${choixContainerNumber} c2">
    <h2>${p2}</h2>
    </div><div class="choix choix${choixContainerNumber} c3">
    <h2>${p3}</h2>
    </div><div class="choix choix${choixContainerNumber} c4">
    <h2>${p4}</h2>
    </div><div class="choix choix${choixContainerNumber} c5">
    <h2>${p5}</h2>
    </div><div class="choix choix${choixContainerNumber} c5">
    <h2>${p6}</h2>
    </div><div class="choix choix${choixContainerNumber} c5">
    <h2>${p7}</h2>
    </div><div class="choix choix${choixContainerNumber} c5">
    <h2>${p8}</h2>
    </div></div>`
    
    lookChoice();
    
    },500)
  }

  function lookChoice() {
   
    console.log(rd1see,rd2see,rd3see,rd4see,rd5see,rd6see,rd7see,rd8see + 'entered look choice; voici les valeurs de mes rdsee')
      console.log("Entre dans la fonction lookchoice");
      //recupère les boutons des options récents :
      var choicesclass= '.choix' + choixContainerNumber;
      var choices = document.querySelectorAll(choicesclass);

     for (let i = 0; i < choices.length; i++){ //pour tout les boutons sur le click, je dois : 
       choices[i].addEventListener('click',() => {
         //recuperer l'inner text et le comparer aux différentes options: pd1, pd2, pd3... envoyer fonction anxietypd1(), anxietypd2()...
        let texteBouton = choices[i].innerText;
        let anxiety1 = dataTheme[langAttr].anxiety.questions.pd1;
        let anxiety2 = dataTheme[langAttr].anxiety.questions.pd2;
        let anxiety3 = dataTheme[langAttr].anxiety.questions.pd3;
        let anxiety4 = dataTheme[langAttr].anxiety.questions.pd4;
        let anxiety5 = dataTheme[langAttr].anxiety.questions.pd5;
        let anxiety6 = dataTheme[langAttr].anxiety.questions.pd6;
        let anxiety10 =dataTheme[langAttr].anxiety.questions.pd10;

        let fatigue1 = dataTheme[langAttr].fatigue.questions.pd1;
        let fatigue2 = dataTheme[langAttr].fatigue.questions.pd2;
        let fatigue3 = dataTheme[langAttr].fatigue.questions.pd3;
        let fatigue4 = dataTheme[langAttr].fatigue.questions.pd4;
        let fatigue5 = dataTheme[langAttr].fatigue.questions.pd5;
        let fatigue6 = dataTheme[langAttr].fatigue.questions.pd6;
        let fatigue7 = dataTheme[langAttr].fatigue.questions.pd7;
        let fatigue8 = dataTheme[langAttr].fatigue.questions.pd8;
        let fatigue10 =dataTheme[langAttr].fatigue.questions.pd10; 

        let depression1 = dataTheme[langAttr].depression.questions.pd1;
        let depression2 = dataTheme[langAttr].depression.questions.pd2;
        let depression3 = dataTheme[langAttr].depression.questions.pd3;
        let depression10 =dataTheme[langAttr].depression.questions.pd10; 

        let sleep1 = dataTheme[langAttr].sleep.questions.pd1;
        let sleep2 = dataTheme[langAttr].sleep.questions.pd2;
        let sleep3 = dataTheme[langAttr].sleep.questions.pd3;
        let sleep4 = dataTheme[langAttr].sleep.questions.pd4;
        let sleep5 = dataTheme[langAttr].sleep.questions.pd5;
        let sleep6 = dataTheme[langAttr].sleep.questions.pd6;
        let sleep10 =dataTheme[langAttr].sleep.questions.pd10;

        let pain1 = dataTheme[langAttr].pain.questions.pd1;
        let pain2 = dataTheme[langAttr].pain.questions.pd2;
        let pain3 = dataTheme[langAttr].pain.questions.pd3;
        let pain4 = dataTheme[langAttr].pain.questions.pd4;
        let pain5 = dataTheme[langAttr].pain.questions.pd5;
        let pain6 = dataTheme[langAttr].pain.questions.pd6;
        let pain10 =dataTheme[langAttr].pain.questions.pd10; 

        let pdt = dataTheme[langAttr].pdt;
        
        chosenButtonDisplay(texteBouton);

        if( texteBouton == pdt) {
            newTheme();
        } else if ( texteBouton == anxiety1) {
            anxietyQ1()
        } else if ( texteBouton == anxiety2) {
          anxietyQ2()
        } else if ( texteBouton == anxiety3) {
          anxietyQ3()
        } else if ( texteBouton == anxiety4) {
          anxietyQ4()
        } else if ( texteBouton == anxiety5) {
            anxietyQ5()
        } else if ( texteBouton == anxiety6) {
          anxietyQ6()
        } else if ( texteBouton == anxiety10) {
          anxietyQ10()
        }else if ( texteBouton == fatigue1) {
          fatigueQ1()
        } else if ( texteBouton == fatigue2) {
          fatigueQ2()
        } else if ( texteBouton == fatigue3) {
          fatigueQ3()
        } else if ( texteBouton == fatigue4) {
          fatigueQ4()
        } else if ( texteBouton == fatigue5) {
            fatigueQ5()
        } else if ( texteBouton == fatigue6) {
          fatigueQ6()
        } else if ( texteBouton == fatigue7) {
          fatigueQ7()
        } else if ( texteBouton == fatigue8) {
          fatigueQ8()
        } else if ( texteBouton == fatigue10) {
          fatigueQ10()
        }else if ( texteBouton == depression1) {
          depressionQ1()
        } else if ( texteBouton == depression2) {
          depressionQ2()
        } else if ( texteBouton == depression3) {
          depressionQ3()
        }else if ( texteBouton == depression10) {
          depressionQ10()
        } else if ( texteBouton == sleep1) {
          sleepQ1()
        } else if ( texteBouton == sleep2) {
          sleepQ2()
        } else if ( texteBouton == sleep3) {
          sleepQ3()
        } else if ( texteBouton == sleep4) {
          sleepQ4()
        } else if ( texteBouton == sleep5) {
          sleepQ5()
        } else if ( texteBouton == sleep6) {
          sleepQ6()
        } else if ( texteBouton == sleep10) {
          sleepQ10()
        }else if ( texteBouton == pain1) {
          painQ1()
        } else if ( texteBouton == pain2) {
          painQ2()
        } else if ( texteBouton == pain3) {
          painQ3()
        } else if ( texteBouton == pain4) {
          painQ4()
        } else if ( texteBouton == pain5) {
          painQ5()
        } else if ( texteBouton == pain6) {
          painQ6()
        } else if ( texteBouton == pain10) {
          painQ10()
        }else {
          console.log('ne matche pas ?!')
          newtheme();
        }
       })
     }
      


      
      
      
  }
  
//Function showResponses //

  function showResponses1(rd1,t1) {
    
    cleanResponses()
    setTimeout(function(){
      indexmessage ++
      //dots
      chatBotC.innerHTML += `<div class="lea-message-cont">
      <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
       </div>
      <div class="lea-icon"></div></div>`
      setTimeout(function(){
        $('.dots').hide();
        $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
        <span class="span-lea ">Léa</span>
        <p class="welcome-message">${rd1}</p>
      </div>`
      setTimeout(function(){sendLastMessage();},300) //1sec après le message, on envoie function last message
      },t1)


       
     
      
    },300)
  }
  function showResponses2(rd1,t1,rd2,t2) {
    cleanResponses()
    setTimeout(function(){
      indexmessage ++;
      console.log(indexmessage +" index message showresponse2 pour le 1er message")

      //1er dots
      chatBotC.innerHTML += `<div class="lea-message-cont">
      <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
       </div>
      <div class="lea-icon"></div></div>`
      //Après T1, j'enlève les dots, je display message et après 200ms, j'enlève icon au message
      setTimeout(function(){
        $('.dots').hide();
        $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
        <span class="span-lea ">Léa</span>
        <p class="welcome-message">${rd1}</p>
        </div>`
        
        setTimeout(function() {
          let cleanIcon = document.querySelectorAll('.lea-icon');
          cleanIcon.forEach(icon => {
            icon.style.opacity ="0";
          })

          setTimeout(function(){
            indexmessage++;
            //2e dots
            chatBotC.innerHTML += `<div class="lea-message-cont">
          <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
          </div>
          <div class="lea-icon"></div></div>`
          //après le temps t2, j'enlève les dots et j'envoie le 2e message
           setTimeout(function() {
            $('.dots').hide();
            $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
            <p class="welcome-message">${rd2}</p>
           </div>`
            setTimeout(function(){sendLastMessage();},300)
           },t2)
          },300)
      },200)
      },t1)

    },300)
  }
  function showResponses3(rd1,t1,rd2,t2,rd3,t3) {
    cleanResponses()
    setTimeout(function(){
      indexmessage ++;
      
      //1er dots
      chatBotC.innerHTML += `<div class="lea-message-cont">
      <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
       </div>
      <div class="lea-icon"></div></div>`
      //Après T1, j'enlève les dots, je display message et après 200ms, j'enlève icon au message
      setTimeout(function(){
        $('.dots').hide();
        $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
        <span class="span-lea ">Léa</span>
        <p class="welcome-message">${rd1}</p>
        </div>`
        
        setTimeout(function() {
          let cleanIcon = document.querySelectorAll('.lea-icon');
          cleanIcon.forEach(icon => {
            icon.style.opacity ="0";
          })

          setTimeout(function(){
            indexmessage++;
            //2e dots
            chatBotC.innerHTML += `<div class="lea-message-cont">
          <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
          </div>
          <div class="lea-icon"></div></div>`
          //après le temps t2, j'enlève les dots et j'envoie le 2e message et après 200ms ,j'enlève icon au message
           setTimeout(function() {
            $('.dots').hide();
            $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
            <p class="welcome-message">${rd2}</p>
           </div>`
           setTimeout(function() {
            let cleanIcon = document.querySelectorAll('.lea-icon');
            cleanIcon.forEach(icon => {
              icon.style.opacity ="0";
            })
            //après 300ms,j'envoie le 3e message
            setTimeout(function(){
              indexmessage++;
              chatBotC.innerHTML += `<div class="lea-message-cont">
              <div class="dots">
              <div class="dot dot1"></div>
              <div class="dot dot2"></div>
              <div class="dot dot3"></div>
              </div>
              <div class="lea-icon"></div></div>`
              //après le temps t3, j'enlèeve les dots et j'envoie le 3e message et après 200ms, j'enlève icon puis après 300msj'envoie function last message
              setTimeout(function() {
                $('.dots').hide();
                $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
                <p class="welcome-message">${rd3}</p>
               </div>`
               setTimeout(function() {
                let cleanIcon = document.querySelectorAll('.lea-icon');
                cleanIcon.forEach(icon => {
                  icon.style.opacity ="0";
                })
                setTimeout(function() {
                  sendLastMessage();
                },300)
               },200)
              },t3)
              

            },300)
           },200)
           },t2)
          },300)
      },200)
      },t1)

    },300)
  }
  function showResponses4(rd1,t1,rd2,t2,rd3,t3,rd4,t4) {
    cleanResponses()
    setTimeout(function(){
      indexmessage ++;
      
      //1er dots
      chatBotC.innerHTML += `<div class="lea-message-cont">
      <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
       </div>
      <div class="lea-icon"></div></div>`
      //Après T1, j'enlève les dots, je display message et après 200ms, j'enlève icon au message
      setTimeout(function(){
        $('.dots').hide();
        $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
        <span class="span-lea ">Léa</span>
        <p class="welcome-message">${rd1}</p>
        </div>`
        
        setTimeout(function() {
          let cleanIcon = document.querySelectorAll('.lea-icon');
          cleanIcon.forEach(icon => {
            icon.style.opacity ="0";
          })

          setTimeout(function(){
            indexmessage++;
            //2e dots
            chatBotC.innerHTML += `<div class="lea-message-cont">
          <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
          </div>
          <div class="lea-icon"></div></div>`
          //après le temps t2, j'enlève les dots et j'envoie le 2e message et après 200ms ,j'enlève icon au message
           setTimeout(function() {
            $('.dots').hide();
            $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">

            <p class="welcome-message">${rd2}</p>
           </div>`
           setTimeout(function() {
            let cleanIcon = document.querySelectorAll('.lea-icon');
            cleanIcon.forEach(icon => {
              icon.style.opacity ="0";
            })
            //après 300ms,j'envoie le 3e message
            setTimeout(function(){
              indexmessage++;
              chatBotC.innerHTML += `<div class="lea-message-cont">
              <div class="dots">
              <div class="dot dot1"></div>
              <div class="dot dot2"></div>
              <div class="dot dot3"></div>
              </div>
              <div class="lea-icon"></div></div>`
              //après le temps t3, j'enlèeve les dots et j'envoie le 3e message et après 200ms, j'enlève icon.
              setTimeout(function() {
                $('.dots').hide();
                $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">

                <p class="welcome-message">${rd3}</p>
               </div>`
               setTimeout(function() {
                let cleanIcon = document.querySelectorAll('.lea-icon');
                cleanIcon.forEach(icon => {
                  icon.style.opacity ="0";
                })
                //après 300ms, j'envoie 4e message
                setTimeout(function() {
                  indexmessage++;
                  chatBotC.innerHTML += `<div class="lea-message-cont">
                  <div class="dots">
                  <div class="dot dot1"></div>
                  <div class="dot dot2"></div>
                  <div class="dot dot3"></div>
                  </div>
                  <div class="lea-icon"></div></div>`
                  //après le temps t4, j'enlève les dots, j'affiche le 4e message, après 200ms j'enlève icon et après 300ms, j'envoie lastmessage
                  setTimeout(function(){
                    $('.dots').hide();
                    $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">

                    <p class="welcome-message">${rd4}</p>
                   </div>`
                   setTimeout(function(){
                    let cleanIcon = document.querySelectorAll('.lea-icon');
                    cleanIcon.forEach(icon => {
                      icon.style.opacity ="0";
                    })
                    setTimeout(function(){sendLastMessage()},300)
                   },200)
                  },t4)
                },300)
               },200)
              },t3)
              

            },300)
           },200)
           },t2)
          },300)
      },200)
      },t1)

    },300)
  }
  function showResponses5(rd1,t1,rd2,t2,rd3,t3,rd4,t4,rd5,t5) {
    cleanResponses()
    setTimeout(function(){
      indexmessage ++;
      
      //1er dots
      chatBotC.innerHTML += `<div class="lea-message-cont">
      <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
       </div>
      <div class="lea-icon"></div></div>`
      //Après T1, j'enlève les dots, je display message et après 200ms, j'enlève icon au message
      setTimeout(function(){
        $('.dots').hide();
        $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
        <span class="span-lea ">Léa</span>
        <p class="welcome-message">${rd1}</p>
        </div>`
        
        setTimeout(function() {
          let cleanIcon = document.querySelectorAll('.lea-icon');
          cleanIcon.forEach(icon => {
            icon.style.opacity ="0";
          })

          setTimeout(function(){
            indexmessage++;
            //2e dots
            chatBotC.innerHTML += `<div class="lea-message-cont">
          <div class="dots">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
          </div>
          <div class="lea-icon"></div></div>`
          //après le temps t2, j'enlève les dots et j'envoie le 2e message et après 200ms ,j'enlève icon au message
           setTimeout(function() {
            $('.dots').hide();
            $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">

            <p class="welcome-message">${rd2}</p>
           </div>`
           setTimeout(function() {
            let cleanIcon = document.querySelectorAll('.lea-icon');
            cleanIcon.forEach(icon => {
              icon.style.opacity ="0";
            })
            //après 300ms,j'envoie le 3e message
            setTimeout(function(){
              indexmessage++;
              chatBotC.innerHTML += `<div class="lea-message-cont">
              <div class="dots">
              <div class="dot dot1"></div>
              <div class="dot dot2"></div>
              <div class="dot dot3"></div>
              </div>
              <div class="lea-icon"></div></div>`
              //après le temps t3, j'enlèeve les dots et j'envoie le 3e message et après 200ms, j'enlève icon.
              setTimeout(function() {
                $('.dots').hide();
                $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">

                <p class="welcome-message">${rd3}</p>
               </div>`
               setTimeout(function() {
                let cleanIcon = document.querySelectorAll('.lea-icon');
                cleanIcon.forEach(icon => {
                  icon.style.opacity ="0";
                })
                //après 300ms, j'envoie 4e message
                setTimeout(function() {
                  indexmessage++;
                  chatBotC.innerHTML += `<div class="lea-message-cont">
                  <div class="dots">
                  <div class="dot dot1"></div>
                  <div class="dot dot2"></div>
                  <div class="dot dot3"></div>
                  </div>
                  <div class="lea-icon"></div></div>`
                  //après le temps t4, j'enlève les dots, j'affiche le 4e message, après 200ms j'enlève icon et après 300ms, j'envoie 5e message
                  setTimeout(function(){
                    $('.dots').hide();
                    $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">

                    <p class="welcome-message">${rd4}</p>
                   </div>`
                   setTimeout(function(){
                    let cleanIcon = document.querySelectorAll('.lea-icon');
                    cleanIcon.forEach(icon => {
                      icon.style.opacity ="0";
                    })
                    setTimeout(function(){
                      indexmessage++;
                      chatBotC.innerHTML += `<div class="lea-message-cont">
                      <div class="dots">
                      <div class="dot dot1"></div>
                      <div class="dot dot2"></div>
                      <div class="dot dot3"></div>
                      </div>
                      <div class="lea-icon"></div></div>`
                      //après temps t5, j'enlève dots, j'affiche le 5e message, et après 200ms j'enleve icon et après 300ms,j'envoie last message
                      setTimeout(function(){
                        $('.dots').hide();
                        $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">

                        <p class="welcome-message">${rd5}</p>
                        </div>`
                        setTimeout(function(){
                          let cleanIcon = document.querySelectorAll('.lea-icon');
                          cleanIcon.forEach(icon => {
                          icon.style.opacity ="0";
                          })
                          setTimeout(function(){sendLastMessage()},300)
                        },200)
                      },t5)

                    },300)
                   },200)
                  },t4)
                },300)
               },200)
              },t3)
              

            },300)
           },200)
           },t2)
          },300)
      },200)
      },t1)

    },300)
  }



  function sendLastMessage() {
        let cleanIcon = document.querySelectorAll('.lea-icon');
        cleanIcon.forEach(icon => {
        icon.style.opacity ="0";
        })
        indexmessage ++

        //dots
        chatBotC.innerHTML += `<div class="lea-message-cont">
        <div class="dots">
            <div class="dot dot1"></div>
            <div class="dot dot2"></div>
            <div class="dot dot3"></div>
         </div>
        <div class="lea-icon"></div></div>`
        let moreMessage = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        setTimeout(function(){
          $('.dots').hide();
          $('.lea-message-cont')[indexmessage].innerHTML += `<div class="lea-message">
          <p class="welcome-message">${dataTheme[langAttr].more[moreMessage]}</p>
        </div>`
        },1000)

  }


  //function cleanResponses
  function cleanResponses() {
      let cleanSpan = document.querySelector('.span-lea');
      let cleanIcon = document.querySelectorAll('.lea-icon');
      cleanSpan.style.opacity = "0";
      cleanIcon.forEach(icon => {
        icon.style.opacity ="0";
      })
  }


  //créer toutes les fonctions sur les onclick button pd1, pd2... sur ces fonctions là, créer les para rdx et tx, envoyer la function showresponses et créer les para propocechoix et envoyé la fonction
  //c'est sur la function propocehoice qu'on va regarder avec l'id unique si vaut true -> display none;
  function anxietyQ1() {
    var rd1 = dataTheme[langAttr].anxiety.answers.rd1;
    var t1 = dataTheme[langAttr].anxiety.answers.t1;
    rd1see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].anxiety.questions.pd2;
    var pd2= dataTheme[langAttr].anxiety.questions.pd3;
    var pd3= dataTheme[langAttr].anxiety.questions.pd4;
    var pd4= dataTheme[langAttr].anxiety.questions.pd5;

    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd3,pd4)
     },4500)
    
  }
  function anxietyQ2() {
    var rd1 = dataTheme[langAttr].anxiety.answers.rd2;
    var t1 = dataTheme[langAttr].anxiety.answers.t2;
    rd2see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].anxiety.questions.pd1;
    var pd2= dataTheme[langAttr].anxiety.questions.pd3;
    var pd3= dataTheme[langAttr].anxiety.questions.pd4;
    var pd4= dataTheme[langAttr].anxiety.questions.pd5;

    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd3,pd4)
     },4000)
  }
  function anxietyQ3() {
    var rd1 = dataTheme[langAttr].anxiety.answers.rd3;
    var t1 = dataTheme[langAttr].anxiety.answers.t3;
    rd3see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].anxiety.questions.pd4;
    var pd2= dataTheme[langAttr].anxiety.questions.pd5;
    var pd3= dataTheme[langAttr].anxiety.questions.pd6;
    var pd4 =dataTheme[langAttr].anxiety.questions.pd10;
    

    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd3,pd4)
     },3000)
  }
  function anxietyQ4() {
    var rd1 = dataTheme[langAttr].anxiety.answers.rd4;
    var t1 = dataTheme[langAttr].anxiety.answers.t4;
    rd4see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].anxiety.questions.pd2;
    var pd2= dataTheme[langAttr].anxiety.questions.pd5;
    var pd3= dataTheme[langAttr].anxiety.questions.pd6;
    var pd4= dataTheme[langAttr].pdt;
    var pd5 =dataTheme[langAttr].anxiety.questions.pd10;

    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd5,pd4)
     },3500)
  }
  function anxietyQ5() {
    var rd1 = dataTheme[langAttr].anxiety.answers.rd5;
    var t1 = dataTheme[langAttr].anxiety.answers.t5;
    rd5see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].anxiety.questions.pd1;
    var pd2= dataTheme[langAttr].anxiety.questions.pd2;
    var pd3= dataTheme[langAttr].anxiety.questions.pd6;
    var pd4= dataTheme[langAttr].pdt;
    var pd5 =dataTheme[langAttr].anxiety.questions.pd10;

    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd5,pd4)
     },3500)
  }
  function anxietyQ6() {
    var rd1 = dataTheme[langAttr].anxiety.answers.rd6;
    var t1 = dataTheme[langAttr].anxiety.answers.t6;
    rd6see= true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].anxiety.questions.pd1;
    var pd2= dataTheme[langAttr].anxiety.questions.pd3;
    var pd3= dataTheme[langAttr].anxiety.questions.pd6;
    var pd4= dataTheme[langAttr].pdt;
    var pd5 =dataTheme[langAttr].anxiety.questions.pd10;

    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd5,pd4)
     },4500)
  }
  function anxietyQ10() {
    enterTheme();
    
    var pd1= dataTheme[langAttr].anxiety.questions.pd1;
    var pd2= dataTheme[langAttr].anxiety.questions.pd2;
    var pd3= dataTheme[langAttr].anxiety.questions.pd3;
    var pd4= dataTheme[langAttr].anxiety.questions.pd4;
    var pd5= dataTheme[langAttr].anxiety.questions.pd5;
    var pd6= dataTheme[langAttr].anxiety.questions.pd6;
    

    setTimeout(function(){
          proposeChoice6(pd1,pd2,pd3,pd4,pd5,pd6)
     },1000)
  }


  function painQ1() {
    var rd1 = dataTheme[langAttr].pain.answers.rd1;
    var t1 = dataTheme[langAttr].pain.answers.t1;
    rd1see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].pain.questions.pd2;
    var pd2= dataTheme[langAttr].pain.questions.pd3;
    var pd3= dataTheme[langAttr].pain.questions.pd4;
    var pd4= dataTheme[langAttr].pain.questions.pd5;
    var pd5= dataTheme[langAttr].pain.questions.pd6;
    

    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd4,pd5)
     },5500)
    
  }
  function painQ2() {
    var rd1 = dataTheme[langAttr].pain.answers.rd2;
    var t1 = dataTheme[langAttr].pain.answers.t2;
    rd2see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].pain.questions.pd1;
    var pd2= dataTheme[langAttr].pain.questions.pd3;
    var pd3= dataTheme[langAttr].pain.questions.pd4;
    var pd4= dataTheme[langAttr].pain.questions.pd5;
    var pd5= dataTheme[langAttr].pain.questions.pd6;
    

    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd4,pd5)
     },5000)
  }
  function painQ3() {
    var rd1 = dataTheme[langAttr].pain.answers.rd3;
    var t1 = dataTheme[langAttr].pain.answers.t3;
    rd3see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].pain.questions.pd4;
    var pd2= dataTheme[langAttr].pain.questions.pd5;
    var pd3= dataTheme[langAttr].pain.questions.pd6;
    var pd4 =dataTheme[langAttr].pain.questions.pd10;
     
    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd3,pd4)
     },5500)
  }
  function painQ4() {
    var rd1 = dataTheme[langAttr].pain.answers.rd4;
    var t1 = dataTheme[langAttr].pain.answers.t4;
    rd4see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].pain.questions.pd2;
    var pd2= dataTheme[langAttr].pain.questions.pd5;
    var pd3= dataTheme[langAttr].pain.questions.pd6;
    var pd5 =dataTheme[langAttr].pain.questions.pd10;
    var pd4= dataTheme[langAttr].pdt;

    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd5,pd4)
     },4500)
  }
  function painQ5() {
    var rd1 = dataTheme[langAttr].pain.answers.rd5;
    var t1 = dataTheme[langAttr].pain.answers.t5;
    rd5see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].pain.questions.pd3;
    var pd2= dataTheme[langAttr].pain.questions.pd4;
    var pd3= dataTheme[langAttr].pain.questions.pd6;
    var pd4= dataTheme[langAttr].pdt;
    var pd5 =dataTheme[langAttr].pain.questions.pd10;
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd5,pd4)
     },5500)
  }
  function painQ6() {
    var rd1 = dataTheme[langAttr].pain.answers.rd6;
    var t1 = dataTheme[langAttr].pain.answers.t6;
    rd6see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].pain.questions.pd5;
    var pd2= dataTheme[langAttr].pain.questions.pd4;
    var pd3= dataTheme[langAttr].pain.questions.pd3;
    var pd4= dataTheme[langAttr].pdt;
     
    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd3,pd4)
     },4500)
  }

  function painQ10() {
    enterTheme();
    
    var pd1= dataTheme[langAttr].pain.questions.pd1;
    var pd2= dataTheme[langAttr].pain.questions.pd2;
    var pd3= dataTheme[langAttr].pain.questions.pd3;
    var pd4= dataTheme[langAttr].pain.questions.pd4;
    var pd5= dataTheme[langAttr].pain.questions.pd5;
    var pd6= dataTheme[langAttr].pain.questions.pd6;
    

    setTimeout(function(){
          proposeChoice6(pd1,pd2,pd3,pd4,pd5,pd6)
     },1000)
  }


  function sleepQ1() {
    var rd1 = dataTheme[langAttr].sleep.answers.rd1;
    var t1 = dataTheme[langAttr].sleep.answers.t1;
    rd1see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].sleep.questions.pd2;
    var pd2= dataTheme[langAttr].sleep.questions.pd3;
    var pd3= dataTheme[langAttr].sleep.questions.pd5;
    var pd4= dataTheme[langAttr].sleep.questions.pd6;
     
    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd3,pd4)
     },3500)
    
  }
  function sleepQ2() {
    var rd1 = dataTheme[langAttr].sleep.answers.rd2;
    var t1 = dataTheme[langAttr].sleep.answers.t2;
    rd2see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].sleep.questions.pd1;
    var pd2= dataTheme[langAttr].sleep.questions.pd4;
    var pd3= dataTheme[langAttr].sleep.questions.pd5;
    var pd4= dataTheme[langAttr].sleep.questions.pd6;
     
    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd3,pd4)
     },4500)
  }
  function sleepQ3() {
    var rd1 = dataTheme[langAttr].sleep.answers.rd3;
    var t1 = dataTheme[langAttr].sleep.answers.t3;
    rd3see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].sleep.questions.pd4;
    var pd2= dataTheme[langAttr].sleep.questions.pd5;
    var pd3= dataTheme[langAttr].sleep.questions.pd6;
    var pd4 =dataTheme[langAttr].sleep.questions.pd10;
  
     
    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd4,pd3)
     },4500)
  }
  function sleepQ4() {
    var rd1 = dataTheme[langAttr].sleep.answers.rd4;
    var t1 = dataTheme[langAttr].sleep.answers.t4;
    rd4see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].sleep.questions.pd2;
    var pd2= dataTheme[langAttr].sleep.questions.pd5;
    var pd3= dataTheme[langAttr].sleep.questions.pd6;
    var pd4= dataTheme[langAttr].pdt;
    var pd5 =dataTheme[langAttr].sleep.questions.pd10;
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd5,pd4)
     },3500)
  }
  function sleepQ5() {
    var rd1 = dataTheme[langAttr].sleep.answers.rd5;
    var t1 = dataTheme[langAttr].sleep.answers.t5;
    rd5see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].sleep.questions.pd3;
    var pd2= dataTheme[langAttr].sleep.questions.pd4;
    var pd3= dataTheme[langAttr].sleep.questions.pd6;
    var pd4= dataTheme[langAttr].pdt;
    var pd5 =dataTheme[langAttr].sleep.questions.pd10;
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd5,pd4)
     },3500)
  }
  function sleepQ6() {
    var rd1 = dataTheme[langAttr].sleep.answers.rd6;
    var t1 = dataTheme[langAttr].sleep.answers.t6;
    rd6see= true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].sleep.questions.pd3;
    var pd2= dataTheme[langAttr].sleep.questions.pd4;
    var pd3= dataTheme[langAttr].sleep.questions.pd5;
    var pd4= dataTheme[langAttr].pdt;
    var pd5 =dataTheme[langAttr].sleep.questions.pd10;
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd5,pd4)
     },5500)
  }

  function sleepQ10() {
    enterTheme();
    
    var pd1= dataTheme[langAttr].sleep.questions.pd1;
    var pd2= dataTheme[langAttr].sleep.questions.pd2;
    var pd3= dataTheme[langAttr].sleep.questions.pd3;
    var pd4= dataTheme[langAttr].sleep.questions.pd4;
    var pd5= dataTheme[langAttr].sleep.questions.pd5;
    var pd6= dataTheme[langAttr].sleep.questions.pd6;
    

    setTimeout(function(){
          proposeChoice6(pd1,pd2,pd3,pd4,pd5,pd6)
     },1000)
  }

  function depressionQ1() {
    var rd1 = dataTheme[langAttr].depression.answers.rd1;
    var t1 = dataTheme[langAttr].depression.answers.t1;
    rd1see= true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].depression.questions.pd2;
    var pd2= dataTheme[langAttr].depression.questions.pd3;
    var pd3= dataTheme[langAttr].pdt;
    var pd4 =dataTheme[langAttr].depression.questions.pd10;
     
    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd4,pd3)
     },4500)
  }
  function depressionQ2() {
    var rd1 = dataTheme[langAttr].depression.answers.rd2;
    var t1 = dataTheme[langAttr].depression.answers.t2;
    rd2see= true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].depression.questions.pd1;
    var pd2= dataTheme[langAttr].depression.questions.pd3;
    var pd3= dataTheme[langAttr].pdt;
    var pd4 =dataTheme[langAttr].depression.questions.pd10;
     
    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd4,pd3)
     },3500)
  }
  function depressionQ3() {
    var rd1 = dataTheme[langAttr].depression.answers.rd3;
    var t1 = dataTheme[langAttr].depression.answers.t3;
    rd3see= true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].depression.questions.pd1;
    var pd2= dataTheme[langAttr].depression.questions.pd2;
    var pd3= dataTheme[langAttr].pdt;
    var pd4 =dataTheme[langAttr].depression.questions.pd10;
     
    setTimeout(function(){
          proposeChoice4(pd1,pd2,pd4,pd3)
     },4500)
  }
  function depressionQ10() {
    enterTheme();
    
    var pd1= dataTheme[langAttr].depression.questions.pd1;
    var pd2= dataTheme[langAttr].depression.questions.pd2;
    var pd3= dataTheme[langAttr].depression.questions.pd3;
    
    

    setTimeout(function(){
          proposeChoice3(pd1,pd2,pd3)
     },1000)
  }

  function fatigueQ1() {
    var rd1 = dataTheme[langAttr].fatigue.answers.rd1;
    var t1 = dataTheme[langAttr].fatigue.answers.t1;
    rd1see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].fatigue.questions.pd2;
    var pd2= dataTheme[langAttr].fatigue.questions.pd3;
    var pd3= dataTheme[langAttr].fatigue.questions.pd4;
    var pd4= dataTheme[langAttr].fatigue.questions.pd5;
    var pd5= dataTheme[langAttr].fatigue.questions.pd6;
    
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd4,pd5)
     },4500)
    
  }
  function fatigueQ2() {
    var rd1 = dataTheme[langAttr].fatigue.answers.rd2;
    var t1 = dataTheme[langAttr].fatigue.answers.t2;
    rd2see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].fatigue.questions.pd1;
    var pd2= dataTheme[langAttr].fatigue.questions.pd3;
    var pd3= dataTheme[langAttr].fatigue.questions.pd4;
    var pd5 =dataTheme[langAttr].fatigue.questions.pd10;
    var pd4= dataTheme[langAttr].pdt;
   
    
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd5,pd4)
     },3500)
  }
  function fatigueQ3() {
    var rd1 = dataTheme[langAttr].fatigue.answers.rd3;
    var t1 = dataTheme[langAttr].fatigue.answers.t3;
    rd3see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].fatigue.questions.pd1;
    var pd2= dataTheme[langAttr].fatigue.questions.pd2;
    var pd3= dataTheme[langAttr].fatigue.questions.pd4;
    var pd4= dataTheme[langAttr].fatigue.questions.pd5;
    var pd5= dataTheme[langAttr].fatigue.questions.pd6;
    
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd4,pd5)
     },3500)
  }
  function fatigueQ4() {
    var rd1 = dataTheme[langAttr].fatigue.answers.rd4;
    var t1 = dataTheme[langAttr].fatigue.answers.t4;
    rd4see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].fatigue.questions.pd1;
    var pd2= dataTheme[langAttr].fatigue.questions.pd5;
    var pd3= dataTheme[langAttr].fatigue.questions.pd6;
    var pd4= dataTheme[langAttr].fatigue.questions.pd7;
    var pd5= dataTheme[langAttr].fatigue.questions.pd8;
    
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd4,pd5)
     },6500)
  }
  function fatigueQ5() {
    var rd1 = dataTheme[langAttr].fatigue.answers.rd5;
    var t1 = dataTheme[langAttr].fatigue.answers.t5;
    rd5see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].fatigue.questions.pd1;
    var pd2= dataTheme[langAttr].fatigue.questions.pd6;
    var pd3= dataTheme[langAttr].fatigue.questions.pd7;
    var pd4= dataTheme[langAttr].fatigue.questions.pd8;
    var pd5= dataTheme[langAttr].pdt;
    
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd4,pd5)
     },5500)
  }
  function fatigueQ6() {
    var rd1 = dataTheme[langAttr].fatigue.answers.rd6;
    var t1 = dataTheme[langAttr].fatigue.answers.t6;
    rd6see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].fatigue.questions.pd2;
    var pd2= dataTheme[langAttr].fatigue.questions.pd5;
    var pd3= dataTheme[langAttr].fatigue.questions.pd7;
    var pd4= dataTheme[langAttr].fatigue.questions.pd8;
    var pd5= dataTheme[langAttr].pdt;
    
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd4,pd5)
     },4500)
  }
  function fatigueQ7() {
    var rd1 = dataTheme[langAttr].fatigue.answers.rd7;
    var t1 = dataTheme[langAttr].fatigue.answers.t7;
    rd7see = true;
    showResponses1(rd1,t1);
    var pd1= dataTheme[langAttr].fatigue.questions.pd4;
    var pd2= dataTheme[langAttr].fatigue.questions.pd5;
    var pd3= dataTheme[langAttr].fatigue.questions.pd6;
    var pd4= dataTheme[langAttr].fatigue.questions.pd8;
    var pd5= dataTheme[langAttr].pdt;
    
     
    setTimeout(function(){
          proposeChoice5(pd1,pd2,pd3,pd4,pd5)
     },4500)
  }
  function fatigueQ8() {
    var rd1 = dataTheme[langAttr].fatigue.answers.rd8;
    var t1 = dataTheme[langAttr].fatigue.answers.t8;
    rd8see = true;
    showResponses1(rd1,t1);
    var pd5 =dataTheme[langAttr].fatigue.questions.pd10;
    var pd2= dataTheme[langAttr].fatigue.questions.pd5;
    var pd3= dataTheme[langAttr].fatigue.questions.pd6;
    var pd4= dataTheme[langAttr].fatigue.questions.pd7;
    var pd5= dataTheme[langAttr].pdt;
    
     
    setTimeout(function(){
          proposeChoice5(pd5,pd2,pd3,pd4,pd5)
     },5500)
  }

  function fatigueQ10() {
    enterTheme();
    
    var pd1= dataTheme[langAttr].fatigue.questions.pd1;
    var pd2= dataTheme[langAttr].fatigue.questions.pd2;
    var pd3= dataTheme[langAttr].fatigue.questions.pd3;
    var pd4= dataTheme[langAttr].fatigue.questions.pd4;
    var pd5= dataTheme[langAttr].fatigue.questions.pd5;
    var pd6= dataTheme[langAttr].fatigue.questions.pd6;
    var pd7= dataTheme[langAttr].fatigue.questions.pd7;
    var pd8= dataTheme[langAttr].fatigue.questions.pd8;
    

    setTimeout(function(){
          proposeChoice8(pd1,pd2,pd3,pd4,pd5,pd6,pd7,pd8)
     },1000)
  }


  
 
});








