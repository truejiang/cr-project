import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #ebebeb;
  position: fixed;
  padding-top: 25%;
  width: 100%;
  overflow: hidden;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 0;
  .footer-wrapper {
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    .follow {
      font-family：'SIL-Hei-Med-Jian';
      font-size: 32px;
      color: #000;
      letter-spacing: 10px;
      >span {
        &:first-child {
          padding-right: 40px;
        }
      }
    }
    .follow-list{
      color: #fff;
      font-size: 48px;
      margin-top: 146px;
      display: flex;
      justify-content: space-around;
    }
  }
`