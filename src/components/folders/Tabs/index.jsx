import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';
import Tablero from './Tablero'
import Lista from './Lista'
import './css/styles.css'
import foldersData from '@/data/folders'
export const Tabular = ({}) => {
  return (
    <Tabs className='border-none'
        defaultActiveKey="1"
        items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
        const id = String(i + 1);
            return {
                key: id,
                label: `${id == 1 ? 'Tablero' : 'Lista'}`,
                children: id == 1 ? <Tablero data={foldersData}/> : <Lista data={foldersData}/>,
                icon: id == 1 ? <img src="/svg/folders/tablero.svg" alt="" /> : <img src="/svg/folders/lista.svg" alt="" />,
            };
        })}
    />
  )
}

export default Tabular;