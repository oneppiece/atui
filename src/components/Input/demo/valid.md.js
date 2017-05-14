webpackJsonp([102,194],{434:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u89c4\u5219\u9a8c\u8bc1\uff0c\u4f7f\u7528\u9ed8\u8ba4\u9519\u8bef\u63d0\u793a","en-US":"Type"},filename:"src/components/Input/demo/valid.md",id:"src-components-Input-demo-valid"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>\u624b\u673a\u53f7\u6821\u9a8c\uff1a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\u6821\u9a8c\u7ed3\u679c\uff1a<span class="token punctuation">{</span><span class="token punctuation">{</span>phoneValidResult<span class="token punctuation">.</span>isPhoneValid<span class="token punctuation">.</span>tips<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>phone<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801<span class="token punctuation">"</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>phoneValidRule<span class="token punctuation">"</span></span> <span class="token attr-name">:valid-result</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>phoneValidResult<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-input</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>\u975e\u7a7a\u6821\u9a8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\u6821\u9a8c\u7ed3\u679c\uff1a<span class="token punctuation">{</span><span class="token punctuation">{</span>notNullValidResult<span class="token punctuation">.</span>requiredValid<span class="token punctuation">.</span>tips<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u8f93\u5165\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notNullValidRule<span class="token punctuation">"</span></span> <span class="token attr-name">:valid-result</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notNullValidResult<span class="token punctuation">"</span></span> <span class="token attr-name">:tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>notNullTips<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-input</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>\u6570\u5b57\u6821\u9a8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\u6821\u9a8c\u7ed3\u679c\uff1a<span class="token punctuation">{</span><span class="token punctuation">{</span>isNumberValidResult<span class="token punctuation">.</span>isNumberValid<span class="token punctuation">.</span>tips<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u8f93\u5165\u6570\u5b57<span class="token punctuation">"</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>isNumberValidRule<span class="token punctuation">"</span></span> <span class="token attr-name">:valid-result</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>isNumberValidResult<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-input</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>\u56fa\u8bdd\u6821\u9a8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\u6821\u9a8c\u7ed3\u679c\uff1a<span class="token punctuation">{</span><span class="token punctuation">{</span>isTelValidResult<span class="token punctuation">.</span>isTelValid<span class="token punctuation">.</span>tips<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u8f93\u5165\u56fa\u8bdd\u53f7\u7801<span class="token punctuation">"</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>isTelValidRule<span class="token punctuation">"</span></span> <span class="token attr-name">:valid-result</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>isTelValidResult<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-input</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>\u90ae\u7bb1\u6821\u9a8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\u6821\u9a8c\u7ed3\u679c\uff1a<span class="token punctuation">{</span><span class="token punctuation">{</span>isEmailValidResult<span class="token punctuation">.</span>isEmailValid<span class="token punctuation">.</span>tips<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u8f93\u5165\u90ae\u7bb1<span class="token punctuation">"</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>isEmailValidRule<span class="token punctuation">"</span></span> <span class="token attr-name">:valid-result</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>isEmailValidResult<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-input</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>\u6700\u5c0f\u957f\u5ea6\u6821\u9a8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\u6821\u9a8c\u7ed3\u679c\uff1a<span class="token punctuation">{</span><span class="token punctuation">{</span>minlengthValidResult<span class="token punctuation">.</span>minlengthValid<span class="token punctuation">.</span>tips<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6700\u5c0f\u957f\u5ea6\u662f5<span class="token punctuation">"</span></span> <span class="token attr-name">minlength-tips</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u8f93\u5165\u81f3\u5c115\u4e2a\u5b57\u7b26<span class="token punctuation">"</span></span> <span class="token attr-name">minlength</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">:valid-result</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>minlengthValidResult<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-input</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>\u81ea\u5b9a\u4e49\u6b63\u5219\u6821\u9a8c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\u6821\u9a8c\u7ed3\u679c\uff1a<span class="token punctuation">{</span><span class="token punctuation">{</span>validResult<span class="token punctuation">.</span>regularValid<span class="token punctuation">.</span>tips<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u5b9a\u4e49\u6b63\u5219\u6821\u9a8c\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rules<span class="token punctuation">"</span></span> <span class="token attr-name">:valid-result</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>validResult<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-input</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>'}],preview:'<h3>\u624b\u673a\u53f7\u6821\u9a8c\uff1a</h3>\n<p>\u6821\u9a8c\u7ed3\u679c\uff1a{{phoneValidResult.isPhoneValid.tips}}</p>\n<div>\n  <v-input id="phone" type="text" placeholder="\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801" :rules="phoneValidRule" :valid-result="phoneValidResult"></v-input>\n</div>\n<br>\n<h3>\u975e\u7a7a\u6821\u9a8c</h3>\n<p>\u6821\u9a8c\u7ed3\u679c\uff1a{{notNullValidResult.requiredValid.tips}}</p>\n<div>\n  <v-input type="text" placeholder="\u8bf7\u8f93\u5165\u5185\u5bb9" :rules="notNullValidRule" :valid-result="notNullValidResult" :tips="notNullTips"></v-input>\n</div>\n<br>\n<h3>\u6570\u5b57\u6821\u9a8c</h3>\n<p>\u6821\u9a8c\u7ed3\u679c\uff1a{{isNumberValidResult.isNumberValid.tips}}</p>\n<div>\n  <v-input type="text" placeholder="\u8bf7\u8f93\u5165\u6570\u5b57" :rules="isNumberValidRule" :valid-result="isNumberValidResult"></v-input>\n</div>\n<br>\n<h3>\u56fa\u8bdd\u6821\u9a8c</h3>\n<p>\u6821\u9a8c\u7ed3\u679c\uff1a{{isTelValidResult.isTelValid.tips}}</p>\n<div>\n  <v-input type="text" placeholder="\u8bf7\u8f93\u5165\u56fa\u8bdd\u53f7\u7801" :rules="isTelValidRule" :valid-result="isTelValidResult"></v-input>\n</div>\n<br>\n<h3>\u90ae\u7bb1\u6821\u9a8c</h3>\n<p>\u6821\u9a8c\u7ed3\u679c\uff1a{{isEmailValidResult.isEmailValid.tips}}</p>\n<div>\n  <v-input type="text" placeholder="\u8bf7\u8f93\u5165\u90ae\u7bb1" :rules="isEmailValidRule" :valid-result="isEmailValidResult"></v-input>\n</div>\n<br>\n<h3>\u6700\u5c0f\u957f\u5ea6\u6821\u9a8c</h3>\n<p>\u6821\u9a8c\u7ed3\u679c\uff1a{{minlengthValidResult.minlengthValid.tips}}</p>\n<div>\n  <v-input type="text" placeholder="\u6700\u5c0f\u957f\u5ea6\u662f5" minlength-tips="\u8bf7\u8f93\u5165\u81f3\u5c115\u4e2a\u5b57\u7b26" minlength="5" :valid-result="minlengthValidResult"></v-input>\n</div>\n<br>\n<h3>\u81ea\u5b9a\u4e49\u6b63\u5219\u6821\u9a8c</h3>\n<p>\u6821\u9a8c\u7ed3\u679c\uff1a{{validResult.regularValid.tips}}</p>\n<div>\n  <v-input type="text" placeholder="\u81ea\u5b9a\u4e49\u6b63\u5219\u6821\u9a8c\u5185\u5bb9" :rules="rules" :valid-result="validResult"></v-input>\n</div>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vInput: atui.Input\n  },\n  data () {\n    return {\n      phoneValidRule: ['isPhone'],\n      phoneValidResult: {\n        isPhoneValid: {\n          validStatus: '',\n          tips: ''\n        }\n      },\n      phoneTips: '\u4ec0\u4e48\u624b\u673a\u53f7\uff1f',\n      notNullValidRule: ['notNull'],\n      notNullValidResult: {\n        requiredValid: {\n          validStatus: '',\n          tips: ''\n        }\n      },\n      notNullTips: '',\n      isNumberValidRule: ['isNumber'],\n      isNumberValidResult: {\n        isNumberValid: {\n          validStatus: '',\n          tip: ''\n        }\n      },\n      isTelValidRule: ['isTelephone'],\n      isTelValidResult: {\n        isTelValid: {\n          validStatus: '',\n          tip: ''\n        }\n      },\n      isEmailValidRule: ['isEmail'],\n      isEmailValidResult: {\n        isEmailValid: {\n          validStatus: '',\n          tip: ''\n        }\n      },\n      minlengthValidResult: {\n        minlengthValid: {\n          validStatus: '',\n          tip: ''\n        }\n      },\n      rules: [/^[a-zA-Z]+$/],\n      validResult: {\n        regularValid: {\n          validStatus: '',\n          tip: ''\n        }\n      }\n    }\n  }\n})"}}});