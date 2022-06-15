import { Card, Image, Space, Spin } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchContributorsOperation } from '../../store/contributors/fetchContributorsOperation';
import { fetchRepoPageOperation } from '../../store/repository/fetchRepoOperation';
import './RepositoryPage.css' 
import { StarOutlined, TeamOutlined, UserOutlined, ClockCircleOutlined, GithubOutlined, RobotOutlined, EditOutlined } from '@ant-design/icons'
import '../RepositoriesPage/RepositoriesPage.css'
import { clearRepoData } from '../../store/repository/repoActionCreator';
import { clearContributorsData } from '../../store/contributors/contributorsActionCreator';

const RepositoryPage = () => {

    const {id} = useParams();
    const {repo, repoError, repoLoading} = useAppSelector(state => state.repo)
    const {contributors, error, loading} = useAppSelector(state => state.contributors)
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

            return () => {
                dispatch(clearRepoData());
                dispatch(clearContributorsData())
            }
    }, [])     
    
    return (
        <div className="card">
            {repoLoading || loading && (
                <div className="spin" style={{margin: "0 auto"} }>
                    <Spin size="large"/>
                </div>
            )}
            <div className="card-container">
                {!repoError && 
                    <Card
                        title={<div>
                                    <IconText icon={GithubOutlined} text="Repository:" />
                                    &nbsp;&nbsp;{repo.name} 
                               </div>}
                        extra={<Link to={`/`}>
                                    Go back
                               </Link>} 
                        style={{ width: "60%"}}                                  
                    >
                        <div style={{marginBottom: '13px'}}>
                            <b><IconText icon={StarOutlined} text="Stars:" /></b>
                            &nbsp;&nbsp;{repo.stargazers_count} 
                        </div>
                        <div style={{marginBottom: '13px'}}>
                            <b><IconText icon={ClockCircleOutlined} text="Updated on:" /></b>
                            &nbsp;&nbsp;{new Date(repo.pushed_at).toDateString()} 
                        </div>              
                        <div style={{marginBottom: '13px'}}>
                            <b><IconText icon={UserOutlined} text="Owner:" /></b> 
                            <a href={repo?.owner?.html_url} target={'_blank'}>
                                &nbsp;&nbsp;{repo?.owner?.login}
                            </a>
                        </div>
                        <div style={{marginBottom: '13px'}}>
                            <b><IconText icon={RobotOutlined} text="Used languages:" /></b>
                            &nbsp;&nbsp;{repo.language ? repo.language : 'undefined'} 
                        </div>
                        <div style={{marginBottom: '13px'}}>
                            <b><IconText icon={EditOutlined} text="Description:" /></b>
                            &nbsp;&nbsp;{repo.description} 
                        </div>
                        <div style={{marginBottom: '17px'}}>
                            <b><IconText icon={TeamOutlined} text="Most active contributors:" /></b>
                        </div>
                        <ol>
                            {!error && (
                                contributorsFirst10.map((contributor: any) => {
                                    return <li key={contributor.id} style={{paddingBottom: '10px'}}>
                                            <img style={{width: "40px", paddingRight:'10px'}} src={contributor.avatar_url} alt="avatar"/>
                                            <a href={contributor.html_url} target='_blank'>{contributor.login}</a> 
                                            <span style={{paddingLeft: '5px'}}>{contributor.contributions} contributions</span>
                                        </li>
                                })
                            )} 
                        </ol>
                    </Card>
                }              
                <div style={{ width: "40%"}}>
                    <Image src={repo?.owner?.avatar_url ? repo?.owner?.avatar_url : require("./placeholder-image.png")} alt="avatar" style={{ width: "100%"}}/>
                </div>     
            </div>
            
        </div>
    )
}

export default RepositoryPage