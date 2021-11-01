import React from "react";
import Proptypes from "prop-types"

class Circle extends React.Component {
    render () {
        return (
            <div className="circle" style={{background: this.props.color}}></div>
        )
    }
}

Circle.propTypes = {
    color: Proptypes.string
}

export default Circle;