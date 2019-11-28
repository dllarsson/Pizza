

    function CheckTheme(){
        if (localStorage == null){

        }
        else{
            SelectTheme(localStorage.getItem("choice"));
        }
    }
    function SelectTheme(val){
        localStorage.setItem("choice", val);
        var head = document.getElementsByTagName('HEAD')[0];  
        var link = document.createElement('link'); 
        link.rel = 'stylesheet';  
        link.type = 'text/css'; 
        link.href = 'clear.css';
        head.appendChild(link);
        if (val == 1){
            link.href='style.css'
        }
        else if (val == 2){
            link.href='style2.css'
        }
        else if (val == 3){
            link.href='style3.css'
        }
        head.appendChild(link);  
    }

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
          }, 1000);
    }
    StartTimer();
    PrintTime();

    function Animation() {
        var elem = document.getElementById("animate");
        var pos = 200;
        var id = setInterval(frame, 10);
        function frame() {
          if (pos == 100) {
            clearInterval(id);
          } else {
            pos--;
            elem.style.left = pos + 'px';
          }
        }
      }
      
