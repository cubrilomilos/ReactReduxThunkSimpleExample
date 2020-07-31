import { GET_INITIAL_DATA, ADD_NEW_ROW, UPDATE_ROW, DELETE_ROW, UPDATE_SIDEBAR, UPDATE_FOOTER } from './constants';


function rootReducer(state, action) {
    switch (action.type) {
        case GET_INITIAL_DATA:
            return { ...action.payload }
        case ADD_NEW_ROW:
            const rowsWithNewRow = [...state.dataRows];
            rowsWithNewRow.push(action.payload);
            return {
                ...state, dataRows: rowsWithNewRow
            }
        case UPDATE_ROW:
            const updatedRows = [...state.dataRows];
            const rowIndex = state.dataRows.findIndex(r => r.id === action.payload.id);
            updatedRows[rowIndex] = action.payload;
            return {
                ...state,
                dataRows: updatedRows
            }
        case DELETE_ROW:
            const postDeleteRows = [...state.dataRows];
            const indexForDelete = state.dataRows.findIndex(r => r.id === action.payload);
            postDeleteRows.splice(indexForDelete, 1);
            return {
                ...state,
                dataRows: postDeleteRows
            }
        case UPDATE_SIDEBAR:
            return {
                ...state,
                sidebarData: action.payload
            }
        case UPDATE_FOOTER:
            return {
                ...state,
                footerData: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;