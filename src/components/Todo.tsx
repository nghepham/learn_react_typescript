import { Checkbox, Row, Tag } from 'antd';
import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { toggleStatus } from './todoListSlice';


const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

function Todo({ id, name, priority, completed}: TodoProps) {
  const [checked, setChecked] = useState(completed)
  const dispatch = useAppDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleStatus(id))
  }

  var {value} = Object.getOwnPropertyDescriptor(priorityColorMapping, priority) as PropertyDescriptor;

  
  console.log({value});

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={value || 'blue'} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}

export interface TodoProps {
  id: string;
  name: string;
  priority: string;
  completed: boolean;
}

export default Todo;
