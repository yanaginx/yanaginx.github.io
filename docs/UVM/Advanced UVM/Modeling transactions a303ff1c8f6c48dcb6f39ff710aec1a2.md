---
slug: modeling-transactions
---

# Modeling transactions

> Contents are extracted from the Advanced UVM sessions by [Verification Academy](https://verificationacademy.com/).

## Separating stimulus from the testbench

*Key to reusability is to separate *Behavior* from *Structure*

![Untitled](Modeling%20transactions%20a303ff1c8f6c48dcb6f39ff710aec1a2/Untitled.png)

Transactions (Sequence items) ⇒ The main communication vehicle across the boundary

### Sequences

*Decouple stimulus specification from structural hierarchy*

- Add/remove/modify stimulus scenarios independent of testbench
- Simplify test writer API

*Sequences define transaction streams*

- May start on any sequencer

*Sequences can call children*

*Sequences & transactions can be customize via the factory*

![Untitled](Modeling%20transactions%20a303ff1c8f6c48dcb6f39ff710aec1a2/Untitled%201.png)

## Designing a sequence item

![Untitled](Modeling%20transactions%20a303ff1c8f6c48dcb6f39ff710aec1a2/Untitled%202.png)

### Methods

*`do_copy()`*

![Untitled](Modeling%20transactions%20a303ff1c8f6c48dcb6f39ff710aec1a2/Untitled%203.png)

*`do_compare()`*

*`convert2string()`*

![Untitled](Modeling%20transactions%20a303ff1c8f6c48dcb6f39ff710aec1a2/Untitled%204.png)

*`do_print()`*

> Not recommended for usage since it will provide some overhead
> 

![Untitled](Modeling%20transactions%20a303ff1c8f6c48dcb6f39ff710aec1a2/Untitled%205.png)

![Untitled](Modeling%20transactions%20a303ff1c8f6c48dcb6f39ff710aec1a2/Untitled%206.png)

*`do_record()`*

![Untitled](Modeling%20transactions%20a303ff1c8f6c48dcb6f39ff710aec1a2/Untitled%207.png)

*`do_pack()`* and *`do_unpack()`*

> Not use very often
> 

## Sequence item composition

> Layering: Use another sequence item inside a sequence item
> 

![Untitled](Modeling%20transactions%20a303ff1c8f6c48dcb6f39ff710aec1a2/Untitled%208.png)

## Summary

*Encapsulate the information needed to process an operation*

- Whatever that means for the application

*Helper functions (mentioned above)*

*Do not use `uvm_field*` macros*

- Decreases performance
- Hinders debug

*Use inheritance for similar transactions*

*Use composition when needed*

### Rules for sequence items

*Define sequence items by specifying data members only*

- Do not override `pre/mid/post_do`

*Create items via their `type_id` (using factory only)*

- `my_item::type_id::create("tx");`

*Execute items using `start_item()/finish_item()`*