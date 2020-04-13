import React, { Component } from 'react';

export default class ToTopBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    let scrollComponent = this;
    document.addEventListener('scroll', function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className='scroll-to-top'>
        {is_visible && (
          <div onClick={() => this.scrollToTop()} style={topStyle}>
            <i className='far fa-arrow-alt-circle-up text-light fa-2x'></i>
          </div>
        )}
      </div>
    );
  }
}

const topStyle = {
  position: 'fixed',
  bottom: '15px',
  right: '25px',
};
