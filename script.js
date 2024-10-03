const questions=[
  {
    question:'RAM is a ... memory.',
    answer:[
      {text:'non-volatile',correct:false},
      {text:'volatile',correct:true},
      {text:'both',correct:false},
      {text:'both incorrect',correct:false},
    ]
  },
  {
    question:'Father of Computer',
    answer:[
      {text:'Albert Einstein',correct:false},
      {text:'Charles Babbage',correct:true},
      {text:'Openheimer',correct:false},
      {text:'Issac Newton',correct:false},
    ]
  },
  {
    question:'Who was  Sir Bradman ?',
    answer:[
      {text:'Musician',correct:false},
      {text:'Dancer',correct:false},
      {text:'Cricketer',correct:true},
      {text:'Footballer',correct:false},
    ]
  },
  {
    question:'What is the largest animal on the earth ?',
    answer:[
      {text:'Elephant',correct:false},
      {text:'Girrafe',correct:false},
      {text:'Shark',correct:false},
      {text:'Blue Whale',correct:true},
    ]
  },
]

function init(){
  printData();
  bindEvents();
}

function bindEvents(){
  document.querySelector('#next-btn').addEventListener('click',printData);
}

window.addEventListener('load',init);

function initIndex(){
  var count=0;
  return function(){
    return ++count;
  }
}
//-------------------print data----------------------

const count=initIndex();
function printData(){
  let index=count();
  if(index<=4){
    document.querySelector('#btn-wrap').innerHTML='';
    const ques=document.querySelector('#ques');
    ques.innerText=questions[index-1].question;

    questions[index-1].answer.forEach(ans=>{
      const button=document.createElement('button');
      button.classList.add('btn');
      button.setAttribute('correct',ans.correct);
      button.innerText=ans.text;
      document.querySelector('#btn-wrap').appendChild(button);
    })
    document.querySelector('#next-btn').style.visibility='hidden';
    addScore();
  }else{
    document.querySelector('#wrapper').innerHTML='';
    document.querySelector('#next-btn').remove();
    printResult();
  }
}

//-----------------------print result--------------------

function printResult(){
  const h1Text=document.createElement('h1');
  h1Text.classList.add('result-h1')
  h1Text.innerText='Result : ';

  const h1Score=document.createElement('h1');
  h1Score.classList.add('result-h1')
  h1Score.innerText=`${score} / 4`;

  document.querySelector('#wrapper').appendChild(h1Text);
  document.querySelector('#wrapper').appendChild(h1Score);
}

//------------------Calculate Result---------------------------

var score=0;
function addScore(){
  const buttons=document.querySelectorAll('.btn');
  buttons.forEach(button=>{
    button.addEventListener('click',(events)=>{
      document.querySelector('#next-btn').style.visibility='visible';
      if(events.target.getAttribute('correct')=='true'){
        events.target.classList.add('green');
        score++;
      }else{
        events.target.classList.add('red');  
      }
    })
  })
}