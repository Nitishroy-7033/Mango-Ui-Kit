import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as q,R as h}from"./iframe-QywSF6W6.js";import{c as b}from"./cn-BQHNewu7.js";import"./preload-helper-PPVm8Dsz.js";const a=q.forwardRef(({variant:r="solid",size:o="md",color:f,label:s,description:l,error:t,className:C="",style:j,checked:g,onChange:S,disabled:n,...v},N)=>{const z=k=>{n||S?.(k.target.checked)},D={...j,...f?{"--radio-primary":f}:{}},y=!!t;return e.jsxs("div",{className:b("mango-radio-wrapper",C),children:[e.jsxs("label",{className:b("mango-radio-container",`mango-radio-size-${o}`,`mango-radio-variant-${r}`,g&&"is-checked",n&&"is-disabled",y&&"has-error"),style:D,children:[e.jsx("input",{type:"radio",ref:N,className:"mango-radio-input",checked:g,onChange:z,disabled:n,...v}),e.jsx("div",{className:"mango-radio-circle",children:e.jsx("div",{className:"mango-radio-dot"})}),(s||l)&&e.jsxs("div",{className:"mango-radio-label-block",children:[s&&e.jsx("span",{className:"mango-radio-label",children:s}),l&&e.jsx("span",{className:"mango-radio-description",children:l})]})]}),typeof t=="string"&&e.jsx("div",{className:"mango-radio-error-message",children:t})]})});a.displayName="Radio";a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outlined' | 'soft'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'soft'"}]},description:"Visual style variant",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the radio",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Color of the radio"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label for the radio"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Description text below the label"},error:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Error message"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Custom change handler"},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const R=({value:r,defaultValue:o,onChange:f,label:s,description:l,orientation:t="vertical",gap:C,children:j,disabled:g=!1,size:S="md",variant:n="solid",error:v,className:N=""})=>{const[z,D]=h.useState(o||""),y=r!==void 0,k=y?r:z,V=i=>{y||D(i),f?.(i)};return e.jsxs("div",{className:b("mango-radio-group",N),children:[s&&e.jsx("div",{className:"mango-radio-group-label",children:s}),l&&e.jsx("div",{className:"mango-radio-group-description",children:l}),e.jsx("div",{className:b("mango-radio-group-items",`mango-radio-group-${t}`),style:{gap:C},children:h.Children.map(j,i=>{if(h.isValidElement(i)&&i.type===a){const d=i,w=d.props.value;return h.cloneElement(d,{checked:k===w,onChange:()=>V(w),disabled:g||d.props.disabled,size:d.props.size||S,variant:d.props.variant||n,name:s||"mango-radio-group"})}return i})}),typeof v=="string"&&e.jsx("div",{className:"mango-radio-error-message",children:v})]})};R.displayName="RadioGroup";R.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{value:{required:!1,tsType:{name:"string"},description:"Selected value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"},label:{required:!1,tsType:{name:"string"},description:"Label for the group"},description:{required:!1,tsType:{name:"string"},description:"Description for the group"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of the radios",defaultValue:{value:"'vertical'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Gap between items"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children (Radio components)"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all radios in group",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size for all radios in group",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outlined' | 'soft'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'soft'"}]},description:"Variant for all radios in group",defaultValue:{value:"'solid'",computed:!1}},error:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Error state for the entire group"},className:{required:!1,tsType:{name:"string"},description:"Class name for the group container",defaultValue:{value:"''",computed:!1}}}};const P={title:"Components/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"]},x={args:{label:"Option selection"}},u=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{variant:"solid",label:"Solid (Default)",defaultChecked:!0}),e.jsx(a,{variant:"outlined",label:"Outlined",defaultChecked:!0}),e.jsx(a,{variant:"soft",label:"Soft",defaultChecked:!0})]}),c=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{size:"sm",label:"Small size",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium size",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large size",defaultChecked:!0})]}),p=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{label:"Normal"}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled Checked",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Error State",error:"Please select an option"})]}),m=()=>{const[r,o]=q.useState("standard");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px"},children:[e.jsxs(R,{label:"Shipping Method",description:"Choose how you want your mangoes delivered",value:r,onChange:o,children:[e.jsx(a,{value:"standard",label:"Standard Delivery",description:"3-5 business days"}),e.jsx(a,{value:"express",label:"Express Delivery",description:"1-2 business days"}),e.jsx(a,{value:"priority",label:"Priority Shipping",description:"Next day delivery"})]}),e.jsxs("div",{style:{fontSize:"0.9rem"},children:["Selected: ",e.jsx("strong",{children:r})]}),e.jsxs(R,{label:"Payment options",orientation:"horizontal",gap:"24px",variant:"outlined",children:[e.jsx(a,{value:"card",label:"Credit Card"}),e.jsx(a,{value:"paypal",label:"PayPal"}),e.jsx(a,{value:"crypto",label:"Crypto"})]})]})};u.__docgenInfo={description:"",methods:[],displayName:"Variants"};c.__docgenInfo={description:"",methods:[],displayName:"Sizes"};p.__docgenInfo={description:"",methods:[],displayName:"States"};m.__docgenInfo={description:"",methods:[],displayName:"Group"};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option selection'
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}}>\r
        <Radio variant="solid" label="Solid (Default)" defaultChecked />\r
        <Radio variant="outlined" label="Outlined" defaultChecked />\r
        <Radio variant="soft" label="Soft" defaultChecked />\r
    </div>`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}}>\r
        <Radio size="sm" label="Small size" defaultChecked />\r
        <Radio size="md" label="Medium size" defaultChecked />\r
        <Radio size="lg" label="Large size" defaultChecked />\r
    </div>`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
}}>\r
        <Radio label="Normal" />\r
        <Radio label="Disabled" disabled />\r
        <Radio label="Disabled Checked" disabled defaultChecked />\r
        <Radio label="Error State" error="Please select an option" />\r
    </div>`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('standard');
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  }}>\r
            <RadioGroup label="Shipping Method" description="Choose how you want your mangoes delivered" value={value} onChange={setValue}>\r
                <Radio value="standard" label="Standard Delivery" description="3-5 business days" />\r
                <Radio value="express" label="Express Delivery" description="1-2 business days" />\r
                <Radio value="priority" label="Priority Shipping" description="Next day delivery" />\r
            </RadioGroup>\r
\r
            <div style={{
      fontSize: '0.9rem'
    }}>\r
                Selected: <strong>{value}</strong>\r
            </div>\r
\r
            <RadioGroup label="Payment options" orientation="horizontal" gap="24px" variant="outlined">\r
                <Radio value="card" label="Credit Card" />\r
                <Radio value="paypal" label="PayPal" />\r
                <Radio value="crypto" label="Crypto" />\r
            </RadioGroup>\r
        </div>;
}`,...m.parameters?.docs?.source}}};const I=["Default","Variants","Sizes","States","Group"];export{x as Default,m as Group,c as Sizes,p as States,u as Variants,I as __namedExportsOrder,P as default};
