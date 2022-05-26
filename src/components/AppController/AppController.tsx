import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import AllPeoplePage from '../../pages/AllPeoplePage/AllPeoplePage'
import HomePage from '../../pages/HomePage/HomePage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import PeoplePage from '../../pages/PeoplePage/PeoplePage'
import { fetchPeopleDataOperation, searchPeopleDataOperation } from '../../store/people/fetchPeopleDataOperation'

const AppController = () => {

    const dispatch: any = useDispatch();
    const {pageNumber, search} = useAppSelector(state => state.people)

    useEffect(() => {
        if (search.length) {
            dispatch(searchPeopleDataOperation(pageNumber, search))

        } else {
            dispatch(fetchPeopleDataOperation(pageNumber))  
        }
             
    }, [pageNumber, search])

  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/people'} element={<AllPeoplePage />} />
            <Route path={'/people/:id'} element={<PeoplePage />} />
            <Route path={'/'} element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppController