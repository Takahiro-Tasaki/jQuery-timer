$(function() {
  "use strict";

  var
    defaultTime = 180,
    time = defaultTime,
    checkTimer = false,
    minute,
    second,
    showTime,
    $timer = $("#timer"),
    $start = $("#start"),
    $stop = $("#stop"),
    $reset = $("#reset");

  $timer.text(setTime(time));

  $start.on("click", function() {
    if (!checkTimer) {
      checkTimer = setInterval(function() {
        if (time === defaultTime) {
          time--;
        }
        if (time === 0) {
          $timer.text("Time UP!");
          clearInterval(checkTimer);
        } else {
          $timer.text(setTime(time));
          time--;
        }
      }, 1000);
    }
  });

  $stop.on("click", function() {
    clearInterval(checkTimer);
    checkTimer = false;
  });

  $reset.on("click", function() {
    clearInterval(checkTimer);
    time = defaultTime;
    $timer.text(setTime(time));
    checkTimer = false;
  });

  function setTime(nowTime) {
    minute = ("0" + Math.floor(time / 60)).slice(-2);
    second = ("0" + time % 60).slice(-2);
    showTime = minute + ":" + second
    return showTime;
  }
});