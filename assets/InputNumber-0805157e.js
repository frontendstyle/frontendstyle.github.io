import{aN as Be,a7 as Me,aO as Te,aP as Se,ad as De,aa as X,d as Pe,ag as Ce,ah as le,n as R,ai as Fe,aj as Oe,aQ as g,P as Ae,aH as _e,b as Ue,am as s,an as q,aR as Q,aS as J,aT as Y,aq as I,aU as ke,aV as $e}from"./index-d4d1dfb2.js";import{u as Ee}from"./use-locale-bb735d99.js";import{u as Le}from"./use-form-item-d41cebbd.js";import{N as He,X as Z}from"./Button-510b489f.js";import{R as je,A as ze}from"./Remove-e53214a0.js";const Ge=n=>{const{textColorDisabled:i}=n;return{iconColorDisabled:i}},Ke=Be({name:"InputNumber",common:Me,peers:{Button:Te,Input:Se},self:Ge}),We=Ke;function Xe(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function qe(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function L(n){return n==null?!0:!Number.isNaN(n)}function ee(n,i){return n==null?"":i===void 0?String(n):n.toFixed(i)}function H(n){if(n===null)return null;if(typeof n=="number")return n;{const i=Number(n);return Number.isNaN(i)?null:i}}const Qe=De([X("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),X("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ne=800,te=100,Je=Object.assign(Object.assign({},le.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),ln=Pe({name:"InputNumber",props:Je,setup(n){const{mergedBorderedRef:i,mergedClsPrefixRef:p,mergedRtlRef:D}=Ce(n),u=le("InputNumber","-input-number",Qe,We,n,p),{localeRef:v}=Ee("InputNumber"),B=Le(n),{mergedSizeRef:re,mergedDisabledRef:ie,mergedStatusRef:ue}=B,d=R(null),j=R(null),z=R(null),P=R(n.defaultValue),ae=Fe(n,"value"),f=Oe(ae,P),h=R(""),C=e=>{const t=String(e).split(".")[1];return t?t.length:0},oe=e=>{const t=[n.min,n.max,n.step,e].map(l=>l===void 0?0:C(l));return Math.max(...t)},se=g(()=>{const{placeholder:e}=n;return e!==void 0?e:v.value.placeholder}),M=g(()=>{const e=H(n.step);return e!==null?e===0?1:Math.abs(e):1}),G=g(()=>{const e=H(n.min);return e!==null?e:null}),K=g(()=>{const e=H(n.max);return e!==null?e:null}),V=e=>{const{value:t}=f;if(e===t){b();return}const{"onUpdate:value":l,onUpdateValue:r,onChange:o}=n,{nTriggerFormInput:c,nTriggerFormChange:x}=B;o&&I(o,e),r&&I(r,e),l&&I(l,e),P.value=e,c(),x()},a=({offset:e,doUpdateIfValid:t,fixPrecision:l,isInputing:r})=>{const{value:o}=h;if(r&&qe(o))return!1;const c=(n.parse||Xe)(o);if(c===null)return t&&V(null),null;if(L(c)){const x=C(c),{precision:N}=n;if(N!==void 0&&N<x&&!l)return!1;let m=parseFloat((c+e).toFixed(N??oe(c)));if(L(m)){const{value:$}=K,{value:E}=G;if($!==null&&m>$){if(!t||r)return!1;m=$}if(E!==null&&m<E){if(!t||r)return!1;m=E}return n.validator&&!n.validator(m)?!1:(t&&V(m),m)}}return!1},b=()=>{const{value:e}=f;if(L(e)){const{format:t,precision:l}=n;t?h.value=t(e):e===null||l===void 0||C(e)>l?h.value=ee(e,void 0):h.value=ee(e,l)}else h.value=String(e)};b();const de=g(()=>a({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),F=g(()=>{const{value:e}=f;if(n.validator&&e===null)return!1;const{value:t}=M;return a({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),O=g(()=>{const{value:e}=f;if(n.validator&&e===null)return!1;const{value:t}=M;return a({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function fe(e){const{onFocus:t}=n,{nTriggerFormFocus:l}=B;t&&I(t,e),l()}function ce(e){var t,l;if(e.target===((t=d.value)===null||t===void 0?void 0:t.wrapperElRef))return;const r=a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(r!==!1){const x=(l=d.value)===null||l===void 0?void 0:l.inputElRef;x&&(x.value=String(r||"")),f.value===r&&b()}else b();const{onBlur:o}=n,{nTriggerFormBlur:c}=B;o&&I(o,e),c(),ke(()=>{b()})}function me(e){const{onClear:t}=n;t&&I(t,e)}function A(){const{value:e}=O;if(!e){k();return}const{value:t}=f;if(t===null)n.validator||V(W());else{const{value:l}=M;a({offset:l,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function _(){const{value:e}=F;if(!e){U();return}const{value:t}=f;if(t===null)n.validator||V(W());else{const{value:l}=M;a({offset:-l,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ve=fe,he=ce;function W(){if(n.validator)return null;const{value:e}=G,{value:t}=K;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function ge(e){me(e),V(null)}function pe(e){var t,l,r;!((t=z.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((l=j.value)===null||l===void 0)&&l.$el.contains(e.target)&&e.preventDefault(),(r=d.value)===null||r===void 0||r.activate()}let y=null,w=null,T=null;function U(){T&&(window.clearTimeout(T),T=null),y&&(window.clearInterval(y),y=null)}function k(){S&&(window.clearTimeout(S),S=null),w&&(window.clearInterval(w),w=null)}function be(){U(),T=window.setTimeout(()=>{y=window.setInterval(()=>{_()},te)},ne),Q("mouseup",document,U,{once:!0})}let S=null;function xe(){k(),S=window.setTimeout(()=>{w=window.setInterval(()=>{A()},te)},ne),Q("mouseup",document,k,{once:!0})}const Ie=()=>{w||A()},Ve=()=>{y||_()};function ye(e){var t,l;if(e.key==="Enter"){if(e.target===((t=d.value)===null||t===void 0?void 0:t.wrapperElRef))return;a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((l=d.value)===null||l===void 0||l.deactivate())}else if(e.key==="ArrowUp"){if(!O.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&A()}else if(e.key==="ArrowDown"){if(!F.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&_()}}function we(e){h.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&a({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Ae(f,()=>{b()});const Ne={focus:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.blur()},select:()=>{var e;return(e=d.value)===null||e===void 0?void 0:e.select()}},Re=_e("InputNumber",D,p);return Object.assign(Object.assign({},Ne),{rtlEnabled:Re,inputInstRef:d,minusButtonInstRef:j,addButtonInstRef:z,mergedClsPrefix:p,mergedBordered:i,uncontrolledValue:P,mergedValue:f,mergedPlaceholder:se,displayedValueInvalid:de,mergedSize:re,mergedDisabled:ie,displayedValue:h,addable:O,minusable:F,mergedStatus:ue,handleFocus:ve,handleBlur:he,handleClear:ge,handleMouseDown:pe,handleAddClick:Ie,handleMinusClick:Ve,handleAddMousedown:xe,handleMinusMousedown:be,handleKeyDown:ye,handleUpdateDisplayedValue:we,mergedTheme:u,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:Ue(()=>{const{self:{iconColorDisabled:e}}=u.value,[t,l,r,o]=$e(e);return{textColorTextDisabled:`rgb(${t}, ${l}, ${r})`,opacityDisabled:`${o}`}})})},render(){const{mergedClsPrefix:n,$slots:i}=this,p=()=>s(Z,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>J(i["minus-icon"],()=>[s(Y,{clsPrefix:n},{default:()=>s(je,null)})])}),D=()=>s(Z,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>J(i["add-icon"],()=>[s(Y,{clsPrefix:n},{default:()=>s(ze,null)})])});return s("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},s(He,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var u;return this.showButton&&this.buttonPlacement==="both"?[p(),q(i.prefix,v=>v?s("span",{class:`${n}-input-number-prefix`},v):null)]:(u=i.prefix)===null||u===void 0?void 0:u.call(i)},suffix:()=>{var u;return this.showButton?[q(i.suffix,v=>v?s("span",{class:`${n}-input-number-suffix`},v):null),this.buttonPlacement==="right"?p():null,D()]:(u=i.suffix)===null||u===void 0?void 0:u.call(i)}}))}});export{ln as _};
