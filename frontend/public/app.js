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
                    React.createElement("span", {class: "type"}, "void"), " main", React.createElement("span", {class: "light"}, "() {"), React.createElement("br", null), 
                        React.createElement("div", {class: "indent"}), React.createElement("span", {class: "type"}, "let"), " input ", React.createElement("span", {class: "light"}, "="), " ", React.createElement("span", {class: "light"}, "["), React.createElement("span", {class: "string"}, "\"one\""), React.createElement("span", {class: "light"}, ","), " ", React.createElement("span", {class: "string"}, "\"12\""), React.createElement("span", {class: "light"}, ","), " ", React.createElement("span", {class: "string"}, "\"hello\""), React.createElement("span", {class: "light"}, ","), " ", React.createElement("span", {class: "string"}, "\"-7\""), React.createElement("span", {class: "light"}, "]"), React.createElement("br", null), 
                        React.createElement("br", null), 
                        React.createElement("div", {class: "line"}), 
                        React.createElement("div", {class: "indent"}), React.createElement("span", {class: "type"}, "let"), " result ", React.createElement("span", {class: "light"}, "="), " input", React.createElement("br", null), 
                        React.createElement("div", {class: "indent2"}), React.createElement("span", {class: "solid"}, ".stream"), React.createElement("span", {class: "light"}, "()"), React.createElement("br", null), 
                        React.createElement("div", {class: "indent2"}), React.createElement("span", {class: "solid"}, ".filterMap"), React.createElement("span", {class: "light"}, "("), "int", React.createElement("span", {class: "light"}, "::"), "parse", React.createElement("span", {class: "light"}, ")"), React.createElement("br", null), 
                        React.createElement("div", {class: "indent2"}), React.createElement("span", {class: "solid"}, ".sort"), React.createElement("span", {class: "light"}, "("), React.createElement("span", {class: "light"}, "|"), "a", React.createElement("span", {class: "light"}, ","), " b", React.createElement("span", {class: "light"}, "|"), " b ", React.createElement("span", {class: "light"}, "-"), " a", React.createElement("span", {class: "light"}, ")"), React.createElement("br", null), 
                        React.createElement("div", {class: "indent2"}), React.createElement("span", {class: "solid"}, ".collect()"), React.createElement("br", null), 
                        React.createElement("br", null), 
                        React.createElement("div", {class: "line"}), 
                        React.createElement("div", {class: "indent"}), React.createElement("span", {class: "type"}, "let"), " largest ", React.createElement("span", {class: "light"}, "="), " result", React.createElement("br", null), 
                        React.createElement("div", {class: "indent2"}), React.createElement("span", {class: "solid"}, ".get"), React.createElement("span", {class: "light"}, "("), React.createElement("span", {class: "literal"}, "0"), React.createElement("span", {class: "light"}, ")"), React.createElement("br", null), 
                        React.createElement("div", {class: "indent2"}), React.createElement("span", {class: "solid"}, ".unwrap"), React.createElement("span", {class: "light"}, "()"), React.createElement("br", null), 
                        React.createElement("br", null), 
                        React.createElement("div", {class: "line"}), 
                        React.createElement("div", {class: "indent"}), React.createElement("span", {class: "solid"}, "println"), React.createElement("span", {class: "light"}, "("), React.createElement("span", {class: "light"}, "$"), React.createElement("span", {class: "string"}, "\"value: "), React.createElement("span", {class: "literal"}, "{largest}"), React.createElement("span", {class: "string"}, "\""), React.createElement("span", {class: "light"}, ")"), React.createElement("br", null), 
                    React.createElement("span", {class: "light"}, "}")
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
