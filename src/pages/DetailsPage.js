import React, { useEffect } from 'react';
import BottomSidebarAd from '../components/ads/BottomSidebarAd';
import TopLeaderboardAd from '../components/ads/TopLeaderboardAd';
import TopSidebarAd from '../components/ads/TopSidebarAd';

// GPT.collapseEmptyDivs();

export const DetailsPage = () => {
  const addPrebid = () => {
    const script = document.createElement('script');
    script.src = 'prebid.js';
    document.head.append(script);
  };

  const addWrapper = () => {
    const script = document.createElement('script');
    script.src = 'prebid-wrapper.js';
    document.head.append(script);
  };

  useEffect(() => {
    addPrebid();
    setTimeout(addWrapper, 1000);
  });

  return (
    <>
      <header>
        <TopLeaderboardAd />
      </header>
      <main>
        <div className="content">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>
        </div>
        <div className="sidebar">
          <TopSidebarAd />
          <BottomSidebarAd />
        </div>
      </main>
    </>
  );
};