import{j as r}from"./jsx-runtime-u17CrQMm.js";import{A as o,a}from"./avatar-BPBvO1qc.js";import"./iframe-QywSF6W6.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-BQHNewu7.js";const n={title:"Components/AvatarGroup",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},spacing:{control:"select",options:["tight","relaxed"]}}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(a,{src:"https://i.pravatar.cc/150?u=1"}),r.jsx(a,{src:"https://i.pravatar.cc/150?u=2"}),r.jsx(a,{src:"https://i.pravatar.cc/150?u=3"}),r.jsx(a,{src:"https://i.pravatar.cc/150?u=4"})]}),args:{max:3,size:"md"}},t={render:e=>r.jsxs(o,{...e,children:[r.jsx(a,{fallback:"A",bgColor:"#f97316"}),r.jsx(a,{fallback:"B",bgColor:"#3b82f6"}),r.jsx(a,{fallback:"C",bgColor:"#10b981"})]}),args:{spacing:"relaxed",size:"lg"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>\r
            <Avatar src="https://i.pravatar.cc/150?u=1" />\r
            <Avatar src="https://i.pravatar.cc/150?u=2" />\r
            <Avatar src="https://i.pravatar.cc/150?u=3" />\r
            <Avatar src="https://i.pravatar.cc/150?u=4" />\r
        </AvatarGroup>,
  args: {
    max: 3,
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args}>\r
            <Avatar fallback="A" bgColor="#f97316" />\r
            <Avatar fallback="B" bgColor="#3b82f6" />\r
            <Avatar fallback="C" bgColor="#10b981" />\r
        </AvatarGroup>,
  args: {
    spacing: 'relaxed',
    size: 'lg'
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","Relaxed"];export{s as Default,t as Relaxed,u as __namedExportsOrder,n as default};
