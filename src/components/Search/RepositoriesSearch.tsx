import Search from 'antd/es/input/Search';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/useAppSelector';
import { clearSearchData, setSearchRepositories } from '../../store/repositories/repositoriesActionCreator';

const RepositoriesSearch = () => {
  const [value, setValue] = useState(localStorage.search ? localStorage.search : '')
  const dispatch: any = useDispatch();  
  const {search} = useAppSelector(state => state.repositories)  
 
  const onChange = (event: any) => {
    setValue(event.target.value)
  }

  const onSearch = (value: any) => {
    if (value.length) {              
             
      if (value !== search){
        dispatch(setSearchRepositories(value))
        localStorage.setItem('search', value)
      } else 
          return             
                  
    } else {
      localStorage.removeItem('search')
      dispatch(clearSearchData())              
    }       
  }

  return (
    <div style={{margin: "10px auto", width: "90%"}}>        
        <Search 
          placeholder={"input repository name"}          
          enterButton={"Search"}
          allowClear={true}
          value = {value}
          size={"large"}
          onChange={onChange}
          onSearch={onSearch}    
        />
    </div>
  )
}

export default RepositoriesSearch