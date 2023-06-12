"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>C});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=A(e,["components","mdxType","originalType","parentName"]),c=d(n),E=r,C=c["".concat(s,".").concat(E)]||c[E]||o[E]||i;return n?a.createElement(C,l(l({ref:t},g),{},{components:n})):a.createElement(C,l({ref:t},g))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=E;var A={};for(var s in t)hasOwnProperty.call(t,s)&&(A[s]=t[s]);A.originalType=e,A[c]="string"==typeof e?e:r,l[1]=A;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},4924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>A,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},l="FIFO interface (ready/valid)",A={unversionedId:"Protocol/fifo_interface",id:"Protocol/fifo_interface",title:"FIFO interface (ready/valid)",description:"The FIFO interface",source:"@site/docs/Protocol/fifo_interface.md",sourceDirName:"Protocol",slug:"/Protocol/fifo_interface",permalink:"/docs/Protocol/fifo_interface",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SystemVerilog OOP for UVM",permalink:"/docs/SystemVerilog/systemverilog-oop-for-uvm"},next:{title:"Architecting a UVM Testbench",permalink:"/docs/UVM/Advanced UVM/architecting-a-uvm-testbench"}},s={},d=[{value:"The FIFO interface",id:"the-fifo-interface",level:2},{value:"State machine",id:"state-machine",level:2},{value:"The handshake and data transfer",id:"the-handshake-and-data-transfer",level:2},{value:"Example waveform explanation",id:"example-waveform-explanation",level:3},{value:"Sample code snippet and sample waveform",id:"sample-code-snippet-and-sample-waveform",level:2},{value:"Transmitter",id:"transmitter",level:3},{value:"Receiver",id:"receiver",level:3},{value:"Testbench",id:"testbench",level:3},{value:"Sample waveform",id:"sample-waveform",level:3},{value:"References",id:"references",level:2}],g={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fifo-interface-readyvalid"},"FIFO interface (ready/valid)"),(0,r.kt)("h2",{id:"the-fifo-interface"},"The FIFO interface"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(972).Z,width:"331",height:"151"})),(0,r.kt)("p",null,"Data is the wire that actually passes data from the transmitter to the Receiver. "),(0,r.kt)("p",null,"Valid and Ready are known as handshaking signals which allow the Transmitter and the Receiver to communicate with regards to when it is time to pass the data."),(0,r.kt)("p",null,"The Valid signal (output from the Transmitter and input to the Receiver) indicates that the Transmitter has put valid data on the Data line ",(0,r.kt)("em",{parentName:"p"},"this")," cycle."),(0,r.kt)("p",null,"The Ready signal (output from the Receiver and input to the Transmitter) indicates that the Receiver is ready to receive new data. Ready can be asserted as soon as the Receiver is ready to receive new data."),(0,r.kt)("h2",{id:"state-machine"},"State machine"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(304).Z,width:"416",height:"331"})),(0,r.kt)("p",null,"This state machine indicates once the transmitter assert the ",(0,r.kt)("inlineCode",{parentName:"p"},"vld")," or the receiver assert the ",(0,r.kt)("inlineCode",{parentName:"p"},"rdy")," signal, these signals must hold until their counterpart assert"),(0,r.kt)("h2",{id:"the-handshake-and-data-transfer"},"The handshake and data transfer"),(0,r.kt)("p",null,"The FIFO Interface handshake ensures that data passes from the source to the sink only when the source has valid data to pass and when the sink is ready to receive that data."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(8106).Z,width:"824",height:"635"})),(0,r.kt)("h3",{id:"example-waveform-explanation"},"Example waveform explanation"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(758).Z,width:"504",height:"275"})),(0,r.kt)("p",null,"The positive clock edge marked with arrow indicating the transfer of the data is made (i.e. the handshake occurs) at the beginning of clock cycle 3, 5, 6 and 7 as demonstrated in Figure 1"),(0,r.kt)("h2",{id:"sample-code-snippet-and-sample-waveform"},"Sample code snippet and sample waveform"),(0,r.kt)("h3",{id:"transmitter"},"Transmitter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-verilog"},'module transmitter(\n  input clk,\n  input rst_n,\n  output vld,\n  output [7:0] data,\n  input rdy\n);\n  reg next_vld;\n  reg [7:0] next_data;\n  reg [7:0] hold_data;\n  reg reg_vld;\n  reg [7:0] reg_data;\n\n  logic [7:0] sent_data[$];\n  \n  typedef enum {IDLE, WAIT_RDY, WAIT_VLD, TRANSFER} ff_state;\n\n  ff_state current_state = IDLE;\n  ff_state next_state    = IDLE;\n  \n  always @(*) begin\n    case (current_state)\n      IDLE: begin\n        if (reg_vld == 1 && rdy == 0) begin\n          next_state = WAIT_RDY;\n        end else if (reg_vld == 0 && rdy == 1) begin\n          next_state = WAIT_VLD;\n        end else if (reg_vld == 1 && rdy == 1) begin\n          next_state = TRANSFER;  \n        end else begin\n          next_state = current_state;\n        end\n      end\n      \n      WAIT_RDY: begin\n        if (reg_vld == 1 && rdy == 1) begin\n          next_state = TRANSFER;  \n        end else begin\n          next_state = current_state;\n        end\n      end\n      \n      WAIT_VLD: begin\n        if (reg_vld == 1 && rdy == 1) begin\n          next_state = TRANSFER;  \n        end else begin\n          next_state = current_state;\n        end\n        \n      end\n      \n      TRANSFER: begin\n        if (reg_vld == 1 && rdy == 0) begin\n          next_state = WAIT_RDY;\n        end else if (reg_vld == 0 && rdy == 1) begin\n          next_state = WAIT_VLD;\n        end else if (reg_vld == 0 && rdy == 0) begin\n          next_state = IDLE;  \n        end else begin\n          next_state = current_state;\n        end\n        \n      end\n      \n    endcase\n    \n  end\n  \n  always @(posedge clk or negedge rst_n) begin\n    \n    // Next state here is the previous state from the previous cycle\n    $display("[DEBUG %d] next_vld: %d, next_state: %d, current_state: %d", $time, next_vld, next_state, current_state);\n    \n    if (!rst_n) begin\n      current_state <= IDLE;\n      reg_vld <= 0;\n      reg_data <= 0;\n    end else begin\n      current_state <= next_state;\n      \n      next_vld = $urandom;\n      \n      if (next_vld == 1 && next_state != WAIT_RDY) begin\n        // Send next_data on the next cycle\n        next_data = $urandom_range(1,10);\n        hold_data = next_data;\n        sent_data.push_back(next_data);\n      end else if (next_state == WAIT_RDY) begin\n        next_data = hold_data;\n      end else begin\n        next_data = 0;\n      end\n      \n      reg_vld <= #0.1 (next_state == WAIT_RDY) ? 1 : next_vld;\n      reg_data <= #0.1 next_data;\n    end\n  end\n  \n  assign vld = reg_vld;\n  assign data = reg_data;\nendmodule\n')),(0,r.kt)("h3",{id:"receiver"},"Receiver"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-verilog"},'module receiver(\n  input clk,\n  input rst_n,\n  input vld,\n  input [7:0] data,\n  output rdy\n);\n  reg next_rdy;\n\n  reg reg_rdy;\n\n  logic [7:0] received_data[$];\n  \n  reg no_random = 0;\n  \n  typedef enum {IDLE, WAIT_RDY, WAIT_VLD, TRANSFER} ff_state;\n\n  ff_state current_state = IDLE;\n  ff_state next_state    = IDLE;\n  \n  always @(*) begin\n    case (current_state)\n      IDLE: begin\n        no_random = 0;\n        \n        if (reg_rdy == 1 && vld == 0) begin\n          next_state = WAIT_VLD;\n        end else if (reg_rdy == 0 && vld == 1) begin\n          next_state = WAIT_RDY;\n        end else if (reg_rdy == 1 && vld == 1) begin\n          next_state = TRANSFER;  \n        end else begin\n          next_state = current_state;\n        end\n      end\n      \n      WAIT_VLD: begin\n        no_random = 1;\n        if (reg_rdy == 1 && vld == 1) begin\n          next_state = TRANSFER;  \n        end else begin\n          next_state = current_state;\n        end\n      end\n      \n      WAIT_RDY: begin\n        no_random = 0;\n        if (reg_rdy == 1 && vld == 1) begin\n          next_state = TRANSFER;  \n        end else begin\n          next_state = current_state;\n        end\n        \n      end\n      \n      TRANSFER: begin\n        \n        if (reg_rdy == 1 && vld == 0) begin\n          next_state = WAIT_VLD;\n        end else if (reg_rdy == 0 && vld == 1) begin\n          next_state = WAIT_RDY;\n        end else if (reg_rdy == 0 && vld == 0) begin\n          next_state = IDLE;\n        end else begin\n          next_state = current_state;\n        end\n        \n      end\n      \n    endcase\n    \n  end\n  \n  always @(posedge clk or negedge rst_n) begin\n    $display("[DEBUG %d] current data: %d, current_state: %d, next_state: %d", $time, data, current_state, next_state);\n    \n    if (next_state == TRANSFER) begin\n      // Sample the data\n      $display("[DEBUG %0t] pushing %d data value", $time, data);\n      received_data.push_back(data);\n    end\n    \n    \n    if (!rst_n) begin\n      reg_rdy <= 0;\n      current_state <= #0.1 IDLE;\n    end else begin\n      reg_rdy <= #0.1 (next_state == WAIT_VLD) ? 1 : $urandom;\n      current_state <= #0.1 next_state;\n    end\n  end\n  \n  assign rdy = reg_rdy;\nendmodule\n')),(0,r.kt)("h3",{id:"testbench"},"Testbench"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-verilog"},'module test_top;\n  reg _clk;\n  reg _rst_n;\n  \n  wire [7:0] _data;\n  wire _vld;\n  wire _rdy;\n  \n  transmitter tx(_clk, _rst_n, _vld, _data, _rdy);\n  receiver rx(_clk, _rst_n, _vld, _data, _rdy);\n  \n  initial begin\n    $dumpfile("dump.vcd");\n    $dumpvars(0);\n    \n    _clk = 0;\n    _rst_n = 1;\n    \n    #10ns;\n    \n    _rst_n = 0;\n    \n    #10ns;\n    \n    _rst_n = 1;\n    \n    #1000ns;\n        \n    foreach (rx.received_data[i]) begin\n      $display("[DEBUG] RX RECEIVED %d: %d", i, rx.received_data[i]);\n    end\n    \n    foreach (tx.sent_data[i]) begin\n      $display("[DEBUG] TX SENT %d: %d", i, tx.sent_data[i]);\n    end\n    \n    $finish;\n\n  end\n  \n  always #10ns _clk = ~_clk;\nendmodule\n')),(0,r.kt)("h3",{id:"sample-waveform"},"Sample waveform"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(9576).Z,width:"1622",height:"122"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(9064).Z,width:"287",height:"166"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:n(6571).Z,width:"264",height:"170"})),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drake, C. (2020, August 3). Ready/Valid Protocol Primer. Drake Enterprises. ",(0,r.kt)("a",{parentName:"li",href:"http://www.cjdrake.com/readyvalid-protocol-primer.html"},"http://www.cjdrake.com/readyvalid-protocol-primer.html")),(0,r.kt)("li",{parentName:"ul"},"W. Fletcher, C. (2009). EECS150: Interfaces: \u201cFIFO\u201d (a.k.a. Ready/Valid) (B). ",(0,r.kt)("a",{parentName:"li",href:"https://inst.eecs.berkeley.edu/~cs150/Documents/Interfaces.pdf"},"https://inst.eecs.berkeley.edu/~cs150/Documents/Interfaces.pdf"))))}c.isMDXComponent=!0},304:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 1-7ac5e418881d3e4d11f74b1a951541fb.png"},8106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 2-37da42de5cf1e2676eef2750b45a4b71.png"},758:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 3-af25313e0a8b90aa60812cab8c00a147.png"},9576:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled 4-10d77f3d0d013a824d0300aa5dcd7c35.png"},9064:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},6571:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},972:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);