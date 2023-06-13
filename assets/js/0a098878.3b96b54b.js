"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),c=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,h=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return a?l.createElement(h,s(s({ref:t},p),{},{components:a})):l.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[d]="string"==typeof e?e:n,s[1]=r;for(var c=2;c<i;c++)s[c]=a[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},716:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var l=a(7462),n=(a(7294),a(3905));const i={slug:"systemverilog-oop-for-uvm"},s="SystemVerilog OOP for UVM",r={unversionedId:"SystemVerilog/SystemVerilog OOP for UVM aa7c183de7944150b5d19d0bf1bc5ec6",id:"SystemVerilog/SystemVerilog OOP for UVM aa7c183de7944150b5d19d0bf1bc5ec6",title:"SystemVerilog OOP for UVM",description:"Note taken from the course SystemVerilog OOP for UVM on Verification Academy",source:"@site/docs/SystemVerilog/SystemVerilog OOP for UVM aa7c183de7944150b5d19d0bf1bc5ec6.md",sourceDirName:"SystemVerilog",slug:"/SystemVerilog/systemverilog-oop-for-uvm",permalink:"/docs/SystemVerilog/systemverilog-oop-for-uvm",draft:!1,tags:[],version:"current",frontMatter:{slug:"systemverilog-oop-for-uvm"},sidebar:"tutorialSidebar",previous:{title:"Language features note",permalink:"/docs/SystemVerilog/language-features-note"},next:{title:"A Circuit and Systems Perspective notes",permalink:"/docs/Definitions & Concepts/circuit-and-system-perspective-notes"}},o={},c=[{value:"Good reads",id:"good-reads",level:2},{value:"Classes",id:"classes",level:2},{value:"SV &amp; OOP",id:"sv--oop",level:3},{value:"SystemVerilog Class Terminology",id:"systemverilog-class-terminology",level:3},{value:"Class basics",id:"class-basics",level:3},{value:"Object handles",id:"object-handles",level:3},{value:"Automatic memory management",id:"automatic-memory-management",level:3},{value:"Class methods",id:"class-methods",level:3},{value:"<code>this</code>",id:"this",level:3},{value:"Copying handles vs copying objects",id:"copying-handles-vs-copying-objects",level:3},{value:"Shallow copy example",id:"shallow-copy-example",level:3},{value:"Deep copy example",id:"deep-copy-example",level:3},{value:"Static properties",id:"static-properties",level:3},{value:"Static methods",id:"static-methods",level:3},{value:"Inheritance and Polymorphism",id:"inheritance-and-polymorphism",level:2},{value:"Inheritance",id:"inheritance",level:3},{value:"Constructing Extended classes",id:"constructing-extended-classes",level:3},{value:"Class variables with inheritance",id:"class-variables-with-inheritance",level:3},{value:"Dynamic casting of class handles",id:"dynamic-casting-of-class-handles",level:3},{value:"Polymorphism",id:"polymorphism",level:3},{value:"Virtual class methods",id:"virtual-class-methods",level:3},{value:"Mixing virtual and non-virtual methods",id:"mixing-virtual-and-non-virtual-methods",level:3},{value:"Accessibility and Abstract classes",id:"accessibility-and-abstract-classes",level:3},{value:"Abstract class example",id:"abstract-class-example",level:3},{value:"Extending Abstract class into Concrete",id:"extending-abstract-class-into-concrete",level:3},{value:"OOP Design pattern examples",id:"oop-design-pattern-examples",level:2},{value:"Parameterized classes",id:"parameterized-classes",level:3},{value:"Parameterized classes with static properties",id:"parameterized-classes-with-static-properties",level:3},{value:"Class scope operator",id:"class-scope-operator",level:3},{value:"Singleton with local qualifiers",id:"singleton-with-local-qualifiers",level:3},{value:"Factory pattern",id:"factory-pattern",level:3},{value:"Factory registration",id:"factory-registration",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"systemverilog-oop-for-uvm"},"SystemVerilog OOP for UVM"),(0,n.kt)("p",null,"Note taken from the course SystemVerilog OOP for UVM on Verification Academy"),(0,n.kt)("h2",{id:"good-reads"},"Good reads"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"systemverilog-oop-for-uvm#object-handles"},"Object handles")," "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"systemverilog-oop-for-uvm#copying-handles-vs-copying-objects"},"Copying handles vs copying objects")," "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"systemverilog-oop-for-uvm#inheritance-and-polymorphism"},"Inheritance and Polymorphism")," "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"systemverilog-oop-for-uvm#parameterized-classes"},"Parameterized classes")," "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"systemverilog-oop-for-uvm#singleton-with-local-qualifiers"},"Singleton with local qualifiers")," "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"systemverilog-oop-for-uvm#factory-pattern"},"Factory pattern")," "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"systemverilog-oop-for-uvm#factory-registration"},"Factory registration")," "),(0,n.kt)("h2",{id:"classes"},"Classes"),(0,n.kt)("h3",{id:"sv--oop"},"SV & OOP"),(0,n.kt)("p",null,"OOP enabling these concepts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Encapsulation"),(0,n.kt)("li",{parentName:"ul"},"Inheritance"),(0,n.kt)("li",{parentName:"ul"},"Data hiding"),(0,n.kt)("li",{parentName:"ul"},"Generic programming (template/parameterization)"),(0,n.kt)("li",{parentName:"ul"},"Polymorphism")),(0,n.kt)("p",null,"Classes can be used to model"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reusable verification environments"),(0,n.kt)("li",{parentName:"ul"},"Abstract data & methods that operate on them")),(0,n.kt)("h3",{id:"systemverilog-class-terminology"},"SystemVerilog Class Terminology"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Class objects are accessed through ",(0,n.kt)("em",{parentName:"p"},"Class handles")," (not pointer, since handle are safer and such \u2192 handle are safe pointers)")),(0,n.kt)("h3",{id:"class-basics"},"Class basics"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Class declaration does not allocate any storage, it only creates a new type"),(0,n.kt)("p",{parentName:"blockquote"},"Don\u2019t confuse SVA\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"property")," with ",(0,n.kt)("em",{parentName:"p"},"class properties")),(0,n.kt)("p",{parentName:"blockquote"},"Both methods and properties are members of the class")),(0,n.kt)("p",null,"Classes are dynamically created ",(0,n.kt)("strong",{parentName:"p"},"objects")," (class instance)"),(0,n.kt)("p",null,"Calling ",(0,n.kt)("inlineCode",{parentName:"p"},"new()")," creates an instance and allocate memory"),(0,n.kt)("h3",{id:"object-handles"},"Object handles"),(0,n.kt)("p",null,"A class variable only refer to a valid object \u2192 holding a ",(0,n.kt)("em",{parentName:"p"},"handle")," referencing an ",(0,n.kt)("em",{parentName:"p"},"object")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(5775).Z,width:"708",height:"75"})),(0,n.kt)("p",null,"Uninitialized variables have a special value ",(0,n.kt)("inlineCode",{parentName:"p"},"null")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(4250).Z,width:"873",height:"121"})),(0,n.kt)("p",null,"Object destruction/de-allocation done automatically after an object has no references "),(0,n.kt)("h3",{id:"automatic-memory-management"},"Automatic memory management"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(35).Z,width:"909",height:"346"})),(0,n.kt)("h3",{id:"class-methods"},"Class methods"),(0,n.kt)("p",null,"As with Verilog:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tasks can block and consume time"),(0,n.kt)("li",{parentName:"ul"},"Functions must be non-blocking and can return values")),(0,n.kt)("h3",{id:"this"},(0,n.kt)("inlineCode",{parentName:"h3"},"this")),(0,n.kt)("p",null,"An implicit argument to a method that refers to the current object"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(9278).Z,width:"882",height:"269"})),(0,n.kt)("h3",{id:"copying-handles-vs-copying-objects"},"Copying handles vs copying objects"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(5195).Z,width:"963",height:"440"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"After the shallow copies object, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Pkt2_h")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Pkt1_h")," handles are pointing to distinct object, meaning ",(0,n.kt)("inlineCode",{parentName:"p"},"Pkt1_h.status")," remains 5 after the ",(0,n.kt)("inlineCode",{parentName:"p"},"Pkt2_h.status = 10")," statement")),(0,n.kt)("h3",{id:"shallow-copy-example"},"Shallow copy example"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(6515).Z,width:"970",height:"480"})),(0,n.kt)("h3",{id:"deep-copy-example"},"Deep copy example"),(0,n.kt)("p",null,"To do a \u201cdeep\u201d copy, a custom ",(0,n.kt)("inlineCode",{parentName:"p"},"copy")," method must be created"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(2656).Z,width:"968",height:"470"})),(0,n.kt)("h3",{id:"static-properties"},"Static properties"),(0,n.kt)("p",null,"Get created as soon as we declared the type"),(0,n.kt)("p",null,"Available throughout the simulation"),(0,n.kt)("p",null,"Access the static properties through ",(0,n.kt)("inlineCode",{parentName:"p"},"<Class_name>::<Properties_name>")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(8729).Z,width:"948",height:"467"})),(0,n.kt)("h3",{id:"static-methods"},"Static methods"),(0,n.kt)("p",null,"Can be called without a specific object"),(0,n.kt)("p",null,"Cannot access non-static members (no ",(0,n.kt)("inlineCode",{parentName:"p"},"this")," object)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(3757).Z,width:"903",height:"392"})),(0,n.kt)("h2",{id:"inheritance-and-polymorphism"},"Inheritance and Polymorphism"),(0,n.kt)("h3",{id:"inheritance"},"Inheritance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creates new class type based on an existing class type")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(8335).Z,width:"1394",height:"596"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add new methods or add new behaviors to an existing method")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(4737).Z,width:"1517",height:"415"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Overriding the method caused the overrided method be hidden from the extended class"),(0,n.kt)("p",{parentName:"blockquote"},"Can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"super.")," to look back from the base class and access base class\u2019s methods")),(0,n.kt)("h3",{id:"constructing-extended-classes"},"Constructing Extended classes"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(2727).Z,width:"996",height:"422"})),(0,n.kt)("h3",{id:"class-variables-with-inheritance"},"Class variables with inheritance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Base class variable can hold handles to extended objects, but not the reverse")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(8836).Z,width:"971",height:"370"})),(0,n.kt)("h3",{id:"dynamic-casting-of-class-handles"},"Dynamic casting of class handles"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(2116).Z,width:"955",height:"447"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(6201).Z,width:"477",height:"223"})),(0,n.kt)("h3",{id:"polymorphism"},"Polymorphism"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ability to have the same code act differently on different type"),(0,n.kt)("li",{parentName:"ul"},"A key requirement for any OOP languages"),(0,n.kt)("li",{parentName:"ul"},"Statically at compile time using parameterized type"),(0,n.kt)("li",{parentName:"ul"},"Dynamically during run-time using virtual class methods")),(0,n.kt)("h3",{id:"virtual-class-methods"},"Virtual class methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chose the method by object type, not class variable")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(7432).Z,width:"980",height:"343"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Override must have the same prototype",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Once ",(0,n.kt)("inlineCode",{parentName:"p"},"virtual")," \u2192 Always ",(0,n.kt)("inlineCode",{parentName:"p"},"virtual"))))),(0,n.kt)("p",null,"In the ",(0,n.kt)("inlineCode",{parentName:"p"},"run")," task, the ",(0,n.kt)("inlineCode",{parentName:"p"},"$display(p_h.status)")," will be either 5 or 6 since the method will check whether the object calling it is of type ",(0,n.kt)("inlineCode",{parentName:"p"},"ErrorPkt")," or of type ",(0,n.kt)("inlineCode",{parentName:"p"},"Packet"),", not requiring for the object in the argument ",(0,n.kt)("inlineCode",{parentName:"p"},"run")," task to be explicitly of type ",(0,n.kt)("inlineCode",{parentName:"p"},"ErrorPkt")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Packet")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"virtual")," methods behave without knowing if it\u2019s dealing with base class object or the base class\u2019s derivatives")),(0,n.kt)("h3",{id:"mixing-virtual-and-non-virtual-methods"},"Mixing virtual and non-virtual methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clone is a construction with copy")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(5647).Z,width:"952",height:"427"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"copy")," is non-virtual here since we want to call the correct ",(0,n.kt)("inlineCode",{parentName:"p"},"copy")," methods according to each type"),(0,n.kt)("p",{parentName:"blockquote"},"And the ",(0,n.kt)("inlineCode",{parentName:"p"},"copy"),"'s argument should be local class type, which allow direct access to local properties without casting")),(0,n.kt)("h3",{id:"accessibility-and-abstract-classes"},"Accessibility and Abstract classes"),(0,n.kt)("p",null,"By default, all class members are public"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"local")," quailifer restricts access to only within the declared class"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"protected")," qualifier restricts access to only within the declared class and an extension of that class")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Abstract class")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Can never be constructed directly"),(0,n.kt)("li",{parentName:"ul"},"Can only construct class extended from base class"),(0,n.kt)("li",{parentName:"ul"},"Provide common API for class methodology"),(0,n.kt)("li",{parentName:"ul"},"Can declare virtual method prototypes that must be overriden in extended class")),(0,n.kt)("h3",{id:"abstract-class-example"},"Abstract class example"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"pure virtual")," tells the extended class must provide the implementation of the method")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(3365).Z,width:"960",height:"431"})),(0,n.kt)("h3",{id:"extending-abstract-class-into-concrete"},"Extending Abstract class into Concrete"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(6635).Z,width:"989",height:"408"})),(0,n.kt)("h2",{id:"oop-design-pattern-examples"},"OOP Design pattern examples"),(0,n.kt)("h3",{id:"parameterized-classes"},"Parameterized classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Generic class to be instantiated as objects of different types or sizes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Uses module-like parameter passing","  ",(0,n.kt)("img",{alt:"Untitled",src:a(3716).Z,width:"1316",height:"323"})))),(0,n.kt)("li",{parentName:"ul"},"A generic class & actual parameter values is called a s",(0,n.kt)("em",{parentName:"li"},"pecialization"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(2646).Z,width:"832",height:"151"})),(0,n.kt)("h3",{id:"parameterized-classes-with-static-properties"},"Parameterized classes with static properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Static properties do not get allocated until specialized"),(0,n.kt)("li",{parentName:"ul"},"Each specialization has unique set of static properties")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(9951).Z,width:"1544",height:"605"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"SV create static properties of generic class as soon as there is any reference to a specialization of that class"),(0,n.kt)("p",{parentName:"blockquote"},"No need construction of that class")),(0,n.kt)("h3",{id:"class-scope-operator"},"Class scope operator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access static member properties and methods without instance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"className#(parameter overrides)::memberName"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(3261).Z,width:"1556",height:"538"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The creations of specialization are handled at compile time")),(0,n.kt)("h3",{id:"singleton-with-local-qualifiers"},"Singleton with local qualifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Guarantees only one instance of a class")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(1013).Z,width:"796",height:"404"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Construct on first use","  ",(0,n.kt)("img",{alt:"Untitled",src:a(828).Z,width:"861",height:"222"})),(0,n.kt)("li",{parentName:"ul"},"Avoid static variable initialization ordering",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"my_root")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"me"))))),(0,n.kt)("h3",{id:"factory-pattern"},"Factory pattern"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(8076).Z,width:"800",height:"235"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Polymorphic construction",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Delegate construction to another object that can decide what kind of object to create"),(0,n.kt)("li",{parentName:"ul"},"Decouples instantiating class type from the actual type being constructed")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Proxy class")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stand-in for the full object it represents"),(0,n.kt)("li",{parentName:"ul"},"Defers creating the actual object until it is requested")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(6835).Z,width:"975",height:"369"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Proxy class example")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(9932).Z,width:"1005",height:"466"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"$cast")," here since the ",(0,n.kt)("inlineCode",{parentName:"p"},'factory["C"].createObj()')," return a ",(0,n.kt)("inlineCode",{parentName:"p"},"Object")," class\u2019s instance, need to downcast it")),(0,n.kt)("h3",{id:"factory-registration"},"Factory registration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use static variable initialization to register proxies")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(8601).Z,width:"940",height:"437"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:a(4962).Z,width:"989",height:"463"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Overrides here would replace the D object with C object upon requesting the factory")))}d.isMDXComponent=!0},4250:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 1-caad41b44e2ed0061f7045ac527fc4cf.png"},4737:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 10-d70999f7b0bd9f794b6d63cd5b9f8906.png"},2727:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 11-d6bc46390a80fdb65892bf4972c3f643.png"},8836:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 12-b0fbf890bf15acd28579793af401651c.png"},2116:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 13-cfd967355a64b08df4a9bdd66773af21.png"},6201:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 14-7f93618c290d84572239985cc1d8131b.png"},7432:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 15-6d0603dd765d9a627f200b65da24a119.png"},5647:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 16-ffeb8ecbc4f4481389e9e5add765d778.png"},3365:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 17-d60f58e28cf1711709cfafd3b98de328.png"},6635:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 18-9775ed2e9a0fd5a4a4948185b49a2bcb.png"},3716:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 19-9af258085c6308a811f3112fae461bbb.png"},35:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 2-790ddab13773b11b8f12c32f54be71a1.png"},2646:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 20-695ea12813b7e216a3bcd6c18788d1ac.png"},9951:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 21-020ab2ca7bd00aa44c8efe1208d2f403.png"},3261:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 22-11aa5891f2af12318a46bd97c8ffe942.png"},1013:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 23-cc8330735c834a24c2ff29857ff25583.png"},828:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 24-49f6e930e54834a76f1b21086d831f00.png"},8076:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 25-d9a06b0b6d4317044623f747db17b5bf.png"},6835:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 26-8e410c7543afaf325297473d8ab71716.png"},9932:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 27-24f884fa1af7ca3a24165d9ecc675db7.png"},8601:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 28-c7cb943ed081255930e2918884511362.png"},4962:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 29-d5e365a9b2c33f1640159c4841de3bc5.png"},9278:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 3-4a57306298f150109b12a66ec09cd2de.png"},5195:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 4-0d5c7d5de850bb380c5461905899efce.png"},6515:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 5-5a637f89ba630d34a65da2a42a62f803.png"},2656:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 6-a188fbd293b8a8c77e73fdfe11b58c02.png"},8729:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 7-32e66c764794067b03e46a5a9b94cdae.png"},3757:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 8-a64f6ee629af447661f437823549232e.png"},8335:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled 9-74bb77239cce3615d12402015d5f7c9c.png"},5775:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Untitled-fcddbc8514397977f64b6651bddbec31.png"}}]);