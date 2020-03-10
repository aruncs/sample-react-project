import { h, Component } from "preact"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import styles from "./styles.scss"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/home">
          <div className="header-item">Home</div>
        </Link>
        <Link to="/about">
          <div className="header-item">About</div>
        </Link>
        <Link to="/career">
          <div className="header-item">Career</div>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
export default connect(mapStateToProps)(Header)
