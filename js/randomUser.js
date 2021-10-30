

let output= "";
const btn = document.querySelector('.button');

//Voice message that says the users full name and age.
const message = function(voiceMessage){
let msg = new SpeechSynthesisUtterance();
msg.text = voiceMessage;
window.speechSynthesis.speak(msg)

}

const getData = function(event){
  event.preventDefault();
fetch('https://randomuser.me/api/')
  .then(function(response){
    if (!response.ok) {
      throw error =  document.querySelector('h2').innerHTML = "Server not Found"
    }
    return response.json();
  })
  .then(function(data){
    output = 
    ` 
    <div class= "image"><img src= "${data.results[0].picture.medium}" alt= "User Photo"></div>
    <h1>${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}</h1>
    <div class= "info">
    <ul>
    <li><strong>Gender:</strong> ${data.results[0].gender}</li>
    <li><strong>BirthDate:</strong> ${data.results[0].dob.date.slice(0,10)}</li>
    <li><strong>Address:</strong> ${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, 
    ${data.results[0].location.state} ${data.results[0].location.country} ${data.results[0].location.postcode} 
    </li>
    <li><strong>Email Address:</strong> <a href="${data.results[0].email}">${data.results[0].email}</a></li>
    </ul>
    </div>
    `
    document.querySelector('.result').innerHTML = output;
    
    //windows voice Message
    const sentence = `My name is ${data.results[0].name.first} ${data.results[0].name.last} and i am ${data.results[0].dob.age} years old`;    
    message(sentence);

    //Background color depends if the user is male or female.
    const bcolor = document.querySelector('.image')
    if(data.results[0].gender === "male"){
      bcolor.className = "mcolor"
    }
    else{
      bcolor.className = "fcolor"
    }
  })
  .catch(function(err){
    
  });
}
//A button to generate New user
btn.addEventListener('click', getData);





  


