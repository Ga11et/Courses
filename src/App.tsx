import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { FindCoursePage } from './pages/findCourse/findCourse';
import { Stocks } from './pages/stocks/stocks';

type AppPropsType = {

}
const App: FC<AppPropsType> = ({ }) => {

  return <>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/findcourse' element={<FindCoursePage />} />
        <Route path='/stocks' element={<Stocks />} />
        <Route path='*' element={<div>Redirect to /findcourse</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
