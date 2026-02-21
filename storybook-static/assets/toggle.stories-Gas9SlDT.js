import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-QywSF6W6.js";import{c as u}from"./cn-BQHNewu7.js";import{M as N,S as A}from"./sun-BaXMpgoR.js";import{B as O}from"./bell-06A52uJJ.js";import{Z as S}from"./zap-DA5sd4l-.js";import{a as M,E as B}from"./eye-BbU6tOor.js";import{c as C}from"./createLucideIcon-B-6-c5fd.js";import"./preload-helper-PPVm8Dsz.js";const L=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],P=C("bell-off",L);const V=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],E=C("wifi-off",V);const _=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],G=C("wifi",_),n=({checked:a=!1,onChange:s,disabled:o=!1,label:t,description:r,labelPosition:i="right",size:d="md",variant:p="solid",color:j,activeIcon:w,inactiveIcon:z,showLabels:I=!1,className:W="",style:q})=>{const D=c=>{c.stopPropagation(),!o&&s&&s(!a)},R=c=>{(c.key===" "||c.key==="Enter")&&(c.preventDefault(),D(c))},F={...q,...j?{"--toggle-color":j}:{}},T=e.jsxs("div",{className:"toggle-label-block",children:[t&&e.jsx("span",{className:"mango-toggle-label",children:t}),r&&e.jsx("span",{className:"mango-toggle-description",children:r})]});return e.jsxs("div",{className:u("mango-toggle-container",`toggle-${d}`,a&&"is-checked",o&&"is-disabled",W),style:F,onClick:D,onKeyDown:R,role:"switch","aria-checked":a,tabIndex:o?-1:0,children:[(t||r)&&i==="left"&&T,e.jsxs("div",{className:u("mango-toggle-root",`is-${p}`,a&&"is-checked"),children:[I&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"toggle-track-on",children:"ON"}),e.jsx("span",{className:"toggle-track-off",children:"OFF"})]}),e.jsxs("div",{className:u("mango-toggle-thumb",a&&"is-checked"),children:[w&&e.jsx("span",{className:u("mango-toggle-icon",a&&"is-visible"),children:w}),z&&e.jsx("span",{className:u("mango-toggle-icon",!a&&"is-visible"),children:z})]})]}),(t||r)&&i==="right"&&T]})};n.displayName="Toggle";n.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is checked",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback when state changes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable interactions",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text or node"},description:{required:!1,tsType:{name:"string"},description:"Optional helper text below the label"},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Position of the label relative to the toggle",defaultValue:{value:"'right'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'solid'      // Classic filled pill (default)\r
| 'ios'        // iOS-style green\r
| 'modern'     // Outline-border minimal\r
| 'glass'      // Glassmorphism / translucent\r
| 'square'     // Flat square thumb + track\r
| 'pill-slim'  // Slim elongated track\r
| 'flat'       // No thumb shadow, flat design\r
| 'neon'       // Glowing neon effect when active\r
| 'bounce'`,elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ios'"},{name:"literal",value:"'modern'"},{name:"literal",value:"'glass'"},{name:"literal",value:"'square'"},{name:"literal",value:"'pill-slim'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'neon'"},{name:"literal",value:"'bounce'"}]},description:"Visual style variant",defaultValue:{value:"'solid'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Custom active color (hex or CSS var)"},activeIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to show inside the thumb when checked"},inactiveIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to show inside the thumb when unchecked"},showLabels:{required:!1,tsType:{name:"boolean"},description:"Show ON / OFF text inside the track",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const ae={title:"Components/Toggle",component:n,parameters:{layout:"padded"},tags:["autodocs"]},U=a=>{const[s,o]=l.useState(!1);return e.jsx(n,{...a,checked:s,onChange:o})},m={render:a=>e.jsx(U,{...a}),args:{label:"Toggle me",variant:"solid",size:"md"}},g={render:()=>{const a=[{name:"Solid (Default)",key:"solid"},{name:"iOS Style",key:"ios"},{name:"Modern (Outline)",key:"modern"},{name:"Glassmorphism",key:"glass"},{name:"Square",key:"square"},{name:"Pill-Slim",key:"pill-slim"},{name:"Flat",key:"flat"},{name:"Neon Glow",key:"neon"},{name:"Bounce Spring",key:"bounce"}];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px 40px",maxWidth:"700px"},children:a.map(({name:s,key:o})=>{const[t,r]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--secondaryColor)",borderRadius:"12px",border:"1px solid var(--borderColor)"},children:[e.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"var(--textColor)"},children:s}),e.jsx(n,{variant:o,checked:t,onChange:r})]},o)})})}},f={render:()=>{const[a,s]=l.useState(!0),[o,t]=l.useState(!0),[r,i]=l.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{size:"sm",checked:a,onChange:s,label:"Small"}),e.jsx(n,{size:"md",checked:o,onChange:t,label:"Medium"}),e.jsx(n,{size:"lg",checked:r,onChange:i,label:"Large"})]})}},h={render:()=>{const[a,s]=l.useState(!1),[o,t]=l.useState(!0),[r,i]=l.useState(!1),[d,p]=l.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{checked:a,onChange:s,label:"Dark Mode",variant:"solid",activeIcon:e.jsx(N,{size:10,color:"#fff"}),inactiveIcon:e.jsx(A,{size:10,color:"#fa8029"})}),e.jsx(n,{checked:o,onChange:t,label:"Wi-Fi",variant:"ios",activeIcon:e.jsx(G,{size:10,color:"#fff"}),inactiveIcon:e.jsx(E,{size:10,color:"#999"})}),e.jsx(n,{checked:r,onChange:i,label:"Notifications",variant:"neon",activeIcon:e.jsx(O,{size:10,color:"#fa8029"}),inactiveIcon:e.jsx(P,{size:10,color:"#999"})}),e.jsx(n,{checked:d,onChange:p,label:"Preview",variant:"square",activeIcon:e.jsx(M,{size:10,color:"#fa8029"}),inactiveIcon:e.jsx(B,{size:10,color:"#999"})})]})}},y={render:()=>{const[a,s]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(n,{checked:a,onChange:s,showLabels:!0,size:"md",label:"Show ON/OFF label"}),e.jsx(n,{checked:!a,onChange:o=>s(!o),showLabels:!0,variant:"ios",label:"iOS with labels"})]})}},v={render:()=>{const[a,s]=l.useState(!0),[o,t]=l.useState(!1),[r,i]=l.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"400px"},children:[e.jsx(n,{checked:a,onChange:s,label:"Notifications",description:"Receive email updates and alerts"}),e.jsx(n,{checked:o,onChange:t,label:"Auto-save",description:"Automatically save changes every 30 seconds",variant:"ios"}),e.jsx(n,{checked:r,onChange:i,label:"Analytics",description:"Share anonymous usage data to improve the product",variant:"neon"})]})}},x={render:()=>{const a=["#8b5cf6","#10b981","#f43f5e","#0ea5e9"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:a.map(s=>{const[o,t]=l.useState(!0);return e.jsx(n,{checked:o,onChange:t,color:s,label:s,variant:"bounce"},s)})})}},b={render:()=>{const[a,s]=l.useState({darkMode:!1,pushNotifs:!0,emailDigest:!1,autoUpdate:!0,betaFeatures:!1,analytics:!0}),o=t=>s(r=>({...r,[t]:!r[t]}));return e.jsxs("div",{style:{maxWidth:"460px",border:"1px solid var(--borderColor)",borderRadius:"16px",overflow:"hidden"},children:[e.jsx("div",{style:{padding:"18px 20px",borderBottom:"1px solid var(--borderColor)",fontWeight:700,fontSize:"1rem"},children:"⚙️ App Preferences"}),[{key:"darkMode",label:"Dark Mode",desc:"Switch to dark theme",icon:e.jsx(N,{size:14})},{key:"pushNotifs",label:"Push Notifications",desc:"Get real-time alerts",icon:e.jsx(O,{size:14})},{key:"emailDigest",label:"Email Digest",desc:"Weekly summary emails",icon:e.jsx(S,{size:14})},{key:"autoUpdate",label:"Auto Update",desc:"Install updates silently",icon:e.jsx(S,{size:14})},{key:"betaFeatures",label:"Beta Features",desc:"Access preview features",icon:e.jsx(S,{size:14})},{key:"analytics",label:"Share Analytics",desc:"Help us improve",icon:e.jsx(M,{size:14})}].map(({key:t,label:r,desc:i},d,p)=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 20px",borderBottom:d<p.length-1?"1px solid var(--borderColor)":"none"},children:e.jsx(n,{labelPosition:"right",checked:a[t],onChange:()=>o(t),label:r,description:i,variant:"solid",size:"sm"})},t))]})}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{checked:!1,onChange:()=>{},disabled:!0,label:"Disabled (off)"}),e.jsx(n,{checked:!0,onChange:()=>{},disabled:!0,label:"Disabled (on)"})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    label: 'Toggle me',
    variant: 'solid',
    size: 'md'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = [{
      name: 'Solid (Default)',
      key: 'solid'
    }, {
      name: 'iOS Style',
      key: 'ios'
    }, {
      name: 'Modern (Outline)',
      key: 'modern'
    }, {
      name: 'Glassmorphism',
      key: 'glass'
    }, {
      name: 'Square',
      key: 'square'
    }, {
      name: 'Pill-Slim',
      key: 'pill-slim'
    }, {
      name: 'Flat',
      key: 'flat'
    }, {
      name: 'Neon Glow',
      key: 'neon'
    }, {
      name: 'Bounce Spring',
      key: 'bounce'
    }] as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px 40px',
      maxWidth: '700px'
    }}>\r
                {variants.map(({
        name,
        key
      }) => {
        const [on, setOn] = useState(false);
        return <div key={key} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: 'var(--secondaryColor)',
          borderRadius: '12px',
          border: '1px solid var(--borderColor)'
        }}>\r
                            <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--textColor)'
          }}>{name}</span>\r
                            <Toggle variant={key} checked={on} onChange={setOn} />\r
                        </div>;
      })}\r
            </div>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState(true);
    const [md, setMd] = useState(true);
    const [lg, setLg] = useState(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
                <Toggle size="sm" checked={sm} onChange={setSm} label="Small" />\r
                <Toggle size="md" checked={md} onChange={setMd} label="Medium" />\r
                <Toggle size="lg" checked={lg} onChange={setLg} label="Large" />\r
            </div>;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dark, setDark] = useState(false);
    const [wifi, setWifi] = useState(true);
    const [bell, setBell] = useState(false);
    const [vis, setVis] = useState(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
                <Toggle checked={dark} onChange={setDark} label="Dark Mode" variant="solid" activeIcon={<Moon size={10} color="#fff" />} inactiveIcon={<Sun size={10} color="#fa8029" />} />\r
                <Toggle checked={wifi} onChange={setWifi} label="Wi-Fi" variant="ios" activeIcon={<Wifi size={10} color="#fff" />} inactiveIcon={<WifiOff size={10} color="#999" />} />\r
                <Toggle checked={bell} onChange={setBell} label="Notifications" variant="neon" activeIcon={<Bell size={10} color="#fa8029" />} inactiveIcon={<BellOff size={10} color="#999" />} />\r
                <Toggle checked={vis} onChange={setVis} label="Preview" variant="square" activeIcon={<Eye size={10} color="#fa8029" />} inactiveIcon={<EyeOff size={10} color="#999" />} />\r
            </div>;
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>\r
                <Toggle checked={on} onChange={setOn} showLabels size="md" label="Show ON/OFF label" />\r
                <Toggle checked={!on} onChange={v => setOn(!v)} showLabels variant="ios" label="iOS with labels" />\r
            </div>;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, sv1] = useState(true);
    const [v2, sv2] = useState(false);
    const [v3, sv3] = useState(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '400px'
    }}>\r
                <Toggle checked={v1} onChange={sv1} label="Notifications" description="Receive email updates and alerts" />\r
                <Toggle checked={v2} onChange={sv2} label="Auto-save" description="Automatically save changes every 30 seconds" variant="ios" />\r
                <Toggle checked={v3} onChange={sv3} label="Analytics" description="Share anonymous usage data to improve the product" variant="neon" />\r
            </div>;
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = ['#8b5cf6', '#10b981', '#f43f5e', '#0ea5e9'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }}>\r
                {colors.map(c => {
        const [on, setOn] = useState(true);
        return <Toggle key={c} checked={on} onChange={setOn} color={c} label={c} variant="bounce" />;
      })}\r
            </div>;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      darkMode: false,
      pushNotifs: true,
      emailDigest: false,
      autoUpdate: true,
      betaFeatures: false,
      analytics: true
    });
    const toggle = (key: keyof typeof settings) => setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    return <div style={{
      maxWidth: '460px',
      border: '1px solid var(--borderColor)',
      borderRadius: '16px',
      overflow: 'hidden'
    }}>\r
                <div style={{
        padding: '18px 20px',
        borderBottom: '1px solid var(--borderColor)',
        fontWeight: 700,
        fontSize: '1rem'
      }}>\r
                    ⚙️ App Preferences\r
                </div>\r
                {[{
        key: 'darkMode',
        label: 'Dark Mode',
        desc: 'Switch to dark theme',
        icon: <Moon size={14} />
      }, {
        key: 'pushNotifs',
        label: 'Push Notifications',
        desc: 'Get real-time alerts',
        icon: <Bell size={14} />
      }, {
        key: 'emailDigest',
        label: 'Email Digest',
        desc: 'Weekly summary emails',
        icon: <Zap size={14} />
      }, {
        key: 'autoUpdate',
        label: 'Auto Update',
        desc: 'Install updates silently',
        icon: <Zap size={14} />
      }, {
        key: 'betaFeatures',
        label: 'Beta Features',
        desc: 'Access preview features',
        icon: <Zap size={14} />
      }, {
        key: 'analytics',
        label: 'Share Analytics',
        desc: 'Help us improve',
        icon: <Eye size={14} />
      }].map(({
        key,
        label,
        desc
      }, i, arr) => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 20px',
        borderBottom: i < arr.length - 1 ? '1px solid var(--borderColor)' : 'none'
      }}>\r
                        <Toggle labelPosition="right" checked={settings[key as keyof typeof settings]} onChange={() => toggle(key as keyof typeof settings)} label={label} description={desc} variant="solid" size="sm" />\r
                    </div>)}\r
            </div>;
  }
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>\r
            <Toggle checked={false} onChange={() => {}} disabled label="Disabled (off)" />\r
            <Toggle checked={true} onChange={() => {}} disabled label="Disabled (on)" />\r
        </div>
}`,...k.parameters?.docs?.source}}};const se=["Default","AllVariants","Sizes","WithIcons","WithLabels","WithDescription","CustomColors","RealWorldSettings","Disabled"];export{g as AllVariants,x as CustomColors,m as Default,k as Disabled,b as RealWorldSettings,f as Sizes,v as WithDescription,h as WithIcons,y as WithLabels,se as __namedExportsOrder,ae as default};
