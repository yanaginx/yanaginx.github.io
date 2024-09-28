---
slug: circuit-and-system-perspective-notes
---

# A Circuit and Systems Perspective notes

> All figures and some content are taken and quoted, respectively, from the “*A Circuit and Systems Perspective*” textbook
> 

## Delay definitions

- *Propagation delay time*, $t_{pd}$ = maximum time from the input crossing 50% to the output crossing 50%
- *Contamination delay time*, $t_{cd}$ = minimum time from the input crossing 50% to the output crossing 50%
- *Rise time,* $t_r$ = time for a waveform to rise from 20% to 80% of its steady-state value
- *Fall time,* $t_f$ = time for a waveform to fall from 80% to 20% of its steady-state value
- *Edge rate*, $t_{rf} = (t_r + t_f) /2$

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled.png)

When an input changes, the output will retain its old value for at least the contamination delay and take the new value in at most the propagation delay.

Propagation delay and contamination delay times are also called *max-time* and *min-time*, respectively.

Propagation delay is usually the most relevant value of interest, and is often simply called *delay.* 

## Sequential and combination circuit

*Combinational* circuit: Output is a function of the current input

*Sequential* circuit: Output depends on previous as well as current inputs; such circuits are said to have *state*.

> *Sequential* circuits are usually designed with flip-flops or latches, which are sometimes called *memory elements*, that hold data called *tokens.*
> 

## Sequencing static circuits

*Latches* and *flip-flops* are the most commonly used sequencing elements.

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%201.png)

### Sequencing methods

The below figures illustrating 3 methods of sequencing blocks of combinational logic. $T_c$ is clock period. In a 2-phase system, the phases maybe separated by the $t_{nonoverlap}$. In pulsed system, the pulse width is $t_{pw}$

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%202.png)

Flip-flop-based systems use one flip-flop on each cycle boundary. Tokens advance from one cycle to the next on the rising edge. If a token arrives too early, it waits at the flip-flop until the next cycle.

When the flip-flop is viewed as back-to-back pair of latches, if we separate the latches, the full cycle of combinational logic can be divided into 2 phases (half-cycle). 2 latch clocks are called $\phi_1$ and $\phi_2$. The clocks can also be corresponded to nonoverlapping time ($t_{nonoverlapping}$ > 0). 

At least one clock is low and the coressponding latch is opaque → Preventing one token from catching up with other. 

Pulsed latch systems eliminate one of the latches from each cycle and apply a brief pulse to the remaining latch. If the pulse is shorter than the delay through the combinational logic, we can still expect that a token will only advance through one clock cycle on each pulse.

**Delays and timing constraints of the combinational logic and the sequencing elements**

| Term | Name |
| --- | --- |
| $t_{pd}$ | Logic Propagation delay |
| $t_{cd}$ | Logic Contamination delay |
| $t_{pcq}$ | Latch/Flop Clock-to-Q Propagation delay |
| $t_{ccq}$ | Latch/Flop Clock-to-Q Contamination delay |
| $t_{pdq}$ | Latch D-to-Q Propagation delay |
| $t_{cdq}$ | Latch D-to-Q Contamination delay |
| $t_{setup}$  | Latch/Flop Setup time |
| $t_{hold}$ | Latch/Flop Hold time |

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%203.png)

- (a):
    - The output Y doesn’t change instantaneously.
    - After the contamination delay $t_{cd}$, Y may begin to change or glitched
    - After the propagation delay $t_{pd}$, Y must have settled to the final value.
- (b):
    - The input D must have settled by some *setup* *time* $t_{setup}$ before the rising edge of *clk* and should not change until a *hold time* $t_{hold}$ *after the clock edge.
    - The output Q begins to change after a *clock-to-Q contamination delay* $t_{ccq}$ and completely settles to the valid D value after a *clock-to-Q propagation delay* $t_{pcq}$**.**
- (c):
    - The input D must setup and hold around the falling edge that defines the end of the sampling period.
    - The output initially started to change after $t_{ccq}$, when the latch becomes transparent on the rising edge of the clock, and settles to input value after $t_{pcq}$.
    - If the input changed during the transparent state of the latch (i.e., *clk* is still asserted), the output will continue to track and reflect the input value after some *D-to-Q* delay $t_{cdq}$ and $t_{pdq}$.

> Negative hold time: The input can change before the clock edge and nevertheless the old level will be correctly recognized. → This can be produced by internal delay of the clock signal
> 

### Max-delay constraints

Assuming ideal clocks with no skew:

*Flip-flop*

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%204.png)

$$
T_{c} \geq t_{pcq_{F1}} + t_{pd_{comb \space logic}} + t_{setup_{F2}}
$$

With this, the maximum allowable combinational logic delay:

$$
t_{pd_{comb\space logic}} \leq T_c - (t_{setup_{F2}} + t_{pcq_{F1}})
$$

> Since *F1* and *F2* flip-flop is the same (assuming), the $t_{setup}$ and $t_{pcq}$ for both F1 and F2 is the same
> 

$$
t_{pd} \leq T_c - \underbrace{(t_{setup} + t_{pcq})}_{sequencing \space  overhead}
$$

*2-phase latch*

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%205.png)

$$
T_c \geq t_{pdq_1} + t_{pd_1} + t_{pdq_2} + t_{pd_2}
$$

With this, the maximum allowable combinational logic delay

$$
t_{pd} = t_{pd1} + t_{pd2} \leq T_c - \underbrace{(2t_{pdq})}_{sequencing \space overhead}
$$

*Pulsed latch*

Only one latch is in the critical path in the pulsed latches cases. If the pulse is narrower than the setup time, the data must be setup before the pulse rises.

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%206.png)

$$
T_c \geq \max (t_{pdq} + t_{pd}, t_{pcq} + t_{pd} + t_{setup} - t_{pw})
$$

Solving the maximum combinational logic delay: 

$$
t_{pd} \leq T_c - \underbrace{\max(t_{pdq}, t_{pcq}+t_{setup}-t_{pw})}_{sequencing \space overhead}
$$

### Min-delay constraints

Ideally, sequencing elements can be placed back-to-back without intervening the combinational logic and still function correctly.

If the hold time is large and the contamination delay is small → data can incorrectly propagate through 2 successive elements in one clock edge → corrupting the state of the system.

⇒ This is called *race condition*, *hold-time failure*, or *min-delay failure.*

Assuming the ideal clock is not skew:

*Flip-flop*

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%207.png)

The data can begin to change at *Q1* after a *clk-to-Q* contamination delay, and at *D2* after another contamination logic delay. However, the changes must not reach D2 at least  $t_{hold}$ after the rise of clock edge (since the previous data is transmitting on D2, haven’t yet sampled at F2)

$$
t_{hold} \leq t_{ccq} + t_{cd}
$$

Hence, we solve the minimum logic contamination delay

$$
t_{cd} \geq t_{hold} - t_{ccq}
$$

If the contamination delay through the flip-flop exceeds the hold time, back-to-back flip-flops can safely be used. If not:

- Delay must be explicitly added between the flip-flops (e.g., with a buffer)
- Specical slow flip-flops with contamination delay greater than the contamination delay on the paths that require back-to-back flops.

*2-phase latches*

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%208.png)

The data begins to pass through *L1* on the rising edge of $\phi_1$. It must not reach *L2* until a hold time after the previous failing edge of $\phi_2$ because *L2* must become safely opaque (deassert) before *L1* becomes transparent.

Since the clock edges are separated by $t_{nonoverlap}$, the minimum logic contamination delay through each phase of logic is

$$
t_{cd_1}, t_{cd_2} \geq t_{hold} - t_{ccq} - t_{nonoverlap}
$$

⇒ By making the $t_{nonoverlap}$ sufficiently large, hold-time failure can be avoided entirely.

However, generating and distributing nonoverlapping clocks is challenging at high speeds. Therefore, most commercial transparent latch-based systems use the clock and its complement. In this case, $t_{nonoverlap}$ = 0 and the contamination delay constraint is the same as the constraint for the flip-flop.

The contamination delay constraint applies to each phase of the logic for latch-based system, but to the entire cycle of logic for flip-flops. 

→ Seems like the latches required twice the overall logic contamination delay as compared to flip-flops (a paradox).

⇒ Since the flip-flop can be seen and built as a pair of latches, the mentioned paradox is resolved by observing that a flip-flop has an internal race condition between the 2 latches. 

*Pulsed latch*

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%209.png)

Data changes on the rising edge of the pulse but must hold until after the falling edge of the pulse → Pulse width effectively increases the hold time of the pulsed latch as compared to a flip-flop

$$
t_{cd} \geq t_{hold} - t_{ccq} + t_{pw}
$$

### Time borrowing

In system using flip-flops, data departs the first flop on the rising edge of the clock and must be set up at the second flop before the next rising edge of the clock.

- Data arrives late: Circuit provides wrong result
- Data arrives early: It is blocked until the clock edge, and the remaining time goes unused.

→ The clock imposes a *hard edge* because it sharply describe the cycles

In system using transparent latches, the data can depart from the first latch on the rising edge of the clock, but does not have to set up until the falling edge of the clock on the receiving latch.

If one half-cycle or stage of a pipeline has too much logic, it can borrow time into the next half-cycle or stage. *Time borrowing* can accumulate across multiple cycles.

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%2010.png)

In system with feedback, the long delays must be balanced by shorter delays so that the overall loop completes in the time available.

One phase can borrow up to half a cycle of time from the next (less setup time and non-overlap) since data does not have to set up until the falling edge of the receiving latch’s clock.

$$
t_{borrow} \leq \frac{T_c}{2} - (t_{setup} + t_{nonoverlap})
$$

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%2011.png)

### Clock skew

In reality, clocks have some uncertainty in their arrival times that can cut into the time available for useful computation.

The bold line: indicate the latest possible clock arrival time

The hashed line: show the clock might arrive over a range of earlier times because of the skew.

![Untitled](A%20Circuit%20and%20Systems%20Perspective%20note%2004bc920b4634462bba508daf1128c95e/Untitled%2012.png)

The worst case scenario for max delay in a flip-flop-based system is that the launching flop receives its clock late and the receiving flop recieves its clock early (Figure 10.15 (a))

→ The clock skew is subtracted from the time available for useful compuation and appears as sequencing overhead.

$$
t_{pd} \leq T_c - \underbrace{(t_{pcq} + t_{skew} + t_{setup})}_{sequencing \space overhead}
$$

The worst case scenario for min delay is the launching flop receives its clock early and the receiving flop receives its clock late

→ The clock skew effectively increases the hold time of the system.

$$
t_{cd} \geq t_{hold} - t_{ccq} + t_{skew}
$$

## Resources

Weste, N., Harris, D., & Design, C. V. (2011). A Circuit and Systems Perspective. *International Edition*.