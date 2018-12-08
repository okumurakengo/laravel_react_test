import * as React from 'react';
import moment from 'moment';
import 'moment/locale/ja';
import DateBtn from './DateBtn';

export default ({ onShowModal }) => {
    let date: moment = moment().startOf('week');
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="d-flex justify-content-between">
                        <DateBtn>Prev Week</DateBtn>
                        <DateBtn>Next Week</DateBtn>
                    </div>
                    {[...Array(7).keys()].map(i => (
                        <div className="card" key={i}>
                            <div className="card-header d-flex justify-content-between">
                                <div className="p-1">
                                    <h5>{date.clone().add(i, 'day').format('ddd LL')}</h5>
                                </div>
                                <div className="p-1">
                                    <a href="#" className="card-link" onClick={() => onShowModal(date.clone().add(i, 'day').toISOString())}>New</a>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                <span className="font-weight-bold">
                                    {moment().format('HH:mm')}
                                </span>
                                    <span className="font-weight-normal pl-3">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </span>
                                </li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
