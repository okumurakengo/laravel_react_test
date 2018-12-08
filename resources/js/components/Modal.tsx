import * as React from 'react';
import $ from 'jquery';
import moment from 'moment';
import 'moment/locale/ja';
import { ModalDisplayEnum } from '../enum'

export default class Modal extends React.Component
{
    node: any;

    constructor(props)
    {
        super(props);

        this.node = React.createRef();
        this.displayModal = this.displayModal.bind(this);
    }

    shouldComponentUpdate({ visibleModal } : { visibleModal: ModalDisplayEnum }) : boolean
    {
        this.displayModal(visibleModal);
        return true;
    }

    displayModal(modalDisplayEnum: ModalDisplayEnum)
    {
        $(this.node.current).modal(modalDisplayEnum);
    }

    render()
    {
        return (
            <div
                className="modal"
                role="dialog"
                ref={this.node}
                onClick={this.props.onHideModal}
            >
                <div className="modal-dialog" role="document" onClick={e => e.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">予定を入力</h5>
                            <button type="button" className="close" onClick={this.props.onHideModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    {moment(this.props.targetDate).format('LL')}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="plan-time" className="col-form-label">時間</label>
                                    <input type="time" className="form-control" id="plan-time" />
                                    <label htmlFor="plan-text" className="col-form-label">内容</label>
                                    <input type="text" className="form-control" id="plan-text" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.props.onHideModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.props.onHideModal}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
