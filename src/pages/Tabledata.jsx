import Col from 'react-bootstrap/Col'; 
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Row from 'react-bootstrap/Row';

const TableData = () => {
const [bookingData, setData] = useState({bookings: []}); 

useEffect(() => {
  const getDeskBookings =  async () => {
    const {data} = await axios("http://localhost:5000/deskBooking?_sort=id&order=desc")
    setData({bookings: data})
    }
    getDeskBookings()
   }, [setData])
  
  const cancelBooking = async (bookingID) =>{
    await axios.delete("http://localhost:5000/deskBooking/" + bookingID);
    window.location.reload(false);
  }

  return (
    <>
      <Row><h3>My Desk Bookings</h3></Row>
      <Row>
      <Col sm={2}></Col>
      <Col sm={9}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Location</th>
              <th>Floor</th>
              <th>Desk</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {bookingData.bookings.map((item) => {
            return(
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.startTime}</td>
              <td>{item.endTime}</td>
              <td>{item.building}</td>
              <td>{item.floor}</td>
              <td>{item.desk}</td>
              <td>
                <div className="d-flex justify-content-center">
                  <Button variant="danger" size="sm" onClick={() => cancelBooking(item.id)}>Cancel</Button>
                </div>
              </td>
            </tr>)})}
          </tbody>
        </Table>
      </Col>
      <Col sm={2}></Col>
      </Row>
    </>
  )
}
export default TableData
