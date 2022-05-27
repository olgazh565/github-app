import { Card } from 'antd'
import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchRepoPageOperation } from '../../store/people/fetchPeopleDataOperation';

const PeoplePage = () => {

    const {id} = useParams();
    const {people, id: anotherID} = useAppSelector(state => state.people)
    const dispatch: any = useDispatch();
          
    useEffect(() => {
        
        dispatch(fetchRepoPageOperation(Number(id)))       
        console.log(Number(id));
        
             
    }, [id])     
       
  
    // const repo = useMemo(() => {
    //     // if (id) {

    //         // const i = people.findIndex(item => item.id === Number(id))
            
    //         // return people[i] 
    //         // return people[anotherID]   
            
    //         console.log(people[anotherID]);
            
    //     // }
    //     // return people[0]
    // }, [people])


    // const repo = people[anotherID];

    console.log(people);
    console.log(id);
    console.log(anotherID);
    console.log(people[anotherID]);
    console.log(people[Number(id)]);

    return (
        <div>
            Repository id {id}

            <br />

            <Card
                // title={repo.name}
                extra={<Link to={`/people`}>Go back</Link>} 
                style={{ width: "90%", margin: "10px auto"}}
            >
                {/* <p><b>Owner's avatar:</b> <img src={repo.owner.avatar_url} alt="avatar" style={{width: '40px'}}/> </p>
                <p><b>Number of stars:</b> {repo.stargazers_count}</p>
                <p><b>Last commit's date:</b> {new Date(repo.pushed_at).toDateString()}</p>                
                <p><b>Owner's nickname:</b> {repo.owner.login}</p>
                <p><b>Owner's URL address:</b> <a href={repo.owner.html_url} target={'_blank'}>{repo.owner.html_url}</a></p>
                <p><b>Used languages:</b> {repo.language ? repo.language : 'undefined'} </p>
                <p><b>Description:</b> {repo.description}</p>
                <p><b>10 most active contributors:</b> <a href={repo.contributors_url} target={'_blank'}>{repo.contributors_url}</a></p> */}

            </Card>     
        </div>
    )
}

export default PeoplePage