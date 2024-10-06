---
slug: architecting-a-uvm-testbench
---

# Architecting a UVM Testbench

> Contents are extracted from the Advanced UVM sessions by [Verification Academy](https://verificationacademy.com/).

## Architectural design

### For each interface

- How does the interface work?
- What information is transferred
- Transaction variants?
- Uni/bidirectional? Pipeline?

### For the design:

- What does it do?
- What are the use cases?
- Which test cases are required?
- What type of stimulus scenarios are required?
- What represents correct behavior?
- What kind of functional coverage needed?

## Building blocks

![Untitled](Architecting%20a%20UVM%20Testbench%208b0be6641be64643b9afdb56103e501c/Untitled.png)

## Block-Level Env/Test

> It is not recommended to start the sequences on the environment if unsure
> 

> Test: Instantiate the environment and create environment configuration object, passing it to the environment
> 

![Untitled](Architecting%20a%20UVM%20Testbench%208b0be6641be64643b9afdb56103e501c/Untitled%201.png)

![Untitled](Architecting%20a%20UVM%20Testbench%208b0be6641be64643b9afdb56103e501c/Untitled%202.png)

> Environments can be instantiated inside another environment
> 

![Untitled](Architecting%20a%20UVM%20Testbench%208b0be6641be64643b9afdb56103e501c/Untitled%203.png)

## Phasing

> UVM execution is controlled by phases
> 

```system-verilog
<task/func> phasename_phase (uvm_phase phase);
```

**Build phase is called top-down**

- Facilitates hierarchical instantiation and configuration

*All others phases are called bottom-up*

*`run_phase()` are the only task*

- All `run_phase` methods execute in parallel

*Don’t use alternate run-time phases*

![Untitled](Architecting%20a%20UVM%20Testbench%208b0be6641be64643b9afdb56103e501c/Untitled%204.png)

> The virtual interface handle can be passed down the agent through the configuration object
> 

> Don’t call the `super.phasename_phase` on the component that directly inherit the `uvm_base` components (`uvm_test`, `uvm_env`, etc.)
> 

## Summary

*Agents are protocol-specific*

*Environments define the testbench topology*

- Which agents and how many
- Other components

**Base test instantiates env and handles default configuration**

*Extend the base test to define additional test*

- Tweak configuration and/or factory settings
- Start (virtual) sequence(s)
- Test handles phase objections

*Keep to basic phasing*