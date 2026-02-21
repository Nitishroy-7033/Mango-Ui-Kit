import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-QywSF6W6.js";import{c as v}from"./cn-BQHNewu7.js";import"./preload-helper-PPVm8Dsz.js";const r=({variant:d="rectangular",width:c,height:p,borderRadius:u,className:m="",count:o=1,animate:x=!0,shimmer:l=!0})=>{const h=Array.from({length:o});return e.jsx(e.Fragment,{children:h.map((f,g)=>e.jsx("div",{className:v("mango-skeleton",`is-${d}`,x&&"animate-pulse",l&&"has-shimmer",m),style:{width:c,height:p,borderRadius:u,marginBottom:o>1?"0.5rem":0},children:l&&e.jsx("div",{className:"mango-skeleton-shimmer"})},g))})};r.displayName="Skeleton";r.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:"",defaultValue:{value:"'rectangular'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},borderRadius:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shimmer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const j={title:"Components/Skeleton",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{width:200,height:20,variant:"text"}},a={render:()=>e.jsxs("div",{style:{width:"400px",display:"flex",gap:"16px",alignItems:"center",padding:"24px",background:"var(--secondaryColor)",borderRadius:"24px"},children:[e.jsx(r,{variant:"circular",width:60,height:60}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r,{variant:"text",width:"60%",height:20}),e.jsx(r,{variant:"text",width:"90%",height:14})]})]})},i={args:{count:5,variant:"text",width:300}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",color:"#64748b",marginBottom:"8px"},children:"Text Line"}),e.jsx(r,{variant:"text",width:200})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",color:"#64748b",marginBottom:"8px"},children:"Circular (Avatar)"}),e.jsx(r,{variant:"circular",width:48,height:48})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",color:"#64748b",marginBottom:"8px"},children:"Rectangular (Block)"}),e.jsx(r,{variant:"rectangular",width:200,height:100})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",color:"#64748b",marginBottom:"8px"},children:"Rounded (Card)"}),e.jsx(r,{variant:"rounded",width:300,height:150})]})]})},s={args:{variant:"rectangular",width:200,height:100,borderRadius:"30px"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 200,
    height: 20,
    variant: 'text'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    padding: '24px',
    background: 'var(--secondaryColor)',
    borderRadius: '24px'
  }}>\r
            <Skeleton variant="circular" width={60} height={60} />\r
            <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>\r
                <Skeleton variant="text" width="60%" height={20} />\r
                <Skeleton variant="text" width="90%" height={14} />\r
            </div>\r
        </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    count: 5,
    variant: 'text',
    width: 300
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
            <div>\r
                <p style={{
        fontSize: '12px',
        color: '#64748b',
        marginBottom: '8px'
      }}>Text Line</p>\r
                <Skeleton variant="text" width={200} />\r
            </div>\r
            <div>\r
                <p style={{
        fontSize: '12px',
        color: '#64748b',
        marginBottom: '8px'
      }}>Circular (Avatar)</p>\r
                <Skeleton variant="circular" width={48} height={48} />\r
            </div>\r
            <div>\r
                <p style={{
        fontSize: '12px',
        color: '#64748b',
        marginBottom: '8px'
      }}>Rectangular (Block)</p>\r
                <Skeleton variant="rectangular" width={200} height={100} />\r
            </div>\r
            <div>\r
                <p style={{
        fontSize: '12px',
        color: '#64748b',
        marginBottom: '8px'
      }}>Rounded (Card)</p>\r
                <Skeleton variant="rounded" width={300} height={150} />\r
            </div>\r
        </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 200,
    height: 100,
    borderRadius: '30px'
  }
}`,...s.parameters?.docs?.source}}};const k=["Default","Composition","MultipleLines","Variants","CustomRadius"];export{a as Composition,s as CustomRadius,t as Default,i as MultipleLines,n as Variants,k as __namedExportsOrder,j as default};
