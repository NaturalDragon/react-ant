(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"4Ofr":function(e,t,a){e.exports={themeColor:"antd-pro-components-setting-drawer-theme-color-themeColor",title:"antd-pro-components-setting-drawer-theme-color-title",colorBlock:"antd-pro-components-setting-drawer-theme-color-colorBlock"}},"9TQO":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var l=n(a("3S7+"));a("Pwec");var r=n(a("CtXQ")),o=n(a("q1tI")),i=n(a("BFsb")),c=function(e){var t=e.value,a=e.onChange,n=e.list;return o.default.createElement("div",{className:i.default.blockChecbox,key:t},n.map(function(e){return o.default.createElement(l.default,{title:e.title,key:e.key},o.default.createElement("div",{className:i.default.item,onClick:function(){return a(e.key)}},o.default.createElement("img",{src:e.url,alt:e.key}),o.default.createElement("div",{className:i.default.selectIcon,style:{display:t===e.key?"block":"none"}},o.default.createElement(r.default,{type:"check"}))))}))},d=c;t.default=d},BFsb:function(e,t,a){e.exports={content:"antd-pro-components-setting-drawer-index-content",blockChecbox:"antd-pro-components-setting-drawer-index-blockChecbox",item:"antd-pro-components-setting-drawer-index-item",selectIcon:"antd-pro-components-setting-drawer-index-selectIcon",color_block:"antd-pro-components-setting-drawer-index-color_block",title:"antd-pro-components-setting-drawer-index-title",handle:"antd-pro-components-setting-drawer-index-handle",productionHint:"antd-pro-components-setting-drawer-index-productionHint"}},PceP:function(e,t,a){"use strict";var n=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bbsP");var r=n(a("/wGt"));a("fOrg");var o=n(a("+KLJ"));a("+L6B");var i=n(a("2/Rp"));a("miYZ");var c=n(a("tsqr"));a("/zsF");var d=n(a("PArb"));a("Pwec");var s=n(a("CtXQ"));a("5Dmo");var u=n(a("3S7+"));a("Mwp2");var f=n(a("VXEj"));a("BoS7");var p=n(a("Sdc0")),m=n(a("2Taf")),g=n(a("vZ4D")),h=n(a("MhPg")),y=n(a("l4Ni")),v=n(a("ujKo")),k=n(a("p0pE"));a("OaEy");var E,b,C,w=n(a("2fM7")),M=l(a("q1tI")),S=a("LLXN"),x=a("P5Jw"),N=a("MuoO"),P=n(a("BGR+")),j=n(a("BFsb")),z=n(a("WJM/")),F=n(a("9TQO"));function O(e){var t=B();return function(){var a,n=(0,v.default)(e);if(t){var l=(0,v.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,y.default)(this,a)}}function B(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var D=w.default.Option,H=function(e){var t=e.children,a=e.title,n=e.style;return M.default.createElement("div",{style:(0,k.default)({},n,{marginBottom:24})},M.default.createElement("h3",{className:j.default.title},a),t)},I=(E=(0,N.connect)(function(e){var t=e.setting;return{setting:t}}),E((C=function(e){(0,h.default)(a,e);var t=O(a);function a(){var e;(0,m.default)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return e=t.call.apply(t,[this].concat(l)),e.state={collapse:!1},e.getLayoutSetting=function(){var t=e.props.setting,a=t.contentWidth,n=t.fixedHeader,l=t.layout,r=t.autoHideHeader,o=t.fixSiderbar,i=t.hidenAntTabs;return[{title:(0,S.formatMessage)({id:"app.setting.content-width"}),action:M.default.createElement(w.default,{value:a,size:"small",onSelect:function(t){return e.changeSetting("contentWidth",t)},style:{width:80}},"sidemenu"===l?null:M.default.createElement(D,{value:"Fixed"},(0,S.formatMessage)({id:"app.setting.content-width.fixed"})),M.default.createElement(D,{value:"Fluid"},(0,S.formatMessage)({id:"app.setting.content-width.fluid"})))},{title:(0,S.formatMessage)({id:"app.setting.fixedheader"}),action:M.default.createElement(p.default,{size:"small",checked:!!n,onChange:function(t){return e.changeSetting("fixedHeader",t)}})},{title:(0,S.formatMessage)({id:"app.setting.hideheader"}),disabled:!n,disabledReason:(0,S.formatMessage)({id:"app.setting.hideheader.hint"}),action:M.default.createElement(p.default,{size:"small",checked:!!r,onChange:function(t){return e.changeSetting("autoHideHeader",t)}})},{title:(0,S.formatMessage)({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===l,disabledReason:(0,S.formatMessage)({id:"app.setting.fixedsidebar.hint"}),action:M.default.createElement(p.default,{size:"small",checked:!!o,onChange:function(t){return e.changeSetting("fixSiderbar",t)}})},{title:(0,S.formatMessage)({id:"app.setting.hidenAntTabs"}),action:M.default.createElement(p.default,{size:"small",checked:!!i,onChange:function(t){return e.changeSetting("hidenAntTabs",t)}})}]},e.changeSetting=function(t,a){var n=e.props.setting,l=(0,k.default)({},n);l[t]=a,"layout"===t?l.contentWidth="topmenu"===a?"Fixed":"Fluid":"fixedHeader"!==t||a||(l.autoHideHeader=!1),e.setState(l,function(){var t=e.props.dispatch;t({type:"setting/changeSetting",payload:e.state})})},e.togglerContent=function(){var t=e.state.collapse;e.setState({collapse:!t})},e.renderLayoutSettingItem=function(e){var t=M.default.cloneElement(e.action,{disabled:e.disabled});return M.default.createElement(u.default,{title:e.disabled?e.disabledReason:"",placement:"left"},M.default.createElement(f.default.Item,{actions:[t]},M.default.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},e}return(0,g.default)(a,[{key:"render",value:function(){var e=this,t=this.props.setting,a=t.navTheme,n=t.primaryColor,l=t.layout,u=t.colorWeak,m=this.state.collapse;return M.default.createElement(r.default,{visible:m,width:300,onClose:this.togglerContent,placement:"right",handler:M.default.createElement("div",{className:j.default.handle},M.default.createElement(s.default,{type:m?"close":"setting",style:{color:"#fff",fontSize:20}})),onHandleClick:this.togglerContent,style:{zIndex:999}},M.default.createElement("div",{className:j.default.content},M.default.createElement(H,{title:(0,S.formatMessage)({id:"app.setting.pagestyle"})},M.default.createElement(F.default,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:(0,S.formatMessage)({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:(0,S.formatMessage)({id:"app.setting.pagestyle.light"})}],value:a,onChange:function(t){return e.changeSetting("navTheme",t)}})),M.default.createElement(z.default,{title:(0,S.formatMessage)({id:"app.setting.themecolor"}),value:n,onChange:function(t){return e.changeSetting("primaryColor",t)}}),M.default.createElement(d.default,null),M.default.createElement(H,{title:(0,S.formatMessage)({id:"app.setting.navigationmode"})},M.default.createElement(F.default,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:(0,S.formatMessage)({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:(0,S.formatMessage)({id:"app.setting.topmenu"})}],value:l,onChange:function(t){return e.changeSetting("layout",t)}})),M.default.createElement(f.default,{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),M.default.createElement(d.default,null),M.default.createElement(H,{title:(0,S.formatMessage)({id:"app.setting.othersettings"})},M.default.createElement(f.default.Item,{actions:[M.default.createElement(p.default,{size:"small",checked:!!u,onChange:function(t){return e.changeSetting("colorWeak",t)}})]},(0,S.formatMessage)({id:"app.setting.weakmode"}))),M.default.createElement(d.default,null),M.default.createElement(x.CopyToClipboard,{text:JSON.stringify((0,P.default)(t,["colorWeak"]),null,2),onCopy:function(){return c.default.success((0,S.formatMessage)({id:"app.setting.copyinfo"}))}},M.default.createElement(i.default,{block:!0,icon:"copy"},(0,S.formatMessage)({id:"app.setting.copy"}))),M.default.createElement(o.default,{type:"warning",className:j.default.productionHint,message:M.default.createElement("div",null,(0,S.formatMessage)({id:"app.setting.production.hint"})," ",M.default.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),a}(M.PureComponent),b=C))||b),L=I;t.default=L},"WJM/":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5Dmo");var l=n(a("3S7+")),r=n(a("jehZ"));a("Pwec");var o=n(a("CtXQ")),i=n(a("Y/ft")),c=n(a("q1tI")),d=a("LLXN"),s=n(a("4Ofr")),u=function(e){var t=e.color,a=e.check,n=(0,i.default)(e,["color","check"]);return c.default.createElement("div",(0,r.default)({},n,{style:{backgroundColor:t}}),a?c.default.createElement(o.default,{type:"check"}):"")},f=function(e){var t=e.colors,a=e.title,n=e.value,r=e.onChange,o=t;return t||(o=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),c.default.createElement("div",{className:s.default.themeColor},c.default.createElement("h3",{className:s.default.title},a),c.default.createElement("div",{className:s.default.content},o.map(function(e){var t=e.key,a=e.color;return c.default.createElement(l.default,{key:a,title:(0,d.formatMessage)({id:"app.setting.themecolor.".concat(t)})},c.default.createElement(u,{className:s.default.colorBlock,color:a,check:n===a,onClick:function(){return r&&r(a)}}))})))},p=f;t.default=p}}]);