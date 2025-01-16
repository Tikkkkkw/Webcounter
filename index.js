
//Built an counter app
let count = 0;
let savetext = "Previous Entries: "; 

document.getElementById("countel").innerText = 5

function increment() {
    count++;
    document.getElementById("countel").textContent = count;
    console.log(count);
}
function save() {
    savetext += count + " - "; 
    document.getElementById("saves").innerText = savetext; 
}




