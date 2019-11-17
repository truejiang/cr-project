import styled from 'styled-components'
import a_SeriferNr_Bold_ttf from '@/asset/fonts/a_SeriferNr_Bold.ttf'
import a_SeriferNr_Bold_eot from '@/asset/fonts/a_SeriferNr_Bold.eot'

const get_grid__col_sm_x = (x) => {
  const unit = 8.333333333333332
  return `width: ${x * unit}%`
}

export const SectionContentWarpper = styled.section`
    @font-face {
      font-family: 'a_SeriferNr_Bold';
      src: url('${a_SeriferNr_Bold_ttf}');
    }
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
      margin-top: 450px;
      .featured-project-0 {
        ${get_grid__col_sm_x(3)};
      }
      .featured-project-3 {
        ${get_grid__col_sm_x(6)};
      }
    }
    visibility: inherit;
    opacity: 1;
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    .scroll-wrapper {
      width: 100%;
      background-color: #fff;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      .section-banner {
        min-height: 100vh;
        position: relative;
      }
      .section--workCta {
        background-color: #f7f7f7;
        padding-top: 150px;
        padding-bottom: 100px;
        position: relative;
        top: 2px;
        z-index: 99;
        .section-wrapper {
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
          width: 100%;
          .text-wrapper {
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
            z-index: 2;
            p {
              color: #000;
              font-family: "Graphik Regular";
              font-size: 24px;
              line-height: auto;
              letter-spacing: .5em;
              text-transform: uppercase;
              display: block;
              margin-bottom: 10px;
            }
            >div {
              margin: 55px 0;
              font-size: 56px;
              display: flex;
              width: 340px;
              justify-content: space-between;
            }
          }
        }
      }
      .section-work {
        margin-top: 5%;
        margin-bottom: 5%;
        position: relative;
        background-color: #fff;
        .section-wrapper {
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
          width: 100%;
          .featured-project {
            min-height: 680px;
            // height: 100vh;
            position: relative;
            .project-imageWrapper {
              // padding: 66px 70px;
              position: relative;
              .project-imageMask {
                position: relative;
                overflow: hidden;
                line-height: 0;
                z-index: 2;
                .project-image--regular {
                  position: absolute;
                  z-index: 1;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: auto;
                  opacity: 0;
                  transition: 1s opacity ease-in-out;
                  will-change: opacity;
                }
              }
              .project-content {
                position: absolute;
                font-size: 72px;
                color: #000;
                font-family: 'a_SeriferNr_Bold';
                letter-spacing: 4px;
                z-index: 66;
                &.project-0 {
                  right: -141px;
                  bottom: -85px;
                }
                &.project-1 {
                  top: -3px;
                  left: 334px;
                  text-align: center;
                  span {
                    margin: 0 22px;
                  }
                }
                &.project-3 {
                  left: -258px;
                  top: 190px;
                }
                &.project-4 {
                  top: 120px;
                  right: -405px;
                  >p {
                    width: 600px;
                    &.right {
                      text-align: right;
                    }
                  }
                }
                >p {
                  margin: 10px 0;
                }
              }
              .project-des {
                position: absolute;
                width: 120%;
                text-align: center;
                font-size: 30px;
                color: #000000;
                font-family: PingFangSC-Light;
                letter-spacing: 4px;
                z-index: 66;
                &.project-2 {
                  top: 222px;
                  left: 430px;
                }
                &.project-3 {
                  top: 335px;
                  left: -391px;
                }
                >p {
                  margin: 20px 0;
                }
              }
              .background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                background-color: #ecf3ec;
              }
            }
          }
        }
      }
    }
`
