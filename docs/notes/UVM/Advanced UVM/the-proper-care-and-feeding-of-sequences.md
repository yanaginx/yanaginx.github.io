---
slug: the-proper-care-and-feeding-of-sequences
---

# The Proper Care and Feeding of Sequences

> Contents are extracted from the Advanced UVM sessions by [Verification Academy](https://verificationacademy.com/).

## Review

The sequence is always known to have a name when being instantiated - Good convention

It is possible to reuse a initiated sequence object every iteration if there is guarantee on how the sequence data changed each iteration

TLM passing the handle of the sequence, must guarantee if the driver or any other component having the handle either make a copy of the handle or finish processing handle

> When `start_item` returns → Driver is ready to accept the transaction
> 

> `finish_item` is called to send the transaction after the late randomization
> 

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled.png)

> Sequencer is recommended to be declared as a class with factory registration
> 

### Sequencer/Driver handshake

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%201.png)

- Cases where the driver also receive the response and sequence will be waiting for it:

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%202.png)

### Sequence start

*Starting sequence from the test*

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%203.png)

*Sequence can also be started from the environment also*

> Behave like background/default sequence also
> 

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%204.png)

---

## Arbitration and Responses in the Sequencer

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%205.png)

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%206.png)

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%207.png)

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%208.png)

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%209.png)

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%2010.png)

> Optional: additional response id field to indicate which transaction to be received on the sequence
> 
> 
> Get response call will not return until the transaction with matching transaction id is returned
> 

> Typically used in sequences with `fork..join` on multiple threads running concurrently
> 
> 
> Response item FIFO can only hold 8 items at a time
> 

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%2011.png)

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%2012.png)

## Sequential sequences

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%2013.png)

> `start()` is blocking so the `exec_seq` won’t start until the `init_seq` finish executing
> 

## Parallel sequences

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%2014.png)

> Have to implement additional checking logic to indicate the end of the execution when using `fork-join_none` to explicitly drop the objection
> 

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%2015.png)

## Hierarchical sequences

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%2016.png)

> `this` argument specify the parent sequence of the currently starting sequence
> 

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%2017.png)

## Pipelined Driver

> Start another sequence before the finish of previous sequence
> 

> Involved calling the task multiple time in `fork..join` block
> 

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%2018.png)

![Untitled](The%20Proper%20Care%20and%20Feeding%20of%20Sequences%20097d3eb384014414b6f464e1595aa2e5/Untitled%2019.png)

> `pipeline_lock.get()` and `pipeline_lock.put()` are the semaphore and the its methods to control the resources
> 
> 
> `get` claim the lock
> 
> `put` release the lock
> 

## Summary

*Make sure to parameterize sequence/sequencer/driver with the same request and response types*

*Start sequences using `seq.start(sequencer)`*

*Use `seq_item_port.get_next_item/item_done` in the driver*

- Use `try_next_item`/`item_done` if driver must perform idle cycles
- Use `get`/`put` for pipelined drivers

*Use API from test or parent sequence to configure sequences*

*Sequence and Driver must agree on response path, if any*