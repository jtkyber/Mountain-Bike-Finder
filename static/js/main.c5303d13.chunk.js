(this["webpackJsonpmountain-bike-finder"]=this["webpackJsonpmountain-bike-finder"]||[]).push([[0],{21:function(e,i,r){},22:function(e,i,r){},24:function(e,i,r){},31:function(e,i,r){"use strict";r.r(i);var t=r(1),s=r.n(t),n=r(10),c=r.n(n),o=(r(21),r(4)),l=r(11),a=r(12),u=r(16),h=r(15),p=(r(22),r(0)),d=function(e){var i=e.manufacturer,r=e.model,t=(e.fullSus,e.wheelSize),s=e.forkTravel,n=e.shockTravel,c=e.htAngle,o=e.link,l=e.picLink,a=parseInt(t)?'"':"",u=0===n?"Hardtail":n+"mm",h=c.length>1?c.map((function(e){return" "+e+"\xb0"})):c+"\xb0";return Object(p.jsxs)("div",{className:"blocks",children:[Object(p.jsx)("div",{onClick:function(){window.open("".concat(o),"_blank")},className:"bikeBlock",style:{backgroundImage:"url(".concat(l,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsxs)("h3",{children:[i," ",r," "]}),Object(p.jsxs)("p",{children:["Wheel Size: ",t,a]}),Object(p.jsxs)("p",{children:["Fork Travel: ",s,"mm "]}),Object(p.jsxs)("p",{children:["Shock Travel: ",u," "]}),Object(p.jsxs)("p",{children:["HT Angle: ",h.toString()]})]})]})},k=function(e){var i=e.bikes;return 0===i.length?Object(p.jsxs)("div",{id:"empty",children:[Object(p.jsx)("h3",{children:"no bikes match the current selections"}),Object(p.jsx)("img",{alt:"tumbleweed",src:"https://media.giphy.com/media/d8lUKXD00IXSw/giphy.gif"})]}):Object(p.jsx)("div",{children:i.map((function(e,r){return Object(p.jsx)(d,{manufacturer:i[r].manufacturer,model:i[r].model,fullSus:i[r].fullSus,wheelSize:i[r].wheelSize,forkTravel:i[r].forkTravel,shockTravel:i[r].shockTravel,htAngle:i[r].htAngle,link:i[r].link,picLink:i[r].picLink},i[r].model)}))})},b=[{manufacturer:"specialized",model:"stumpjumper",bikeType:"full suspension",wheelSize:29,forkTravel:140,shockTravel:130,htAngle:[65,65.5],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/trail-bikes/stumpjumper/c/stumpjumper#/filter:productfamily:Stumpjumper",picLink:"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-2453_PDP_Prod_01?wid=1920&hei=640&$hybris-pdp-hero-exp$}"},{manufacturer:"specialized",model:"stumpjumper evo",bikeType:"full suspension",wheelSize:29,forkTravel:160,shockTravel:150,htAngle:[63,63.5,64,64.5,65,65.5],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/trail-bikes/stumpjumper/c/stumpjumper#/filter:productfamily:Stumpjumper$2520EVO",picLink:"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/01_MTB-2363__PDP_Product-Carousel_3840x1280?wid=1920&hei=640&$hybris-pdp-hero-exp$}"},{manufacturer:"specialized",model:"demo",bikeType:"full suspension",wheelSize:"Mullet",forkTravel:200,shockTravel:200,htAngle:[62.8],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/downhill-mountain-bikes/c/mountaindownhill",picLink:"https://theloamwolf.com/wp-content/uploads/2020/09/2021-Specialized-Demo-2.jpg"},{manufacturer:"specialized",model:"epic evo",bikeType:"full suspension",wheelSize:29,forkTravel:120,shockTravel:110,htAngle:[66.5],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/cross-country-mountain-bikes/epic/c/epic#/filter:productfamily:Epic$2520EVO",picLink:"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-2197__PDP_Product-Carousel_EVO_3840x1280_01?wid=1920&hei=640&$hybris-pdp-hero-exp$}"},{manufacturer:"specialized",model:"epic",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[68.5],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/cross-country-mountain-bikes/epic-hardtail/c/epichardtail",picLink:"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-1826__PDP_Product-Carousel_3840x1280_1?wid=1920&hei=640&$hybris-pdp-hero-exp$}"},{manufacturer:"specialized",model:"chisel",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[68],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/cross-country-mountain-bikes/chisel/c/chisel",picLink:"https://images.immediate.co.uk/production/volatile/sites/21/2020/09/Specialized-Chisel-XC-bike-pack-shot-dcaf1ef.jpg?quality=90&resize=620%2C413"},{manufacturer:"specialized",model:"rockhopper",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[68.5],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/trail-bikes/rockhopper/c/rockhopper",picLink:"https://images.immediate.co.uk/production/volatile/sites/21/2020/05/specialized-rockhopper-pack-shot-2-c7f23e2.jpeg?webp=true&quality=90&resize=620%2C413"},{manufacturer:"trek",model:"top fuel",bikeType:"full suspension",wheelSize:29,forkTravel:120,shockTravel:115,htAngle:[67.5,68],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/top-fuel/c/B311/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/TopFuel99XTR_21_32990_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"supercaliber",bikeType:"full suspension",wheelSize:29,forkTravel:100,shockTravel:60,htAngle:[69],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/supercaliber/c/B314/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Supercaliber99XX1_21_33191_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"procaliber",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[68.8],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/procaliber/c/B312/",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Procaliber97_21_33265_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"x-caliber",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[69.5],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/x-caliber/c/B315/",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber9_20_29760_B_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"marlin",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[69.5],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/marlin/c/B321/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Marlin7_21_33148_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"slash",bikeType:"full suspension",wheelSize:29,forkTravel:170,shockTravel:160,htAngle:[64.1,64.6],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/slash/c/B341/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Slash99XTR_21_34747_C_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"remedy",bikeType:"full suspension",wheelSize:27.5,forkTravel:160,shockTravel:150,htAngle:[65.6,66.1],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/remedy/c/B331/",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Remedy98275GX_21_33067_B_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"fuel EX",bikeType:"full suspension",wheelSize:29,forkTravel:140,shockTravel:130,htAngle:[66,66.5],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/fuel-ex/c/B332/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/FuelEX99XTR_21_33409_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"roscoe",bikeType:"hardtail",wheelSize:27.5,forkTravel:100,shockTravel:0,htAngle:[67.4],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/roscoe/c/B342/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Roscoe8_21_28487_B_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"session 27.5",bikeType:"full suspension",wheelSize:27.5,forkTravel:200,shockTravel:210,htAngle:[63.6,64.2],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/downhill-mountain-bikes/session/c/B351/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Session8275_20_30267_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"session 29",bikeType:"full suspension",wheelSize:29,forkTravel:190,shockTravel:190,htAngle:[62.1,62.6],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/downhill-mountain-bikes/session/c/B351/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Session99DH29_20_30268_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"}],m=function(e){var i=e.option,r=e.classname,t=e.value;return Object(p.jsx)("option",{className:r,value:t,children:i})},f=function(e){var i=e.bikes,r=[];return Object(p.jsx)(t.Fragment,{children:i.map((function(e){return r.includes(e.manufacturer)?null:(r.push(e.manufacturer),Object(p.jsx)(m,{option:e.manufacturer,value:e.manufacturer},e.model))}))})},j=function(e){var i=e.models;return Object(p.jsxs)(t.Fragment,{children:[i.map((function(e){return Object(p.jsx)(m,{option:e.model,value:e.model},e.model)})),"}) }"]})},v=function(e){var i=e.bikes,r=e.bks,t=e.curMod,s=[],n="",c="";return i.forEach((function(e){e.model!==t&&""!==t||s.includes(e.bikeType)||s.push(e.bikeType)})),s.map((function(e){for(var i=0;i<r.length;i++){if(e===r[i].bikeType){n="",c="";break}n="crossOut",c="(No Match)"}return Object(p.jsx)(m,{option:e+c,value:e,classname:n})}))},T=function(e){var i=e.bikes,r=e.bks,t=e.curMod,s=[],n="",c="",o='"';return i.forEach((function(e){""!==t&&e.model!==t||s.includes(e.wheelSize)||s.push(e.wheelSize)})),s.sort().map((function(e){for(var i=0;i<r.length;i++){if(e===r[i].wheelSize){n="",c="";break}n="crossOut",c="(No Match)"}return o=parseInt(e)?'"':"",Object(p.jsx)(m,{classname:n,value:e,option:e+o+c,units:o})}))},w=function(e){var i=e.bikes,r=e.bks,t=e.curMod,s=[],n="",c="";i.forEach((function(e){e.model!==t&&""!==t||s.includes(e.forkTravel)||s.push(e.forkTravel)}));return function(e){for(var i=e.length,r=0;r<i;r++){for(var t=r,s=r+1;s<i;s++)e[t]>e[s]&&(t=s);if(t!==r){var n=e[r];e[r]=e[t],e[t]=n}}return e}(s).map((function(e){for(var i=0;i<r.length;i++){if(e===r[i].forkTravel){n="",c="";break}n="crossOut",c="(No Match)"}return Object(p.jsx)(m,{classname:n,value:e,option:e+"mm"+c})}))},g=function(e){var i=e.bikes,r=e.bks,t=e.curMod,s=[],n="",c="";i.forEach((function(e){e.model!==t&&""!==t||s.includes(e.shockTravel)||s.push(e.shockTravel)}));return function(e){for(var i=e.length,r=0;r<i;r++){for(var t=r,s=r+1;s<i;s++)e[t]>e[s]&&(t=s);if(t!==r){var n=e[r];e[r]=e[t],e[t]=n}}return e}(s).map((function(e){for(var i=0;i<r.length;i++){if(e===r[i].shockTravel){n="",c="";break}n="crossOut",c="(No Match)"}return Object(p.jsx)(m,{classname:n,value:e,option:e+"mm"+c,units:"mm"})}))},S=function(e){var i=e.bikes,r=e.bks,t=e.curMod,s=[],n="",c="";return i.forEach((function(e){e.htAngle.forEach((function(i){""!==t&&e.model!==t||s.includes(Math.floor(i))||s.push(Math.floor(i))}))})),s.sort().map((function(e){var i=!1;e=e+"-"+(e+.9);var t,s=Object(o.a)(r);try{e:for(s.s();!(t=s.n()).done;){var l,a=t.value,u=Object(o.a)(a.htAngle);try{for(u.s();!(l=u.n()).done;){var h=l.value,d=parseInt(e.substring(0,2));if(h>=d&&h<d+1){i=!0;break e}}}catch(k){u.e(k)}finally{u.f()}}}catch(k){s.e(k)}finally{s.f()}return!0===i?(n="",c=""):(n="crossOut",c="(No Match)"),Object(p.jsx)(m,{classname:n,value:e,option:e+"\xb0"+c})}))},O=function(e){var i=e.bikes,r=e.bks,s=e.models,n=e.curMod,c=e.search;return Object(p.jsxs)(t.Fragment,{children:[Object(p.jsxs)("div",{className:"drop",id:"option1",children:[Object(p.jsx)("label",{for:"Manufacturer",children:"Manufacturer "}),Object(p.jsxs)("select",{id:"Manufacturer",name:"Manufacturer",onChange:c,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(f,{bikes:i})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option2",children:[Object(p.jsx)("label",{for:"Model",children:"Model "}),Object(p.jsxs)("select",{id:"Model",name:"Model",onChange:c,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(j,{models:s})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option3",children:[Object(p.jsx)("label",{for:"BikeType",children:"Bike Type "}),Object(p.jsxs)("select",{id:"BikeType",name:"BikeType",onChange:c,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(v,{bikes:s,bks:r,curMod:n})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option4",children:[Object(p.jsx)("label",{for:"WheelSize",children:"Wheel Size "}),Object(p.jsxs)("select",{id:"WheelSize",name:"WheelSize",onChange:c,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(T,{bikes:s,bks:r,curMod:n})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option5",children:[Object(p.jsx)("label",{for:"ForkTravel",children:"Fork Travel "}),Object(p.jsxs)("select",{id:"ForkTravel",name:"ForkTravel",onChange:c,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(w,{bikes:s,bks:r,curMod:n})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option5",children:[Object(p.jsx)("label",{for:"ShockTravel",children:"Shock Travel "}),Object(p.jsxs)("select",{id:"ShockTravel",name:"ShockTravel",onChange:c,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(g,{bikes:s,bks:r,curMod:n})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option5",children:[Object(p.jsx)("label",{for:"HTAngle",children:"HT Angle "}),Object(p.jsxs)("select",{id:"HTAngle",name:"HTAngle",onChange:c,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(S,{bikes:s,bks:r,curMod:n})]})]})]})},x=(r(24),function(e){Object(u.a)(r,e);var i=Object(h.a)(r);function r(e){var t;return Object(l.a)(this,r),(t=i.call(this,e)).filter=function(){var e=t.state,i=e.manuf,r=e.mod,s=e.bT,n=e.wS,c=e.fT,l=e.rT,a=e.hA,u=a.substring(0,2),h=a.substring(3,7);t.setState({bks:b.filter((function(e){return e.manufacturer.toLowerCase().includes(i.toLowerCase())&&(e.model.toLowerCase()===r.toLowerCase()||""===r)&&e.bikeType.toLowerCase().includes(s.toLowerCase())&&e.wheelSize.toString().includes(n)&&e.forkTravel.toString().includes(c)&&(e.shockTravel===function(e){for(var i="",r=0;r<l.length;r++)isNaN(l[r])||(i+=l[r]);return parseInt(i)}()||""===l)&&function(e){var i,r=!1,t=Object(o.a)(e);try{for(t.s();!(i=t.n()).done;){var s=i.value;if(s>=u&&s<=h){r=!0;break}r=!1}}catch(n){t.e(n)}finally{t.f()}return r}(e.htAngle)})),willFilter:!1})},t.resetForm=function(){t.myRef.current.reset(),t.setState({manuf:"",mod:"",bT:"",wS:"",fT:"",rT:"",hA:"10-99",willFilter:!0})},t.onSearchChange=function(e){var i=e.target.id,r=e.target.value,s=e.target.children[0].value;"Manufacturer"===i?r===s?t.setState({manuf:"",mod:"",bT:"",wS:"",fT:"",rT:"",hA:"10-99"}):t.setState({manuf:r,mod:"",bT:"",wS:"",fT:"",rT:"",hA:"10-99"}):"Model"===i?r===s?t.setState({mod:"",bT:"",wS:"",fT:"",rT:"",hA:"10-99"}):t.setState({mod:r,bT:"",wS:"",fT:"",rT:"",hA:"10-99"}):"BikeType"===i?r===s?t.setState({bT:""}):t.setState({bT:r}):"WheelSize"===i?r===s?t.setState({wS:""}):t.setState({wS:r}):"ForkTravel"===i?r===s?t.setState({fT:""}):t.setState({fT:r}):"ShockTravel"===i?r===s?t.setState({rT:""}):t.setState({rT:r}):"HTAngle"===i&&(r===s?t.setState({hA:"10-99"}):t.setState({hA:r})),t.setState({willFilter:!0})},t.state={bks:[],manuf:"",mod:"",bT:"",wS:"",fT:"",rT:"",hA:"10-99",willFilter:!1},t.myRef=s.a.createRef(),t}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.setState({bks:b})}},{key:"render",value:function(){var e=this.state,i=e.bks,r=e.manuf,t=e.mod;e.willFilter&&this.filter();var s=1===i.length?"":"s",n=b.filter((function(e){return e.manufacturer.toLowerCase().includes(r.toLowerCase())}));return Object(p.jsxs)("div",{id:"container",children:[Object(p.jsx)("div",{id:"header",children:Object(p.jsx)("h1",{id:"title",children:"Mountain Bike Finder"})}),Object(p.jsxs)("div",{id:"searchArea",children:[Object(p.jsxs)("div",{id:"aboveDrops",children:[Object(p.jsxs)("h4",{id:"resultsText",children:[i.length," Result",s]}),Object(p.jsx)("button",{onClick:this.resetForm,id:"btn",value:"reset",children:"Reset"})]}),Object(p.jsx)("form",{ref:this.myRef,children:Object(p.jsx)(O,{id:"drops",bikes:b,bks:i,models:n,curMod:t,search:this.onSearchChange})})]}),Object(p.jsx)("div",{id:"results",children:Object(p.jsx)("div",{children:Object(p.jsx)(k,{bikes:i})})})]})}}]),r}(t.Component)),y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,32)).then((function(i){var r=i.getCLS,t=i.getFID,s=i.getFCP,n=i.getLCP,c=i.getTTFB;r(e),t(e),s(e),n(e),c(e)}))},_=(r(25),r(14));c.a.render(Object(p.jsx)(_.a,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),y()}},[[31,1,2]]]);
//# sourceMappingURL=main.c5303d13.chunk.js.map