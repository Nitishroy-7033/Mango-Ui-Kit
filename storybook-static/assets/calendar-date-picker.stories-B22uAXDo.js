import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-QywSF6W6.js";import{c as D}from"./cn-BQHNewu7.js";import{C as F}from"./calendar-KaGezM1O.js";import{X as Q}from"./x-DSESRrVS.js";import{C as be}from"./chevron-left-Tn_oAlSe.js";import{C as ye}from"./chevron-right-B7G5iz4Z.js";import{C as Se}from"./clock-CTDwGVGZ.js";import{S as Ce}from"./star-D2Jm-pGs.js";import{Z as Te}from"./zap-DA5sd4l-.js";import{c as Ye}from"./createLucideIcon-B-6-c5fd.js";import"./preload-helper-PPVm8Dsz.js";const Me=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],we=Ye("bookmark",Me),ee=["January","February","March","April","May","June","July","August","September","October","November","December"],R=r=>{const t=r.getFullYear(),a=String(r.getMonth()+1).padStart(2,"0"),d=String(r.getDate()).padStart(2,"0");return`${t}-${a}-${d}`},je=(r,t)=>{const[a,d,s]=r.split("-"),i=new Date(parseInt(a),parseInt(d)-1,parseInt(s)),m=ee[i.getMonth()].slice(0,3);switch(t){case"DD/MM/YYYY":return`${s}/${d}/${a}`;case"MMM DD, YYYY":return`${m} ${s}, ${a}`;default:return r}},ke=(r,t)=>[{label:"Today",icon:e.jsx(F,{size:13}),onClick:()=>{r(R(new Date)),t(!1)}},{label:"Yesterday",icon:e.jsx(F,{size:13}),onClick:()=>{const a=new Date;a.setDate(a.getDate()-1),r(R(a)),t(!1)}},{label:"More",icon:e.jsx(F,{size:13}),onClick:()=>{}}],o=({value:r,onChange:t,placeholder:a="Select date",className:d="",variant:s="default",size:i="md",disabled:m=!1,label:_,innerLabel:V,helperText:H,error:f,minDate:U,maxDate:K,disabledDates:te=[],displayFormat:ae="YYYY-MM-DD",clearable:ne=!1,dayBorderRadius:se="8px",cardBorderRadius:oe="18px",cardBorderColor:le,cardBorderWidth:ie="1.5px",footerActions:de,showBorder:J=!0,showFooter:ce=!0})=>{const[z,x]=l.useState(!1),[u,pe]=l.useState(r?new Date(r+"T00:00:00"):new Date),P=l.useRef(null),ue=(n,c)=>new Date(n,c+1,0).getDate(),me=(n,c)=>new Date(n,c,1).getDay(),Z=n=>!!(U&&n<U||K&&n>K||te.includes(n)),he=n=>{const c=u.getFullYear(),I=u.getMonth(),W=new Date(c,I,n),h=R(W);Z(h)||(t(h),x(!1))},G=n=>{pe(new Date(u.getFullYear(),u.getMonth()+n,1))},xe=n=>{n.stopPropagation(),t("")};l.useEffect(()=>{const n=c=>{P.current&&!P.current.contains(c.target)&&x(!1)};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[]);const De=R(new Date),fe=()=>{const n=u.getFullYear(),c=u.getMonth(),I=ue(n,c),W=me(n,c),h=[];for(let p=0;p<W;p++)h.push(e.jsx("div",{className:"cdp-day-empty"},`e${p}`));for(let p=1;p<=I;p++){const $=`${n}-${String(c+1).padStart(2,"0")}-${String(p).padStart(2,"0")}`,X=r===$,ve=De===$,q=Z($);h.push(e.jsx("button",{type:"button",className:D("cdp-day",X&&"selected",ve&&!X&&"today",q&&"disabled"),style:{borderRadius:se},onClick:()=>!q&&he(p),disabled:q,children:p},p))}return h},ge=de??ke(t,x);return e.jsxs("div",{className:D("cdp-root",d),ref:P,children:[_&&e.jsx("label",{className:D("picker-label",`picker-label-${i}`),children:_}),e.jsxs("div",{className:D("cdp-trigger",`cdp-trigger-${s}`,`cdp-trigger-${i}`,z&&"active",f&&"has-error",m&&"is-disabled"),onClick:()=>!m&&x(!z),children:[e.jsx(F,{className:"cdp-trigger-icon",size:16}),e.jsx("span",{className:D("cdp-trigger-text",!r&&"cdp-trigger-placeholder"),children:r?je(r,ae):a}),ne&&r&&!m&&e.jsx("span",{className:"cdp-clear-btn",onClick:xe,children:e.jsx(Q,{size:14})})]}),f&&e.jsx("p",{className:"picker-error",children:f}),!f&&H&&e.jsx("p",{className:"picker-helper",children:H}),z&&!m&&e.jsxs("div",{className:"cdp-card animate-scale-in",style:{borderRadius:oe,borderColor:le??void 0,borderWidth:J?ie:"0px",borderStyle:"solid",boxShadow:J?void 0:"0 10px 30px rgba(0,0,0,0.1)"},children:[V&&e.jsx("div",{className:"cdp-card-header",children:e.jsx("span",{className:"cdp-card-title",children:V})}),e.jsxs("div",{className:"cdp-nav",children:[e.jsx("button",{type:"button",className:"cdp-nav-btn",onClick:()=>G(-1),children:e.jsx(be,{size:16})}),e.jsxs("span",{className:"cdp-month-label",children:[ee[u.getMonth()]," ",u.getFullYear()]}),e.jsx("button",{type:"button",className:"cdp-nav-btn",onClick:()=>G(1),children:e.jsx(ye,{size:16})})]}),e.jsx("div",{className:"cdp-weekdays",children:["SU","MO","TU","WE","TH","FR","SA"].map(n=>e.jsx("div",{className:"cdp-weekday",children:n},n))}),e.jsx("div",{className:"cdp-grid",children:fe()}),ce&&e.jsxs("div",{className:"cdp-footer",children:[ge.map((n,c)=>e.jsxs("button",{type:"button",className:"cdp-quick-btn",onClick:()=>n.onClick(r??""),children:[n.icon,n.label]},c)),e.jsx("button",{type:"button",className:"cdp-quick-close",onClick:()=>x(!1),children:e.jsx(Q,{size:14})})]})]})]})};o.displayName="CalendarDatePicker";o.__docgenInfo={description:"",methods:[],displayName:"CalendarDatePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select date'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"Visual style variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the trigger input",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the picker",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label shown above the trigger"},innerLabel:{required:!1,tsType:{name:"string"},description:'Heading shown inside the calendar card header.\r\nPass `undefined` or omit to hide the header entirely.\r\ne.g. "DATE-SELECTOR"'},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the trigger"},error:{required:!1,tsType:{name:"string"},description:"Error state with message"},minDate:{required:!1,tsType:{name:"string"},description:"Minimum selectable date (YYYY-MM-DD)"},maxDate:{required:!1,tsType:{name:"string"},description:"Maximum selectable date (YYYY-MM-DD)"},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of specific disabled dates (YYYY-MM-DD)",defaultValue:{value:"[]",computed:!1}},displayFormat:{required:!1,tsType:{name:"union",raw:"'YYYY-MM-DD' | 'DD/MM/YYYY' | 'MMM DD, YYYY'",elements:[{name:"literal",value:"'YYYY-MM-DD'"},{name:"literal",value:"'DD/MM/YYYY'"},{name:"literal",value:"'MMM DD, YYYY'"}]},description:"Display format for selected value",defaultValue:{value:"'YYYY-MM-DD'",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"Show a clear (×) button when a date is selected",defaultValue:{value:"false",computed:!1}},dayBorderRadius:{required:!1,tsType:{name:"string"},description:`Border-radius of each day cell.\r
Use '50%' for full circle, '8px' for rounded square, etc.\r
Defaults to '8px'.`,defaultValue:{value:"'8px'",computed:!1}},cardBorderRadius:{required:!1,tsType:{name:"string"},description:`Border-radius of the calendar card popup.\r
Defaults to '18px'.`,defaultValue:{value:"'18px'",computed:!1}},cardBorderColor:{required:!1,tsType:{name:"string"},description:`Border color of the calendar card popup.\r
Accepts any valid CSS color — hex, rgb, var(...), etc.\r
Defaults to the theme primary color.`},cardBorderWidth:{required:!1,tsType:{name:"string"},description:`Border width of the calendar card popup.\r
e.g. '1px', '2px', '0' to remove.\r
Defaults to '1.5px'.`,defaultValue:{value:"'1.5px'",computed:!1}},footerActions:{required:!1,tsType:{name:"Array",elements:[{name:"DatePickerFooterAction"}],raw:"DatePickerFooterAction[]"},description:`Configurable footer action buttons.\r
When provided, these replace the default Today/Yesterday/More buttons.`},showBorder:{required:!1,tsType:{name:"boolean"},description:`Whether to show the outer border of the calendar card.\r
Defaults to true.`,defaultValue:{value:"true",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:`Whether to show the footer with quick action buttons.\r
Defaults to true.`,defaultValue:{value:"true",computed:!1}}}};const $e={title:"Components/CalendarDatePicker",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","filled","outline","ghost"]},size:{control:"select",options:["sm","md","lg"]},displayFormat:{control:"select",options:["YYYY-MM-DD","DD/MM/YYYY","MMM DD, YYYY"]},disabled:{control:"boolean"},clearable:{control:"boolean"},dayBorderRadius:{control:"text"},innerLabel:{control:"text"},cardBorderRadius:{control:"text"},cardBorderColor:{control:"color"},cardBorderWidth:{control:"text"},showBorder:{control:"boolean"},showFooter:{control:"boolean"}}},re=r=>{const[t,a]=l.useState(r.value??"");return e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{...r,value:t,onChange:a})})},g={render:r=>e.jsx(re,{...r})},v={render:()=>{const[r,t]=l.useState("");return e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{innerLabel:"DATE-SELECTOR",value:r,onChange:t,clearable:!0})})}},b={render:()=>{const[r,t]=l.useState("");return e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{placeholder:"No header — innerLabel omitted",value:r,onChange:t,clearable:!0})})}},y={render:()=>{const[r,t]=l.useState("");return e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{innerLabel:"🗓 PICK APPOINTMENT",value:r,onChange:t,clearable:!0})})}},S={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"320px"},children:[{label:"Rounded Square (default) — 8px",radius:"8px"},{label:"Large Rounded — 14px",radius:"14px"},{label:"Full Circle — 50%",radius:"50%"},{label:"Sharp Square — 2px",radius:"2px"}].map(({label:r,radius:t})=>{const[a,d]=l.useState("2026-02-12");return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",letterSpacing:"0.05em",textTransform:"uppercase"},children:r}),e.jsx(o,{innerLabel:"DATE-SELECTOR",dayBorderRadius:t,value:a,onChange:d,clearable:!0})]},t)})})},C={render:()=>{const[r,t]=l.useState("");return e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{innerLabel:"DATE-SELECTOR",value:r,onChange:t,clearable:!0})})}},T={args:{innerLabel:"sdfdsfsdfsd"},render:()=>{const[r,t]=l.useState(""),a=s=>`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`,d=[{label:"Now",icon:e.jsx(Se,{size:13}),onClick:s=>t(a(new Date))},{label:"Fav",icon:e.jsx(Ce,{size:13}),onClick:s=>t("2026-12-25")},{label:"Sprint End",icon:e.jsx(Te,{size:13}),onClick:s=>t("2026-03-31")},{label:"Save",icon:e.jsx(we,{size:13}),onClick:s=>alert(`Saved: ${s}`)}];return e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{innerLabel:"CUSTOM ACTIONS",value:r,onChange:t,footerActions:d,clearable:!0})})}},Y={args:{cardBorderColor:"#f34343"},render:()=>{const[r,t]=l.useState(""),a=s=>`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`,d=[{label:"Today",onClick:s=>{t(a(new Date))}},{label:"Next Week",onClick:s=>{const i=new Date;i.setDate(i.getDate()+7),t(a(i))}},{label:"Next Month",onClick:s=>{const i=new Date;i.setMonth(i.getMonth()+1),t(a(i))}}];return e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{innerLabel:"SHORTCUTS",value:r,onChange:t,footerActions:d,clearable:!0})})}},M={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:["default","filled","outline","ghost"].map(r=>{const[t,a]=l.useState("2026-12-25");return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"capitalize"},children:r}),e.jsx(o,{variant:r,innerLabel:"DATE-SELECTOR",value:t,onChange:a,clearable:!0})]},r)})})},w={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:["sm","md","lg"].map(r=>{const[t,a]=l.useState("");return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:r}),e.jsx(o,{size:r,innerLabel:"DATE-SELECTOR",value:t,onChange:a,placeholder:`Size ${r.toUpperCase()}`})]},r)})})},j={render:()=>{const[r,t]=l.useState("");return e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{label:"Date of Birth",innerLabel:"DATE-SELECTOR",helperText:"Select your birth date",value:r,onChange:t})})}},k={render:()=>{const[r,t]=l.useState("");return e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{label:"Appointment Date",error:"Please select a valid date",innerLabel:"DATE-SELECTOR",value:r,onChange:t})})}},E={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"320px"},children:[{label:"Default Card",radius:"18px",color:void 0,width:"1.5px"},{label:"Sharp Card + Thick Border",radius:"4px",color:"#000",width:"4px"},{label:"Pill Card + Thin Border",radius:"40px",color:"#2563eb",width:"1px"},{label:"No Border",radius:"12px",color:"transparent",width:"0px"}].map(({label:r,radius:t,color:a,width:d})=>{const[s,i]=l.useState("");return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",letterSpacing:"0.05em",textTransform:"uppercase"},children:r}),e.jsx(o,{innerLabel:"CUSTOM CARD",cardBorderRadius:t,cardBorderColor:a,cardBorderWidth:d,value:s,onChange:i,clearable:!0})]},r)})})},L={render:()=>{const[r,t]=l.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"320px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"No Outer Border (Shadow Only)"}),e.jsx(o,{innerLabel:"BORDERLESS",showBorder:!1,value:r,onChange:t,clearable:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"No Footer"}),e.jsx(o,{innerLabel:"HIDDEN FOOTER",showFooter:!1,value:r,onChange:t,clearable:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"No Border & No Footer"}),e.jsx(o,{innerLabel:"MINIMALIST",showBorder:!1,showFooter:!1,value:r,onChange:t,clearable:!0})]})]})}},B={render:()=>e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{value:"2026-06-15",onChange:()=>{},disabled:!0,label:"Locked Date",innerLabel:"DATE-SELECTOR"})})},N={render:()=>{const[r,t]=l.useState("");return e.jsx("div",{style:{width:"320px"},children:e.jsx(o,{innerLabel:"BOOKING WINDOW",helperText:"Only Feb 2026 is selectable",value:r,onChange:t,minDate:"2026-02-01",maxDate:"2026-02-28",clearable:!0})})}},O={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:["YYYY-MM-DD","DD/MM/YYYY","MMM DD, YYYY"].map(r=>{const[t,a]=l.useState("2026-12-25");return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px"},children:r}),e.jsx(o,{value:t,onChange:a,displayFormat:r})]},r)})})},A={render:r=>e.jsx(re,{...r}),args:{label:"Pick a Date",innerLabel:"DATE-SELECTOR",placeholder:"Select date...",variant:"default",size:"md",clearable:!0,dayBorderRadius:"8px",displayFormat:"MMM DD, YYYY",helperText:"Fully interactive playground"}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Wrapper {...args} />
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [d, setD] = useState('');
    return <div style={{
      width: '320px'
    }}>\r
                <CalendarDatePicker innerLabel="DATE-SELECTOR" value={d} onChange={setD} clearable />\r
            </div>;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [d, setD] = useState('');
    return <div style={{
      width: '320px'
    }}>\r
                <CalendarDatePicker placeholder="No header — innerLabel omitted" value={d} onChange={setD} clearable />\r
            </div>;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [d, setD] = useState('');
    return <div style={{
      width: '320px'
    }}>\r
                <CalendarDatePicker innerLabel="🗓 PICK APPOINTMENT" value={d} onChange={setD} clearable />\r
            </div>;
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '320px'
  }}>\r
            {[{
      label: 'Rounded Square (default) — 8px',
      radius: '8px'
    }, {
      label: 'Large Rounded — 14px',
      radius: '14px'
    }, {
      label: 'Full Circle — 50%',
      radius: '50%'
    }, {
      label: 'Sharp Square — 2px',
      radius: '2px'
    }].map(({
      label,
      radius
    }) => {
      const [d, setD] = useState('2026-02-12');
      return <div key={radius}>\r
                        <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>\r
                            {label}\r
                        </p>\r
                        <CalendarDatePicker innerLabel="DATE-SELECTOR" dayBorderRadius={radius} value={d} onChange={setD} clearable />\r
                    </div>;
    })}\r
        </div>
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [d, setD] = useState('');
    return <div style={{
      width: '320px'
    }}>\r
                <CalendarDatePicker innerLabel="DATE-SELECTOR" value={d} onChange={setD} clearable />\r
            </div>;
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    innerLabel: "sdfdsfsdfsd"
  },
  render: () => {
    const [d, setD] = useState('');
    const toISO = (date: Date) => \`\${date.getFullYear()}-\${String(date.getMonth() + 1).padStart(2, '0')}-\${String(date.getDate()).padStart(2, '0')}\`;
    const customActions: DatePickerFooterAction[] = [{
      label: 'Now',
      icon: <Clock size={13} />,
      onClick: _v => setD(toISO(new Date()))
    }, {
      label: 'Fav',
      icon: <Star size={13} />,
      onClick: _v => setD('2026-12-25')
    }, {
      label: 'Sprint End',
      icon: <Zap size={13} />,
      onClick: _v => setD('2026-03-31')
    }, {
      label: 'Save',
      icon: <Bookmark size={13} />,
      onClick: v => alert(\`Saved: \${v}\`)
    }];
    return <div style={{
      width: '320px'
    }}>\r
                <CalendarDatePicker innerLabel="CUSTOM ACTIONS" value={d} onChange={setD} footerActions={customActions} clearable />\r
            </div>;
  }
}`,...T.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    cardBorderColor: "#f34343"
  },
  render: () => {
    const [d, setD] = useState('');
    const toISO = (date: Date) => \`\${date.getFullYear()}-\${String(date.getMonth() + 1).padStart(2, '0')}-\${String(date.getDate()).padStart(2, '0')}\`;
    const actions: DatePickerFooterAction[] = [{
      label: 'Today',
      onClick: _v => {
        const n = new Date();
        setD(toISO(n));
      }
    }, {
      label: 'Next Week',
      onClick: _v => {
        const d = new Date();
        d.setDate(d.getDate() + 7);
        setD(toISO(d));
      }
    }, {
      label: 'Next Month',
      onClick: _v => {
        const d = new Date();
        d.setMonth(d.getMonth() + 1);
        setD(toISO(d));
      }
    }];
    return <div style={{
      width: '320px'
    }}>\r
                <CalendarDatePicker innerLabel="SHORTCUTS" value={d} onChange={setD} footerActions={actions} clearable />\r
            </div>;
  }
}`,...Y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
            {(['default', 'filled', 'outline', 'ghost'] as const).map(v => {
      const [d, setD] = useState('2026-12-25');
      return <div key={v}>\r
                        <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          textTransform: 'capitalize'
        }}>{v}</p>\r
                        <CalendarDatePicker variant={v} innerLabel="DATE-SELECTOR" value={d} onChange={setD} clearable />\r
                    </div>;
    })}\r
        </div>
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
            {(['sm', 'md', 'lg'] as const).map(s => {
      const [d, setD] = useState('');
      return <div key={s}>\r
                        <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          textTransform: 'uppercase'
        }}>{s}</p>\r
                        <CalendarDatePicker size={s} innerLabel="DATE-SELECTOR" value={d} onChange={setD} placeholder={\`Size \${s.toUpperCase()}\`} />\r
                    </div>;
    })}\r
        </div>
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [d, setD] = useState('');
    return <div style={{
      width: '320px'
    }}>\r
                <CalendarDatePicker label="Date of Birth" innerLabel="DATE-SELECTOR" helperText="Select your birth date" value={d} onChange={setD} />\r
            </div>;
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [d, setD] = useState('');
    return <div style={{
      width: '320px'
    }}>\r
                <CalendarDatePicker label="Appointment Date" error="Please select a valid date" innerLabel="DATE-SELECTOR" value={d} onChange={setD} />\r
            </div>;
  }
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '320px'
  }}>\r
            {[{
      label: 'Default Card',
      radius: '18px',
      color: undefined,
      width: '1.5px'
    }, {
      label: 'Sharp Card + Thick Border',
      radius: '4px',
      color: '#000',
      width: '4px'
    }, {
      label: 'Pill Card + Thin Border',
      radius: '40px',
      color: '#2563eb',
      width: '1px'
    }, {
      label: 'No Border',
      radius: '12px',
      color: 'transparent',
      width: '0px'
    }].map(({
      label,
      radius,
      color,
      width
    }) => {
      const [d, setD] = useState('');
      return <div key={label}>\r
                        <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>\r
                            {label}\r
                        </p>\r
                        <CalendarDatePicker innerLabel="CUSTOM CARD" cardBorderRadius={radius} cardBorderColor={color} cardBorderWidth={width} value={d} onChange={setD} clearable />\r
                    </div>;
    })}\r
        </div>
}`,...E.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [d, setD] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '320px'
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
                    <CalendarDatePicker innerLabel="BORDERLESS" showBorder={false} value={d} onChange={setD} clearable />\r
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
                    <CalendarDatePicker innerLabel="HIDDEN FOOTER" showFooter={false} value={d} onChange={setD} clearable />\r
                </div>\r
                <div>\r
                    <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          textTransform: 'uppercase'
        }}>\r
                        No Border & No Footer\r
                    </p>\r
                    <CalendarDatePicker innerLabel="MINIMALIST" showBorder={false} showFooter={false} value={d} onChange={setD} clearable />\r
                </div>\r
            </div>;
  }
}`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>\r
            <CalendarDatePicker value="2026-06-15" onChange={() => {}} disabled label="Locked Date" innerLabel="DATE-SELECTOR" />\r
        </div>
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [d, setD] = useState('');
    return <div style={{
      width: '320px'
    }}>\r
                <CalendarDatePicker innerLabel="BOOKING WINDOW" helperText="Only Feb 2026 is selectable" value={d} onChange={setD} minDate="2026-02-01" maxDate="2026-02-28" clearable />\r
            </div>;
  }
}`,...N.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
            {(['YYYY-MM-DD', 'DD/MM/YYYY', 'MMM DD, YYYY'] as const).map(fmt => {
      const [d, setD] = useState('2026-12-25');
      return <div key={fmt}>\r
                        <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px'
        }}>{fmt}</p>\r
                        <CalendarDatePicker value={d} onChange={setD} displayFormat={fmt} />\r
                    </div>;
    })}\r
        </div>
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <Wrapper {...args} />,
  args: {
    label: 'Pick a Date',
    innerLabel: 'DATE-SELECTOR',
    placeholder: 'Select date...',
    variant: 'default',
    size: 'md',
    clearable: true,
    dayBorderRadius: '8px',
    displayFormat: 'MMM DD, YYYY',
    helperText: 'Fully interactive playground'
  }
}`,...A.parameters?.docs?.source}}};const qe=["Default","WithHeaderLabel","NoHeader","CustomInnerLabel","DayBorderRadius","DefaultFooterActions","CustomFooterActions","FooterActionsNoIcons","Variants","Sizes","WithLabelAndHelper","ErrorState","CardCustomization","BorderAndFooterManagement","Disabled","MinMaxDates","DisplayFormats","Playground"];export{L as BorderAndFooterManagement,E as CardCustomization,T as CustomFooterActions,y as CustomInnerLabel,S as DayBorderRadius,g as Default,C as DefaultFooterActions,B as Disabled,O as DisplayFormats,k as ErrorState,Y as FooterActionsNoIcons,N as MinMaxDates,b as NoHeader,A as Playground,w as Sizes,M as Variants,v as WithHeaderLabel,j as WithLabelAndHelper,qe as __namedExportsOrder,$e as default};
