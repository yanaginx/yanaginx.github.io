---
slug: setting-up-the-register-layer
---

# Setting up the Register Layer

> Contents are extracted from the Advanced UVM sessions by [Verification Academy](https://verificationacademy.com/).

## Register model structure

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled.png)

## UVM Registers are Layered

*UVM Register Layer provides protocol-independent register-based layering*

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%201.png)

> Keep the operation abstract enough to be independent from the physical specific implementation of the register
> 

## UVM Register use models

### *Stimulus generation*

- Firmware-level abstraction of stimulus:
    - i.e. Set this bit in this register rather than write x to address y
- Stimulus reuse
    - If the bus agent changes, the stimulus still work
- Front and Back door access:
    - Front door is via agent
    - Back door is directly to the hardware via the simulator database

### Configuration

- Register model reflects hardware programmable registers
- Set up desired configuration in the register model then dump to DUT
    - Randomization with configuration constraints

### Analysis ‘Mirror’

- Current state of the register model matches the DUT hardware
- Useful for scoreboards and functional coverage monitors

## Register Information model

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%202.png)

> Blocks are also hierarchical
> 

## Registers, Blocks & Maps

### Registers

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%203.png)

> `build()` method will be use for the register block to configure and make sure the fields are properly aligned and configured to model the register
> 

### Blocks & Maps

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%204.png)

In the register block `build` method:

- Instantiate and build the registers
- Declare the HDL path of the register for backdoor accesses
- Create map will be used to hold the register’s physical addresses

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%205.png)

> `add_hdl_path_slice` will be used to declare the HDL path for the register will be used for backdoor accesses
> 

> `add_hdl_path` will be used to declare the HDL path to the module containing the implementation of the registers declared in the register block
> 

> `lock_model()` method is used to ensure no one can change the register model’s information during the simulation
> 

### Register blocks are Hierarchical

> Register block can also contain other register blocks
> 
- Define the default map containing the base address, the endianness
- Setup the sub register blocks by instantiating, configurating and building the sub register blocks
- Add the sub register map to the current default map, specifying the offset of the sub register map inside the default map of the SoC

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%206.png)

## The Register Map - `uvm_reg_map`

*Contains offsets for:*

- Registers and Memories
- (Hierarchical blocks)
- (Sub-maps)

*Also provides means to access registers*

- Handle for the target sequencer
    
    > To instantiate transaction to driver for front door access
    > 
- Handle for register layer adapter
    
    > Convert register level transaction to bus level transaction
    > 
    > 
    > A specialize handler manage the job of the translation sequence mentioned before
    > 

*A block can have > 1 map*

> Since there maybe are multiple interfaces being used to access the same physical registers in the DUT
> 

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%207.png)

### Setting up the Register Map

> Is a part of the environment
> 
> 
> `build_phase` of the environment will be used to fetch the register block handle from the configuration DB
> 
> `connect_phase` of the environment will be used to setup the register block
> 
> If the agent is active, a register adapter will be instantiated to use the agent’s sequencer and driver to access the register through the connected interface
> 
> Check if the register model is on the top of the hierarchy, if it is then call the `set_sequencer` method in the register map to tell the map which sequencer will be using to talk to the driver and what converter object will be used to translate the register access into bus transaction
> 
> `set_auto_predict` method is used to adjust the auto predict function of the register model (default is 0)
> 

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%208.png)

## How do register accesses work?

*When an explicit register access method is call*

- The register layer uses a generic register command: `Register[Read/Write](data)`

*The register transaction is passed to the address map*

- The map’s adapter (extended from `uvm_reg_adapter`) converts the register transaction to a bus transaction

*This is then sent through a layering to the target bus agent*

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%209.png)

*Predictor updates the value of the register model*

- Bus transaction (from the monitor) converted back to Register transaction using the adapter
- Write: Value that was written to DUT will be reflected
- Read: Value that was read from the DUT will be reflected

⇒ Keeps the value in the register model is the same as the value in the physical registers

*The predictor then writes the register transaction out of its `analysis_port`*

- Generic register requests to target bus sequence items

> Should be the same as the *reconstruction monitor*
> 

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%2010.png)

## Register Adapter example

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%2011.png)

> `uvm_reg_bus_op` is a struct, containing the information of the register operation (whether a write or a read, the address and the data)
> 

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%2012.png)

> The argument is `ref` type: The struct is passed in when it is called, and the method will fill in the appropriate fields of the struct
> 

> Status value `UVM_HAS_X` is also legal
> 

## Register model Testbench intergration

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%2013.png)

## Stimulus reuse (bridge example)

*SPI master is integrated inside an AHB peripheral block*

*Host bus sequences can be reused as is* 

*Testbench structure changes*

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%2014.png)

> Only have to add the register map of the SPI map, and swap in the new register to bus adapter for the new protocol
> 

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%2015.png)

## UVM Register Assistant

*Automatically generates UVM register package*

- Supports all UVM access Modes
- Registers/Fields, Memories, Blocks, Sub-blocks

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%2016.png)

Refer to 

[Automating the Creation of Your UVM Register Model | UVM Recipe of the Month | Verification Academy](https://verificationacademy.com/seminars/uvm-recipe-automating-the-creation-of-your-uvm-register-model)

## Summary

![Untitled](Setting%20up%20the%20Register%20Layer%20cac69577d55b4842a42551179a5b03ff/Untitled%2017.png)