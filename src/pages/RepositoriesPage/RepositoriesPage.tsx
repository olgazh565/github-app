import { Pagination, Spin } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/useAppSelector'
import { setRepositoriesPage } from '../../store/repositories/repositoriesActionCreator'
import RepositoriesTable from '../../components/RepositoriesTable/RepositoriesTable'
import RepositoriesSearch from '../../components/Search/RepositoriesSearch'
import './RepositoriesPage.css'

const RepositoriesPage = () => {
    const dispatch: any = useDispatch();
    const {loading, error} = useAppSelector(state => state.repositories)
    const [current, setCurrent] = useState(localStorage.getItem('pageNumber'))

  return (
    <div>
        <h1 style={{textAlign:'center', paddingTop: '15px'}}>Github Dashboard</h1>

        <RepositoriesSearch />

        {loading && (
            <div className="spin">
                <Spin style={{textAlign: 'center'}} size={"large"}/>
            </div>
        )}
        
        {!error && 
            <RepositoriesTable />      
        } 
        
        <div style={{paddingBottom: '30px', display: 'flex', justifyContent: 'center'}}>
            <Pagination 
                defaultCurrent={1} 
                current={Number(current)}
                total={100}
                onChange={(newPageNumber) => {
                    dispatch(setRepositoriesPage(newPageNumber))
                    localStorage.setItem('pageNumber', String(newPageNumber))
                    setCurrent(String(newPageNumber))
                    }
                }
                showSizeChanger={false}                
            />
        </div>
    </div>
  )
}

export default RepositoriesPage