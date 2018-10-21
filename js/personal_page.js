"use strict"
//联系方式悬浮显示微信二维码
const displayImg = document.getElementById("wx");
const targetE0 = document.getElementById("weixin0");
const targetE1 = document.getElementById("weixin1");
const targetE2 = document.getElementById("weixin2");


const footerBgc = document.getElementById("contact");
targetE0.onmouseover = function() {
	displayImg.style.display = "block";
	footerBgc.style.backgroundColor = "black"
};
targetE0.onmouseout = function() {
	displayImg.style.display = "none";
	footerBgc.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}

const emailHover = document.getElementById("email");
emailHover.onmouseover = function() {
	footerBgc.style.backgroundColor = "black"
};
emailHover.onmouseout = function() {
	footerBgc.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}

targetE1.onmouseover = function() {
	displayImg.style.display = "block";
};
targetE1.onmouseout = function() {
	displayImg.style.display = "none";
}

targetE2.onmouseover = function() {
	displayImg.style.display = "block";
};
targetE2.onmouseout = function() {
	displayImg.style.display = "none";
}