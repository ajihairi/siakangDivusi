import { combineReducers } from 'redux';
import librarySPJ from './LibrarySPJ';
import libraryLemburDriver from './LibraryLemburDriver';
import libraryPribadi from './LibraryPribadi';
import libraryBawahan from './LibraryBawahan';
import library1 from './Library1';
import library2 from './Library2';
import SelectionReducer from './SelectionReducer';

export default combineReducers ({
    librariesspj: librarySPJ,
    librarieslembur: libraryLemburDriver,
    librariespribadi: libraryPribadi,
    librariesbawahan: libraryBawahan,
    libraries1: library1,
    libraries2: library2,
    selectedLibraryId: SelectionReducer
});