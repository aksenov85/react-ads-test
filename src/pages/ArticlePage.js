import React from 'react';
import InContentAd from '../components/ads/InContentAd';
import BottomSidebarAd from '../components/ads/BottomSidebarAd';
import TopLeaderboardAd from '../components/ads/TopLeaderboardAd';
import TopSidebarAd from '../components/ads/TopSidebarAd';

export const ArticlePage = () => {
  return (
    <React.Fragment>
      <header>
        <TopLeaderboardAd />
      </header>
      <main>
        <div className="content">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>

          <InContentAd index={1} />

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>

          <div style={{ height: '70vh' }}></div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>

          <InContentAd index={2} />

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>
        </div>
        <div className="sidebar">
          <TopSidebarAd />
          <BottomSidebarAd />
        </div>
      </main>
    </React.Fragment>
  );
};