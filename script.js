const aiWidespread = 3.2
const biWidespread = 1.05
const ciWidespread = 2.5
const diWidespread = 0.38

const aiSemiIndependent = 3.0 
const biSemiIndependent = 1.12
const ciSemiIndependent = 2.5
const diSemiIndependent =0.35

const aiBuiltIn = 2.8
const biBuiltIn = 1.20
const ciBuiltIn = 2.5
const diBuiltIn = 0.32

EAF = 1
size = 0
PM = 0
TM = 0
ND = 0

function calculate(){
	if (Widespread.selected){
    	PM = EAF * aiWidespread * Math.pow(size, biWidespread)
		TM = ciWidespread * Math.pow(PM, diWidespread)
    }
	else if (SemiIndependent.selected){
		PM = EAF * aiSemiIndependent * Math.pow(size, biSemiIndependent)
		TM = ciSemiIndependent * Math.pow(PM, diSemiIndependent)
	}
	else if (BuiltIn.selected){
		PM = EAF * aiBuiltIn * Math.pow(size, biBuiltIn)
		TM = ciBuiltIn * Math.pow(PM, diBuiltIn)
	}
	LI.innerHTML = PM.toFixed(2)
	DT.innerHTML = TM.toFixed(2)
}

radioClass = document.getElementsByClassName(1)
radioChange(radioClass)

function valueCheck(classes){ //Получение значений выбраных кнопок
		EAF = 1
		for (i=0;i<classes.length;i++){
		if (classes[i].checked){
			EAF*=parseFloat(classes[i].value)
			calculate()
		}
	}
}

function radioChange(classes){ // Создание событий при изменении выбраной кнопки
			for (i=0;i<classes.length;i++){
			classes[i].addEventListener("change", (event) =>{
			valueCheck(classes)
		})
	}
}

selectClass = document.getElementById("select")
selectClass.addEventListener("change", (event) =>{
			calculate()
		})

Widespread = document.getElementById("Widespread")
SemiIndependent = document.getElementById("SemiIndependent")
BuiltIn = document.getElementById("BuiltIn")

LI = document.getElementById("LaborIntensity")
DT = document.getElementById("DevelopmentTime")

sizeCheck = document.getElementById("linesOfCode")
sizeCheck.oninput = function() {
    size = parseInt(sizeCheck.value)
    if (!Number.isInteger(size)) size = 0
    calculate()
  }

riven = document.getElementById("riven")
riven.addEventListener("change", (event) =>{
			if(document.getElementById("Basic").selected) document.location.href = "1.html"
			else document.location.href = "2.html"
		})

function selec(){
	document.getElementById("Intermediate").selected = true
}