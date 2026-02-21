import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-QywSF6W6.js";import{c as x}from"./cn-BQHNewu7.js";import{C as De}from"./calendar-KaGezM1O.js";import{X as ve}from"./x-DSESRrVS.js";import{C as be}from"./chevron-left-Tn_oAlSe.js";import{C as Se}from"./chevron-right-B7G5iz4Z.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B-6-c5fd.js";const Re=["January","February","March","April","May","June","July","August","September","October","November","December"],ee=t=>{const a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),N=String(t.getDate()).padStart(2,"0");return`${a}-${o}-${N}`},n=({value:t,onChange:a,placeholder:o="Select date range",className:N="",variant:ne="default",size:O="md",disabled:f=!1,label:F,innerLabel:$,helperText:V,error:y,minDate:Y,maxDate:A,clearable:I=!0,presets:U=[],showBorder:_=!0,showFooter:se=!0,cardBorderRadius:oe="18px",cardBorderColor:le,cardBorderWidth:ie="1.5px"})=>{const[M,D]=s.useState(!1),[p,de]=s.useState(new Date),[ce,H]=s.useState(null),L=s.useRef(null),pe=(r,i)=>new Date(r,i+1,0).getDate(),ue=(r,i)=>new Date(r,i,1).getDay(),J=r=>!!(Y&&r<Y||A&&r>A),ge=r=>{const i=p.getFullYear(),q=p.getMonth(),v=new Date(i,q,r),u=ee(v);if(!J(u))if(!t.startDate||t.startDate&&t.endDate)a({startDate:u,endDate:null});else{const h=new Date(t.startDate+"T00:00:00");v<h?a({startDate:u,endDate:t.startDate}):(a({...t,endDate:u}),D(!1))}},Q=r=>{de(new Date(p.getFullYear(),p.getMonth()+r,1))},X=r=>{r.stopPropagation(),a({startDate:null,endDate:null})};s.useEffect(()=>{const r=i=>{L.current&&!L.current.contains(i.target)&&D(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]);const me=()=>{const r=p.getFullYear(),i=p.getMonth(),q=pe(r,i),v=ue(r,i),u=[];for(let d=0;d<v;d++)u.push(e.jsx("div",{className:"drp-day empty"},`empty-${d}`));const h=t.startDate||null,b=t.endDate||ce||null,xe=ee(new Date);for(let d=1;d<=q;d++){const m=`${r}-${String(i+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`,G=m===h,K=m===b,fe=h&&b&&m>h&&m<b,ye=m===xe,Z=J(m);u.push(e.jsx("div",{className:x("drp-day",G&&"start",K&&b!==h&&"end",fe&&"in-range",ye&&!G&&!K&&"today",Z&&"disabled"),onClick:()=>!Z&&ge(d),onMouseEnter:()=>t.startDate&&!t.endDate&&H(m),onMouseLeave:()=>H(null),children:d},d))}return u},he=()=>t.startDate&&t.endDate?`${t.startDate}  →  ${t.endDate}`:t.startDate?`${t.startDate}  →  ...`:o,E=!!(t.startDate||t.endDate);return e.jsxs("div",{className:x("date-range-picker",N),ref:L,children:[F&&e.jsx("label",{className:x("picker-label",`picker-label-${O}`),children:F}),e.jsxs("div",{className:x("range-input-trigger",`range-trigger-${ne}`,`range-trigger-${O}`,M&&"active",y&&"has-error",f&&"is-disabled"),onClick:()=>!f&&D(!M),children:[e.jsx(De,{className:"trigger-icon",size:16}),e.jsx("span",{className:x("trigger-text",!E&&"trigger-placeholder"),children:he()}),I&&E&&!f&&e.jsx("span",{className:"drp-clear-btn",onClick:X,children:e.jsx(ve,{size:14})})]}),y&&e.jsx("p",{className:"picker-error",children:y}),!y&&V&&e.jsx("p",{className:"picker-helper",children:V}),M&&!f&&e.jsxs("div",{className:"drp-dropdown animate-scale-in",style:{borderRadius:oe,borderColor:le??void 0,borderWidth:_?ie:"0px",borderStyle:"solid",boxShadow:_?void 0:"0 10px 30px rgba(0,0,0,0.1)"},children:[$&&e.jsx("div",{className:"drp-card-header",children:e.jsx("span",{className:"drp-card-title",children:$})}),U.length>0&&e.jsx("div",{className:"drp-presets",children:U.map(r=>e.jsx("button",{className:"drp-preset-btn",onClick:()=>{a(r.range),D(!1)},children:r.label},r.label))}),e.jsxs("div",{className:"drp-calendar-section",children:[e.jsxs("div",{className:"drp-calendar-header",children:[e.jsx("button",{type:"button",className:"calendar-nav-btn",onClick:()=>Q(-1),children:e.jsx(be,{size:16})}),e.jsxs("span",{className:"current-month",children:[Re[p.getMonth()]," ",p.getFullYear()]}),e.jsx("button",{type:"button",className:"calendar-nav-btn",onClick:()=>Q(1),children:e.jsx(Se,{size:16})})]}),e.jsx("div",{className:"drp-weekdays",children:["Su","Mo","Tu","We","Th","Fr","Sa"].map(r=>e.jsx("div",{className:"weekday",children:r},r))}),e.jsx("div",{className:"drp-grid",children:me()}),se&&e.jsxs("div",{className:"drp-footer",children:[e.jsx("span",{className:"drp-hint",children:t.startDate?t.endDate?`${t.startDate} → ${t.endDate}`:"Click to set end date":"Click to set start date"}),I&&E&&e.jsx("button",{className:"drp-clear-range-btn",onClick:r=>X(r),children:"Clear"})]})]})]})]})};n.displayName="DateRangePicker";n.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{value:{required:!0,tsType:{name:"DateRange"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select date range'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"Visual style variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the trigger",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the picker",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label shown above the trigger"},innerLabel:{required:!1,tsType:{name:"string"},description:"Optional small uppercase label rendered inside the trigger (e.g. 'SELECT PERIOD')"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text"},error:{required:!1,tsType:{name:"string"},description:"Error state"},minDate:{required:!1,tsType:{name:"string"},description:"Minimum selectable date (YYYY-MM-DD)"},maxDate:{required:!1,tsType:{name:"string"},description:"Maximum selectable date (YYYY-MM-DD)"},clearable:{required:!1,tsType:{name:"boolean"},description:'Show a "Clear" button when a date is selected',defaultValue:{value:"true",computed:!1}},presets:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; range: DateRange }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"range",value:{name:"DateRange",required:!0}}]}}],raw:"{ label: string; range: DateRange }[]"},description:"Quick preset ranges",defaultValue:{value:"[]",computed:!1}},showBorder:{required:!1,tsType:{name:"boolean"},description:"Whether to show the outer border of the calendar card",defaultValue:{value:"true",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:"Whether to show the footer information/actions",defaultValue:{value:"true",computed:!1}},cardBorderRadius:{required:!1,tsType:{name:"string"},description:"Border-radius of the calendar card popup",defaultValue:{value:"'18px'",computed:!1}},cardBorderColor:{required:!1,tsType:{name:"string"},description:"Border color of the calendar card popup"},cardBorderWidth:{required:!1,tsType:{name:"string"},description:"Border width of the calendar card popup",defaultValue:{value:"'1.5px'",computed:!1}}}};const Ne={title:"Components/DateRangePicker",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","filled","outline","ghost"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},clearable:{control:"boolean"},showBorder:{control:"boolean"},showFooter:{control:"boolean"},cardBorderRadius:{control:"text"},cardBorderColor:{control:"color"},cardBorderWidth:{control:"text"}}},l={startDate:null,endDate:null},c=new Date,g=t=>t.toISOString().split("T")[0],te=(t,a)=>{const o=new Date(t);return o.setDate(o.getDate()+a),o},ae=[{label:"Today",range:{startDate:g(c),endDate:g(c)}},{label:"Last 7 days",range:{startDate:g(te(c,-6)),endDate:g(c)}},{label:"Last 30 days",range:{startDate:g(te(c,-29)),endDate:g(c)}},{label:"This month",range:{startDate:g(new Date(c.getFullYear(),c.getMonth(),1)),endDate:g(new Date(c.getFullYear(),c.getMonth()+1,0))}}],re=t=>{const[a,o]=s.useState(t.value??l);return e.jsx("div",{style:{width:"380px"},children:e.jsx(n,{...t,value:a,onChange:o})})},S={render:t=>e.jsx(re,{...t,value:l})},R={render:()=>{const[t,a]=s.useState({startDate:"2026-02-01",endDate:"2026-02-14"});return e.jsx("div",{style:{width:"380px"},children:e.jsx(n,{value:t,onChange:a,label:"Event Window",clearable:!0})})}},j={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"380px"},children:["default","filled","outline","ghost"].map(t=>{const[a,o]=s.useState(l);return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.75rem",marginBottom:"6px",fontWeight:600,textTransform:"capitalize",opacity:.6},children:t}),e.jsx(n,{variant:t,value:a,onChange:o})]},t)})})},C={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"380px"},children:["sm","md","lg"].map(t=>{const[a,o]=s.useState(l);return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.75rem",marginBottom:"6px",fontWeight:600,textTransform:"uppercase",opacity:.6},children:t}),e.jsx(n,{size:t,value:a,onChange:o,placeholder:`Size ${t.toUpperCase()} range`})]},t)})})},w={render:()=>{const[t,a]=s.useState(l);return e.jsx("div",{style:{width:"380px"},children:e.jsx(n,{label:"Analytics Period",helperText:"Click a preset or pick dates manually",value:t,onChange:a,presets:ae,clearable:!0})})}},T={render:()=>{const[t,a]=s.useState(l);return e.jsx("div",{style:{width:"380px"},children:e.jsx(n,{label:"Booking Window",helperText:"Only Feb 2026 is available",value:t,onChange:a,minDate:"2026-02-01",maxDate:"2026-02-28",clearable:!0})})}},k={render:()=>{const[t,a]=s.useState(l);return e.jsx("div",{style:{width:"380px"},children:e.jsx(n,{label:"Report Dates",error:"Please select a valid date range",value:t,onChange:a})})}},z={render:()=>e.jsx("div",{style:{width:"380px"},children:e.jsx(n,{label:"Locked Period",value:{startDate:"2026-01-01",endDate:"2026-01-31"},onChange:()=>{},disabled:!0})})},B={render:()=>{const[t,a]=s.useState(l);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"380px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"No Outer Border (Shadow Only)"}),e.jsx(n,{showBorder:!1,value:t,onChange:a,clearable:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"No Footer"}),e.jsx(n,{showFooter:!1,value:t,onChange:a,clearable:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"Card Customization"}),e.jsx(n,{cardBorderRadius:"40px",cardBorderColor:"#2563eb",cardBorderWidth:"3px",value:t,onChange:a,clearable:!0})]})]})}},W={render:t=>e.jsx(re,{...t,value:l}),args:{label:"Date Range",placeholder:"Select a date range",variant:"default",size:"md",clearable:!0,helperText:"Click to start and select end date"}},P={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"380px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",opacity:.5,marginBottom:"6px"},children:"Label in Popup Only"}),(()=>{const[t,a]=s.useState(l);return e.jsx(n,{innerLabel:"Filter Range",value:t,onChange:a,clearable:!0,placeholder:"Open to see inner label"})})()]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",opacity:.5,marginBottom:"8px"},children:"Sizes with innerLabel"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:["sm","md","lg"].map(t=>{const[a,o]=s.useState(l);return e.jsx(n,{size:t,innerLabel:`Range ${t.toUpperCase()}`,value:a,onChange:o,placeholder:`Size ${t.toUpperCase()} range`},t)})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",opacity:.5,marginBottom:"6px"},children:"With presets + innerLabel"}),(()=>{const[t,a]=s.useState(l);return e.jsx(n,{innerLabel:"Analytics Period",value:t,onChange:a,clearable:!0,presets:ae})})()]})]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Wrapper {...args} value={emptyRange} />
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<DateRange>({
      startDate: '2026-02-01',
      endDate: '2026-02-14'
    });
    return <div style={{
      width: '380px'
    }}>\r
                <DateRangePicker value={range} onChange={setRange} label="Event Window" clearable />\r
            </div>;
  }
}`,...R.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '380px'
  }}>\r
            {(['default', 'filled', 'outline', 'ghost'] as const).map(v => {
      const [range, setRange] = useState<DateRange>(emptyRange);
      return <div key={v}>\r
                        <p style={{
          fontSize: '0.75rem',
          marginBottom: '6px',
          fontWeight: 600,
          textTransform: 'capitalize',
          opacity: 0.6
        }}>{v}</p>\r
                        <DateRangePicker variant={v} value={range} onChange={setRange} />\r
                    </div>;
    })}\r
        </div>
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '380px'
  }}>\r
            {(['sm', 'md', 'lg'] as const).map(s => {
      const [range, setRange] = useState<DateRange>(emptyRange);
      return <div key={s}>\r
                        <p style={{
          fontSize: '0.75rem',
          marginBottom: '6px',
          fontWeight: 600,
          textTransform: 'uppercase',
          opacity: 0.6
        }}>{s}</p>\r
                        <DateRangePicker size={s} value={range} onChange={setRange} placeholder={\`Size \${s.toUpperCase()} range\`} />\r
                    </div>;
    })}\r
        </div>
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<DateRange>(emptyRange);
    return <div style={{
      width: '380px'
    }}>\r
                <DateRangePicker label="Analytics Period" helperText="Click a preset or pick dates manually" value={range} onChange={setRange} presets={PRESETS} clearable />\r
            </div>;
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<DateRange>(emptyRange);
    return <div style={{
      width: '380px'
    }}>\r
                <DateRangePicker label="Booking Window" helperText="Only Feb 2026 is available" value={range} onChange={setRange} minDate="2026-02-01" maxDate="2026-02-28" clearable />\r
            </div>;
  }
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<DateRange>(emptyRange);
    return <div style={{
      width: '380px'
    }}>\r
                <DateRangePicker label="Report Dates" error="Please select a valid date range" value={range} onChange={setRange} />\r
            </div>;
  }
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '380px'
  }}>\r
            <DateRangePicker label="Locked Period" value={{
      startDate: '2026-01-01',
      endDate: '2026-01-31'
    }} onChange={() => {}} disabled />\r
        </div>
}`,...z.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [r, setR] = useState<DateRange>(emptyRange);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '380px'
    }}>\r
                <div>\r
                    <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          textTransform: 'uppercase'
        }}>\r
                        No Outer Border (Shadow Only)\r
                    </p>\r
                    <DateRangePicker showBorder={false} value={r} onChange={setR} clearable />\r
                </div>\r
                <div>\r
                    <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          textTransform: 'uppercase'
        }}>\r
                        No Footer\r
                    </p>\r
                    <DateRangePicker showFooter={false} value={r} onChange={setR} clearable />\r
                </div>\r
                <div>\r
                    <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          textTransform: 'uppercase'
        }}>\r
                        Card Customization\r
                    </p>\r
                    <DateRangePicker cardBorderRadius="40px" cardBorderColor="#2563eb" cardBorderWidth="3px" value={r} onChange={setR} clearable />\r
                </div>\r
            </div>;
  }
}`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <Wrapper {...args} value={emptyRange} />,
  args: {
    label: 'Date Range',
    placeholder: 'Select a date range',
    variant: 'default',
    size: 'md',
    clearable: true,
    helperText: 'Click to start and select end date'
  }
}`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '380px'
  }}>\r
            <div>\r
                <p style={{
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        opacity: 0.5,
        marginBottom: '6px'
      }}>Label in Popup Only</p>\r
                {(() => {
        const [r, setR] = useState<DateRange>(emptyRange);
        return <DateRangePicker innerLabel="Filter Range" value={r} onChange={setR} clearable placeholder="Open to see inner label" />;
      })()}\r
            </div>\r
\r
            <div>\r
                <p style={{
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        opacity: 0.5,
        marginBottom: '8px'
      }}>Sizes with innerLabel</p>\r
                <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>\r
                    {(['sm', 'md', 'lg'] as const).map(s => {
          const [r, setR] = useState<DateRange>(emptyRange);
          return <DateRangePicker key={s} size={s} innerLabel={\`Range \${s.toUpperCase()}\`} value={r} onChange={setR} placeholder={\`Size \${s.toUpperCase()} range\`} />;
        })}\r
                </div>\r
            </div>\r
\r
            <div>\r
                <p style={{
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        opacity: 0.5,
        marginBottom: '6px'
      }}>With presets + innerLabel</p>\r
                {(() => {
        const [r, setR] = useState<DateRange>(emptyRange);
        return <DateRangePicker innerLabel="Analytics Period" value={r} onChange={setR} clearable presets={PRESETS} />;
      })()}\r
            </div>\r
        </div>
}`,...P.parameters?.docs?.source}}};const Me=["Default","Preselected","Variants","Sizes","WithPresets","WithMinMaxDates","WithLabelAndError","Disabled","BorderAndFooterManagement","Playground","InnerLabel"];export{B as BorderAndFooterManagement,S as Default,z as Disabled,P as InnerLabel,W as Playground,R as Preselected,C as Sizes,j as Variants,k as WithLabelAndError,T as WithMinMaxDates,w as WithPresets,Me as __namedExportsOrder,Ne as default};
