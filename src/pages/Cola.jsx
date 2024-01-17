import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";

const { Title, Text } = Typography;

export const Cola = () => {

  const data = [
    { ticketNo: 1, mesa: '21', agente: 'Agente1' },
    { ticketNo: 2, mesa: '22', agente: 'Agente2' },
    { ticketNo: 3, mesa: '23', agente: 'Agente3' },
    { ticketNo: 4, mesa: '24', agente: 'Agente4' },
    { ticketNo: 5, mesa: '25', agente: 'Agente5' },
    { ticketNo: 6, mesa: '26', agente: 'Agente6' },
  ];

  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag key={item.ticketNo} color="volcano">{item.agente}</Tag>,
                    <Tag key={item.ticketNo} color="magenta">Mesa: {item.mesa}</Tag>,
                  ]}
                >
                  <Title>No. {item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          >
          </List>
        </Col>

        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary">Mesa asignada: </Text>
                      <Tag color="magenta">{item.mesa}</Tag>
                      <Text type="secondary">Agente: </Text>
                      <Tag color="volcano">{item.agente}</Tag>
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
