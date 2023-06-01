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
string balance = String.from(
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
let balance = "{balance} USD"`
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
                    React.createElement("h1", {id: "docs-introduction", onClick: togglePage}, React.createElement("strong", null, "1. "), "Introduction")
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
                        React.createElement("h2", {id: "docs-json-in-code", onClick: togglePage}, React.createElement("strong", null, "13.1. "), "JSON in code")
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
