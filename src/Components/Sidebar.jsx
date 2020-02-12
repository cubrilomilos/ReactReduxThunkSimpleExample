import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        sum: state.sidebarData
    }
}

class bar extends Component {
    render() {
        return (
            <div>
                <h2>Sidebar data:</h2>
                <label>Total amount sum: {this.props.sum}</label>
            </div>
        )

    }
}

const Sidebar = connect(mapStateToProps, {})(bar);
export default Sidebar;