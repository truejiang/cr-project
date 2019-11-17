import styled from 'styled-components'
import logo from './logo.png'

export const NavWrapper = styled.nav`
  position: fixed;
  pointer-events: none;
  width: 86%;
  margin-left: 7%;
  top: 40px;
  height: 60px;
  transition: all .3s ease-out;
  z-index: 99;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-align: center;
  align-items: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
  .logo {
    width: 122px;
    height: 122px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    margin-left: 25px;
  }
  .menu {
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    pointer-events: auto;
    >li {
      position: relative;
      cursor: pointer;
      >a {
        padding: 20px 0;
        color: #000;
        opacity: .75;
        font-size: 18px;
        line-height: initial;
        letter-spacing: .01em;
        display: block;
        margin: 0 38px;
        cursor: pointer;
        transition: color .5s ease-in-out,opacity .5s ease-in-out;
        position: relative;
        z-index: 2;
      }
    }
  }
`