
var maindiv=document.getElementById('showquestion');
var quiz=getStoredsessionQuiz();
var correctlbl;
var ansarray=[];
var Question=getStoredQuestion();
var Option=getStoredOptions();
var right=0;
displaydata();
function displaydata()
{
	for(var i=0;i<Question.length;i++)
{
	if(quiz.QuizId==Question[i].QuizId)
	{
		showquestion(Question[i]);
	}	

}
var Submit=document.createElement('button');

	Submit.setAttribute("id","submitbtn");
	Submit.textContent="Submit Quiz";
	maindiv.appendChild(Submit);
	Submit.addEventListener('click',function(event)
	{	//console.log(ansarray);
		for(var i=0;i<Question.length;i++)
		{
			for(var x=1;x<ansarray.length;x++)
		{	
		if(Question[i].questionId==ansarray[x].id&&Question[i].correctOption==ansarray[x].Select)
			{
			right++;
			
			}
		
		}
			
		}
			
	});


}


function showquestion(quesobj)
 {
		var questionlbl=document.createElement('label');
		questionlbl.textContent=quesobj.question;
		maindiv.appendChild(questionlbl);
		addbreak();
		var h=1;
	for(var i=0;i<Option.length;i++)
	{	
			if(Option[i].questionId==quesobj.questionId)
			{
				
				var OptionA=document.createElement('input');
				OptionA.setAttribute("type","radio");
				//console.log(h);
				OptionA.setAttribute("value",h);
					h++;
				OptionA.setAttribute("name",quesobj.questionId);
		
					maindiv.appendChild(OptionA);

				var optionlbl=document.createElement('label');
				optionlbl.textContent=Option[i].Option;
				maindiv.appendChild(optionlbl);

				addbreak();
				
			}
		
	}	
	
	
		correctlbl=document.createElement('label');
		correctlbl.setAttribute("style","color:green");
		correctlbl.textContent="correct ans is "+quesobj.correctoption;
				
		var selected=findvalue(quesobj);
				
		var obj=new makeobject(quesobj.questionId,selected);
		
	
		ansarray.push(obj);

		correctlbl.setAttribute("style","display:none");
		maindiv.appendChild(correctlbl);	

		addbreak();
	


	
 }
function findvalue(ques)
{
			
	var f=document.getElementsByName(ques.questionId);
	
		for(var s=0;s<ques.noofoption;s++)
		{
				if(f[s].checked)
				{
				return f[s].value;
				}
			console.log(f[s].value);
		}	
}
function  makeobject(quesid,selected)
{
		this.id=quesid;
		this.Select=selected;

}
function addbreak()
{
	var brk=document.createElement('br');
	maindiv.appendChild(brk);
	
	var brk=document.createElement('br');
	maindiv.appendChild(brk);
}
	

function getStoredQuestion()
{
if (!localStorage.Question)
{
localStorage.Question = JSON.stringify([]);
}
return JSON.parse(localStorage.Question);
}

function getStoredsessionQuiz()
{
if (!sessionStorage.selectedquiz)
{
sessionStorage.selectedquiz = JSON.stringify([]);
}
return JSON.parse(sessionStorage.selectedquiz);
}


function getStoredOptions()
{
if (!localStorage.Option)
{
// default to empty array
localStorage.Option = JSON.stringify([]);
}
return JSON.parse(localStorage.Option);
}

