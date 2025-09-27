let widget_ul = document.querySelector(".widgets-ul");
let mainscr = document.querySelector(".mainscr");
let sidebar = document.getElementById("si");
let nbop = document.getElementById("op");

let op = true;
function showingdata(dta) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    li.classList.add("ul_li");
    a.innerText = dta.name;
    a.href = `/#${dta._id}`;
    li.appendChild(a);
    widget_ul.appendChild(li);
    let div = document.createElement("div");
    div.classList.add("contentContainer");
    div.id = dta._id.toString();
    div.innerHTML = `
        <h4>${dta._id}</h4>
        <h2>${dta.name}</h2>
        <p>${dta.description}</h1>
        <br>
        <br>
        <b><i>How to use it</i></b>
        <pre class="code">${dta.how_to_use}</pre>
        <br>
        <b><i>Properties</i></b>
        <hr />
        `
    dta.properties.forEach(ele => {
        const type = Object.keys(ele);
        div.innerHTML += `
                <div class='p'>
        <h4>${ele.name}</h4>
        <p class='p8'>${ele.description}</p>
        <p class='p8'>${type[3]} : ${ele.default_value} </p>
        <p class='p8'> ${type[1]}: ${ele.type} </p>
        <p class='p8'> ${type[4]}: ${ele.possible_values} </p>
        </div>
        <hr/>`
    });
    mainscr.appendChild(div);
}
nbop.addEventListener("click", (e) => {
    sidebar.style.left = !op ? "-100%" : "0%";
    op = !op;
})

fetch("./data/AllJson.json").then(response => response.json()).then(res => {
    res.forEach(element => {
        showingdata(element);

    });
}).catch(error => alert(error.message))