import React, { Component } from 'react';
import { connect } from 'react-redux';

class SeatInfo extends Component {
    renderDSGheDangDat = () => {
        return this.props.danhSachGheDangDat.map((gheDangDat, index) => {
            return (
                <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                        <button className='text-center' onClick={() => {
                            this.props.dispatch({
                                type: "CANCEL_SEAT",
                                soGhe: gheDangDat.soGhe
                            })
                        }}>
                            Hủy
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <>
                <div className='mt-3'>
                    <ul className="mt-5 confirmSeat">
                        <li>
                            <button className='gheDuocChon' id='resSeat'></button>
                            <span className='fs-ghe'>Reserved Seat</span>
                        </li>
                        <li>
                            <button className='gheDangChon' id='seleSeat'></button>
                            <span className='fs-ghe'>Selected Seat</span>
                        </li>
                        <li>
                            <button className='ghe ml-0' id='empSeat'></button>
                            <span className='fs-ghe'>Empty Seat</span>
                        </li>
                    </ul>
                </div>
                <div className='mt-1'>
                    <table className="table" border={2}>
                        <thead>
                            <tr>
                                <th>Seat Number</th>
                                <th>Price</th>
                                <th>Cancel (Y/N)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDSGheDangDat()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td>Total</td>
                                <td>{this.props.danhSachGheDangDat.reduce(( tongTien,gheDangDat,index)=>{
                                    return tongTien += gheDangDat.gia;
                                },0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.ThongTinDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(SeatInfo);