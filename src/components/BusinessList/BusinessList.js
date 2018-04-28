import React from "react";
import Business from "../Business/Business.js";
import "./BusinessList.css";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(businessValue => {
            return <Business business={businessValue}/>;
          })
        }
      </div>
    );
  }
}

export default BusinessList;
