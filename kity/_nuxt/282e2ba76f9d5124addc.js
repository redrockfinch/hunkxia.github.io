(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1385:function(module,__webpack_exports__,__webpack_require__){"use strict";var axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1388),axios__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__),_layouts_code_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(251),that=null,code="\nvar paper = new kity.Paper('code_result');\n\nvar rect = paper.put(new kity.Rect());\nvar text = paper.put(new kity.Text());\n\ntext.setContent('hello kity!');\ntext.fill('white');\ntext.setX(50);\ntext.setY(50);\n\nrect.setBox(text.getBoundaryBox().expand(15, 10, 15, 10));\nrect.fill('blue');\n\nconsole.log(paper)\n";__webpack_exports__.a={data:function(){return that=this,{code:code}},mounted:function mounted(){eval(this.code)},components:{code_box:_layouts_code_box__WEBPACK_IMPORTED_MODULE_1__.a}}},1412:function(t,e,_){"use strict";_.r(e);var r=_(1385).a,o=_(60),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"layout-wrap"},[_("a-breadcrumb",{staticStyle:{margin:"16px 0"}},[_("a-breadcrumb-item",[t._v("Home")]),t._v(" "),_("a-breadcrumb-item",[t._v("List")]),t._v(" "),_("a-breadcrumb-item",[t._v("App")])],1),t._v(" "),_("a-layout-content",{staticClass:"layout-box"},[_("a-card",{attrs:{title:"Card Title",bordered:!1}},[_("a-divider",{attrs:{orientation:"left"}},[t._v("效果")]),t._v(" "),_("div",{staticClass:"code_result",attrs:{id:"code_result"}}),t._v(" "),_("a-divider",{attrs:{orientation:"left"}},[t._v("代码")]),t._v(" "),_("code_box",{attrs:{code_src:t.code}}),t._v(" "),_("a-divider",{attrs:{orientation:"left"}},[t._v("代码")]),t._v(" "),_("code_box",{attrs:{code_src:t.code}})],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);