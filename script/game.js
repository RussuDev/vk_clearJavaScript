
var cvs = document.getElementById('canvas') //загрузка канваса
var ctx = cvs.getContext('2d') //определение контекста (2D,3D)

//////переменные/////
//очки
var score=0
//расстояние между трубами
var gat = 150 
//координаты птицы
var xPos = 10 
var yPos =150
//гравитация
var grav = 1
//создание объектов класа audio
var fly = new Audio()
var score_audio = new Audio()
//создание объектов класа image
var bird = new Image() //объект птица
var bg = new Image() //объект задник
var fg = new Image() //объект передник
var pipeUp = new Image() //объект труба верх
var pipeBottom = new Image() //объект труба низ
// создание моассива труб
var pipe=[]
pipe[0]={
	x:cvs.width,
	y:0
}
//загрузка звуков
fly.src="audio/fly.mp3"
score_audio.src="audio/score.mp3"
//загрузка изображений
bird.src = "img/bird.png"//объект птица
bg.src = "img/bg.png"//объект задник
fg.src = "img/fg.png"//объект передник
pipeUp.src = "img/pipeUp.png"//объект труба верх
pipeBottom.src = "img/pipeBottom.png"//объект труба низ
//Отслеживание нажатий
document.addEventListener("keydown",moveUp)
//нажата кнопка вверх
function moveUp(){
	yPos-=25
	fly.pause()
	fly.play()
}
//рисовать объекты
function draw() {
	ctx.drawImage(bg,0,0)//нарисовать фон
	ctx.drawImage(bg,220,0)//нарисовать фон
	ctx.drawImage(bg,440,0)//нарисовать фон
	ctx.drawImage(bg,660,0)//нарисовать фон
	ctx.drawImage(bg,880,0)//нарисовать фон
	//*********************наритовать ртубы
	for(var i=0;i<pipe.length;i++){
	ctx.drawImage(pipeUp,pipe[i].x,pipe[i].y)//нарисовать верх труба
	ctx.drawImage(pipeBottom,pipe[i].x,pipe[i].y+pipeUp.height+gat)//нарисовать низ труба
	pipe[i].x-=1//скорость труб
	//добавление новых труб
	if(pipe[i].x==700){
		pipe.push({
			x:cvs.width,
			y:Math.floor(Math.random()*pipeUp.height)-pipeUp.height
		})
	}
	//*********************проверка столкновения птицы
	if (xPos+bird.width>=pipe[i].x 
		&& xPos<=pipe[i].x+pipeUp.width
		&& (yPos<=pipe[i].y+pipeUp.height
			|| yPos+bird.height>=pipe[i].y+pipeUp.height+gat)
		|| yPos+bird.height>=cvs.height-fg.height) {
		location.reload()
	}
	//*********************проверка столкновения птицы
	if (pipe[i].x==5) {
		score++
		score_audio.play()
	}
}
	//*********************закончить ритовать ртубы
	ctx.drawImage(bird,xPos,yPos)//нарисовать птицу
	ctx.drawImage(fg,0,cvs.height-fg.height,300,118)//нарисовать пердник
	ctx.drawImage(fg,300,cvs.height-fg.height,300,118)//нарисовать пердник
	ctx.drawImage(fg,600,cvs.height-fg.height,300,118)//нарисовать пердник
	ctx.drawImage(fg,900,cvs.height-fg.height,300,118)//нарисовать пердник
	
	//отображение очков
	ctx.fileStyle="#000"
	ctx.font="24px Verdana"
	ctx.fillText("Очков: "+score,10,cvs.height-20)

	yPos+=grav //падение птицы

	requestAnimationFrame(draw)//цикл анимации
}

pipeBottom.onload=draw //если загрузилась последняя картинка, начинаем отрисовку