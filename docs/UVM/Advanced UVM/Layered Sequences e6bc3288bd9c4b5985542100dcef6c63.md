---
slug: layered-sequences
---

# Layered Sequences

> Contents are extracted from the Advanced UVM sessions by [Verification Academy](https://verificationacademy.com/).

## Sequences and sequencers

********************Most sequences run on sequences********************

- One sequencer per agent
- Env may define default sequence
- Can be overridden via factory
- Test defines other sequences

 ************************************************Sequences generate items************************************************

- Sequencer send the items to the driver

**************************************Tests require coordinating multiple sequences on multiple DUT interfaces (virtual sequencers)**************************************

## Virtual sequences

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled.png)

> Only manages the execution of other sequences
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%201.png)

> Do the sequencer’s handle passing from the test since only the test know the hierarchical path to the sequencer
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%202.png)

> Start `vseq` with `null` sequencer since it doesn’t need to be executed on any sequencer
> 

### Initialization

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%203.png)

> `init_vseq`: Method to initialize the virtual sequence handles (the sequencer handles)
> 
> 
> Calling in `run_phase`
> 

### Using virtual sequence in a test

> Extends the base test for reusability
> 

> `start` method of the virtual sequence will execute the `body` task → Starting sequences in any fashion defined
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%204.png)

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%205.png)

## Use virtual sequencer as alternative

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%206.png)

> Since the virtual sequencer is a component, the passing sub-sequencer handling to the virtual sequencer occurs on the `connect_phase`
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%207.png)

### Virtual sequence base

> Also includes the handle to the virtual sequencer it’s going to be started on
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%208.png)

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%209.png)

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2010.png)

## Layered protocols

********************Hierarchical Protocols (PCIe, USB3.0, MIPI LLI..)********************

- Transaction layer
- Transport layer
- Physical layer

******************Protocol-Independent******************

- Generic layer (e.g. TLM2.0 GP)
- Specific protocol (e.g. AMBA AHB)

************************************************************************************************************All require sequence items to be deconstructed and reconstructed************************************************************************************************************

- One-to-many:
    - High-level transaction broken down to many low-level transactions
- Many-to-one:
    - Many high level transaction will be used to composed a large low-level transactions

### Tests start sequences

******************************************Want to execute sequences at the top layer******************************************

- Test starts sequence on sequencer

**************************************************Reuse as much as possible**************************************************

- Protocol agent on the bus
- Sequencers/monitors at higher layers

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2011.png)

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2012.png)

### Adding layer

************From “above”, he layer looks like a UVC************

- Run sequence(s) on sequencer
- Monitor (`analysis_port`) to report activity

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2013.png)

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2014.png)

************Must be able to execute sequences on protocol layer************

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2015.png)

### Translation sequence

**************************************************************************************Translation sequence runs on the lower sequencer**************************************************************************************

- Handles the layering connection
- Converts items between layers

> ****************************************************************Have the handle to the upper level sequencer****************************************************************
> 

> **Parameterized by the transaction item of the upper level sequencer**
> 
- Declare transaction item type of the upper level sequence and transaction item type of the lower level sequence to be sent downstream to the driver

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2016.png)

> **Translation sequence is a dynamic object → Can’t actually have a port here**
> 

⇒ Use the `get_next_item` method of the sequencer to get the transaction

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2017.png)

> ****************************Do the translation to lower level transaction type as needed and send it to the driver using `start_item` and `finish_item` pair**
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2018.png)

> ****Signal back to the upper level sequencer by calling `item_done()` method**
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2019.png)

<aside>
<img src="https://www.notion.so/icons/info-alternate_blue.svg" alt="https://www.notion.so/icons/info-alternate_blue.svg" width="40px" /> **************************************************************This can be considered as a component behave like a driver**************************************************************

</aside>

### Analysis path

********************************************************************************Each layer uses a *reconstruction monitor***

- The “inverse” of the translation sequence
- Assembles high-level items from lower-level items

> **************************************************Connect the `analysis_export` of the monitor `analysis_port` of the agent to receive the lower-level transaction**
> 

> ****************************************The L1_mon having the analysis port to send out the higher level translated transaction****************************************
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2020.png)

> Example can be seen on the UVM Cookbook
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2021.png)

### Layered agent

> ************Having the handle of the `dut_agent` to access its sequencer**
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2022.png)

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2023.png)

> **Connect phase connecting the analysis port and export of the monitor to the agent’s**
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2024.png)

> **************************************************************************************Run phase starting the translation sequence**************************************************************************************
> 
> - Passing the up level sequencer handle (current sequencer of the Layered agent) to the sequence
> - Start the sequence on the lower-level sequence (`dut_agent`)

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2025.png)

### The environment

> ******Connect components as usual******
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2026.png)

> ********************************Multiple layered********************************
> 

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2027.png)

### The multi-layered agent

************************************************************************Encapsulate as many layers as needed************************************************************************

******************************************************************Make intermediate `analysis_ports` available as needed**

**********************************************From “above” it looks just like an agent**********************************************

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2028.png)

### Internal protocol agent

![Untitled](Layered%20Sequences%20e6bc3288bd9c4b5985542100dcef6c63/Untitled%2029.png)

## Summary

*******************************************************Layering agent* has a *child sequencer* for every non-leaf-level**

**********************************************Creates and starts a *translation sequence* for every non-leaf-level**

- Translation sequence will be started on lower-level sequencer
- Translation sequence points back to higher-layer sequencers

****************************May include a **********************reconstruction monitor********************** for each non-leaf-level**

********************************************************************************************Must have a handle to the leaf-level protocol agent********************************************************************************************

- Agent may be a child of the UVC or external

************************************************************************************Should create and connect an `analysis_port` for each monitor**

************************************************************************************************Will usually have a configuration object associated with the layering agent************************************************************************************************