const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

 let passwordOneEl = document.getElementById("password1-el");
 let passwordTwoEl = document.getElementById("password2-el");

 // copy functionality
 let copyPasswordOne = document.getElementById("copyButton1");
 let copyPasswordTwo = document.getElementById("copyButton2");

//  console.log(passwordOneEl);
//  console.log(passwordTwoEl);

 function generateRandomPassword(){
    // console.log("clicked");
    let passwordOneArray = [];
    let passwordTwoArray = [];
    for(let i=1; i <= 15; i++){
        let randomPasswordOne = Math.floor(Math.random() * characters.length);
        passwordOneArray = passwordOneArray.concat(characters[randomPasswordOne]);
        // console.log(characters[randomPasswordOne]);

        let randomPasswordTwo = Math.floor(Math.random() * characters.length);
        passwordTwoArray = passwordTwoArray.concat(characters[randomPasswordTwo]);
        // console.log(characters[randomPasswordTwo]);
    }
    passwordOneEl.value =  passwordOneArray.join(' ');
    // console.log(passwordOneArray.join(' '));

    passwordTwoEl.value =  passwordTwoArray.join(' ');
    // console.log(passwordTwoArray.join(' '));
 }


 function copyFirstPassword(){
    copyPasswordOne.onclick = function() {
          let text = passwordOneEl.value;
          navigator.clipboard.writeText(text)
            .then(() => {
              alert('Text copied to clipboard');
            })
            .catch(err => {
              alert('Error in copying text: ', err);
            });
        }
 }
 
 function copySecondPassword(){
    copyPasswordTwo.onclick = function() {
          let text = passwordTwoEl.value;
          navigator.clipboard.writeText(text)
            .then(() => {
              alert('Text copied to clipboard');
            })
            .catch(err => {
              alert('Error in copying text: ', err);
            });
        }
 }
 