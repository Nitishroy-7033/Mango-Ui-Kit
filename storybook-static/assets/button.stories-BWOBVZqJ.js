import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./iframe-QywSF6W6.js";import{B as n}from"./button-01qaZYzQ.js";import{c as l}from"./cn-BQHNewu7.js";import{C as Q}from"./chevron-down-BNiyiuGD.js";import{S as W}from"./star-D2Jm-pGs.js";import{P as r}from"./plus-D8H5l7vy.js";import{c as k}from"./createLucideIcon-B-6-c5fd.js";import{U as X,L as Y}from"./upload-DRV5ZfXD.js";import{D as S}from"./download-ouUGacro.js";import{S as Z}from"./settings-CE_Qmr37.js";import{T as b}from"./trash-2--y-KK5Rq.js";import{M as I}from"./mail-Ce2xHHqn.js";import{E as ee}from"./ellipsis-BayfGuDk.js";import"./preload-helper-PPVm8Dsz.js";import"./spinner-BLi69KHB.js";const ne=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],E=k("copy",ne);const te=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],i=k("send",te);const re=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],oe=k("share-2",re);const ae=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],M=k("square-pen",ae),ie={sm:"mango-btn-sm",md:"mango-btn-md",lg:"mango-btn-lg"},se={primary:"mango-btn-primary",secondary:"mango-btn-secondary",outline:"mango-btn-outline",ghost:"mango-btn-ghost",danger:"mango-btn-danger",dashed:"mango-btn-dashed",link:"mango-btn-link"},le={none:"mango-btn-rounded-none",sm:"mango-btn-rounded-sm",md:"mango-btn-rounded-md",lg:"mango-btn-rounded-lg",xl:"mango-btn-rounded-xl",full:"mango-btn-rounded-full"},d=({children:o,icon:a,iconPosition:s="start",variant:H="primary",size:U="md",rounded:O,isLoading:T,disabled:N,onClick:$,bgColor:w,textColor:q,iconColor:A,borderColor:_,actions:J,className:K})=>{const[R,D]=C.useState(!1),L=C.useRef(null);C.useEffect(()=>{const t=P=>{L.current&&!L.current.contains(P.target)&&D(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const V=l("mango-btn",ie[U],se[H],O&&le[O]),G={...w?{backgroundColor:w,borderColor:w}:{},...q?{color:q}:{},..._?{borderColor:_}:{}},F=A?{color:A}:void 0;return e.jsxs("div",{className:l("split-btn-wrapper",K),ref:L,children:[e.jsx("button",{className:l(V,"split-btn-main"),onClick:$,disabled:N||T,style:G,children:T?e.jsxs("svg",{className:"mango-btn-spinner",width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{opacity:"0.25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{opacity:"0.75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):e.jsxs(e.Fragment,{children:[a&&s==="start"&&e.jsx("span",{className:"mango-btn-icon",style:F,children:a}),e.jsx("span",{children:o}),a&&s==="end"&&e.jsx("span",{className:"mango-btn-icon",style:F,children:a})]})}),e.jsx("button",{className:l(V,"split-btn-trigger"),onClick:()=>D(t=>!t),disabled:N,style:G,children:e.jsx(Q,{size:16,style:{transition:"transform 0.2s ease",transform:R?"rotate(180deg)":"rotate(0deg)"}})}),e.jsx("div",{className:l("split-btn-dropdown",R&&"split-btn-open"),children:J.map((t,P)=>e.jsxs("button",{className:l("split-btn-action",t.danger&&"split-btn-action-danger"),onClick:()=>{t.onClick(),D(!1)},children:[t.icon&&e.jsx("span",{className:"split-btn-action-icon",children:t.icon}),t.label]},P))})]})};d.displayName="SplitButton";d.__docgenInfo={description:"",methods:[],displayName:"SplitButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'dashed' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'link'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"SplitButtonAction"}],raw:"SplitButtonAction[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ke={title:"Components/Button",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger","dashed","link"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["none","sm","md","lg","xl","full"]},iconPosition:{control:"select",options:["start","end"]},bgColor:{control:"color"},textColor:{control:"color"},iconColor:{control:"color"},borderColor:{control:"color"}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{variant:"primary",children:"Primary"}),e.jsx(n,{variant:"secondary",children:"Secondary"}),e.jsx(n,{variant:"outline",children:"Outline"}),e.jsx(n,{variant:"ghost",children:"Ghost"}),e.jsx(n,{variant:"danger",children:"Danger"}),e.jsx(n,{variant:"dashed",children:"Dashed"}),e.jsx(n,{variant:"link",children:"Link Button"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:20,alignItems:"center"},children:[e.jsx(n,{icon:e.jsx(Z,{size:18}),hoverEffect:"rotate",children:"Rotate Icon"}),e.jsx(n,{variant:"outline",icon:e.jsx(i,{size:18}),hoverEffect:"slide",children:"Slide Icon"}),e.jsx(n,{variant:"secondary",hoverEffect:"scale",children:"Scale Button"}),e.jsx(n,{variant:"primary",hoverEffect:"glow",children:"Glow Effect"}),e.jsx(n,{iconOnly:!0,variant:"danger",icon:e.jsx(b,{size:20}),hoverEffect:"rotate",rounded:"full"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16,alignItems:"center"},children:[e.jsx(n,{variant:"dashed",icon:e.jsx(r,{size:18}),children:"Add Item"}),e.jsx(n,{variant:"dashed",icon:e.jsx(X,{size:18}),children:"Upload File"}),e.jsx(n,{variant:"dashed",iconOnly:!0,icon:e.jsx(r,{size:20})}),e.jsx(n,{variant:"dashed",iconOnly:!0,icon:e.jsx(r,{size:20}),rounded:"full"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:20,alignItems:"center"},children:[e.jsx(n,{variant:"link",children:"Learn More"}),e.jsx(n,{variant:"link",icon:e.jsx(Y,{size:14}),children:"Visit Website"}),e.jsx(n,{variant:"link",icon:e.jsx(S,{size:14}),iconPosition:"end",children:"Download"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{icon:e.jsx(i,{size:16}),iconPosition:"start",children:"Send (Start)"}),e.jsx(n,{icon:e.jsx(i,{size:16}),iconPosition:"end",children:"Send (End)"}),e.jsx(n,{variant:"outline",icon:e.jsx(S,{size:16}),iconPosition:"start",children:"Download"}),e.jsx(n,{variant:"outline",icon:e.jsx(S,{size:16}),iconPosition:"end",children:"Download"})]})},de=()=>{const[o,a]=C.useState(!1),s=()=>{a(!0),setTimeout(()=>a(!1),2e3)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,alignItems:"flex-start"},children:[e.jsx("p",{style:{color:"var(--labelColor)",fontSize:13,margin:0},children:"Click the button — it loads for 2 seconds then resets"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{isLoading:o,onClick:s,icon:e.jsx(i,{size:16}),children:o?"Sending...":"Send Message"}),e.jsx(n,{variant:"outline",isLoading:o,onClick:s,children:o?"Processing...":"Process"}),e.jsx(n,{variant:"danger",isLoading:o,onClick:s,children:o?"Deleting...":"Delete"})]}),e.jsx("p",{style:{color:"var(--labelColor)",fontSize:13,margin:0},children:"Always loading (isLoading=true):"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{isLoading:!0,children:"Loading"}),e.jsx(n,{variant:"secondary",isLoading:!0,children:"Loading"}),e.jsx(n,{variant:"outline",isLoading:!0,children:"Loading"}),e.jsx(n,{variant:"dashed",isLoading:!0,children:"Loading"}),e.jsx(n,{iconOnly:!0,variant:"secondary",isLoading:!0})]})]})},g={render:()=>e.jsx(de,{})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,alignItems:"flex-start"},children:[e.jsx(d,{icon:e.jsx(i,{size:16}),onClick:()=>alert("Sent!"),actions:[{label:"Send Later",icon:e.jsx(I,{size:14}),onClick:()=>alert("Send later")},{label:"Save as Draft",icon:e.jsx(M,{size:14}),onClick:()=>alert("Draft saved")},{label:"Copy Link",icon:e.jsx(E,{size:14}),onClick:()=>alert("Copied!")}],children:"Send"}),e.jsx(d,{variant:"secondary",icon:e.jsx(oe,{size:16}),onClick:()=>alert("Shared!"),actions:[{label:"Copy Link",icon:e.jsx(E,{size:14}),onClick:()=>alert("Copied")},{label:"Share via Email",icon:e.jsx(I,{size:14}),onClick:()=>alert("Email")},{label:"Delete",icon:e.jsx(b,{size:14}),onClick:()=>alert("Deleted"),danger:!0}],children:"Share"}),e.jsx(d,{variant:"outline",icon:e.jsx(ee,{size:16}),onClick:()=>alert("More"),actions:[{label:"Edit",icon:e.jsx(M,{size:14}),onClick:()=>alert("Edit")},{label:"Duplicate",icon:e.jsx(E,{size:14}),onClick:()=>alert("Duplicate")},{label:"Star",icon:e.jsx(W,{size:14}),onClick:()=>alert("Starred")},{label:"Delete",icon:e.jsx(b,{size:14}),onClick:()=>alert("Delete"),danger:!0}],children:"More Actions"})]})},h={args:{bgColor:"#e53535"},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{bgColor:"#7c3aed",textColor:"#ffffff",children:"Purple"}),e.jsx(n,{bgColor:"#059669",textColor:"#ffffff",icon:e.jsx(W,{size:16}),children:"Emerald"}),e.jsx(n,{variant:"outline",borderColor:"#ec4899",textColor:"#ec4899",children:"Pink Outline"}),e.jsx(n,{variant:"dashed",borderColor:"#8b5cf6",textColor:"#8b5cf6",icon:e.jsx(r,{size:16}),children:"Purple Dashed"}),e.jsx(n,{bgColor:"#1e293b",textColor:"#e2e8f0",icon:e.jsx(i,{size:16}),iconColor:"#38bdf8",children:"Custom Icon Color"}),e.jsx(n,{variant:"ghost",textColor:"#059669",children:"Green Ghost"})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{rounded:"none",children:"Sharp"}),e.jsx(n,{rounded:"sm",children:"Small"}),e.jsx(n,{rounded:"md",children:"Medium"}),e.jsx(n,{rounded:"lg",children:"Large"}),e.jsx(n,{rounded:"xl",children:"Extra Large"}),e.jsx(n,{rounded:"full",children:"Pill"})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{size:"sm",icon:e.jsx(r,{size:14}),children:"Small"}),e.jsx(n,{size:"md",icon:e.jsx(r,{size:16}),children:"Medium"}),e.jsx(n,{size:"lg",icon:e.jsx(r,{size:18}),children:"Large"})]})},j={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:[e.jsx(n,{iconOnly:!0,variant:"primary",icon:e.jsx(r,{size:20}),tooltip:"Add"}),e.jsx(n,{iconOnly:!0,variant:"secondary",icon:e.jsx(I,{size:20}),tooltip:"Mail"}),e.jsx(n,{iconOnly:!0,variant:"outline",icon:e.jsx(M,{size:20}),tooltip:"Edit"}),e.jsx(n,{iconOnly:!0,variant:"ghost",icon:e.jsx(W,{size:20}),tooltip:"Favorite"}),e.jsx(n,{iconOnly:!0,variant:"danger",icon:e.jsx(b,{size:20}),rounded:"full",tooltip:"Delete"}),e.jsx(n,{iconOnly:!0,variant:"dashed",icon:e.jsx(r,{size:20}),tooltip:"Add"})]})},B={render:()=>e.jsxs("div",{style:{width:400,display:"flex",flexDirection:"column",gap:12},children:[e.jsx(n,{fullWidth:!0,icon:e.jsx(i,{size:16}),children:"Send Message"}),e.jsx(n,{fullWidth:!0,variant:"outline",icon:e.jsx(S,{size:16}),iconPosition:"end",children:"Download Report"}),e.jsx(n,{fullWidth:!0,variant:"dashed",icon:e.jsx(r,{size:16}),children:"Add New Item"})]})},z={args:{children:"Click Me",variant:"primary",size:"md",rounded:"md"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>\r
            <Button variant="primary">Primary</Button>\r
            <Button variant="secondary">Secondary</Button>\r
            <Button variant="outline">Outline</Button>\r
            <Button variant="ghost">Ghost</Button>\r
            <Button variant="danger">Danger</Button>\r
            <Button variant="dashed">Dashed</Button>\r
            <Button variant="link">Link Button</Button>\r
        </div>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    alignItems: 'center'
  }}>\r
            <Button icon={<Settings size={18} />} hoverEffect="rotate">Rotate Icon</Button>\r
            <Button variant="outline" icon={<Send size={18} />} hoverEffect="slide">Slide Icon</Button>\r
            <Button variant="secondary" hoverEffect="scale">Scale Button</Button>\r
            <Button variant="primary" hoverEffect="glow">Glow Effect</Button>\r
            <Button iconOnly variant="danger" icon={<Trash2 size={20} />} hoverEffect="rotate" rounded="full" />\r
        </div>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    alignItems: 'center'
  }}>\r
            <Button variant="dashed" icon={<Plus size={18} />}>Add Item</Button>\r
            <Button variant="dashed" icon={<Upload size={18} />}>Upload File</Button>\r
            <Button variant="dashed" iconOnly icon={<Plus size={20} />} />\r
            <Button variant="dashed" iconOnly icon={<Plus size={20} />} rounded="full" />\r
        </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    alignItems: 'center'
  }}>\r
            <Button variant="link">Learn More</Button>\r
            <Button variant="link" icon={<LinkIcon size={14} />}>Visit Website</Button>\r
            <Button variant="link" icon={<Download size={14} />} iconPosition="end">Download</Button>\r
        </div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>\r
            <Button icon={<Send size={16} />} iconPosition="start">Send (Start)</Button>\r
            <Button icon={<Send size={16} />} iconPosition="end">Send (End)</Button>\r
            <Button variant="outline" icon={<Download size={16} />} iconPosition="start">Download</Button>\r
            <Button variant="outline" icon={<Download size={16} />} iconPosition="end">Download</Button>\r
        </div>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <LoadingDemo />
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    alignItems: 'flex-start'
  }}>\r
            <SplitButton icon={<Send size={16} />} onClick={() => alert('Sent!')} actions={[{
      label: 'Send Later',
      icon: <Mail size={14} />,
      onClick: () => alert('Send later')
    }, {
      label: 'Save as Draft',
      icon: <Edit size={14} />,
      onClick: () => alert('Draft saved')
    }, {
      label: 'Copy Link',
      icon: <Copy size={14} />,
      onClick: () => alert('Copied!')
    }]}>\r
                Send\r
            </SplitButton>\r
\r
            <SplitButton variant="secondary" icon={<Share2 size={16} />} onClick={() => alert('Shared!')} actions={[{
      label: 'Copy Link',
      icon: <Copy size={14} />,
      onClick: () => alert('Copied')
    }, {
      label: 'Share via Email',
      icon: <Mail size={14} />,
      onClick: () => alert('Email')
    }, {
      label: 'Delete',
      icon: <Trash2 size={14} />,
      onClick: () => alert('Deleted'),
      danger: true
    }]}>\r
                Share\r
            </SplitButton>\r
\r
            <SplitButton variant="outline" icon={<MoreHorizontal size={16} />} onClick={() => alert('More')} actions={[{
      label: 'Edit',
      icon: <Edit size={14} />,
      onClick: () => alert('Edit')
    }, {
      label: 'Duplicate',
      icon: <Copy size={14} />,
      onClick: () => alert('Duplicate')
    }, {
      label: 'Star',
      icon: <Star size={14} />,
      onClick: () => alert('Starred')
    }, {
      label: 'Delete',
      icon: <Trash2 size={14} />,
      onClick: () => alert('Delete'),
      danger: true
    }]}>\r
                More Actions\r
            </SplitButton>\r
        </div>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    bgColor: "#e53535"
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>\r
            <Button bgColor="#7c3aed" textColor="#ffffff">Purple</Button>\r
            <Button bgColor="#059669" textColor="#ffffff" icon={<Star size={16} />}>Emerald</Button>\r
            <Button variant="outline" borderColor="#ec4899" textColor="#ec4899">Pink Outline</Button>\r
            <Button variant="dashed" borderColor="#8b5cf6" textColor="#8b5cf6" icon={<Plus size={16} />}>\r
                Purple Dashed\r
            </Button>\r
            <Button bgColor="#1e293b" textColor="#e2e8f0" icon={<Send size={16} />} iconColor="#38bdf8">\r
                Custom Icon Color\r
            </Button>\r
            <Button variant="ghost" textColor="#059669">Green Ghost</Button>\r
        </div>
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>\r
            <Button rounded="none">Sharp</Button>\r
            <Button rounded="sm">Small</Button>\r
            <Button rounded="md">Medium</Button>\r
            <Button rounded="lg">Large</Button>\r
            <Button rounded="xl">Extra Large</Button>\r
            <Button rounded="full">Pill</Button>\r
        </div>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>\r
            <Button size="sm" icon={<Plus size={14} />}>Small</Button>\r
            <Button size="md" icon={<Plus size={16} />}>Medium</Button>\r
            <Button size="lg" icon={<Plus size={18} />}>Large</Button>\r
        </div>
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>\r
            <Button iconOnly variant="primary" icon={<Plus size={20} />} tooltip="Add" />\r
            <Button iconOnly variant="secondary" icon={<Mail size={20} />} tooltip="Mail" />\r
            <Button iconOnly variant="outline" icon={<Edit size={20} />} tooltip="Edit" />\r
            <Button iconOnly variant="ghost" icon={<Star size={20} />} tooltip="Favorite" />\r
            <Button iconOnly variant="danger" icon={<Trash2 size={20} />} rounded="full" tooltip="Delete" />\r
            <Button iconOnly variant="dashed" icon={<Plus size={20} />} tooltip="Add" />\r
        </div>
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
            <Button fullWidth icon={<Send size={16} />}>Send Message</Button>\r
            <Button fullWidth variant="outline" icon={<Download size={16} />} iconPosition="end">Download Report</Button>\r
            <Button fullWidth variant="dashed" icon={<Plus size={16} />}>Add New Item</Button>\r
        </div>
}`,...B.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'md',
    rounded: 'md'
  }
}`,...z.parameters?.docs?.source}}};const we=["AllVariants","HoverEffects","DashedButtons","LinkButtons","IconPosition","Loading","SplitButtonStory","CustomColors","Rounded","Sizes","IconOnly","FullWidth","Playground"];export{c as AllVariants,h as CustomColors,p as DashedButtons,B as FullWidth,u as HoverEffects,j as IconOnly,x as IconPosition,m as LinkButtons,g as Loading,z as Playground,y as Rounded,v as Sizes,f as SplitButtonStory,we as __namedExportsOrder,ke as default};
