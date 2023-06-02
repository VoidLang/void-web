const PrimitiveTypes = () => (
    <div>
        <h2>Primitive types</h2>
        <p>
            Every variable in Void is from a certain data type, which tells Void how to handle that data.
            There are two categories of types in Void, which, this section will discuss: scalar and compound types.
        </p>

        <h3>Scalar types</h3>
        <p>
            Scalar types represent a single value. These can be either numbers, strings, characters or booleans.
        </p>
        
        <h4>Integer types</h4>
        <p>
            Integer types are numbers without a decimal component.
            An integer can be either signed or unsigned.
        </p>
        <p>
            A signed number means that it has a <Backticks>negative indicator sign</Backticks> which tells, whether
            the number is positive or negative.
        </p>
        <p>
            Each signed integer can hold a number in the inclusive range of -(2<sup>n - 1</sup>) to 2<sup>n - 1</sup> - 1, 
            where <em>n</em> is the number of bits that variants use.
        </p>
        <p>
            Unsigned numbers on the other hand can be only positive in the range of 0 to 2<sup>n</sup>-1
        </p>
        <p>
            For example, a byte can hold values from -128 to 127, a ubyte can hold values from 0 to 255.
        </p>
        <table>
            <tr>
                <th>Size</th>
                <th>Signed</th>
                <th>Unsigned</th>
            </tr>
            <tr>
                <td>8-bit</td>
                <td>byte</td>
                <td>ubyte</td>
            </tr>
            <tr>
                <td>16-bit</td>
                <td>short</td>
                <td>ushort</td>
            </tr>
            <tr>
                <td>32-bit</td>
                <td>int</td>
                <td>uint</td>
            </tr>
            <tr>
                <td>64-bit</td>
                <td>long</td>
                <td>ulong</td>
            </tr>
            <tr>
                <td>128-bit</td>
                <td>bigint</td>
                <td>ubigint</td>
            </tr>
            <tr>
                <td>arch</td>
                <td>isize</td>
                <td>usize</td>
            </tr>
        </table>
        <p>
            If you are unsure which type to use, you should use <Backticks>int</Backticks>, 
            as it is the default non-decimal type used in many programming languages. 
        </p>
        <p>
            Integer literals are human-readable number values in the source code.
            You can use the integer literals listed below. 
        </p>
        <table>
            <tr>
                <th>Literal name</th>
                <th>Example</th>
            </tr>
            <tr>
                <td>Decimal</td>
                <td>1337</td>
            </tr>
            <tr>
                <td>Hexadecimal</td>
                <td>0xFFFFFF</td>
            </tr>
            <tr>
                <td>Binary</td>
                <td>0b1000101</td>
            </tr>
        </table>

        <h4>Floating-point types</h4>
        <p>
            Floating-point numbers are like integers, but with decimal points.
            Void currently supports two signed types of these numbers: <Backticks>float</Backticks> and <Backticks>double</Backticks>.
            Floating-point numbers are represented according to the IEEE-754 standard.
        </p>
        <table>
            <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Precision</th>
            </tr>
            <tr>
                <td>float</td>
                <td>32-bit</td>
                <td>single precision</td>
            </tr>
            <tr>
                <td>double</td>
                <td>32-bit</td>
                <td>double precision</td>
            </tr>
        </table>

        <h4>Numberic operations</h4>
        <p>
            Void supports the mathematical operations, every other language supports.
        </p>
        <Code>
            {highlight(
`void main() {
    // addition
    let sum = 10 + 2
    
    // subtraction
    let difference = 170 - 2.5
    
    // negation
    let positive = 255.4
    let negated = -positive
    
    // multiplication
    let product = 6 * 8
    
    // division
    let quotient = 241.5 / 3.5
    let truncated = 10 / 3
    
    // remainder
    let remainder = 12 % 5
    
    // exponentiation
    let power = 10 ^ 6
}`
            )}
        </Code>

        <h4>The string type</h4>
        <p>
            The <Backticks>string</Backticks> type is a dynamic-size holder of <Backticks>UTF-8</Backticks> alphabetic characters.
        </p>
        <Code>
            {highlight(
`void main() {
    let text = "Hello, World"
}`
            )}
        </Code>
        <p>
            Note that <Backticks>string</Backticks> literals are put in between double quotes. 
            A <Backticks>string</Backticks> holds n * 4 bytes of memory, 
            where <em>n</em> is the length of the string. Note that unlike all of the primitive types, string
            does not have a fixed size. It may reduce or expand on modification.
        </p>

        <h4>The character type</h4>
        <p>
            The <Backticks>char</Backticks> type is an <Backticks>UTF-8</Backticks> representation of an alphabetic character
            represented with 4 bytes in the memory.
            A <Backticks>char</Backticks> can hold values from <Backticks>\u0000</Backticks> to <Backticks>'\uffff'</Backticks> or 
            <Backticks>65,535</Backticks> characters inclusive.
        </p>
        <Code>
            {highlight(
`void main() {
    let c = 'A'
    let hex = '\\u46'
    let emote = '👋'
}`
            )}
        </Code>
        <p>
            Note that <Backticks>char</Backticks> literals are put in between single quotes, unlike strings. 
            A <Backticks>char</Backticks> is represented with 4 bytes of memory. 
        </p>

        <h4>The boolean type</h4>
        <p>
            The <Backticks>bool</Backticks> type can hold a logical value of either <Backticks>true</Backticks>
            or <Backticks>false</Backticks>. A <Backticks>bool</Backticks> is represented in one byte. 
        </p>
        <Code>
            {highlight(
`void main() {
    let x = true
    let y = false
}`
            )}
        </Code>

        <h3>Compound types</h3>
        <p>
            Compound types in Void are complex data holders. Void supports two of these compound types: tuples and arrays.
        </p>

        <h4>The array type</h4>
        <p>
            An <Backticks>array</Backticks> can hold a fixed number of values from the same kind.
            An array holds n * sizeof(T) memory, where <em>n</em> is the length or the array, and
            <em>T</em> is the type of the array.
        </p>
        <Code>
            {highlight(
`void main() {
    let numbers = [1, 2, 3, 4, 5]
}`
            )}
        </Code>
        <p>
            The elements of an array can be accessed using their indices. The array index range goes from 
            0 to n - 1 inclusive, where <em>n</em> is the length of the array.
        </p>
        <Code>
            {highlight(
`void main() {
    let nums = [1, 2, 3]
    
    let first = nums[0]
    let second = nums[1]
}`
            )}
        </Code>
        <p>
            You can also create an array using the auto-fill syntax.
        </p>
        <Code>
            {highlight(
`let a = [0..10]
let b = [0..=10] // includes 10`
            )}
        </Code>
        <p>
            You can also initialize an array to contain the same value for each element.
            First you need to specify the size of the array, then what value you want to fill with.
        </p>
        <Code>
            {highlight(
`let a = [3; 5] // [5, 5, 5]
let b = [2; "hello"] // ["hello", "hello]`
            )}
        </Code>
        <p>
            Note that arrays in Void are not dynamic. Therefore you cannot create arrays from a run-time specified length. 
        </p>
        <Code>
            {highlight(
`void main() {
    let len = 5
    let arr = [len; 0]
}`
            )}
        </Code>
        <p>
            This previous code causes a compile exception, because it is expecting the array size to be a constant.
        </p>
        <Terminal>
            <pre>
                error[E069]: cannot dynamically create array `arr`<br/>
                <pre> --&gt;    src/Main.vs:3:5</pre><br/>
                <pre>  |</pre><br/>
                <pre>2 |    let len = 5</pre><br/>
                <pre>  |        |</pre><br/>
                <pre>  |        length of array is specified here `len`</pre><br/>
                <pre>  |        help: consider making this varible constant: `const len = 5`</pre><br/>
                <pre>  |              or use List instead</pre><br/>
                <pre>3 |    let arr = [len; 0]</pre><br/>
                <pre>  |              ^^^^^^^^ cannot dynamically specify array length</pre>
            </pre>
        </Terminal>
        <p>
            For dynamically working with elements, you should use a List instead, as that can 
            increase or decrease capacity during run-time.
        </p>
        <Code>
            {highlight(
`void main() {
    let numbers = list([0..3])
    list.add(3)
    // [0, 1, 2, 3]
}`
            )}
        </Code>
        <p>
            Array implement many useful methods, that you can monstly only find in Lists when using 
            other programming languages. Void implements a wide set of tools to enchant the experience
            of using arrays. 
        </p>
        <Code>
            {highlight(
`let numbers = [1, -2, 3, -4]
    
let positive = numbers
    .stream()
    .filter(|x| x > 0)
    .collect()
    
println("positive numbers: {positive}")
`
            )}
        </Code>

        <h4>The tuple type</h4>
        <p>
            A <Backticks>tuple</Backticks> type is an ordered holder of values of different kinds.
            Unlike arrays, tuples can hold any types value, as they are specified in the tuple declaration. 
        </p>
        <p>
            By default, the members of tuples can be accessed by their index, the following way. 
        </p>
        <Code>
            {highlight(
`main() {
    (int, string) data = (123, "hello")
    
    let number = data.0
    let text = data.1
}`
            )}
        </Code>
        <p>
            Named tuple members can be accessed via their names.
        </p>
        <Code>
            {highlight(
`void main() {
    (bool success, string message) result = (true, "authenticated")
    
    let success = result.success
    let message = result.message
}`
            )}
        </Code>
        <p>
            Tuple members can be also accessed using <Backticks>tuple deconstruction</Backticks>, 
            where the specific members of the tuple are referenced.
        </p>
        <Code>
            {highlight(
`void main() {
    (string, int) order = ("Pepperoni", 3)
    
    let (type, amount) = order
    
    println($"ordering {amount} slices of {type} pizza")
}`
            )}
        </Code>
        <p>
            You don't need to explicitly set the types of the tuple members when the tuple is initialized
            when declaring.
            You may also have nested tuple members as well.
        </p>
        <Code>
            {highlight(
`void main() {
    let tuple = (12, (true, "hello"))
}`
            )}
        </Code>
    </div>
)
