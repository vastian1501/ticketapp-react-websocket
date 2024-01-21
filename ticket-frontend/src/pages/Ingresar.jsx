import { LoginOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, InputNumber } from 'antd';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../helpers/getUser';
const { Title, Text } = Typography;

export const Ingresar = () => {

  const [user] = useState(getUser)
  const navigate = useNavigate();

  useEffect(() => {
    if (user.agente && user.mesa) {
      navigate('/mesa')
    }
  })

  const onFinish = (values) => {
    localStorage.setItem('agente', values.agente)
    localStorage.setItem('mesa', values.mesa)

    navigate('/mesa')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text type="secondary">Ingrese su nombre de agente y número de mesa</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su nombre de agente',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mesa"
          name="mesa"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su número mesa',
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 4,
          }}
        >
          <Button type="primary" htmlType="submit">
            <LoginOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
