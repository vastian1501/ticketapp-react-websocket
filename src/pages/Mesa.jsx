import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd"

const { Title, Text } = Typography;

export const Mesa = () => {

  const handleExit = () => {
    console.log('Exit');
  }

  const handleNextTicket = () => {
    console.log('Next Ticket');
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Javier</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">5</Text>
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
          <Text style={{ fontSize: 30 }} type="danger">55</Text>
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
