//js file
const queText = document.querySelector(".question-text");
const optionBox = document.querySelector(".option-box");
const currentQueNum = document.querySelector(".current-que-num");
const ansDesc = document.querySelector(".answer-description");
const nextQueBtn = document.querySelector(".next-question-btn");
const correctAns = document.querySelector(".correct-answers");
const seeResultBtn = document.querySelector(".see-result-btn");
const remainingTime = document.querySelector(".remianing-time");
const timeUpText = document.querySelector(".time-up-text");
const quizHomeBox = document.querySelector(".quiz-home-box");
const quizBox = document.querySelector(".quiz-box");
const quizOverBox = document.querySelector(".quiz-over-box");
const startAgainQuizBtn = document.querySelector(".start-again-quiz-btn");
const GoToHomeBtn = document.querySelector(".Go-to-Home-btn");
const CategoryBox = document.querySelector(".category-box");
const startQuizBtn = document.querySelector(".start-quiz-btn");
const categoryText = document.querySelector(".category-text");
console.log("quizOverBox = " + quizOverBox);
var queIndex = 0;
var score = 0;
var num = 0;
var myArr = [];
var interval;
var attempt = 0;
var categoryIndex;
//console.log(queText);

//arr of objs
myApp = [
{
		category: "Physics",
		quizWrap:[
		{
			que:"Who gave the Theory of Relativity?",
			options:["Isaac Newton"," Archimedes","Albert Einstein","Galileo Galilei"],
			ans:2,
			descrption:"Theory of Relativity was given by - Albert Einstein.Einstein’s General Relativity Simplified. The theory of general relativity describes how gravity affects the universe. When we take a walk outside, it is the gravity of the planet which keeps us from floating off into the sky"
		},
		{
			que:"The recoiling of gun is an example of which of the following??",
			options:["Law of Conservation of Angular Momentum"," Law of Conservation of Linear Momentum","Conversion of Kinetic Energy to Potential Energy","Law of Conservation of Energy"],
			ans:1,
			descrption:"The recoiling of gun is an example of - Law of Conservation of Linear Momentum "
		},
		{
			que:"Light year is a unit of which of these following??",
			options:["distance"," time","pressure","power"],
			ans:0, 
			descrption:"Light year is a unit of - distance"
		},
		{
			que:"Which of these branches of Physics deal with heat and temperature and their relation to energy and work?",
			options:["Statics"," Mechanics","Atomic Physics","Thermodynamics"],
			ans:3,
			descrption:"branches of Physics deal with heat and temperature and their relation to energy and work - Thermodynamics"
		},
		{
			que:"The branch of mechanics which deals with the study of motion of material objects without taking into account the factors which cause motion is called as:",
			options:["Kinematics"," Statics","Dynamics","None of the above"],
			ans:0,
			descrption:"The branch of mechanics which deals with the study of motion of material objects without taking into account the factors which cause motion is called as:Kinematics "
		},
		{
			que:"Which of these is the cause of Friction?",
			options:["Roughness of surfaces in contact"," Force of adhesion between the molecules of the surfaces in contact","Both a and b","None of the above"],
			ans:2,
		},
		{
			que:"A carbon atom is lighter than a hydrogen atom.",
			options:["True","false"],
			ans:1,
			descrption:"A carbon atom is about twelve times heavier than a hydrogen atom. Hydrogen is a gas, and carbon is a solid."
		},
		{
			que:"The Newton’s third law is applicable when:",
			options:["bodies are at rest"," bodies are in motion","bodies are in the air","bodies are at rest or in motion"],
			ans:3,
		},
		{
			que:"Work done is defined as the dot product of which of the following vectors?",
			options:["Force and acceleration","Force and area","Force and instantaneous velocity","Force and displacement"],
			ans:3,
		},
		{
			que:"The energy by virtue of its position is known as:",
			options:["Kinetic energy"," Potential energy","Internal energy","Heat energy"],
			ans:1,
		}
		]
},
{
		category: "Biology",
		quizWrap:[
		{
			que:"Pollination is best defined as?",
			options:["transfer of pollen from anther to stigma","germination of pollen grains","growth of pollen tube in ovule","visiting flowers by insects"],
			ans:0,
		},
		{
			que:"Plants receive their nutrients mainly from??",
			options:["chlorophyll","atmosphere","light","soil"],
			ans:3,
		},
		{
			que:"Phloem is a tissue found in??",
			options:["reproductive organs of animals"," plants","insects","mammals"],
			ans:1,
		},
		{
			que:"N2 content is kept constant in the biosphere due to?",
			options:["N2 fixation","industrial pollution","nitrogen cycle","absorption of N2"],
			ans:2,
		},
		{
			que:"Potato is a modified form (outgrowth) of:",
			options:["root"," stem","fruit","leaf"],
			ans:1,
		},
		{
			que:"Myopia is connected with?",
			options:["ears","eyes","lungs","None of the above"],
			ans:1,
		},
		{
			que:"Our skin, when exposed to excess sunlight, becomes dark. This is because our skin pigments called",
			options:["flavoxanthin","melanin","carotene","Xanthophyll"],
			ans:1,
		},
		{
			que:"Mumps is disease caused by Virus",
			options:["True","False"],
			ans:0,
			descrption:"Mumps is a disease that is caused by a virus not by bacteria"
		},
		{
			que:"During sleep a man’s blood pressure_________?",
			options:["Increase","Decrease","Remains constant","Fluctuates"],
			ans:3,
			descrption:"During sleep a man’s blood pressure Fluctuates."
		},
		{
			que:"Why do we feel drowsy after a heavy meal?",
			options:["The biological clock is upset","The body muscles are fatigued","The hypothalamus produces melatonin to induce sleep","Brain receives less oxygen as blood rushes to supply oxygen and nutrition to the contracting stomach and intestines"],
			ans:3,
		}
		]
},
{
		category: "Disaster Management",
		quizWrap:[
		{
			que:"A disease that becomes unusually widespread and even global in its reach is referred to as ?",
			options:["Epidemic","Pandemic","Spanish flu","Hyperendemic"],
			ans:1,
		},
		{
			que:"Bhopal Gas Disaster is a kind of??",
			options:["Natural disaster","None of the above","Manmade disaster","both a and c"],
			ans:2,
			descrption:"Bhopal Gas Disaster is a kind of Manmade disaster."
		},
		{
			que:"The National Disaster Management Authority (NDMA) is headed by??",
			options:["Prime Minister of India","President of India","Governor of States"," Chief Minister of States"],
			ans:0,
		},
		{
			que:"Volcanic erupted material when inside the hill/earth/mountain it is called?",
			options:["Lava","Magma","Lahars","None of these"],
			ans:1,
		},
		{
			que:"Cyclones occurring in North Atlantic ocean are called:",
			options:["Typhoon"," Tornado","Hurricanes","None of the above"],
			ans:2,
		},
		{
			que:"The Disaster Management Act was made in ?",
			options:["2006","2003","2009","2005"],
			ans:3,
		},
		{
			que:"United Nations disaster management team are responsible for solving problems resulting from disaster in",
			options:["Asia","Africa","Australia","All continents"],
			ans:3,
		},
		{
			que:"The instrument which records earthquake wave is called Hythergraph ",
			options:["True","False"],
			ans:1,
			descrption:"The instrument which records earthquake wave is called Seismograph"
		},
		{
			que:"Hurricanes are common in ?",
			options:["India","Bangladesh","USA","Australia"],
			ans:2,
		},
		{
			que:"An example of Civil war is?",
			options:["Kargil war","World war I","Syrian war","None of the above"],
			ans:2,
		}
		]
},
{
		category: "History",
		quizWrap:[
		{
			que:"Which was the largest site of Indus Civilization ??",
			options:["Mohenjodaro","Lothal","Chanhudaro","Dholavira"],
			ans:0,
		},
		{
			que:"Which is the oldest text in the world ?",
			options:["Yajur Veda","Atharva Veda","Rig Veda","Sama Veda"],
			ans:2,
		},
		{
			que:"Gautama Buddha renounced home at the age of ?",
			options:["26","27","28","29"],
			ans:3,
		},
		{
			que:"The Red Fort was built by :",
			options:["Akbar","Shahjhan","Jahangir","Sher Shah"],
			ans:1,
		},
		{
			que:"Malik Kafur was General of ?:",
			options:["Firoz Shah Tughluq","Chandragupta Maurya","Bimisara","Ala-ud-din khilji"],
			ans:3,
		},
		{
			que:"The Qutub Minar at Delhi was built by ??",
			options:["Qutbuddin Aibak","Shahjhan","Aleu-din-khilji","Chandragupta"],
			ans:0,
		},
		{
			que:"Where did British first open their factories in Eastern part of India ?",
			options:["Assam","Orissa","Bihar","Sikim"],
			ans:1,
		},
		{
			que:" 'Jatakas' - are sacred text associated with : Buddhism",
			options:["True","False"],
			ans:0,
			descrption:"'Jatakas' - are sacred text associated with : Buddhism"
		},
		{
			que:"Azad Hind was created with the assistance o?",
			options:["USA","Russia","Japan","China"],
			ans:2,
		},
		{
			que:"Tipu sultan was the ruler of ??",
			options:["Bengal","Karnataka","Hyderabad","Mysore"],
			ans:3,
		}
		]
}

		]


function createCategory(){
	for(var i= 0;i < myApp.length;i++){
		console.log(i + "category is" + myApp[i].category);
		const categoryList = document.createElement("div");
		categoryList.innerHTML = myApp[i].category;
		categoryList.setAttribute("data-id",i);
		categoryList.setAttribute("onclick","selectedCategory(this)");
		CategoryBox.appendChild(categoryList);
	}
	console.log("hi !!! karishma here  !")
}

function selectedCategory(elem){
	// console.log(elem.innerHTML);
	// console.log(elem.getAttribute("data-id"));

	categoryIndex = elem.getAttribute("data-id");
	console.log(categoryIndex);
	categoryText.innerHTML = myApp[categoryIndex].category;
	quizHomeBox.classList.remove("show");
	quizBox.style.display = "block";
	nextQue();
	console.log("selected category :: " + categoryIndex);
}

function load(){
	num++;	
	console.log("hello");
	queText.innerHTML = myApp[categoryIndex].quizWrap[queIndex].que;
	console.log(queText.innerHTML);
	createOptions();
	scoreBoard();
	currentQueNum.innerHTML= num+ "/" +myApp[categoryIndex].quizWrap.length;
	//startTimer();
}

function createOptions(){
	optionBox.innerHTML = '';
	var animationDelay = 0.2;
	for(var i = 0;i<myApp[categoryIndex].quizWrap[queIndex].options.length;i++)
	{
		console.log(myApp[categoryIndex].quizWrap[queIndex].options.length);
		const option = document.createElement("div");
			option.innerHTML = myApp[categoryIndex].quizWrap[queIndex].options[i];
			option.classList.add("option")
			option.id = i;
			animationDelay += 0.2;
			option.style.animationDelay = animationDelay + "s";
			option.setAttribute("onclick","check(this)");
			optionBox.appendChild(option);
	}
}

function check(elem){
	// console.log(elem.id);
	const id = elem.id;
	if(id == myApp[categoryIndex].quizWrap[queIndex].ans){
		//console.log("correct ans");
		elem.classList.add("correct");
		score++;
		scoreBoard();
	}else{
		//console.log("Incorrect");
		elem.classList.add("wrong");
		//show the correct ans when wrong option chosen
		for(var i=0;i<optionBox.children.length;i++){
			if(optionBox.children[i].id == myApp[categoryIndex].quizWrap[queIndex].ans){
				optionBox.children[i].classList.add("show-correct-ans");
			}
		}
	}
	attempt++;
	disableOptions();
	showAnsDescrption();
	showNextQueBtn();
	stopTimer();

	if(num == myApp[categoryIndex].quizWrap.length){
		//console.log("quiz-over");
		quizOver();
	}
}

function showAnsDescrption(){
	if(typeof myApp[categoryIndex].quizWrap[queIndex].descrption !== "undefined"){
		ansDesc.classList.add("show");
		ansDesc.innerHTML = myApp[categoryIndex].quizWrap[queIndex].descrption;
	}else
	{
		console.log("desc box will not be shown");
	}
}
function hideAnsDescrption(){
	ansDesc.classList.remove("show");
	ansDesc.innerHTML = '';
}
function showNextQueBtn(){
	nextQueBtn.classList.add("show");
}
function hideNextQueBtn(){
	nextQueBtn.classList.remove("show");
}
function disableOptions(){
	for(var i=0;i<optionBox.children.length; i++){
		optionBox.children[i].classList.add("already-answered")
	}
}
function scoreBoard(){
	correctAns.innerHTML = score;
}

//event listener for the next que btn
nextQueBtn.addEventListener("click",nextQue);

function nextQue(){
	console.log("question index is : "+ queIndex);
	queIndex++;
	//load();
	startTimer();
	generateRandonQue();
	hideNextQueBtn();
	hideAnsDescrption();
	hideTimeUpText();
}

function quizOver(){
	nextQueBtn.classList.remove("show");
	seeResultBtn.classList.add("show");
}

function generateRandonQue(){
	console .log("heyyyyyyyyy: myApp[categoryIndex].quizWrap.length"+ myApp[categoryIndex].quizWrap.length);
	const randomNum = Math.floor(Math.random() * myApp[categoryIndex].quizWrap.length);
	var hitDuplicate = 0;
	console.log(randomNum);
	if(myArr.length == 0){
		queIndex = randomNum;
	}else{
		for(var i =0;i<myArr.length;i++){
			if(randomNum == myArr[i]){
				hitDuplicate =1;			
			}
		}
		if (hitDuplicate == 1){
			generateRandonQue();
			return;
		}
		else{
			queIndex = randomNum;
		}
	}
	myArr.push(randomNum);
	console.log(myArr);
	load();
}

function startTimer(){
	var timeLimit =15;
	remainingTime.innerHTML = timeLimit;
	remainingTime.classList.remove("less-time");
	interval = setInterval(()=>{
			timeLimit--;	
			if(timeLimit<10){
				timeLimit = "0" + timeLimit;
			}
			if(timeLimit <6){
				remainingTime.classList.add("less-time");
		
			}
			remainingTime.innerHTML = timeLimit;
			if(timeLimit == 0){
				clearInterval(interval);
				timeIsup();
			}
		},1000)
}
function stopTimer(){
	clearInterval(interval);			
}

function timeIsup(){
	showTimeUpText();
	//when time is up - show the correct ans...
	for(var i=0;i<optionBox.children.length;i++){
			if(optionBox.children[i].id == myApp[categoryIndex].quizWrap[queIndex].ans){
				optionBox.children[i].classList.add("show-correct-ans");
			}
	}
	disableOptions();
	showAnsDescrption();
	showNextQueBtn();
}
function showTimeUpText(){
	timeUpText.classList.add("show");
}
function hideTimeUpText(){
	timeUpText.classList.remove("show");
}

seeResultBtn.addEventListener("click",seeResult);
startAgainQuizBtn.addEventListener("click",startAgainQuiz);
GoToHomeBtn.addEventListener("click",GoToHome);
//startQuizBtn.addEventListener("click",startquiz);

function startquiz(){
	console.log("start the quiz ! : quizBox.classList :" + quizBox.classList);
	quizHomeBox.classList.remove("show");
	quizBox.style.display = "block";
	//quizBox.classList.add("show");
	//quizOverBox.classList.remove("show");
	// resetQuiz();
	// nextQue();
	console.log("start the quiz ! : quizBox.classList :" + quizBox.classList);
	startTimer();
	generateRandonQue();
}

function GoToHome(){
	quizOverBox.classList.remove("show");
	quizHomeBox.classList.add("show");
	resetQuiz();
}

function startAgainQuiz(){
	quizBox.style.display = "block";
	console.log("quiz box classlist:" + quizBox.classList);
	//quizBox.classList.add("show");
	quizOverBox.classList.remove("show");
	resetQuiz();
	//load();
	nextQue();


}

function resetQuiz(){
	//queIndex = 0;
	score = 0;
	num = 0;
	myArr = [];
	interval;
	attempt = 0;

}

function seeResult(){
	//console.log("SEE RESULTTTT");
	quizBox.style.display = "none";
	quizBox.classList.remove("show");
	seeResultBtn.classList.remove("show");
	quizOverBox.classList.add("show");
	//resetQuiz();
	quizResult();
}

function quizResult(){
	
	document.querySelector(".total-questions").innerHTML = myApp[categoryIndex].quizWrap.length;
	document.querySelector(".attempts").innerHTML = attempt;
	console.log("tick tick: " + document.querySelector("#correctQue"));
	document.querySelector("#correctQue").innerHTML = score;
	console.log("total:"+ myApp.length +"correct:"+ score +"wrong :" + (myApp[categoryIndex].quizWrap.length - score) + "percentage:"+((score/myApp.length)*100));
	console.log("tick tick wrong: " + document.querySelector("#wrongQue"));
	document.querySelector("#wrongQue").innerHTML = (myApp[categoryIndex].quizWrap.length - score);
	document.querySelector(".percentage").innerHTML = ((score/myApp[categoryIndex].quizWrap.length)*100) + "%";
	//document.querySelector(".start-again-quiz-btn").innerHTML = myApp.length;
	// document.querySelector("").innerHTML = myApp.length;
	// document.querySelector("").innerHTML = myApp.length;
}



window.onload = () =>{
	// load();
	//quizBox.classList.remove("show");
	// startTimer();
	//console.log("window onload :" + quizBox.classList);
	// generateRandonQue();
	createCategory();

}
 

