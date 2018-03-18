webpackJsonp([50786096879076],{"./node_modules/json-loader/index.js!./.cache/json/steps-2017-11-19-names-and-functions.json":function(e,t){e.exports={data:{post:{html:'<p>When getting started writing functions, it is very helpful to use\nrtop locally, which is Reason\'s <strong>R</strong>ead <strong>E</strong>val <strong>P</strong>rint <strong>L</strong>oop (REPL). Please\nsee the <a href="https://codekiln.github.io/gradus-reason/steps/2017-11-12--getting-started/">previous post</a>\nto install it and get started.</p>\n<h2 id="let-myvar--something"><a href="#let-myvar--something" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>Let myvar = "something"</code></h2>\n<p>In Reason, variables are declared with the <a href="https://reasonml.github.io/guide/language/let-binding"><code>let</code> keyword</a>\nusing the equals sign (<code>=</code>):</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Reason # let favoriteFruit = "orange";\nlet favoriteFruit: string = "orange";                                                              \nReason # favoriteFruit;\n- : string = "orange"</code></pre>\n      </div>\n<h2 id="making-functions-x--x--2"><a href="#making-functions-x--x--2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Making functions: <code>(x) => x * 2;</code></h2>\n<p>The basic <a href="https://reasonml.github.io/guide/language/function">syntax for a function in the Reason Docs here</a>.\nA function is constructed with parentheses <code>()</code> and a "fat arrow" <code>=></code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Reason # let cube = (x) => x * x * x;\nlet cube: (int) => int;                                                                    \nReason # cube; \n- : (int) => int                                                                           \nReason # cube(3);\n- : int = 27                                                                                       </code></pre>\n      </div>\n<p>Reason interpreted the function to take an integer parameter and return an integer:\n<code>(int) => int</code>. <code>(int) => int</code> is the "type signature" of\nthe function, which identifies the types it takes and the types it returns.  </p>\n<p>Let\'s look at a function that returns true if a provided int is negative and\nreturns false otherwise:</p>\n<div class="gatsby-highlight">\n        <pre class="language-reason"><code>let neg = (x) => if (x < 0) {true} else {false};\nJs.log(neg(2));\nJs.log(neg(-2));</code></pre>\n        </div>\n<p>In the editor above, try entering <code>Js.log(neg(true));</code>. You should get the error:\n"Error: This expression has type bool but an expression was expected of type int."\nThis is because Reason is strongly typed, and it has interpreted neg as a function\nthat takes an int and returns an int.</p>\n<p>Here\'s a function which takes a char and returns true if it is a vowel.\nThis uses referential equality, which is documented in\n<a href="https://reasonml.github.io/guide/language/boolean">the reason docs for Boolean</a>:</p>\n<div class="gatsby-highlight">\n        <pre class="language-reason"><code>let isvowel = (c) =>\n  c === \'a\' || c === \'e\' || c === \'i\' || c === \'o\' || c === \'u\';\n\nJs.log(isvowel(\'a\'));\nJs.log(isvowel(\'b\'));</code></pre>\n        </div>\n<p>Here\'s a function that takes two parameters <code>a</code> and <code>b</code>, and returns\ntrue if they add to ten:</p>\n<div class="gatsby-highlight">\n        <pre class="language-reason"><code>let addtoten = (a, b) =>\n  a + b === 10;\nJs.log(addtoten(5, 7));\nJs.log(addtoten(6, 4));</code></pre>\n        </div>\n<p>Here\'s a recursive function, which computes the factorial\nof a provided integer: </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Reason # let rec factorial = (a) =>\n  a === 1 ? 1 : a * factorial(a - 1);\nlet factorial: (int) => int;                                                              \nReason # factorial(2);\n- : int = 2                                                                                       \nReason # factorial(3);\n- : int = 6                                                                                       \nReason # factorial(4);\n- : int = 24                                                                                      </code></pre>\n      </div>\n<p>Finally, here\'s a recursive function that implements\n<a href="https://en.wikipedia.org/wiki/Euclidean_algorithm">Euclid\'s algorithm</a>\nto compute the greatest common divisor of two integers,\nusing the <code>mod</code> operator:</p>\n<div class="gatsby-highlight">\n        <pre class="language-reason"><code>let rec gcd = (a, b) =>\n  b === 0 ? a : gcd(b, a mod b);\nJs.log(gcd(120, 60));\nJs.log(gcd(120, 64));</code></pre>\n        </div>\n<p>Note: this function later referenced in a <em>Gradus Reason</em> exercise in<br>\n<a href="/steps/2018-03-14--modules/"><em>Modules</em></a>.</p>\n<h2 id="explorations"><a href="#explorations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Explorations</h2>\n<p>This step has given the broad strokes of functions in Reason. Further things\nto explore in the REPL: </p>\n<ol>\n<li>Write a function which, given integer <code>n</code>, returns the sum of <code>0 ... n</code></li>\n<li>Write a function which, given integer <code>n</code> and power <code>p</code>, returns <code>n</code> raised to the power <code>p</code>.</li>\n<li>What happens if you try <code>factorial(-1);</code>? How can this be prevented?</li>\n<li>Write a function <code>isconsonant(c)</code> which returns true if a char is a consonant.</li>\n</ol>\n<p><em><a href="https://github.com/codekiln/gradus-reason/tree/master/data/steps/2017-11-19--names-and-functions/index.md">Edit this post here</a></em></p>',excerpt:"When getting started writing functions, it is very helpful to use \nrtop locally, which is Reason's  R ead  E val  P rint  L oop (REPL…",timeToRead:3,fields:{slug:"/steps/2017-11-19--names-and-functions/"},frontmatter:{tags:["functions","rtop"],author:{id:"Myer Nore",bio:"",twitter:"@MyerNore",avatar:{children:[{responsiveResolution:{src:"/static/eebd74c7dad24cbd53ab5eee2861fe0b-03c1e.jpg",srcSet:"/static/eebd74c7dad24cbd53ab5eee2861fe0b-03c1e.jpg 1x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-95a48.jpg 1.5x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-cc0c5.jpg 2x"}}]}},title:"Names and Functions",updatedDate:"Nov 19, 2017",image:{children:[{responsiveResolution:{src:"/static/cfec1af6df8c3252bb3fa2a555032db5-936ba.jpg",srcSet:"/static/cfec1af6df8c3252bb3fa2a555032db5-936ba.jpg 1x,\n/static/cfec1af6df8c3252bb3fa2a555032db5-1afa9.jpg 1.5x"}}]}}},recents:{edges:[{node:{fields:{slug:"/steps/2018-03-14--modules/"},timeToRead:6,frontmatter:{title:"Modules",image:{children:[{responsiveResolution:{src:"/static/4b207212da2130c54d5d3f3c6852486b-7f526.jpg",srcSet:"/static/4b207212da2130c54d5d3f3c6852486b-7f526.jpg 1x,\n/static/4b207212da2130c54d5d3f3c6852486b-12b36.jpg 1.5x,\n/static/4b207212da2130c54d5d3f3c6852486b-f59e5.jpg 2x,\n/static/4b207212da2130c54d5d3f3c6852486b-4704a.jpg 3x"}}]},author:{id:"Myer Nore",avatar:{children:[{responsiveResolution:{src:"/static/eebd74c7dad24cbd53ab5eee2861fe0b-a469f.jpg",srcSet:"/static/eebd74c7dad24cbd53ab5eee2861fe0b-a469f.jpg 1x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-e6d15.jpg 1.5x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-b974e.jpg 2x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-89580.jpg 3x"}}]}}}}},{node:{fields:{slug:"/steps/2018-03-06--maps/"},timeToRead:5,frontmatter:{title:"Maps",image:{children:[{responsiveResolution:{src:"/static/502660d3a6174f3c7a7553e0a1b971c9-7f526.jpg",srcSet:"/static/502660d3a6174f3c7a7553e0a1b971c9-7f526.jpg 1x,\n/static/502660d3a6174f3c7a7553e0a1b971c9-12b36.jpg 1.5x,\n/static/502660d3a6174f3c7a7553e0a1b971c9-f59e5.jpg 2x,\n/static/502660d3a6174f3c7a7553e0a1b971c9-4704a.jpg 3x"}}]},author:{id:"Myer Nore",avatar:{children:[{responsiveResolution:{src:"/static/eebd74c7dad24cbd53ab5eee2861fe0b-a469f.jpg",srcSet:"/static/eebd74c7dad24cbd53ab5eee2861fe0b-a469f.jpg 1x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-e6d15.jpg 1.5x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-b974e.jpg 2x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-89580.jpg 3x"}}]}}}}},{node:{fields:{slug:"/steps/2018-03-02--objects/"},timeToRead:2,frontmatter:{title:"Objects",image:{children:[{responsiveResolution:{src:"/static/0a992d200e8146e849bd5350b9256aee-7f526.jpg",srcSet:"/static/0a992d200e8146e849bd5350b9256aee-7f526.jpg 1x,\n/static/0a992d200e8146e849bd5350b9256aee-12b36.jpg 1.5x,\n/static/0a992d200e8146e849bd5350b9256aee-f59e5.jpg 2x,\n/static/0a992d200e8146e849bd5350b9256aee-4704a.jpg 3x"}}]},author:{id:"Myer Nore",avatar:{children:[{responsiveResolution:{src:"/static/eebd74c7dad24cbd53ab5eee2861fe0b-a469f.jpg",srcSet:"/static/eebd74c7dad24cbd53ab5eee2861fe0b-a469f.jpg 1x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-e6d15.jpg 1.5x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-b974e.jpg 2x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-89580.jpg 3x"}}]}}}}},{node:{fields:{slug:"/steps/2018-02-25--variants/"},timeToRead:5,frontmatter:{title:"Variants",image:{children:[{responsiveResolution:{src:"/static/5dc86a763411f112f6bc01857ef6b383-7f526.jpg",srcSet:"/static/5dc86a763411f112f6bc01857ef6b383-7f526.jpg 1x,\n/static/5dc86a763411f112f6bc01857ef6b383-12b36.jpg 1.5x,\n/static/5dc86a763411f112f6bc01857ef6b383-f59e5.jpg 2x,\n/static/5dc86a763411f112f6bc01857ef6b383-4704a.jpg 3x"}}]},author:{id:"Myer Nore",avatar:{children:[{responsiveResolution:{src:"/static/eebd74c7dad24cbd53ab5eee2861fe0b-a469f.jpg",srcSet:"/static/eebd74c7dad24cbd53ab5eee2861fe0b-a469f.jpg 1x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-e6d15.jpg 1.5x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-b974e.jpg 2x,\n/static/eebd74c7dad24cbd53ab5eee2861fe0b-89580.jpg 3x"}}]}}}}}]}},pathContext:{slug:"/steps/2017-11-19--names-and-functions/"}}}});
//# sourceMappingURL=path---steps-2017-11-19-names-and-functions-f47f0d537d11cb6cc3f3.js.map