import { combineReducers } from "redux";
import { ModalDisplayEnum } from '../enum';
import {
    SHOW_MODAL, HIDE_MODAL
} from '../actions';

const visibleModal = (state: ModalDisplayEnum = ModalDisplayEnum.HIDE, { type } : {type: string }) => {
    switch (type) {
        case SHOW_MODAL :
            return ModalDisplayEnum.SHOW;
        case HIDE_MODAL :
            return ModalDisplayEnum.HIDE;
    }
    return state;
};

const targetDate = (state: string = null, { type, payload } : {type: string, payload: string}) => {
    switch (type) {
        case SHOW_MODAL :
            return payload;
        case HIDE_MODAL :
            return null;
    }
    return state;
};

export default combineReducers({
    visibleModal,
    targetDate,
});
