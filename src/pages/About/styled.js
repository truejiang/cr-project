import styled from 'styled-components'
import top_bg from './top_bg.png'

export const AboutWrapperStyled = styled.section`
  .grid {
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    *display: inline;
    zoom: 1;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    position: relative;
    width: 100%;
    max-width: 100%;
    letter-spacing: -.31em !important;
    *letter-spacing: normal !important;
    word-spacing: -.43em !important;
    list-style-type: none;
  }
  .grid--justify-center {
    text-align: center;
  }
  .page-section {
    z-index: 3;
    position: relative;
    &.section--introduction {
      background-color: #121212;
      min-height: 100vh;
      position: relative;
      .intro-wrapper {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: center;
        position: relative;
        height: 100vh;
        z-index: 2;
        max-width: 1600px;
        margin: 0 auto;
        background-image: url(${top_bg});
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    &.section--grid {
      &.grid--part1 {
        padding-bottom: 14.412%;
        background-color: transparent;
        z-index: 4;
        .section-wrapper {
          max-width: 1440px;
          margin: 0 auto;
          position: relative;
          width: 100%;
        }
      }
    }
  }
  
`