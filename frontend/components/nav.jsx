/**
 * 
 * @param {Properties} props 
 * @returns 
 */
const Nav = (props) => {
    return (
        <div class="nav">
            <div class="nav-left nav-side">
                <a href="/">
                    <h1>Void</h1>
                </a>
            </div>
            <div class="nav-right nav-side">
                {
                    props.attributes.docs ? (
                        <a href="/std" class="link">Std</a>
                    ) : (
                        <a href="/docs" class="link">Docs</a>
                    )
                }
                <a href="https://github.com/voidlang/void" target="_blank" class="link">GitHub</a>
                <a href="https://github.com/voidlang/void" target="_blank" class="button">Try It</a>
            </div>
        </div>
    )
}
