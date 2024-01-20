import { FileAddOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd"
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";
import { useContext, useState } from "react";

const { Title, Text, Paragraph } = Typography;

export const CrearTicket = () => {

  const [ ticket, setTicket ] = useState(null)

  const { socket } = useContext(SocketContext)

  useHideMenu(true)

  const handleNewTicket = () => {
    socket.emit('solicitar-ticket', null, ( data ) => {
      setTicket(data)
    })
  }

  return (
    <>
      <Row>
        <Col span={24} align="center" >
          <Title level={2}>Presione el botón para un nuevo ticket</Title>
          <Button 
            icon={ <FileAddOutlined />}
            type="primary"
            shape="round"
            size="large"
            onClick={ handleNewTicket }
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={24} align="center">
          <Title level={4}>
            Su número:
          </Title>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            {ticket != null ? ticket.number : '-'}
          </Text>
          <Paragraph copyable={{ text: `${ticket && ticket.number}` }}>{ticket != null ? `Su número de ticket generado es: ${ticket.number}` : 'No hay ticket'}</Paragraph>
        </Col>
      </Row>
    </>
  )
}
