import { Actions } from 'react-native-router-flux';

export const selectspj = (libraryId) => {
  Actions.detailspj();
  return {
      type: 'select_laporanSPJ',
      payload: libraryId
  };
};