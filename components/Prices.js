class Prices extends React.Component {
  state = {
    currency: "USD"
  }

  render() {
    let { currency } = this.state

    let list = this.props.bpi ? (
      <li className="list-group-item">
        Bitcoin rate for {this.props.bpi[currency].description}:{" "}
        <span className="badge badge-info">
          {this.props.bpi[currency].code}
        </span>
        <strong> {this.props.bpi[currency].rate}</strong>
      </li>
    ) : (
      <p className="text-danger">
        No data returned from https://www.coindesk.com/api{" "}
      </p>
    )

    return (
      <div>
        <ul className="list-group">{list}</ul>
        <br />
        <select
          onChange={e => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    )
  }
}

export default Prices
