import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'

import {Route, Routes} from 'react-router-dom'

function Page() {
  return (
    <Routes>
      <Route path='/recipelab' element={<Home />}></Route>
      <Route path='recipelab/cuisine/:type' element={<Cuisine />}></Route>
    </Routes>
  )
}

export default Page