import { connect } from "react-redux";
import { showModal } from "../actions";
import Carendar from '../components/Carendar';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    onShowModal: (date: string) => {
        dispatch(showModal(date));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Carendar);
