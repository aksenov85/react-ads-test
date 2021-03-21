import React, { useEffect } from 'react';
import StickyFooterAd from '../components/ads/StickyFooterAd';

export const HomePage = () => {
  const addPrebid = () => {
    console.log('PUBLIC_URL: ', process.env.PUBLIC_URL);
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/prebid.js`;
    document.head.append(script);
  };

  const addWrapper = () => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/prebid-wrapper.js`;
    document.head.append(script);
  };

  useEffect(() => {
    addPrebid();
    setTimeout(addWrapper, 1000);
  });

  return (
    <>
      <div className="content">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi illo ut esse repellendus pariatur ipsam quos reiciendis consequuntur tempora nobis consectetur nostrum voluptatibus hic aperiam, delectus animi doloremque deserunt quo.</p>
      </div>
      <StickyFooterAd refresh={10000} />
    </>
  );
};