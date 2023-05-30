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
                React.createElement("h1", null, "Void")
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
    React.createElement("div", null, 
        React.createElement(Nav, null), 
        React.createElement("div", {class: "docs"}, 
            React.createElement("div", {class: "sidebar"}, 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "1. "), "Introduction")
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "2. "), "Getting started"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "2.1. "), "Installation")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "2.2. "), "Hello World")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "3. "), "Void basics"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "3.1. "), "Variables")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "3.2. "), "Primitive types")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "3.3. "), "Methods")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "3.4. "), "Comments")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "4. "), "Control flow"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "4.1. "), "If statements")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "4.2. "), "For loops")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "4.3. "), "While loops")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "4.4. "), "Switch blocks")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "5. "), "Custom types"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "5.1. "), "Tuples")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "5.2. "), "Classes")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "5.3. "), "Structs")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "5.4. "), "Interfaces")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "5.5. "), "Enums")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "6. "), "More on methods"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "6.1. "), "Multi-returns")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "6.2. "), "Pre-processing")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "6.3. "), "Post-processing")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "6. "), "Data handling"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "6.1. "), "Lists")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "6.2. "), "Streams")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "6.3. "), "Maps")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "6.4. "), "Option")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "6.5. "), "Result")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "7. "), "Lambda functions"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "7.1. "), "Local lambdas")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "7.2. "), "Lambda parameters")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "8. "), "Generics"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "8.1. "), "Generic declaration")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "8.2. "), "Generic usage")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "8.3. "), "Default generics")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "9. "), "Naming conventions"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "9.1. "), "Variables and methods")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "9.2. "), "Types")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "9.3. "), "Constants")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "10. "), "File handling"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "10.1. "), "Simple file operations")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "10.2. "), "File streaming")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "10.3. "), "Json deserialization")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "11. "), "Multithreading"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "11.1. "), "Threads")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "11.2. "), "Async functions")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "11.3. "), "Mutex locks")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "12. "), "Networking"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "12.1. "), "Sockets")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "12.2. "), "WebSockets")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "12.3. "), "HTTP requests")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "12.4. "), "HTTP servers")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "13. "), "Json parsing"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "13.1. "), "JSON in code")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "13.2. "), "Json serialization")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "13.3. "), "Json deserialization")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "14. "), "Math"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "14.1. "), "Math functions")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "14.2. "), "Vectors")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "14.3. "), "Matrices")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "15. "), "Reflection API"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "15.1. "), "Fetching types")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "15.2. "), "Fields and methods")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "15.3. "), "Dynamic code loading")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "16. "), "Instrumentation API"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "16.1. "), "Agent attaching")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "16.2. "), "Overriding definitions")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "17. "), "HTML parsing"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "17.1. "), "HTML in code")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "17.2. "), "Custom HTML parsing")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "18. "), "Handling natives"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "18.1. "), "Linking native methods")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "18.2. "), "Dynamic native linking")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "19. "), "Void Bytecode"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "19.1. "), "Bytecode in code")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "19.2. "), "Instructions")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "19.3. "), "Bytecode examples")
                    )
                ), 
                React.createElement("div", {class: "category"}, 
                    React.createElement("h1", null, React.createElement("strong", null, "20. "), "About Void"), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "20.1. "), "License")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "20.2. "), "Contributing")
                    ), 
                    React.createElement("div", {class: "section"}, 
                        React.createElement("h2", null, React.createElement("strong", null, "20.3. "), "Credits")
                    )
                )
            ), 
            React.createElement("div", {class: "content"}, 
                "def"
            )
        )
    )
)

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
