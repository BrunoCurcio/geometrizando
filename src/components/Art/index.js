import React from "react";

class Art extends React.Component {
    render () {
        return (
            <div className="art">
                {this.props.children}
            </div>
        )
    }
}

export default Art;