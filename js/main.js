var ul;
var items;
var imgWidth;
var imgHeight;
var imgNumber;
var prev;
var next;
var currentPosition = 0;
var currentImage = 0;

function init () {
	ul = document.getElementById("slider");
	items = ul.children;
	imgNumber = items.length;
	imgWidth = items[0].children[0].offsetWidth;
	// set ul width as the total width of all images in the slider
	ul.style.width = parseInt(imgWidth * imgNumber) + "px";

}

function slider() {

}

function animate() {
	var start = new Date;
	var id = setInterval(function() {
		var timePassed = new Date - start;
		var progress = timePassed / opts.duration;
		if (progress > 1) {
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if (progress == 1) {
			progress = 1;
		}
		var delta = opts.delta(progress);
		opts.step(delta);
		if (progress == 1) {
			clearInterval(id);
			opts.callback();
		} 
	}, opts.delay || 17);
}

function slideTo(imageToGo) {
	var direction;
	var numOfImageToGo = Math.abs(imageToGo - currentImage);
	direction = currentImage > imageToGo ? 1 : -1;
	currentPosition = -1 * currentImage * imgWidth;
	var opts = {
		duration: 1000,
		delta: function(p) {
			return p;
		},
		step: function(delta) {
			ul.style.left = parseInt(currentPosition + direction * delta * imgWidth * numOfImageToGo) + "px";
		},
		callback: function () {
			currentPosition = imageToGo
		}
	}
	animate(opts);
}

function prev() {
	alert("<")
	if (currentImage == 0) {
		slideTo(imgNumber - 1);
	} else {
		slideTo(currentImage - 1);
	}
}

function next() {
	alert(">")
	if (currentImage == imgNumber - 1) {
		slideTo(0);
	} else {
		slideTo(currentImage + 1);
	}
}

