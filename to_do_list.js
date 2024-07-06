function addtask() {
    const a=document.getElementById("addtext");
    const b =document.getElementById("addlist");
    if(a.value!=="")
    {
            const li = document.createElement("li");
            li.innerText = a.value;
            b.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML="\u00d7"
            li.appendChild(span);
    }
    a.value="";
    savedata();
}

const b =document.getElementById("addlist");
b.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata() {
    localStorage.setItem("data",b.innerHTML);
}

function showtask() {
    b.innerHTML=localStorage.getItem("data");
}
showtask();