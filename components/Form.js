import axios from "axios"
import React from "react"

export default class extends React.Component {
  state = {
    firstName: "Nui",
    lastName: "Sub-Anake",

    isFriendly: true,
    gender: "male",
    favColor: "blue"
  }

  handleChange = event => {
    const { name, value, type, checked } = event.target
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("Submitted!", this.state)
    //   try {
    //     const res = await axios.post("http://localhost:3000/test", this.state)
    //     console.log(res)
    //   } catch (err) {
    //     console.error(err)
    //   }
  }

  render = () => {
    return (
      <div className="container w-60">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isFriendly"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="isFriendly">
              Is Friendly
            </label>
          </div>

          <label htmlFor="gender">Gender:</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>

          <div className="form-group mt-2">
            <label htmlFor="favColor">Favorite Color:</label>
            <select
              className="form-control"
              id="favColor"
              value={this.state.favColor}
              onChange={this.handleChange}
              name="favColor"
            >
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <h5 className="mt-4">
          Name: {this.state.firstName} {this.state.lastName}
        </h5>
        <h5>You are a {this.state.gender}</h5>
        <h5>You are {this.state.isFriendly ? "friendly" : "unfriendly"}</h5>

        <h5>Your favorite color is {this.state.favColor}</h5>
      </div>
    )
  }
}
