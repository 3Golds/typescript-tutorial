import projectConfig from '/pagic.config.js';
import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
export default {
    'prev': {
        "title": "类型别名",
        "link": "advanced/type-aliases.html"
    },
    'next': {
        "title": "元组",
        "link": "advanced/tuple.html"
    },
    config: { "root": "/", ...projectConfig },
    'pagePath': "advanced/string-literal-types.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "advanced/string-literal-types.html",
    'title': "字符串字面量类型",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>字符串字面量类型</h1>\n<p>字符串字面量类型用来约束取值只能是某几个字符串中的一个。</p>\n<h2 id="%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">§</a></h2>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">EventNames</span> <span class="token operator">=</span> <span class="token string">\'click\'</span> <span class="token operator">|</span> <span class="token string">\'scroll\'</span> <span class="token operator">|</span> <span class="token string">\'mousemove\'</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> Element<span class="token punctuation">,</span> event<span class="token operator">:</span> EventNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// do something</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'hello\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'scroll\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 没问题</span>\n<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'world\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'dblclick\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错，event 不能为 \'dblclick\'</span>\n\n<span class="token comment">// index.ts(7,47): error TS2345: Argument of type \'"dblclick"\' is not assignable to parameter of type \'EventNames\'.</span>\n</code></pre>\n<p>上例中，我们使用 <code>type</code> 定了一个字符串字面量类型 <code>EventNames</code>，它只能取三种字符串中的一种。</p>\n<p>注意，<strong>类型别名与字符串字面量类型都是使用 <code>type</code> 进行定义。</strong></p>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types">Advanced Types # Type Aliases</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B">中文版</a>）</li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-14" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>字符串字面量类型用来约束取值只能是某几个字符串中的一个。</p>\n<h2 id="%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">§</a></h2>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">EventNames</span> <span class="token operator">=</span> <span class="token string">\'click\'</span> <span class="token operator">|</span> <span class="token string">\'scroll\'</span> <span class="token operator">|</span> <span class="token string">\'mousemove\'</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> Element<span class="token punctuation">,</span> event<span class="token operator">:</span> EventNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// do something</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'hello\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'scroll\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 没问题</span>\n<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'world\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'dblclick\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错，event 不能为 \'dblclick\'</span>\n\n<span class="token comment">// index.ts(7,47): error TS2345: Argument of type \'"dblclick"\' is not assignable to parameter of type \'EventNames\'.</span>\n</code></pre>\n<p>上例中，我们使用 <code>type</code> 定了一个字符串字面量类型 <code>EventNames</code>，它只能取三种字符串中的一种。</p>\n<p>注意，<strong>类型别名与字符串字面量类型都是使用 <code>type</code> 进行定义。</strong></p>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types">Advanced Types # Type Aliases</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B">中文版</a>）</li>\n</ul>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
        } }),
    'author': "xcatliu",
    'contributors': [
        "xcatliu",
        "若川"
    ],
    'date': "2017-01-16T11:20:03.000Z",
    'updated': "2020-07-02T14:29:45.000Z",
    'excerpt': "字符串字面量类型用来约束取值只能是某几个字符串中的一个。 简单的例子 type EventNames = 'click' | 'scroll' | 'mousemove'; function handleEvent(ele: Element, event: EventNames) { // do something } handleEvent(docu...",
    'cover': undefined,
    'sidebar': [
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "title": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html",
                    "pagePath": "introduction/what-is-typescript.md"
                },
                {
                    "title": "安装 TypeScript",
                    "link": "introduction/get-typescript.html",
                    "pagePath": "introduction/get-typescript.md"
                },
                {
                    "title": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html",
                    "pagePath": "introduction/hello-typescript.md"
                }
            ],
            "title": "简介",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "title": "原始数据类型",
                    "link": "basics/primitive-data-types.html",
                    "pagePath": "basics/primitive-data-types.md"
                },
                {
                    "title": "任意值",
                    "link": "basics/any.html",
                    "pagePath": "basics/any.md"
                },
                {
                    "title": "类型推论",
                    "link": "basics/type-inference.html",
                    "pagePath": "basics/type-inference.md"
                },
                {
                    "title": "联合类型",
                    "link": "basics/union-types.html",
                    "pagePath": "basics/union-types.md"
                },
                {
                    "title": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html",
                    "pagePath": "basics/type-of-object-interfaces.md"
                },
                {
                    "title": "数组的类型",
                    "link": "basics/type-of-array.html",
                    "pagePath": "basics/type-of-array.md"
                },
                {
                    "title": "函数的类型",
                    "link": "basics/type-of-function.html",
                    "pagePath": "basics/type-of-function.md"
                },
                {
                    "title": "类型断言",
                    "link": "basics/type-assertion.html",
                    "pagePath": "basics/type-assertion.md"
                },
                {
                    "title": "声明文件",
                    "link": "basics/declaration-files.html",
                    "pagePath": "basics/declaration-files.md"
                },
                {
                    "title": "内置对象",
                    "link": "basics/built-in-objects.html",
                    "pagePath": "basics/built-in-objects.md"
                }
            ],
            "title": "基础",
            "pagePath": "basics/README.md"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "title": "类型别名",
                    "link": "advanced/type-aliases.html",
                    "pagePath": "advanced/type-aliases.md"
                },
                {
                    "title": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html",
                    "pagePath": "advanced/string-literal-types.md"
                },
                {
                    "title": "元组",
                    "link": "advanced/tuple.html",
                    "pagePath": "advanced/tuple.md"
                },
                {
                    "title": "枚举",
                    "link": "advanced/enum.html",
                    "pagePath": "advanced/enum.md"
                },
                {
                    "title": "类",
                    "link": "advanced/class.html",
                    "pagePath": "advanced/class.md"
                },
                {
                    "title": "类与接口",
                    "link": "advanced/class-and-interfaces.html",
                    "pagePath": "advanced/class-and-interfaces.md"
                },
                {
                    "title": "泛型",
                    "link": "advanced/generics.html",
                    "pagePath": "advanced/generics.md"
                },
                {
                    "title": "声明合并",
                    "link": "advanced/declaration-merging.html",
                    "pagePath": "advanced/declaration-merging.md"
                },
                {
                    "title": "扩展阅读",
                    "link": "advanced/further-reading.html",
                    "pagePath": "advanced/further-reading.md"
                }
            ],
            "title": "进阶",
            "pagePath": "advanced/README.md"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "title": "代码检查",
                    "link": "engineering/lint.html",
                    "pagePath": "engineering/lint.md"
                },
                {
                    "title": "编译选项",
                    "link": "engineering/compiler-options.html",
                    "pagePath": "engineering/compiler-options.md"
                }
            ],
            "title": "工程",
            "pagePath": "engineering/README.md"
        },
        {
            "title": "感谢",
            "link": "thanks/index.html",
            "pagePath": "thanks/README.md"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "advanced/string-literal-types.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B" })
};
