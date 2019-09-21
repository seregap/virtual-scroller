!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).VirtualScroller=t()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=Object.prototype.hasOwnProperty;function n(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function i(e){var t=e.getBoundingClientRect(),n=document.clientLeft||document.body.clientLeft||0,i=document.clientTop||document.body.clientTop||0,r=window.pageYOffset,s=window.pageXOffset;return{top:t.top+r-i,left:t.left+s-n,width:t.width,height:t.height}}function r(){return window.pageYOffset}function s(){return window.innerHeight}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(){if(h()){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=console).log.apply(e,o(["[virtual-scroller]"].concat(n)))}}function h(){return"undefined"!=typeof window&&window.VirtualScrollerDebug}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.getContainerNode=t,this.getState=i,this.measuredItemsHeight=0;for(var r=0;r<i().itemHeights.length;){if(null==i().itemHeights[r]){if(void 0!==this.firstMeasuredItemIndex){this.lastMeasuredItemIndex=r-1;break}}else void 0===this.firstMeasuredItemIndex&&(this.firstMeasuredItemIndex=r),this.measuredItemsHeight+=i().itemHeights[r];r++}}var t,n,i;return t=e,(n=[{key:"_getItemHeight",value:function(e,t){var n=this.getContainerNode();if(n){var i=e-t;if(i>=0&&i<n.childNodes.length)return n.childNodes[i].getBoundingClientRect().height}}},{key:"getItemSpacing",value:function(){var e=this.getContainerNode();if(e&&e.childNodes.length>1){var t=e.childNodes[0],n=e.childNodes[1],i=t.getBoundingClientRect(),r=n.getBoundingClientRect().top-(i.top+i.height);return window.VirtualScrollerDebug&&a("Item spacing",r),r}}},{key:"update",value:function(e,t,n){void 0===this.getState().itemSpacing&&(this.getState().itemSpacing=this.getItemSpacing()),void 0!==this.firstMeasuredItemIndex&&(e>this.lastMeasuredItemIndex+1||t<this.firstMeasuredItemIndex-1)&&(this.previousAverageItemHeight=this.averageItemHeight,this.previousAverageItemHeightSamplesCount=this.lastMeasuredItemIndex-this.firstMeasuredItemIndex+1,this.measuredItemsHeight=0,this.firstMeasuredItemIndex=void 0,this.lastMeasuredItemIndex=void 0);for(var i=this.firstMeasuredItemIndex,r=this.lastMeasuredItemIndex,s=!1,o=e;o<=t;){var a=this._getItemHeight(o,n);void 0!==a&&(this.set(o,a),(void 0===i||o<i)&&(this.measuredItemsHeight+=a,s||(this.firstMeasuredItemIndex=o,s=!0)),(void 0===r||o>r)&&(void 0!==r&&(this.measuredItemsHeight+=a),this.lastMeasuredItemIndex=o)),o++}this.updateAverageItemHeight()}},{key:"updateItemHeight",value:function(e,t){var n=this.get(e),i=this._getItemHeight(e,t);void 0!==n&&void 0!==i&&(this.set(e,i),this.measuredItemsHeight+=i-n)}},{key:"updateAverageItemHeight",value:function(){this.averageItemHeightSamplesCount=this.lastMeasuredItemIndex-this.firstMeasuredItemIndex+1,this.averageItemHeight=this.measuredItemsHeight/this.averageItemHeightSamplesCount}},{key:"getAverage",value:function(){return this.previousAverageItemHeight&&this.previousAverageItemHeightSamplesCount>this.averageItemHeightSamplesCount?this.previousAverageItemHeight:this.averageItemHeight||0}},{key:"get",value:function(e){return this.getState().itemHeights[e]}},{key:"set",value:function(e,t){this.getState().itemHeights[e]=t}},{key:"onPrepend",value:function(e){void 0!==this.firstMeasuredItemIndex&&(this.firstMeasuredItemIndex+=e,this.lastMeasuredItemIndex+=e)}}])&&u(t.prototype,n),i&&u(t,i),e}();function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){g(e,t,n[t])})}return e}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(){function o(i,u){var l=this,I=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),g(this,"onScroll",function(){return l.onUpdateShownItemIndexes({reason:"scroll"})}),g(this,"onResize",function(){return l.onUpdateShownItemIndexes({reason:"resize"})}),g(this,"updateShownItemIndexes",function(e){var t=l.getShownItemIndexes(),n=t.firstShownItemIndex,i=t.lastShownItemIndex,r=t.redoLayoutAfterRender,s=l.getBeforeItemsHeight(n,i),o=l.getAfterItemsHeight(n,i);l.updateWillBeHiddenItemHeightsAndState(n,i),a("~ Layout results "+(l.bypass?"(bypass) ":"")+"~"),a("First shown item index",n),a("Last shown item index",i),a("Before items height",s),a("After items height",o),a("Average item height (calculated on previous render)",l.itemHeights.getAverage()),h()&&(a("Item heights",l.getState().itemHeights.slice()),a("Item states",l.getState().itemStates.slice())),r&&a("Redo layout after render"),l.onShowItems(n,i),l.setState({firstShownItemIndex:n,lastShownItemIndex:i,beforeItemsHeight:s,afterItemsHeight:o},function(){return e(r)})}),g(this,"updateShownItemIndexesRecursive",function(){l.updateShownItemIndexes(function(e){e?setTimeout(function(){l.isMounted?l.updateShownItemIndexesRecursive():l.onDoneUpdatingItemIndexes()},0):l.onDoneUpdatingItemIndexes()})}),g(this,"restoreScroll",function(){var e=l.restoreScrollAfterPrepend,t=e.index,n=e.screenTop;l.restoreScrollAfterPrepend=void 0;var i=l.getItemElement(t).getBoundingClientRect().top-n;0!==i&&(a("Restore scroll position: scroll by",i),window.scrollTo(0,r()+i))}),g(this,"onUpdateShownItemIndexes",function(e){var t=e.reason;e.force;if(0!==l.getItemsCount()&&!l.isUpdatingItemIndexes){if(clearTimeout(l.onUserStopsScrollingTimeout),"scroll"===t){var n=void 0!==l.latestLayoutScreenTopAfterMargin&&r()<l.latestLayoutScreenTopAfterMargin&&l.getState().firstShownItemIndex>0||void 0!==l.latestLayoutScreenBottomAfterMargin&&r()+s()>l.latestLayoutScreenBottomAfterMargin&&l.getState().lastShownItemIndex<l.getItemsCount()-1;if(a(n?"The user has scrolled far enough: force re-render":"The user hasn't scrolled too much: delay re-render"),!n)return l.onUserStopsScrollingTimeout=setTimeout(l.onUserStoppedScrolling,100)}l.updateLayout(t)}}),g(this,"onUserStoppedScrolling",function(){l.isMounted&&l.updateLayout("stopped scrolling")});var c=I.getState,f=I.setState,v=I.onStateChange,p=I.bypass,S=I.bypassBatchSize,y=I.estimatedItemHeight,w=I.onItemFirstRender,x=I.state;a("~ Initialize ~"),x&&(u=x.items),this.bypass=p,this.bypassBatchSize=S||10,this.initialItems=u,this.estimatedItemHeight=y,w&&(this.onItemFirstRender=w),i()&&function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(i()),f?(this.getState=c,this.setState=f):(this.getState=function(){return l.state},this.setState=function(i,r){var s=l.state;l.state=m({},s,i),function(i,r){if(n(i,r))return!0;if("object"!==e(i)||null===i||"object"!==e(r)||null===r)return!1;var s=Object.keys(i),o=Object.keys(r);if(s.length!==o.length)return!1;for(var a=0;a<s.length;a++)if(!t.call(r,s[a])||!n(i[s[a]],r[s[a]]))return!1;return!0}(l.state,s)||(v&&v(l.state,s),l.isMounted&&l.onUpdate(s)),r&&r()}),x&&a("Initial state (passed)",x),this.setState(x||this.getInitialState()),this.getContainerNode=i,this.itemHeights=new d(i,u.length,this.getState),a("Items count",u.length),y&&a("Estimated item height",y)}var u,I,c;return u=o,(I=[{key:"getInitialState",value:function(e){var t,n,i=this.initialItems.length;i>0&&(t=Math.min(0,i-1),n=this.getLastShownItemIndex(t,i)),this.onShowItems(t,n);var r=m({},e,{items:this.initialItems,itemStates:new Array(i),itemHeights:new Array(i),itemSpacing:void 0,beforeItemsHeight:0,afterItemsHeight:0,firstShownItemIndex:t,lastShownItemIndex:n});return a("Initial state (created)",r),a("First shown item index",t),a("Last shown item index",n),r}},{key:"getEstimatedItemHeight",value:function(){return this.itemHeights&&this.itemHeights.getAverage()||this.estimatedItemHeight||0}},{key:"getItemSpacing",value:function(){return this.getState().itemSpacing||0}},{key:"getEstimatedItemsCount",value:function(e){return this.getEstimatedItemHeight()?Math.ceil((e+this.getItemSpacing())/(this.getEstimatedItemHeight()+this.getItemSpacing())):1}},{key:"getEstimatedItemsCountOnScreen",value:function(){return"undefined"!=typeof window?this.getEstimatedItemsCount(window.innerHeight):1}},{key:"getLastShownItemIndex",value:function(e,t){return Math.min(e+(this.getEstimatedItemsCountOnScreen()-1),t-1)}},{key:"getItemsCount",value:function(){return this.getState().items.length}},{key:"getMargin",value:function(){return window.innerHeight}},{key:"onShowItems",value:function(e,t){if(this.onItemFirstRender){if(void 0===this.firstSeenItemIndex)for(var n=e;n<=t;)this.onItemFirstRender(n),n++;else{if(e<this.firstSeenItemIndex)for(var i=e;i<this.firstSeenItemIndex;)this.onItemFirstRender(i),i++;if(t>this.lastSeenItemIndex)for(var r=this.lastSeenItemIndex+1;r<=t;)this.onItemFirstRender(r),r++}this.firstSeenItemIndex=e,this.lastSeenItemIndex=t}}},{key:"onMount",value:function(){var e=this.getState(),t=e.firstShownItemIndex,n=e.lastShownItemIndex;this.getItemsCount()>0&&this.updateItemHeights(t,n),this.isMounted=!0,this.onUpdateShownItemIndexes({reason:"on mount"}),this.bypass||(window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onResize))}},{key:"onUnmount",value:function(){this.isMounted=!1,this.bypass||(window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onResize),clearTimeout(this.onUserStopsScrollingTimeout),clearTimeout(this.watchContainerElementTopCoordinateTimer))}},{key:"onUpdate",value:function(e){var t=this.getState(),n=t.items,i=t.firstShownItemIndex,r=t.lastShownItemIndex;i===e.firstShownItemIndex&&r===e.lastShownItemIndex&&n===e.items||this.updateItemHeights(i,r)}},{key:"updateItemHeights",value:function(e,t){var n=this.getState().firstShownItemIndex;void 0!==e&&(a("~ Measure item heights after layout ~"),this.itemHeights.update(e,t,n),h()&&a("Item heights",this.getState().itemHeights.slice()))}},{key:"updateItemHeight",value:function(e){var t=this.getState().firstShownItemIndex;this.itemHeights.updateItemHeight(e,t)}},{key:"onItemStateChange",value:function(e,t){h()&&(a("~ Item state changed ~"),a("Item",e),a("Previous state\n"+JSON.stringify(this.getState().itemStates[e],null,2)),a("New state\n"+JSON.stringify(t,null,2))),this.getState().itemStates[e]=t}},{key:"onItemHeightChange",value:function(e){var t=this.getState().itemHeights,n=t[e];this.updateItemHeight(e);var i=t[e];n!==i&&(a("~ Item height changed ~"),a("Item",e),a("Previous height",n),a("New height",i),this.onUpdateShownItemIndexes({reason:"item height change"}))}},{key:"getVisibleItemIndexes",value:function(e,t,n){for(var i,r,s=0,o=!1,h=0;h<this.getItemsCount();){var u=this.itemHeights.get(h);if(void 0===u){a("Item ".concat(h," height hasn't been measured yet: render and redo layout")),void 0===i&&(i=h);var d=t-(n+s);r=Math.min(h+(this.getEstimatedItemsCount(d)-1),this.getItemsCount()-1),o=!0;break}if(s+=u,void 0===i&&n+s>e&&(a("First visible item index (including margin)",h),i=h),h<this.getItemsCount()-1&&(s+=this.getItemSpacing()),n+s>t){a("Last visible item index (including margin)",h),void 0!==i&&(r=h);break}h++}return void 0!==i&&void 0===r&&a("Last item index (is fully visible)",r=this.getItemsCount()-1),this.restoreScrollAfterPrepend&&(r<this.restoreScrollAfterPrepend.index&&(r=this.restoreScrollAfterPrepend.index),o=!1),{firstShownItemIndex:i,lastShownItemIndex:r,redoLayoutAfterRender:o}}},{key:"getInvisibleItemIndexes",value:function(){return{firstShownItemIndex:0,lastShownItemIndex:0,redoLayoutAfterRender:void 0===this.itemHeights.get(0)}}},{key:"getItemIndexes",value:function(e,t,n,i){if(!(i>e&&n<t))return this.getInvisibleItemIndexes();var r=this.getVisibleItemIndexes(e,t,n);return void 0===r.firstShownItemIndex?this.getInvisibleItemIndexes():r}},{key:"getBeforeItemsHeight",value:function(e,t){for(var n=0,i=0;i<e;)n+=this.itemHeights.get(i)||this.itemHeights.getAverage(),n+=this.getItemSpacing(),i++;return n}},{key:"getAfterItemsHeight",value:function(e,t){for(var n=0,i=t+1;i<this.getItemsCount();)n+=this.getItemSpacing(),n+=this.itemHeights.get(i)||this.itemHeights.getAverage(),i++;return n}},{key:"updateWillBeHiddenItemHeightsAndState",value:function(e,t){for(var n=this.getState().firstShownItemIndex;n<=this.getState().lastShownItemIndex;)n>=e&&n<=t||this.updateItemHeight(n),n++}},{key:"watchContainerElementTopCoordinate",value:function(){var e=this;!function t(){void 0!==e.top&&i(e.getContainerNode()).top!==e.top&&e.onUpdateShownItemIndexes({reason:"top offset change"});e.watchContainerElementTopCoordinateTimer=setTimeout(t,1e3)}()}},{key:"getShownItemIndexes",value:function(){if(this.bypass){var e=this.getState().firstShownItemIndex,t=this.getState().lastShownItemIndex;return{firstShownItemIndex:e,lastShownItemIndex:t=Math.min(t+this.bypassBatchSize,this.getItemsCount()-1),redoLayoutAfterRender:t<this.getItemsCount()-1}}var n=i(this.getContainerNode()),o=n.top,a=n.height;void 0===this.top&&this.watchContainerElementTopCoordinate(),this.top=o;var h=function(){var e=s();return{top:r(),bottom:r()+e,height:e}}(),u=h.top,d=h.bottom;return this.latestLayoutScreenTopAfterMargin=u-this.getMargin(),this.latestLayoutScreenBottomAfterMargin=d+this.getMargin(),this.getItemIndexes(u-this.getMargin(),d+this.getMargin(),o,o+a)}},{key:"onDoneUpdatingItemIndexes",value:function(){this.isUpdatingItemIndexes=!1,this.restoreScrollAfterPrepend&&this.restoreScroll()}},{key:"captureScroll",value:function(e,t,n){0!==e.length&&(void 0===n&&(n=t.indexOf(e[0])),n<0||0!==n&&(this.getState().firstShownItemIndex>0||this.restoreScrollAfterPrepend&&this.restoreScrollAfterPrepend.previousItems===e&&this.restoreScrollAfterPrepend.nextItems===t||(this.restoreScrollAfterPrepend={previousItems:e,nextItems:t,index:n,screenTop:this.getItemElement(0).getBoundingClientRect().top})))}},{key:"updateLayout",value:function(e){a("~ Update layout (".concat(e,") ~")),this.isUpdatingItemIndexes=!0,this.updateShownItemIndexesRecursive()}},{key:"updateItems",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.getState().items,r=this.getState(),s=r.firstShownItemIndex,o=r.lastShownItemIndex,h=r.beforeItemsHeight,u=r.afterItemsHeight,l=r.itemStates,g=r.itemHeights;r.itemSpacing;a("~ Update items ~");var I=function(e,t){var n=-1,i=-1;e.length>0&&(n=t.indexOf(e[0]))>=0&&function(e,t,n){var i=0;for(;i<e.length;){if(t.length<=n+i||t[n+i]!==e[i])return!1;i++}return!0}(e,t,n)&&(i=n+e.length-1);if(n>=0&&i>=0)return{prependedItemsCount:n,appendedItemsCount:t.length-(i+1)};return{prependedItemsCount:-1,appendedItemsCount:-1}}(i,e),c=I.prependedItemsCount,f=I.appendedItemsCount;c>0||f>0?(c>0&&(a("Prepended items count",c),void 0!==this.firstSeenItemIndex&&(this.firstSeenItemIndex+=c),g=new Array(c).concat(g),this.itemHeights.onPrepend(c),l&&(l=new Array(c).concat(l)),n.preserveScrollPosition&&this.captureScroll(i,e,c)),f>0&&(a("Appended items count",f),g=g.concat(new Array(f)),l&&(l=l.concat(new Array(f)))),s+=c,o+=c,h+=this.itemHeights.getAverage()*c,u+=this.itemHeights.getAverage()*f):(a("Non-incremental items update"),a("Previous items",i),a("New items",e),this.firstSeenItemIndex=void 0,this.lastSeenItemIndex=void 0,this.itemHeights=new d(this.getContainerNode,e.length,this.getState),g=new Array(e.length),l=new Array(e.length),0===e.length?(s=void 0,o=void 0):(s=0,o=this.getLastShownItemIndex(s,e.length)),h=0,u=0),a("First shown item index",s),a("Last shown item index",o),a("Before items height",h),a("After items height",u),this.onShowItems(s,o),this.setState(m({},void 0,{items:e,itemStates:l,itemHeights:g,firstShownItemIndex:s,lastShownItemIndex:o,beforeItemsHeight:h,afterItemsHeight:u}),function(){t.onUpdateShownItemIndexes({reason:"update items",force:!0})})}},{key:"getItemElement",value:function(e){return this.getContainerNode().childNodes[e]}}])&&l(u.prototype,I),c&&l(u,c),o}();function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}return function(){function e(t,n,i){var r=this,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"onStateChange",function(e,t){var n=e.items,i=e.firstShownItemIndex,s=e.lastShownItemIndex,o=e.beforeItemsHeight,h=e.afterItemsHeight;a("~ On state change ~"),a("Previous state",t),a("New state",e),r.container.style.paddingTop=o+"px",r.container.style.paddingBottom=h+"px";var u=t&&n===t.items&&t.items.length>0;if(u){a("Incremental render");for(var d=t.lastShownItemIndex;d>=t.firstShownItemIndex;){if(d>=i&&d<=s);else{a("Remove item",d);var m=r.container.childNodes[d-t.firstShownItemIndex];r.container.removeChild(m)}d--}}else for(a("Clean render");r.container.firstChild;)r.container.removeChild(r.container.firstChild);for(var l=u,g=l&&r.container.firstChild,I=i;I<=s;){if(u&&I>=t.firstShownItemIndex&&I<=t.lastShownItemIndex)l&&(l=!1);else{var c=r.renderItem(n[I]);l?(a("Prepend item",I),r.container.insertBefore(c,g)):(a("Append item",I),r.container.appendChild(c))}I++}}),v(this,"onUnmount",function(){r.virtualScroller.onUnmount()}),this.container=t,this.renderItem=i;var o=s.onMount,h=c(s,["onMount"]);this.virtualScroller=new I(function(){return r.container},n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){v(e,t,n[t])})}return e}({},h,{onStateChange:this.onStateChange})),o&&o(),this.virtualScroller.onMount()}var t,n,i;return t=e,(n=[{key:"onItemHeightChange",value:function(e){this.virtualScroller.onItemHeightChange(e)}},{key:"updateItems",value:function(e,t){this.virtualScroller.updateItems(e,t)}}])&&f(t.prototype,n),i&&f(t,i),e}()});
//# sourceMappingURL=virtual-scroller-dom.js.map