import { FileAddOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd"

const { Title, Text, Paragraph } = Typography;

export const CrearTicket = () => {
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
            55
          </Text>
          <Paragraph copyable={{ text: '55' }}>Su número de ticket generado es: 55</Paragraph>
        </Col>
      </Row>
    </>
  )
}
