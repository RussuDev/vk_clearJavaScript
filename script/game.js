
var cvs = document.getElementById('canvas') //загрузка канваса
var ctx = cvs.getContext('2d') //определение контекста (2D,3D)

//создание объектов класа image
var bird = new Image() //объект птица
var bg = new Image() //объект задник
var fg = new Image() //объект передник
var pipeUp = new Image() //объект труба верх
var pipeBottom = new Image() //объект труба низ
//загрузка изображений
bird.src = "img/bird.png"
bg.src = "img/bg.png"
fg.src = "img/fg.png"
pipeUp.src = "img/pipeUp.png"
pipeBottom.src = "img/pipeBottom.png"
//рисовать объекты
function draw() {
	ctx.drawImage(bg,0,0)//нарисовать фон
}

pipeBottom.onload=draw //если загрузилась последняя картинка, начинаем отрисовку