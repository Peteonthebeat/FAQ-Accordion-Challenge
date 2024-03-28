let questionOne = document.querySelector('#questionOne'); 
questionOne.addEventListener('click', function onClick(event){
            let answerOneElement = document.querySelector('#answerOne'); 
            let answerOneDisplay = answerOneElement.style.display;
            let iconOneElement = document.querySelector('#iconOne'); 

            //  FUNCTION ONE
            if (answerOneDisplay === 'none'){
                answerOneElement.style.display = 'block'; 
                iconOneElement.setAttribute('src', '/assets/images/icon-minus.svg'); 
            }   else {
                answerOneElement.style.display = 'none'; 
                iconOneElement.setAttribute('src', '/assets/images/icon-plus.svg')
            }
}); 

// QUESTION TWO
let questionTwo = document.querySelector('#questionTwo'); 
questionTwo.addEventListener('click', function onClick(event){
            let answerTwoElement = document.querySelector('#answerTwo'); 
            let answerTwoDisplay = answerTwoElement.style.display; 
            
             //  FUNCTION TWO
            let iconTwoElement = document.querySelector('#iconTwo'); 
            if (answerTwoDisplay === 'none'){
                answerTwoElement.style.display = 'block'; 
                iconTwoElement.setAttribute('src', '/assets/images/icon-minus.svg'); 
            }   else {
                answerTwoElement.style.display = 'none'; 
                iconTwoElement.setAttribute('src', '/assets/images/icon-plus.svg'); 
            }
})
// QUESTION THREE
let questionThree = document.querySelector('#questionThree'); 
questionThree.addEventListener('click', function onClick(event){
              let answerThreeElement = document.querySelector('#answerThree'); 
              let answerThreeDisplay = answerThree.style.display; 
              let iconThreeElement = document.querySelector('#iconThree'); 

              //  FUNCTION THREE
              if (answerThreeDisplay === 'none') {
                  answerThreeElement.style.display = 'block'; 
                  iconThreeElement.setAttribute('src', '/assets/images/icon-minus.svg'); 
              }   else {
                  answerThree.style.display = 'none'; 
                  iconThreeElement.setAttribute('src', '/assets/images/icon-plus.svg'); 
              }
})
// QUESTION FOUR
let questionFour = document.querySelector('#questionFour'); 
questionFour.addEventListener('click', function(event){
             let answerFourElement = document.querySelector('#answerFour'); 
             let answerFourDisplay = answerFourElement.style.display;
             let iconFourElement = document.querySelector('#iconFour'); 
             //  FUNCTION FOUR
             if (answerFourDisplay === 'none') {
                answerFourElement.style.display = 'block'; 
                iconFourElement.setAttribute('src', '/assets/images/icon-minus.svg'); 
             }  else {
                answerFourElement.style.display = 'none'; 
                iconFourElement.setAttribute('src', '/assets/images/icon-plus.svg'); 
             }
}); 
