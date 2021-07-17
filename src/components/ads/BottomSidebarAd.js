import React from 'react';
import { PropTypes } from 'prop-types';
import { Bling as GPT } from "@codingcatdev/react-gpt";
import styles from './styles'

class BottomSidebarAd extends React.Component {
  constructor({ refresh = null }) {
    super();
    this.refresh = refresh;
    this.divId = 'div-gpt-ad-bottom-sidebar';
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
          adUnitPath="/5186114/sidebar"
          sizeMapping={[
            { viewport: [783, 0], slot: [[300, 600], [160, 600], [300, 250]] },
            { viewport: [320, 0], slot: [] },
            { viewport: [0, 0], slot: [] }
          ]}
          targeting={{ pos: this.divId, env: 'test' }}
        />
    );
  }
}

BottomSidebarAd.propTypes = {
  refresh: PropTypes.number
};

export default BottomSidebarAd;