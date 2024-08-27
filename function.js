const allBtn = document.getElementsByClassName('add-btn');

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const setName = event.target.innerText;
        const perSeatPrice = getConvertedValue('sit-taka');
        // event.target.classList.add('bg-green-400');
        const selectedContainer = document.getElementById('newSide')
        
     
       

        const seatAccess = getConvertedValue('seat-count');
        

        if (seatAccess + 1 > 4) {
            alert("One person cannot buy more than 4 tickets.");
            return;
        }
        event.target.classList.add('bg-green-400');
        event.target.setAttribute("disabled",false)
        
        


        //    seat count update
        const seatCount = getConvertedValue('seat-count');
        document.getElementById('seat-count').innerText = seatCount + 1;

        //  remaining seat
        const remainingseat = getConvertedValue('remaining-seat');
        document.getElementById('remaining-seat').innerText = remainingseat - 1;

        const div = document.createElement("div");
        div.classList.add("flex", "gap-36", "mt-2")

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = setName;
        p2.innerText = 'Economoy';
        p3.innerText = perSeatPrice;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);



        updateCase(perSeatPrice)
        updateGrandTotal()
    })
}


allBtn.addEventListener('click', () => {
    allBtn.classList.add("");
    calculateTotal();
});

function updateGrandTotal(status) {
    const totalCost = getConvertedValue("total-cost");
    if (status == undefined) {
        document.getElementById('grand-total').innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById("coupon-code").value;

        if (couponCode == "Couple20") {
            const discounted = totalCost * 0.2;
            document.getElementById('grand-total').innerText = totalCost - discounted;
        }
        else if (couponCode == "NEW15") {
            const discounted = totalCost * 0.15;
            document.getElementById('grand-total').innerText = totalCost - discounted;
        }
        else {
            alert("Please Enter Valid Coupon Code");
        }
    }
}


function start() {
    HideElementById('home');
    showElementById('sender');

}



function updateCase(value) {
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;
}



function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const converTedPrice = parseInt(price);
    return converTedPrice;
}