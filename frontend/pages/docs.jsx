page = () => (
    <div style="docs-parent">
        <Nav/>
        <div class="docs">
            <div class="sidebar">
                <div class="category">
                    <h1 id="docs-introduction" onClick={togglePage}><strong>1. </strong>Introduction</h1>
                    <div class="section">
                        <h2 id="docs-foreword" onClick={togglePage}><strong>1.1. </strong>Foreword</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-showcase" onClick={togglePage}><strong>1.2. </strong>Showcase</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-getting-started" onClick={togglePage}><strong>2. </strong>Getting started</h1>
                    <div class="section">
                        <h2 id="docs-installation" onClick={togglePage}><strong>2.1. </strong>Installation</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-hello-world" onClick={togglePage}><strong>2.2. </strong>Hello World</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-void-basics" onClick={togglePage}><strong>3. </strong>Void basics</h1>
                    <div class="section">
                        <h2 id="docs-variables" onClick={togglePage}><strong>3.1. </strong>Variables</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-primitive-types" onClick={togglePage}><strong>3.2. </strong>Primitive types</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-methods" onClick={togglePage}><strong>3.3. </strong>Methods</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-comments" onClick={togglePage}><strong>3.4. </strong>Comments</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-control-flow" onClick={togglePage}><strong>4. </strong>Control flow</h1>
                    <div class="section">
                        <h2 id="docs-if-statement" onClick={togglePage}><strong>4.1. </strong>If statements</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-for-loops" onClick={togglePage}><strong>4.2. </strong>For loops</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-while-loops" onClick={togglePage}><strong>4.3. </strong>While loops</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-switch-blocks" onClick={togglePage}><strong>4.4. </strong>Switch blocks</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-custom-types" onClick={togglePage}><strong>5. </strong>Custom types</h1>
                    <div class="section">
                        <h2 id="docs-tuples" onClick={togglePage}><strong>5.1. </strong>Tuples</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-classes" onClick={togglePage}><strong>5.2. </strong>Classes</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-structs" onClick={togglePage}><strong>5.3. </strong>Structs</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-itnerfaces" onClick={togglePage}><strong>5.4. </strong>Interfaces</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-enums" onClick={togglePage}><strong>5.5. </strong>Enums</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-more-on-methods" onClick={togglePage}><strong>6. </strong>More on methods</h1>
                    <div class="section">
                        <h2 id="docs-multi-returns" onClick={togglePage}><strong>6.1. </strong>Multi-returns</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-pre-processing" onClick={togglePage}><strong>6.2. </strong>Pre-processing</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-post-processing" onClick={togglePage}><strong>6.3. </strong>Post-processing</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-data-handling" onClick={togglePage}><strong>6. </strong>Data handling</h1>
                    <div class="section">
                        <h2 id="docs-lists" onClick={togglePage}><strong>6.1. </strong>Lists</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-streams" onClick={togglePage}><strong>6.2. </strong>Streams</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-maps" onClick={togglePage}><strong>6.3. </strong>Maps</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-option" onClick={togglePage}><strong>6.4. </strong>Option</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-result" onClick={togglePage}><strong>6.5. </strong>Result</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-lambda-functions" onClick={togglePage}><strong>7. </strong>Lambda functions</h1>
                    <div class="section">
                        <h2 id="docs-local-lambdas" onClick={togglePage}><strong>7.1. </strong>Local lambdas</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-lambda-parameters" onClick={togglePage}><strong>7.2. </strong>Lambda parameters</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-generics" onClick={togglePage}><strong>8. </strong>Generics</h1>
                    <div class="section">
                        <h2 id="docs-generic-declaration" onClick={togglePage}><strong>8.1. </strong>Generic declaration</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-generic-usage" onClick={togglePage}><strong>8.2. </strong>Generic usage</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-default-generics" onClick={togglePage}><strong>8.3. </strong>Default generics</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-naming-conventions" onClick={togglePage}><strong>9. </strong>Naming conventions</h1>
                    <div class="section">
                        <h2 id="docs-variables-and-names" onClick={togglePage}><strong>9.1. </strong>Variables and methods</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-naming-types" onClick={togglePage}><strong>9.2. </strong>Types</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-naming-constants" onClick={togglePage}><strong>9.3. </strong>Constants</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-file-handling" onClick={togglePage}><strong>10. </strong>File handling</h1>
                    <div class="section">
                        <h2 id="docs-simple-file-operations" onClick={togglePage}><strong>10.1. </strong>Simple file operations</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-file-streaming"><strong>10.2. </strong>File streaming</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-multithreading" onClick={togglePage}><strong>11. </strong>Multithreading</h1>
                    <div class="section">
                        <h2 id="docs-threads" onClick={togglePage}><strong>11.1. </strong>Threads</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-async-functions" onClick={togglePage}><strong>11.2. </strong>Async functions</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-mutex-locks" onClick={togglePage}><strong>11.3. </strong>Mutex locks</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-networking" onClick={togglePage}><strong>12. </strong>Networking</h1>
                    <div class="section">
                        <h2 id="docs-sockets" onClick={togglePage}><strong>12.1. </strong>Sockets</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-websockets" onClick={togglePage}><strong>12.2. </strong>WebSockets</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-http-requests" onClick={togglePage}><strong>12.3. </strong>HTTP requests</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-http-servers" onClick={togglePage}><strong>12.4. </strong>HTTP servers</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-json-parsing" onClick={togglePage}><strong>13. </strong>Json parsing</h1>
                    <div class="section">
                        <h2 id="docs-json-in-code" onClick={togglePage}><strong>13.1. </strong>Json in code</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-json-serialization" onClick={togglePage}><strong>13.2. </strong>Json serialization</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-json-deserialization" onClick={togglePage}><strong>13.3. </strong>Json deserialization</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-math" onClick={togglePage}><strong>14. </strong>Math</h1>
                    <div class="section">
                        <h2 id="docs-math-functions" onClick={togglePage}><strong>14.1. </strong>Math functions</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-vectors" onClick={togglePage}><strong>14.2. </strong>Vectors</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-materices" onClick={togglePage}><strong>14.3. </strong>Matrices</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-reflection-api" onClick={togglePage}><strong>15. </strong>Reflection API</h1>
                    <div class="section">
                        <h2 id="docs-fetching-types" onClick={togglePage}><strong>15.1. </strong>Fetching types</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-fields-and-methods" onClick={togglePage}><strong>15.2. </strong>Fields and methods</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-dynamic-code-loading" onClick={togglePage}><strong>15.3. </strong>Dynamic code loading</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-instrumentation-api" onClick={togglePage}><strong>16. </strong>Instrumentation API</h1>
                    <div class="section">
                        <h2 id="docs-agent-attaching" onClick={togglePage}><strong>16.1. </strong>Agent attaching</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-overriding-definitions" onClick={togglePage}><strong>16.2. </strong>Overriding definitions</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-html-parsing" onClick={togglePage}><strong>17. </strong>HTML parsing</h1>
                    <div class="section">
                        <h2 id="docs-html-in-code" onClick={togglePage}><strong>17.1. </strong>HTML in code</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-custom-html-parsing" onClick={togglePage}><strong>17.2. </strong>Custom HTML parsing</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-handling-natives" onClick={togglePage}><strong>18. </strong>Handling natives</h1>
                    <div class="section">
                        <h2 id="docs-linking-native-methods" onClick={togglePage}><strong>18.1. </strong>Linking native methods</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-dynamic-native-linking" onClick={togglePage}><strong>18.2. </strong>Dynamic native linking</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-void-bytecode" onClick={togglePage}><strong>19. </strong>Void Bytecode</h1>
                    <div class="section">
                        <h2 id="docs-bytecode-in-code" onClick={togglePage}><strong>19.1. </strong>Bytecode in code</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-instructions" onClick={togglePage}><strong>19.2. </strong>Instructions</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-bytecode-examples" onClick={togglePage}><strong>19.3. </strong>Bytecode examples</h2>
                    </div>
                </div>
                <div class="category">
                    <h1 id="docs-about-void" onClick={togglePage}><strong>20. </strong>About Void</h1>
                    <div class="section">
                        <h2 id="docs-license" onClick={togglePage}><strong>20.1. </strong>License</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-contributing" onClick={togglePage}><strong>20.2. </strong>Contributing</h2>
                    </div>
                    <div class="section">
                        <h2 id="docs-credits" onClick={togglePage}><strong>20.3. </strong>Credits</h2>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="wrapper" id="docs-root">
                    <Introduction/>
                </div>
            </div>
        </div>
    </div>
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
