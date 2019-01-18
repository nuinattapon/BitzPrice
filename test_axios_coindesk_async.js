axios = require("axios")

const callCoinDesk = async () => {
  response = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  )
  let { data, status, statusText } = response
  console.log("Axios response", status, statusText)
  console.log({
    bpi: data.bpi
  })
}

callCoinDesk()
