webpackJsonp([97,188],{430:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Menu/demo/basic.md",id:"src-components-Menu-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>v<span class="token operator">-</span>menu @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"click"</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-sub-menu</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub1<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5bfc\u822a\u4e00<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item-group</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5206\u7ec41<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item-group</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item-group</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5206\u7ec42<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item-group</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-sub-menu</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-sub-menu</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub2<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5bfc\u822a\u4e8c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">6</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-sub-menu</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub3<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u4e09\u7ea7\u5bfc\u822a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">7</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-sub-menu</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-sub-menu</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-sub-menu</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub4<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5bfc\u822a\u4e09<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>9<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">9</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">10</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>11<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">11</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-menu-item</span> <span class="token attr-name">uuid</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9009\u9879<span class="token number">12</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu-item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-sub-menu</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-menu</span><span class="token punctuation">></span></span>'}],preview:'<v-menu @click.native="click">\n  <v-sub-menu uuid="sub1" title="\u5bfc\u822a\u4e00">\n    <v-menu-item-group title="\u5206\u7ec41">\n      <v-menu-item uuid="1">\u9009\u98791</v-menu-item>\n      <v-menu-item uuid="2">\u9009\u98792</v-menu-item>\n    </v-menu-item-group>\n    <v-menu-item-group title="\u5206\u7ec42">\n      <v-menu-item uuid="3">\u9009\u98793</v-menu-item>\n      <v-menu-item uuid="4">\u9009\u98794</v-menu-item>\n    </v-menu-item-group>\n  </v-sub-menu>\n  <v-sub-menu uuid="sub2" title="\u5bfc\u822a\u4e8c">\n    <v-menu-item uuid="5">\u9009\u98795</v-menu-item>\n    <v-menu-item uuid="6">\u9009\u98796</v-menu-item>\n    <v-sub-menu uuid="sub3" title="\u4e09\u7ea7\u5bfc\u822a">\n      <v-menu-item uuid="7">\u9009\u98797</v-menu-item>\n      <v-menu-item uuid="8">\u9009\u98798</v-menu-item>\n    </v-sub-menu>\n  </v-sub-menu>\n  <v-sub-menu uuid="sub4" title="\u5bfc\u822a\u4e09">\n    <v-menu-item uuid="9">\u9009\u98799</v-menu-item>\n    <v-menu-item uuid="10">\u9009\u987910</v-menu-item>\n    <v-menu-item uuid="11">\u9009\u987911</v-menu-item>\n    <v-menu-item uuid="12">\u9009\u987912</v-menu-item>\n  </v-sub-menu>\n</v-menu>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vMenu: atui.Menu,\n    vMenuItem: atui.Menu.MenuItem,\n    vMenuItemGroup: atui.Menu.MenuItemGroup,\n    vSubMenu: atui.Menu.SubMenu\n  },\n  methods: {\n    click(e,d) {\n      console.log('menu-click',e,d)\n    }\n  }\n})"}}});