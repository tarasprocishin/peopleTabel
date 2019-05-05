'use strict';

const ANCESTRY_FILE = [
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
];

	
function showPeople(element, people) {

	let elem = document.querySelector(`.${element}`);
	let table = document.createElement('TABLE');
	table.className = "people__table";
	let keys = Object.keys(people[0]);

	keys.unshift('id');
	keys.splice(5, 0, 'age', 'century');
	keys.push('childrens');
   


	function countId(){
		for (let i = 0; i < people.length; i++) {
				people[i].id = i + 1;
		}
	}

	function countAge(){
		for (let i = 0; i < people.length; i++) {
		people[i].age = people[i].died - people[i].born;
		}
	}

	function serchCentury(){
		for( let i = 0; i < people.length; i++){
		people[i].century = Math.ceil(people[i].died / 100);
		}
	}

	function serchChildren(){
		for( let i = 0; i < people.length; i++){
			let arrFatherHas = [];
			let arrMotherHas = [];

			if(people[i].sex === 'm'){
				for(let j = 0; j < people.length; j++){
					if(people[i].name === people[j].father){
						arrFatherHas.push(people[j].name);
					}
						continue;
				}
			people[i].childrens = arrFatherHas.join(', ');
			}
			
			if(people[i].sex === 'f'){
				for(let j = 0; j < people.length; j++){
					if(people[i].name === people[j].mother){
						arrMotherHas.push(people[j].name);	
					}else{
						continue;
					}
				}
			people[i].childrens = arrMotherHas.join(', ');	
			}
		}
	}

	countId();
	serchCentury();
	countAge();
	serchChildren();

	function creatTheader(){
		let tr = document.createElement('tr');
		let theader = document.createElement('THEAD')
		theader.append(tr);

		for(let i = 0; i <keys.length; i++){
			let td = document.createElement('td');
			td.append(document.createTextNode(keys[i]));
			td.className = `${keys[i]}`
			tr.append(td);
		}
		return  theader;
	}

	function creatTbody(){
		 let tbody = document.createElement('TBODY');
		 let throughNames = [];	

		for(let i = 0; i < people.length; i++){
			let tr = document.createElement('tr');
			tr.className = 'persone';
			tbody.append(tr);

			if(people[i]['sex'] === 'f'){
					tr.className += ' person--female';
					tr.style.backgroundColor = 'lightpink';

					if(people[i]['childrens'] != false){		
						tr.className += ' person--mother'
					}
				}

			if(people[i]['sex'] === 'm'){
					tr.className += ' person--male';

					if(people[i]['childrens'] != false){		
						tr.className += ' person--father'
						tr.style.backgroundColor = 'cornflowerblue';
					}
					
				}

			if(people[i]['century'] === 17){
				tr.className += ' person--lived-in-17'
			}



			for(let j = 0; j < keys.length; j++){
		
				let td = document.createElement('td');
				td.className =`${keys[j]}`;
				td.append(document.createTextNode(people[i][keys[j]]));
				tr.append(td);
			}
			
		}
		return tbody;
	}

	    table.appendChild(creatTheader());
	    table.appendChild(creatTbody());
	    elem.append(table);
	 
 function addGreenBorder (){
 	let tdAges = document.querySelectorAll('.people .persone .age')

 	for(let i = 0; i < tdAges.length; i++){
 		if(tdAges[i].textContent > 65){
 		tdAges[i].parentElement.style.border = "5px solid green";
 		}
 	}
 }
			
function addSpanWitThrough () {
			let tdBorns = document.querySelectorAll('.people .persone .born');
			let tdName =document.querySelectorAll('.people .persone .name');
			let arrThroutNames = [];
		 	let tdChildren = document.querySelectorAll('.people .persone .childrens');
		 	let arrChildrens =[];

			for(let i = 0; i < tdBorns.length; i++){
		 		if(tdBorns[i].textContent < 1650){
		 			let span = document.createElement('span');
					span.style.cssText = 'text-decoration: line-through';
					span.textContent = tdName[i].textContent;
					tdName[i].textContent = '';
		 			tdName[i].appendChild(span);
		 			arrThroutNames.push(tdName[i].textContent);
		 		}
		 	}
		 

		 	for(let i = 0; i < tdChildren.length; i++){

		 		arrChildrens.push(tdChildren[i].textContent);
		 		let children = arrChildrens[i].split(', ');

		 		for(let j = 0; j < children.length; j++){
		 			if(arrThroutNames.indexOf(children[j]) !== -1){
		 			let span = document.createElement('span');
					span.style.cssText = 'text-decoration: line-through';
					span.textContent = children[j];

					let pos = arrChildrens[i].indexOf(children[j]);
					let lengthChildren = children[j].length;
					let lengthArrChildrens = arrChildrens[i].lenght;

					let otherContent = `${arrChildrens[i].substring(0, pos)}` + `${arrChildrens[i].substring(pos + lengthChildren, lengthArrChildrens)}`;
					tdChildren[i].textContent = otherContent;
	
		 			tdChildren[i].appendChild(span);

		 			}
			 	}

		 	}
		 }

function addSpanWitBold () {
			let tdDied = document.querySelectorAll('.people .persone .died');
			let tdName =document.querySelectorAll('.people .persone .name');
			let arrBoldNames = [];
		 	let tdChildren = document.querySelectorAll('.people .persone .childrens');
		 	let arrChildrens =[];

			for(let i = 0; i < tdDied.length; i++){
		 		if(tdDied[i].textContent > 1800){
		 			let span = document.createElement('span');
					span.style.cssText = 'font-weight: bold';
					span.textContent = tdName[i].textContent;
					tdName[i].textContent = '';
		 			tdName[i].appendChild(span);
		 			arrBoldNames.push(tdName[i].textContent);
		 		}
		 	}
		 

		 	for(let i = 0; i < tdChildren.length; i++){

		 		arrChildrens.push(tdChildren[i].textContent);
		 		let children = arrChildrens[i].split(', ');

		 		for(let j = 0; j < children.length; j++){
		 			if(arrBoldNames.indexOf(children[j]) !== -1){
		 			let span = document.createElement('span');
					span.style.cssText = 'font-weight: bold';
					span.textContent = children[j];

					let pos = arrChildrens[i].indexOf(children[j]);
					let lengthChildren = children[j].length;
					let lengthArrChildrens = arrChildrens[i].lenght;

					let otherContent = `${arrChildrens[i].substring(0, pos)}` + `${arrChildrens[i].substring(pos + lengthChildren, lengthArrChildrens)}`;
					tdChildren[i].textContent = otherContent;
	
		 			tdChildren[i].appendChild(span);
	
		 			}
			 	}

		 	}

		}

			 addSpanWitBold();
			 addGreenBorder();
			 addSpanWitThrough();
}


showPeople("people" , ANCESTRY_FILE);




// # - 8
let theader = document.querySelector('thead');
let tbody = document.querySelector('tbody');
let trowsArr = [... tbody.querySelectorAll('table .persone')];

let thBorn = theader.querySelector('.born');
let thDied =  theader.querySelector('.died');
let thAge =  theader.querySelector('.age');
let thName = theader.querySelector('.name');
let thId = theader.querySelector('.id');

const sortOnClick = function(elem, selector){
elem.addEventListener('mouseover', function (){
			elem.className = 'focus';
		} )
elem.addEventListener('mouseout', function (){
			elem.classList.remove('focus');
		} )
	
elem.addEventListener('click',() => {
	trowsArr.sort((a, b) => { 
		if(isNaN(+ a.querySelector(`${selector}`).textContent)){
			return (a.querySelector(`${selector}`).textContent > b.querySelector(`${selector}`).textContent ?  1: - 1);
		}else{
	 		return + a.querySelector(`${selector}`).textContent - ( + b.querySelector(`${selector}`).textContent);
		}});		
	for(let i = 0; i < tbody.children.length; i++){
		tbody.append(trowsArr[i]);
	}});
}

sortOnClick(thBorn, '.born');
sortOnClick(thDied, '.died');
sortOnClick(thAge, '.age');
sortOnClick(thName, '.name');
sortOnClick(thId, '.id');


// # - 9
let form = document.querySelector('form');
let inputName = document.createElement('input');
let inputMother = document.createElement('input');
let inputFather = document.createElement('input');

inputName.placeholder = 'Filter for name';
inputFather.placeholder = 'Filter for Father'
inputMother.placeholder = 'Filter for Mother'

form.append(inputName, inputMother, inputFather);

const filter = function(elem, selector){
elem.addEventListener('input', function (){
	tbody.innerHTML = '';
	let samArr = trowsArr.filter(function(a){
		if(a.querySelector(`${selector}`).textContent.toLowerCase().indexOf(elem.value.toLowerCase()) === 0){
			return true;
		}})
	for(let i = 0; i < samArr.length; i++){
		tbody.append(samArr[i]);
	}
})

}
filter(inputName, '.name');
filter(inputMother, '.mother');
filter(inputFather, '.father');

// # - 10, 11

let table = document.querySelector('table');
let selectedTd;

table.addEventListener('click', function(event) {
	
   let target = event.target;
  while (target != table) {
    if (target.tagName == 'TD') {
    	blueBorder(target);
      return;
    }
    target = target.parentNode;
  }
})

function blueBorder(node) {
  if (selectedTd) {
    selectedTd.style.border = 'none';
  }
  selectedTd = node;
  selectedTd.style.border = '5px solid blue';
  selectedTd.setAttribute(`data-`+`${selectedTd.className}`, selectedTd.textContent);
}

// # - 7 	
function getPeopleHTML() {
  let element = document.querySelector(".people");
  return element.innerHTML;
}

//console.log(getPeopleHTML());
