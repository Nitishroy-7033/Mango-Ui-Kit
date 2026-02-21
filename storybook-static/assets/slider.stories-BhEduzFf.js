import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-QywSF6W6.js";import{c as L}from"./cn-BQHNewu7.js";import"./preload-helper-PPVm8Dsz.js";const t=({value:i,onChange:w,rangeValue:o,onRangeChange:j,min:d=0,max:c=100,defaultValue:A,step:T=1,color:Q,customColor:$,variant:P="default",size:W="md",marks:M,showTooltip:F=!0,formatValue:D,showMinMax:X=!1,disabled:b=!1,className:B="",style:G})=>{const V=!!o,R=u.useRef(null),[m,k]=u.useState(null),[O,U]=u.useState(i??A??0),[H,E]=u.useState(o??[0,0]),C=i!==void 0?i:O,l=o!==void 0?o:H,p=u.useCallback(a=>(a-d)/(c-d)*100,[d,c]),z=u.useCallback(a=>{if(!R.current)return 0;const s=R.current.getBoundingClientRect(),r=Math.max(0,Math.min(1,(a-s.left)/s.width))*(c-d)+d;return Math.round(r/T)*T},[d,c,T]),I=(a,s)=>{b||k(s)},q=u.useCallback(a=>{if(!m||b)return;const s=z(a),n=Math.max(d,Math.min(c,s));if(m==="single")i===void 0&&U(n),w?.(n);else if(m==="min"){const r=[n,l[1]];r[0]<=r[1]&&(o===void 0&&E(r),j?.(r))}else if(m==="max"){const r=[l[0],n];r[1]>=r[0]&&(o===void 0&&E(r),j?.(r))}},[m,b,z,d,c,i,w,l,o,j]);u.useEffect(()=>{const a=r=>q(r.clientX),s=r=>q(r.touches[0].clientX),n=()=>k(null);return m&&(window.addEventListener("mousemove",a),window.addEventListener("mouseup",n),window.addEventListener("touchmove",s),window.addEventListener("touchend",n)),()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",n),window.removeEventListener("touchmove",s),window.removeEventListener("touchend",n)}},[m,q]);const N=(a,s)=>{const n=p(a),r=D?D(a):a.toString();return e.jsx("div",{className:"mango-slider-thumb",style:{left:`${n}%`},onMouseDown:_=>I(_,s),onTouchStart:_=>I(_,s),children:F&&e.jsx("div",{className:"mango-slider-tooltip",children:r})})},J={...G,...$?{"--slider-primary":$}:{}},K=V?{left:`${p(l[0])}%`,width:`${p(l[1])-p(l[0])}%`}:{left:"0%",width:`${p(C)}%`};return e.jsxs("div",{className:L("mango-slider-root",`mango-slider-size-${W}`,`mango-slider-variant-${P}`,b&&"is-disabled",B),style:J,children:[X&&e.jsxs("div",{className:"mango-slider-labels",children:[e.jsx("span",{children:d}),e.jsx("span",{children:c})]}),e.jsxs("div",{className:"mango-slider-container",ref:R,children:[e.jsx("div",{className:"mango-slider-track",children:e.jsx("div",{className:"mango-slider-fill",style:K})}),V?e.jsxs(e.Fragment,{children:[N(l[0],"min"),N(l[1],"max")]}):N(C,"single")]}),M&&e.jsx("div",{className:"mango-slider-marks",children:(Array.isArray(M)?M:[]).map(a=>{const s=p(a.value),n=V?a.value>=l[0]&&a.value<=l[1]:a.value<=C;return e.jsxs("div",{className:L("mango-slider-mark",n&&"is-active"),style:{left:`${s}%`},children:[e.jsx("div",{className:"mango-slider-mark-dot"}),a.label&&e.jsx("span",{className:"mango-slider-mark-label",children:a.label})]},a.value)})})]})};t.displayName="Slider";t.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"Current value (single)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback for single value change"},defaultValue:{required:!1,tsType:{name:"number"},description:"Default value"},rangeValue:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"Range mode — [min, max]"},onRangeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: [number, number]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"range"}],return:{name:"void"}}},description:"Callback for range change"},min:{required:!1,tsType:{name:"number"},description:"Minimum value",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum value",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Step increment",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"Semantic color"},customColor:{required:!1,tsType:{name:"string"},description:"Custom hex color"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'gradient' | 'neon' | 'glass'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'gradient'"},{name:"literal",value:"'neon'"},{name:"literal",value:"'glass'"}]},description:"Visual variant",defaultValue:{value:"'default'",computed:!1}},gradient:{required:!1,tsType:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},description:"Gradient [start, end] for gradient variant"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Slider track thickness",defaultValue:{value:"'md'",computed:!1}},marks:{required:!1,tsType:{name:"union",raw:"SliderMark[] | boolean",elements:[{name:"Array",elements:[{name:"SliderMark"}],raw:"SliderMark[]"},{name:"boolean"}]},description:"Snap points with optional labels"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"Show value tooltip above thumb",defaultValue:{value:"true",computed:!1}},formatValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Format the tooltip / label value"},showMinMax:{required:!1,tsType:{name:"boolean"},description:"Show min/max labels",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether slider is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const re={title:"Components/Slider",component:t,parameters:{layout:"centered"},tags:["autodocs"]},S={args:{value:50,style:{width:"400px"}}},v=()=>{const[i,w]=u.useState([20,80]);return e.jsxs("div",{style:{width:"400px"},children:[e.jsx(t,{rangeValue:i,onRangeChange:w,showMinMax:!0,formatValue:o=>`$${o}`}),e.jsxs("div",{style:{marginTop:"20px",textAlign:"center"},children:["Price Range: ",e.jsxs("strong",{children:["$",i[0]," - $",i[1]]})]})]})},g=()=>e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsx(t,{value:40,variant:"default",showTooltip:!0}),e.jsx(t,{value:60,variant:"gradient",showTooltip:!0}),e.jsx(t,{value:80,variant:"neon",showTooltip:!0}),e.jsx(t,{value:30,variant:"glass",showTooltip:!0})]}),f=()=>e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"30px"},children:[e.jsx(t,{size:"sm",value:30}),e.jsx(t,{size:"md",value:50}),e.jsx(t,{size:"lg",value:70})]}),h=()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{defaultValue:50,step:10,marks:[{value:0,label:"0%"},{value:25,label:"25%"},{value:50,label:"50%"},{value:75,label:"75%"},{value:100,label:"100%"}]})}),x=()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{value:60,customColor:"#9c27b0"})}),y=()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{value:50,disabled:!0,showMinMax:!0})});v.__docgenInfo={description:"",methods:[],displayName:"Range"};g.__docgenInfo={description:"",methods:[],displayName:"Variants"};f.__docgenInfo={description:"",methods:[],displayName:"Sizes"};h.__docgenInfo={description:"",methods:[],displayName:"WithMarks"};x.__docgenInfo={description:"",methods:[],displayName:"CustomColor"};y.__docgenInfo={description:"",methods:[],displayName:"Disabled"};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    style: {
      width: '400px'
    }
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [range, setRange] = useState<[number, number]>([20, 80]);
  return <div style={{
    width: '400px'
  }}>\r
            <Slider rangeValue={range} onRangeChange={setRange} showMinMax formatValue={v => \`$\${v}\`} />\r
            <div style={{
      marginTop: '20px',
      textAlign: 'center'
    }}>\r
                Price Range: <strong>\${range[0]} - \${range[1]}</strong>\r
            </div>\r
        </div>;
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px'
}}>\r
        <Slider value={40} variant="default" showTooltip />\r
        <Slider value={60} variant="gradient" showTooltip />\r
        <Slider value={80} variant="neon" showTooltip />\r
        <Slider value={30} variant="glass" showTooltip />\r
    </div>`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'
}}>\r
        <Slider size="sm" value={30} />\r
        <Slider size="md" value={50} />\r
        <Slider size="lg" value={70} />\r
    </div>`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px'
}}>\r
        <Slider defaultValue={50} step={10} marks={[{
    value: 0,
    label: '0%'
  }, {
    value: 25,
    label: '25%'
  }, {
    value: 50,
    label: '50%'
  }, {
    value: 75,
    label: '75%'
  }, {
    value: 100,
    label: '100%'
  }]} />\r
    </div>`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px'
}}>\r
        <Slider value={60} customColor="#9c27b0" />\r
    </div>`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px'
}}>\r
        <Slider value={50} disabled showMinMax />\r
    </div>`,...y.parameters?.docs?.source}}};const se=["Default","Range","Variants","Sizes","WithMarks","CustomColor","Disabled"];export{x as CustomColor,S as Default,y as Disabled,v as Range,f as Sizes,g as Variants,h as WithMarks,se as __namedExportsOrder,re as default};
