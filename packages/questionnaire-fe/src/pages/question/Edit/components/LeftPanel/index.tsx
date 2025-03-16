import React from 'react'
import { Tabs } from 'antd'
import ComponentMarket from './ComponentMarket'
import ComponentLayer from './ComponentLayer'
import { useState } from 'react'

const LeftPanel: React.FC = () => {
  const [activeKey, setActiveKey] = useState('1')
  return (
    <Tabs defaultActiveKey="1" type="card" onChange={setActiveKey}>
      <Tabs.TabPane tab="物料市场" key="1">
        <ComponentMarket />
      </Tabs.TabPane>
      <Tabs.TabPane tab="问卷图层" key="2">
        <ComponentLayer />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default LeftPanel
