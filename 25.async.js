(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{WN3O:function(e,t,a){e.exports={standardList:"antd-pro-pages-list-basic-list-standardList",headerInfo:"antd-pro-pages-list-basic-list-headerInfo",listContent:"antd-pro-pages-list-basic-list-listContent",listContentItem:"antd-pro-pages-list-basic-list-listContentItem",extraContentSearch:"antd-pro-pages-list-basic-list-extraContentSearch",listCard:"antd-pro-pages-list-basic-list-listCard",standardListForm:"antd-pro-pages-list-basic-list-standardListForm",formResult:"antd-pro-pages-list-basic-list-formResult"}},w9uU:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var r=l(a("VXEj"));a("Telt");var u=l(a("Tckk"));a("IzEo");var d=l(a("bx4M"));a("14J3");var i=l(a("BMrR"));a("jCWc");var s=l(a("kPKH"));a("iQDF");var o=l(a("+eQT")),c=l(a("jehZ"));a("+L6B");var f=l(a("2/Rp"));a("qVdP");var m=l(a("jsC+"));a("Pwec");var p=l(a("CtXQ"));a("lUTK");var v=l(a("BvKs"));a("MXD1");var E=l(a("CFYs"));a("2qtc");var h=l(a("kLXV")),b=l(a("p0pE")),y=l(a("2Taf")),g=l(a("vZ4D")),w=l(a("MhPg")),C=l(a("l4Ni")),k=l(a("ujKo"));a("5NDa");var D=l(a("5rEg"));a("OaEy");var x=l(a("2fM7"));a("7Kak");var M=l(a("9yH6"));a("y8nQ");var S,I,N,L,T=l(a("Vl3Y")),O=n(a("q1tI")),R=a("i8i4"),Y=l(a("wd/R")),B=a("MuoO"),V=l(a("zHco")),A=l(a("ALo4")),q=l(a("WN3O"));function F(e){var t=H();return function(){var a,l=(0,k.default)(e);if(t){var n=(0,k.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,C.default)(this,a)}}function H(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var P=T.default.Item,j=M.default.Button,z=M.default.Group,K=x.default.Option,Q=D.default.Search,X=D.default.TextArea,J=(S=(0,B.connect)(function(e){var t=e.list,a=e.loading;return{list:t,loading:a.models.list}}),I=T.default.create(),S(N=I((L=function(e){(0,w.default)(a,e);var t=F(a);function a(){var e;(0,y.default)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n)),e.state={visible:!1,done:!1},e.formLayout={labelCol:{span:7},wrapperCol:{span:13}},e.showModal=function(){e.setState({visible:!0,current:void 0})},e.showEditModal=function(t){e.setState({visible:!0,current:t})},e.handleDone=function(){setTimeout(function(){return e.addBtn.blur()},0),e.setState({done:!1,visible:!1})},e.handleCancel=function(){setTimeout(function(){return e.addBtn.blur()},0),e.setState({visible:!1})},e.handleSubmit=function(t){t.preventDefault();var a=e.props,l=a.dispatch,n=a.form,r=e.state.current,u=r?r.id:"";setTimeout(function(){return e.addBtn.blur()},0),n.validateFields(function(t,a){t||(e.setState({done:!0}),l({type:"list/submit",payload:(0,b.default)({id:u},a)}))})},e.deleteItem=function(t){var a=e.props.dispatch;a({type:"list/submit",payload:{id:t}})},e}return(0,g.default)(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"list/fetch",payload:{count:5}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list.list,l=t.loading,n=this.props.form.getFieldDecorator,b=this.state,y=b.visible,g=b.done,w=b.current,C=void 0===w?{}:w,k=function(t,a){"edit"===t?e.showEditModal(a):"delete"===t&&h.default.confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id)}})},M=g?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},S=function(e){var t=e.title,a=e.value,l=e.bordered;return O.default.createElement("div",{className:q.default.headerInfo},O.default.createElement("span",null,t),O.default.createElement("p",null,a),l&&O.default.createElement("em",null))},I=O.default.createElement("div",{className:q.default.extraContent},O.default.createElement(z,{defaultValue:"all"},O.default.createElement(j,{value:"all"},"\u5168\u90e8"),O.default.createElement(j,{value:"progress"},"\u8fdb\u884c\u4e2d"),O.default.createElement(j,{value:"waiting"},"\u7b49\u5f85\u4e2d")),O.default.createElement(Q,{className:q.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),N={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},L=function(e){var t=e.data,a=t.owner,l=t.createdAt,n=t.percent,r=t.status;return O.default.createElement("div",{className:q.default.listContent},O.default.createElement("div",{className:q.default.listContentItem},O.default.createElement("span",null,"Owner"),O.default.createElement("p",null,a)),O.default.createElement("div",{className:q.default.listContentItem},O.default.createElement("span",null,"\u5f00\u59cb\u65f6\u95f4"),O.default.createElement("p",null,(0,Y.default)(l).format("YYYY-MM-DD HH:mm"))),O.default.createElement("div",{className:q.default.listContentItem},O.default.createElement(E.default,{percent:n,status:r,strokeWidth:6,style:{width:180}})))},B=function(e){return O.default.createElement(m.default,{overlay:O.default.createElement(v.default,{onClick:function(t){var a=t.key;return k(a,e.current)}},O.default.createElement(v.default.Item,{key:"edit"},"\u7f16\u8f91"),O.default.createElement(v.default.Item,{key:"delete"},"\u5220\u9664"))},O.default.createElement("a",null,"\u66f4\u591a ",O.default.createElement(p.default,{type:"down"})))},F=function(){return g?O.default.createElement(A.default,{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:O.default.createElement(f.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:q.default.formResult}):O.default.createElement(T.default,{onSubmit:e.handleSubmit},O.default.createElement(P,(0,c.default)({label:"\u4efb\u52a1\u540d\u79f0"},e.formLayout),n("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}],initialValue:C.title})(O.default.createElement(D.default,{placeholder:"\u8bf7\u8f93\u5165"}))),O.default.createElement(P,(0,c.default)({label:"\u5f00\u59cb\u65f6\u95f4"},e.formLayout),n("createdAt",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4"}],initialValue:C.createdAt?(0,Y.default)(C.createdAt):null})(O.default.createElement(o.default,{showTime:!0,placeholder:"\u8bf7\u9009\u62e9",format:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}}))),O.default.createElement(P,(0,c.default)({label:"\u4efb\u52a1\u8d1f\u8d23\u4eba"},e.formLayout),n("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4efb\u52a1\u8d1f\u8d23\u4eba"}],initialValue:C.owner})(O.default.createElement(x.default,{placeholder:"\u8bf7\u9009\u62e9"},O.default.createElement(K,{value:"\u4ed8\u6653\u6653"},"\u4ed8\u6653\u6653"),O.default.createElement(K,{value:"\u5468\u6bdb\u6bdb"},"\u5468\u6bdb\u6bdb")))),O.default.createElement(P,(0,c.default)({},e.formLayout,{label:"\u4ea7\u54c1\u63cf\u8ff0"}),n("subDescription",{rules:[{message:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26\u7684\u4ea7\u54c1\u63cf\u8ff0\uff01",min:5}],initialValue:C.subDescription})(O.default.createElement(X,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"}))))};return O.default.createElement(V.default,null,O.default.createElement("div",{className:q.default.standardList},O.default.createElement(d.default,{bordered:!1},O.default.createElement(i.default,null,O.default.createElement(s.default,{sm:8,xs:24},O.default.createElement(S,{title:"\u6211\u7684\u5f85\u529e",value:"8\u4e2a\u4efb\u52a1",bordered:!0})),O.default.createElement(s.default,{sm:8,xs:24},O.default.createElement(S,{title:"\u672c\u5468\u4efb\u52a1\u5e73\u5747\u5904\u7406\u65f6\u95f4",value:"32\u5206\u949f",bordered:!0})),O.default.createElement(s.default,{sm:8,xs:24},O.default.createElement(S,{title:"\u672c\u5468\u5b8c\u6210\u4efb\u52a1\u6570",value:"24\u4e2a\u4efb\u52a1"})))),O.default.createElement(d.default,{className:q.default.listCard,bordered:!1,title:"\u6807\u51c6\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:I},O.default.createElement(f.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal,ref:function(t){e.addBtn=(0,R.findDOMNode)(t)}},"\u6dfb\u52a0"),O.default.createElement(r.default,{size:"large",rowKey:"id",loading:l,pagination:N,dataSource:a,renderItem:function(t){return O.default.createElement(r.default.Item,{actions:[O.default.createElement("a",{onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"\u7f16\u8f91"),O.default.createElement(B,{current:t})]},O.default.createElement(r.default.Item.Meta,{avatar:O.default.createElement(u.default,{src:t.logo,shape:"square",size:"large"}),title:O.default.createElement("a",{href:t.href},t.title),description:t.subDescription}),O.default.createElement(L,{data:t}))}}))),O.default.createElement(h.default,(0,c.default)({title:g?null:"\u4efb\u52a1".concat(C?"\u7f16\u8f91":"\u6dfb\u52a0"),className:q.default.standardListForm,width:640,bodyStyle:g?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:y},M),F()))}}]),a}(O.PureComponent),N=L))||N)||N),W=J;t.default=W}}]);