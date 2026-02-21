import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-QywSF6W6.js";import{c as v}from"./cn-BQHNewu7.js";import{S as h}from"./star-D2Jm-pGs.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B-6-c5fd.js";const i=({value:a=0,max:m=5,onChange:c,readOnly:r=!1,size:j=20,label:u,count:l,className:S=""})=>{const[b,g]=y.useState(null);return e.jsxs("div",{className:v("rating-container",S),children:[e.jsx("div",{className:"rating-stars",children:[...Array(m)].map((R,f)=>{const d=f+1,x=d<=(b??a);return e.jsx("button",{type:"button",className:v("star-btn",x&&"active",r&&"readonly"),onClick:()=>!r&&c?.(d),onMouseEnter:()=>!r&&g(d),onMouseLeave:()=>!r&&g(null),disabled:r,children:e.jsx(h,{size:j,fill:x?"currentColor":"none",strokeWidth:2})},f)})}),(u||l!==void 0)&&e.jsxs("div",{className:"rating-info",children:[u&&e.jsx("span",{className:"rating-label",children:u}),l!==void 0&&e.jsxs("span",{className:"rating-count",children:["(",l,")"]})]})]})};i.displayName="Rating";i.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},count:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const C={title:"Components/Rating",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"range",min:12,max:48,step:4}}}},p=a=>{const[m,c]=y.useState(3);return e.jsx(i,{...a,value:m,onChange:c})},s={render:a=>e.jsx(p,{...a}),args:{max:5,size:24}},n={args:{value:4,max:5,readOnly:!0,size:24}},t={render:a=>e.jsx(p,{...a}),args:{max:5,size:36}},o={render:a=>e.jsx(p,{...a}),args:{max:10,size:20}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <RatingDemo {...args} />,
  args: {
    max: 5,
    size: 24
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    max: 5,
    readOnly: true,
    size: 24
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <RatingDemo {...args} />,
  args: {
    max: 5,
    size: 36
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <RatingDemo {...args} />,
  args: {
    max: 10,
    size: 20
  }
}`,...o.parameters?.docs?.source}}};const _=["Default","Readonly","LargeStars","TenScale"];export{s as Default,t as LargeStars,n as Readonly,o as TenScale,_ as __namedExportsOrder,C as default};
