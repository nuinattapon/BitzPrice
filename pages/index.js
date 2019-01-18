import axios from "axios"

import Layout from "../components/Layout"
import Prices from "../components/Prices"

const Index = props => (
  <Layout title="BitzPrice">
    <div className="container">
      <h1>Welcome to BitzPrice</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
)

Index.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  )

  let { data, status, statusText } = response

  return {
    bpi: data.bpi
  }
}
export default Index
