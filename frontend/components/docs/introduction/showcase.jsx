const DocsShowcase = () => (
    <div>
        <h2>Showcase</h2>
        <p>
            Below are few examples showcasing what Void provides to enchant programming experience.
        </p>

        <h3>A Hello World application</h3>
        <Code>
            {highlight(
`void main() {
    println("Hello, World!")
}`
            )}
        </Code>

        <h3>Variable declaration</h3>
        <p>
            Below are few examples showcasing what Void provides to enchant programming experience.
        </p>
        <Code>
            {highlight(
`let value = 100`
            )}
        </Code>
        <p>
            In case of explicit type definition:
        </p>
        <Code>
            {highlight(
`float value = 3.5`
            )}
        </Code>

        <p>
            As you may notice, semicolons are not required. 
            The compiler automatically places them after the end of lines, when it is required. 
            This allows the chaining syntax, unlike many in case of many languages.
        </p>
        <Code>
            {highlight(
`database
    .fetchUser("username")
    .transform(User::from)
    .getOrThrow(err)`
            )}
        </Code>

        <p>
            In case of putting multiple statements in one line, 
            you can separate them with putting a semicolon between them.
        </p>

        <Code>
            {highlight(
`int f = 0; float f = 10.0`
            )}
        </Code>

        <h3>Variable redeclaration</h3>
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

        <h3>Multi-returning</h3>
        <p>
            Void lets you have methods return multiple variables at once.
            This allows you to have more simple codes, 
            without the need of making structs holding multiple values for return.
        </p>
        <Code>
            {highlight(
`// overcomplicated code
struct HttpResponse {
    int code
    string message
}
    
HttpResponse fetchURL(string url) {
    return new HttpResponse {
        code: 404,
        message: "Not found"
    }
}  
`
            )}
        </Code>
        <Code>
            {highlight(
`// simplified code
(int, string) fetchURL(string url) {
    return (404, "Not found")
}`
            )}
        </Code>
        <p>
            In the last example, a tuple is returned. 
            A tuple can hold values of any length and any type. 
            To access these values you can use a feature called tuple destruction.
        </p>
        <Code>
            {highlight(
`let (code, message) = fetchURL("google.com")
println($"Webserver responded with {code} status code")`
            )}
        </Code>
        <p>
            You can also access these values without destructing the tuple. 
            You need to specify the index of the tuple you want to retrieve.
        </p>
        <Code>
            {highlight(
`let response = fetchURL("google.com")
let code = response.0
let message = response.1`
            )}
        </Code>
        <p>
            Void allows you to name tuple members. 
            Member names are specified inside the method return type declaration.
        </p>
        <Code>
            {highlight(
`(bool success, string token) 
authenticate(string username, string password) {
    return (true, "Authenticated")
}`
            )}
        </Code>
        <p>
            In this case, you can access these values by their names.
        </p>
        <Code>
            {highlight(
`let result = authenticate("admin", "12345")
if (result.success) {
    println("Authenticated")
    println($"Token: {result.token}")
} else {
    println("Invalid credentials")
}`
            )}
        </Code>

        <h3>Primitive types</h3>
        <p>
            Void features a wide variety of primitive types.
        </p>
        <Code>
            {highlight(
`byte, short, int, long, float, double,
bool, char, string`
            )}
        </Code>
        <p>
            And their unsigned version.
        </p>
        <Code>
            {highlight(
`ubyte, ushort, uint, ulong, ufloat, udouble`
            )}
        </Code>

        <h3>Simplified number constants</h3>
        <p>
            You can specify the types of numbers in the number constant.
        </p>
        <Code>
            {highlight(
`let byteVal = 30B
let shortVal = 150S
let intVal = 540I
let longVal = 120000L
let floatVal = 3.5F
let doubleVal = 40D`
            )}
        </Code>
        <p>
            Without type specifier, non-decimal numbers are integers, and decimal numbers are doubles.
        </p>

        <h3>Class types</h3>
        <p>
            The most high-level one of types is the class type.
            It has the capatibility of holding methods, implementations, fileds, and much more.
        </p>
        <Code>
            {highlight(
`class Car {
    string type
    int speed
    
    void move() {
        println("Moving...")
    }
}`
            )}
        </Code>
        <p>
            In case of the need of classes, which are only for the purpose of holding values, you can use structs.
            Structs are simplified classes with the purpose of holding values.
        </p>
        <Code>
            {highlight(
`struct Point {
    int x
    int y
}
    
void main() {
    let point = new Point { x: 2, y: 3 }
}`
            )}
        </Code>
        <Code>
            {highlight(
`
void drawPoint(Point point) {
    println($"x: {y}, y: {y}")
}
    
main() {
    // you can use the simplified initializator, 
    // if Void knows the type of the struct
    Point point = { x: -7, y: 0}
    
    drawPoint({ x: 30, y: 40 })
}`
            )}
        </Code>
        <p>
            You can create classes which only show you what methods they have, 
            but they don't have an actual implementations.
        </p>
        <Code>
            {highlight(
`interface Car {
    void move()
}`
            )}
        </Code>
        <p>
            These methods are implemented by a class.
        </p>
        <Code>
            {highlight(
`class Ferrari : Car {
    @Override
    void move() {
        println("Vrooooom...")
    }
}`
            )}
        </Code>
        <p>
            You can have classes with constant members.
        </p>
        <Code>
            {highlight(
`enum MimeType {
    PLAIN_TEXT("text/plain"),
    IMAGE("image/png"),
    VIDEO("video/mp4")
    
    string data
    
    MimeType(string data) {
        this.data = data
    }
}`
            )}
        </Code>

        <p>
            You can decorate classes, fields, methods or code blocks with annotations.
        </p>
        <Code>
            {highlight(
`@interface Subscribe {
    string event
    bool sync = false
}
    
@Subscribe(event = "playerJoin")
void onPlayerJoin() {
    println("A player has joined the game.");
}`
            )}
        </Code>

        <h3>Access modifiers</h3>
        <p>
            Void features two types of access modifier declarations.
        </p>
        <p>
            You can specify access modifiers separately for each methods and fields.
            However this is not a good practise, as you are making method declarations 
            much longer by having to put these manually everywhere.
        </p>
        <Code>
            {highlight(
`public static void foo() {
    println("bar")
}
    
struct Point {
    public int x, y
}`
            )}
        </Code>
        <p>
            Alternatively, you can use <Backticks>modifier blocks</Backticks>, 
            which allows you to set the visibility modifiers of a section of code.
        </p>
        <Code>
            {highlight(
`class Entity {
    public:
        int posX, posY
        
        int entityId
    
    private:
        float health
        
        float stamina
}`
            )}
        </Code>
        <p>
            Visibility modifiers are <Backticks>public</Backticks>, <Backticks>protected</Backticks> and <Backticks>private</Backticks>.
        </p>

        <h3>Object destructuring</h3>
        <p>
            You can destructure object members in order to make them more accessible in the code.
        </p>
        <Code>
            {highlight(
`struct Point {
    int x, y
}`
            )}
        </Code>
        <Code>
            {highlight(
`let point = new Point { x: 10, y: -2 }
let { x, y } = point
    
println($"Point {x}, {y}")
    
// you don't have to deconstruct 
// all the variables of an object
let { x } = point`
            )}
        </Code>

        <h3>Lambda objects</h3>
        <p>
            You can create anonymus functions inside the code. These are also known as lambdas.
        </p>
        <Code>
            {highlight(
`let foo = |int x| println(x)
foo(123)`
            )}
        </Code>
        <Code>
            {highlight(
`void bar(|int, int| test) {
    test(2, 3)
}
    
bar(|x, y| println(x * y))`
            )}
        </Code>

        <h3>Default values</h3>
        <p>
            Using the <Backticks>default(Type)</Backticks> function, you can retrieve the default value of the given type.
        </p>
        <Code>
            {highlight(
`let number = default(int) // 0
let state = default(bool) // false
let car = default(Car) // null`
            )}
        </Code>
        <p>
            Void features a system, which allows to create custom default values for your own class types.
            You should put a <Backticks>default</Backticks> modifier before the class declaration, 
            and a <Backticks>default()</Backticks> method must be declared as well.
        </p>
        <Code>
            {highlight(
`default class Credentials {
    string username, password
    
    default() {
        return {
            username: "admin",
            password: "12345"
        }
    }
}`
            )}
        </Code>

        <Code>
            {highlight(
`// initialize credentials to the default value 
let creds = default(Credentials) 
// { username: "admin", password: "12345" }
    
// you can use the default function without an explicit type, 
// if the variable's type is defined explicitly
Credentials creds = default 
    
// a simplfied syntax is also available
default Credentials creds`
            )}
        </Code>

        <h3>Null-conditional operators</h3>
        <p>
            Null-conditional operators provide null-safe access to members.
            A <Backticks>?</Backticks> mark is placed before the instruction to make it null-conditional.
        </p>
        <Code>
            {highlight(
`let profile = database.find("user")
    
// the profile's balance is retrieved 
// if the profile is not null, 
// otherwise a default value is required
println(profile?.balance ?? 0)
    
// might be null
let person = getSomePerson() 
// the "walk" method is not invoked 
// if "person" is null
person?.walk()
    
// you can use null-conditional operators 
// on nested members as well
person?.entity?.motion?.move()`
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
}`
            )}
        </Code>
        <Code>
            {highlight(
`void main() {
    getIncrementId()
    getIncrementId()
    getIncrementId()
}`
            )}
        </Code>
        <Terminal>
            <pre>
                0<br/>
                1<br/>
                2
            </pre>
        </Terminal>

        <h3>Enchanted switch</h3>
        <p>
            In Void you can use the old switch syntax.
        </p>
        <Code>
            {highlight(
`switch (status) {
    case 200:
        println("ok")
        break
    case 400:
        println("error")
        break
    default:
        println("unrecognized")
}`
            )}
        </Code>
        <p>
            However in most cases, this old design forces us to write a lot of unnecessary code, 
            such as always having to write "break" after each cases.
            Void's echanted switch allows you to simplify switch blocks and use them as direct expressions.
        </p>
        <Code>
            {highlight(
`enum Status {
    SUCCESS,
    FAILED,
    UNKNOWN
}`
            )}
        </Code>
        <Code>
            {highlight(
`switch (code) {
    200 -> println("success")
    400 -> println("failed")
    else -> println("unknown")
}
    
// you can merge cases as well
switch (status) {
    FAILED|UNKNOWN -> println("Unable to authenticate")
    SUCCESS -> println("Authenticated")
}`
            )}
        </Code>

        <h3>Blocks as expressions</h3>
        <p>
            You can use code blocks as expressions, including loops and switches.
        </p>
        <Code>
            {highlight(
`let status = switch (code) {
    200 -> SUCCESS
    400 -> FAILED
    else -> UNKNOWN
}
    
Status getStatus(int code) = switch (code) {
    case SUCCESS -> 200
    case FAILED -> 400
    else -> 0
}
    
int code = getStatus(SUCCESS)
// code is now 200`
            )}
        </Code>

        <h3>Method pre-processing</h3>
        <p>
            Void allows you to merge an instruction with the return keyword. 
            Therefore you don't need two extra lines to do a negated method guard.
        </p>
        <Code>
            {highlight(
`// previously you had to use 
// two lines of code to return
void handleCommand(Player p, String command) {
    if (!p.hasPermission("use")) {
        p.sendMessage("no perms")
        return
    }
    // handle the command
}`
            )}
        </Code>
        <Code>
            {highlight(
`// Void's syntax allows you to merge 
// these two lines together
if (!p.hasPermission("use"))
    return p.sendMessage("no perms")
// note that handleCommand returns void, 
// so there are no conflicts returning something.
// the return value of p.sendMessage 
// (assuming it has one) is ignored`
            )}
        </Code>

        <h3>Method post-processing</h3>
        <p>
            In Void, you can queue post tasks for the method, 
            that are going to be executed, when the method returns.
            This can be used to prevent duplicating instructions whenever returning.
        </p>
        <Code>
            {highlight(
`// prevously you had to do 
// something like this
// as you can see you need 
// to call guard.unlock() 3 times
void myThreadSafeMethod() {
    // get some lock for concurrency
    let guard = ...
    guard.lock()
    
    if (myObject.someError) {
        guard.unlock()
        return
    }
    
    if (myObject.someOtherError) {
        guard.unlock()
        return
    }
    
    myObject.doSomething()
    
    guard.unlock()
}`
            )}
        </Code>
        <p>
            In Void, you can replace these duplicates using the <Backticks>defer</Backticks> keyword. 
            Deferred instructions will be executed whenever the method returns.
        </p>
        <Code>
            {highlight(
`void myThreadSafeMethod() {
    let guard = // get some lock for concurrency
    guard.lock()
    defer guard.unlock()
    
    if (myObject.someError) 
        return
    
    if (myObject.someOtherError) 
        return
    
    myObject.doSomething()
}`
            )}
        </Code>

        <h3>Conditional variables</h3>
        <p>
            Conditional variables are local variables that only exist in the scope of the condition. 
            This prevents keeping unused object in the memory, and unnecessary variable name reservation.
        </p>
        <Code>
            {highlight(
`// previously you had to 
// code something like this
let created = createFolder("myFolder")
if (!created)
    return error`
            )}
        </Code>
        <Code>
            {highlight(
`// Void allows you to simplify this code 
// the following way
if (let created = createFolder("folder"); !created)
    return error`
            )}
        </Code>
        <p>
            When checking the isntance of objects, in older code practices, 
            you had to first check the instance, then manually cast the value to the new type.
        </p>
        <Code>
            {highlight(
`if (animal is Parrot) {
    let parrot = (Parrot) animal
    parrot.fly()
}`
            )}
        </Code>
        <p>
            However this code requires us to write an extra line of code and manually cast the value.
        </p>
        <Code>
            {highlight(
`if (animal is Parrot parrot) 
    parrot.fly()`
            )}
        </Code>

        <h3>Labels</h3>
        <p>
            You can name certain parts of code in order to allow jumps in scopes and nested loops.
        </p>
        <Code>
            {highlight(
`// you may label your outer loop 
// in order to allow \`break\` or \`continue\` on it.
myLoop: 
for (let i in 1..10) {
    for (let j in 1..10) {
        println($"{i} {j}")
        if (j == 5) {
            break myLoop
        }
    }
}`
            )}
        </Code>
        <Code>
            {highlight(
`// you can put labels to non-blocks as well
// this example shows a loop jump to a section
hello:
doSomething()
if (condition)
    goto hello`
            )}
        </Code>

        <h3>Multithreading</h3>
        <p>
            Void features an async value retrieval system. In other programming languages, 
            you might have seen these ad promises, tasks or futures.
        </p>
        <Code>
            {highlight(
`Future<User> getUser() {
    return Future.completed(myUser)
}
    
let user = getUser().get()`
            )}
        </Code>
        <p>
            Although Void lets you to explicitly declare future types, 
            you should rather use the <Backticks>async/await</Backticks> syntax.
            This automatically wraps the return type to be a Future, and calls <Backticks>get()</Backticks>.
        </p>
        <Code>
            {highlight(
`async User getUser() {
    return myUser
}
    
let user = await getUser()`
            )}
        </Code>
        <p>
            You can create threads as well and have full control over them.
        </p>
        <Code>
            {highlight(
`let task = || println("hello")
    
let thread = new Thread(task)
    .setName("my-thread")
    .setPriority(0)
    
thread.start()`
            )}
        </Code>

        <h3>JSON in code</h3>
        <p>
            Void has a built-in JSON serializer, which allows you to directly 
            map Void objects to JSON and vice versa.
        </p>
        <Code>
            {highlight(
`// object to string
let entity = @Json {
    entityId: 100,
    meta: {
        health: 20,
        food: 10,
        stamina: 3
    },
    position: {
        x: 200,
        y: 4,
        z: -55
    }
}`
            )}
        </Code>
        <Code>
            {highlight(
`let json = Json.serialize(entity)
println($"Data: {json}")`
            )}
        </Code>
        <Code>
            {highlight(
`// string to object
let data = File.readText("data.json")`
            )}
        </Code>
        <Code>
            {highlight(
`// by default, json is serialized to 
// Void's built in json tree
let object = Json.deserialize(data)`
            )}
        </Code>
        <Code>
            {highlight(
`struct User {
    string name
    int userId
}
    
// you can specify a class type as well, 
// to directly map to an object
let user = Json.deserialize<User>(data)
println($"Welcome, {user.name}")`
            )}
        </Code>

        <h3>HTML in code</h3>
        <p>
            Void lets you have HTML code inside source code. 
            By default, tags are mapped with Void's built-in tag system, however this can be extended.
        </p>
        <Code>
            {highlight(
`let page = @Html {
    <div class="container">
        <h1>Hello, World</h1>
    </div>
}`
            )}
        </Code>

        <h3>Bytecode in code</h3>
        <p>
            Void features direct bytecode instructions to be placed inside the source code.
        </p>
        <Code>
            {highlight(
`int getSomeMagicValue() {
    let magic = 30
    
    @Bytecode
    unsafe {
        // push 100 to the stack
        ipush 100
        
        // store the value on the stack 
        // in the "magic" variable 
        istore magic 
    }
    
    return magic
}
    
// the value of "test" will be 100
let test = getSomeMagicValue()`
            )}
        </Code>
        
        <h3>Interaction with native code</h3>
        <p>
            Void allows you to call native library methods. 
            It also has a framework that makes it possible to interace with Void from native context.
        </p>
        <Code>
            {highlight(
`// get the implementation of 
// the method from native code
@Link("library.dll")
public native int multiply(int a, int b)
    
void main() {
    // call the native implementation 
    // from Void context
    let result = multiply(2, 6)
    println($"Result: {result}")
}`
            )}
        </Code>
        <Code>
            {highlight(
`// you can also link native 
// methods of different signature

@Link("library.dll")
@NativeTarget("bar")
native void foo(@NativeParam("int") int a)`
            )}
        </Code>
        <Code>
            {highlight(
`// in case of having multiple native 
// methods in a class, you should 
// annotate the class instead

@Link("library.dll")
class MyNativeImplementation {
    native int foo()
    
    native void bar(float f)
    
    @NativeTarget("baz")
    native void something()
}`
            )}
        </Code>

        <h3>Dynamic native implementation loading</h3>
        <Code>
            {highlight(
`let library = new NativeLibrary()
    .target(typeof(object))
    
library.load()`
            )}
        </Code>

        <h3>Creating an HTTP server</h3>
        <p>
            Void's built-in http module allows you to create efficient web servers with the express-js design.
        </p>
        <Code>
            {highlight(
`void main() {
    // create a new server instance 
    // which will take care of 
    // handling the request routes
    let server = new HttpServer()
    
    // create a GET request handler 
    // for the "/" route
    server.get("/", |req, res|
        // respond to the request 
        // with a plain text message
        res.send("Hello, World")
    )
    
    // start the web server 
    // and listen on port 80
    server.listen(80)
}`
            )}
        </Code>
    </div>
)
