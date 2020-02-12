import { UPDATE_ROW, UPDATE_SIDEBAR, UPDATE_FOOTER } from './constants';
import axiosMock from '../Data/MockAxios';

const updateRowAction = (updatedRowData) => {
    return {
        type: UPDATE_ROW,
        payload: updatedRowData
    }
}

const updateSidebarAction = (newAmount) => {
    return {
        type: UPDATE_SIDEBAR,
        payload: newAmount
    }
}

const updateFooterAction = (id) => {
    return {
        type: UPDATE_FOOTER,
        payload: id
    }
}

//debug this to see how dispatches are batched and how it affects the rendering of the components
const reduxThunkUpdateAllAction = (row) => {
    return (dispatch, getState) => {
        axiosMock.get().then(result => {
            const index = getState().dataRows.findIndex(r => r.id === row.id);
            const oldSum = getState().sidebarData;
            const sum = oldSum - parseInt(getState().dataRows[index].minutes) + parseInt(row.minutes);
            row.isEdited = true;
            dispatch(updateRowAction(row));
            dispatch(updateSidebarAction(sum));
            dispatch(updateFooterAction(row.id));
        });
    }
}

export {
    updateRowAction,
    updateSidebarAction,
    updateFooterAction,
    reduxThunkUpdateAllAction
}