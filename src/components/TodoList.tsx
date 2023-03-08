import React, {useState} from 'react'
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import {v4 as uuidv4} from 'uuid';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Todo, { TodoProps } from './Todo';
import { addTodo, selectTodoList } from './todoListSlice';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useAppDispatch();

  const todoList = useAppSelector(selectTodoList);

  const handleInputChange = (value: string) => {
    setTodoName(value);
  };

  const handlePriorityChange = (value: string) => {
    setPriority(value)
  };

  const handleAddButtonClick = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false,
    }))
    setTodoName('');
    setPriority('Medium');
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo: TodoProps) => (
          <div key={todo.id}>
            <Todo
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
          </div>
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e) => handleInputChange(e.target.value)} />
          <Select
            defaultValue='Medium'
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
