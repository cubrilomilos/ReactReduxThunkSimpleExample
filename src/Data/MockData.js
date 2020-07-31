import { v4 as uuidv4 } from 'uuid';

const startingData = {
    dataRows: [
        { id: uuidv4(), description: 'This is row 1', minutes: 60, isEdited: false },
        { id: uuidv4(), description: 'This is row 2', minutes: 80, isEdited: false },
        { id: uuidv4(), description: 'This is row 3', minutes: 60, isEdited: false },
        { id: uuidv4(), description: 'This is row 4', minutes: 70, isEdited: false }
    ],
    sidebarData: 270,
    footerData: ''
}

export default startingData;