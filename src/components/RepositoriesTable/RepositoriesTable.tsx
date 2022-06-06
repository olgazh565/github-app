import { Space, Table } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'

const RepositoriesTable = () => {
  const {repositories} = useAppSelector(state => state.repositories)
  
  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const columns = [ 
  {
    title: 'Repository name',
    dataIndex: 'name',
    key: 'id',
    render: (text: any) => 
    <Link to={`/repository/${repositories[repositories.findIndex(item => item.name == text)].id}`}>
    {text}
    </Link>,
  },
  {
    title: <IconText icon={StarOutlined} text="Stars" key="list-vertical-star-o"/>,
    dataIndex: 'stargazers_count',
    key: 'id'       
  },  
  {
    title: 'Updated on',
    dataIndex: 'pushed_at',
    key: 'id',
    render: (text: any) => new Date(text).toDateString()
  },
  {
    title: 'Github URL adress',
    dataIndex: 'html_url',
    key: 'id',
    render: (text: any) => <a href={text} target='_blank'>{text}</a>
  }]

  return (
    <div style={{margin: "10px auto", width: "90%"}}>
      <Table columns={columns} dataSource={repositories} pagination={false} />  
    </div>      
  )
}

export default RepositoriesTable