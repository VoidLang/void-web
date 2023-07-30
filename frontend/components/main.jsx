const words = [
    "Better",
    "Stable",
    "Faster",
    "Cleaner"
]

const feature = <span id="_feature" style="color: lime;">Better</span>

let wordIndex = 0
let typing = false

const typeTime = 500
const eraseTime = 200
const waitTime = 1500

function typeIn(text) {
    if (typing || !feature.setText)
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
        <div>
            <div class="main">
                <div class="wrapper">
                    <h1>Time To Code {feature}</h1>
                    <p>Explore the powerful features of Void</p>
                </div>
            </div>
            <div class="more">
                <a class="arrows" href="#showcase">
                    <span class="arrow">.</span>
                    <span class="arrow">.</span>
                </a>
            </div>
        </div>
    );
}
