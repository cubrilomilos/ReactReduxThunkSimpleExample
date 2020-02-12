import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        id: state.footerData
    }
}

const footer = props => {
    return (
        <div>
            <span>
                Last row updated: {props.id}
            </span>
        </div>
    )
}

const Footer = connect(mapStateToProps, {})(footer);
export default Footer;