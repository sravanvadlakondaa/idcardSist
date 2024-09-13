let name=document.getElementById("name");
let regno=document.getElementById("regno");
let date=document.getElementById("date");
let address=document.getElementById("address");
let phone=document.getElementById("phone");
let blood=document.getElementById("blood");
let batch=document.getElementById("batch");
let container=document.getElementById("container");
let form=document.getElementById("form");
let names=document.getElementById("names");
let reg=document.getElementById("reg");
let pho=document.getElementById("pho");
let b=document.getElementById("b");
let bat=document.getElementById("bat");
let add=document.getElementById("add");


function display() {
    
        form.style.display = "none";
        container.style.display = "block";
        names.textContent=name.value;
        reg.textContent="Reg No : "+regno.value;
        dob.textContent="DOB : "+date.value;
        pho.textContent="Phone No : "+phone.value;
        b.textContent="B.G : "+blood.value;
        bat.textContent="Batch : "+batch.value;
        add.textContent="Address : "+address.value;
        return false;
    
}
