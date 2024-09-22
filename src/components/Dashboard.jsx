import React, { useState, useEffect } from 'react';
import {
  Layout,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Table,
  Button,
  Menu,
  Switch,
  ConfigProvider,
  theme,
} from 'antd';
import { fetchDashboardBodyData, fetchRxBEData } from '../services/api';
import { Circle, Sun, Moon } from 'lucide-react';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  HeartOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import argusLogo from '../assets/argus.jpg';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const { Content, Sider } = Layout;
const { Title, Text } = Typography;
const { defaultAlgorithm, darkAlgorithm } = theme;

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('RPHAI');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#000000' : '#ffffff'; // Set the body background color based on dark mode
  }, [isDarkMode]);

  const menuItems = [
    { key: 'RPHAI', label: 'RPHAI', disabled: false },
    { key: 'CiQ', label: 'CiQ', disabled: false },
    { key: 'PCC', label: 'PCC', disabled: false },
    { key: 'RxBE', label: 'RxBE', disabled: true },
    { key: 'RxC', label: 'RxC', disabled: true },
    { key: 'TPMS', label: 'TPMS', disabled: true },
    { key: 'Intake', label: 'Intake', disabled: true },
    { key: 'ERE', label: 'ERE', disabled: true },
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'green':
        return <ArrowUpOutlined className="text-green-500" />;
      case 'blue':
        return <ArrowRightOutlined className="text-blue-500" />;
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
      title: 'YTD',
      dataIndex: 'YTD',
      key: 'YTD',
      render: (text) => <span className="font-medium">{text}%</span>,
      align: 'right',
    },
    {
      title: '24 hrs',
      dataIndex: 'Last24hrs',
      key: 'Last24hrs',
      render: (text) => <span className="font-medium">{text}%</span>,
      align: 'right',
    },
    {
      title: 'Current Trend',
      dataIndex: 'CurrentTrend',
      key: 'CurrentTrend',
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
    {
      title: 'Graph',
      dataIndex: 'GraphData',
      key: 'GraphData',
      render: (graphData, record) => (
        <Sparklines data={graphData}>
          <SparklinesLine color={record.Trend === 'red' ? 'red' : 'green'} />
        </Sparklines>
      ),
      align: 'center',
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: isDarkMode ? '#001529' : '#1890ff',
        },
      }}
    >
      <Layout
        className={`min-h-screen h-auto pt-5 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
        style={{
          backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        }}
      >
        <Content
          className="sm:p-6 min-h-full"
          style={{ backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff' }}
        >
          <Card
            className={`max-w-full md:max-w-7xl mx-auto shadow-lg rounded-lg ${isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black'}`}
            style={{ backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff' }}
          >
            <div className="p-2 border-b flex justify-between items-center flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <img src={argusLogo} alt="Argus Logo" className="h-12 w-auto" />
                <h1 className={`font-semibold text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Argus Business KPI
                </h1>
              </div>
              <Space>
                <Switch
                  checked={isDarkMode}
                  onChange={() => setIsDarkMode(!isDarkMode)}
                  checkedChildren={<Moon className="mt-[2.8px]" size={16} />}
                  unCheckedChildren={<Sun size={16} />}
                />
                <Button onClick={() => setOpen(!open)} type="primary">
                  {open ? 'Status' : 'Drill Down'}
                </Button>
              </Space>
            </div>

            <div className="p-4 sm:p-6">
              {open ? (
                <Layout className="min-h-80 bg-transparent">
                  <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    breakpoint="lg"
                    collapsedWidth="0"
                    zeroWidthTriggerStyle={{ top: '64px' }}
                    className={`responsive-sider ${isDarkMode ? 'bg-[#141414]' : ''}`}
                  >
                    <Menu
                      mode="inline"
                      selectedKeys={[selectedMenu]}
                      onSelect={({ key }) => setSelectedMenu(key)}
                      items={menuItems}
                      className={`h-full border-r-0 ${isDarkMode ? 'bg-[#141414] text-white' : ''}`}
                      style={{
                        '--antd-menu-disabled-item-text-color': 'rgba(255, 255, 255, 0.5)',
                        '--antd-menu-disabled-item-text-color-light': 'rgba(0, 0, 0, 0.3)',
                      }}
                    />
                  </Sider>
                  <Content
                    className="sm:p-6"
                    style={{ backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff' }}
                  >
                    <Card
                      className={`shadow-lg rounded-lg overflow-hidden ${isDarkMode ? 'bg-[#1f1f1f] text-white' : ''}`}
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                        <Title level={4} className={`m-0 ${isDarkMode ? 'text-white' : ''}`}>
                          {selectedMenu}
                        </Title>
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
                <Card className={`mb-6 ${isDarkMode ? 'bg-[#1f1f1f] text-white' : ''}`}>
                  <Row gutter={[16, 16]}>
                    {fetchDashboardBodyData.map((item, index) => (
                      <Col key={index} xs={24} sm={12} md={8} lg={6}>
                      <Card
                        hoverable={!item.disabled}
                        onClick={() => !item.disabled && setOpen(true)}
                        className={`h-full relative ${item.disabled ? 'bg-gray-200 text-gray-500' : ''}`} // Added "relative"
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100%',
                          pointerEvents: item.disabled ? 'none' : 'auto',
                          opacity: item.disabled ? 0.5 : 1,
                          cursor: item.disabled ? 'not-allowed' : 'pointer',
                          backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff',
                        }}
                      >
                        <Space direction="vertical" align="center" size="small">
                          <Text className={`text-xl ${item.disabled ? 'text-gray-500' : ''}`} strong>
                            {item.name}
                          </Text>
                        </Space>
                        {/* Move the circle to bottom-right */}
                        <Circle
                          className="absolute bottom-3 right-3"
                          fill={
                            item.status === 'green'
                              ? 'green'
                              : item.status === 'red'
                              ? 'red'
                              : 'yellow'
                          }
                        />
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
