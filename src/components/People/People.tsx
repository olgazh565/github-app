import { Pagination, Space, Spin } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/useAppSelector'
import { setPeoplePage } from '../../store/people/peopleActionCreator'
import PeopleCard from '../PeopleCard/PeopleCard'
import PeopleSearch from '../Search/PeopleSearch'

const People = () => {
    const dispatch: any = useDispatch();
    const {people, loading, error, pageNumber, peopleCount} = useAppSelector(state => state.people)
    console.log(people);
    console.log(peopleCount);      

  return (
    <div>
        <h1>Repositories from page 1</h1>

        <PeopleSearch />

        {loading && (
            <Space size={"large"}>
                <Spin size={"large"}/>
            </Space>
        )}
        
        {!error && (
            people.map((people) => {
                return <PeopleCard key={people.id} people={people}/>
            })
        )} 
        <div style={{paddingBottom: '30px', display: 'flex', justifyContent: 'center'}}>
            <Pagination 
                defaultCurrent={1} 
                // total={peopleCount} 
                current={pageNumber}
                total={100}
                // showTotal={total => `Total ${total} items`}
                onChange={(newPageNumber) => dispatch(setPeoplePage(newPageNumber))}
                showSizeChanger={false}
                
            />
        </div>
    </div>
  )
}

export default People