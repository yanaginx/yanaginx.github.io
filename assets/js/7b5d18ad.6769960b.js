"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[554],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=a.createContext({}),p=function(t){var e=a.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=p(t.components);return a.createElement(g.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,g=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(g,".").concat(c)]||d[c]||m[c]||s;return n?a.createElement(k,o(o({ref:e},l),{},{components:n})):a.createElement(k,o({ref:e},l))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var g in e)hasOwnProperty.call(e,g)&&(i[g]=e[g]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7241:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={slug:"writing-and-managing-tests"},o="Writing and managing Tests",i={unversionedId:"UVM/Advanced UVM/Writing and managing Tests 79e0d3fbda0b4ef1b25fdefc394cbb0f",id:"UVM/Advanced UVM/Writing and managing Tests 79e0d3fbda0b4ef1b25fdefc394cbb0f",title:"Writing and managing Tests",description:"Contents are extracted from the Advanced UVM sessions by Verification Academy.",source:"@site/docs/UVM/Advanced UVM/Writing and managing Tests 79e0d3fbda0b4ef1b25fdefc394cbb0f.md",sourceDirName:"UVM/Advanced UVM",slug:"/UVM/Advanced UVM/writing-and-managing-tests",permalink:"/docs/UVM/Advanced UVM/writing-and-managing-tests",draft:!1,tags:[],version:"current",frontMatter:{slug:"writing-and-managing-tests"},sidebar:"tutorialSidebar",previous:{title:"Using the Register Layer",permalink:"/docs/UVM/Advanced UVM/using-the-register-layer"}},g={},p=[{value:"What is a test?",id:"what-is-a-test",level:2},{value:"Defaults in UVM",id:"defaults-in-uvm",level:2},{value:"Use a Base Test to set defaults",id:"use-a-base-test-to-set-defaults",level:2},{value:"Extend Base Test to create a Test",id:"extend-base-test-to-create-a-test",level:2},{value:"Set up and invoke test",id:"set-up-and-invoke-test",level:2},{value:"Complex environment, simple test",id:"complex-environment-simple-test",level:2},{value:"Simple Test",id:"simple-test",level:3},{value:"Extended Test",id:"extended-test",level:3},{value:"Managing Test Execution: Phase objections",id:"managing-test-execution-phase-objections",level:2},{value:"Objections are hierarchical",id:"objections-are-hierarchical",level:3},{value:"Recommendation",id:"recommendation",level:3},{value:"Using objections",id:"using-objections",level:2},{value:"Recommendation: Objecting in a component",id:"recommendation-objecting-in-a-component",level:2},{value:"Summary",id:"summary",level:2}],l={toc:p};function d(t){let{components:e,...s}=t;return(0,r.kt)("wrapper",(0,a.Z)({},l,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-and-managing-tests"},"Writing and managing Tests"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contents are extracted from the Advanced UVM sessions by ",(0,r.kt)("a",{parentName:"p",href:"https://verificationacademy.com/"},"Verification Academy"),".")),(0,r.kt)("h2",{id:"what-is-a-test"},"What is a test?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"****")))))))))))))))),"The environment is the \u201ctestbench\u201d",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"****"))))))))))))))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Defines what components are needed to verify the DUT"),(0,r.kt)("li",{parentName:"ul"},"Specifies defaults")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"**")))),"The test\u2019s job is to \u201ctweak\u201d the tesbench",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"**"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configuration"),(0,r.kt)("li",{parentName:"ul"},"Factory overrides"),(0,r.kt)("li",{parentName:"ul"},"Additional sequences")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"****")))),"The test\u2019s other job is to ensure that the simulation ends",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"****"))))),(0,r.kt)("h2",{id:"defaults-in-uvm"},"Defaults in UVM"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(8532).Z,width:"2270",height:"1101"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Can add additional check to make sure the value pass by the configuration DB from the test is still legal")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(2530).Z,width:"2238",height:"818"})),(0,r.kt)("h2",{id:"use-a-base-test-to-set-defaults"},"Use a Base Test to set defaults"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There is option to override the environment type, make sure to do factory override before calling ",(0,r.kt)("inlineCode",{parentName:"p"},"super.build")," inside the extended test")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(7654).Z,width:"2134",height:"770"})),(0,r.kt)("h2",{id:"extend-base-test-to-create-a-test"},"Extend Base Test to create a Test"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(1647).Z,width:"984",height:"305"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To override the environment type as mentioned above:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(79).Z,width:"697",height:"323"})),(0,r.kt)("h2",{id:"set-up-and-invoke-test"},"Set up and invoke test"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Instantiate the DUT\u2019s virtual interface and pass it down to the testbench through UVM config DB")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(6539).Z,width:"1757",height:"711"})),(0,r.kt)("h2",{id:"complex-environment-simple-test"},"Complex environment, simple test"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(1294).Z,width:"2034",height:"1050"})),(0,r.kt)("h3",{id:"simple-test"},"Simple Test"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(4845).Z,width:"2245",height:"1113"})),(0,r.kt)("h3",{id:"extended-test"},"Extended Test"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(6382).Z,width:"2500",height:"1056"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The virtual sequence can also be overridden using the ",(0,r.kt)("inlineCode",{parentName:"p"},"set_type_override")," method \u2192 Explicit sequence type override")),(0,r.kt)("h2",{id:"managing-test-execution-phase-objections"},"Managing Test Execution: Phase objections"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"**"))),"Components or Sequences can raise or drop objections",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"**")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Phase continues until all raised objections are dropped")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"An objection must be raised at the beginning of the phase")),(0,r.kt)("h3",{id:"objections-are-hierarchical"},"Objections are hierarchical"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"**"))))))))))))))))),"Objections are raised up the hierarchy by default",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"**")))))))))))))))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(872).Z,width:"1179",height:"965"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sequencer\u2019s objection + Monitor\u2019s objection = 2 agent\u2019s objections")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"**")))))))),"Objections are dropped hierarchically too",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"**"))))))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(2424).Z,width:"1131",height:"814"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"****"))))))))))),"When a component\u2019s count = 0, wait for ",(0,r.kt)("inlineCode",{parentName:"p"},"drain_time")," to elapse**"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(7752).Z,width:"1113",height:"860"})),(0,r.kt)("h3",{id:"recommendation"},"Recommendation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Raise and drop objections inside the test"),(0,r.kt)("p",{parentName:"blockquote"},"Allows the test to determine when all the stimulus is complete and start dropping the objection")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(4909).Z,width:"2361",height:"508"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There might be cases where the objections is drop before the last transaction hasn\u2019t finish processing yet")),(0,r.kt)("h2",{id:"using-objections"},"Using objections"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Scoreboard recording transactions can raise an objection to prevent the test from ending early, make sure all the transactions has been recorded")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(4400).Z,width:"1418",height:"884"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Not recommended since it will introduce additional overhead")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alternative solution:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(2694).Z,width:"1087",height:"899"})),(0,r.kt)("h2",{id:"recommendation-objecting-in-a-component"},"Recommendation: Objecting in a component"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Using the provided method ",(0,r.kt)("inlineCode",{parentName:"p"},"phase_ready_to_end")," to do the objection before ending the phase")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(6124).Z,width:"2004",height:"790"})),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(4163).Z,width:"1102",height:"944"})))}d.isMDXComponent=!0},2530:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 1-1fed7699607c0e54825481159b4ff5f6.png"},2424:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 10-46df2be3ce8715c098c22f2f1f59cd0f.png"},7752:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 11-b3af89ed690844a108e0e5c30496524d.png"},4909:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 12-2a8ee69d47b487aee0e93a7c93a6dd62.png"},4400:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 13-302b6beea74a5bd39847905645de19fd.png"},2694:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 14-a31c00ce825610a87850358a8f51fb30.png"},6124:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 15-4d72ba85dfe5c2e893d42889846da476.png"},4163:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 16-af59c7becade2698d11d019f05ec8ea7.png"},7654:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 2-15d675e9bbf0802ae046059c46717c00.png"},1647:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 3-340f66f3ed18fb1de4cc24a94f956526.png"},79:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 4-e64440c0ed1f4dfd686b4183fe4433a2.png"},6539:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 5-1bbac9ae18691744a5b64adb7f626307.png"},1294:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 6-7628687f54b441576bc13433e5550a39.png"},4845:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 7-0b717dc190fab6a04052e7298e8d02b1.png"},6382:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 8-aad3ed555a6ad6ca7c9f5b758d0a32a2.png"},872:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled 9-b4264a5de569326e33cab401b1f42d77.png"},8532:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Untitled-39fc5fd44d1163509afe3dee2f8bc49c.png"}}]);