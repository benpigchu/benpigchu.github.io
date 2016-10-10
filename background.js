var systemVar={}

systemVar.isMobile=(navigator.userAgent.match(/Android/i)?true:false)||(navigator.userAgent.match(/BlackBerry/i)?true:false)||(navigator.userAgent.match(/iPhone|iPad|iPod/i)?true:false)||(navigator.userAgent.match(/IEMobile/i)?true:false)

var farSquare=document.getElementById("farSquare")
var midSquare=document.getElementById("midSquare")
var nearSquare=document.getElementById("nearSquare")

var render=function(basicTransformX,basicTransformY){
	nearSquare.style.transform="translate("+basicTransformX+"px,"+basicTransformY+"px)"
	midSquare.style.transform="translate("+(2*basicTransformX)+"px,"+(2*basicTransformY)+"px)"
	farSquare.style.transform="translate("+(3*basicTransformX)+"px,"+(3*basicTransformY)+"px)"
}

addEventListener("mousemove",function(event){
	render(0.05*(window.innerWidth/2-event.clientX),0.05*(window.innerHeight/2-event.clientY))
})

if(!systemVar.isMobile){
	addEventListener("resize",function(){
		render(0,0)
	})
}