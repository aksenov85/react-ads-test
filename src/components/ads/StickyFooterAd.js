import React from 'react';
import { PropTypes } from 'prop-types';
import { Bling as GPT } from "@codingcatdev/react-gpt";
import styles from './styles';

class StickyBottomAd extends React.Component {
  constructor({ refresh = null }) {
    super();
    this.refresh = refresh;
    this.divId = 'div-gpt-ad-sticky-footer';
  }

  componentDidMount() {
    if (this.refresh) {
      setTimeout(() => {
        const slots = window.googletag.pubads().getSlots();
        const slot = slots.find(i => i.getSlotElementId() === this.divId);

        if (slot) {
          this.interval = window.setInterval(() => { 
            GPT.refresh([slot]);
          }, this.refresh);
        }
      }, 1000);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      window.clearInterval(this.interval);
    }
  }

  closeAdHandler() {
    const slots = window.googletag.pubads().getSlots();
    const slot = slots.find(i => i.getSlotElementId() === this.divId);

    if (slot) {
      if (this.interval) {
        window.clearInterval(this.interval);
      }
      window.googletag.destroySlots([slot]);
      document.getElementById('ad-sticky-footer-container').style.display = 'none';
    }
  };

  render() {
    return (
      <div className="ad-sticky-slot" id="ad-sticky-footer-container">
        <div className="ad-sticky-close-button" onClick={this.closeAdHandler.bind(this)}>X</div>
          <GPT 
            id={this.divId}
            style={styles.gptAdSlot}
            adUnitPath="/115975610/quizzzes-com-ad-unit"
            sizeMapping={[
              { viewport: [783, 0], slot: [728, 90] },
              { viewport: [320, 0], slot: [320, 50] },
              { viewport: [0, 0], slot: [] }
            ]}
            targeting={{ pos: this.divId, env: 'test' }}
          />
      </div>
    );
  }
};

StickyBottomAd.propTypes = {
  refresh: PropTypes.number
};

export default StickyBottomAd;