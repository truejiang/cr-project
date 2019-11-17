import styled from 'styled-components'

export const BannerWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  .custom-arrow-thumb{
    min-height: 100vh;
  }
  .custom-arrow-thumb .user-arrow {
    top: 50%;
    margin-top: -40px;
  }
  .custom-arrow-thumb .user-arrow .img-wrapper {
    width: 120px;
    height: 80px;
    float: left;
    position: relative;
  }
  .custom-arrow-thumb .user-arrow .img-wrapper li {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: absolute;
  }
  .custom-arrow-thumb .user-arrow .arrow {
    width: 20px;
    height: 80px;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
  }
  .custom-arrow-thumb .user-arrow .arrow:before,
  .custom-arrow-thumb .user-arrow .arrow:after {
    width: 2px;
    height: 15px;
    background: #fff;
    display: block;
    content: ' ';
    position: absolute;
  }
  .custom-arrow-thumb .user-arrow.next {
    right: -120px;
  }
  .custom-arrow-thumb .user-arrow.next .arrow {
    float: left;
  }
  .custom-arrow-thumb .user-arrow.next .arrow:before {
    -webkit-transform: rotate(-40deg);
            transform: rotate(-40deg);
    top: 28px;
    left: 10px;
  }
  .custom-arrow-thumb .user-arrow.next .arrow:after {
    -webkit-transform: rotate(40deg);
            transform: rotate(40deg);
    bottom: 27px;
    left: 10px;
  }
  .custom-arrow-thumb .user-arrow.prev {
    left: -120px;
  }
  .custom-arrow-thumb .user-arrow.prev .arrow {
    float: right;
  }
  .custom-arrow-thumb .user-arrow.prev .arrow:before {
    -webkit-transform: rotate(40deg);
            transform: rotate(40deg);
    top: 28px;
    left: 8px;
  }
  .custom-arrow-thumb .user-arrow.prev .arrow:after {
    -webkit-transform: rotate(-40deg);
            transform: rotate(-40deg);
    bottom: 27px;
    left: 8px;
  }
  .custom-arrow-thumb .user-thumb {
    overflow: hidden;
    background: rgba(255, 255, 255, 0.15);
    height: 40px;
  }
  .custom-arrow-thumb .user-thumb > span {
    width: 50px;
    height: 30px;
    margin: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    -webkit-transition: background .3s;
            transition: background .3s;
    background: transparent;
  }
  .custom-arrow-thumb .user-thumb > span.active {
    background: rgba(255, 255, 255, 0.45);
  }
  .custom-arrow-thumb .user-thumb > span i {
    display: block;
    width: 46px;
    height: 26px;
    margin: 2px;
    background-size: cover;
    background-position: center;
  }
  .banner-anim-elem, .banner-anim-elem > * {
    min-height: 100vh;
  }
`