import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-QywSF6W6.js";import{c as h}from"./cn-BQHNewu7.js";import{C as he}from"./clock-CTDwGVGZ.js";import{X as ue}from"./x-DSESRrVS.js";import{c as je}from"./createLucideIcon-B-6-c5fd.js";import{C as we}from"./chevron-down-BNiyiuGD.js";import"./preload-helper-PPVm8Dsz.js";const Ce=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ke=je("chevron-up",Ce),Me=(t,s,c)=>[{label:"Now",icon:e.jsx(he,{size:13}),onClick:()=>{const T=new Date,w=T.getHours(),M=T.getMinutes(),b=w>=12?"PM":"AM",P=w%12||12,C=`${String(c?P:w).padStart(2,"0")}:${String(M).padStart(2,"0")}`;t(c?`${C} ${b}`:C),s(!1)}}],i=({value:t,onChange:s,placeholder:c="Select time",className:T="",variant:w="default",size:M="md",disabled:b=!1,label:P,innerLabel:C,helperText:re,error:L,use12Hours:m=!1,showSeconds:ne=!1,minuteStep:N=1,selectionMode:se="digital",showBorder:ae=!0,showFooter:xe=!0,cardBorderRadius:fe="20px",cardBorderColor:ge,cardBorderWidth:ve="1.5px",footerActions:ye})=>{const[X,z]=a.useState(!1),K=a.useRef(null),G=a.useRef(null),oe=r=>{if(!r)return{h:12,m:0,s:0,period:"AM"};const n=r.toUpperCase(),l=n.includes("PM"),o=n.includes("AM"),g=r.split(" ")[0].split(":");let v=parseInt(g[0]||"12");const u=parseInt(g[1]||"0"),Z=parseInt(g[2]||"0");if(m)return{h:v,m:u,s:Z,period:l?"PM":"AM"};{let k=v;return l&&v<12&&(k+=12),o&&v===12&&(k=0),{h:k,m:u,s:Z,period:"AM"}}},A=oe(t),[x,J]=a.useState(A.h),[f,Q]=a.useState(A.m),[y,ie]=a.useState(A.s),[p,le]=a.useState(A.period);a.useEffect(()=>{if(t){const{h:r,m:n,s:l,period:o}=oe(t);J(r),Q(n),ie(l),le(o)}},[t,m]);const Se=(r,n,l,o)=>{const S=String(r).padStart(2,"0"),g=String(n).padStart(2,"0"),v=`${S}:${g}`,u=ne&&se==="digital"?`${v}:${String(l).padStart(2,"0")}`:v;return m?`${u} ${o}`:u},j=(r,n,l,o)=>{const S=Se(r,n,l,o);s(S)},ce=r=>{const n=m?12:23,l=m?1:0;let o=x+r;o>n?o=l:o<l&&(o=n),J(o),j(o,f,y,p)},de=r=>{let n=f+r*N;n>=60?n=0:n<0&&(n=60-N),Q(n),j(x,n,y,p)},pe=r=>{let n=y+r;n>=60?n=0:n<0&&(n=59),ie(n),j(x,f,n,p)},B=()=>{const r=p==="AM"?"PM":"AM";le(r),j(x,f,y,r)},Te=r=>{r.stopPropagation(),s("")};a.useEffect(()=>{const r=n=>{K.current&&!K.current.contains(n.target)&&z(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]);const me=r=>{if(!G.current)return;const n=G.current.getBoundingClientRect(),l=n.left+n.width/2,o=n.top+n.height/2,S="touches"in r?r.touches[0].clientX:r.clientX,g="touches"in r?r.touches[0].clientY:r.clientY;let u=Math.atan2(g-o,S-l)*180/Math.PI+90;if(u<0&&(u+=360),Math.hypot(S-l,g-o)<70){let d=Math.round(u/30);d===0&&(d=12),!m&&p==="PM"&&d<12&&(d+=12),!m&&p==="AM"&&d===12&&(d=0),J(d),j(d,f,y,p)}else{let d=Math.round(u/6)%60;d=Math.round(d/N)*N,d===60&&(d=0),Q(d),j(x,d,y,p)}},be=ye??Me(s,z,m);return e.jsxs("div",{className:h("time-picker-root",T),ref:K,children:[P&&e.jsx("label",{className:h("picker-label",`picker-label-${M}`),children:P}),e.jsxs("div",{className:h("time-input-trigger",`time-trigger-${w}`,`time-trigger-${M}`,X&&"active",L&&"has-error",b&&"is-disabled"),onClick:()=>!b&&z(!X),children:[e.jsx(he,{className:"trigger-icon",size:16}),e.jsx("span",{className:h("trigger-text",!t&&"trigger-placeholder"),children:t||c}),t&&!b&&e.jsx("span",{className:"clear-btn",onClick:Te,children:e.jsx(ue,{size:14})})]}),L&&e.jsx("p",{className:"picker-error",children:L}),!L&&re&&e.jsx("p",{className:"picker-helper",children:re}),X&&!b&&e.jsxs("div",{className:"time-dropdown animate-scale-in",style:{borderRadius:fe,borderColor:ge,borderWidth:ae?ve:"0px",borderStyle:"solid",boxShadow:ae?void 0:"0 10px 30px rgba(0,0,0,0.1)"},children:[C&&e.jsx("div",{className:"time-card-header",children:e.jsx("span",{className:"time-card-title",children:C})}),se==="analog"?e.jsxs("div",{className:"analog-clock-container",children:[e.jsxs("div",{className:"analog-clock-face",ref:G,onMouseDown:r=>{me(r);const n=o=>me(o),l=()=>{window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",l)};window.addEventListener("mousemove",n),window.addEventListener("mouseup",l)},children:[e.jsx("div",{className:"clock-center-dot"}),e.jsx("div",{className:"clock-hand clock-hand-hour",style:{transform:`rotate(${x%12*30+f/2}deg)`}}),e.jsx("div",{className:"clock-hand clock-hand-minute",style:{transform:`rotate(${f*6}deg)`}}),[1,2,3,4,5,6,7,8,9,10,11,12].map(r=>{const n=(r*30-90)*(Math.PI/180),l=50+40*Math.cos(n),o=50+40*Math.sin(n);return e.jsx("div",{className:h("clock-number",x%12===r%12&&"active"),style:{left:`${l}%`,top:`${o}%`},children:r},r)})]}),m&&e.jsxs("div",{className:"time-period-column",style:{flexDirection:"row"},children:[e.jsx("button",{className:h("period-btn",p==="AM"&&"active"),onClick:B,children:"AM"}),e.jsx("button",{className:h("period-btn",p==="PM"&&"active"),onClick:B,children:"PM"})]})]}):e.jsxs("div",{className:"time-selector-columns",children:[e.jsx(ee,{val:x,onUp:()=>ce(1),onDown:()=>ce(-1),label:"HOUR"}),e.jsx("div",{className:"time-separator",children:":"}),e.jsx(ee,{val:f,onUp:()=>de(1),onDown:()=>de(-1),label:"MIN"}),ne&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"time-separator",children:":"}),e.jsx(ee,{val:y,onUp:()=>pe(1),onDown:()=>pe(-1),label:"SEC"})]}),m&&e.jsxs("div",{className:"time-period-column",children:[e.jsx("button",{className:h("period-btn",p==="AM"&&"active"),onClick:B,children:"AM"}),e.jsx("button",{className:h("period-btn",p==="PM"&&"active"),onClick:B,children:"PM"})]})]}),xe&&e.jsxs("div",{className:"time-footer",children:[be.map((r,n)=>e.jsxs("button",{type:"button",className:"time-quick-btn",onClick:()=>r.onClick(t||""),children:[r.icon,r.label]},n)),e.jsx("button",{type:"button",className:"time-close-btn",onClick:()=>z(!1),children:e.jsx(ue,{size:14})})]})]})]})},ee=({val:t,onUp:s,onDown:c,label:T})=>e.jsxs("div",{className:"time-column",children:[e.jsx("button",{className:"time-nav-btn",onClick:s,children:e.jsx(ke,{size:16})}),e.jsx("div",{className:"time-value",children:String(t).padStart(2,"0")}),e.jsx("button",{className:"time-nav-btn",onClick:c,children:e.jsx(we,{size:18})}),e.jsx("span",{className:"time-label",children:T})]});i.displayName="TimePicker";i.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select time'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"Visual style variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the trigger",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the picker",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label shown above the trigger"},innerLabel:{required:!1,tsType:{name:"string"},description:"Optional small uppercase label rendered inside the trigger (e.g. 'SELECT TIME')"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the trigger"},error:{required:!1,tsType:{name:"string"},description:"Error state with message"},use12Hours:{required:!1,tsType:{name:"boolean"},description:"Use 12-hour AM/PM format",defaultValue:{value:"false",computed:!1}},showSeconds:{required:!1,tsType:{name:"boolean"},description:"Show seconds column (only for digital mode)",defaultValue:{value:"false",computed:!1}},minuteStep:{required:!1,tsType:{name:"number"},description:"Step in minutes (e.g. 5, 10, 15, 30)",defaultValue:{value:"1",computed:!1}},selectionMode:{required:!1,tsType:{name:"union",raw:"'digital' | 'analog'",elements:[{name:"literal",value:"'digital'"},{name:"literal",value:"'analog'"}]},description:`How to select time.\r
'digital' (scroll/nav) or 'analog' (clock face).\r
Defaults to 'digital'.`,defaultValue:{value:"'digital'",computed:!1}},showBorder:{required:!1,tsType:{name:"boolean"},description:"Whether to show the outer border of the dropdown card",defaultValue:{value:"true",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:"Whether to show the footer buttons",defaultValue:{value:"true",computed:!1}},cardBorderRadius:{required:!1,tsType:{name:"string"},description:"Border-radius of the dropdown card",defaultValue:{value:"'20px'",computed:!1}},cardBorderColor:{required:!1,tsType:{name:"string"},description:"Border color of the dropdown card"},cardBorderWidth:{required:!1,tsType:{name:"string"},description:"Border width of the dropdown card",defaultValue:{value:"'1.5px'",computed:!1}},footerActions:{required:!1,tsType:{name:"Array",elements:[{name:"TimePickerFooterAction"}],raw:"TimePickerFooterAction[]"},description:"Custom footer actions"}}};const Oe={title:"Components/TimePicker",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","filled","outline","ghost"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},use12Hours:{control:"boolean"},showSeconds:{control:"boolean"},minuteStep:{control:"select",options:[1,5,10,15,30]},selectionMode:{control:"select",options:["digital","analog"]},showBorder:{control:"boolean"},showFooter:{control:"boolean"},cardBorderRadius:{control:"text"},cardBorderColor:{control:"color"},cardBorderWidth:{control:"text"}}},te=t=>{const[s,c]=a.useState(t.value??"");return e.jsx("div",{style:{width:"280px"},children:e.jsx(i,{...t,value:s,onChange:c})})},W={render:()=>{const[t,s]=a.useState("09:30 AM");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"320px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"Analog (12h)"}),e.jsx(i,{selectionMode:"analog",use12Hours:!0,value:t,onChange:s,innerLabel:"ANALOG CLOCK"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"Analog (24h)"}),e.jsx(i,{selectionMode:"analog",use12Hours:!1,value:t.split(" ")[0],onChange:s,innerLabel:"24H CLOCK"})]})]})}},D={render:()=>{const[t,s]=a.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"320px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"No Outer Border"}),e.jsx(i,{showBorder:!1,value:t,onChange:s,innerLabel:"SHADOW ONLY"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"No Footer"}),e.jsx(i,{showFooter:!1,value:t,onChange:s,innerLabel:"HIDDEN FOOTER"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,opacity:.5,marginBottom:"6px",textTransform:"uppercase"},children:"Custom Card Styles"}),e.jsx(i,{cardBorderRadius:"40px",cardBorderColor:"#2563eb",cardBorderWidth:"4px",value:t,onChange:s,innerLabel:"PILL CARD"})]})]})}},O={render:t=>e.jsx(te,{...t}),args:{placeholder:"Select time"}},E={render:t=>e.jsx(te,{...t}),args:{value:"09:30"}},$={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:["default","filled","outline","ghost"].map(t=>{const[s,c]=a.useState("14:30");return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.75rem",marginBottom:"6px",fontWeight:600,textTransform:"capitalize",opacity:.6},children:t}),e.jsx(i,{variant:t,value:s,onChange:c})]},t)})})},q={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:["sm","md","lg"].map(t=>{const[s,c]=a.useState("");return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.75rem",marginBottom:"6px",fontWeight:600,textTransform:"uppercase",opacity:.6},children:t}),e.jsx(i,{size:t,value:s,onChange:c,placeholder:`Size ${t.toUpperCase()}`})]},t)})})},H={render:()=>{const[t,s]=a.useState("14:30");return e.jsx("div",{style:{width:"280px"},children:e.jsx(i,{label:"Meeting Time",helperText:"12-hour format with AM/PM switcher",value:t,onChange:s,use12Hours:!0})})}},F={render:()=>{const[t,s]=a.useState("09:00:00");return e.jsx("div",{style:{width:"280px"},children:e.jsx(i,{label:"Precise Time",helperText:"Hours, Minutes and Seconds",value:t,onChange:s,showSeconds:!0})})}},V={render:()=>{const[t,s]=a.useState("14:05:30");return e.jsx("div",{style:{width:"280px"},children:e.jsx(i,{label:"Full Precision",value:t,onChange:s,use12Hours:!0,showSeconds:!0})})}},I={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"280px"},children:[5,15,30].map(t=>{const[s,c]=a.useState("");return e.jsxs("div",{children:[e.jsxs("p",{style:{fontSize:"0.75rem",marginBottom:"6px",fontWeight:600,opacity:.6},children:[t,"-minute steps"]}),e.jsx(i,{value:s,onChange:c,minuteStep:t,placeholder:`Every ${t} mins`})]},t)})})},R={render:()=>{const[t,s]=a.useState("");return e.jsx("div",{style:{width:"280px"},children:e.jsx(i,{label:"Closing Time",error:"Time is required for this field",value:t,onChange:s})})}},U={render:()=>e.jsx("div",{style:{width:"280px"},children:e.jsx(i,{label:"Locked Time",value:"10:30",onChange:()=>{},disabled:!0})})},_={render:t=>e.jsx(te,{...t}),args:{label:"Pick a Time",placeholder:"Select time...",variant:"default",size:"md",use12Hours:!1,showSeconds:!1,minuteStep:1,helperText:"Fully interactive playground"}},Y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",opacity:.5,marginBottom:"6px"},children:"Label in Popup Only"}),(()=>{const[t,s]=a.useState("");return e.jsx(i,{innerLabel:"Time Selector",value:t,onChange:s,placeholder:"Open to see inner label"})})()]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",opacity:.5,marginBottom:"8px"},children:"Sizes with innerLabel"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:["sm","md","lg"].map(t=>{const[s,c]=a.useState("");return e.jsx(i,{size:t,innerLabel:`Label ${t.toUpperCase()}`,value:s,onChange:c,placeholder:`Size ${t.toUpperCase()}`},t)})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.72rem",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",opacity:.5,marginBottom:"6px"},children:"12-hour with innerLabel"}),(()=>{const[t,s]=a.useState("09:30 AM");return e.jsx(i,{innerLabel:"Start Time",value:t,onChange:s,use12Hours:!0})})()]})]})};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [t, setT] = useState('09:30 AM');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      width: '320px'
    }}>\r
                <div>\r
                    <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          textTransform: 'uppercase'
        }}>Analog (12h)</p>\r
                    <TimePicker selectionMode="analog" use12Hours value={t} onChange={setT} innerLabel="ANALOG CLOCK" />\r
                </div>\r
                <div>\r
                    <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          textTransform: 'uppercase'
        }}>Analog (24h)</p>\r
                    <TimePicker selectionMode="analog" use12Hours={false} value={t.split(' ')[0]} onChange={setT} innerLabel="24H CLOCK" />\r
                </div>\r
            </div>;
  }
}`,...W.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [t, setT] = useState('');
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
        }}>No Outer Border</p>\r
                    <TimePicker showBorder={false} value={t} onChange={setT} innerLabel="SHADOW ONLY" />\r
                </div>\r
                <div>\r
                    <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          textTransform: 'uppercase'
        }}>No Footer</p>\r
                    <TimePicker showFooter={false} value={t} onChange={setT} innerLabel="HIDDEN FOOTER" />\r
                </div>\r
                <div>\r
                    <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          opacity: 0.5,
          marginBottom: '6px',
          textTransform: 'uppercase'
        }}>Custom Card Styles</p>\r
                    <TimePicker cardBorderRadius="40px" cardBorderColor="#2563eb" cardBorderWidth="4px" value={t} onChange={setT} innerLabel="PILL CARD" />\r
                </div>\r
            </div>;
  }
}`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <Wrapper {...args} />,
  args: {
    placeholder: 'Select time'
  }
}`,...O.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <Wrapper {...args} />,
  args: {
    value: '09:30'
  }
}`,...E.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '280px'
  }}>\r
            {(['default', 'filled', 'outline', 'ghost'] as const).map(v => {
      const [t, setT] = useState('14:30');
      return <div key={v}>\r
                        <p style={{
          fontSize: '0.75rem',
          marginBottom: '6px',
          fontWeight: 600,
          textTransform: 'capitalize',
          opacity: 0.6
        }}>{v}</p>\r
                        <TimePicker variant={v} value={t} onChange={setT} />\r
                    </div>;
    })}\r
        </div>
}`,...$.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '280px'
  }}>\r
            {(['sm', 'md', 'lg'] as const).map(s => {
      const [t, setT] = useState('');
      return <div key={s}>\r
                        <p style={{
          fontSize: '0.75rem',
          marginBottom: '6px',
          fontWeight: 600,
          textTransform: 'uppercase',
          opacity: 0.6
        }}>{s}</p>\r
                        <TimePicker size={s} value={t} onChange={setT} placeholder={\`Size \${s.toUpperCase()}\`} />\r
                    </div>;
    })}\r
        </div>
}`,...q.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [t, setT] = useState('14:30');
    return <div style={{
      width: '280px'
    }}>\r
                <TimePicker label="Meeting Time" helperText="12-hour format with AM/PM switcher" value={t} onChange={setT} use12Hours />\r
            </div>;
  }
}`,...H.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [t, setT] = useState('09:00:00');
    return <div style={{
      width: '280px'
    }}>\r
                <TimePicker label="Precise Time" helperText="Hours, Minutes and Seconds" value={t} onChange={setT} showSeconds />\r
            </div>;
  }
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [t, setT] = useState('14:05:30');
    return <div style={{
      width: '280px'
    }}>\r
                <TimePicker label="Full Precision" value={t} onChange={setT} use12Hours showSeconds />\r
            </div>;
  }
}`,...V.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '280px'
  }}>\r
            {[5, 15, 30].map(step => {
      const [t, setT] = useState('');
      return <div key={step}>\r
                        <p style={{
          fontSize: '0.75rem',
          marginBottom: '6px',
          fontWeight: 600,
          opacity: 0.6
        }}>\r
                            {step}-minute steps\r
                        </p>\r
                        <TimePicker value={t} onChange={setT} minuteStep={step} placeholder={\`Every \${step} mins\`} />\r
                    </div>;
    })}\r
        </div>
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [t, setT] = useState('');
    return <div style={{
      width: '280px'
    }}>\r
                <TimePicker label="Closing Time" error="Time is required for this field" value={t} onChange={setT} />\r
            </div>;
  }
}`,...R.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>\r
            <TimePicker label="Locked Time" value="10:30" onChange={() => {}} disabled />\r
        </div>
}`,...U.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Wrapper {...args} />,
  args: {
    label: 'Pick a Time',
    placeholder: 'Select time...',
    variant: 'default',
    size: 'md',
    use12Hours: false,
    showSeconds: false,
    minuteStep: 1,
    helperText: 'Fully interactive playground'
  }
}`,..._.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '300px'
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
        const [t, setT] = useState('');
        return <TimePicker innerLabel="Time Selector" value={t} onChange={setT} placeholder="Open to see inner label" />;
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
          const [t, setT] = useState('');
          return <TimePicker key={s} size={s} innerLabel={\`Label \${s.toUpperCase()}\`} value={t} onChange={setT} placeholder={\`Size \${s.toUpperCase()}\`} />;
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
      }}>12-hour with innerLabel</p>\r
                {(() => {
        const [t, setT] = useState('09:30 AM');
        return <TimePicker innerLabel="Start Time" value={t} onChange={setT} use12Hours />;
      })()}\r
            </div>\r
        </div>
}`,...Y.parameters?.docs?.source}}};const Ee=["AnalogMode","BorderAndFooterManagement","Default","WithValue","Variants","Sizes","TwelveHourFormat","WithSeconds","TwelveHourWithSeconds","MinuteSteps","WithLabelAndError","Disabled","Playground","InnerLabel"];export{W as AnalogMode,D as BorderAndFooterManagement,O as Default,U as Disabled,Y as InnerLabel,I as MinuteSteps,_ as Playground,q as Sizes,H as TwelveHourFormat,V as TwelveHourWithSeconds,$ as Variants,R as WithLabelAndError,F as WithSeconds,E as WithValue,Ee as __namedExportsOrder,Oe as default};
