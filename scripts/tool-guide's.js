var show1 = document.getElementById('showplanner');
show1.onclick=showlocation2
var planner = document.getElementById('planner');

function showlocation2(){
	planner.style.borderRadius='20px';
	planner.style.transition='0.5s';
	planner.style.color='black';
	planner.style.backgroundColor='rgba(255,206,0,1)';
	setTimeout(function(){planner.style.color='white';},1000);
	setTimeout(function(){planner.style.backgroundColor='rgba(34,34,34,1)';},1000);
	setTimeout(function(){planner.style.borderRadius='5px';},800);

}

var show2 = document.getElementById('showplanning');
show2.onclick=showlocation1
var planning = document.getElementById('planning');

function showlocation1(){
	planning.style.borderRadius='20px';
	planning.style.transition='0.5s';
	planning.style.color='black';
	planning.style.backgroundColor='rgba(255,206,0,1)';
	setTimeout(function(){planning.style.color='white';},1000);
	setTimeout(function(){planning.style.backgroundColor='rgba(34,34,34,1)';},1000);
	setTimeout(function(){planning.style.borderRadius='5px';},800);
}