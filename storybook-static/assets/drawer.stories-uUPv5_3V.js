import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a,R as B}from"./iframe-QywSF6W6.js";import{r as T}from"./index-ItWPdJGx.js";import{c as b}from"./cn-BQHNewu7.js";import{X as I}from"./x-DSESRrVS.js";import{S as E}from"./settings-CE_Qmr37.js";import{U as N}from"./user-DfzXYxb_.js";import{B as R}from"./bell-06A52uJJ.js";import{S as L}from"./shield-BVJfn6Gp.js";import{L as P}from"./log-out-HqmCTDqW.js";import{C as U}from"./chevron-right-B7G5iz4Z.js";import{B as s}from"./button-01qaZYzQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqC9iLpb.js";import"./createLucideIcon-B-6-c5fd.js";import"./spinner-BLi69KHB.js";const c=({isOpen:t,onClose:r,title:n,subtitle:o,children:l,footer:g,position:v="right",size:m="420px",showClose:h=!0,showHeader:C=!0,showFooter:w=!0,className:j="",style:O})=>{const[S,x]=a.useState(!1),[f,y]=a.useState(!1);if(a.useEffect(()=>{if(t){x(!0);const i=setTimeout(()=>y(!0),10);return document.body.style.overflow="hidden",()=>clearTimeout(i)}else{y(!1);const i=setTimeout(()=>x(!1),400);return document.body.style.overflow="unset",()=>clearTimeout(i)}},[t]),a.useEffect(()=>{const i=D=>{D.key==="Escape"&&r()};return t&&window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[t,r]),!S)return null;const k=typeof m=="number"?`${m}px`:m,z={...O,"--drawer-size":k};return T.createPortal(e.jsx("div",{className:b("mango-drawer-overlay",f&&"active"),onClick:r,children:e.jsxs("div",{className:b("mango-drawer",`is-${v}`,f&&"open",j),style:z,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true",children:[C&&(n||h)&&e.jsxs("header",{className:"mango-drawer-header",children:[(n||o)&&e.jsxs("div",{className:"mango-drawer-header-text",children:[n&&e.jsx("h2",{className:"mango-drawer-title",children:n}),o&&e.jsx("p",{className:"mango-drawer-subtitle",children:o})]}),h&&e.jsx("button",{className:"mango-drawer-close-btn",onClick:r,"aria-label":"Close",children:e.jsx(I,{size:20})})]}),e.jsx("div",{className:"mango-drawer-body",children:l}),w&&g&&e.jsx("footer",{className:"mango-drawer-footer",children:g})]})}),document.body)};c.displayName="Drawer";const ee={title:"Components/Drawer",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{position:{control:"select",options:["left","right","top","bottom"],description:"The direction from which the drawer enters"},size:{control:"text",description:"Width (for left/right) or Height (for top/bottom)"},title:{control:"text"},subtitle:{control:"text"},showClose:{control:"boolean"},isOpen:{control:"boolean"}}},p={args:{title:"Interactive Drawer",subtitle:"You can change my props in the controls panel below!",position:"right",size:"420px",showClose:!0,isOpen:!1},render:t=>{const[r,n]=a.useState(t.isOpen);return B.useEffect(()=>{n(t.isOpen)},[t.isOpen]),e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Customizable Drawer"}),e.jsx(c,{...t,isOpen:r,onClose:()=>{n(!1),t.onClose?.()},children:e.jsxs("div",{style:{padding:"4px"},children:[e.jsxs("p",{children:["Try changing the ",e.jsx("strong",{children:"position"}),", ",e.jsx("strong",{children:"size"}),", or ",e.jsx("strong",{children:"title"})," in the Storybook controls!"]}),e.jsxs("div",{style:{marginTop:"20px",padding:"16px",background:"var(--secondaryColor)",borderRadius:"12px"},children:["Current Config:",e.jsx("pre",{style:{fontSize:"12px",marginTop:"8px"},children:JSON.stringify({position:t.position,size:t.size,title:t.title},null,2)})]})]})})]})}},d={render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",icon:e.jsx(E,{size:18}),onClick:()=>r(!0),children:"Open Settings"}),e.jsx(c,{isOpen:t,onClose:()=>r(!1),title:"Account Settings",subtitle:"Manage your profile and security preferences",size:480,footer:e.jsx(s,{fullWidth:!0,onClick:()=>r(!1),children:"Update Preferences"}),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[{icon:e.jsx(N,{size:18}),label:"Personal Information"},{icon:e.jsx(R,{size:18}),label:"Notification Settings"},{icon:e.jsx(L,{size:18}),label:"Privacy & Security"},{icon:e.jsx(P,{size:18}),label:"Logout session"}].map((n,o)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px",borderRadius:"12px",cursor:"pointer",transition:"background 0.2s"},onMouseEnter:l=>l.currentTarget.style.background="var(--secondaryColor)",onMouseLeave:l=>l.currentTarget.style.background="transparent",children:[e.jsx("div",{style:{color:"var(--primaryColor)"},children:n.icon}),e.jsx("span",{style:{flex:1,fontWeight:500},children:n.label}),e.jsx(U,{size:16,color:"var(--labelSecondaryColor)"})]},o))})})]})}},u={render:()=>{const[t,r]=a.useState(null),n=o=>e.jsx(c,{isOpen:t===o,onClose:()=>r(null),position:o,title:`${o.charAt(0).toUpperCase()+o.slice(1)} Drawer`,subtitle:`This drawer slides from the ${o} side.`,size:o==="top"||o==="bottom"?300:400,footer:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"secondary",onClick:()=>r(null),children:"Cancel"}),e.jsx(s,{onClick:()=>r(null),children:"Save Changes"})]}),children:e.jsx("div",{children:e.jsx("p",{children:"Customizable content goes here."})})});return e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(s,{onClick:()=>r("left"),children:"Left"}),e.jsx(s,{onClick:()=>r("right"),children:"Right"}),e.jsx(s,{onClick:()=>r("top"),children:"Top"}),e.jsx(s,{onClick:()=>r("bottom"),children:"Bottom"}),n("left"),n("right"),n("top"),n("bottom")]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Interactive Drawer',
    subtitle: 'You can change my props in the controls panel below!',
    position: 'right',
    size: '420px',
    showClose: true,
    isOpen: false
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    // Update local state when Storybook controls change
    React.useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);
    return <>\r
                <Button onClick={() => setIsOpen(true)}>Open Customizable Drawer</Button>\r
                <Drawer {...args} isOpen={isOpen} onClose={() => {
        setIsOpen(false);
        args.onClose?.();
      }}>\r
                    <div style={{
          padding: '4px'
        }}>\r
                        <p>Try changing the <strong>position</strong>, <strong>size</strong>, or <strong>title</strong> in the Storybook controls!</p>\r
                        <div style={{
            marginTop: '20px',
            padding: '16px',
            background: 'var(--secondaryColor)',
            borderRadius: '12px'
          }}>\r
                            Current Config:\r
                            <pre style={{
              fontSize: '12px',
              marginTop: '8px'
            }}>\r
                                {JSON.stringify({
                position: args.position,
                size: args.size,
                title: args.title
              }, null, 2)}\r
                            </pre>\r
                        </div>\r
                    </div>\r
                </Drawer>\r
            </>;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
                <Button variant="outline" icon={<Settings size={18} />} onClick={() => setIsOpen(true)}>\r
                    Open Settings\r
                </Button>\r
                <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Account Settings" subtitle="Manage your profile and security preferences" size={480} footer={<Button fullWidth onClick={() => setIsOpen(false)}>Update Preferences</Button>}>\r
                    <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>\r
                        {[{
            icon: <User size={18} />,
            label: 'Personal Information'
          }, {
            icon: <Bell size={18} />,
            label: 'Notification Settings'
          }, {
            icon: <Shield size={18} />,
            label: 'Privacy & Security'
          }, {
            icon: <LogOut size={18} />,
            label: 'Logout session'
          }].map((item, i) => <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }} onMouseEnter={e => e.currentTarget.style.background = 'var(--secondaryColor)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>\r
                                <div style={{
              color: 'var(--primaryColor)'
            }}>{item.icon}</div>\r
                                <span style={{
              flex: 1,
              fontWeight: 500
            }}>{item.label}</span>\r
                                <ChevronRight size={16} color="var(--labelSecondaryColor)" />\r
                            </div>)}\r
                    </div>\r
                </Drawer>\r
            </>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState<string | null>(null);
    const renderDrawer = (pos: 'left' | 'right' | 'top' | 'bottom') => <Drawer isOpen={open === pos} onClose={() => setOpen(null)} position={pos} title={\`\${pos.charAt(0).toUpperCase() + pos.slice(1)} Drawer\`} subtitle={\`This drawer slides from the \${pos} side.\`} size={pos === 'top' || pos === 'bottom' ? 300 : 400} footer={<>\r
                        <Button variant="secondary" onClick={() => setOpen(null)}>Cancel</Button>\r
                        <Button onClick={() => setOpen(null)}>Save Changes</Button>\r
                    </>}>\r
                <div>\r
                    <p>Customizable content goes here.</p>\r
                </div>\r
            </Drawer>;
    return <div style={{
      display: 'flex',
      gap: '12px'
    }}>\r
                <Button onClick={() => setOpen('left')}>Left</Button>\r
                <Button onClick={() => setOpen('right')}>Right</Button>\r
                <Button onClick={() => setOpen('top')}>Top</Button>\r
                <Button onClick={() => setOpen('bottom')}>Bottom</Button>\r
                {renderDrawer('left')}\r
                {renderDrawer('right')}\r
                {renderDrawer('top')}\r
                {renderDrawer('bottom')}\r
            </div>;
  }
}`,...u.parameters?.docs?.source}}};const re=["Interactive","AppSettings","DirectionalExamples"];export{d as AppSettings,u as DirectionalExamples,p as Interactive,re as __namedExportsOrder,ee as default};
