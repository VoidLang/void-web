const Type = (props) => <span class="type">{props.content}</span>;

const String = (props) => <span class="string">{props.content}</span>;

const Light = (props) => <span class="light">{props.content}</span>;

const Solid = (props) => <span class="solid">{props.content}</span>;

const Literal = (props) => <span class="literal">{props.content}</span>;

const Indent = () => <div class="indent"/>;

const DoubleIndent = () => <div class="indent2"/>;

const Line = () => <div class="line"/>;

const GetStarted = () => {
    return (
        <div class="get-started">
            <h1><span style="color: lime">Modern</span> Software Development</h1>
            <h2>Made <span style="color: lime">Simple</span></h2>
            <div class="wrapper">
                <div class="info">
                    <div class="inner">
                        <a href="https://github.com/voidlang/void" target="_blank" class="button">Get Started Now</a>
                        <p>Start using Void and explore a new universe of programming</p>
                        <p>Explore the amazing features of Void to enchant your coding experience</p>
                    </div>
                </div>
                <div class="code">
                    <Type>void</Type> main<Light>() &#123;</Light><br/>
                        <Indent/><Type>let</Type> input <Light>=</Light> <Light>[</Light><String>"one"</String><Light>,</Light> <String>"12"</String><Light>,</Light> <String>"hello"</String><Light>,</Light> <String>"-7"</String><Light>]</Light><br/>
                        <Line/>
                        <Indent/><Type>let</Type> result <Light>=</Light> input<br/>
                        <DoubleIndent/><Light>.</Light><Solid>stream</Solid><Light>()</Light><br/>
                        <DoubleIndent/><Light>.</Light><Solid>filterMap</Solid><Light>(</Light><Type>int</Type><Light>::</Light>parse<Light>)</Light><br/>
                        <DoubleIndent/><Light>.</Light><Solid>sort</Solid><Light>(</Light><Light>|</Light>a<Light>,</Light> b<Light>|</Light> b <Light>-</Light> a<Light>)</Light><br/>
                        <DoubleIndent/><Light>.</Light><Solid>collect</Solid><Light>()</Light><br/>
                        <Line/>
                        <Indent/><Type>let</Type> largest <Light>=</Light> result<br/>
                        <DoubleIndent/><Light>.</Light><Solid>get</Solid><Light>(</Light><Literal>0</Literal><Light>)</Light><br/>
                        <DoubleIndent/><Light>.</Light><Solid>unwrap</Solid><Light>()</Light><br/>
                        <Line/>
                        <Indent/><Solid>println</Solid><Light>($</Light><String>"value: </String><Literal>&#123;largest&#125;</Literal><String>"</String><Light>)</Light><br/>
                    <Light>&#125;</Light>
                </div>
            </div>
        </div>
    )
}