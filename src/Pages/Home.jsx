import React from 'react'
import ImagesAndDiscription from '../components/ImagesAndDiscription'

import GoalPage from '../components/GoalPage'
import Contact from './Contact'
import SlidingImage from '../components/SlidingImage'
import Ourstory from '../components/Ourstory'

const Home = () => {
  return (
    <>
    <ImagesAndDiscription/>

    <GoalPage/>
    <Ourstory/>
    <SlidingImage/>
    <Contact/>
    </>
  )
}

export default Home
