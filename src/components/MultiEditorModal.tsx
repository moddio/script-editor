import React from 'react'
import { Modal, ModalHeader, Row, Col, ModalBody } from 'reactstrap'
import left_arrow from '../assets/left_arrow.svg'

interface MultiEditorModalContent {
  name: string,
  desc: string
}

interface MultiEditorModalProps {
  title: string,
  action: string,
  actionDesc: string,
  contents: MultiEditorModalContent[]
}

const MultiEditorModal: React.FC<MultiEditorModalProps> = ({ title, action, actionDesc, contents }) => {
  return (
    <Modal
      zIndex={9000}
      fade={false}
      className="edit-action-modal"
      keyboard={false}
      backdrop="static"
      size='lg'
      isOpen={true}
      toggle={() => { }}
      contentClassName="rounded border border-[#fff] !bg-[#272E37]"
    >
      <ModalHeader toggle={() => { }} close={<>test</>} className='px-4 py-2'>
        <Row sm={2}>
          <Col sm={4} className='flex items-center'>
            <img src={left_arrow} alt='back' className='h-4 w-12 mr-2' />
            <span className="text-white text-3xl font-bold leading-9 tracking-normal text-left whitespace-nowrap">{title}</span>
          </Col>
        </Row>
      </ModalHeader>

      <ModalBody>

      </ModalBody>
    </Modal>
  )
}

export default MultiEditorModal
