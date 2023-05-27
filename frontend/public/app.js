let app = new App(document.getElementById('root'));
let page = null;
const Button = (text, pro, ski) => {
    console.log(text)
    console.log(pro)
    console.log(ski)
    return (
        React.createElement("div", {class: "button"}, 
            text
        )
    )
}

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
            React.createElement("h2", null, "Made It ", React.createElement("span", {style: "color: lime"}, "Simple")), 
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
    startTyping()
})
const Main = () => (
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
