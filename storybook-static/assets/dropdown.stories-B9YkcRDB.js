import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-QywSF6W6.js";import{D as r}from"./dropdown-BjBcu1F8.js";import{U as M}from"./user-DfzXYxb_.js";import{M as A}from"./mail-Ce2xHHqn.js";import{S as O}from"./settings-CE_Qmr37.js";import{S as z}from"./shield-BVJfn6Gp.js";import{B}from"./bell-06A52uJJ.js";import{L as D}from"./log-out-HqmCTDqW.js";import{E as k}from"./ellipsis-BayfGuDk.js";import{c as L}from"./createLucideIcon-B-6-c5fd.js";import{B as S}from"./button-01qaZYzQ.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-BQHNewu7.js";import"./x-DSESRrVS.js";import"./chevron-down-BNiyiuGD.js";import"./search-BLKqZgPB.js";import"./check-BPnGGwGE.js";import"./spinner-BLi69KHB.js";const I=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],l=L("hotel",I),ee={title:"Components/Dropdown",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showLabel:{control:"boolean"},loading:{control:"boolean"},searchable:{control:"boolean"},multiple:{control:"boolean"},placement:{control:"select",options:["bottom","top"]}}},s=[{id:"1",name:"Profile",icon:e.jsx(M,{size:16}),details:"View your account"},{id:"2",name:"Billing",icon:e.jsx(A,{size:16}),details:"Manage subscription"},{id:"3",name:"Settings",icon:e.jsx(O,{size:16}),details:"App configurations"},{id:"4",name:"Team",icon:e.jsx(z,{size:16}),details:"Collaborators"},{id:"5",name:"Notifications",icon:e.jsx(B,{size:16}),details:"Alert settings"},{id:"6",name:"Logout",icon:e.jsx(D,{size:16}),details:"Sign out"}],b=[{id:"r1",name:"Room 01",icon:e.jsx(l,{size:18}),details:"AC • 0/2 Beds Available"},{id:"r2",name:"Room 451",icon:e.jsx(l,{size:18}),details:"AC • 3/4 Beds Available"},{id:"r3",name:"Room 804",icon:e.jsx(l,{size:18}),details:"AC • 0/2 Beds Available"},{id:"r4",name:"Room 387",icon:e.jsx(l,{size:18}),details:"AC • 3/4 Beds Available"},{id:"r5",name:"Room 588",icon:e.jsx(l,{size:18}),details:"AC • 2/2 Beds Available"},{id:"r6",name:"Room 902",icon:e.jsx(l,{size:18}),details:"Non-AC • 1/4 Beds Available"}],d={render:t=>{const[o,a]=n.useState("");return e.jsx(r,{...t,value:o,onChange:a})},args:{options:s,placeholder:"Select an action",label:"User Actions"}},c={render:t=>{const[o,a]=n.useState([]);return e.jsx(r,{...t,value:o,onChange:a})},args:{options:s,multiple:!0,placeholder:"Select features",label:"Permissions",closeOnSelect:!1}},p={render:t=>{const[o,a]=n.useState("");return e.jsx(r,{...t,value:o,onChange:a})},args:{options:b,searchable:!0,placeholder:"Search rooms...",label:"Vacant Inventory"}},m={render:t=>{const[o,a]=n.useState("");return e.jsx(r,{...t,value:o,onChange:a})},args:{options:s,trigger:"hover",placeholder:"Hover me",variant:"outline"}},u={render:t=>{const[o,a]=n.useState("");return e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{...t,value:o,onChange:a,footer:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(S,{size:"sm",variant:"outline",style:{flex:1},children:"View More"}),e.jsx(S,{size:"sm",style:{flex:1},children:"Add New"})]})})})},args:{options:b,searchable:!0,placeholder:"Pick a room with vacant beds...",label:"VACANT INVENTORY"}},h={render:t=>{const[o,a]=n.useState(b),[y,f]=n.useState(!1),[w,C]=n.useState(""),j=()=>{y||(f(!0),setTimeout(()=>{const V=b.map(i=>({...i,id:`${i.id}-${Date.now()}`,name:`${i.name} (Batch ${Math.floor(o.length/5)})`}));a(i=>[...i,...V]),f(!1)},1500))};return e.jsx("div",{style:{width:"350px"},children:e.jsx(r,{...t,options:o,loading:y,value:w,onChange:C,onLoadMore:j,hasMore:o.length<30})})},args:{placeholder:"Infinite rooms...",label:"Scroll to bottom (60%+)",loadMoreThreshold:.6}},g={render:t=>{const[o,a]=n.useState("");return e.jsxs("div",{style:{width:"500px",height:"300px",background:"var(--secondaryColor)",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--labelSecondaryColor)",fontWeight:600,border:"2px dashed var(--borderColor)"},children:["Right Click Anywhere Here",e.jsx(r,{...t,value:o,onChange:a})]})},args:{options:s,trigger:"contextMenu",placeholder:"Hidden"}},v={args:{options:[],loading:!0,placeholder:"Fetching data..."}},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(r,{options:s,variant:"default",placeholder:"Default",style:{width:"150px"}}),e.jsx(r,{options:s,variant:"outline",placeholder:"Outline",style:{width:"150px"}}),e.jsx(r,{options:s,variant:"ghost",placeholder:"Ghost",style:{width:"150px"}}),e.jsx(r,{options:s,variant:"plain",icon:k,placeholder:"",style:{width:"40px"}})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState('');
    return <Dropdown {...args} value={val} onChange={setVal} />;
  },
  args: {
    options: baseOptions,
    placeholder: 'Select an action',
    label: 'User Actions'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState<string[]>([]);
    return <Dropdown {...args} value={val} onChange={setVal} />;
  },
  args: {
    options: baseOptions,
    multiple: true,
    placeholder: 'Select features',
    label: 'Permissions',
    closeOnSelect: false
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState('');
    return <Dropdown {...args} value={val} onChange={setVal} />;
  },
  args: {
    options: roomOptions,
    searchable: true,
    placeholder: 'Search rooms...',
    label: 'Vacant Inventory'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState('');
    return <Dropdown {...args} value={val} onChange={setVal} />;
  },
  args: {
    options: baseOptions,
    trigger: 'hover',
    placeholder: 'Hover me',
    variant: 'outline'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState('');
    return <div style={{
      width: '400px'
    }}>\r
                <Dropdown {...args} value={val} onChange={setVal} footer={<div style={{
        display: 'flex',
        gap: '8px'
      }}>\r
                            <Button size="sm" variant="outline" style={{
          flex: 1
        }}>View More</Button>\r
                            <Button size="sm" style={{
          flex: 1
        }}>Add New</Button>\r
                        </div>} />\r
            </div>;
  },
  args: {
    options: roomOptions,
    searchable: true,
    placeholder: 'Pick a room with vacant beds...',
    label: 'VACANT INVENTORY'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [items, setItems] = useState(roomOptions);
    const [loading, setLoading] = useState(false);
    const [val, setVal] = useState('');
    const loadMore = () => {
      if (loading) return;
      setLoading(true);
      setTimeout(() => {
        const nextBatch = roomOptions.map(r => ({
          ...r,
          id: \`\${r.id}-\${Date.now()}\`,
          name: \`\${r.name} (Batch \${Math.floor(items.length / 5)})\`
        }));
        setItems(prev => [...prev, ...nextBatch]);
        setLoading(false);
      }, 1500);
    };
    return <div style={{
      width: '350px'
    }}>\r
                <Dropdown {...args} options={items} loading={loading} value={val} onChange={setVal} onLoadMore={loadMore} hasMore={items.length < 30} />\r
            </div>;
  },
  args: {
    placeholder: 'Infinite rooms...',
    label: 'Scroll to bottom (60%+)',
    loadMoreThreshold: 0.6
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [val, setVal] = useState('');
    return <div style={{
      width: '500px',
      height: '300px',
      background: 'var(--secondaryColor)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--labelSecondaryColor)',
      fontWeight: 600,
      border: '2px dashed var(--borderColor)'
    }}>\r
                Right Click Anywhere Here\r
                <Dropdown {...args} value={val} onChange={setVal} />\r
            </div>;
  },
  args: {
    options: baseOptions,
    trigger: 'contextMenu',
    placeholder: 'Hidden'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    loading: true,
    placeholder: 'Fetching data...'
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }}>\r
            <Dropdown options={baseOptions} variant="default" placeholder="Default" style={{
      width: '150px'
    }} />\r
            <Dropdown options={baseOptions} variant="outline" placeholder="Outline" style={{
      width: '150px'
    }} />\r
            <Dropdown options={baseOptions} variant="ghost" placeholder="Ghost" style={{
      width: '150px'
    }} />\r
            <Dropdown options={baseOptions} variant="plain" icon={MoreHorizontal} placeholder="" style={{
      width: '40px'
    }} />\r
        </div>
}`,...x.parameters?.docs?.source}}};const oe=["Default","MultiSelect","Searchable","HoverTrigger","RichUI","LazyLoading","ContextMenu","LoadingState","CustomVariants"];export{g as ContextMenu,x as CustomVariants,d as Default,m as HoverTrigger,h as LazyLoading,v as LoadingState,c as MultiSelect,u as RichUI,p as Searchable,oe as __namedExportsOrder,ee as default};
