const payBtns = document.getElementsByClassName("btn");

// Attach an event listener to every payButton
for(let i = 0; i < payBtns.length; i++) {
    payBtns[i].addEventListener("click", (event) => {
        event.preventDefault()
        let price = payBtns[i].getAttribute("data-price")

        payWithLazarpay("Joshua Omobola", price)
    })
}


// Handler: Invokes the LazerCheckout function
function payWithLazarpay(name, price) {
    LazerCheckout({
        name: name,
        email: "",
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