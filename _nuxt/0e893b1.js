(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{303:function(t,e,n){var content=n(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("4b15956c",content,!0,{sourceMap:!1})},304:function(t,e,n){"use strict";n.r(e);n(39),n(11),n(137),n(19);var r=n(76),o=n(140),l=n(77),c=n(78),d=n(53),f=n(13),m=n(54),v=n(139),h=n(138);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},_=function(t){Object(l.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"keydown",value:function(t){this.useKeydown&&this.$emit("input",t.target.value)}},{key:"widthClass",get:function(){return"atom-form-input-text--width-".concat(this.width)}},{key:"inputValue",get:function(){return this.value},set:function(t){this.$emit("input",t)}}]),n}(Object(m.mixins)(h.a));x([Object(m.Prop)({default:""})],_.prototype,"value",void 0),x([Object(m.Prop)({default:""})],_.prototype,"placeholder",void 0),x([Object(m.Prop)({default:v.ComponentConst.defaultValue.formInputWidth})],_.prototype,"width",void 0),x([Object(m.Prop)({default:!1})],_.prototype,"isDisabled",void 0),x([Object(m.Prop)({default:v.ComponentConst.defaultValue.formInputTextType})],_.prototype,"type",void 0),x([Object(m.Prop)({default:!1})],_.prototype,"isTrim",void 0),x([Object(m.Prop)({default:!1})],_.prototype,"useKeydown",void 0);var j=_=x([m.Component],_),O=(n(306),n(52)),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isTrim?n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],class:["atom-form-input-text",t.widthClass],attrs:{type:t.type,placeholder:t.placeholder,disabled:t.isDisabled},domProps:{value:t.inputValue},on:{input:[function(e){e.target.composing||(t.inputValue=e.target.value.trim())},t.keydown],blur:function(e){return t.$forceUpdate()}}}):"checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:["atom-form-input-text",t.widthClass],attrs:{placeholder:t.placeholder,disabled:t.isDisabled,type:"checkbox"},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{input:t.keydown,change:function(e){var n=t.inputValue,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&(t.inputValue=n.concat([null])):l>-1&&(t.inputValue=n.slice(0,l).concat(n.slice(l+1)))}else t.inputValue=o}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:["atom-form-input-text",t.widthClass],attrs:{placeholder:t.placeholder,disabled:t.isDisabled,type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{input:t.keydown,change:function(e){t.inputValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:["atom-form-input-text",t.widthClass],attrs:{placeholder:t.placeholder,disabled:t.isDisabled,type:t.type},domProps:{value:t.inputValue},on:{input:[function(e){e.target.composing||(t.inputValue=e.target.value)},t.keydown]}})}),[],!1,null,"7222725c",null);e.default=component.exports},306:function(t,e,n){"use strict";var r=n(303);n.n(r).a},307:function(t,e,n){(e=n(40)(!1)).push([t.i,".atom-form-input-text[data-v-7222725c]{padding-left:.5rem;padding-right:.5rem;height:2.5rem;font-size:.875rem;border-width:1px;border-radius:.25rem}.atom-form-input-text[data-v-7222725c]:active,.atom-form-input-text[data-v-7222725c]:focus{outline:0}.atom-form-input-text[data-v-7222725c]:disabled{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity));cursor:not-allowed}.atom-form-input-text--width-sm[data-v-7222725c]{width:10rem}.atom-form-input-text--width-base[data-v-7222725c]{width:14rem}.atom-form-input-text--width-lg[data-v-7222725c]{width:21rem}.atom-form-input-text--width-full[data-v-7222725c]{width:100%}",""]),t.exports=e},308:function(t,e,n){var content=n(330);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("b6e696f0",content,!0,{sourceMap:!1})},309:function(t,e,n){var content=n(332);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("07a3af1b",content,!0,{sourceMap:!1})},319:function(t,e,n){"use strict";n.r(e);n(39),n(11),n(137),n(19);var r=n(76),o=n(77),l=n(78),c=n(53),d=n(13),f=n(54),m=n(139),v=n(138);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},x=function(t){Object(o.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(Object(f.mixins)(v.a));y([Object(f.Prop)({required:!0})],x.prototype,"name",void 0),y([Object(f.Prop)({default:m.ComponentConst.defaultValue.formValidationMode})],x.prototype,"validationMode",void 0),y([Object(f.Prop)({default:""})],x.prototype,"validationRules",void 0);var _=x=y([f.Component],x),j=(n(329),n(52)),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ValidationProvider",{staticClass:"validation-form-item",attrs:{mode:t.validationMode,name:t.name,rules:t.validationRules},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[t._t("default"),t._v(" "),n("span",{staticClass:"validation-form-item__error"},[t._v(t._s(r[0]))])]}}],null,!0)})}),[],!1,null,"23aa9d01",null);e.default=component.exports},329:function(t,e,n){"use strict";var r=n(308);n.n(r).a},330:function(t,e,n){(e=n(40)(!1)).push([t.i,".validation-form-item[data-v-23aa9d01]{display:flex;flex-direction:column;width:100%}.validation-form-item__error[data-v-23aa9d01]{display:flex;justify-content:flex-start;align-items:center;height:1.5rem;font-size:.75rem;--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}",""]),t.exports=e},331:function(t,e,n){"use strict";var r=n(309);n.n(r).a},332:function(t,e,n){(e=n(40)(!1)).push([t.i,"h3[data-v-aab4b500]{font-weight:700;line-height:2}pre[data-v-aab4b500]{margin-top:1rem;margin-bottom:1rem;padding:1rem;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity));border-radius:.25rem}section+section[data-v-aab4b500]{margin-top:2rem}",""]),t.exports=e},364:function(t,e,n){"use strict";n.r(e);n(39),n(11),n(137),n(19);var r=n(76),o=n(77),l=n(78),c=n(53),d=n(13),f=n(54),m=n(138),v=n(304),h=n(319);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var o=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},_=function(t){Object(o.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).form={text:""},t.htmlStrings=['<ValidationProvider\n  v-slot="{ errors }"\n  :mode="validationMode"\n  :name="name"\n  :rules="validationRules"\n  class="validation-form-item"\n>\n  <atom-input\n    v-model="inputValue"\n    :theme="theme"\n    :size="size"\n    :width="width"\n    :rounded="rounded"\n    :is-disabled="isDisabled"\n  />\n  <span class="validation-form-item__error">{{ errors[0] }}</span>\n</ValidationProvider>\n\n@Prop({ required: true }) name!: string\n@Prop({ default: \'aggressive\' }) validationMode!: string\n@Prop({ default: \'\' }) validationRules!: string\n@Prop({ default: \'\' }) value!: string\n@Prop({ default: \'\' }) theme!: string\n@Prop({ default: \'\' }) size!: string\n@Prop({ default: \'\' }) width!: string\n@Prop({ default: \'\' }) rounded!: string\n@Prop({ default: false }) isDisabled!: boolean\n\nget inputValue: string = { return this.value }\nset inputValue(value: string) { this.$emit(\'input\', value) }\n\n// 同じ用にAtomInput系コンポーネント分コンポーネント作成\n','<ValidationProvider\n  v-slot="{ errors }"\n  :mode="validationMode"\n  :name="name"\n  :rules="validationRules"\n  class="validation-form-item"\n>\n  <slot />\n  <span class="validation-form-item__error">{{ errors[0] }}</span>\n</ValidationProvider>\n\n@Prop({ required: true }) name!: string\n@Prop({ default: \'aggressive\' }) validationMode!: string\n@Prop({ default: \'\' }) validationRules!: string','<validation-form-item\n  name="form"\n  validation-mode="aggressive"\n  validation-rules="required|max:10"\n>\n  <atom-form-input-text v-model="form.text" />\n</validation-form-item>\n<p>form.text: {{ form.text }}</p>\n\nform = { text: \'\' }'],t}return n}(Object(f.mixins)(m.a)),j=_=x([Object(f.Component)({components:{AtomFormInputText:v.default,ValidationFormItem:h.default}})],_),O=(n(331),n(52)),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("section",[n("h3",[t._v("❌ atomコンポーネントごとにvalidationコンポーネントを作成する")]),t._v(" "),n("pre",[n("code",[t._v(t._s(t.htmlStrings[0]))])]),t._v(" "),n("p",[t._v("コンポーネントの数が多くなるのでメンテナンスが大変")]),t._v(" "),n("p",[t._v("子コンポーネントで必要なpropsを大量にわたさないといけない")]),t._v(" "),n("p",[t._v("atomsコンポーネントの変更に影響を受ける")])]),t._v(" "),n("section",[n("h3",[t._v("\n      ⭕\n      validationとエラー表示に特化したコンポーネントにして、formはslotで渡す\n    ")]),t._v(" "),n("pre",[n("code",[t._v(t._s(t.htmlStrings[1]))])]),t._v(" "),n("p",[t._v("コンポーネントはひとつだけなのでメンテナンスが楽")]),t._v(" "),n("p",[t._v("コンポーネントはひとつだけなのですべてのformでスタイルが統一される")]),t._v(" "),n("p",[t._v("propsがシンプル")]),t._v(" "),n("p",[t._v("atomsコンポーネントの変更に影響を受けない")])]),t._v(" "),n("section",[n("h3",[t._v("使ってみる")]),t._v(" "),n("pre",[n("code",[t._v(t._s(t.htmlStrings[2]))])]),t._v(" "),n("validation-form-item",{attrs:{name:"form","validation-mode":"aggressive","validation-rules":"required|max:10"}},[n("atom-form-input-text",{model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),t._v(" "),n("p",[t._v("form.text: "+t._s(t.form.text))])],1)])}),[],!1,null,"aab4b500",null);e.default=component.exports;installComponents(component,{AtomFormInputText:n(304).default,ValidationFormItem:n(319).default})}}]);