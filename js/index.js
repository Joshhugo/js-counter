function addCount() {
	var num = document.querySelector("#number").innerHTML;
	if (num >= 50) {
		let addNum = 50;
		document.querySelector("#number").innerHTML = addNum;
	} else {
		let addNum = ++num;
		document.querySelector("#number").innerHTML = addNum;
	}
}

function lowerCount() {
	var num = document.querySelector("#number").innerHTML;
	if (num <= 0) {
		let lowerNum = 0;
		document.querySelector("#number").innerHTML = lowerNum;
	} else {
		let lowerNum = --num;
		document.querySelector("#number").innerHTML = lowerNum;
	}
}
