import React, { CSSProperties } from 'react'
import { Tabs } from 'antd'
import ComponentMarket from './ComponentMarket'
import ComponentLayer from './ComponentLayer'
import { useState } from 'react'

const tabContentStyle: CSSProperties = {
  height: '100%',
  overflowY: 'auto',
  padding: '4px',
  msOverflowStyle: 'none', // IE 和 Edge
  scrollbarWidth: 'none' // Firefox
}

const tabsStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}

// 覆盖 Ant Design 的内部样式
const customTabsStyles = `
  .ant-tabs-content {
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
  .ant-tabs-tabpane {
    height: 100%;
    overflow: hidden;
  }
  .ant-tabs-content-holder {
    flex: 1;
    overflow: hidden;
  }
`

const LeftPanel: React.FC = () => {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <div className="h-full flex flex-col overflow-hidden scrollbar-hide">
      <style>{customTabsStyles}</style>
      <Tabs
        defaultActiveKey="1"
        type="card"
        onChange={setActiveKey}
        style={tabsStyle}
        tabBarStyle={{ marginBottom: 0 }}
      >
        <Tabs.TabPane tab="物料市场" key="1">
          <div style={tabContentStyle}>
            <ComponentMarket />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="问卷图层" key="2">
          <div style={tabContentStyle}>
            <ComponentLayer />
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default LeftPanel
