(function(){
    var days      = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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
                time      = makeItTwoDigits('<small>' + d.getHours()) + '</small>' + makeItTwoDigits(d.getMinutes()),
                timeEl    = document.getElementById('time'),
                titleTime = time.replace('<small>','').replace('</small>',':');

            timeEl.innerHTML = time;
            document.title   = titleTime;
        };

    document.getElementById('date').innerHTML = date;
    setInterval(setClock, 1000);
    setClock();
})();
