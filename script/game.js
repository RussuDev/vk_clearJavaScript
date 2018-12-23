
var cvs = document.getElementById('canvas') //загрузка канваса
var ctx = cvs.getContext('2d') //определение контекста (2D,3D)

//////переменные/////
//расстояние между трубами
var gat = 90 
//координаты птицы
var xPos = 10 
var yPos =150
//гравитация
var grav = 1
//создание объектов класа image
var bird = new Image() //объект птица
var bg = new Image() //объект задник
var fg = new Image() //объект передник
var pipeUp = new Image() //объект труба верх
var pipeBottom = new Image() //объект труба низ
//создание блоков
var pipe=[]
pipe[0]={
	x:cvs.width,
	y:0
}
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
	yPos-=40
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
	pipe[i].x--
	//добавление новых труб
	if(pipe[i].x==700){
		pipe.push({
			x:cvs.width,
			y:Math.floor(Math.random()*pipeUp.height)-pipeUp.height
		})
	}
}
	//*********************закончить ритовать ртубы
	ctx.drawImage(fg,0,cvs.height-fg.height,300,118)//нарисовать пердник
	ctx.drawImage(fg,300,cvs.height-fg.height,300,118)//нарисовать пердник
	ctx.drawImage(fg,600,cvs.height-fg.height,300,118)//нарисовать пердник
	ctx.drawImage(fg,900,cvs.height-fg.height,300,118)//нарисовать пердник
	ctx.drawImage(bird,xPos,yPos)//нарисовать птицу

	yPos+=grav //падение птицы
	requestAnimationFrame(draw)//цикл анимации
}

pipeBottom.onload=draw //если загрузилась последняя картинка, начинаем отрисовку