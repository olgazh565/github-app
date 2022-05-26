import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { IPeople } from '../../store/people/types'

const PeopleCard = ({people}: {people: IPeople}) => {
  return (
    <Card 
        title={people.name} 
        extra={<Link to={`/people/${people.id}`}>More</Link>} 
        style={{ width: "90%", margin: "10px auto"}}
    >
        <p><b>Number of stars:</b> {people.stargazers_count}</p>
        <p><b>Last commit's date:</b> {new Date(people.pushed_at).toDateString()}</p>
        <p><b>Github URL address:</b> <a href={people.html_url} target={'_blank'}>{people.html_url}</a></p>
    </Card>
  )
}

export default PeopleCard