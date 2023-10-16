"use strict";(self["webpackChunkiHRIS_v5"]=self["webpackChunkiHRIS_v5"]||[]).push([[1675],{1675:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{"grid-list-xs":""}},[s("v-card",[s("v-card-title",[e._v(" Scheduled Exams "),s("v-spacer")],1),s("v-card-title",[s("v-text-field",{staticClass:"ma-2",attrs:{label:"Name",dense:"",outlined:"","hide-details":"",clearable:""},on:{change:function(t){return e.buildTerms()},"click:clear":function(t){return e.clearSearch("name")}},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}}),s("v-text-field",{staticClass:"ma-2",attrs:{label:"HP Number",dense:"",outlined:"","hide-details":"",clearable:""},on:{change:function(t){return e.buildTerms()},"click:clear":function(t){return e.clearSearch("hpnumber")}},model:{value:e.search.hpnumber,callback:function(t){e.$set(e.search,"hpnumber",t)},expression:"search.hpnumber"}}),s("v-text-field",{staticClass:"ma-2",attrs:{label:"Omang Number",dense:"",outlined:"","hide-details":"",clearable:""},on:{change:function(t){return e.buildTerms()},"click:clear":function(t){return e.clearSearch("omang")}},model:{value:e.search.omang,callback:function(t){e.$set(e.search,"omang",t)},expression:"search.omang"}}),s("v-text-field",{staticClass:"ma-2",attrs:{label:"Passport Number",dense:"",outlined:"","hide-details":"",clearable:""},on:{change:function(t){return e.buildTerms()},"click:clear":function(t){return e.clearSearch("passport")}},model:{value:e.search.passport,callback:function(t){e.$set(e.search,"passport",t)},expression:"search.passport"}})],1),e.error_message?s("v-card-subtitle",{staticClass:"white--text error"},[e._v(e._s(e.error_message))]):e._e(),s("v-card-text",[s("v-data-table",{staticClass:"elevation-1",staticStyle:{cursor:"pointer"},attrs:{headers:e.headers,items:e.results,"item-key":"id",options:e.options,"server-items-length":e.total,"footer-props":{"items-per-page-text":e.$t("App.hardcoded-texts.tableText"),"items-per-page-options":[5,10,20,50]},loading:e.loading},on:{"update:options":function(t){e.options=t},"click:row":e.clickIt}})],1)],1)],1)},a=[],i={data(){return{loading:!1,loadingExams:!1,search:{name:"",hpnumber:"",omang:"",passport:""},debug:"",terms:{},headers:[{text:"Cadre Category",value:"cadres"},{text:"Assessments",value:"assessments"},{text:"Start Date",value:"startdate"},{text:"End Date",value:"enddate"},{text:"Pass Mark",value:"passmark"},{text:"Auto Enroll",value:"autoenroll"},{text:"Results Status",value:"status"}],results:[],options:{itemsPerPage:10},total:0,prevPage:-1,link:[],error_message:null,update_again:{rerun:!1,restart:!1}}},watch:{options:{handler(){this.getData()},deep:!0}},mounted:function(){this.getData(!0)},methods:{clearSearch:function(e){this.search[e]="",this.buildTerms()},clickIt:function(e){this.$router.push({path:"/custom/nmcb-scheduled-exam?path=/components/exams&exam="+e.id})},checkRerun(){!this.loading&&this.update_again.rerun&&(this.getData(this.update_again.restart),this.update_again={rerun:!1,restart:!1})},async buildTerms(){this.terms={},this.search.name&&(this.terms["name:contains"]=this.search.name),this.search.omang&&(this.terms.identifier=this.search.omang),this.search.passport&&(this.terms.identifier=this.search.passport),this.getData(!0)},getData(e){if(this.loading)return this.update_again.rerun=!0,void(this.update_again.restart=this.update_again.restart||e);this.loading=!0,this.error_message=null;let t="";if(e&&(this.options.page=1),this.options.page>1&&(this.options.page===this.prevPage-1?t=this.link.find((e=>"previous"===e.relation)).url:this.options.page===this.prevPage+1&&(t=this.link.find((e=>"next"===e.relation)).url),t=t.replace(/_getpages=[^&]*&*/,"").replace("/fhir?","/fhir/Basic?"),t=t.substring(t.indexOf("/fhir/")),-1===t.indexOf("_profile=http://ihris.org/fhir/StructureDefinition/nmcb-exam-scheduling-profile")&&(t+="&_profile=http://ihris.org/fhir/StructureDefinition/nmcb-exam-scheduling-profile"),-1===t.indexOf("_sort=-_lastUpdated")&&(t+="&_sort=-_lastUpdated"),-1===t.indexOf("_total=accurate")&&(t+="&_total=accurate")),""===t){let e=this.options.itemsPerPage||10,s="";for(let t in this.options.sortBy)s&&(s+=","),this.options.sortDesc[t]&&(s+="-"),s+=this.options.sortBy[t];t="/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/nmcb-exam-scheduling-profile&_count="+e+"&_sort=-_lastUpdated&_total=accurate",this.debug=t}let s=Object.keys(this.terms);for(let r of s)Array.isArray(this.terms[r])?this.terms[r].length>0&&(t+="&"+r+"="+this.terms[r].join(",")):this.terms[r]&&(t+="&"+r+"="+this.terms[r]);this.prevPage=this.options.page,fetch(t).then((e=>{e.json().then((async e=>{if(this.results=[],e.total>0){this.link=e.link;for(let t of e.entry){let e={id:t.resource.id,cadres:[],assessments:[]};e.passmark=t.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/nmcb-exam-passmark"===e.url)).valueDecimal,e.startdate=t.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/start-date"===e.url)).valueDate,e.enddate=t.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/end-date"===e.url)).valueDate;let s=t.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/exam-auto-enroll"===e.url))?.valueBoolean;e.autoenroll=s?"Yes":"No";let r=t.resource.extension.filter((e=>"http://ihris.org/fhir/StructureDefinition/nmcb-cadre-category"===e.url));for(let t of r)e.cadres.push(t.valueCoding.display);e.cadres=e.cadres.join(", ");let a=t.resource.extension.filter((e=>"http://ihris.org/fhir/StructureDefinition/nmcb-exam-assessment-type"===e.url));for(let t of a)e.assessments.push(t.valueCoding.display);e.assessments=e.assessments.join(", "),e.status=t.resource.extension.find((e=>"http://ihris.org/fhir/StructureDefinition/nmcb-examresults-status"===e.url))?.valueCoding?.display,this.results.push(e)}}this.total=e.total,this.loading=!1,this.checkRerun()})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",this.checkRerun(),console.log(e)}))})).catch((e=>{this.loading=!1,this.error_message="Unable to load results.",this.checkRerun(),console.log(e)}))}}},n=i,o=s(3736),l=s(3453),c=s.n(l),u=s(2371),h=s(7118),d=s(4228),p=s(4998),m=s(9762),f=s(5978),g=(0,o.Z)(n,r,a,!1,null,null,null),x=g.exports;c()(g,{VCard:u.Z,VCardSubtitle:h.Qq,VCardText:h.ZB,VCardTitle:h.EB,VContainer:d.Z,VDataTable:p.Z,VSpacer:m.Z,VTextField:f.Z})}}]);
//# sourceMappingURL=1675.2da5d3b8.js.map