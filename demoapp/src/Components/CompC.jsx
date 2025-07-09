import React from "react";

function CompC(props) {
    return (
        <>
            <h5>{props.name} </h5>
            <p> city: {props.city} </p>
        </>
    )
}
CompC.defaultProps = {
    name: "Default Name",
    city: "Default City"
};
export default CompC;

