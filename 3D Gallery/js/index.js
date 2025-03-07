var   
	currdeg  = 0,
	panelAry = ["a", "b", "c", "d", "e", "f"],
	position = 4;

console.log(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));	
	
$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="p"){
    currdeg = currdeg - 60;
	trackPanelPrev();
  }
  if(e.data.d=="n"){
    currdeg = currdeg + 60;
	trackPanelNext();
  }
  $(".carousel").css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
    $(".colorBallContainer").css({
		"-webkit-transform": "rotate("+currdeg+"deg)",
		"-moz-transform": "rotate("+currdeg+"deg)",
		"-o-transform": "rotate("+currdeg+"deg)",
		"transform": "rotate("+currdeg+"deg)"
  });

}
function trackPanelNext(){
	if(position > 5){
		position = 0;
	}
	else if (position < 0){
		position = 5;
	}
		console.log(panelAry[position]);
	position--;
}
function trackPanelPrev(){
	if(position > 5){
		position = 0;
	}
	else if (position < 0){
		position = 5;
	}
		console.log(panelAry[position]);
	position++;
}