import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-QywSF6W6.js";import{c as g}from"./cn-BQHNewu7.js";import{X as P}from"./x-DSESRrVS.js";import{C as G}from"./chevron-down-BNiyiuGD.js";import{S as K}from"./search-BLKqZgPB.js";import{C as Y}from"./check-BPnGGwGE.js";import{S as W}from"./spinner-BLi69KHB.js";import{F as q}from"./file-text-n9cfvCak.js";import{I as Z}from"./image-Bd7DuAI6.js";import{U as ee}from"./user-DfzXYxb_.js";import{S as se}from"./shield-BVJfn6Gp.js";import{M as te}from"./mail-Ce2xHHqn.js";import{S as ae}from"./settings-CE_Qmr37.js";import{B as ne}from"./bell-06A52uJJ.js";import{c as le}from"./createLucideIcon-B-6-c5fd.js";import{B as $}from"./button-01qaZYzQ.js";import"./preload-helper-PPVm8Dsz.js";const ie=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],re=le("circle-check-big",ie),i=({options:a=[],value:t=[],onChange:d,label:u,placeholder:C="Select options...",className:N="",variant:z="outlined",size:M="md",searchable:T=!0,disabled:o=!1,loading:h=!1,onLoadMore:I,hasMore:k=!1,loadMoreThreshold:A=.8,footer:_,maxHeight:U=300,maxTagsVisible:O=3,showIcons:R=!0})=>{const[c,B]=n.useState(!1),[m,D]=n.useState(""),L=n.useRef(null),F=n.useRef(null),f=n.useMemo(()=>a.filter(s=>t.includes(s.id)),[a,t]),H=s=>{if(s.disabled||o)return;const l=t.includes(s.id)?t.filter(p=>p!==s.id):[...t,s.id];d(l)},J=(s,l)=>{s.stopPropagation(),!o&&d(t.filter(p=>p!==l))},Q=s=>{s.stopPropagation(),!o&&d([])};n.useEffect(()=>{const s=l=>{L.current&&!L.current.contains(l.target)&&B(!1)};return c&&document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[c]);const E=n.useMemo(()=>{if(!m)return a;const s=m.toLowerCase();return a.filter(l=>l.name.toLowerCase().includes(s)||l.details&&l.details.toLowerCase().includes(s))},[a,m]),X=n.useCallback(()=>{if(!I||!k||h||!F.current)return;const{scrollTop:s,scrollHeight:l,clientHeight:p}=F.current;(s+p)/l>A&&I()},[I,k,h,A]);return e.jsxs("div",{className:g("mango-multi-select",`mango-multi-select-${M}`,`mango-multi-select-variant-${z}`,c&&"is-open",o&&"is-disabled",N),ref:L,children:[u&&e.jsx("label",{className:"mango-multi-select-label",children:u}),e.jsxs("div",{className:g("mango-multi-select-trigger",c&&"active"),onClick:()=>!o&&B(!c),children:[e.jsx("div",{className:"mango-multi-select-tags",children:f.length>0?e.jsxs(e.Fragment,{children:[f.slice(0,O).map(s=>e.jsxs("div",{className:"mango-multi-select-tag",children:[R&&s.icon&&e.jsx("span",{className:"tag-icon",children:s.icon}),e.jsx("span",{className:"tag-name",children:s.name}),!o&&e.jsx(P,{size:12,className:"tag-remove",onClick:l=>J(l,s.id)})]},s.id)),f.length>O&&e.jsxs("div",{className:"mango-multi-select-tag mango-multi-select-tag-more",children:["+",f.length-O]})]}):e.jsx("span",{className:"placeholder",children:C})}),e.jsxs("div",{className:"trigger-actions",children:[!o&&t.length>0&&e.jsx(P,{size:14,className:"clear-all",onClick:Q}),e.jsx(G,{size:18,className:g("arrow",c&&"open")})]})]}),c&&e.jsxs("div",{className:"mango-multi-select-dropdown animate-scale-in",children:[T&&e.jsxs("div",{className:"mango-multi-select-search",children:[e.jsx(K,{size:16}),e.jsx("input",{type:"text",placeholder:"Search...",value:m,onChange:s=>D(s.target.value),onClick:s=>s.stopPropagation(),autoFocus:!0}),m&&e.jsx(P,{size:14,className:"search-clear",onClick:()=>D("")})]}),e.jsxs("div",{className:"mango-multi-select-list",ref:F,onScroll:X,style:{maxHeight:U},children:[E.length>0?E.map(s=>{const l=t.includes(s.id);return e.jsxs("div",{className:g("mango-multi-select-option",l&&"selected",s.disabled&&"disabled"),onClick:()=>H(s),children:[e.jsx("div",{className:g("option-checkbox",l&&"checked"),children:l&&e.jsx(Y,{size:12,strokeWidth:3})}),R&&s.icon&&e.jsx("div",{className:"option-icon",children:s.icon}),e.jsxs("div",{className:"option-content",children:[e.jsx("span",{className:"option-name",children:s.name}),s.details&&e.jsx("span",{className:"option-details",children:s.details})]})]},s.id)}):e.jsx("div",{className:"no-results",children:h?e.jsx(W,{size:20}):"No results found"}),h&&k&&e.jsxs("div",{className:"list-loading-more",children:[e.jsx(W,{size:16}),e.jsx("span",{children:"Loading more..."})]})]}),_&&e.jsx("div",{className:"mango-multi-select-footer",children:_})]})]})};i.displayName="MultiSelect";i.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: (string | number)[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"value"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select options...'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'ghost'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLoadMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hasMore:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadMoreThreshold:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.8",computed:!1}},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},showTags:{required:!1,tsType:{name:"boolean"},description:""},showIcons:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},maxTagsVisible:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}}};const ze={title:"Components/MultiSelect",component:i,parameters:{layout:"centered"},tags:["autodocs"]},r=[{id:"1",name:"Profile Settings",icon:e.jsx(ee,{size:14}),details:"Manage your bio and avatar"},{id:"2",name:"Security",icon:e.jsx(se,{size:14}),details:"Passwords and 2FA"},{id:"3",name:"Email Notifications",icon:e.jsx(te,{size:14}),details:"Configure alerts"},{id:"4",name:"System Logs",icon:e.jsx(ae,{size:14}),details:"View app performance"},{id:"5",name:"Push Alerts",icon:e.jsx(ne,{size:14}),details:"Mobile notifications"}],v={render:()=>{const[a,t]=n.useState([]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(i,{label:"Frameworks",placeholder:"Select tools...",options:[{id:"react",name:"React"},{id:"vue",name:"Vue"},{id:"angular",name:"Angular"},{id:"svelte",name:"Svelte"},{id:"nextjs",name:"Next.js"}],value:a,onChange:t})})}},x={render:()=>{const[a,t]=n.useState(["1"]);return e.jsx("div",{style:{width:"450px"},children:e.jsx(i,{label:"Icons Enabled",options:r,value:a,onChange:t,showIcons:!0})})}},S={render:()=>{const[a,t]=n.useState(["1"]);return e.jsx("div",{style:{width:"450px"},children:e.jsx(i,{label:"Icons Disabled",options:r,value:a,onChange:t,showIcons:!1})})}},j={render:()=>{const[a,t]=n.useState(["1","3"]);return e.jsx("div",{style:{width:"450px"},children:e.jsx(i,{label:"Account Preferences",options:r,value:a,onChange:t,maxTagsVisible:2})})}},y={render:()=>{const[a,t]=n.useState([{id:"doc1",name:"Project_Alpha.pdf",icon:e.jsx(q,{size:14}),details:"Created 2 days ago"},{id:"doc2",name:"Logo_Final.png",icon:e.jsx(Z,{size:14}),details:"Design assets"},{id:"doc3",name:"Invoice_778.docx",icon:e.jsx(q,{size:14}),details:"Billing department"}]),[d,u]=n.useState(!1),[C,N]=n.useState([]),z=()=>{d||(u(!0),setTimeout(()=>{const M=[{id:`new-${Date.now()}`,name:"Newly_Added_File.pdf",icon:e.jsx(re,{size:14}),details:"Just synced"},{id:`new2-${Date.now()}`,name:"Backup_Log.txt",icon:e.jsx(q,{size:14}),details:"System generated"}];t(T=>[...T,...M]),u(!1)},1500))};return e.jsx("div",{style:{width:"400px"},children:e.jsx(i,{label:"Recent Files",placeholder:"Pick files to share...",options:a,value:C,onChange:N,onLoadMore:z,hasMore:a.length<15,loading:d})})}},w={render:()=>{const[a,t]=n.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"400px"},children:[e.jsx(i,{label:"Small (Filled)",size:"sm",variant:"filled",options:r,value:a,onChange:t}),e.jsx(i,{label:"Medium (Outlined)",size:"md",options:r,value:a,onChange:t}),e.jsx(i,{label:"Large (Outlined)",size:"lg",options:r,value:a,onChange:t})]})}},b={render:()=>{const[a,t]=n.useState(["1","2"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(i,{label:"Pre-selected Items",options:r,value:a,onChange:t})})}},V={render:()=>{const[a,t]=n.useState([]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(i,{label:"Team Members",options:r,value:a,onChange:t,footer:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx($,{size:"sm",variant:"outline",style:{flex:1},children:"Invite Others"}),e.jsx($,{size:"sm",style:{flex:1},children:"Manage Roles"})]})})})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<(string | number)[]>([]);
    return <div style={{
      width: '400px'
    }}>\r
                <MultiSelect label="Frameworks" placeholder="Select tools..." options={[{
        id: 'react',
        name: 'React'
      }, {
        id: 'vue',
        name: 'Vue'
      }, {
        id: 'angular',
        name: 'Angular'
      }, {
        id: 'svelte',
        name: 'Svelte'
      }, {
        id: 'nextjs',
        name: 'Next.js'
      }]} value={val} onChange={setVal} />\r
            </div>;
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<(string | number)[]>(['1']);
    return <div style={{
      width: '450px'
    }}>\r
                <MultiSelect label="Icons Enabled" options={richOptions} value={val} onChange={setVal} showIcons={true} />\r
            </div>;
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<(string | number)[]>(['1']);
    return <div style={{
      width: '450px'
    }}>\r
                <MultiSelect label="Icons Disabled" options={richOptions} value={val} onChange={setVal} showIcons={false} />\r
            </div>;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<(string | number)[]>(['1', '3']);
    return <div style={{
      width: '450px'
    }}>\r
                <MultiSelect label="Account Preferences" options={richOptions} value={val} onChange={setVal} maxTagsVisible={2} />\r
            </div>;
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: 'doc1',
      name: 'Project_Alpha.pdf',
      icon: <FileText size={14} />,
      details: 'Created 2 days ago'
    }, {
      id: 'doc2',
      name: 'Logo_Final.png',
      icon: <ImageIcon size={14} />,
      details: 'Design assets'
    }, {
      id: 'doc3',
      name: 'Invoice_778.docx',
      icon: <FileText size={14} />,
      details: 'Billing department'
    }]);
    const [loading, setLoading] = useState(false);
    const [val, setVal] = useState<(string | number)[]>([]);
    const loadMore = () => {
      if (loading) return;
      setLoading(true);
      setTimeout(() => {
        const nextBatch = [{
          id: \`new-\${Date.now()}\`,
          name: 'Newly_Added_File.pdf',
          icon: <CheckCircle size={14} />,
          details: 'Just synced'
        }, {
          id: \`new2-\${Date.now()}\`,
          name: 'Backup_Log.txt',
          icon: <FileText size={14} />,
          details: 'System generated'
        }];
        setItems(prev => [...prev, ...nextBatch]);
        setLoading(false);
      }, 1500);
    };
    return <div style={{
      width: '400px'
    }}>\r
                <MultiSelect label="Recent Files" placeholder="Pick files to share..." options={items} value={val} onChange={setVal} onLoadMore={loadMore} hasMore={items.length < 15} loading={loading} />\r
            </div>;
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = useState<(string | number)[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      width: '400px'
    }}>\r
                <MultiSelect label="Small (Filled)" size="sm" variant="filled" options={richOptions} value={v} onChange={setV} />\r
                <MultiSelect label="Medium (Outlined)" size="md" options={richOptions} value={v} onChange={setV} />\r
                <MultiSelect label="Large (Outlined)" size="lg" options={richOptions} value={v} onChange={setV} />\r
            </div>;
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<(string | number)[]>(['1', '2']);
    return <div style={{
      width: '400px'
    }}>\r
                <MultiSelect label="Pre-selected Items" options={richOptions} value={val} onChange={setVal} />\r
            </div>;
  }
}`,...b.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<(string | number)[]>([]);
    return <div style={{
      width: '400px'
    }}>\r
                <MultiSelect label="Team Members" options={richOptions} value={val} onChange={setVal} footer={<div style={{
        display: 'flex',
        gap: '8px'
      }}>\r
                            <Button size="sm" variant="outline" style={{
          flex: 1
        }}>Invite Others</Button>\r
                            <Button size="sm" style={{
          flex: 1
        }}>Manage Roles</Button>\r
                        </div>} />\r
            </div>;
  }
}`,...V.parameters?.docs?.source}}};const Me=["Default","WithIcons","WithoutIcons","RichUI","PaginationAndLoading","SizesAndVariants","PreSelected","WithFooter"];export{v as Default,y as PaginationAndLoading,b as PreSelected,j as RichUI,w as SizesAndVariants,V as WithFooter,x as WithIcons,S as WithoutIcons,Me as __namedExportsOrder,ze as default};
