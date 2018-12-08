import { connect } from "react-redux";
import { ModalDisplayEnum } from '../enum'
import Modal from '../components/Modal';
import { hideModal } from "../actions";

const mapStateToProps = (ownProps: any) => ({
    visibleModal : ownProps.visibleModal,
    targetDate : ownProps.targetDate,
});

const mapDispatchToProps = (dispatch) => ({
    onHideModal: () => {
        dispatch(hideModal());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
