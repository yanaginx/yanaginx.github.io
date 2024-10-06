import{_ as t,c as a,a2 as i,o}from"./chunks/framework.CbP2pKAi.js";const n="/assets/Untitled.DBaMVTEI.png",s="/assets/Untitled%201.CGJU1hst.png",l="/assets/Untitled%202.B2FvirJI.png",c="/assets/Untitled%203.EeDtqNmp.png",p="/assets/Untitled%204.G-hRW4Ej.png",r="/assets/Untitled%205.DmYt9mI6.png",d="/assets/Untitled%206.CGiNZWvj.png",h="/assets/Untitled%207.CrbeB5uo.png",m="/assets/Untitled%208.CxZ0CKm6.png",u="/assets/Untitled%209.Cos9M29E.png",g="/assets/Untitled%2010.CXn2hNOL.png",f="/assets/Untitled%2011.CflGvfeb.png",_="/assets/Untitled%2012.tMBwB_oZ.png",T=JSON.parse('{"title":"A Circuit and Systems Perspective notes","description":"","frontmatter":{"slug":"circuit-and-system-perspective-notes"},"headers":[],"relativePath":"notes/Definitions & Concepts/circuit-and-system-perspective-notes.md","filePath":"notes/Definitions & Concepts/circuit-and-system-perspective-notes.md","lastUpdated":1727526443000}'),y={name:"notes/Definitions & Concepts/circuit-and-system-perspective-notes.md"};function b($,e,q,v,k,w){return o(),a("div",null,e[0]||(e[0]=[i('<h1 id="a-circuit-and-systems-perspective-notes" tabindex="-1">A Circuit and Systems Perspective notes <a class="header-anchor" href="#a-circuit-and-systems-perspective-notes" aria-label="Permalink to &quot;A Circuit and Systems Perspective notes&quot;">​</a></h1><blockquote><p>All figures and some content are taken and quoted, respectively, from the “<em>A Circuit and Systems Perspective</em>” textbook</p></blockquote><h2 id="delay-definitions" tabindex="-1">Delay definitions <a class="header-anchor" href="#delay-definitions" aria-label="Permalink to &quot;Delay definitions&quot;">​</a></h2><ul><li><em>Propagation delay time</em>, $t_{pd}$ = maximum time from the input crossing 50% to the output crossing 50%</li><li><em>Contamination delay time</em>, $t_{cd}$ = minimum time from the input crossing 50% to the output crossing 50%</li><li><em>Rise time,</em> $t_r$ = time for a waveform to rise from 20% to 80% of its steady-state value</li><li><em>Fall time,</em> $t_f$ = time for a waveform to fall from 80% to 20% of its steady-state value</li><li><em>Edge rate</em>, $t_{rf} = (t_r + t_f) /2$</li></ul><p><img src="'+n+'" alt="Untitled"></p><p>When an input changes, the output will retain its old value for at least the contamination delay and take the new value in at most the propagation delay.</p><p>Propagation delay and contamination delay times are also called <em>max-time</em> and <em>min-time</em>, respectively.</p><p>Propagation delay is usually the most relevant value of interest, and is often simply called <em>delay.</em></p><h2 id="sequential-and-combination-circuit" tabindex="-1">Sequential and combination circuit <a class="header-anchor" href="#sequential-and-combination-circuit" aria-label="Permalink to &quot;Sequential and combination circuit&quot;">​</a></h2><p><em>Combinational</em> circuit: Output is a function of the current input</p><p><em>Sequential</em> circuit: Output depends on previous as well as current inputs; such circuits are said to have <em>state</em>.</p><blockquote><p><em>Sequential</em> circuits are usually designed with flip-flops or latches, which are sometimes called <em>memory elements</em>, that hold data called <em>tokens.</em></p></blockquote><h2 id="sequencing-static-circuits" tabindex="-1">Sequencing static circuits <a class="header-anchor" href="#sequencing-static-circuits" aria-label="Permalink to &quot;Sequencing static circuits&quot;">​</a></h2><p><em>Latches</em> and <em>flip-flops</em> are the most commonly used sequencing elements.</p><p><img src="'+s+'" alt="Untitled"></p><h3 id="sequencing-methods" tabindex="-1">Sequencing methods <a class="header-anchor" href="#sequencing-methods" aria-label="Permalink to &quot;Sequencing methods&quot;">​</a></h3><p>The below figures illustrating 3 methods of sequencing blocks of combinational logic. $T_c$ is clock period. In a 2-phase system, the phases maybe separated by the $t_{nonoverlap}$. In pulsed system, the pulse width is $t_{pw}$</p><p><img src="'+l+'" alt="Untitled"></p><p>Flip-flop-based systems use one flip-flop on each cycle boundary. Tokens advance from one cycle to the next on the rising edge. If a token arrives too early, it waits at the flip-flop until the next cycle.</p><p>When the flip-flop is viewed as back-to-back pair of latches, if we separate the latches, the full cycle of combinational logic can be divided into 2 phases (half-cycle). 2 latch clocks are called $\\phi_1$ and $\\phi_2$. The clocks can also be corresponded to nonoverlapping time ($t_{nonoverlapping}$ &gt; 0).</p><p>At least one clock is low and the coressponding latch is opaque → Preventing one token from catching up with other.</p><p>Pulsed latch systems eliminate one of the latches from each cycle and apply a brief pulse to the remaining latch. If the pulse is shorter than the delay through the combinational logic, we can still expect that a token will only advance through one clock cycle on each pulse.</p><p><strong>Delays and timing constraints of the combinational logic and the sequencing elements</strong></p><table tabindex="0"><thead><tr><th>Term</th><th>Name</th></tr></thead><tbody><tr><td>$t_{pd}$</td><td>Logic Propagation delay</td></tr><tr><td>$t_{cd}$</td><td>Logic Contamination delay</td></tr><tr><td>$t_{pcq}$</td><td>Latch/Flop Clock-to-Q Propagation delay</td></tr><tr><td>$t_{ccq}$</td><td>Latch/Flop Clock-to-Q Contamination delay</td></tr><tr><td>$t_{pdq}$</td><td>Latch D-to-Q Propagation delay</td></tr><tr><td>$t_{cdq}$</td><td>Latch D-to-Q Contamination delay</td></tr><tr><td>$t_{setup}$</td><td>Latch/Flop Setup time</td></tr><tr><td>$t_{hold}$</td><td>Latch/Flop Hold time</td></tr></tbody></table><p><img src="'+c+'" alt="Untitled"></p><ul><li>(a): <ul><li>The output Y doesn’t change instantaneously.</li><li>After the contamination delay $t_{cd}$, Y may begin to change or glitched</li><li>After the propagation delay $t_{pd}$, Y must have settled to the final value.</li></ul></li><li>(b): <ul><li>The input D must have settled by some <em>setup</em> <em>time</em> $t_{setup}$ before the rising edge of <em>clk</em> and should not change until a <em>hold time</em> $t_{hold}$ *after the clock edge.</li><li>The output Q begins to change after a <em>clock-to-Q contamination delay</em> $t_{ccq}$ and completely settles to the valid D value after a <em>clock-to-Q propagation delay</em> $t_{pcq}$<strong>.</strong></li></ul></li><li>(c): <ul><li>The input D must setup and hold around the falling edge that defines the end of the sampling period.</li><li>The output initially started to change after $t_{ccq}$, when the latch becomes transparent on the rising edge of the clock, and settles to input value after $t_{pcq}$.</li><li>If the input changed during the transparent state of the latch (i.e., <em>clk</em> is still asserted), the output will continue to track and reflect the input value after some <em>D-to-Q</em> delay $t_{cdq}$ and $t_{pdq}$.</li></ul></li></ul><blockquote><p>Negative hold time: The input can change before the clock edge and nevertheless the old level will be correctly recognized. → This can be produced by internal delay of the clock signal</p></blockquote><h3 id="max-delay-constraints" tabindex="-1">Max-delay constraints <a class="header-anchor" href="#max-delay-constraints" aria-label="Permalink to &quot;Max-delay constraints&quot;">​</a></h3><p>Assuming ideal clocks with no skew:</p><p><em>Flip-flop</em></p><p><img src="'+p+'" alt="Untitled"></p><p>$$ T_{c} \\geq t_{pcq_{F1}} + t_{pd_{comb \\space logic}} + t_{setup_{F2}} $$</p><p>With this, the maximum allowable combinational logic delay:</p><p>$$ t_{pd_{comb\\space logic}} \\leq T_c - (t_{setup_{F2}} + t_{pcq_{F1}}) $$</p><blockquote><p>Since <em>F1</em> and <em>F2</em> flip-flop is the same (assuming), the $t_{setup}$ and $t_{pcq}$ for both F1 and F2 is the same</p></blockquote><p>$$ t_{pd} \\leq T_c - \\underbrace{(t_{setup} + t_{pcq})}_{sequencing \\space overhead} $$</p><p><em>2-phase latch</em></p><p><img src="'+r+'" alt="Untitled"></p><p>$$ T_c \\geq t_{pdq_1} + t_{pd_1} + t_{pdq_2} + t_{pd_2} $$</p><p>With this, the maximum allowable combinational logic delay</p><p>$$ t_{pd} = t_{pd1} + t_{pd2} \\leq T_c - \\underbrace{(2t_{pdq})}_{sequencing \\space overhead} $$</p><p><em>Pulsed latch</em></p><p>Only one latch is in the critical path in the pulsed latches cases. If the pulse is narrower than the setup time, the data must be setup before the pulse rises.</p><p><img src="'+d+'" alt="Untitled"></p><p>$$ T_c \\geq \\max (t_{pdq} + t_{pd}, t_{pcq} + t_{pd} + t_{setup} - t_{pw}) $$</p><p>Solving the maximum combinational logic delay:</p><p>$$ t_{pd} \\leq T_c - \\underbrace{\\max(t_{pdq}, t_{pcq}+t_{setup}-t_{pw})}_{sequencing \\space overhead} $$</p><h3 id="min-delay-constraints" tabindex="-1">Min-delay constraints <a class="header-anchor" href="#min-delay-constraints" aria-label="Permalink to &quot;Min-delay constraints&quot;">​</a></h3><p>Ideally, sequencing elements can be placed back-to-back without intervening the combinational logic and still function correctly.</p><p>If the hold time is large and the contamination delay is small → data can incorrectly propagate through 2 successive elements in one clock edge → corrupting the state of the system.</p><p>⇒ This is called <em>race condition</em>, <em>hold-time failure</em>, or <em>min-delay failure.</em></p><p>Assuming the ideal clock is not skew:</p><p><em>Flip-flop</em></p><p><img src="'+h+'" alt="Untitled"></p><p>The data can begin to change at <em>Q1</em> after a <em>clk-to-Q</em> contamination delay, and at <em>D2</em> after another contamination logic delay. However, the changes must not reach D2 at least $t_{hold}$ after the rise of clock edge (since the previous data is transmitting on D2, haven’t yet sampled at F2)</p><p>$$ t_{hold} \\leq t_{ccq} + t_{cd} $$</p><p>Hence, we solve the minimum logic contamination delay</p><p>$$ t_{cd} \\geq t_{hold} - t_{ccq} $$</p><p>If the contamination delay through the flip-flop exceeds the hold time, back-to-back flip-flops can safely be used. If not:</p><ul><li>Delay must be explicitly added between the flip-flops (e.g., with a buffer)</li><li>Specical slow flip-flops with contamination delay greater than the contamination delay on the paths that require back-to-back flops.</li></ul><p><em>2-phase latches</em></p><p><img src="'+m+'" alt="Untitled"></p><p>The data begins to pass through <em>L1</em> on the rising edge of $\\phi_1$. It must not reach <em>L2</em> until a hold time after the previous failing edge of $\\phi_2$ because <em>L2</em> must become safely opaque (deassert) before <em>L1</em> becomes transparent.</p><p>Since the clock edges are separated by $t_{nonoverlap}$, the minimum logic contamination delay through each phase of logic is</p><p>$$ t_{cd_1}, t_{cd_2} \\geq t_{hold} - t_{ccq} - t_{nonoverlap} $$</p><p>⇒ By making the $t_{nonoverlap}$ sufficiently large, hold-time failure can be avoided entirely.</p><p>However, generating and distributing nonoverlapping clocks is challenging at high speeds. Therefore, most commercial transparent latch-based systems use the clock and its complement. In this case, $t_{nonoverlap}$ = 0 and the contamination delay constraint is the same as the constraint for the flip-flop.</p><p>The contamination delay constraint applies to each phase of the logic for latch-based system, but to the entire cycle of logic for flip-flops.</p><p>→ Seems like the latches required twice the overall logic contamination delay as compared to flip-flops (a paradox).</p><p>⇒ Since the flip-flop can be seen and built as a pair of latches, the mentioned paradox is resolved by observing that a flip-flop has an internal race condition between the 2 latches.</p><p><em>Pulsed latch</em></p><p><img src="'+u+'" alt="Untitled"></p><p>Data changes on the rising edge of the pulse but must hold until after the falling edge of the pulse → Pulse width effectively increases the hold time of the pulsed latch as compared to a flip-flop</p><p>$$ t_{cd} \\geq t_{hold} - t_{ccq} + t_{pw} $$</p><h3 id="time-borrowing" tabindex="-1">Time borrowing <a class="header-anchor" href="#time-borrowing" aria-label="Permalink to &quot;Time borrowing&quot;">​</a></h3><p>In system using flip-flops, data departs the first flop on the rising edge of the clock and must be set up at the second flop before the next rising edge of the clock.</p><ul><li>Data arrives late: Circuit provides wrong result</li><li>Data arrives early: It is blocked until the clock edge, and the remaining time goes unused.</li></ul><p>→ The clock imposes a <em>hard edge</em> because it sharply describe the cycles</p><p>In system using transparent latches, the data can depart from the first latch on the rising edge of the clock, but does not have to set up until the falling edge of the clock on the receiving latch.</p><p>If one half-cycle or stage of a pipeline has too much logic, it can borrow time into the next half-cycle or stage. <em>Time borrowing</em> can accumulate across multiple cycles.</p><p><img src="'+g+'" alt="Untitled"></p><p>In system with feedback, the long delays must be balanced by shorter delays so that the overall loop completes in the time available.</p><p>One phase can borrow up to half a cycle of time from the next (less setup time and non-overlap) since data does not have to set up until the falling edge of the receiving latch’s clock.</p><p>$$ t_{borrow} \\leq \\frac{T_c}{2} - (t_{setup} + t_{nonoverlap}) $$</p><p><img src="'+f+'" alt="Untitled"></p><h3 id="clock-skew" tabindex="-1">Clock skew <a class="header-anchor" href="#clock-skew" aria-label="Permalink to &quot;Clock skew&quot;">​</a></h3><p>In reality, clocks have some uncertainty in their arrival times that can cut into the time available for useful computation.</p><p>The bold line: indicate the latest possible clock arrival time</p><p>The hashed line: show the clock might arrive over a range of earlier times because of the skew.</p><p><img src="'+_+'" alt="Untitled"></p><p>The worst case scenario for max delay in a flip-flop-based system is that the launching flop receives its clock late and the receiving flop recieves its clock early (Figure 10.15 (a))</p><p>→ The clock skew is subtracted from the time available for useful compuation and appears as sequencing overhead.</p><p>$$ t_{pd} \\leq T_c - \\underbrace{(t_{pcq} + t_{skew} + t_{setup})}_{sequencing \\space overhead} $$</p><p>The worst case scenario for min delay is the launching flop receives its clock early and the receiving flop receives its clock late</p><p>→ The clock skew effectively increases the hold time of the system.</p><p>$$ t_{cd} \\geq t_{hold} - t_{ccq} + t_{skew} $$</p><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><p>Weste, N., Harris, D., &amp; Design, C. V. (2011). A Circuit and Systems Perspective. <em>International Edition</em>.</p>',98)]))}const P=t(y,[["render",b]]);export{T as __pageData,P as default};
