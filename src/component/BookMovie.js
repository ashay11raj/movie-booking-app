import React from 'react';
import axios from 'axios';
import DummyData from './DummyData';
import SeatViewer from './SeatViewer';

class BookMovie extends React.Component {
    state = {
        cityList: DummyData,
        seatList: null,
        cityId: null,
        theaterId: null,
        showId: null,
        seatNumber: null,
        showMenu: true
    }
    citySelectList = [];
    theaterSelectList = [];
    showsSelectList = [];
    seatList = [];
    
    cityChanged = function (value) {
        if(value == null || value == undefined || value.target.selectedOptions[0].value == 'default'){
            return;
        }
        this.setState((state, props) => ({
            showMenu: false
        }));
        let state = Object.assign({}, this.state);
        let cityList = state.cityList;
        this.theaterSelectList = [];
        this.showsSelectList = [];
        this.seatList = [];
        let city = cityList.find(city => city.cityName == value.target.selectedOptions[0].value);
        this.theaterSelectList.push(<option value="default">--Select Theater--</option>);
        city.theaterList.forEach( theater => {
            this.theaterSelectList.push(<option value={theater.theaterName}>{theater.theaterName}</option>);
            }
        );
        state['cityId'] = city.cityId;
        state['theaterId'] = null;
        state['showId'] = null;
        this.setState((state, props) => ({
            cityId: city.cityId,
            theaterId: null,
            showId: null,
            seatList: null,
            showMenu: true,
            seatNumber: null
        })
        );
    }
    theaterChanged = function (value) {
        if(value == null || value == undefined || value.target.selectedOptions[0].value == 'default'){
            return;
        }
        this.setState((state, props) => ({
            showMenu: false
        }));
        let state = Object.assign({}, this.state);
        let cityList = state.cityList;
        this.showsSelectList = [];
        this.seatList = [];
        let city = cityList.find(city => city.cityId == state.cityId);
        let theater = city.theaterList.find(theater => theater.theaterName == value.target.selectedOptions[0].value);
        this.showsSelectList.push(<option value="default">--Select Show--</option>);
        theater.showsList.forEach( show => {
                this.showsSelectList.push(<option value={show.showName}>{show.showName}[{show.showStartTime}]</option>);
            }
        );
        state['theaterId'] = theater.theaterId;
        state['showId'] = null;
        this.setState((state, props) => ({
            theaterId: theater.theaterId,
            showId: null,
            seatList: null,
            showMenu: true,
            seatNumber: null
        })
        );
    }
    showChanged = function (value) {
        if(value == null || value == undefined || value.target.selectedOptions[0].value == 'default'){
            return;
        }
        this.setState((state, props) => ({
            showMenu: false
        }));
        let state = Object.assign({}, this.state);
        let cityList = this.state.cityList;
        this.seatList = [];
        let city = cityList.find(city => city.cityId == state.cityId);
        let theater = city.theaterList.find(theater => theater.theaterId == state.theaterId);
        let show = theater.showsList.find(show => show.showName == value.target.selectedOptions[0].value);
        
        state['showId'] = show.showId;
        state['seatList'] = show.seatList;
        this.setState((state, props) => ({
            showId: show.showId,
            seatList: show.seatList,
            showMenu: true,
            seatNumber: null
        }));
    }
    bookSeat = function () {
    }
    seatClicked = function (value) {
        if(value == null || value == undefined ||
            !(value.target.attributes.style.value.indexOf('green') >= 0)){
            return;
        }
        if(this.state.seatNumber){
            let prevSelectedSeat = this.state.seatList.find(seat => seat.seatNumber == this.state.seatNumber);
            prevSelectedSeat['bookingStatus'] = 'available';
        }
        let clickedSeatNumber = value.target.textContent;
        this.setState((state, props) => ({
            seatNumber: clickedSeatNumber
        }));
        let selectedSeat = this.state.seatList.find(seat => seat.seatNumber == clickedSeatNumber);
        selectedSeat['bookingStatus'] = 'clicked';
    }
    render() {
        if(this.citySelectList.length == 0){
            this.citySelectList.push(<option value="default">--Select City--</option>);
            this.state.cityList.forEach(city => {
                this.citySelectList.push(<option value={city.cityName}>{city.cityName}</option>);
            }); 
        }           
        let seatViewer = null;
        if(this.state.seatList){
            seatViewer = <SeatViewer seatList={this.state.seatList}  seatClicked={this.seatClicked.bind(this)}/>;
        }
        let menu = null;
        if(this.state.showMenu){
            menu = <div className="menu">
                <div className="menu-item">City: <select onChange={this.cityChanged.bind(this)}>{this.citySelectList}</select></div>
                <div className="menu-item">Theater: <select onChange={this.theaterChanged.bind(this)}>{this.theaterSelectList}</select></div>
                <div className="menu-item">Shows: <select onChange={this.showChanged.bind(this)}>{this.showsSelectList}</select></div>
                </div>
        }
        let seatBooking = null;
        if(this.state.seatNumber){
            seatBooking =   <div className="book-seat-detail">
                                Selected Seat: {this.state.seatNumber}
                                <br />
                                <button onClick={this.bookSeat.bind(this)}>Book Seat</button>
                            </div>
        }
        return (
            <div className="content">
                {menu}
                <div className="book-seat">
                    {seatViewer }
                    {seatBooking }
                </div>
            </div>            
          );
    }

}

export default BookMovie;