---
slug: language-features-note
---

# Language features note

- For multiple  **`@`**  inside a block:
    - The first  **`@`**  have to be happened first before any sub sequential  **`@`**  to be evaluated and executed
    - They evaluate top down
    - Example
    
    ```system-verilog
    `define TOTAL_ENTRIES 10
    `define OUTPUT_WIDTH 8
    
    module associative_array(
      input                         bit clk,
      input                         bit rst_n,
      input                         bit i_req,
      input                         bit i_ready,
      output                        bit o_valid,
      output [`OUTPUT_WIDTH-1:0]    o_data
    );
    
      always @(posedge i_ready) begin
        @(posedge clk);
        if (i_req == 1) begin
          $display("ASSERTED i_req");
        end
        $display("CLOCK WENT HIGH");
        
        
        @(posedge i_req);
        $display("ASSERTING i_req");
      end
    
    endmodule
    ```
    
    > The `@(posedge clk)` have to be happened before the `@(posedge i_req)` to be checked and to display the `ASSERTING i_req` statement
    > 
    
- For using `import pkg::class` statement
    - The `import` only valid till the first class definition only
        
        ```system-verilog
        import pkg::a;
        
        class b extends c;
        	a a_i;
        endclass : b
        
        class d extends e;
        	a a_i; // INVALID type definition here
        	pkg::a a_i; // VALID type definition
        endclass : d 
        ```
        
        > Doesn’t know if it is correct in other cases since in my case it only able to compile when using the VALID type definition above
        > 
- For overriding virtual method
    - **NOTE**: The argument’s type and NAME must match also
    
- For variables declare as local variables in a function
    
    These variables maybe created as static one, meaning one variable instance may being used for many function calls