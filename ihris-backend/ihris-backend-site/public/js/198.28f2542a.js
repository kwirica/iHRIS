"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[198],{2245:function(){},1835:function(e,t,i){i.d(t,{Z:function(){return o}});i(6699);var s=i(3986),n=i(5978),l=i(6290),a=i(4589);const r={...s.l,offsetY:!0,offsetOverflow:!0,transition:!1};var o=s.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,i)=>i.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:s.Z.options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((e=>this.getValue(e)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((e=>!this.hasItem(e))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((e=>{const t=(0,a.qF)(e,this.itemText),i=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),i)}))},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=s.Z.options.computed.$_menuProps.call(this);return e.contentClass=`v-autocomplete__content ${e.contentClass||""}`.trim(),{...r,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue))))},listData(){const e=s.Z.options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex((e=>e===i))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===a.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===a.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==a.Do.backspace&&e!==a.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const i=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==i)return void(this.selectedIndex=i);const s=this.selectedItems.length,n=e!==s-1?e:e-1,l=this.selectedItems[n];l?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=n},clearableCallback(){this.internalSearch=null,s.Z.options.methods.clearableCallback.call(this)},genInput(){const e=n.Z.options.methods.genInput.call(this);return e.data=(0,l.ZP)(e.data,{attrs:{"aria-activedescendant":(0,a.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,a.vO)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=s.Z.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?s.Z.options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,i=t.value;t.value&&this.activateMenu(),this.multiple||""!==i||this.deleteCurrentItem(),this.internalSearch=i,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[a.Do.home,a.Do.end].includes(t)||s.Z.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){s.Z.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){s.Z.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){s.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,i;if(-1===this.selectedIndex)return;const s=this.selectedItems[this.selectedIndex],n=this.getText(s);null==(t=e.clipboardData)||t.setData("text/plain",n),null==(i=e.clipboardData)||i.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}})},9155:function(e,t,i){var s=i(6286),n=i(538);t["Z"]=n["default"].extend({name:"rippleable",directives:{ripple:s.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},7764:function(e,t,i){i.d(t,{X:function(){return r}});var s=i(8230),n=i(9155),l=i(4419),a=i(3325);function r(e){e.preventDefault()}t["Z"]=(0,a.Z)(s.Z,n.Z,l.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=s.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:r},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const i=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===i&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})},1072:function(e,t,i){i.r(t),i.d(t,{default:function(){return S}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-element",{attrs:{edit:e.edit,loading:!1},scopedSlots:e._u([{key:"form",fn:function(){return[i("v-switch",{attrs:{label:e.display+": "+e.value.toString(),disabled:e.disabled,rules:e.rules,dense:"","error-messages":e.errors},on:{change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-boolean."+e.display))+": "+e._s(e.$t("App.fhir-boolean."+e.value.toString()))+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.$t("App.fhir-boolean."+e.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.value)+" ")]},proxy:!0}])})},n=[],l=i(2130),a={name:"fhir-boolean",props:["field","label","min","max","id","path","slotProps","sliceName","base-min","base-max","edit","readOnlyIfSet","constraints"],components:{IhrisElement:l.Z},data:function(){return{source:{path:"",data:{}},value:!0,qField:"valueBoolean",disabled:!1,errors:[],lockWatch:!1}},created:function(){this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0}},methods:{setupData(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{let e=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e),1==this.source.data.length&&(this.value=this.source.data[0],this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}}},computed:{index:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.index:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){return[]}}},r=a,o=i(3736),h=i(3453),d=i.n(h),c=(i(2245),i(7764)),u=i(8230),p=i(5500),m=i(5827),v=i(624),f=i(4589),g=c.Z.extend({name:"v-switch",directives:{Touch:p.Z},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...u.Z.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...t}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(m.b0,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(v.Z,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(e){(e.keyCode===f.Do.left&&this.isActive||e.keyCode===f.Do.right&&!this.isActive)&&this.onChange()}}}),y=(0,o.Z)(r,s,n,!1,null,null,null),S=y.exports;d()(y,{VSwitch:g})},4270:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-element",{attrs:{edit:e.edit,loading:!1},scopedSlots:e._u([{key:"form",fn:function(){return[i("v-text-field",{attrs:{"error-messages":e.errors,label:e.display,disabled:e.disabled,name:e.field,outlined:"","hide-details":"auto",rules:e.rules,dense:""},on:{change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.display)+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=e._n(t)},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.display)+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.value)+" ")]},proxy:!0}])})},n=[],l=i(2130),a={name:"fhir-integer",props:["field","label","min","max","id","path","slotProps","sliceName","base-min","base-max","edit","readOnlyIfSet","constraints"],components:{IhrisElement:l.Z},data:function(){return{source:{path:"",data:{}},value:"",qField:"valueInteger",disabled:!1,errors:[],lockWatch:!1}},created:function(){this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0}},methods:{setupData(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{let e=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e),1==this.source.data.length&&(this.value=this.source.data[0],this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){const e=e=>{let t=Number(e);return Number.isInteger(t)||this.display+" must be an integer"};let t=[e];return this.required&&t.push((e=>!!e||this.display+" is required")),t}}},r=a,o=i(3736),h=i(3453),d=i.n(h),c=i(5978),u=(0,o.Z)(r,s,n,!1,null,null,null),p=u.exports;d()(u,{VTextField:c.Z})},5947:function(e,t,i){i.r(t),i.d(t,{default:function(){return T}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ihris-element",{attrs:{edit:e.edit,loading:e.loading},scopedSlots:e._u([{key:"form",fn:function(){return["tree"==e.displayType?i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px","max-height":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[i("v-text-field",e._g({attrs:{label:e.$t("App.fhir-reference."+e.display),readonly:"",outlined:"","hide-details":"auto",rules:e.rules,"error-messages":e.errors,loading:e.loading,dense:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-reference."+e.display))+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}],null,!0),model:{value:e.displayValue,callback:function(t){e.displayValue=t},expression:"displayValue"}},s))]}}],null,!1,2315796841),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e.disabled||e.preset&&"resource_add"===e.$route.name?e._e():i("v-card",[i("v-treeview",{attrs:{active:e.active,items:e.items,"load-children":e.fetchChildren,open:e.open,"item-disabled":"locked",activatable:"","multiple-active":!1,"selection-type":"independent",loading:e.loading},on:{"update:active":function(t){e.active=t},"update:open":function(t){e.open=t}},scopedSlots:e._u([{key:"label",fn:function(t){var i=t.item;return[e._v(" "+e._s(i.name)+" ")]}}],null,!1,40735413)})],1)],1):i("v-autocomplete",{attrs:{loading:e.loading,items:e.items,"search-input":e.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",label:e.display,outlined:"",dense:"",placeholder:"Start typing for selection",rules:e.rules,disabled:e.disabled||e.preset&&"resource_add"===e.$route.name,"error-messages":e.errors},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},change:function(t){e.errors=[]}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.$t("App.fhir-reference."+e.display))+" "),e.required?i("span",{staticClass:"red--text font-weight-bold"},[e._v("*")]):e._e()]},proxy:!0}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})]},proxy:!0},{key:"header",fn:function(){return[e._v(" "+e._s(e.$t("App.fhir-reference."+e.display))+" ")]},proxy:!0},{key:"value",fn:function(){return[e._v(" "+e._s(e.displayValue)+" ")]},proxy:!0}])})},n=[],l=(i(6699),i(2130));const a=i(7673),r="http://hl7.org/fhir/StructureDefinition/";var o={name:"fhir-reference",props:["field","label","sliceName","targetProfile","targetResource","min","max","base-min","base-max","slotProps","path","sub-fields","edit","readOnlyIfSet","constraints","displayType","initialValue","overrideValue"],components:{IhrisElement:l.Z},data:function(){return{source:{path:"",data:{}},value:{reference:""},qField:"valueReference",loading:!1,search:"",menu:!1,items:[],select:"",resource:"",awaitingSearch:!1,displayValue:"",preset:!1,disabled:!1,errors:[],lockWatch:!1,active:[],open:[],treeLookup:{},allAllowed:!0}},created:function(){this.setupData()},watch:{slotProps:{handler(){this.lockWatch||this.setupData()},deep:!0},search:function(e){this.awaitingSearch||setTimeout((()=>{e&&e.length>1&&this.querySelections(this.search),this.awaitingSearch=!1}),500),this.awaitingSearch=!0},select:function(e){this.value.reference=e,this.getDisplay()},active:function(){this.active.length?(this.select=this.active[0],this.displayValue=this.treeLookup[this.select]):(this.select=void 0,this.displayValue=""),this.menu=!1}},methods:{setupData:function(){if(this.targetProfile&&this.targetResource&&(this.targetProfile.replace(r,"")===this.targetResource?this.allAllowed=!0:this.allAllowed=!1,this.resource=this.targetResource),"tree"===this.displayType&&this.setupTreeItems(),this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{let e=this.$fhirutils.pathFieldExpression(this.field),t=this.$fhirpath.evaluate(this.slotProps.source.data,e);this.source.data=t[0]}this.source.data&&(this.preset=!0,this.select=this.source.data.reference,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&this.preset},setupTreeItems:async function(){let e=this.initialValue;this.overrideValue&&(e=this.overrideValue),this.loading=!0;let t={};t=e?{partof:e}:{"partof:missing":!0},t._count=500;let i="/fhir/"+this.resource+"?"+a.stringify(t);this.items=[],this.addItems(i,this.items)},checkChildren:function(e){let t={partof:e.id,_summary:"count"},i="/fhir/"+this.resource+"?"+a.stringify(t);return new Promise((t=>{fetch(i).then((s=>{s.ok?s.json().then((i=>{i.total&&i.total>0&&(e.children=[]),t()})).catch((e=>{console.log("failed to check children for",i,e),t()})):(console.log("failed to check children for",i,s.status),t())})).catch((e=>{console.log("failed to check children for",i,e),t()}))}))},addItems:function(e,t){fetch(e).then((i=>{i.ok?i.json().then((async e=>{if(e.entry&&e.entry.length>0)for(let i of e.entry){let e=!this.allAllowed&&!i.resource.meta.profile.includes(this.targetProfile),s={id:i.resource.resourceType+"/"+i.resource.id,name:i.resource.name,locked:e};await this.checkChildren(s),this.treeLookup[s.id]=s.name,t.push(s)}if(e.link){let i=e.link.find((e=>"next"===e.relation));i?this.addItems(i.url,t):this.loading=!1}else this.loading=!1})).catch((t=>{console.log("Failed to add items for",e,t),this.loading=!1})):(console.log("//////////////////////////////"),console.log("Failed to add items for",e,i.status),this.loading=!1)})).catch((t=>{console.log("Failed to add items for",e,t),this.loading=!1}))},fetchChildren:function(e){let t={};t={partof:e.id,_count:500};let i="/fhir/"+this.resource+"?"+a.stringify(t);return this.loading=!0,this.addItems(i,e.children),new Promise((e=>{let t=0;const i=()=>{!this.loading||t++>100?e():setTimeout(i,200)};i()}))},querySelections:function(e){this.loading=!0;let t={"name:contains":e};this.targetProfile.endsWith(this.resource)||(t._profile=this.targetProfile);let i="/fhir/"+this.resource+"?"+a.stringify(t);fetch(i).then((e=>{e.ok?e.json().then((async e=>{if(this.items=[],e.entry&&e.entry.length)for(let t of e.entry){let e=t.resource.resourceType+"/"+t.resource.id,i={value:e};i.text=await this.$fhirutils.resourceLookup(e),this.items.push(i)}this.loading=!1})):(console.log("Failed to retrieve",this.resource),this.loading=!1)}))},getDisplay:function(){(!this.edit||this.preset)&&this.value&&this.value.reference&&(this.loading=!0,this.$fhirutils.resourceLookup(this.value.reference).then((e=>{this.displayValue=e,"tree"!==this.displayType&&this.items.push({text:e,value:this.value.reference}),this.loading=!1})))}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){return this.required?[e=>!!e||this.display+" is required"]:[]}}},h=o,d=i(3736),c=i(3453),u=i.n(c),p=i(1835),m=i(2371),v=i(1152),f=i(5978),g=i(5827),y=i(6428),S=i(6257),I=i(6952),C=i(3325),b=i(4589);const x=(0,C.Z)(I.Z,(0,S.f)("treeview")),w={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},color:{type:String,default:"primary"},disablePerNode:Boolean,expandIcon:{type:String,default:"$subgroup"},indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},itemChildren:{type:String,default:"children"},itemDisabled:{type:String,default:"disabled"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},loadChildren:Function,loadingIcon:{type:String,default:"$loading"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"},openOnClick:Boolean,rounded:Boolean,selectable:Boolean,selectedColor:{type:String,default:"accent"},shaped:Boolean,transition:Boolean,selectionType:{type:String,default:"leaf",validator:e=>["leaf","independent"].includes(e)}},k=x.extend().extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:{level:Number,item:{type:Object,default:()=>null},parentIsDisabled:Boolean,...w},data:()=>({hasLoaded:!1,isActive:!1,isIndeterminate:!1,isLoading:!1,isOpen:!1,isSelected:!1}),computed:{disabled(){return(0,b.vO)(this.item,this.itemDisabled)||!this.disablePerNode&&this.parentIsDisabled&&"leaf"===this.selectionType},key(){return(0,b.vO)(this.item,this.itemKey)},children(){const e=(0,b.vO)(this.item,this.itemChildren);return e&&e.filter((e=>!this.treeview.isExcluded((0,b.vO)(e,this.itemKey))))},text(){return(0,b.vO)(this.item,this.itemText)},scopedProps(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created(){this.treeview.register(this)},beforeDestroy(){this.treeview.unregister(this)},methods:{checkChildren(){return new Promise((e=>{if(!this.children||this.children.length||!this.loadChildren||this.hasLoaded)return e();this.isLoading=!0,e(this.loadChildren(this.item))})).then((()=>{this.isLoading=!1,this.hasLoaded=!0}))},open(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel(){const e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genPrependSlot(){return this.$scopedSlots.prepend?this.$createElement("div",{staticClass:"v-treeview-node__prepend"},this.$scopedSlots.prepend(this.scopedProps)):null},genAppendSlot(){return this.$scopedSlots.append?this.$createElement("div",{staticClass:"v-treeview-node__append"},this.$scopedSlots.append(this.scopedProps)):null},genContent(){const e=[this.genPrependSlot(),this.genLabel(),this.genAppendSlot()];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle(){return this.$createElement(y.Z,{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then((()=>this.open()))}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox(){return this.$createElement(y.Z,{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected||this.isIndeterminate?this.selectedColor:void 0,disabled:this.disabled},on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then((()=>{this.$nextTick((()=>{this.isSelected=!this.isSelected,this.isIndeterminate=!1,this.treeview.updateSelected(this.key,this.isSelected),this.treeview.emitSelected()}))}))}}},[this.computedIcon])},genLevel(e){return(0,b.MT)(e).map((()=>this.$createElement("div",{staticClass:"v-treeview-node__level"})))},genNode(){const e=[this.genContent()];return this.selectable&&e.unshift(this.genCheckbox()),this.hasChildren?e.unshift(this.genToggle()):e.unshift(...this.genLevel(1)),e.unshift(...this.genLevel(this.level)),this.$createElement("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-treeview-node__root",class:{[this.activeClass]:this.isActive},on:{click:()=>{this.openOnClick&&this.hasChildren?this.checkChildren().then(this.open):this.activatable&&!this.disabled&&(this.isActive=!this.isActive,this.treeview.updateActive(this.key,this.isActive),this.treeview.emitActive())}}}),e)},genChild(e,t){return this.$createElement(k,{key:(0,b.vO)(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,color:this.color,disablePerNode:this.disablePerNode,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemDisabled:this.itemDisabled,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick,rounded:this.rounded,shaped:this.shaped,level:this.level+1,selectionType:this.selectionType,parentIsDisabled:t},scopedSlots:this.$scopedSlots})},genChildrenWrapper(){if(!this.isOpen||!this.children)return null;const e=[this.children.map((e=>this.genChild(e,this.disabled)))];return this.$createElement("div",{staticClass:"v-treeview-node__children"},e)},genTransition(){return this.$createElement(g.Fx,[this.genChildrenWrapper()])}},render(e){const t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--disabled":this.disabled,"v-treeview-node--rounded":this.rounded,"v-treeview-node--shaped":this.shaped,"v-treeview-node--selected":this.isSelected},attrs:{"aria-expanded":String(this.isOpen)}},t)}});var _=k,O=i(8085),P=i(1824);function $(e,t,i){const s=(0,b.vO)(e,i);return s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function D(e,t,i,s,n,l,a){if(e(t,i,n))return!0;const r=(0,b.vO)(t,l);if(r){let t=!1;for(let o=0;o<r.length;o++)D(e,r[o],i,s,n,l,a)&&(t=!0);if(t)return!0}return a.add((0,b.vO)(t,s)),!1}var A=(0,C.Z)((0,S.J)("treeview"),O.Z).extend({name:"v-treeview",provide(){return{treeview:this}},props:{active:{type:Array,default:()=>[]},dense:Boolean,disabled:Boolean,filter:Function,hoverable:Boolean,items:{type:Array,default:()=>[]},multipleActive:Boolean,open:{type:Array,default:()=>[]},openAll:Boolean,returnObject:{type:Boolean,default:!1},search:String,value:{type:Array,default:()=>[]},...w},data:()=>({level:-1,activeCache:new Set,nodes:{},openCache:new Set,selectedCache:new Set}),computed:{excludedItems(){const e=new Set;if(!this.search)return e;for(let t=0;t<this.items.length;t++)D(this.filter||$,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler(){const e=Object.keys(this.nodes).map((e=>(0,b.vO)(this.nodes[e].item,this.itemKey))),t=this.getKeys(this.items),i=(0,b.tX)(t,e);if(!i.length&&t.length<e.length)return;i.forEach((e=>delete this.nodes[e]));const s=[...this.selectedCache];this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),(0,b.vZ)(s,[...this.selectedCache])||this.emitSelected()},deep:!0},active(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created(){const e=e=>this.returnObject?(0,b.vO)(e,this.itemKey):e;this.buildTree(this.items);for(const t of this.value.map(e))this.updateSelected(t,!0,!0);for(const t of this.active.map(e))this.updateActive(t,!0)},mounted(){(this.$slots.prepend||this.$slots.append)&&(0,P.Kd)("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach((e=>this.updateOpen(this.returnObject?(0,b.vO)(e,this.itemKey):e,!0))),this.emitOpen())},methods:{updateAll(e){Object.keys(this.nodes).forEach((t=>this.updateOpen((0,b.vO)(this.nodes[t].item,this.itemKey),e))),this.emitOpen()},getKeys(e,t=[]){for(let i=0;i<e.length;i++){const s=(0,b.vO)(e[i],this.itemKey);t.push(s);const n=(0,b.vO)(e[i],this.itemChildren);n&&t.push(...this.getKeys(n))}return t},buildTree(e,t=null){for(let s=0;s<e.length;s++){var i;const n=e[s],l=(0,b.vO)(n,this.itemKey),a=null!=(i=(0,b.vO)(n,this.itemChildren))?i:[],r=this.nodes.hasOwnProperty(l)?this.nodes[l]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},o={vnode:r.vnode,parent:t,children:a.map((e=>(0,b.vO)(e,this.itemKey))),item:n};if(this.buildTree(a,l),"independent"!==this.selectionType&&null!==t&&!this.nodes.hasOwnProperty(l)&&this.nodes.hasOwnProperty(t)?o.isSelected=this.nodes[t].isSelected:(o.isSelected=r.isSelected,o.isIndeterminate=r.isIndeterminate),o.isActive=r.isActive,o.isOpen=r.isOpen,this.nodes[l]=o,a.length&&"independent"!==this.selectionType){const{isSelected:e,isIndeterminate:t}=this.calculateState(l,this.nodes);o.isSelected=e,o.isIndeterminate=t}!this.nodes[l].isSelected||"independent"!==this.selectionType&&0!==o.children.length||this.selectedCache.add(l),this.nodes[l].isActive&&this.activeCache.add(l),this.nodes[l].isOpen&&this.openCache.add(l),this.updateVnodeState(l)}},calculateState(e,t){const i=t[e].children,s=i.reduce(((e,i)=>(e[0]+=+Boolean(t[i].isSelected),e[1]+=+Boolean(t[i].isIndeterminate),e)),[0,0]),n=!!i.length&&s[0]===i.length,l=!n&&(s[0]>0||s[1]>0);return{isSelected:n,isIndeterminate:l}},emitOpen(){this.emitNodeCache("update:open",this.openCache)},emitSelected(){this.emitNodeCache("input",this.selectedCache)},emitActive(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache(e,t){this.$emit(e,this.returnObject?[...t].map((e=>this.nodes[e].item)):[...t])},handleNodeCacheWatcher(e,t,i,s){e=this.returnObject?e.map((e=>(0,b.vO)(e,this.itemKey))):e;const n=[...t];(0,b.vZ)(n,e)||(n.forEach((e=>i(e,!1))),e.forEach((e=>i(e,!0))),s())},getDescendants(e,t=[]){const i=this.nodes[e].children;t.push(...i);for(let s=0;s<i.length;s++)t=this.getDescendants(i[s],t);return t},getParents(e){let t=this.nodes[e].parent;const i=[];while(null!==t)i.push(t),t=this.nodes[t].parent;return i},register(e){const t=(0,b.vO)(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister(e){const t=(0,b.vO)(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},isParent(e){return this.nodes[e].children&&this.nodes[e].children.length},updateActive(e,t){if(!this.nodes.hasOwnProperty(e))return;this.multipleActive||this.activeCache.forEach((e=>{this.nodes[e].isActive=!1,this.updateVnodeState(e),this.activeCache.delete(e)}));const i=this.nodes[e];i&&(t?this.activeCache.add(e):this.activeCache.delete(e),i.isActive=t,this.updateVnodeState(e))},updateSelected(e,t,i=!1){if(!this.nodes.hasOwnProperty(e))return;const s=new Map;if("independent"!==this.selectionType){for(const l of this.getDescendants(e))(0,b.vO)(this.nodes[l].item,this.itemDisabled)&&!i||(this.nodes[l].isSelected=t,this.nodes[l].isIndeterminate=!1,s.set(l,t));const n=this.calculateState(e,this.nodes);this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=n.isIndeterminate,s.set(e,t);for(const t of this.getParents(e)){const e=this.calculateState(t,this.nodes);this.nodes[t].isSelected=e.isSelected,this.nodes[t].isIndeterminate=e.isIndeterminate,s.set(t,e.isSelected)}}else this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,s.set(e,t);for(const[n,l]of s.entries())this.updateVnodeState(n),"leaf"===this.selectionType&&this.isParent(n)||(!0===l?this.selectedCache.add(n):this.selectedCache.delete(n))},updateOpen(e,t){if(!this.nodes.hasOwnProperty(e))return;const i=this.nodes[e],s=(0,b.vO)(i.item,this.itemChildren);s&&!s.length&&i.vnode&&!i.vnode.hasLoaded?i.vnode.checkChildren().then((()=>this.updateOpen(e,t))):s&&s.length&&(i.isOpen=t,i.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))},updateVnodeState(e){const t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded(e){return!!this.search&&this.excludedItems.has(e)}},render(e){const t=this.items.length?this.items.filter((e=>!this.isExcluded((0,b.vO)(e,this.itemKey)))).map((e=>{const t=_.options.methods.genChild.bind(this);return t(e,this.disabled||(0,b.vO)(e,this.itemDisabled))})):this.$slots.default;return e("div",{staticClass:"v-treeview",class:{"v-treeview--hoverable":this.hoverable,"v-treeview--dense":this.dense,...this.themeClasses}},t)}}),V=(0,d.Z)(h,s,n,!1,null,null,null),T=V.exports;u()(V,{VAutocomplete:p.Z,VCard:m.Z,VMenu:v.Z,VTextField:f.Z,VTreeview:A})},2130:function(e,t,i){i.d(t,{Z:function(){return f}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.edit?i("v-container",[e._t("form")],2):i("div",[i("v-row",{attrs:{dense:""}},[i("v-col",{staticClass:"font-weight-bold",attrs:{cols:e.$store.state.cols.header}},[e._t("header")],2),e.loading?i("v-col",{attrs:{cols:e.$store.state.cols.content}},[i("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):i("v-col",{attrs:{cols:e.$store.state.cols.content}},[e._t("value")],2)],1),i("v-divider")],1)],1)},n=[],l={name:"ihris-element",props:["edit","loading"]},a=l,r=i(3736),o=i(3453),h=i.n(o),d=i(2102),c=i(4228),u=i(1418),p=i(7003),m=i(2877),v=(0,r.Z)(a,s,n,!1,null,null,null),f=v.exports;h()(v,{VCol:d.Z,VContainer:c.Z,VDivider:u.Z,VProgressLinear:p.Z,VRow:m.Z})}}]);
//# sourceMappingURL=198.28f2542a.js.map