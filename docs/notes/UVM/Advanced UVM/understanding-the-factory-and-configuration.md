---
slug: understanding-the-factory-and-configuration
---

# Understanding the Factory and Configuration

> Contents are extracted from the Advanced UVM sessions by [Verification Academy](https://verificationacademy.com/).

## 2 customization mechanism

### Factory

- Allows test to change the type of a desired component or object
- Typically set up at start of simulation

### Configuration

- Allows parents to define properties for children
    - Static (build-time) - Highest parent “wins”
    - Dynamic (run-time) - Last set ”wins”
- All UVM components get their own configuration
    - Optionally use to configure their children

## Factory

### `create()` vs `new()`

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled.png)

<aside>
<img src="https://www.notion.so/icons/info-alternate_green.svg" alt="https://www.notion.so/icons/info-alternate_green.svg" width="40px" /> Factory allow to alternate the type of the created component without modifying the instantiating code

</aside>

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%201.png)

### Registering with Factory

> Objects are registered with the factory via macros
> 

```verilog
`uvm_object_utils(<type>)
`uvm_component_utils(<type>)
```

The macro utils will create a wrapper type that registering in the factory to allow accessing it from the factory via the `create()` method

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%202.png)

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%203.png)

*`type_id::set_type_override(<type>);` is a static methods in the wrapper*

> Test now have the ability to override the type of component that returned from the factory
> 

*`get_type()` returns the type "handle"*

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%204.png)

*`set_inst_override(<type>, "<instance>");` can also be used in addition to `set_type_override` for overriding instance*

### Overriding a type

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%205.png)

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%206.png)

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%207.png)

> When doing `type_override` in the factory, the last change will be reflected
> 
> 
> `set_inst_override` take precedence over `set_type_override` 
> 
> → Will be the case regards of the order in which `set_type_override` and `set_inst_override` is executed
> 
> ⇒ The U2 in the example will always be a triangle
> 

### Using parameterized types

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%208.png)

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%209.png)

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2010.png)

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2011.png)

### Tests are components, too!

*run_test() creates the test from the factory*

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2012.png)

The test type instantiation will be determined using the command line plusargs `+UVM_TESTNAME`

*Always call `run_test()` with null argument*

> `run_test()` can be called with an argument to specify a default test to be run when there is no test name specified when running the simulation
> 
> 
> ⇒ Recommended to call `run_test()` with null argument
> 

### Use the factory for objects

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2013.png)

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2014.png)

## Configuration database

*Explicitly typed*

*Tied to the hierarchical scopes*

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2015.png)

> The value of the component on the highest of the hierarchy will be used
> 

The `build_phase` happens top-down, so when setting the value of driver’s x, the driver isn’t instantiate yet ⇒ Using configuration database will allow this to be done

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2016.png)

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2017.png)

> Allow reusability since the test only care about setting up the value on the environment
> 

### `uvm_config_db`

*Uses a `set()`/`get()` API*

- No casting on `get()`
- Linked to component hierarchy

```verilog
uvm_config_db #(<type>)::set(this, "<inst>", "<field>", value);
uvm_config_db #(<type>)::get(this, "<inst>", "<field>", value);
```

On the `set`:

> `this`: the component making the call
> 
> 
> `<inst>`: Is the name of component we wanna set relative to the component doing the `set`
> 

On the `get`:

> The `<inst>` is usually set to null since the `this` already content the full path to the component
> 

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2018.png)

> If field name is the same, we get the value from the database and return it
> 

### UVM Features

Passing virtual interface handle from the top level module to the test

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2019.png)

> Call the `uvm_config_db::set` to pass down the `env_cfg` object
> 
> 
> Instance name supports pattern matching glob-style or regex
> 
> In the example, all instance looking for the object with the field name `config` of type `env_config` will be able to do so
> 

⇒ `uvm_config_db` can affect the performance

![Untitled](Understanding%20the%20Factory%20and%20Configuration%207addb239f3544199955d06914cacc652/Untitled%2020.png)

## Summary

*Use `uvm_object/component_utils` macro to register with factory*

*Always call `<type>::type_id::create()`*

*Register tests with the factory*

*Call `run_test()` with null argument*

- Specify which test via the command line

*Use config DB at build-time*

- Components get their config before configuring children
- Highest set wins

*Use config DB at run-time*

- Last set wins
- Up to the “getter” to decide when it’s legal