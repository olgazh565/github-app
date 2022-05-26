import Search from 'antd/es/input/Search';
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchPeople } from '../../store/people/peopleActionCreator';

const PeopleSearch = () => {

    const dispatch: any = useDispatch();    

  return (
    <div style={{margin: "10px auto", width: "90%"}}>
        
        <Search
          placeholder={"input repository name"}
          enterButton={"Search"}
          size={"large"}
          onSearch={((value) => {
            if (value.length) {
              dispatch(setSearchPeople(value))
              console.log(value);
              
            } 
          })}    
        />
    </div>
  )
}

export default PeopleSearch