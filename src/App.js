import React, { useEffect, useState } from 'react';
import SearchAppBar from './Components/SearchAppBar'
import ContentTable from './Components/ContentTable'
import Pagination from './Components/Pagination'
import CardDetail from './Components/CardDetail'


import BeersServices from './Services/BeersServices'


const App = () => {
  const [page, setPage] = useState(1);
  const [per_page, setPer_page] = useState(4);
  const [beers, setBeers] = useState([]);
  // const [isLoading, setLoading] = useState(false)
  const [isAsc, setAsc] = useState(true)
  const [isDetail, setIsDetail] = useState(false)
  const [itemDetail, setItemDetail] = useState({})

  useEffect(() => {
    // setLoading(true)
    getBeersByPage()
  }, [page])

  const styleLoading = {
    textAlign: 'center',
    fontSize: '30px'
  }


  const sortThings = (a, b) => {
    return a > b ? -1 : b > a ? 1 : 0;
  }

  const orderAscDescByName = () => {
    let newBeers = [];
    if (isAsc) {
      newBeers = beers.sort((a, b) => sortThings(b.name, a.name));
      setAsc(false)
    } else {
      newBeers = beers.sort((a, b) => sortThings(a.name, b.name));
      setAsc(true)
    }
    setBeers([])
    setTimeout(() => {
      setBeers(newBeers)
    });
  }

  const changePage = (newPage) => {
    setPage(newPage + 1);
  }

  const getBeersByPage = () => {
    // setLoading(true)

    BeersServices.getBeers(page, per_page, '')
      .then(res => {
        // setLoading(false)
        setBeers(res.data)
      })
  }

  const getBeersByName = (e) => {
    // setLoading(true)

    e.preventDefault()
    const name = e.target[0].value
    BeersServices.getBeers(page, per_page, name)
      .then(res => {
        // setLoading(false)
        setBeers(res.data)
      })
  }

  const goToDetail = (itemDetail) => {
    setIsDetail(!isDetail)
    setItemDetail(itemDetail)
  }


  const goToBack = () => {
    setIsDetail(!isDetail)
  }


  return (
    <div>
      <SearchAppBar searchByName={getBeersByName} isAsc={isAsc} orderAscDescByName={orderAscDescByName} />
      {/* {isLoading && (
        <p style={styleLoading}>Loading . . . </p>
      )} */}
      {!isDetail && (
        <ContentTable title='List Beers' beers={beers} goToDetail={goToDetail} />
      )}
      {!isDetail && (
        <Pagination changePage={changePage} />
      )}
      {isDetail && (
        <CardDetail itemDetail={itemDetail} goToBack={goToBack} />
      )}

    </div>
  )
}
export default App;

