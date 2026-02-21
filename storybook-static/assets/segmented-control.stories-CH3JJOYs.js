import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-QywSF6W6.js";import{c as S}from"./cn-BQHNewu7.js";import{c as g}from"./createLucideIcon-B-6-c5fd.js";import{U as M}from"./user-DfzXYxb_.js";import{B as W}from"./bell-06A52uJJ.js";import{S as q}from"./settings-CE_Qmr37.js";import"./preload-helper-PPVm8Dsz.js";const A=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],L=g("layout-grid",A);const G=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],$=g("list",G);const R=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],E=g("maximize",R),t=({options:s,value:u,defaultValue:V,onChange:j,size:v="md",variant:z="rectangle",fullWidth:y=!1,color:h,disabled:m=!1,className:C="",style:k})=>{const[w,I]=n.useState(V||s[0]?.value),f=n.useRef(null),[D,_]=n.useState({}),x=u!==void 0,b=x?u:w;n.useEffect(()=>{if(!f.current)return;const a=f.current.querySelector(".is-active");a&&_({width:`${a.offsetWidth}px`,transform:`translateX(${a.offsetLeft-4}px)`})},[b,v,y]);const O=(a,T)=>{m||T||(x||I(a),j?.(a))},N={...k,...h?{"--segment-active-text":h}:{}};return e.jsxs("div",{ref:f,className:S("mango-segmented-control",`mango-segmented-size-${v}`,`variant-${z}`,y&&"is-full-width",m&&"is-disabled",C),style:N,children:[e.jsx("div",{className:"mango-segmented-indicator",style:D}),s.map(a=>e.jsxs("div",{className:S("mango-segmented-item",b===a.value&&"is-active",(m||a.disabled)&&"is-disabled"),onClick:()=>O(a.value,a.disabled),children:[a.icon&&e.jsx("span",{className:"mango-segmented-icon",children:a.icon}),e.jsx("span",{children:a.label})]},a.value))]})};t.displayName="SegmentedControl";t.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentedControlOption"}],raw:"SegmentedControlOption[]"},description:"Array of options"},value:{required:!1,tsType:{name:"string"},description:"Selected value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when value changes"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the control",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'pill' | 'rectangle'",elements:[{name:"literal",value:"'pill'"},{name:"literal",value:"'rectangle'"}]},description:"Visual variant",defaultValue:{value:"'rectangle'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the control takes full width",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Color of the active indicator"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state for the entire control",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Class name for the container",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Style object"}}};const K={title:"Components/SegmentedControl",component:t,parameters:{layout:"centered"},tags:["autodocs"]},l=[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"},{label:"Year",value:"year"}],p={args:{options:l,defaultValue:"week"}},i=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",alignItems:"center"},children:[e.jsx(t,{options:l,defaultValue:"day",variant:"rectangle"}),e.jsx(t,{options:l,defaultValue:"day",variant:"pill"})]}),o=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",alignItems:"center"},children:[e.jsx(t,{size:"sm",options:l,defaultValue:"day"}),e.jsx(t,{size:"md",options:l,defaultValue:"day"}),e.jsx(t,{size:"lg",options:l,defaultValue:"day"})]}),r=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",alignItems:"center"},children:[e.jsx(t,{options:[{label:"Grid",value:"grid",icon:e.jsx(L,{size:16})},{label:"List",value:"list",icon:e.jsx($,{size:16})},{label:"Gallery",value:"gallery",icon:e.jsx(E,{size:16})}],defaultValue:"grid"}),e.jsx(t,{variant:"pill",options:[{label:"Account",value:"account",icon:e.jsx(M,{size:16})},{label:"Notifications",value:"notif",icon:e.jsx(W,{size:16})},{label:"Settings",value:"settings",icon:e.jsx(q,{size:16})}],defaultValue:"account"})]}),d=()=>{const[s,u]=n.useState("one");return e.jsxs("div",{style:{width:"500px",display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(t,{fullWidth:!0,options:[{label:"Option One",value:"one"},{label:"Option Two",value:"two"},{label:"Option Three",value:"three"}],value:s,onChange:u}),e.jsxs("div",{style:{textAlign:"center"},children:["Selected: ",s]})]})},c=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",alignItems:"center"},children:[e.jsx(t,{disabled:!0,options:l,defaultValue:"day"}),e.jsx(t,{options:[{label:"Available",value:"1"},{label:"Disabled",value:"2",disabled:!0},{label:"Works",value:"3"}],defaultValue:"1"})]});i.__docgenInfo={description:"",methods:[],displayName:"Variants"};o.__docgenInfo={description:"",methods:[],displayName:"Sizes"};r.__docgenInfo={description:"",methods:[],displayName:"WithIcons"};d.__docgenInfo={description:"",methods:[],displayName:"FullWidth"};c.__docgenInfo={description:"",methods:[],displayName:"DisabledState"};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'week'
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  alignItems: 'center'
}}>\r
        <SegmentedControl options={basicOptions} defaultValue="day" variant="rectangle" />\r
        <SegmentedControl options={basicOptions} defaultValue="day" variant="pill" />\r
    </div>`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  alignItems: 'center'
}}>\r
        <SegmentedControl size="sm" options={basicOptions} defaultValue="day" />\r
        <SegmentedControl size="md" options={basicOptions} defaultValue="day" />\r
        <SegmentedControl size="lg" options={basicOptions} defaultValue="day" />\r
    </div>`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  alignItems: 'center'
}}>\r
        <SegmentedControl options={[{
    label: 'Grid',
    value: 'grid',
    icon: <LayoutGrid size={16} />
  }, {
    label: 'List',
    value: 'list',
    icon: <List size={16} />
  }, {
    label: 'Gallery',
    value: 'gallery',
    icon: <Maximize size={16} />
  }]} defaultValue="grid" />\r
\r
        <SegmentedControl variant="pill" options={[{
    label: 'Account',
    value: 'account',
    icon: <User size={16} />
  }, {
    label: 'Notifications',
    value: 'notif',
    icon: <Bell size={16} />
  }, {
    label: 'Settings',
    value: 'settings',
    icon: <Settings size={16} />
  }]} defaultValue="account" />\r
    </div>`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState('one');
  return <div style={{
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>\r
            <SegmentedControl fullWidth options={[{
      label: 'Option One',
      value: 'one'
    }, {
      label: 'Option Two',
      value: 'two'
    }, {
      label: 'Option Three',
      value: 'three'
    }]} value={val} onChange={setVal} />\r
            <div style={{
      textAlign: 'center'
    }}>Selected: {val}</div>\r
        </div>;
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  alignItems: 'center'
}}>\r
        <SegmentedControl disabled options={basicOptions} defaultValue="day" />\r
        <SegmentedControl options={[{
    label: 'Available',
    value: '1'
  }, {
    label: 'Disabled',
    value: '2',
    disabled: true
  }, {
    label: 'Works',
    value: '3'
  }]} defaultValue="1" />\r
    </div>`,...c.parameters?.docs?.source}}};const Q=["Default","Variants","Sizes","WithIcons","FullWidth","DisabledState"];export{p as Default,c as DisabledState,d as FullWidth,o as Sizes,i as Variants,r as WithIcons,Q as __namedExportsOrder,K as default};
