import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd"
import { useContext, useEffect, useState } from "react";
import { getUser } from "../helpers/getUser";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";

const { Title, Text } = Typography;

export const Mesa = () => {

  const [user] = useState(getUser())
  const navigate = useNavigate()
  const { socket } = useContext(SocketContext)
  const [currentTicket, setCurrentTicket] = useState(null)

  useEffect(() => {
    if (!user.agente || !user.mesa) {
      navigate('/ingresar')
    }
  })

  const handleExit = () => {
    localStorage.clear()
    navigate('/ingresar')
  }

  const handleNextTicket = () => {
    socket.emit('next-ticket', user, (data) => {
      setCurrentTicket(data)
    })
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">{user.mesa}</Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="round" danger onClick={handleExit}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Está atendiendo el ticket número: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            {currentTicket != null ? currentTicket.number : 'No hay tickets'}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button shape="round" type="primary" onClick={handleNextTicket}>
            <CheckCircleOutlined />
            Siguiente Ticket
          </Button>
        </Col>
      </Row>
    </>
  )
}
