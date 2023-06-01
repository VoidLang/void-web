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
            <pre>void new HelloWorld</pre>
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
        <h2>Creating the first program</h2>
        <p>
            Create a new source file called <Backticks>Main.vs</Backticks> inside the <Backticks>src</Backticks> folder.
            The <Backticks>.vs</Backticks> file extension stands for Void Source.
        </p>
        <p>
            Next, we are going to write a simple code, that will output <Backticks>Hello, World!</Backticks> to the console.
            In the <Backticks>Main.vs</Backticks> file, type the following code.
        </p>
        <Code>
            {highlight(
`void main() {
    println("Hello, World!")
}`
            )}
        </Code>
        <p>
            After that, the next step is to compile the program. This process will convert Void source files to an executable format.
            To compile the project, you need to the type command below.
        </p>
        <Terminal>
            <pre>void compile</pre>
        </Terminal>

        <h2>Running the first program</h2>
        <p>
            The compiled executable file has been created to <Backticks>./target/HelloWorld.void</Backticks>.
            To run this file, all you need to do is execute the following code.
        </p>
        <Terminal>
            void run
        </Terminal>
        <p>
            Void will automatically detect, that you are in the project's folder, so you don't need to specify 
            the path of the executable. Alternatively, you can tell Void, what to run by typing the code below. 
        </p>
        <Terminal>
            void run path/to/Executable.void
        </Terminal>
    </div>
)
