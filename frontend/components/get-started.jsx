const GetStarted = () => {
    return (
        <div class="get-started">
            <h1><span style="color: lime">Modern</span> Software Development</h1>
            <h2>Made It <span style="color: lime">Simple</span></h2>
            <div class="wrapper">
                <div class="info">
                    <div class="inner">
                        <a href="https://github.com/voidlang/void" target="_blank" class="button">Get Started Now</a>
                        <p>Start using Void and explore a new universe of programming</p>
                        <p>Explore the amazing features of Void to enchant your coding experience</p>
                    </div>
                </div>
                <div class="code">
                    <span class="type">void</span> main<span class="light">() &#123;</span><br/>
                        <div class="indent"/><span class="type">let</span> input <span class="light">=</span> <span class="light">[</span><span class="string">"one"</span><span class="light">,</span> <span class="string">"12"</span><span class="light">,</span> <span class="string">"hello"</span><span class="light">,</span> <span class="string">"-7"</span><span class="light">]</span><br/>
                        <br/>
                        <div class="line"/>
                        <div class="indent"/><span class="type">let</span> result <span class="light">=</span> input<br/>
                        <div class="indent2"/><span class="light">.</span><span class="solid">stream</span><span class="light">()</span><br/>
                        <div class="indent2"/><span class="light">.</span><span class="solid">filterMap</span><span class="light">(</span><span class="type">int</span><span class="light">::</span>parse<span class="light">)</span><br/>
                        <div class="indent2"/><span class="light">.</span><span class="solid">sort</span><span class="light">(</span><span class="light">|</span>a<span class="light">,</span> b<span class="light">|</span> b <span class="light">-</span> a<span class="light">)</span><br/>
                        <div class="indent2"/><span class="light">.</span><span class="solid">collect()</span><br/>
                        <br/>
                        <div class="line"/>
                        <div class="indent"/><span class="type">let</span> largest <span class="light">=</span> result<br/>
                        <div class="indent2"/><span class="light">.</span><span class="solid">get</span><span class="light">(</span><span class="literal">0</span><span class="light">)</span><br/>
                        <div class="indent2"/><span class="light">.</span><span class="solid">unwrap</span><span class="light">()</span><br/>
                        <br/>
                        <div class="line"/>
                        <div class="indent"/><span class="solid">println</span><span class="light">(</span><span class="light">$</span><span class="string">"value: </span><span class="literal">&#123;largest&#125;</span><span class="string">"</span><span class="light">)</span><br/>
                    <span class="light">&#125;</span>
                </div>
            </div>
        </div>
    )
}