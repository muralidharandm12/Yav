

if (document.readyState !== "loading") {
    console.log("vscode");
 
    var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
      i = keys.length; //6
      console.log('keys', keys)
      let stringifiedDetails, details;
 // 6 to 0
    while (i--) { //i==2
      if (keys[i].match(/userDetails/g)) {
        //we only care about keys that start with userDetails
        //this is called regex matching
      stringifiedDetails = localStorage.getItem(keys[i]);
        console.log("stringifiedDetailsOfPeople", stringifiedDetails);
        details = JSON.parse(stringifiedDetails);
        console.log("details", details);
       addNewLineElement(details);
      }
    }
  }
submit.onclick = function(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value ;
    const pnumber = document.getElementById("pnumber").value; 
    const object = {
        name: name,
        email: email,
        pnumber:pnumber
      };

    if(name && email && pnumber)
    {
        localStorage.setItem("userDetails"+email, JSON.stringify(object));
        
    }
    
    addNewLineElement(object);
};


function addNewLineElement(object) {
    const ul = document.getElementById("listOfPeople");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(object.name + " " + object.email+ " " + object.pnumber));
    ul.appendChild(li);
    
  }