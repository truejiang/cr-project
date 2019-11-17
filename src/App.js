import React from 'react';
import { GlobalStyleWrapper } from './resetcss'
import { AppRouter } from '@/router'
import Nav from '@/components/Nav' 
import Footer from '@/components/Footer' 
import ScrollWrapper from '@/components/ScrollWrapper'
class App extends React.Component{
  render() {
    return (
      <div className="App">
        <GlobalStyleWrapper />
        <Nav />
        <ScrollWrapper>
          <AppRouter />
        </ScrollWrapper>
        <Footer />
      </div>
    )
  }
}

export default App
