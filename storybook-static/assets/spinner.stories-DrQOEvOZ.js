import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as s}from"./spinner-BLi69KHB.js";import{H as o}from"./heart-ySDmphwf.js";import{S as c}from"./star-D2Jm-pGs.js";import{c as l}from"./createLucideIcon-B-6-c5fd.js";import{Z as p}from"./zap-DA5sd4l-.js";import"./iframe-QywSF6W6.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-BQHNewu7.js";import"./settings-CE_Qmr37.js";const d=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],v=l("cloud-rain",d);const x=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],u=l("ghost",x),k={title:"Components/Spinner",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["circular","dots","pulse","bouncing","waves","ring","gear","icon-pulse","icon-spin","icon-bounce"]},size:{control:{type:"range",min:10,max:100,step:2}},color:{control:"color"},speed:{control:{type:"range",min:.1,max:2,step:.1}},thickness:{control:{type:"range",min:1,max:10,step:1}}}},i={args:{variant:"circular",size:40}},r={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"40px",padding:"40px"},children:[e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"icon-pulse",icon:e.jsx(o,{fill:"#ef4444",color:"#ef4444"}),size:40}),e.jsx("span",{children:"Icon Pulse (Heart)"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"icon-spin",icon:e.jsx(c,{color:"#f59e0b"}),size:40}),e.jsx("span",{children:"Icon Spin (Star)"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"icon-bounce",icon:e.jsx(u,{color:"#64748b"}),size:40}),e.jsx("span",{children:"Icon Bounce (Ghost)"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"icon-pulse",icon:e.jsx(p,{color:"#fa8029"}),size:40,speed:.5}),e.jsx("span",{children:"Fast Zap"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"icon-bounce",icon:e.jsx(v,{color:"#3b82f6"}),size:40}),e.jsx("span",{children:"Rain Bounce"})]})]})},a={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"40px",padding:"40px"},children:[e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"circular",size:40}),e.jsx("span",{children:"Circular"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"ring",size:40,thickness:4}),e.jsx("span",{children:"Ring"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"dots",size:40}),e.jsx("span",{children:"Dots"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"pulse",size:40}),e.jsx("span",{children:"Pulse"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"waves",size:40}),e.jsx("span",{children:"Waves"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"bouncing",size:40}),e.jsx("span",{children:"Bouncing"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"gear",size:40}),e.jsx("span",{children:"Gear"})]}),e.jsxs("div",{style:n,children:[e.jsx(s,{variant:"icon-pulse",size:40,color:"#10b981"}),e.jsx("span",{children:"Icon Default"})]})]})},n={display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",fontSize:"12px",color:"#64748b"},t={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"32px"},children:[e.jsx(s,{size:16}),e.jsx(s,{size:32}),e.jsx(s,{size:48}),e.jsx(s,{size:64})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    size: 40
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    padding: '40px'
  }}>\r
            <div style={labelStyle}>\r
                <Spinner variant="icon-pulse" icon={<Heart fill="#ef4444" color="#ef4444" />} size={40} />\r
                <span>Icon Pulse (Heart)</span>\r
            </div>\r
            <div style={labelStyle}>\r
                <Spinner variant="icon-spin" icon={<Star color="#f59e0b" />} size={40} />\r
                <span>Icon Spin (Star)</span>\r
            </div>\r
            <div style={labelStyle}>\r
                <Spinner variant="icon-bounce" icon={<Ghost color="#64748b" />} size={40} />\r
                <span>Icon Bounce (Ghost)</span>\r
            </div>\r
            <div style={labelStyle}>\r
                <Spinner variant="icon-pulse" icon={<Zap color="#fa8029" />} size={40} speed={0.5} />\r
                <span>Fast Zap</span>\r
            </div>\r
            <div style={labelStyle}>\r
                <Spinner variant="icon-bounce" icon={<CloudRain color="#3b82f6" />} size={40} />\r
                <span>Rain Bounce</span>\r
            </div>\r
        </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
    padding: '40px'
  }}>\r
            <div style={labelStyle}><Spinner variant="circular" size={40} /><span>Circular</span></div>\r
            <div style={labelStyle}><Spinner variant="ring" size={40} thickness={4} /><span>Ring</span></div>\r
            <div style={labelStyle}><Spinner variant="dots" size={40} /><span>Dots</span></div>\r
            <div style={labelStyle}><Spinner variant="pulse" size={40} /><span>Pulse</span></div>\r
            <div style={labelStyle}><Spinner variant="waves" size={40} /><span>Waves</span></div>\r
            <div style={labelStyle}><Spinner variant="bouncing" size={40} /><span>Bouncing</span></div>\r
            <div style={labelStyle}><Spinner variant="gear" size={40} /><span>Gear</span></div>\r
            <div style={labelStyle}><Spinner variant="icon-pulse" size={40} color="#10b981" /><span>Icon Default</span></div>\r
        </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '32px'
  }}>\r
            <Spinner size={16} />\r
            <Spinner size={32} />\r
            <Spinner size={48} />\r
            <Spinner size={64} />\r
        </div>
}`,...t.parameters?.docs?.source}}};const C=["Default","IconAnimations","AllVariants","Sizes"];export{a as AllVariants,i as Default,r as IconAnimations,t as Sizes,C as __namedExportsOrder,k as default};
