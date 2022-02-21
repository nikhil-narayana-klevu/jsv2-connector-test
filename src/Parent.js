import React, { useEffect, createContext, useState } from 'react';
import klevu from './klevu';
import run from './quicksearch';

export const KlevuContext = createContext();

export default function Parent({children}) {
  useEffect(() => {
    klevu.interactive(function () {
      var options = {
          version: 'react',
          url : {
              landing : '/search-results',
              protocol: 'https:',
              search: 'https://eucs3v2.ksearchnet.com/cs/v2/search' // your search URL
          },
          search: {
              minChars: 0,
              searchBoxSelector: "#my-search", // your search input selector
              apiKey: "klevu-14728819608184175" // your Klevu JS API Key
          },
          analytics: {
              apiKey: 'klevu-14728819608184175' // your Klevu JS API Key
          }
      };
      console.log('Calling constructor', options);
      klevu(options);
      run(klevu);
      console.log('extraSearchBox=', window.klevu.search.extraSearchBox);
  })
  }, []);
  // useEffect(() => {
  //   klevu.settings.url.protocol = "https:";

  //   function startup(klevu) {
  //       var options = {
  //           url: {
  //               search: klevu.settings.url.protocol + '//eucs3.klevu.com/cs/v2/search',
  //               landing: '/',
  //               queryParam: "q",
  //               protocolFull: klevu.settings.url.protocol + "//",
  //               analytics: klevu.settings.url.protocol + "//stats.klevu.com/analytics/",
  //               analyticsCat: klevu.settings.url.protocol + "//stats.ksearchnet.com/analytics/",
  //               kmcData: klevu.settings.url.protocol + "//js.klevu.com/klevu-js-v1/klevu-js-api/"
  //           },
  //           localSettings: true,
  //           search: {
  //               apiKey: 'klevu-14728819608184175',
  //               minChars: 0,
  //               placeholder: "Search",
  //               searchBoxSelector: ".kuSearchInput",
  //               searchBoxTarget: false
  //           },
  //           powerUp: {
  //               quick: false
  //           },
  //           analytics: {
  //               apiKey: 'klevu-14728819608184175'
  //           }
  //       };

  //       klevu(options);
  //   };
  //   klevu.interactive(function () {
  //       startup(klevu);
  //   });

  //   /*
  //    *  Call back function from Klevu Add to cart button 
  //    */
  //   function klevu_addtocart(variantId, productURL, quantity) {
  //       console.log("Log from Quick search results example: ", variantId, productURL, quantity);
  //   }
  //   klevu.coreEvent.build({
  //       name: "setRemoteConfigQuickOverride",
  //       fire: function () {
  //           var setRemoteConfigQuickFlag = klevu.getSetting(klevu,
  //               "settings.flags.setRemoteConfigQuick.build", false);
  //           if (setRemoteConfigQuickFlag) {
  //               return true;
  //           }
  //           return false;
  //       },
  //       maxCount: 100,
  //       delay: 150
  //   });


  //   klevu.coreEvent.attach("setRemoteConfigQuickOverride", {
  //       name: "attachCustomOverrides",
  //       fire: function () {
  //           /**
  //            * Add Custom overrides here
  //            */
  //           console.log("[Override] Quick override called");
  //       }
  //   });

  //   klevu.coreEvent.attach("setRemoteConfigQuickOverride", {
  //       name: "powerUpSetRemoteConfigQuick",
  //       fire: function () {
  //           klevu({
  //               powerUp: {
  //                   quick: true
  //               }
  //           });
  //       }
  //   });
  // }, []);
  const [val, setVal] = useState(0);
  useEffect(() => {
    console.log('Rerender')
    setVal(val+1);
  }, [klevu.search.quick?.getScope().data.request.current.recordQueries?.length]);
  

  console.log('Parent=', window.klevu);
  return <KlevuContext.Provider value={window.klevu}>{children}</KlevuContext.Provider>;
}
