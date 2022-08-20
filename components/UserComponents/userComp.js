import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaRegUserCircle} from "react-icons/fa"

export default function UserComp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div>   
    <Button variant="primary" onClick={handleShow}>
        <FaRegUserCircle />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Header>
            <h2>User Profile Image if it is not from google we will ask to upload it</h2>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <h6>Username</h6>
            <h6>UserEmail</h6>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
    </>
  )
}
