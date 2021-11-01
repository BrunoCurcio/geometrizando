import React from "react";
import Proptypes from "prop-types";

class Triangle extends React.Component {
    render () {
        return (
            <div className="triangle" style={{borderBottomColor: this.props.color}}></div>
        )
    }
}

Triangle.propTypes = {
    color: Proptypes.string
}

export default Triangle;