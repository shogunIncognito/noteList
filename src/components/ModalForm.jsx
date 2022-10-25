import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalForm({ show, setShow }) {
  return (
    <>
      <Modal className='modalForm' show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton className='headerModal'>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>¡No puede haber campos vacios!</Modal.Body>
        <Modal.Footer className='footerModal'>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}