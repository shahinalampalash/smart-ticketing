const allBtn = document.getElementsByClassName('btn');

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const setName = event.target.parentNode.childNodes[3].innerText;
        const perSeatPrice= getConvertedValue('sit-taka');
        

        const selectedContainer= document.getElementById('newSide')
            
        const div= document.createElement("div");
        div.classList.add("flex","gap-36","mt-2")

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = setName;
        p2.innerText = 'Economoy';
        p3.innerText =perSeatPrice;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);
      
    })
}


function getConvertedValue(id){
    const price= document.getElementById(id).innerText;
    const converTedPrice=parseInt(price);
    return converTedPrice;
}