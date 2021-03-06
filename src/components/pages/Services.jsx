import React from 'react'
import { ServicesOffered, ServicesMain, TechUsed, GetStarted, MainDisplay } from '../index'


function Services() {
  return (
    <>
      <MainDisplay
        mobileViewTitle="What you need to grow online!"
        mobileViewSubtitle="lets go get this"
        mainViewTitle="what you need to grow online!"
        mainViewSubtitle="lets go get"
        href={`https://images.unsplash.com/photo-1586077427825-15dca6b44dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
      />
      <ServicesMain />
      <ServicesOffered />
      <TechUsed />
      <GetStarted />
    </>
  )
}

export default Services
