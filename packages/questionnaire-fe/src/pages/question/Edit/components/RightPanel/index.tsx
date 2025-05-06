import React, { useState } from 'react'
import { Tabs } from 'antd'
import ComponentConfig from './ComponentConfig'
import PageConfig from './PageConfig'

const RightPanel: React.FC = () => {
  const [activeKey, setActiveKey] = useState('1')
  return (
    <Tabs defaultActiveKey="1" type="card" onChange={setActiveKey}>
      <Tabs.TabPane tab="物料配置" key="1">
        <ComponentConfig />
      </Tabs.TabPane>
      <Tabs.TabPane tab="页面配置" key="2">
        <PageConfig />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default RightPanel
