function store(){
    let name = document.getElementById("name");
    let pw = document.getElementById("pw");

    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
  
    let numbers = /[0-9]/g;
    if(name.value.length=0){
        alert("please fill email ");
    }
    else if(pw.value.length=0){
            alert("please fill password");
    }
    else if(name.value.length=0 && pw.value.length=0){
        alert("please fill both"); 
    }

    
}