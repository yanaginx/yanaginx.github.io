# SystemVerilog OOP for UVM

Note taken from the course SystemVerilog OOP for UVM on Verification Academy

## Good reads

[Object handles](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6#object-handles) 

[Copying handles vs copying objects](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6#copying-handles-vs-copying-objects) 

[Inheritance and Polymorphism](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6#inheritance-and-polymorphism) 

[Parameterized classes](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6#parameterized-classes) 

[Singleton with local qualifiers](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6#singleton-with-local-qualifiers) 

[Factory pattern](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6#factory-pattern) 

[Factory registration](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6#factory-registration) 

## Classes

### SV & OOP

OOP enabling these concepts:

- Encapsulation
- Inheritance
- Data hiding
- Generic programming (template/parameterization)
- Polymorphism

Classes can be used to model

- Reusable verification environments
- Abstract data & methods that operate on them

### SystemVerilog Class Terminology

> Class objects are accessed through *Class handles* (not pointer, since handle are safer and such → handle are safe pointers)
> 

### Class basics

> Class declaration does not allocate any storage, it only creates a new type
> 
> 
> Don’t confuse SVA’s `property` with *class properties*
> 
> Both methods and properties are members of the class
> 

Classes are dynamically created **objects** (class instance)

Calling `new()` creates an instance and allocate memory

### Object handles

A class variable only refer to a valid object → holding a ************handle************ referencing an ************object************

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled.png)

Uninitialized variables have a special value `null`

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%201.png)

Object destruction/de-allocation done automatically after an object has no references 

### Automatic memory management

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%202.png)

### Class methods

As with Verilog:

- Tasks can block and consume time
- Functions must be non-blocking and can return values

### `this`

An implicit argument to a method that refers to the current object

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%203.png)

### Copying handles vs copying objects

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%204.png)

> After the shallow copies object, the `Pkt2_h` and `Pkt1_h` handles are pointing to distinct object, meaning `Pkt1_h.status` remains 5 after the `Pkt2_h.status = 10` statement
> 

### Shallow copy example

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%205.png)

### Deep copy example

To do a “deep” copy, a custom `copy` method must be created

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%206.png)

### Static properties

Get created as soon as we declared the type

Available throughout the simulation

Access the static properties through `<Class_name>::<Properties_name>`

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%207.png)

### Static methods

Can be called without a specific object

Cannot access non-static members (no `this` object)

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%208.png)

## Inheritance and Polymorphism

### Inheritance

- Creates new class type based on an existing class type

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%209.png)

- Add new methods or add new behaviors to an existing method

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2010.png)

> Overriding the method caused the overrided method be hidden from the extended class
> 
> 
> Can use the `super.` to look back from the base class and access base class’s methods
> 

### Constructing Extended classes

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2011.png)

### Class variables with inheritance

- Base class variable can hold handles to extended objects, but not the reverse

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2012.png)

### Dynamic casting of class handles

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2013.png)

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2014.png)

### Polymorphism

- Ability to have the same code act differently on different type
- A key requirement for any OOP languages
- Statically at compile time using parameterized type
- Dynamically during run-time using virtual class methods

### Virtual class methods

- Chose the method by object type, not class variable

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2015.png)

- Override must have the same prototype
    
    > Once `virtual` → Always `virtual`
    > 

In the `run` task, the `$display(p_h.status)` will be either 5 or 6 since the method will check whether the object calling it is of type `ErrorPkt` or of type `Packet`, not requiring for the object in the argument `run` task to be explicitly of type `ErrorPkt` or `Packet`

> `virtual` methods behave without knowing if it’s dealing with base class object or the base class’s derivatives
> 

### Mixing virtual and non-virtual methods

- Clone is a construction with copy

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2016.png)

> `copy` is non-virtual here since we want to call the correct `copy` methods according to each type
> 
> 
> And the `copy`'s argument should be local class type, which allow direct access to local properties without casting
> 

### Accessibility and Abstract classes

By default, all class members are public

- `local` quailifer restricts access to only within the declared class
- `protected` qualifier restricts access to only within the declared class and an extension of that class

****Abstract class****

- Can never be constructed directly
- Can only construct class extended from base class
- Provide common API for class methodology
- Can declare virtual method prototypes that must be overriden in extended class

### Abstract class example

> `pure virtual` tells the extended class must provide the implementation of the method
> 

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2017.png)

### Extending Abstract class into Concrete

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2018.png)

## OOP Design pattern examples

### Parameterized classes

- Generic class to be instantiated as objects of different types or sizes
    - Uses module-like parameter passing
        
        ![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2019.png)
        
- A generic class & actual parameter values is called a s**************pecialization**************

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2020.png)

### Parameterized classes with static properties

- Static properties do not get allocated until specialized
- Each specialization has unique set of static properties

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2021.png)

> SV create static properties of generic class as soon as there is any reference to a specialization of that class
> 
> 
> No need construction of that class
> 

### Class scope operator

- Access static member properties and methods without instance
- `className#(parameter overrides)::memberName`

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2022.png)

> The creations of specialization are handled at compile time
> 

### Singleton with local qualifiers

- Guarantees only one instance of a class

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2023.png)

- Construct on first use
    
    ![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2024.png)
    
- Avoid static variable initialization ordering
    - `my_root`
    - `me`

### Factory pattern

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2025.png)

- Polymorphic construction
    - Delegate construction to another object that can decide what kind of object to create
    - Decouples instantiating class type from the actual type being constructed

**Proxy class**

- Stand-in for the full object it represents
- Defers creating the actual object until it is requested

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2026.png)

******Proxy class example******

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2027.png)

> Using `$cast` here since the `factory["C"].createObj()` return a `Object` class’s instance, need to downcast it
> 

### Factory registration

- Use static variable initialization to register proxies

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2028.png)

**************Example**************

![Untitled](SystemVerilog%20OOP%20for%20UVM%20aa7c183de7944150b5d19d0bf1bc5ec6/Untitled%2029.png)

> Overrides here would replace the D object with C object upon requesting the factory
>
