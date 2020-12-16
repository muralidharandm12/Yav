const apiendpoint = "https://crudcrud.com/api/741836c546c24e9e86f006e13a1c13d3";


document.addEventListener("DOMContentLoaded", () => {  
  localStorage.getItem();
});

if (document.readyState !== "loading") {
  async function getUserData() {    
    await axios.get(`${apiendpoint}/registeruser`).then((data) => {
      
      for (let i = 0; i < data.data.length; i++) {
        addNewLineElement(data.data[i]);
      }
      });
      }

      getUserData();
}


submit.onclick = function(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value ;
    const pnumber = document.getElementById("pnumber").value; 
    if (email.length > 0 && name.length > 0 && pnumber.length>0) {
      const object = {
        name: name,
        email: email,
        pnumber:pnumber
      };
      
      axios.post(`${apiendpoint}/registeruser`, object); 
          
    addNewLineElement(object);

    }
};


function addNewLineElement(object) {
    const ul = document.getElementById("listOfPeople");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(object.name + " " + object.email+ " " + object.pnumber)
    );
    ul.appendChild(li);

    const deletebutton = document.createElement("input");
  deletebutton.type = "button";
  deletebutton.value = "Delete";
  deletebutton.addEventListener("click", () => {
    axios.delete(`${apiendpoint}/registeruser/${object._id}`);
  });
  deletebutton.className = "delete";
  deletebutton.style.border = "2px solid red";  
  li.appendChild(deletebutton);
  ul.appendChild(li);

  const updatebutton = document.createElement("input");
  updatebutton.type = "button";
  updatebutton.value = "Update";
  updatebutton.addEventListener("click", () =>{
    axios.put(`${apiendpoint}/registeruser/${object.name,object.email,object.pnumber}`);
  });
updatebutton.className = "edit";
updatebutton.style.border = "2px solid red";
li.appendChild(updatebutton);
ul.appendChild(li);
  }
