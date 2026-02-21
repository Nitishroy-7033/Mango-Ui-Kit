import{j as o}from"./jsx-runtime-u17CrQMm.js";import{T as t,B as r}from"./button-01qaZYzQ.js";import{C as u}from"./circle-question-mark-CUwy4as9.js";import{B as m}from"./bell-06A52uJJ.js";import{S as d}from"./star-D2Jm-pGs.js";import{I as f}from"./info-CClOfhqI.js";import{S as h}from"./settings-CE_Qmr37.js";import{D as x}from"./download-ouUGacro.js";import{T as v}from"./trash-2--y-KK5Rq.js";import"./iframe-QywSF6W6.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-BQHNewu7.js";import"./spinner-BLi69KHB.js";import"./createLucideIcon-B-6-c5fd.js";const k={title:"Components/Tooltip",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"]},delay:{control:{type:"number",min:0,max:2e3,step:100}}}},e={args:{content:"Hello from Tooltip! 👋",position:"top",children:o.jsx(r,{variant:"primary",children:"Hover me"})}},i={render:()=>o.jsxs("div",{style:{display:"flex",gap:40,alignItems:"center",padding:80},children:[o.jsx(t,{content:"Top tooltip ⬆️",position:"top",children:o.jsx(r,{variant:"outline",children:"Top"})}),o.jsx(t,{content:"Right tooltip ➡️",position:"right",children:o.jsx(r,{variant:"outline",children:"Right"})}),o.jsx(t,{content:"Bottom tooltip ⬇️",position:"bottom",children:o.jsx(r,{variant:"outline",children:"Bottom"})}),o.jsx(t,{content:"Left tooltip ⬅️",position:"left",children:o.jsx(r,{variant:"outline",children:"Left"})})]})},n={render:()=>o.jsxs("p",{style:{fontSize:16,color:"var(--textColor)"},children:["Hover on the"," ",o.jsx(t,{content:"This is a helpful hint 💡",position:"top",children:o.jsx("span",{style:{textDecoration:"underline dotted",textUnderlineOffset:4,color:"var(--primaryColor)",cursor:"help",fontWeight:600},children:"underlined word"})})," ","to see a tooltip."]})},s={render:()=>o.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[o.jsx(t,{content:"Get help",position:"bottom",children:o.jsx(u,{size:24,style:{color:"var(--labelColor)",cursor:"pointer"}})}),o.jsx(t,{content:"Notifications",position:"bottom",children:o.jsx(m,{size:24,style:{color:"var(--labelColor)",cursor:"pointer"}})}),o.jsx(t,{content:"Favorites",position:"bottom",children:o.jsx(d,{size:24,style:{color:"var(--primaryColor)",cursor:"pointer"}})})]})},a={render:()=>o.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[o.jsx(t,{content:"App info",children:o.jsx(r,{iconOnly:!0,variant:"secondary",leftIcon:o.jsx(f,{size:18})})}),o.jsx(t,{content:"Settings",position:"right",children:o.jsx(r,{iconOnly:!0,variant:"secondary",leftIcon:o.jsx(h,{size:18})})}),o.jsx(t,{content:"Download file",position:"bottom",children:o.jsx(r,{iconOnly:!0,variant:"primary",leftIcon:o.jsx(x,{size:18})})}),o.jsx(t,{content:"Delete permanently",position:"left",children:o.jsx(r,{iconOnly:!0,variant:"danger",rounded:"full",leftIcon:o.jsx(v,{size:18})})})]})},l={render:()=>o.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:40},children:[o.jsx(t,{content:"This is the user's avatar",position:"bottom",children:o.jsx("div",{style:{width:48,height:48,borderRadius:"50%",background:"var(--primaryColor)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:18,cursor:"pointer"},children:"N"})}),o.jsx(t,{content:"Click to view details",position:"top",children:o.jsx("div",{style:{padding:"12px 20px",background:"var(--primaryContainercolor)",border:"1px solid var(--borderColor)",borderRadius:12,color:"var(--textColor)",fontWeight:500,cursor:"pointer"},children:"Hover this card"})}),o.jsx(t,{content:"Status: Active ✅",position:"right",children:o.jsx("div",{style:{padding:"4px 12px",background:"#dcfce7",color:"#166534",borderRadius:9999,fontSize:13,fontWeight:600,cursor:"default"},children:"Active"})})]})},p={args:{content:"I appear after 500ms ⏱️",position:"top",delay:500,children:o.jsx(r,{variant:"secondary",children:"Hover & Wait"})}},c={render:()=>o.jsx("div",{style:{padding:40},children:o.jsx(t,{position:"right",content:o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[o.jsx("span",{style:{fontWeight:700},children:"Pro Feature ⚡"}),o.jsx("span",{style:{opacity:.8,fontSize:12},children:"Upgrade to unlock this"})]}),children:o.jsx(r,{variant:"outline",leftIcon:o.jsx(d,{size:16}),children:"Premium Feature"})})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Hello from Tooltip! 👋',
    position: 'top',
    children: <Button variant="primary">Hover me</Button>
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 40,
    alignItems: 'center',
    padding: 80
  }}>\r
            <Tooltip content="Top tooltip ⬆️" position="top">\r
                <Button variant="outline">Top</Button>\r
            </Tooltip>\r
            <Tooltip content="Right tooltip ➡️" position="right">\r
                <Button variant="outline">Right</Button>\r
            </Tooltip>\r
            <Tooltip content="Bottom tooltip ⬇️" position="bottom">\r
                <Button variant="outline">Bottom</Button>\r
            </Tooltip>\r
            <Tooltip content="Left tooltip ⬅️" position="left">\r
                <Button variant="outline">Left</Button>\r
            </Tooltip>\r
        </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <p style={{
    fontSize: 16,
    color: 'var(--textColor)'
  }}>\r
            Hover on the{' '}\r
            <Tooltip content="This is a helpful hint 💡" position="top">\r
                <span style={{
        textDecoration: 'underline dotted',
        textUnderlineOffset: 4,
        color: 'var(--primaryColor)',
        cursor: 'help',
        fontWeight: 600
      }}>\r
                    underlined word\r
                </span>\r
            </Tooltip>\r
            {' '}to see a tooltip.\r
        </p>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>\r
            <Tooltip content="Get help" position="bottom">\r
                <HelpCircle size={24} style={{
        color: 'var(--labelColor)',
        cursor: 'pointer'
      }} />\r
            </Tooltip>\r
            <Tooltip content="Notifications" position="bottom">\r
                <Bell size={24} style={{
        color: 'var(--labelColor)',
        cursor: 'pointer'
      }} />\r
            </Tooltip>\r
            <Tooltip content="Favorites" position="bottom">\r
                <Star size={24} style={{
        color: 'var(--primaryColor)',
        cursor: 'pointer'
      }} />\r
            </Tooltip>\r
        </div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>\r
            <Tooltip content="App info">\r
                <Button iconOnly variant="secondary" leftIcon={<Info size={18} />} />\r
            </Tooltip>\r
            <Tooltip content="Settings" position="right">\r
                <Button iconOnly variant="secondary" leftIcon={<Settings size={18} />} />\r
            </Tooltip>\r
            <Tooltip content="Download file" position="bottom">\r
                <Button iconOnly variant="primary" leftIcon={<Download size={18} />} />\r
            </Tooltip>\r
            <Tooltip content="Delete permanently" position="left">\r
                <Button iconOnly variant="danger" rounded="full" leftIcon={<Trash2 size={18} />} />\r
            </Tooltip>\r
        </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    padding: 40
  }}>\r
            <Tooltip content="This is the user's avatar" position="bottom">\r
                <div style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'var(--primaryColor)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 700,
        fontSize: 18,
        cursor: 'pointer'
      }}>\r
                    N\r
                </div>\r
            </Tooltip>\r
\r
            <Tooltip content="Click to view details" position="top">\r
                <div style={{
        padding: '12px 20px',
        background: 'var(--primaryContainercolor)',
        border: '1px solid var(--borderColor)',
        borderRadius: 12,
        color: 'var(--textColor)',
        fontWeight: 500,
        cursor: 'pointer'
      }}>\r
                    Hover this card\r
                </div>\r
            </Tooltip>\r
\r
            <Tooltip content="Status: Active ✅" position="right">\r
                <div style={{
        padding: '4px 12px',
        background: '#dcfce7',
        color: '#166534',
        borderRadius: 9999,
        fontSize: 13,
        fontWeight: 600,
        cursor: 'default'
      }}>\r
                    Active\r
                </div>\r
            </Tooltip>\r
        </div>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'I appear after 500ms ⏱️',
    position: 'top',
    delay: 500,
    children: <Button variant="secondary">Hover & Wait</Button>
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 40
  }}>\r
            <Tooltip position="right" content={<div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>\r
                        <span style={{
        fontWeight: 700
      }}>Pro Feature ⚡</span>\r
                        <span style={{
        opacity: 0.8,
        fontSize: 12
      }}>Upgrade to unlock this</span>\r
                    </div>}>\r
                <Button variant="outline" leftIcon={<Star size={16} />}>\r
                    Premium Feature\r
                </Button>\r
            </Tooltip>\r
        </div>
}`,...c.parameters?.docs?.source}}};const H=["Default","Positions","OnText","OnIcon","OnIconButtons","OnCustomElement","WithDelay","RichContent"];export{e as Default,l as OnCustomElement,s as OnIcon,a as OnIconButtons,n as OnText,i as Positions,c as RichContent,p as WithDelay,H as __namedExportsOrder,k as default};
