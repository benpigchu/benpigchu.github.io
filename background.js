var systemVar={}

systemVar.isMobile=(navigator.userAgent.match(/Android/i)?true:false)||(navigator.userAgent.match(/BlackBerry/i)?true:false)||(navigator.userAgent.match(/iPhone|iPad|iPod/i)?true:false)||(navigator.userAgent.match(/IEMobile/i)?true:false)

var farSquare=document.getElementById("farSquare")
var midSquare=document.getElementById("midSquare")
var nearSquare=document.getElementById("nearSquare")

var deltaX=0
var deltaY=0

var orientationMap={
	0:[[1,0,0],[0,-1,0]],
	90:[[0,-1,0],[-1,0,0]],
	180:[[-1,0,0],[0,1,0]],
	270:[[0,1,0],[1,0,0]],
}

var render=function(){
	var basicTransformX=0.05*window.innerWidth/2*deltaX
	var basicTransformY=0.05*window.innerHeight/2*deltaY
	nearSquare.style.transform="translate("+basicTransformX+"px,"+basicTransformY+"px)"
	midSquare.style.transform="translate("+(2*basicTransformX)+"px,"+(2*basicTransformY)+"px)"
	farSquare.style.transform="translate("+(3*basicTransformX)+"px,"+(3*basicTransformY)+"px)"
}

var getRotatedZ=function(x,y,z,beta,gamma){
	return (z*Math.cos(beta*Math.PI/180)+y*Math.sin(beta*Math.PI/180))*Math.cos(gamma*Math.PI/180)-x*Math.sin(gamma*Math.PI/180)
}

if(!systemVar.isMobile){
	addEventListener("mousemove",function(event){
		deltaX=1-event.clientX*2/window.innerWidth
		deltaY=1-event.clientY*2/window.innerHeight
		render()
	})
}else{
	addEventListener("deviceorientation",function(event){
		deltaX=getRotatedZ(orientationMap[screen.orientation.angle][0][0],orientationMap[screen.orientation.angle][0][1],orientationMap[screen.orientation.angle][0][2],event.beta,event.gamma)
		deltaY=getRotatedZ(orientationMap[screen.orientation.angle][1][0],orientationMap[screen.orientation.angle][1][1],orientationMap[screen.orientation.angle][1][2],event.beta,event.gamma)
		render()
	})
}
addEventListener("resize",function(){
	render()
})