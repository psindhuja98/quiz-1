const rs=require('readline-sync');
let score=0;
function checkanswer(question, answer){
  const useranswer = rs.question(question);
  if(useranswer == answer){
  console.log('you are correct');
  score = score+2;
  console.log('score'+score)
  }
   else{
  console.log('you are incorrect');
  score= score-1;
  console.log('score'+score)
}
}


const questions=[
  {
    question:'what is the captial city of india?',
    answer:'New Delhi'
  },
  {
    question:'what is the capital city of tamilnadu?',
    answer:'Chennai'
  },
  {
    question:'What is the capital city of Russia?',
      answer: 'Moscow'
  },
  {
    question:'what is the capital ciy of  Telangana?',
      answer:'Hyderabad'
  
  },

  {
    question:'What is the capital city of Gujarat?',
      answer:'Gandhinagar'
  },
  {
    question:'what is the capital city of Nepal?',
      answer:'Kathmandu'
  },
  {
    question:'what is the capital city of Goa?',
      answer:'Panaji'
  },
  {
    question:'what is the capital city of Maharastra?',
      answer:'Mumbai'
  
  },
  {
    question:'What is the capital city of Rajasthan?',
      answer:'Jaipur'
  },
  {
    question:'What is the capital city of Karnataka?',
      answer:'Banglore'
  
  }

]

for(let i=0; i<questions.length; i++){
  let qu = questions[i];
  checkanswer(qu.question,qu.answer);
}
