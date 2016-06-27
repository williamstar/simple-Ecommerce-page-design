var cX = 0;
var cY = 0;
var mX = 0;
var mY = 0;
var load = false;
var matrixWidth = 100;
var matrixHeight = 100;
var imgs = ['./mac1.jpg', './mac2.jpg', './mac3.jpg', './mac4.jpg'];


document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        console.log('start');
        initApplication();
    }
};


function initApplication() {

    var parent = document.querySelector('.imgBox');
    for (var i = 0; i < imgs.length; i++) {
        var node = document.createElement("img");
        node.src = imgs[i];
        node.className = 'img-list';
        node.setAttribute('data-id', i);
        node.style.width = 50 + 'px';
        node.style.height = 50 + 'px';
        parent.appendChild(node);
    }

    document.querySelector('.imgBox').addEventListener('click', function (e) {
        var id = e.target.getAttribute('data-id');
        replaceImg(imgs[id]);
    });

    document.querySelector('.main-picture-box').addEventListener('mousemove', function (e) {
        var cobj = { x: e.clientX, y: e.clientY };
        var iobj = getPosition(e.target);
        moveP(cobj, iobj);
    }, false);

    document.querySelector('.main-picture-box').addEventListener('click', function (e) {
        var obj = document.querySelector('.main-big-box');
        if (!load) {
            obj.style.display = 'inline-block';
            load = true;
        } else {
            console.log('>');
            obj.style.visibility = 'visible';
        }
    }, false);

    document.querySelector('.main-picture-box').addEventListener('mouseleave', function (e) {
        var obj = document.querySelector('.main-big-box').style.visibility = 'hidden';

    }, false);

}


function moveP(cobj, iobj) {
    var obj = document.querySelector('.big-picture');
    var disX = cobj.x - iobj.x;
    var disY = cobj.y - iobj.y;
    if (disX > 80 && disX < 320) {
        obj.style.backgroundPositionX = -2.5 * (disX - 80) + 'px';
    }

    if (disY > 80 && disY < 320) {
        obj.style.backgroundPositionY = -2.5 * (disY - 80) + 'px';
    }
}


function getPosition(e) {
    return { x: getRelativeX(e), y: getRelativeY(e) };
}


function getRelativeX(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft - document.body.scrollLeft;
}

function getRelativeY(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop - document.body.scrollTop;
}


function replaceImg(ImgName) {
    document.querySelector('.main-picture').src = ImgName;
    document.querySelector('.big-picture').style.backgroundImage = 'url(' + ImgName + ')';
}


function minusOne() {
    var v = parseInt(document.querySelector('#num').value);
    if(v <= 0){
        return;
    }
    document.querySelector('#num').value = v - 1;
}

function addOne() {
    document.querySelector('#num').value = parseInt(document.querySelector('#num').value) + 1;
}