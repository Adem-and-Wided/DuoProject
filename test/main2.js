 
 
 


function signup() {
    var username = $("#user-input").val();
    var password = $("#pass-input").val();
    
    if (localStorage.getItem(username)) {
      alert('Username already exists. Choose another one.');
      return;
    } 
  
    
    localStorage.setItem(username, JSON.stringify({ username, password }));
    alert('Welcome');
  }

  function login() {
    var username = $('#user-in').val();
    var password = $('#pass-in').val();
  
  
    var userData = localStorage.getItem(username);
  
    if (userData) {
      var storedPassword = JSON.parse(userData).password;
   
  
      if (password === storedPassword) {
       alert('Login successful!');
      window.location.replace("./write.html")
      } else {
        alert('Incorrect password. Please try again.');
      }
    } else {
      alert('Username not found. Please sign up.');
    }
  }

//   sign in sign up switch

function signinPage() {
    $(".container").css("display","none")
    $(".container2").css("display","block")
    
}

function signupPage() {
    $(".container2").css("display","none")
    $(".container").css("display","block")
    
}
  
  
  