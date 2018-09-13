$(function() {
  "use strict";

  var
    defaultTime = 180,
    time = defaultTime,
    checkTimer = false,
    minute,
    second,
    $timer = $("#timer"),
    $start = $("#start"),
    $stop = $("#stop"),
    $reset = $("#reset"),
    $alarm = $("#alarm");

  $timer.text(setTime());

  $start.on("click", function() {
    if (!checkTimer) {
      checkTimer = setInterval(function() {
        time--;
        $timer.text(setTime());

        if (time === 0) {
          $timer.text("Time UP!");
          $alarm.trigger("play");
          clearInterval(checkTimer);
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
    $timer.text(setTime());
    checkTimer = false;
  });

  function setTime() {
    minute = ("0" + Math.floor(time / 60)).slice(-2);
    second = ("0" + time % 60).slice(-2);
    return minute + ":" + second;
  }
});