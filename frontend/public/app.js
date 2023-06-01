let app = new App(document.getElementById('root'));
let page = null;
const Contact = () => {
    return (
        React.createElement("div", {class: "contact"}, 
            React.createElement("div", {class: "wrapper"}, 
                React.createElement("div", {class: "icon"}, 
                    React.createElement("a", {target: "_blank", href: "https://discord.gg/HdgnHqqGAW"}, 
                        React.createElement("i", {class: "fab fa-discord"})
                    )
                ), 
                React.createElement("div", {class: "icon"}, 
                    React.createElement("a", {target: "_blank", href: "https://www.youtube.com/@AdvancedAntiSkid"}, 
                        React.createElement("i", {class: "fab fa-youtube"})
                    )
                ), 
                React.createElement("div", {class: "icon"}, 
                    React.createElement("a", {target: "_blank", href: "https://github.com/voidlang/void"}, 
                        React.createElement("i", {class: "fab fa-github"})
                    )
                ), 
                React.createElement("div", {class: "icon"}, 
                    React.createElement("a", {target: "_blank", href: "https://twitter.com/voidlangorg"}, 
                        React.createElement("i", {class: "fab fa-twitter"})
                    )
                )
            )
        )
    )
}

const Footer = () => {
    return (
        React.createElement("div", {class: "footer"}, 
            React.createElement("p", null, "Void 2023 - All rights reserved")
        )
    )
}

const Type = (x) => React.createElement("span", {class: "type"}, x);
const String = (x) => React.createElement("span", {class: "string"}, x);
const Light = (x) => React.createElement("span", {class: "light"}, x);
const Solid = (x) => React.createElement("span", {class: "solid"}, x);
const Literal = (x) => React.createElement("span", {class: "literal"}, x);
const Indent = () => React.createElement("div", {class: "indent"});
const DoubleIndent = () => React.createElement("div", {class: "indent2"});
const Line = () => React.createElement("div", {class: "line"});
const GetStarted = () => {
    return (
        React.createElement("div", {class: "get-started"}, 
            React.createElement("h1", null, React.createElement("span", {style: "color: lime"}, "Modern"), " Software Development"), 
            React.createElement("h2", null, "Made ", React.createElement("span", {style: "color: lime"}, "Simple")), 
            React.createElement("div", {class: "wrapper"}, 
                React.createElement("div", {class: "info"}, 
                    React.createElement("div", {class: "inner"}, 
                        React.createElement("a", {href: "https://github.com/voidlang/void", target: "_blank", class: "button"}, "Get Started Now"), 
                        React.createElement("p", null, "Start using Void and explore a new universe of programming"), 
                        React.createElement("p", null, "Explore the amazing features of Void to enchant your coding experience")
                    )
                ), 
                React.createElement("div", {class: "code"}, 
                    React.createElement(Type, null, "void"), " main", React.createElement(Light, null, "() {"), React.createElement("br", null), 
                        React.createElement(Indent, null), React.createElement(Type, null, "let"), " input ", React.createElement(Light, null, "="), " ", React.createElement(Light, null, "["), React.createElement(String, null, "\"one\""), React.createElement(Light, null, ","), " ", React.createElement(String, null, "\"12\""), React.createElement(Light, null, ","), " ", React.createElement(String, null, "\"hello\""), React.createElement(Light, null, ","), " ", React.createElement(String, null, "\"-7\""), React.createElement(Light, null, "]"), React.createElement("br", null), 
                        React.createElement(Line, null), 
                        React.createElement(Indent, null), React.createElement(Type, null, "let"), " result ", React.createElement(Light, null, "="), " input", React.createElement("br", null), 
                        React.createElement(DoubleIndent, null), React.createElement(Light, null, "."), React.createElement(Solid, null, "stream"), React.createElement(Light, null, "()"), React.createElement("br", null), 
                        React.createElement(DoubleIndent, null), React.createElement(Light, null, "."), React.createElement(Solid, null, "filterMap"), React.createElement(Light, null, "("), React.createElement(Type, null, "int"), React.createElement(Light, null, "::"), "parse", React.createElement(Light, null, ")"), React.createElement("br", null), 
                        React.createElement(DoubleIndent, null), React.createElement(Light, null, "."), React.createElement(Solid, null, "sort"), React.createElement(Light, null, "("), React.createElement(Light, null, "|"), "a", React.createElement(Light, null, ","), " b", React.createElement(Light, null, "|"), " b ", React.createElement(Light, null, "-"), " a", React.createElement(Light, null, ")"), React.createElement("br", null), 
                        React.createElement(DoubleIndent, null), React.createElement(Light, null, "."), React.createElement(Solid, null, "collect"), React.createElement(Light, null, "()"), React.createElement("br", null), 
                        React.createElement(Line, null), 
                        React.createElement(Indent, null), React.createElement(Type, null, "let"), " largest ", React.createElement(Light, null, "="), " result", React.createElement("br", null), 
                        React.createElement(DoubleIndent, null), React.createElement(Light, null, "."), React.createElement(Solid, null, "get"), React.createElement(Light, null, "("), React.createElement(Literal, null, "0"), React.createElement(Light, null, ")"), React.createElement("br", null), 
                        React.createElement(DoubleIndent, null), React.createElement(Light, null, "."), React.createElement(Solid, null, "unwrap"), React.createElement(Light, null, "()"), React.createElement("br", null), 
                        React.createElement(Line, null), 
                        React.createElement(Indent, null), React.createElement(Solid, null, "println"), React.createElement(Light, null, "($"), React.createElement(String, null, "\"value: "), React.createElement(Literal, null, "{largest}"), React.createElement(String, null, "\""), React.createElement(Light, null, ")"), React.createElement("br", null), 
                    React.createElement(Light, null, "}")
                )
            )
        )
    )
}

const words = [
    "Better",
    "Stable",
    "Faster",
    "Cleaner"
]
const feature = React.createElement("span", {id: "_feature", style: "color: lime;"}, "Better")
let wordIndex = 0
let typing = false
const typeTime = 500
const eraseTime = 200
const waitTime = 1500
function typeIn(text) {
    if (typing)
        return
    let max = text.length
    let index = 0
    typing = true
    feature.setText("")
    const interval = setInterval(() => {
        if (index >= max -1) {
            typing = false
            clearInterval(interval)
        }
        feature.appendText(text[index++])    
    }, typeTime / max)
}
function typeOut(text) {
    let max = text.length
    let index = max - 1
    typing = true
    feature.setText(text)
    const interval = setInterval(() => {
        if (index < 0) {
            typing = false
            clearInterval(interval)
        }
        feature.setText(text.substring(0, index--))
    }, eraseTime / max)
}
function startTyping() {
    const word = words[wordIndex++ % words.length]
    typeIn(word)
    setTimeout(startTyping, typeTime + waitTime)
}
window.addEventListener('load', () => {
    if (!feature.handle())
        return
    startTyping()
})
let started = false
const Main = () =>  {
    return (
        React.createElement("div", null, 
            React.createElement("div", {class: "main"}, 
                React.createElement("div", {class: "wrapper"}, 
                    React.createElement("h1", null, "Time To Code ", feature), 
                    React.createElement("p", null, "Explore the powerful features of Void")
                )
            ), 
            React.createElement("div", {class: "more"}, 
                React.createElement("a", {class: "arrows", href: "#showcase"}, 
                    React.createElement("span", {class: "arrow"}, "."), 
                    React.createElement("span", {class: "arrow"}, ".")
                )
            )
        )
    );
}

const Nav = () => {
    return (
        React.createElement("div", {class: "nav"}, 
            React.createElement("div", {class: "nav-left nav-side"}, 
                React.createElement("a", {href: "/"}, 
                    React.createElement("h1", null, "Void")
                )
            ), 
            React.createElement("div", {class: "nav-right nav-side"}, 
                React.createElement("a", {href: "https://github.com/voidlang/void", target: "_blank", class: "link"}, "Docs"), 
                React.createElement("a", {href: "https://github.com/voidlang/void", target: "_blank", class: "link"}, "GitHub"), 
                React.createElement("a", {href: "https://github.com/voidlang/void", target: "_blank", class: "button"}, "Try It")
            )
        )
    )
}

const Quote = () => {
    return (
        React.createElement("div", {class: "quote"}, 
            React.createElement("div", {class: "wrapper"}, 
                React.createElement("div", {class: "content"}, 
                    React.createElement("div", {class: "left icon"}, 
                        React.createElement("i", {class: "fas fa-quote-left"})
                    ), 
                    React.createElement("p", {class: "text"}, 
                        "Any fool can write code that a computer can understand.", React.createElement("br", null), 
                        "Good programmers write code that humans can understand."
                    ), 
                    React.createElement("div", {class: "right icon"}, 
                        React.createElement("i", {class: "fas fa-quote-right"})
                    )
                ), 
                React.createElement("p", {class: "author"}, React.createElement("span", null, "__"), " Martin Flower")
            )
        )
    )
}

const Showcase = () => {
    return (
        React.createElement("div", {class: "showcase", id: "showcase"}, 
            React.createElement("h1", null, React.createElement("span", {style: "color: lime"}, "Why"), " Void?"), 
            React.createElement("div", {class: "cards"}, 
                React.createElement("div", {class: "card"}, 
                    React.createElement("div", {class: "title"}, 
                        React.createElement("h2", null, "Clean code")
                    ), 
                    React.createElement("div", {class: "description"}, 
                        React.createElement("p", null, "Void syntax allows you to write clean, yet extremely lightweight code")
                    )
                ), 
                React.createElement("div", {class: "card"}, 
                    React.createElement("div", {class: "title"}, 
                        React.createElement("h2", null, "Safe code")
                    ), 
                    React.createElement("div", {class: "description"}, 
                        React.createElement("p", null, "Void syntax cares about safety, therefore it is optimal for production")
                    )
                ), 
                React.createElement("div", {class: "card"}, 
                    React.createElement("div", {class: "title"}, 
                        React.createElement("h2", null, "Stable code")
                    ), 
                    React.createElement("div", {class: "description"}, 
                        React.createElement("p", null, "Using Void, you can write long-lasting, scalable, stable applications.")
                    )
                ), 
                React.createElement("div", {class: "card dummy"}
                )
            )
        )
    )
}

const Backticks = (x) => React.createElement("span", {class: "backticks code"}, x)
const Terminal = (x) => React.createElement("div", {class: "code block terminal"}, x)
const Code = (x) => React.createElement("div", {class: "code block terminal"}, x)

const NotImplemented = () => (
    React.createElement("div", null, 
        React.createElement("h2", null, "Not implemented"), 
        React.createElement("p", null, "This page of the Void Documentation is not implemented yet.")
    )
)

const HelloWorld = () => (
    React.createElement("div", null, 
        React.createElement("h2", null, "Hello, World!"), 
        React.createElement("p", null, 
            "After installing Void, you are free to go to create your own Void application." + " " +
            "A simple ", React.createElement(Backticks, null, "Hello, World!"), " example is shown below" + " " +
            "to teach you how to get started with your first program."
        ), 
        React.createElement("h3", null, "Creating a Void project"), 
        React.createElement("p", null, 
            "A Void project is a collection of folders and files that may specify application settings, dependencies, tests," + " " + 
            "and the actual source code as well."
        ), 
        React.createElement("p", null, 
            "First, you need to go to the directory you want to create the project into."
        ), 
        React.createElement(Terminal, null, 
            React.createElement("pre", null, "cd myProjects")
        ), 
        React.createElement("p", null, 
            "You can create a new Void project using the command below." + " " +
            "This will generate a new project folder named ", React.createElement(Backticks, null, "Hello World"), "."
        ), 
        React.createElement(Terminal, null, 
            React.createElement("pre", null, "void new HelloWorld")
        ), 
        React.createElement("h3", null, "File architecture"), 
        React.createElement("p", null, "A Void project consists of the following files and folders:"), 
        React.createElement("ul", null, 
            React.createElement("li", null, 
                React.createElement(Backticks, null, "src"), " ", React.createElement(Light, null, "- This folder contains the Void source files of packages, classes and methods")
            ), 
            React.createElement("li", null, 
                React.createElement(Backticks, null, "test"), " ", React.createElement(Light, null, "- This folder contains the Void unit test files")
            ), 
            React.createElement("li", null, 
                React.createElement(Backticks, null, "target"), " ", React.createElement(Light, null, "- This folder contains the compiled executable of the project, after it has been built")
            ), 
            React.createElement("li", null, 
                React.createElement(Backticks, null, "void.toml"), " ", React.createElement(Light, null, "- This file specifies project settings, dependencies and built configurations")
            )
        ), 
        React.createElement("h2", null, "Creating the first program"), 
        React.createElement("p", null, 
            "Create a new source file called ", React.createElement(Backticks, null, "Main.vs"), " inside the ", React.createElement(Backticks, null, "src"), " folder." + " " +
            "The ", React.createElement(Backticks, null, ".vs"), " file extension stands for Void Source."
        ), 
        React.createElement("p", null, 
            "Next, we are going to write a simple code, that will output ", React.createElement(Backticks, null, "Hello, World!"), " to the console." + " " +
            "In the ", React.createElement(Backticks, null, "Main.vs"), " file, type the following code."
        ), 
        React.createElement(Code, null, 
            highlight(
`void main() {
    println("Hello, World!")
}`
            )
        ), 
        React.createElement("p", null, 
            "After that, the next step is to compile the program. This process will convert Void source files to an executable format." + " " +
            "To compile the project, you need to the type command below."
        ), 
        React.createElement(Terminal, null, 
            React.createElement("pre", null, "void compile")
        ), 
        React.createElement("h2", null, "Running the first program"), 
        React.createElement("p", null, 
            "The compiled executable file has been created to ", React.createElement(Backticks, null, "./target/HelloWorld.void"), "." + " " +
            "To run this file, all you need to do is execute the following code."
        ), 
        React.createElement(Terminal, null, 
            "void run"
        ), 
        React.createElement("p", null, 
            "Void will automatically detect, that you are in the project's folder, so you don't need to specify" + " " + 
            "the path of the executable. Alternatively, you can tell Void, what to run by typing the code below." 
        ), 
        React.createElement(Terminal, null, 
            "void run path/to/Executable.void"
        )
    )
)

const GettingStarted = () => (
    React.createElement("div", null, 
        React.createElement("h2", null, "Getting started"), 
        React.createElement("p", null, "This page is yet to be implemented.")
    )
)

const Installation = () => (
    React.createElement("div", null, 
        React.createElement("h2", null, "Installation"), 
        React.createElement("p", null, "This page is yet to be implemented.")
    )
)

const Foreword = () => (
    React.createElement("div", null, 
        React.createElement("h2", null, "Foreword"), 
        React.createElement("p", null, 
            "Void is meant to be a language that makes the jobs of developers easier by a ton." + " " +
            "It's purpose is to be able to write clean and efficient code at the same time."
        ), 
        React.createElement("p", null, 
            "Nowadays, according to my years of coding experience, mostly what I can see is, that" + " " + 
            "you have to decide, whether you want to write good looking, simple design, easily maintainable" + " " + 
            "code, or you want to make it run fast." + " " +
            "I wanted to make a language that could do both."
        ), 
        React.createElement("p", null, 
            "I took heavy inspirations from popular languages, such as Java, C#, Rust, Golang, Kotlin, Dart." + " " +
            "I tried to include the useful features of those, that people are already used to, as well as" + " " + 
            "coming up with my own ideas, how to enchant programming experience."
        ), 
        React.createElement("p", null, 
            "Void is not really a beginner-friendly language I must admit, as much of its concepts are" + " " + 
            "dependant on higher knowledge of programming. However, I believe that it would" + " " + 
            "be still a lot easier to learn Void first, than many other languages."
        ), 
        React.createElement("p", null, 
            "Void tries to do all the hard work under the hood, so you don't have to explicitly" + " " +
            "do all kinds of memory management and safety ensuring. Therefore, you could say Void" + " " +
            "is indeed considered a high-level language. Even though that it is generally true, Void" + " " +
            "ensures to include as much as possible unsafe low-level access at for experienced programmers." + " " +
            "This way people can explore the similar power that C gives you, that you can have control" + " " +
            "over everything, at your own risk."
        ), 
        React.createElement("p", null, 
            "Void has been a passion of mine for a long time now." + " " + 
            "I've been working on it since I was about 16 years old." + " " +
            "The syntax has changed a lot every since, as well as the entire program being rewritten" + " " +
            "many times to this day. I am looking forward to improve Void as time goes, planning to" + " " +
            "make it a good choice for whether production or personal use."
        ), 
        React.createElement("p", null, 
            "I hope that you are going to have a great experience using Void." + " " +
            "I wish you the best of luck widening your programming knowledge, and exploring something new." + " " +
            "Have fun learning it and welcome to the Void community."
        ), 
        React.createElement("p", null, "— AdvancedAntiSkid from ", React.createElement("a", {href: "https://inventex.dev", style: "display: inline-block"}, "Inventex Innovations"))
    )
)

const Introduction = () => (
    React.createElement("div", null, 
        React.createElement("h2", null, "What is Void?"), 
        React.createElement("p", null, 
            "Void is a virtual-machine-based programing language designed for developers to be able to create clean," + " " + 
            "fast and stable multi-platform applications." + " " +
            "It has has a relatively easy syntax, that follows most of the already existing code conventions." + " " +
            "Void features many utilities that enchant the experience of coding, such as object destruction," + " " + 
            "variable redeclaration, multi-returning, and much more."
        ), 
        React.createElement("h2", null, "Why Void?"), 
        React.createElement("p", null, 
            "Void compiles to bytecode, therefore it allows the application with the same exact code," + " " + 
            "to be ran on all platforms, whilst forward and backward compatibility is guaranteed." + " " + 
            "It has many built-in designs, which makes it much easier to develop enterprise-grade applications."
        ), 
        React.createElement("h2", null, "How to use Void?"), 
        React.createElement("p", null, 
            "Void is designed to satisfy the needs of multiple development paradigms." + " " + 
            "Unlike many production-oriented languages, Void does not force object-oriented programming on you," + " " + 
            "however it is recommended to use in most cases."
        ), 
        React.createElement("h2", null, "Want to know more?"), 
        React.createElement("a", {href: "https://discord.com/invite/HdgnHqqGAW", target: "_blank"}, "Join the discord server"), 
        React.createElement("h2", null, "Want to help the project?"), 
        React.createElement("a", {href: "https://paypal.me/voidlang", target: "_blank"}, "Donate to the Void Project")
    )
)

const DocsShowcase = () => (
    React.createElement("div", null, 
        React.createElement("h2", null, "Showcase"), 
        React.createElement("p", null, 
            "Below are few examples showcasing what Void provides to enchant programming experience."
        ), 
        React.createElement("h3", null, "A Hello World application"), 
        React.createElement(Code, null, 
            highlight(
`void main() {
    println("Hello, World!")
}`
            )
        ), 
        React.createElement("h3", null, "Variable declaration"), 
        React.createElement("p", null, 
            "Below are few examples showcasing what Void provides to enchant programming experience."
        ), 
        React.createElement(Code, null, 
            highlight(
`let value = 100`
            )
        ), 
        React.createElement("p", null, 
            "In case of explicit type definition:"
        ), 
        React.createElement(Code, null, 
            highlight(
`float value = 3.5`
            )
        ), 
        React.createElement("p", null, 
            "As you may notice, semicolons are not required." + " " + 
            "The compiler automatically places them after the end of lines, when it is required." + " " + 
            "This allows the chaining syntax, unlike many in case of many languages."
        ), 
        React.createElement(Code, null, 
            highlight(
`database
    .fetchUser("username")
    .transform(User::from)
    .getOrThrow(err)`
            )
        ), 
        React.createElement("p", null, 
            "In case of putting multiple statements in one line," + " " + 
            "you can separate them with putting a semicolon between them."
        ), 
        React.createElement(Code, null, 
            highlight(
`int f = 0; float f = 10.0`
            )
        ), 
        React.createElement("h3", null, "Variable redeclaration"), 
        React.createElement("p", null, 
            "Normally languages doesn't let you declare variables twice," + " " + 
            "but as for some other languages such as Void, lets you to do that."
        ), 
        React.createElement("p", null, 
            "This is becuase in many cases you need to swap between variable types for a value," + " " + 
            "and having too much variables for a single value," + " " + 
            "or having long lines of type conversion is both considered a bad practice."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`// initially, the type of \`balance\` is an integer
let balance = database
    .getUser("username")
    .getBalance()
    
// secondly, via redeclaration, the type is now string
let balance = $"{balance} USD"`
            )
        ), 
        React.createElement("h3", null, "Multi-returning"), 
        React.createElement("p", null, 
            "Void lets you have methods return multiple variables at once." + " " +
            "This allows you to have more simple codes," + " " + 
            "without the need of making structs holding multiple values for return."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`// simplified code
(int, string) fetchURL(string url) {
    return (404, "Not found")
}`
            )
        ), 
        React.createElement("p", null, 
            "In the last example, a tuple is returned." + " " + 
            "A tuple can hold values of any length and any type." + " " + 
            "To access these values you can use a feature called tuple destruction."
        ), 
        React.createElement(Code, null, 
            highlight(
`let (code, message) = fetchURL("google.com")
println($"Webserver responded with {code} status code")`
            )
        ), 
        React.createElement("p", null, 
            "You can also access these values without destructing the tuple." + " " + 
            "You need to specify the index of the tuple you want to retrieve."
        ), 
        React.createElement(Code, null, 
            highlight(
`let response = fetchURL("google.com")
let code = response.0
let message = response.1`
            )
        ), 
        React.createElement("p", null, 
            "Void allows you to name tuple members." + " " + 
            "Member names are specified inside the method return type declaration."
        ), 
        React.createElement(Code, null, 
            highlight(
`(bool success, string token) 
authenticate(string username, string password) {
    return (true, "Authenticated")
}`
            )
        ), 
        React.createElement("p", null, 
            "In this case, you can access these values by their names."
        ), 
        React.createElement(Code, null, 
            highlight(
`let result = authenticate("admin", "12345")
if (result.success) {
    println("Authenticated")
    println($"Token: {result.token}")
} else {
    println("Invalid credentials")
}`
            )
        ), 
        React.createElement("h3", null, "Primitive types"), 
        React.createElement("p", null, 
            "Void features a wide variety of primitive types."
        ), 
        React.createElement(Code, null, 
            highlight(
`byte, short, int, long, float, double,
bool, char, string`
            )
        ), 
        React.createElement("p", null, 
            "And their unsigned version."
        ), 
        React.createElement(Code, null, 
            highlight(
`ubyte, ushort, uint, ulong, ufloat, udouble`
            )
        ), 
        React.createElement("h3", null, "Simplified number constants"), 
        React.createElement("p", null, 
            "You can specify the types of numbers in the number constant."
        ), 
        React.createElement(Code, null, 
            highlight(
`let byteVal = 30B
let shortVal = 150S
let intVal = 540I
let longVal = 120000L
let floatVal = 3.5F
let doubleVal = 40D`
            )
        ), 
        React.createElement("p", null, 
            "Without type specifier, non-decimal numbers are integers, and decimal numbers are doubles."
        ), 
        React.createElement("h3", null, "Class types"), 
        React.createElement("p", null, 
            "The most high-level one of types is the class type." + " " +
            "It has the capatibility of holding methods, implementations, fileds, and much more."
        ), 
        React.createElement(Code, null, 
            highlight(
`class Car {
    string type
    int speed
    
    void move() {
        println("Moving...")
    }
}`
            )
        ), 
        React.createElement("p", null, 
            "In case of the need of classes, which are only for the purpose of holding values, you can use structs." + " " +
            "Structs are simplified classes with the purpose of holding values."
        ), 
        React.createElement(Code, null, 
            highlight(
`struct Point {
    int x
    int y
}
    
void main() {
    let point = new Point { x: 2, y: 3 }
}`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`void drawPoint(Point point) {
    println($"x: {y}, y: {y}")
}
    
main() {
    // you can use the simplified initializator, 
    // if Void knows the type of the struct
    Point point = { x: -7, y: 0}
    
    drawPoint({ x: 30, y: 40 })
}`
            )
        ), 
        React.createElement("p", null, 
            "You can create classes which only show you what methods they have," + " " + 
            "but they don't have an actual implementations."
        ), 
        React.createElement(Code, null, 
            highlight(
`interface Car {
    void move()
}`
            )
        ), 
        React.createElement("p", null, 
            "These methods are implemented by a class."
        ), 
        React.createElement(Code, null, 
            highlight(
`class Ferrari : Car {
    @Override
    void move() {
        println("Vrooooom...")
    }
}`
            )
        ), 
        React.createElement("p", null, 
            "You can have classes with constant members."
        ), 
        React.createElement(Code, null, 
            highlight(
`enum MimeType {
    PLAIN_TEXT("text/plain"),
    IMAGE("image/png"),
    VIDEO("video/mp4")
    
    string data
    
    MimeType(string data) {
        this.data = data
    }
}`
            )
        ), 
        React.createElement("p", null, 
            "You can decorate classes, fields, methods or code blocks with annotations."
        ), 
        React.createElement(Code, null, 
            highlight(
`@interface Subscribe {
    string event
    bool sync = false
}
    
@Subscribe(event = "playerJoin")
void onPlayerJoin() {
    println("A player has joined the game.");
}`
            )
        ), 
        React.createElement("h3", null, "Access modifiers"), 
        React.createElement("p", null, 
            "Void features two types of access modifier declarations."
        ), 
        React.createElement("p", null, 
            "You can specify access modifiers separately for each methods and fields." + " " +
            "However this is not a good practise, as you are making method declarations" + " " + 
            "much longer by having to put these manually everywhere."
        ), 
        React.createElement(Code, null, 
            highlight(
`public static void foo() {
    println("bar")
}
    
struct Point {
    public int x, y
}`
            )
        ), 
        React.createElement("p", null, 
            "Alternatively, you can use ", React.createElement(Backticks, null, "modifier blocks"), "," + " " + 
            "which allows you to set the visibility modifiers of a section of code."
        ), 
        React.createElement(Code, null, 
            highlight(
`class Entity {
public:
    int posX, posY
    
    int entityId
    
private:
    int health
    
    float stamina
}`
            )
        ), 
        React.createElement("p", null, 
            "Visibility modifiers are ", React.createElement(Backticks, null, "public"), ", ", React.createElement(Backticks, null, "protected"), " and ", React.createElement(Backticks, null, "private"), "."
        ), 
        React.createElement("h3", null, "Object destructuring"), 
        React.createElement("p", null, 
            "You can destructure object members in order to make them more accessible in the code."
        ), 
        React.createElement(Code, null, 
            highlight(
`struct Point {
    int x, y
}`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`let point = new Point { x: 10, y: -2 }
let { x, y } = point
    
println($"Point {x}, {y}")
    
// you don't have to deconstruct 
// all the variables of an object
let { x } = point`
            )
        ), 
        React.createElement("h3", null, "Lambda objects"), 
        React.createElement("p", null, 
            "You can create anonymus functions inside the code. These are also known as lambdas."
        ), 
        React.createElement(Code, null, 
            highlight(
`let foo = |int x| println(x)
foo(123)`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`void bar(|int, int| test) {
    test(2, 3)
}
    
bar(|x, y| println(x * y))`
            )
        ), 
        React.createElement("h3", null, "Default values"), 
        React.createElement("p", null, 
            "Using the ", React.createElement(Backticks, null, "default(Type)"), " function, you can retrieve the default value of the given type."
        ), 
        React.createElement(Code, null, 
            highlight(
`let number = default(int) // 0
let state = default(bool) // false
let car = default(Car) // null`
            )
        ), 
        React.createElement("p", null, 
            "Void features a system, which allows to create custom default values for your own class types." + " " +
            "You should put a ", React.createElement(Backticks, null, "default"), " modifier before the class declaration," + " " + 
            "and a ", React.createElement(Backticks, null, "default()"), " method must be declared as well."
        ), 
        React.createElement(Code, null, 
            highlight(
`default class Credentials {
    string username, password
    
    default() {
        return {
            username: "admin",
            password: "12345"
        }
    }
}`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`// initialize credentials to the default value 
let creds = default(Credentials) 
// { username: "admin", password: "12345" }
    
// you can use the default function without an explicit type, 
// if the variable's type is defined explicitly
Credentials creds = default 
    
// a simplfied syntax is also available
default Credentials creds`
            )
        ), 
        React.createElement("h3", null, "Null-conditional operators"), 
        React.createElement("p", null, 
            "Null-conditional operators provide null-safe access to members." + " " +
            "A ", React.createElement(Backticks, null, "?"), " mark is placed before the instruction to make it null-conditional."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement("h3", null, "Static variables"), 
        React.createElement("p", null, 
            "By default, variables live only in the scope of a method." + " " + 
            "Static variables however provide a way to statically store data in the method," + " " +
            "that is accessible for further method calls."
        ), 
        React.createElement(Code, null, 
            highlight(
`int getIncrementId() {
    static let counter = 0
    return counter++
}`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`void main() {
    getIncrementId()
    getIncrementId()
    getIncrementId()
}`
            )
        ), 
        React.createElement(Terminal, null, 
            React.createElement("pre", null, 
                "0", React.createElement("br", null), 
                "1", React.createElement("br", null), 
                "2"
            )
        ), 
        React.createElement("h3", null, "Enchanted switch"), 
        React.createElement("p", null, 
            "In Void you can use the old switch syntax."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement("p", null, 
            "However in most cases, this old design forces us to write a lot of unnecessary code," + " " + 
            "such as always having to write \"break\" after each cases." + " " +
            "Void's echanted switch allows you to simplify switch blocks and use them as direct expressions."
        ), 
        React.createElement(Code, null, 
            highlight(
`enum Status {
    SUCCESS,
    FAILED,
    UNKNOWN
}`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement("h3", null, "Blocks as expressions"), 
        React.createElement("p", null, 
            "You can use code blocks as expressions, including loops and switches."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement("h3", null, "Method pre-processing"), 
        React.createElement("p", null, 
            "Void allows you to merge an instruction with the return keyword." + " " + 
            "Therefore you don't need two extra lines to do a negated method guard."
        ), 
        React.createElement(Code, null, 
            highlight(
`// previously you had to use 
// two lines of code to return
void handleCommand(Player p, String command) {
    if (!p.hasPermission("use")) {
        p.sendMessage("no perms")
        return
    }
    // handle the command
}`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`// Void's syntax allows you to merge 
// these two lines together
if (!p.hasPermission("use"))
    return p.sendMessage("no perms")
// note that handleCommand returns void, 
// so there are no conflicts returning something.
// the return value of p.sendMessage 
// (assuming it has one) is ignored`
            )
        ), 
        React.createElement("h3", null, "Method post-processing"), 
        React.createElement("p", null, 
            "In Void, you can queue post tasks for the method," + " " + 
            "that are going to be executed, when the method returns." + " " +
            "This can be used to prevent duplicating instructions whenever returning."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement("p", null, 
            "In Void, you can replace these duplicates using the ", React.createElement(Backticks, null, "defer"), " keyword." + " " + 
            "Deferred instructions will be executed whenever the method returns."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement("h3", null, "Conditional variables"), 
        React.createElement("p", null, 
            "Conditional variables are local variables that only exist in the scope of the condition." + " " + 
            "This prevents keeping unused object in the memory, and unnecessary variable name reservation."
        ), 
        React.createElement(Code, null, 
            highlight(
`// previously you had to 
// code something like this
let created = createFolder("myFolder")
if (!created)
    return error`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`// Void allows you to simplify this code 
// the following way
if (let created = createFolder("folder"); !created)
    return error`
            )
        ), 
        React.createElement("p", null, 
            "When checking the isntance of objects, in older code practices," + " " + 
            "you had to first check the instance, then manually cast the value to the new type."
        ), 
        React.createElement(Code, null, 
            highlight(
`if (animal is Parrot) {
    let parrot = (Parrot) animal
    parrot.fly()
}`
            )
        ), 
        React.createElement("p", null, 
            "However this code requires us to write an extra line of code and manually cast the value."
        ), 
        React.createElement(Code, null, 
            highlight(
`if (animal is Parrot parrot) 
    parrot.fly()`
            )
        ), 
        React.createElement("h3", null, "Labels"), 
        React.createElement("p", null, 
            "You can name certain parts of code in order to allow jumps in scopes and nested loops."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`// you can put labels to non-blocks as well
// this example shows a loop jump to a section
hello:
doSomething()
if (condition)
    goto hello`
            )
        ), 
        React.createElement("h3", null, "Multithreading"), 
        React.createElement("p", null, 
            "Void features an async value retrieval system. In other programming languages," + " " + 
            "you might have seen these ad promises, tasks or futures."
        ), 
        React.createElement(Code, null, 
            highlight(
`Future<User> getUser() {
    return Future.completed(myUser)
}
    
let user = getUser().get()`
            )
        ), 
        React.createElement("p", null, 
            "Although Void lets you to explicitly declare future types," + " " + 
            "you should rather use the ", React.createElement(Backticks, null, "async/await"), " syntax." + " " +
            "This automatically wraps the return type to be a Future, and calls ", React.createElement(Backticks, null, "get()"), "."
        ), 
        React.createElement(Code, null, 
            highlight(
`async User getUser() {
    return myUser
}
    
let user = await getUser()`
            )
        ), 
        React.createElement("p", null, 
            "You can create threads as well and have full control over them."
        ), 
        React.createElement(Code, null, 
            highlight(
`let task = || println("hello")
    
let thread = new Thread(task)
    .setName("my-thread")
    .setPriority(0)
    
thread.start()`
            )
        ), 
        React.createElement("h3", null, "JSON in code"), 
        React.createElement("p", null, 
            "Void has a built-in JSON serializer, which allows you to directly" + " " + 
            "map Void objects to JSON and vice versa."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`let json = Json.serialize(entity)
println($"Data: {json}")`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`// string to object
let data = File.readText("data.json")`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`// by default, json is serialized to 
// Void's built in json tree
let object = Json.deserialize(data)`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`struct User {
    string name
    int userId
}
    
// you can specify a class type as well, 
// to directly map to an object
let user = Json.deserialize<User>(data)
println($"Welcome, {user.name}")`
            )
        ), 
        React.createElement("h3", null, "HTML in code"), 
        React.createElement("p", null, 
            "Void lets you have HTML code inside source code." + " " + 
            "By default, tags are mapped with Void's built-in tag system, however this can be extended."
        ), 
        React.createElement(Code, null, 
            highlight(
`let page = @Html {
    <div class="container">
        <h1>Hello, World</h1>
    </div>
}`
            )
        ), 
        React.createElement("h3", null, "Bytecode in code"), 
        React.createElement("p", null, 
            "Void features direct bytecode instructions to be placed inside the source code."
        ), 
        React.createElement(Code, null, 
            highlight(
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
    
main() {
    // the value of "test" will be 100
    let test = getSomeMagicValue()
}`
            )
        ), 
        
        React.createElement("h3", null, "Interaction with native code"), 
        React.createElement("p", null, 
            "Void allows you to call native library methods." + " " + 
            "It also has a framework that makes it possible to interace with Void from native context."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement(Code, null, 
            highlight(
`// you can also link native 
// methods of different signature
@Link("library.dll")
@NativeTarget("bar")
native void foo(@NativeParam("int") int a)`
            )
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement("h3", null, "Dynamic native implementation loading"), 
        React.createElement(Code, null, 
            highlight(
`let library = new NativeLibrary()
    .target(typeof(object))
    
library.load()`
            )
        ), 
        React.createElement("h3", null, "Creating an HTTP server"), 
        React.createElement("p", null, 
            "Void's built-in http module allows you to create efficient web servers with the express-js design."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        )
    )
)

const Variables = () => (
    React.createElement("div", null, 
        React.createElement("h2", null, "Variables"), 
        React.createElement("p", null, 
            "Variables in void are scoped temporary value holders, which may be mutable or immutable." + " " +
            "Variables are declared using the ", React.createElement(Backticks, null, "let"), " keyword, followed by the name of the variable."
        ), 
        React.createElement(Code, null, 
            highlight(
`let x = 100
let y = 200`
            )
        ), 
        React.createElement("h3", null, "Explicit type declaration"), 
        React.createElement("p", null, 
            "Although Void ensures strong typing, when using the ", React.createElement(Backticks, null, "let"), " keyword, you do not need to manually" + " " +
            "specify the type of the variable, as Void automatically detects them."
        ), 
        React.createElement("p", null, 
            "Explicit variable type declaration is also possible, in case you don't want to initialize the variable on declaration." + " " +
            "Here you ", React.createElement("strong", null, "must"), " specify the type of the variable, because you do not provide any information to Void" + " " + 
            "that what values you are willing to store in it."
        ), 
        React.createElement(Code, null, 
            highlight(
`int x
int y`
            )
        ), 
        React.createElement("p", null, 
            "Here you can see that the variables ", React.createElement(Backticks, null, "x"), " and ", React.createElement(Backticks, null, "y"), " are now declared, they exist" + " " +
            "in the Void program, they are signed integers and they don't have a value by default." 
        ), 
        React.createElement("p", null, 
            "You could also initialize explicitly typed variables, but it is not recommended. User ", React.createElement(Backticks, null, "let"), " instead."
        ), 
        React.createElement(Code, null, 
            highlight(
`int x = 30
int y = 50`
            )
        ), 
        React.createElement("h3", null, "Mutability and immutability"), 
        React.createElement("p", null, 
            "Variables are either mutable or immutable value holders in the code." + " " +
            "Immutable variables can be only assigned once, mutable variables may change during runtime."
        ), 
        React.createElement(Code, null, 
            highlight(
`void main() {
    let x = 100
    println($"value of x is: {x}")
    x = 200
    println($"value of x is {x}")
}`
            )
        ), 
        React.createElement(Terminal, null, 
            React.createElement("pre", null, 
                "value of x is 100", React.createElement("br", null), 
                "value of x is 200"
            )
        ), 
        React.createElement("p", null, 
            "In Void, variables are mutable by default. To create immutable variables, you need to need to use",  
            React.createElement(Backticks, null, "final"), " instead of ", React.createElement(Backticks, null, "let"), "."
        ), 
        React.createElement(Code, null, 
            highlight(
`void main() {
    final x = 100
    x = 150
}`
            )
        ), 
        React.createElement(Terminal, null, 
            React.createElement("pre", null, 
                "error[E069]: cannot assign twice to immutable variable `x`", React.createElement("br", null), 
                React.createElement("pre", null, " --> src/Main.vs:3:5"), React.createElement("br", null), 
                React.createElement("pre", null, "  |"), React.createElement("br", null), 
                React.createElement("pre", null, "2 |    final x = 100"), React.createElement("br", null), 
                React.createElement("pre", null, "  |          |"), React.createElement("br", null), 
                React.createElement("pre", null, "  |          first assigment to `x`"), React.createElement("br", null), 
                React.createElement("pre", null, "  |          help: consider making this varible mutable: `let x`"), React.createElement("br", null), 
                React.createElement("pre", null, "3 |    x = 150"), React.createElement("br", null), 
                React.createElement("pre", null, "  |    ^^^^^^^ cannot assign twice to immutable variable")
            )
        ), 
        React.createElement("h3", null, "Variable redeclaration"), 
        React.createElement("p", null, 
            "Normally, you can only assign values to a variable of the same type." + " " +
            "However, in production you may need to use the same value of the same variable, but" + " " + 
            "in a different type."
        ), 
        React.createElement("p", null, 
            "Normally languages doesn't let you declare variables twice," + " " + 
            "but as for some other languages such as Void, lets you to do that."
        ), 
        React.createElement("p", null, 
            "This is becuase in many cases you need to swap between variable types for a value," + " " + 
            "and having too much variables for a single value," + " " + 
            "or having long lines of type conversion is both considered a bad practice."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement("p", null, 
            "These examples are either way overcompilcated or they need duplicate variables to work with." + " " +
            "This can be simplified the following way."
        ), 
        React.createElement(Code, null, 
            highlight(
`// initially, the type of \`balance\` is an integer
let balance = database
    .getUser("username")
    .getBalance()
    
// secondly, via redeclaration, the type is now string
let balance = $"{balance} USD"`
            )
        ), 
        React.createElement("h3", null, "Static variables"), 
        React.createElement("p", null, 
            "By default, variables live only in the scope of a method." + " " + 
            "Static variables however provide a way to statically store data in the method," + " " +
            "that is accessible for further method calls."
        ), 
        React.createElement(Code, null, 
            highlight(
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
            )
        ), 
        React.createElement(Terminal, null, 
            React.createElement("pre", null, 
                "0", React.createElement("br", null), 
                "1", React.createElement("br", null), 
                "2"
            )
        ), 
        React.createElement("h3", null, "Constants"), 
        React.createElement("p", null, 
            "Constants are similar to immutable variables, however they are resolved at compile-time, not run-time." + " " +
            "They can also only hold values of constant literals, such as numbers, strings, and booleans."
        ), 
        React.createElement(Code, null, 
            highlight(
`const ENTITY_HEIGHT = 100
const RENDER_DISTANCE = 150
`
            )
        ), 
        React.createElement("p", null, 
            "Unlike variables, constants can be placed outside methods, or even outside classes."
        )
    )
)

page = () => (
    React.createElement("div", {class: "not-found"}, 
        React.createElement("div", {class: "wrapper"}, 
            React.createElement("h1", {class: "button"}, "Error 404"), 
            React.createElement("p", null, "This page could not be found")
        )
    )
)

app.register('404', page);
page = () => (
    React.createElement("div", {style: "docs-parent"}, 
        React.createElement(Nav, null), 
        React.createElement("div", {class: "docs"}, 
            React.createElement("div", {class: "sidebar"}, 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-introduction", onClick: togglePage}, React.createElement("strong", null, "1. "), "Introduction"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-foreword", onClick: togglePage}, React.createElement("strong", null, "1.1. "), "Foreword")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-showcase", onClick: togglePage}, React.createElement("strong", null, "1.2. "), "Showcase")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-getting-started", onClick: togglePage}, React.createElement("strong", null, "2. "), "Getting started"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-installation", onClick: togglePage}, React.createElement("strong", null, "2.1. "), "Installation")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-hello-world", onClick: togglePage}, React.createElement("strong", null, "2.2. "), "Hello World")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-void-basics", onClick: togglePage}, React.createElement("strong", null, "3. "), "Void basics"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-variables", onClick: togglePage}, React.createElement("strong", null, "3.1. "), "Variables")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-primitive-types", onClick: togglePage}, React.createElement("strong", null, "3.2. "), "Primitive types")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-methods", onClick: togglePage}, React.createElement("strong", null, "3.3. "), "Methods")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-comments", onClick: togglePage}, React.createElement("strong", null, "3.4. "), "Comments")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-control-flow", onClick: togglePage}, React.createElement("strong", null, "4. "), "Control flow"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-if-statement", onClick: togglePage}, React.createElement("strong", null, "4.1. "), "If statements")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-for-loops", onClick: togglePage}, React.createElement("strong", null, "4.2. "), "For loops")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-while-loops", onClick: togglePage}, React.createElement("strong", null, "4.3. "), "While loops")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-switch-blocks", onClick: togglePage}, React.createElement("strong", null, "4.4. "), "Switch blocks")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-custom-types", onClick: togglePage}, React.createElement("strong", null, "5. "), "Custom types"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-tuples", onClick: togglePage}, React.createElement("strong", null, "5.1. "), "Tuples")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-classes", onClick: togglePage}, React.createElement("strong", null, "5.2. "), "Classes")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-structs", onClick: togglePage}, React.createElement("strong", null, "5.3. "), "Structs")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-itnerfaces", onClick: togglePage}, React.createElement("strong", null, "5.4. "), "Interfaces")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-enums", onClick: togglePage}, React.createElement("strong", null, "5.5. "), "Enums")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-more-on-methods", onClick: togglePage}, React.createElement("strong", null, "6. "), "More on methods"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-multi-returns", onClick: togglePage}, React.createElement("strong", null, "6.1. "), "Multi-returns")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-pre-processing", onClick: togglePage}, React.createElement("strong", null, "6.2. "), "Pre-processing")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-post-processing", onClick: togglePage}, React.createElement("strong", null, "6.3. "), "Post-processing")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-data-handling", onClick: togglePage}, React.createElement("strong", null, "6. "), "Data handling"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-lists", onClick: togglePage}, React.createElement("strong", null, "6.1. "), "Lists")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-streams", onClick: togglePage}, React.createElement("strong", null, "6.2. "), "Streams")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-maps", onClick: togglePage}, React.createElement("strong", null, "6.3. "), "Maps")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-option", onClick: togglePage}, React.createElement("strong", null, "6.4. "), "Option")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-result", onClick: togglePage}, React.createElement("strong", null, "6.5. "), "Result")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-lambda-functions", onClick: togglePage}, React.createElement("strong", null, "7. "), "Lambda functions"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-local-lambdas", onClick: togglePage}, React.createElement("strong", null, "7.1. "), "Local lambdas")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-lambda-parameters", onClick: togglePage}, React.createElement("strong", null, "7.2. "), "Lambda parameters")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-generics", onClick: togglePage}, React.createElement("strong", null, "8. "), "Generics"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-generic-declaration", onClick: togglePage}, React.createElement("strong", null, "8.1. "), "Generic declaration")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-generic-usage", onClick: togglePage}, React.createElement("strong", null, "8.2. "), "Generic usage")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-default-generics", onClick: togglePage}, React.createElement("strong", null, "8.3. "), "Default generics")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-naming-conventions", onClick: togglePage}, React.createElement("strong", null, "9. "), "Naming conventions"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-variables-and-names", onClick: togglePage}, React.createElement("strong", null, "9.1. "), "Variables and methods")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-naming-types", onClick: togglePage}, React.createElement("strong", null, "9.2. "), "Types")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-naming-constants", onClick: togglePage}, React.createElement("strong", null, "9.3. "), "Constants")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-file-handling", onClick: togglePage}, React.createElement("strong", null, "10. "), "File handling"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-simple-file-operations", onClick: togglePage}, React.createElement("strong", null, "10.1. "), "Simple file operations")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-file-streaming"}, React.createElement("strong", null, "10.2. "), "File streaming")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-multithreading", onClick: togglePage}, React.createElement("strong", null, "11. "), "Multithreading"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-threads", onClick: togglePage}, React.createElement("strong", null, "11.1. "), "Threads")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-async-functions", onClick: togglePage}, React.createElement("strong", null, "11.2. "), "Async functions")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-mutex-locks", onClick: togglePage}, React.createElement("strong", null, "11.3. "), "Mutex locks")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-networking", onClick: togglePage}, React.createElement("strong", null, "12. "), "Networking"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-sockets", onClick: togglePage}, React.createElement("strong", null, "12.1. "), "Sockets")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-websockets", onClick: togglePage}, React.createElement("strong", null, "12.2. "), "WebSockets")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-http-requests", onClick: togglePage}, React.createElement("strong", null, "12.3. "), "HTTP requests")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-http-servers", onClick: togglePage}, React.createElement("strong", null, "12.4. "), "HTTP servers")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-json-parsing", onClick: togglePage}, React.createElement("strong", null, "13. "), "Json parsing"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-json-in-code", onClick: togglePage}, React.createElement("strong", null, "13.1. "), "Json in code")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-json-serialization", onClick: togglePage}, React.createElement("strong", null, "13.2. "), "Json serialization")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-json-deserialization", onClick: togglePage}, React.createElement("strong", null, "13.3. "), "Json deserialization")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-math", onClick: togglePage}, React.createElement("strong", null, "14. "), "Math"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-math-functions", onClick: togglePage}, React.createElement("strong", null, "14.1. "), "Math functions")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-vectors", onClick: togglePage}, React.createElement("strong", null, "14.2. "), "Vectors")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-materices", onClick: togglePage}, React.createElement("strong", null, "14.3. "), "Matrices")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-reflection-api", onClick: togglePage}, React.createElement("strong", null, "15. "), "Reflection API"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-fetching-types", onClick: togglePage}, React.createElement("strong", null, "15.1. "), "Fetching types")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-fields-and-methods", onClick: togglePage}, React.createElement("strong", null, "15.2. "), "Fields and methods")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-dynamic-code-loading", onClick: togglePage}, React.createElement("strong", null, "15.3. "), "Dynamic code loading")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-instrumentation-api", onClick: togglePage}, React.createElement("strong", null, "16. "), "Instrumentation API"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-agent-attaching", onClick: togglePage}, React.createElement("strong", null, "16.1. "), "Agent attaching")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-overriding-definitions", onClick: togglePage}, React.createElement("strong", null, "16.2. "), "Overriding definitions")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-html-parsing", onClick: togglePage}, React.createElement("strong", null, "17. "), "HTML parsing"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-html-in-code", onClick: togglePage}, React.createElement("strong", null, "17.1. "), "HTML in code")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-custom-html-parsing", onClick: togglePage}, React.createElement("strong", null, "17.2. "), "Custom HTML parsing")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-handling-natives", onClick: togglePage}, React.createElement("strong", null, "18. "), "Handling natives"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-linking-native-methods", onClick: togglePage}, React.createElement("strong", null, "18.1. "), "Linking native methods")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-dynamic-native-linking", onClick: togglePage}, React.createElement("strong", null, "18.2. "), "Dynamic native linking")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-void-bytecode", onClick: togglePage}, React.createElement("strong", null, "19. "), "Void Bytecode"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-bytecode-in-code", onClick: togglePage}, React.createElement("strong", null, "19.1. "), "Bytecode in code")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-instructions", onClick: togglePage}, React.createElement("strong", null, "19.2. "), "Instructions")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-bytecode-examples", onClick: togglePage}, React.createElement("strong", null, "19.3. "), "Bytecode examples")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", {id: "docs-about-void", onClick: togglePage}, React.createElement("strong", null, "20. "), "About Void"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-license", onClick: togglePage}, React.createElement("strong", null, "20.1. "), "License")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-contributing", onClick: togglePage}, React.createElement("strong", null, "20.2. "), "Contributing")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", {id: "docs-credits", onClick: togglePage}, React.createElement("strong", null, "20.3. "), "Credits")
                    )
                )
            ), 
            React.createElement("div", {class: "content"}, 
                React.createElement("div", {class: "wrapper", id: "docs-root"}, 
                    React.createElement(Introduction, null)
                )
            )
        )
    )
)
const documents = {
    'introduction': Introduction,
    'foreword': Foreword,
    'showcase': DocsShowcase,
    'getting-started': GettingStarted,
    'installation': Installation,
    'hello-world': HelloWorld,
    'variables': Variables,
}
let docsRoot
let lastTopic
window.addEventListener('load', () => { 
    docsRoot = document.getElementById('docs-root') 
    lastTopic = document.getElementById('docs-introduction')
    lastTopic.classList.add('active')
})
const togglePage = (page) => {
    if (lastTopic)
        lastTopic.classList.remove('active')
    lastTopic = page.handle()
    lastTopic.classList.add('active')
    const id = page.attributes.id.substring('docs-'.length)
    
    const component = (documents[id] || NotImplemented)()
    docsRoot.innerHTML = component.parse()
}

app.register('docs', page);
page = () => (
    React.createElement("div", null, 
        React.createElement(Nav, null), 
        React.createElement(Main, null), 
        React.createElement(Showcase, null), 
        React.createElement(GetStarted, null), 
        React.createElement(Contact, null), 
        React.createElement(Footer, null)
    )
);

app.register('index', page);
