import React, { Component } from 'react';
import { reduxThunkUpdateAllAction } from '../Redux/actions';
import { connect } from 'react-redux';
import DataRow from './RowData'

const mapStateToProps = state => {
    return {
        rows: state.dataRows
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateRow: (row) => {
            dispatch(reduxThunkUpdateAllAction(row))
        }
    }
}

class Table extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <div>
                        <span>Description</span>
                    </div>
                    <div>
                        <span>Amount</span>
                    </div>
                    <div>
                        <span>Actions</span>
                    </div>
                </div>
                {
                    this.props.rows.map(row => (
                        <DataRow
                            key={row.id}
                            rowdata={row}
                            onUpdateRow={this.props.onUpdateRow}
                        />
                    ))
                }
            </div>
        )
    }
}

const MainTable = connect(mapStateToProps, mapDispatchToProps)(Table);
export default MainTable;