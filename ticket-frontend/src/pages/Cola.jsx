import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";
import { useContext, useEffect, useState } from "react";
import { getLast } from "../helpers/getLast";

const { Title, Text } = Typography;

export const Cola = () => {

  useHideMenu(true)

  const { socket } = useContext(SocketContext)
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    socket.on('assigned-tickets', (data) => {
      setTickets(data)
    })

    return () => socket.off('assigned-tickets')
  }, [socket])

  useEffect( () => {
    getLast().then( data => setTickets(data) )
  })

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag key={item.ticketNo} color="volcano">{item.agent}</Tag>,
                    <Tag key={item.ticketNo} color="magenta">Mesa: {item.desktop}</Tag>,
                  ]}
                >
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          >
          </List>
        </Col>

        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">Mesa asignada: </Text>
                      <Tag color="magenta">{item.desktop}</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="volcano">{item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          >
          </List>
        </Col>


      </Row>
    </>
  )
}
