
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function WhatsAppModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body  className="speech-bubble">
          <p>
            ¿Tienes dudas? ¡Habla con un asesor! Escríbenos ahora y recibe tus
            productos sin costo adicional. &#128512;
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
<style>


</style>

export default WhatsAppModal;
