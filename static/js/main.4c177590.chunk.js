(this["webpackJsonpmountain-bike-finder"]=this["webpackJsonpmountain-bike-finder"]||[]).push([[0],{21:function(e,i,t){},22:function(e,i,t){},24:function(e,i,t){},31:function(e,i,t){"use strict";t.r(i);var r=t(1),s=t(9),n=t.n(s),c=(t(21),t(15)),l=t(10),o=t(11),a=t(16),u=t(14),p=(t(22),t(0)),d=function(e){var i=e.manufacturer,t=e.model,r=(e.fullSus,e.wheelSize),s=e.forkTravel,n=e.shockTravel,c=e.htAngle,l=e.link,o=e.picLink,a=parseInt(r)?'"':"",u=0===n?"none":n+"mm",d=c.length>1?c.map((function(e){return" "+e+"\xb0"})):c+"\xb0";return Object(p.jsxs)("div",{className:"blocks",children:[Object(p.jsx)("div",{onClick:function(){window.open("".concat(l),"_blank")},className:"bikeBlock",style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsxs)("h3",{children:[i," ",t," "]}),Object(p.jsxs)("p",{children:["Wheel Size: ",r,a]}),Object(p.jsxs)("p",{children:["Fork Travel: ",s,"mm "]}),Object(p.jsxs)("p",{children:["Shock Travel: ",u," "]}),Object(p.jsxs)("p",{children:["HT Angle: ",d.toString()]})]})]})},h=function(e){var i=e.bikes;return 0===i.length?Object(p.jsxs)("div",{id:"empty",children:[Object(p.jsx)("h3",{children:"no bikes match the current selections"}),Object(p.jsx)("img",{alt:"tumbleweed",src:"https://media.giphy.com/media/d8lUKXD00IXSw/giphy.gif"})]}):Object(p.jsx)("div",{children:i.map((function(e,t){return Object(p.jsx)(d,{manufacturer:i[t].manufacturer,model:i[t].model,fullSus:i[t].fullSus,wheelSize:i[t].wheelSize,forkTravel:i[t].forkTravel,shockTravel:i[t].shockTravel,htAngle:i[t].htAngle,link:i[t].link,picLink:i[t].picLink},i[t].model)}))})},k=[{manufacturer:"specialized",model:"stumpjumper",bikeType:"full suspension",wheelSize:29,forkTravel:140,shockTravel:130,htAngle:[65,65.5],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/trail-bikes/stumpjumper/c/stumpjumper#/filter:productfamily:Stumpjumper",picLink:"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-2453_PDP_Prod_01?wid=1920&hei=640&$hybris-pdp-hero-exp$}"},{manufacturer:"specialized",model:"stumpjumper evo",bikeType:"full suspension",wheelSize:29,forkTravel:160,shockTravel:150,htAngle:[63,63.5,64,64.5,65,65.5],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/trail-bikes/stumpjumper/c/stumpjumper#/filter:productfamily:Stumpjumper$2520EVO",picLink:"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/01_MTB-2363__PDP_Product-Carousel_3840x1280?wid=1920&hei=640&$hybris-pdp-hero-exp$}"},{manufacturer:"specialized",model:"demo",bikeType:"full suspension",wheelSize:"Mullet",forkTravel:200,shockTravel:200,htAngle:[62.8],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/downhill-mountain-bikes/c/mountaindownhill",picLink:"https://theloamwolf.com/wp-content/uploads/2020/09/2021-Specialized-Demo-2.jpg"},{manufacturer:"specialized",model:"epic evo",bikeType:"full suspension",wheelSize:29,forkTravel:120,shockTravel:110,htAngle:[66.5],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/cross-country-mountain-bikes/epic/c/epic#/filter:productfamily:Epic$2520EVO",picLink:"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-2197__PDP_Product-Carousel_EVO_3840x1280_01?wid=1920&hei=640&$hybris-pdp-hero-exp$}"},{manufacturer:"specialized",model:"epic",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[68.5],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/cross-country-mountain-bikes/epic-hardtail/c/epichardtail",picLink:"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-1826__PDP_Product-Carousel_3840x1280_1?wid=1920&hei=640&$hybris-pdp-hero-exp$}"},{manufacturer:"specialized",model:"chisel",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[68],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/cross-country-mountain-bikes/chisel/c/chisel",picLink:"https://images.immediate.co.uk/production/volatile/sites/21/2020/09/Specialized-Chisel-XC-bike-pack-shot-dcaf1ef.jpg?quality=90&resize=620%2C413"},{manufacturer:"specialized",model:"rockhopper",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[68.5],link:"https://www.specialized.com/us/en/shop/bikes/mountain-bikes/trail-bikes/rockhopper/c/rockhopper",picLink:"https://bikerumor.com/wp-content/uploads/2020/05/2021-Specialized-Rockhopper-mountain-bike_affordable-aluminum-alloy-MTB-hardtail_Rockhopper-Expert-tease.jpg"},{manufacturer:"trek",model:"top fuel",bikeType:"full suspension",wheelSize:29,forkTravel:120,shockTravel:115,htAngle:[67.5,68],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/top-fuel/c/B311/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/TopFuel99XTR_21_32990_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"supercaliber",bikeType:"full suspension",wheelSize:29,forkTravel:100,shockTravel:60,htAngle:[69],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/supercaliber/c/B314/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Supercaliber99XX1_21_33191_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"procaliber",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[68.8],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/procaliber/c/B312/",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Procaliber97_21_33265_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"x-caliber",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[69.5],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/x-caliber/c/B315/",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/XCaliber9_20_29760_B_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"marlin",bikeType:"hardtail",wheelSize:29,forkTravel:100,shockTravel:0,htAngle:[69.5],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/cross-country-mountain-bikes/marlin/c/B321/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Marlin7_21_33148_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"slash",bikeType:"full suspension",wheelSize:29,forkTravel:170,shockTravel:160,htAngle:[64.1,64.6],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/slash/c/B341/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Slash99XTR_21_34747_C_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"remedy",bikeType:"full suspension",wheelSize:27.5,forkTravel:160,shockTravel:150,htAngle:[65.6,66.1],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/remedy/c/B331/",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Remedy98275GX_21_33067_B_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"fuel EX",bikeType:"full suspension",wheelSize:29,forkTravel:140,shockTravel:130,htAngle:[66,66.5],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/fuel-ex/c/B332/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/FuelEX99XTR_21_33409_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"roscoe",bikeType:"hardtail",wheelSize:27.5,forkTravel:100,shockTravel:0,htAngle:[67.4],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/trail-mountain-bikes/roscoe/c/B342/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Roscoe8_21_28487_B_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"session 27.5",bikeType:"full suspension",wheelSize:27.5,forkTravel:200,shockTravel:210,htAngle:[63.6,64.2],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/downhill-mountain-bikes/session/c/B351/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Session8275_20_30267_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"},{manufacturer:"trek",model:"session 29",bikeType:"full suspension",wheelSize:29,forkTravel:190,shockTravel:190,htAngle:[62.1,62.6],link:"https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/downhill-mountain-bikes/session/c/B351/?sort=price-desc&pageSize=24&q=%3Arelevance#",picLink:"https://trek.scene7.com/is/image/TrekBicycleProducts/Session99DH29_20_30268_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440"}],m=function(e){var i=e.option,t=e.units;return Object(p.jsxs)("option",{value:i,children:[i,t]})},b=function(e){var i=e.bikes,t=[];return Object(p.jsx)(r.Fragment,{children:i.map((function(e){return t.includes(e.manufacturer)?null:(t.push(e.manufacturer),Object(p.jsx)(m,{option:e.manufacturer},e.model))}))})},f=function(e){var i=e.models;return Object(p.jsxs)(r.Fragment,{children:[i.map((function(e){return Object(p.jsx)(m,{option:e.model},e.model)})),"}) }"]})},j=function(e){var i=e.bikes,t=e.curMod,r=[];return i.forEach((function(e){!e.model.includes(t)&&""!==t||r.includes(e.bikeType)||r.push(e.bikeType)})),r.map((function(e){return Object(p.jsx)(m,{option:e})}))},T=function(e){var i=e.bikes,t=e.curMod,r=[],s=[];return i.forEach((function(e){""===t&&""!==t||!e.model.includes(t)||r.includes(e.wheelSize)||(s.push(e.wheelSize),r.push(e.wheelSize))})),s.sort().map((function(e){var i=parseInt(e)?'"':"";return Object(p.jsx)(m,{option:e,units:i})}))},v=function(e){var i=e.bikes,t=e.curMod,r=[];return i.forEach((function(e){!e.model.includes(t)&&""!==t||r.includes(e.forkTravel)||r.push(e.forkTravel)})),r.sort().map((function(e){return Object(p.jsx)(m,{option:e,units:"mm"})}))},w=function(e){var i=e.bikes,t=e.curMod,r=[];return i.forEach((function(e){!e.model.includes(t)&&""!==t||r.includes(e.forkTravel)||r.push(e.forkTravel)})),r.sort().map((function(e){return Object(p.jsx)(m,{option:e,units:"mm"})}))},g=function(e){var i=e.bikes,t=e.curMod,r=[];return i.forEach((function(e){e.htAngle.forEach((function(i){""!==t&&!e.model.includes(t)||r.includes(Math.floor(i))||r.push(Math.floor(i))}))})),r.sort().map((function(e){return e=e+"-"+(e+.9),Object(p.jsx)(m,{option:e,units:"\xb0"})}))},S=function(e){var i=e.bikes,t=e.models,s=e.curMod,n=e.search;return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsxs)("div",{className:"drop",id:"option1",children:[Object(p.jsx)("label",{for:"Manufacturer",children:"Manufacturer "}),Object(p.jsxs)("select",{id:"Manufacturer",name:"Manufacturer",onChange:n,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(b,{bikes:i})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option2",children:[Object(p.jsx)("label",{for:"Model",children:"Model "}),Object(p.jsxs)("select",{id:"Model",name:"Model",onChange:n,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(f,{models:t})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option3",children:[Object(p.jsx)("label",{for:"BikeType",children:"Bike Type "}),Object(p.jsxs)("select",{id:"BikeType",name:"BikeType",onChange:n,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(j,{bikes:i,curMod:s})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option4",children:[Object(p.jsx)("label",{for:"WheelSize",children:"Wheel Size "}),Object(p.jsxs)("select",{id:"WheelSize",name:"WheelSize",onChange:n,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(T,{bikes:i,curMod:s})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option5",children:[Object(p.jsx)("label",{for:"ForkTravel",children:"Fork Travel "}),Object(p.jsxs)("select",{id:"ForkTravel",name:"ForkTravel",onChange:n,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(v,{bikes:i,curMod:s})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option5",children:[Object(p.jsx)("label",{for:"RearTravel",children:"Rear Travel "}),Object(p.jsxs)("select",{id:"RearTravel",name:"RearTravel",onChange:n,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(w,{bikes:i,curMod:s})]})]}),Object(p.jsxs)("div",{className:"drop",id:"option5",children:[Object(p.jsx)("label",{for:"HTAngle",children:"HT Angle "}),Object(p.jsxs)("select",{id:"HTAngle",name:"HTAngle",onChange:n,children:[Object(p.jsx)("option",{value:"All",children:"All"}),Object(p.jsx)(g,{bikes:i,curMod:s})]})]})]})},x=(t(24),function(e){Object(a.a)(t,e);var i=Object(u.a)(t);function t(){var e;return Object(l.a)(this,t),(e=i.call(this)).filter=function(){var i=e.state,t=i.manuf,r=i.mod,s=i.bT,n=i.wS,l=i.fT,o=i.rT,a=i.hA,u=a.substring(0,2),p=a.substring(3,7);e.setState({bks:k.filter((function(e){return e.manufacturer.toLowerCase().includes(t.toLowerCase())&&e.model.toLowerCase().includes(r.toLowerCase())&&e.bikeType.toLowerCase().includes(s.toLowerCase())&&e.wheelSize.toString().includes(n)&&e.forkTravel.toString().includes(l)&&e.shockTravel.toString().includes(o)&&function(e){var i,t=!1,r=Object(c.a)(e);try{for(r.s();!(i=r.n()).done;){var s=i.value;if(s>=u&&s<=p){t=!0;break}t=!1}}catch(n){r.e(n)}finally{r.f()}return t}(e.htAngle)})),willFilter:!1})},e.onSearchChange=function(i){var t=i.target.id,r=i.target.value;"Manufacturer"===t?"All"===r?e.setState({manuf:"",mod:"",bT:"",wS:"",fT:"",rT:"",hA:"10-99"}):e.setState({manuf:r,mod:"",bT:"",wS:"",fT:"",rT:"",hA:"10-99"}):"Model"===t?"All"===r?e.setState({mod:"",bT:"",wS:"",fT:"",rT:"",hA:"10-99"}):e.setState({mod:r,bT:"",wS:"",fT:"",rT:"",hA:"10-99"}):"BikeType"===t?"All"===r?e.setState({bT:""}):e.setState({bT:r}):"WheelSize"===t?"All"===r?e.setState({wS:""}):e.setState({wS:r}):"ForkTravel"===t?"All"===r?e.setState({fT:""}):e.setState({fT:r}):"RearTravel"===t?"All"===r?e.setState({rT:""}):e.setState({rT:r}):"HTAngle"===t&&("All"===r?e.setState({hA:"10-99"}):e.setState({hA:r})),e.setState({willFilter:!0})},e.state={bks:[],manuf:"",mod:"",bT:"",wS:"",fT:"",rT:"",hA:"10-99",willFilter:!1},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({bks:k})}},{key:"render",value:function(){var e=this.state,i=e.bks,t=e.manuf,r=e.mod;e.willFilter&&this.filter();var s=k.filter((function(e){return e.manufacturer.toLowerCase().includes(t.toLowerCase())}));return Object(p.jsxs)("div",{id:"container",children:[Object(p.jsx)("div",{id:"header",children:Object(p.jsx)("h1",{id:"title",children:"Mountain Bike Finder"})}),Object(p.jsx)("div",{id:"searchArea",children:Object(p.jsxs)("form",{children:[Object(p.jsxs)("div",{id:"aboveDrops",children:[Object(p.jsxs)("h4",{id:"resultsText",children:[i.length," Result",1===i.length?"":"s"]}),Object(p.jsx)("button",{id:"btn",value:"reset",children:"Reset"})]}),Object(p.jsx)(S,{id:"drops",bikes:k,models:s,curMod:r,search:this.onSearchChange})]})}),Object(p.jsx)("div",{id:"results",children:Object(p.jsx)("div",{children:Object(p.jsx)(h,{bikes:i})})})]})}}]),t}(r.Component)),O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(i){var t=i.getCLS,r=i.getFID,s=i.getFCP,n=i.getLCP,c=i.getTTFB;t(e),r(e),s(e),n(e),c(e)}))},_=(t(25),t(13));n.a.render(Object(p.jsx)(_.a,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),O()}},[[31,1,2]]]);
//# sourceMappingURL=main.4c177590.chunk.js.map