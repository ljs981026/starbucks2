var $fish = null;
var step = 50;
var timerID = 0;

        $(document).ready(function(){
            init();
            initEvent();
        });

        function init(){
            $fish = $("#fish");
        }

        function initEvent(){
            $("#btnStart").click(function(){
                start();
            });
            $("#btnStop").click(function(){
                stop();
            });
        }

        function start(){
            if(timerID == 0){
                timerID = setInterval(function(){
                    moveFish();
                }, 100);
            }
        }

        function stop(){
            clearInterval(timerID);
            timerID = 0;
        }

        function moveFish(){
            var x = $fish.position().left + step;
            if(x >= 430){
                $fish.attr("src", "images/fish2.png");
                step = -50;
            }

            if(x < 50){
                $fish.attr("src", "images/fish1.png");
                step = 50;
            }
            $fish.css("left", x);
        }