
//let message = "Welcome to League of Legends";
//console.log(message);
//document.writeln("<h1>"+message+"</h1>");

function getData(form){

    var formData = new FormData(form);
    let message;
    const messagesDiv = document.getElementById("messages");

    for(var pair of formData.entries()){
        console.log(pair[0]+ ": " + pair[1])  
        if(pair[1]<=0 || pair[1] >= 120){
            message = "ERROR, Ingrese valor valido.";
            console.log(message);
            messagesDiv.innerHTML = "<p style='color: crimson;'>" + message + "</p>";
        }
        else if(pair[1]>0 && pair[1]<18){
            message = "ERROR, Usted es menor de edad.";
            console.log(message);
            messagesDiv.innerHTML = "<p style='color: darkblue;'>" + message + "</p>";
        }
        else if(pair[1]>=18 &&  pair[1]<65){
            message = "Usted es mayor de edad.";
            console.log(message);
            messagesDiv.innerHTML = "<p style='color: darkolivegreen;'>" + message + "</p>";
        }
        else if(pair[1]>=65 &&  pair[1]<85){
            message = "Usted es de la tercera edad.";
            console.log(message);
            messagesDiv.innerHTML = "<p style='color: darkolivegreen;'>" + message + "</p>";
        }
        else if(pair[1]>=85 &&  pair[1]<119){
            message = "Usted esta en sus años dorados.";
            console.log(message);
            messagesDiv.innerHTML = "<p style='color: darkolivegreen;'>" + message + "</p>";
        }
        
    }
    console.log(Object.fromEntries(formData));
    console.log(JSON.stringify(Object.fromEntries(formData), null, 4));
}

document.getElementById("Form_1").addEventListener("submit", function (e){
    e.preventDefault();
    getData(e.target);
})