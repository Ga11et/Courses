import React, { FC } from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { FindCoursePage } from './pages/findCourse/findCourse';

type AppPropsType = {
  
}
const App: FC<AppPropsType> = ({  }) => {

  return <>
    <Header />
    <FindCoursePage />
    <Footer />
  </>
}

export default App;
