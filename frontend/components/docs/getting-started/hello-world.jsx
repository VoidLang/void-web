const HelloWorld = () => (
    <div>
        <h2>Hello, World!</h2>
        <p>
            After installing Void, you are free to go to create your own Void application.
            A simple <Backticks>Hello, World!</Backticks> example is shown below
            to teach you how to get started with your first program.
        </p>
        <h3>Creating a Void project</h3>
        <p>
            A Void project is a collection of folders and files that may specify application settings, dependencies, tests, 
            and the actual source code as well.
        </p>
        <p>
            First, you need to go to the directory you want to create the project into.
        </p>
        <Terminal>
            <pre>cd myProjects</pre>
        </Terminal>
        <p>
            You can create a new Void project using the command below.
            This will generate a new project folder named <Backticks>Hello World</Backticks>.
        </p>
        <Terminal>
            <pre>void -n HelloWorld</pre>
        </Terminal>
        <h3>File architecture</h3>
        <p>A Void project consists of the following files and folders:</p>
        <ul>
            <li>
                <Backticks>src</Backticks> <Light>- This folder contains the Void source files of packages, classes and methods</Light>
            </li>
            <li>
                <Backticks>test</Backticks> <Light>- This folder contains the Void unit test files</Light>
            </li>
            <li>
                <Backticks>target</Backticks> <Light>- This folder contains the compiled executable of the project, after it has been built</Light>
            </li>
            <li>
                <Backticks>void.toml</Backticks> <Light>- This file specifies project settings, dependencies and built configurations</Light>
            </li>
        </ul>
    </div>
)
