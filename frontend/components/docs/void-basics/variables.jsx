const Variables = () => (
    <div>
        <h2>Variables</h2>
        <p>
            Variables in void are scoped temporary value holders, which may be mutable or immutable.
            Variables are declared using the <Backticks>let</Backticks> keyword, followed by the name of the variable.
        </p>
        <Code>
            {highlight(
`let x = 100
let y = 200`
            )}
        </Code>

        <h3>Explicit type declaration</h3>
        <p>
            Although Void ensures strong typing, when using the <Backticks>let</Backticks> keyword, you do not need to manually
            specify the type of the variable, as Void automatically detects them.
        </p>
        <p>
            Explicit variable type declaration is also possible, in case you don't want to initialize the variable on declaration.
            Here you <strong>must</strong> specify the type of the variable, because you do not provide any information to Void 
            that what values you are willing to store in it.
        </p>
        <Code>
            {highlight(
`int x
int y`
            )}
        </Code>
        <p>
            Here you can see that the variables <Backticks>x</Backticks> and <Backticks>y</Backticks> are now declared, they exist
            in the Void program, they are signed integers and they don't have a value by default. 
        </p>
        <p>
            You could also initialize explicitly typed variables, but it is not recommended. User <Backticks>let</Backticks> instead.
        </p>
        <Code>
            {highlight(
`int x = 30
int y = 50`
            )}
        </Code>

        <h3>Mutability and immutability</h3>
        <p>
            Variables are either mutable or immutable value holders in the code.
            Immutable variables can be only assigned once, mutable variables may change during runtime.
        </p>
        <Code>
            {highlight(
`void main() {
    let x = 100
    println($"value of x is: {x}")

    x = 200
    println($"value of x is {x}")
}`
            )}
        </Code>
        <Terminal>
            <pre>
                value of x is 100<br/>
                value of x is 200
            </pre>
        </Terminal>
        <p>
            In Void, variables are mutable by default. To create immutable variables, you need to need to use 
            <Backticks>final</Backticks> instead of <Backticks>let</Backticks>.
        </p>
        <Code>
            {highlight(
`void main() {
    final x = 100
    x = 150
}`
            )}
        </Code>
        <Terminal>
            <pre>
                error[E069]: cannot assign twice to immutable variable `x`<br/>
                <pre> --&gt;	src/Main.vs:3:5</pre><br/>
                <pre>  |</pre><br/>
                <pre>2 |    final x = 100</pre><br/>
                <pre>  |          |</pre><br/>
                <pre>  |          first assigment to `x`</pre><br/>
                <pre>  |          help: consider making this varible mutable: `let x`</pre><br/>
                <pre>3 |    x = 150</pre><br/>
                <pre>  |    ^^^^^^^ cannot assign twice to immutable variable</pre>
            </pre>
        </Terminal>

        <h3>Variable redeclaration</h3>
        <p>
            Normally, you can only assign values to a variable of the same type.
            However, in production you may need to use the same value of the same variable, but 
            in a different type.
        </p>
        <p>
            Normally languages doesn't let you declare variables twice, 
            but as for some other languages such as Void, lets you to do that.
        </p>
        <p>
            This is becuase in many cases you need to swap between variable types for a value, 
            and having too much variables for a single value, 
            or having long lines of type conversion is both considered a bad practice.
        </p>
        <Code>
            {highlight(
`// bad code
int balance = database
    .getUser("username")
    .getBalance()

string balanceStr = $"{balance} USD"
    
// also bad code
string balance = string.from(
    database
        .getUser("username")
        .getBalance()
) + " USD"`
            )}
        </Code>
        <p>
            These examples are either way overcompilcated or they need duplicate variables to work with.
            This can be simplified the following way.
        </p>
        <Code>
            {highlight(
`// initially, the type of \`balance\` is an integer
let balance = database
    .getUser("username")
    .getBalance()
    
// secondly, via redeclaration, the type is now string
let balance = $"{balance} USD"`
            )}
        </Code>

        <h3>Static variables</h3>
        <p>
            By default, variables live only in the scope of a method. 
            Static variables however provide a way to statically store data in the method,
            that is accessible for further method calls.
        </p>
        <Code>
            {highlight(
`int getIncrementId() {
    static let counter = 0
    return counter++
}
 
void main() {
    println(getIncrementId())
    println(getIncrementId())
    println(getIncrementId())
}
`
            )}
        </Code>
        <Terminal>
            <pre>
                0<br/>
                1<br/>
                2
            </pre>
        </Terminal>

        <h3>Constants</h3>
        <p>
            Constants are similar to immutable variables, however they are resolved at compile-time, not run-time.
            They can also only hold values of constant literals, such as numbers, strings, and booleans.
        </p>
        <Code>
            {highlight(
`const ENTITY_HEIGHT = 100
const RENDER_DISTANCE = 150
`
            )}
        </Code>
        <p>
            Unlike variables, constants can be placed outside methods, or even outside classes.
        </p>
    </div>
)
