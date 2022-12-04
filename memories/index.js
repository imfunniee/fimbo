function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    $("body").css({"overflow-y":"hidden"});
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    $("body").css({"overflow-y":"auto"});
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    $("body").css({"overflow-y":"hidden"});
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    $("body").css({"overflow-y":"auto"});
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    $("body").css({"overflow-y":"hidden"});
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    $("body").css({"overflow-y":"auto"});
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);

// Countdown timer

function formatTime(ms) {
  var hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return hours + "hr " + minutes + "m " + seconds + "s";
}

function reloadEndTime(callback) {
  const url = "https://opensheet.elk.sh/1BooGWE3g1zshKoVlAM_JjEI6VzbYtEYJyODVHDrQHWM/Sheet1";
  const request = new XMLHttpRequest();
  request.ontimeout = () => {
    console.error(`The request for ${url} timed out`);
  };
  request.onerror = () => {
    console.error(`Request error for ${url}`);
  }
  request.onload = () => {
    console.info(request.responseText);
    const obj = JSON.parse(request.responseText);
    endHour = parseInt(obj[0]["hh"]);
    endMinute = parseInt(obj[0]["mm"]);
    console.info(`Reloaded end time: ${endHour}:${endMinute}`)
  };
  request.open("GET", url, true);
  //request.timeout = timeout;
  request.send(null);
}

reloadEndTime();
setInterval(reloadEndTime, 5000);

function updateTimer(ms, started) {
  var timer = document.getElementById("timer-time");
  var timersection = document.getElementById("timer");
  // timersection visible if game started
  if (started) {
    timersection.style.visibility = "visible";
  }
  else {
    timersection.style.visibility = "hidden";
  }
  // time up if past endtime
  if (ms > 0) {
    timer.innerHTML = formatTime(ms);
  }
  else {
    timer.innerHTML = "Time's up !";
  }
}


updateTimer(1000 * 60 * 60);  // 1 hour
var timerInterval = setInterval(function() {
  const endSecond = 0;
  var now = new Date();
  var hour = (now.getUTCHours() + 8) % 24;
  var minute = now.getUTCMinutes();
  var second = now.getUTCSeconds();
  var ms = (((endHour - hour) * 60 + (endMinute - minute)) * 60 + endSecond - second) * 1000;
  var started = (endHour >= 0);
  updateTimer(ms, started);
  // if (ms < 0) {
  //   clearInterval(timerInterval);
  // }
}, 1000);


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("hiddenimage");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.title;
  $("body").css({"overflow-y":"hidden"});
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $("body").css({"overflow-y":"auto"});
}