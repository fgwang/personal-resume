'use strict'

//移动设备简单兼容
function browserSize() {
const browserW = window.innerWidth;
const browserH = window.innerHeight;
if(browserW <= 700) {
	window.onload = function() {
		document.write("<html><body><p>此页面暂不支持移动设备，建议您在电脑上查看哦！<br/><a href='./personal.html' target='_blank'>如果不方便使用电脑访问，可以直接点击此链接</a></p></body></html>");
		document.close();
		}
	} else {
		setInterval(bgi, 5000);
	}
}

//背景图片切换
function bgi() {
	const imgs = [
				"./images/sea.jpg", 
				"./images/sky.jpg", 
				"./images/water.jpg", 
				"./images/home.jpg", 
				"./images/snow.jpg", 
				"./images/sun.jpg",
				"./images/city.jpg", 
				"./images/city2.jpg",
				];
	let index = parseInt(Math.random() * imgs.length);

	while(imgs.index == document.body.style.backgroundImage) {
		index = parseInt(Math.random() * imgs.length);
	}
	document.execCommand("backgroundImageCache", false, true);
	document.body.style.backgroundImage = `url(${imgs[index]})`;
}

browserSize();
