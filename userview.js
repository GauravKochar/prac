var Quiz=getStoredQuiz();
var Quiztable=document.getElementById('Quizlist');
displaydata();
function displaydata()
{
	
	tableheading();
	for(var i=0;i<Quiz.length;i++)
	{
		AddQuizToDom(Quiz[i]);
	}
}
function tableheading()
			{
				var frow=document.createElement('tr');
	
				var pname=document.createElement('th');
				pname.textContent="QuiZ ID";
				frow.appendChild(pname);

				var pprice=document.createElement('th');
				pprice.textContent="Quiz Title";
				frow.appendChild(pprice);

				var timebased=document.createElement('th');
				timebased.textContent="TimeBased";
				frow.appendChild(timebased);


				var timeAllowed=document.createElement('th');
				timeAllowed.textContent="AllowedTime";
				frow.appendChild(timeAllowed);


				var noofquestion=document.createElement('th');
				noofquestion.textContent="NO Of Question";
				frow.appendChild(noofquestion);


				
				
				var pQuant=document.createElement('th');
				pQuant.textContent="TakeQuiz";
				frow.appendChild(pQuant);
				
				
				
				Quiztable.appendChild(frow);
			}			

 function AddQuizToDom(quizobject)
{
	
	var tr=document.createElement('tr');
		
	var name=document.createElement('td');
	name.textContent=quizobject.QuizId;
	tr.appendChild(name);

	var title=document.createElement('td');
	title.textContent=quizobject.title;
	tr.appendChild(title);
	
	
	var timebased=document.createElement('td');
	timebased.textContent=quizobject.timebase;
	tr.appendChild(timebased);

	var timeallowed=document.createElement('td');
	timeallowed.textContent=quizobject.timeallow;
	tr.appendChild(timeallowed);
	
	
	var noquest=document.createElement('td');
	noquest.textContent=quizobject.ques;
	tr.appendChild(noquest);

	
		
	var takequizbtn=document.createElement('td');
	takequizbtn.innerHTML="<button class=\"takequiz\">TakeQuiz</button>";
	
	tr.appendChild(takequizbtn);
	takequizbtn.addEventListener('click',function(event)
{

	
		var targetParent = event.target.parentNode.parentNode;		
		var selectedQuizIndex = getQuizIndex(targetParent.childNodes[0].textContent); 
	
	console.log(Quiz[selectedQuizIndex]);
			storesessionQuiz(Quiz[selectedQuizIndex]);
			window.location.href="file:///C:/Users/Gaurav/Desktop/showquestion.html";
});
	
	Quiztable.appendChild(tr);
	
	
	
}

function getQuizIndex(id) 
{
    for (var i = 0; i < Quiz.length; i++) 
	{
        if (Quiz[i].QuizId == id) 
		{
			return i
		}
    }
} 


function getStoredQuiz()
{
if (!localStorage.Quiz)
{
// default to empty array
localStorage.Quiz = JSON.stringify([]);
}
return JSON.parse(localStorage.Quiz);
}

function storesessionQuiz(quiz)	
{
sessionStorage.selectedquiz = JSON.stringify(quiz);

}



