import React, { PureComponent } from 'react';

//Pure component will automatically get rid of rerenders if prop values didn't change
//Change to Component and watch highlightning in react tools when row is added or updated
//Also look at the profiler graph
export default class RowData extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.rowdata
        }
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.rowdata !== prevProps.rowdata) {
    //         this.setState({
    //             ...this.props.rowdata
    //         })
    //     }
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.rowdata === nextProps.rowdata && this.state === nextState) {
    //         return false;
    //     }
    //     return true;
    // }

    onChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <form
                    style={{ display: 'flex' }}
                    onSubmit={(event) => {
                        event.preventDefault();
                        this.props.onUpdateRow({ ...this.state });
                    }}
                >
                    <div>
                        <input
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="minutes"
                            value={this.state.minutes}
                            onChange={this.onChange}
                        />
                    </div>
                    <button
                        title="Save"
                    >
                        Save
                        </button>
                </form>
                <button onClick={() => this.props.onDeleteRow(this.props.rowdata.id)} title="Delete">Delete</button>
                <div>
                    <span>Row id is: {this.props.rowdata.id}</span>
                    <span> Is edited: {this.props.rowdata.isEdited ? "true" : "false"}</span>
                </div>
            </div>
        )
    }
}