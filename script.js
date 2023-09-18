
const name = document.getElementById("item-name-input");
const price = document.getElementById("item-price-input");
const table = document.getElementById("myTable")
const total = document.getElementById('total');

let i = 0;
let priceArray=0;
function handleClick() {
    priceArray += parseInt(price.value);
    table.innerHTML += `
        <tr id="item-qty-input-${i}">
            <td>${i + 1}</td>
            <td>${name.value}</td>
            <td>${price.value}</td>
        </tr>
    `
    name.value = "";
    price.value = "";
    total.innerText = priceArray;
    i++;
}