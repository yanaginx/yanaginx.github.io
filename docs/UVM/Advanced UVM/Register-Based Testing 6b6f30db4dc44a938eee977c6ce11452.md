---
slug: registered-based-testing
---

# Register-Based Testing

> Contents are extracted from the Advanced UVM sessions by [Verification Academy](https://verificationacademy.com/).

## Register-based analysis components

**********************************************************The register model mirror value is used by analysis components**********************************************************

- Scoreboards to check current DUT configuration
    - Where this may affect the checking algorithm
- Functional coverage monitors
    - What is the configuration at a triggered sample?

**************************************************************************************Analysis components access physical registers passively (using the backdoor accesses):**************************************************************************************

- No ability to drive the bus
- Backdoor `read()` or `peek()` accesses

**************************************************They look up the register model values directly**************************************************

- `spi_rm.ctrl.get_mirrored_value(data);`
- `spi_rm.ctrl.value` or `spi_rm.ctrl.get(data);`

## Register Scoreboard guidelines

**********************************************************************************************Scoreboard needs a handle to the register model**********************************************************************************************

**********************Scoreboard accesses register values from model**********************

**Scoreboard checks DUT register contents**

- Compare observed data vs. register model contents
- Compare DUT contents vs. expected
    - via peek access to the DUT

![Untitled](Register-Based%20Testing%206b6f30db4dc44a938eee977c6ce11452/Untitled.png)

## Scoreboard checking

![Untitled](Register-Based%20Testing%206b6f30db4dc44a938eee977c6ce11452/Untitled%201.png)

## Functional coverage monitors

******************************************************************************************************The register model has built-in functional coverage******************************************************************************************************

![Untitled](Register-Based%20Testing%206b6f30db4dc44a938eee977c6ce11452/Untitled%202.png)

******************************************************A custom functional coverage monitor can be defined to sample based on significant events******************************************************

- Interrupts
- Writes to certain trigger registers

*************Register Assistant* generates ‘intelligent’ register access covergroup**

- Included in the register package code

## Functional coverage monitor example

![Untitled](Register-Based%20Testing%206b6f30db4dc44a938eee977c6ce11452/Untitled%203.png)

![Untitled](Register-Based%20Testing%206b6f30db4dc44a938eee977c6ce11452/Untitled%204.png)

## Coding guideline

<aside>
<img src="https://www.notion.so/icons/info-alternate_green.svg" alt="https://www.notion.so/icons/info-alternate_green.svg" width="40px" /> Always wrap a `covergroup` in a `uvm_object` wrapper

</aside>

> Allow the ability to override `covergroup` when necessary (`uvm_object` is overridden)
> 

![Untitled](Register-Based%20Testing%206b6f30db4dc44a938eee977c6ce11452/Untitled%205.png)

## Monitor with Wrapped covergroup

![Untitled](Register-Based%20Testing%206b6f30db4dc44a938eee977c6ce11452/Untitled%206.png)

## Modeling memory

****************************************The register model provides access to memory region****************************************

- `mem.read()`/`mem.write()` to location x in memory y
- The memory location address offset is calculated
    
    ```verilog
    mem.read(status, offset_addr, data, ...);
    mem.write(status, offset_addr, data, ...);
    ```
    

********************************************************************************The model does not shadow memory regions********************************************************************************

- DUT memories are usually modelled separately
- Maintaining a memory shadow is expensive
- No `set()` / `get()` functions available

****************************************************************Memory accesses can support bursts****************************************************************

- `mem.burst_read()`
- `mem.burst_write()`

### Example memory based sequence

![Untitled](Register-Based%20Testing%206b6f30db4dc44a938eee977c6ce11452/Untitled%207.png)

![Untitled](Register-Based%20Testing%206b6f30db4dc44a938eee977c6ce11452/Untitled%208.png)

## Built-in Memory sequences

![Untitled](Register-Based%20Testing%206b6f30db4dc44a938eee977c6ce11452/Untitled%209.png)

## Register Summary

**********************************************Register block contains**********************************************

- Register model
    - Fields
- Address Map
- Sub-blocks

****************************************************************************************************************Register analysis components have register block pointer****************************************************************************************************************

- Access via `get()` or backdoor read/peek
- Use `model.reg.value` directly

**************************************************************Wrap covergroups to increase flexibility**************************************************************

******************Use built-in test sequences for sanity checking******************

- Registers and memories