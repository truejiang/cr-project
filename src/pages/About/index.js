import React from 'react'
import { AboutWrapperStyled } from './styled'
import top2_bg from './top2_bg.png'

const About = (props) => {
  document.body.style = 'background-color: #121212'

  return (
    <AboutWrapperStyled>
      <section className="page-section section--introduction">
        <div className="intro-wrapper"></div>
      </section>
      <section className="page-section section--grid grid--part1">
        <div className="section-wrapper">
          <div className="grid__col-8 offset__left--2 offset__right--2 col_image col_image--fluid grid--align-center grid--justify-center">
            <img src={top2_bg}/>
          </div>
        </div>
      </section>
    </AboutWrapperStyled>
  )
}

export default About