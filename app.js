const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")
const button = document.querySelector("button")
const counttodo = document.querySelector(".counttodo")
const CheckCount = document.querySelector(".CheckCount")
let Value = "";
//<i class="fa-solid fa-check"></i>
//<i class="fa-solid fa-xmark"></i>
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(Value);
    if (Value === "") {
        alert("input bosdur")
    } else {
        const li = document.createElement("li");
        const delet = document.createElement("i");
        const check = document.createElement("i");
        const pen = document.createElement("i");
        const p = document.createElement("p");
        const pNumber = document.createElement("p");
        delet.className = "fa-solid fa-xmark";
        check.className = "fa-solid fa-check";
        pen.className = "fa-solid fa-pen";
        counttodo.textContent++;

        p.innerHTML = Value;
        li.append(pNumber, p, check, delet, pen);
        ul.append(li);
        input.value = "";
        Value = "";

        [...ul.children].map((item, index) => {
            index += 1;

            item.firstChild.innerText = index;
        })





        delet.addEventListener("click", (e) => {
            counttodo.textContent--;
            li.remove()
            /* console.log(e.target.parentNode.firstChild.getAttribute("style")); */
            if (e.target.parentNode.children[1].getAttribute("style") == "text-decoration: line-through; color: greenyellow;") {
                CheckCount.textContent--;
            }
            [...ul.children].map((item, index) => {
                index += 1;
                
                item.firstChild.innerText = index;
            })

        })


        check.addEventListener("click", () => {
            if (p.style.textDecoration !== "line-through") {
                p.style.textDecoration = "line-through";
                p.style.color = "greenyellow"
                CheckCount.textContent++;
            } else {
                p.style.textDecoration = "";
                CheckCount.textContent--;
                p.style.color = "";
            };
        })

        pen.addEventListener("click", (e) => {
            const Newinput = document.createElement("input")

            Newinput.className = "NewInput"
            if (li.children.length > 5) {
                e.target.parentNode.lastChild.remove();

            } else {



                li.appendChild(Newinput)
                Newinput.addEventListener("change", (a) => {
                    p.innerText = a.target.value
                    Newinput.remove()
                })
            }









        })






    }

})

input.addEventListener("change", (e) => {
    Value = e.target.value.trim()
})