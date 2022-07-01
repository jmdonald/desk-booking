import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import axios from 'axios';


const Dataform = () => {

const [building, setBuilding] = useState("");
const [floor, setFloor] = useState("");
const [desk, setDesk] = useState("");
const [date, setDate] = useState("");
const [startTime, setStartTime] = useState("");
const [endTime, setEndTime] = useState("");
const [message, setMessage] = useState("");

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const bookingData = {
      building: building,
      floor: floor,
      desk: desk,
      date: date,
      startTime: startTime,
      endTime: endTime
    }
    console.log(bookingData)
    axios.post("http://localhost:5000/deskBooking", bookingData ).then((res) => {
      console.log(res.status);
      console.log(res.data.token);
      if (res.status === 201) {
        setBuilding("");
        setFloor("");
        setDesk("");
        setDate("");
        setStartTime("");
        setEndTime("");
        setMessage("Booking created successfully");
      } else {
        setMessage("Some error occured, Please contact an admin");
      }
    });
  } catch (err) {
    console.log(err);
  }
};

return (
  <>
    <Row><h3>Desk Booking</h3></Row>
    <Row>
    <Col sm={2}></Col>
    <Col sm={8}>
      <Form onSubmit={handleSubmit}>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocation">
            <Form.Label>Pick Location</Form.Label>
            <Form.Select type="text" value={building} placeholder="Building" onChange={(e) => setBuilding(e.target.value)}>
              <option>Please select...</option>
              <option value="Waterford">Waterford</option>
         	    <option value="Dublin">Dublin</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Pick Date</Form.Label>
            <Form.Control required type="date" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridStartTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Control required type="time" value={startTime} placeholder="Start Time" onChange={(e) => setStartTime(e.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>End Time</Form.Label>
            <Form.Control required type="time" value={endTime} placeholder="End Time" onChange={(e) => setEndTime(e.target.value)}/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFloor">
            <Form.Label>Select Floor</Form.Label>
            <Form.Select type="text" value={floor} placeholder="Floor" onChange={(e) => setFloor(e.target.value)}>
              <option>Please select...</option>
              <option value="0">Ground</option>
              <option value="1">First</option>
         	    <option value="2">Second</option>
              <option value="3">Third</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridDesk">
            <Form.Label>Select Desk</Form.Label>
            <Form.Select type="text" value={desk} placeholder="Desk No" onChange={(e) => setDesk(e.target.value)}>
            <option>Please select...</option>
              <option value="1">1</option>
         	    <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Form.Select>

          </Form.Group>
        </Row>

        <Button disabled={!building} variant="primary" size="lg" type="submit">
         Book Desk
       </Button>


      <div className="message">{message ? <p>{message}</p> : null}</div>
      </Form>
    </Col>
    <Col sm={2}></Col>
    </Row>
  </>
);
}
export default Dataform
