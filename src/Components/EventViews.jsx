import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EventViews() {
  const [date, setDate] = useState(new Date());
  const [foodStatus, setFoodStatus] = useState("");

  const [event, setEvent] = useState([
    {
      eventType: "Marriage Event",
      eventPrice: 300000,
      date: "",
      eventDateStatus: "Available",
      foodStatus: "",
    },

    {
      eventType: "Marriage Reception",
      eventPrice: 120000,
      date: "",
      eventDateStatus: "Available",
      foodStatus: "",
    },
    {
      eventType: "Corporate Event",
      eventPrice: 100000,
      date: "",
      eventDateStatus: "Available",
      foodStatus: "",
    },
    {
      eventType: "Birthday Event",
      eventPrice: 50000,
      date: "",
      eventDateStatus: "Available",
      foodStatus: "",
    },
  ]);

  const updateFoodStatus = (e) => {
    setFoodStatus(e.target.value);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Events</h1>

          <table
            className="table table-striped table text-center"
            style={{ width: "80%", height: "20%", margin: "0" }} >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of Event</th>
                <th>Price</th>
                <th>Date</th>
                <th>Availabilty status</th>
                <th>Food </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {event.map((event, index) => (
                <tr key={index}>
                  <td>{index + 1} </td>
                  <td>{event.eventType}</td>
                  <td>{event.eventPrice}</td>
                  <td>
                    {
                      <DatePicker
                        selected={date}
                        placeholderText="Select Date"
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mmaa"
                        onChange={(e) => setDate(e.target.value)} />
                    }
                  </td>
                  <td>{event.eventDateStatus}</td>
                  <td>
                    <select
                      className="form-select"
                      aria-label="food status"
                      onChange={updateFoodStatus}>
                      <option value="dinner" defaultValue="dinner">Dinner</option>
                      <option value="lunch">Lunch</option>
                      <option value="breakfast">Breakfast</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" className="btn btn-primary"> Book</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="container-fluid">
          <form className="was-validated">
            <br />
            <button type="button" className="btn btn-primary"> Edit </button>
            &nbsp; &nbsp;
            <button type="button" className="btn btn-primary"> Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EventViews;
