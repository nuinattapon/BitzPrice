// This is the Link API
import Link from "next/link"
import { FaBitcoin, FaHome, FaInfoCircle, FaKeyboard } from "react-icons/fa"

export default () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          <FaBitcoin className="mr-1 mb-1" />
          BitzPrice
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">
                  <FaHome className="mr-1 mb-1" />
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">
                  <FaInfoCircle className="mr-1 mb-1" />
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/input_form">
                <a className="nav-link">
                  <FaKeyboard className="mr-1 mb-1" />
                  Form
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
