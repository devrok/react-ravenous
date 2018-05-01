import React from "react";
import Business from "../Business/Business.js";
import "./BusinessList.css";

class BusinessList extends React.Component {
  render() {
    console.log("--- BusinessList");
    console.log(this.props.businesses);
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(businessValue => {
            return <Business key={businessValue.id} business={businessValue}/>;
          })
        }
      </div>
    );
  }
}

export default BusinessList;
