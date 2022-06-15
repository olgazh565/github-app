import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import RepositoryPage from '../../pages/RepositoryPage/RepositoryPage'
import { fetchRepositoriesOperation, searchRepositoriesOperation } from '../../store/repositories/fetchRepositoresOperation'
import RepositoriesPage from '../../pages/RepositoriesPage/RepositoriesPage'

const AppController = () => {

    const dispatch: any = useDispatch();
    const {pageNumber, search} = useAppSelector(state => state.repositories)       

    useEffect(() => {
        if (search.length) {
            dispatch(searchRepositoriesOperation(pageNumber, search))
       
        } else {
            dispatch(fetchRepositoriesOperation(pageNumber))
        }             
    }, [pageNumber, search])

  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<RepositoriesPage />} />
            <Route path={'/repository/:id'} element={<RepositoryPage />} />
            <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppController