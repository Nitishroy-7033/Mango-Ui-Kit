import{j as r}from"./jsx-runtime-u17CrQMm.js";import{a,A as c}from"./avatar-BPBvO1qc.js";import{U as p}from"./user-DfzXYxb_.js";import{S as n}from"./shield-BVJfn6Gp.js";import{Z as d}from"./zap-DA5sd4l-.js";import{B as x}from"./bell-06A52uJJ.js";import"./iframe-QywSF6W6.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-BQHNewu7.js";import"./createLucideIcon-B-6-c5fd.js";const C={title:"Components/Avatar",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},shape:{control:"select",options:["circle","square","rounded"]},status:{control:"select",options:["none","online","offline","away","busy"]},variant:{control:"select",options:["solid","bordered","ghost"]}}},t={render:s=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r.jsx(a,{...s,size:"xs"}),r.jsx(a,{...s,size:"sm"}),r.jsx(a,{...s,size:"md"}),r.jsx(a,{...s,size:"lg"}),r.jsx(a,{...s,size:"xl"}),r.jsx(a,{...s,size:"2xl"})]}),r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx(a,{...s,shape:"circle",status:"online"}),r.jsx(a,{...s,shape:"rounded",status:"away"}),r.jsx(a,{...s,shape:"square",status:"busy"})]}),r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx(a,{...s,variant:"bordered"}),r.jsx(a,{...s,variant:"ghost",fallback:r.jsx(p,{size:20})}),r.jsx(a,{...s,showRing:!0,ringColor:"#f97316"})]})]}),args:{src:"https://i.pravatar.cc/150?u=1",alt:"User"}},e={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx(a,{fallback:"A",bgColor:"#f97316",textColor:"white"}),r.jsx(a,{fallback:"B",bgColor:"#3b82f6",textColor:"white"}),r.jsx(a,{fallback:"C",bgColor:"#10b981",textColor:"white"}),r.jsx(a,{fallback:"D",bgColor:"#8b5cf6",textColor:"white"})]})},o={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx(a,{fallback:r.jsx(n,{size:20}),bgColor:"#1e293b"}),r.jsx(a,{fallback:r.jsx(d,{size:20}),bgColor:"#fef08a",textColor:"#854d0e"}),r.jsx(a,{fallback:r.jsx(x,{size:20}),variant:"ghost"})]})},l={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx(a,{status:"online",statusPosition:"top-right"}),r.jsx(a,{status:"online",statusPosition:"bottom-right"}),r.jsx(a,{status:"online",statusPosition:"top-left"}),r.jsx(a,{status:"online",statusPosition:"bottom-left"})]})},i={render:s=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsxs(c,{...s,children:[r.jsx(a,{src:"https://i.pravatar.cc/150?u=1"}),r.jsx(a,{src:"https://i.pravatar.cc/150?u=2"}),r.jsx(a,{src:"https://i.pravatar.cc/150?u=3"}),r.jsx(a,{src:"https://i.pravatar.cc/150?u=4"})]}),r.jsxs(c,{...s,max:3,size:"sm",children:[r.jsx(a,{src:"https://i.pravatar.cc/150?u=5"}),r.jsx(a,{src:"https://i.pravatar.cc/150?u=6"}),r.jsx(a,{src:"https://i.pravatar.cc/150?u=7"}),r.jsx(a,{src:"https://i.pravatar.cc/150?u=8"}),r.jsx(a,{src:"https://i.pravatar.cc/150?u=9"})]}),r.jsxs(c,{...s,spacing:"relaxed",children:[r.jsx(a,{fallback:"A",bgColor:"#f97316"}),r.jsx(a,{fallback:"B",bgColor:"#3b82f6"}),r.jsx(a,{fallback:"C",bgColor:"#10b981"})]})]}),args:{size:"md",spacing:"tight"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
            <div style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    }}>\r
                <Avatar {...args} size="xs" />\r
                <Avatar {...args} size="sm" />\r
                <Avatar {...args} size="md" />\r
                <Avatar {...args} size="lg" />\r
                <Avatar {...args} size="xl" />\r
                <Avatar {...args} size="2xl" />\r
            </div>\r
\r
            <div style={{
      display: 'flex',
      gap: '1rem'
    }}>\r
                <Avatar {...args} shape="circle" status="online" />\r
                <Avatar {...args} shape="rounded" status="away" />\r
                <Avatar {...args} shape="square" status="busy" />\r
            </div>\r
\r
            <div style={{
      display: 'flex',
      gap: '1rem'
    }}>\r
                <Avatar {...args} variant="bordered" />\r
                <Avatar {...args} variant="ghost" fallback={<User size={20} />} />\r
                <Avatar {...args} showRing ringColor="#f97316" />\r
            </div>\r
        </div>,
  args: {
    src: 'https://i.pravatar.cc/150?u=1',
    alt: 'User'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
            <Avatar fallback="A" bgColor="#f97316" textColor="white" />\r
            <Avatar fallback="B" bgColor="#3b82f6" textColor="white" />\r
            <Avatar fallback="C" bgColor="#10b981" textColor="white" />\r
            <Avatar fallback="D" bgColor="#8b5cf6" textColor="white" />\r
        </div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
            <Avatar fallback={<Shield size={20} />} bgColor="#1e293b" />\r
            <Avatar fallback={<Zap size={20} />} bgColor="#fef08a" textColor="#854d0e" />\r
            <Avatar fallback={<Bell size={20} />} variant="ghost" />\r
        </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
            <Avatar status="online" statusPosition="top-right" />\r
            <Avatar status="online" statusPosition="bottom-right" />\r
            <Avatar status="online" statusPosition="top-left" />\r
            <Avatar status="online" statusPosition="bottom-left" />\r
        </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
            <AvatarGroup {...args}>\r
                <Avatar src="https://i.pravatar.cc/150?u=1" />\r
                <Avatar src="https://i.pravatar.cc/150?u=2" />\r
                <Avatar src="https://i.pravatar.cc/150?u=3" />\r
                <Avatar src="https://i.pravatar.cc/150?u=4" />\r
            </AvatarGroup>\r
\r
            <AvatarGroup {...args} max={3} size="sm">\r
                <Avatar src="https://i.pravatar.cc/150?u=5" />\r
                <Avatar src="https://i.pravatar.cc/150?u=6" />\r
                <Avatar src="https://i.pravatar.cc/150?u=7" />\r
                <Avatar src="https://i.pravatar.cc/150?u=8" />\r
                <Avatar src="https://i.pravatar.cc/150?u=9" />\r
            </AvatarGroup>\r
\r
            <AvatarGroup {...args} spacing="relaxed">\r
                <Avatar fallback="A" bgColor="#f97316" />\r
                <Avatar fallback="B" bgColor="#3b82f6" />\r
                <Avatar fallback="C" bgColor="#10b981" />\r
            </AvatarGroup>\r
        </div>,
  args: {
    size: 'md',
    spacing: 'tight'
  }
}`,...i.parameters?.docs?.source}}};const z=["Gallery","CustomColors","Icons","StatusPositions","Groups"];export{e as CustomColors,t as Gallery,i as Groups,o as Icons,l as StatusPositions,z as __namedExportsOrder,C as default};
