import Layout from "../components/Layout"

export default () => (
  <Layout title="About BitzPrice">
    <div className="jumbotron">
      <h1 className="display-4">About BitzPrice</h1>
      <p className="lead">
        This is a simple application based on Next.JS - server side rendering
        framework for React.JS
      </p>
      <hr className="my-4" />
      <p>
        It uses rest api to get Bitcoin real-time data from
        https://www.coindesk.com/api
      </p>
    </div>
  </Layout>
)
