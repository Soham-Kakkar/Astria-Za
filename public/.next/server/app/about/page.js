(()=>{var e={};e.id=220,e.ids=[220],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},8136:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d});var n=r(260),s=r(8203),i=r(5155),o=r.n(i),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4987)),"C:\\Users\\kakka\\Documents\\Project\\Astria-Za\\client\\src\\app\\about\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1470)),"C:\\Users\\kakka\\Documents\\Project\\Astria-Za\\client\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\kakka\\Documents\\Project\\Astria-Za\\client\\src\\app\\about\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5414:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9607,23)),Promise.resolve().then(r.bind(r,4008))},1502:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8531,23)),Promise.resolve().then(r.bind(r,5372))},7749:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},9605:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,1284,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},6487:()=>{},8335:()=>{},5372:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(5512),s=r(8009),i=r(6206);let o=()=>{let e=(0,s.useRef)(null),t=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let r=e.current;if(!r)return;let n=new i.Z58,s=new i.ubm(75,window.innerWidth/window.innerHeight,.1,100),o=new i.JeP({alpha:!0});o.setSize(window.innerWidth,window.innerHeight),r.appendChild(o.domElement);let a=new i.Tap().load("https://images.squarespace-cdn.com/content/v1/5a769958b0786976fb16bcf6/1542774883995-V3ULKOLM6NQ708E3I6YX/orion.png?format=2500ws"),l=new i.Gu$(100,60,40);l.scale(-1,1,1);let d=new i.V9B({map:a}),c=new i.eaF(l,d);n.add(c),s.position.set(0,0,0);let u=()=>{c.rotation.y+=75e-5,o.render(n,s),t.current=requestAnimationFrame(u)};u();let h=()=>{let e=window.scrollY;r&&(r.style.transform=`translateY(${.5*e}px)`)};return window.addEventListener("scroll",h),()=>{t.current&&cancelAnimationFrame(t.current),window.removeEventListener("scroll",h),r&&r.removeChild(o.domElement)}},[]),(0,n.jsx)("div",{ref:e,className:"background-container",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",zIndex:-1}})}},4987:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(2740);function s(){return(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"About Page"})})}},1470:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>l});var n=r(2740);r(1135);var s=r(9607),i=r.n(s);function o(){return(0,n.jsxs)("nav",{className:"navbar",role:"navbar",children:[(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)("div",{className:"logo",children:"ASTRIA-ZA"})}),(0,n.jsx)("div",{className:"nav",children:(0,n.jsxs)("ul",{className:"nav-links",children:[(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/about",children:"About"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/past-events",children:"Past Events"})}),(0,n.jsx)("li",{children:(0,n.jsx)(i(),{href:"/upcoming-events",children:"Upcoming Events"})}),!1]})}),(0,n.jsx)("div",{className:"sign-in",children:(0,n.jsx)(i(),{href:"/auth",children:(0,n.jsx)("button",{children:"sign up"})})})]})}r(7369);var a=r(4008);let l={title:"Astria-Za - IIT Jammu's Astronomy Club",description:"A Next.js app with a Three.js animated background"};function d({children:e}){return(0,n.jsx)("html",{lang:"en",children:(0,n.jsxs)("body",{children:[(0,n.jsx)(a.default,{}),(0,n.jsx)(o,{}),(0,n.jsx)("main",{children:e})]})})}},4008:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\kakka\\\\Documents\\\\Project\\\\Astria-Za\\\\client\\\\src\\\\components\\\\ThreeJSBackground.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\kakka\\Documents\\Project\\Astria-Za\\client\\src\\components\\ThreeJSBackground.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(8077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{},7369:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,244,77],()=>r(8136));module.exports=n})();