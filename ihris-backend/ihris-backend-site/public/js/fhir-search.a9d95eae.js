"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[242],{7108:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"py-5"},[s("v-card",[s("v-card-title",[e._v(" "+e._s(e.label)+" "),s("v-spacer"),e._t("default")],2),e.error_message?s("v-card-subtitle",{staticClass:"white--text error"},[e._v(e._s(e.error_message))]):e._e(),s("v-data-table",{staticClass:"elevation-1",staticStyle:{cursor:"pointer"},attrs:{headers:e.headers,items:e.results,options:e.options,"server-items-length":e.total,"footer-props":{"items-per-page-options":[5,10,20,50]},loading:e.loading,"show-select":e.reportData.displayCheckbox},on:{"update:options":function(t){e.options=t},"click:row":e.clickIt},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)},i=[],a=s(4972),o={name:"ihris-report",props:["profile","reportData","label","terms","dataURL","page"],data:function(){return{debug:"",headers:[],results:[],options:{itemsPerPage:10},loading:!1,total:0,prevPage:-1,link:[],selected:[],error_message:null}},watch:{selected(){a.Y.$emit("ihris-report-selections",this.selected,this.reportData)},terms:{handler(){this.getData(!0)},deep:!0},options:{handler(){this.getData()},deep:!0}},created:function(){for(let e of this.reportData.fieldsDetails)for(let t of e.fields){let s=e.resourceType+"."+t[1];this.headers.push({text:t[0],value:s})}a.Y.$on("reload-report",(()=>{this.getData()}))},mounted:function(){this.getData(!0)},methods:{clickIt:function(e){this.$router.push({name:"resource_view",params:{page:this.page,id:e.id}})},getData(e){this.loading=!0,this.error_message=null;let t="";if(e&&(this.options.page=1),this.options.page>1&&(this.options.page===this.prevPage-1?t=this.link.find((e=>"previous"===e.relation)).url:this.options.page===this.prevPage+1&&(t=this.link.find((e=>"next"===e.relation)).url),t=t.substring(t.indexOf("/fhir/"))),""===t){let e=this.options.itemsPerPage||10,s="";for(let t in this.options.sortBy)s&&(s+=","),this.options.sortDesc[t]&&(s+="-"),s+=this.options.sortBy[t];t="/fhir/"+this.dataURL+"_count="+e+"&_total=accurate";let r=Object.keys(this.terms);for(let i of r)t+="&"+i+"="+this.terms[i];this.debug=t}this.prevPage=this.options.page,fetch(t).then((e=>{e.json().then((e=>{if(this.results=[],e.total>0){this.link=e.link;for(let t of e.entry){let e=[];if(t.resource.resourceType!==this.reportData.primaryResource){let s=this.reportData.resourcesConnections.find((e=>e.resourceType===t.resource.resourceType)),r=this.$fhirpath.evaluate(t.resource,s.linkElement.replace(s.resourceType+".",""));if(Array.isArray(r))for(let e in r)2!==r[e].split("/").length&&(r[e]=s.resourceType+"/"+r[e]);else-1===r.indexOf(s.resourceType+"/")&&(r=s.resourceType+"/"+r);for(let t in this.results){let i=this.results[t][s.linkTo];if(Array.isArray(i)&&Array.isArray(r)){let s=i.some((e=>r.indexOf(e)>=0));s&&e.push(t)}else(Array.isArray(i)&&-1!==i.indexOf(r)||Array.isArray(r)&&-1!==r.indexOf(i)||i===r)&&e.push(t)}}else{let s=this.results.push({id:t.resource.id});e.push(s-1)}let s=this.reportData.fieldsDetails.find((e=>e.resourceType===t.resource.resourceType));for(let r of s.fields){let i=s.resourceType+"."+r[1];for(let s of e)this.results[s][i]?this.results[s][i]+=", "+this.$fhirpath.evaluate(t.resource,i):this.results[s][i]=this.$fhirpath.evaluate(t.resource,i)}if(s.hiddenFields&&Array.isArray(s.hiddenFields))for(let r of s.hiddenFields){let s=r[1].split("."),i=this.$fhirpath.evaluate(t.resource,r[1]);"id"===s[s.length-1]&&(i=s[0]+"/"+i);for(let t of e)this.results[t][r[1]]=i}}}this.total=e.total,this.loading=!1})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))}}},l=o,n=s(3736),c=s(3453),d=s.n(c),h=s(2371),u=s(7118),p=s(4228),g=s(4998),f=s(9762),v=(0,n.Z)(l,r,i,!1,null,null,null),m=v.exports;d()(v,{VCard:h.Z,VCardSubtitle:u.Qq,VCardTitle:u.EB,VContainer:p.Z,VDataTable:g.Z,VSpacer:f.Z})},1202:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"py-5"},[s("v-card",[s("v-card-title",[e._v(" "+e._s(e.$t("App.fhir-resources-texts."+e.label))+" "),s("v-spacer"),e._t("default"),s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:e.$t("App.hardcoded-texts.search"),"single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),s("v-spacer"),s("v-btn",{class:e.addLink&&e.addLink.class||"primary",attrs:{to:e.addLink?e.addLink.url:"/resource/add/"+e.page}},[e.addLink&&e.addLink.icon?s("v-icon",[e._v(e._s(e.addLink.icon))]):s("v-icon",[e._v("mdi-database-plus")]),e._v(" "+e._s(e.$t("App.hardcoded-texts.add"))+" "+e._s(e.$t("App.fhir-resources-texts."+e.label))+" ")],1)],2),e.error_message?s("v-card-subtitle",{staticClass:"white--text error"},[e._v(e._s(e.error_message))]):e._e(),s("v-data-table",{staticClass:"elevation-1",staticStyle:{cursor:"pointer","z-index":"-1"},attrs:{headers:e.headers,items:e.results,"item-key":"code",search:e.search,options:e.options,"footer-props":{"items-per-page-text":e.$t("App.hardcoded-texts.tableText"),"items-per-page-options":[5,10,20,50]},loading:e.loading},on:{"update:options":function(t){e.options=t},"click:row":e.clickIt},scopedSlots:e._u([{key:"item.isActive",fn:function(t){var r=t.item;return[r.code.includes("(deactivated)")?s("v-btn",{staticClass:"white--text text-none",attrs:{small:"",color:"green"},on:{click:function(t){return t.stopPropagation(),e.changeStatus(r)}}},[s("v-icon",{staticClass:"mr-2",attrs:{right:"",dark:""}},[e._v(" mdi-checkbox-marked-circle-outline ")]),e._v(" "+e._s(e.$t("App.hardcoded-texts.enable"))+" ")],1):s("v-btn",{staticClass:"white--text text-none",attrs:{small:"",color:"secondary"},on:{click:function(t){return t.stopPropagation(),e.changeStatus(r)}}},[s("v-icon",{staticClass:"mr-2",attrs:{right:"",dark:""}},[e._v(" mdi-close-octagon-outline ")]),e._v(" "+e._s(e.$t("App.hardcoded-texts.disable"))+" ")],1)]}}])})],1)],1)},i=[],a=(s(6699),{name:"ihris-search-code",props:["profile","fields","label","terms","page","resource","add-link"],data:function(){return{debug:"",search:"",headers:[],results:[],options:{itemsPerPage:10},loading:!1,total:0,error_message:null}},watch:{},created:function(){for(let e of this.fields)this.headers.push({text:this.$t(`App.fhir-resources-texts.${e[0]}`),value:e[1]});this.headers.push({text:this.$t("App.fhir-resources-texts.status"),value:"isActive"})},mounted:function(){this.getData()},methods:{changeStatus:function(e){let t="/fhir/CodeSystem"+this.profile.substring(this.profile.lastIndexOf("/"));fetch(t).then((s=>{s.ok?s.json().then((async s=>{let r=s.concept.find((t=>t.code===e.code));if(r.code.includes("(deactivated)")){r.code=r.code.replace("(deactivated)","");let e=s.version.split(".");++e[e.length-1],s.version=e.join(".")}else if(s.version){r.code=`${r.code}(deactivated)`;let e=s.version.split(".");++e[e.length-1],s.version=e.join(".")}try{await fetch(t,{method:"PUT",headers:{"Content-Type":"application/fhir+json"},body:JSON.stringify(s)}),fetch(`/fhir/ValueSet?reference=${s.url}`).then((e=>{e.ok?e.json().then((async e=>{if(e.entry.length>0){let s=e.entry[0].resource;if(s.version){let e=s.version.split(".");++e[e.length-1],s.version=e.join(".")}try{let e=await fetch(`/fhir/ValueSet/${s.id}`,{method:"PUT",headers:{"Content-Type":"application/fhir+json"},body:JSON.stringify(s)});console.log(e.json()),this.$router.go()}catch(t){console.log(t)}}})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)})):(this.loading=!1,this.error_message="Unable to load results.",console.log("Invalid response",e),e.text().then((e=>{console.log("body text:",e)})).catch((e=>{console.log("Failed to get text:",e)})))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))}catch(i){console.log(i)}})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)})):(this.loading=!1,this.error_message="Unable to load results.",console.log("Invalid response",s),s.text().then((e=>{console.log("body text:",e)})).catch((e=>{console.log("Failed to get text:",e)})))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))},clickIt:function(e){this.$router.push({name:"resource_view",params:{page:this.page,id:e.code}})},getData:function(){this.loading=!0,this.error_message=null;let e="/fhir/CodeSystem"+this.profile.substring(this.profile.lastIndexOf("/"));fetch(e).then((e=>{e.ok?e.json().then((async e=>{if(this.results=[],e.concept&&e.concept.length>0)for(let t of e.concept){let s={code:t.code,display:t.display,definition:t.definition};if(t.property&&e.property)for(let r of e.property){let e=t.property.find((e=>e.code===r.code));e&&("code"===r.type?e.valueCode?s[r.code]=await this.$fhirutils.codeLookup(r.uri,e.valueCode):s[r.code]="":"Coding"===r.type?e.valueCoding?s[r.code]=await this.$fhirutils.codeLookup(e.valueCoding.system,e.valueCoding.code,r.uri):s[r.code]="":s[r.code]=e["value"+r.type.charAt(0).toUpperCase()+r.type.slice(1)])}this.results.push(s)}this.total=e.concept.length,this.loading=!1})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)})):(this.loading=!1,this.error_message="Unable to load results.",console.log("Invalid response",e),e.text().then((e=>{console.log("body text:",e)})).catch((e=>{console.log("Failed to get text:",e)})))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",console.log(e)}))}}}),o=a,l=s(3736),n=s(3453),c=s.n(n),d=s(3150),h=s(2371),u=s(7118),p=s(4228),g=s(4998),f=s(6428),v=s(9762),m=s(5978),_=(0,l.Z)(o,r,i,!1,null,null,null),y=_.exports;c()(_,{VBtn:d.Z,VCard:h.Z,VCardSubtitle:u.Qq,VCardTitle:u.EB,VContainer:p.Z,VDataTable:g.Z,VIcon:f.Z,VSpacer:v.Z,VTextField:m.Z})},1841:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.binding?s("v-select",{staticClass:"ma-2",attrs:{loading:e.loading,label:e.$t("App.fhir-resources-texts."+e.label),items:e.items.filter((function(e){return!e.code.includes("(deactivated)")})),outlined:"","error-messages":e.err_messages,error:e.error,clearable:"","hide-details":"","small-chips":"",dense:"",multiple:"","item-text":"display","item-value":"code"},on:{change:function(t){return e.updateSearch()},"click:clear":function(t){return e.clearSearch()}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):s("v-text-field",{staticClass:"ma-2",attrs:{label:e.$t("App.fhir-resources-texts."+e.label),dense:"",outlined:"","hide-details":"",clearable:""},on:{change:function(t){return e.updateSearch()},"click:clear":function(t){return e.clearSearch()}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},i=[],a={name:"ihris-search-term",props:["label","expression","binding"],data:function(){return{loading:!1,items:[],error:!1,err_messages:null,value:[]}},mounted:function(){this.loading=!0,this.$fhirutils.expand(this.binding).then((e=>{this.items=e,this.loading=!1})).catch((e=>{this.error=!0,this.err_messages=e.message,this.loading=!1}))},methods:{updateSearch:function(){this.$emit("termChange",this.expression,this.value)},clearSearch:function(){this.$emit("termChange",this.expression,[])}}},o=a,l=s(3736),n=s(3453),c=s.n(n),d=s(3986),h=s(5978),u=(0,l.Z)(o,r,i,!1,null,null,null),p=u.exports;c()(u,{VSelect:d.Z,VTextField:h.Z})},990:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"py-5"},[s("v-card",[s("v-card-title",[e._v(" "+e._s(e.$t("App.hardcoded-texts.search"))+" "+e._s(e.$t("App.fhir-resources-texts."+e.label))+" "),s("v-spacer"),s("v-btn",{class:e.addLink&&e.addLink.class||"primary",attrs:{to:e.addLink?e.addLink.url:"/resource/add/"+e.page}},[e.addLink&&e.addLink.icon?s("v-icon",[e._v(e._s(e.addLink.icon))]):s("v-icon",[e._v("mdi-database-plus")]),e._v(" "+e._s(e.$t("App.hardcoded-texts.add"))+" "+e._s(e.$t("App.fhir-resources-texts."+e.label))+" ")],1)],1),s("v-card-title",[e._t("default")],2),e.error_message?s("v-card-subtitle",{staticClass:"white--text error"},[e._v(e._s(e.error_message))]):e._e(),s("v-card-text",[s("v-container"),s("v-data-table",{staticClass:"elevation-1",staticStyle:{cursor:"pointer"},attrs:{headers:e.headers,items:e.results,"item-key":"id",options:e.options,"server-items-length":e.total,"footer-props":{"items-per-page-text":e.$t("App.hardcoded-texts.tableText"),"items-per-page-options":[5,10,20,50]},loading:e.loading},on:{"update:options":function(t){e.options=t},"click:row":e.clickIt}})],1)],1)],1)},i=[],a={name:"ihris-search",props:["profile","fields","label","terms","page","resource","add-link"],data:function(){return{debug:"",headers:[],results:[],options:{itemsPerPage:10},loading:!1,total:0,prevPage:-1,link:[],error_message:null,update_again:{rerun:!1,restart:!1}}},watch:{terms:{handler(){this.getData(!0)},deep:!0},options:{handler(){this.getData()},deep:!0}},created:function(){for(let e of this.fields)this.headers.push({text:this.$t(`App.fhir-resources-texts.${e[0]}`),value:e[1]})},mounted:function(){this.getData(!0)},methods:{clickIt:function(e){this.$router.push({name:"resource_view",params:{page:this.page,id:e.id}})},checkRerun(){!this.loading&&this.update_again.rerun&&(this.getData(this.update_again.restart),this.update_again={rerun:!1,restart:!1})},getData(e){if(this.loading)return this.update_again.rerun=!0,void(this.update_again.restart=this.update_again.restart||e);this.loading=!0,this.error_message=null;let t="";if(e&&(this.options.page=1),this.options.page>1&&(this.options.page===this.prevPage-1?t=this.link.find((e=>"previous"===e.relation)).url:this.options.page===this.prevPage+1&&(t=this.link.find((e=>"next"===e.relation)).url),t=t.replace(/_getpages=[^&]*&*/,"").replace("/fhir?","/fhir/"+this.resource+"?"),t=t.substring(t.indexOf("/fhir/")),-1===t.indexOf("_total=accurate")&&(t+="&_total=accurate"),this.profile&&(t=t+"&_profile="+this.profile)),""===t){let e=this.options.itemsPerPage||10,s="";for(let t in this.options.sortBy)s&&(s+=","),this.options.sortDesc[t]&&(s+="-"),s+=this.options.sortBy[t];t="/fhir/"+this.resource+"?_count="+e+"&_total=accurate&_profile="+this.profile;let r=Object.keys(this.terms);for(let i of r)Array.isArray(this.terms[i])?this.terms[i].length>0&&(t+="&"+i+"="+this.terms[i].join(",")):this.terms[i]&&(t+="&"+i+"="+this.terms[i]);this.debug=t}this.prevPage=this.options.page,fetch(t).then((e=>{e.json().then((async e=>{if(this.results=[],e.total>0){this.link=e.link;for(let t of e.entry){let e={id:t.resource.id};for(let s of this.fields){let r=this.$fhirpath.evaluate(t.resource,s[1]);e[s[1]]=await this.$fhirutils.lookup(r[0],s[2])}this.results.push(e)}}this.total=e.total,this.loading=!1,this.checkRerun()})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",this.checkRerun(),console.log(e)}))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",this.checkRerun(),console.log(e)}))}}},o=a,l=s(3736),n=s(3453),c=s.n(n),d=s(3150),h=s(2371),u=s(7118),p=s(4228),g=s(4998),f=s(6428),v=s(9762),m=(0,l.Z)(o,r,i,!1,null,null,null),_=m.exports;c()(m,{VBtn:d.Z,VCard:h.Z,VCardSubtitle:u.Qq,VCardText:u.ZB,VCardTitle:u.EB,VContainer:p.Z,VDataTable:g.Z,VIcon:f.Z,VSpacer:v.Z})}}]);
//# sourceMappingURL=fhir-search.a9d95eae.js.map