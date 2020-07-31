import { v4 as uuidv4 } from 'uuid';
import { GET_INITIAL_DATA, ADD_NEW_ROW, UPDATE_ROW, DELETE_ROW, UPDATE_SIDEBAR, UPDATE_FOOTER } from './constants';
import axiosMock from '../Data/MockAxios';
import startingData from '../Data/MockData';

const getInitialData = (data) => {
    return {
        type: GET_INITIAL_DATA,
        payload: data
    }
}

const getInitialDataToReduxFromAPI = () => {
    return (dispatch, getState) => {
        axiosMock.get()
            .then(res => {
                dispatch(getInitialData(startingData));
            })
    }
}

const addNewRowAction = () => {
    return {
        type: ADD_NEW_ROW,
        payload: { id: uuidv4(), description: '', minutes: 0, isEdited: false }
    }
}

const updateRowAction = (updatedRowData) => {
    return {
        type: UPDATE_ROW,
        payload: updatedRowData
    }
}

const deleteRowAction = (rowid) => {
    return {
        type: DELETE_ROW,
        payload: rowid
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
        //row should go to data layer/db and do some stuff there and get some response
        //in this case we are just mocking it and passign through the updated row data
        axiosMock.post(row).then(result => {
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
    getInitialDataToReduxFromAPI,
    addNewRowAction,
    updateRowAction,
    deleteRowAction,
    updateSidebarAction,
    updateFooterAction,
    reduxThunkUpdateAllAction
}