!function(e){function t(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var l=n(2),o=(n.n(l),n(3)),a=(n.n(o),n(4)),r=(n.n(a),n(5)),__=(n.n(r),wp.i18n.__),i=wp.blocks.registerBlockType,c=wp.element.Fragment;i("cgb/block-hero-block",{title:__("Bootstrap Hero Block"),icon:"shield",category:"common",keywords:[__("Bootstrap Hero Block"),__("Hero Block Example"),__("create-guten-block")],attributes:{color:{type:"object"},alignment:{type:"string",default:"none"},headline:{type:"array",source:"children",selector:"h1"},subline:{type:"array",source:"children",selector:"h2"},content:{type:"array",source:"children",selector:".content"}},example:{attributes:{alignment:"left",headline:__("Hello World"),subline:__("This is a subline"),content:__("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus turpis, convallis vel sapien in, pharetra sodales lacus. Ut suscipit nunc a tempus gravida.")}},edit:function(e){function t(e){d({content:e})}function n(e){d({alignment:void 0===e?"none":e})}function l(e){d({headline:e})}function o(e){d({subline:e})}var i=e.attributes,s=e.color,u=e.alignment,m=e.headline,p=e.subline,h=e.content,d=e.setAttributes,g=null!==i.alignment?"has-text-align-"+i.alignment:"";return wp.element.createElement("div",{className:g},wp.element.createElement(a.InspectorControls,null,wp.element.createElement(c,null,wp.element.createElement(r.PanelBody,{title:__("Color Picker","test"),initialOpen:!0},wp.element.createElement(r.PanelRow,null,wp.element.createElement(r.ColorPicker,{color:s,onChangeComplete:function(e){return d({color:e.hex})},disableAlpha:!0}))))),wp.element.createElement(a.BlockControls,null,wp.element.createElement(a.AlignmentToolbar,{value:u,onChange:n})),wp.element.createElement(a.RichText,{tagName:"h1",inline:!0,style:{textAlign:u},placeholder:"This is a headline",value:m,onChange:l}),wp.element.createElement(a.RichText,{tagName:"h2",inline:!0,style:{textAlign:u},placeholder:"This is a subline",value:p,onChange:o}),wp.element.createElement(a.RichText,{tagName:"p",style:{textAlign:u},value:h,onChange:t}))},save:function(e){var t=e.attributes,n=null!==t.alignment?"has-text-align-"+t.alignment:"";return wp.element.createElement("div",{className:"jumbotron jumbotron-fluid",style:{backgroundColor:t.color}},wp.element.createElement("div",{className:"container"},wp.element.createElement("div",{className:n},wp.element.createElement(a.RichText.Content,{tagName:"h1",value:t.headline}),wp.element.createElement(a.RichText.Content,{tagName:"h2",value:t.subline}),wp.element.createElement(a.RichText.Content,{tagName:"p",value:t.content}))))}})},function(e,t){},function(e,t){},function(e,t){e.exports=wp.blockEditor},function(e,t){e.exports=wp.components}]);