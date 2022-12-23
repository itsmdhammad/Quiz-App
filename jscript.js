var startquiz=document.getElementById("start-button");
var RestartQuiz=document.getElementById("Restart");
var Result=document.getElementById("result-div");
var NextQuestion=document.querySelectorAll("#next");
var resultshow=document.getElementById("resultnext");

var array=[1,2,3];
var length=array.length;
var id=0;
var count=array[id];
var question=document.getElementById(count);

startquiz.addEventListener("click", function(){
    startquiz.style.display="none";
    question.style.display="block";
});

NextQuestion.forEach(element => {
    element.addEventListener("click", function(){
        document.getElementById(count).style.display="none";
        id++;
        count=array[id];
        document.getElementById(count).style.display="block";

        wronganswer.forEach(wrong => {
        wrong.style.backgroundColor = 'white';
        wrong.style.borderColor=' rgb(107, 107, 228)';
        })

        correctanswer.forEach(correct => {
        correct.style.backgroundColor = 'white';
        correct.style.borderColor=' rgb(107, 107, 228)';
        })

    });
});

RestartQuiz.addEventListener("click",function(){
    window.location.href="index.html";
});

var correctanswer=document.querySelectorAll("#correct");
var wronganswer=document.querySelectorAll("#wrong");
var number=0;

correctanswer.forEach(element => {

    element.addEventListener("click", function(e){
        number++;
        e.target.style.backgroundColor='rgb(107, 228, 137)';
        e.target.style.borderColor='rgb(107, 228, 137)';

        wronganswer.forEach(wrong => {
        wrong.style.backgroundColor = 'rgb(236, 106, 106)';
        wrong.style.borderColor=' rgb(236, 106, 106)';
        })
    });    
});

wronganswer.forEach(element => {

    element.addEventListener("click", function(){
        wronganswer.forEach(wrong => {
        wrong.style.backgroundColor = ' rgb(236, 106, 106)';
        wrong.style.borderColor=' rgb(236, 106, 106)';
        })

        correctanswer.forEach(correct => {
        correct.style.backgroundColor='rgb(107, 228, 137)';
        correct.style.borderColor='rgb(107, 228, 137)';
        })
    });
});

resultshow.addEventListener("click",function(){

    if(number==0){
        document.getElementById('emojie').innerHTML="☹️";
    }

    else if(number==1){
        document.getElementById('emojie').innerHTML="🙂";
    }

    else if(number==2){
        document.getElementById('emojie').innerHTML="😊";
    }

    else if(number==3){
        document.getElementById('emojie').innerHTML="😇";
    }

    document.getElementById(count).style.display="none";
    document.getElementById('marks').innerHTML="You got " + number + " out of " + length;
    Result.style.display="block";

    wronganswer.forEach(wrong => {
        wrong.style.backgroundColor = 'white';
        wrong.style.borderColor=' rgb(107, 107, 228)';
        })

        correctanswer.forEach(correct => {
        correct.style.backgroundColor = 'white';
        correct.style.borderColor=' rgb(107, 107, 228)';
        })
})
