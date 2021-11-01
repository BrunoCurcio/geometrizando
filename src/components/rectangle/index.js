import React from "react";
import Proptypes from "prop-types";

class Rectangle extends React.Component {
    render () {
        return (
            <div className="rectangle" style={{background: this.props.color}}></div>
        )
    }
}

Rectangle.propTypes = {
    color: Proptypes.string
}

export default Rectangle;