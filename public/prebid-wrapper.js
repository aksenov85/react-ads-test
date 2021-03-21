var PREBID_TIMEOUT = 1500;
var FAILSAFE_TIMEOUT = 3000;
var adUnits = [
  {
    code: "div-gpt-ad-top-leaderboard",
    mediaTypes: {
      banner: {
        sizes: [[728, 90]],
      },
    },
    labelAny: ["display", "tablet"], // skip the ad unit entirely for phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65269",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237433",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-top-leaderboard",
    mediaTypes: {
      banner: {
        sizes: [[970, 90]],
      },
    },
    labelAny: ["display"], // skip the ad unit entirely for tablets and phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65270",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237428",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-top-leaderboard",
    mediaTypes: {
      banner: {
        sizes: [[970, 250]],
      },
    },
    labelAny: ["display"], // skip the ad unit entirely for tablets and phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65271",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237430",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-top-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[300, 250]],
      },
    },
    labelAny: ["display", "tablet"], // skip the ad unit entirely for phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65266",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237431",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-middle-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[300, 250]],
      },
    },
    labelAny: ["display", "tablet"], // skip the ad unit entirely for phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65266",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237431",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-bottom-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[300, 250]],
      },
    },
    labelAny: ["display", "tablet"], // skip the ad unit entirely for phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65266",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237431",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-bottom-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[160, 600]],
      },
    },
    labelAny: ["display"], // skip the ad unit entirely for phones and tablets
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65268",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-bottom-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[300, 600]],
      },
    },
    labelAny: ["display"], // skip the ad unit entirely for phones and tablets
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65267",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237426",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-sticky-footer",
    mediaTypes: {
      banner: {
        sizes: [[728, 90]],
      },
    },
    labelAny: ["display", "tablet"], // skip the ad unit entirely for phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65269",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237433",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-sticky-footer",
    mediaTypes: {
      banner: {
        sizes: [[320, 50]],
      },
    },
    labelAny: ["phone"], // skip the ad unit entirely for desktop and tablets
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65273",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237432",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-quiz-left-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[300, 250]],
      },
    },
    labelAny: ["display", "tablet"], // skip the ad unit entirely for phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65266",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237431",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-quiz-left-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[160, 600]],
      },
    },
    labelAny: ["display"], // skip the ad unit entirely for phones and tablets
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65268",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-quiz-left-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[300, 600]],
      },
    },
    labelAny: ["display"], // skip the ad unit entirely for phones and tablets
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65267",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237426",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-quiz-right-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[300, 250]],
      },
    },
    labelAny: ["display", "tablet"], // skip the ad unit entirely for phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65266",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237431",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-quiz-right-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[160, 600]],
      },
    },
    labelAny: ["display"], // skip the ad unit entirely for phones and tablets
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65268",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-quiz-right-sidebar",
    mediaTypes: {
      banner: {
        sizes: [[300, 600]],
      },
    },
    labelAny: ["display"], // skip the ad unit entirely for phones and tablets
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65267",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237426",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-quiz-mobile-top",
    mediaTypes: {
      banner: {
        sizes: [[300, 250]],
      },
    },
    labelAny: ["display", "tablet"], // skip the ad unit entirely for phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65266",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237431",
        },
      },
    ],
  },
  {
    code: "div-gpt-ad-quiz-mobile-bottom",
    mediaTypes: {
      banner: {
        sizes: [[300, 250]],
      },
    },
    labelAny: ["display", "tablet"], // skip the ad unit entirely for phones
    bids: [
      {
        bidder: "rubicon",
        params: {
          accountId: "15410",
          siteId: "338042",
          zoneId: "1782298",
        },
      },
      {
        bidder: "appnexus",
        params: {
          placementId: "19729187",
          allowSmallerSizes: !0,
        },
      },
      {
        bidder: "smartadserver",
        params: {
          siteId: "218825",
          pageId: "1283794",
          formatId: "65266",
        },
      },
      {
        bidder: "aol",
        params: {
          network: "10825.1",
          placement: "5237431",
        },
      },
    ],
  },
];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.setConfig({
  debug: true,
  sizeConfig: [
    {
      mediaQuery: "(min-width: 1003px)",
      sizesSupported: [
        [970, 90],
        [970, 90],
        [728, 90],
        [300, 250],
        [300, 600],
        [336, 280],
        [160, 600],
      ],
      labels: ["display"],
    },
    {
      mediaQuery: "(min-width: 783px) and (max-width: 1002px)",
      sizesSupported: [
        [728, 90],
        [300, 250],
        [336, 280],
        [160, 600],
      ],
      labels: ["tablet"],
    },
    {
      mediaQuery: "(min-width: 320px) and (max-width: 782px)",
      sizesSupported: [
        [320, 50],
        [320, 100],
        [300, 250],
      ],
      labels: ["phone"],
    },
  ],
  priceGranularity: "dense",
  userSync: {
    iframeEnabled: true,
  },
});

pbjs.onEvent("bidWon", function (data) {
  console.log(
    "==Prebid==",
    data.bidderCode +
      " won the ad server auction for ad unit " +
      data.adUnitCode +
      " at " +
      data.cpm +
      " CPM"
  );
});
pbjs.que.push(function () {
  pbjs.addAdUnits(adUnits);
  pbjs.requestBids({
    bidsBackHandler: initAdserver,
    timeout: PREBID_TIMEOUT,
  });
});

function initAdserver() {
  if (pbjs.initAdserverSet) return;
  pbjs.initAdserverSet = true;

  googletag.cmd.push(function () {
    pbjs.que.push(function () {
      pbjs.setTargetingForGPTAsync();
      googletag.pubads().refresh();
    });
  });
}

setTimeout(function () {
  initAdserver();
}, FAILSAFE_TIMEOUT);
