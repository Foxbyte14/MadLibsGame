<!DOCTYPE html>
<html>
<!--  
 
     This is a mad libs game I made for a project
     on @KhanAcademy 

     made with JavaScript

     I will be adding it to my website soon.

     If you want to play it now go to:

     https://www.khanacademy.org/computer-programming/mad-libs/5821356050382848
    
 -->
    <head>
        <meta charset="utf-8" />
        <title>Mad Libs</title>

    </head>

    <body>

        <script>
            var libButton = document.getElementById('lib-button');
            var libIt = function () {
                var storyDiv = document.getElementById("story");

                var person = document.getElementById("person").value;

                var food = document.getElementById("food").value;

                var act = document.getElementById("act").value;

                var place = document.getElementById("place").value;

                var color = document.getElementById("color").value;

                var thing = document.getElementById("thing").value;

                var act2 = document.getElementById("act2").value;




                storyDiv.innerHTML = person + " ate a whole bowl of " + food + " befor he " + act + " all the way to " + place + " an bought a " + color + thing + " then " + act2 + " all the way back home. ";
            };
            libButton.addEventListener('click', libIt);



        </script>

    </body>

</html>
