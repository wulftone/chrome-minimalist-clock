(function(){
    var days      = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months    = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        d         = new Date(),
        thisMonth = months[d.getMonth()],
        thisDay   = days[d.getDay()],
        date      = thisDay + ' ' + d.getDate() + ' ' + thisMonth,

        makeItTwoDigits = function(num) {
            if (num < 10)
                return '0' + num;

            return num;
        },

        setClock = function() {
            var d         = new Date(),
                hour      = makeItTwoDigits(d.getHours()),
                minute    = makeItTwoDigits(d.getMinutes()),
                time      = '<small>' + hour + '</small>' + minute,
                titleTime = hour + ':' + minute,
                timeEl    = document.getElementById('time');

            timeEl.innerHTML = time;
            document.title   = titleTime;
        };

    document.getElementById('date').innerHTML = date;
    setInterval(setClock, 1000);
    setClock();
})();
