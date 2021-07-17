import React from 'react';
import TopLeaderboardAd from '../components/ads/TopLeaderboardAd';
import StickyFooterAd from '../components/ads/StickyFooterAd';

export const HomePage = () => {
  return (
    <React.Fragment>
      <TopLeaderboardAd />
      <div className="content">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>
      </div>
      <StickyFooterAd refresh={10000} />
    </React.Fragment>
  );
};