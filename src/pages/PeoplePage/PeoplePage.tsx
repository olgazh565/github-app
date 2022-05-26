import { Card } from 'antd'
import React, { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector';

const PeoplePage = () => {

    const {id} = useParams();
    const {people} = useAppSelector(state => state.people)
  
    const repo = useMemo(() => {
        if (id) {

            const i = people.findIndex(item => item.id === Number(id))
            
            return people[i]            
        }
        return people[0]
    }, [people])

    return (
        <div>
            Repository #{id}

            <br />

            <Card
                title={repo.name}
                extra={<Link to={`/people`}>Go back</Link>} 
                style={{ width: "90%", margin: "10px auto"}}
            >
                <p><b>Owner's avatar:</b> <img src={repo.owner.avatar_url} alt="avatar" style={{width: '40px'}}/> </p>
                <p><b>Number of stars:</b> {repo.stargazers_count}</p>
                <p><b>Last commit's date:</b> {repo.pushed_at}</p>                
                <p><b>Owner's nickname:</b> {repo.owner.login}</p>
                <p><b>Owner's URL address:</b> <a href={repo.owner.html_url} target={'_blank'}>{repo.owner.html_url}</a></p>
                <p><b>Used languages:</b> {repo.language ? repo.language : 'undefined'} </p>
                <p><b>Description:</b> {repo.description}</p>
                <p><b>10 most active contributors:</b> <a href={repo.contributors_url} target={'_blank'}>{repo.contributors_url}</a></p>

            </Card>    
        </div>
    )
}

export default PeoplePage