import { Card, Space } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchContributorsOperation } from '../../store/contributors/fetchContributorsOperation';
import { fetchRepoPageOperation } from '../../store/repository/fetchRepoOperation';
import './RepositoryPage.css' 
import { StarOutlined } from '@ant-design/icons'

const RepositoryPage = () => {

    const {id} = useParams();
    const {repo} = useAppSelector(state => state.repo)
    const {contributors, error} = useAppSelector(state => state.contributors)
    const dispatch: any = useDispatch(); 
    const contributorsFirst10 = contributors.slice(0, 10);
    const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );                       
                   
    useEffect(() => {        
            dispatch(fetchRepoPageOperation(Number(id)));
            dispatch(fetchContributorsOperation(Number(id))); 
    }, [id])     
    
    return (
        <div className="site-card-border-less-wrapper" style={{ display: 'flex', justifyContent: 'center'}}>
            {!error && 
                <Card
                    title={`REPOSITORY'S NAME: ${repo.name}`}
                    // extra={<Link to={`/`}>Go back</Link>} 
                    style={{ width: "60%", margin: "10px auto"}}                
                >
                    <p><b><IconText icon={StarOutlined} text="Stars:" key="list-vertical-star-o"/></b> {repo.stargazers_count}</p>
                    <p><b>Updated:</b> {new Date(repo.pushed_at).toDateString()}</p>                
                    <p><b>Owner:</b> <a href={repo?.owner?.html_url} target={'_blank'}>{repo?.owner?.login}</a></p>
                    <p><b>Used languages:</b> {repo.language ? repo.language : 'undefined'} </p>
                    <p><b>Description:</b> {repo.description}</p>
                    <p><b>Most active contributors:</b></p>
                    <ol>
                        {!error && (
                            contributorsFirst10.map((contributor: any) => {
                            return <li key={contributor.id} style={{paddingBottom: '5px'}}>
                                <img style={{width: "40px"}} src={contributor.avatar_url} alt="avatar"/> <a href={contributor.html_url} target='_blank'>{contributor.login}</a> | {contributor.contributions} contributions
                                </li>
                            })
                        )} 
                    </ol>
                </Card>
            }
            <div style={{ width: "40%", margin: "10px auto"}}>
                <img src={repo?.owner?.avatar_url} alt="avatar" style={{ width: "100%"}}/>
            </div>     
        </div>
    )
}

export default RepositoryPage