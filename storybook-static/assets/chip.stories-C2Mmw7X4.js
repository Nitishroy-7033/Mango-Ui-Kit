import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-QywSF6W6.js";import{c as j}from"./cn-BQHNewu7.js";import{X as b}from"./x-DSESRrVS.js";import{c as w}from"./createLucideIcon-B-6-c5fd.js";import{S as k}from"./star-D2Jm-pGs.js";import{B as z}from"./bell-06A52uJJ.js";import"./preload-helper-PPVm8Dsz.js";const T=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],W=w("tag",T),r=({children:i,variant:a="soft",color:l="primary",size:s="md",icon:o,removable:g=!1,onRemove:x,onClick:h,selected:C=!1,disabled:t=!1,className:S=""})=>{const n=!!h;return e.jsxs("span",{className:j("mango-chip",`chip-${a}`,`chip-color-${l}`,`chip-size-${s}`,n&&"is-clickable",C&&"is-selected",t&&"is-disabled",S),onClick:!t&&n?h:void 0,role:n?"button":void 0,tabIndex:n&&!t?0:void 0,onKeyDown:n&&!t?v=>v.key==="Enter"&&h?.():void 0,children:[o&&e.jsx("span",{className:"chip-icon",children:o}),e.jsx("span",{className:"chip-label",children:i}),g&&e.jsx("button",{className:"chip-remove",onClick:v=>{v.stopPropagation(),x?.()},disabled:t,"aria-label":"Remove",children:e.jsx(b,{size:12})})]})};r.displayName="Chip";r.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Text or content of the chip"},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'soft' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant",defaultValue:{value:"'soft'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"}]},description:"Color palette",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size",defaultValue:{value:"'md'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Leading icon"},removable:{required:!1,tsType:{name:"boolean"},description:"Whether to show a close/remove button",defaultValue:{value:"false",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when removed"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Whether the chip is clickable"},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the chip is currently selected (for clickable chips)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the chip is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}}}};const L={title:"Components/Chip",component:r,parameters:{layout:"centered"},tags:["autodocs"]},c={args:{children:"Label",variant:"soft",color:"primary",size:"md"}},p={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:["filled","soft","outline","ghost"].map(i=>e.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center",flexWrap:"wrap"},children:["primary","success","warning","error","info","neutral"].map(a=>e.jsx(r,{variant:i,color:a,children:a},a))},i))})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(r,{icon:e.jsx(W,{size:12}),children:"Category"}),e.jsx(r,{icon:e.jsx(k,{size:12}),color:"warning",variant:"filled",children:"Featured"}),e.jsx(r,{icon:e.jsx(z,{size:12}),color:"error",variant:"soft",children:"Alert"})]})},u={render:()=>{const[i,a]=y.useState(["React","TypeScript","Vite","Storybook"]);return e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:i.map(l=>e.jsx(r,{removable:!0,onRemove:()=>a(s=>s.filter(o=>o!==l)),children:l},l))})}},f={render:()=>{const i=["All","Design","Engineering","Marketing","Product"],[a,l]=y.useState("All");return e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:i.map(s=>e.jsx(r,{variant:a===s?"filled":"outline",color:"primary",onClick:()=>l(s),selected:a===s,children:s},s))})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    variant: 'soft',
    color: 'primary',
    size: 'md'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
            {(['filled', 'soft', 'outline', 'ghost'] as const).map(v => <div key={v} style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>\r
                    {(['primary', 'success', 'warning', 'error', 'info', 'neutral'] as const).map(c => <Chip key={c} variant={v} color={c}>{c}</Chip>)}\r
                </div>)}\r
        </div>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>\r
            <Chip size="sm">Small</Chip>\r
            <Chip size="md">Medium</Chip>\r
            <Chip size="lg">Large</Chip>\r
        </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>\r
            <Chip icon={<Tag size={12} />}>Category</Chip>\r
            <Chip icon={<Star size={12} />} color="warning" variant="filled">Featured</Chip>\r
            <Chip icon={<Bell size={12} />} color="error" variant="soft">Alert</Chip>\r
        </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [chips, setChips] = useState(['React', 'TypeScript', 'Vite', 'Storybook']);
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>\r
                {chips.map(chip => <Chip key={chip} removable onRemove={() => setChips(prev => prev.filter(c => c !== chip))}>\r
                        {chip}\r
                    </Chip>)}\r
            </div>;
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = ['All', 'Design', 'Engineering', 'Marketing', 'Product'];
    const [selected, setSelected] = useState('All');
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>\r
                {options.map(opt => <Chip key={opt} variant={selected === opt ? 'filled' : 'outline'} color="primary" onClick={() => setSelected(opt)} selected={selected === opt}>\r
                        {opt}\r
                    </Chip>)}\r
            </div>;
  }
}`,...f.parameters?.docs?.source}}};const _=["Default","AllVariants","Sizes","WithIcons","Removable","SelectableGroup"];export{p as AllVariants,c as Default,u as Removable,f as SelectableGroup,d as Sizes,m as WithIcons,_ as __namedExportsOrder,L as default};
