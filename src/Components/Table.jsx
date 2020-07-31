import React, { Component } from 'react';
import { addNewRowAction, deleteRowAction, getInitialDataToReduxFromAPI, reduxThunkUpdateAllAction } from '../Redux/actions';
import { connect } from 'react-redux';
import DataRow from './RowData'

const mapStateToProps = state => {
    return {
        rows: state.dataRows
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInitialTableData: () => {
            dispatch(getInitialDataToReduxFromAPI())
        },
        onUpdateRow: (row) => {
            dispatch(reduxThunkUpdateAllAction(row))
        },
        onAddNewRow: () => {
            dispatch(addNewRowAction())
        },
        onDeleteRow: (rowId) => {
            dispatch(deleteRowAction(rowId))
        }
    }
}

class Table extends Component {

    componentDidMount = () => {
        this.props.getInitialTableData();
    }

    onAddNewRow = () => {
        this.props.onAddNewRow();
    }

    onDeleteRow = (rowId) => {
        this.props.onDeleteRow(rowId);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onAddNewRow}>Add new row</button>
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
                            onDeleteRow={this.props.onDeleteRow}
                        />
                    ))
                }
            </div>
        )
    }
}

const MainTable = connect(mapStateToProps, mapDispatchToProps)(Table);
export default MainTable;