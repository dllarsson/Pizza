

function StartTimer(){
    if (sessionStorage.getItem('startTime') == null){
        var date = new Date();
        startTime = date.getTime();
        sessionStorage.setItem('startTime', startTime);
    }
}

function CalculateTimeSpentOnWebsite(){
    
    var date = new Date();
    let currentTime = date.getTime();
    spentTime = currentTime - sessionStorage.getItem('startTime');
    sessionStorage.setItem('spentTime', spentTime);
    return spentTime;
}

function PrintTime(){
    var minute;
    var second;
    window.setInterval(function(){
        var spentTime = CalculateTimeSpentOnWebsite();
        minute = Math.floor((spentTime/1000)/60);
        second = Math.floor(spentTime/1000);
        if (second >= 60){
            second -= (minute * 60);
        }
        var p = document.getElementById("timer");
        p.textContent = "Site timer: " +  minute + " minutes: " + second + " seconds";
        
        counter++;
      }, 1000);
}

