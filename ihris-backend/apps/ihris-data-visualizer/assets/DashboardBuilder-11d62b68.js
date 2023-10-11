import{V as J,a as Y,b as L,c as U,d as w}from"./VisualizationBuilder-ae91071f.js";import{_ as G,r as S,o as h,c as f,w as e,a as i,V as j,b as N,d as r,t as z,e as _,f as m,g as I,h as C,i as v,j as O,k as g,l as x,F as D,m as T,n as H,p as M,q as k,s as q,u as R,v as X,x as K,y as F,z as A,A as E,B as Q,C as Z,D as $}from"./index-35364efe.js";import{V as ee}from"./VContainer-9a22ec70.js";import{V as p}from"./VCol-a77558dc.js";const ie={props:{edit:{type:Boolean,default:!1}},data(){return{dashboards:[],loadingDashData:!1,editingDash:!1,deleteDash:!1,visualizations:[],dimensions:[],displayVizList:!1,loadingAvailableVizs:!1,availableViz:[],hardRerenderViz:0,title:"",dashboardId:"",chart_layout:{},showValuesSelector:!1,filters:[],activeDimension:{dimValues:[],selectedValues:[],filterCondition:"include",data:"",loading:!1}}},watch:{activeDimension:{handler(){if(!this.activeDimension.data.name)return;const n=this.filters.findIndex(l=>l.name===this.activeDimension.data.name),t={name:this.activeDimension.data.name,display:this.activeDimension.data.display,values:this.activeDimension.selectedValues,type:this.activeDimension.data.type,filterCondition:this.activeDimension.filterCondition};this.activeDimension.selectedValues.length===0?n>-1&&this.filters.splice(n,1):n===-1?this.filters.push(t):this.filters[n]=t},deep:!0}},computed:{canSave(){return!!(this.visualizations.length>0&&this.title)},draggable(){return!!this.editingDash},resizable(){return!!this.editingDash}},methods:{listDashboard(){this.dashboards=[],this.loading=!0,this.displayDashList=!0,this.getDashboards().then(()=>{this.loading=!1})},getDashboards(n){return new Promise((t,l)=>{n||(n="/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/ihris-dashboard"),fetch(n).then(u=>{u.json().then(s=>{for(const c of s.entry){const V=c.resource.extension.find(y=>y.url==="http://ihris.org/fhir/StructureDefinition/ihris-basic-name");V&&this.dashboards.push({id:c.resource.id,name:V.valueString})}const o=s.link.find(c=>c.relation==="next");if(o)this.getDashboards(o.url).then(()=>t()).catch(c=>l(c));else return t()})})})},cancelEditing(){this.dashboardId?this.editingDash=!1:this.$router.push({name:"home"})},deleteDashboard(){this.dashboardId?fetch("/fhir/Basic/"+this.dashboardId,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(()=>{this.$router.push({name:"home"})}):this.$router.push({name:"home"})},applyFilters(){this.showValuesSelector=!1,this.reloadAllViz(),this.activeDimension.data={}},removeFilter(n,t){this.filters[n].values.splice(t,1),this.filters[n].values.length===0&&this.filters.splice(n,1),this.reloadAllViz()},reloadAllViz(){this.hardRerenderViz++},activateDimension(n){this.showValuesSelector=!0,this.activeDimension.loading=!0,this.activeDimension.dimValues=[],this.activeDimension.selectedValues=[],this.activeDimension.filterCondition="include";const t=this.filters.find(u=>u.name===this.activeDimension.data.name);t&&(this.activeDimension.filterCondition=t.filterCondition,this.activeDimension.selectedValues=JSON.parse(JSON.stringify(t.values)));const l=`/es/populateFilter/${n.dataset.name}/${n.name}?dataType=${n.type}`;fetch(l,{method:"GET"}).then(u=>{u.json().then(s=>{this.activeDimension.loading=!1;for(const o of s)this.activeDimension.dimValues.push({name:o.key.value})})})},popDimensions(n){for(const t of n.data)this.dimensions.find(u=>u.name===t.name)||(t.dataset=n.dataset,this.dimensions.push(t))},getDashboard(){this.loadingDashData=!0,this.visualizations=[],fetch("/fhir/Basic/"+this.dashboardId).then(n=>{n.json().then(t=>{this.loadingDashData=!1;for(const l of t.extension)if(l.url==="http://ihris.org/fhir/StructureDefinition/ihris-basic-name"&&(this.title=l.valueString),l.url==="http://ihris.org/fhir/StructureDefinition/ihris-dashboard-visualization"){const u=l.extension.find(d=>d.url==="vizID").valueString,s=l.extension.find(d=>d.url==="horizontal").valueDecimal,o=l.extension.find(d=>d.url==="vertical").valueDecimal,c=l.extension.find(d=>d.url==="width").valueDecimal,V=l.extension.find(d=>d.url==="height").valueDecimal,y=l.extension.find(d=>d.url==="heightPx").valueDecimal,B=l.extension.find(d=>d.url==="itemID").valueInteger,a=l.extension.find(d=>d.url==="static").valueBoolean;this.visualizations.push({id:u,x:s,y:o,w:c,h:V,hPx:y,i:B,static:a})}})})},resizeEvent:function(n,t,l,u,s){const o=this.visualizations.find(c=>c.i===n);o.hPx=u-36,o.rerender++},resizedEvent(n,t,l,u,s){const o=this.visualizations.find(c=>c.i===n);o.hPx=u-36,o.rerender++},listViz(){this.loadingAvailableVizs=!0,this.displayVizList=!0,this.getViz().then(()=>{this.loadingAvailableVizs=!1})},getViz(n){return new Promise((t,l)=>{this.availableViz=[],n||(n="/fhir/Basic?_profile=http://ihris.org/fhir/StructureDefinition/ihris-data-visualization"),fetch(n).then(u=>{u.json().then(s=>{for(const c of s.entry){const V=c.resource.extension.find(y=>y.url==="http://ihris.org/fhir/StructureDefinition/ihris-basic-name");V&&this.availableViz.push({id:c.resource.id,name:V.valueString})}const o=s.link.find(c=>c.relation==="next");if(o)this.getViz(o.url).then(()=>t()).catch(c=>l(c));else return t()})})})},addVizualization(n){let t=0,l=0;for(const u of this.visualizations)u.y>t&&(t=u.y),u.x>l&&(l=u.x);this.visualizations.length>0&&(t+=11.2),this.visualizations.push({id:n,x:l,y:t,w:6,h:11.2,hPx:400,i:this.visualizations.length,static:!1,rerender:0})},save(){const n={resourceType:"Basic",meta:{profile:["http://ihris.org/fhir/StructureDefinition/ihris-dashboard"]},code:{coding:[{code:"visualization",system:"http://ihris.org/fhir/CodeSystem/ihris-resource-codesystem"}]},extension:[{url:"http://ihris.org/fhir/StructureDefinition/ihris-basic-name",valueString:this.title}]};for(const l of this.visualizations)n.extension.push({url:"http://ihris.org/fhir/StructureDefinition/ihris-dashboard-visualization",extension:[{url:"vizID",valueString:l.id},{url:"horizontal",valueDecimal:l.x},{url:"vertical",valueDecimal:l.y},{url:"width",valueDecimal:l.w},{url:"height",valueDecimal:l.h},{url:"heightPx",valueDecimal:l.hPx},{url:"itemID",valueInteger:l.i},{url:"static",valueBoolean:l.static}]});let t="POST";this.dashboardId?(t="PUT",n.id=this.dashboardId):this.dashboardId="",fetch("/fhir/Basic/"+this.dashboardId,{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(l=>{if(l.status!==200&&l.status!==201){this.$store.commit("setMessage",{type:"error",text:"Failed to save Dashboard!",timeout:2e3});return}l.json().then(u=>{this.$store.commit("setMessage",{type:"primary",text:"Dashboard saved successfully!",timeout:4e3}),this.dashboardId=u.id})}).catch(l=>{this.$store.commit("setMessage",{type:"error",text:"Failed to save Dashboard!",timeout:2e3}),console.error("Error:",l)})},removeViz(n){const t=this.visualizations.findIndex(l=>l.i===n);t>-1&&this.visualizations.splice(t,1)},reload(){this.dashboardId?this.getDashboard():this.visualizations=[]}},created(){this.$route.params.id||(this.editingDash=!0),this.dashboardId=this.$route.params.id,this.dashboardId&&this.getDashboard(),this.listDashboard()},components:{VisualizationBuilder:J}},te=F("br",null,null,-1),se=F("br",null,null,-1),ae={style:{"font-size":"13px",cursor:"pointer"}},le={key:1,style:{"text-align":"center"}};function ne(n,t,l,u,s,o){const c=S("v-data-table"),V=S("VisualizationBuilder"),y=S("grid-item"),B=S("grid-layout");return h(),f(ee,{fluid:""},{default:e(()=>[i(T,{persistent:"",transition:"dialog-top-transition",modelValue:s.showValuesSelector,"onUpdate:modelValue":t[3]||(t[3]=a=>s.showValuesSelector=a),width:"560px"},{default:e(()=>[i(j,{color:"primary",density:"compact",height:"40px"},{default:e(()=>[i(N,null,{default:e(()=>[r(" Values For "+z(s.activeDimension.data.display),1)]),_:1}),i(_),i(m,{onClick:t[0]||(t[0]=a=>s.showValuesSelector=!1),style:{cursor:"pointer"}},{default:e(()=>[r("mdi-close")]),_:1})]),_:1}),i(I,{class:"overflow-auto"},{default:e(()=>[i(C,null,{default:e(()=>[i(p,{cols:"auto"},{default:e(()=>[te,i(Y,{inline:"",modelValue:s.activeDimension.filterCondition,"onUpdate:modelValue":t[1]||(t[1]=a=>s.activeDimension.filterCondition=a)},{default:e(()=>[i(L,{label:"Include",value:"include"}),i(L,{label:"Exclude",value:"exclude"})]),_:1},8,["modelValue"])]),_:1}),i(_),i(p,{cols:"2"},{default:e(()=>[se,i(v,{color:"accent",size:"small",onClick:o.applyFilters},{default:e(()=>[r(" Apply ")]),_:1},8,["onClick"])]),_:1})]),_:1}),i(O,null,{default:e(()=>[(h(!0),g(D,null,x(s.filters,(a,d)=>(h(),g(D,null,[a.name===s.activeDimension.data.name?(h(!0),g(D,{key:0},x(a.values,(b,P)=>(h(),f(R,{key:b.name,color:"green","text-color":"red",variant:"outlined",closable:"","onClick:close":W=>o.removeFilter(d,P)},{default:e(()=>[r(z(b.name),1)]),_:2},1032,["onClick:close"]))),128)):k("",!0)],64))),256)),i(c,{"hide-default-header":"","items-per-page":27,headers:[{value:"name"}],items:s.activeDimension.dimValues,loading:s.activeDimension.loading,dense:"","item-key":"name","show-select":"",modelValue:s.activeDimension.selectedValues,"onUpdate:modelValue":t[2]||(t[2]=a=>s.activeDimension.selectedValues=a)},null,8,["items","loading","modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(T,{transition:"dialog-top-transition",modelValue:s.displayVizList,"onUpdate:modelValue":t[5]||(t[5]=a=>s.displayVizList=a),width:"960px"},{default:e(()=>[i(j,{color:"primary",density:"compact",height:"40px"},{default:e(()=>[i(N,null,{default:e(()=>[r(" Available Vizualizations ")]),_:1}),i(_),i(m,{onClick:t[4]||(t[4]=a=>s.displayVizList=!1),style:{cursor:"pointer"}},{default:e(()=>[r("mdi-close")]),_:1})]),_:1}),i(H,{indeterminate:s.loadingAvailableVizs,active:s.loadingAvailableVizs,color:"secondary"},null,8,["indeterminate","active"]),i(I,null,{default:e(()=>[i(O,null,{default:e(()=>[s.availableViz.length>0?(h(),f(M,{key:0,shaped:"",density:"compact"},{default:e(()=>[(h(!0),g(D,null,x(this.availableViz,(a,d)=>(h(),f(A,{key:d,onClick:b=>o.addVizualization(a.id)},{prepend:e(()=>[i(m,{icon:"mdi-menu-right"})]),default:e(()=>[i(E,null,{default:e(()=>[F("label",ae,z(a.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})):k("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(C,null,{default:e(()=>[i(p,{cols:"12"},{default:e(()=>[i(C,null,{default:e(()=>[i(_),s.editingDash?(h(),f(p,{key:0,cols:"auto"},{default:e(()=>[i(v,{color:"tertiary",size:"small",onClick:t[6]||(t[6]=a=>n.$router.push({name:"home"}))},{default:e(()=>[i(m,{start:"",color:"primary"},{default:e(()=>[r("mdi-home")]),_:1}),r(" Home ")]),_:1}),r("   "),i(v,{color:"tertiary",size:"small",onClick:o.reload},{default:e(()=>[i(m,{start:"",color:"primary"},{default:e(()=>[r("mdi-reload")]),_:1}),r(" Reload ")]),_:1},8,["onClick"]),r("   "),i(v,{color:"tertiary",size:"small",onClick:o.save,disabled:!o.canSave},{default:e(()=>[i(m,{start:"",color:"primary"},{default:e(()=>[r("mdi-content-save-check")]),_:1}),r(" Save ")]),_:1},8,["onClick","disabled"]),r("   "),i(v,{color:"tertiary",size:"small",onClick:o.listViz},{default:e(()=>[i(m,{start:"",color:"primary"},{default:e(()=>[r("mdi-plus")]),_:1}),r(" Insert Visualization ")]),_:1},8,["onClick"]),r("   "),i(v,{color:"tertiary",size:"small",onClick:t[7]||(t[7]=a=>n.$router.push({name:"vizBuilder"}))},{default:e(()=>[i(m,{start:"",color:"primary"},{default:e(()=>[r("mdi-plus")]),_:1}),r(" Create Visualization ")]),_:1})]),_:1})):k("",!0)]),_:1})]),_:1}),i(p,{cols:"12"},{default:e(()=>[i(C,null,{default:e(()=>[i(p,{cols:"2"},{default:e(()=>[s.editingDash?(h(),f(q,{key:0,label:"Dashboard Title*",outlined:"",density:"compact",modelValue:s.title,"onUpdate:modelValue":t[8]||(t[8]=a=>s.title=a)},null,8,["modelValue"])):(h(),f(R,{key:1,variant:"outlined",label:"",size:"large"},{default:e(()=>[r(z(s.title),1)]),_:1}))]),_:1}),i(p,{cols:"2"},{default:e(()=>[i(U,{size:"10",width:"30",modelValue:s.activeDimension.data,"onUpdate:modelValue":[t[9]||(t[9]=a=>s.activeDimension.data=a),o.activateDimension],items:s.dimensions,"item-title":"display","item-value":"name","return-object":"",clearable:"",label:"Filter By",density:"compact"},null,8,["modelValue","items","onUpdate:modelValue"])]),_:1}),s.editingDash?k("",!0):(h(),f(p,{key:0,cols:"auto"},{default:e(()=>[i(v,{icon:"",color:"tertiary",size:"small",onClick:t[10]||(t[10]=a=>s.editingDash=!0)},{default:e(()=>[i(m,{color:"primary"},{default:e(()=>[r("mdi-pencil")]),_:1}),i(w,{activator:"parent",location:"top"},{default:e(()=>[r(" Edit this dashboard ")]),_:1})]),_:1})]),_:1})),s.editingDash?(h(),f(p,{key:2,cols:"auto"},{default:e(()=>[i(v,{icon:"",color:"white",size:"small",onClick:o.cancelEditing},{default:e(()=>[i(m,{color:"error"},{default:e(()=>[r("mdi-close-thick")]),_:1}),i(w,{activator:"parent",location:"top"},{default:e(()=>[r(" Cancel Editing ")]),_:1})]),_:1},8,["onClick"])]),_:1})):(h(),f(p,{key:1,cols:"auto"},{default:e(()=>[i(v,{icon:"",color:"tertiary",size:"small",onClick:t[11]||(t[11]=a=>s.deleteDash=!0)},{default:e(()=>[i(m,{color:"primary"},{default:e(()=>[r("mdi-delete-circle")]),_:1}),i(w,{activator:"parent",location:"top"},{default:e(()=>[r(" Delete this dashboard ")]),_:1})]),_:1})]),_:1})),i(T,{modelValue:s.deleteDash,"onUpdate:modelValue":t[13]||(t[13]=a=>s.deleteDash=a),persistent:"",width:"auto"},{default:e(()=>[i(I,null,{default:e(()=>[i(X,{class:"text-h5"},{default:e(()=>[r(" Are you sure you want to delete this Dashboard? ")]),_:1}),i(K,{class:"justify-end"},{default:e(()=>[i(v,{color:"green darken-1",text:"",onClick:t[12]||(t[12]=a=>s.deleteDash=!1)},{default:e(()=>[r(" No ")]),_:1}),i(_),i(v,{color:"red darken-1",text:"",onClick:o.deleteDashboard},{default:e(()=>[r("Yes ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(_),i(p,{cols:"3"},{default:e(()=>[i(C,null,{default:e(()=>[i(p,{cols:"9"},{default:e(()=>[i(U,{modelValue:s.dashboardId,"onUpdate:modelValue":[t[14]||(t[14]=a=>s.dashboardId=a),t[15]||(t[15]=a=>n.$router.push({name:"dashBuilder",params:{edit:!1,id:s.dashboardId}}))],items:s.dashboards,"item-title":"name","item-value":"id",filled:"",density:"compact",label:"Other Dashboards"},null,8,["modelValue","items"])]),_:1}),s.dashboardId?(h(),f(p,{key:0,cols:"3"},{default:e(()=>[i(v,{icon:"",dark:"",color:"indigo",size:"small",onClick:t[16]||(t[16]=a=>n.$router.push({name:"dashBuilder",params:{edit:!0}}))},{default:e(()=>[i(m,null,{default:e(()=>[r("mdi-plus")]),_:1}),i(w,{activator:"parent",location:"top"},{default:e(()=>[r(" Add New Dashboard ")]),_:1})]),_:1})]),_:1})):k("",!0)]),_:1})]),_:1})]),_:1}),(h(!0),g(D,null,x(s.filters,(a,d)=>(h(),g(D,null,[(h(!0),g(D,null,x(a.values,(b,P)=>(h(),f(R,{key:b.name,class:"ma-2",color:"green","text-color":"red",variant:"outlined",closable:"","onClick:close":W=>o.removeFilter(d,P)},{default:e(()=>[r(z(a.display)+": "+z(b.name),1)]),_:2},1032,["onClick:close"]))),128))],64))),256)),s.loadingDashData?(h(),f(H,{key:0,indeterminate:!0})):s.visualizations.length===0?(h(),g("div",le," Your dashboard is blank. Click Add Visualization button to add dashboard items ")):k("",!0),i(B,{layout:s.visualizations,"onUpdate:layout":t[17]||(t[17]=a=>s.visualizations=a),"col-num":14,"row-height":30,"is-draggable":o.draggable,"is-resizable":o.resizable,responsive:!1,restoreOnDrag:!0,"vertical-compact":!1,"prevent-collision":!1,"use-css-transforms":!0},{default:e(()=>[(h(!0),g(D,null,x(s.visualizations,a=>(h(),f(y,{static:a.static,x:a.x,y:a.y,w:a.w,h:a.h,i:a.i,key:a.i,onResize:o.resizeEvent,onResized:o.resizedEvent},{default:e(()=>[i(I,{height:a.hPx+37},{default:e(()=>[i(Q,{transition:"slide-y-transition",rounded:"b-xl","close-on-content-click":!1},{activator:e(({props:d})=>[i(m,Z($(d)),{default:e(()=>[r("mdi-dots-horizontal")]),_:2},1040)]),default:e(()=>[i(M,{rounded:"",dense:""},{default:e(()=>[i(A,{link:"",onClick:d=>o.removeViz(a.i)},{prepend:e(()=>[i(m,{size:"small",icon:"mdi-minus"})]),default:e(()=>[i(E,null,{default:e(()=>[r(" Remove Visualization ")]),_:1})]),_:2},1032,["onClick"]),i(A,{link:"",onClick:d=>n.$router.push({path:"/vizBuilder/"+a.id})},{prepend:e(()=>[i(m,{icon:"mdi-pencil"})]),default:e(()=>[i(E,null,{default:e(()=>[r("Edit")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),i(V,{id:a.id,softRerenderViz:a.rerender,hardRerenderViz:s.hardRerenderViz,vizHeight:a.hPx,editingViz:!1,externalFilters:s.filters,onDimensions:o.popDimensions},null,8,["id","softRerenderViz","hardRerenderViz","vizHeight","externalFilters","onDimensions"])]),_:2},1032,["height"])]),_:2},1032,["static","x","y","w","h","i","onResize","onResized"]))),128))]),_:1},8,["layout","is-draggable","is-resizable"])]),_:1})]),_:1})]),_:1})}const he=G(ie,[["render",ne]]);export{he as default};
