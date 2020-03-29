import React from "react";

import confLogo from "../images/badge-header.svg";
// import avatar from '../images/rick.png'
import "../styles/Badge.css";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='logo' />
        </div>
        <div className='Badge__section-name'>
          <Gravatar className='Badge__avatar' email={this.props.email} />
          <h1>
            {" "}
            {this.props.firstName} <br /> {this.props.lastName}{" "}
          </h1>
        </div>
        <div className='Badge__section-info'>
          <h2> {this.props.jobTitle}</h2>
        </div>
        <div className='Badge__footer'>
          <p>{this.props.twitter}</p>
        </div>
      </div>
    );
  }
}

export default Badge;
