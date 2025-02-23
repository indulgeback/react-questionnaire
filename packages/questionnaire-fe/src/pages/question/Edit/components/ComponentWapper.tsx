import React from 'react'

const ComponentWapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-4 bg-custom-bg-300 rounded-lg mb-2 border-2 border-transparent transition-all duration-200 hover:border-custom-bg-200 cursor-move">
      {children}
    </div>
  )
}

export default ComponentWapper
