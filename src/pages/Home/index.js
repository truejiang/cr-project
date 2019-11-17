import React from 'react'
import Banner from '@/components/Banner'
import { SectionContentWarpper } from './styled'
import img_1 from './img_1.png'
import img_2 from './img_2.png'
import img_3 from './img_3.png'
import img_4 from './img_4.png'


const imgArrays = [img_1,img_2,img_3,img_4]
const textArrays = ['WE FOCUS ON COM']
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0
    }
  }

  componentDidMount() {
    document.body.style = 'background-color: #fff'
    window.onscroll = () => {
      this.setState(() => ({
        scrollY: window.scrollY
      }))
    }
  }

  render() {
    const scrollY = this.state.scrollY
    return (
      <SectionContentWarpper>
        <section className="page-wrapper">
          <div className="scroll-wrapper" style={{ transform: `translate3d(0px, -${scrollY}px, 0px)`}}>
            <section className="page-section section-banner">
              <Banner />
            </section>
            <section className="page-section section-work">
              <div className="section-wrapper">
                <div className="featured-titles-wrapper">

                </div>
                <div className="featured-project">
                  <div className="project-assetWrapper grid">
                    <div className="grid__col-1 featured-project-0"></div>
                    <div className="grid__col-10 grid__col-sm-5 grid__col--bleed project-imageWrapper">
                      <div className="project-imageMask">
                        <img src={imgArrays[0]}/>
                      </div>
                      <div className="project-content project-0">
                        <p className="top">
                          <span>WE</span>
                          <span style={{margin: '0 46px'}}>FOCUS</span>
                          <span>ON</span>
                        </p>
                        <p className="middle" style={{letterSpacing: '11px'}}>COMMERCIAL</p>
                        <p className="bottom">PHOTOGRAPHY</p>
                      </div>
                    </div>
                  </div>
                  <div className="project-assetWrapper grid">
                    <div className="grid__col-10 grid__col-sm-5 grid__col--bleed project-imageWrapper">
                      <div className="project-imageMask">
                        <img src={imgArrays[1]}/>
                      </div>
                      <div className="project-content project-1">
                        <p className="top">
                          <span>Not</span>
                          <span>JUST</span>
                          <span>A</span>
                          <span>SIMPLE</span>
                        </p>
                        <p className="bottom">
                          <span>AIMING</span>
                          <span>SHOT</span>
                        </p>
                      </div>
                      <div className="project-des project-1">
                        <p>我们提供全面的商业摄影服务，</p>
                        <p>以处理您的所有网址，广告，商业，产品</p>
                        <p>场所等时尚摄影需求</p>
                      </div>
                    </div>
                  </div>
                  <div className="project-assetWrapper grid">
                    <div className="grid__col-1 featured-project-3"></div>
                    <div className="grid__col-10 grid__col-sm-5 grid__col--bleed project-imageWrapper">
                      <div className="project-imageMask">
                        <img src={imgArrays[2]}/>
                      </div>
                      <div className="project-content project-3">
                        <p className="bottom">CONCEPT</p>
                      </div>
                      <div className="project-des project-3">
                        <p>我们希望能让您从人群中脱颖而</p>
                        <p>出，而不是融入其</p>
                        <p>中，任何商业摄影项目都能带来</p>
                        <p>独特的挑战和障</p>
                        <p>碍。我们的摄影师有着丰富的经</p>
                        <p>验和专业的处理水</p>
                        <p>平，让您轻松无忧</p>
                      </div>
                    </div>
                  </div>
                  <div className="project-assetWrapper grid">
                    <div className="grid__col-10 grid__col-sm-5 grid__col--bleed project-imageWrapper">
                      <div className="project-imageMask">
                        <img src={imgArrays[3]}/>
                      </div>
                      <div className="project-content project-4">
                        <p className="left">PROFESSIONAL</p>
                        <p className="right">BRAND</p>
                        <p className="left">PHOTOGRAPHY</p>
                        <p className="right">SERVICE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section section--workCta">
              <div className="section-wrapper">
                <div className="text-wrapper">
                  <p>2016-2019</p>
                  <div>
                    <span>ALL</span>
                    <span>CASES</span>
                  </div>
                  <p>LOOK MORE</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </SectionContentWarpper>
    )
  }
}

export default Home