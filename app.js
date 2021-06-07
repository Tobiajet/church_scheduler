let pray = document.querySelector("#pray");
let praise = document.querySelector("#praise");
let offering = document.querySelector("#offering");
let sermon = document.querySelector("#sermon");
let roleW = document.querySelector("#role");
let schedule = document.querySelector(".schedule");
let submit = document.querySelector("#submit");
let fname = document.querySelector("#fname");
let scheduler = document.querySelector("#schedule");


submit.addEventListener("click", sendDetails);
window.addEventListener('DOMContentLoaded',fillTable);
scheduler.addEventListener("click", fillTableFromDb);

async function  sendDetails(){
   try {
    if(fname.value === "") alert("All fields required")
    else {
            fetch("http://localhost:5000/register",
        {
            headers:{"Content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({
                first_name: fname.value,
                role: roleW.value
            })
        })
        alert("Data submitted")
    }
   } catch (error) {
       console.log(error)
   }

}

function  fillTable(){
        pray.innerHTML = "--";
        praise.innerHTML = "--";
        offering.innerHTML = "--";
        sermon.innerHTML = "--";

}


async function  fillTableFromDb(){
    try {
        let response = await fetch("http://localhost:5000/workers");
        let workers = await response.json();
        if(workers === []) fillTable();
        pray.innerHTML = workers[0].first_name;
        praise.innerHTML = workers[1].first_name;
        offering.innerHTML = workers[2].first_name;
        sermon.innerHTML = workers[3].first_name;

    } catch (error) {
        console.log(error)
    }

}


    

// show todays date
const today = new Date();
const options = {weekday: "long",month: "short",day: "numeric"};
schedule.innerHTML = `Church schedule for today ${today.toLocaleDateString("en-US",options)}`;

