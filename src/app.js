// Grab all payBtns
const payBtns = document.getElementsByClassName("btn");
const customerNameInput = document.querySelector(".c-details_name");
const customerEmailInput = document.querySelector(".c-details_email");

// Attach a click event listener to every payButton
for(let i = 0; i < payBtns.length; i++) {
    payBtns[i].addEventListener("click", (event) => {
        event.preventDefault()

        let customerName = customerNameInput.value;
        let customerEmail = customerEmailInput.value;

        console.log(customerEmail, customerName)

        let price = String(payBtns[i].getAttribute("data-price"));
        payWithLazarpay(customerName, customerEmail, price)
    })
}


// Handler: Invokes the LazerCheckout function
// `LazerCheckout` is provided from the CDN
function payWithLazarpay(name, email, price) {
    LazerCheckout({
        name: name,
        email: email,
        amount: price,
        key: "pk_live_zEqWsc6vq4a4AoOxMtEtNFlMSttUBWpeINOzw9icyV9r9VAjrm",
        currency: "USD",
        onClose: (data) => {
          console.log(data);
        },
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (data) => {
          console.log(data);
        }
      })
}