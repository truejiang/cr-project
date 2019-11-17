import React from 'react'
import { ScrollWrapperStyle } from './styled'

class ScrollWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollY: 0
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      this.setState(() => ({
        scrollY: window.scrollY
      }))
    }
  }

  render() {
    const scrollY = this.state.scrollY
    return (
      <ScrollWrapperStyle>
        <section className="page-wrapper">
            <div className="scroll-wrapper" style={{ transform: `translate3d(0px, -${scrollY}px, 0px)`}}>
              {this.props.children}
            </div>
        </section>
      </ScrollWrapperStyle>
    )
  }
}

export default ScrollWrapper