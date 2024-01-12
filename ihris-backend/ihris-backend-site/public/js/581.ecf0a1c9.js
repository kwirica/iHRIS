"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[581],{3205:function(e,t,r){r.d(t,{Z:function(){return s}});var i=r(8085),a=r(3325),s=(0,a.Z)(i.Z).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},1548:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"py-5"},[r("v-card",[r("v-card-title",[e._v(" Search PP Record "),r("v-spacer")],1),r("v-card-title",[r("v-text-field",{staticClass:"ma-2",attrs:{label:"Name",dense:"",outlined:"","hide-details":"",clearable:""},on:{change:function(t){return e.buildTerms()},"click:clear":function(t){return e.clearSearch("name")}},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}}),r("v-text-field",{staticClass:"ma-2",attrs:{label:"HP Number",dense:"",outlined:"","hide-details":"",clearable:""},on:{change:function(t){return e.buildTerms()},"click:clear":function(t){return e.clearSearch("hpnumber")}},model:{value:e.search.hpnumber,callback:function(t){e.$set(e.search,"hpnumber",t)},expression:"search.hpnumber"}}),r("v-text-field",{staticClass:"ma-2",attrs:{label:"Omang Number",dense:"",outlined:"","hide-details":"",clearable:""},on:{change:function(t){return e.buildTerms()},"click:clear":function(t){return e.clearSearch("omang")}},model:{value:e.search.omang,callback:function(t){e.$set(e.search,"omang",t)},expression:"search.omang"}}),r("v-text-field",{staticClass:"ma-2",attrs:{label:"Passport Number",dense:"",outlined:"","hide-details":"",clearable:""},on:{change:function(t){return e.buildTerms()},"click:clear":function(t){return e.clearSearch("passport")}},model:{value:e.search.passport,callback:function(t){e.$set(e.search,"passport",t)},expression:"search.passport"}})],1),e.error_message?r("v-card-subtitle",{staticClass:"white--text error"},[e._v(e._s(e.error_message))]):e._e(),r("v-card-text",[r("v-data-table",{staticClass:"elevation-1",staticStyle:{cursor:"pointer"},attrs:{headers:e.headers,items:e.results,"item-key":"id",options:e.options,"server-items-length":e.total,"footer-props":{"items-per-page-text":e.$t("App.hardcoded-texts.tableText"),"items-per-page-options":[5,10,20,50]},loading:e.loading},on:{"update:options":function(t){e.options=t},"click:row":e.clickIt}})],1)],1)],1)},a=[],s=(r(6699),{name:"ihris-search",data:function(){return{search:{name:"",hpnumber:"",omang:"",passport:""},debug:"",terms:{},headers:[{text:"Surname",value:"surname"},{text:"Given Name(s)",value:"given"},{text:"Birth Date",value:"birthDate"},{text:"Gender",value:"gender"},{text:"Board",value:"board"},{text:"HP Number",value:"hpnumber"},{text:"OMANG",value:"omang"},{text:"Passport",value:"passport"}],results:[],options:{itemsPerPage:10},loading:!1,total:0,prevPage:-1,link:[],error_message:null,update_again:{rerun:!1,restart:!1}}},watch:{options:{handler(){this.getData()},deep:!0}},mounted:function(){this.getData(!0)},methods:{clearSearch:function(e){this.search[e]="",this.buildTerms()},clickIt:function(e){this.$router.push({name:"resource_view",params:{page:"bwpractitioner",id:e.id}})},checkRerun(){!this.loading&&this.update_again.rerun&&(this.getData(this.update_again.restart),this.update_again={rerun:!1,restart:!1})},async buildTerms(){this.terms={},this.search.name&&(this.terms["name:contains"]=this.search.name),this.search.omang&&(this.terms.identifier=this.search.omang),this.search.passport&&(this.terms.identifier=this.search.passport),this.search.hpnumber&&await this.getDataBasic(),this.getData(!0)},getDataBasic(){return new Promise(((e,t)=>{let r="/fhir/Basic?hpnumber="+this.search.hpnumber;fetch(r).then((r=>{r.json().then((async t=>{for(let e of t.entry){let t=e.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/ihris-practitioner-reference"===e.url))?.valueReference?.reference;t&&(this.terms["_id"]=t)}e()})).catch((()=>{t()}))})).catch((()=>{t()}))}))},getData(e){if(this.loading)return this.update_again.rerun=!0,void(this.update_again.restart=this.update_again.restart||e);this.loading=!0,this.error_message=null;let t="";if(e&&(this.options.page=1),this.options.page>1&&(this.options.page===this.prevPage-1?t=this.link.find((e=>"previous"===e.relation)).url:this.options.page===this.prevPage+1&&(t=this.link.find((e=>"next"===e.relation)).url),t=t.replace(/_getpages=[^&]*&*/,"").replace("/fhir?","/fhir/Practitioner?"),t=t.substring(t.indexOf("/fhir/")),-1===t.indexOf("_revinclude=Basic:practitioner")&&(t+="&_revinclude=Basic:practitioner"),-1===t.indexOf("_tag=pp")&&(t+="&_tag=pp"),-1===t.indexOf("_sort=-_lastUpdated")&&(t+="&_sort=-_lastUpdated"),-1===t.indexOf("_total=accurate")&&(t+="&_total=accurate")),""===t){let e=this.options.itemsPerPage||10,r="";for(let t in this.options.sortBy)r&&(r+=","),this.options.sortDesc[t]&&(r+="-"),r+=this.options.sortBy[t];t="/fhir/Practitioner?_count="+e+"&_revinclude=Basic:practitioner&_tag=pp&_sort=-_lastUpdated&_total=accurate",this.debug=t}let r=Object.keys(this.terms);for(let i of r)Array.isArray(this.terms[i])?this.terms[i].length>0&&(t+="&"+i+"="+this.terms[i].join(",")):this.terms[i]&&(t+="&"+i+"="+this.terms[i]);this.prevPage=this.options.page,fetch(t).then((e=>{e.json().then((async e=>{if(this.results=[],e.total>0){this.link=e.link;for(let t of e.entry){if("Practitioner"!==t.resource.resourceType)continue;let r={id:t.resource.id};r.surname=t.resource.name[0].family,r.given=t.resource.name[0].given.join(", "),r.birthDate=t.resource.birthDate,r.gender=t.resource.gender,r.gender=await this.$fhirutils.lookup(r.gender,"http://hl7.org/fhir/administrative-gender");let i=t.resource.meta.tag.filter((e=>"http://ihris.org/fhir/CodeSystem/bw-boards"===e.system)),a=[];for(let e of i)a.push(e.display);r.board=a.join(", "),r.omang=this.$fhirpath.evaluate(t.resource,"Practitioner.identifier.where(type.coding.code='omang').value"),r.passport=this.$fhirpath.evaluate(t.resource,"Practitioner.identifier.where(type.coding.code='passport').value");let s=[];for(let t of e.entry){if(!t.resource.meta.profile.includes("http://ihris.org/fhir/StructureDefinition/bhpc-registration-profile"))continue;let e=t.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/ihris-practitioner-reference"===e.url))?.valueReference?.reference;if("Practitioner/"+r.id!==e)continue;let i=t.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/bhpc-hp-number"===e.url));i&&s.push(i.valueString)}r.hpnumber=s.join(", "),this.results.push(r)}}this.total=e.total,this.loading=!1,this.checkRerun()})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",this.checkRerun(),console.log(e)}))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",this.checkRerun(),console.log(e)}))}}}),n=s,o=r(3736),c=r(3453),l=r.n(c),h=r(2371),u=r(7118),d=r(4228),p=r(4998),m=r(9762),f=r(5978),g=(0,o.Z)(n,i,a,!1,null,null,null),b=g.exports;l()(g,{VCard:h.Z,VCardSubtitle:u.Qq,VCardText:u.ZB,VCardTitle:u.EB,VContainer:d.Z,VDataTable:p.Z,VSpacer:m.Z,VTextField:f.Z})}}]);
//# sourceMappingURL=581.ecf0a1c9.js.map