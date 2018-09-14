function resize() {
	var bg= document.getElementById("main-background-container");
	//bg.style.width=document.documentElement.clientWidth+'px';
	Screen.height=document.documentElement.clientHeight+'px';
	bg.style.height=Screen.height;
	document.getElementById('group2').style.height= document.getElementById('group2').offsetHeight
};
function main() {
	resize();
};

document.onreadystatechange = () => {
  	if (document.readyState === 'complete') {
  		main();


 
		window.addEventListener('resize', function(event){
  			resize();
		}); 
		
		
	}
};