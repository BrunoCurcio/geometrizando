import React from "react";
import Square from "../square";
import Circle from "../circle";
import Triangle from "../triangle";
import Rectangle from "../rectangle";
import PropTypes from "prop-types";

class Figure extends React.Component {
    render () {
        if(this.props.type === "square" ) {
            return (
                <Square color={this.props.color}></Square>
            )
        } 

        if (this.props.type === "circle" ) {
            return (
                <Circle color={this.props.color}></Circle>
            )
        }

        if (this.props.type === "triangle" ) {
            return (
                <Triangle color={this.props.color}></Triangle>
            )
        }

        if (this.props.type === "rectangle" ) {
            return (
                <Rectangle color={this.props.color}></Rectangle>
            )
        }

        return (
            <div></div>
        )
    }
}

Figure.propTypes = {
    color: PropTypes.string,
    type: PropTypes.oneOf(["square", "circle", "triangle", "rectangle"])
}

export default Figure;