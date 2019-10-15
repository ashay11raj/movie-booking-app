import React from 'react';
import { genericTypeAnnotation } from '@babel/types';

const seatColorMap = {
    available: 'green',
    inprogress: 'grey',
    booked: 'red',
    selected: "blue"
}
const seat = (props) => {
    return (
        <div className="seat" style={{'background-color':seatColorMap[props.seatDetails.bookingStatus]}}>props.seatDetails.seatNumber</div>
    );
}
const seatViewer = (props) => {
    let seatLayout = [];
    props.seatList.forEach(seat => {
        seatLayout.push(
            <div className="seat" onClick={props.seatClicked} style={{'background-color':seatColorMap[seat.bookingStatus]}}>{seat.seatNumber}</div>
        );
    });
    return (
        <div>
            <div className="seat-viewer">
                {seatLayout} 
            </div>
            <div className='legend-list'> 
                <div className='legend'>
                    Booked: <div className="legend-color" style={{'margin-right':'2em', 'background-color':seatColorMap['booked']}}></div>
                </div>
                <div className='legend'>
                    Available: <div className="legend-color" style={{'margin-right':'2em', 'background-color':seatColorMap['available']}}></div>
                </div>
                <div className='legend'>
                    Inprogress: <div className="legend-color" style={{'margin-right':'2em', 'background-color':seatColorMap['inprogress']}}></div>
                </div>
                <div className='legend'>
                    Selected: <div className="legend-color" style={{'margin-right':'2em', 'background-color':seatColorMap['selected']}}></div>
                </div>
            </div>
        </div>
    ); 
}

export default seatViewer;