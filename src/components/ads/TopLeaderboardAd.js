import React from 'react';
import { PropTypes } from 'prop-types';
import { Bling as GPT } from "@codingcatdev/react-gpt";
import styles from './styles';

class TopLeaderboardAd extends React.Component {
  constructor({ refresh = null }) {
    super();
    this.refresh = refresh;
    this.divId = 'div-gpt-ad-top-leaderboard';
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
        adUnitPath="/5186114/home-leaderboard-top"
        sizeMapping={[
          { viewport: [783, 0], slot: [[728, 90], [970, 90], [970, 250]] },
          { viewport: [490, 0], slot: [468, 60] },
          { viewport: [320, 0], slot: [320, 50] },
          { viewport: [0, 0], slot: [] }
        ]}
        targeting={{ pos: this.divId, env: 'test' }}
      />
    );
  }
}

TopLeaderboardAd.propTypes = {
  refresh: PropTypes.number
};

export default TopLeaderboardAd;