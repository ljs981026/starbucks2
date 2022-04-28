var cnt = 0;
        var timerID = 0;
        var $fish = null;
        var $score = null;
        var play = false;
        
        $(document).ready(function(){
            init();
            initEvent();
        });
        function init(){
            $fish = $("#fish");
            $score = $("#score");
        }
        function initEvent(){
            $("#start").click(function(){
                startGame();
            });
            $("#fish").click(function(){
                addScore();
            });
        }
        function startGame(){
            if(play == false) {
                checkEndGame();
                play = true;
                timerID = setInterval(function(){
                    moveFish();
                }, 1000)
            }
        }
        function addScore(){    
            if(play == true) {
                cnt++;
                $score.html(cnt);
            }
        }
        function checkEndGame(){
            setTimeout(function(){
                play = false;
                clearTimeout(timerID);
                alert("게임 종료");
                cnt = 0;
                $score.html(cnt);
            }, 10000);
        }
        function moveFish() {
            var x = parseInt(Math.random() * 480);
            var y = parseInt(Math.random() * 330);

            $fish.css ({
                left: x,
                top: y
            });
        }