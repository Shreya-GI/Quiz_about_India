var readLineSync=require('readline-sync');
var username=readLineSync.question("May I know your name?  ");
console.log("Welcome to the quiz  "+username);
console.log("Do you know about India");
var score=0;
function play(question,answer)
  {
    var userans=readLineSync.question(question);
    if(userans==answer)
    {
      console.log("YAYY!! CORRECT");
      score=score+1;
    }
    else
    {
      console.log("OOPS!! INCORRECT");
    }
   
  }
var questions=
[{question:"National Flower of India",
  answer:"Lotus"},
 {question:"National Animal of India",
  answer:"Tiger"},
 {question:"National Bird of India",
  answer:"Peacock"},
 {question:"Capital of India",
  answer:"New Delhi"},
{question:"Capital of MP",
  answer:"Bhopal"}
];
 for(var i=0;i<questions.length;i++)
   {
     var currQues=questions[i];
     play(currQues.question,currQues.answer);
   }
 console.log("You scored-> "+score+" out of 5");
    console.log("THANKS!")
    console.log("__________");
