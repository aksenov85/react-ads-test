import React from 'react';
import { PropTypes } from 'prop-types';
import { Bling as GPT } from "@codingcatdev/react-gpt";
import styles from './styles';

class InContentAd extends React.Component {
  constructor({ refresh = null, index = 1 }) {
    super();
    this.refresh = refresh;
    this.index = index;
    this.divId = `div-gpt-ad-in-content-${index}`;
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

  render() {
    return (
      <GPT 
        id={this.divId}
        style={styles.gptAdSlot}
        adUnitPath="/5186114/Startseite"
        sizeMapping={[
          { viewport: [783, 0], slot: [[728, 90], [300, 250]] },
          { viewport: [320, 0], slot: [300, 250] },
          { viewport: [0, 0], slot: [] }
        ]}
        targeting={{ pos: this.divId, env: 'test' }}
      />
    );
  }
}

InContentAd.propTypes = {
  refresh: PropTypes.number,
  index: PropTypes.number
};

export default InContentAd;