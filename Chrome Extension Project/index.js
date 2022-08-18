const inputBox = document.getElementById("input-el");
const inputButtons = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// called when you set onClick="" listener in HTML Page

// function inputButton(){
//     console.log("Onclick Event")
// }

let myLeads = [];

let leadsFromLoacalStorage = JSON.parse(localStorage.getItem("myLeads"));
    console.log(leadsFromLoacalStorage);
    if(leadsFromLoacalStorage){
        myLeads = leadsFromLoacalStorage;
        renderLeads();
    }

inputButtons.addEventListener("click", function(){
    myLeads.push(inputBox.value);
    inputBox.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    // console.log(inputBox.value);
    // console.log(myLeads);

    // let leadsFromLoacalStorage = JSON.parse(localStorage.getItem("myLeads"));
    // console.log(leadsFromLoacalStorage);

    renderLeads();
    // console.log(localStorage.getItem("myLeads"));
});


// for(let i = 0; i < myLeads.length; i++){
//     // using innerHTML
//     ulEl.innerHTML += "<li>"+ myLeads[i] + "</li>";

//     // using append method
//     // const li = document.createElement("li");
//     // li.textContent = myLeads[i];
//     // ulEl.append(li);
// }

function renderLeads() {
    let listItems = "";
    for(let i = 0; i < myLeads.length; i++){   
    //    listItems += "<li><a target='_blank' href=https://" + myLeads[i] + ">" + myLeads[i] +"</a></li>";
       
        listItems += ` <li>
            <a target = "_blank" href = "https://${myLeads[i]}">
                ${myLeads[i]}
            </a>
        </li>` 
       
    }
    ulEl.innerHTML =  listItems;
}

let deleteButton = document.getElementById("delete-btn")
deleteButton.addEventListener("click", function(){

});