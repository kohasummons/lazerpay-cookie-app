const payBtns = document.getElementsByClassName("btn");

for(let i = 0; i < payBtns.length; i++) {
    payBtns[i].addEventListener("click", (event) => {
        event.preventDefault()
        console.log(Number(payBtns[i].getAttribute("data-price")))
        payWithLazarpay("You", "12")
    })
}


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