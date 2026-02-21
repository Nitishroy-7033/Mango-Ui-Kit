import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v,R as y}from"./iframe-QywSF6W6.js";import{c as S}from"./cn-BQHNewu7.js";import{M as I}from"./minus-ByLZpyaW.js";import{C as E}from"./check-BPnGGwGE.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B-6-c5fd.js";const a=v.forwardRef(({variant:s="solid",size:l="md",color:i,label:n,description:r,indeterminate:u=!1,error:p,className:D="",style:T,checked:C,onChange:q,disabled:m,...w},R)=>{const V=v.useRef(null),c=R||V;v.useEffect(()=>{c.current&&(c.current.indeterminate=u)},[u,c]);const h=o=>{m||q?.(o.target.checked)},_={...T,...i?{"--checkbox-primary":i}:{}},t=!!p;return e.jsxs("div",{className:S("mango-checkbox-wrapper",D),children:[e.jsxs("label",{className:S("mango-checkbox-container",`mango-checkbox-size-${l}`,`mango-checkbox-variant-${s}`,C&&"is-checked",u&&"is-indeterminate",m&&"is-disabled",t&&"has-error"),style:_,children:[e.jsx("input",{type:"checkbox",ref:c,className:"mango-checkbox-input",checked:C,onChange:h,disabled:m,...w}),e.jsx("div",{className:"mango-checkbox-box",children:u?e.jsx(I,{className:"mango-checkbox-icon",size:l==="sm"?12:l==="lg"?18:14,strokeWidth:3}):e.jsx(E,{className:"mango-checkbox-icon",size:l==="sm"?12:l==="lg"?18:14,strokeWidth:3})}),(n||r)&&e.jsxs("div",{className:"mango-checkbox-label-block",children:[n&&e.jsx("span",{className:"mango-checkbox-label",children:n}),r&&e.jsx("span",{className:"mango-checkbox-description",children:r})]})]}),typeof p=="string"&&e.jsx("div",{className:"mango-checkbox-error-message",children:p})]})});a.displayName="Checkbox";a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outlined' | 'soft'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'soft'"}]},description:"Visual style variant",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the checkbox",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Color of the checkbox"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label for the checkbox"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Description text below the label"},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is indeterminate",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Error message"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Custom change handler"},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const z=({value:s,defaultValue:l,onChange:i,label:n,description:r,orientation:u="vertical",gap:p,children:D,disabled:T=!1,size:C="md",variant:q="solid",error:m,className:w=""})=>{const[R,V]=y.useState(l||[]),c=s!==void 0,h=c?s:R,_=(t,o)=>{let d;o?d=[...h,t]:d=h.filter(G=>G!==t),c||V(d),i?.(d)};return e.jsxs("div",{className:S("mango-checkbox-group",w),children:[n&&e.jsx("div",{className:"mango-checkbox-group-label",children:n}),r&&e.jsx("div",{className:"mango-checkbox-group-description",children:r}),e.jsx("div",{className:S("mango-checkbox-group-items",`mango-checkbox-group-${u}`),style:{gap:p},children:y.Children.map(D,t=>{if(y.isValidElement(t)&&t.type===a){const o=t,d=o.props.value;return y.cloneElement(o,{checked:h.includes(d),onChange:G=>_(d,G),disabled:T||o.props.disabled,size:o.props.size||C,variant:o.props.variant||q})}return t})}),typeof m=="string"&&e.jsx("div",{className:"mango-checkbox-error-message",children:m})]})};z.displayName="CheckboxGroup";z.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of selected values"},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected values"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"},label:{required:!1,tsType:{name:"string"},description:"Label for the group"},description:{required:!1,tsType:{name:"string"},description:"Description for the group"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of the checkboxes",defaultValue:{value:"'vertical'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Gap between items"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children (Checkbox components)"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all checkboxes in group",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size for all checkboxes in group",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outlined' | 'soft'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'soft'"}]},description:"Variant for all checkboxes in group",defaultValue:{value:"'solid'",computed:!1}},error:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Error state for the entire group"},className:{required:!1,tsType:{name:"string"},description:"Class name for the group container",defaultValue:{value:"''",computed:!1}}}};const $={title:"Components/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"]},j={args:{label:"Remember me"}},f=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{variant:"solid",label:"Solid (Default)",defaultChecked:!0}),e.jsx(a,{variant:"outlined",label:"Outlined",defaultChecked:!0}),e.jsx(a,{variant:"soft",label:"Soft",defaultChecked:!0})]}),x=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{size:"sm",label:"Small size",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium size",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large size",defaultChecked:!0})]}),N={args:{label:"Email Notifications",description:"Get notified when someone mentions you or sends a message.",defaultChecked:!0}},b=()=>{const[s,l]=v.useState([!0,!1]),i=s.every(Boolean),n=s.some(Boolean)&&!i;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(a,{label:"Select All",checked:i,indeterminate:n,onChange:r=>l([r,r])}),e.jsxs("div",{style:{marginLeft:"24px",display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(a,{label:"Option 1",checked:s[0],onChange:r=>l([r,s[1]])}),e.jsx(a,{label:"Option 2",checked:s[1],onChange:r=>l([s[0],r])})]})]})},g=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{label:"Normal"}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled Checked",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Error State",error:"This field is required"})]}),k=()=>{const[s,l]=v.useState(["apple"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px"},children:[e.jsxs(z,{label:"Favorite Fruits",description:"Select all the fruits you like",value:s,onChange:l,children:[e.jsx(a,{value:"apple",label:"Apple"}),e.jsx(a,{value:"banana",label:"Banana",description:"Rich in potassium"}),e.jsx(a,{value:"mango",label:"Mango",description:"The king of fruits!"})]}),e.jsxs("div",{style:{fontSize:"0.9rem"},children:["Selected: ",e.jsx("strong",{children:s.join(", ")||"None"})]}),e.jsxs(z,{label:"Layout Options",orientation:"horizontal",gap:"24px",variant:"outlined",children:[e.jsx(a,{value:"grid",label:"Grid"}),e.jsx(a,{value:"list",label:"List"}),e.jsx(a,{value:"compact",label:"Compact"})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"Variants"};x.__docgenInfo={description:"",methods:[],displayName:"Sizes"};b.__docgenInfo={description:"",methods:[],displayName:"Indeterminate"};g.__docgenInfo={description:"",methods:[],displayName:"States"};k.__docgenInfo={description:"",methods:[],displayName:"Group"};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Remember me'
  }
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}}>\r
        <Checkbox variant="solid" label="Solid (Default)" defaultChecked />\r
        <Checkbox variant="outlined" label="Outlined" defaultChecked />\r
        <Checkbox variant="soft" label="Soft" defaultChecked />\r
    </div>`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}}>\r
        <Checkbox size="sm" label="Small size" defaultChecked />\r
        <Checkbox size="md" label="Medium size" defaultChecked />\r
        <Checkbox size="lg" label="Large size" defaultChecked />\r
    </div>`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Notifications',
    description: 'Get notified when someone mentions you or sends a message.',
    defaultChecked: true
  }
}`,...N.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState([true, false]);
  const allChecked = checked.every(Boolean);
  const isIndeterminate = checked.some(Boolean) && !allChecked;
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }}>\r
            <Checkbox label="Select All" checked={allChecked} indeterminate={isIndeterminate} onChange={c => setChecked([c, c])} />\r
            <div style={{
      marginLeft: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>\r
                <Checkbox label="Option 1" checked={checked[0]} onChange={c => setChecked([c, checked[1]])} />\r
                <Checkbox label="Option 2" checked={checked[1]} onChange={c => setChecked([checked[0], c])} />\r
            </div>\r
        </div>;
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}}>\r
        <Checkbox label="Normal" />\r
        <Checkbox label="Disabled" disabled />\r
        <Checkbox label="Disabled Checked" disabled defaultChecked />\r
        <Checkbox label="Error State" error="This field is required" />\r
    </div>`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [values, setValues] = useState<string[]>(['apple']);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  }}>\r
            <CheckboxGroup label="Favorite Fruits" description="Select all the fruits you like" value={values} onChange={setValues}>\r
                <Checkbox value="apple" label="Apple" />\r
                <Checkbox value="banana" label="Banana" description="Rich in potassium" />\r
                <Checkbox value="mango" label="Mango" description="The king of fruits!" />\r
            </CheckboxGroup>\r
\r
            <div style={{
      fontSize: '0.9rem'
    }}>\r
                Selected: <strong>{values.join(', ') || 'None'}</strong>\r
            </div>\r
\r
            <CheckboxGroup label="Layout Options" orientation="horizontal" gap="24px" variant="outlined">\r
                <Checkbox value="grid" label="Grid" />\r
                <Checkbox value="list" label="List" />\r
                <Checkbox value="compact" label="Compact" />\r
            </CheckboxGroup>\r
        </div>;
}`,...k.parameters?.docs?.source}}};const H=["Default","Variants","Sizes","WithDescription","Indeterminate","States","Group"];export{j as Default,k as Group,b as Indeterminate,x as Sizes,g as States,f as Variants,N as WithDescription,H as __namedExportsOrder,$ as default};
