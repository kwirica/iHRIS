import{C as r}from"./ChartAxis-74c8970a.js";import{_ as o,r as i,o as n,k as x,a as p}from"./index-0856c5dc.js";import"./TextStyle-e9402a80.js";import"./VCol-e48a45c8.js";import"./LineStyle-a91af0b1.js";import"./ChartAxisPointer-76aa6701.js";import"./VisualizationBuilder-260638dd.js";import"./VContainer-3e1dff7e.js";const m={props:["values"],data(){return{xAxis:{}}},methods:{externalSettings(t){this.xAxis=t.value,this.updated()},updated(){this.$emit("chartXaxis",{name:"xAxis",value:this.xAxis})}},components:{ChartAxis:r}};function c(t,l,e,u,h,s){const a=i("ChartAxis");return n(),x("div",null,[p(a,{onChartAxis:s.externalSettings,values:e.values},null,8,["onChartAxis","values"])])}const g=o(m,[["render",c]]);export{g as default};