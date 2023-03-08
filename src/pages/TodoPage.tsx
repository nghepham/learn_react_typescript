import React from 'react'
import { Divider } from 'antd'
import Filters from '../components/Filters'
import TodoList from '../components/TodoList'

export default function TodoPage() {
  return (
    <div
      style={{
        width: 500,
        margin: '16px auto 0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '10px 20px',
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '85vh',
      }}>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  )
}
