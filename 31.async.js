(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{FMMD:function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE"));a("+L6B");var d=n(a("2/Rp"));a("Pwec");var i=n(a("CtXQ")),o=n(a("2Taf")),u=n(a("vZ4D")),c=n(a("rlhR")),s=n(a("MhPg")),f=n(a("l4Ni")),p=n(a("ujKo"));a("5NDa");var h=n(a("5rEg"));a("ozfa");var v=n(a("MJZm")),y=n(a("i8i4")),m=(n(a("17x9")),l(a("q1tI"))),g=n(a("EVdn"));function k(e){var t=b();return function(){var a,l=(0,p.default)(e);if(t){var n=(0,p.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,f.default)(this,a)}}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var x=v.default.TreeNode,w=h.default.Search,C=function(e){(0,s.default)(a,e);var t=k(a);function a(e){var l;(0,o.default)(this,a),l=t.call(this,e),l.handButton=function(e){e.stopPropagation(),e.preventDefault();var t=y.default.findDOMNode((0,c.default)(l)),a=y.default.findDOMNode((0,c.default)(l)).ownerDocument,n=(0,g.default)(t).find("div.ant-dropdown").hasClass("hide"),r=(0,g.default)(a).find("div.frame-head-wrapper-scroll").length,d=(0,g.default)(a).find("div.ant-dropdown").length;console.log((0,g.default)(a));for(var i=0;i<d;i++)(0,g.default)(a).find("div.ant-dropdown").eq(i).addClass("hide");n?((0,g.default)(t).find("div.ant-dropdown").removeClass("hide"),l.setState({isIcon:!0})):((0,g.default)(t).find("div.ant-dropdown").addClass("hide"),l.setState({isIcon:!1})),r&&(n?(0,g.default)(a).find("div.frame-head-wrapper-scroll").css({overflow:"visible"}):(0,g.default)(a).find("div.frame-head-wrapper-scroll").css({overflowX:"auto",overflowY:"hidden"})),(0,g.default)(a).unbind("click").bind("click",function(e){e.stopPropagation(),e.preventDefault(),(0,g.default)(t).find("div.ant-dropdown").addClass("hide"),l.setState({isIcon:!1}),r&&(0,g.default)(a).find("div.frame-head-wrapper-scroll").css({overflowX:"auto",overflowY:"hidden"})})},l.handeDown=function(e){e.stopPropagation(),e.preventDefault();var t=y.default.findDOMNode((0,c.default)(l)),a=l.props.multiple;a&&(0,g.default)(t).find("div.ant-dropdown").removeClass("hide");var n=y.default.findDOMNode((0,c.default)(l)).ownerDocument,r=(0,g.default)(n).find("div.frame-head-wrapper-scroll").length;(0,g.default)(n).unbind("click").bind("click",function(e){e.stopPropagation(),e.preventDefault(),(0,g.default)(t).find("div.ant-dropdown").addClass("hide"),l.setState({isIcon:!1}),r&&(0,g.default)(n).find("div.frame-head-wrapper-scroll").css({overflowX:"auto",overflowY:"hidden"})})},l.changeTreeList=function(e,t){var a=function e(a){return a.map(function(a){return a=Object.assign(a,{label:a[t[0]]},{value:a[t[1]]}),a.children&&a.children.length>0&&(a=Object.assign(a,{children:e(a.children)})),a})};return a(e)},l.updateTreeList=function(e){var t=e,a=[],l=function e(t){t.forEach(function(t){a.push({value:t.value,label:t.label}),t.children&&t.children.length>0&&e(t.children)})};return l(t),a},l.onExpand=function(e){l.setState({expandedKeys:e,autoExpandParent:!1})},l.onCheckedKeyChange=function(e){l.props.onCheckedKeyChange(e)},l.onCheck=function(e,t){var a,n=0,r=[];l.setState({checkedKeys:e}),l.props.getAllNodes?(l.onCheckedKeyChange(e),n=e.length):(t.checkedNodes.map(function(e){e.props.children||(n++,"1"==n&&(a=e.props.title.props.children[2]),r.push(e.key))}),l.onCheckedKeyChange(r)),l.setState({SelectKey:"0"==n?"\u5168\u90e8":"1"!=n||l.props.getAllNodes?"\u9009\u4e2d"+n+"\u9879":a})},l.onSelect=function(e,t){var a=l.props.multiple;if(!a){var n=y.default.findDOMNode((0,c.default)(l));(0,g.default)(n).find("div.ant-dropdown").addClass("hide"),l.onCheckedKeyChange(e),l.setState({selectedKeys:e,SelectKey:t.selectedNodes[0]?t.selectedNodes[0].props.title.props.children[2]:"\u5168\u90e8"})}},l.onChange=function(e){var t=e.target.value,a=l.state.treeList,n=[];t?a.map(function(e){e.label&&e.label.indexOf(t)>-1&&n.push(e.value)}):a.map(function(e){n.push(e.value)}),l.setState({expandedKeys:n,searchValue:t,autoExpandParent:!0})},l.renderTreeNodes=function(e){var t=l.state.searchValue;return e.map(function(e){var a=e.label&&e.label.indexOf(t),n=e.label&&e.label.substr(0,a),r=e.label&&e.label.substr(a+t.length),d=a>-1?m.default.createElement("span",null,n,m.default.createElement("span",{style:{color:"#f50"}},t),r):m.default.createElement("span",null,e.label);return e.children?m.default.createElement(x,{title:d,key:e.value},l.renderTreeNodes(e.children)):m.default.createElement(x,{title:d,key:e.value})})};var n=e.spanName,r=e.treeData,d=e.isShowSearch,i=e.maxHeight,u=r[0].children.map(function(e){return e.value});r=l.changeTreeList(r,e.LabelAndValue);var s=l.updateTreeList(r);return l.state={treeData:r,expandedKeys:u,autoExpandParent:!0,checkedKeys:l.props.checkedKeys,selectedKeys:l.props.selectedKeys,SelectKey:l.props.checkedKeys.length>0&&"\u9009\u4e2d\u4e86"+l.props.checkedKeys.length+"\u9879"||"\u5168\u90e8",searchValue:"",isIcon:!1,spanName:n,isShowSearch:d,treeList:s,maxHeight:i},l}return(0,u.default)(a,[{key:"render",value:function(){var e={width:this.props.divWidth,height:this.props.divHeight,display:"inline-block"},t={display:"inline-block",width:200,minHeight:32,paddingRight:12,verticalAlign:"middle",textAlign:"left",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},a={display:"inline-block",minWidth:0,textAlign:"right"},l=this.state.treeData,n=this.props,o=n.dropdownMatchSelectWidth,u=n.multiple,c=o?{width:200}:{minWidth:200},s={checkable:u,onExpand:this.onExpand,expandedKeys:this.state.expandedKeys,autoExpandParent:this.state.autoExpandParent,onCheck:this.onCheck,checkedKeys:this.state.checkedKeys,selectedKeys:this.state.selectedKeys,onSelect:this.onSelect};return m.default.createElement("div",{style:e},m.default.createElement("span",{style:a},this.state.spanName),m.default.createElement("span",{style:{position:"relative",display:"inline-block"}},m.default.createElement(d.default,{title:this.state.SelectKey,style:t,onClick:this.handButton},this.state.SelectKey,m.default.createElement(i.default,{style:{position:"absolute",right:8,top:10},type:this.state.isIcon?"up":"down"})),m.default.createElement("div",{className:"ant-dropdown hide",onClick:this.handeDown,style:(0,r.default)({},c,{top:this.props.selectTop,left:0})},m.default.createElement("div",{className:"ant-dropdown-menu"},this.state.isShowSearch&&m.default.createElement(w,{style:{width:"94%",margin:"2% 3% 0 3%"},placeholder:this.props.placeholder,onChange:this.onChange}),m.default.createElement("div",{style:{maxHeight:this.state.maxHeight,overflow:"auto",minHeight:0}},m.default.createElement(v.default,s,this.renderTreeNodes(l)))))))}}]),a}(m.Component);t.default=C,C.defaultProps={treeData:[],isShowSearch:!1,placeholder:"Search...",spanName:"",onCheckedKeyChange:function(){},getAllNodes:!1,divWidth:"300px",dropdownMatchSelectWidth:!1,divHeight:"50px",selectTop:"36px",maxHeight:"400px",checkedKeys:[],selectedKeys:[],LabelAndValue:["label","value"],multiple:!0}},ynxI:function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("g9YV");var d=n(a("wCAj")),i=n(a("2Taf")),o=n(a("vZ4D")),u=n(a("MhPg")),c=n(a("l4Ni")),s=n(a("ujKo"));a("Znn+");var f=n(a("ZTPi")),p=l(a("q1tI")),h=(n(a("17x9")),n(a("FMMD")));function v(e){var t=y();return function(){var a,l=(0,s.default)(e);if(t){var n=(0,s.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,c.default)(this,a)}}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}f.default.TabPane;var m=function(e){(0,u.default)(a,e);var t=v(a);function a(e){var l;(0,i.default)(this,a),l=t.call(this,e),l.onCheckedKeyChange=function(e){console.log(e)};var n=[{title:"\u53c2\u6570\t",dataIndex:"Param",key:"Param",render:function(e){return p.default.createElement("a",{href:"javascript:;"},e)}},{title:"\u8bf4\u660e",dataIndex:"explain",key:"explain"},{title:"\u7c7b\u578b",dataIndex:"type",key:"type",render:function(e,t){return p.default.createElement("a",{href:"https://github.com/kuhami/react-ant-pro/blob/master/src/components/TreeCheck/index.js",style:{color:"#c41d7f"}},e)}},{title:"\u9ed8\u8ba4\u503c",key:"Default",dataIndex:"Default"}],r=[{key:"1",Param:"spanName",explain:"TreeCheck \u9009\u62e9\u5668\u5934\u90e8\u6dfb\u52a0span\u6807\u7b7e",type:"string",Default:"-"},{key:"2",Param:"treeData",explain:"treeData \u4e3a TreeCheck\u7684JSON\u683c\u5f0f",type:"array",Default:"[ ]"},{key:"3",Param:"isShowSearch",explain:"\u662f\u5426\u663e\u793a\u641c\u7d22\u6846",type:"bool",Default:"false"},{key:"4",Param:"placeholder",explain:"\u641c\u7d22\u6846\u7684placeholder\u503c",type:"string",Default:"Search..."},{key:"5",Param:"getAllNodes",explain:"\u662f\u5426\u9009\u53d6\u6240\u6709\u8282\u70b9\uff0ctrue\uff1a\u9009\u53d6\u6240\u6709\u7684\u8282\u70b9\uff0cfalse\uff1a\u53ea\u9009\u5b50\u8282\u70b9",type:"bool",Default:"false"},{key:"6",Param:"divWidth",explain:"TreeCheck \u9009\u62e9\u5668\u7684\u5bbd\u5ea6",type:"string",Default:"300px"},{key:"7",Param:"divHeight",explain:"TreeCheck \u9009\u62e9\u5668\u7684\u9ad8\u5ea6",type:"string",Default:"50px"},{key:"8",Param:"selectTop",explain:"\u4e0b\u62c9\u9009\u6846\u7684\u8ddd\u79bbbutton\u7684\u9ad8\u5ea6",type:"string",Default:"36px"},{key:"9",Param:"maxHeight",explain:"\u4e0b\u62c9\u9009\u6846\u7684\u6700\u5927\u9ad8\u5ea6",type:"string",Default:"400px"},{key:"10",Param:"checkedKeys",explain:"\u4e0b\u62c9\u9009\u6846\u9ed8\u8ba4\u9009\u79cd\u7684\u8282\u70b9",type:"array",Default:"[ ]"},{key:"11",Param:"LabelAndValue",explain:"treeData\u4e2d\u9700\u8981label\u548cvalue\u4e24\u4e2a\u503c\uff0c\u82e5\u6ca1\u6709label\u548cvalue\uff0c\u5219\u8be5\u5c5e\u6027\u53ef\u4ee5\u8f6c\u5316",type:"array",Default:'["label","value"]'},{key:"12",Param:"onCheckedKeyChange",explain:"TreeCheck \u88ab\u9009\u4e2d\u8282\u70b9\u65f6\u7684\u56de\u8c03",type:"function(checkedArrs)",Default:"-"},{key:"13",Param:"dropdownMatchSelectWidth",explain:"\u4e0b\u62c9\u83dc\u5355\u548c\u9009\u62e9\u5668\u540c\u5bbd",type:"bool",Default:"false"},{key:"14",Param:"multiple",explain:"\u4e0b\u62c9\u9009\u6846\u662f\u5426\u591a\u9009",type:"bool",Default:"true"}];return l.state={dataSource:r,columns:n},l}return(0,o.default)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=[{label:"\u5168\u90e8",value:"all",children:[{label:"0-0",value:"00",children:[{label:"0-0-0",value:"000",children:[{label:"0-0-0-0-0-0-0-0-0-0-0",value:"0000"},{label:"0-0-0-1",value:"0001"},{label:"0-0-0-2",value:"0002"}]},{label:"0-0-1",value:"001",children:[{label:"0-0-1-0",value:"0010"},{label:"0-0-1-1",value:"0011"},{label:"0-0-1-2",value:"0012"}]},{label:"0-0-2",value:"002"}]},{label:"0-1",value:"01",children:[{label:"0-1-0-0",value:"0100"},{label:"0-1-0-1",value:"0101"},{label:"0-1-0-2",value:"0102"}]},{label:"0-2",value:"02"}]}];return p.default.createElement(r.default,{title:"\u591a\u9009SelectTree",bordered:!1},p.default.createElement(h.default,{treeData:t,isShowSearch:!0,spanName:"\u591a\u9009Select\uff1a",getAllNodes:!0,multiple:!0,onCheckedKeyChange:function(t){return e.onCheckedKeyChange(t)}}),p.default.createElement("h3",null,"API"),p.default.createElement("p",null,"TreeCheck \u4e3a\u591a\u9009SelectTree\uff0c\u672c\u7ec4\u4ef6\u4e3a\u9002\u5e94\u7279\u6b8a\u573a\u666f\u800c\u5c01\u88c5\u3002"),p.default.createElement(d.default,{columns:this.state.columns,dataSource:this.state.dataSource,pagination:!1}))}}]),a}(p.Component);t.default=m,m.defaultProps={bordered:!0}}}]);