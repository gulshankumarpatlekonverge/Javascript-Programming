const inputBox = document.getElementById("input-el");
const inputButtons = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let deleteButton = document.getElementById("delete-btn");
let tabButton = document.getElementById("tab-btn");

let myLeads = [];

let leadsFromLoacalStorage = JSON.parse(localStorage.getItem("myLeads"));
    if(leadsFromLoacalStorage){
        myLeads = leadsFromLoacalStorage;
        render(myLeads);
    }

function render(leads) {
    let listItems = "";
    for(let i = 0; i < leads.length; i++){   
       listItems += ` <li>
            <a target = "_blank" href = "https://${leads[i]}">
                ${leads[i]}
            </a>
        </li>`     
    }
    ulEl.innerHTML =  listItems;
}

inputButtons.addEventListener("click", function(){
    myLeads.push(inputBox.value);
    inputBox.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

});

const tabs = [{url:"https://www.google.com"}]
tabButton.addEventListener("click", function(){
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
});

deleteButton.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});