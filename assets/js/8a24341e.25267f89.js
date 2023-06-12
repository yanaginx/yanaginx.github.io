"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[549],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),i=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=i(t.components);return n.createElement(p.Provider,{value:e},t.children)},l="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,s=t.originalType,p=t.parentName,m=g(t,["components","mdxType","originalType","parentName"]),l=i(r),N=a,d=l["".concat(p,".").concat(N)]||l[N]||k[N]||s;return r?n.createElement(d,o(o({ref:e},m),{},{components:r})):n.createElement(d,o({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=r.length,o=new Array(s);o[0]=N;var g={};for(var p in e)hasOwnProperty.call(e,p)&&(g[p]=e[p]);g.originalType=t,g[l]="string"==typeof t?t:a,o[1]=g;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}N.displayName="MDXCreateElement"},9337:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>g,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const s={slug:"setting-up-the-register-layer"},o="Setting up the Register Layer",g={unversionedId:"UVM/Advanced UVM/Setting up the Register Layer cac69577d55b4842a42551179a5b03ff",id:"UVM/Advanced UVM/Setting up the Register Layer cac69577d55b4842a42551179a5b03ff",title:"Setting up the Register Layer",description:"Contents are extracted from the Advanced UVM sessions by Verification Academy.",source:"@site/docs/UVM/Advanced UVM/Setting up the Register Layer cac69577d55b4842a42551179a5b03ff.md",sourceDirName:"UVM/Advanced UVM",slug:"/UVM/Advanced UVM/setting-up-the-register-layer",permalink:"/docs/UVM/Advanced UVM/setting-up-the-register-layer",draft:!1,tags:[],version:"current",frontMatter:{slug:"setting-up-the-register-layer"},sidebar:"tutorialSidebar",previous:{title:"Register-Based Testing",permalink:"/docs/UVM/Advanced UVM/registered-based-testing"},next:{title:"The Proper Care and Feeding of Sequences",permalink:"/docs/UVM/Advanced UVM/the-proper-care-and-feeding-of-sequences"}},p={},i=[{value:"Register model structure",id:"register-model-structure",level:2},{value:"UVM Registers are Layered",id:"uvm-registers-are-layered",level:2},{value:"UVM Register use models",id:"uvm-register-use-models",level:2},{value:"<strong><strong><strong><strong><strong><strong><strong><strong><strong>**</strong></strong></strong></strong></strong></strong></strong></strong></strong>Stimulus generation<strong><strong><strong><strong><strong><strong><strong><strong><strong>**</strong></strong></strong></strong></strong></strong></strong></strong></strong>",id:"stimulus-generation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Analysis \u2018Mirror\u2019",id:"analysis-mirror",level:3},{value:"Register Information model",id:"register-information-model",level:2},{value:"Registers, Blocks &amp; Maps",id:"registers-blocks--maps",level:2},{value:"Registers",id:"registers",level:3},{value:"Blocks &amp; Maps",id:"blocks--maps",level:3},{value:"Register blocks are Hierarchical",id:"register-blocks-are-hierarchical",level:3},{value:"The Register Map - <code>uvm_reg_map</code>",id:"the-register-map---uvm_reg_map",level:2},{value:"Setting up the Register Map",id:"setting-up-the-register-map",level:3},{value:"How do register accesses work?",id:"how-do-register-accesses-work",level:2},{value:"Register Adapter example",id:"register-adapter-example",level:2},{value:"Register model Testbench intergration",id:"register-model-testbench-intergration",level:2},{value:"Stimulus reuse (bridge example)",id:"stimulus-reuse-bridge-example",level:2},{value:"UVM Register Assistant",id:"uvm-register-assistant",level:2},{value:"Summary",id:"summary",level:2}],m={toc:i};function l(t){let{components:e,...s}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-the-register-layer"},"Setting up the Register Layer"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Contents are extracted from the Advanced UVM sessions by ",(0,a.kt)("a",{parentName:"p",href:"https://verificationacademy.com/"},"Verification Academy"),".")),(0,a.kt)("h2",{id:"register-model-structure"},"Register model structure"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(3177).Z,width:"1215",height:"596"})),(0,a.kt)("h2",{id:"uvm-registers-are-layered"},"UVM Registers are Layered"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**"))))))),"UVM Register Layer provides protocol-independent register-based layering",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**")))))))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(646).Z,width:"697",height:"277"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Keep the operation abstract enough to be independent from the physical specific implementation of the register")),(0,a.kt)("h2",{id:"uvm-register-use-models"},"UVM Register use models"),(0,a.kt)("h3",{id:"stimulus-generation"},(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**"))))))))),"Stimulus generation",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**")))))))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Firmware-level abstraction of stimulus:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"i.e. Set this bit in this register rather than write x to address y"))),(0,a.kt)("li",{parentName:"ul"},"Stimulus reuse",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If the bus agent changes, the stimulus still work"))),(0,a.kt)("li",{parentName:"ul"},"Front and Back door access:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Front door is via agent"),(0,a.kt)("li",{parentName:"ul"},"Back door is directly to the hardware via the simulator database")))),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Register model reflects hardware programmable registers"),(0,a.kt)("li",{parentName:"ul"},"Set up desired configuration in the register model then dump to DUT",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Randomization with configuration constraints")))),(0,a.kt)("h3",{id:"analysis-mirror"},"Analysis \u2018Mirror\u2019"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Current state of the register model matches the DUT hardware"),(0,a.kt)("li",{parentName:"ul"},"Useful for scoreboards and functional coverage monitors")),(0,a.kt)("h2",{id:"register-information-model"},"Register Information model"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(2559).Z,width:"2470",height:"937"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Blocks are also hierarchical")),(0,a.kt)("h2",{id:"registers-blocks--maps"},"Registers, Blocks & Maps"),(0,a.kt)("h3",{id:"registers"},"Registers"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(2273).Z,width:"2475",height:"998"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"build()")," method will be use for the register block to configure and make sure the fields are properly aligned and configured to model the register")),(0,a.kt)("h3",{id:"blocks--maps"},"Blocks & Maps"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(8551).Z,width:"2475",height:"1172"})),(0,a.kt)("p",null,"In the register block ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," method:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instantiate and build the registers"),(0,a.kt)("li",{parentName:"ul"},"Declare the HDL path of the register for backdoor accesses"),(0,a.kt)("li",{parentName:"ul"},"Create map will be used to hold the register\u2019s physical addresses")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(2578).Z,width:"2479",height:"1169"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"add_hdl_path_slice")," will be used to declare the HDL path for the register will be used for backdoor accesses")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"add_hdl_path")," will be used to declare the HDL path to the module containing the implementation of the registers declared in the register block")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"lock_model()")," method is used to ensure no one can change the register model\u2019s information during the simulation")),(0,a.kt)("h3",{id:"register-blocks-are-hierarchical"},"Register blocks are Hierarchical"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Register block can also contain other register blocks"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Define the default map containing the base address, the endianness"),(0,a.kt)("li",{parentName:"ul"},"Setup the sub register blocks by instantiating, configurating and building the sub register blocks"),(0,a.kt)("li",{parentName:"ul"},"Add the sub register map to the current default map, specifying the offset of the sub register map inside the default map of the SoC"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(2013).Z,width:"2466",height:"1162"})),(0,a.kt)("h2",{id:"the-register-map---uvm_reg_map"},"The Register Map - ",(0,a.kt)("inlineCode",{parentName:"h2"},"uvm_reg_map")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**")))))))))),"Contains offsets for:",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**"))))))))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Registers and Memories"),(0,a.kt)("li",{parentName:"ul"},"(Hierarchical blocks)"),(0,a.kt)("li",{parentName:"ul"},"(Sub-maps)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**"))))))))))))))))))),"Also provides means to access registers",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**")))))))))))))))))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Handle for the target sequencer",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"To instantiate transaction to driver for front door access"))),(0,a.kt)("li",{parentName:"ul"},"Handle for register layer adapter",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Convert register level transaction to bus level transaction"),(0,a.kt)("p",{parentName:"blockquote"},"A specialize handler manage the job of the translation sequence mentioned before")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"****"))))))))))),"A block can have > 1 map",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"****")))))))))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since there maybe are multiple interfaces being used to access the same physical registers in the DUT")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(7227).Z,width:"335",height:"369"})),(0,a.kt)("h3",{id:"setting-up-the-register-map"},"Setting up the Register Map"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Is a part of the environment"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"build_phase")," of the environment will be used to fetch the register block handle from the configuration DB"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"connect_phase")," of the environment will be used to setup the register block"),(0,a.kt)("p",{parentName:"blockquote"},"If the agent is active, a register adapter will be instantiated to use the agent\u2019s sequencer and driver to access the register through the connected interface"),(0,a.kt)("p",{parentName:"blockquote"},"Check if the register model is on the top of the hierarchy, if it is then call the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_sequencer")," method in the register map to tell the map which sequencer will be using to talk to the driver and what converter object will be used to translate the register access into bus transaction"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"set_auto_predict")," method is used to adjust the auto predict function of the register model (default is 0)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(6202).Z,width:"981",height:"464"})),(0,a.kt)("h2",{id:"how-do-register-accesses-work"},"How do register accesses work?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**"))))))))))))))))))))))),"When an explicit register access method is call",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**")))))))))))))))))))))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The register layer uses a generic register command: ",(0,a.kt)("inlineCode",{parentName:"li"},"Register[Read/Write](data)"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**"))))))),"The register transaction is passed to the address map",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**")))))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The map\u2019s adapter (extended from ",(0,a.kt)("inlineCode",{parentName:"li"},"uvm_reg_adapter"),") converts the register transaction to a bus transaction")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"****")))))))))))))))),"This is then sent through a layering to the target bus agent",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"****"))))))))))))))))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(1229).Z,width:"1086",height:"680"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"****"))))))))))))))))))),"Predictor updates the value of the register model",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"****")))))))))))))))))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bus transaction (from the monitor) converted back to Register transaction using the adapter"),(0,a.kt)("li",{parentName:"ul"},"Write: Value that was written to DUT will be reflected"),(0,a.kt)("li",{parentName:"ul"},"Read: Value that was read from the DUT will be reflected")),(0,a.kt)("p",null,"\u21d2 Keeps the value in the register model is the same as the value in the physical registers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**")))))))))))),"The predictor then writes the register transaction out of its ",(0,a.kt)("inlineCode",{parentName:"p"},"analysis_port"),"**"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generic register requests to target bus sequence items")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Should be the same as the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"reconstruction monitor")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(1145).Z,width:"1084",height:"760"})),(0,a.kt)("h2",{id:"register-adapter-example"},"Register Adapter example"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(1502).Z,width:"2386",height:"1173"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"uvm_reg_bus_op")," is a struct, containing the information of the register operation (whether a write or a read, the address and the data)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(4637).Z,width:"2453",height:"1156"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The argument is ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," type: The struct is passed in when it is called, and the method will fill in the appropriate fields of the struct")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Status value ",(0,a.kt)("inlineCode",{parentName:"p"},"UVM_HAS_X")," is also legal")),(0,a.kt)("h2",{id:"register-model-testbench-intergration"},"Register model Testbench intergration"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(8825).Z,width:"2469",height:"1048"})),(0,a.kt)("h2",{id:"stimulus-reuse-bridge-example"},"Stimulus reuse (bridge example)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"****")))))))))))),"SPI master is integrated inside an AHB peripheral block",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"****"))))))))))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**"))))))))))))))))))),"Host bus sequences can be reused as is",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**")))))))))))))))))))," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**"))))))))))))),"Testbench structure changes",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},(0,a.kt)("strong",{parentName:"strong"},"**")))))))))))))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(2590).Z,width:"1779",height:"349"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Only have to add the register map of the SPI map, and swap in the new register to bus adapter for the new protocol")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(8534).Z,width:"720",height:"324"})),(0,a.kt)("h2",{id:"uvm-register-assistant"},"UVM Register Assistant"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},"****")),"Automatically generates UVM register package",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("strong",{parentName:"strong"},"****"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports all UVM access Modes"),(0,a.kt)("li",{parentName:"ul"},"Registers/Fields, Memories, Blocks, Sub-blocks")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(8973).Z,width:"2301",height:"732"})),(0,a.kt)("p",null,"Refer to "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://verificationacademy.com/seminars/uvm-recipe-automating-the-creation-of-your-uvm-register-model"},"Automating the Creation of Your UVM Register Model | UVM Recipe of the Month | Verification Academy")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:r(3395).Z,width:"1358",height:"1052"})))}l.isMDXComponent=!0},646:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 1-4fab713c4554e36d4fcc10c5bce69fca.png"},1145:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 10-5f73083144920a1241ef4073f6a7145e.png"},1502:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 11-b0db7d13d9cebb4ca2023f324e0fac0c.png"},4637:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 12-ff7f47567b44323e411daaddcad51f73.png"},8825:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 13-d83af3314ce4b1b2a57553de9773dc1d.png"},2590:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 14-b5549c5a805dc2e3624eab55457bd263.png"},8534:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 15-7a04e0d8de07c270c3f39c8b264cced8.png"},8973:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 16-eabb3af6e6c1ca219c59c4a836253419.png"},3395:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 17-f35ecfadf991fda0fd9202bbcd86b85a.png"},2559:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 2-183f9350b8e618b37c792c9aabd4557b.png"},2273:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 3-7ddd97e5eb32151be5cc529d1eea7400.png"},8551:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 4-eff90b01a3754b63b7fe5119af5d173c.png"},2578:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 5-3f208edb5332f38556717df50ec036e2.png"},2013:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 6-330c9a4ad4836bb7f57cd573b1536f48.png"},7227:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 7-b0c6e98f4b14803ee33f51b55cc28d75.png"},6202:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 8-630c4e4c21c5228e21e251d6256fda24.png"},1229:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled 9-32d26860c5596c32b1cda1598f080b20.png"},3177:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/Untitled-a2dfaed131c485d544f50814ad049c19.png"}}]);