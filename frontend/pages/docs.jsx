page = () => (
    <div>
        <Nav/>
        <div class="docs">
            <div class="sidebar">
                <div class="category">
                    <h1><strong>1. </strong>Introduction</h1>
                </div>
                <div class="category">
                    <h1><strong>2. </strong>Getting started</h1>
                    <div class="section">
                        <h2><strong>2.1. </strong>Installation</h2>
                    </div>
                    <div class="section">
                        <h2><strong>2.2. </strong>Hello World</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>3. </strong>Void basics</h1>
                    <div class="section">
                        <h2><strong>3.1. </strong>Variables</h2>
                    </div>
                    <div class="section">
                        <h2><strong>3.2. </strong>Primitive types</h2>
                    </div>
                    <div class="section">
                        <h2><strong>3.3. </strong>Methods</h2>
                    </div>
                    <div class="section">
                        <h2><strong>3.4. </strong>Comments</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>4. </strong>Control flow</h1>
                    <div class="section">
                        <h2><strong>4.1. </strong>If statements</h2>
                    </div>
                    <div class="section">
                        <h2><strong>4.2. </strong>For loops</h2>
                    </div>
                    <div class="section">
                        <h2><strong>4.3. </strong>While loops</h2>
                    </div>
                    <div class="section">
                        <h2><strong>4.4. </strong>Switch blocks</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>5. </strong>Custom types</h1>
                    <div class="section">
                        <h2><strong>5.1. </strong>Tuples</h2>
                    </div>
                    <div class="section">
                        <h2><strong>5.2. </strong>Classes</h2>
                    </div>
                    <div class="section">
                        <h2><strong>5.3. </strong>Structs</h2>
                    </div>
                    <div class="section">
                        <h2><strong>5.4. </strong>Interfaces</h2>
                    </div>
                    <div class="section">
                        <h2><strong>5.5. </strong>Enums</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>6. </strong>More on methods</h1>
                    <div class="section">
                        <h2><strong>6.1. </strong>Multi-returns</h2>
                    </div>
                    <div class="section">
                        <h2><strong>6.2. </strong>Pre-processing</h2>
                    </div>
                    <div class="section">
                        <h2><strong>6.3. </strong>Post-processing</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>6. </strong>Data handling</h1>
                    <div class="section">
                        <h2><strong>6.1. </strong>Lists</h2>
                    </div>
                    <div class="section">
                        <h2><strong>6.2. </strong>Streams</h2>
                    </div>
                    <div class="section">
                        <h2><strong>6.3. </strong>Maps</h2>
                    </div>
                    <div class="section">
                        <h2><strong>6.4. </strong>Option</h2>
                    </div>
                    <div class="section">
                        <h2><strong>6.5. </strong>Result</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>7. </strong>Lambda functions</h1>
                    <div class="section">
                        <h2><strong>7.1. </strong>Local lambdas</h2>
                    </div>
                    <div class="section">
                        <h2><strong>7.2. </strong>Lambda parameters</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>8. </strong>Generics</h1>
                    <div class="section">
                        <h2><strong>8.1. </strong>Generic declaration</h2>
                    </div>
                    <div class="section">
                        <h2><strong>8.2. </strong>Generic usage</h2>
                    </div>
                    <div class="section">
                        <h2><strong>8.3. </strong>Default generics</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>9. </strong>Naming conventions</h1>
                    <div class="section">
                        <h2><strong>9.1. </strong>Variables and methods</h2>
                    </div>
                    <div class="section">
                        <h2><strong>9.2. </strong>Types</h2>
                    </div>
                    <div class="section">
                        <h2><strong>9.3. </strong>Constants</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>10. </strong>File handling</h1>
                    <div class="section">
                        <h2><strong>10.1. </strong>Simple file operations</h2>
                    </div>
                    <div class="section">
                        <h2><strong>10.2. </strong>File streaming</h2>
                    </div>
                    <div class="section">
                        <h2><strong>10.3. </strong>Json deserialization</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>11. </strong>Multithreading</h1>
                    <div class="section">
                        <h2><strong>11.1. </strong>Threads</h2>
                    </div>
                    <div class="section">
                        <h2><strong>11.2. </strong>Async functions</h2>
                    </div>
                    <div class="section">
                        <h2><strong>11.3. </strong>Mutex locks</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>12. </strong>Networking</h1>
                    <div class="section">
                        <h2><strong>12.1. </strong>Sockets</h2>
                    </div>
                    <div class="section">
                        <h2><strong>12.2. </strong>WebSockets</h2>
                    </div>
                    <div class="section">
                        <h2><strong>12.3. </strong>HTTP requests</h2>
                    </div>
                    <div class="section">
                        <h2><strong>12.4. </strong>HTTP servers</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>13. </strong>Json parsing</h1>
                    <div class="section">
                        <h2><strong>13.1. </strong>JSON in code</h2>
                    </div>
                    <div class="section">
                        <h2><strong>13.2. </strong>Json serialization</h2>
                    </div>
                    <div class="section">
                        <h2><strong>13.3. </strong>Json deserialization</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>14. </strong>Math</h1>
                    <div class="section">
                        <h2><strong>14.1. </strong>Math functions</h2>
                    </div>
                    <div class="section">
                        <h2><strong>14.2. </strong>Vectors</h2>
                    </div>
                    <div class="section">
                        <h2><strong>14.3. </strong>Matrices</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>15. </strong>Reflection API</h1>
                    <div class="section">
                        <h2><strong>15.1. </strong>Fetching types</h2>
                    </div>
                    <div class="section">
                        <h2><strong>15.2. </strong>Fields and methods</h2>
                    </div>
                    <div class="section">
                        <h2><strong>15.3. </strong>Dynamic code loading</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>16. </strong>Instrumentation API</h1>
                    <div class="section">
                        <h2><strong>16.1. </strong>Agent attaching</h2>
                    </div>
                    <div class="section">
                        <h2><strong>16.2. </strong>Overriding definitions</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>17. </strong>HTML parsing</h1>
                    <div class="section">
                        <h2><strong>17.1. </strong>HTML in code</h2>
                    </div>
                    <div class="section">
                        <h2><strong>17.2. </strong>Custom HTML parsing</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>18. </strong>Handling natives</h1>
                    <div class="section">
                        <h2><strong>18.1. </strong>Linking native methods</h2>
                    </div>
                    <div class="section">
                        <h2><strong>18.2. </strong>Dynamic native linking</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>19. </strong>Void Bytecode</h1>
                    <div class="section">
                        <h2><strong>19.1. </strong>Bytecode in code</h2>
                    </div>
                    <div class="section">
                        <h2><strong>19.2. </strong>Instructions</h2>
                    </div>
                    <div class="section">
                        <h2><strong>19.3. </strong>Bytecode examples</h2>
                    </div>
                </div>
                <div class="category">
                    <h1><strong>20. </strong>About Void</h1>
                    <div class="section">
                        <h2><strong>20.1. </strong>License</h2>
                    </div>
                    <div class="section">
                        <h2><strong>20.2. </strong>Contributing</h2>
                    </div>
                    <div class="section">
                        <h2><strong>20.3. </strong>Credits</h2>
                    </div>
                </div>
            </div>
            <div class="content">
                def
            </div>
        </div>
    </div>
)