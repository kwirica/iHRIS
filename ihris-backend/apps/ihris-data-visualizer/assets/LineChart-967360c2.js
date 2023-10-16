import{L as S}from"./LineStyle-05cba873.js";import{C as L}from"./ChartLabel-7727f572.js";import{_ as C,r as h,o as _,c as v,w as l,a as e,m as k,bb as f,d as i,s as x,h as y,g as P,j as w}from"./index-4503f8c1.js";import{V as T}from"./TextStyle-e28da61f.js";import{e as V,d as u,f as r,g as d,h as m,i as p}from"./VisualizationBuilder-5a7bfb61.js";import{V as b}from"./VCol-a93c4277.js";import{V as E}from"./VContainer-0a8d6998.js";const B={props:{chartSubType:String,option:Object},data(){return{settings:{type:"line",colorBy:"data",label:{},endLabel:{},labelLine:{show:!1,lineStyle:{}},lineStyle:{type:"solid"},areaStyle:{color:"#BEB9B90A"},markPoint:{},symbol:"emptyCircle",symbolSize:4,step:!1},markPoint:!1,displayAreaColor:!1,lineType:["solid","dashed","dotted"],steps:[!1,!0,"start","middle","end"],colorBy:["data","series"],symbol:[{name:"emptyCircle",display:"Empty Circle"},{name:"circle",display:"Circle"},{name:"rect",display:"Rectangle"},{name:"roundRect",display:"Round Rectangle"},{name:"triangle",display:"Triangle"},{name:"diamond",display:"Diamond"},{name:"pin",display:"Pin"},{name:"arrow",display:"Arrow"},{name:"none",display:"None"}]}},watch:{chartSubType(){this.chartSubType==="area"?this.settings.areaStyle={}:delete this.settings.areaStyle}},created(){if(this.chartSubType==="area"&&(this.settings.areaStyle={}),this.option.series&&this.option.series.length>0){const o=this.option.series.find(t=>t.type==="line");for(const t in o)this.settings[t]&&(this.settings[t]=o[t])}this.settings.markPoint&&this.settings.markPoint.data&&(this.markPoint=!0),this.updated()},methods:{markPointSwitch(){this.markPoint?this.settings.markPoint={data:[{type:"max"}],symbol:"pin"}:this.settings.markPoint={},this.updated()},lineLabelSettings(o){this.settings.label=o,this.updated()},lineEndLabelSettings(o){this.settings.endLabel=o,this.updated()},labelLineStyle(o){for(const t in o.value)this.settings.labelLine.lineStyle[t]=o.value[t];this.updated()},updated(){this.$emit("chartSettings",this.settings)}},components:{LineStyle:S,ChartLabel:L}};function U(o,t,A,I,a,s){const g=h("ChartLabel"),c=h("LineStyle");return _(),v(E,{"grid-list-xs":""},{default:l(()=>[e(k,{modelValue:a.displayAreaColor,"onUpdate:modelValue":t[1]||(t[1]=n=>a.displayAreaColor=n),width:"313px"},{default:l(()=>[e(T,{class:"ma-2","canvas-height":"300",modelValue:a.settings.areaStyle.color,"onUpdate:modelValue":t[0]||(t[0]=n=>a.settings.areaStyle.color=n)},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(f,{items:a.colorBy,modelValue:a.settings.colorBy,"onUpdate:modelValue":t[2]||(t[2]=n=>a.settings.colorBy=n),label:"Color By",onChange:s.updated},null,8,["items","modelValue","onChange"]),e(V,{color:"blue",label:"Mark point in a chart",modelValue:a.markPoint,"onUpdate:modelValue":t[3]||(t[3]=n=>a.markPoint=n),onChange:s.markPointSwitch},{default:l(()=>[e(u,{activator:"parent",location:"bottom"},{default:l(()=>[i("Display a mark for the highest/minimum value on the line")]),_:1})]),_:1},8,["modelValue","onChange"]),e(f,{items:a.symbol,modelValue:a.settings.symbol,"onUpdate:modelValue":t[4]||(t[4]=n=>a.settings.symbol=n),label:"Symbol","item-title":"display","item-value":"name",onChange:s.updated},null,8,["items","modelValue","onChange"]),e(x,{modelValue:a.settings.symbolSize,"onUpdate:modelValue":t[5]||(t[5]=n=>a.settings.symbolSize=n),type:"number",label:"Symbol size",min:"0",max:"100",onInput:s.updated},null,8,["modelValue","onInput"]),e(f,{items:a.steps,modelValue:a.settings.step,"onUpdate:modelValue":t[6]||(t[6]=n=>a.settings.step=n),label:"Step line",onInput:s.updated},{default:l(()=>[e(u,{activator:"parent",location:"bottom"},{default:l(()=>[i("Whether to show as a step line")]),_:1})]),_:1},8,["items","modelValue","onInput"]),e(r,{multiple:"",focusable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(m,null,{default:l(()=>[i("Labels")]),_:1}),e(p,null,{default:l(()=>[e(g,{subscriber:"lineLabel",onLineLabel:s.lineLabelSettings,values:a.settings.label},null,8,["onLineLabel","values"])]),_:1})]),_:1}),e(u,{activator:"parent",location:"bottom"},{default:l(()=>[i("Settings about labels of a bar")]),_:1})]),_:1}),e(r,{multiple:"",focusable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(m,null,{default:l(()=>[i("End Label")]),_:1}),e(p,null,{default:l(()=>[e(g,{subscriber:"lineEndLabel",onLineEndLabel:s.lineEndLabelSettings,values:a.settings.endLabel},null,8,["onLineEndLabel","values"])]),_:1})]),_:1}),e(u,{activator:"parent",location:"bottom"},{default:l(()=>[i("Label on the end of line")]),_:1})]),_:1}),e(r,{multiple:"",focusable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(m,null,{default:l(()=>[i("Label Line")]),_:1}),e(p,null,{default:l(()=>[e(y,null,{default:l(()=>[e(b,{cols:"12"},{default:l(()=>[e(V,{color:"blue",label:"Show/Hide",modelValue:a.settings.labelLine.show,"onUpdate:modelValue":t[7]||(t[7]=n=>a.settings.labelLine.show=n),onChange:s.updated},{default:l(()=>[e(u,{activator:"parent",location:"bottom"},{default:l(()=>[i("Show or Hide label line")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),e(b,{cols:"12"},{default:l(()=>[e(c,{subscriber:"labelLineStyle",onLabelLineStyle:s.labelLineStyle,values:a.settings.labelLine.lineStyle},null,8,["onLabelLineStyle","values"])]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{activator:"parent",location:"bottom"},{default:l(()=>[i("Configuration of label guide line")]),_:1})]),_:1}),e(r,{multiple:"",focusable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(m,null,{default:l(()=>[i("Line Style")]),_:1}),e(p,null,{default:l(()=>[e(y,null,{default:l(()=>[e(b,null,{default:l(()=>[e(f,{items:a.lineType,modelValue:a.settings.lineStyle.type,"onUpdate:modelValue":t[8]||(t[8]=n=>a.settings.lineStyle.type=n),label:"Type",onInput:s.updated},null,8,["items","modelValue","onInput"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{multiple:"",focusable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(m,null,{default:l(()=>[i("Area Style")]),_:1}),e(p,null,{default:l(()=>[e(y,null,{default:l(()=>[e(b,{cols:"6"},{default:l(()=>[i(" Color: ")]),_:1}),e(b,{cols:"6"},{default:l(()=>[e(P,{color:a.settings.areaStyle.color,width:"30px",height:"20",onClick:t[10]||(t[10]=n=>a.displayAreaColor=!0)},{default:l(()=>[e(w,{onClick:t[9]||(t[9]=n=>a.displayAreaColor=!0)})]),_:1},8,["color"])]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{activator:"parent",location:"bottom"},{default:l(()=>[i("Configuration of label guide line")]),_:1})]),_:1})]),_:1})}const F=C(B,[["render",U]]);export{F as default};
