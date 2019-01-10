axios = require("axios")

axios
  .get("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then(response => {
    let { data, status, statusText } = response
    console.log("Axios response", status, statusText)
    console.log({
      bpi: data.bpi
    })
  })
