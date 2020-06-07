
export default function() {
  return React.createElement('article', {"dangerouslySetInnerHTML":{"__html":"<h1 id=\"%E4%BB%BB%E6%84%8F%E5%80%BC\">任意值 <a class=\"header-anchor\" href=\"#%E4%BB%BB%E6%84%8F%E5%80%BC\">§</a></h1>\n<p>任意值（Any）用来表示允许赋值为任意类型。</p>\n<h2 id=\"%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%BB%E6%84%8F%E5%80%BC%E7%B1%BB%E5%9E%8B\">什么是任意值类型 <a class=\"header-anchor\" href=\"#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%BB%E6%84%8F%E5%80%BC%E7%B1%BB%E5%9E%8B\">§</a></h2>\n<p>如果是一个普通类型，在赋值过程中改变类型是不被允许的：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">let</span> myFavoriteNumber<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span> <span class=\"token operator\">=</span> <span class=\"token string\">'seven'</span><span class=\"token punctuation\">;</span>\nmyFavoriteNumber <span class=\"token operator\">=</span> <span class=\"token number\">7</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.</span>\n</code></pre>\n<p>但如果是 <code>any</code> 类型，则允许被赋值为任意类型。</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">let</span> myFavoriteNumber<span class=\"token operator\">:</span> <span class=\"token builtin\">any</span> <span class=\"token operator\">=</span> <span class=\"token string\">'seven'</span><span class=\"token punctuation\">;</span>\nmyFavoriteNumber <span class=\"token operator\">=</span> <span class=\"token number\">7</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<h2 id=\"%E4%BB%BB%E6%84%8F%E5%80%BC%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95\">任意值的属性和方法 <a class=\"header-anchor\" href=\"#%E4%BB%BB%E6%84%8F%E5%80%BC%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95\">§</a></h2>\n<p>在任意值上访问任何属性都是允许的：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">let</span> anyThing<span class=\"token operator\">:</span> <span class=\"token builtin\">any</span> <span class=\"token operator\">=</span> <span class=\"token string\">'hello'</span><span class=\"token punctuation\">;</span>\n<span class=\"token console class-name\">console</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">log</span><span class=\"token punctuation\">(</span>anyThing<span class=\"token punctuation\">.</span><span class=\"token property-access\">myName</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token console class-name\">console</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">log</span><span class=\"token punctuation\">(</span>anyThing<span class=\"token punctuation\">.</span><span class=\"token property-access\">myName</span><span class=\"token punctuation\">.</span><span class=\"token property-access\">firstName</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>也允许调用任何方法：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">let</span> anyThing<span class=\"token operator\">:</span> <span class=\"token builtin\">any</span> <span class=\"token operator\">=</span> <span class=\"token string\">'Tom'</span><span class=\"token punctuation\">;</span>\nanyThing<span class=\"token punctuation\">.</span><span class=\"token method function property-access\">setName</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Jerry'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nanyThing<span class=\"token punctuation\">.</span><span class=\"token method function property-access\">setName</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Jerry'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">sayHello</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nanyThing<span class=\"token punctuation\">.</span><span class=\"token property-access\">myName</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">setFirstName</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Cat'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>可以认为，<strong>声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值</strong>。</p>\n<h2 id=\"%E6%9C%AA%E5%A3%B0%E6%98%8E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8F%98%E9%87%8F\">未声明类型的变量 <a class=\"header-anchor\" href=\"#%E6%9C%AA%E5%A3%B0%E6%98%8E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%8F%98%E9%87%8F\">§</a></h2>\n<p><strong>变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型</strong>：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">let</span> something<span class=\"token punctuation\">;</span>\nsomething <span class=\"token operator\">=</span> <span class=\"token string\">'seven'</span><span class=\"token punctuation\">;</span>\nsomething <span class=\"token operator\">=</span> <span class=\"token number\">7</span><span class=\"token punctuation\">;</span>\n\nsomething<span class=\"token punctuation\">.</span><span class=\"token method function property-access\">setName</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Tom'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>等价于</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">let</span> something<span class=\"token operator\">:</span> <span class=\"token builtin\">any</span><span class=\"token punctuation\">;</span>\nsomething <span class=\"token operator\">=</span> <span class=\"token string\">'seven'</span><span class=\"token punctuation\">;</span>\nsomething <span class=\"token operator\">=</span> <span class=\"token number\">7</span><span class=\"token punctuation\">;</span>\n\nsomething<span class=\"token punctuation\">.</span><span class=\"token method function property-access\">setName</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Tom'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<h2 id=\"%E5%8F%82%E8%80%83\">参考 <a class=\"header-anchor\" href=\"#%E5%8F%82%E8%80%83\">§</a></h2>\n<ul>\n<li><a href=\"http://www.typescriptlang.org/docs/handbook/basic-types.html#any\">Basic Types # Any</a>（<a href=\"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E4%BB%BB%E6%84%8F%E5%80%BC\">中文版</a>）</li>\n</ul>\n<hr>\n<ul>\n<li><a href=\"primitive-data-types.html\">上一章：原始数据类型</a></li>\n<li><a href=\"type-inference.html\">下一章：类型推论</a></li>\n</ul>\n"}})
};
