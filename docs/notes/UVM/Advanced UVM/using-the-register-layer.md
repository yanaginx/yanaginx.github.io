---
slug: using-the-register-layer
---

# Using the Register Layer

> Contents are extracted from the Advanced UVM sessions by [Verification Academy](https://verificationacademy.com/).

## UVM register class access API

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled.png)

*The register model has two register variables*

- Desired value: For when a field has been updated, but not the hardware
- Mirrored value: Containing the latest known value from the hardware

*`reg.read()` and `reg.write()`**

- Access the hardware register and update the register database
- Front door access access uses bus agent - takes time and may create side effects
- Back door access is instant (via VPI - *Verilog Procedural Interface*) and does not cause side effects
- Not used for individual fields

*`reg.peek()` and `reg.poke()`*

> Explicit backdoor access to the DUT register and also update the register model
> 
- For backdoor accesses, register model updated with result
- Can be used for individual fields

*`reg.set()` and `reg.get()`*

- Access the desired value directly

## Register access method fields

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%201.png)

*A typical register access only needs a few of the arguments:*

```verilog
spi_rm.ctrl.write(status, wdata, .parent(this));
```

> Parent of the register access, which is the sequence that includes the method call
> 

## Front-Door access modes

*Consume time on the bus (default)*

```verilog
spi_rm.ctrl.write(status, wdata, UVM_FRONTDOOR, .parent(this));
spi_rm.ctrl.read(status, rdata, UVM_FRONTDOOR, .parent(this));
```

UVM reg sequence API alternatively:

> Don’t have to specify the parent sequence since it is built in for the register sequence
> 
> 
> Recommended to use 
> 

```verilog
write_reg(model.ctrl, status, wdata, UVM_FRONTDOOR);
read_reg(model.ctrl, status, rdata, UVM_FRONTDOOR);
```

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%202.png)

*Desired and mirrored values updated at the end of the transaction*

- Based on transaction contents and field access mode

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%203.png)

*Can access individual fields*

- Only if hardware supports it
    - Field = byte lane
    
    > Will execute the full read-modify-write flow to the particular register field
    > 

## Back-Door access modes

*Consume no time on the bus*

```verilog
write_reg(model.ctrl, status, wdata, UVM_BACKDOOR);
read_reg(model.ctrl, status, rdata, UVM_BACKDOOR);
```

> When using this, the backdoor path must be specified explicitly
> 

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%204.png)

*Desired and mirrored values updated at the end of the transaction*

- Based on transaction contents and field access modes

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%205.png)

*Can only access full register via backdoor access*

*Using peek/poke:*

```verilog
poke_reg(model.ctrl, status, wdata);
peek_reg(model.ctrl, status, rdata);
```

*Desired and mirrored values updated directly at the end of the transaction*

- Poke sets the actual register value
- Peek samples the actual value, which is written to model

*Peek/Poke work on fields*

> Peek and poke don’t care about the access mode of the register
> 

## Direct access modes

> Access the desired value of the register model directly
> 

*Consume no time on the bus*

*Access the desired value directly*

```verilog
model.ctrl.set(wdata);
model.ctrl.randomize();
rdata = model.ctrl.get();
```

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%206.png)

*Use `update()` method to update actual value*

- via front-door: `update_reg(model.ctrl, status, UVM_FRONTDOOR);`
- or back-door: `update_reg(model.ctrl, status, UVM_BACKDOOR);`

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%207.png)

> If the desired value is different from the actual value, the register model will write the desired value directly to the actual register
> 
> 
> The change will be reflected on the mirrored value of the register model also
> 

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%208.png)

## Mirror method

*Read register and update/check mirror value*

- via front-door: `mirror_reg(model.ctrl, status, UVM_CHECK, UVM_FRONTDOOR);`
- via back-door: `mirror_reg(model.ctrl, status, UVM_CHECK, UVM_BACKDOOR);`

> Check will response with error if the mirrored value different from the actual value
> 
> 
> The result of the mirror operation is the mirror value will be the same as the actual value, but if they are different from the beginning then the error will occur
> 

*Can be called on field, reg or block*

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%209.png)

## Register sequence base class

> Extended these to write register level sequences
> 

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%2010.png)

> Base class provides simpler API for interfacing with the register
> 

Extend the `uvm_reg_sequence` base class and override the register model type 

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%2011.png)

> In this case the 2 operation will be accessed through front-door
> 

## Register stimulus: base class

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%2012.png)

> Declare and use the set register model API to set the correct register model for extended register sequences
> 
> 
> The set register model must be called after the sequence is created and before the sequence start
> 
> The `body` method of the base sequence contains additional setup when needed
> 

## Register stimulus: Building on the base

> First is to call the `super.body` on the extended register sequence to start the setup from the base class may need
> 
> 
> The `set_rm` of the base class will be called from the test before starting the extended sequence (`div_load_seq` in this case), so the register model will be using is known 
> 

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%2013.png)

## Register sequence: TX Data Load

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%2014.png)

<aside>
<img src="https://www.notion.so/icons/info-alternate_blue.svg" alt="https://www.notion.so/icons/info-alternate_blue.svg" width="40px" /> The base register sequence will be used for setting up the necessary register model and instantiation, the extended register sequence will then only need to adjust to match the details need of the test plan without worrying to much about what register model will be used and so on

</aside>

## Built-in sequences

*Sequences are easy to run*

- Low overhead to use
- Useful for initial sanity checks on bus connectivity

*Access modes are respected*

- Read only registers are not bit bashed
- Read only memories are not tested

*Memories, Registers or Fields can be opted out of a test*

- e.g., Clock enable bit
- Mechanism is to use the `uvm_config_db` to set an attribute for the register

![Untitled](Using%20the%20Register%20Layer%2009a6b5ff47434deab1457ad0938241fc/Untitled%2015.png)

## Summary

*Register model follows hardware structure*

- Fields, Registers, Blocks, Maps
- Internal access - `get()`, `set()`, etc.
    - Sets up desired value
- External access - Front door and back door

*Access layered via model*

- Generic sequences adapted to target bus sequences
- Sequence reuse straight-forward

*Use the convenience API*

- Extend `uvm_reg_sequence`
- `write_reg()`/ `read_reg()` vs `write()` / `read()`
    - Don’t have to worry about the `.parent()` argument

> Recommended to use the `write_reg` and `read_reg` on the `uvm_reg_sequence` base class
>