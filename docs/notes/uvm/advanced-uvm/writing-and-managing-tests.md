---
slug: writing-and-managing-tests
---

# Writing and managing Tests

> Contents are extracted from the Advanced UVM sessions by [Verification Academy](https://verificationacademy.com/).

## What is a test?

*The environment is the “testbench”*

- Defines what components are needed to verify the DUT
- Specifies defaults

*The test’s job is to “tweak” the tesbench*

- Configuration
- Factory overrides
- Additional sequences

*The test’s other job is to ensure that the simulation ends*

## Defaults in UVM

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled.png)

> Can add additional check to make sure the value pass by the configuration DB from the test is still legal
> 

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%201.png)

## Use a Base Test to set defaults

> There is option to override the environment type, make sure to do factory override before calling `super.build` inside the extended test
> 

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%202.png)

## Extend Base Test to create a Test

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%203.png)

> To override the environment type as mentioned above:
> 

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%204.png)

## Set up and invoke test

> Instantiate the DUT’s virtual interface and pass it down to the testbench through UVM config DB
> 

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%205.png)

## Complex environment, simple test

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%206.png)

### Simple Test

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%207.png)

### Extended Test

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%208.png)

> The virtual sequence can also be overridden using the `set_type_override` method → Explicit sequence type override
> 

## Managing Test Execution: Phase objections

*Components or Sequences can raise or drop objections*

*Phase continues until all raised objections are dropped*

*An objection must be raised at the beginning of the phase*

### Objections are hierarchical

*Objections are raised up the hierarchy by default*

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%209.png)

> Sequencer’s objection + Monitor’s objection = 2 agent’s objections
> 

*Objections are dropped hierarchically too*

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%2010.png)

*When a component’s count = 0, wait for `drain_time` to elapse*

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%2011.png)

### Recommendation

> Raise and drop objections inside the test
> 
> 
> Allows the test to determine when all the stimulus is complete and start dropping the objection
> 

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%2012.png)

> There might be cases where the objections is drop before the last transaction hasn’t finish processing yet
> 

## Using objections

> Scoreboard recording transactions can raise an objection to prevent the test from ending early, make sure all the transactions has been recorded
> 

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%2013.png)

> Not recommended since it will introduce additional overhead
> 

**Alternative solution:**

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%2014.png)

## Recommendation: Objecting in a component

> Using the provided method `phase_ready_to_end` to do the objection before ending the phase
> 

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%2015.png)

## Summary

![Untitled](Writing%20and%20managing%20Tests%2079e0d3fbda0b4ef1b25fdefc394cbb0f/Untitled%2016.png)