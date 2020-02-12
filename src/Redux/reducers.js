import { UPDATE_ROW, UPDATE_SIDEBAR, UPDATE_FOOTER } from './constants';


function rootReducer(state, action) {
    switch (action.type) {
        case UPDATE_ROW:
            const updatedRows = [...state.dataRows];
            const rowIndex = state.dataRows.findIndex(r => r.id === action.payload.id);
            updatedRows[rowIndex] = action.payload;
            return {
                ...state,
                dataRows: updatedRows
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