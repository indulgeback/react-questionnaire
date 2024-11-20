import { Input } from 'antd'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const { Search } = Input

const ListSearch: React.FC<{ searchChange: (search: string) => void }> = ({ searchChange }) => {
  const [value, setValue] = useState('')
  const [searchParams] = useSearchParams()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSearch = (value: string) => {
    searchChange(value)
  }

  return (
    <Search
      placeholder="搜索"
      allowClear
      size="large"
      value={value}
      onSearch={handleSearch}
      onChange={handleChange}
    />
  )
}

export default ListSearch
