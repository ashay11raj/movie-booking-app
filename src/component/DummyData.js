import { privateDecrypt } from "crypto";

const seatList = (numberOfSeat) => {
      let bookingStatuslist = ['available', 'booked', 'inprogress'];
      let seatList = [];
      for(let i=0; i<numberOfSeat; i++){
        let bookingId = null;
        let bookingStatus = bookingStatuslist[Math.floor(Math.random() * 3)];
        if(bookingStatus == 'booked'){
          bookingId = 100 + i;
        }
        seatList.push({
          seatNumber: i,
          bookingStatus: bookingStatus,
          bookingId: bookingId
        });
      }
      return seatList;
}

export default 
    [
        {
            cityId: 1,
            cityName: 'Mumbai',
            theaterList: [
                {
                    theaterId: 1,
                    theaterName: 'Mumbai-PVR',
                    showsList: [
                        {
                            showId: 1,
                            showName: 'Mumbai-PVR-Movie1',
                            showStartTime: '9:00 am',
                            seatList: seatList(20)
                        },
                        {
                          showId: 2,
                          showName: 'Mumbai-PVR-Movie2',
                          showStartTime: '12:00 pm',
                          seatList: seatList(22)
                      }
                    ]
                },
                {
                  theaterId: 2,
                  theaterName: 'Mumbai-INOX',
                  showsList: [
                      {
                          showId: 1,
                          showName: 'Mumbai-INOX-Movie3',
                          showStartTime: '9:00 am',
                          seatList: seatList(24)
                      },
                      {
                        showId: 2,
                        showName: 'Mumbai-INOX-Movie2',
                        showStartTime: '12:00 pm',
                        seatList: seatList(26)
                    }
                  ]
              }
            ]
        },
        {
          cityId: 2,
          cityName: 'Delhi',
          theaterList: [
              {
                  theaterId: 1,
                  theaterName: 'Delhi-PVR',
                  showsList: [
                      {
                          showId: 1,
                          showName: 'Delhi-PVR-Movie1',
                          showStartTime: '9:00 am',
                          seatList: seatList(28)
                      },
                      {
                        showId: 2,
                        showName: 'Delhi-PVR-Movie2',
                        showStartTime: '12:00 pm',
                        seatList: seatList(30)
                    }
                  ]
              },
              {
                theaterId: 2,
                theaterName: 'Delhi-INOX',
                showsList: [
                    {
                        showId: 1,
                        showName: 'Delhi-INOX-Movie3',
                        showStartTime: '9:00 am',
                        seatList: seatList(20)
                    },
                    {
                      showId: 2,
                      showName: 'Delhi-INOX-Movie2',
                      showStartTime: '12:00 pm',
                      seatList: seatList(22)
                  }
                ]
            }
          ]
      }
    ]
    
    
    
