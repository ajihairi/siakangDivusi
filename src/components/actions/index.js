import { Actions } from 'react-native-router-flux';

export const selectLibrary = (libraryId) =>{
    Actions.detaillemburdriver();
    return {
        type: 'select_library',
        payload: libraryId
    };
};