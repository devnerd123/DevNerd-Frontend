import React from 'react'
import Header from '../../helpers/Header'
import CompanyList from './CompanyList'

const CompaniesPage = () => {
  return (
    <>
      <Header heading={"Hand-picked Tech Companies in the World"} sx1={{fontSize:"50px"}}
        subHeading={"Explore curated companies for software development & tech in the World."}
      />
      <CompanyList />
    </>
  )
}

export default CompaniesPage