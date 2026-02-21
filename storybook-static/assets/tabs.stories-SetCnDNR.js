import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-QywSF6W6.js";import{c as y}from"./cn-BQHNewu7.js";import{H as h}from"./house-DfGxNmEd.js";import{U as S}from"./users-B9_schhY.js";import{S as w}from"./settings-CE_Qmr37.js";import{M as $}from"./mail-Ce2xHHqn.js";import{B as _}from"./bell-06A52uJJ.js";import{S as Z}from"./shield-BVJfn6Gp.js";import{Z as F}from"./zap-DA5sd4l-.js";import{S as C}from"./star-D2Jm-pGs.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B-6-c5fd.js";const s=({tabs:t=[],activeId:j,defaultTab:R,onChange:A,variant:T="pills",size:B="md",fullWidth:N=!1,centered:I=!1,color:g,className:W="",placeholder:q,showContent:P=!0,style:k})=>{const[H,M]=l.useState(R||t[0]?.id),f=j!==void 0?j:H,[O,V]=l.useState({}),z=l.useRef(null),x=l.useRef(null),D=a=>{M(a),A?.(a)};l.useEffect(()=>{if(x.current&&z.current){const a=x.current,{offsetLeft:n,offsetWidth:L}=a;V({width:`${L}px`,transform:`translateX(${n}px)`}),a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}},[f,t,T]);const E=t.find(a=>a.id===f)?.content,U={...k,"--tabs-active-color":g,"--tabs-active-light":g?`${g}14`:void 0};return e.jsxs("div",{className:y("mango-tabs-container",W),style:U,children:[e.jsx("div",{className:"mango-tabs-list-wrapper",children:e.jsxs("div",{ref:z,className:y("mango-tabs-list",`is-${T}`,N&&"is-full-width",I&&"is-centered"),role:"tablist",children:[e.jsx("div",{className:"mango-tabs-indicator",style:O}),t.map(a=>{const n=f===a.id;return e.jsxs("button",{ref:n?x:null,role:"tab","aria-selected":n,disabled:a.disabled,className:y("mango-tabs-trigger",n&&"active",`is-${B}`),onClick:()=>D(a.id),children:[a.icon&&e.jsx("span",{className:"mango-tab-icon",style:{display:"inline-flex"},children:a.icon}),e.jsx("span",{className:"mango-tab-label",children:a.label}),a.badge&&e.jsx("span",{className:"mango-tab-badge",children:a.badge})]},a.id)})]})}),P&&e.jsx("div",{className:"mango-tab-panel",role:"tabpanel",children:E||q})]})};s.displayName="Tabs";s.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!1,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Array of tab items",defaultValue:{value:"[]",computed:!1}},activeId:{required:!1,tsType:{name:"string"},description:"Controlled active tab ID"},defaultTab:{required:!1,tsType:{name:"string"},description:"Initially active tab ID"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when tab changes"},variant:{required:!1,tsType:{name:"union",raw:"'pills' | 'underline' | 'solid' | 'hybrid' | 'flat' | 'bordered'",elements:[{name:"literal",value:"'pills'"},{name:"literal",value:"'underline'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'hybrid'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'bordered'"}]},description:"Visual style variant",defaultValue:{value:"'pills'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the tabs",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Make tabs take full width of container",defaultValue:{value:"false",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center the tabs horizontally",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Custom accent color (CSS color string)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"ReactNode"},description:"Content to display when no tabs are selected (optional)"},showContent:{required:!1,tsType:{name:"boolean"},description:"Whether to show content panel (default: true)",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the container"}}};const le={title:"Components/Tabs",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["pills","underline","solid","hybrid","flat","bordered"]},size:{control:"select",options:["sm","md","lg"]},color:{control:"color"}}},i={padding:"24px",background:"var(--secondaryColor)",borderRadius:"16px",border:"1px solid var(--borderColor)",minHeight:"200px",fontWeight:500},r=[{id:"overview",label:"Overview",icon:e.jsx(h,{size:18}),content:e.jsx("div",{style:i,children:"Overview Dashboard Content"})},{id:"residents",label:"Residents",icon:e.jsx(S,{size:18}),content:e.jsx("div",{style:i,children:"Resident Management List"})},{id:"settings",label:"Settings",icon:e.jsx(w,{size:18}),content:e.jsx("div",{style:i,children:"Application Settings Panel"})}],o={args:{variant:"hybrid",tabs:[{id:"overview",label:"Overview",icon:e.jsx(h,{size:20}),content:e.jsx("div",{style:i,children:"Dashboard Overview"})},{id:"residents",label:"Residents",icon:e.jsx(S,{size:20}),content:e.jsx("div",{style:i,children:"Manage Residents"})},{id:"billing",label:"Billing",icon:e.jsx($,{size:20}),content:e.jsx("div",{style:i,children:"Invoices & Payments"})}],defaultTab:"overview"},render:t=>e.jsxs("div",{style:{maxWidth:"600px"},children:[e.jsx("h4",{style:{marginBottom:"16px",color:"var(--labelSecondaryColor)"},children:"Reference Style (from image)"}),e.jsx(s,{...t})]})},d={args:{variant:"underline",tabs:r}},c={args:{variant:"pills",tabs:[...r,{id:"notifications",label:"Alerts",icon:e.jsx(_,{size:18}),badge:"12",content:e.jsx("div",{style:i,children:"Notifications"})}]}},m={args:{variant:"solid",tabs:r,color:"#10b981"}},p={render:()=>e.jsx(s,{variant:"underline",tabs:[{id:"all",label:"All Projects",badge:"24",content:e.jsx("div",{style:i,children:"Total projects active"})},{id:"starred",label:"Starred",icon:e.jsx(C,{size:16}),badge:"5",content:e.jsx("div",{style:i,children:"Your favorite picks"})},{id:"archived",label:"Archived",content:e.jsx("div",{style:i,children:"Historical data"})}]})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"8px"},children:"Small (sm)"}),e.jsx(s,{size:"sm",tabs:r})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"8px"},children:"Medium (md)"}),e.jsx(s,{size:"md",tabs:r})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",marginBottom:"8px"},children:"Large (lg)"}),e.jsx(s,{size:"lg",tabs:r})]})]})},v={args:{fullWidth:!0,variant:"pills",tabs:r},render:t=>e.jsx("div",{style:{width:"800px",padding:"20px",border:"1px solid var(--borderColor)",borderRadius:"20px"},children:e.jsx(s,{...t})})},u={render:()=>e.jsx("div",{style:{maxWidth:"400px",border:"1px dashed #ccc"},children:e.jsx(s,{variant:"pills",tabs:[{id:"1",label:"Overview",icon:e.jsx(h,{size:16})},{id:"2",label:"Team",icon:e.jsx(S,{size:16})},{id:"3",label:"Security",icon:e.jsx(Z,{size:16})},{id:"4",label:"Performance",icon:e.jsx(F,{size:16})},{id:"5",label:"Storage",icon:e.jsx(C,{size:16})},{id:"6",label:"Settings",icon:e.jsx(w,{size:16})}]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'hybrid',
    tabs: [{
      id: 'overview',
      label: 'Overview',
      icon: <Home size={20} />,
      content: <div style={panelStyle}>Dashboard Overview</div>
    }, {
      id: 'residents',
      label: 'Residents',
      icon: <Users size={20} />,
      content: <div style={panelStyle}>Manage Residents</div>
    }, {
      id: 'billing',
      label: 'Billing',
      icon: <Mail size={20} />,
      content: <div style={panelStyle}>Invoices & Payments</div>
    }],
    defaultTab: 'overview'
  },
  render: args => <div style={{
    maxWidth: '600px'
  }}>\r
            <h4 style={{
      marginBottom: '16px',
      color: 'var(--labelSecondaryColor)'
    }}>Reference Style (from image)</h4>\r
            <Tabs {...args} />\r
        </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    tabs: commonTabs
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pills',
    tabs: [...commonTabs, {
      id: 'notifications',
      label: 'Alerts',
      icon: <Bell size={18} />,
      badge: '12',
      content: <div style={panelStyle}>Notifications</div>
    }]
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    tabs: commonTabs,
    color: '#10b981' // Emerald green
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Tabs variant="underline" tabs={[{
      id: 'all',
      label: 'All Projects',
      badge: '24',
      content: <div style={panelStyle}>Total projects active</div>
    }, {
      id: 'starred',
      label: 'Starred',
      icon: <Star size={16} />,
      badge: '5',
      content: <div style={panelStyle}>Your favorite picks</div>
    }, {
      id: 'archived',
      label: 'Archived',
      content: <div style={panelStyle}>Historical data</div>
    }]} />;
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  }}>\r
            <div>\r
                <p style={{
        fontSize: '12px',
        marginBottom: '8px'
      }}>Small (sm)</p>\r
                <Tabs size="sm" tabs={commonTabs} />\r
            </div>\r
            <div>\r
                <p style={{
        fontSize: '12px',
        marginBottom: '8px'
      }}>Medium (md)</p>\r
                <Tabs size="md" tabs={commonTabs} />\r
            </div>\r
            <div>\r
                <p style={{
        fontSize: '12px',
        marginBottom: '8px'
      }}>Large (lg)</p>\r
                <Tabs size="lg" tabs={commonTabs} />\r
            </div>\r
        </div>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    variant: 'pills',
    tabs: commonTabs
  },
  render: args => <div style={{
    width: '800px',
    padding: '20px',
    border: '1px solid var(--borderColor)',
    borderRadius: '20px'
  }}>\r
            <Tabs {...args} />\r
        </div>
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px',
    border: '1px dashed #ccc'
  }}>\r
            <Tabs variant="pills" tabs={[{
      id: '1',
      label: 'Overview',
      icon: <Home size={16} />
    }, {
      id: '2',
      label: 'Team',
      icon: <Users size={16} />
    }, {
      id: '3',
      label: 'Security',
      icon: <Shield size={16} />
    }, {
      id: '4',
      label: 'Performance',
      icon: <Zap size={16} />
    }, {
      id: '5',
      label: 'Storage',
      icon: <Star size={16} />
    }, {
      id: '6',
      label: 'Settings',
      icon: <Settings size={16} />
    }]} />\r
        </div>
}`,...u.parameters?.docs?.source}}};const oe=["HybridRef","Underline","Pills","SolidAccent","WithBadges","Sizes","FullWidth","Scrollable"];export{v as FullWidth,o as HybridRef,c as Pills,u as Scrollable,b as Sizes,m as SolidAccent,d as Underline,p as WithBadges,oe as __namedExportsOrder,le as default};
