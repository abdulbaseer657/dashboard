import React, { useState, useEffect } from 'react';
import { Layout, Card, Row, Col, Typography, Space, Statistic, Table, Button, Menu, Switch, ConfigProvider, theme } from 'antd';
import { fetchDashboardBodyData, fetchRxBEData, Header } from '../services/api';
import { Circle, Sun, Moon } from 'lucide-react';
import { ArrowDownOutlined, ArrowUpOutlined, HeartOutlined, MenuOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;
const { Title, Text } = Typography;
const { defaultAlgorithm, darkAlgorithm } = theme;

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('RxBE');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const menuItems = [
    { key: 'RxBE', label: 'RxBE' },
    { key: 'RxC', label: 'RxC' },
    { key: 'TPMS', label: 'TPMS' },
    { key: 'Intake', label: 'Intake' },
    { key: 'CiQ', label: 'CiQ' },
    { key: 'RPHAI', label: 'RPHAI' },
    { key: 'PCC', label: 'PCC' },
    { key: 'ERE', label: 'ERE' },
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'green':
      case 'blue':
        return <ArrowUpOutlined className="text-green-500" />;
      case 'red':
        return <ArrowDownOutlined className="text-red-500" />;
      default:
        return null;
    }
  };

  const data = fetchRxBEData();

  const columns = [
    {
      title: 'Capability',
      dataIndex: 'Capability',
      key: 'Capability',
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: 'Success Rate',
      dataIndex: 'SuccessRate',
      key: 'SuccessRate',
      render: (text) => <span className="font-medium">{text}%</span>,
      align: 'right',
    },
    {
      title: 'Trend',
      dataIndex: 'Trend',
      key: 'Trend',
      render: (trend) => getTrendIcon(trend),
      align: 'center',
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <Layout className="h-auto pt-5">
        <Content className="sm:p-6">
          <Card className="max-w-full md:max-w-7xl mx-auto shadow-lg rounded-lg">
            <div className="p-2 border-b flex justify-between items-center flex-wrap gap-4">
              <h1 className="font-semibold text-xl">
                Retail Pharmacy Applications Dashboard
              </h1>
              <Space>
                <Switch
                  checked={isDarkMode}
                  onChange={() => setIsDarkMode(!isDarkMode)}
                  checkedChildren={<Moon className='mt-[2.8px]' size={16} />}
                  unCheckedChildren={<Sun  size={16} />}
                />
                {/* <Button onClick={() => setOpen(!open)} type="primary">
                  {open ? 'See Less' : 'See More'}
                </Button> */}
              </Space>
            </div>

            <div className="p-4 sm:p-6">
              <Row gutter={[16, 16]} className="mb-6">
                {Header.map((item, index) => (
                  <Col key={index} xs={24} sm={12} lg={4}>
                    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Statistic
                        title={<Text className="text-lg font-semibold">{item.name}</Text>}
                        value={item.value}
                        valueStyle={{ color: '#1890ff' }}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>

              {open ? (
                <Layout className="min-h-80 bg-transparent">
                  
                  <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    breakpoint="lg"
                    collapsedWidth="0"
                    zeroWidthTriggerStyle={{ top: '64px' }}
                    className="responsive-sider"
                  >

                    <Menu
                      mode="inline"
                      selectedKeys={[selectedMenu]}
                      onSelect={({ key }) => setSelectedMenu(key)}
                      items={menuItems}
                      className="h-full border-r-0"
                    />
                  </Sider>
                  <Content className=" sm:p-6">
                    <Card className="shadow-lg rounded-lg overflow-hidden">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                        <Title level={4} className="m-0">{selectedMenu}</Title>
                        <Button type="primary" icon={<HeartOutlined />} danger>
                          Support Metrics
                        </Button>
                        
                      </div>
                      <Table
                        dataSource={data}
                        columns={columns}
                        pagination={false}
                        className="border rounded-lg overflow-y-auto"
                      />
                    </Card>
                  </Content>
                </Layout>
              ) : (
                <Card className="mb-6">
                  <Row gutter={[16, 16]}>
                    {fetchDashboardBodyData.map((item, index) => (
                      <Col key={index} xs={24} sm={12} md={8} lg={6}>
                        <Card
                          hoverable
                          onClick={() => setOpen(true)} 
                          className="h-full"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: '100%'
                          }}
                        >
                          <Space>
                            <Text  className="text-xl" strong>{item.name}</Text>
                            <Circle className='h-4 w-4' fill={item.status} />
                          </Space>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card>
              )}
            </div>
          </Card>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Dashboard;