//Hey Tas 

/*$(document).ready(function () {
    var myDelay = 75,
        thisDelay = 100,
        start = Date.now(),
        beatCount = 0;

    (function startTimer() {
       
        setTimeout(function () {
            var count = beatCount++;

            if (count % 2 === 0) {
                $(".terminal").removeClass("hide");
            }

            if (count % 14) {
                $(".terminal").addClass("hide");
            }
            var actual = Date.now() - start;
            thisDelay = myDelay - (actual - myDelay);
            start = Date.now();
            startTimer();
        }, thisDelay);
    })();
});*/