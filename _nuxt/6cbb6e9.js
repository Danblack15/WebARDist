(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{343:function(t,e,o){var content=o(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("94c1ebb6",content,!0,{sourceMap:!1})},350:function(t,e,o){"use strict";o(343)},351:function(t,e,o){var n=o(23)((function(i){return i[1]}));n.push([t.i,"*[data-v-9c66bf90]{color:#f0f0f0}body[data-v-9c66bf90]{background:#1b1b1b}.wrapper[data-v-9c66bf90]{margin:0 60px;max-width:1440px;width:100%}@media(max-width:1200px){.wrapper[data-v-9c66bf90]{margin:0 30px}}@media(max-width:768px){.wrapper[data-v-9c66bf90]{margin:0 15px}}.bold-600[data-v-9c66bf90]{font-weight:600}.bold-700[data-v-9c66bf90]{font-weight:700}a[data-v-9c66bf90]{color:#f0f0f0;transition:all .3s}a[data-v-9c66bf90]:hover{color:#ffb473}img[data-v-9c66bf90],object[data-v-9c66bf90]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.try-it__body[data-v-9c66bf90]{height:calc(100vh - 100px);width:100%}",""]),n.locals={},t.exports=n},361:function(t,e,o){var content=o(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("521333dc",content,!0,{sourceMap:!1})},364:function(t,e,o){"use strict";o.r(e);o(53);var n={name:"mapTryIt",data:function(){return{map:null,coords:{lat:null,long:null}}},mounted:function(){var t=this;!1 in navigator?console.log("Geo ERROR"):navigator.geolocation.watchPosition((function(e){return t.changePosition(e)}),(function(e){return t.errorGeolocation(e)}),{enableHighAccuracy:!0})},methods:{initHandler:function(t){this.map=t},changeCoords:function(t){this.coords={lat:t.latitude,long:t.longitude}},changePosition:function(t){this.changeCoords(t.coords),console.log(t)},errorGeolocation:function(t){alert(t)}}},r=(o(350),o(10)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"try-it"},[e("client-only",[e("yandex-map",{staticClass:"try-it__body",attrs:{coords:[t.coords.lat,t.coords.long]},on:{"map-was-initialized":t.initHandler}},[e("ymap-marker",{attrs:{"marker-id":"0","marker-type":"placemark",coords:[t.coords.lat,t.coords.long],icon:{layout:"default#image",imageHref:"https://e7.pngegg.com/pngimages/416/863/png-clipart-wind-turbine-design-engineer-monochrome-graphy-man-icon-miscellaneous-photography.png",imageSize:[30,30]},"cluster-name":"0"}}),t._v(" "),e("ymap-marker",{attrs:{"marker-id":"1","marker-type":"placemark",coords:[58.11528,56.29918],icon:{layout:"default#image",imageHref:"https://e7.pngegg.com/pngimages/54/528/png-clipart-computer-icons-house-home-graphics-symbol-house-angle-building.png",imageSize:[40,40]},"cluster-name":"1"}}),t._v(" "),e("ymap-marker",{attrs:{"marker-id":"2","marker-type":"placemark",coords:[58.11593,56.30194],icon:{layout:"default#image",imageHref:"https://e7.pngegg.com/pngimages/54/528/png-clipart-computer-icons-house-home-graphics-symbol-house-angle-building.png",imageSize:[40,40]},"cluster-name":"2"}})],1)],1)],1)}),[],!1,null,"9c66bf90",null);e.default=component.exports},368:function(t,e,o){"use strict";o(361)},369:function(t,e,o){var n=o(23)((function(i){return i[1]}));n.push([t.i,"*[data-v-34d37acc]{color:#f0f0f0}body[data-v-34d37acc]{background:#1b1b1b}.wrapper[data-v-34d37acc]{margin:0 60px;max-width:1440px;width:100%}@media(max-width:1200px){.wrapper[data-v-34d37acc]{margin:0 30px}}@media(max-width:768px){.wrapper[data-v-34d37acc]{margin:0 15px}}.bold-600[data-v-34d37acc]{font-weight:600}.bold-700[data-v-34d37acc]{font-weight:700}a[data-v-34d37acc]{color:#f0f0f0;transition:all .3s}a[data-v-34d37acc]:hover{color:#ffb473}img[data-v-34d37acc],object[data-v-34d37acc]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.try-it__inside[data-v-34d37acc]{height:calc(100vh - 100px)}",""]),n.locals={},t.exports=n},377:function(t,e,o){"use strict";o.r(e);var n={name:"TryIt",layout:"arLayout",components:{mapTryIt:o(364).default},data:function(){return{}},methods:{}},r=(o(368),o(10)),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"try-it"},[t("section",{staticClass:"try-it__inside"},[t("mapTryIt")],1)])}),[],!1,null,"34d37acc",null);e.default=component.exports}}]);