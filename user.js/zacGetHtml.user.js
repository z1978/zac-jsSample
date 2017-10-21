// ==UserScript==
// @name        zacGetHtml
// @namespace
// @description zacGetHtml
// @includes    *
// @excludes
// @match       *://www.yahoo.co.jp/*
/* load jQuery */
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// ==/UserScript==
// --------------------------------------------------
// jquery利用 START
// --------------------------------------------------
var load, execute, loadAndExecute;
load = function (a, b, c) {
    var d;
    d = document.createElement("script"),
      d.setAttribute("src", a),
      b != null && d.addEventListener("load", b),
      c != null && d.addEventListener("error", c),
      document.body.appendChild(d);
    return d
  },
  execute = function (a) {
    var b, c;
    typeof a == "function" ? b = "(" + a + ")();" : b = a,
      c = document.createElement("script"),
      c.textContent = b,
      document.body.appendChild(c);
    return c
  },
  loadAndExecute = function (a, b) {
    return load(a, function () {
      return execute(b)
    })
  };
// --------------------------------------------------
// jquery利用 END
// --------------------------------------------------
  // 需要使用jquery的代码 START
  loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js", function () {
    $(document).ready(function () {
      console.log( "ready2!" );
      alert('jeuery ready!');
      var $work = $('<div></div>');
      var cpn = $work.find("#" + $(this).attr('tab'));
       if(cpn[0]){
        var node = cpn.clone().children();
       }

    });
  });
  // 需要使用jquery的代码 END
var new_element_N = document.createElement("style");
new_element_N.innerHTML = '#drager {' + '   position: fixed;' + '   width: 35px;' + '   height: 35px;' + '   background-color: rgba(0, 0, 0, 0.2);' + '   z-index: 10000;' + '   cursor: pointer;' + '   top: 0px;' + '   left: 0px;' + '   border-radius: 30%;' + '   padding: 6px;' + ' }' + ' ' + ' #drager>div {' + '   border-radius: 50%;' + '   width: 100%;' + '   height: 100%;' + '   background-color: rgba(0, 0, 0, 0.3);' + '   transition: all 0.2s;' + '  -webkit-transition: all 0.2s;' + '  -moz-transition: all 0.2s;' + '  -o-transition: all 0.2s;' + ' }' + ' #drager:hover>div{' + '   background-color: rgba(0, 0, 0, 0.6);' + ' } ';
document.body.appendChild(new_element_N);
new_element_N = document.createElement('div');
new_element_N.setAttribute("id", "drager");
new_element_N.style.top = "100px";
new_element_N.style.left = "100px";
new_element_N.innerHTML = ' <div></div>';
document.body.appendChild(new_element_N);
//
//
var posX;
var posY;
var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;
var fdiv = document.getElementById("drager");
fdiv.onmousedown = function (e) {
  screenWidth = document.documentElement.clientWidth;
  screenHeight = document.documentElement.clientHeight;
  if (!e) {
    e = window.event;
  } //IE
  posX = e.clientX - parseInt(fdiv.style.left);
  posY = e.clientY - parseInt(fdiv.style.top);
  document.onmousemove = mousemove;
}
document.onmouseup = function () //释放时自动贴到最近位置
{
  document.onmousemove = null;
  if ((parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) / 2) <= (screenHeight / 2)) { //在上半部分
    if ((parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2) <= (screenWidth / 2)) { //在左半部分
      if ((parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) / 2) <= (parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2)) { //靠近上方
        fdiv.style.top = "0px";
      } else { //靠近左边
        fdiv.style.left = "0px";
      }
    } else { //在右半部分
      if ((parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) / 2) <= (screenWidth - (parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2))) { //靠近上方
        fdiv.style.top = "0px";
      } else { //靠近右边
        fdiv.style.left = (screenWidth - parseInt(fdiv.clientWidth)) + "px";
      }
    }
  } else { //下半部分
    if ((parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2) <= (screenWidth / 2)) { //在左半部分
      if ((screenHeight - (parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) / 2)) <= (parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2)) { //靠近下方
        fdiv.style.top = (screenHeight - parseInt(fdiv.clientHeight)) + "px";
      } else { //靠近左边
        fdiv.style.left = "0px";
      }
    } else { //在右半部分
      if ((screenHeight - (parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) / 2)) <= (screenWidth - (parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2))) { //靠近上方
        fdiv.style.top = (screenHeight - parseInt(fdiv.clientHeight)) + "px";
      } else { //靠近右边
        fdiv.style.left = (screenWidth - parseInt(fdiv.clientWidth)) + "px";
      }
    }
  }
}

function mousemove(ev) {
  if (ev == null) {
    ev = window.event;
  } //IE
  if ((ev.clientY - posY) <= 0) { //超过顶部
    fdiv.style.top = "0px";
  } else if ((ev.clientY - posY) > (screenHeight - parseInt(fdiv.clientHeight))) { //超过底部
    fdiv.style.top = (screenHeight - parseInt(fdiv.clientHeight)) + "px";
  } else {
    fdiv.style.top = (ev.clientY - posY) + "px";
  }
  if ((ev.clientX - posX) <= 0) { //超过左边
    fdiv.style.left = "0px";
  } else if ((ev.clientX - posX) > (screenWidth - parseInt(fdiv.clientWidth))) { //超过右边
    fdiv.style.left = (screenWidth - parseInt(fdiv.clientWidth)) + "px";
  } else {
    fdiv.style.left = (ev.clientX - posX) + "px";
  }
  // console.log( posX +" "+ fdiv.style.left);
}
window.onload = window.onresize = function () { //窗口大小改变事件
  screenWidth = document.documentElement.clientWidth;
  screenHeight = document.documentElement.clientHeight;
  if ((parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight)) > screenHeight) { //窗口改变适应超出的部分
    fdiv.style.top = (screenHeight - parseInt(fdiv.clientHeight)) + "px";
  }
  if ((parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth)) > screenWidth) { //窗口改变适应超出的部分
    fdiv.style.left = (screenWidth - parseInt(fdiv.clientWidth)) + "px";
  }
  document.onmouseup.apply()
};
fdiv.addEventListener('touchstart', fdiv.onmousedown, false);
fdiv.addEventListener('touchmove', function (event) {
  // 如果这个元素的位置内只有一个手指的话
  if (event.targetTouches.length == 1) {　　　　
    event.preventDefault(); // 阻止浏览器默认事件，重要
    var touch = event.targetTouches[0];
    if ((touch.pageY) <= 0) { //超过顶部
      fdiv.style.top = "0px";
    } else if (touch.pageY > (screenHeight - parseInt(fdiv.clientHeight))) { //超过底部
      fdiv.style.top = (screenHeight - parseInt(fdiv.clientHeight)) + "px";
    } else {
      fdiv.style.top = (touch.pageY - parseInt(fdiv.clientHeight) / 2) + "px";
    }
    if (touch.pageX <= 0) { //超过左边
      fdiv.style.left = "0px";
    } else if (touch.pageX > (screenWidth - parseInt(fdiv.clientWidth))) { //超过右边
      fdiv.style.left = (screenWidth - parseInt(fdiv.clientWidth)) + "px";
    } else {
      fdiv.style.left = (touch.pageX - parseInt(fdiv.clientWidth) / 2) + "px";
    }
  }
}, false);
fdiv.addEventListener('touchend', document.onmouseup, false);
fdiv.ondblclick = function () { //双击事件可能在手机端浏览器会与网页缩放事件冲突
  alert("发挥你们的想象力吧");





  //var doc2 = document.getElementById("mhi1st");
  var doc2 = document.getElementById("container");
  if (doc2 == 'undefined' || doc2 == null) {
    alert('undefined or null');
    //writeToLocal("hoge.txt", "foo\n");
    //writeToLocal('hogetest.txt', 'これはJavaScriptが作成したファイルだよ！\n');
    //handleDownload();
    // 新規ファイル作成
    var href = "data:application/octet-stream," + encodeURIComponent("value");
    this.setAttribute("href", href);
  } else {
    alert(doc2.innerHTML);
    writeFile('/Users/zhangningbo/OneDrive/develop/JavaScript/user.js/testout.txt', doc2.innerHTML);
  };
}