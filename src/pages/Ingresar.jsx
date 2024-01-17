import { LoginOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber } from 'antd';

export const Ingresar = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
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
  )
}
