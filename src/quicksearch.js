const run = (klevu) => {
let klevu_apiKey, klevuInit, klevu_processKMCInputData,klevu_banner,klevu_keywordUrlMap,klevu_maxSuggestionsToShow,klevu_productsToShowInSlimLayout,klevu_uc_userOptions,klevu_filtersEnabled,klevu_multiSelectFilters,klevu_showOutOfStock,klevu_showPopularSearches,klevu_showRecentSerches,klevu_webstorePopularTerms,klevu_cmsEnabled,klevu_addToCartEnabled,klevu_showProductCode,klevu_showPrices,klevu_showPriceSlider,klevu_layoutType,klevu_layoutView,klevu_filtersOnLeft,genericOptions,klevu_processABTestInputData,abtestDictionary,klevu_maxCategoriesToShow;
let klevu_setHttpOnlyToCookies, klevu_pubIsInUse, scope, klevu_addtocart,noUiSlider,wNumb,klevu_lang,klevu_storeTranslations,key,divTop, divRight, divLeft;
let { event } = window;  
(function (klevu) {
    klevu({
        theme: {
            quickSearch: {
                loadDefaultTemplates: true,
                loadDefaultStyles: true,
                templateContainer: window.document.body
            }
        }
    });
    klevu.interactive(function () {
        var quickThemeTemplateContent = "<script type=\"template/klevu\" id=\"klevuQuickTemplateBase\"> <div class=\"klevu-fluid kuPreventDocumentClick\"> <div id=\"klevuSearchingArea\" class=\"klevuQuickSearchingArea\"> <div ku-container data-container-id=\"ku_quick_main_container\" data-container-role=\"main\"> <header ku-container data-container-id=\"ku_quick_main_header_container\" data-container-role=\"header\"> <section ku-block data-block-id=\"ku_quick_main_header_sub_panel\"></section> <section ku-block data-block-id=\"ku_quick_main_header_banner\"> <%=helper.render('klevuQuickPromotionBanner',scope,data,\"top\") %> </section> <section ku-block data-block-id=\"ku_quick_main_header_site_navigation\"> <div class=\"klevuSuggestionsBlock\"> <%=helper.render('klevuQuickAutoSuggestions',scope) %> <%=helper.render('klevuQuickPageSuggestions',scope) %> <%=helper.render('klevuQuickCategorySuggestions',scope) %> </div> </section> </header> <% if(data.showQuickFacetedLayoutCharLimitMessage == true) { %> <% var quickFacetedLayoutMessage = (data.quickFacetedLayoutMinCharsTextValue) ? data.quickFacetedLayoutMinCharsTextValue : \"\"; %> <% if(quickFacetedLayoutMessage != \"\") { %> <span class=\"kuFacetedLayoutMinCharText\"><%= helper.translate(quickFacetedLayoutMessage) %></span> <% } %> <% } else { %> <% if(data.query.productList) { %> <%=helper.render('klevuQuickTemplateResultsHeadingTitle',scope,data,\"productList\") %> <%= helper.render('klevuQuickTemplateTabResults',scope) %> <%= helper.render('klevuQuickProducts',scope) %> <%= helper.render('klevuQuickOtherContent',scope) %> <% } else { %> <div class=\"kuSearchPersonalizationsContainer\"> <%= helper.render('klevuSearchPersonalizations',scope) %> </div> <% } %> <% } %> <footer ku-container data-container-id=\"ku_quick_main_footer_container\" data-container-role=\"footer\"> <section ku-block data-block-id=\"ku_quick_main_footer_sub_panel\"></section> <section ku-block data-block-id=\"ku_quick_main_footer_banner\"> <%=helper.render('klevuQuickPromotionBanner',scope,data,\"bottom\") %> </section> </footer> </div> </div> </div></script><script type=\"template/klevu\" id=\"klevuSearchPersonalizations\"> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\"> <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"> <div ku-block data-block-id=\"ku_quick_left_facets\"></div> <div ku-block data-block-id=\"ku_quick_left_call_outs\"> <%=helper.render('kuTemplatePopularSearches',scope) %> <%=helper.render('kuTemplateRecentSearches',scope) %> </div> <div ku-block data-block-id=\"ku_quick_left_banner\"></div> </section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <header ku-block data-block-id=\"ku_quick_result_header\"></header> <div ku-block data-block-id=\"ku_quick_result_items\"></div> <div ku-block data-block-id=\"ku_quick_other_items\"> <%=helper.render('klevuTrendingProducts',scope) %> <%=helper.render('klevuRecentViewedProducts',scope) %> </div> <footer ku-block data-block-id=\"ku_quick_result_footer\"></footer> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"> <div ku-block data-block-id=\"ku_quick_right_facets\"></div> <div ku-block data-block-id=\"ku_quick_right_call_outs\"></div> <div ku-block data-block-id=\"ku_quick_right_banner\"></div> </section> </div></script><script type=\"template/klevu\" id=\"klevuQuickAutoSuggestions\"> <% if(data.suggestions.autosuggestion) { %> <% if(data.suggestions.autosuggestion.length> 0 ) { %> <% var queryParam = klevu.getSetting(klevu, \"settings.url.queryParam\"); %> <div class=\"klevuAutoSuggestionsWrap klevuAutosuggestions\"> <div class=\"klevuSuggestionHeading\"> <span class=\"klevuHeadingText\"> <%=helper.translate(\"Suggestions\")%></span> </div> <ul> <% helper.each(data.suggestions.autosuggestion,function(key,suggestion){ %> <li tabindex=\"-1\"><a target=\"_self\" href=\"<%=helper.buildUrl(data.settings.landingUrl, queryParam , helper.stripHtml(suggestion.suggest))%>\" data-content=\"<%=helper.stripHtml(suggestion.suggest) %>\" class=\"klevu-track-click\"> <%=suggestion.suggest %> </a></li> <% }); %> </ul> </div> <% } %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickPageSuggestions\"> <% if(data.query.cmsCompressed) { %> <% if(data.query.cmsCompressed.result.length > 0 ){ %> <div class=\"klevuAutoSuggestionsWrap klevuCmsSuggestions\" id=\"klevuCmsContentArea\"> <div class=\"klevuSuggestionHeading\"><span class=\"klevuHeadingText\"><%=helper.translate(\"Pages\")%></span></div> <ul> <% helper.each(data.query.cmsCompressed.result,function(key,cms){ %> <li tabindex=\"-1\"><a target=\"_self\" href=\"<%=cms.url%>\" class=\"klevu-track-click\" data-url=\"<%=cms.url%>\" data-name=\"<%=cms.name%>\"><%=cms.name%></a></li> <% }); %> </ul> </div> <% } %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickCategorySuggestions\"> <% if(data.query.categoryCompressed) { %> <% if(data.query.categoryCompressed.result.length > 0 ){ %> <div class=\"klevuAutoSuggestionsWrap klevuCategorySuggestions\" id=\"klevuCategoryArea\"> <div class=\"klevuSuggestionHeading\"> <span class=\"klevuHeadingText\"><%=helper.translate(\"Category\")%></span> </div> <ul> <% helper.each(data.query.categoryCompressed.result,function(key,category){ %> <li tabindex=\"-1\"><a target=\"_self\" href=\"<%=category.url%>\" class=\"klevu-track-click\" data-url=\"<%=category.url%>\" data-name=\"<%=category.name%>\" ><%=category.name%></a></li> <% }); %> </ul> </div> <% } %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickProducts\"> <% if(data.query.productList) { %> <% if(data.query.productList.result.length > 0 ) { %> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\" data-content=\"productList\" > <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"> <div ku-block data-block-id=\"ku_quick_left_facets\"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === true && data.query.productList.filters && data.query.productList.filters.length > 0) { %> <div data-section=\"productList\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplateFilters',scope,data,\"productList\") %> </div> <% } %> </div> <div ku-block data-block-id=\"ku_quick_left_call_outs\"></div> <div ku-block data-block-id=\"ku_quick_left_banner\"></div> </section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <header ku-block data-block-id=\"ku_quick_result_header\"></header> <div ku-block data-block-id=\"ku_quick_result_items\"> <div class=\"klevuResultsBlock\"> <%=helper.render('klevuQuickProductBlockTitleHeader',scope,data) %> <div class=\"klevuQuickSearchResults klevuMeta productList\" data-section=\"productList\" id=\"productList\" data-result-view=\"list\" > <div class=\"kuQuickResultsListHeader\"> <%=helper.render('kuTemplateQuickResultsViewSwitch',scope,data,\"productList\") %> <%=helper.render('klevuQuickTemplateSortBy',scope,data,\"productList\") %> </div> <div class=\"kuClearBoth\"></div> <div class=\"kuQuickResultsListContainer\"> <ul> <% helper.each(data.query.productList.result,function(key,product){ %> <%=helper.render('klevuQuickProductBlock',scope,data,product) %> <% }); %> <%=helper.render('klevuQuickTemplateInfiniteScrollDown',scope,data) %> </ul> </div> </div> </div> </div> <div ku-block data-block-id=\"ku_quick_other_items\"> <div data-section=\"productList\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplatePagination',scope,data,\"productList\") %> </div> </div> <footer ku-block data-block-id=\"ku_quick_result_footer\"></footer> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"> <div ku-block data-block-id=\"ku_quick_right_facets\"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === false && data.query.productList.filters && data.query.productList.filters.length > 0) { %> <div data-section=\"productList\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplateFilters',scope,data,\"productList\") %> </div> <% } %> </div> <div ku-block data-block-id=\"ku_quick_right_call_outs\"></div> <div ku-block data-block-id=\"ku_quick_right_banner\"></div> </section> </div> <% } else { %> <% var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue(); %> <% if(isCmsEnabled) { %> <% if(data.query.cmsCompressed && data.query.cmsCompressed.result.length <= 0 ){ %> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\"> <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"> </section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <div ku-block data-block-id=\"ku_quick_no_result_items\"> <%=helper.render('noResultsFoundQuick',scope) %> </div> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"> </section> </div> <% } %> <% } else { %> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\"> <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"> </section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <div ku-block data-block-id=\"ku_quick_no_result_items\"> <%=helper.render('noResultsFoundQuick',scope) %> </div> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"> </section> </div> <% } %> <% } %> <% } else { %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickProductBlockTitleHeader\"> <div class=\"klevuSuggestionHeading\"> <span class=\"klevuHeadingText\"><%=helper.translate(\"Products\")%></span> </div> <div class=\"klevuProductsViewAll\"> <% var queryParam = klevu.getSetting(klevu, \"settings.url.queryParam\"); %> <a href=\"<%=helper.buildUrl(data.settings.landingUrl, queryParam ,helper.stripHtml(data.settings.term))%>\" target=\"_parent\"><%=helper.translate(\"View All\")%></a> </div></script><script type=\"template/klevu\" id=\"klevuQuickProductBlock\"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <li ku-product-block class=\"klevuProduct\" data-id=\"<%=dataLocal.id%>\"> <a title=\"<%= updatedProductName %>\" target=\"_self\" href=\"<%=dataLocal.url%>\" data-id=\"<%=dataLocal.id%>\" class=\"klevuQuickProductInnerBlock trackProductClick kuTrackRecentView\"> <div class=\"klevuProductItemTop\"> <div class=\"klevuQuickImgWrap\"> <div class=\"klevuQuickDiscountBadge\"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src=\"<%=dataLocal.image%>\" origin=\"<%=dataLocal.image%>\" onerror=\"klevu.dom.helpers.cleanUpProductImage(this)\" alt=\"<%=updatedProductName%>\" /> </div> </div> <div class=\"klevuProductItemBottom\"> <div class=\"klevuQuickProductDescBlock\"> <div title=\"<%= updatedProductName %>\" class=\"klevuQuickProductName kuClippedOne\"> <%= updatedProductName %> </div> <div class=\"klevu-desc-l2 kuClippedOne\"> <%=dataLocal.shortDesc%> </div> <div class=\"klevuQuickProductDesc kuClippedOne\"> <div class=\"klevuSpectxt\"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> <% if(dataLocal.inStock && dataLocal.inStock != \"yes\") { %> <%=helper.render('quickProductStock', scope, data, dataLocal) %> <% } else { %> <% if(klevu.search.modules.kmcInputs.base.getShowPrices()) { %> <div class=\"klevuQuickProductPrice kuClippedOne\"> <% var kuTotalVariants = klevu.dom.helpers.cleanUpPriceValue(dataLocal.totalVariants); var kuStartPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.startPrice,dataLocal.currency); var kuSalePrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.salePrice,dataLocal.currency); var kuPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.price,dataLocal.currency); %> <% if(!Number.isNaN(kuTotalVariants) && !Number.isNaN(kuStartPrice)) { %> <div class=\"klevuQuickSalePrice kuStartPrice\"> <span class=\"klevuQuickPriceGreyText\"><%=helper.translate(\"Starting at\")%></span> <span><%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.startPrice))%></span> </div> <% } else if(!Number.isNaN(kuSalePrice) && !Number.isNaN(kuPrice) && (kuPrice > kuSalePrice)){ %> <span class=\"klevuQuickOrigPrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <span class=\"klevuQuickSalePrice klevuQuickSpecialPrice\"> <%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice))%> </span> <% } else if(!Number.isNaN(kuSalePrice)) { %> <span class=\"klevuQuickSalePrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice)) %> </span> <% } else if(!Number.isNaN(kuPrice)) { %> <span class=\"klevuQuickSalePrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <% } %> </div> <%=helper.render('searchResultProductVATLabelQuick', scope, data, dataLocal) %> <% } %> <% } %> <%=helper.render('klevuQuickProductRating',scope,data,dataLocal) %> </div> </div> <div class=\"kuClearLeft\"></div> </a> <%=helper.render('quickSearchProductAddToCart',scope,data,dataLocal) %> </li></script><script type=\"template/klevu\" id=\"klevuQuickTemplatePagination\"> <% if(data.query[dataLocal].result.length > 0 ) { %> <% var productListLimit = data.query[dataLocal].meta.noOfResults; %> <% var productListTotal = data.query[dataLocal].meta.totalResultsFound - 1; %> <div class=\"kuPagination\"> <% if(data.query[dataLocal].meta.offset > 0) { %> <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"0\">&lt;&lt;</a>&nbsp; <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"<%=(data.query[dataLocal].meta.offset-productListLimit)%>\">&lt;</a>&nbsp; <% } %> <% if(data.query[dataLocal].meta.offset > 0) { %> <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"<%=(data.query[dataLocal].meta.offset-productListLimit)%>\"><%=(Math.ceil(data.query[dataLocal].meta.offset/productListLimit))%></a>&nbsp; <% } %> <a href=\"javascript:void(0);\" class=\"kuCurrent\"><%=(Math.ceil(data.query[dataLocal].meta.offset/productListLimit)+1)%></a>&nbsp; <% if(productListTotal >= data.query[dataLocal].meta.offset+productListLimit) { %> <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"<%=(data.query[dataLocal].meta.offset+productListLimit)%>\"><%=(Math.ceil(data.query[dataLocal].meta.offset/productListLimit)+2)%></a>&nbsp; <% } %> <% if(productListTotal >= data.query[dataLocal].meta.offset+productListLimit) { %> <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"<%=(data.query[dataLocal].meta.offset+productListLimit)%>\">&gt;</a>&nbsp; <a target=\"_self\" href=\"javascript:void(0)\" class=\"klevuPaginate\" data-offset=\"<%=(Math.floor(productListTotal/productListLimit)*productListLimit)%>\">&gt;&gt;</a> <% } %> </div> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickTemplateResultsHeadingTitle\"> <% var totalNumberOfResults = klevu.getObjectPath(data,\"query.\"+dataLocal+\".meta.totalResultsFound\"); var searchedTerm = helper.escapeHTML(data.settings.term); %> <div class=\"kuContainer\"> <div class=\"kuResultsHeadingTitleContainer\"> <strong class=\"kuResultsNumber\"> <%= (totalNumberOfResults) ? totalNumberOfResults : 0 %> </strong> <%= helper.translate((parseInt(totalNumberOfResults) > 1) ? \" Results\" : \" Result\") %> <%=helper.translate(\"found\")%> <%= (searchedTerm && searchedTerm.length && searchedTerm != \"*\") ? helper.translate(\"for\") + \" '<span>\"+ klevu.dom.helpers.cleanCatogeryPath(searchedTerm) +\"</span>'\" : \"\" %> </div> </div></script><script type=\"template/klevu\" id=\"klevuQuickPromotionBanner\"> <% var hasNoResultFound = klevu.getObjectPath(data,\"modules.promotionalBanner.hasNoResultFound\"); %> <% if(data.banners && data.banners[dataLocal] && data.banners[dataLocal].length && !hasNoResultFound) { klevu.each(data.banners[dataLocal], function(index, banner){ %> <div class=\"klevu-banner-ad kuBannerContainer\"> <a role=\"banner\" area-label=\"Promotion Banner label\" class=\"kuTrackBannerClick\" target=\"_self\" data-id=\"<%= banner.bannerRef %>\" data-name=\"<%= banner.bannerName %>\" data-image=\"<%= banner.bannerImg %>\" data-redirect=\"<%= banner.redirectUrl %>\" href=\"<%= banner.redirectUrl %>\" alt=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" title=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" > <img src=\"<%= banner.bannerImg %>\" alt=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" /> </a> </div> <% }); } %></script><!-- Popular searches template for Quick Search Results --><script type=\"template/klevu\" id=\"kuTemplatePopularSearches\"> <% if(data.popularSearches && data.popularSearches.length) { %> <div class=\"kuPopularSearchesBlock kuPreventDocumentClick\"> <div class=\"klevuSuggestionHeading kuPopularSearchHeading\"><span class=\"klevuHeadingText\"><%=helper.translate(\"Popular Searches\")%></span></div> <div class=\"kuPopularSearchTerms\"> <ul> <% helper.each(data.popularSearches,function(key,term){ %> <% if(term && term.length) { %> <li class=\"kuPopularSearchTerm\" data-value=\"<%= term %>\"> <a target=\"_self\" href=\"javascript:void(0)\"><%= term %></a> </li> <% } %> <% }); %> </ul> </div> </div> <% } %></script><!-- Recent searches template for Quick Search Results --><script type=\"template/klevu\" id=\"kuTemplateRecentSearches\"> <% if(data.recentSearches && data.recentSearches.length) { %> <div class=\"kuRecentSearchesBlock kuPreventDocumentClick\"> <div class=\"klevuSuggestionHeading kuRecentSearchHeading\"><span class=\"klevuHeadingText\"><%=helper.translate(\"Recent Searches\")%></span></div> <div class=\"kuRecentSearchTerms\"> <ul> <% helper.each(data.recentSearches,function(key,term){ %> <% if(term && term.length) { %> <li class=\"kuRecentSearchTerm\" data-value=\"<%= term %>\"> <a target=\"_parent\" href=\"javascript:void(0)\"><%= helper.escapeHTML(term) %></a> </li> <% } %> <% }); %> </ul> </div> </div> <% } %></script><!-- Product block template for Trending products in Quick Search Results --><script type=\"template/klevu\" id=\"klevuQuickTrendingProductBlock\"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <a target=\"_self\" href=\"<%=dataLocal.url%>\" data-id=\"<%=dataLocal.id%>\" class=\"klevuQuickProductInnerBlock kuTrackPersonalizedProductClick kuQSMenuItemTarget kuTrackRecentView\"> <div class=\"klevuProductItemTop\"> <div class=\"klevuQuickImgWrap\"> <div class=\"klevuQuickDiscountBadge\"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src=\"<%=dataLocal.image%>\" origin=\"<%=dataLocal.image%>\" onerror=\"klevu.dom.helpers.cleanUpProductImage(this)\" alt=\"<%=updatedProductName%>\" /> </div> </div> <div class=\"klevuProductItemBottom\"> <div class=\"klevuQuickProductDescBlock\"> <div class=\"klevuQuickProductName kuClippedOne\" title=\"<%= updatedProductName %>\"><%= updatedProductName %></div> <div class=\"klevuQuickProductDesc\"> <div class=\"klevuSpectxt\"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> </div> </div> </a> </script><!-- Trending products template for Quick Search Results --><script type=\"template/klevu\" id=\"klevuTrendingProducts\"> <% var trendingProductsTitle = klevu.getObjectPath(data,\"modules.trendingProducts.title\"); trendingProductsTitle = (trendingProductsTitle) ? trendingProductsTitle : \"\"; %> <% if(data.query.trendingProductList) { %> <% if(data.query.trendingProductList.result.length > 0 ) { %> <div class=\"klevuResultsBlock kuPreventDocumentClick kuRecommendationSlider\"> <div class=\"klevuSuggestionHeading\"> <span class=\"klevuHeadingText\"><%= helper.translate(trendingProductsTitle) %></span> </div> <div class=\"klevuQuickSearchResults klevuQuickSearchTrendingResults\" data-section=\"trendingProductList\" data-source=\"trendingProducts\" id=\"trendingProductList\"> <div class=\"kuCarousel kuTrendingProductsCarousel\"> <div class=\"nav nav-left\"> <div class=\"ion-chevron-left kuCarousel-arrow-icon-left\"></div> </div> <div class=\"kuCarousel-content\"> <% helper.each(data.query.trendingProductList.result,function(key,product){ %> <div class=\"klevuProduct kuQSMenuItem kuSlide\" id=\"<%= (key + 1) %>\" ku-product-block data-id=\"<%=product.id%>\"> <%=helper.render('klevuQuickTrendingProductBlock',scope,data,product) %> </div> <% }); %> </div> <div class=\"nav nav-right\"> <div class=\"ion-chevron-right kuCarousel-arrow-icon-right\"></div> </div> </div> </div> </div> <% } %> <% } %></script><!-- Product block template for Recently viewed products in Quick Search Results --><script type=\"template/klevu\" id=\"klevuQuickRecentViewedProductBlock\"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <a target=\"_self\" href=\"<%=dataLocal.url%>\" data-id=\"<%=dataLocal.id%>\" class=\"klevuQuickProductInnerBlock kuTrackPersonalizedProductClick kuTrackRecentView kuQSMenuItemTarget\"> <div class=\"klevuProductItemTop\"> <div class=\"klevuQuickImgWrap\"> <div class=\"klevuQuickDiscountBadge\"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src=\"<%=dataLocal.image%>\" origin=\"<%=dataLocal.image%>\" onerror=\"klevu.dom.helpers.cleanUpProductImage(this)\" alt=\"<%=updatedProductName%>\" /> </div> </div> <div class=\"klevuProductItemBottom\"> <div class=\"klevuQuickProductDescBlock\"> <div class=\"klevuQuickProductName kuClippedOne\" title=\"<%= updatedProductName %>\"><%= updatedProductName %></div> <div class=\"klevuQuickProductDesc\"> <div class=\"klevuSpectxt\"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> </div> </div> </a></script><!-- Recent viewed products template for Quick Search Results --><script type=\"template/klevu\" id=\"klevuRecentViewedProducts\"> <% var recentlyViewedProductsTitle = klevu.getObjectPath(data,\"modules.recentlyViewedProducts.title\"); recentlyViewedProductsTitle = (recentlyViewedProductsTitle) ? recentlyViewedProductsTitle : \"\"; %> <% if(data.query.recentViewedProductList) { %> <% if(data.query.recentViewedProductList.result.length > 0 ) { %> <div class=\"klevuResultsBlock kuPreventDocumentClick kuRecommendationSlider\"> <div class=\"klevuSuggestionHeading\"> <span class=\"klevuHeadingText\"><%= helper.translate(recentlyViewedProductsTitle) %></span> </div> <div class=\"klevuQuickSearchResults klevuQuickSearchRecentResults\" data-section=\"recentViewedProductList\" data-source=\"recentlyClickedProducts\" id=\"recentViewedProductList\"> <div class=\"kuCarousel kuRecentlyViewedProductsCarousel\"> <div class=\"nav nav-left\"> <div class=\"ion-chevron-left kuCarousel-arrow-icon-left\"></div> </div> <div class=\"kuCarousel-content\"> <% helper.each(data.query.recentViewedProductList.result,function(key,product){ %> <div class=\"klevuProduct kuQSMenuItem kuSlide\" id=\"<%= (key + 1) %>\" ku-product-block data-id=\"<%=dataLocal.id%>\"> <%=helper.render('klevuQuickRecentViewedProductBlock',scope,data,product) %> </div> <% }); %> </div> <div class=\"nav nav-right\"> <div class=\"ion-chevron-right kuCarousel-arrow-icon-right\"></div> </div> </div> </div> </div> <% } %> <% } %></script><!-- No Results Found template for Quick Search Results --><script type=\"template/klevu\" id=\"klevuTemplateNoResultFoundQuick\"> <div class=\"kuQuickSearchNoRecordFound\"> <div class=\"kuQuickNoResults\"> <div class=\"kuQuickNoResultsInner\"> <div class=\"kuQuickNoResultsMessage\"> <%= helper.translate(data.noResultsFoundMsg) %> </div> </div> </div> <div class=\"kuDividerLine\"></div> <%=helper.render('quickNoResultsPopularProducts', scope, data) %> <%=helper.render('quickNoResultsFoundBanners', scope, data) %> <%=helper.render('quickNoResultsPopularSearches', scope, data) %> </div></script><script type=\"template/klevu\" id=\"klevuQuickNoResultsPopularProducts\"> <% var popularProductList = klevu.getObjectPath(data,\"query.noResultsFoundPopularProductList.result\");%> <% if(popularProductList) { %> <% if(popularProductList.length > 0 ) { %> <div class=\"klevuNoResultsProductsBlock\"> <div class=\"klevuPopularProductsHeading\"><span class=\"klevuQuickHeadingText\"><%= helper.translate(data.quickNoResultsPopularHeading) %></span></div> <div class=\"klevuQuickSearchNoResultsPopular\" data-section=\"noResultsFoundPopularProductList\" id=\"noResultsFoundPopularProductList\"> <ul> <% helper.each(popularProductList,function(key, product){ %> <%=helper.render('quickNoResultsPopularProductBlock',scope,data,product) %> <% }); %> </ul> </div> </div> <% } %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickNoResultsPopularProductBlock\"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <li class=\"klevuPopularProduct\" data-id=\"<%=dataLocal.id%>\"> <a target=\"_self\" href=\"<%=dataLocal.url%>\" data-id=\"<%=dataLocal.id%>\" class=\"klevuQuickPopularProductInnerBlock trackProductClick klevuProductClick kuTrackRecentView\"> <div class=\"klevuPopularProductItemTop\"> <div class=\"klevuQuickImgWrap\"> <div class=\"klevuQuickDiscountBadge\"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src=\"<%=dataLocal.image%>\" origin=\"<%=dataLocal.image%>\" onerror=\"klevu.dom.helpers.cleanUpProductImage(this)\" alt=\"<%=updatedProductName%>\" /> </div> </div> <div class=\"klevuPopularProductItemBottom\"> <div class=\"klevuQuickPopularProductDescBlock\"> <div title=\"<%= updatedProductName %>\" class=\"klevuQuickProductName kuClippedOne\"><%= updatedProductName %></div> <div class=\"klevu-desc-l2 kuClippedOne\"> <%=dataLocal.shortDesc%> </div> <% if(dataLocal.inStock && dataLocal.inStock != \"yes\") { %> <%=helper.render('quickProductStock', scope, data, dataLocal) %> <% } else { %> <% if(klevu.search.modules.kmcInputs.base.getShowPrices()) { %> <div class=\"klevuQuickProductPrice kuClippedOne\"> <% var kuTotalVariants = klevu.dom.helpers.cleanUpPriceValue(dataLocal.totalVariants); var kuStartPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.startPrice,dataLocal.currency); var kuSalePrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.salePrice,dataLocal.currency); var kuPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.price,dataLocal.currency); %> <% if(!Number.isNaN(kuTotalVariants) && !Number.isNaN(kuStartPrice)) { %> <div class=\"klevuQuickSalePrice kuStartPrice\"> <span class=\"klevuQuickPriceGreyText\"><%=helper.translate(\"Starting at\")%></span> <span><%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.startPrice))%></span> </div> <% } else if(!Number.isNaN(kuSalePrice) && !Number.isNaN(kuPrice) && (kuPrice > kuSalePrice)){ %> <span class=\"klevuQuickOrigPrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <span class=\"klevuQuickSalePrice klevuQuickSpecialPrice\"> <%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice))%> </span> <% } else if(!Number.isNaN(kuSalePrice)) { %> <span class=\"klevuQuickSalePrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice)) %> </span> <% } else if(!Number.isNaN(kuPrice)) { %> <span class=\"klevuQuickSalePrice\"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <% } %> </div> <%=helper.render('searchResultProductVATLabelQuick', scope, data, dataLocal) %> <% } %> <% } %> <%=helper.render('klevuQuickProductRating',scope,data,dataLocal) %> </div> </div> <div class=\"kuClearLeft\"></div> </a> </li></script><!-- Popular searches template for Quick Search Results --><script type=\"template/klevu\" id=\"kuQuickNoResultsPopularSearches\"> <% if(data.noResultsFoundPopularSearches && data.noResultsFoundPopularSearches.length) { %> <div class=\"kuNoResultsPopularSearchesBlock\"> <div class=\"kuNoResultsPopularSearchHeading\"><span class=\"klevuQuickHeadingText\"><%=helper.translate(\"Popular Searches\")%></span></div> <div class=\"kuNoResultsPopularSearchTerms\"> <ul> <% helper.each(data.noResultsFoundPopularSearches, function(key,term){ %> <% if(term && term.length) { %> <% var landingURLPrefix = klevu.getObjectPath(klevu.settings,\"url.landing\"); if(typeof landingURLPrefix === \"undefined\" || landingURLPrefix === \"\"){ landingURLPrefix = \"/\"; } %> <li class=\"kuNoResultsPopularSearchTerm\" data-value=\"<%= term %>\"> <a href=\"<%= landingURLPrefix %>?q=<%= term %>\" title=\"<%= term %>\"><%= term %></a> </li> <% } %> <% }); %> </ul> </div> </div> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickNoResultsFoundBanners\"> <% if(data.quickNoResultsFoundBanners && data.quickNoResultsFoundBanners.length) { klevu.each(data.quickNoResultsFoundBanners, function(index, banner){ %> <div class=\"klevu-no-results-banner-ad-quick\"> <a class=\"kuTrackBannerClick\" target=\"_self\" data-id=\"<%= banner.bannerRef %>\" data-image=\"<%= banner.bannerImageUrl %>\" data-redirect=\"<%= banner.redirectUrl %>\" href=\"<%= banner.redirectUrl %>\" alt=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" title=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" > <img src=\"<%= banner.bannerImageUrl %>\" alt=\"<%= klevu.dom.helpers.getBannerAltTagText(banner) %>\" /> </a> </div> <% }); %> <div class=\"kuDividerLine\"></div> <% } %></script><!-- Search result Product stock availability label template file--><script type=\"template/klevu\" id=\"quickSearchResultProductStock\"> <% var outOfStockCaption = klevu.search.modules.kmcInputs.base.getOutOfStockCaptionValue(); var productStockStatus = helper.translate(outOfStockCaption); %> <div class=\"kuClippedOne kuQuickCaptionStockOut\"> <%= productStockStatus %> </div></script><!-- Search result Product VAT label template file--><script type=\"template/klevu\" id=\"searchResultProductVATLabelQuick\"> <% var caption = klevu.search.modules.kmcInputs.base.getVatCaption(); var vatCaption = helper.translate(\"(\" + caption + \")\"); %> <div class=\"kuCaptionVat\"><%= vatCaption %></div></script><script type=\"template/klevu\" id=\"klevuQuickTemplateFilters\"> <% if(data.query[dataLocal].filters.length > 0 ) { %> <div class=\"kuFilters\" role=\"navigation\" data-position=\"left\" aria-label=\"Product Filters\" tabindex=\"0\"> <% helper.each(data.query[dataLocal].filters,function(key,filter){ %> <% if(filter.type == \"OPTIONS\"){ %> <div class=\"kuFilterBox klevuFilter <%=(filter.multiselect)?'kuMulticheck':''%>\" data-filter=\"<%=filter.key%>\" <% if(filter.multiselect){ %> data-singleselect=\"false\" <% } else { %> data-singleselect=\"true\"<% } %>> <div class=\"kuFilterHead <%=(filter.isCollapsed) ? 'kuExpand' : 'kuCollapse'%>\"> <% var filter_label = (filter.label==\"klevu_price\") ? \"price\" : filter.label; %> <%=helper.translate(filter_label)%> </div> <div data-optionCount=\"<%= filter.options.length %>\" class=\"kuFilterNames <%= (filter.options.length < 5 ) ? 'kuFilterShowAll': '' %> <%=(filter.isCollapsed) ? 'kuFilterCollapse' : ''%>\"> <ul> <% helper.each(filter.options,function(key,filterOption){ %> <li <% if(filterOption.selected ==true) { %> class=\"kuSelected\"<% } %>> <a target=\"_self\" href=\"#\" title=\"<%=filterOption.value%>\" class=\"klevuFilterOption<% if(filterOption.selected ==true) { %> klevuFilterOptionActive<% } %>\" data-value=\"<%=filterOption.value%>\"> <span class=\"kuFilterIcon\"></span> <span class=\"kufacet-text\"><%=filterOption.name%></span> <% if(filterOption.selected ==true) { %> <span class=\"kuFilterCancel\">X</span> <% } else { %> <span class=\"kuFilterTotal\"><%=filterOption.count%></span> <% } %> </a> </li> <% }); %> </ul> <% if(filter.options.length > 5 ) { %> <div class=\"kuShowOpt\" tabindex=\"-1\"> <span class=\"kuFilterDot\"></span><span class=\"kuFilterDot\"></span><span class=\"kuFilterDot\"></span> </div> <% } %> </div> </div> <% } else if(filter.type == \"SLIDER\") { %> <div class=\"kuFilterBox klevuFilter\" data-filter=\"<%=filter.key%>\"> <div class=\"kuFilterHead <%=(filter.isCollapsed) ? 'kuExpand' : 'kuCollapse'%>\"> <% var filter_label = (filter.label==\"klevu_price\") ? \"price\" : filter.label; %> <%=helper.translate(filter_label)%> </div> <div class=\"kuFilterNames sliderFilterNames <%=(filter.isCollapsed) ? 'kuFilterCollapse' : ''%>\"> <div class=\"kuPriceSlider klevuSliderFilter\" data-query = \"<%=dataLocal%>\"> <div data-querykey = \"<%=dataLocal%>\" class=\"noUi-target noUi-ltr noUi-horizontal noUi-background kuSliderFilter kuPriceRangeSliderFilter<%=dataLocal%>\"></div> </div> </div> </div> <% } else { %> <!-- Other Facets --> <% } %> <% }); %> <!-- <div class=\"kuFiltersFooter\"> <a target=\"_self\" href=\"javascript:void(0)\" class=\"kuBtn kuFacetsSlideOut kuMobileFilterCloseBtn\" role=\"button\" tabindex=\"0\" area-label=\"\"><%=helper.translate(\"Close\")%></a> </div> --> </div> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickTemplateSortBy\"> <% var currentSort = klevu.getObjectPath(data, \"modules.quickFacetedLayoutSort.currentSort\"); %> <div class=\"kuDropdown kuDropSortBy kuQuickFacetedLayoutSort\" role=\"listbox\"> <div class=\"kuDropdownOptions\"> <div title=\"<%= helper.translate(\"Relevance\") %>\" class=\"kuDropOption kuSort kuQuickRelSort <%= (currentSort === 'RELEVANCE') ? 'kuActiveSort' : '' %>\" data-value=\"RELEVANCE\" role=\"option\"></div> <div title=\"<%= helper.translate(\"Price: Low to high\") %>\" class=\"kuDropOption kuSort kuQuickLTHSort <%= (currentSort === 'PRICE_ASC') ? 'kuActiveSort' : '' %>\" data-value=\"PRICE_ASC\" role=\"option\"></div> <div title=\"<%= helper.translate(\"Price: High to low\") %>\" class=\"kuDropOption kuSort kuQuickHTLSort <%= (currentSort === 'PRICE_DESC') ? 'kuActiveSort' : '' %>\" data-value=\"PRICE_DESC\" role=\"option\"></div> </div> </div></script><script type=\"template/klevu\" id=\"kuTemplateQuickResultsViewSwitch\"> <div class=\"kuQuickResultsViewSwitchContainer\"> <a title=\"<%= helper.translate(\"Grid View\") %>\" class=\"kuViewSwitch kuGridViewBtn\" data-value=\"grid\"> <span class=\"icon-gridview\"></span> </a> <a title=\"<%= helper.translate(\"List View\") %>\" class=\"kuViewSwitch kuListViewBtn\" data-value=\"list\"> <span class=\"icon-listview\"></span> </a> </div></script><script type=\"template/klevu\" id=\"klevuQuickOtherContent\"> <% if(data.query.cmsCompressed) { %> <% if(data.query.cmsCompressed.result.length > 0 ) { %> <div ku-container data-container-id=\"ku_quick_main_content_container\" data-container-role=\"content\" data-content=\"cmsCompressed\" > <section ku-container data-container-id=\"ku_quick_main_content_left\" data-container-position=\"left\" data-container-role=\"left\"> <div ku-block data-block-id=\"ku_quick_left_facets\"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === true && data.query.cmsCompressed.filters && data.query.cmsCompressed.filters.length > 0) { %> <div data-section=\"cmsCompressed\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplateFilters',scope,data,\"cmsCompressed\") %> </div> <% } %> </div> <div ku-block data-block-id=\"ku_quick_left_call_outs\"></div> <div ku-block data-block-id=\"ku_quick_left_banner\"></div> </section> <section ku-container data-container-id=\"ku_quick_main_content_center\" data-container-position=\"center\" data-container-role=\"center\"> <header ku-block data-block-id=\"ku_quick_result_header\"></header> <div ku-block data-block-id=\"ku_quick_result_items\"> <div class=\"klevuResultsBlock\"> <%=helper.render('klevuQuickProductBlockTitleHeader',scope,data) %> <div class=\"klevuQuickSearchResults klevuMeta cmsCompressed\" data-section=\"cmsCompressed\" id=\"cmsCompressed\"> <ul> <% helper.each(data.query.cmsCompressed.result,function(key,product){ %> <%=helper.render('klevuQuickTemplateContentBlock',scope,data,product) %> <% }); %> <%=helper.render('klevuQuickTemplateInfiniteScrollDown',scope,data) %> </ul> </div> </div> </div> <div ku-block data-block-id=\"ku_quick_other_items\"> <div data-section=\"cmsCompressed\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplatePagination',scope,data,\"cmsCompressed\") %> </div> </div> <footer ku-block data-block-id=\"ku_quick_result_footer\"></footer> </section> <section ku-container data-container-id=\"ku_quick_main_content_right\" data-container-position=\"right\" data-container-role=\"right\"> <div ku-block data-block-id=\"ku_quick_right_facets\"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === false && data.query.cmsCompressed.filters && data.query.cmsCompressed.filters.length > 0) { %> <div data-section=\"cmsCompressed\" class=\"klevuMeta\"> <%=helper.render('klevuQuickTemplateFilters',scope,data,\"cmsCompressed\") %> </div> <% } %> </div> <div ku-block data-block-id=\"ku_quick_right_call_outs\"></div> <div ku-block data-block-id=\"ku_quick_right_banner\"></div> </section> </div> <% } else { %> <% } %> <% } else { %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickTemplateContentBlock\"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <li ku-product-block class=\"klevuProduct\" data-id=\"<%=dataLocal.id%>\"> <a target=\"_self\" href=\"<%=dataLocal.url%>\" data-id=\"<%=dataLocal.id%>\" class=\"klevuQuickProductInnerBlock trackProductClick\"> <div class=\"klevuProductItemTop\"> <div class=\"klevuQuickImgWrap\"> <div class=\"klevuQuickDiscountBadge\"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src=\"<%=dataLocal.image%>\" origin=\"<%=dataLocal.image%>\" onerror=\"klevu.dom.helpers.cleanUpProductImage(this)\" alt=\"<%=updatedProductName%>\" /> </div> </div> <div class=\"klevuProductItemBottom\"> <div class=\"klevuQuickProductDescBlock\"> <div title=\"<%= updatedProductName %>\" class=\"klevuQuickProductName kuClippedOne\"> <%= updatedProductName %> </div> <div class=\"klevu-desc-l2 kuClippedOne\"> <%=dataLocal.shortDesc%> </div> <div class=\"klevuQuickProductDesc kuClippedOne\"> <div class=\"klevuSpectxt\"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> <%=helper.render('klevuQuickProductRating',scope,data,dataLocal) %> </div> </div> <div class=\"kuClearLeft\"></div> </a> </li></script><script type=\"template/klevu\" id=\"klevuQuickTemplateTabResults\"> <% var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue(); var hasAnyResultFound = false; helper.each(data.query,function(key,query) { if(query.tab == true) { if(helper.hasResults(data,query.id)) { var results = data.query[query.id].meta.totalResultsFound; if(results > 0){ hasAnyResultFound = true; } } } }); %> <div class=\"kuContainer\"> <div class=\"kuTabs\" role=\"tablist\" style=\"display:<%= isCmsEnabled && hasAnyResultFound ? 'block' : 'none' %>\"> <% var selectedTab = false; %> <% helper.each(data.query,function(key,query){ %> <% if(query.tab == true) { %> <% if(helper.hasResults(data,query.id)) { %> <a target=\"_self\" class=\"kuTab<% if(!selectedTab){ selectedTab = true; %> kuTabSelected<% } %>\" data-section=\"<%=query.id%>\" role=\"tab\" tabindex=\"0\" aria-selected=\"\" area-label=\"Products tab\"> <%=helper.translate(query.tabText,data.query[query.id].meta.totalResultsFound)%> </a> <% } else { %> <a target=\"_self\" class=\"kuTabDeactive\" data-section=\"<%=query.id%>\" role=\"tab\" tabindex=\"0\" aria-selected=\"\" area-label=\"Products tab\"> <%=helper.translate(query.tabText,0)%> </a> <% } %> <% } %> <% }); %> </div> </div></script><!-- Quick search add to cart button template--><script type=\"template/klevu\" id=\"quickSearchProductAddToCart\"> <% if(dataLocal.inStock != \"no\") { %> <% var addToCartCaption = klevu.search.modules.kmcInputs.base.getAddToCartButtonCaption(); %> <% if(addToCartCaption && addToCartCaption.indexOf(\"<img\") !== -1) { %> <div class=\"kuAddtocart klevuQuickAddtoCart \" data-id=\"<%=dataLocal.id%>\"> <a target=\"_self\" href=\"javascript:void(0)\" class=\"kuBtn klevuQuickCartBtn\" role=\"button\" tabindex=\"0\" area-label=\"Add to cart\"><%= addToCartCaption %></a> </div> <% } else { %> <div class=\"kuAddtocart klevuQuickAddtoCart\" data-id=\"<%=dataLocal.id%>\" > <button class=\"kuBtn kuBtnDark klevuQuickCartBtn\"><%= helper.translate(addToCartCaption) %></button> </div> <% } %> <% } %></script><script type=\"template/klevu\" id=\"klevuQuickTemplateInfiniteScrollDown\"> <li style=\"width:100% !important\" ku-product-block class=\"klevuProduct klevuProductLoadMore\"> <div class=\"kuInfiniteScrollContainer\"> <button class=\"kuLoadMoreBtn\">Load More</button> </div> </li></script><script type=\"template/klevu\" id=\"klevuQuickProductRating\"> <% if(typeof dataLocal.rating != \"undefined\" && dataLocal.rating !== \"\") { %> <div class=\"klevu-stars-small-l2\"> <div class=\"klevu-rating-l2\" style=\"width:<%=(20*Number(dataLocal.rating))%>%;\"></div> </div> <% } %></script>";
        var quickThemeStyleContent = "[ku-container] a,[ku-container] p,[ku-container] div,[ku-container] ul li{font-family:inherit;font-size:13px;line-height:130%;text-decoration:none;font-weight:normal}[ku-container] *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;outline:0;-webkit-font-smoothing:antialiased;vertical-align:top}.kuBase{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container],[ku-block]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"main\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;width:1200px;margin:0 auto}[ku-container][data-container-role=\"header\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"subPanel\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"banner\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"navigation\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent [ku-container]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-container][data-container-role=\"content\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;display:table;width:100%}[ku-container][data-container-role=\"content\"] [ku-block]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-block][ku-empty],[ku-container][ku-empty]{display:none!important;width:0!important;padding:0!important;height:0!important;margin:0!important;overflow:hidden!important}[ku-container][data-container-role=\"left\"]{display:table-cell;width:22%;height:auto;max-width:275px}[ku-container][data-container-role=\"right\"]{display:table-cell;width:22%;height:auto;max-width:275px}[ku-container][data-container-role=\"content\"] [ku-container][data-container-role=\"results\"]{display:table-cell;width:auto;height:auto}[ku-container][data-container-role=\"content\"]:after{content:'';display:block;clear:both}[ku-block]:empty{display:none!important;width:0!important;height:0!important;min-height:0!important;padding:0;margin:0;overflow:hidden}@media only screen and (max-width:1100px){.kuResults ul li{width:33%;padding:5px}.kuFilterBox .kuFilterNames ul li a span.kufacet-text{max-width:60%;width:60%}}@media only screen and (max-width:991px){[ku-container][data-container-role=\"left\"],[ku-container][data-container-role=\"right\"]{width:32%}}@media only screen and (max-width:767px){[ku-container][data-container-role=\"content\"],[ku-container][data-container-role=\"content\"] [ku-container][data-container-role=\"results\"],[ku-container][data-container-role=\"left\"],[ku-container][data-container-role=\"right\"]{display:block;width:100%;height:auto}.kuContainer .kuTabs a{display:inline-block}.kuContainer .kuTabs a:hover{border-bottom:0 solid #ddd;text-decoration:none;background:#f5f5f5}.kuContainer a.kuTabSelected{border-bottom:0 solid #ddd;background:#f5f5f5}.kuLandingNoResultsMessage{font-size:15px;line-height:1.2em;padding:10px 5%;text-align:center}.kuFilterBox{margin-bottom:5px;padding-bottom:10px;width:100%}}.klevu-stars-small-l2{height:13px;display:inline-block;vertical-align:bottom;background:transparent url(https://js.klevu.com/klevu-js-v1/img-1-1/star-gray.png) top left repeat-x;width:65px;margin-top:5px}.klevu-stars-small-l2 .klevu-rating-l2{background:transparent url(https://js.klevu.com/klevu-js-v1/img-1-1/star-yellow.png) top left repeat-x;height:13px}.kuQuickSearchFacetedLayout>div,.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled>div{width:100%!important;max-width:550px!important}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"left\"],.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"left\"]{width:33%;padding-right:2%}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"right\"],.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"right\"]{width:Calc(65%)}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"left\"]{width:33%;padding-right:0}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"right\"]{width:33%}.kuQuickSearchFacetedLayout .kuQuickResultsListContainer{position:relative;height:360px;overflow:auto}.kuQuickSearchFacetedLayout .kuPagination{padding:10px 20px;text-align:right}.kuQuickSearchFacetedLayout .kuPagination a{margin:0;position:relative;display:inline-block;padding-left:0;padding-right:10px;color:#333;cursor:pointer;text-decoration:none;border-right:1px solid #ddd;font-size:14px}.kuQuickSearchFacetedLayout .kuPagination a:hover{color:#333}.kuQuickSearchFacetedLayout .kuPagination a:last-child{border-right:0}.kuQuickSearchFacetedLayout .kuPagination a.kuCurrent{background:#fff;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;font-weight:bold}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct{width:32%!important;border-right:1px solid #e2e2e2;border-top:1px solid #e2e2e2;display:inline-block;float:left;min-height:200px}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct .klevu-desc-l2{display:none}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:hover{background-color:#f8f8f8}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:hover .klevuQuickAddtoCart{opacity:1;visibility:visible}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(1){border-top:0;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(2){border-top:0;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3){border-top:0;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(1){border-bottom:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(2){border-bottom:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(3){border-bottom:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3n+3){border-right:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuResultsBlock .klevuQuickSearchResults .klevuProductItemTop{width:100%;float:none}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuResultsBlock .klevuQuickSearchResults .klevuProductItemBottom{width:100%;float:none}.kuQuickSearchFacetedLayout [data-result-view='grid'].klevuQuickSearchResults .klevuQuickAddtoCart{margin:0 auto;position:absolute;display:inline-block;bottom:auto;width:auto;top:25%;left:0;width:100%;text-align:center;opacity:0;visibility:hidden}.kuQuickSearchFacetedLayout .klevuResultsBlock [data-result-view='grid'].klevuQuickSearchResults .klevuProductItemBottom{width:100%;float:none}.kuQuickSearchFacetedLayout .klevuResultsBlock [data-result-view='grid'].klevuQuickSearchResults .klevuProductItemTop{width:100%;float:none}.kuQuickSearchFacetedLayoutRightSideFilters .kuPagination{text-align:left}.klevuTarget.klevu-fluid.kuQuickSearchFacetedLayout>div{min-width:54%}@media only screen and (min-width:768px) and (max-width:991px){.klevuTarget.klevu-fluid.kuQuickSearchFacetedLayout>div{min-width:66%;max-width:100%}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"left\"]{width:38%}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"right\"]{width:38%}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct{width:49%!important;border-top:0;min-height:230px}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3){border-top:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(1){border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(2n+2){border-right:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(odd){border-right:1px solid #e2e2e2;border-top:0}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"left\"]{width:38%;padding-right:2%}}@media only screen and (max-width:767px){.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"left\"]{width:100%;padding-right:0;max-width:100%}.kuQuickSearchFacetedLayout [ku-container][data-container-role=\"right\"]{width:100%;padding-right:0;max-width:100%}.kuQuickSearchFacetedLayout .kuFilterBox .kuFilterHead{font-weight:bold}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct{width:49%!important;border-top:0;min-height:230px}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3){border-top:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(1){border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(2n+2){border-right:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(odd){border-right:1px solid #e2e2e2;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:hover .klevuQuickAddtoCart{opacity:1;visibility:visible}.kuQuickSearchFacetedLayout [data-result-view='grid'].klevuQuickSearchResults .klevuQuickAddtoCart{position:relative;display:inline-block;bottom:15px;width:auto;top:auto;left:0;width:100%;text-align:center;opacity:1;visibility:visible;margin-top:10px}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"left\"]{width:100%;padding-right:0;max-width:100%}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"right\"]{width:100%;padding-right:0;max-width:100%}}.kuCarousel{box-sizing:border-box;position:relative;width:100%;height:210px}.kuCarousel *:before{box-sizing:border-box}.kuCarousel *:after{box-sizing:border-box}.kuCarousel .kuCarousel-content{position:relative;overflow:hidden;transition:width .4s;height:100%}.kuCarousel .kuSlide{height:100%;position:absolute;z-index:1;transition:left .4s cubic-bezier(0.47,0.13,0.15,0.89)}.kuCarousel .nav{position:absolute;top:50%;margin-top:-8%;background-color:#FFF;width:24px;height:24px;z-index:2;cursor:pointer;border-radius:50%;border:0;outline:0;color:white;-webkit-user-select:none;background-position:center;background-repeat:no-repeat;background-size:100%;display:block}.kuCarousel .nav-left{left:-5px;background-image:url(https://js.klevu.com/klevu-js-v1/img-1-1/icon-prev.png)}.kuCarousel .nav-right{right:-5px;background-image:url(https://js.klevu.com/klevu-js-v1/img-1-1/icon-next.png)}.kuCarousel .kuCarousel-arrow-icon-left{margin-left:5px;margin-top:2px}.kuCarousel .kuCarousel-arrow-icon-right{margin-left:7px;margin-top:2px}.kuFilterNames{height:118px;overflow:hidden}.kuFilterNames ul{margin:0;padding:0}.kuFilterNames ul li{list-style:none;text-align:left;width:100%;display:inline-block;margin:0;padding:0}.kuFilterNames ul li a{display:block;position:relative;overflow:hidden;padding:0;text-decoration:none;cursor:pointer;font-style:normal;color:#333;background:0;margin:2px;margin-left:5px}.kuFilterNames ul li a span{display:inline-block;vertical-align:middle}.kuFilterNames ul li a span.kufacet-text{max-width:74%;width:74%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;float:left}.kuFilterNames ul li a span.kuFilterIcon{float:left;margin:0;padding:0;font-weight:normal}.kuFilterNames ul li a:hover{cursor:pointer}.kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff}.kuFilterNames ul li a:hover span.kuFilterIcon:after{content:'';position:absolute;width:8px;height:8px;background:#333;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%}.kuFilterNames ul li a span.kuFilterTotal{float:right;text-align:right;margin:0;padding:0}.kuFilterNames ul li a span.kuFilterCancel{float:right;text-align:right;margin:0;padding:0}.kuFilterNames ul li.kuSelected a{color:#333}.kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff}.kuFilterNames ul li.kuSelected span.kuFilterIcon:after{content:'';position:absolute;width:8px;height:8px;background:#333;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%;border-color:#333}.kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;border-color:#333}.kuFilterNames.kuFilterShowAll{height:auto;overflow:unset}.kuFilterHead{font-family:inherit;font-size:13px;font-weight:bold;padding:5px;color:#333;display:block;line-height:1.8;text-transform:uppercase;border-bottom:1px solid #eee;background:0;margin-bottom:15px;margin-top:0;position:relative;cursor:pointer;transition:all .3s ease}.kuShowOpt{padding:0 5px;cursor:pointer;position:absolute;bottom:-5px}.kuShowOpt a{color:#333;text-decoration:none}.kuHideOpt a{color:#333;text-decoration:none}.kuFilterDot{height:5px;width:5px;background-color:#333;border-radius:50%;display:inline-block;margin:2px}.kuFilterIcon:before{content:'';border:2px solid #ddd;border-radius:50%;margin:0;margin-right:6px;height:18px;width:18px;display:inline-block;color:#ddd;position:relative;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;transition:background 200ms;-webkit-transition:background 200ms;-moz-transition:background 200ms;-webkit-transition:border-color 200ms;-moz-transition:border-color 200ms;transition:border-color 200ms}.kuMulticheck .kuFilterIcon:before{content:'';border:1px solid #ddd;border-radius:0;margin:0;margin-right:8px;height:18px;width:18px;display:inline-block;color:#ddd;position:relative}.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:after{content:'';position:absolute;width:10px;height:5px;background:transparent;top:5px;left:4px;border:2px solid #333;border-top:0;border-right:0;border-radius:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:after{content:'';position:absolute;width:10px;height:5px;background:transparent;top:4px;left:4px;border:2px solid #ddd;border-top:0;border-right:0;border-radius:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.kuMulticheck .kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;border-color:#333}.kuQuickSearchFacetedLayout .kuFilters,.kuSearchResultsPageContainer .kuFilters{padding:10px}.kuQuickSearchFacetedLayout .kuFilterBox .kuFilterNames ul li a span.kufacet-text,.kuSearchResultsPageContainer .kuFilterBox .kuFilterNames ul li a span.kufacet-text{max-width:70%;width:70%}.kuQuickSearchFacetedLayout [data-block-id=\"ku_quick_left_facets\"]{background-color:#fff;overflow:auto;max-height:400px;text-align:left}.kuQuickSearchFacetedLayout [data-block-id=\"ku_quick_right_facets\"]{background-color:#fff;overflow:auto;max-height:400px;text-align:left}.kuFilterBox{margin-bottom:12px;background:0;padding-bottom:12px;position:relative}.kuFilterBox .kuFilterHead{padding:5px 0;color:#333;display:block;text-transform:uppercase;border-bottom:1px solid #ddd;background:0;margin-bottom:0}.kuFilterBox .kuFilterNames{height:125px;overflow:hidden}.kuFilterBox .kuFilterNames ul{margin:0;padding:0}.kuFilterBox .kuFilterNames ul li{list-style:none;text-align:left;width:100%;display:inline-block;margin:0;padding:0}.kuFilterBox .kuFilterNames ul li a{display:block;position:relative;overflow:hidden;padding:0;text-decoration:none;cursor:pointer;color:#333;background:0;margin:2px 5px 2px 0}.kuFilterBox .kuFilterNames ul li a span{display:inline-block;vertical-align:middle}.kuFilterBox .kuFilterNames ul li a span.kufacet-text{max-width:75%;width:75%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;float:left}.kuFilterBox .kuFilterNames ul li a span.kuFilterIcon{float:left;margin:0;padding:0;font-weight:normal}.kuFilterBox .kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff}.kuFilterBox .kuFilterNames ul li a:hover span.kuFilterIcon:after{content:\"\";position:absolute;width:8px;height:8px;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%;background:#ddd}.kuFilterBox .kuFilterNames ul li.kuSelected a{color:#333}.kuFilterBox .kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff}.kuFilterBox .kuFilterNames ul li.kuSelected span.kuFilterIcon:after{content:\"\";position:absolute;width:8px;height:8px;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%;background:#ddd;border-color:#333!important}.kuFilterBox .kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;border-color:#333}.kuFilterBox .kuFilterIcon:before{content:\"\";border:2px solid #ccc;border-radius:50%;margin:0;margin-right:8px;height:18px;width:18px;display:inline-block;color:#ccc;position:relative;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;transition:background 200ms;-webkit-transition:background 200ms;-moz-transition:background 200ms;-webkit-transition:border-color 200ms;-moz-transition:border-color 200ms;transition:border-color 200ms}.kuFilterBox .kuFilterNames.kuFilterCollapse{height:0;overflow:hidden}.kuFilterBox .kuFilterNames.kuFilterCollapse .kuShowOpt{display:none}.kuFilterBox .kuFilterNames.kuFilterShowAll{height:auto;overflow:unset}.kuFilterBox .kuShowOpt{padding:0;cursor:pointer;position:absolute;bottom:-12px}.kuFilterBox .kuShowOpt a{color:#4d7abf;text-decoration:none}.kuFilterBox .kuShowOpt .kuFilterDot{height:5px;width:5px;background-color:#888;border-radius:50%;display:inline-block;margin:2px}.kuFilterBox .kuExpand{position:relative!important;transition:all .3s ease}.kuFilterBox .kuCollapse{position:relative!important;transition:all .3s ease}.kuFilterBox .kuFilterHead.kuCollapse{margin-bottom:10px}.kuFilterBox .kuFilterHead.kuCollapse::after{border-color:#333;border-image:none;border-style:solid;border-width:0 1px 1px 0;content:\"\";display:inline-block;padding:4px;position:absolute;right:12px;top:14px;-webkit-transform:rotate(-135deg);-moz-transform:rotate(-135deg);-o-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg);transition:all .3s ease}.kuFilterBox .kuFilterHead.kuExpand::after{-moz-border-bottom-colors:none;-moz-border-left-colors:none;-moz-border-right-colors:none;-moz-border-top-colors:none;border-color:#333;border-image:none;border-style:solid;border-width:0 1px 1px 0;content:\"\";display:inline-block;padding:4px;position:absolute;right:12px;top:10px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);transition:all .3s ease 0s}.kuFilterBox.kuMulticheck .kuFilterIcon:before{content:\"\";border:1px solid #ccc;border-radius:0}.kuFilterBox.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:after{width:10px;height:5px;background:transparent;top:4px;left:4px;border:2px solid #ddd;border-top:0;border-right:0;border-radius:0}.kuFilterBox.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuFilterBox.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:after{width:10px;height:5px;background:transparent;top:4px;left:4px;border:2px solid #ddd;border-top:0;border-right:0;border-radius:0}.kuFilterBox.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuFilterBox.kuMulticheck .kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{border-color:#333}/*! nouislider - 8.2.1 - 2015-12-02 21:43:15 */.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;-moz-box-sizing:border-box;box-sizing:border-box}.noUi-target{position:relative;direction:ltr}.noUi-base{width:100%;height:100%;position:relative;z-index:1}.noUi-origin{position:absolute;right:0;top:0;left:0;bottom:0}.noUi-handle{position:relative;z-index:1}.noUi-stacking .noUi-handle{z-index:10}.noUi-state-tap .noUi-origin{-webkit-transition:left .3s,top .3s;transition:left .3s,top .3s}.noUi-state-drag *{cursor:inherit!important}.noUi-base{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.noUi-horizontal{height:12px}.noUi-horizontal .noUi-handle{width:24px;height:24px;left:-17px;top:-7px;border-radius:100%}.noUi-vertical{width:18px}.noUi-vertical .noUi-handle{width:28px;height:34px;left:-6px;top:-17px}.noUi-background{background:#fafafa;box-shadow:inset 0 1px 1px #f0f0f0}.noUi-connect{background:#333;box-shadow:inset 0 0 3px rgba(51,51,51,0.45);-webkit-transition:background 450ms;transition:background 450ms}.noUi-origin{border-radius:2px}.noUi-target{border-radius:4px;border:1px solid #d3d3d3;box-shadow:inset 0 1px 1px #f0f0f0,0 3px 6px -5px #bbb}.noUi-target.noUi-connect{box-shadow:inset 0 0 3px rgba(51,51,51,0.45),0 3px 6px -5px #bbb}.noUi-draggable{cursor:w-resize}.noUi-vertical .noUi-draggable{cursor:n-resize}.noUi-handle{border:1px solid #d9d9d9;background:#fff;cursor:default;box-shadow:inset 0 0 1px #fff,inset 0 1px 7px #ebebeb,0 3px 6px -3px #bbb;cursor:pointer}.noUi-active{box-shadow:inset 0 0 1px #fff,inset 0 1px 7px #ddd,0 3px 6px -3px #bbb}.noUi-handle:after,.noUi-handle:before{content:\"\";display:block;position:absolute;height:14px;width:1px;background:#e4e1e1;left:8px;top:4px}.noUi-handle:after{left:12px}.noUi-vertical .noUi-handle:after,.noUi-vertical .noUi-handle:before{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}[disabled] .noUi-connect,[disabled].noUi-connect{background:#b8b8b8}[disabled] .noUi-handle,[disabled].noUi-origin{cursor:not-allowed}.noUi-pips,.noUi-pips *{-moz-box-sizing:border-box;box-sizing:border-box}.noUi-pips{position:absolute;color:#999}.noUi-value{width:40px;position:absolute;text-align:center}.noUi-value-sub{color:#ccc;font-size:10px}.noUi-marker{position:absolute;background:#ccc}.noUi-marker-large,.noUi-marker-sub{background:#aaa}.noUi-pips-horizontal{padding:10px 0;height:50px;top:100%;left:0;width:100%}.noUi-value-horizontal{margin-left:-20px;padding-top:20px}.noUi-value-horizontal.noUi-value-sub{padding-top:15px}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:2px;height:5px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:15px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{width:15px;margin-left:20px;margin-top:-5px}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{display:block;position:absolute;border:1px solid #d9d9d9;border-radius:3px;background:#fff;padding:5px;text-align:center;width:max-content}.noUi-horizontal .noUi-handle-lower .noUi-tooltip{bottom:-32px}.noUi-horizontal .noUi-handle-upper .noUi-tooltip{bottom:-32px;right:0}.noUi-vertical .noUi-handle-lower .noUi-tooltip{left:120%}.noUi-vertical .noUi-handle-upper .noUi-tooltip{right:120%}.klevu-fluid,.klevu-fluid *,.klevuTarget,.klevuTarget *,.kuContainer *{font-family:inherit}[ku-container] a,[ku-container] p,[ku-container] div,[ku-container] ul li{font-family:inherit;font-size:13px;line-height:130%;text-decoration:none;font-weight:normal}[ku-container] *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;outline:0;-webkit-font-smoothing:antialiased;vertical-align:top}.kuClearLeft{clear:left}.kuClearRight{clear:right}.kuClearBoth,.kuClearBoth:after{clear:both}.kuGreen{color:#009b46!important}.kuBlack{color:#333!important}.kuClipped{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.kuClippedOne{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.kuClippedTwo{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.klevuTarget *{box-sizing:border-box}.kuBtn{display:inline-block;padding:5px 10px;cursor:pointer;font-size:11px!important;text-transform:uppercase;text-decoration:none;margin:5px 5px 5px 0;border-radius:3px;border:2px solid transparent;text-align:center}.kuBtnDark{background:#333;color:#fff;border-color:#333}.kuBtnLight{background:#ddd;color:#333;border-color:#dedede}.kuBtnDarkOutline{background:transparent;color:#333;border:2px solid #333}.kuBtnLightOutline{background:transparent;color:#ddd;border:2px solid #ddd}.kuBtnDark:hover,.kuBtnLight:hover,.kuBtnDarkOutline:hover,.kuBtnLightOutline:hover{background:#757575;color:#fff;border-color:#757575}.klevuTarget.klevu-fluid>div{position:absolute;z-index:20000000000;width:35%;max-width:450px;font-family:inherit;font-size:13px;background-color:#fff;border-radius:3px;color:#333}.kuBase{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container],[ku-block]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"main\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;width:1200px;margin:0 auto}[ku-container][data-container-role=\"header\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"subPanel\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"banner\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role=\"header\"] [ku-block][data-container-role=\"navigation\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent [ku-container]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-container][data-container-role=\"content\"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;display:table;width:100%}[ku-container][data-container-role=\"content\"] [ku-block]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-block][ku-empty],[ku-container][ku-empty]{display:none!important;width:0!important;padding:0!important;height:0!important;margin:0!important;overflow:hidden!important}.klevuQuickSearchingArea{width:100%;max-width:100%;border-radius:2px;-webkit-box-shadow:0 1px 5px rgba(50,50,50,0.4);-moz-box-shadow:0 1px 5px rgba(50,50,50,0.4);box-shadow:0 1px 5px rgba(50,50,50,0.4)}.klevuQuickSearchingArea .klevuLoader img{display:inline-block;width:22px!important}.klevuQuickSearchingArea span.klevuLoader img{margin-right:10px}.klevuQuickSearchingArea .kuFacetedLayoutMinCharText{padding:10px;line-height:35px}.klevuSuggestionsBlock{position:relative}.klevuSuggestionsBlock .klevuLoader{position:absolute;top:0;right:0;display:inline-block;padding:6px 10px}.klevuSuggestionHeading{text-transform:uppercase;padding:10px 5px}.klevuHeadingText{color:#333;display:inline-block}.klevuHeadingText a{float:right;margin-right:10px;color:#333;font-weight:normal;text-decoration:none}.klevuHeadingText a:hover{text-decoration:underline}.klevuAutoSuggestionsWrap{border-bottom:1px solid #ddd;padding:5px 10px}.klevuAutoSuggestionsWrap ul{margin:0;padding:0;text-align:left}.klevuAutoSuggestionsWrap ul li{display:block;list-style:none;margin:0;cursor:default;text-align:left}.klevuAutoSuggestionsWrap ul li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}.klevuAutoSuggestionsWrap ul li:hover{background-color:#f5f5f5}.klevuAutoSuggestionsWrap ul li:focus{background-color:#f5f5f5}.klevuAutoSuggestionsWrap ul li ul li a{padding-left:35px}.klevuAutoSuggestionsWrap ul li strong{color:#333}.klevuAutoSuggestionsWrap ul li.klevu-hovered{background-color:#f5f5f5}.klevuResultsBlock .klevuSuggestionHeading{padding:12px 15px}.klevuResultsBlock .klevuProductsViewAll{display:inline-block;position:absolute;top:12px;right:12px}.klevuResultsBlock .klevuProductsViewAll a{color:#333;font-weight:normal;text-decoration:none;text-transform:uppercase;font-size:10px;cursor:pointer;border-bottom:2px solid #ccc;padding:2px 0}.klevuResultsBlock .klevuQuickSearchResults{position:relative;margin:0;padding:0;box-sizing:border-box}.klevuResultsBlock .klevuQuickSearchResults ul{margin:0;padding-left:0;text-align:left}.klevuResultsBlock .klevuQuickSearchResults ul li{display:block;width:100%;height:auto;text-align:left;position:relative;border-bottom:1px solid #ddd;margin-bottom:auto}.klevuResultsBlock .klevuQuickSearchResults ul li a.klevuQuickProductInnerBlock{text-decoration:none;color:#333;outline:0;display:block;padding:8px;height:auto;line-height:20px}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickProductDescBlock{float:left;width:100%;margin-left:8px}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickProductName{font-weight:bold;color:#333;word-wrap:break-word}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickPriceGreyText{font-weight:normal!important;color:#393939!important;font-size:11px!important}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickProductDesc{color:#333}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickSalePrice{font-weight:bold;margin-bottom:5px;color:#333}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickOrigPrice{margin-right:5px;text-decoration:line-through;color:#333}.klevuResultsBlock .klevuQuickSearchResults ul li:hover{background-color:#f5f5f5}.klevuResultsBlock .klevuQuickSearchResults ul li:hover .klevuQuickSearchResults ul li div{color:#fff!important}.klevuResultsBlock .klevuQuickSearchResults ul li:focus{background-color:#f5f5f5}.klevuResultsBlock .klevuQuickSearchResults ul li:focus .klevuQuickSearchResults ul li div{color:#fff!important}.klevuResultsBlock .klevuQuickSearchResults .klevuProductItemTop{margin:0;box-sizing:border-box;float:left;padding:5px;position:relative;width:20%}.klevuResultsBlock .klevuQuickSearchResults .klevuProductItemBottom{margin:0;box-sizing:border-box;padding:5px;position:relative;min-height:60px;float:left;width:80%}.klevuResultsBlock .klevuQuickSearchResults .klevuProductItemBottom .klevu-desc-l2{color:#8a8a8a;font-size:13px}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickImgWrap{float:none;overflow:hidden;width:100%!important;height:70px!important;text-align:center}.klevuResultsBlock .klevuQuickSearchResults img{max-width:100%!important;max-height:100%!important;width:auto;height:auto;border:0;outline:0;display:inline-block;margin:0 auto;opacity:1}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickDiscountBadge{background:#ffcc01;padding:0 5px;color:#333;font-size:9px;position:absolute;top:6px;left:4px}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickDiscountBadge strong{color:#333}.klevuResultsBlock .klevuQuickNoResults{text-align:center;font-size:13px;padding:0}.klevuResultsBlock .klevuQuickNoResults .klevuQuickNoResultsInner{padding:15px;margin:0}.klevuResultsBlock .klevuQuickNoResultsMessage{background:transparent;font-size:13px;padding:20px;text-align:center;border:0}@media only screen and (max-width:1024px){.klevuTarget.klevu-fluid>div{width:50%}.klevuQuickSearchResults .klevuQuickImgWrap{height:55px!important}}@media only screen and (max-width:767px){.klevuTarget.klevu-fluid>div{max-width:400px;width:70%}}@media only screen and (max-width:480px){.klevuTarget.klevu-fluid>div{width:98%;left:1%!important}.klevu-fluid .klevuQuickSearchResults ul li .klevuQuickProductDesc{display:none}}@media only screen and (max-width:420px){.klevuTarget.klevu-fluid>div{max-width:100%}}.searchRequestLoading .klevuQuickSearchingArea{opacity:.6;pointer-events:none}.searchRequestLoading .klevuQuickSearchingArea::after{content:url(\"https://js.klevu.com/klevu-js-v1/img/klevu-loader.GIF\");position:absolute;margin-left:45%;top:12px}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer [ku-container][data-container-role=\"left\"]{width:100%;max-width:100%}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer .kuPopularSearchesBlock{margin-bottom:8px}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer .kuRecentSearchesBlock{margin-bottom:8px}.kuRecommendationSlider{display:none}.kuRecommendationSlider .klevuProductItemTop .klevuQuickImgWrap{float:none;overflow:hidden;width:100%!important;height:155px!important;text-align:center;margin:0 auto;position:relative;box-sizing:border-box;padding:0;border:1px solid #eee;max-height:155px!important}.kuEmptySearchBox.kuPersonalizedSearchRecsEnabled .kuRecommendationSlider{display:block}.kuSearchPersonalizationsContainer{height:40px}.kuSearchPersonalizationsContainer *{visibility:hidden}.kuEmptySearchBox .kuSearchPersonalizationsContainer{height:auto}.kuEmptySearchBox .kuSearchPersonalizationsContainer *{visibility:unset}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuQuickSearchingArea{padding:6px 9px}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuProductItemTop{width:100%;display:block;float:none}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuProductItemBottom{width:100%;display:block;float:none}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuResultsBlock .klevuSuggestionHeading{padding:10px 3px}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuResultsBlock .klevuProductItemBottom{font-size:12px;color:#666}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .kuRecentSearchTerms{border:0}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .kuPopularSearchTerms{border:0}@media only screen and (max-width:767px){.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"left\"]{width:100%;padding-right:0}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role=\"right\"]{width:100%;padding-right:0}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled>div{max-width:85%}}.klevuTarget.klevu-fluid.kuEmptySearchBox>div{min-width:38%!important}.kuDropdown.kuQuickFacetedLayoutSort{display:inline-block;float:right;min-width:75px;padding-top:10px;text-align:center}.klevuResultsBlock .klevuQuickSearchResults ul:before{content:'';width:100%;display:block;height:0;background:0}.kuQuickSearchResultsContainer .kuResultsHeadingTitleContainer{padding:8px 10px;border-bottom:1px solid #eee}.klevu-banner-ad{clear:both;text-align:center;width:100%;padding:8px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.klevu-banner-ad img{display:inline-block;width:auto;max-width:100%;max-height:100%}.kuPopularSearchTerms ul{margin:0;padding:0;text-align:left}.kuPopularSearchTerms li{display:block;list-style:none;margin:0;text-transform:capitalize;cursor:default;text-align:left}.kuPopularSearchTerms li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}.kuPopularSearchTerms li:hover{background-color:#f5f5f5}.kuRecentSearchTerms ul{margin:0;padding:0;text-align:left}.kuRecentSearchTerms li{display:block;list-style:none;margin:0;text-transform:capitalize;cursor:default;text-align:left}.kuRecentSearchTerms li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}.kuRecentSearchTerms li:hover{background-color:#f5f5f5}.kuQuickSearchNoRecordFound{text-align:center;margin-top:4%;margin-bottom:4%;color:#333;font-size:13px;background:#FFF;display:block}.kuQuickSearchNoRecordFound .klevuQuickPriceGreyText{font-weight:normal!important;color:#393939!important;font-size:11px!important}.kuQuickSearchNoRecordFound .kuQuickNoResults{max-width:90%;margin:auto;text-align:justify}.kuQuickSearchNoRecordFound .kuQuickNoResultsMessage{display:block;text-align:center;line-height:14px;color:#333;text-decoration:none;font-size:13px}.kuQuickSearchNoRecordFound .kuDividerLine{margin:10px 0;border-bottom:#ccc 1px solid;width:100%}.kuQuickSearchNoRecordFound .klevu-no-results-banner-ad-quick{clear:both;text-align:center;width:100%;padding:8px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.kuQuickSearchNoRecordFound .klevu-no-results-banner-ad-quick img{display:inline-block;width:auto;max-width:100%;max-height:100%}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuPopularProductsViewAll{display:inline-block;position:absolute;top:12px;right:12px}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchHeading{text-transform:uppercase;padding-bottom:10px;text-align:left}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuPopularProductsViewAll a{color:#333;font-weight:normal;text-decoration:none;text-transform:uppercase;font-size:10px;cursor:pointer;border-bottom:2px solid #CCC;padding:2px 0}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular{position:relative;margin:0;padding:0;box-sizing:border-box}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul{margin:0;padding-left:0;text-align:left}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li{display:block;width:100%;height:auto;text-align:left;position:relative;border-bottom:1px solid #ddd}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li a.klevuQuickPopularProductInnerBlock{text-decoration:none;color:#333;outline:0;display:block;padding:8px;height:auto;line-height:20px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickPopularProductDescBlock{float:left;width:100%;margin-left:8px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickProductName{font-weight:bold;color:#333;word-wrap:break-word}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickProductDesc{color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickSalePrice{font-weight:bold;margin-bottom:5px;color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickOrigPrice{margin-left:5px;text-decoration:line-through;color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li:hover{background-color:#f5f5f5}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li:hover .klevuQuickSearchNoResultsPopular ul li div{color:#fff!important}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuPopularProductItemTop{margin:0;box-sizing:border-box;float:left;padding:5px;position:relative;width:20%}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuPopularProductItemBottom{margin:0;box-sizing:border-box;padding:5px;position:relative;min-height:60px;float:left;width:80%}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuPopularProductItemBottom .klevu-desc-l2{color:#8a8a8a;font-size:13px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuQuickImgWrap{float:none;overflow:hidden;width:100%!important;height:70px!important;text-align:center}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular img{max-width:100%!important;max-height:100%!important;width:auto;height:auto;border:0;outline:0;display:inline-block;margin:0 auto;opacity:1}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuQuickDiscountBadge{background:#ffcc01;padding:0 5px;color:#333;font-size:9px;position:absolute;top:6px;left:4px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuQuickDiscountBadge strong{color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickNoResults{text-align:center;font-size:13px;padding:0}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickNoResults .klevuQuickNoResultsInner{padding:15px;margin:0}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickNoResultsMessage{background:transparent;font-size:13px;padding:20px;text-align:center;border:0}.kuQuickSearchNoRecordFound .searchRequestLoading .klevuQuickSearchingArea{opacity:.6;pointer-events:none}.kuQuickSearchNoRecordFound .klevuPopularProductsHeading{text-align:left;padding:8px 15px;text-transform:uppercase}.kuQuickSearchNoRecordFound .kuNoResultsContainer{max-width:100%}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchesBlock{padding:10px}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms ul{margin:0;padding:0 3px;text-align:left}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms li{display:block;list-style:none;margin:0;text-transform:capitalize;cursor:pointer;text-align:left}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms li:hover{background-color:#f5f5f5}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}@media only screen and (max-width:1024px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{width:50%}.kuQuickSearchNoRecordFound .klevuQuickSearchNoResultsPopular .klevuQuickImgWrap{height:55px!important}}@media only screen and (max-width:767px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{max-width:400px;width:70%}}@media only screen and (max-width:480px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{width:98%;left:1%!important}.kuQuickSearchNoRecordFound .klevu-fluid .klevuQuickSearchNoResultsPopular ul li .klevuQuickProductDesc{display:none}}@media only screen and (max-width:420px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{max-width:100%}}.kuCaptionStockIn{font-size:11px;color:green;display:inline-block;padding:0;float:left;width:100%;box-sizing:border-box;margin:2px 0}.kuQuickCaptionStockOut{font-size:11px;color:Red;display:inline-block;padding:0;float:left;min-height:30px;width:100%;box-sizing:border-box;margin:2px 0}.kuQuickSearchResultsContainer .kuCaptionVat{display:block;font-size:11px;color:#767676;width:100%;float:left;margin:0;padding:0;box-sizing:border-box;margin:2px 0}.kuQuickSearchFacetedLayout .kuSort{display:inline-block;margin:0;height:15px;width:15px;background-repeat:no-repeat!important}.kuQuickSearchFacetedLayout .kuSort.kuQuickRelSort{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/klevu-relevance.png) no-repeat 0 0;cursor:pointer;margin-right:2px}.kuQuickSearchFacetedLayout .kuSort.kuQuickRelSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuActiveSort{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickLTHSort{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/klevu-p-low-to-high.png) no-repeat 0 0;cursor:pointer;margin-right:-4px}.kuQuickSearchFacetedLayout .kuSort.kuQuickHTLSort{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/klevu-p-high-to-low.png) no-repeat 0 0;cursor:pointer}.kuQuickSearchFacetedLayout .kuSort.kuQuickHTLSort.kuActiveSort{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickHTLSort.kuActiveSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickLTHSort.kuActiveSort{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickLTHSort.kuActiveSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuQuickResultsViewSwitchContainer{display:inline-block;float:left}.kuQuickSearchFacetedLayout .kuDropdown.kuQuickFacetedLayoutSort{float:left;display:inline-block;float:right}.kuQuickResultsViewSwitchContainer{position:relative;display:inline-block;z-index:11;width:auto;padding:10px 5px}.kuQuickResultsViewSwitchContainer a{display:inline-block;width:22px;height:22px;margin-left:4px;text-align:center;vertical-align:middle;overflow:hidden}.kuQuickResultsViewSwitchContainer a.kuCurrent{background-position:0 -25px;text-decoration:none}.kuQuickResultsViewSwitchContainer .kuGridViewBtn{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/ku-gridview.png) no-repeat 0 0;cursor:pointer}.kuQuickResultsViewSwitchContainer .kuListViewBtn{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/ku-listview.png) no-repeat 0 0;cursor:pointer}[data-result-view='list'] .klevuProduct{width:100%!important}[data-result-view='list'] .klevuProduct:hover .kuProdAdditional{box-shadow:none!important}[data-result-view='list'] .klevuProduct main{display:inline-block;width:30%}[data-result-view='list'] .klevuProduct footer{display:inline-block;width:69%}[data-result-view='list'] .klevuProduct .kuProdAdditional{position:relative!important;visibility:unset!important;border:0!important}[data-result-view='list'] .klevuProduct .kuAddtocart .kuBtn{display:inline-block}@media only screen and (max-width:576px){[data-result-view='list'] .klevuProduct main{width:100%}[data-result-view='list'] .klevuProduct footer{width:100%}[data-result-view='list'] .klevuProduct .kuAddtocart .kuBtn{display:block}}.kuQuickSearchFacetedLayout .productListActive [data-content=\"cmsCompressed\"]{display:none!important}.kuQuickSearchFacetedLayout .cmsCompressedActive [data-content=\"productList\"]{display:none!important}.kuQuickSearchFacetedLayout .kuContainer{width:100%;margin:0 auto;font-family:inherit;font-size:12px;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%!important;padding:0!important}.kuQuickSearchFacetedLayout .kuContainer .kuTabs{margin:0 auto!important;text-align:center;border-bottom:1px solid #eee}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a{padding:8px;cursor:pointer;margin-right:5px;color:#333;display:inline-block;position:relative}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a:hover{border-bottom:3px solid #ddd;text-decoration:none}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a.kuTabSelected{border-bottom:3px solid #ddd}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a.kuTabSelected:hover{background:0}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickAddtoCart{margin:0;position:absolute;display:inline-block;bottom:10px;right:5px;width:auto}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickAddtoCart .kuBtn{padding:3px 6px;font-size:9px!important}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickAddtoCart img{max-width:80px!important;height:auto;max-height:45px!important}.klevuQuickSearchNoResultsPopular .klevuQuickAddtoCart{margin:0;position:absolute;display:inline-block;bottom:10px;right:5px;width:auto}.klevuQuickSearchNoResultsPopular .klevuQuickAddtoCart .kuBtn{padding:3px 6px;font-size:9px!important}.klevuQuickSearchNoResultsPopular .klevuQuickAddtoCart img{max-width:80px!important;height:auto;max-height:45px!important}.kuQuickSearchFacetedLayout .klevuQuickSearchResults .klevuQuickAddtoCart{margin:0;position:absolute;display:inline-block;bottom:15px;right:5px;width:auto;visibility:hidden;opacity:0}.kuQuickSearchFacetedLayout .klevuResultsBlock .klevuQuickSearchResults ul li:hover .klevuQuickAddtoCart{visibility:visible;opacity:1}.kuQuickSearchFacetedLayout .kuPriceSlider{width:auto;min-width:190px;max-width:98%;padding:20px;margin:auto;position:relative;box-sizing:border-box}.kuQuickSearchFacetedLayout .kuPriceSlider .noUi-tooltip{font-size:90%}.kuQuickSearchFacetedLayout .sliderFilterNames{height:90px}.kuQuickSearchFacetedLayout .kuInfiniteScrollContainer{text-align:center}.kuQuickSearchFacetedLayout .kuInfiniteScrollContainer .kuLoadMoreBtn{width:100%;margin:12px 0;height:34px;border:0;border-radius:2px;cursor:pointer}.kuQuickSearchFacetedLayout .kuInfiniteScrollContainer .kuLoadMoreBtn.hide{display:none!important}.kuQuickSearchFacetedLayout .klevuProductLoadMore{width:100%!important;min-height:40px!important;border:none!important}.kuQuickSearchFacetedLayout .klevuProductLoadMore:hover{background-color:transparent!important}.kuQuickSearchFacetedLayout .klevuProductLoadMore.hide{display:none!important}";

        var quickThemeSettings = klevu.getSetting(klevu.settings, "settings.theme.quickSearch");
        if (quickThemeSettings.loadDefaultStyles === true) {
            klevu.dom.helpers.addElementToHead({
                name: "klevu-quick-search-theme-styles",
                content: quickThemeStyleContent,
                type: "css"
            });
        }
        if (quickThemeSettings.loadDefaultTemplates === true) {
            quickThemeSettings.templateContainer = (quickThemeSettings.templateContainer && quickThemeSettings.templateContainer !== "") ? quickThemeSettings.templateContainer : window.document.body;
            var templateContainer = klevu.dom.helpers.addElementToParent(quickThemeSettings.templateContainer, "div", {
                id: "klevu-quick-search-theme-templates"
            });
            templateContainer.innerHTML = quickThemeTemplateContent;
        }
    });
})(klevu);

(function () {
    function checkForDataset() {
        if (!document.documentElement.dataset) {
            return false;
        }
        var el = document.createElement('div');
        el.setAttribute("data-a-b", "c");
        return el.dataset && el.dataset.aB == "c";
    }
    if (!checkForDataset()) {
        Object.defineProperty(Element.prototype, 'dataset', {
            get: function () {
                var element = this;
                var attributes = this.attributes;
                var map = {};
                for (var i = 0; i < attributes.length; i++) {
                    var attribute = attributes[i];
                    if (attribute && attribute.name && (/^data-\w[\w-]*$/).test(attribute.name)) {
                        var name = attribute.name;
                        var value = attribute.value;
                        var propName = name.substr(5).replace(/-./g, function (prop) {
                            return prop.charAt(1).toUpperCase();
                        });
                        Object.defineProperty(map, propName, {
                            enumerable: true,
                            get: function () {
                                return this.value;
                            }.bind({
                                value: value || ''
                            }),
                            set: function (name, value) {
                                if (typeof value !== 'undefined') {
                                    this.setAttribute(name, value);
                                } else {
                                    this.removeAttribute(name);
                                }
                            }.bind(element, name)
                        });
                    }
                }
                return map;
            }
        });
    }
})();(function () {
    if (typeof NodeList.prototype.forEach !== "function") {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
})();(function () {
    if (typeof window.isNaN !== "function") {
        window.isNaN = function isNaN(value) {
            var n = Number(value);
            return n !== n;
        };
    }
    if (typeof Number.isNaN !== "function") {
        Number.isNaN = Number.isNaN || function isNaN(input) {
            return typeof input === 'number' && input !== input;
        }
    }
})();/**
 * Component for initializing base template structure
 */
(function (klevu) {
    klevu.extend({
        baseStructure: {
            base: {
                initialize: function (scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var containers = klevu.dom.find("[ku-container]", target);
                    klevu.each(containers, function (key, container) {
                        var emptyBlocksCount = 0;
                        var containerChildren = container.children;
                        if (containerChildren && containerChildren.length) {
                            klevu.each(containerChildren, function (key, childElement) {
                                var kuBlockElement = childElement.getAttribute("ku-block");
                                if (kuBlockElement == "" || kuBlockElement) {
                                    if (!childElement.children.length) {
                                        childElement.setAttribute("ku-empty", "");
                                        emptyBlocksCount++;
                                    }
                                }
                            });
                        }
                        if (container.children.length === emptyBlocksCount) {
                            container.setAttribute("ku-empty", "");
                        }
                    });
                }
            },
            build: true
        }
    });

    /**
     * Function to set default thumbnail image 
     * @param {*} element 
     */
    klevu.dom.helpers.cleanUpProductImage = function (element) {
        var elementSrc = element.getAttribute("src");
        if (elementSrc && elementSrc.length) {
            var kuThumbnailImage = "";
            if (typeof klevu.search.modules.kmcInputs.base.getKMCUserOptionsNoImageUrl === "function") {
                kuThumbnailImage = klevu.search.modules.kmcInputs.base.getKMCUserOptionsNoImageUrl();
            } else {
                kuThumbnailImage = "https://js.klevu.com/klevu-js-v1/img-1-1/place-holder.jpg";
            }

            var isKlevuPlaceholderImage = (element.src.indexOf(kuThumbnailImage) > -1);
            if (isKlevuPlaceholderImage) {
                element.src = "";
                element.onerror = "";
                return;
            }
            var isPubAdded = (element.src.indexOf("/pub") > -1);
            if (isPubAdded) {
                element.src = element.src.replace("/pub", "");
                element.onerror = function () {
                    element.src = kuThumbnailImage;
                    element.onerror = "";
                };
            } else {
                var isOnlyMediaAdded = (element.src.indexOf("/media") > -1);
                var isNeedToChangeAppended = (element.src.indexOf("needtochange/") > -1);
                var originValue = element.getAttribute("origin");
                if (isNeedToChangeAppended) {
                    element.src = element.src.replace("needtochange/", "");
                } else if (isOnlyMediaAdded) {
                    element.src = element.src.replace("/media", "/pub/media");
                } else if (originValue) {
                    element.src = originValue.replace("needtochange/", "pub/");
                    element.onerror = function () {
                        element.src = kuThumbnailImage;
                        element.onerror = "";
                    };
                }
            }
        } else {
            var kuThumbnailImage = "";
            if (typeof klevu.search.modules.kmcInputs.base.getKMCUserOptionsNoImageUrl === "function") {
                kuThumbnailImage = klevu.search.modules.kmcInputs.base.getKMCUserOptionsNoImageUrl();
            } else {
                kuThumbnailImage = "https://js.klevu.com/klevu-js-v1/img-1-1/place-holder.jpg";
            }
            element.src = kuThumbnailImage;
            element.onerror = "";
        }
    }

    /**
     * Function to escape HTML from the string
     * @param {*} string 
     * @returns 
     */
    klevu.dom.helpers.escapeHTML = function (string) {
        if (string && string.length) {
            var entityMap = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '/': '&#x2F;',
                '`': '&#x60;',
                '=': '&#x3D;'
            };
            return String(string).replace(/[&<>"'`=\/]/g, function (s) {
                return entityMap[s];
            });
        } else {
            return string;
        }
    }

    /**
     * 
     * @param {*} path 
     * @returns 
     */
    klevu.dom.helpers.cleanCatogeryPath = function (path) {
        if (typeof path === "undefined" || path == "") {
            return path;
        }
        var messageHtml = document.createElement("textarea");
        messageHtml.innerHTML = path;
        path = messageHtml.value;
        return path.replace(/;/g, " &gt; ");
    }

    /**
     * Function to read stored cookie
     * @param {*} cookieName 
     * @returns 
     */
    klevu.dom.helpers.readCookie = function (cookieName) {
        var theCookie = " " + document.cookie,
            start = theCookie.indexOf(" " + cookieName + "="),
            end = theCookie.indexOf(";", start + 1);
        if (start === -1) {
            start = theCookie.indexOf(";" + cookieName + "=");
        }
        if (start === -1 || cookieName === "") {
            return "";
        }
        end = theCookie.indexOf(";", start + 1);
        if (end === -1) {
            end = theCookie.length;
        }
        return decodeURIComponent(theCookie.substring(start + cookieName.length + 2, end));
    }

    /**
     * Function to add product id to the recent viewed product cookie
     * @param {*} productId 
     */
    klevu.dom.helpers.addClickedProductToCookie = function (productId) {
        var encodedProductId = window.btoa(productId),
            cookieValue = klevu.dom.helpers.readCookie(klevu.settings.constants.COOKIE_KLEVU_RCP),
            existingProductIds, updatedCookieValue = encodedProductId,
            cookieExpiry = new Date(),
            httpOnlyTag = "undefined" !== typeof klevu_setHttpOnlyToCookies && klevu_setHttpOnlyToCookies ? "; HttpOnly" : "";
        if (cookieValue && cookieValue.trim() !== '') {
            existingProductIds = cookieValue.split("#-#");
            if (existingProductIds.indexOf(encodedProductId) !== -1) {
                existingProductIds.splice(existingProductIds.indexOf(encodedProductId), 1);
            } else {
                if (existingProductIds.length >= 20) {
                    existingProductIds.splice(-1, 1);
                }
            }
            existingProductIds.splice(0, 0, encodedProductId);
            updatedCookieValue = existingProductIds.join("#-#");
        }
        cookieExpiry.setTime(cookieExpiry.getTime() + (365 * 24 * 60 * 60 * 1000));
        document.cookie = klevu.settings.constants.COOKIE_KLEVU_RCP + "=" + updatedCookieValue +
            ";expires=" + cookieExpiry.toUTCString() + ";path=/" +
            ";SameSite=None; Secure" + httpOnlyTag;
    }

    /**
     * Function to set cleaned SKU value
     * @param {*} sku 
     */
    klevu.dom.helpers.cleanUpSku = function (sku) {
        if (typeof sku === "undefined" || sku == "") {
            return false;
        };
        var SKU = sku.toUpperCase();
        if (SKU.indexOf(';;;;') !== -1) {
            var SKUParent = SKU.split(";;;;")[0];
            SKU = SKUParent;
        };
        if (SKU.slice(0, 1) === "(" && SKU.slice(-1) === ")") {
            return " " + SKU;
        } else {
            return " " + "(" + SKU + ")";
        }
    }

    /**
     * Function to clean up price for template conditions
     * @param {*} priceValue 
     * @param {*} currency 
     * @returns 
     */
    klevu.dom.helpers.cleanUpPriceValue = function (priceValue, currency) {
        if (typeof priceValue == "undefined" || priceValue == "" || !priceValue) {
            return Number("N/A");
        }
        var updatedValue = String(priceValue);
        var hasPriceUpdated = false;
        if (currency && typeof klevu.search.modules.kmcInputs.base.getPriceFormatterObject == "function") {
            var currencyFormatter = klevu.search.modules.kmcInputs.base.getPriceFormatterObject(currency);
            if (currencyFormatter && currencyFormatter.decimal && currencyFormatter.decimal != "") {
                updatedValue = updatedValue.replace(currencyFormatter.decimal, ".");
                hasPriceUpdated = true;
            }
        }
        if (!hasPriceUpdated) {
            updatedValue = updatedValue.replace(",", ".");
        }
        return Number(updatedValue);
    }

    /**
     * Function to get promotional banner image alt tag and title text
     * @param {*} bannerObj 
     * @returns 
     */
    klevu.dom.helpers.getBannerAltTagText = function (bannerObj) {
        var bannerText = "";
        if (bannerObj) {
            if (bannerObj.bannerAltTag && bannerObj.bannerAltTag != "") {
                bannerText = bannerObj.bannerAltTag;
            } else if (bannerObj.bannerName && bannerObj.bannerName != "") {
                bannerText = bannerObj.bannerName;
            } else if (bannerObj.bannerImg && bannerObj.bannerImg != "") {
                bannerText = bannerObj.bannerImg.match(/.*\/(.*)$/)[1];
                bannerText = bannerText.replace(/\.[^/.]+$/, "");
            } else if (bannerObj.bannerImageUrl && bannerObj.bannerImageUrl != "") {
                bannerText = bannerObj.bannerImageUrl.match(/.*\/(.*)$/)[1];
                bannerText = bannerText.replace(/\.[^/.]+$/, "");
            }
        }
        return bannerText;
    }

    // /** move object attribute */
    klevu.dom.helpers.moveObjectElement = function (currentKey, afterKey, obj) {
        var result = {};
        var val = obj[currentKey];
        delete obj[currentKey];
        var next = -1;
        var i = 0;
        if (typeof afterKey === 'undefined' || afterKey === null) {
            afterKey = '';
        }

        Object.keys(obj).forEach(function (key) {
            var k = key;
            var v = obj[key];
            if ((afterKey === '' && i === 0) || next === 1) {
                result[currentKey] = val;
                next = 0;
            }
            if (k === afterKey) {
                next = 1;
            }
            result[k] = v;
            ++i;

        });

        if (next === 1) {
            result[currentKey] = val;
        }
        if (next !== -1) {
            return result;
        } else {
            return obj;
        }
    }

    /**
     * Function to initialize tab selection
     */
    klevu.dom.helpers.initializeTabSelection = function (data, scope, target, localStorageTab) {
        var isTabSelected;
        klevu.each(klevu.dom.find(".kuTab", target), function (key, value) {
            var selectedTab = localStorageTab.getElement("active");
            value.classList.remove("kuTabSelected");
            if (selectedTab && value.dataset && value.dataset.section) {
                if (selectedTab == value.dataset.section) {
                    value.classList.add("kuTabSelected");
                    var klevuWrap = klevu.dom.helpers.getClosest(value, ".klevuWrap");
                    if (klevuWrap === null) {
                        return;
                    }
                    data.context.activeQueryId = value.dataset.section;
                    data.context.section = value.dataset.section;
                    klevuWrap.classList.add(value.dataset.section + "Active");
                    isTabSelected = true;
                }
            }
        });
        if (!isTabSelected) {
            klevu.each(klevu.dom.find(".kuTab", target), function (key, value) {
                value.classList.remove("kuTabSelected");
                if (key === 0) {
                    value.classList.add("kuTabSelected");
                    var klevuWrap = klevu.dom.helpers.getClosest(value, ".klevuWrap");
                    if (klevuWrap === null) {
                        return;
                    }
                    data.context.activeQueryId = value.dataset.section;
                    klevuWrap.classList.add(value.dataset.section + "Active");
                }
            });
        }
    }

    /**
     * Function to get query string from URL
     * @param {*} key 
     * @returns 
     */
    klevu.dom.helpers.getQueryStringValue = function (key) {
        return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" +
            encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
            "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    };

    /**
     * Function to add/update query param in URL
     * @param {*} uri 
     * @param {*} key 
     * @param {*} value 
     * @returns 
     */
    klevu.dom.helpers.updateQueryStringParameter = function (uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        } else {
            return uri + separator + key + "=" + value;
        }
    };

    /**
     * function to check mobile device
     * @returns 
     */
    klevu.dom.helpers.isMobileDevice = function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|BB10/i.test(navigator.userAgent)) {
            return true;
        }
    };

    klevu.interactive(function () {
        var klevuSettingURLLanding = klevu.getSetting(klevu, "settings.url.landing");
        if (!klevuSettingURLLanding || klevuSettingURLLanding == "") {
            klevu.setSetting(klevu, "settings.url.landing", "#");
        }
    });

})(klevu);/**
 * Global Currency symbol map
 */
var klevu_currencySymbols = {
    'IRR': "ریال",
    'PLN': "z&#322;&nbsp;",
    'AUD': "AU$",
    'HRK': "kn",
    'BRL': "R$",
    'NGN': "₦",
    'HUF': "FT",
    'NOK': "kr",
    'CAD': "$",
    'NZD': "NZ$",
    'ZAR': "R",
    'VND': "&#8363;",
    'SEK': "kr",
    'COP': "$",
    'RUB': "руб.",
    'MXN': "$",
    'SGD': "S$",
    'EGP': "LE",
    'USD': "$",
    'HKD': "HK$",
    'IDR': "RP ",
    'KRW': "원",
    'BDT': "&#2547;",
    'EUR': "&euro;",
    'GBP': "&pound;",
    'INR': "&#8377;",
    'JPY': "&#165;",
    'CNY': "&#165;",
    'CRC': "&#8353;",
    'ILS': "&#8362;"
};

/**
 * Global Price formatters
 */
var klevu_priceFormatters = {
    "USD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "$",
        appendCurrencyAtLast: false
    },
    "EUR": {
        decimalPlaces: 2,
        thousandSeparator: ".",
        decimalSeparator: ",",
        currencySymbol: "&euro;",
        appendCurrencyAtLast: true
    },
    "GBP": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&pound;",
        appendCurrencyAtLast: false
    },
    "IRR": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "ریال",
        appendCurrencyAtLast: false
    },
    "PLN": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "z&#322;&nbsp;",
        appendCurrencyAtLast: false
    },
    "AUD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "AU$",
        appendCurrencyAtLast: false
    },
    "HRK": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "kn",
        appendCurrencyAtLast: true
    },
    "BRL": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "R$",
        appendCurrencyAtLast: false
    },
    "NGN": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "₦",
        appendCurrencyAtLast: false
    },
    "HUF": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "FT",
        appendCurrencyAtLast: true
    },
    "NOK": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ",",
        currencySymbol: "kr",
        appendCurrencyAtLast: true
    },
    "CAD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "$",
        appendCurrencyAtLast: false
    },
    "NZD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "NZ$",
        appendCurrencyAtLast: false
    },
    "ZAR": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "R",
        appendCurrencyAtLast: false
    },
    "VND": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#8363;",
        appendCurrencyAtLast: true
    },
    "SEK": {
        decimalPlaces: 2,
        thousandSeparator: ".",
        decimalSeparator: ",",
        currencySymbol: "kr",
        appendCurrencyAtLast: true
    },
    "COP": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "$",
        appendCurrencyAtLast: false
    },
    "RUB": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "руб.",
        appendCurrencyAtLast: true
    },
    "MXN": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "$",
        appendCurrencyAtLast: false
    },
    "SGD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "S$",
        appendCurrencyAtLast: false
    },
    "EGP": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "LE",
        appendCurrencyAtLast: false
    },
    "HKD": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "HK$",
        appendCurrencyAtLast: false
    },
    "IDR": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "RP ",
        appendCurrencyAtLast: false
    },
    "KRW": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "원",
        appendCurrencyAtLast: true
    },
    "BDT": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#2547;",
        appendCurrencyAtLast: false
    },
    "INR": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#8377;",
        appendCurrencyAtLast: false
    },
    "JPY": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#165;",
        appendCurrencyAtLast: false
    },
    "CNY": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#165;",
        appendCurrencyAtLast: false
    },
    "CRC": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#8353;",
        appendCurrencyAtLast: false
    },
    "ILS": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "&#8362;",
        appendCurrencyAtLast: false
    },
    "BGN": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "лв",
        appendCurrencyAtLast: false
    },
    "CZK": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "Kč",
        appendCurrencyAtLast: false
    },
    "DKK": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "kr.",
        appendCurrencyAtLast: false
    },
    "ISK": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "kr.",
        appendCurrencyAtLast: false
    },
    "RON": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "Lei",
        appendCurrencyAtLast: false
    },
    "CHF": {
        decimalPlaces: 2,
        thousandSeparator: ",",
        decimalSeparator: ".",
        currencySymbol: "CHF",
        appendCurrencyAtLast: false
    }
};/**
 * Klevu fetch v1 data utility
 */

var klevu_urlProtocol = "";
var klevu_javascriptDomain = "";

(function (klevu) {
    if(!klevu.isUndefined(klevu.support.kmc) || klevu.support.kmc === true) return;
	var kmcInputs = {
		/**
		 * Function to get the KMC input JS files base on the api key.
		 * @param {*} apiKey
		 */
		appendScriptsToHeader: function (apiKey) {
			if (klevu.search.modules.kmcInputs.resourceLoadInitiated === true) {
				return;
			}

			klevu.search.modules.kmcInputs.resourceLoadInitiated = true;
			var kmcDataURL = klevu.getSetting(klevu.settings, "settings.url.kmcData");
			if (!kmcDataURL || !kmcDataURL.length) {
				kmcDataURL = "https://js.klevu.com/klevu-js-v1/klevu-js-api/";
			}

			var loadCounter = 0;
			var importScripts = [{
					id: apiKey,
					src: kmcDataURL + apiKey + ".js",
				},
				{
					id: apiKey + "-banner",
					src: kmcDataURL + apiKey + "-banner.js",
				},
				{
					id: apiKey + "-maps",
					src: kmcDataURL + apiKey + "-maps.js",
				},
			];

			var srcLoadCallBack = function () {
				if (loadCounter == importScripts.length) {
					klevu.search.modules.kmcInputs.hasAllResourcesLoaded = true;
					if (typeof klevu_processKMCInputData === "function") {
						klevu_processKMCInputData();
					}
				}
			};

			importScripts.forEach(function (scriptObj) {
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.async = false;
				script.src = scriptObj.src;
				script.id = scriptObj.id;
				script.onload = function () {
					loadCounter++;
					srcLoadCallBack();
				};
				script.onerror = function () {
					loadCounter++;
					srcLoadCallBack();
				};
				document.head.appendChild(script);
			});
		},

		getBannerList: function () {
			return typeof klevu_banner !== "undefined" && !klevu.isEmptyObject(klevu_banner) ? klevu_banner : [];
		},

		/**
		 * Function to get banner list
		 * @returns
		 */
		getKeywordUrlMap: function () {

			return typeof klevu_keywordUrlMap !== "undefined" && !klevu.isEmptyObject(klevu_keywordUrlMap) ? klevu_keywordUrlMap : {};
		},
		/**
		 * Function to get auto suggestion max count
		 * @returns
		 */
		getMaxNumberOfAutoSuggestions: function () {
			return typeof klevu_maxSuggestionsToShow !== "undefined" && klevu_maxSuggestionsToShow ?
				klevu_maxSuggestionsToShow :
				5;
		},

		/**
		 * Function to get Quick search maximum number of category
		 * @returns
		 */
		getMaxNumberOfQuickSearchCategories: function () {
			return typeof klevu_maxCategoriesToShow !== "undefined" && klevu_maxCategoriesToShow ?
				klevu_maxCategoriesToShow :
				3;
		},

		/**
		 * Function to get the maximum numbers of product suggestions
		 */
		getMaxNumberOfProductSuggestions: function () {
			return typeof klevu_productsToShowInSlimLayout !== "undefined" ?
				klevu_productsToShowInSlimLayout :
				3;
		},

		/**
		 * Function to get the color swatches enable or disabled value
		 */
		getColorSwatchesEnableValue: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.showProductSwatches !== "undefined" ?
				klevu_uc_userOptions.showProductSwatches :
				false;
		},

		/**
		 * Function to get the filter enable or disabled value
		 */
		getFiltersEnableValue: function () {
			return typeof klevu_filtersEnabled !== "undefined" ? klevu_filtersEnabled : true;
		},

		/**
		 * Function to get the landing page filter position
		 */
		getLandingFilterPosition: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.landingFilterPosition !== "undefined" ?
				klevu_uc_userOptions.landingFilterPosition :
				"left";
		},

		/**
		 * Function to get the filter selection type value
		 */
		getFilterMultiSelectValue: function () {
			return typeof klevu_multiSelectFilters !== "undefined" ?
				klevu_multiSelectFilters :
				false;
		},

		/**
		 * Function to get the if show out of stock is enabled or disabled
		 */
		getShowOutOfStockValue: function () {
			return typeof klevu_showOutOfStock !== "undefined" ? klevu_showOutOfStock : false;
		},

		/**
		 * Function to get the out of stock caption
		 */
		getOutOfStockCaptionValue: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.outOfStockCaption !== "undefined" &&
				klevu_uc_userOptions.outOfStockCaption.length ?
				klevu_uc_userOptions.outOfStockCaption :
				"";
		},

		/**
		 * Function to get the showPopularSearches is enabled or disabled
		 */
		getShowPopularSearchesValue: function () {
			return typeof klevu_showPopularSearches !== "undefined" ?
				klevu_showPopularSearches :
				false;
		},

		/**
		 * Function to get the klevu_showRecentSerches is enabled or not
		 */
		getShowRecentSearchesValue: function () {
			return typeof klevu_showRecentSerches !== "undefined" ? klevu_showRecentSerches : false;
		},

		/**
		 * Function to get the klevu_webstorePopularTerms array
		 */
		getWebstorePopularTermsValue: function () {
			return typeof klevu_webstorePopularTerms !== "undefined" &&
				klevu_webstorePopularTerms.length ?
				klevu_webstorePopularTerms : [];
		},

		/**
		 * Function to get the CMS Enabled value
		 */
		getCmsEnabledValue: function () {
			return typeof klevu_cmsEnabled !== "undefined" ? klevu_cmsEnabled : false;
		},

		/**
		 * Function to get the if add to cart enabled or not
		 */
		getAddToCartEnableValue: function () {
			return typeof klevu_addToCartEnabled !== "undefined" ? klevu_addToCartEnabled : false;
		},

		/**
		 * Function to get the add to cart button caption
		 */
		getAddToCartButtonCaption: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.addToCartButton !== "undefined" ?
				klevu_uc_userOptions.addToCartButton :
				"Add to cart";
		},

		/**
		 * Function to get no results found object from KMC js file
		 */
		getNoResultsFoundObject: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.noResultsOptions !== "undefined" ?
				klevu_uc_userOptions.noResultsOptions : {};
		},

		/**
		 * Function to get the show search box on landing page attribute value
		 */
		getShowSearchOnLandingPageEnableValue: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.showSearchBoxOnLandingPage !== "undefined" ?
				klevu_uc_userOptions.showSearchBoxOnLandingPage :
				false;
		},

		/**
		 * Function to get the show sku on landing page product block
		 */
		getSkuOnPageEnableValue: function () {
			return typeof klevu_showProductCode !== "undefined" &&
				typeof klevu_showProductCode === "boolean" ?
				klevu_showProductCode :
				false;
		},

		/**
		 * Function to get noImageUrl value
		 */
		getKMCUserOptionsNoImageUrl: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.noImageUrl !== "undefined" ?
				klevu_uc_userOptions.noImageUrl :
				"https://js.klevu.com/klevu-js-v1/img-1-1/place-holder.jpg";
		},

		/**
		 * Funcion to get showRolloverImage value
		 */
		getShowRolloverImageValue: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.showRolloverImage !== "undefined" ?
				klevu_uc_userOptions.showRolloverImage :
				false;
		},

		/**
		 *  Function to get VAT Caption
		 */
		getVatCaption: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.vatCaption !== "undefined" ?
				klevu_uc_userOptions.vatCaption :
				false;
		},

		/**
		 * Function to get show Prices value
		 */
		getShowPrices: function () {
			return typeof klevu_showPrices !== "undefined" && typeof klevu_showPrices === "boolean" ?
				klevu_showPrices :
				false;
		},

		/**
		 * Function to get price slider value
		 * @returns
		 */
		getShowPriceSlider: function () {
			return typeof klevu_showPriceSlider !== "undefined" &&
				typeof klevu_showPriceSlider === "boolean" ?
				klevu_showPriceSlider :
				false;
		},

		/**
		 * Function to get price interval value
		 * @returns
		 */
		getPriceIntervalValue: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.priceInterval !== "undefined" ?
				klevu_uc_userOptions.priceInterval :
				500;
		},

		/**
		 * Function to get facet range filter settings
		 * @returns
		 */
		getFacetRangeFilterSettings: function () {
			var rangeFilterSettings = false;
			var isPriceEnable = klevu.search.modules.kmcInputs.base.getShowPrices();
			var isPriceSliderEnable = klevu.search.modules.kmcInputs.base.getShowPriceSlider();
			var priceFilterIntervalValue = klevu.search.modules.kmcInputs.base.getPriceIntervalValue();
			if (isPriceEnable) {
				rangeFilterSettings = {
					key: "klevu_price",
				};
				if (isPriceSliderEnable) {
					rangeFilterSettings.minMax = "true";
				} else {
					rangeFilterSettings.rangeInterval = priceFilterIntervalValue;
				}
			}
			return rangeFilterSettings;
		},

		/**
		 * Function to return priceFormatter Object
		 */
		getPriceFormatterObject: function (productCurrency) {
			var priceFormatterFinal = {};
			var priceFormatter =
				typeof klevu_uc_userOptions !== "undefined" && klevu_uc_userOptions.priceFormatter ?
				klevu_uc_userOptions.priceFormatter :
				undefined;

			if (typeof priceFormatter === "undefined" || typeof priceFormatter != "object") {
				if (
					typeof klevu_priceFormatters !== "undefined" &&
					klevu_priceFormatters[productCurrency]
				) {
					priceFormatter = klevu_priceFormatters[productCurrency];
				} else {
					priceFormatterFinal = {
						string: productCurrency,
						format: "%s %s",
					};
					return priceFormatterFinal;
				}
			} else {
				if (
					typeof klevu_priceFormatters !== "undefined" &&
					klevu_priceFormatters[productCurrency]
				) {
					var matchedGlobalPriceFormatter = klevu_priceFormatters[productCurrency];
					priceFormatter = klevu.extend(
						true,
						matchedGlobalPriceFormatter,
						priceFormatter
					);
				}
			}

			if (
				typeof priceFormatter.decimalPlaces !== "undefined" &&
				priceFormatter.decimalPlaces !== ""
			) {
				priceFormatterFinal.precision = priceFormatter.decimalPlaces;
			}
			if (
				typeof priceFormatter.thousandSeparator !== "undefined"
			) {
				priceFormatterFinal.thousand = priceFormatter.thousandSeparator;
			}
			if (
				typeof priceFormatter.decimalSeparator !== "undefined" &&
				priceFormatter.decimalSeparator !== ""
			) {
				priceFormatterFinal.decimal = priceFormatter.decimalSeparator;
			}
			if (
				typeof priceFormatter.currencySymbol !== "undefined" &&
				priceFormatter.currencySymbol !== ""
			) {
				priceFormatterFinal.string = priceFormatter.currencySymbol;
			}
			if (
				typeof priceFormatter.appendCurrencyAtLast !== "undefined" &&
				priceFormatter.appendCurrencyAtLast !== ""
			) {
				priceFormatterFinal.atEnd = priceFormatter.appendCurrencyAtLast;
			}
			if (typeof priceFormatter.format !== "undefined" &&
				priceFormatter.format !== ""
			) {
				priceFormatterFinal.format = priceFormatter.format;
			} else {
				priceFormatterFinal.format = "%s %s";
			}

			return priceFormatterFinal;
		},

		/**
		 * Function to check whether enablePersonalizationInSearch is enabled
		 */
		getEnablePersonalisationInSearch: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.enablePersonalisationInSearch !== "undefined" ?
				klevu_uc_userOptions.enablePersonalisationInSearch :
				false;
		},

		/**
		 * Function to check whether enablePersonalizationInCatNav is enabled
		 */
		getEnablePersonalisationInCatNav: function () {
			return typeof klevu_uc_userOptions !== "undefined" &&
				typeof klevu_uc_userOptions.enablePersonalisationInCatNav !== "undefined" ?
				klevu_uc_userOptions.enablePersonalisationInCatNav :
				false;
		},

		/**
		 * Function to get recently viewed items details
		 */
		getShowRecentlyViewedItemsValue: function () {
			var recentlyViewedItemsObject = {
				showRecentlyViewedItems: false,
				showRecentlyViewedItemsLimit: 10,
				showRecentlyViewedItemsCaption: "",
			};
			if (typeof klevu_uc_userOptions !== "undefined") {
				if (typeof klevu_uc_userOptions.showRecentlyViewedItems !== "undefined") {
					recentlyViewedItemsObject.showRecentlyViewedItems =
						klevu_uc_userOptions.showRecentlyViewedItems;
				}
				if (typeof klevu_uc_userOptions.showRecentlyViewedItemsCaption !== "undefined") {
					recentlyViewedItemsObject.showRecentlyViewedItemsCaption =
						klevu_uc_userOptions.showRecentlyViewedItemsCaption;
				}
				if (typeof klevu_uc_userOptions.showRecentlyViewedItemsLimit !== "undefined") {
					recentlyViewedItemsObject.showRecentlyViewedItemsLimit =
						klevu_uc_userOptions.showRecentlyViewedItemsLimit;
				}
			}
			return recentlyViewedItemsObject;
		},

		/**
		 * Function to get trending products details
		 */
		getShowTrendingProductsValue: function () {
			var trendingProductsObject = {
				showTrendingProducts: false,
				showTrendingProductsLimit: 10,
				showTrendingProductsCaption: "",
			};
			if (typeof klevu_uc_userOptions !== "undefined") {
				if (typeof klevu_uc_userOptions.showTrendingProducts !== "undefined") {
					trendingProductsObject.showTrendingProducts =
						klevu_uc_userOptions.showTrendingProducts;
				}
				if (typeof klevu_uc_userOptions.showTrendingProductsCaption !== "undefined") {
					trendingProductsObject.showTrendingProductsCaption =
						klevu_uc_userOptions.showTrendingProductsCaption;
				}
				if (typeof klevu_uc_userOptions.showTrendingProductsLimit !== "undefined") {
					trendingProductsObject.showTrendingProductsLimit =
						klevu_uc_userOptions.showTrendingProductsLimit;
				}
			}
			return trendingProductsObject;
		},

		/**
		 * Function to get quick search layout type
		 * @returns 
		 */
		getQuickSearchLayoutType: function () {
			return (typeof klevu_layoutType !== "undefined" && klevu_layoutType !== "") ? klevu_layoutType : "slim";
		},

		/**
		 * Function to get quick search layout view
		 * @returns 
		 */
		getQuickSearchLayoutView: function () {
			return (typeof klevu_layoutView !== "undefined" && klevu_layoutView !== "") ? klevu_layoutView : "grid";
		},

		/**
		 * Function to get check whether the quick faceted layout filter set on left or not
		 * @returns 
		 */
		isQuickFacetedLayoutFilterOnLeft: function () {
			return (typeof klevu_filtersOnLeft !== "undefined") ? klevu_filtersOnLeft : true;
		},

		/**
		 * Function to check product rating enable/disbled in quick
		 */
		showProductRatingQuick: function () {
			return (typeof klevu_uc_userOptions.showRatingsOnQuickSearches !== "undefined" ? klevu_uc_userOptions.showRatingsOnQuickSearches : true)
		},

		/**
		 * Function to check product rating enable/disbled in quick
		 */
		showProductRatingLanding: function () {
			return (typeof klevu_uc_userOptions.showRatingsOnSearchResultsLandingPage !== "undefined" ? klevu_uc_userOptions.showRatingsOnQuickSearches : true)
		},

		/**
		 * Function to check product rating enable/disbled in quick
		 */
		showProductRatingCatnav: function () {
			return (typeof klevu_uc_userOptions.showRatingsOnCategoryPage !== "undefined" ? klevu_uc_userOptions.showRatingsOnQuickSearches : true)
		}

	};

	klevu.extend(true, klevu.search.modules, {
		kmcInputs: {
			base: kmcInputs,
			build: true,
			hasAllResourcesLoaded: false,
			resourceLoadInitiated: false
		}
	});
})(klevu);
if(klevu.isUndefined(klevu.support.kmc) && klevu.support.kmc !== true) {
	klevu.coreEvent.build({
		name: "setRemoteKMCInputs",
		fire: function () {
			if (
				!(klevu.getGlobalSetting("search.apiKey", klevu.getGlobalSetting("global.apiKey", false)))
			) {
				return false;
			}
			return true;
		},
		maxCount: 1000,
		delay: 30
	});



	klevu.coreEvent.attach("setRemoteKMCInputs", {
		name: "assignAPIKeyForCookie",
		fire: function () {
			var apiKeyForCookie = klevu.getGlobalSetting("search.apiKey", klevu.getGlobalSetting("global.apiKey")).replace(/-/g, "_");
			klevu.setObjectPath(
				klevu.settings,
				"constants.COOKIE_KLEVU_RCP",
				"klevu_rcp_" + apiKeyForCookie
			);
		}
	});

	klevu.coreEvent.attach("setRemoteKMCInputs", {
		name: "initKMCInputs",
		fire: function () {
			klevu_urlProtocol = klevu.settings.url.protocol;
			klevu.search.modules.kmcInputs.base.appendScriptsToHeader(klevu.getGlobalSetting("search.apiKey", klevu.getGlobalSetting("global.apiKey")));
		}
	});

}/**
 * Event to encode analytics request attribute value
 */

klevu.coreEvent.build({
    name: "encodeAnalyticsRequestAttributeValue",
    fire: function () {
        if (klevu.isUndefined(klevu.analytics) ||
            klevu.isUndefined(klevu.analytics.build)) {
            return false;
        }
        return true;
    }
});

klevu.coreEvent.attach("encodeAnalyticsRequestAttributeValue", function () {

    klevu.analytics.base.getScope().encodeExcludeAttrList = [
        "klevu_term",
        "klevu_keywords",
        "klevu_totalResults",
        "klevu_limit",
        "klevu_pageNumber",
        "klevu_apiKey"
    ];

    klevu.analytics.base.getScope().encodeListAttrs = function (data) {
        var analyticsAttrs = klevu.getObjectPath(data, "request.analytics");
        if (analyticsAttrs) {
            klevu.each(analyticsAttrs, function (key, value) {
                var hasExcluded = (klevu.analytics.base.getScope().encodeExcludeAttrList.indexOf(key) > -1) ? true : false;
                if (!hasExcluded) {
                    data.request.analytics[key] = encodeURIComponent(value);
                }
            });
        }
    };

    klevu.analytics.base.getScope().chains.events.term.addAfter("termRequestCheck", {
        name: "encodeAttributes",
        fire: function (data, scope) {
            klevu.analytics.base.getScope().encodeListAttrs(data);
        }
    });

    klevu.analytics.base.getScope().chains.events.click.addAfter("clickRequestCheck", {
        name: "encodeAttributes",
        fire: function (data, scope) {
            klevu.analytics.base.getScope().encodeListAttrs(data);
        }
    });

    klevu.analytics.base.getScope().chains.events.catview.addAfter("viewRequestCheck", {
        name: "encodeAttributes",
        fire: function (data, scope) {
            klevu.analytics.base.getScope().encodeListAttrs(data);
        }
    });

    klevu.analytics.base.getScope().chains.events.catclick.addAfter("clickRequestCheck", {
        name: "encodeAttributes",
        fire: function (data, scope) {
            klevu.analytics.base.getScope().encodeListAttrs(data);
        }
    });

    klevu.analytics.base.getScope().chains.events.buy.addAfter("buyRequestCheck", {
        name: "encodeAttributes",
        fire: function (data, scope) {
            klevu.analytics.base.getScope().encodeListAttrs(data);
        }
    });

});/**
 * Klevu Analytics Utility
 */

(function (klevu) {

    /**
     * Function to get term request option
     * @param {*} scope 
     * @param {*} isExtended 
     */
    function getTermOptions(scope, isExtended) {

        var analyticsTermOptions = {
            klevu_term: (scope.data.context.termOriginal) ? scope.data.context.termOriginal : "*",
            klevu_pageNumber: "",
            klevu_src: "",
            klevu_limit: "",
            klevu_sort: "",
            klevu_totalResults: "0",
            klevu_typeOfQuery: "WILDCARD_AND",
            filters: false
        };

        var currentSection = scope.data.context.section;
        if (!currentSection) {
            return analyticsTermOptions;
        }

        //TO-DO: Get cached data

        var reqQueries = klevu.getObjectPath(scope.data, "request.current.recordQueries");
        if (!reqQueries) {
            reqQueries = klevu.getObjectPath(scope.data, "request.original.recordQueries");
        }

        if (reqQueries) {
            var reqQueryObj = reqQueries.filter(function (obj) {
                return obj.id == currentSection;
            })[0];
            if (reqQueryObj) {
                analyticsTermOptions.klevu_limit = reqQueryObj.settings.limit;
                analyticsTermOptions.klevu_sort = reqQueryObj.settings.sort;
                analyticsTermOptions.klevu_src = "[[typeOfRecord:" + reqQueryObj.settings.typeOfRecords[0] + "]]";
            }
        }
        var resQueries = scope.data.response.current.queryResults;
        if (resQueries) {
            var resQueryObj = resQueries.filter(function (obj) {
                return obj.id == currentSection;
            })[0];
            if (resQueryObj) {

                analyticsTermOptions.klevu_totalResults = resQueryObj.meta.totalResultsFound;
                analyticsTermOptions.klevu_typeOfQuery = resQueryObj.meta.typeOfSearch;

                var productListLimit = resQueryObj.meta.noOfResults;
                analyticsTermOptions.klevu_pageNumber = Math.ceil(resQueryObj.meta.offset / productListLimit) + 1;

                if (isExtended) {
                    var selectedFiltersStr = " [[";
                    var isAnyFilterSelected = false;
                    klevu.each(resQueryObj.filters, function (key, filter) {
                        if (filter.type == "SLIDER") {
                            if (
                                filter.start !== null &&
                                typeof filter.start !== "undefined" &&
                                filter.end !== null &&
                                typeof filter.end !== "undefined"
                            ) {
                                if (filter.start != filter.min || filter.end != filter.max) {
                                    if (isAnyFilterSelected) {
                                        selectedFiltersStr += ";;";
                                    }
                                    isAnyFilterSelected = true;
                                    selectedFiltersStr += filter.key + ":" + filter.start + " - " + filter.end;
                                }
                            }
                        } else {
                            klevu.each(filter.options, function (key, option) {
                                if (option.selected) {
                                    if (isAnyFilterSelected) {
                                        selectedFiltersStr += ";;";
                                    }
                                    isAnyFilterSelected = true;
                                    selectedFiltersStr += filter.key + ":" + option.name;
                                }
                            });
                        }
                    });
                    selectedFiltersStr += "]]";
                    if (isAnyFilterSelected) {
                        analyticsTermOptions.filters = true;
                        analyticsTermOptions.klevu_term += selectedFiltersStr;
                    }
                }

            }
        }
        return analyticsTermOptions;
    }

    /**
     * Function to get product details  
     * @param {*} productId 
     * @param {*} scope 
     */
    function getProductDetailsFromId(productId, scope) {
        var dataListId = scope.data.context.section;
        var product;
        var results = scope.data.response.current.queryResults;
        if (results) {
            var dataList = results.filter(function (obj) {
                return obj.id == dataListId;
            })[0];
            if (dataList) {
                var records = dataList.records;
                var matchedProduct = records.filter(function (prod) {
                    return prod.id == productId;
                })[0];
                if (matchedProduct) {
                    product = matchedProduct;
                }
            }
        }
        return product;
    }

    /**
     * Function to get object details from URL and Name
     * @param {*} url 
     * @param {*} name 
     * @param {*} scope 
     * @param {*} dataListId 
     */
    function getDetailsFromURLAndName(url, name, scope, dataListId) {
        var category = {};
        var results = scope.data.response.current.queryResults;
        if (results) {
            var categoryList = results.filter(function (obj) {
                return obj.id == dataListId;
            })[0];
            if (categoryList) {
                var records = categoryList.records;
                var matchedCategory = records.filter(function (cat) {
                    return cat.name == name && cat.url == url;
                })[0];
                if (matchedCategory) {
                    category = matchedCategory;
                }
            }
        }
        return category;
    }

    /**
     * Function to store analytics event data
     * @param {*} eventOptions 
     */
    function storeAnalyticsEvent(dictionary, element, eventOptions) {
        var autoSug = klevu.dictionary(dictionary);
        if (autoSug && eventOptions) {
            autoSug.setStorage("local");
            autoSug.mergeFromGlobal();

            var dataList = [];
            var existingDataList = autoSug.getElement(element);
            if (existingDataList && existingDataList.length && existingDataList != element) {
                existingDataList = JSON.parse(existingDataList);
                if (existingDataList.length) {
                    existingDataList.push(eventOptions);
                    dataList = existingDataList;
                }
            } else {
                dataList.push(eventOptions);
            }

            autoSug.addElement(element, JSON.stringify(dataList));
            autoSug.mergeToGlobal();
        }
    }

    /**
     * Function to register auto suggestion product click event
     * @param {*} scope 
     * @param {*} className 
     * @param {*} dictionary 
     * @param {*} element 
     */
    function registerAutoSuggestProductClickEvent(scope, className, dictionary, element) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(".trackProductClick", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                var productId = value.dataset.id;
                var searchResultContainer = klevu.dom.find(className, target)[0];
                var dataSection;
                if (searchResultContainer) {
                    dataSection = searchResultContainer.dataset.section;
                }
                if (!dataSection) {
                    return;
                }
                scope.data.context.section = dataSection;
                if (productId) {
                    var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                    if (product) {
                        var termOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                        if (termOptions) {
                            termOptions.klevu_keywords = termOptions.klevu_term;
                            termOptions.klevu_productId = product.id;
                            if (typeof product.itemGroupId !== "undefined") {
                                termOptions.klevu_productGroupId = product.itemGroupId;
                            }
                            termOptions.klevu_productVariantId = product.id;
                            termOptions.klevu_productName = product.name;
                            termOptions.klevu_productUrl = product.url;
                            termOptions.klevu_src = "[[typeOfRecord:" + product.typeOfRecord + ";;template:quick-search]]";
                            delete termOptions.klevu_term;
                            klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                        }
                    }
                }
            }, true);
        });
    }

    /**
     * Function to register search auto suggestion click event
     * @param {*} scope 
     * @param {*} className 
     */
    function registerAutoSuggestTermEvent(scope, className, dictionary, element) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(className, target), function (key, value) {
            klevu.each(klevu.dom.find(".klevu-track-click", value), function (key, sugEle) {
                klevu.event.attach(sugEle, "click", function (event) {
                    var searchResultContainer = klevu.dom.find(".klevuQuickSearchResults", target)[0];
                    var dataSection;
                    if (searchResultContainer) {
                        dataSection = searchResultContainer.dataset.section;
                    }
                    if (!dataSection) {
                        return;
                    }
                    scope.data.context.section = dataSection;
                    var suggestionText = sugEle.dataset.content;
                    var termOptions = klevu.analyticsUtil.base.getTermOptions(scope, true);
                    if (termOptions) {
                        termOptions.klevu_originalTerm = termOptions.klevu_term;
                        termOptions.klevu_term = suggestionText;
                        termOptions.klevu_src = "[[template:ac-suggestions]]";
                        klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                    }
                });
            });
        });
    }

    /**
     * Function to register auto-suggestion page click event
     * @param {*} scope 
     * @param {*} className 
     * @param {*} dataListId 
     * @param {*} dictionary 
     * @param {*} element 
     */
    function registerAutoSuggestPageClickEvent(scope, className, dataListId, dictionary, element) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(className, target), function (key, value) {
            klevu.each(klevu.dom.find(".klevu-track-click", value), function (key, catEle) {
                klevu.event.attach(catEle, "click", function (event) {
                    var url = catEle.dataset.url;
                    var catName = catEle.dataset.name;
                    var category = klevu.analyticsUtil.base.getDetailsFromURLAndName(url, catName, scope, dataListId);
                    var termOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                    if (termOptions) {
                        termOptions.klevu_keywords = termOptions.klevu_term;
                        termOptions.klevu_productId = category.id;
                        if (typeof category.itemGroupId !== "undefined") {
                            termOptions.klevu_productGroupId = category.itemGroupId;
                        }
                        termOptions.klevu_productVariantId = category.id;
                        termOptions.klevu_productName = category.name;
                        termOptions.klevu_productUrl = category.url;
                        termOptions.klevu_src = "[[typeOfRecord:" + category.typeOfRecord + ";;template:quick-search]]";
                        delete termOptions.klevu_term;
                        klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                    }
                });
            });
        });
    }


    /**
     * Function to add product click event on landing page
     * @param {*} scope 
     * @param {*} dictionary 
     * @param {*} element 
     */
    function registerLandingProductClickEvent(scope, dictionary, element) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(".klevuProductClick", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                var parent = klevu.dom.helpers.getClosest(value, ".klevuProduct");
                if (parent && parent !== null) {
                    var productId = parent.dataset.id;
                    if (productId) {
                        var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                        if (product) {
                            var termOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                            if (termOptions) {
                                termOptions.klevu_keywords = termOptions.klevu_term;
                                termOptions.klevu_productId = product.id;
                                if (typeof product.itemGroupId !== "undefined") {
                                    termOptions.klevu_productGroupId = product.itemGroupId;
                                }
                                termOptions.klevu_productVariantId = product.id;
                                termOptions.klevu_productName = product.name;
                                termOptions.klevu_productUrl = product.url;
                                termOptions.klevu_src = "[[typeOfRecord:" + product.typeOfRecord + ";;template:landing]]";
                                delete termOptions.klevu_term;
                                klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                            }
                        }
                    }
                }
            });
        });
    }


    /**
     * Function to send term analytics request from local storage
     * @param {*} dictionary 
     * @param {*} element 
     */
    function sendAnalyticsEventsFromStorage(dictionary, element) {
        var autoSug = klevu.dictionary(dictionary);
        autoSug.setStorage("local");
        autoSug.mergeFromGlobal();
        var storedEvents = autoSug.getElement(element);
        if (storedEvents && storedEvents != element) {
            storedEvents = JSON.parse(storedEvents);
            klevu.each(storedEvents, function (index, value) {
                delete value.filters;
                if (element == klevu.analyticsUtil.base.storage.click) {
                    if (klevu.analyticsEvents.click) {
                        klevu.analyticsEvents.click(value);
                    }
                } else if (element == klevu.analyticsUtil.base.storage.buy) {
                    if (klevu.analyticsEvents.buy) {
                        klevu.analyticsEvents.buy(value);
                    }
                } else if (element == klevu.analyticsUtil.base.storage.categoryClick) {
                    if (klevu.analyticsEvents.catclick) {
                        klevu.analyticsEvents.catclick(value);
                    }
                } else if (element == klevu.analyticsUtil.base.storage.bannerClick) {
                    if (klevu.analyticsEvents.bannerClick) {
                        klevu.analyticsEvents.bannerClick(value);
                    }
                } else if (element == klevu.analyticsUtil.base.storage.personalizedSearchTracking) {
                    if (klevu.analyticsEvents.personalizedSearchTracking) {
                        klevu.analyticsEvents.personalizedSearchTracking(value);
                    }
                } else {
                    klevu.analyticsEvents.term(value);
                }
            });
            autoSug.addElement(element, "");
            autoSug.mergeToGlobal();
        }
    }

    /**
     * Function to get Category view options
     * @param {*} scope 
     */
    function getCategoryViewOptions(scope) {
        var analyticsCategoryOptions = {
            klevu_categoryName: "",
            klevu_src: "",
            klevu_categoryPath: "",
            klevu_productIds: "",
            klevu_pageStartsFrom: "",
            filters: false
        };

        var currentSection = scope.data.context.section;
        if (!currentSection) {
            return analyticsCategoryOptions;
        }

        var reqQueries = klevu.getObjectPath(scope.data, "request.current.recordQueries");
        if (!reqQueries) {
            reqQueries = klevu.getObjectPath(scope.data, "request.original.recordQueries");
        }

        if (reqQueries) {
            var reqQueryObj = reqQueries.filter(function (obj) {
                return obj.id == currentSection;
            })[0];
            if (reqQueryObj) {
                if (reqQueryObj.settings.query && reqQueryObj.settings.query.categoryPath) {
                    analyticsCategoryOptions.klevu_categoryName = reqQueryObj.settings.query.categoryPath;
                }
                analyticsCategoryOptions.klevu_limit = reqQueryObj.settings.limit;
                analyticsCategoryOptions.klevu_sort = reqQueryObj.settings.sort;
                analyticsCategoryOptions.klevu_src = "[[typeOfRecord:" + reqQueryObj.settings.typeOfRecords[0] + "]]";
            }
        }
        //ab test
        var abTestData = klevu.getObjectPath(klevu.extensions,"abTest.catnav."+analyticsCategoryOptions.klevu_categoryName.toLowerCase(), false);
        if(abTestData){
            analyticsCategoryOptions.klevu_abTestId = abTestData.abTestId;
            analyticsCategoryOptions.klevu_abTestVariantId = abTestData.abTestVariantId;
            analyticsCategoryOptions.klevu_abTestSource = abTestData.sourceId.toLowerCase();
        }
        //set category name and path as needed to the analytics request
        analyticsCategoryOptions.klevu_categoryPath = analyticsCategoryOptions.klevu_categoryName;
        analyticsCategoryOptions.klevu_categoryName = analyticsCategoryOptions.klevu_categoryName ? analyticsCategoryOptions.klevu_categoryName.split(";").pop() : "";

        var resQueries = scope.data.response.current.queryResults;
        if (resQueries) {
            var resQueryObj = resQueries.filter(function (obj) {
                return obj.id == currentSection;
            })[0];
            if (resQueryObj) {
                analyticsCategoryOptions.klevu_pageStartsFrom = resQueryObj.meta.offset;
                if (resQueryObj.records && resQueryObj.records.length) {
                    analyticsCategoryOptions.klevu_productIds = "";
                    klevu.each(resQueryObj.records, function (key, value) {
                        if (analyticsCategoryOptions.klevu_productIds &&
                            analyticsCategoryOptions.klevu_productIds !== "") {
                            if (value.id) {
                                analyticsCategoryOptions.klevu_productIds += ",";
                            }
                        }
                        if (value.id) {
                            analyticsCategoryOptions.klevu_productIds += value.id;
                        }
                    });
                }

            }
        }



        return analyticsCategoryOptions;
    }

    /**
     * Function to register category product click event analytics
     * @param {*} scope 
     * @param {*} dictionary 
     * @param {*} element 
     */
    function registerCategoryProductClickEvent(scope, dictionary, element) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(".klevuProductClick", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                var parent = klevu.dom.helpers.getClosest(value, ".klevuProduct");
                if (parent && parent !== null) {
                    var productId = parent.dataset.id;
                    if (productId) {
                        var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                        if (product) {
                            var categoryOptions = klevu.analyticsUtil.base.getCategoryViewOptions(scope);
                            categoryOptions.klevu_productId = product.id;
                            if (typeof product.itemGroupId !== "undefined") {
                                categoryOptions.klevu_productGroupId = product.itemGroupId;
                            }
                            categoryOptions.klevu_productVariantId = product.id;
                            categoryOptions.klevu_productName = product.name;
                            categoryOptions.klevu_productUrl = product.url;
                            categoryOptions.klevu_src = "[[typeOfRecord:" + product.typeOfRecord + ";;template:category]]";
                            categoryOptions.klevu_productSku = product.sku;
                            categoryOptions.klevu_salePrice = product.salePrice;
                            categoryOptions.klevu_productRatings = product.rating;
                            categoryOptions.klevu_productPosition = categoryOptions.klevu_pageStartsFrom;

                            delete categoryOptions.klevu_term;
                            delete categoryOptions.klevu_pageStartsFrom;

                            klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, categoryOptions);
                        }
                    }
                }
            });
        });
    }

    /**
     * Function store custom analytics click event
     * @param {*} scope 
     * @param {*} dictionary 
     * @param {*} element 
     * @param {*} targetContainerClass 
     * @param {*} parentProductClass 
     * @param {*} termName 
     * @param {*} srcTemplateName 
     */
    function registerAnalyticsClickEvent(scope, dictionary, element, targetContainerClass, parentProductClass, termName, srcTemplateName) {
        var target = klevu.dom.find(targetContainerClass);
        target = (target && target.length) ? target[0] : undefined;
        if (!target) {
            return;
        }
        klevu.each(klevu.dom.find(".klevuProductClick", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                var parent = klevu.dom.helpers.getClosest(value, parentProductClass);
                if (parent && parent !== null) {
                    var productId = parent.dataset.id;
                    if (productId) {
                        var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                        if (product) {
                            var termOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                            if (termOptions) {
                                termOptions.klevu_keywords = termName;
                                termOptions.klevu_productId = product.id;
                                if (typeof product.itemGroupId !== "undefined") {
                                    termOptions.klevu_productGroupId = product.itemGroupId;
                                }
                                termOptions.klevu_productVariantId = product.id;
                                termOptions.klevu_productName = product.name;
                                termOptions.klevu_productUrl = product.url;
                                termOptions.klevu_src = "[[typeOfRecord:" + product.typeOfRecord + ";;template:" + srcTemplateName + "]]";
                                delete termOptions.klevu_term;
                                klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                            }
                        }
                    }
                }
            });
        });
    }

    /**
     * Function to get data tracking request payload options
     * @param {*} scope 
     */
    function getDataTrackingOptions(scope) {
        var analyticsDataTrackingOptions = {
            klevu_term: (scope.data.context.termOriginal) ? scope.data.context.termOriginal : "*",
            klevu_bannerId: "",
            klevu_bannerName: "",
            klevu_image: "",
            klevu_target: "",
            klevu_userID: "",
            klevu_loginCustomerEmail: "",
            klevu_request: "click",
            type: "banner"
        };
        return analyticsDataTrackingOptions;
    }

    var storageOptions = {
        dictionary: "analytics-util",
        term: "termList",
        click: "clickList",
        categoryClick: "categoryClickList",
        buy: "buyList"
    };

    var analyticsUtilBase = {
        storage: storageOptions,
        getTermOptions: getTermOptions,
        getProductDetailsFromId: getProductDetailsFromId,
        getDetailsFromURLAndName: getDetailsFromURLAndName,
        getCategoryViewOptions: getCategoryViewOptions,
        registerAutoSuggestProductClickEvent: registerAutoSuggestProductClickEvent,
        registerAutoSuggestTermEvent: registerAutoSuggestTermEvent,
        registerAutoSuggestPageClickEvent: registerAutoSuggestPageClickEvent,
        registerLandingProductClickEvent: registerLandingProductClickEvent,
        registerCategoryProductClickEvent: registerCategoryProductClickEvent,
        registerAnalyticsClickEvent: registerAnalyticsClickEvent,
        sendAnalyticsEventsFromStorage: sendAnalyticsEventsFromStorage,
        storeAnalyticsEvent: storeAnalyticsEvent,
        getDataTrackingOptions: getDataTrackingOptions
    };

    if (klevu.analyticsUtil && klevu.analyticsUtil.base) {
        klevu.extend(true, klevu.analyticsUtil.base, analyticsUtilBase);
    } else {
        klevu.extend({
            analyticsUtil: {
                base: analyticsUtilBase
            }
        });
    }

    klevu.analyticsUtil.build = true;

})(klevu);

/**
 * Analytics Event build
 */
klevu.coreEvent.build({
    name: "analyticsPowerUp",
    fire: function () {
        if (
            !klevu.getSetting(klevu.settings, "settings.powerUp.analyticsUtil", false) ||
            !klevu.analytics.build ||
            !klevu.analyticsUtil.build
        ) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});

klevu.interactive(function () {
    var analyticsUtilPowerUp = klevu.getSetting(klevu, "settings.powerUp.analyticsUtil");
    if (typeof analyticsUtilPowerUp === "undefined") {
        klevu.setSetting(klevu, "settings.powerUp.analyticsUtil", true);
    }
});

/**
 * Analytics Event build
 */
klevu.coreEvent.build({
    name: "analyticsSendStoredData",
    fire: function () {
        if (
            !klevu.getSetting(klevu.settings, "settings.powerUp.analyticsUtil", false) ||
            !klevu.analytics.build ||
            !klevu.analyticsUtil.build ||
            !klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage
        ) {
            return false;
        }
        return true;
    },
    maxCount: 50,
    delay: 300
});

/**
 * Event to send request from queue
 */
klevu.coreEvent.attach("analyticsSendStoredData", {
    name: "attachSendRequestEvent",
    fire: function () {
        klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
            klevu.analyticsUtil.base.storage.dictionary,
            klevu.analyticsUtil.base.storage.term
        );

        klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
            klevu.analyticsUtil.base.storage.dictionary,
            klevu.analyticsUtil.base.storage.click
        );

        klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
            klevu.analyticsUtil.base.storage.dictionary,
            klevu.analyticsUtil.base.storage.categoryClick
        );

        klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
            klevu.analyticsUtil.base.storage.dictionary,
            klevu.analyticsUtil.base.storage.buy
        );
    }
});/**
 * Module to update product information from search results
 */

(function (klevu) {

    /**
     * Function to update image path in products
     * @param {*} scope 
     */
    function updateImagePath(scope) {
        var data = scope.data;
        var queryResults = klevu.getObjectPath(data, "response.current.queryResults");
        if (queryResults) {
            klevu.each(queryResults, function (key, queryResult) {
                if (queryResult && queryResult.records) {
                    klevu.each(queryResult.records, function (rKey, record) {
                        if (typeof (klevu_pubIsInUse) == "undefined" || klevu_pubIsInUse) {
                            record.image = (record.image) ? record.image.replace('needtochange/', '') : "";
                        } else {
                            record.image = (record.image) ? record.image.replace('needtochange/', 'pub/') : "";
                        }
                    });
                }
            });
        }
    }

    var productDataModification = {
        updateImagePath: updateImagePath
    };

    klevu.extend(true, klevu.search.modules, {
        productDataModification: {
            base: productDataModification,
            build: true
        }
    });

})(klevu);

/**
 * productDataModification module build event
 */
klevu.coreEvent.build({
    name: "productDataModificationModuleBuild",
    fire: function () {
        if (!klevu.search.modules ||
            !klevu.search.modules.productDataModification ||
            !klevu.search.modules.productDataModification.build) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});/**
 * Klevu request loader component
 */

(function (klevu) {

    /**
     * Function to manage the status of a request UI
     * @param {*} scope 
     * @param {*} status 
     */
    function requestLoaderState(scope, status) {
        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
        if (status == "start") {
            target.classList.add("searchRequestLoading");
        } else {
            target.classList.remove("searchRequestLoading");
        }
    };

    klevu.extend(true, klevu.search.modules, {
        requestLoader: {
            base: {
                /**
                 * Function to init request loader
                 * @param {*} scope 
                 */
                initSearchRequestLoader: function (scope) {

                    scope.chains.request.send.add({
                        name: "startLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "start");
                        }
                    });

                    scope.chains.response.success.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });
                    scope.chains.response.fail.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });
                    scope.chains.response.done.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });

                    scope.chains.response.ajax.success.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });
                    scope.chains.response.ajax.fail.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });
                    scope.chains.response.ajax.done.add({
                        name: "stopLoader",
                        fire: function (data, scope) {
                            requestLoaderState(scope, "stop");
                        }
                    });

                }
            },
            build: true
        }
    });
})(klevu);(function (klevu) {

    var options = {
        analytics: {
            url: {
                bannerClick: "dataTracking"
            }
        }
    };
    klevu(options);

    klevu.coreEvent.build({
        name: "analyticsBannerPowerUp",
        fire: function () {
            if (
                !klevu.analytics ||
                !klevu.analytics.build
            ) {
                return false;
            }
            return true;
        },
        maxCount: 500,
        delay: 30
    });

    klevu.coreEvent.attach("analyticsBannerPowerUp", {
        name: "registerChain",
        fire: function () {
            // build the chain
            klevu.setObjectPath(klevu.analytics.base.getScope().element.kScope, "chains.events.bannerClick", klevu.chain({
                stopOnFalse: true
            }));
        }
    });

    klevu.coreEvent.attach("analyticsBannerPowerUp", {
        name: "populateChain",
        fire: function () {
            //add the banner click analitics checks
            klevu.analytics.base.getScope().chains.events.bannerClick.add({
                name: "bannerClickRequestCheck",
                fire: function (data, scope) {
                    klevu.clean(data.request.analytics);
                    var analytics = data.request.analytics;
                    try {
                        var hasError = false;
                        var errorPrefix = "";
                        if (klevu.isUndefined(analytics.klevu_bannerId)) {
                            hasError = true;
                            errorPrefix = "klevu_bannerId";
                        } else if (klevu.isUndefined(analytics.klevu_target)) {
                            hasError = true;
                            errorPrefix = "klevu_target";
                        } else if (klevu.isUndefined(analytics.type)) {
                            hasError = true;
                            errorPrefix = "type";
                        }
                        if (hasError) {
                            throw new Error(errorPrefix + " parameter is missing from the banner click analytics request!");
                        }
                    } catch (error) {
                        /* DEBUG CODE START */
                        if (klevu.settings.console.type.event) {
                            klevu.logError("chains.events.bannerClick - bannerClickRequestCheck - check paramaters.");
                            klevu.logError("chains.events.bannerClick - bannerClickRequestCheck - error:");
                            klevu.logError(error);
                        }
                        /* DEBUG CODE END */
                        return false;
                    }
                }
            });

            /**
             * Event to encode the request attribute values
             */
            klevu.analytics.base.getScope().chains.events.bannerClick.add({
                name: "encodeAttributes",
                fire: function (data, scope) {
                    var encodeExcludeAttrList = ["klevu_term", "klevu_keywords", "klevu_request", "type"];
                    var analyticsAttrs = klevu.getObjectPath(data, "request.analytics");
                    if (analyticsAttrs) {
                        klevu.each(analyticsAttrs, function (key, value) {
                            var hasExcluded = (encodeExcludeAttrList.indexOf(key) > -1) ? true : false;
                            if (!hasExcluded) {
                                data.request.analytics[key] = encodeURIComponent(value);
                            }
                        });
                    }
                }
            });

            //add the banner click analitics url generation
            klevu.analytics.base.getScope().chains.events.bannerClick.add({
                name: "generateURL",
                fire: function (data, scope) {
                    var analyticsUrl = klevu.getSetting(scope.kScope.settings, "settings.url.analyticsCat", false);
                    if (analyticsUrl) {
                        data.context.url = analyticsUrl + klevu.getSetting(scope.kScope.settings, "settings.analytics.url.bannerClick", false);
                    } else {
                        return false;
                    }
                }
            });
            //add the banner click analitics request
            klevu.analytics.base.getScope().chains.events.bannerClick.add({
                name: "doAnalytics",
                fire: function (data, scope) {
                    var chain = klevu.getObjectPath(scope.kScope, "chains.actions.doAnalytics");
                    if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                        chain.setScope(scope.kElem);
                        chain.setData(data);
                        chain.fire();
                    }
                    scope.kScope.data = data;
                    if (data.context.preventDefault === true) return false;
                }
            });
            //add to supported ajax types
            klevu.analytics.base.getScope().chains.request.send.addBefore("requestTypeAjaxV1", {
                name: "requestTypeAjaxBanner",
                fire: function (data, scope) {
                    if (data.context.eventAction === "bannerClick") {
                        data.context.eventAction = "analyticsAjaxV1";
                    }
                }
            });
        }
    });

    klevu.coreEvent.attach("analyticsBannerPowerUp", {
        name: "buildEvent",
        fire: function () {
            // build the event
            klevu.extend(true, klevu.analyticsEvents, {
                bannerClick: function (data, kObject) {
                    if (klevu.isEmptyObject(kObject)) kObject = klevu.analytics.base;
                    var kScope = kObject.getScope();
                    kScope.data = kObject.resetData();
                    kScope.data.context.eventAction = "bannerClick";
                    //set up data for request
                    kScope.data.request.analytics = data;
                    kScope.data.context.preventDefault = false;

                    klevu.event.fireChain(kScope, "chains.events.bannerClick", kScope.element, kScope.data, null);
                    return kObject;
                }

            });

        }
    });

    klevu.coreEvent.attach("analyticsBannerPowerUp", {
        name: "buildEvent",
        fire: function () {
            klevu.extend(true, klevu.support, {
                analytics: {
                    bannerClick: true
                }
            });
        }
    });

})(klevu);

klevu.coreEvent.build({
    name: "promotionBannerModule",
    fire: function () {
        if (
            !klevu.search.modules ||
            !klevu.search.modules.promotionBanner ||
            !klevu.search.modules.promotionBanner.build ||
            !klevu.support.analytics ||
            !klevu.support.analytics.bannerClick ||
            !klevu.analyticsUtil ||
            !klevu.analyticsUtil.build
        ) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});


/**
 * Addon for the analytics util component for the banner
 */
klevu.coreEvent.attach("promotionBannerModule", {
    name: "attachPromotionalBannerModuleEvents",
    fire: function () {

        klevu.extend(true, klevu.analyticsUtil.base, {
            storage: {
                bannerClick: "bannerClickList"
            },

            /**
             * Function to register banner click event and store the relevant information
             * @param {*} scope 
             * @param {*} dictionary 
             * @param {*} element 
             */
            registerBannerClickEvent: function (scope, dictionary, element) {
                var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
                klevu.each(klevu.dom.find(".kuTrackBannerClick", target), function (key, value) {
                    klevu.event.attach(value, "click", function (event) {
                        var dataTrackingOptions = klevu.analyticsUtil.base.getDataTrackingOptions(scope);
                        if (value.dataset) {
                            if (value.dataset.id) {
                                dataTrackingOptions.klevu_bannerId = value.dataset.id;
                            }
                            if (value.dataset.name) {
                                dataTrackingOptions.klevu_bannerName = value.dataset.name;
                            }
                            if (value.dataset.image) {
                                dataTrackingOptions.klevu_image = value.dataset.image;
                            }
                            if (value.dataset.redirect) {
                                dataTrackingOptions.klevu_target = value.dataset.redirect;
                            }
                        }
                        klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, dataTrackingOptions);
                    });
                });
            }

        });
    }
});

/**
 * Event to send the stored analytics event
 */
klevu.coreEvent.attach("analyticsSendStoredData", {
    name: "sendStoredBannerClickEvent",
    fire: function () {
        klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
            klevu.analyticsUtil.base.storage.dictionary,
            klevu.analyticsUtil.base.storage.bannerClick
        );
    }
});/**
 * Base component for Promotion Module
 */
(function (klevu) {
    var bannerDataObject = {
        banners: []
    };
    /**
     * Function to get the product ids
     * @param {*} landingOrQuick
     * @param {*} activeOnPage
     */
    function getBanners(bannerList, activeOnPage) {
        var bannerListSanitized = [];
        if (bannerList.length) {
            klevu.each(bannerList, function (index, value) {
                if (activeOnPage === "all" ||
                    (value.hasOwnProperty('showOnLandingPage') && value.showOnLandingPage === true && activeOnPage === "landing") ||
                    (value.hasOwnProperty('showOnQuickSearch') && value.showOnQuickSearch === true && activeOnPage === "quick") ||
                    (value.hasOwnProperty('showOnCategoryPage') && value.showOnCategoryPage === true && activeOnPage === "category")) {
                    bannerListSanitized.push(value);
                }
            });
        }
        return bannerListSanitized;
    }

    /**
     * Function to Merge banners
     */
    function mergeData() {
        var bannerList = [];
        var self = this;
        var staticBannerListClone = klevu.extend(true, [], self.bannerDataObject.banners);
        var klevuBanner = klevu.search.modules.kmcInputs.base.getBannerList();
        bannerList = arrayUnique(staticBannerListClone.concat(klevuBanner));
        return bannerList;
    }

    /**
     * Function to get all the banners
     */
    function getAllBanners() {
        var self = this;
        var bannerList = self.mergeData();
        return getBanners(bannerList, "all");
    }

    /**
     * Function to get banners for Quck Search
     */
    function getQuickSearchBanners() {
        var self = this;
        var bannerList = self.mergeData();
        return getBanners(bannerList, "quick");
    }

    /**
     * Function to get banners for Landing Page
     */
    function getLandingPageBanners() {
        var self = this;
        var bannerList = self.mergeData();
        return getBanners(bannerList, "landing");
    }

    /**
     * Function to get banners for Category Page
     */
    function getCategoryPageBanners() {
        var self = this;
        var bannerList = self.mergeData();
        return getBanners(bannerList, "category");
    }

    /**
     * Function to get the product ids
     * @param {*} klevu_banner: Array of banner objects
     */
    function validateBanners(klevu_banner) {
        var klevu_banner_validated = [];
        if (klevu_banner.length > 0) {
            var today = new Date(),
                startDate, endDate, removeCurrent = false;
            today.setHours(0, 0, 0, 0);
            for (var i = 0; i < klevu_banner.length; i++) {
                startDate = new Date(klevu_banner[i].startDate);
                removeCurrent = false;
                if ('undefined' !== typeof klevu_banner[i].endDate && klevu_banner[i].endDate) {
                    endDate = new Date(klevu_banner[i].endDate);
                    removeCurrent = (startDate > today || endDate < today);
                } else {
                    removeCurrent = (startDate > today);
                }
                if (removeCurrent) {
                    klevu_banner.splice(i, 1);
                    i--;
                }
            }
            klevu_banner_validated = klevu_banner;
        }
        return klevu_banner_validated;
    }

    /**
     * Function to remove duplicate elements from array
     */
    function arrayUnique(array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (klevu.isEqualObj(a[i], a[j]))
                    a.splice(j--, 1);
            }
        }
        return a;
    }

    var promotionBanner = {
        bannerDataObject: bannerDataObject,
        init: function (staticBannerList) {
            var self = this;
            if (!klevu.isEmptyObject(staticBannerList)) {
                this.bannerDataObject.banners = arrayUnique(this.bannerDataObject.banners.concat(staticBannerList));
                var validatedBannerList = validateBanners(staticBannerList);
                this.bannerDataObject.banners = arrayUnique(this.bannerDataObject.banners.concat(validatedBannerList));
            }
        },
        mergeData: mergeData,
        getAllBanners: getAllBanners,
        getQuickSearchBanners: getQuickSearchBanners,
        getLandingPageBanners: getLandingPageBanners,
        getCategoryPageBanners: getCategoryPageBanners
    };

    klevu.extend(true, klevu.search.modules, {
        promotionBanner: {
            base: promotionBanner,
            build: true
        }
    });

})(klevu);/**
 * Product carousel slider 
 */
(function (klevu) {
    klevu.extend({
        productCarousel: {
            base: {
                initProductsSlider: function (kuCarousel) {
                    if (!kuCarousel) {
                        return;
                    }
                    var kuCarouselContent = kuCarousel.querySelector('.kuCarousel-content');
                    if (!kuCarouselContent) {
                        return;
                    }
                    var slides = kuCarousel.querySelectorAll('.kuSlide');
                    if (!slides) {
                        return;
                    }

                    var arrayOfSlides = Array.prototype.slice.call(slides);
                    var kuCarouselDisplaying;
                    var screenSize;
                    var lengthOfSlide;

                    function addClone() {
                        var lastSlide = kuCarouselContent.lastElementChild.cloneNode(true);
                        lastSlide.style.left = (-lengthOfSlide) + "px";
                        kuCarouselContent.insertBefore(lastSlide, kuCarouselContent.firstChild);
                    }

                    function removeClone() {
                        var firstSlide = kuCarouselContent.firstElementChild;
                        firstSlide.parentNode.removeChild(firstSlide);
                    }

                    function moveSlidesRight() {
                        var slides = kuCarousel.querySelectorAll('.kuSlide');
                        var slidesArray = Array.prototype.slice.call(slides);
                        var width = 0;

                        slidesArray.forEach(function (el, i) {
                            el.style.left = width + "px";
                            width += lengthOfSlide;
                        });
                        addClone();
                    }

                    moveSlidesRight();

                    function moveSlidesLeft() {
                        var slides = kuCarousel.querySelectorAll('.kuSlide');
                        var slidesArray = Array.prototype.slice.call(slides);
                        slidesArray = slidesArray.reverse();
                        var maxWidth = (slidesArray.length - 1) * lengthOfSlide;
                        slidesArray.forEach(function (el, i) {
                            maxWidth -= lengthOfSlide;
                            el.style.left = maxWidth + "px";
                        });
                    }

                    window.addEventListener('resize', setScreenSize);

                    function setScreenSize() {
                        if (kuCarousel.offsetWidth >= 500) {
                            kuCarouselDisplaying = 3;
                        } else if (kuCarousel.offsetWidth >= 300) {
                            kuCarouselDisplaying = 2;
                        } else {
                            kuCarouselDisplaying = 1;
                        }
                        getScreenSize();
                    }

                    function getScreenSize() {
                        var slides = kuCarousel.querySelectorAll('.kuSlide');
                        var slidesArray = Array.prototype.slice.call(slides);
                        lengthOfSlide = (kuCarousel.offsetWidth / kuCarouselDisplaying);
                        var initialWidth = -lengthOfSlide;
                        slidesArray.forEach(function (el) {
                            el.style.width = lengthOfSlide + "px";
                            el.style.left = initialWidth + "px";
                            initialWidth += lengthOfSlide;
                        });
                    }

                    var rightNav = kuCarousel.querySelector('.nav-right');
                    rightNav.addEventListener('click', moveLeft);

                    var moving = true;

                    function moveRight() {
                        if (moving) {
                            var slides = kuCarousel.querySelectorAll('.kuSlide');
                            var totalSlidesLength = slides.length - 1;
                            if (parseInt(slides[0].id) >= totalSlidesLength) {
                                return;
                            }
                            moving = false;
                            var lastSlide = kuCarouselContent.lastElementChild;
                            lastSlide.parentNode.removeChild(lastSlide);
                            kuCarouselContent.insertBefore(lastSlide, kuCarouselContent.firstChild);
                            removeClone();
                            var firstSlide = kuCarouselContent.firstElementChild;
                            firstSlide.addEventListener('transitionend', activateAgain);
                            moveSlidesRight();
                        }
                    }

                    function activateAgain() {
                        var firstSlide = kuCarouselContent.firstElementChild;
                        moving = true;
                        firstSlide.removeEventListener('transitionend', activateAgain);
                    }

                    var leftNav = kuCarousel.querySelector('.nav-left');
                    leftNav.addEventListener('click', moveRight);

                    function moveLeft() {
                        if (moving) {
                            var slides = kuCarousel.querySelectorAll('.kuSlide');
                            var totalSlidesLength = slides.length - 1;
                            if (parseInt(slides[1].id) + kuCarouselDisplaying > totalSlidesLength) {
                                return;
                            }
                            moving = false;
                            removeClone();
                            var firstSlide = kuCarouselContent.firstElementChild;
                            firstSlide.addEventListener('transitionend', replaceToEnd);
                            moveSlidesLeft();
                        }
                    }

                    function replaceToEnd() {
                        var firstSlide = kuCarouselContent.firstElementChild;
                        firstSlide.parentNode.removeChild(firstSlide);
                        kuCarouselContent.appendChild(firstSlide);
                        firstSlide.style.left = ((arrayOfSlides.length - 1) * lengthOfSlide) + "px";
                        addClone();
                        moving = true;
                        firstSlide.removeEventListener('transitionend', replaceToEnd);
                    }

                    kuCarouselContent.addEventListener('mousedown', seeMovement);

                    var initialX;
                    var initialPos;

                    function seeMovement(e) {
                        initialX = e.clientX;
                        getInitialPos();
                        kuCarouselContent.addEventListener('mousemove', slightMove);
                        kuCarousel.addEventListener('mouseup', moveBasedOnMouse);
                    }

                    function slightMove(e) {
                        if (moving) {
                            var movingX = e.clientX;
                            var difference = initialX - movingX;
                            if (Math.abs(difference) < (lengthOfSlide / 4)) {
                                slightMoveSlides(difference);
                            }
                        }
                    }

                    function getInitialPos() {
                        var slides = kuCarousel.querySelectorAll('.kuSlide');
                        var slidesArray = Array.prototype.slice.call(slides);
                        initialPos = [];
                        slidesArray.forEach(function (el) {
                            var left = Math.floor(parseInt(el.style.left.slice(0, -2)));
                            initialPos.push(left);
                        });
                    }

                    function slightMoveSlides(newX) {
                        var slides = kuCarousel.querySelectorAll('.kuSlide');
                        var slidesArray = Array.prototype.slice.call(slides);
                        slidesArray.forEach(function (el, i) {
                            var oldLeft = initialPos[i];
                            el.style.left = (oldLeft + newX) + "px";
                        });
                    }

                    function moveBasedOnMouse(e) {
                        var finalX = e.clientX;
                        if (initialX - finalX > 0) {
                            moveRight();
                        } else if (initialX - finalX < 0) {
                            moveLeft();
                        }
                        kuCarousel.removeEventListener('mouseup', moveBasedOnMouse);
                        kuCarouselContent.removeEventListener('mousemove', slightMove);
                    }

                    setScreenSize();
                }
            }
        }
    });
})(klevu);/**
 * Analytics Event for personalizedSearchTracking
 */
(function (klevu) {
    var options = {
        analytics: {
            url: {
                personalizedSearchTracking: "personalizedSearchTracking"
            }
        }
    };
    klevu(options);

    klevu.coreEvent.build({
        name: "analyticsPersonalizedSearchTrackingPowerUp",
        fire: function () {
            if (
                !klevu.analytics ||
                !klevu.analytics.build
            ) {
                return false;
            }
            return true;
        },
        maxCount: 500,
        delay: 30
    });

    klevu.coreEvent.attach("analyticsPersonalizedSearchTrackingPowerUp", {
        name: "registerChain",
        fire: function () {
            // build the chain
            klevu.setObjectPath(klevu.analytics.base.getScope().element.kScope, "chains.events.personalizedSearchTracking", klevu.chain({
                stopOnFalse: true
            }));
        }
    });

    klevu.coreEvent.attach("analyticsPersonalizedSearchTrackingPowerUp", {
        name: "populateChain",
        fire: function () {
            //add the personalizedSearchTracking analytics checks
            klevu.analytics.base.getScope().chains.events.personalizedSearchTracking.add({
                name: "personalizedSearchTrackingRequestCheck",
                fire: function (data, scope) {
                    klevu.clean(data.request.analytics);
                    var analytics = data.request.analytics;
                    try {
                        var hasError = false;
                        var errorPrefix = "";
                        if (klevu.isUndefined(analytics.klevu_productId)) {
                            hasError = true;
                            errorPrefix = "klevu_productId";
                        }
                        if (hasError) {
                            throw new Error(errorPrefix + " parameter is missing from the banner click analytics request!");
                        }
                    } catch (error) {
                        /* DEBUG CODE START */
                        if (klevu.settings.console.type.event) {
                            klevu.logError("chains.events.personalizedSearchTracking - personalizedSearchTrackingRequestCheck - check parameters.");
                            klevu.logError("chains.events.personalizedSearchTracking - personalizedSearchTrackingRequestCheck - error:");
                            klevu.logError(error);
                        }
                        /* DEBUG CODE END */
                        return false;
                    }
                }
            });

            /**
             * Event to encode the request attribute values
             */
            klevu.analytics.base.getScope().chains.events.personalizedSearchTracking.add({
                name: "encodeAttributes",
                fire: function (data, scope) {
                    var encodeExcludeAttrList = ["klevu_term", "klevu_keywords", "klevu_request", "type"];
                    var analyticsAttrs = klevu.getObjectPath(data, "request.analytics");
                    if (analyticsAttrs) {
                        klevu.each(analyticsAttrs, function (key, value) {
                            var hasExcluded = (encodeExcludeAttrList.indexOf(key) > -1) ? true : false;
                            if (!hasExcluded) {
                                data.request.analytics[key] = encodeURIComponent(value);
                            }
                        });
                    }
                }
            });

            //add the personalizedSearchTracking analytics url generation
            klevu.analytics.base.getScope().chains.events.personalizedSearchTracking.add({
                name: "generateURL",
                fire: function (data, scope) {
                    var analyticsUrl = klevu.getSetting(scope.kScope.settings, "settings.url.analyticsCat", false);
                    if (analyticsUrl) {
                        data.context.url = analyticsUrl + klevu.getSetting(scope.kScope.settings, "settings.analytics.url.personalizedSearchTracking", false);
                    } else {
                        return false;
                    }
                }
            });
            //add the personalizedSearchTracking analytics request
            klevu.analytics.base.getScope().chains.events.personalizedSearchTracking.add({
                name: "doAnalytics",
                fire: function (data, scope) {
                    var chain = klevu.getObjectPath(scope.kScope, "chains.actions.doAnalytics");
                    if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                        chain.setScope(scope.kElem);
                        chain.setData(data);
                        chain.fire();
                    }
                    scope.kScope.data = data;
                    if (data.context.preventDefault === true) return false;
                }
            });
            //add to supported ajax types
            klevu.analytics.base.getScope().chains.request.send.addBefore("requestTypeAjaxV1", {
                name: "requestTypeAjaxPersonalizedSearchTracking",
                fire: function (data, scope) {
                    if (data.context.eventAction === "personalizedSearchTracking") {
                        data.context.eventAction = "analyticsAjaxV1";
                    }
                }
            });
        }
    });

    klevu.coreEvent.attach("analyticsPersonalizedSearchTrackingPowerUp", {
        name: "buildEvent",
        fire: function () {
            // build the event
            klevu.extend(true, klevu.analyticsEvents, {
                personalizedSearchTracking: function (data, kObject) {
                    if (klevu.isEmptyObject(kObject)) kObject = klevu.analytics.base;
                    var kScope = kObject.getScope();
                    kScope.data = kObject.resetData();
                    kScope.data.context.eventAction = "personalizedSearchTracking";
                    //set up data for request
                    kScope.data.request.analytics = data;
                    kScope.data.context.preventDefault = false;

                    klevu.event.fireChain(kScope, "chains.events.personalizedSearchTracking", kScope.element, kScope.data, null);
                    return kObject;
                }
            });
        }
    });

    klevu.coreEvent.attach("analyticsPersonalizedSearchTrackingPowerUp", {
        name: "buildEvent",
        fire: function () {
            klevu.extend(true, klevu.support, {
                analytics: {
                    personalizedSearchTracking: true
                }
            });
        }
    });


})(klevu);

klevu.coreEvent.build({
    name: "personalizedSearchTrackingModule",
    fire: function () {
        if (
            !klevu.search.modules ||
            !klevu.search.modules.trendingProducts ||
            !klevu.search.modules.trendingProducts.build ||
            !klevu.support.analytics ||
            !klevu.support.analytics.personalizedSearchTracking ||
            !klevu.analyticsUtil ||
            !klevu.analyticsUtil.build
        ) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});


/**
 * Addon for the analytics util component for the banner
 */
klevu.coreEvent.attach("personalizedSearchTrackingModule", {
    name: "attachPersonalizedSearchTrackingModuleEvents",
    fire: function () {

        klevu.extend(true, klevu.analyticsUtil.base, {
            storage: {
                personalizedSearchTracking: "personalizedSearchTrackingList"
            },

            /**
             * Function to register banner click event and store the relevant information
             * @param {*} scope 
             * @param {*} dictionary 
             * @param {*} element 
             */
            registerPersonalizedSearchTrackingClickEvent: function (scope, className, dictionary, element) {
                var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
                klevu.each(klevu.dom.find(className + " .kuTrackPersonalizedProductClick", target), function (key, value) {
                    klevu.event.attach(value, "click", function (event) {
                        var productId = value.dataset.id;
                        var searchResultContainer = klevu.dom.find(className, target)[0];
                        var dataSection;
                        var dataSource;
                        if (searchResultContainer) {
                            dataSection = searchResultContainer.dataset.section;
                            dataSource = searchResultContainer.dataset.source;
                        }
                        if (!dataSection) {
                            return;
                        }
                        var klevuProduct = klevu.dom.helpers.getClosest(value, ".klevuProduct");
                        scope.data.context.section = dataSection;

                        var recentSearchesValue = "";
                        var recentSearches = klevu.getObjectPath(scope.data, "template.recentSearches");
                        if (recentSearches && recentSearches.length) {
                            recentSearches = recentSearches.join("#-#");
                            recentSearchesValue = recentSearches;
                        }

                        if (productId) {
                            var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                            if (product) {
                                var psTrackingOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                                if (psTrackingOptions) {
                                    psTrackingOptions.klevu_term = "";
                                    psTrackingOptions.klevu_keywords = "";
                                    psTrackingOptions.klevu_productId = product.id;
                                    psTrackingOptions.klevu_productName = product.name;
                                    psTrackingOptions.klevu_productUrl = product.url;
                                    psTrackingOptions.klevu_src = "[[typeOfRecord:" + product.typeOfRecord + ";;template:trending]]";

                                    psTrackingOptions.klevu_source = dataSource;
                                    psTrackingOptions.klevu_recentsearch = recentSearchesValue;
                                    psTrackingOptions.klevu_salePrice = product.salePrice;
                                    psTrackingOptions.klevu_rating = (typeof product.rating != "undefined") ? product.rating : "";
                                    psTrackingOptions.klevu_rank = (klevuProduct && klevuProduct.id) ? klevuProduct.id : "";
                                    psTrackingOptions.klevu_type = "clicked";

                                    delete psTrackingOptions.filters;
                                    delete psTrackingOptions.klevu_limit;
                                    delete psTrackingOptions.klevu_pageNumber;
                                    delete psTrackingOptions.klevu_totalResults;
                                    delete psTrackingOptions.klevu_typeOfQuery;
                                    delete psTrackingOptions.klevu_sort;

                                    klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, psTrackingOptions);
                                }
                            }
                        }
                    });
                });
            }

        });
    }
});

/**
 * Event to send the stored analytics event
 */
klevu.coreEvent.attach("analyticsSendStoredData", {
    name: "sendStoredPersonalizedSearchTrackingEvent",
    fire: function () {
        klevu.analyticsUtil.base.sendAnalyticsEventsFromStorage(
            klevu.analyticsUtil.base.storage.dictionary,
            klevu.analyticsUtil.base.storage.personalizedSearchTracking
        );
    }
});(function (klevu) {

    klevu.extend(true, klevu.search.modules, {
        recentViewedProducts: {
            base: {
                limit: 10,

                /**
                 * Function to add product ids
                 * @param {*} scope 
                 * @param {*} productId 
                 */
                addProductId: function (scope, productId) {
                    if (!productId || productId == "") {
                        return;
                    }
                    var limit = (this.limit) ? this.limit : 10;
                    var storage = klevu.getSetting(scope.settings, "settings.storage");
                    storage.recentViewedProducts.setStorage("local");
                    storage.recentViewedProducts.mergeFromGlobal();

                    var storedKeywords = storage.recentViewedProducts.getElement("ku_products");
                    if (storedKeywords && storedKeywords != "ku_products") {
                        storedKeywords = storedKeywords.replace(new RegExp(productId + ",", "g"), "");
                        storedKeywords = storedKeywords.replace(new RegExp(productId), "", "g");
                        productId = productId + "," + storedKeywords;
                    } else {
                        productId = productId + ",";
                    }

                    var updatedList = [];
                    var productIdList = productId.split(",");
                    klevu.each(productIdList, function (key, item) {
                        if (item) {
                            if (updatedList.length < limit) {
                                updatedList.push(item);
                            }
                        }
                    });
                    productId = updatedList.join(",");
                    storage.recentViewedProducts.addElement("ku_products", productId);
                    storage.recentViewedProducts.mergeToGlobal();
                },

                /**
                 * Function to get product ids
                 * @param {*} scope 
                 */
                getProductIds: function (scope) {
                    var storedProductIds = [];
                    var storage = klevu.getSetting(scope.settings, "settings.storage");
                    storage.recentViewedProducts.setStorage("local");
                    storage.recentViewedProducts.mergeFromGlobal();
                    var storedKeywords = storage.recentViewedProducts.getElement("ku_products");
                    if (storedKeywords && storedKeywords != "ku_products") {
                        storedProductIds = storedKeywords.split(",");
                    }
                    return storedProductIds;
                },

                /**
                 * Function to add request payload
                 * @param {*} scope 
                 * @param {*} data 
                 */
                getRecentViewedProductListPayload: function (scope, data) {
                    var recentViewedProductList;
                    var storedProductIds = this.getProductIds(scope);
                    if (storedProductIds && storedProductIds.length) {
                        var productIdObjectList = [];
                        klevu.each(storedProductIds, function (key, pId) {
                            var productObject = {
                                "key": "id",
                                "value": pId
                            }
                            productIdObjectList.push(productObject);
                        });

                        var parameterMap = klevu.getSetting(scope.settings, "settings.search.map", false);
                        recentViewedProductList = klevu.extend(true, {}, parameterMap.recordQuery);
                        recentViewedProductList.id = "recentViewedProductList";
                        recentViewedProductList.typeOfRequest = "SEARCH";
                        recentViewedProductList.settings.query.term = data.context.term;
                        recentViewedProductList.settings.typeOfRecords = ["KLEVU_PRODUCT"];
                        recentViewedProductList.settings.limit = productIdObjectList.length;
                        recentViewedProductList.settings.typeOfSearch = "WILDCARD_AND";
                        recentViewedProductList.settings.includeIds = productIdObjectList;
                        recentViewedProductList.settings.topIds = productIdObjectList;
                    }
                    return recentViewedProductList;
                }
            },
            build: true
        }
    });

})(klevu);(function (klevu) {
	/**
	 * Method to get no results found message.
	 * @param {*} searchTerm 
	 * @param {*} scope 
	 * @returns 
	 */
	function getMessage(searchTerm, scope) {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		searchTerm = klevu.dom.helpers.escapeHTML(searchTerm);

		var translatedText = scope.kScope.template.translate("We're sorry, no results found for");
		var message = translatedText + " <em>\"" + searchTerm + "\"</em>.";
		if (!noResultsFound.messages || !noResultsFound.messages.length) {
			return message;
		}

		if (noResultsFound.messages && noResultsFound.messages.length == 1) {
			var message1 = noResultsFound.messages[0].message;
			var messageHtml = document.createElement("textarea");
			messageHtml.innerHTML = message1;
			message1 = messageHtml.value;
			searchTerm = "<em>\"" + searchTerm + "\"</em>";
			message1 = message1.replace(/#/g, searchTerm);
			return message1;
		}

		var termExists = noResultsFound.messages.find(function (msg) {
			return msg.showForTerms != null ?
				msg.showForTerms.find(function (term) {
					return term.toLowerCase() == searchTerm.toLowerCase();
				}) :
				false;
		});

		if (termExists) {
			var message2 = termExists.message;
			var messageHtml = document.createElement("textarea");
			messageHtml.innerHTML = message2;
			message2 = messageHtml.value;
			searchTerm = "<em>\"" + searchTerm + "\"</em>";
			message2 = message2.replace(/#/g, searchTerm);
			return message2;
		} else {
			var defaultMessageObj = noResultsFound.messages.find(function (msg) {
				return msg.showForTerms == null;
			});
			var message3;
			if(klevu.isUndefined(defaultMessageObj)){
				message3 = message;
			} else {
				message3 = defaultMessageObj.message;
			}
			var messageHtml = document.createElement("textarea");
			messageHtml.innerHTML = message3;
			message3 = messageHtml.value;
			searchTerm = "<em>\"" + searchTerm + "\"</em>";
			message3 = message3.replace(/#/g, searchTerm);
			return message3;
		}
	}

	/**
	 * Method to get no results found landing banners.
	 * @param {*} searchTerm
	 *
	 */
	function getLandingBanners(searchTerm) {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		var bannerList = [];
		if (noResultsFound.banners) {
			klevu.each(noResultsFound.banners, function (key, banner) {
				var hasBannerApproved = false;
				if (banner.showOnLandingPage == true) {
					if (banner.showForTerms == null) {
						hasBannerApproved = true;
					} else if (
						searchTerm &&
						searchTerm.length &&
						banner.showForTerms &&
						banner.showForTerms.length
					) {
						klevu.each(banner.showForTerms, function (key, term) {
							if (term && term.toLowerCase() == searchTerm.toLowerCase()) {
								hasBannerApproved = true;
							}
						});
					}
				}
				if (hasBannerApproved) {
					bannerList.push(banner);
				}
			});
		}
		return bannerList;
	}

	/**
	 * Method to get no results found quick search banners.
	 * @param {*} searchTerm
	 *
	 */
	function getQuickSearchBanners(searchTerm) {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		var bannerList = [];
		if (noResultsFound.banners) {
			klevu.each(noResultsFound.banners, function (key, banner) {
				var hasBannerApproved = false;
				if (banner.showOnQuickSearch == true) {
					if (banner.showForTerms == null) {
						hasBannerApproved = true;
					} else if (
						searchTerm &&
						searchTerm.length &&
						banner.showForTerms &&
						banner.showForTerms.length
					) {
						klevu.each(banner.showForTerms, function (key, term) {
							if (term && term.toLowerCase() == searchTerm.toLowerCase()) {
								hasBannerApproved = true;
							}
						});
					}
				}
				if (hasBannerApproved) {
					bannerList.push(banner);
				}
			});
		}
		return bannerList;
	}

	function isPopularSearchesKeywordsEnabled() {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		return noResultsFound.showPopularKeywords ? noResultsFound.showPopularKeywords : false;
	}

	function setPopularSearchesKeyword() {
		var self = this;
		var isPopularSearchesEnabled = self.isPopularSearchesEnabled();
		if (isPopularSearchesEnabled) {
			var kuPopularSearchTermItem = klevu.dom.find(".kuPopularSearchTermItem");
			klevu.each(kuPopularSearchTermItem, function (key, termItem) {
				klevu.event.attach(termItem, "click", function () {
					var term = termItem.dataset.value;
					term = encodeURIComponent(term);
					var inputElement = klevu.dom.find(
						klevu.getSetting(
							scope.kScope.settings,
							"settings.search.searchBoxSelector"
						)
					)[0];
					var nameAttr = inputElement.name;
					if (nameAttr) {
						window.location = "/?" + nameAttr + "=" + term;
					}
				});
			});
		}
	}

	function isPopularProductsEnabled() {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		return noResultsFound.showPopularProducts ? noResultsFound.showPopularProducts : false;
	}

	function buildPopularProductsReq(data, scope, limit) {
		var self = this;
		var isPopularProductsEnabled = self.isPopularProductsEnabled();

		if (isPopularProductsEnabled) {
			var parameterMap = klevu.getSetting(
				scope.kScope.settings,
				"settings.search.map",
				false
			);

			var popularProductQuery = klevu.extend(
				true, {},
				parameterMap.recordQuery
			);

			popularProductQuery.id = "noResultsFoundPopularProductList";
			popularProductQuery.typeOfRequest = "RECS_TRENDING";
			popularProductQuery.settings.typeOfRecords = ["KLEVU_PRODUCT"];
			popularProductQuery.settings.query = {
				term: "*",
			};
			popularProductQuery.settings.limit = limit;

			data.request.current.recordQueries.push(popularProductQuery);
			data.context.doSearch = true;
			data.context.section = popularProductQuery.id;
		}


	}

	function popularProductsHeading() {
		var self = this;
		var noResultsFound = self.kmcInputs.getNoResultsFoundObject();
		return noResultsFound.productsHeading;
	}


	var noResultsFound = {
		getMessage: getMessage,
		kmcInputs: klevu.search.modules.kmcInputs.base,
		getLandingBanners: getLandingBanners,
		getQuickSearchBanners: getQuickSearchBanners,
		isPopularSearchesKeywordsEnabled: isPopularSearchesKeywordsEnabled,
		isPopularProductsEnabled: isPopularProductsEnabled,
		setPopularSearchesKeyword: setPopularSearchesKeyword,
		buildPopularProductsReq: buildPopularProductsReq,
		popularProductsHeading: popularProductsHeading
	};

	klevu.extend(true, klevu.search.modules, {
		noResultsFound: {
			base: noResultsFound,
		},
	});
})(klevu);

/**
 * noResultsFound module build event
 */
klevu.coreEvent.build({
	name: "noResultsFoundModuleBuild",
	fire: function () {
		if (
			!klevu.search.modules ||
			klevu.isUndefined(klevu.search.modules.kmcInputs)
		) {
			return false;
		}
		return true;
	},
	maxCount: 500,
	delay: 30,
});/**
 * Initialize facets
 */

(function (klevu) {

    /**
     * Function to attach event on facet items
     * @param {*} scope 
     */
    function attachFacetItemsClickEvent(scope) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        klevu.each(klevu.dom.find(".klevuFilterOption", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                event = event || window.event;
                event.preventDefault();

                var parentElem = klevu.dom.helpers.getClosest(this, ".klevuFilter");
                if (parentElem !== null && (parentElem.dataset.singleselect === 'true') && !this.classList.contains("klevuFilterOptionActive")) {
                    var listSingleSelect = klevu.dom.find(".klevuFilterOptionActive", parentElem);
                    klevu.each(listSingleSelect, function (key, value) {
                        value.classList.remove("klevuFilterOptionActive");
                    });
                }
                this.classList.toggle("klevuFilterOptionActive");

                //getScope
                var target = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                if (target === null) {
                    return;
                }

                var elScope = target.kElem;
                elScope.kScope.data = elScope.kObject.resetData(elScope.kElem);
                elScope.kScope.data.context.keyCode = 0;
                elScope.kScope.data.context.eventObject = event;
                elScope.kScope.data.context.event = "keyUp";
                elScope.kScope.data.context.preventDefault = false;

                //override local variables

                var options = klevu.dom.helpers.getClosest(this, ".klevuMeta");
                if (options === null) {
                    return;
                }
                //calculate new filters
                //getAllActiveFilters

                var filterList = [];
                var listActive = klevu.dom.find(".klevuFilterOptionActive", options);
                if (listActive.length > 0) {
                    klevu.each(listActive, function (key, value) {
                        var filter = klevu.dom.helpers.getClosest(value, ".klevuFilter");
                        if (filter !== null) {
                            var objectToChange = filterList.filter(function (element) {
                                return element.key == filter.dataset.filter;
                            });
                            if (objectToChange.length === 0) {
                                filterList.push({
                                    key: filter.dataset.filter,
                                    settings: {
                                        singleSelect: (klevu.isUndefined(filter.dataset.singleselect) ? false : filter.dataset.singleselect)
                                    },
                                    values: [(klevu.isUndefined(value.dataset.value) ? false : value.dataset.value)]
                                });
                            } else {
                                objectToChange[0].values.push((klevu.isUndefined(value.dataset.value) ? false : value.dataset.value));
                            }
                        }
                    });
                }

                var rangeFilterSettings = klevu.search.modules.kmcInputs.base.getFacetRangeFilterSettings();
                var existingSelectedFilterList = klevu.getObjectPath(elScope.kScope.data, "localOverrides.query." + options.dataset.section + ".filters.applyFilters.filters");
                if (rangeFilterSettings && rangeFilterSettings.minMax == "true" && existingSelectedFilterList) {
                    klevu.each(existingSelectedFilterList, function (key, selectedFilter) {
                        if (selectedFilter.key == rangeFilterSettings.key) {
                            filterList.push(selectedFilter);
                        }
                    });
                }

                if (filterList.length) {
                    klevu.setObjectPath(elScope.kScope.data, "localOverrides.query." + options.dataset.section + ".filters.applyFilters.filters", filterList);
                } else {
                    klevu.setObjectPath(elScope.kScope.data, "localOverrides.query." + options.dataset.section + ".filters.applyFilters", {});
                }

                //reset offset after filter change
                klevu.setObjectPath(elScope.kScope.data, "localOverrides.query." + options.dataset.section + ".settings.offset", 0);
                klevu.event.fireChain(elScope.kScope, "chains.events.keyUp", elScope, elScope.kScope.data, event);
            }, true);
        });
    }

    var facets = {
        attachFacetItemsClickEvent: attachFacetItemsClickEvent
    };

    klevu.extend(true, klevu.search.modules, {
        facets: {
            base: facets,
            build: true
        }
    });

})(klevu);

/**
 * facets module build event
 */
klevu.coreEvent.build({
    name: "facetsModuleBuild",
    fire: function () {
        if (!klevu.search.modules ||
            !klevu.search.modules.facets ||
            !klevu.search.modules.facets.build) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});klevu.extend(true, klevu.search.modules, {
	locale: {
		globalTranslations: {
			en: {
				"Narrow by": "Narrow by",
				"price": "price",
				"No records found for your selection": "No records found for your selection"
			},
			ar: {
				"Narrow by": "ضيق من قبل",
				"price": "سعر",
				"No records found for your selection": "لم يتم العثور على سجلات لاختيارك"
			},
			bg: {
				"Narrow by": "Тесно до",
				"price": "цена",
				"No records found for your selection": "Не са намерени записи за Вашия избор"
			},
			da: {
				"Narrow by": "Smalle by",
				"price": "pris",
				"No records found for your selection": "Ingen poster fundet for dit valg"
			},
			de: {
				"Narrow by": "Einschlafen",
				"price": "Preis",
				"No records found for your selection": "Keine Datensätze für Ihre Auswahl gefunden"
			},
			el: {
				"Narrow by": "Στενοί",
				"price": "τιμή",
				"No records found for your selection": "Δεν βρέθηκαν αρχεία για την επιλογή σας"
			},
			es: {
				"Narrow by": "Estrecho por",
				"price": "precio",
				"No records found for your selection": "No se encontraron registros para su selección."
			},
			et: {
				"Narrow by": "Kitsendama",
				"price": "hind",
				"No records found for your selection": "Teie valiku jaoks ei leitud ühtegi kirjet"
			},
			fa: {
				"Narrow by": "باریک",
				"price": "قیمت",
				"No records found for your selection": "هیچ پرونده ای برای انتخاب شما یافت نشد"
			},
			fi: {
				"Narrow by": "Kapea",
				"price": "hinta",
				"No records found for your selection": "Valikoimusta ei löytynyt"
			},
			fr: {
				"Narrow by": "Étroit par",
				"price": "le prix",
				"No records found for your selection": "Aucun enregistrement trouvé pour votre sélection"
			},
			he: {
				"Narrow by": "צמצם על ידי",
				"price": "מחיר",
				"No records found for your selection": "לא נמצאו רשומות לבחירה שלך"
			},
			hr: {
				"Narrow by": "Usko",
				"price": "cijena",
				"No records found for your selection": "Nema pronađenih zapisa za vaš odabir"
			},
			hu: {
				"Narrow by": "Keskeny",
				"price": "ár",
				"No records found for your selection": "Nincsenek nyilvántartások a kiválasztáshoz"
			},
			is: {
				"Narrow by": "Þröngt af",
				"price": "verð",
				"No records found for your selection": "Engar færslur fundust fyrir val þitt"
			},
			it: {
				"Narrow by": "Ristretto",
				"price": "prezzo",
				"No records found for your selection": "Nessun record trovato per la tua selezione"
			},
			ja: {
				"Narrow by": "狭く",
				"price": "価格",
				"No records found for your selection": "あなたの選択のためにレコードが見つかりませんでした"
			},
			ko: {
				"Narrow by": "좁은만큼",
				"price": "가격",
				"No records found for your selection": "귀하의 선택에 대한 기록이 없습니다"
			},
			lv: {
				"Narrow by": "Šaurs ar",
				"price": "cena",
				"No records found for your selection": "Jūsu izvēlei nav atrasti ieraksti"
			},
			nb: {
				"Narrow by": "Smal av.",
				"price": "pris",
				"No records found for your selection": "Ingen poster funnet for ditt valg"
			},
			nl: {
				"Narrow by": "Smal bij",
				"price": "prijs",
				"No records found for your selection": "Geen records gevonden voor uw selectie"
			},
			no: {
				"Narrow by": "Smal av.",
				"price": "pris",
				"No records found for your selection": "Ingen poster funnet for ditt valg"
			},
			pl: {
				"Narrow by": "Wąski",
				"price": "Cena £",
				"No records found for your selection": "Nie znaleziono rekordów do wyboru"
			},
			pt: {
				"Narrow by": "Estreito por",
				"price": "preço",
				"No records found for your selection": "Nenhum registro encontrado para sua seleção"
			},
			ro: {
				"Narrow by": "Îngust cu",
				"price": "Preț",
				"No records found for your selection": "Nu au fost găsite înregistrări pentru selecția dvs."
			},
			ru: {
				"Narrow by": "Узкий",
				"price": "цена",
				"No records found for your selection": "Записи не найдены для вашего выбора"
			},
			sk: {
				"Narrow by": "Úzky",
				"price": "cena",
				"No records found for your selection": "Pre váš výber neboli nájdené žiadne záznamy"
			},
			sl: {
				"Narrow by": "Ozek by.",
				"price": "Cena",
				"No records found for your selection": "Za izbiro ni najdenih zapisov"
			},
			sr: {
				"Narrow by": "Уски",
				"price": "Цена",
				"No records found for your selection": "Није пронађен ниједан записи за ваш избор"
			},
			sv: {
				"Narrow by": "Smal av",
				"price": "pris",
				"No records found for your selection": "Inga poster hittades för ditt val"
			},
			tr: {
				"Narrow by": "Daraltmak",
				"price": "fiyat",
				"No records found for your selection": "Seçiminiz için kayıt bulunamadı"
			},
			vi: {
				"Narrow by": "Thu hẹp bởi",
				"price": "giá bán",
				"No records found for your selection": "Không tìm thấy hồ sơ nào cho lựa chọn của bạn"
			},
			zh: {
				"Narrow by": "狭窄",
				"price": "价钱",
				"No records found for your selection": "没有找到您的选择的记录"
			}
		}
	}
});(function (klevu) {

    /**
     * Initialize collapsing for filter items
     * @param {*} scope 
     */
    function initialize(scope) {
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");

        klevu.each(klevu.dom.find(".kuFilterHead", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                var kuFilterHead = value;
                event = event || window.event;
                event.preventDefault();

                var hasClass = false;
                var storage = klevu.getSetting(scope.settings, "settings.storage");
                storage.filterCollapse.setStorage("session");
                storage.filterCollapse.mergeFromGlobal();
                var existingKeys = storage.filterCollapse.getElement("keys");

                this.classList.toggle("kuCollapse");
                this.classList.toggle("kuExpand");

                var parentElem = klevu.dom.helpers.getClosest(this, ".kuFilterBox");
                klevu.each(klevu.dom.find(".kuFilterNames", parentElem), function (key, value) {
                    value.classList.toggle("kuFilterCollapse");
                    hasClass = value.classList.contains("kuFilterCollapse");
                    if (kuFilterHead.classList.contains("kuCollapse") && value.dataset && parseInt(value.dataset.optioncount) < 5) {
                        value.classList.add("kuFilterShowAll");
                    } else {
                        value.classList.remove("kuFilterShowAll");
                    }
                });

                var parentElem = klevu.dom.helpers.getClosest(this, ".kuFilterBox");
                var clickedFilterKey = (parentElem && parentElem.dataset && parentElem.dataset.filter) ? parentElem.dataset.filter : "";
                if (clickedFilterKey && clickedFilterKey.length) {
                    if (hasClass) {
                        existingKeys += clickedFilterKey + ",";
                    } else {
                        existingKeys = existingKeys.replace(new RegExp(clickedFilterKey + ",", "g"), "");
                    }
                    storage.filterCollapse.addElement("keys", existingKeys);
                    storage.filterCollapse.mergeToGlobal();
                }

            });
        });

        klevu.each(klevu.dom.find(".kuFilterBox", target), function (key, value) {
            var clickedFilterKey = (value && value.dataset && value.dataset.filter) ? value.dataset.filter : "";
            if (clickedFilterKey.length) {

                var storage = klevu.getSetting(scope.settings, "settings.storage");
                var isKeyFoundInStorage = function (sessionStorage, key) {
                    var hasFoundInStorage = false;
                    sessionStorage.setStorage("session");
                    sessionStorage.mergeFromGlobal();
                    var existingKeys = sessionStorage.getElement("keys");
                    if (existingKeys.indexOf(key) > -1) {
                        hasFoundInStorage = true;
                    }
                    return hasFoundInStorage;
                }

                var isShowMoreKeyFound = isKeyFoundInStorage(storage.filterShowMore, clickedFilterKey);
                if (isShowMoreKeyFound) {
                    klevu.each(klevu.dom.find(".kuFilterNames", value), function (key, element) {
                        element.classList.add("kuFilterShowAll");
                    });
                }

                var isCollapseKeyFound = isKeyFoundInStorage(storage.filterCollapse, clickedFilterKey);
                if (isCollapseKeyFound) {
                    klevu.each(klevu.dom.find(".kuFilterHead", value), function (key, element) {
                        element.classList.remove("kuCollapse");
                        element.classList.add("kuExpand");
                    });
                    klevu.each(klevu.dom.find(".kuFilterNames", value), function (key, element) {
                        element.classList.remove("kuFilterShowAll");
                        element.classList.add("kuFilterCollapse");
                    });
                }

            }
        });

        klevu.each(klevu.dom.find(".kuShowOpt", target), function (key, value) {
            klevu.event.attach(value, "click", function (event) {
                event = event || window.event;
                event.preventDefault();

                var storage = klevu.getSetting(scope.settings, "settings.storage");
                storage.filterShowMore.setStorage("session");
                storage.filterShowMore.mergeFromGlobal();
                var existingKeys = storage.filterShowMore.getElement("keys");

                var hasClass = false;
                var parentElem = klevu.dom.helpers.getClosest(this, ".kuFilterBox");
                klevu.each(klevu.dom.find(".kuFilterNames", parentElem), function (key, value) {
                    value.classList.toggle("kuFilterShowAll");
                    hasClass = value.classList.contains("kuFilterShowAll");
                });

                var clickedFilterKey = (parentElem && parentElem.dataset && parentElem.dataset.filter) ? parentElem.dataset.filter : "";
                if (clickedFilterKey && clickedFilterKey.length) {
                    if (hasClass) {
                        existingKeys += clickedFilterKey + ",";
                    } else {
                        existingKeys = existingKeys.replace(new RegExp(clickedFilterKey + ",", "g"), "");
                    }
                    storage.filterShowMore.addElement("keys", existingKeys);
                    storage.filterShowMore.mergeToGlobal();
                }
            });
        });
    };

    /**
     * Function to collapse filter list as per the priority list
     * @param {*} data 
     * @param {*} collapsedFilters 
     */
    function collapse(data, collapsedFilters, itemListId) {
        if (data && data.template && data.template.query && collapsedFilters && collapsedFilters.length) {
            var items = klevu.getObjectPath(data.template.query, itemListId);
            if (items && items.filters) {
                var filters = items.filters;
                filters.forEach(function (filter) {
                    filter.isCollapsed = false;
                });
                collapsedFilters.forEach(function (collapsedFilter) {
                    filters.forEach(function (filter) {
                        if (collapsedFilter.key == filter.key) {
                            filter.isCollapsed = true;
                        }
                    });
                });
            }
        }
    };

    var collapseFilters = {
        collapse: collapse,
        initialize: initialize
    };

    klevu.extend(true, klevu.search.modules, {
        collapseFilters: {
            base: collapseFilters,
            build: true
        }
    });
})(klevu);

/**
 * collapseFilters module build event
 */
klevu.coreEvent.build({
    name: "collapseFiltersModuleBuild",
    fire: function () {
        if (!klevu.search.modules ||
            !klevu.search.modules.collapseFilters ||
            !klevu.search.modules.collapseFilters.build) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});/**
 * Add to cart base component
 */

(function (klevu) {

    /**
     * Function to send Add to cart request
     * @param {*} variantId 
     * @param {*} productURL 
     * @param {*} quantity 
     */
    function sendAddToCartRequest(variantId, productURL, quantity) {
        /**
         * Call back function to perform framework specific operations for add to cart functionality
         */
        if (typeof (klevu_addtocart) === "function") {
            klevu_addtocart(variantId, productURL, quantity);
        }
    }

    var addToCart = {
        sendAddToCartRequest: sendAddToCartRequest
    };

    klevu.extend(true, klevu.search.modules, {
        addToCart: {
            base: addToCart,
            build: true
        }
    });

})(klevu);

/**
 * addToCart module build event
 */
klevu.coreEvent.build({
    name: "addToCartModuleBuild",
    fire: function () {
        if (!klevu.search.modules ||
            !klevu.search.modules.addToCart ||
            !klevu.search.modules.addToCart.build) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});/*! nouislider - 8.2.1 - 2015-12-02 21:43:14 */

(function (factory) {
	window.noUiSlider = factory();
}(function () {

	'use strict';


	// Removes duplicates from an array.
	function unique(array) {
		return array.filter(function (a) {
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest(value, to) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset(elem) {

		var rect = elem.getBoundingClientRect(),
			doc = elem.ownerDocument,
			docElem = doc.documentElement,
			pageOffset = getPageOffset();

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
			pageOffset.x = 0;
		}

		return {
			top: rect.top + pageOffset.y - docElem.clientTop,
			left: rect.left + pageOffset.x - docElem.clientLeft
		};
	}

	// Checks whether a value is numerical.
	function isNumeric(a) {
		return typeof a === 'number' && !isNaN(a) && isFinite(a);
	}

	// Rounds a number to 7 supported decimals.
	function accurateNumber(number) {
		var p = Math.pow(10, 7);
		return Number((Math.round(number * p) / p).toFixed(7));
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor(element, className, duration) {
		addClass(element, className);
		setTimeout(function () {
			removeClass(element, className);
		}, duration);
	}

	// Limits a value to 0 - 100
	function limit(a) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	function asArray(a) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals(numStr) {
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass(el, className) {
		if (el.classList) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass(el, className) {
		if (el.classList) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// http://youmightnotneedjquery.com/#has_class
	function hasClass(el, className) {
		if (el.classList) {
			el.classList.contains(className);
		} else {
			new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset() {

		var supportPageOffset = window.pageXOffset !== undefined,
			isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
			x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// Shorthand for stopPropagation so we don't have to create a dynamic method
	function stopPropagation(e) {
		e.stopPropagation();
	}

	// todo
	function addCssPrefix(cssPrefix) {
		return function (className) {
			return cssPrefix + className;
		};
	}


	var
		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		/** @const */
		actions = window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		},
		defaultCssPrefix = 'noUi-';


	// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio(pa, pb) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage(range, value) {
		return (value * 100) / (range[1] - range[0]);
	}

	// (percentage) Where is this value on this range?
	function toPercentage(range, value) {
		return fromPercentage(range, range[0] < 0 ?
			value + Math.abs(range[0]) :
			value - range[0]);
	}

	// (value) How much is this percentage on this range?
	function isPercentage(range, value) {
		return ((value * (range[1] - range[0])) / 100) + range[0];
	}


	// Range conversion

	function getJ(value, arr) {

		var j = 1;

		while (value >= arr[j]) {
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping(xVal, xPct, value) {

		if (value >= xVal.slice(-1)[0]) {
			return 100;
		}

		var j = getJ(value, xVal),
			va, vb, pa, pb;

		va = xVal[j - 1];
		vb = xVal[j];
		pa = xPct[j - 1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio(pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping(xVal, xPct, value) {

		// There is no range group that fits 100
		if (value >= 100) {
			return xVal.slice(-1)[0];
		}

		var j = getJ(value, xPct),
			va, vb, pa, pb;

		va = xVal[j - 1];
		vb = xVal[j];
		pa = xPct[j - 1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep(xPct, xSteps, snap, value) {

		if (value === 100) {
			return value;
		}

		var j = getJ(value, xPct),
			a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if (snap) {

			a = xPct[j - 1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b - a) / 2)) {
				return b;
			}

			return a;
		}

		if (!xSteps[j - 1]) {
			return value;
		}

		return xPct[j - 1] + closest(
			value - xPct[j - 1],
			xSteps[j - 1]
		);
	}


	// Entry parsing

	function handleEntryPoint(index, value, that) {

		var percentage;

		// Wrap numerical input in an array.
		if (typeof value === "number") {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if (Object.prototype.toString.call(value) !== '[object Array]') {
			throw new Error("noUiSlider: 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if (index === 'min') {
			percentage = 0;
		} else if (index === 'max') {
			percentage = 100;
		} else {
			percentage = parseFloat(index);
		}

		// Check for correct input.
		if (!isNumeric(percentage) || !isNumeric(value[0])) {
			throw new Error("noUiSlider: 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push(percentage);
		that.xVal.push(value[0]);

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if (!percentage) {
			if (!isNaN(value[1])) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push(isNaN(value[1]) ? false : value[1]);
		}
	}

	function handleStepPoint(i, n, that) {

		// Ignore 'false' stepping.
		if (!n) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			that.xVal[i], that.xVal[i + 1]
		], n) / subRangeRatio(
			that.xPct[i],
			that.xPct[i + 1]);
	}


	// Interface

	// The interface to Spectrum handles all direction-based
	// conversions, so the above values are unaware.

	function Spectrum(entry, snap, direction, singleStep) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [singleStep || false];
		this.xNumSteps = [false];

		this.snap = snap;
		this.direction = direction;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for (index in entry) {
			if (entry.hasOwnProperty(index)) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if (ordered.length && typeof ordered[0][0] === "object") {
			ordered.sort(function (a, b) {
				return a[0][0] - b[0][0];
			});
		} else {
			ordered.sort(function (a, b) {
				return a[0] - b[0];
			});
		}


		// Convert all entries to subranges.
		for (index = 0; index < ordered.length; index++) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for (index = 0; index < this.xNumSteps.length; index++) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function (value) {
		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function (value) {

		value = toStepping(this.xVal, this.xPct, value);

		// Invert the value if this is a right-to-left slider.
		if (this.direction) {
			value = 100 - value;
		}

		return value;
	};

	Spectrum.prototype.fromStepping = function (value) {

		// Invert the value if this is a right-to-left slider.
		if (this.direction) {
			value = 100 - value;
		}

		return accurateNumber(fromStepping(this.xVal, this.xPct, value));
	};

	Spectrum.prototype.getStep = function (value) {

		// Find the proper step for rtl sliders by search in inverse direction.
		// Fixes issue #262.
		if (this.direction) {
			value = 100 - value;
		}

		value = getStep(this.xPct, this.xSteps, this.snap, value);

		if (this.direction) {
			value = 100 - value;
		}

		return value;
	};

	Spectrum.prototype.getApplicableStep = function (value) {

		// If the value is 100%, return the negative step twice.
		var j = getJ(value, this.xPct),
			offset = value === 100 ? 2 : 1;
		return [this.xNumSteps[j - 2], this.xVal[j - offset], this.xNumSteps[j - offset]];
	};

	// Outside testing
	Spectrum.prototype.convert = function (value) {
		return this.getStep(this.toStepping(value));
	};

	/*	Every input option is tested and parsed. This'll prevent
		endless validation in internal methods. These tests are
		structured with an item for every option available. An
		option can be marked as required by setting the 'r' flag.
		The testing function is provided with three arguments:
			- The provided value for the option;
			- A reference to the options object;
			- The name for the option;

		The testing function returns false when an error is detected,
		or true when everything is OK. It can also modify the option
		object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = {
		'to': function (value) {
			return value !== undefined && value.toFixed(2);
		},
		'from': Number
	};

	function testStep(parsed, entry) {

		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange(parsed, entry) {

		// Filter incorrect input.
		if (typeof entry !== 'object' || Array.isArray(entry)) {
			throw new Error("noUiSlider: 'range' is not an object.");
		}

		// Catch missing start or end.
		if (entry.min === undefined || entry.max === undefined) {
			throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if (entry.min === entry.max) {
			throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.dir, parsed.singleStep);
	}

	function testStart(parsed, entry) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if (!Array.isArray(entry) || !entry.length || entry.length > 2) {
			throw new Error("noUiSlider: 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap(parsed, entry) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if (typeof entry !== 'boolean') {
			throw new Error("noUiSlider: 'snap' option must be a boolean.");
		}
	}

	function testAnimate(parsed, entry) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if (typeof entry !== 'boolean') {
			throw new Error("noUiSlider: 'animate' option must be a boolean.");
		}
	}

	function testConnect(parsed, entry) {

		if (entry === 'lower' && parsed.handles === 1) {
			parsed.connect = 1;
		} else if (entry === 'upper' && parsed.handles === 1) {
			parsed.connect = 2;
		} else if (entry === true && parsed.handles === 2) {
			parsed.connect = 3;
		} else if (entry === false) {
			parsed.connect = 0;
		} else {
			throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
		}
	}

	function testOrientation(parsed, entry) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch (entry) {
			case 'horizontal':
				parsed.ort = 0;
				break;
			case 'vertical':
				parsed.ort = 1;
				break;
			default:
				throw new Error("noUiSlider: 'orientation' option is invalid.");
		}
	}

	function testMargin(parsed, entry) {

		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'margin' option must be numeric.");
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if (!parsed.margin) {
			throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit(parsed, entry) {

		if (!isNumeric(entry)) {
			throw new Error("noUiSlider: 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if (!parsed.limit) {
			throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.");
		}
	}

	function testDirection(parsed, entry) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch (entry) {
			case 'ltr':
				parsed.dir = 0;
				break;
			case 'rtl':
				parsed.dir = 1;
				parsed.connect = [0, 2, 1, 3][parsed.connect];
				break;
			default:
				throw new Error("noUiSlider: 'direction' option was not recognized.");
		}
	}

	function testBehaviour(parsed, entry) {

		// Make sure the input is a string.
		if (typeof entry !== 'string') {
			throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0,
			drag = entry.indexOf('drag') >= 0,
			fixed = entry.indexOf('fixed') >= 0,
			snap = entry.indexOf('snap') >= 0,
			hover = entry.indexOf('hover') >= 0;

		// Fix #472
		if (drag && !parsed.connect) {
			throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips(parsed, entry) {

		var i;

		if (entry === false) {
			return;
		} else if (entry === true) {

			parsed.tooltips = [];

			for (i = 0; i < parsed.handles; i++) {
				parsed.tooltips.push(true);
			}

		} else {

			parsed.tooltips = asArray(entry);

			if (parsed.tooltips.length !== parsed.handles) {
				throw new Error("noUiSlider: must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function (formatter) {
				if (typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function')) {
					throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testFormat(parsed, entry) {

		parsed.format = entry;

		// Any object with a to and from method is supported.
		if (typeof entry.to === 'function' && typeof entry.from === 'function') {
			return true;
		}

		throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
	}

	function testCssPrefix(parsed, entry) {

		if (entry !== undefined && typeof entry !== 'string') {
			throw new Error("noUiSlider: 'cssPrefix' must be a string.");
		}

		parsed.cssPrefix = entry;
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions(options) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
				margin: 0,
				limit: 0,
				animate: true,
				format: defaultFormatter
			},
			tests;

		// Tests are executed in the order they are presented here.
		tests = {
			'step': {
				r: false,
				t: testStep
			},
			'start': {
				r: true,
				t: testStart
			},
			'connect': {
				r: true,
				t: testConnect
			},
			'direction': {
				r: true,
				t: testDirection
			},
			'snap': {
				r: false,
				t: testSnap
			},
			'animate': {
				r: false,
				t: testAnimate
			},
			'range': {
				r: true,
				t: testRange
			},
			'orientation': {
				r: false,
				t: testOrientation
			},
			'margin': {
				r: false,
				t: testMargin
			},
			'limit': {
				r: false,
				t: testLimit
			},
			'behaviour': {
				r: true,
				t: testBehaviour
			},
			'format': {
				r: false,
				t: testFormat
			},
			'tooltips': {
				r: false,
				t: testTooltips
			},
			'cssPrefix': {
				r: false,
				t: testCssPrefix
			}
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal'
		};

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function (name) {

			// If the option isn't set, but it is required, throw an error.
			if (options[name] === undefined && defaults[name] === undefined) {

				if (tests[name].r) {
					throw new Error("noUiSlider: '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t(parsed, options[name] === undefined ? defaults[name] : options[name]);
		});

		// Forward pips options
		parsed.pips = options.pips;

		// Pre-define the styles.
		parsed.style = parsed.ort ? 'top' : 'left';

		return parsed;
	}


	function closure(target, options) {

		// All variables local to 'closure' are prefixed with 'scope_'
		var scope_Target = target,
			scope_Locations = [-1, -1],
			scope_Base,
			scope_Handles,
			scope_Spectrum = options.spectrum,
			scope_Values = [],
			scope_Events = {},
			scope_Self;

		var cssClasses = [
			/*  0 */
			'target'
			/*  1 */
			, 'base'
			/*  2 */
			, 'origin'
			/*  3 */
			, 'handle'
			/*  4 */
			, 'horizontal'
			/*  5 */
			, 'vertical'
			/*  6 */
			, 'background'
			/*  7 */
			, 'connect'
			/*  8 */
			, 'ltr'
			/*  9 */
			, 'rtl'
			/* 10 */
			, 'draggable'
			/* 11 */
			, ''
			/* 12 */
			, 'state-drag'
			/* 13 */
			, ''
			/* 14 */
			, 'state-tap'
			/* 15 */
			, 'active'
			/* 16 */
			, ''
			/* 17 */
			, 'stacking'
			/* 18 */
			, 'tooltip'
			/* 19 */
			, ''
			/* 20 */
			, 'pips'
			/* 21 */
			, 'marker'
			/* 22 */
			, 'value'
		].map(addCssPrefix(options.cssPrefix || defaultCssPrefix));


		// Delimit proposed values for handle positions.
		function getPositions(a, b, delimit) {

			// Add movement to current position.
			var c = a + b[0],
				d = a + b[1];

			// Only alter the other position on drag,
			// not on standard sliding.
			if (delimit) {
				if (c < 0) {
					d += Math.abs(c);
				}
				if (d > 100) {
					c -= (d - 100);
				}

				// Limit values to 0 and 100.
				return [limit(c), limit(d)];
			}

			return [c, d];
		}

		// Provide a clean event with standardized offset values.
		function fixEvent(e, pageOffset) {

			// Prevent scrolling and panning on touch events, while
			// attempting to slide. The tap event also depends on this.
			e.preventDefault();

			// Filter the event to register the type, which can be
			// touch, mouse or pointer. Offset changes need to be
			// made on an event specific basis.
			var touch = e.type.indexOf('touch') === 0,
				mouse = e.type.indexOf('mouse') === 0,
				pointer = e.type.indexOf('pointer') === 0,
				x, y, event = e;

			// IE10 implemented pointer events with a prefix;
			if (e.type.indexOf('MSPointer') === 0) {
				pointer = true;
			}

			if (touch) {
				// noUiSlider supports one movement at a time,
				// so we can select the first 'changedTouch'.
				x = e.changedTouches[0].pageX;
				y = e.changedTouches[0].pageY;
			}

			pageOffset = pageOffset || getPageOffset();

			if (mouse || pointer) {
				x = e.clientX + pageOffset.x;
				y = e.clientY + pageOffset.y;
			}

			event.pageOffset = pageOffset;
			event.points = [x, y];
			event.cursor = mouse || pointer; // Fix #435

			return event;
		}

		// Append a handle to the base.
		function addHandle(direction, index) {

			var origin = document.createElement('div'),
				handle = document.createElement('div'),
				additions = ['-lower', '-upper'];

			if (direction) {
				additions.reverse();
			}

			addClass(handle, cssClasses[3]);
			addClass(handle, cssClasses[3] + additions[index]);

			addClass(origin, cssClasses[2]);
			origin.appendChild(handle);

			return origin;
		}

		// Add the proper connection classes.
		function addConnection(connect, target, handles) {

			// Apply the required connection classes to the elements
			// that need them. Some classes are made up for several
			// segments listed in the class list, to allow easy
			// renaming and provide a minor compression benefit.
			switch (connect) {
				case 1:
					addClass(target, cssClasses[7]);
					addClass(handles[0], cssClasses[6]);
					break;
				case 3:
					addClass(handles[1], cssClasses[6]);
					/* falls through */
				case 2:
					addClass(handles[0], cssClasses[7]);
					/* falls through */
				case 0:
					addClass(target, cssClasses[6]);
					break;
			}
		}

		// Add handles to the slider base.
		function addHandles(nrHandles, direction, base) {

			var index, handles = [];

			// Append handles.
			for (index = 0; index < nrHandles; index += 1) {

				// Keep a list of all added handles.
				handles.push(base.appendChild(addHandle(direction, index)));
			}

			return handles;
		}

		// Initialize a single slider.
		function addSlider(direction, orientation, target) {

			// Apply classes and data to the target.
			addClass(target, cssClasses[0]);
			addClass(target, cssClasses[8 + direction]);
			addClass(target, cssClasses[4 + orientation]);

			var div = document.createElement('div');
			addClass(div, cssClasses[1]);
			target.appendChild(div);
			return div;
		}


		function addTooltip(handle, index) {

			if (!options.tooltips[index]) {
				return false;
			}

			var element = document.createElement('div');
			element.className = cssClasses[18];
			return handle.firstChild.appendChild(element);
		}

		// The tooltips option is a shorthand for using the 'update' event.
		function tooltips() {

			if (options.dir) {
				options.tooltips.reverse();
			}

			// Tooltips are added with options.tooltips in original order.
			var tips = scope_Handles.map(addTooltip);

			if (options.dir) {
				tips.reverse();
				options.tooltips.reverse();
			}

			bindEvent('update', function (f, o, r) {
				if (tips[o]) {
					tips[o].innerHTML = options.tooltips[o] === true ? f[o] : options.tooltips[o].to(r[o]);
				}
			});
		}


		function getGroup(mode, values, stepped) {

			// Use the range.
			if (mode === 'range' || mode === 'steps') {
				return scope_Spectrum.xVal;
			}

			if (mode === 'count') {

				// Divide 0 - 100 in 'count' parts.
				var spread = (100 / (values - 1)),
					v, i = 0;
				values = [];

				// List these parts and have them handled as 'positions'.
				while ((v = i++ * spread) <= 100) {
					values.push(v);
				}

				mode = 'positions';
			}

			if (mode === 'positions') {

				// Map all percentages to on-range values.
				return values.map(function (value) {
					return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
				});
			}

			if (mode === 'values') {

				// If the value must be stepped, it needs to be converted to a percentage first.
				if (stepped) {

					return values.map(function (value) {

						// Convert to percentage, apply step, return to value.
						return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
					});

				}

				// Otherwise, we can simply use the values.
				return values;
			}
		}

		function generateSpread(density, mode, group) {

			function safeIncrement(value, increment) {
				// Avoid floating point variance by dropping the smallest decimal places.
				return (value + increment).toFixed(7) / 1;
			}

			var originalSpectrumDirection = scope_Spectrum.direction,
				indexes = {},
				firstInRange = scope_Spectrum.xVal[0],
				lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1],
				ignoreFirst = false,
				ignoreLast = false,
				prevPct = 0;

			// This function loops the spectrum in an ltr linear fashion,
			// while the toStepping method is direction aware. Trick it into
			// believing it is ltr.
			scope_Spectrum.direction = 0;

			// Create a copy of the group, sort it and filter away all duplicates.
			group = unique(group.slice().sort(function (a, b) {
				return a - b;
			}));

			// Make sure the range starts with the first element.
			if (group[0] !== firstInRange) {
				group.unshift(firstInRange);
				ignoreFirst = true;
			}

			// Likewise for the last one.
			if (group[group.length - 1] !== lastInRange) {
				group.push(lastInRange);
				ignoreLast = true;
			}

			group.forEach(function (current, index) {

				// Get the current step and the lower + upper positions.
				var step, i, q,
					low = current,
					high = group[index + 1],
					newPct, pctDifference, pctPos, type,
					steps, realSteps, stepsize;

				// When using 'steps' mode, use the provided steps.
				// Otherwise, we'll step on to the next subrange.
				if (mode === 'steps') {
					step = scope_Spectrum.xNumSteps[index];
				}

				// Default to a 'full' step.
				if (!step) {
					step = high - low;
				}

				// Low can be 0, so test for false. If high is undefined,
				// we are at the last subrange. Index 0 is already handled.
				if (low === false || high === undefined) {
					return;
				}

				// Find all steps in the subrange.
				for (i = low; i <= high; i = safeIncrement(i, step)) {

					// Get the percentage value for the current step,
					// calculate the size for the subrange.
					newPct = scope_Spectrum.toStepping(i);
					pctDifference = newPct - prevPct;

					steps = pctDifference / density;
					realSteps = Math.round(steps);

					// This ratio represents the ammount of percentage-space a point indicates.
					// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
					// Round the percentage offset to an even number, then divide by two
					// to spread the offset on both sides of the range.
					stepsize = pctDifference / realSteps;

					// Divide all points evenly, adding the correct number to this subrange.
					// Run up to <= so that 100% gets a point, event if ignoreLast is set.
					for (q = 1; q <= realSteps; q += 1) {

						// The ratio between the rounded value and the actual size might be ~1% off.
						// Correct the percentage offset by the number of points
						// per subrange. density = 1 will result in 100 points on the
						// full range, 2 for 50, 4 for 25, etc.
						pctPos = prevPct + (q * stepsize);
						indexes[pctPos.toFixed(5)] = ['x', 0];
					}

					// Determine the point type.
					type = (group.indexOf(i) > -1) ? 1 : (mode === 'steps' ? 2 : 0);

					// Enforce the 'ignoreFirst' option by overwriting the type for 0.
					if (!index && ignoreFirst) {
						type = 0;
					}

					if (!(i === high && ignoreLast)) {
						// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
						indexes[newPct.toFixed(5)] = [i, type];
					}

					// Update the percentage count.
					prevPct = newPct;
				}
			});

			// Reset the spectrum.
			scope_Spectrum.direction = originalSpectrumDirection;

			return indexes;
		}

		function addMarking(spread, filterFunc, formatter) {

			var style = ['horizontal', 'vertical'][options.ort],
				element = document.createElement('div');

			addClass(element, cssClasses[20]);
			addClass(element, cssClasses[20] + '-' + style);

			function getSize(type) {
				return ['-normal', '-large', '-sub'][type];
			}

			function getTags(offset, source, values) {
				return 'class="' + source + ' ' +
					source + '-' + style + ' ' +
					source + getSize(values[1]) +
					'" style="' + options.style + ': ' + offset + '%"';
			}

			function addSpread(offset, values) {

				if (scope_Spectrum.direction) {
					offset = 100 - offset;
				}

				// Apply the filter function, if it is set.
				values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

				// Add a marker for every point
				element.innerHTML += '<div ' + getTags(offset, cssClasses[21], values) + '></div>';

				// Values are only appended for points marked '1' or '2'.
				if (values[1]) {
					element.innerHTML += '<div ' + getTags(offset, cssClasses[22], values) + '>' + formatter.to(values[0]) + '</div>';
				}
			}

			// Append all points.
			Object.keys(spread).forEach(function (a) {
				addSpread(a, spread[a]);
			});

			return element;
		}

		function pips(grid) {

			var mode = grid.mode,
				density = grid.density || 1,
				filter = grid.filter || false,
				values = grid.values || false,
				stepped = grid.stepped || false,
				group = getGroup(mode, values, stepped),
				spread = generateSpread(density, mode, group),
				format = grid.format || {
					to: Math.round
				};

			return scope_Target.appendChild(addMarking(
				spread,
				filter,
				format
			));
		}


		// Shorthand for base dimensions.
		function baseSize() {
			return scope_Base['offset' + ['Width', 'Height'][options.ort]];
		}

		// External event handling
		function fireEvent(event, handleNumber, tap) {

			if (handleNumber !== undefined && options.handles !== 1) {
				handleNumber = Math.abs(handleNumber - options.dir);
			}

			Object.keys(scope_Events).forEach(function (targetEvent) {

				var eventType = targetEvent.split('.')[0];

				if (event === eventType) {
					scope_Events[targetEvent].forEach(function (callback) {
						// .reverse is in place
						// Return values as array, so arg_1[arg_2] is always valid.
						callback.call(scope_Self, asArray(valueGet()), handleNumber, asArray(inSliderOrder(Array.prototype.slice.call(scope_Values))), tap || false);
					});
				}
			});
		}

		// Returns the input array, respecting the slider direction configuration.
		function inSliderOrder(values) {

			// If only one handle is used, return a single value.
			if (values.length === 1) {
				return values[0];
			}

			if (options.dir) {
				return values.reverse();
			}

			return values;
		}


		// Handler for attaching events trough a proxy.
		function attach(events, element, callback, data) {

			// This function can be used to 'filter' events to the slider.
			// element is a node, not a nodeList

			var method = function (e) {

					if (scope_Target.hasAttribute('disabled')) {
						return false;
					}

					// Stop if an active 'tap' transition is taking place.
					if (hasClass(scope_Target, cssClasses[14])) {
						return false;
					}

					e = fixEvent(e, data.pageOffset);

					// Ignore right or middle clicks on start #454
					if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
						return false;
					}

					// Ignore right or middle clicks on start #454
					if (data.hover && e.buttons) {
						return false;
					}

					e.calcPoint = e.points[options.ort];

					// Call the event handler with the event [ and additional data ].
					callback(e, data);

				},
				methods = [];

			// Bind a closure on the target for every event type.
			events.split(' ').forEach(function (eventName) {
				element.addEventListener(eventName, method, false);
				methods.push([eventName, method]);
			});

			return methods;
		}

		// Handle movement on document for handle and range drag.
		function move(event, data) {

			// Fix #498
			// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
			// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
			// IE9 has .buttons and .which zero on mousemove.
			// Firefox breaks the spec MDN defines.
			if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
				return end(event, data);
			}

			var handles = data.handles || scope_Handles,
				positions, state = false,
				proposal = ((event.calcPoint - data.start) * 100) / data.baseSize,
				handleNumber = handles[0] === scope_Handles[0] ? 0 : 1,
				i;

			// Calculate relative positions for the handles.
			positions = getPositions(proposal, data.positions, handles.length > 1);

			state = setHandle(handles[0], positions[handleNumber], handles.length === 1);

			if (handles.length > 1) {

				state = setHandle(handles[1], positions[handleNumber ? 0 : 1], false) || state;

				if (state) {
					// fire for both handles
					for (i = 0; i < data.handles.length; i++) {
						fireEvent('slide', i);
					}
				}
			} else if (state) {
				// Fire for a single handle
				fireEvent('slide', handleNumber);
			}
		}

		// Unbind move events on document, call callbacks.
		function end(event, data) {

			// The handle is no longer active, so remove the class.
			var active = scope_Base.querySelector('.' + cssClasses[15]),
				handleNumber = data.handles[0] === scope_Handles[0] ? 0 : 1;

			if (active !== null) {
				removeClass(active, cssClasses[15]);
			}

			// Remove cursor styles and text-selection events bound to the body.
			if (event.cursor) {
				document.body.style.cursor = '';
				document.body.removeEventListener('selectstart', document.body.noUiListener);
			}

			var d = document.documentElement;

			// Unbind the move and end events, which are added on 'start'.
			d.noUiListeners.forEach(function (c) {
				d.removeEventListener(c[0], c[1]);
			});

			// Remove dragging class.
			removeClass(scope_Target, cssClasses[12]);

			// Fire the change and set events.
			fireEvent('set', handleNumber);
			fireEvent('change', handleNumber);

			// If this is a standard handle movement, fire the end event.
			if (data.handleNumber !== undefined) {
				fireEvent('end', data.handleNumber);
			}
		}

		// Fire 'end' when a mouse or pen leaves the document.
		function documentLeave(event, data) {
			if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
				end(event, data);
			}
		}

		// Bind move events on document.
		function start(event, data) {

			var d = document.documentElement;

			// Mark the handle as 'active' so it can be styled.
			if (data.handles.length === 1) {
				addClass(data.handles[0].children[0], cssClasses[15]);

				// Support 'disabled' handles
				if (data.handles[0].hasAttribute('disabled')) {
					return false;
				}
			}

			// Fix #551, where a handle gets selected instead of dragged.
			event.preventDefault();

			// A drag should never propagate up to the 'tap' event.
			event.stopPropagation();

			// Attach the move and end events.
			var moveEvent = attach(actions.move, d, move, {
					start: event.calcPoint,
					baseSize: baseSize(),
					pageOffset: event.pageOffset,
					handles: data.handles,
					handleNumber: data.handleNumber,
					buttonsProperty: event.buttons,
					positions: [
						scope_Locations[0],
						scope_Locations[scope_Handles.length - 1]
					]
				}),
				endEvent = attach(actions.end, d, end, {
					handles: data.handles,
					handleNumber: data.handleNumber
				});

			var outEvent = attach("mouseout", d, documentLeave, {
				handles: data.handles,
				handleNumber: data.handleNumber
			});

			d.noUiListeners = moveEvent.concat(endEvent, outEvent);

			// Text selection isn't an issue on touch devices,
			// so adding cursor styles can be skipped.
			if (event.cursor) {

				// Prevent the 'I' cursor and extend the range-drag cursor.
				document.body.style.cursor = getComputedStyle(event.target).cursor;

				// Mark the target with a dragging state.
				if (scope_Handles.length > 1) {
					addClass(scope_Target, cssClasses[12]);
				}

				var f = function () {
					return false;
				};

				document.body.noUiListener = f;

				// Prevent text selection when dragging the handles.
				document.body.addEventListener('selectstart', f, false);
			}

			if (data.handleNumber !== undefined) {
				fireEvent('start', data.handleNumber);
			}
		}

		// Move closest handle to tapped location.
		function tap(event) {

			var location = event.calcPoint,
				total = 0,
				handleNumber, to;

			// The tap event shouldn't propagate up and cause 'edge' to run.
			event.stopPropagation();

			// Add up the handle offsets.
			scope_Handles.forEach(function (a) {
				total += offset(a)[options.style];
			});

			// Find the handle closest to the tapped position.
			handleNumber = (location < total / 2 || scope_Handles.length === 1) ? 0 : 1;

			location -= offset(scope_Base)[options.style];

			// Calculate the new position.
			to = (location * 100) / baseSize();

			if (!options.events.snap) {
				// Flag the slider as it is now in a transitional state.
				// Transition takes 300 ms, so re-enable the slider afterwards.
				addClassFor(scope_Target, cssClasses[14], 300);
			}

			// Support 'disabled' handles
			if (scope_Handles[handleNumber].hasAttribute('disabled')) {
				return false;
			}

			// Find the closest handle and calculate the tapped point.
			// The set handle to the new position.
			setHandle(scope_Handles[handleNumber], to);

			fireEvent('slide', handleNumber, true);
			fireEvent('set', handleNumber, true);
			fireEvent('change', handleNumber, true);

			if (options.events.snap) {
				start(event, {
					handles: [scope_Handles[handleNumber]]
				});
			}
		}

		// Fires a 'hover' event for a hovered mouse/pen position.
		function hover(event) {

			var location = event.calcPoint - offset(scope_Base)[options.style],
				to = scope_Spectrum.getStep((location * 100) / baseSize()),
				value = scope_Spectrum.fromStepping(to);

			Object.keys(scope_Events).forEach(function (targetEvent) {
				if ('hover' === targetEvent.split('.')[0]) {
					scope_Events[targetEvent].forEach(function (callback) {
						callback.call(scope_Self, value);
					});
				}
			});
		}

		// Attach events to several slider parts.
		function events(behaviour) {

			var i, drag;

			// Attach the standard drag event to the handles.
			if (!behaviour.fixed) {

				for (i = 0; i < scope_Handles.length; i += 1) {

					// These events are only bound to the visual handle
					// element, not the 'real' origin element.
					attach(actions.start, scope_Handles[i].children[0], start, {
						handles: [scope_Handles[i]],
						handleNumber: i
					});
				}
			}

			// Attach the tap event to the slider base.
			if (behaviour.tap) {

				attach(actions.start, scope_Base, tap, {
					handles: scope_Handles
				});
			}

			// Fire hover events
			if (behaviour.hover) {
				attach(actions.move, scope_Base, hover, {
					hover: true
				});
				for (i = 0; i < scope_Handles.length; i += 1) {
					['mousemove MSPointerMove pointermove'].forEach(function (eventName) {
						scope_Handles[i].children[0].addEventListener(eventName, stopPropagation, false);
					});
				}
			}

			// Make the range draggable.
			if (behaviour.drag) {

				drag = [scope_Base.querySelector('.' + cssClasses[7])];
				addClass(drag[0], cssClasses[10]);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if (behaviour.fixed) {
					drag.push(scope_Handles[(drag[0] === scope_Handles[0] ? 1 : 0)].children[0]);
				}

				drag.forEach(function (element) {
					attach(actions.start, element, start, {
						handles: scope_Handles
					});
				});
			}
		}


		// Test suggested values and apply margin, step.
		function setHandle(handle, to, noLimitOption) {

			var trigger = handle !== scope_Handles[0] ? 1 : 0,
				lowerMargin = scope_Locations[0] + options.margin,
				upperMargin = scope_Locations[1] - options.margin,
				lowerLimit = scope_Locations[0] + options.limit,
				upperLimit = scope_Locations[1] - options.limit;

			// For sliders with multiple handles,
			// limit movement to the other handle.
			// Apply the margin option by adding it to the handle positions.
			if (scope_Handles.length > 1) {
				to = trigger ? Math.max(to, lowerMargin) : Math.min(to, upperMargin);
			}

			// The limit option has the opposite effect, limiting handles to a
			// maximum distance from another. Limit must be > 0, as otherwise
			// handles would be unmoveable. 'noLimitOption' is set to 'false'
			// for the .val() method, except for pass 4/4.
			if (noLimitOption !== false && options.limit && scope_Handles.length > 1) {
				to = trigger ? Math.min(to, lowerLimit) : Math.max(to, upperLimit);
			}

			// Handle the step option.
			to = scope_Spectrum.getStep(to);

			// Limit to 0/100 for .val input, trim anything beyond 7 digits, as
			// JavaScript has some issues in its floating point implementation.
			to = limit(parseFloat(to.toFixed(7)));

			// Return false if handle can't move
			if (to === scope_Locations[trigger]) {
				return false;
			}

			// Set the handle to the new position.
			// Use requestAnimationFrame for efficient painting.
			// No significant effect in Chrome, Edge sees dramatic
			// performace improvements.
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(function () {
					handle.style[options.style] = to + '%';
				});
			} else {
				handle.style[options.style] = to + '%';
			}

			// Force proper handle stacking
			if (!handle.previousSibling) {
				removeClass(handle, cssClasses[17]);
				if (to > 50) {
					addClass(handle, cssClasses[17]);
				}
			}

			// Update locations.
			scope_Locations[trigger] = to;

			// Convert the value to the slider stepping/range.
			scope_Values[trigger] = scope_Spectrum.fromStepping(to);

			fireEvent('update', trigger);

			return true;
		}

		// Loop values from value method and apply them.
		function setValues(count, values) {

			var i, trigger, to;

			// With the limit option, we'll need another limiting pass.
			if (options.limit) {
				count += 1;
			}

			// If there are multiple handles to be set run the setting
			// mechanism twice for the first handle, to make sure it
			// can be bounced of the second one properly.
			for (i = 0; i < count; i += 1) {

				trigger = i % 2;

				// Get the current argument from the array.
				to = values[trigger];

				// Setting with null indicates an 'ignore'.
				// Inputting 'false' is invalid.
				if (to !== null && to !== false) {

					// If a formatted number was passed, attemt to decode it.
					if (typeof to === 'number') {
						to = String(to);
					}

					to = options.format.from(to);

					// Request an update for all links if the value was invalid.
					// Do so too if setting the handle fails.
					if (to === false || isNaN(to) || setHandle(scope_Handles[trigger], scope_Spectrum.toStepping(to), i === (3 - options.dir)) === false) {
						fireEvent('update', trigger);
					}
				}
			}
		}

		// Set the slider value.
		function valueSet(input) {

			var count, values = asArray(input),
				i;

			// The RTL settings is implemented by reversing the front-end,
			// internal mechanisms are the same.
			if (options.dir && options.handles > 1) {
				values.reverse();
			}

			// Animation is optional.
			// Make sure the initial values where set before using animated placement.
			if (options.animate && scope_Locations[0] !== -1) {
				addClassFor(scope_Target, cssClasses[14], 300);
			}

			// Determine how often to set the handles.
			count = scope_Handles.length > 1 ? 3 : 1;

			if (values.length === 1) {
				count = 1;
			}

			setValues(count, values);

			// Fire the 'set' event for both handles.
			for (i = 0; i < scope_Handles.length; i++) {
				fireEvent('set', i);
			}
		}

		// Get the slider value.
		function valueGet() {

			var i, retour = [];

			// Get the value from all handles.
			for (i = 0; i < options.handles; i += 1) {
				retour[i] = options.format.to(scope_Values[i]);
			}

			return inSliderOrder(retour);
		}

		// Removes classes from the root and empties it.
		function destroy() {
			cssClasses.forEach(function (cls) {
				if (!cls) {
					return;
				} // Ignore empty classes
				removeClass(scope_Target, cls);
			});
			scope_Target.innerHTML = '';
			delete scope_Target.noUiSlider;
		}

		// Get the current step size for the slider.
		function getCurrentStep() {

			// Check all locations, map them to their stepping point.
			// Get the step point, then find it in the input list.
			var retour = scope_Locations.map(function (location, index) {

				var step = scope_Spectrum.getApplicableStep(location),

					// As per #391, the comparison for the decrement step can have some rounding issues.
					// Round the value to the precision used in the step.
					stepDecimals = countDecimals(String(step[2])),

					// Get the current numeric value
					value = scope_Values[index],

					// To move the slider 'one step up', the current step value needs to be added.
					// Use null if we are at the maximum slider value.
					increment = location === 100 ? null : step[2],

					// Going 'one step down' might put the slider in a different sub-range, so we
					// need to switch between the current or the previous step.
					prev = Number((value - step[2]).toFixed(stepDecimals)),

					// If the value fits the step, return the current step value. Otherwise, use the
					// previous step. Return null if the slider is at its minimum value.
					decrement = location === 0 ? null : (prev >= step[1]) ? step[2] : (step[0] || false);

				return [decrement, increment];
			});

			// Return values in the proper order.
			return inSliderOrder(retour);
		}

		// Attach an event to this slider, possibly including a namespace
		function bindEvent(namespacedEvent, callback) {
			scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
			scope_Events[namespacedEvent].push(callback);

			// If the event bound is 'update,' fire it immediately for all handles.
			if (namespacedEvent.split('.')[0] === 'update') {
				scope_Handles.forEach(function (a, index) {
					fireEvent('update', index);
				});
			}
		}

		// Undo attachment of event
		function removeEvent(namespacedEvent) {

			var event = namespacedEvent.split('.')[0],
				namespace = namespacedEvent.substring(event.length);

			Object.keys(scope_Events).forEach(function (bind) {

				var tEvent = bind.split('.')[0],
					tNamespace = bind.substring(tEvent.length);

				if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
					delete scope_Events[bind];
				}
			});
		}

		// Updateable: margin, limit, step, range, animate, snap
		function updateOptions(optionsToUpdate) {

			var v = valueGet(),
				i, newOptions = testOptions({
					start: [0, 0],
					margin: optionsToUpdate.margin,
					limit: optionsToUpdate.limit,
					step: optionsToUpdate.step,
					range: optionsToUpdate.range,
					animate: optionsToUpdate.animate,
					snap: optionsToUpdate.snap === undefined ? options.snap : optionsToUpdate.snap
				});

			['margin', 'limit', 'step', 'range', 'animate'].forEach(function (name) {
				if (optionsToUpdate[name] !== undefined) {
					options[name] = optionsToUpdate[name];
				}
			});

			scope_Spectrum = newOptions.spectrum;

			// Invalidate the current positioning so valueSet forces an update.
			scope_Locations = [-1, -1];
			valueSet(v);

			for (i = 0; i < scope_Handles.length; i++) {
				fireEvent('update', i);
			}
		}


		// Throw an error if the slider was already initialized.
		if (scope_Target.noUiSlider) {
			throw new Error('Slider was already initialized.');
		}

		// Create the base element, initialise HTML and set classes.
		// Add handles and links.
		scope_Base = addSlider(options.dir, options.ort, scope_Target);
		scope_Handles = addHandles(options.handles, options.dir, scope_Base);

		// Set the connect classes.
		addConnection(options.connect, scope_Target, scope_Handles);

		if (options.pips) {
			pips(options.pips);
		}

		if (options.tooltips) {
			tooltips();
		}

		scope_Self = {
			destroy: destroy,
			steps: getCurrentStep,
			on: bindEvent,
			off: removeEvent,
			get: valueGet,
			set: valueSet,
			updateOptions: updateOptions
		};

		// Attach user events.
		events(options.events);

		return scope_Self;

	}


	// Run the standard initializer
	function initialize(target, originalOptions) {

		if (!target.nodeName) {
			throw new Error('noUiSlider.create requires a single element.');
		}

		// Test the options and create the slider environment;
		var options = testOptions(originalOptions, target),
			slider = closure(target, options);

		// Use the public value method to set the start values.
		slider.set(options.start);

		target.noUiSlider = slider;
		return slider;
	}

	// Use an object instead of a function for future expansibility;
	return {
		create: initialize
	};

}));(function (factory) {
	window.wNumb = factory();
})(function () {
	"use strict";

	var FormatOptions = [
		"decimals",
		"thousand",
		"mark",
		"prefix",
		"suffix",
		"encoder",
		"decoder",
		"negativeBefore",
		"negative",
		"edit",
		"undo",
	];

	// General

	// Reverse a string
	function strReverse(a) {
		return a.split("").reverse().join("");
	}

	// Check if a string starts with a specified prefix.
	function strStartsWith(input, match) {
		return input.substring(0, match.length) === match;
	}

	// Check is a string ends in a specified suffix.
	function strEndsWith(input, match) {
		return input.slice(-1 * match.length) === match;
	}

	// Throw an error if formatting options are incompatible.
	function throwEqualError(F, a, b) {
		if ((F[a] || F[b]) && F[a] === F[b]) {
			throw new Error(a);
		}
	}

	// Check if a number is finite and not NaN
	function isValidNumber(input) {
		return typeof input === "number" && isFinite(input);
	}

	// Provide rounding-accurate toFixed method.
	// Borrowed: http://stackoverflow.com/a/21323330/775265
	function toFixed(value, exp) {
		value = value.toString().split("e");
		value = Math.round(
			+(value[0] + "e" + (value[1] ? +value[1] + exp : exp))
		);
		value = value.toString().split("e");
		return (+(
			value[0] +
			"e" +
			(value[1] ? +value[1] - exp : -exp)
		)).toFixed(exp);
	}

	// Formatting

	// Accept a number as input, output formatted string.
	function formatTo(
		decimals,
		thousand,
		mark,
		prefix,
		suffix,
		encoder,
		decoder,
		negativeBefore,
		negative,
		edit,
		undo,
		input
	) {
		var originalInput = input,
			inputIsNegative,
			inputPieces,
			inputBase,
			inputDecimals = "",
			output = "";

		// Apply user encoder to the input.
		// Expected outcome: number.
		if (encoder) {
			input = encoder(input);
		}

		// Stop if no valid number was provided, the number is infinite or NaN.
		if (!isValidNumber(input)) {
			return false;
		}

		// Rounding away decimals might cause a value of -0
		// when using very small ranges. Remove those cases.
		if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
			input = 0;
		}

		// Formatting is done on absolute numbers,
		// decorated by an optional negative symbol.
		if (input < 0) {
			inputIsNegative = true;
			input = Math.abs(input);
		}

		// Reduce the number of decimals to the specified option.
		if (decimals !== false) {
			input = toFixed(input, decimals);
		}

		// Transform the number into a string, so it can be split.
		input = input.toString();

		// Break the number on the decimal separator.
		if (input.indexOf(".") !== -1) {
			inputPieces = input.split(".");

			inputBase = inputPieces[0];

			if (mark) {
				inputDecimals = mark + inputPieces[1];
			}
		} else {
			// If it isn't split, the entire number will do.
			inputBase = input;
		}

		// Group numbers in sets of three.
		if (thousand) {
			inputBase = strReverse(inputBase).match(/.{1,3}/g);
			inputBase = strReverse(inputBase.join(strReverse(thousand)));
		}

		// If the number is negative, prefix with negation symbol.
		if (inputIsNegative && negativeBefore) {
			output += negativeBefore;
		}

		// Prefix the number
		if (prefix) {
			output += prefix;
		}

		// Normal negative option comes after the prefix. Defaults to '-'.
		if (inputIsNegative && negative) {
			output += negative;
		}

		// Append the actual number.
		output += inputBase;
		output += inputDecimals;

		// Apply the suffix.
		if (suffix) {
			output += suffix;
		}

		// Run the output through a user-specified post-formatter.
		if (edit) {
			output = edit(output, originalInput);
		}

		// All done.
		return output;
	}

	// Accept a sting as input, output decoded number.
	function formatFrom(
		decimals,
		thousand,
		mark,
		prefix,
		suffix,
		encoder,
		decoder,
		negativeBefore,
		negative,
		edit,
		undo,
		input
	) {
		var originalInput = input,
			inputIsNegative,
			output = "";

		// User defined pre-decoder. Result must be a non empty string.
		if (undo) {
			input = undo(input);
		}

		// Test the input. Can't be empty.
		if (!input || typeof input !== "string") {
			return false;
		}

		// If the string starts with the negativeBefore value: remove it.
		// Remember is was there, the number is negative.
		if (negativeBefore && strStartsWith(input, negativeBefore)) {
			input = input.replace(negativeBefore, "");
			inputIsNegative = true;
		}

		// Repeat the same procedure for the prefix.
		if (prefix && strStartsWith(input, prefix)) {
			input = input.replace(prefix, "");
		}

		// And again for negative.
		if (negative && strStartsWith(input, negative)) {
			input = input.replace(negative, "");
			inputIsNegative = true;
		}

		// Remove the suffix.
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
		if (suffix && strEndsWith(input, suffix)) {
			input = input.slice(0, -1 * suffix.length);
		}

		// Remove the thousand grouping.
		if (thousand) {
			input = input.split(thousand).join("");
		}

		// Set the decimal separator back to period.
		if (mark) {
			input = input.replace(mark, ".");
		}

		// Prepend the negative symbol.
		if (inputIsNegative) {
			output += "-";
		}

		// Add the number
		output += input;

		// Trim all non-numeric characters (allow '.' and '-');
		output = output.replace(/[^0-9\.\-.]/g, "");

		// The value contains no parse-able number.
		if (output === "") {
			return false;
		}

		// Covert to number.
		output = Number(output);

		// Run the user-specified post-decoder.
		if (decoder) {
			output = decoder(output);
		}

		// Check is the output is valid, otherwise: return false.
		if (!isValidNumber(output)) {
			return false;
		}

		return output;
	}

	// Framework

	// Validate formatting options
	function validate(inputOptions) {
		var i,
			optionName,
			optionValue,
			filteredOptions = {};

		if (inputOptions["suffix"] === undefined) {
			inputOptions["suffix"] = inputOptions["postfix"];
		}

		for (i = 0; i < FormatOptions.length; i += 1) {
			optionName = FormatOptions[i];
			optionValue = inputOptions[optionName];

			if (optionValue === undefined) {
				// Only default if negativeBefore isn't set.
				if (
					optionName === "negative" &&
					!filteredOptions.negativeBefore
				) {
					filteredOptions[optionName] = "-";
					// Don't set a default for mark when 'thousand' is set.
				} else if (
					optionName === "mark" &&
					filteredOptions.thousand !== "."
				) {
					filteredOptions[optionName] = ".";
				} else {
					filteredOptions[optionName] = false;
				}

				// Floating points in JS are stable up to 7 decimals.
			} else if (optionName === "decimals") {
				if (optionValue >= 0 && optionValue < 8) {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}

				// These options, when provided, must be functions.
			} else if (
				optionName === "encoder" ||
				optionName === "decoder" ||
				optionName === "edit" ||
				optionName === "undo"
			) {
				if (typeof optionValue === "function") {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}

				// Other options are strings.
			} else {
				if (typeof optionValue === "string") {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}
			}
		}

		// Some values can't be extracted from a
		// string if certain combinations are present.
		throwEqualError(filteredOptions, "mark", "thousand");
		throwEqualError(filteredOptions, "prefix", "negative");
		throwEqualError(filteredOptions, "prefix", "negativeBefore");

		return filteredOptions;
	}

	// Pass all options as function arguments
	function passAll(options, method, input) {
		var i,
			args = [];

		// Add all options in order of FormatOptions
		for (i = 0; i < FormatOptions.length; i += 1) {
			args.push(options[FormatOptions[i]]);
		}

		// Append the input, then call the method, presenting all
		// options as arguments.
		args.push(input);
		return method.apply("", args);
	}

	function wNumb(options) {
		if (!(this instanceof wNumb)) {
			return new wNumb(options);
		}

		if (typeof options !== "object") {
			return;
		}

		options = validate(options);

		// Call 'formatTo' with proper arguments.
		this.to = function (input) {
			return passAll(options, formatTo, input);
		};

		// Call 'formatFrom' with proper arguments.
		this.from = function (input) {
			return passAll(options, formatFrom, input);
		};
	}

	return wNumb;
});/**
 * Extension for filter price slider
 */

(function (klevu) {
    /**
     * Function to initialize slider
     * @param {*} data
     * @param {*} scope
     */
    var regex = /[+-]?\d+(?:\.\d+)?/;

    function initSlider(data, scope) {
        var self = this;
        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
        var priceSliderList = klevu.dom.find(".kuPriceSlider [data-querykey]", target);
        if (priceSliderList) {
            priceSliderList.forEach(function (ele) {
                var sliderData;
                var querykey = ele.getAttribute("data-querykey");
                var contentData = data.template.query[querykey];
                if (contentData) {
                    contentData.filters.forEach(function (filter) {
                        if (
                            filter.key == scope.priceSliderFilterReqQuery.key &&
                            filter.type == "SLIDER"
                        ) {
                            sliderData = filter;
                        }
                    });
                }
                if (sliderData) {
                    var currSymbol = "";
                    var currSymbolAtEnd = false;
                    var productListResults = klevu.getObjectPath(scope.data, "template.query.productList.result");
                    if (
                        typeof klevu.search.modules.kmcInputs.base.getPriceFormatterObject == "function" &&
                        productListResults && productListResults.length
                    ) {
                        var currencyFormatter = klevu.search.modules.kmcInputs.base.getPriceFormatterObject(
                            scope.data.template.query.productList
                            .result[0].currency
                        );
                        if (currencyFormatter) {
                            currSymbol = currencyFormatter.string;
                            var currSymbolHtml = document.createElement("textarea");
                            currSymbolHtml.innerHTML = currSymbol;
                            currSymbol = currSymbolHtml.value;
                            scope.recentCurrencySymbol = currSymbol;
                            currSymbolAtEnd = currencyFormatter.atEnd ?
                                currencyFormatter.atEnd :
                                false;
                        }
                    } else {
                        if (currSymbol == "" && typeof scope.recentCurrencySymbol != "undefined" && scope.recentCurrencySymbol) {
                            currSymbol = scope.recentCurrencySymbol;
                        }
                    }

                    var formatObj = {};
                    if (currSymbolAtEnd === true) {
                        formatObj.suffix = " " + currSymbol;
                    } else if (currSymbolAtEnd === false) {
                        formatObj.prefix = currSymbol + " ";
                    }
                    formatObj.decimals = 0;
                    if (ele.slider) {
                        ele.slider.destroy();
                    }
                    ele.sliderData = sliderData;
                    if (sliderData.start === undefined || sliderData.start == null) {
                        sliderData.start = sliderData.min;
                    }
                    if (sliderData.end === undefined || sliderData.end == null) {
                        sliderData.end = sliderData.max;
                    }
                    ele.slider = noUiSlider.create(ele, {
                        start: [Math.floor(sliderData.start), Math.ceil(sliderData.end)],
                        connect: true,
                        tooltips: [true, true],
                        range: {
                            min: [Math.floor(sliderData.min)],
                            max: [Math.ceil(sliderData.max)],
                        },
                        format: wNumb(formatObj),
                    });
                    var isLeftScroll = false;
                    var toolTipMergePointValue = (Math.ceil(sliderData.max) - Math.ceil(sliderData.min)) / 2;

                    ele.slider.on("update", function (values, handle, intValues) {
                        isLeftScroll = (handle === 0) ? true : false;
                        var leftNodeValue = intValues[0];
                        var leftNodeTooltip = klevu.dom.find(".noUi-handle-lower .noUi-tooltip", ele)[0];
                        leftNodeTooltip.textContent = this.get()[0];
                        leftNodeTooltip.style.display = "";
                        leftNodeTooltip.classList.remove("kuMergedTooltip");

                        var rightNodeValue = intValues[1];
                        var rightNodeTooltip = klevu.dom.find(".noUi-handle-upper .noUi-tooltip", ele)[0];
                        rightNodeTooltip.textContent = this.get()[1];
                        rightNodeTooltip.style.display = "";
                        rightNodeTooltip.classList.remove("kuMergedTooltip");

                        if ((rightNodeValue - leftNodeValue) <= toolTipMergePointValue) {
                            var targetTooltip = (isLeftScroll) ? rightNodeTooltip : leftNodeTooltip;
                            var leftNodeDiff = intValues[0] - Math.ceil(sliderData.min);
                            var rightNodeDiff = Math.ceil(sliderData.max) - intValues[1];
                            if (leftNodeDiff > rightNodeDiff) {
                                targetTooltip = rightNodeTooltip;
                                leftNodeTooltip.style.display = "none";
                            } else {
                                targetTooltip = leftNodeTooltip;
                                rightNodeTooltip.style.display = "none";
                            }
                            if ((rightNodeValue - leftNodeValue) === 0) {
                                targetTooltip.textContent = this.get()[1];
                            } else {
                                targetTooltip.textContent = this.get().join(" - ");
                                targetTooltip.classList.add("kuMergedTooltip");
                            }
                        }
                    });
                    ele.slider.on("change", function (values, handle) {
                        self.sliderOnUpdateEvent(values, querykey, data, ele, scope);
                    });
                }
            });
        }
    }

    /**
     * Slider filter on value change event
     * @param {*} values
     * @param {*} querykey
     * @param {*} data
     * @param {*} ele
     */
    function sliderOnUpdateEvent(values, querykey, data, ele, scope) {
        var min = Math.ceil(regex.exec(values[0])[0]);
        var max = Math.ceil(regex.exec(values[1])[0]);

        var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");

        /** Get Scope */
        var sliderFilter = klevu.dom.helpers.getClosest(
            klevu.dom.find(".klevuSliderFilter", target)[0],
            ".klevuTarget"
        );

        var elScope = sliderFilter.kElem;
        elScope.kScope.data = elScope.kObject.resetData(elScope.kElem);

        var options = klevu.dom.helpers.getClosest(
            klevu.dom.find(".klevuSliderFilter", target)[0],
            ".klevuMeta"
        );

        var localQuery = data.localOverrides.query[querykey];
        var localFilters = localQuery.filters;
        var sliderFilterReqObj = {
            key: ele.sliderData.key,
            settings: {
                singleSelect: "false",
            },
            values: [min.toString(), max.toString()],
        };
        if (!localFilters) {
            localQuery.filters = {};
            localQuery.filters.applyFilters = {};
            localQuery.filters.applyFilters.filters = [sliderFilterReqObj];
        } else {
            var applyFilters = localFilters.applyFilters.filters;
            var isUpdated = false;
            if (applyFilters) {
                applyFilters.forEach(function (filter) {
                    if (filter.key == ele.sliderData.key) {
                        isUpdated = true;
                        filter.values = [min.toString(), max.toString()];
                    }
                });
                if (!isUpdated) {
                    applyFilters.push(sliderFilterReqObj);
                }
            } else {
                localQuery.filters.applyFilters.filters = [sliderFilterReqObj];
            }
        }

        /** reset offset after filter change */
        klevu.setObjectPath(
            elScope.kScope.data,
            "localOverrides.query." + options.dataset.section + ".settings.offset",
            0
        );
        klevu.event.fireChain(
            elScope.kScope,
            "chains.events.keyUp",
            elScope,
            elScope.kScope.data,
            event
        );
    }

    var filterPriceSlider = {
        initSlider: initSlider,
        sliderOnUpdateEvent: sliderOnUpdateEvent,
    };

    klevu.extend(true, klevu.search.modules, {
        filterPriceSlider: {
            base: filterPriceSlider,
            build: true,
        },
    });
})(klevu);

/**
 * filterPriceSlider module build event
 */
klevu.coreEvent.build({
    name: "filterPriceSliderModuleBuild",
    fire: function () {
        if (
            !klevu.search.modules ||
            !klevu.search.modules.filterPriceSlider ||
            !klevu.search.modules.filterPriceSlider.build
        ) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30,
});(function (klevu) {
    klevu.extend(true, klevu.search.modules, {
        infiniteScroll: {
            base: {
                sendLoadMoreItemsRequest: function (event, data, lastScrollPosition) {
                    var element = event.target;
                    var target = klevu.dom.helpers.getClosest(element, ".klevuTarget");
                    if (target === null) {
                        return;
                    }
                    var options = klevu.dom.helpers.getClosest(element, ".klevuMeta");
                    var resultMeta = klevu.getObjectPath(data.template, "query." + options.dataset.section + ".meta");
                    var noOfResults = 0;
                    var offset = 0;
                    if (resultMeta) {
                        noOfResults = resultMeta.noOfResults;
                        offset = Number(resultMeta.offset) + Number(noOfResults);
                        if (offset > Number(resultMeta.totalResultsFound)) {
                            return;
                        }
                    }

                    if (!data.context.existingResponse) {
                        data.context.existingResponse = [];
                    }

                    var matchedExistingResponse = [];
                    var existingResponse = klevu.getObjectPath(data, "response.current.queryResults");
                    if (existingResponse && existingResponse.length) {
                        klevu.each(existingResponse, function (key, response) {
                            if (response.id === options.dataset.section) {
                                matchedExistingResponse = response.records;
                            }
                        });
                    }

                    var scope = target.kElem;
                    scope.kScope.data = scope.kObject.resetData(scope.kElem);
                    scope.kScope.data.context.keyCode = 0;
                    scope.kScope.data.context.eventObject = event;
                    scope.kScope.data.context.event = "keyUp";
                    scope.kScope.data.context.triggeredFromInfiniteScroll = true;
                    scope.kScope.data.context.infiniteScrollSection = options.dataset.section;
                    scope.kScope.data.context.existingResponse = matchedExistingResponse;
                    scope.kScope.data.context.windowScrollTriggeredForInfiniteScroll = false;
                    if (lastScrollPosition) {
                        scope.kScope.data.context.quickInfiniteScrollLastScrollPosition = lastScrollPosition;
                    }
                    scope.kScope.data.context.preventDefault = false;

                    klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + options.dataset.section + ".settings.offset", parseInt(offset));
                    klevu.event.fireChain(scope.kScope, "chains.events.keyUp", scope, scope.kScope.data, event);
                }
            },
            build: true
        }
    });
})(klevu);klevu.extend(true, klevu.search.modules, {
    locale: {
        globalTranslations: {
            en: {
                "We're sorry, no results found for": "We're sorry, no results found for",
                "Please type in at least 3 letters...": "Please type in at least 3 letters...",
                "Add to cart": "Add to cart"
            },
            ar: {
                "We're sorry, no results found for": "نحن آسفون، لم يتم العثور على نتائج ل",
                "Please type in at least 3 letters...": "يرجى كتابة 3 أحرف على الأقل ...",
                "Add to cart": "أضف إلى السلة"
            },
            bg: {
                "We're sorry, no results found for": "Съжаляваме, няма намерени резултати за",
                "Please type in at least 3 letters...": "Моля, въведете най-малко 3 букви ...",
                "Add to cart": "Добави в кошницата"
            },
            da: {
                "We're sorry, no results found for": "Vi beklager, ingen resultater fundet for",
                "Please type in at least 3 letters...": "Indtast venligst mindst 3 bogstaver ...",
                "Add to cart": "Tilføj til kurv"
            },
            de: {
                "We're sorry, no results found for": "Es tut uns leid, keine Ergebnisse gefunden für",
                "Please type in at least 3 letters...": "Bitte geben Sie mindestens 3 Buchstaben ein ...",
                "Add to cart": "In den Warenkorb legen"
            },
            el: {
                "We're sorry, no results found for": "Λυπούμαστε, δεν βρέθηκαν αποτελέσματα",
                "Please type in at least 3 letters...": "Πληκτρολογήστε τουλάχιστον 3 γράμματα ...",
                "Add to cart": "Προσθήκη στο καλάθι"
            },
            es: {
                "We're sorry, no results found for": "Lo sentimos, no se han encontrado resultados para",
                "Please type in at least 3 letters...": "Por favor, escriba al menos 3 letras ...",
                "Add to cart": "Añadir a la cesta"
            },
            et: {
                "We're sorry, no results found for": "Vabandame, tulemusi ei leitud",
                "Please type in at least 3 letters...": "Palun sisesta vähemalt 3 tähte ...",
                "Add to cart": "Lisa ostukorvi"
            },
            fa: {
                "We're sorry, no results found for": "متاسفیم، هیچ نتیجه ای برای آن یافت نشد",
                "Please type in at least 3 letters...": "لطفا حداقل 3 حرف را تایپ کنید ...",
                "Add to cart": "افزودن به سبد خرید"
            },
            fi: {
                "We're sorry, no results found for": "Pahoittelemme, että tuloksia ei löytynyt",
                "Please type in at least 3 letters...": "Kirjoita vähintään 3 kirjainta ...",
                "Add to cart": "Lisää ostoskoriin"
            },
            fr: {
                "We're sorry, no results found for": "Nous sommes désolés, aucun résultat trouvé pour",
                "Please type in at least 3 letters...": "Veuillez taper au moins 3 lettres ...",
                "Add to cart": "Ajouter au panier"
            },
            he: {
                "We're sorry, no results found for": "מצטערים, לא נמצאו תוצאות",
                "Please type in at least 3 letters...": "אנא הקלד לפחות 3 אותיות ...",
                "Add to cart": "הוסף לעגלה"
            },
            hr: {
                "We're sorry, no results found for": "Žao nam je, nema pronađenih rezultata",
                "Please type in at least 3 letters...": "Upišite najmanje 3 slova ...",
                "Add to cart": "Dodaj u košaricu"
            },
            hu: {
                "We're sorry, no results found for": "Sajnáljuk, nem találtak eredményeket",
                "Please type in at least 3 letters...": "Kérjük, írja be legalább 3 betűt ...",
                "Add to cart": "Kosárba"
            },
            is: {
                "We're sorry, no results found for": "Því miður, engar niðurstöður fundust fyrir",
                "Please type in at least 3 letters...": "Vinsamlegast sláðu inn að minnsta kosti 3 stafir ...",
                "Add to cart": "Setja í körfu"
            },
            it: {
                "We're sorry, no results found for": "Siamo spiacenti, nessun risultato trovato per",
                "Please type in at least 3 letters...": "Si prega di digitare almeno 3 lettere ...",
                "Add to cart": "Aggiungi al carrello"
            },
            ja: {
                "We're sorry, no results found for": "申し訳ありませんが、結果は見つかりませんでした",
                "Please type in at least 3 letters...": "少なくとも3文字を入力してください...",
                "Add to cart": "カートに追加"
            },
            ko: {
                "We're sorry, no results found for": "죄송합니다. 결과가 없습니다",
                "Please type in at least 3 letters...": "적어도 3 글자를 입력하십시오 ...",
                "Add to cart": "장바구니에 담기"
            },
            lv: {
                "We're sorry, no results found for": "Atvainojamies, nav atrasti rezultāti",
                "Please type in at least 3 letters...": "Lūdzu, ierakstiet vismaz 3 burtus ...",
                "Add to cart": "Pievienot grozam"
            },
            nb: {
                "We're sorry, no results found for": "Vi beklager, ingen resultater funnet for",
                "Please type in at least 3 letters...": "Vennligst skriv inn minst 3 bokstaver ...",
                "Add to cart": "Legg i handlekurv"
            },
            nl: {
                "We're sorry, no results found for": "Het spijt ons, geen resultaten gevonden voor",
                "Please type in at least 3 letters...": "Typ alstublieft in ten minste 3 letters ...",
                "Add to cart": "Voeg toe aan winkelkar"
            },
            no: {
                "We're sorry, no results found for": "Vi beklager, ingen resultater funnet for",
                "Please type in at least 3 letters...": "Vennligst skriv inn minst 3 bokstaver ...",
                "Add to cart": "Legg i handlekurv"
            },
            pl: {
                "We're sorry, no results found for": "Przykro nam, nie znaleziono żadnych wyników",
                "Please type in at least 3 letters...": "Wpisz co najmniej 3 litery ...",
                "Add to cart": "Dodaj do koszyka"
            },
            pt: {
                "We're sorry, no results found for": "Lamentamos, nenhum resultado encontrado para",
                "Please type in at least 3 letters...": "Por favor, digite pelo menos 3 letras ...",
                "Add to cart": "Adicionar ao Carrinho"
            },
            ro: {
                "We're sorry, no results found for": "Ne pare rău, nu au fost găsite rezultate",
                "Please type in at least 3 letters...": "Introduceți cel puțin 3 litere ...",
                "Add to cart": "Adaugă în coș"
            },
            ru: {
                "We're sorry, no results found for": "Извините, результатов не найдено для",
                "Please type in at least 3 letters...": "Пожалуйста, введите не менее 3 букв ...",
                "Add to cart": "Добавить в корзину"
            },
            sk: {
                "We're sorry, no results found for": "Je nám ľúto, nie sú nájdené žiadne výsledky",
                "Please type in at least 3 letters...": "Zadajte aspoň 3 písmená ...",
                "Add to cart": "Pridať do košíka"
            },
            sl: {
                "We're sorry, no results found for": "Žal nam je, ni najdenih rezultatov",
                "Please type in at least 3 letters...": "Vnesite vsaj 3 črke ...",
                "Add to cart": "Dodaj v voziček"
            },
            sr: {
                "We're sorry, no results found for": "Жао нам је, нема резултата за",
                "Please type in at least 3 letters...": "Унесите најмање 3 слова ...",
                "Add to cart": "Додај у колица"
            },
            sv: {
                "We're sorry, no results found for": "Vi är ledsna, inga resultat hittades för",
                "Please type in at least 3 letters...": "Vänligen skriv in minst 3 bokstäver ...",
                "Add to cart": "Lägg till i kundvagn"
            },
            tr: {
                "We're sorry, no results found for": "Üzgünüz, sonuç bulunamadı",
                "Please type in at least 3 letters...": "Lütfen en az 3 harf girin ...",
                "Add to cart": "Sepete ekle"
            },
            vi: {
                "We're sorry, no results found for": "Chúng tôi xin lỗi, không tìm thấy kết quả nào cho",
                "Please type in at least 3 letters...": "Vui lòng nhập ít nhất 3 chữ cái ...",
                "Add to cart": "Thêm vào giỏ hàng"
            },
            zh: {
                "We're sorry, no results found for": "很抱歉，没有找到结果",
                "Please type in at least 3 letters...": "请输入至少3个字母...",
                "Add to cart": "添加到购物车"
            }
        }
    }
});

klevu.extend(true, klevu.search.modules, {
    locale: {
        globalTranslations: {
            en: {
                "<b>%s</b> productList": "<b>%s</b> Products",
                "<b>%s</b> contentList": "<b>%s</b> Other results",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Other results"
            },
            ar: {
                "<b>%s</b> productList": "<b>%s</b> منتجات",
                "<b>%s</b> contentList": "<b>%s</b> النتائج الأخرى",
                "<b>%s</b> cmsCompressed": "<b>%s</b> النتائج الأخرى"
            },
            bg: {
                "<b>%s</b> productList": "<b>%s</b> Продукти",
                "<b>%s</b> contentList": "<b>%s</b> Други резултати",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Други резултати"
            },
            da: {
                "<b>%s</b> productList": "<b>%s</b> Produkter",
                "<b>%s</b> contentList": "<b>%s</b> Andre resultater",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Andre resultater"
            },
            de: {
                "<b>%s</b> productList": "<b>%s</b> Produkte",
                "<b>%s</b> contentList": "<b>%s</b> Weitere Ergebnisse",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Weitere Ergebnisse"
            },
            el: {
                "<b>%s</b> productList": "<b>%s</b> Προϊόντα",
                "<b>%s</b> contentList": "<b>%s</b> Άλλα αποτελέσματα",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Άλλα αποτελέσματα"
            },
            es: {
                "<b>%s</b> productList": "<b>%s</b> productos",
                "<b>%s</b> contentList": "<b>%s</b> otros resultados",
                "<b>%s</b> cmsCompressed": "<b>%s</b> otros resultados"
            },
            et: {
                "<b>%s</b> productList": "<b>%s</b> Tooted",
                "<b>%s</b> contentList": "<b>%s</b> muud tulemused",
                "<b>%s</b> cmsCompressed": "<b>%s</b> muud tulemused"
            },
            fa: {
                "<b>%s</b> productList": "<b>%s</b> محصولات",
                "<b>%s</b> contentList": "<b>%s</b> نتایج دیگر",
                "<b>%s</b> cmsCompressed": "<b>%s</b> نتایج دیگر"
            },
            fi: {
                "<b>%s</b> productList": "<b>%s</b> Tuotteet",
                "<b>%s</b> contentList": "<b>%s</b> Muut tulokset",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Muut tulokset"
            },
            fr: {
                "<b>%s</b> productList": "<b>%s</b> Des produits",
                "<b>%s</b> contentList": "<b>%s</b> autres résultats",
                "<b>%s</b> cmsCompressed": "<b>%s</b> autres résultats"
            },
            he: {
                "<b>%s</b> productList": "<b>%s</b> מוצרים",
                "<b>%s</b> contentList": "<b>%s</b> תוצאות נוספות",
                "<b>%s</b> cmsCompressed": "<b>%s</b> תוצאות נוספות"
            },
            hr: {
                "<b>%s</b> productList": "<b>%s</b> proizvodi",
                "<b>%s</b> contentList": "<b>%s</b> Ostali rezultati",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Ostali rezultati"
            },
            hu: {
                "<b>%s</b> productList": "<b>%s</b> Termékek",
                "<b>%s</b> contentList": "<b>%s</b> További találatok",
                "<b>%s</b> cmsCompressed": "<b>%s</b> További találatok"
            },
            is: {
                "<b>%s</b> productList": "<b>%s</b> vörur",
                "<b>%s</b> contentList": "<b>%s</b> aðrar niðurstöður",
                "<b>%s</b> cmsCompressed": "<b>%s</b> aðrar niðurstöður"
            },
            it: {
                "<b>%s</b> productList": "<b>%s</b> Prodotti",
                "<b>%s</b> contentList": "<b>%s</b> altri risultati",
                "<b>%s</b> cmsCompressed": "<b>%s</b> altri risultati"
            },
            ja: {
                "<b>%s</b> productList": "<b>%s</b> プロダクト",
                "<b>%s</b> contentList": "<b>%s</b> その他の結果",
                "<b>%s</b> cmsCompressed": "<b>%s</b> その他の結果"
            },
            ko: {
                "<b>%s</b> productList": "<b>%s</b> 제품",
                "<b>%s</b> contentList": "<b>%s</b> 기타 결과",
                "<b>%s</b> cmsCompressed": "<b>%s</b> 기타 결과"
            },
            lv: {
                "<b>%s</b> productList": "<b>%s</b> Produkcija",
                "<b>%s</b> contentList": "<b>%s</b> Citi rezultāti",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Citi rezultāti"
            },
            nb: {
                "<b>%s</b> productList": "<b>%s</b> Produkter",
                "<b>%s</b> contentList": "<b>%s</b> andre resultater",
                "<b>%s</b> cmsCompressed": "<b>%s</b> andre resultater"
            },
            nl: {
                "<b>%s</b> productList": "<b>%s</b> producten",
                "<b>%s</b> contentList": "<b>%s</b> andere resultaten",
                "<b>%s</b> cmsCompressed": "<b>%s</b> andere resultaten"
            },
            no: {
                "<b>%s</b> productList": "<b>%s</b> Produkter",
                "<b>%s</b> contentList": "<b>%s</b> andre resultater",
                "<b>%s</b> cmsCompressed": "<b>%s</b> andre resultater"
            },
            pl: {
                "<b>%s</b> productList": "<b>%s</b> Produkty",
                "<b>%s</b> contentList": "<b>%s</b> Inne wyniki",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Inne wyniki"
            },
            pt: {
                "<b>%s</b> productList": "<b>%s</b> Produtos",
                "<b>%s</b> contentList": "<b>%s</b> outros resultados",
                "<b>%s</b> cmsCompressed": "<b>%s</b> outros resultados"
            },
            ro: {
                "<b>%s</b> productList": "<b>%s</b> Produse",
                "<b>%s</b> contentList": "<b>%s</b> alte rezultate",
                "<b>%s</b> cmsCompressed": "<b>%s</b> alte rezultate"
            },
            ru: {
                "<b>%s</b> productList": "<b>%s</b> Продукты",
                "<b>%s</b> contentList": "<b>%s</b> Другие результаты",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Другие результаты"
            },
            sk: {
                "<b>%s</b> productList": "<b>%s</b> Produkty",
                "<b>%s</b> contentList": "<b>%s</b> ďalšie výsledky",
                "<b>%s</b> cmsCompressed": "<b>%s</b> ďalšie výsledky"
            },
            sl: {
                "<b>%s</b> productList": "<b>%s</b> izdelki",
                "<b>%s</b> contentList": "<b>%s</b> Drugi rezultati",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Drugi rezultati"
            },
            sr: {
                "<b>%s</b> productList": "<b>%s</b> Производи",
                "<b>%s</b> contentList": "<b>%s</b> Остали резултати",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Остали резултати"
            },
            sv: {
                "<b>%s</b> productList": "<b>%s</b> Produkter",
                "<b>%s</b> contentList": "<b>%s</b> andra resultat",
                "<b>%s</b> cmsCompressed": "<b>%s</b> andra resultat"
            },
            tr: {
                "<b>%s</b> productList": "<b>%s</b> Ürün:% s",
                "<b>%s</b> contentList": "<b>%s</b> Diğer sonuçlar",
                "<b>%s</b> cmsCompressed": "<b>%s</b> Diğer sonuçlar"
            },
            vi: {
                "<b>%s</b> productList": "<b>%s</b> Các sản phẩm",
                "<b>%s</b> contentList": "<b>%s</b> các kết quả khác",
                "<b>%s</b> cmsCompressed": "<b>%s</b> các kết quả khác"
            },
            zh: {
                "<b>%s</b> productList": "<b>%s</b> 产品",
                "<b>%s</b> contentList": "<b>%s</b> 其他比赛结果",
                "<b>%s</b> cmsCompressed": "<b>%s</b> 其他比赛结果"
            }
        }
    }
});klevu.extend(true, klevu.search.modules, {
	locale: {
		globalTranslations: {
			en: {
				"Color Variants:": "Color Variants:",
				"variant(s)": "variant(s)",
				"Grid View": "Grid View",
				"List View": "List View",
				"Starting at": "Starting at",
				"Suggestions": "Suggestions",
				"Pages": "Pages",
				"Category": "Category",
				"Products": "Products",
				"View All": "View All",
				"First": "First",
				"Previous": "Previous",
				"Next": "Next",
				"Last": "Last",
				"Close": "Close",
				" Results": " Results",
				" Result": " Result",
				"found": "found",
				"for": "for",
				"Filters": "Filters",
				"Popular Searches": "Popular Searches",
				"Tags:": "Tags:",
				"View details": "View details",
				"Original price %s": "Original price %s",
				"Items per page : %s": "Items per page : %s",
				"Sort by : ": "Sort by : ",
				"Relevance": "Relevance",
				"Price: Low to high": "Price: Low to high",
				"Price: High to low": "Price: High to low"
			},
			ar: {
				"Color Variants:": "المتغيرات الملونة:",
				"variant(s)": "البديل (ق)",
				"Grid View": "عرض شبكي",
				"List View": "عرض القائمة",
				"Starting at": "يبدأ من",
				"Suggestions": "اقتراحات",
				"Pages": "الصفحات",
				"Category": "فئة",
				"Products": "منتجات",
				"View All": "عرض الكل",
				"First": "أولا",
				"Previous": "سابق",
				"Next": "التالي",
				"Last": "الاخير",
				"Close": "قريب",
				" Results": " نتائج",
				" Result": " نتيجة",
				"found": "وجدت",
				"for": "ل",
				"Filters": "مرشحات",
				"Popular Searches": "عمليات البحث الشعبية",
				"Tags:": "العلامات:",
				"View details": "عرض التفاصيل",
				"Original price %s": "السعر الأصلي %s",
				"Items per page : %s": "البنود لكل صفحة: %s",
				"Sort by : ": "صنف حسب :",
				"Relevance": "ملاءمة",
				"Price: Low to high": "السعر من الارخص للاعلى",
				"Price: High to low": "السعر الاعلى الى الادنى"
			},
			bg: {
				"Color Variants:": "Цветови варианти:",
				"variant(s)": "вариант (и)",
				"Grid View": "Изглед към мрежата",
				"List View": "Изглед Изглед",
				"Starting at": "Започва в",
				"Suggestions": "Предложения",
				"Pages": "Страници",
				"Category": "Категория",
				"Products": "Продукти",
				"View All": "Виж всички",
				"First": "Първо",
				"Previous": "Предишен",
				"Next": "Следващия",
				"Last": "Последно",
				"Close": "Близо",
				" Results": " Резултати.",
				" Result": " В резултат",
				"found": "намерен",
				"for": "за",
				"Filters": "Филтри",
				"Popular Searches": "Популярни търсения",
				"Tags:": "Тагове:",
				"View details": "Разгледайте детайлите",
				"Original price %s": "Оригинална цена %s",
				"Items per page : %s": "Елементи на страница : %s",
				"Sort by : ": "Сортиране по:",
				"Relevance": "Уместност",
				"Price: Low to high": "Цена: Ниска до висока",
				"Price: High to low": "Цена: висока до ниска"
			},
			da: {
				"Color Variants:": "Farvevarianter:",
				"variant(s)": "variant (er)",
				"Grid View": "Grid View.",
				"List View": "List View.",
				"Starting at": "Starter ved",
				"Suggestions": "Forslag",
				"Pages": "sider",
				"Category": "Kategori",
				"Products": "Produkter",
				"View All": "Se alt",
				"First": "Først",
				"Previous": "Tidligere",
				"Next": "Næste",
				"Last": "Sidst",
				"Close": "Tæt",
				" Results": " Resultater",
				" Result": " Resultat",
				"found": "fundet",
				"for": "til",
				"Filters": "Filtre.",
				"Popular Searches": "Populære søgninger",
				"Tags:": "Tags:",
				"View details": "Se detaljer",
				"Original price %s": "Original pris %s",
				"Items per page : %s": "Varer pr. Side: %s",
				"Sort by : ": "Sorter efter :",
				"Relevance": "Relevans.",
				"Price: Low to high": "Pris: Lav til høj",
				"Price: High to low": "Pris: høj til lav"
			},
			de: {
				"Color Variants:": "Farbvarianten:",
				"variant(s)": "Variante(n)",
				"Grid View": "Rasteransicht",
				"List View": "Listenansicht",
				"Starting at": "Beginnt um",
				"Suggestions": "Vorschläge",
				"Pages": "Seiten",
				"Category": "Kategorie",
				"Products": "Produkte",
				"View All": "Alle ansehen",
				"First": "Zuerst",
				"Previous": "Vorherige",
				"Next": "Nächste",
				"Last": "Zuletzt",
				"Close": "Nah dran",
				" Results": " Ergebnisse",
				" Result": " Ergebnis",
				"found": "gefunden",
				"for": "zum",
				"Filters": "Filter",
				"Popular Searches": "beliebte Suchanfragen",
				"Tags:": "Stichworte:",
				"View details": "Details anzeigen",
				"Original price %s": "Ursprünglicher Preis %s",
				"Items per page : %s": "Artikel pro Seite: %s",
				"Sort by : ": "Sortieren nach :",
				"Relevance": "Relevanz",
				"Price: Low to high": "Preis niedrig bis hoch",
				"Price: High to low": "Preis: hoch bis niedrig"
			},
			el: {
				"Color Variants:": "Παραλλαγές χρώματος:",
				"variant(s)": "Παραλλαγή",
				"Grid View": "Προβολή πλέγματος",
				"List View": "Προβολή λίστας",
				"Starting at": "Ξεκινώντας από",
				"Suggestions": "Προτάσεις",
				"Pages": "Σελίδες",
				"Category": "Κατηγορία",
				"Products": "Προϊόντα",
				"View All": "Προβολή όλων",
				"First": "Πρώτα",
				"Previous": "Προηγούμενος",
				"Next": "Επόμενο",
				"Last": "τελευταίος",
				"Close": "Κλείσε",
				" Results": " Αποτελέσματα",
				" Result": " Αποτέλεσμα",
				"found": "βρέθηκαν",
				"for": "Για",
				"Filters": "Φίλτρα",
				"Popular Searches": "Δημοφιλείς αναζητήσεις",
				"Tags:": "Ετικέτες:",
				"View details": "Δείτε λεπτομέρειες",
				"Original price %s": "Αρχική τιμή %s",
				"Items per page : %s": "Στοιχεία ανά σελίδα: %s",
				"Sort by : ": "Ταξινόμηση κατά :",
				"Relevance": "Συνάφεια",
				"Price: Low to high": "Τιμή: χαμηλή έως υψηλή",
				"Price: High to low": "Τιμή: Υψηλή έως χαμηλή"
			},
			es: {
				"Color Variants:": "Variantes de color:",
				"variant(s)": "Variante (s)",
				"Grid View": "Vista en cuadrícula",
				"List View": "Vista de la lista",
				"Starting at": "A partir de",
				"Suggestions": "Sugerencias",
				"Pages": "Páginas",
				"Category": "Categoría",
				"Products": "Productos",
				"View All": "Ver todo",
				"First": "Primero",
				"Previous": "Anterior",
				"Next": "próximo",
				"Last": "Último",
				"Close": "Cerrar",
				" Results": " Resultados",
				" Result": " Resultado",
				"found": "fundar",
				"for": "por",
				"Filters": "Filtros",
				"Popular Searches": "Búsquedas populares",
				"Tags:": "Etiquetas:",
				"View details": "Ver detalles",
				"Original price %s": "Precio original %s",
				"Items per page : %s": "Artículos por página : %s",
				"Sort by : ": "Ordenar por :",
				"Relevance": "Relevancia",
				"Price: Low to high": "Precios de barato a caro",
				"Price: High to low": "Precio: alto a bajo"
			},
			et: {
				"Color Variants:": "Värvariandid:",
				"variant(s)": "Variant (id)",
				"Grid View": "Võrguvaade",
				"List View": "Loendivaade",
				"Starting at": "Alustades",
				"Suggestions": "Ettepanekud",
				"Pages": "Leheküljed",
				"Category": "Kategooria",
				"Products": "Tooted",
				"View All": "Vaata kõiki",
				"First": "Esimene",
				"Previous": "Eelmine",
				"Next": "Järgmine",
				"Last": "Viimati",
				"Close": "Sulge",
				" Results": " Tulemused",
				" Result": " Tulemus",
				"found": "leitud",
				"for": "jaoks",
				"Filters": "Filtrid",
				"Popular Searches": "Populaarsed otsingud",
				"Tags:": "Sildid:",
				"View details": "Vaata detaile",
				"Original price %s": "Originaalhind %s",
				"Items per page : %s": "Üksused lehekülje kohta : %s",
				"Sort by : ": "Sorteerima :",
				"Relevance": "Tähtsus",
				"Price: Low to high": "Hind: madal kuni kõrge",
				"Price: High to low": "Hind: kõrge madal"
			},
			fa: {
				"Color Variants:": "انواع رنگ:",
				"variant(s)": "نوع (ها)",
				"Grid View": "نمایش شبکه",
				"List View": "نمایش لیست",
				"Starting at": "شروع از",
				"Suggestions": "پیشنهادات",
				"Pages": "صفحات",
				"Category": "دسته بندی",
				"Products": "محصولات",
				"View All": "مشاهده همه",
				"First": "اولین",
				"Previous": "قبلی",
				"Next": "بعد",
				"Last": "آخر",
				"Close": "نزدیک",
				" Results": " نتایج",
				" Result": " نتیجه",
				"found": "پیدا کردن",
				"for": "برای",
				"Filters": "فیلترها",
				"Popular Searches": "جستجوهای محبوب",
				"Tags:": "برچسب ها:",
				"View details": "دیدن جزئیات",
				"Original price %s": "قیمت اصلی %s",
				"Items per page : %s": "اقلام در هر صفحه: %s",
				"Sort by : ": "مرتب سازی بر اساس :",
				"Relevance": "ارتباط",
				"Price: Low to high": "قیمت: کم به بالا",
				"Price: High to low": "قیمت: بالا به پایین"
			},
			fi: {
				"Color Variants:": "Värivariantit:",
				"variant(s)": "Variantti (t)",
				"Grid View": "Verkkokuva",
				"List View": "Listanäkymä",
				"Starting at": "Alkaen",
				"Suggestions": "Ehdotukset",
				"Pages": "Sivut",
				"Category": "Kategoria",
				"Products": "Tuotteet",
				"View All": "Näytä kaikki",
				"First": "Ensimmäinen",
				"Previous": "Edellinen",
				"Next": "Seuraava",
				"Last": "Kestää",
				"Close": "kiinni",
				" Results": " Tulokset",
				" Result": " Tulos",
				"found": "löydetty",
				"for": "varten",
				"Filters": "Suodattimet",
				"Popular Searches": "Suosittuja hakuja",
				"Tags:": "Tunnisteet:",
				"View details": "Tarkemmat tiedot",
				"Original price %s": "Alkuperäinen hinta %s",
				"Items per page : %s": "Tuotteet per sivu : %s",
				"Sort by : ": "Järjestä :",
				"Relevance": "Merkityksellisyys",
				"Price: Low to high": "Hinta: Alhainen korkealle",
				"Price: High to low": "Hinta: Alhainen"
			},
			fr: {
				"Color Variants:": "Variantes de couleur:",
				"variant(s)": "variante (s)",
				"Grid View": "Grille",
				"List View": "Vue de la liste",
				"Starting at": "À partir de",
				"Suggestions": "Suggestions",
				"Pages": "Pages",
				"Category": "Catégorie",
				"Products": "Des produits",
				"View All": "Voir tout",
				"First": "D'abord",
				"Previous": "Précédent",
				"Next": "Prochain",
				"Last": "Durer",
				"Close": "proche",
				" Results": " Résultats",
				" Result": " Résultat",
				"found": "trouvé",
				"for": "pour",
				"Filters": "Filtres",
				"Popular Searches": "Recherches populaires",
				"Tags:": "Mots clés:",
				"View details": "Voir les détails",
				"Original price %s": "Prix ​​original %s",
				"Items per page : %s": "Articles par page : %s",
				"Sort by : ": "Trier par :",
				"Relevance": "Pertinence",
				"Price: Low to high": "Prix ​​croissant",
				"Price: High to low": "Prix: haut à faible"
			},
			he: {
				"Color Variants:": "וריאלי צבע:",
				"variant(s)": "וריאנט (ים)",
				"Grid View": "תצוגת רשת",
				"List View": "תצוגת רשימה",
				"Starting at": "מתחיל ב",
				"Suggestions": "הצעות",
				"Pages": "דפים",
				"Category": "קטגוריה",
				"Products": "מוצרים",
				"View All": "צפה בהכל",
				"First": "ראשון",
				"Previous": "קודם",
				"Next": "הַבָּא",
				"Last": "אחרון",
				"Close": "סגור",
				" Results": " תוצאות",
				" Result": " תוֹצָאָה",
				"found": "מצאתי",
				"for": "ל",
				"Filters": "מסננים",
				"Popular Searches": "חיפושים פופולריים",
				"Tags:": "תגיות:",
				"View details": "הצג פרטים",
				"Original price %s": "מחיר מקורי %s",
				"Items per page : %s": "פריטים לעמוד : %s",
				"Sort by : ": "מיין לפי :",
				"Relevance": "רלוונטיות",
				"Price: Low to high": "מחיר מהנמוך לגבוה",
				"Price: High to low": "מחיר: גבוה עד נמוך"
			},
			hr: {
				"Color Variants:": "Varijante boja:",
				"variant(s)": "varijanta",
				"Grid View": "Prikaz rešetke",
				"List View": "Prikaz popisa",
				"Starting at": "S početkom u",
				"Suggestions": "Prijedlozi",
				"Pages": "Stranicama",
				"Category": "Kategorija",
				"Products": "Proizvodi",
				"View All": "Pogledaj sve",
				"First": "Prvi",
				"Previous": "Prethodni",
				"Next": "Sljedeći",
				"Last": "Posljednji",
				"Close": "Zatvoriti",
				" Results": " Rezultati",
				" Result": " Proizlaziti",
				"found": "pronađeno",
				"for": "za",
				"Filters": "Filteri",
				"Popular Searches": "Popularna pretraživanja",
				"Tags:": "Oznake:",
				"View details": "Pregledavati pojedinosti",
				"Original price %s": "Izvorna cijena %s",
				"Items per page : %s": "Stavke po stranici : %s",
				"Sort by : ": "Sortiraj po:",
				"Relevance": "Relevantnost",
				"Price: Low to high": "Cijena: niska do visokog",
				"Price: High to low": "Cijena: visoko do niskog"
			},
			hu: {
				"Color Variants:": "Színváltozatok:",
				"variant(s)": "Variant (ek)",
				"Grid View": "Rácsnézet",
				"List View": "Lista nézet",
				"Starting at": "Kezdve",
				"Suggestions": "Javaslatok",
				"Pages": "Oldalak",
				"Category": "Kategória",
				"Products": "Termékek",
				"View All": "Összes megtekintése",
				"First": "Első",
				"Previous": "Előző",
				"Next": "Következő",
				"Last": "Utolsó",
				"Close": "Bezárás",
				" Results": " Eredmények",
				" Result": " Eredmény",
				"found": "megtalált",
				"for": "-ért",
				"Filters": "Szűrőkészülékek",
				"Popular Searches": "Népszerű keresések",
				"Tags:": "Címkék:",
				"View details": "Részletek megtekintése",
				"Original price %s": "Eredeti ár %s",
				"Items per page : %s": "Tételek oldalanként : %s",
				"Sort by : ": "Rendezés :",
				"Relevance": "Relevancia",
				"Price: Low to high": "Ár: alacsony és magas",
				"Price: High to low": "Ár: Magas vagy alacsony"
			},
			is: {
				"Color Variants:": "Litur afbrigði:",
				"variant(s)": "Variant (s)",
				"Grid View": "Grid View.",
				"List View": "LIST VIEW.",
				"Starting at": "Byrjar á.",
				"Suggestions": "Tillögur",
				"Pages": "Síður",
				"Category": "Flokkur",
				"Products": "Vörur",
				"View All": "Sjá allt",
				"First": "Fyrsta",
				"Previous": "Fyrri",
				"Next": "Næsta",
				"Last": "Endinn",
				"Close": "Nærri",
				" Results": " Niðurstöður",
				" Result": " Niðurstaðan",
				"found": "Fundið",
				"for": "fyrir",
				"Filters": "Síur",
				"Popular Searches": "Vinsælar leitir",
				"Tags:": "Tags:",
				"View details": "Skoða smáatriði",
				"Original price %s": "Upprunalega verð %s",
				"Items per page : %s": "Atriði á síðu : %s",
				"Sort by : ": "Raða eftir :",
				"Relevance": "Mikilvægi",
				"Price: Low to high": "Verð: lágt til hátt",
				"Price: High to low": "Verð: hátt til lágt"
			},
			it: {
				"Color Variants:": "Varianti di colore:",
				"variant(s)": "variante (s)",
				"Grid View": "Vista a griglia",
				"List View": "Visualizzazione elenco",
				"Starting at": "A partire da",
				"Suggestions": "Suggerimenti",
				"Pages": "Pagine",
				"Category": "Categoria",
				"Products": "Prodotti",
				"View All": "Mostra tutto",
				"First": "Primo",
				"Previous": "Precedente",
				"Next": "Prossimo",
				"Last": "Scorso",
				"Close": "Chiudere",
				" Results": " Risultati",
				" Result": " Risultato",
				"found": "trovato",
				"for": "per",
				"Filters": "Filtri",
				"Popular Searches": "Ricerche popolari",
				"Tags:": "Tag:",
				"View details": "Visualizza dettagli",
				"Original price %s": "Prezzo originale %s",
				"Items per page : %s": "Articoli per pagina : %s",
				"Sort by : ": "Ordina per :",
				"Relevance": "Pertinenza",
				"Price: Low to high": "Prezzo: basso ad alto",
				"Price: High to low": "Prezzo: alto a basso"
			},
			ja: {
				"Color Variants:": "カラーバリエント：",
				"variant(s)": "バリアント",
				"Grid View": "グリッドビュー",
				"List View": "リストビュー",
				"Starting at": "出身",
				"Suggestions": "suggest suggest",
				"Pages": "ページ",
				"Category": "カテゴリー",
				"Products": "製品",
				"View All": "全体を見る",
				"First": "初め",
				"Previous": "前",
				"Next": "次",
				"Last": "最後",
				"Close": "選ぶ",
				" Results": " 結果",
				" Result": " 結果",
				"found": "見つかった",
				"for": "にとって",
				"Filters": "フィルタ",
				"Popular Searches": "人気の検索",
				"Tags:": "タグ：",
				"View details": "詳細を見る",
				"Original price %s": "元の価格 %s.",
				"Items per page : %s": "1ページあたりの項目：%s",
				"Sort by : ": "並び替え ：",
				"Relevance": "関連性",
				"Price: Low to high": "価格：低すなわち高い",
				"Price: High to low": "価格：高いから低い"
			},
			ko: {
				"Color Variants:": "색상 변형 :",
				"variant(s)": "변종 (들)",
				"Grid View": "격자보기",
				"List View": "목록보기",
				"Starting at": "부터 시작하여",
				"Suggestions": "제안",
				"Pages": "페이지",
				"Category": "범주",
				"Products": "제품",
				"View All": "모두보기",
				"First": "첫 번째",
				"Previous": "이전의",
				"Next": "다음",
				"Last": "마지막",
				"Close": "닫다",
				" Results": " 결과",
				" Result": " 결과",
				"found": "설립하다",
				"for": "~을위한",
				"Filters": "필터",
				"Popular Searches": "인기있는 검색",
				"Tags:": "태그 :",
				"View details": "세부 정보보기",
				"Original price %s": "원래 가격 %s.",
				"Items per page : %s": "페이지 당 항목 : %s.",
				"Sort by : ": "정렬 기준 :",
				"Relevance": "관련성",
				"Price: Low to high": "가격 : 낮은 곳으로",
				"Price: High to low": "가격 : 낮은 곳에서"
			},
			lv: {
				"Color Variants:": "Krāsu varianti:",
				"variant(s)": "Variants (-i)",
				"Grid View": "Režģa skats",
				"List View": "Saraksta skats",
				"Starting at": "Sākot no",
				"Suggestions": "Ierosinājumi",
				"Pages": "Lapas",
				"Category": "Kategorija",
				"Products": "Produkti",
				"View All": "Apskatīt visus",
				"First": "Pirmkārt",
				"Previous": "Iepriekšējais",
				"Next": "Nākamais",
				"Last": "Pēdējais",
				"Close": "Tuvoties",
				" Results": " Rezultāti",
				" Result": " Rezultāts",
				"found": "atrasts",
				"for": "priekš",
				"Filters": "Filtri",
				"Popular Searches": "Populāri meklējumi",
				"Tags:": "Tags:",
				"View details": "Skatīt detaļas",
				"Original price %s": "Oriģinālā cena %s",
				"Items per page : %s": "Vienumi vienā lapā : %s",
				"Sort by : ": "Kārtot pēc :",
				"Relevance": "Atbilstība",
				"Price: Low to high": "Cena: zema līdz augstai",
				"Price: High to low": "Cena: augsts līdz zems"
			},
			nb: {
				"Color Variants:": "Fargevarianter:",
				"variant(s)": "variant (er)",
				"Grid View": "Rutenett visning",
				"List View": "Listevisning",
				"Starting at": "Starter på",
				"Suggestions": "Forslag",
				"Pages": "Sider",
				"Category": "Kategori",
				"Products": "Produkter",
				"View All": "Se alt",
				"First": "Først",
				"Previous": "Tidligere",
				"Next": "NESTE",
				"Last": "Siste",
				"Close": "Lukk",
				" Results": " Resultater.",
				" Result": " Resultat",
				"found": "funnet",
				"for": "til",
				"Filters": "Filtre",
				"Popular Searches": "Populære søk",
				"Tags:": "Tags:",
				"View details": "Vis detaljer",
				"Original price %s": "Opprinnelige pris %s",
				"Items per page : %s": "Elementer per side : %s",
				"Sort by : ": "Sorter etter :",
				"Relevance": "Relevans",
				"Price: Low to high": "Pris: Lav til høy",
				"Price: High to low": "Pris: Høy til lav"
			},
			nl: {
				"Color Variants:": "Kleurvarianten:",
				"variant(s)": "Variant (s)",
				"Grid View": "Rasterweergave",
				"List View": "Lijstweergave",
				"Starting at": "Beginnend bij",
				"Suggestions": "Suggesties",
				"Pages": "Pagina's",
				"Category": "Categorie",
				"Products": "Producten",
				"View All": "Bekijk alles",
				"First": "Eerst",
				"Previous": "Vorig",
				"Next": "Volgende",
				"Last": "Laatste",
				"Close": "Dichtbij",
				" Results": " Resultaten",
				" Result": " Resultaat",
				"found": "gevonden",
				"for": "voor",
				"Filters": "Filters",
				"Popular Searches": "populaire zoekopdrachten",
				"Tags:": "Tags:",
				"View details": "Bekijk details",
				"Original price %s": "Originele prijs %s",
				"Items per page : %s": "Items per pagina : %s",
				"Sort by : ": "Sorteer op :",
				"Relevance": "Relevantie",
				"Price: Low to high": "Prijs laag naar hoog",
				"Price: High to low": "Prijs: hoog naar laag"
			},
			no: {
				"Color Variants:": "Fargevarianter:",
				"variant(s)": "variant (er)",
				"Grid View": "Rutenett visning",
				"List View": "Listevisning",
				"Starting at": "Starter på",
				"Suggestions": "Forslag",
				"Pages": "Sider",
				"Category": "Kategori",
				"Products": "Produkter",
				"View All": "Se alt",
				"First": "Først",
				"Previous": "Tidligere",
				"Next": "NESTE",
				"Last": "Siste",
				"Close": "Lukk",
				" Results": " Resultater.",
				" Result": " Resultat",
				"found": "funnet",
				"for": "til",
				"Filters": "Filtre",
				"Popular Searches": "Populære søk",
				"Tags:": "Tags:",
				"View details": "Vis detaljer",
				"Original price %s": "Opprinnelige pris %s",
				"Items per page : %s": "Elementer per side : %s",
				"Sort by : ": "Sorter etter :",
				"Relevance": "Relevans",
				"Price: Low to high": "Pris: Lav til høy",
				"Price: High to low": "Pris: Høy til lav"
			},
			pl: {
				"Color Variants:": "Warianty kolorów:",
				"variant(s)": "wariant (y)",
				"Grid View": "Widok siatki",
				"List View": "Widok listy",
				"Starting at": "Zaczynać od",
				"Suggestions": "Propozycje",
				"Pages": "Strony",
				"Category": "Kategoria",
				"Products": "Produkty",
				"View All": "Pokaż wszystkie",
				"First": "Najpierw",
				"Previous": "Poprzedni",
				"Next": "Następny",
				"Last": "Ostatni",
				"Close": "Blisko",
				" Results": " Wyniki",
				" Result": " Wynik",
				"found": "znaleziony",
				"for": "dla",
				"Filters": "Filtry.",
				"Popular Searches": "popularne wyszukiwania",
				"Tags:": "Tagi:",
				"View details": "Pokaż szczegóły",
				"Original price %s": "Oryginalna cena %s",
				"Items per page : %s": "Przedmioty na stronie : %s",
				"Sort by : ": "Sortuj według :",
				"Relevance": "Znaczenie",
				"Price: Low to high": "Cena: Niska do wysokiego",
				"Price: High to low": "Cena: wysoka do niskiego"
			},
			pt: {
				"Color Variants:": "Variantes de cor:",
				"variant(s)": "Variante (s)",
				"Grid View": "Vista da grade",
				"List View": "Exibição de lista",
				"Starting at": "Começando às",
				"Suggestions": "Sugestões",
				"Pages": "Páginas",
				"Category": "Categoria",
				"Products": "Produtos",
				"View All": "Ver tudo",
				"First": "Primeiro",
				"Previous": "Anterior",
				"Next": "Próximo",
				"Last": "Último",
				"Close": "Fechar",
				" Results": " Resultados",
				" Result": " Resultado",
				"found": "encontrado",
				"for": "para",
				"Filters": "Filtros",
				"Popular Searches": "Pesquisas populares",
				"Tags:": "Tag:",
				"View details": "Ver detalhes",
				"Original price %s": "Preço original %s",
				"Items per page : %s": "Itens por página : %s",
				"Sort by : ": "Ordenar por :",
				"Relevance": "Relevância",
				"Price: Low to high": "Preço: baixo para alto",
				"Price: High to low": "Preço: alta a baixa"
			},
			ro: {
				"Color Variants:": "Variante de culoare:",
				"variant(s)": "Variante (e)",
				"Grid View": "Vizualizare grilă",
				"List View": "Vizualizare listă.",
				"Starting at": "Începând de la",
				"Suggestions": "Sugestii",
				"Pages": "Pagini",
				"Category": "Categorie",
				"Products": "Produse",
				"View All": "A vedea tot",
				"First": "Primul",
				"Previous": "Anterior",
				"Next": "Următorul",
				"Last": "Ultimul",
				"Close": "Închide",
				" Results": " Rezultate",
				" Result": " Rezultat",
				"found": "găsite",
				"for": "pentru",
				"Filters": "Filtre",
				"Popular Searches": "Căutări populare",
				"Tags:": "Etichete:",
				"View details": "Vezi detalii",
				"Original price %s": "Prețul original %s",
				"Items per page : %s": "Elementele pe pagină : %s",
				"Sort by : ": "Filtrează după :",
				"Relevance": "Relevanţă",
				"Price: Low to high": "Preț: scăzut la înălțime",
				"Price: High to low": "Preț: ridicat la scăzut"
			},
			ru: {
				"Color Variants:": "Цветные варианты:",
				"variant(s)": "Вариант (ы)",
				"Grid View": "Вид сетки",
				"List View": "Посмотреть список",
				"Starting at": "Начинается с",
				"Suggestions": "Предложения",
				"Pages": "Страницы",
				"Category": "Категория",
				"Products": "Продукты",
				"View All": "Посмотреть все",
				"First": "Первый",
				"Previous": "Предыдущий",
				"Next": "Следующий",
				"Last": "Последний",
				"Close": "Закрывать",
				" Results": " Полученные результаты",
				" Result": " Результат",
				"found": "нашел",
				"for": "для",
				"Filters": "Фильтры",
				"Popular Searches": "Популярные поиски",
				"Tags:": "Теги:",
				"View details": "Посмотреть детали",
				"Original price %s": "Оригинальная цена %s",
				"Items per page : %s": "Предметы на странице : %s",
				"Sort by : ": "Сортировать по :",
				"Relevance": "Актуальность",
				"Price: Low to high": "Цена: низкий до высокого",
				"Price: High to low": "Цена: высоко до низкого"
			},
			sk: {
				"Color Variants:": "Varianty farieb:",
				"variant(s)": "Variant (y)",
				"Grid View": "Zobrazenie mriežky",
				"List View": "Zobrazenie zoznamu",
				"Starting at": "Začne",
				"Suggestions": "Návrhy",
				"Pages": "Stránka",
				"Category": "Kategória",
				"Products": "Produkty",
				"View All": "Zobraziť všetko",
				"First": "najprv",
				"Previous": "Predchádzajúci",
				"Next": "Ďalšie",
				"Last": "Posledný",
				"Close": "Zavrieť",
				" Results": " Výsledok",
				" Result": " Výsledok",
				"found": "zistiť",
				"for": "pre",
				"Filters": "Filtre",
				"Popular Searches": "Populárne vyhľadávania",
				"Tags:": "Tagy:",
				"View details": "Zobraziť podrobnosti",
				"Original price %s": "Pôvodná cena %s",
				"Items per page : %s": "Položky na stránku : %s",
				"Sort by : ": "Triediť podľa :",
				"Relevance": "Relevantnosť",
				"Price: Low to high": "Cena: Nízka až vysoká",
				"Price: High to low": "Cena: vysoká až nízka"
			},
			sl: {
				"Color Variants:": "Barvne variante:",
				"variant(s)": "Varianta (-e)",
				"Grid View": "Pogled na mrežo",
				"List View": "Pogled seznama",
				"Starting at": "Začetek",
				"Suggestions": "Predloge",
				"Pages": "Strani",
				"Category": "Kategorija",
				"Products": "Izdelki",
				"View All": "Poglej vse",
				"First": "Prvič",
				"Previous": "Prejšnji",
				"Next": "Naslednji",
				"Last": "Zadnja",
				"Close": "Zapri",
				" Results": " Rezultati",
				" Result": " Rezultat.",
				"found": "najdemo",
				"for": "za",
				"Filters": "Filtri",
				"Popular Searches": "Popularna iskanja",
				"Tags:": "Oznake:",
				"View details": "Ogled podrobnosti",
				"Original price %s": "Originalna cena %s",
				"Items per page : %s": "Postavke na stran : %s",
				"Sort by : ": "Razvrsti po :",
				"Relevance": "Ustreznost",
				"Price: Low to high": "Cena: nizka do visoka",
				"Price: High to low": "Cena: visoka do nizka"
			},
			sr: {
				"Color Variants:": "Варијанте у боји:",
				"variant(s)": "Вариант (с)",
				"Grid View": "Поглед мрежа",
				"List View": "Листа приказа",
				"Starting at": "Са почетком у",
				"Suggestions": "Предлози",
				"Pages": "Странице",
				"Category": "Категорија",
				"Products": "Производи",
				"View All": "Погледати све",
				"First": "Први",
				"Previous": "Претходна",
				"Next": "Следећи",
				"Last": "Задњи",
				"Close": "Близу",
				" Results": " Резултати",
				" Result": " Резултат",
				"found": "нашао",
				"for": "за",
				"Filters": "Филтери",
				"Popular Searches": "Популарне претраге",
				"Tags:": "Ознаке:",
				"View details": "Приказ детаља",
				"Original price %s": "Оригинална цена %s",
				"Items per page : %s": "Артикли на страници : %s",
				"Sort by : ": "Сортирај по :",
				"Relevance": "Релевантност",
				"Price: Low to high": "Цена: ниско до високог",
				"Price: High to low": "Цена: Високо за ниско"
			},
			sv: {
				"Color Variants:": "Färgvarianter:",
				"variant(s)": "Variant (er)",
				"Grid View": "Gridvy",
				"List View": "Listvy",
				"Starting at": "Börjar vid",
				"Suggestions": "Förslag",
				"Pages": "Sidor",
				"Category": "Kategori",
				"Products": "Produkter",
				"View All": "Visa alla",
				"First": "Först",
				"Previous": "Tidigare",
				"Next": "Nästa",
				"Last": "Sista",
				"Close": "Stänga",
				" Results": " Resultat",
				" Result": " Resultat",
				"found": "hittades",
				"for": "för",
				"Filters": "Filter",
				"Popular Searches": "Populära sökningar",
				"Tags:": "Taggar:",
				"View details": "Visa detaljer",
				"Original price %s": "Originalpris %s",
				"Items per page : %s": "Artiklar per sida : %s",
				"Sort by : ": "Sortera efter :",
				"Relevance": "Relevans",
				"Price: Low to high": "Pris: lågt till högt",
				"Price: High to low": "Pris: Högt till lågt"
			},
			tr: {
				"Color Variants:": "Renk çeşitleri:",
				"variant(s)": "varyant (lar)",
				"Grid View": "Izgara görünümü",
				"List View": "Liste görünümü",
				"Starting at": "Buradan başlayarak",
				"Suggestions": "Öneriler",
				"Pages": "Sayfalar",
				"Category": "Kategori",
				"Products": "Ürün:%s",
				"View All": "Hepsini gör",
				"First": "Öncelikle",
				"Previous": "Öncesi",
				"Next": "Sonraki",
				"Last": "Son",
				"Close": "Kapat",
				" Results": " Sonuçlar",
				" Result": " Sonuç",
				"found": "bulundu",
				"for": "için",
				"Filters": "Filtreler",
				"Popular Searches": "popüler aramalar",
				"Tags:": "Etiketler:",
				"View details": "Detayları göster",
				"Original price %s": "Orijinal fiyat %s",
				"Items per page : %s": "Sayfa başına öğeler : %s",
				"Sort by : ": "Göre sırala :",
				"Relevance": "İlgi",
				"Price: Low to high": "Fiyat: düşükten yüksek",
				"Price: High to low": "Fiyat pahalıdan ucuza"
			},
			vi: {
				"Color Variants:": "Các biến thể màu:",
				"variant(s)": "Biến thể (s)",
				"Grid View": "Chế độ hiển thị theo ô",
				"List View": "Danh sách View.",
				"Starting at": "Bắt đầu tại",
				"Suggestions": "Gợi ý",
				"Pages": "Trang.",
				"Category": "Loại",
				"Products": "Các sản phẩm",
				"View All": "Xem tất cả",
				"First": "Ngày thứ nhất",
				"Previous": "Trước",
				"Next": "Kế tiếp",
				"Last": "Cuối cùng",
				"Close": "Gần",
				" Results": " Kết quả",
				" Result": " Kết quả",
				"found": "tìm",
				"for": "vì",
				"Filters": "Bộ lọc",
				"Popular Searches": "Tìm kiếm phổ biến",
				"Tags:": "Tags:",
				"View details": "Xem chi tiết",
				"Original price %s": "Giá gốc %s",
				"Items per page : %s": "Các mục trên mỗi trang : %s",
				"Sort by : ": "Sắp xếp theo:",
				"Relevance": "Sự liên quan",
				"Price: Low to high": "Giá: thấp đến cao",
				"Price: High to low": "Giá từ cao đến thấp"
			},
			zh: {
				"Color Variants:": "颜色变种：",
				"variant(s)": "变体",
				"Grid View": "网格视图",
				"List View": "列表显示",
				"Starting at": "开始于",
				"Suggestions": "建议",
				"Pages": "页面",
				"Category": "类别",
				"Products": "产品",
				"View All": "查看全部",
				"First": "第一的",
				"Previous": "以前的",
				"Next": "下一个",
				"Last": "最后的",
				"Close": "关闭",
				" Results": " 结果",
				" Result": " 结果",
				"found": "成立",
				"for": "为了",
				"Filters": "过滤器",
				"Popular Searches": "热门搜索",
				"Tags:": "标签：",
				"View details": "查看详情",
				"Original price %s": "原价 %s",
				"Items per page : %s": "每页物品：%s",
				"Sort by : ": "排序方式 ：",
				"Relevance": "关联",
				"Price: Low to high": "价格：低至高",
				"Price: High to low": "价格：高到低"
			}
		},
		getDefaultLanguageCode: function () {
			if (typeof klevu_lang === "undefined") klevu_lang = "en";
			var code = "en";
			if (klevu_lang === "nn") {
				code = "nb";
			} else {
				if (klevu_lang === "zh_Hant_HK" || klevu_lang === "zh-CN") {
					code = "zh";
				} else {
					if (klevu_lang === "lav") {
						code = "lv";
					} else {
						if (klevu.search.modules.locale.globalTranslations.hasOwnProperty(klevu_lang)) {
							code = klevu_lang;
						}
					}
				}
			}
			return code;
		},
		getTranslations: function (code) {
			if (klevu.search.modules.locale.globalTranslations.hasOwnProperty(code)) {
				return klevu.search.modules.locale.globalTranslations[code];
			}
			return {};

		},
		applyTranslationOverrides: function (translations) {
			if ("undefined" !== typeof klevu_storeTranslations && klevu_storeTranslations) {
				for (key in klevu_storeTranslations) {
					translations[key] = klevu_storeTranslations[key];
				}
			}
			return translations;
		}
	}
});klevu.themeVersion = "2.0.11";
klevu.setObjectPath(klevu, "support.theme", {
    quick: true,
    version: "2.0.11"
});

klevu.interactive(function () {
    var quickPowerUp = klevu.getSetting(klevu, "settings.powerUp.quick");
    if (typeof quickPowerUp === "undefined") {
        klevu.setSetting(klevu, "settings.powerUp.quick", true);
    }
});

/**
 * check if klevu is interactive and also if all necessary search instances are powered up
 */
klevu.coreEvent.build({
    name: "bindLocalBoxes",
    fire: function () {
        if (
            !klevu.isInteractive ||
            klevu.isUndefined(klevu.search) ||
            klevu.isUndefined(klevu.search.build) ||
            klevu.isUndefined(klevu.searchEvents) ||
            klevu.isUndefined(klevu.searchEvents.functions) ||
            klevu.isUndefined(klevu.searchEvents.functions.bindAllSearchBoxes) ||
            klevu.isUndefined(klevu.searchEvents.functions.bindAllExtraEvents)
        ) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});

/**
 * attach to all search boxes on the page
 */
klevu.coreEvent.attach("bindLocalBoxes", {
    name: "search-boxes-local-boxes",
    fire: function () {
        klevu.searchEvents.functions.bindAllSearchBoxes.fire();
        klevu.searchEvents.functions.bindAllExtraEvents.fire();
    }
});

/**
 * build event chain to check when quick is powered up
 */
klevu.coreEvent.build({
    name: "setRemoteConfigQuick",
    fire: function () {
        if (
            klevu.isUndefined(klevu.search.extraSearchBox) ||
            (klevu.search.extraSearchBox.length === 0) ||
            klevu.isUndefined(klevu.search.modules.kmcInputs)
        ) {
            return false;
        }
        if (
            klevu.search.modules.kmcInputs.build &&
            !klevu.search.modules.kmcInputs.hasAllResourcesLoaded &&
            !klevu.search.modules.kmcInputs.hasAllResourcesLoadedJson
        ) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});

/**
 * Add base quick search templates
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "search-quick-templates",
    fire: function () {
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateBase"), "klevuTemplateBase", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickProducts"), "klevuQuickProducts", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickProductBlock"), "klevuQuickProductBlock", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickNoResultFound"), "klevuQuickNoResultFound", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuSearchPersonalizations"), "klevuSearchPersonalizations", true);

            var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
            if (layoutType.toLowerCase() === "basic") {
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateResultsHeadingTitle"), "klevuQuickTemplateResultsHeadingTitle", true);
            } else {
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickProductBlockTitleHeader"), "klevuQuickProductBlockTitleHeader", true);
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickAutoSuggestions"), "klevuQuickAutoSuggestions", true);
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickPageSuggestions"), "klevuQuickPageSuggestions", true);
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickCategorySuggestions"), "klevuQuickCategorySuggestions", true);

            }
        });
    }
});

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "addQuickFacetedPagination",
    fire: function () {

        var hasInfiniteScrollEnabled = klevu.getSetting(klevu, "settings.theme.modules.resultInfiniteScroll.quickSearch.enable");
        if (hasInfiniteScrollEnabled === true) {
            return;
        }

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
            if (layoutType.toLowerCase() === "basic") {
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplatePagination"), "klevuQuickTemplatePagination", true);

                /** Event to add pagination */
                box.getScope().chains.template.events.add({
                    name: "addPagination",
                    fire: function (data, scope) {
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        klevu.each(klevu.dom.find(".klevuPaginate", target), function (key, value) {
                            klevu.event.attach(value, "click", function (event) {
                                event = event || window.event;
                                event.preventDefault();

                                var element = event.target;
                                var target = klevu.dom.helpers.getClosest(element, ".klevuTarget");
                                if (target === null) {
                                    return;
                                }

                                var scope = target.kElem;
                                scope.kScope.data = scope.kObject.resetData(scope.kElem);
                                scope.kScope.data.context.keyCode = 0;
                                scope.kScope.data.context.eventObject = event;
                                scope.kScope.data.context.event = "keyUp";
                                scope.kScope.data.context.preventDefault = false;

                                var options = klevu.dom.helpers.getClosest(element, ".klevuMeta");
                                var offset = element.dataset.offset;
                                offset = (offset < 0) ? 0 : offset;

                                klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + options.dataset.section + ".settings.offset", parseInt(offset));
                                klevu.event.fireChain(scope.kScope, "chains.events.keyUp", scope, scope.kScope.data, event);
                            }, true);
                        });
                    }
                });
            }

        });
    }
});

// attach all klevu chains
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "search-quick-chains",
    fire: function () {
        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            //get the global translations
            box.getScope().template.getTranslator().mergeFromGlobal();
            //get the global currency
            box.getScope().template.getTranslator().getCurrencyObject().mergeFromGlobal();

            box.getScope().chains.events.focus.add({
                name: "hideAllOverlay",
                fire: function (data, scope) {
                    klevu.each(klevu.search.extraSearchBox, function (key, box) {
                        var fullPage = klevu.getSetting(box.getScope().settings, "settings.search.fullPageLayoutEnabled", true);
                        if (!fullPage) {
                            var target = klevu.getSetting(box.getScope().settings, "settings.search.searchBoxTarget");
                            target.style = "display: none !important;";
                        }
                    });
                }
            });

            box.getScope().chains.events.focus.add({
                name: "displayOverlay",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    target.style = "display: block !important;";
                }
            });

            box.getScope().chains.events.focus.add({
                name: "doSearch",
                fire: function (data, scope) {
                    var chain = klevu.getObjectPath(scope.kScope, "chains.actions.doSearch");
                    if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                        chain.setScope(scope.kElem);
                        chain.setData(data);
                        chain.fire();
                    }
                    scope.kScope.data = data;
                    if (data.context.preventDefault === true) return false;
                }
            });

            box.getScope().chains.request.build.add({
                name: "addAutoSuggestions",
                fire: function (data, scope) {
                    var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                    if (data.context.term && layoutType.toLowerCase() === "slim") {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var suggestion = klevu.extend(true, {}, parameterMap.suggestions);
                        suggestion.id = "autosuggestion";
                        suggestion.query = data.context.term;
                        suggestion.typeOfRequest = "AUTO_SUGGESTIONS";
                        suggestion.limit = klevu.search.modules.kmcInputs.base.getMaxNumberOfAutoSuggestions();
                        data.request.current.suggestions.push(suggestion);
                    }
                    data.context.doSearch = true;
                }
            });

            box.getScope().chains.request.build.add({
                name: "addCategoryCompressed",
                fire: function (data, scope) {
                    var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                    if (data.context.term && data.context.term != "*" && layoutType.toLowerCase() === "slim") {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var categoryCompressed = klevu.extend(true, {}, parameterMap.recordQuery);
                        categoryCompressed.id = "categoryCompressed";
                        categoryCompressed.typeOfRequest = "SEARCH";
                        categoryCompressed.settings.query.term = data.context.term;
                        categoryCompressed.settings.typeOfRecords = ["KLEVU_CATEGORY"];
                        categoryCompressed.settings.searchPrefs = ["searchCompoundsAsAndQuery"];
                        categoryCompressed.settings.fields = ["id", "name", "shortDesc", "url", "typeOfRecord"];
                        categoryCompressed.settings.limit = klevu.search.modules.kmcInputs.base.getMaxNumberOfProductSuggestions();
                        categoryCompressed.settings.sort = "RELEVANCE";
                        data.request.current.recordQueries.push(categoryCompressed);
                    }
                    data.context.doSearch = true;
                }
            });

            box.getScope().chains.request.build.add({
                name: "addCmsCompressed",
                fire: function (data, scope) {
                    var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                    var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue();
                    if (isCmsEnabled && data.context.term && data.context.term != "*" && layoutType.toLowerCase() === "slim") {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var cmsCompressed = klevu.extend(true, {}, parameterMap.recordQuery);
                        cmsCompressed.id = "cmsCompressed";
                        cmsCompressed.typeOfRequest = "SEARCH";
                        cmsCompressed.settings.query.term = data.context.term;
                        cmsCompressed.settings.typeOfRecords = ["KLEVU_CMS"];
                        cmsCompressed.settings.searchPrefs = ["searchCompoundsAsAndQuery"];
                        cmsCompressed.settings.fields = ["id", "name", "shortDesc", "url", "typeOfRecord"];
                        cmsCompressed.settings.limit = 3;
                        cmsCompressed.settings.sort = "RELEVANCE";
                        data.request.current.recordQueries.push(cmsCompressed);
                    }
                    data.context.doSearch = true;
                }
            });

            box.getScope().chains.request.build.add({
                name: "addProductList",
                fire: function (data, scope) {
                    var suggestionsLimit = klevu.search.modules.kmcInputs.base.getMaxNumberOfProductSuggestions();
                    if (data.context.term && data.context.term != "" && data.context.term != "*" && suggestionsLimit) {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var productList = klevu.extend(true, {}, parameterMap.recordQuery);
                        productList.id = "productList";
                        productList.typeOfRequest = "SEARCH";
                        productList.settings.query.term = data.context.term;
                        productList.settings.typeOfRecords = ["KLEVU_PRODUCT"];
                        productList.settings.fallbackQueryId = "productListFallback";
                        productList.settings.limit = suggestionsLimit;
                        productList.settings.searchPrefs = ["searchCompoundsAsAndQuery"];
                        productList.settings.sort = "RELEVANCE";

                        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                        if (layoutType.toLowerCase() === "basic") {
                            productList.settings.limit = 12;
                            var isFiltersEnabled = klevu.search.modules.kmcInputs.base.getFiltersEnableValue();
                            if (isFiltersEnabled === true) {
                                productList.filters.filtersToReturn.enabled = true;
                                var rangeFilterSettings = klevu.search.modules.kmcInputs.base.getFacetRangeFilterSettings();
                                if (rangeFilterSettings) {
                                    productList.filters.filtersToReturn.rangeFilterSettings = [rangeFilterSettings];
                                }
                            }
                        }

                        box.getScope().data.context.activeQueryId = "productList";
                        data.request.current.recordQueries.push(productList);
                    }
                    data.context.doSearch = true;
                }
            });

            box.getScope().chains.request.build.add({
                name: "addProductListFallback",
                fire: function (data, scope) {
                    if (data.context.term && data.context.term != "" && data.context.term != "*") {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var productListFallback = klevu.extend(true, {}, parameterMap.recordQuery);
                        productListFallback.id = "productListFallback";
                        productListFallback.typeOfRequest = "SEARCH";
                        productListFallback.isFallbackQuery = "true";
                        productListFallback.settings.query.term = "*";
                        productListFallback.settings.typeOfRecords = ["KLEVU_PRODUCT"];
                        productListFallback.settings.searchPrefs = ["excludeDescription", "searchCompoundsAsAndQuery"];
                        productListFallback.settings.limit = 3;
                        productListFallback.settings.sort = "RELEVANCE";

                        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                        if (layoutType.toLowerCase() === "basic") {
                            productListFallback.settings.limit = 12;
                            productListFallback.filters.filtersToReturn.enabled = true;
                        }

                        data.request.current.recordQueries.push(productListFallback);
                    }
                    data.context.doSearch = true;
                }
            });

            // where to render the response
            box.getScope().chains.template.render.add({
                name: "renderResponse",
                fire: function (data, scope) {
                    if (data.context.isSuccess) {
                        scope.kScope.template.setData(data.template);
                        var targetBox = "klevuTemplateBase";
                        var element = scope.kScope.template.convertTemplate(scope.kScope.template.render(targetBox));
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        target.innerHTML = '';
                        target.classList.add("klevuTarget");
                        target.classList.add("kuQuickSearchResultsContainer");
                        target.classList.remove("searchRequestLoading");
                        scope.kScope.element.kData = data.template;
                        scope.kScope.template.insertTemplate(target, element);
                    }
                }
            });

            box.getScope().chains.template.process.success.add({
                name: "processCurrencySetting",
                fire: function (data, scope) {
                    var landingCurrencies = box.getScope().template.getTranslator().getCurrencyObject().getCurrencys();
                    var productCurrency = "";
                    klevu.each(data.template.query, function (key, items) {
                        if (!klevu.isUndefined(items) && productCurrency == "") {
                            klevu.each(items.result, function (key, result) {
                                if (result.currency && result.currency.length) {
                                    productCurrency = result.currency;
                                }
                            });
                        }
                    });
                    if (productCurrency.length && !landingCurrencies[productCurrency]) {
                        landingCurrencies[productCurrency] = klevu.search.modules.kmcInputs.base.getPriceFormatterObject(productCurrency);
                        var currencyLanding = box.getScope().template.getTranslator().getCurrencyObject();
                        currencyLanding.setCurrencys(landingCurrencies);
                        currencyLanding.mergeToGlobal();
                    }
                }
            });

            // Make filter multi-select or single select
            var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
            if (layoutType.toLowerCase() === "basic") {

                box.getScope().chains.template.process.success.add({
                    name: "processFilters",
                    fire: function (data, scope) {
                        var queryIds = [];
                        klevu.each(data.template.query, function (key, value) {
                            queryIds.push(key);
                        });
                        if (queryIds.length) {
                            data.template.queryIds = queryIds;
                            klevu.each(data.template.queryIds, function (key, value) {
                                var items = klevu.getObjectPath(data.template.query, value);
                                if (!klevu.isUndefined(items)) {
                                    klevu.each(items.filters, function (keyFilter, filter) {
                                        filter.multiselect = klevu.search.modules.kmcInputs.base.getFilterMultiSelectValue();
                                    });
                                }
                            });
                        }
                    }
                });
            }

            // where to position the template
            box.getScope().chains.template.events.add({
                name: "positionTemplate",
                fire: function (data, scope) {

                    var position, leftPosition, topPosition, searchBoxWidth, searchBoxHeight,
                        screenWidth, minLtrWidth, halfScreen;

                    var getScreenWidth = function () {
                        var doc = document,
                            docBody = doc.body,
                            docElem = doc.documentElement,
                            win = window,
                            viewportWidth, viewportHeight;

                        // the more standards compliant browsers
                        // (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
                        if (typeof (docBody.clientWidth) == 'number') {
                            viewportWidth = docBody.clientWidth;
                        } else if (typeof win.innerWidth !== 'undefined') {
                            viewportWidth = win.innerWidth;
                        } else if (typeof docElem != 'undefined' &&
                            typeof docElem.clientWidth != 'undefined' &&
                            docElem.clientWidth != 0) {
                            // IE6 in standards compliant mode
                            // (i.e. with a valid doctype as the first line in the document)
                            viewportWidth = docElem.clientWidth;
                        } else {
                            // older versions of IE
                            viewportWidth = doc.getElementsByTagName('body')[0].clientWidth
                        }
                        return viewportWidth;
                    };

                    var getSearchBoxPosition = function (searchBox) {
                        var _x = 0,
                            _y = 0,
                            currEl = searchBox,
                            style,
                            position,
                            doc = document,
                            body = doc.body,
                            fixedPosition = false,
                            oldOffsetTop = 0,
                            win = window;

                        while (currEl && currEl.tagName.toLowerCase() !== 'body') {
                            if (!win.getComputedStyle) {
                                win.getComputedStyle = function (searchBox, pseudo) {
                                    this.searchBox = searchBox;
                                    this.getPropertyValue = function (prop) {
                                        var re = /(\-([a-z]){1})/g;
                                        if (prop === 'float') {
                                            prop = 'styleFloat';
                                        }
                                        if (re.test(prop)) {
                                            prop = prop.replace(re, function () {
                                                return arguments[2].toUpperCase();
                                            });
                                        }
                                        return searchBox.currentStyle[prop] ? searchBox.currentStyle[prop] : null;
                                    }
                                    return this;
                                }
                            }
                            style = win.getComputedStyle(currEl, null);
                            if (style) {
                                position = style.getPropertyValue('position');
                                if (position === 'fixed') {
                                    fixedPosition = true;
                                    break;
                                } else {
                                    currEl = currEl.parentNode;
                                }
                            } else {
                                currEl = currEl.parentNode;
                            }
                        }
                        var change = 1,
                            scrollTop = (win.pageYOffset !== undefined) ? win.pageYOffset :
                            (doc.documentElement || body.parentNode || body).scrollTop;
                        while (searchBox && !isNaN(searchBox.offsetLeft) &&
                            !isNaN(searchBox.offsetTop)) {
                            _x += searchBox.offsetLeft - searchBox.scrollLeft;
                            if (fixedPosition && change === 1) {
                                _y += searchBox.offsetTop + scrollTop;
                                change = 0;
                            } else {
                                _y += searchBox.offsetTop;
                            }
                            searchBox = searchBox.offsetParent;
                        }
                        return {
                            top: _y,
                            left: _x
                        };
                    };

                    screenWidth = getScreenWidth();
                    position = getSearchBoxPosition(scope.kElem);

                    topPosition = position.top;
                    leftPosition = position.left;
                    searchBoxWidth = scope.kElem.offsetWidth;
                    searchBoxHeight = scope.kElem.offsetHeight;

                    halfScreen = screenWidth / 2;
                    minLtrWidth = searchBoxWidth;

                    divTop = searchBoxHeight + topPosition + 'px';
                    if (leftPosition >= halfScreen) {
                        divRight = screenWidth - (leftPosition + searchBoxWidth) + 'px';
                        divLeft = 'auto';
                    } else {
                        divRight = 'auto';
                        divLeft = leftPosition + 'px';
                    }

                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    klevu.dom.find(".klevuWrap", target)[0].style = "top:" + divTop + ";left: " + divLeft + ";right: " + divRight + ";";
                }
            });

            box.getScope().chains.template.events.add({
                name: "manageKlevuTemplateBlocksStatus",
                fire: function (data, scope) {
                    klevu.baseStructure.base.initialize(scope);
                }
            });

            box.getScope().chains.request.control.addBefore("sanitiseRequestSuggestions", {
                name: "storeOriginRequestSuggestions",
                fire: function (data, scope) {
                    var reqSuggestions = klevu.getObjectPath(data, "request.current.suggestions");
                    klevu.setObjectPath(data, "request.original.suggestions", klevu.extend([], reqSuggestions));
                }
            });

            box.getScope().chains.request.control.addBefore("sanitiseRequestQuery", {
                name: "storeOriginRequestRecordQueries",
                fire: function (data, scope) {
                    var reqRecordQueries = klevu.getObjectPath(data, "request.current.recordQueries");
                    klevu.setObjectPath(data, "request.original.recordQueries", klevu.extend([], reqRecordQueries));
                }
            });

            var updateClassBasedOnTheTerm = function (data, scope) {
                var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                if (target) {
                    target.classList.remove("kuEmptySearchBox");
                    target.classList.remove("kuSearchBoxWithTerm");
                    var term = klevu.getObjectPath(data, "context.term");
                    if (term && term.length) {
                        target.classList.add("kuSearchBoxWithTerm");
                    } else {
                        target.classList.add("kuEmptySearchBox");
                    }
                }
            }

            box.getScope().chains.events.focus.add({
                name: "addSearchBoxStatusClass",
                fire: function (data, scope) {
                    updateClassBasedOnTheTerm(data, scope);
                }
            });

            box.getScope().chains.events.keyUp.add({
                name: "addSearchBoxStatusClass",
                fire: function (data, scope) {
                    updateClassBasedOnTheTerm(data, scope);
                }
            });

            box.getScope().chains.response.success.addAfter("processQuery", {
                name: "matchSearchTerm",
                fire: function (data, scope) {
                    var currentInputValue = (scope.kScope.element && scope.kScope.element.value) ? scope.kScope.element.value : "";
                    var responseTerm = data.context.term + "";
                    if (currentInputValue && responseTerm) {
                        currentInputValue = currentInputValue.trim();
                        responseTerm = responseTerm.trim();
                        if (currentInputValue.length && responseTerm.length) {
                            if (currentInputValue.toLowerCase() !== responseTerm.toLowerCase()) {
                                return false;
                            }
                        }
                    }
                }
            });

            try {
                klevu.event.attach(box.getScope().element, "paste", function (event) {
                    setTimeout(function () {
                        var tempElement = box.getScope().element;
                        tempElement.kScope.data = tempElement.kObject.resetData(tempElement);
                        klevu.event.fireChain(tempElement.kScope, "chains.events.focus", tempElement, tempElement.kScope.data, event);
                    }, 10);
                });
            } catch (error) {
                console.error(error);
            }

            // override form action
            box.getScope().element.kElem.form.action = klevu.getSetting(box.getScope().settings, "settings.url.landing", false);

            /**
             * Init search request loader
             */
            // var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
            // if (layoutType.toLowerCase() !== "basic") {
            klevu.search.modules.requestLoader.base.initSearchRequestLoader(box.getScope());
            // }
        });
    }
});

/**
 * Attach core event to add quick search analytics
 */

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "attachQuickSearchAnalyticsEvents",
    fire: function () {
        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            box.getScope().element.kScope.analyticsDelay = {
                analyticsReqTimeOut: null,
                delay: 1000
            };

            /**
             * Send term request for analytics
             */
            box.getScope().chains.template.events.add({
                name: "doAnalytics",
                fire: function (data, scope) {
                    var hasFacetedLayoutTextDisplayed = false;
                    var term = data.context.term;
                    var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                    var quickFacetedLayoutMinCharsValue = klevu.getSetting(scope.kScope.settings, "settings.search.quickFacetedLayoutMinChars");
                    if (layoutType.toLowerCase() === "basic") {
                        if (term && term != "" && term.length < Number(quickFacetedLayoutMinCharsValue)) {
                            hasFacetedLayoutTextDisplayed = true;
                        }
                    }
                    if (hasFacetedLayoutTextDisplayed) {
                        return;
                    }


                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var searchResultContainer = klevu.dom.find(".klevuQuickSearchResults", target)[0];

                    var dataSection = (searchResultContainer && searchResultContainer.dataset.section) ? searchResultContainer.dataset.section : "unknown";
                    scope.kScope.data.context.section = dataSection;

                    var boxScope = box.getScope().element.kScope;
                    var termOptions = klevu.analyticsUtil.base.getTermOptions(boxScope, true);
                    if (termOptions) {
                        termOptions.klevu_term = (termOptions.klevu_term) ? termOptions.klevu_term.trim() : "";
                        if (termOptions.klevu_term != "" && termOptions.klevu_term != "*") {
                            termOptions.klevu_src = termOptions.klevu_src.replace("]]", ";;template:quick-search]]");
                            termOptions.klevu_src = termOptions.klevu_src;
                            klevu.analyticsEvents.term(termOptions);
                        }
                    }
                }
            });

            /**
             * Function to add result product click analytics
             */
            box.getScope().chains.template.events.add({
                name: "doResultProductsAnalytics",
                fire: function (data, scope) {
                    /**
                     * Event to fire on quick search product click
                     */

                    klevu.analyticsUtil.base.registerAutoSuggestTermEvent(
                        scope.kScope,
                        ".klevuAutosuggestions",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.term
                    );

                    klevu.analyticsUtil.base.registerAutoSuggestPageClickEvent(
                        scope.kScope,
                        ".klevuCmsSuggestions",
                        "cmsCompressed",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.click
                    );

                    klevu.analyticsUtil.base.registerAutoSuggestPageClickEvent(
                        scope.kScope,
                        ".klevuCategorySuggestions",
                        "categoryCompressed",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.click
                    );

                    klevu.analyticsUtil.base.registerAutoSuggestProductClickEvent(
                        scope.kScope,
                        ".klevuQuickSearchResults",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.click
                    );
                }
            });

        });
    }
});/**
 * Promotional Banner module for Quick Search results
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "eventAddPromotionalBannersOnQuickSearch",
    fire: function () {

        var staticQuickSearchBannerData = [];
        klevu.search.modules.promotionBanner.base.init(staticQuickSearchBannerData);

        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickPromotionBanner"), "klevuQuickPromotionBanner", true);

            box.getScope().chains.template.process.success.add({
                name: "validateResultSetForPromotionalBanner",
                fire: function (data, scope) {
                    var hasEmptyFound = false;
                    var productList = klevu.getObjectPath(data, "template.query.productList.result");
                    if (!productList || !productList.length) {
                        var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue();
                        if (isCmsEnabled) {
                            var cmsCompressed = klevu.getObjectPath(data, "template.query.cmsCompressed.result");
                            if (!cmsCompressed || !cmsCompressed.length) {
                                hasEmptyFound = true;
                            }
                        } else {
                            hasEmptyFound = true;
                        }
                    }
                    var term = klevu.getObjectPath(data, "template.settings.term");
                    if (!term || !term.length) {
                        hasEmptyFound = true;
                    }
                    klevu.setObjectPath(data, "template.modules.promotionalBanner.hasNoResultFound", hasEmptyFound);
                }
            });

            box.getScope().chains.template.process.success.add({
                name: "appendBanners",
                fire: function (data, scope) {
                    var quickBannerList = klevu.search.modules.promotionBanner.base.getQuickSearchBanners();
                    if (quickBannerList && quickBannerList.length) {
                        data.template.banners = {
                            "top": [],
                            "bottom": []
                        };
                        var defaultBanner = '';
                        var isDefaultAppear = true;
                        var defaultBannerPosition = 'top';
                        if (!klevu.isEmptyObject(quickBannerList)) {
                            klevu.each(quickBannerList, function (index, value) {
                                if (value.hasOwnProperty("showForTerms")) {
                                    if (value.showForTerms == null) {
                                        defaultBannerPosition = value.position;
                                        defaultBanner = value;
                                    } else if (!klevu.isEmptyObject(value.showForTerms)) {
                                        klevu.each(value.showForTerms, function (i, term) {
                                            if (data.context.term == term) {
                                                var position = value.position ? value.position : 'top';
                                                data.template.banners[position].push(value);
                                                isDefaultAppear = false;
                                            }
                                        });
                                    }
                                }
                            });
                        }
                        if (isDefaultAppear && defaultBanner) {
                            data.template.banners[defaultBannerPosition].push(defaultBanner);
                        }
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachBannerClickEvent",
                fire: function (data, scope) {
                    klevu.analyticsUtil.base.registerBannerClickEvent(
                        scope.kScope,
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.bannerClick
                    );
                }
            });

        });
    }
});/**
 *  Product image path update for Magento framework
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "updateMagentoSearchResultProductImagePath",
    fire: function () {

        /**
         * Event to update product image url for magento store 
         */
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().chains.template.process.success.add({
                name: "updateProductImagePath",
                fire: function (data, scope) {
                    var productDataModification = klevu.search.modules.productDataModification;
                    if (productDataModification) {
                        productDataModification.base.updateImagePath(scope.kScope);
                    }
                }
            });
        });
    }
});/**
 * Module for Popular products
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "addPopularSearchEvents",
    fire: function () {

        var isPopularSearchEnabled = klevu.search.modules.kmcInputs.base.getShowPopularSearchesValue();
        if (!isPopularSearchEnabled) {
            return;
        }


        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#kuTemplatePopularSearches"), "kuTemplatePopularSearches", true);

            /**
             * Event to add popular searches data into the data template object
             */
            box.getScope().chains.template.process.success.add({
                name: "addPopularSearchData",
                fire: function (data, scope) {
                    data.template.popularSearches = [];
                    if (!data.context.term || data.context.term == "" || data.context.term == "*") {
                        data.template.popularSearches = klevu.search.modules.kmcInputs.base.getWebstorePopularTermsValue();;
                    }
                }
            });

            /**
             * Event to bind popular searches element click event
             */
            box.getScope().chains.template.events.add({
                name: "attachPopularSearchUIEvents",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    klevu.each(klevu.dom.find(".kuPopularSearchTerm", target), function (key, element) {
                        klevu.event.attach(element, "click", function (event) {
                            var termValue = element.dataset.value;
                            if (termValue) {
                                scope.kElem.value = termValue;
                                var target = klevu.dom.helpers.getClosest(element, ".klevuTarget");
                                if (target) {
                                    var elScope = target.kElem;
                                    elScope.kScope.data = elScope.kObject.resetData(elScope.kElem);
                                    elScope.kScope.data.context.keyCode = 0;
                                    elScope.kScope.data.context.eventObject = event;
                                    elScope.kScope.data.context.event = "keyUp";
                                    elScope.kScope.data.context.preventDefault = false;
                                    klevu.event.fireChain(elScope.kScope, "chains.events.keyUp", elScope, elScope.kScope.data, event);
                                }
                            }
                        });
                    });
                }
            });

        });
    }
});(function (klevu) {

    klevu.extend(true, klevu.search.modules, {
        recentSearches: {
            base: {
                limit: 4,

                /**
                 * Function to add search term to the local storage
                 * @param {*} scope 
                 * @param {*} term 
                 */
                addSearchTerm: function (scope, term) {
                    if (!term || term == "") {
                        return;
                    }
                    var limit = (this.limit) ? this.limit : 4;
                    var storage = klevu.getSetting(scope.settings, "settings.storage");
                    storage.recentSearches.setStorage("local");
                    storage.recentSearches.mergeFromGlobal();

                    var storedKeywords = storage.recentSearches.getElement("ku_keywords");
                    if (storedKeywords && storedKeywords != "ku_keywords") {
                        storedKeywords = storedKeywords.replace(new RegExp(term + ",", "g"), "");
                        storedKeywords = storedKeywords.replace(new RegExp(term), "", "g");
                        term = term + "," + storedKeywords;
                    } else {
                        term = term + ",";
                    }

                    var updatedList = [];
                    var termList = term.split(",");
                    klevu.each(termList, function (key, item) {
                        if (item) {
                            if (updatedList.length < limit) {
                                updatedList.push(item);
                            }
                        }
                    });
                    term = updatedList.join(",");
                    storage.recentSearches.addElement("ku_keywords", term);
                    storage.recentSearches.mergeToGlobal();
                },

                /**
                 * function to get search terms
                 * @param {*} scope 
                 */
                getSearchTerms: function (scope) {
                    var storedTerms = [];
                    var storage = klevu.getSetting(scope.settings, "settings.storage");
                    storage.recentSearches.setStorage("local");
                    storage.recentSearches.mergeFromGlobal();
                    var storedKeywords = storage.recentSearches.getElement("ku_keywords");
                    if (storedKeywords && storedKeywords != "ku_keywords") {
                        storedTerms = storedKeywords.split(",");
                    }
                    return storedTerms;
                }
            },
            build: true
        }
    });

})(klevu);

//translations
klevu.extend(true,klevu.search.modules, {
    locale:{
        globalTranslations : {
            en: {
                "Recent Searches" : "Recent Searches"
            },
            ar: {
                "Recent Searches" : "عمليات البحث الأخيرة"
            },
            bg: {
                "Recent Searches" : "Последни търсения"
            },
            da: {
                "Recent Searches" : "Seneste søgninger"
            },
            de: {
                "Recent Searches" : "Zuletzt gesucht"
            },
            el: {
                "Recent Searches" : "Πρόσφατες αναζητήσεις"
            },
            es: {
                "Recent Searches" : "Búsquedas recientes"
            },
            et: {
                "Recent Searches" : "Viimased otsingud"
            },
            fa: {
                "Recent Searches" : "تحقیقات اخیر"
            },
            fi: {
                "Recent Searches" : "Viimeaikaiset haut"
            },
            fr: {
                "Recent Searches" : "recherches récentes"
            },
            he: {
                "Recent Searches" : "חיפושים אחרונים"
            },
            hr: {
                "Recent Searches" : "zadnjih pretraga"
            },
            hu: {
                "Recent Searches" : "Legutóbbi keresések"
            },
            is: {
                "Recent Searches" : "Nýlegar leitir"
            },
            it: {
                "Recent Searches" : "Ricerche recenti"
            },
            ja: {
                "Recent Searches" : "最近の検索"
            },
            ko: {
                "Recent Searches" : "최근 검색"
            },
            lv: {
                "Recent Searches" : "Nesenie meklējumi"
            },
            nb: {
                "Recent Searches" : "Tidligere søk"
            },
            nl: {
                "Recent Searches" : "recente zoekopdrachten"
            },
            no: {
                "Recent Searches" : "Tidligere søk"
            },
            pl: {
                "Recent Searches" : "Ostatnie wyszukiwania"
            },
            pt: {
                "Recent Searches" : "pesquisas recentes"
            },
            ro: {
                "Recent Searches" : "Căutări recente"
            },
            ru: {
                "Recent Searches" : "Последние поисковые запросы"
            },
            sk: {
                "Recent Searches" : "Nedávne vyhľadávanie"
            },
            sl: {
                "Recent Searches" : "Zadnje poizvedbe"
            },
            sr: {
                "Recent Searches" : "Рецент Сеарцхес"
            },
            sv: {
                "Recent Searches" : "nya sökningar"
            },
            tr: {
                "Recent Searches" : "son aramalar"
            },
            vi: {
                "Recent Searches" : "Tìm kiếm gần đây"
            },
            zh: {
                "Recent Searches" : "最近搜索"
            }

        }
    }
});
/**
 * Module for Recently Searched Keywords
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "addRecentKMCSearchEvents",
    fire: function () {

        var showRecentSearches = klevu.search.modules.kmcInputs.base.getShowRecentSearchesValue();
        if (!showRecentSearches) {
            return;
        }

        var apiKey = klevu.getGlobalSetting( "search.apiKey" ,klevu.getGlobalSetting( "global.apiKey" ));
        var recentSearches = (apiKey && apiKey.length) ? "recentSearches_" + apiKey : "recentSearches";

        var options = {
            storage: {
                recentSearches: klevu.dictionary(recentSearches)
            }
        };
        klevu(options);

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            var storage = klevu.getSetting(box.getScope().settings, "settings.storage");
            storage.recentSearches.setStorage("local");

            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#kuTemplateRecentSearches"), "kuTemplateRecentSearches", true);

            box.getScope().chains.events.submit.add({
                name: "addRecentSearchInputs",
                fire: function (data, scope) {
                    klevu.search.modules.recentSearches.base.addSearchTerm(scope.kScope, data.context.term);
                }
            });

            box.getScope().chains.template.process.success.add({
                name: "getRecentSearchesData",
                fire: function (data, scope) {
                    data.template.recentSearches = [];
                    if (!data.context.term || data.context.term == "" || data.context.term == "*") {
                        data.template.recentSearches = klevu.search.modules.recentSearches.base.getSearchTerms(scope.kScope);
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachRecentSearchUIEvents",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    klevu.each(klevu.dom.find(".kuRecentSearchTerm", target), function (key, element) {
                        klevu.event.attach(element, "click", function (event) {
                            var termValue = element.dataset.value;
                            if (termValue) {
                                scope.kElem.value = termValue;
                                var target = klevu.dom.helpers.getClosest(element, ".klevuTarget");
                                if (target) {
                                    var elScope = target.kElem;
                                    elScope.kScope.data = elScope.kObject.resetData(elScope.kElem);
                                    elScope.kScope.data.context.keyCode = 0;
                                    elScope.kScope.data.context.eventObject = event;
                                    elScope.kScope.data.context.event = "keyUp";
                                    elScope.kScope.data.context.preventDefault = false;
                                    klevu.event.fireChain(elScope.kScope, "chains.events.keyUp", elScope, elScope.kScope.data, event);
                                }
                            }
                        });
                    });
                }
            });

        });

    }
});/**
 * Event to add trending products template and request
 */

(function (klevu) {
    klevu.extend(true, klevu.search.modules, {
        trendingProducts: {
            build: false
        }
    });
})(klevu);

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "attachTrendingProducts",
    fire: function () {

        var trendingProductsObject = klevu.search.modules.kmcInputs.base.getShowTrendingProductsValue();
        if (!trendingProductsObject.showTrendingProducts) {
            return;
        }

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTrendingProductBlock"), "klevuQuickTrendingProductBlock", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuTrendingProducts"), "klevuTrendingProducts", true);

            box.getScope().chains.request.build.add({
                name: "addTrendingProductsList",
                fire: function (data, scope) {
                    if (!data.context.term) {
                        var trendingProductsObject = klevu.search.modules.kmcInputs.base.getShowTrendingProductsValue();
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var trendingProductList = klevu.extend(true, {}, parameterMap.recordQuery);
                        trendingProductList.id = "trendingProductList";
                        trendingProductList.typeOfRequest = "SEARCH";
                        trendingProductList.settings.query.term = data.context.term;
                        trendingProductList.settings.typeOfRecords = ["KLEVU_PRODUCT"];
                        trendingProductList.settings.limit = trendingProductsObject.showTrendingProductsLimit;
                        trendingProductList.settings.sort = "RELEVANCE";
                        data.request.current.recordQueries.push(trendingProductList);
                        data.context.doSearch = true;
                    }
                }
            });

            box.getScope().chains.template.process.success.add({
                name: "assignTrendingProductsLabelValues",
                fire: function (data, scope) {
                    var trendingProductsObject = klevu.search.modules.kmcInputs.base.getShowTrendingProductsValue();
                    klevu.setObjectPath(data, "template.modules.trendingProducts.title", trendingProductsObject.showTrendingProductsCaption);
                }
            });

            box.getScope().chains.template.events.add({
                name: "renderProductsSlider",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    if (target) {
                        target.classList.add("kuPersonalizedSearchRecsEnabled");
                    }
                    setTimeout(function () {
                        klevu.each(klevu.dom.find(".kuTrendingProductsCarousel", target), function (key, element) {
                            klevu.productCarousel.base.initProductsSlider(element);
                        });
                    }, 10);
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachPersonalizedSearchTrackingEventTrending",
                fire: function (data, scope) {
                    klevu.analyticsUtil.base.registerPersonalizedSearchTrackingClickEvent(
                        scope.kScope,
                        ".klevuQuickSearchTrendingResults",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.personalizedSearchTracking
                    );
                }
            });

        });

        klevu.setObjectPath(klevu.search.modules, "trendingProducts.build", true);
    }
});/**
 * Module for Recent viewed products
 */

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "attachRecentViewedProducts",
    fire: function () {

        var recentlyViewedItemsObject = klevu.search.modules.kmcInputs.base.getShowRecentlyViewedItemsValue();
        if (!recentlyViewedItemsObject.showRecentlyViewedItems) {
            return;
        }

        klevu.search.modules.recentViewedProducts.base.limit = recentlyViewedItemsObject.showRecentlyViewedItemsLimit;

        var apiKey = klevu.getGlobalSetting( "search.apiKey" ,klevu.getGlobalSetting( "global.apiKey" ));
        var recentViewedProducts = (apiKey && apiKey.length) ? "recentViewedProducts_" + apiKey : "recentViewedProducts";

        var options = {
            storage: {
                recentViewedProducts: klevu.dictionary(recentViewedProducts)
            }
        };
        klevu(options);

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            var storage = klevu.getSetting(box.getScope().settings, "settings.storage");
            storage.recentViewedProducts.setStorage("local");

            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickRecentViewedProductBlock"), "klevuQuickRecentViewedProductBlock", true);
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuRecentViewedProducts"), "klevuRecentViewedProducts", true);

            box.getScope().chains.request.build.add({
                name: "addRecentViewedProductsList",
                fire: function (data, scope) {
                    if (!data.context.term) {
                        var recentViewedProductList = klevu.search.modules.recentViewedProducts.base.getRecentViewedProductListPayload(scope.kScope, data);
                        if (recentViewedProductList) {
                            data.request.current.recordQueries.push(recentViewedProductList);
                        }
                        data.context.doSearch = true;
                    }
                }
            });

            box.getScope().chains.template.process.success.add({
                name: "assignRecentlyViewedProductsLabelValues",
                fire: function (data, scope) {
                    var recentlyViewedItemsObject = klevu.search.modules.kmcInputs.base.getShowRecentlyViewedItemsValue();
                    klevu.setObjectPath(data, "template.modules.recentlyViewedProducts.title", recentlyViewedItemsObject.showRecentlyViewedItemsCaption);
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachRecentViewProductClick",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    if (target) {
                        klevu.each(klevu.dom.find(".kuTrackRecentView", target), function (key, element) {
                            klevu.event.attach(element, "click", function (event) {
                                var productId = element.dataset.id;
                                if (productId) {
                                    klevu.search.modules.recentViewedProducts.base.addProductId(scope.kScope, productId);
                                }
                            });
                        });
                        target.classList.add("kuPersonalizedSearchRecsEnabled");
                    }
                    setTimeout(function () {
                        klevu.each(klevu.dom.find(".kuRecentlyViewedProductsCarousel", target), function (key, element) {
                            klevu.productCarousel.base.initProductsSlider(element);
                        });
                    }, 10);
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachPersonalizedSearchTrackingEventRecentSearch",
                fire: function (data, scope) {
                    klevu.analyticsUtil.base.registerPersonalizedSearchTrackingClickEvent(
                        scope.kScope,
                        ".klevuQuickSearchRecentResults",
                        klevu.analyticsUtil.base.storage.dictionary,
                        klevu.analyticsUtil.base.storage.personalizedSearchTracking
                    );
                }
            });

        });
    }
});/**
 * Module for fetch data for terms redirecting
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
	name: "addTermRedirection",
	fire: function () {
		klevu.each(klevu.search.extraSearchBox, function (key, box) {
			/**
			 * Event to append URL Redirect Maps to current redirect object
			 */
			box.getScope().chains.template.process.success.add({
				name: "addRedirectURLs",
				fire: function (data, scope) {
					var klevu_keywordUrlMap = klevu.search.modules.kmcInputs.base.getKeywordUrlMap();
					if (typeof klevu_keywordUrlMap !== "undefined" && !klevu.isEmptyObject(klevu_keywordUrlMap)) {
						var redirectsFromSettings = klevu.getSetting(scope.kScope.settings, "settings.search.redirects");
						redirectsFromSettings = !klevu.isUndefined(redirectsFromSettings) ? redirectsFromSettings : {};
						var redirects = klevu.extend(true, {}, redirectsFromSettings);
						klevu.each(klevu_keywordUrlMap, function (i, ele) {
							if (!klevu.isEmptyObject(ele.keywords)) {
								klevu.each(ele.keywords, function (i, a) {
									redirects[a] = ele.url;
								});
							}
						});
						klevu.setSetting(scope.kScope.settings, "settings.search.redirects", redirects);
					}
				}
			});
		});
	}
});/**
 * Module for No Results Found
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
	name: "addNoResultsFoundEvents",
	fire: function () {

		klevu.each(klevu.search.extraSearchBox, function (key, box) {

			box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuTemplateNoResultFoundQuick"), "noResultsFoundQuick", true);
			box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickNoResultsFoundBanners"), "quickNoResultsFoundBanners", true);
			box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#kuQuickNoResultsPopularSearches"), "quickNoResultsPopularSearches", true);
			box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickNoResultsPopularProducts"), "quickNoResultsPopularProducts", true);
			box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickNoResultsPopularProductBlock"), "quickNoResultsPopularProductBlock", true);

			box.getScope().chains.request.build.add({
				name: "addPopularProductsRequest",
				fire: function (data, scope) {
					klevu.search.modules.noResultsFound.base.buildPopularProductsReq(data, scope, 4);
				},
			});

			/**
			 * Event to add no results found object into the data template object
			 */
			box.getScope().chains.template.process.success.add({
				name: "addNoResultsFoundData",
				fire: function (data, scope) {
					data.template.noResultsFoundMsg = klevu.search.modules.noResultsFound.base.getMessage(data.context.term, scope);
					data.template.quickNoResultsFoundBanners = klevu.search.modules.noResultsFound.base.getQuickSearchBanners(data.context.term);
					data.template.quickNoResultsPopularHeading = klevu.search.modules.noResultsFound.base.popularProductsHeading();
					var isPopularSearchesEnabled = klevu.search.modules.noResultsFound.base.isPopularSearchesKeywordsEnabled();
					var klevu_webstorePopularTerms = klevu.search.modules.kmcInputs.base.getWebstorePopularTermsValue();
					if (isPopularSearchesEnabled) {
						if (
							typeof klevu_webstorePopularTerms !== "undefined" &&
							klevu_webstorePopularTerms
						) {
							data.template.noResultsFoundPopularSearches = klevu_webstorePopularTerms;
						}
					}
				},
			});

			/**
			 * Function to add result product click analytics
			 */
			box.getScope().chains.template.events.add({
				name: "registerNoResultFoundProductClickForAnalytics",
				fire: function (data, scope) {
					klevu.analyticsUtil.base.registerAutoSuggestProductClickEvent(
						scope.kScope,
						".klevuQuickSearchNoResultsPopular",
						klevu.analyticsUtil.base.storage.dictionary,
						klevu.analyticsUtil.base.storage.click
					);
				}
			});

		});
	},
});/**
 * Attach Product stock availability label
 */

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "addProductavailabilityLabel",
    fire: function () {
        /** Set Template */
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#quickSearchResultProductStock"), "quickProductStock", true);
        });
    }
});/**
 * Attach Product VAT label
 */

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "addProductVATLabel",
    fire: function () {
        var getVAT = klevu.search.modules.kmcInputs.base.getVatCaption();
        if (!getVAT || getVAT == "") {
            return;
        }
        /** Set Template */
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#searchResultProductVATLabelQuick"), "searchResultProductVATLabelQuick", true);
        });
    }
});/**
 * Module to add delay in search requests
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "searchDelayModule",
    fire: function () {

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            box.getScope().element.kScope.searchDelay = {
                searchRequestTimeout: null,
                isFromTimeOut: false,
                delay: 250
            };

            box.getScope().chains.events.keyUp.addBefore("isCharacterNotAllowed", {
                name: "keyUpDelay",
                fire: function (data, scope) {
                    if (scope.kScope.searchDelay.searchRequestTimeout) {
                        clearTimeout(scope.kScope.searchDelay.searchRequestTimeout);
                    }
                    scope.kScope.searchDelay.searchRequestTimeout = setTimeout(function () {
                        clearTimeout(scope.kScope.searchDelay.searchRequestTimeout);
                        scope.kScope.searchDelay.searchRequestTimeout = null;
                        scope.kScope.searchDelay.isFromTimeOut = true;
                        var chain = klevu.getObjectPath(scope.kScope, "chains.events.keyUp");
                        if (!klevu.isUndefined(chain) && chain.list().length !== 0) {
                            chain.setScope(scope.kElem);
                            chain.setData(data);
                            chain.fire();
                        }
                    }, scope.kScope.searchDelay.delay);
                }
            });

            box.getScope().chains.events.keyUp.addAfter("keyUpDelay", {
                name: "validateKeyUpDelay",
                fire: function (data, scope) {
                    if (!scope.kScope.searchDelay.isFromTimeOut) {
                        return false;
                    }
                    scope.kScope.searchDelay.isFromTimeOut = false;
                    clearTimeout(scope.kScope.searchDelay.searchRequestTimeout);
                    scope.kScope.searchDelay.searchRequestTimeout = null;
                }
            });
        });
    }
});/**
 * Module for document click events
 */
klevu.coreEvent.build({
    name: "setRemoteConfigDocumentClick",
    fire: function () {
        if (
            klevu.isUndefined(klevu.settings.chains.documentClick) ||
            klevu.isUndefined(klevu.search.extraSearchBox)
        ) {
            return false;
        }
        return true;
    },
    maxCount: 500,
    delay: 30
});

klevu.coreEvent.attach("setRemoteConfigDocumentClick", {
    name: "addEventsToDocumentClick",
    fire: function () {
        klevu.settings.chains.documentClick.add({
            name: "hideOverlay",
            fire: function (data, scope) {
                var parent = klevu.dom.helpers.getClosest(data.event.target, ".kuPreventDocumentClick");
                if (parent) {
                    return;
                }
                klevu.each(klevu.search.extraSearchBox, function (key, box) {
                    var fullPage = klevu.getSetting(box.getScope().settings, "settings.search.fullPageLayoutEnabled", true);
                    if (!fullPage) {
                        var target = klevu.getSetting(box.getScope().settings, "settings.search.searchBoxTarget");
                        target.style = "display: none !important;";
                    }
                });
            }
        });
    }
});/**
 * Add productId to RCP cookie if product is clicked from quick view
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
	name: "addProductIdToCookieQuick",
	fire: function () {
		klevu.search.quick.getScope().chains.template.events.add({
			name: "addClickedProductToCookie",
			fire: function (data, scope) {
				var target = klevu.getSetting(
					scope.kScope.settings,
					"settings.search.searchBoxTarget"
				);
				klevu.each(klevu.dom.find(".trackProductClick", target), function (key, element) {
					klevu.event.attach(element, "click", function (event) {
						var parentElem = klevu.dom.helpers.getClosest(element, ".klevuProduct");
						var dataId = parentElem.dataset.id;
						klevu.dom.helpers.addClickedProductToCookie(dataId);
					});
				});
			},
		});
	},
});

/**
 * Update search query param if personalization search is enabled with RCP cookie value
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
	name: "personalizedSearchQuick",
	fire: function () {
		var isGetEnablePersonalisationInSearch = klevu.search.modules.kmcInputs.base.getEnablePersonalisationInSearch();
		if (!isGetEnablePersonalisationInSearch) {
			return;
		}

		klevu.search.quick.getScope().chains.request.build.add({
			name: "updateSearchParamsQuick",
			fire: function (data, scope) {
				var cookieValue = klevu.dom.helpers.readCookie(
						klevu.settings.constants.COOKIE_KLEVU_RCP
					),
					existingProductIds;
				if (cookieValue && cookieValue.trim() !== "") {
					existingProductIds = cookieValue.split("#-#");
				} else {
					return;
				}
				var n = existingProductIds.length;

				function findNo(n) {
					var quotient = parseInt(n / 3);
					var no = 3 * quotient;
					return no;
				}
				var noOfIdToBeSent = findNo(n);
				var idArray = [];
				for (var i = 0; i < noOfIdToBeSent; i++) {
					var currentIdObj = {};
					currentIdObj.id = window.atob(existingProductIds.shift());
					idArray.push(currentIdObj);
				}

				if (noOfIdToBeSent >= 3) {
					klevu.each(data.request.current.recordQueries, function (key, value) {
						if (value.id == "productList") {
							value.settings.personalisation.enablePersonalisation = true;
							value.settings.personalisation.fields = [];
							value.settings.query.context.recentObjects = [{}];
							value.settings.query.context.recentObjects[0].typeOfRecord =
								"KLEVU_PRODUCT";
							value.settings.query.context.recentObjects[0].records = idArray;
						}
						if (value.id == "productListFallback") {
							value.settings.personalisation.enablePersonalisation = true;
							value.settings.personalisation.fields = [];
							value.settings.query.context.recentObjects = [{}];
							value.settings.query.context.recentObjects[0].typeOfRecord =
								"KLEVU_PRODUCT";
							value.settings.query.context.recentObjects[0].records = idArray;
						}
					});
				}
			},
		});
	},
});/**
 * Facets implementation
 */

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "initializeFacetsForInstantFacetLayout",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        var isFiltersEnabled = klevu.search.modules.kmcInputs.base.getFiltersEnableValue();
        if (layoutType.toLowerCase() === "basic" && isFiltersEnabled === true) {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                /** Load filters template */
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateFilters"), "klevuQuickTemplateFilters", true);

                box.getScope().chains.template.events.add({
                    name: "initializeFilterLeft",
                    fire: function (data, scope) {
                        klevu.search.modules.facets.base.attachFacetItemsClickEvent(scope.kScope);
                    }
                });
            });
        }
    }
});/**
 * Extension for collapse filter functionality
 */


/**
 * Collapse filter
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "collapseFilters",
    fire: function () {

        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() === "basic") {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                
                var apiKey = klevu.settings.search.apiKey;
                var filterShowMore = (apiKey && apiKey.length) ? "filterShowMore_" + apiKey : "filterShowMore";
                var filterCollapse = (apiKey && apiKey.length) ? "filterCollapse_" + apiKey : "filterCollapse";
        
                var options = {
                    storage: {
                        filterShowMore: klevu.dictionary(filterShowMore),
                        filterCollapse: klevu.dictionary(filterCollapse)
                    }
                };
                klevu(options);
        
                var storage = klevu.getSetting(box.getScope().settings, "settings.storage");
        
                storage.filterShowMore.setStorage("session");
                storage.filterShowMore.mergeFromGlobal();
                storage.filterShowMore.addElement("keys", "");
                storage.filterShowMore.mergeToGlobal();
        
                storage.filterCollapse.setStorage("session");
                storage.filterCollapse.mergeFromGlobal();
                storage.filterCollapse.addElement("keys", "");
                storage.filterCollapse.mergeToGlobal();
        
                /**
                 * Function to enable collapsing for filter items
                 */
                box.getScope().chains.template.events.add({
                    name: "enableFilterCollapse",
                    fire: function (data, scope) {
                        klevu.search.modules.collapseFilters.base.initialize(scope.kScope);
                    }
                });
        
                /**
                 * Function to set filter priority list and reorder filter list
                 */
                box.getScope().chains.template.render.addBefore("renderResponse", {
                    name: "collapseFilterPosition",
                    fire: function (data, scope) {
                        if (data.context.isSuccess) {
                            var collapsedFilters = [];
                            klevu.search.modules.collapseFilters.base.collapse(data, collapsedFilters, 'productList');
                        }
                    }
                });

            });
        }


        
    }
});klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "attachQuickSearchResultItemSort",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() === "basic") {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateSortBy"), "klevuQuickTemplateSortBy", true);

                var options = {
                    storage: {
                        quickSort: klevu.dictionary("quickSort")
                    }
                };
                klevu(options);

                box.getScope().chains.request.build.add({
                    name: "setSortBy",
                    fire: function (data, scope) {
                        var landingStorage = klevu.getSetting(scope.kScope.settings, "settings.storage");
                        klevu.each(data.request.current.recordQueries, function (key, query) {
                            var sort = (landingStorage.quickSort.getElement(query.id) == query.id) ? false : landingStorage.quickSort.getElement(query.id);
                            if (sort) {
                                klevu.setObjectPath(data, "template.modules.quickFacetedLayoutSort.currentSort", sort);
                                query.settings.sort = sort;
                            }
                        });
                    }
                });

                var storage = klevu.getSetting(box.getScope().settings, "settings.storage");
                storage.quickSort.setStorage("local");
                storage.quickSort.mergeFromGlobal();

                box.getScope().chains.template.events.add({
                    name: "SortBySort",
                    fire: function (data, scope) {
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        klevu.each(klevu.dom.find(".kuDropdown .kuSort", target), function (key, value) {
                            klevu.event.attach(value, "click", function (event) {
                                klevu.setObjectPath(data, "template.modules.quickFacetedLayoutSort.currentSort", value.dataset.value);
                                var section = klevu.dom.helpers.getClosest(this, ".klevuMeta");
                                var target = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                                var storageEngine = klevu.getSetting(target.kScope.settings, "settings.storage");
                                storageEngine.quickSort.addElement(section.dataset.section, this.dataset.value);
                                storageEngine.quickSort.mergeToGlobal();
                                var scope = target.kElem;
                                scope.kScope.data = scope.kObject.resetData(scope.kElem);
                                scope.kScope.data.context.keyCode = 0;
                                scope.kScope.data.context.eventObject = event;
                                scope.kScope.data.context.event = "keyUp";
                                scope.kScope.data.context.preventDefault = false;
                                klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + section.dataset.section + ".settings.offset", 0);
                                klevu.event.fireChain(scope.kScope, "chains.events.keyUp", scope, scope.kScope.data, event);
                            });
                        });
                    }
                });


            });
        }
    }
});klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "attachQuickResultViewSwitch",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() === "basic") {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {

                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#kuTemplateQuickResultsViewSwitch"), "kuTemplateQuickResultsViewSwitch", true);
                var viewStorageKey = (klevu.settings.search.apiKey) ? "quickResultView_" + klevu.settings.search.apiKey : "quickResultView_";
                var options = {
                    storage: {
                        quickResultView: klevu.dictionary(viewStorageKey)
                    }
                };
                klevu(options);

                box.getScope().chains.template.events.add({
                    name: "attachViewSwitchEvents",
                    fire: function (data, scope) {
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        klevu.each(klevu.dom.find(".kuViewSwitch", target), function (key, element) {

                            setTimeout(function () {
                                var section = klevu.dom.helpers.getClosest(element, ".klevuMeta");
                                if (section) {
                                    var hasListMatched = false;
                                    var kuQuickLayoutView = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutView();
                                    klevu.each(klevu.dom.find(".kuViewSwitch", section), function (key, element) {
                                        var storage = klevu.getSetting(scope.kScope.settings, "settings.storage");
                                        storage.quickResultView.setStorage("session");
                                        storage.quickResultView.mergeFromGlobal();
                                        var storedValue = storage.quickResultView.getElement(section.dataset.section);
                                        storedValue = (storedValue !== "grid" && storedValue !== "list") ? kuQuickLayoutView : storedValue;
                                        section.dataset.resultView = storedValue;
                                        if (storedValue == element.dataset.value) {
                                            element.classList.add("kuCurrent");
                                            hasListMatched = true;
                                        }
                                    });
                                    if (!hasListMatched) {
                                        klevu.each(klevu.dom.find(".kuViewSwitch", section), function (key, element) {
                                            if (element.dataset.value == kuQuickLayoutView) {
                                                element.classList.add("kuCurrent");
                                            }
                                        });
                                    }
                                }
                            }, 10);

                            klevu.event.attach(element, "click", function (event) {
                                var section = klevu.dom.helpers.getClosest(element, ".klevuMeta");
                                if (section) {
                                    klevu.each(klevu.dom.find(".kuViewSwitch", section), function (key, element) {
                                        element.classList.remove("kuCurrent");
                                    });
                                }
                                var storage = klevu.getSetting(box.getScope().settings, "settings.storage");
                                element.classList.add("kuCurrent");
                                var eleValue = (element.dataset && element.dataset.value) ? element.dataset.value : "value";
                                var queryId = "";
                                if (section) {
                                    section.dataset.resultView = eleValue;
                                    queryId = section.dataset.section;
                                }
                                storage.quickResultView.setStorage("session");
                                storage.quickResultView.mergeFromGlobal();
                                storage.quickResultView.addElement(queryId, eleValue);
                                storage.quickResultView.mergeToGlobal();
                            });
                        });
                    }
                });
            });
        }
    }
});klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "attachQuickSearchFacetLayoutTabs",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() === "basic") {

            var options = {
                storage: {
                    quickTabs: klevu.dictionary("quickTabs")
                }
            };
            klevu(options);

            var storage = klevu.getSetting(klevu.search.landing.getScope().settings, "settings.storage");
            storage.quickTabs.setStorage("local");
            storage.quickTabs.mergeFromGlobal();

            klevu.each(klevu.search.extraSearchBox, function (key, box) {

                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateTabResults"), "klevuQuickTemplateTabResults", true);
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickOtherContent"), "klevuQuickOtherContent", true);
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateContentBlock"), "klevuQuickTemplateContentBlock", true);

                var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue();
                if (isCmsEnabled) {
                    /** Tab results list */
                    box.getScope().tabResultsList = ['productList', 'cmsCompressed'];
                } else {
                    box.getScope().tabResultsList = ['productList'];
                }

                var translatorQuick = box.getScope().template.getTranslator();
                translatorQuick.addTranslation("Search", "Search");
                translatorQuick.addTranslation("<b>%s</b> productList", "<b>%s</b> Products");
                translatorQuick.addTranslation("<b>%s</b> cmsCompressed", "<b>%s</b> Other results");
                translatorQuick.mergeToGlobal();

                box.getScope().template.setHelper("hasResults", function hasResults(data, name) {
                    if (data.query[name]) {
                        if (data.query[name].result.length > 0) return true;
                    }
                    return false;
                });

                box.getScope().chains.template.process.success.add({
                    name: "processTabs",
                    fire: function (data, scope) {

                        if (box.getScope().tabResultsList && box.getScope().tabResultsList.length) {
                            var tempTabList = [];
                            klevu.each(box.getScope().tabResultsList, function (key, value) {
                                var items = klevu.getObjectPath(data.template.query, value);
                                if (!klevu.isUndefined(items)) {
                                    items.id = value;
                                    items.tab = true;
                                    items.tabText = "<b>%s</b> " + value;
                                    items.sort = key + 1;
                                    tempTabList.push(items);
                                }
                            });

                            var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue();
                            if (isCmsEnabled) {
                                if (tempTabList.length) {
                                    tempTabList.sort(function (a, b) {
                                        return b.sort - a.sort;
                                    });
                                    tempTabList.forEach(function (tabObj) {
                                        data.template.query = klevu.dom.helpers.moveObjectElement(tabObj.id, '', data.template.query);
                                    });
                                }
                            }
                        }
                    }
                });

                //tab swap
                box.getScope().chains.template.events.add({
                    name: "tabContent",
                    fire: function (data, scope) {

                        var landingStorage = klevu.getSetting(klevu.settings, "settings.storage");
                        var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                        klevu.dom.helpers.initializeTabSelection(data, scope, target, landingStorage.quickTabs);

                        var storedActiveTab = landingStorage.quickTabs.getElement("active");
                        if (storedActiveTab && storedActiveTab !== "active") {
                            box.getScope().data.context.activeQueryId = storedActiveTab;
                        }

                        klevu.each(klevu.dom.find(".kuTab", target), function (key, value) {
                            // onclick
                            klevu.event.attach(value, "click", function (event) {

                                event = event || window.event;
                                event.preventDefault();

                                //getScope
                                var section = klevu.dom.helpers.getClosest(this, ".klevuWrap");
                                if (section === null) {
                                    return;
                                }
                                //removeSelectionFromAllTabs
                                klevu.each(klevu.dom.find(".kuTab.kuTabSelected", section), function (key, value) {
                                    value.classList.remove("kuTabSelected");
                                    section.classList.remove(value.dataset.section + "Active");
                                });

                                /**
                                 * Set active query id in data context
                                 */
                                box.getScope().data.context.activeQueryId = value.dataset.section;

                                //add Selection to current tab
                                this.classList.add("kuTabSelected");
                                section.classList.add(this.dataset.section + "Active");
                                var target = klevu.dom.helpers.getClosest(this, ".klevuTarget");
                                var storageEngine = klevu.getSetting(target.kScope.settings, "settings.storage");
                                storageEngine.quickTabs.addElement("active", this.dataset.section);
                                storageEngine.quickTabs.mergeToGlobal();

                                klevu.each(klevu.dom.find('[data-container-id="ku_quick_main_content_container"]', section), function (key, element) {
                                    element.classList.remove("kuActiveTabContent");
                                    var elementSectionQueryId = element.getAttribute("data-content");
                                    if (elementSectionQueryId === value.dataset.section) {
                                        element.classList.add("kuActiveTabContent");
                                    }
                                });

                                /** Initialize price filter slider on tab change */
                                if (klevu.search.modules.filterPriceSlider) {
                                    klevu.search.modules.filterPriceSlider.base.initSlider(data, scope.kScope);
                                }
                            });


                        });
                    }
                });


            });


        }
    }
});

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "attachContentListRequest",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue();
        if (layoutType.toLowerCase() === "basic" && isCmsEnabled) {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                /**
                 * Erase result heading template in case of tab results
                 */
                box.getScope().template.setTemplate("", "klevuQuickTemplateResultsHeadingTitle", true);

                box.getScope().chains.request.build.add({
                    name: "addContentList",
                    fire: function (data, scope) {
                        var parameterMap = klevu.getSetting(scope.kScope.settings, "settings.search.map", false);
                        var contentList = klevu.extend(true, {}, parameterMap.recordQuery);
                        contentList.id = "cmsCompressed";
                        contentList.typeOfRequest = "SEARCH";
                        contentList.settings.query.term = data.context.term;
                        contentList.settings.typeOfRecords = ["KLEVU_CMS"];
                        contentList.settings.searchPrefs = ["searchCompoundsAsAndQuery"];
                        contentList.settings.limit = 12;
                        contentList.filters.filtersToReturn.enabled = true;
                        data.request.current.recordQueries.push(contentList);
                        data.context.doSearch = true;
                    }
                });
            });
        }
    }
});/**
 * Extend addToCart base module for quick search
 */

klevu.coreEvent.attach("addToCartModuleBuild", {
    name: "extendModuleForQuickSearch",
    fire: function () {

        /**
         * Quick search Add to cart button click event
         * @param {*} ele 
         * @param {*} event 
         * @param {*} productList 
         */
        function attachQuickProductAddToCartBtnEvent(ele, event, productList) {
            event = event || window.event;
            event.preventDefault();

            var selected_product;
            var target = klevu.dom.helpers.getClosest(ele, ".klevuQuickAddtoCart");
            var productId = target.getAttribute("data-id");
            klevu.each(productList, function (key, product) {
                if (product.id == productId) {
                    selected_product = product;
                }
            });
            if (selected_product) {
                if (selected_product) {
                    klevu.search.modules.addToCart.base.sendAddToCartRequest(selected_product.id, selected_product.url, 1);
                }
            }
        }

        /**
         * Function to bind events to Quick search product add to cart button
         * @param {*} scope 
         */
        function bindQuickSearchProductAddToCartBtnClickEvent(scope) {
            var self = this;
            var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
            klevu.each(klevu.dom.find(".klevuQuickCartBtn", target), function (key, value) {
                klevu.event.attach(value, "click", function (event) {
                    var parent = klevu.dom.helpers.getClosest(this, ".klevuQuickSearchResults");
                    if (parent && parent.dataset && parent.dataset.section) {
                        var productList = klevu.getObjectPath(scope.data.template.query, parent.dataset.section);
                        if (productList) {
                            self.attachQuickProductAddToCartBtnEvent(this, event, productList.result);
                        }
                    }
                });
            });
        }

        klevu.extend(true, klevu.search.modules.addToCart.base, {
            bindQuickSearchProductAddToCartBtnClickEvent: bindQuickSearchProductAddToCartBtnClickEvent,
            attachQuickProductAddToCartBtnEvent: attachQuickProductAddToCartBtnEvent
        });
    }
});

/**
 *  Add to cart button functionality on quick search
 */

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "addAddToCartButtonQuickSearch",
    fire: function () {

        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() !== "basic") {
            return;
        }

        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            var isAddToCartEnabled = klevu.search.modules.kmcInputs.base.getAddToCartEnableValue();
            if (isAddToCartEnabled) {
                /** Set Template */
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#quickSearchProductAddToCart"), "quickSearchProductAddToCart", true);
                /** Bind quick page add to cart button click event */
                box.getScope().chains.template.events.add({
                    name: "quickSearchProductAddToCartEvent",
                    fire: function (data, scope) {
                        klevu.search.modules.addToCart.base.bindQuickSearchProductAddToCartBtnClickEvent(scope.kScope);
                    }
                });
            }
        });
    }
});

/**
 * Klevu analyticsUtil base extension
 */
klevu.coreEvent.attach("analyticsPowerUp", {
    name: "extAddToCartAnalyticsUtilQuick",
    fire: function () {

        /**
         * Function to register analytics on quick add to cart button
         * @param {*} scope 
         * @param {*} className 
         * @param {*} dictionary 
         * @param {*} element 
         */
        function registerQuickProductAddToCartClickEvent(scope, className, dictionary, element) {
            var target = klevu.getSetting(scope.settings, "settings.search.searchBoxTarget");
            klevu.each(klevu.dom.find(className, target), function (key, value) {
                klevu.event.attach(value, "click", function (event) {
                    var parent = klevu.dom.helpers.getClosest(value, ".klevuProduct");
                    if (parent === null) {
                        return;
                    }
                    var productId = parent.dataset.id;
                    if (productId) {
                        var product = klevu.analyticsUtil.base.getProductDetailsFromId(productId, scope);
                        if (product) {
                            var termOptions = klevu.analyticsUtil.base.getTermOptions(scope);
                            if (termOptions) {
                                termOptions.klevu_keywords = termOptions.klevu_term;
                                termOptions.klevu_productId = product.id;
                                termOptions.klevu_productName = product.name;
                                termOptions.klevu_productUrl = product.url;
                                termOptions.klevu_src = "[[shortlist:add-to-cart;;template:quick]]";
                                delete termOptions.klevu_term;
                                klevu.analyticsUtil.base.storeAnalyticsEvent(dictionary, element, termOptions);
                            }
                        }
                    }
                });
            });
        }

        klevu.extend(true, klevu.analyticsUtil.base, {
            registerQuickProductAddToCartClickEvent: registerQuickProductAddToCartClickEvent
        });

    }
});


/**
 * Function to attach analytics event on add to cart button
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "attachQuickProductAddToCartButtonAnalytics",
    fire: function () {
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            var isAddToCartEnabled = klevu.search.modules.kmcInputs.base.getAddToCartEnableValue();
            if (isAddToCartEnabled) {
                box.getScope().chains.template.events.add({
                    name: "bindAnalyticsOnAddToCartButtonEvent",
                    fire: function (data, scope) {
                        // klevu.analyticsUtil.base.registerQuickProductAddToCartClickEvent(
                        //     scope.kScope,
                        //     ".kuAddtocart",
                        //     klevu.analyticsUtil.base.storage.dictionary,
                        //     klevu.analyticsUtil.base.storage.click
                        // );
                    }
                });
            }
        });
    }
});/**
 * Add Price slider paramter in request object functionality
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
	name: "attachPriceSliderFilter",
	fire: function () {
		var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
		if (layoutType.toLowerCase() === "basic") {
			klevu.each(klevu.search.extraSearchBox, function (key, box) {
				/** Price slider filter request query */
				box.getScope().priceSliderFilterReqQuery = {
					key: "klevu_price",
					minMax: true,
				};

				/**
				 *  Initialize slider
				 */
				box.getScope().chains.template.events.add({
					name: "initSliderFilter",
					fire: function (data, scope) {
						klevu.search.modules.filterPriceSlider.base.initSlider(data, scope.kScope);
					},
				});
			});
		}
	}
});/**
 * Infinite scroll module default value
 */

klevu.interactive(function () {
    var hasInfiniteScrollEnabled = klevu.getSetting(klevu, "settings.theme.modules.resultInfiniteScroll.quickSearch.enable");
    hasInfiniteScrollEnabled = (typeof hasInfiniteScrollEnabled === "undefined") ? false : hasInfiniteScrollEnabled;
    klevu.setSetting(klevu, "settings.theme.modules.resultInfiniteScroll.quickSearch.enable", hasInfiniteScrollEnabled);
});

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "attachQuickInfiniteScroll",
    fire: function () {

        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() !== "basic") {
            return;
        }

        var hasInfiniteScrollEnabled = klevu.getSetting(klevu, "settings.theme.modules.resultInfiniteScroll.quickSearch.enable");
        if (hasInfiniteScrollEnabled === false) {
            return;
        }

        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            box.getScope().chains.events.keyUp.remove({
                name: "scrollToTop"
            });

            box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickTemplateInfiniteScrollDown"), "klevuQuickTemplateInfiniteScrollDown", true);

            box.getScope().chains.events.focus.addBefore("doSearch", {
                name: "resetStoredProducts",
                fire: function (data, scope) {
                    scope.kScope.data.context.triggeredFromInfiniteScroll = false;
                    data.context.existingResponse = [];
                    var allCachedRequests = box.getScope().cache.getAllCache().request;
                    var queryIds = klevu.getObjectPath(data, "template.queryIds");
                    if (queryIds && queryIds.length) {
                        klevu.each(queryIds, function (key, value) {
                            klevu.setObjectPath(scope.kScope.data, "localOverrides.query." + value + ".settings.offset", 0);
                            if (allCachedRequests && allCachedRequests.length) {
                                klevu.each(allCachedRequests, function (key, cacheReq) {
                                    if (cacheReq.id === value) {
                                        cacheReq.settings.clearCache = new Date().getTime();
                                    }
                                });
                            }
                        });
                    }
                }
            });

            box.getScope().chains.response.success.addAfter("addResponseDataQuery", {
                name: "appendExistingResponseForInfiniteScroll",
                fire: function (data, scope) {
                    if (scope.kScope.data.context.triggeredFromInfiniteScroll) {
                        var existingResponse = klevu.getObjectPath(data, "response.current.queryResults");
                        if (existingResponse && existingResponse.length) {
                            klevu.each(existingResponse, function (key, response) {
                                if (response.id === scope.kScope.data.context.infiniteScrollSection) {
                                    response.records = data.context.existingResponse.concat(response.records);
                                }
                            });
                        }
                    } else {
                        data.context.existingResponse = [];
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "hideLoadMoreButton",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var existingResponse = klevu.getObjectPath(data, "response.current.queryResults");
                    if (existingResponse && existingResponse.length) {
                        klevu.each(existingResponse, function (key, response) {
                            var resultMeta = response.meta;
                            var noOfResults = Number(resultMeta.noOfResults);
                            var offset = Number(resultMeta.offset);
                            var totalResultsFound = Number(resultMeta.totalResultsFound);
                            if (noOfResults + offset >= totalResultsFound) {
                                var kuLoadMoreBtn = klevu.dom.find("." + response.id + " .kuLoadMoreBtn", target);
                                if (kuLoadMoreBtn.length) {
                                    var klevuProductLoadMore = klevu.dom.helpers.getClosest(kuLoadMoreBtn[0], ".klevuProductLoadMore");
                                    if (klevuProductLoadMore) {
                                        klevuProductLoadMore.classList.add("hide");
                                    }
                                    kuLoadMoreBtn[0].classList.add("hide");
                                }
                            }
                        });
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachLoadMore",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var activeQueryId = klevu.getObjectPath(box.getScope().data, "context.activeQueryId");
                    if (activeQueryId) {
                        setTimeout(function () {
                            var listContainer = klevu.dom.find("." + activeQueryId + " .kuQuickResultsListContainer", target);
                            if (listContainer && listContainer.length) {
                                listContainer[0].scrollTop = scope.kScope.data.context.quickInfiniteScrollLastScrollPosition;
                            }
                        }, 10);
                    }

                    klevu.setObjectPath(data, "context.windowScrollTriggeredForInfiniteScroll", false);
                    setTimeout(function () {
                        klevu.setObjectPath(data, "context.triggeredFromInfiniteScroll", false);
                    }, 100);

                    klevu.each(klevu.dom.find(".kuLoadMoreBtn", target), function (key, value) {
                        klevu.event.attach(value, "click", function (event) {
                            var lastScrollPosition = 0;
                            var listContainer = klevu.dom.helpers.getClosest(value, ".kuQuickResultsListContainer");
                            if (listContainer) {
                                lastScrollPosition = listContainer.scrollTop;
                                klevu.search.modules.infiniteScroll.base.sendLoadMoreItemsRequest(event, data, lastScrollPosition);
                            }
                        });
                    });
                }
            });

        });


    }
});

klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "attachInfiniteScrollOnWindow",
    fire: function () {

        var hasInfiniteScrollEnabled = klevu.getSetting(klevu, "settings.theme.modules.resultInfiniteScroll.quickSearch.enable");
        if (hasInfiniteScrollEnabled === false) {
            return;
        }

        klevu.each(klevu.search.extraSearchBox, function (key, box) {

            box.getScope().chains.template.events.add({
                name: "hideLoadMoreButtonForWindowScroll",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var kuLoadMoreBtn = klevu.dom.find(".kuLoadMoreBtn", target);
                    if (kuLoadMoreBtn.length) {
                        klevu.each(kuLoadMoreBtn, function (key, element) {
                            var klevuProductLoadMore = klevu.dom.helpers.getClosest(element, ".klevuProductLoadMore");
                            if (klevuProductLoadMore) {
                                klevuProductLoadMore.classList.add("hide");
                            }
                            element.classList.add("hide");
                        });
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "removeQuickElementOnScroll",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var listContainer = klevu.dom.find(".kuQuickResultsListContainer", target);
                    if (listContainer && listContainer.length) {
                        klevu.each(listContainer, function (key, element) {
                            element.onscroll = null;
                        });
                    }
                }
            });

            box.getScope().chains.template.events.add({
                name: "attachBoxContainerScrollEvent",
                fire: function (data, scope) {
                    var target = klevu.getSetting(scope.kScope.settings, "settings.search.searchBoxTarget");
                    var listContainer = klevu.dom.find(".kuQuickResultsListContainer", target);
                    if (listContainer && listContainer.length) {
                        klevu.each(listContainer, function (key, element) {
                            element.onscroll = function (event) {
                                if ((element.scrollTop + window.innerHeight) >= element.scrollHeight + 200) {
                                    var hasAlreadyTriggered = klevu.getObjectPath(data, "context.triggeredFromInfiniteScroll");
                                    if (!hasAlreadyTriggered) {
                                        var activeQueryId = klevu.getObjectPath(box.getScope().data, "context.activeQueryId");
                                        if (activeQueryId) {
                                            var kuLoadMoreBtn = klevu.dom.find("." + activeQueryId + " .kuLoadMoreBtn", target);
                                            if (kuLoadMoreBtn.length) {
                                                kuLoadMoreBtn[0].click();
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            });


        });

    }
});/**
 * attach locale settings
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "search-quick-locale",
    fire: function () {

        var code = klevu.search.modules.locale.getDefaultLanguageCode();
        var klevuTranslations = klevu.search.modules.locale.getTranslations(code);
        klevuTranslations = klevu.search.modules.locale.applyTranslationOverrides(klevuTranslations);

        /**
         * add translations
         */
        var translatorQuick = klevu.search.quick.getScope().template.getTranslator();
        klevu.each(klevuTranslations, function (key, value) {
            translatorQuick.addTranslation(key, value);
        });
        translatorQuick.mergeToGlobal();
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            var translatorBox = box.getScope().template.getTranslator();
            translatorBox.mergeFromGlobal();
        });
    }
});klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "displayProductRating",
    fire: function () {
        /** Set Template */
        if (!klevu.search.modules.kmcInputs.base.showProductRatingQuick()) {
            return;
        } else {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                box.getScope().template.setTemplate(klevu.dom.helpers.getHTML("#klevuQuickProductRating"), "klevuQuickProductRating", true);
            });
        }
    }
})/**
 * Event to update form input query param to settings
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "updateQueryParamFromFormInput",
    fire: function () {
        var queryParam = klevu.getSetting(klevu, "settings.url.queryParam");
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            var searchInputElem = box.getScope().element;
            if (queryParam && queryParam.length) {
                searchInputElem.setAttribute("name", queryParam);
            } else {
                var nameAttr = searchInputElem.getAttribute("name");
                if (nameAttr && nameAttr.length) {
                    klevu.setSetting(klevu, "settings.url.queryParam", nameAttr);
                } else {
                    klevu.setSetting(klevu, "settings.url.queryParam", "q");
                }
            }
        });
    }
});

/**
 * Event to add relevant class to the targeted element
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "addClassToTheTargetElement",
    fire: function () {
        klevu.each(klevu.search.extraSearchBox, function (key, box) {
            var target = klevu.getSetting(box.getScope().settings, "settings.search.searchBoxTarget");
            if (target) {
                var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
                if (layoutType.toLowerCase() === "basic") {
                    target.classList.add("kuQuickSearchFacetedLayout");
                    var isFiltersEnabled = klevu.search.modules.kmcInputs.base.getFiltersEnableValue();
                    if (!isFiltersEnabled) {
                        target.classList.add("kuQuickSearchFacetedLayoutNoFilters");
                    }
                    var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft();
                    if (!isQuickFiltersOnLeft) {
                        target.classList.add("kuQuickSearchFacetedLayoutRightSideFilters");
                    }
                } else {
                    target.classList.add("kuQuickSearchAutoCompleteLayout");
                }
                var isMobileDevice = klevu.dom.helpers.isMobileDevice();
                if (isMobileDevice) {
                    target.classList.add("kuMobileDeviceEnabled");
                }
            }
        });
    }
});

klevu({
    search: {
        quickFacetedLayoutMinChars: 3,
        quickFacetedLayoutMinCharsText: "Please type in at least 3 letters..."
    }
});

/**
 * Event to add updates related to the quick event load
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "instantFacetedLayoutUpdates",
    fire: function () {
        var layoutType = klevu.search.modules.kmcInputs.base.getQuickSearchLayoutType();
        if (layoutType.toLowerCase() === "basic") {
            klevu.each(klevu.search.extraSearchBox, function (key, box) {
                box.getScope().chains.request.build.add({
                    name: "validateRequestForFacetedLayout",
                    fire: function (data, scope) {
                        data.template.showQuickFacetedLayoutCharLimitMessage = false;
                        var term = data.context.term;
                        var quickFacetedLayoutMinCharsValue = klevu.getSetting(scope.kScope.settings, "settings.search.quickFacetedLayoutMinChars");
                        var quickFacetedLayoutMinCharsTextValue = klevu.getSetting(scope.kScope.settings, "settings.search.quickFacetedLayoutMinCharsText");
                        if (term && term != "" && term.length < Number(quickFacetedLayoutMinCharsValue)) {
                            data.template.showQuickFacetedLayoutCharLimitMessage = true;
                            data.template.quickFacetedLayoutMinCharsTextValue = quickFacetedLayoutMinCharsTextValue;
                            data.request.current.recordQueries = [];
                        }
                    }
                });
            });
        }
    }
});

/**
 * Event to trigger quick search initialization
 */
klevu.coreEvent.build({
    name: "setRemoteConfigQuickInitialize",
    fire: function () {
        var setRemoteConfigQuickFlag = klevu.getSetting(klevu, "settings.flags.setRemoteConfigQuick.build", false);
        var setRemoteConfigQuickPowerUp = klevu.getSetting(klevu, "settings.powerUp.quick", false);
        if (setRemoteConfigQuickPowerUp && setRemoteConfigQuickFlag) {
            return true;
        }
        return false;
    },
    maxCount: 150,
    delay: 100
});

/**
 * Event to fire landing search request
 */
klevu.coreEvent.attach("setRemoteConfigQuickInitialize", {
    name: "search-quick-init",
    fire: function () {}
});

/**
 * Event to create clone for extra search box
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "addCloneForExtra",
    fire: function () {
        klevu.search.extra = klevu.searchObjectClone(klevu.search.quick);
    }
});

/**
 * Quick search event build
 */
klevu.coreEvent.attach("setRemoteConfigQuick", {
    name: "enableBuildFlag",
    fire: function () {
        klevu.setSetting(klevu, "settings.flags.setRemoteConfigQuick.build", true, true);
    }
});
}

export default run;