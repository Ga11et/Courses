import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { FindCoursePage } from './pages/findCourse/findCourse';
import { ReviewsPage } from './pages/reviews/reviewsPage';
import { SkillboxReviewPage } from './pages/schoolReview/skillbox/skillboxReviewPage';
import { Stocks } from './pages/stocks/stocks';
import { TestPage } from './pages/testPage/testPage';

type AppPropsType = {

}
const App: FC<AppPropsType> = ({ }) => {

  return <>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='findcourse' element={<FindCoursePage />} />
        <Route path='stocks' element={<Stocks />} />
        <Route path='test' element={<TestPage />} />
        <Route path='reviews' element={<ReviewsPage />} />
        <Route path='reviews/skillbox' element={<SkillboxReviewPage />} />
        <Route path='*' element={<FindCoursePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
