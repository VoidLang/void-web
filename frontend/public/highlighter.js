class TokenType {
    static Number       = 0
    static Boolean      = 1
    static String       = 2
    static Character    = 3
    static Identifier   = 4
    static Null         = 5
    static Type         = 6
    static Expression   = 7
    static Modifier     = 8
    static Operator     = 9
    static Separator    = 10
    static Annotation   = 11
    static Info         = 12
    static Whitespace   = 13
    static Comment      = 14
    static CommentBlock = 15
    static Finish       = 16
    static Unexpected   = 17
    static None         = 18
}

const NAMES = [
    'Number',
    'Boolean',
    'String',
    'Character',
    'Identifier',
    'Null',
    'Type',
    'Expression',
    'Modifier',
    'Operator',
    'Separator',
    'Annotation',
    'Info',
    'Whitespace',
    'Comment',
    'CommentBlock',
    'Finish',
    'Unexpected',
    'None'
]

class Token {
    constructor(type, value) {
        this.type = type
        this.value = value
    }

    static of(type, value) {
        return new Token(type, value || '')
    }

    is(...types) {
        for (const type of types) {
            if (type == this.type)
                return true
        }
        return false
    }

    val(value) {
        return value == this.value
    }

    eq(type, value) {
        return this.type == type && this.value == value
    }

    getName() {
        return NAMES[this.type]
    }

    hasNext() {
        return this.type != TokenType.Finish
            && this.type != TokenType.Unexpected
    }

    debug() {
        return this.getName() + '|' + this.value + '|'
    }
}

class Tokenizer {
    constructor(data) {
        this.data = data
        this.cursor = 0
        this.lineIndex = 0
        this.lineNumber = 1
    }

    next() {
        if (this.peek() == '\0')
            return Token.of(TokenType.Finish)

        else if (this.isWhitespace(this.peek()))
            return this.nextWhitespace()

        else if (this.isIdentifierStart(this.peek()))
            return this.nextIdentifier()

        else if (this.isOperator(this.peek()))
            return this.nextOperator()
        else if (this.isSeparator(this.peek()))
            return this.nextSeparator();

        else if (this.isNumber(this.peek()))
            return this.nextNumber()

        else if (this.isString(this.peek()))
            return this.nextString()
        else if (this.isChar(this.peek()))
            return this.nextChar()

        else if (this.isAnnotation(this.peek()))
            return this.nextAnnotation()

        console.log('syntax error: ' + this.peek())
        return Token.of(TokenType.Unexpected)
    }

    peek() {
        return this.at(this.cursor)
    }

    get() {
        this.lineIndex++
        return this.at(this.cursor++)
    }

    range(begin, end) {
        let result = ''
        for (; begin < end; begin++) 
            result += this.at(begin)
        return result
    }

    at(index) {
        return this.has(index) ? this.data.charAt(index) : '\0'
    }

    has(index) {
        return index >= 0 && index < this.data.length
    }

    skip(amount) {
        this.lineIndex += amount
        this.cursor += amount
    }

    upper(token) {
        return token.toUpperCase()
    }

    lower(token) {
        return token.toUpperCase()
    }

    isWhitespace(c) {
        switch (c) {
            case ' ':
            case '\t':
            case '\r':
            case '\n':
                return true
            default:
                return false
        }
    }

    isIdentifierStart(c) {
        return /^[a-zA-Z_]$/.test(c)
    }

    isIdentifierPart(c) {
        return /^[a-zA-Z0-9_]$/.test(c)
    }

    isString(c) {
        return c == '"'
    }

    isChar(c) {
        return c == '\''
    }

    isNumber(c) {
        return /^\d+$/.test(c)
    }

    isAnnotation(c) {
        return c == '@'
    }

    isNumberSuffix(c) {
        switch (c) {
            case 'B':
            case 'S':
            case 'I':
            case 'L':
            case 'F':
            case 'l':
                return true
            default:
                return false
        }
    }

    isHexValue(c) {
        switch (c) {
            case 'A':
            case 'B':
            case 'C':
            case 'D':
            case 'E':
            case 'F':
                return true
            default:
                return this.isNumber(c)
        }
    }

    isBinary(c) {
        switch (c) {
            case '0':
            case '1':
                return true
            default:
                return false
        }
    }

    isNumberContent(c) {
        switch (c) {
            case '.':
            case '_':
                return true
            default:
                return this.isHexValue(c) || this.isNumberSuffix(c)
        }
    }

    isOperator(c) {
        switch (c) {
            case '.':
            case '=':
            case '+':
            case '-':
            case '*':
            case '/':
            case '<':
            case '>':
            case '?':
            case '!':
            case '^':
            case '&':
            case '~':
            case '$':
            case '|':
            case '%':
                return true
            default:
                return false
        }
    }
    
    isSeparator(c) {
        switch (c) {
            case ';':
            case ':':
            case ',':
            case '{':
            case '}':
            case '(':
            case ')':
            case '[':
            case ']':
                return true
            default:
                return false
        }
    }

    isExpression(token) {
        switch (token) {
            case "new":
            case "class":
            case "enum":
            case "struct":
            case "interface":
            case "for":
            case "while":
            case "repeat":
            case "do":
            case "if":
            case "else":
            case "switch":
            case "case":
            case "loop":
            case "continue":
            case "break":
            case "return":
            case "await":
            case "goto":
            case "is":
            case "in":
            case "as":
            case "where":
            case "defer":
            case "assert":
                return true
            default:
                return false
        }
    }

    isType(token) {
        switch (token) {
            case "let":
            case "byte":
            case "ubyte":
            case "short":
            case "ushort":
            case "int":
            case "uint":
            case "double":
            case "udouble":
            case "float":
            case "ufloat":
            case "long":
            case "ulong":
            case "void":
            case "bool":
            case "char":
            case "string":
                return true
            default:
                return false
        }
    }

    isModifier(token) {
        switch (token) {
            case "public":
            case "protected":
            case "private":
            case "static":
            case "final":
            case "native":
            case "extern":
            case "transient":
            case "synchronized":
            case "async":
            case "const":
            case "unsafe":
            case "weak":
            case "strong":
            case "default":
                return true
            default:
                return false
        }
    }

    isBoolean(token) {
        switch (token) {
            case "true":
            case "false":
                return true
            default:
                return false
        }
    }

    isInfo(token) {
        switch (token) {
            case "package":
            case "import":
                return true
            default:
                return false
        }
    }

    isNull(token) {
        switch (token) {
            case "null":
            case "nullptr":
                return true
            default:
                return false
        }
    }

    nextWhitespace() {
        if (this.peek() == '\n') {
            this.lineIndex = 0;
            this.lineNumber = 0;
        }
        return Token.of(TokenType.Whitespace, this.get())
    }

    nextIdentifier() {
        const begin = this.cursor
        while (this.isIdentifierPart(this.peek()))
            this.get()
        
        const token = this.range(begin, this.cursor)
        let type = TokenType.Identifier

        if (this.isExpression(token))
            type = TokenType.Expression
        else if (this.isType(token))
            type = TokenType.Type
        else if (this.isModifier(token))
            type = TokenType.Modifier
        else if (this.isBoolean(token))
            type = TokenType.Boolean
        else if (this.isInfo(token))
            type = TokenType.Info
        else if (this.isNull(token))
            type = TokenType.Null

        return Token.of(type, token)
    }

    nextOperator() {
        if (this.peek() == '/') {
            if (this.at(this.cursor + 1) == '/') 
                return this.nextCommentLine()
            else if (this.at(this.cursor + 1) == '*')
                return this.nextCommentBlock()
        }
        return Token.of(TokenType.Operator, this.get())
    }

    nextCommentLine() {
        this.skip(2)
        const begin = this.cursor
        while (this.peek() != '\n') {
            if (this.get() == '\0') 
                break
        }
        return Token.of(TokenType.Comment, '//' + this.range(begin, this.cursor))
    }

    nextCommentBlock() {
        const begin = this.cursor
        this.skip(2)
        while (this.peek() != '*' || this.at(this.cursor + 1) != '/') 
            this.get()
        this.skip(2)
        return Token.of(TokenType.CommentBlock, this.range(begin, this.cursor))
    }

    nextSeparator() {
        return Token.of(TokenType.Separator, this.get())
    }

    nextNumber() {
        const begin = this.cursor
        let integer = true

        if (this.peek() == '0' && this.at(this.cursor + 1) == 'x') {
            this.skip(2)
            while (this.isHexValue(this.peek()))
                this.get()
            return Token.of(TokenType.Number, this.range(begin, this.cursor))
        }

        else if (this.peek() == '0' && this.at(this.cursor + 1) == 'b') {
            this.skip(2)
            while (this.isBinary(this.peek()))
                this.get()
            return Token.of(TokenType.Number, this.range(begin, this.cursor))
        }

        while (this.isNumberContent(this.upper(this.peek()))) {
            if (this.peek() == '.') {
                if (this.at(this.cursor + 1) == '.') {
                    return Token.of(TokenType.Number, this.range(begin, this.cursor))
                }
                if (!integer)
                    return Token.of(TokenType.Unexpected, 'Floating point number cannot have multiple dot symbols.')
                integer = false
            }

            if (this.isNumberSuffix(this.upper(this.peek()))) {
                const suffix = this.upper(this.peek())
                if (!integer && (suffix == 'B' || suffix == 'S' || suffix == 'I' || suffix == 'L')) 
                    return Token.of(TokenType.Unexpected, 'Non-decimal number cannot have a floating-point value.');
                
                this.skip(1)
                return Token.of(TokenType.Number, this.range(begin, this.cursor))
            }

            this.skip(1)
        }

        return Token.of(TokenType.Number, this.range(begin, this.cursor))
    }

    nextString() {
        return this.nextLiteral(true)
    }

    nextChar() {
        return this.nextLiteral(false)
    }

    nextLiteral(string) {
        let content = ''
        let escapeNext = false

        this.skip(1)
        
        while (this.has(this.cursor)) {
            /*
            if (escapeNext) {
                switch (this.peek()) {
                    case 'n':
                        content += '\n'
                        break
                    case 'r':
                        content += '\r'
                        break
                    case 't':
                        content += '\t'
                        break
                    case '\\':
                        content += '\\'
                        break
                    default:
                        if ((string && this.peek() == '"') || (!string && this.peek() == '\''))
                        content += this.peek()
                    else
                        return Token.of(TokenType.Unexpected, 'Invalid escape sequance: \\' + this.peek())
                }
                escapeNext = false
            }
            */

            if (this.peek() == '\\')
                escapeNext = true
            
            if (((this.peek() == '"' && string) || (this.peek() == '\'' && !string)) && !escapeNext) {
                this.skip(1)
                return Token.of(string ? TokenType.String : TokenType.Character, content)
            }

            else {
                if (this.peek() != '\\')
                    escapeNext = false
                content += this.peek()
            }
            
            this.skip(1)
        }

        return Token.of(TokenType.Unexpected, 'Missing trailing `' + (string ? '"' : '\'') + '` symbol to terminate the ' + (string ? 'string' : 'char') + ' literal.')
    }

    nextAnnotation() {
        return Token.of(TokenType.Annotation, this.get() + this.nextIdentifier().value)
    }
}

class Style {
    static Default    = '#9a9ea7'
    static Keyword    = '#7f7aa6'
    static Operator   = '#78a4b5'
    static String     = '#98c379'
    static Literal    = '#c6c5c4'
    static Method     = '#6a8cc0'
    static Type       = '#e1c46c'
    static Error      = '#a83232'
    static Comment    = '#545454'
    static None       = 'transparent'
}

const STYLES = {
    Number:       'literal',
    Boolean:      'literal',
    String:       'string',
    Character:    'string',
    Identifier:   'default',
    Null:         'literal',
    Type:         'keyword',
    Expression:   'keyword',
    Modifier:     'keyword',
    Operator:     'operator',
    Separator:    'operator',
    Annotation:   'keyword',
    Info:         'keyword',
    Whitespace:   'none',
    Finish:       'none',
    Unexpected:   'none',
    Method:       'method',
    Comment:      'comment',
    CommentBlock: 'comment'
}

class Prettier {
    constructor(tokens) {
        this.tokens = tokens
        this.cursor = 0
    }

    convert() {
        let elements = []

        while (this.hasNext()) {
            const token = this.get()

            const element = React.createElement('span')
            let value = token.value

            if (token.type == TokenType.String)
                value = '"' + value + '"'
            else if (token.type == TokenType.Character)
                value = '\'' + value + '\''

            let style = STYLES[token.getName()]

            if (token.type == TokenType.Identifier) {
                if (this.peek().eq(TokenType.Separator, '(') || (this.peek().eq(TokenType.Operator, '<') 
                        && token.value.charAt(0) == token.value.charAt(0).toLowerCase())) 
                    style = STYLES.Method
                else {
                    const normal = token.value.charAt(0)
                    const upper = normal.toUpperCase()
                    if (normal == upper)
                        style = 'type'
                }
            }

            element.attributes.class = [style]
            element.content = value

            elements.push(element)
        }

        return elements
    }

    convertRaw() {
        let elements = []

        while (this.hasNext()) {
            const token = this.get()

            const element = document.createElement('span')
            let value = token.value

            if (token.type == TokenType.String)
                value = '"' + value + '"'
            else if (token.type == TokenType.Character)
                value = '\'' + value + '\''

            let style = STYLES[token.getName()]

            if (token.type == TokenType.Identifier) {
                if (this.peek().eq(TokenType.Separator, '(')) 
                    style = STYLES.Method
                else {
                    const normal = token.value.charAt(0)
                    const upper = normal.toUpperCase()
                    if (normal == upper)
                        style = 'type'
                }
            }

            element.className = style
            element.innerText = value

            elements.push(element)
        }

        return elements
    }

    at(index) {
        return this.has(index) ? this.tokens[index] : Token.of(TokenType.None) 
    }

    has(index) {
        return index >= 0 && index < this.tokens.length
    }

    peek() {
        return this.at(this.cursor)
    }

    get() {
        return this.at(this.cursor++)
    }

    hasNext() {
        return this.peek().hasNext()
    }
}

const highlight = (code) => {
    const tokenizer = new Tokenizer(code)

    let tokens = []
    let token
    do {
        token = tokenizer.next()
        tokens.push(token)
    } while (token.hasNext())
    
    const prettier = new Prettier(tokens)
    const elements = prettier.convert()

    const holder = React.createElement('pre')
    holder.content = elements

    return holder
}

/*
let source = `void main() {
    let input = ["one", "12", "hello", "-7"]

    let result = input
        .stream()
        .filterMap(int::parse)
        .sort(|a, b| b - a)
        .collect()

    let largest = result
        .get(0)
        .unwrap()

    println("Hello, World!")
    println($"value: {largest}")
}`

const code = document.getElementById('code')

const tokenizer = new Tokenizer(source)

let tokens = []
let token
do {
    token = tokenizer.next()
    tokens.push(token)
} while (token.hasNext())

const prettier = new Prettier(tokens)
const elements = prettier.convert()

for (const element of elements) 
    code.appendChild(element)
*/