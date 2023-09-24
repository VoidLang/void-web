const sourceMapping = {
    'async': {
        'Future': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/async/Future.vs'
    },
    'collection': {
        'Iterable': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/collection/Interable.vs',
        'Iterator': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/collection/Iterator.vs',
        'List': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/collection/List.vs',
        'Stream': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/collection/Stream.vs',
    },
    'lang': {
        'Console': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/lang/Console.vs',
        'Object': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/lang/Object.vs'
    },
    'platform': {
        'windows': {
            'kernel32': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/platform/windows/kernel32.vs',
        }
    },
    'util': {
        'Option': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/util/Option.vs',
        'Pair': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/util/Pair.vs',
        'Result': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/util/Result.vs'
    },
    'Common': 'https://raw.githubusercontent.com/VoidLang/Void/main/std/Common.vs'
}

let lastClicked

const componentClicked = (component) => {
    const id = component.attributes.id
    const url = component.attributes.url

    fileClicked(component.handle(), id, url)
}

const fileClicked = (element, id, url) => {
    if (element == lastClicked)
        return

    if (lastClicked)
        lastClicked.classList.remove('active')

    element.classList.add('active')
    lastClicked = element

    const item = `src-${id}`
    const cache = localStorage.getItem(item)
    if (cache) 
        return updateCode(cache)

    const http = new XMLHttpRequest();
    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            const code = highlight(http.responseText).parse()
            localStorage.setItem(item, code)
            updateCode(code)
        }
    }
    http.open('GET', url, true);
    http.send();
}

on('load', () => {
    const file = document.getElementsByClassName('file')[0]
    fileClicked(file, 'Future', 'https://raw.githubusercontent.com/VoidLang/Void/main/std/async/Future.vs')
})

const updateCode = (code) => {
    const element = document.getElementById('std-code')
    element.innerHTML = ''
    setTimeout(() => {
        element.innerHTML = code
    }, 1);
}

const getFileHierarchy = () => {
    const sidebar = <div class="sidebar"/>

    for (const name in sourceMapping) {
        const element = handleElement(name, sourceMapping[name])
        sidebar.addNode(element)
    }

    return sidebar
}

const handleElement = (elementName, elementValue) => {
    if (typeof elementValue == 'string')
        return handleFile(elementName, elementValue)
    else
        return handleDirectory(elementName, elementValue)
}

const handleDirectory = (dirName, directory) => {
    const elements = []
    
    for (const name in directory) {
        const element = handleElement(name, directory[name])
        elements.push(element)
    }
    
    return (
        <div class="directory" id={dirName}>
            <p>
                <i class="fa fa-folder"></i>
                {dirName}
            </p>
            { elements }
        </div>
    )
}

const handleFile = (fileName, fileUrl) => {
    return (
        <div class="file" id={fileName} url={fileUrl} onClick={componentClicked}>
            <p>
                <i class="fal fa-file" aria-hidden="true"></i>
                {fileName + '.vs'}
            </p>
        </div>
    )
}

page = () => (
    <div style="std-parent">
        <Nav/>
        <div class="std">
            { getFileHierarchy() }
            <div class="content">
                <div class="wrapper" id="std-root">
                    <div class="code block terminal" id="std-code"></div>
                </div>
            </div>
        </div>
    </div>
)
