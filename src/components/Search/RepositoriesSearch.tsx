import Search from 'antd/es/input/Search';
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchRepositoriesOperation } from '../../store/repositories/fetchRepositoresOperation';
import { setSearchRepositories } from '../../store/repositories/repositoriesActionCreator';

const RepositoriesSearch = () => {

  const dispatch: any = useDispatch();    
 
  return (
    <div style={{margin: "10px auto", width: "90%"}}>
        
        <Search
          placeholder={"input repository name"}          
          enterButton={"Search"}
          size={"large"}
          onSearch={((value, page) => {
            if (value.length) {
              dispatch(setSearchRepositories(value))
              localStorage.setItem('search', value)
                          
            } else {
              localStorage.removeItem('search')
              dispatch(fetchRepositoriesOperation(Number(page)))              
              }
          })}    
        />
    </div>
  )
}

export default RepositoriesSearch