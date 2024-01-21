import { MenuFoldOutlined, MenuUnfoldOutlined, TableOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Content, Footer, Sider } = Layout;

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Header } from 'antd/es/layout/layout';
import { useContext, useState } from 'react';
import { Mesa } from './Mesa';
import { UiContext } from '../context/UiContext';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link to="/ingresar">Ingresar</Link>, '1', <UserOutlined />),
  getItem(<Link to="/cola">Cola</Link>, '2', <VideoCameraOutlined />),
  getItem(<Link to="/crear">Crear Ticket</Link>, '3', <UploadOutlined />),
  getItem(<Link to="/mesa">Mesa</Link>, '4', <TableOutlined />),
]

export const RouterPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { menu } = useContext(UiContext)


  return (
    <BrowserRouter basename='/'>
      <Layout style={{ minHeight: '100dvh' }} >
        {!menu &&
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint="lg"
            collapsedWidth="0"
          >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} items={items} />
          </Sider>
        }
        <Layout>
          {!menu &&
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
            </Header>
          }
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path='/ingresar' element={<Ingresar />} />
                <Route path='/cola' element={<Cola />} />
                <Route path='/crear' element={<CrearTicket />} />
                <Route path='/mesa' element={<Mesa />} />
              </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Javier Atiencia ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
