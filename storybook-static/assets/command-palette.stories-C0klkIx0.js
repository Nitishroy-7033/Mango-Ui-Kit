import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n,R as b}from"./iframe-QywSF6W6.js";import{B as C}from"./button-01qaZYzQ.js";import{c as k}from"./cn-BQHNewu7.js";import{S as P}from"./search-BLKqZgPB.js";import{c as S}from"./createLucideIcon-B-6-c5fd.js";import{A as T,a as z}from"./arrow-up-CyWoDW5D.js";import{H as A}from"./house-DfGxNmEd.js";import{U as D}from"./user-DfzXYxb_.js";import{S as I}from"./settings-CE_Qmr37.js";import{P as E}from"./plus-D8H5l7vy.js";import{F as O}from"./file-text-n9cfvCak.js";import{B as q}from"./bell-06A52uJJ.js";import{T as _}from"./trash-2--y-KK5Rq.js";import"./preload-helper-PPVm8Dsz.js";import"./spinner-BLi69KHB.js";const G=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]],H=S("corner-down-left",G);const L=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],M=S("palette",L),h=({isOpen:r,onClose:i,actions:p,placeholder:w="Type a command or search...",maxHeight:g})=>{const[u,f]=n.useState(""),[c,l]=n.useState(0),x=n.useRef(null),y=n.useRef(null);n.useEffect(()=>{r&&(f(""),l(0),setTimeout(()=>x.current?.focus(),10))},[r]);const a=n.useMemo(()=>{const t=u.toLowerCase();return p.filter(o=>o.label.toLowerCase().includes(t)||o.description?.toLowerCase().includes(t)||o.group?.toLowerCase().includes(t))},[p,u]);n.useEffect(()=>{const t=o=>{r&&(o.key==="Escape"?i():o.key==="ArrowDown"?(o.preventDefault(),l(s=>s<a.length-1?s+1:s)):o.key==="ArrowUp"?(o.preventDefault(),l(s=>s>0?s-1:s)):o.key==="Enter"&&(o.preventDefault(),a[c]&&j(a[c])))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[r,a,c,i]),n.useEffect(()=>{const t=y.current?.children[c];t&&t.scrollIntoView({block:"nearest"})},[c]);const j=t=>{t.disabled||(t.onSelect(),i())};if(!r)return null;const d={};return a.forEach(t=>{const o=t.group||"Default";d[o]||(d[o]=[]),d[o].push(t)}),e.jsx("div",{className:"mango-command-overlay",onClick:i,children:e.jsxs("div",{className:"mango-command-root",onClick:t=>t.stopPropagation(),style:g?{maxHeight:g}:{},children:[e.jsxs("div",{className:"mango-command-header",children:[e.jsx(P,{className:"mango-command-search-icon",size:20}),e.jsx("input",{ref:x,className:"mango-command-input",value:u,onChange:t=>{f(t.target.value),l(0)},placeholder:w})]}),e.jsx("div",{className:"mango-command-list",ref:y,children:a.length===0?e.jsxs("div",{style:{padding:"40px 20px",textAlign:"center",opacity:.5},children:['No results found for "',u,'"']}):Object.keys(d).map(t=>e.jsxs(b.Fragment,{children:[t!=="Default"&&e.jsx("div",{className:"mango-command-group-title",children:t}),d[t].map(o=>{const s=a.indexOf(o),N=s===c;return e.jsxs("div",{className:k("mango-command-item",N&&"is-selected",o.disabled&&"is-disabled"),onMouseEnter:()=>l(s),onClick:()=>j(o),children:[o.icon&&e.jsx("div",{className:"mango-command-item-icon",children:o.icon}),e.jsxs("div",{className:"mango-command-item-content",children:[e.jsx("div",{className:"mango-command-item-label",children:o.label}),o.description&&e.jsx("div",{className:"mango-command-item-description",children:o.description})]}),o.shortcut&&e.jsx("div",{className:"mango-command-item-shortcut",children:o.shortcut.map(v=>e.jsx("kbd",{className:"mango-command-kbd",children:v},v))})]},o.id)})]},t))}),e.jsxs("div",{className:"mango-command-footer",children:[e.jsxs("div",{className:"help-item",children:[e.jsx(H,{size:14})," ",e.jsx("span",{children:"Select"})]}),e.jsxs("div",{className:"help-item",children:[e.jsx(T,{size:14})," ",e.jsx(z,{size:14})," ",e.jsx("span",{children:"Navigate"})]})]})]})})};h.displayName="CommandPalette";h.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the palette is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when closing the palette"},actions:{required:!0,tsType:{name:"Array",elements:[{name:"CommandAction"}],raw:"CommandAction[]"},description:"List of actions"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder for the search input",defaultValue:{value:"'Type a command or search...'",computed:!1}},showShortcutHint:{required:!1,tsType:{name:"boolean"},description:"Whether to show a shortcut hint in the input"},maxHeight:{required:!1,tsType:{name:"string"},description:"Max height of the result list"},glassIntensity:{required:!1,tsType:{name:"union",raw:"'soft' | 'medium' | 'heavy'",elements:[{name:"literal",value:"'soft'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'heavy'"}]},description:"Glassmorphism intensity (soft, medium, heavy)"}}};const se={title:"Components/CommandPalette",parameters:{layout:"centered"},tags:["autodocs"]},m=()=>{const[r,i]=n.useState(!1),p=[{id:"home",label:"Home",description:"Go to the dashboard",shortcut:["G","D"],icon:e.jsx(A,{size:18}),group:"Navigation",onSelect:()=>console.log("Home")},{id:"profile",label:"View Profile",description:"Manage your personal information",shortcut:["G","P"],icon:e.jsx(D,{size:18}),group:"Navigation",onSelect:()=>console.log("Profile")},{id:"settings",label:"Settings",description:"Change application appearance and settings",shortcut:["⌘",","],icon:e.jsx(I,{size:18}),group:"Preferences",onSelect:()=>console.log("Settings")},{id:"theme",label:"Change Theme",description:"Switch between light and dark mode",shortcut:["⇧","T"],icon:e.jsx(M,{size:18}),group:"Preferences",onSelect:()=>console.log("Theme")},{id:"new-doc",label:"Create New Document",shortcut:["⌘","N"],icon:e.jsx(E,{size:18}),group:"Actions",onSelect:()=>console.log("New Doc")},{id:"search-files",label:"Search Files",shortcut:["⌘","P"],icon:e.jsx(O,{size:18}),group:"Actions",onSelect:()=>console.log("Search")},{id:"notif",label:"Notifications",shortcut:["G","N"],icon:e.jsx(q,{size:18}),group:"Actions",onSelect:()=>console.log("Notifications")},{id:"delete",label:"Delete Items",description:"Move selected items to trash",shortcut:["⌫"],icon:e.jsx(_,{size:18}),group:"Actions",onSelect:()=>console.log("Delete")}];return e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(C,{variant:"primary",onClick:()=>i(!0),children:"Open Command Palette (⌘K)"}),e.jsxs("p",{style:{marginTop:"20px",color:"#6b7280"},children:["Or press ",e.jsx("strong",{children:"⌘ + K"})," or ",e.jsx("strong",{children:"Ctrl + K"})," to open."]}),e.jsx(h,{isOpen:r,onClose:()=>i(!1),actions:p})]})};m.__docgenInfo={description:"",methods:[],displayName:"Demo"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const actions = [{
    id: 'home',
    label: 'Home',
    description: 'Go to the dashboard',
    shortcut: ['G', 'D'],
    icon: <Home size={18} />,
    group: 'Navigation',
    onSelect: () => console.log('Home')
  }, {
    id: 'profile',
    label: 'View Profile',
    description: 'Manage your personal information',
    shortcut: ['G', 'P'],
    icon: <User size={18} />,
    group: 'Navigation',
    onSelect: () => console.log('Profile')
  }, {
    id: 'settings',
    label: 'Settings',
    description: 'Change application appearance and settings',
    shortcut: ['⌘', ','],
    icon: <Settings size={18} />,
    group: 'Preferences',
    onSelect: () => console.log('Settings')
  }, {
    id: 'theme',
    label: 'Change Theme',
    description: 'Switch between light and dark mode',
    shortcut: ['⇧', 'T'],
    icon: <Palette size={18} />,
    group: 'Preferences',
    onSelect: () => console.log('Theme')
  }, {
    id: 'new-doc',
    label: 'Create New Document',
    shortcut: ['⌘', 'N'],
    icon: <Plus size={18} />,
    group: 'Actions',
    onSelect: () => console.log('New Doc')
  }, {
    id: 'search-files',
    label: 'Search Files',
    shortcut: ['⌘', 'P'],
    icon: <FileText size={18} />,
    group: 'Actions',
    onSelect: () => console.log('Search')
  }, {
    id: 'notif',
    label: 'Notifications',
    shortcut: ['G', 'N'],
    icon: <Bell size={18} />,
    group: 'Actions',
    onSelect: () => console.log('Notifications')
  }, {
    id: 'delete',
    label: 'Delete Items',
    description: 'Move selected items to trash',
    shortcut: ['⌫'],
    icon: <Trash2 size={18} />,
    group: 'Actions',
    onSelect: () => console.log('Delete')
  }];
  return <div style={{
    textAlign: 'center'
  }}>\r
            <Button variant="primary" onClick={() => setIsOpen(true)}>\r
                Open Command Palette (⌘K)\r
            </Button>\r
\r
            <p style={{
      marginTop: '20px',
      color: '#6b7280'
    }}>\r
                Or press <strong>⌘ + K</strong> or <strong>Ctrl + K</strong> to open.\r
            </p>\r
\r
            <CommandPalette isOpen={isOpen} onClose={() => setIsOpen(false)} actions={actions} />\r
        </div>;
}`,...m.parameters?.docs?.source}}};const ne=["Demo"];export{m as Demo,ne as __namedExportsOrder,se as default};
