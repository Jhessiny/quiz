let pos = 0, test, test_status, question, choices, chA, chB, chC, correct = 0;
let iniciar = _('iniciar')
     function _(x){
         return document.getElementById(x)
     }

     function renderQuestion(){
         temporizador();
          _('test_status').style.backgroundColor = 'rgba(4, 38, 58, 0.6)';
         iniciar.innerHTML = '';
         test = _('test');
         if(pos >= questions.length){
            test.innerHTML = "<h3>You've got " + correct + " of " + questions.length + " correct answers</h3>";
            _("test_status").innerHTML = "Test completed.";
            pos = 0;
            correct = 0;
            return false;
         }
         _('test_status').innerHTML = "Question " + (pos+1) + " of " + questions.length ;
         question = questions[pos][0];
         chA = questions[pos][1];
         chB = questions[pos][2];
         chC = questions[pos][3];
         test.innerHTML = "<h3 class='question'>"+ question + '</h3>';
         test.innerHTML += "<input id='A' type='radio' name='choices' value='A'><label for='A'>"+ chA + "</label><br>";
         test.innerHTML += "<input id='B' type='radio' name='choices' value='B'><label for='B'>" + chB + "</label><br>";
         test.innerHTML += "<input id='C' type='radio' name='choices' value='C'><label for='C'>" + chC + "</label><br><br>";
         test.innerHTML += "<button onclick='checkAnswer()'> Next >> </button>";
     }

     function checkAnswer(){
         choices = document.getElementsByName("choices");
         for (let i = 0; i < choices.length; i++){
             if(choices[i].checked){
                 choice = choices[i].value;
             }
         }
         if(choice == questions[pos][4]){
             correct++;
         }
         pos++;
            renderQuestion();
         
     }

     function temporizador(){
        let min = 0;
        let sec = 5;
        let intervalo = setInterval(function() {
            if(min === 0 && sec === 0) {
                _('temporizador').innerHTML = 0;
                clearInterval(intervalo);
            } else if (min || sec > 0) {
                _('temporizador').innerHTML = sec < 10 ? min + ':0'+ sec : min + ':' + sec;
                if(sec === 1 || sec === 0) {
                    sec = 60 ;
                    min--
                }
            } 
            sec--;     
        }, 1000);
     }

     iniciar.addEventListener('click', renderQuestion, false)
     window.addEventListener("load", ()=> {
         _('iniciar').innerHTML = '<button> Iniciar </button>'
         _('test_status').style.backgroundColor = 'transparent';
        });