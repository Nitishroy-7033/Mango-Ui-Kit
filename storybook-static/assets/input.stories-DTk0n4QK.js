import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as ye,r as n}from"./iframe-QywSF6W6.js";import{c as o}from"./cn-BQHNewu7.js";import{C as be}from"./chevron-down-BNiyiuGD.js";import{S as l}from"./search-BLKqZgPB.js";import{C as we}from"./check-BPnGGwGE.js";import{E as je,a as Ce}from"./eye-BbU6tOor.js";import{U as re}from"./user-DfzXYxb_.js";import{O as Se}from"./otp-input-bEbfCWjh.js";import{L as Ie}from"./lock-DIYna_al.js";import{C as ze}from"./credit-card-DV0cfzNO.js";import{M as Ne}from"./mail-Ce2xHHqn.js";import{c as Te}from"./createLucideIcon-B-6-c5fd.js";import"./preload-helper-PPVm8Dsz.js";const ke=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],qe=Te("map-pin",ke),r=ye.forwardRef(({className:i,variant:d="outlined",size:c="md",label:F,helperText:O,error:m,icon:te,prefixIcon:ne,suffixIcon:A,addonBefore:M,addonAfter:_,loading:B,actionButton:u,showPasswordToggle:se,countrySelector:t,multiline:s,rows:oe=4,resize:le="none",maxLength:h,showCount:ie,countPosition:L="inside",limitType:de="character",type:H="text",value:$,onFocus:ce,onBlur:ue,onChange:pe,disabled:U,...G},J)=>{const[me,K]=n.useState(!1),[W,he]=n.useState(!1),[p,D]=n.useState(!1),[f,Q]=n.useState(""),V=n.useRef(null),E=String($||G.defaultValue||""),X=de==="word"?E.trim()?E.trim().split(/\s+/).length:0:E.length,fe=a=>{K(!0),ce?.(a)},ge=a=>{K(!1),ue?.(a)};n.useEffect(()=>{const a=g=>{V.current&&!V.current.contains(g.target)&&D(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const Y=n.useMemo(()=>{if(!t)return[];if(!f)return t.options;const a=f.toLowerCase();return t.options.filter(g=>g.label.toLowerCase().includes(a)||g.value.toLowerCase().includes(a))},[t,f]),xe=n.useMemo(()=>t?.options.find(a=>a.value===t.value),[t]),Z=H==="password",ve=Z?W?"text":"password":H,ee=()=>ie?e.jsxs("div",{className:o("mango-input-count",`mango-input-count-${L}`,X>(h||1/0)&&"error"),children:[X," ",h?`/ ${h}`:""]}):null,ae={className:"mango-input-field",onFocus:fe,onBlur:ge,disabled:U,value:$,onChange:pe,maxLength:h,...G};return e.jsxs("div",{className:o("mango-input-root",i,s&&"mango-input-multiline"),children:[F&&e.jsx("label",{className:o("mango-input-label",`mango-input-label-${c}`),children:F}),e.jsxs("div",{className:o("mango-input-container",`mango-input-size-${c}`,`mango-input-variant-${d}`,(me||p)&&"is-focused",m&&"has-error",U&&"is-disabled"),children:[M&&!s&&e.jsx("div",{className:"mango-input-addon mango-input-addon-before",children:M}),e.jsxs("div",{className:"mango-input-wrapper",children:[t&&!s&&e.jsxs("div",{className:"mango-country-root",ref:V,children:[e.jsxs("div",{className:o("mango-country-selector",p&&"active"),onClick:()=>!U&&D(!p),children:[e.jsx("span",{className:"mango-country-flag",children:xe?.flag}),e.jsx("span",{className:"mango-country-code",children:t.value}),e.jsx(be,{size:14,className:o("mango-country-arrow",p&&"rotated")})]}),p&&e.jsxs("div",{className:"mango-country-dropdown animate-scale-in",style:{width:t.dropdownWidth||"220px"},children:[t.showSearch&&e.jsxs("div",{className:"mango-country-search",children:[e.jsx(l,{size:14}),e.jsx("input",{placeholder:t.placeholder||"Search...",value:f,onChange:a=>Q(a.target.value),autoFocus:!0})]}),e.jsxs("div",{className:"mango-country-list",children:[Y.map(a=>e.jsxs("div",{className:o("mango-country-item",a.value===t.value&&"selected"),onClick:()=>{t.onChange(a.value),D(!1),Q("")},children:[e.jsx("span",{className:"item-flag",children:a.flag}),e.jsxs("div",{className:"item-info",children:[e.jsx("span",{className:"item-label",children:a.label}),e.jsx("span",{className:"item-value",children:a.value})]}),a.value===t.value&&e.jsx(we,{size:14,className:"item-check"})]},a.value)),Y.length===0&&e.jsx("div",{className:"mango-country-no-results",children:"No countries found"})]})]})]}),(()=>{const a=ne||te;return a&&!s&&e.jsx("div",{className:"mango-input-icon mango-input-prefix",children:a})})(),s?e.jsx("textarea",{...ae,ref:J,rows:oe,style:{resize:le}}):e.jsx("input",{...ae,ref:J,type:ve}),B&&e.jsx("div",{className:"mango-input-loading-spinner"}),Z&&se&&!B&&e.jsx("button",{type:"button",className:"mango-input-password-toggle",onClick:()=>he(!W),tabIndex:-1,children:W?e.jsx(je,{size:18}):e.jsx(Ce,{size:18})}),A&&!B&&!s&&e.jsx("div",{className:"mango-input-icon mango-input-suffix",children:A}),L==="inside"&&ee()]}),u&&!s&&e.jsxs("button",{type:"button",className:o("mango-input-action-btn",u.variant==="secondary"&&"mango-input-action-btn-secondary"),onClick:u.onClick,children:[u.icon,u.label]}),_&&!s&&e.jsx("div",{className:"mango-input-addon mango-input-addon-after",children:_})]}),L==="outside"&&ee(),m&&e.jsx("p",{className:"mango-input-error",children:m}),!m&&O&&e.jsx("p",{className:"mango-input-helper",children:O})]})});r.displayName="Input";r.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'borderless' | 'underlined'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'borderless'"},{name:"literal",value:"'underlined'"}]},description:"Visual style variant",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the input",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label shown above the input"},innerLabel:{required:!1,tsType:{name:"string"},description:"Inner label (compact style)"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the input"},error:{required:!1,tsType:{name:"string"},description:"Error message"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon at the start of the input (shorthand for prefixIcon)"},prefixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon at the start of the input"},suffixIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon at the end of the input"},addonBefore:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Text or element at the start of the input (addon)"},addonAfter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Text or element at the end of the input (addon)"},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the input is in a loading state"},actionButton:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    label?: string;\r
    icon?: React.ReactNode;\r
    onClick?: () => void;\r
    variant?: 'primary' | 'secondary' | 'ghost';\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"variant",value:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}],required:!1}}]}},description:"Action button at the end (e.g. Search)"},showPasswordToggle:{required:!1,tsType:{name:"boolean"},description:"For password fields: whether to show the toggle visibility button"},countrySelector:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    value: string;\r
    onChange: (value: string) => void;\r
    options: { label: string; value: string; flag: string; details?: string }[];\r
    showSearch?: boolean;\r
    dropdownWidth?: string;\r
    placeholder?: string;\r
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"onChange",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}},required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string; flag: string; details?: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"flag",value:{name:"string",required:!0}},{key:"details",value:{name:"string",required:!1}}]}}],raw:"{ label: string; value: string; flag: string; details?: string }[]",required:!0}},{key:"showSearch",value:{name:"boolean",required:!1}},{key:"dropdownWidth",value:{name:"string",required:!1}},{key:"placeholder",value:{name:"string",required:!1}}]}},description:"For number fields: interactive country selector dropdown"},multiline:{required:!1,tsType:{name:"boolean"},description:"Whether to render as a textarea"},rows:{required:!1,tsType:{name:"number"},description:"Number of rows for textarea",defaultValue:{value:"4",computed:!1}},resize:{required:!1,tsType:{name:"union",raw:"'none' | 'both' | 'horizontal' | 'vertical'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'both'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Resize behavior for textarea",defaultValue:{value:"'none'",computed:!1}},maxLength:{required:!1,tsType:{name:"number"},description:"Character or word limit"},showCount:{required:!1,tsType:{name:"boolean"},description:"Whether to show the character/word count"},countPosition:{required:!1,tsType:{name:"union",raw:"'inside' | 'outside'",elements:[{name:"literal",value:"'inside'"},{name:"literal",value:"'outside'"}]},description:"Position of the character count",defaultValue:{value:"'inside'",computed:!1}},limitType:{required:!1,tsType:{name:"union",raw:"'character' | 'word'",elements:[{name:"literal",value:"'character'"},{name:"literal",value:"'word'"}]},description:"Whether the limit is for 'characters' or 'words'",defaultValue:{value:"'character'",computed:!1}},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit"]};const He={title:"Components/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"]},x={args:{placeholder:"Enter text...",label:"Username"}},v={args:{label:"Search User",placeholder:"Search...",icon:e.jsx(l,{size:18})}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"350px"},children:[e.jsx(r,{variant:"outlined",label:"Outlined (Default)",placeholder:"Outlined variant"}),e.jsx(r,{variant:"filled",label:"Filled",placeholder:"Filled variant"}),e.jsx(r,{variant:"underlined",label:"Underlined",placeholder:"Underlined variant"}),e.jsx(r,{variant:"borderless",label:"Borderless",placeholder:"Borderless variant"})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"350px"},children:[e.jsx(r,{prefixIcon:e.jsx(re,{size:18}),placeholder:"Username"}),e.jsx(r,{suffixIcon:e.jsx(Ne,{size:18}),placeholder:"Email address"}),e.jsx(r,{prefixIcon:e.jsx(qe,{size:18}),suffixIcon:e.jsx(l,{size:18}),placeholder:"Search location..."})]})},w={args:{placeholder:"Search for products...",actionButton:{label:"Search",icon:e.jsx(l,{size:18}),onClick:()=>alert("Searching...")}}},j={args:{type:"password",label:"Password",placeholder:"Enter your password",prefixIcon:e.jsx(Ie,{size:18}),showPasswordToggle:!0}},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"350px"},children:[e.jsx(r,{label:"Email",type:"email",placeholder:"email@example.com",helperText:"We'll never share your email."}),e.jsx(r,{label:"Username",placeholder:"Enter username",error:"Username is already taken"})]})},S={render:()=>{const[i,d]=n.useState("+91"),c=[{label:"India",value:"+91",flag:"🇮🇳"},{label:"United States",value:"+1",flag:"🇺🇸"},{label:"United Kingdom",value:"+44",flag:"🇬🇧"},{label:"Canada",value:"+1-CA",flag:"🇨🇦"},{label:"Australia",value:"+61",flag:"🇦🇺"},{label:"Germany",value:"+49",flag:"🇩🇪"},{label:"France",value:"+33",flag:"🇫🇷"},{label:"Japan",value:"+81",flag:"🇯🇵"},{label:"Brazil",value:"+55",flag:"🇧🇷"}];return e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{type:"tel",label:"Phone Number",placeholder:"8888 888 888",countrySelector:{value:i,onChange:d,options:c,showSearch:!0,dropdownWidth:"250px",placeholder:"Search country..."}})})}},I={args:{label:"Website",addonBefore:"https://",addonAfter:".com",placeholder:"google"}},z={args:{label:"Processing Data",placeholder:"Wait a moment...",loading:!0}},N={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"350px"},children:[e.jsx(r,{size:"sm",placeholder:"Small input (sm)",prefixIcon:e.jsx(l,{size:14})}),e.jsx(r,{size:"md",placeholder:"Medium input (md)",prefixIcon:e.jsx(l,{size:18})}),e.jsx(r,{size:"lg",placeholder:"Large input (lg)",prefixIcon:e.jsx(l,{size:22})})]})},T={args:{label:"Card Details",prefixIcon:e.jsx(ze,{size:18}),placeholder:"0000 0000 0000 0000",suffixIcon:e.jsx("div",{style:{fontSize:"0.8rem",fontWeight:700,opacity:.5},children:"VISA"})}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"450px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.75rem",fontWeight:700,opacity:.5,marginBottom:"8px",textTransform:"uppercase"},children:"Seamless Search Button"}),e.jsx(r,{placeholder:"Search items...",prefixIcon:e.jsx(l,{size:18}),actionButton:{label:"Search",onClick:()=>alert("Search clicked")}})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.75rem",fontWeight:700,opacity:.5,marginBottom:"8px",textTransform:"uppercase"},children:"Built-in Addons"}),e.jsx(r,{placeholder:"yourwebsite",addonBefore:"https://",addonAfter:".com"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.75rem",fontWeight:700,opacity:.5,marginBottom:"8px",textTransform:"uppercase"},children:"Complex Pairing"}),e.jsx(r,{placeholder:"username",addonBefore:e.jsx(re,{size:16}),actionButton:{label:"Check Availability",variant:"secondary",onClick:()=>{}}})]})]})},q={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"450px"},children:[e.jsx(r,{multiline:!0,label:"Long Description",placeholder:"Can resize...",resize:"both",showCount:!0,maxLength:500}),e.jsx(r,{multiline:!0,label:"Message (Fixed Height)",placeholder:"Resize disabled...",resize:"none",rows:6,showCount:!0,countPosition:"outside",maxLength:100})]})},P={render:()=>{const[i,d]=n.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"450px"},children:[e.jsx(r,{label:"Username (Character Limit)",placeholder:"Type up to 20 characters...",maxLength:20,showCount:!0,countPosition:"inside",value:i,onChange:c=>d(c.target.value)}),e.jsx(r,{label:"Bio (Outside Count)",placeholder:"Count is shown below...",maxLength:100,showCount:!0,countPosition:"outside"}),e.jsx(r,{label:"Short Note (Word Limit)",placeholder:"Maximum 5 words...",maxLength:5,limitType:"word",showCount:!0})]})}},R={render:()=>{const[i,d]=n.useState("");return e.jsx("div",{style:{width:"400px"},children:e.jsx(Se,{value:i,onChange:d,label:"Temp OTP Check"})})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    label: 'Username'
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search User',
    placeholder: 'Search...',
    icon: <Search size={18} />
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '350px'
  }}>\r
            <Input variant="outlined" label="Outlined (Default)" placeholder="Outlined variant" />\r
            <Input variant="filled" label="Filled" placeholder="Filled variant" />\r
            <Input variant="underlined" label="Underlined" placeholder="Underlined variant" />\r
            <Input variant="borderless" label="Borderless" placeholder="Borderless variant" />\r
        </div>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '350px'
  }}>\r
            <Input prefixIcon={<User size={18} />} placeholder="Username" />\r
            <Input suffixIcon={<Mail size={18} />} placeholder="Email address" />\r
            <Input prefixIcon={<MapPin size={18} />} suffixIcon={<Search size={18} />} placeholder="Search location..." />\r
        </div>
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search for products...',
    actionButton: {
      label: 'Search',
      icon: <Search size={18} />,
      onClick: () => alert('Searching...')
    }
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    prefixIcon: <Lock size={18} />,
    showPasswordToggle: true
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '350px'
  }}>\r
            <Input label="Email" type="email" placeholder="email@example.com" helperText="We'll never share your email." />\r
            <Input label="Username" placeholder="Enter username" error="Username is already taken" />\r
        </div>
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [country, setCountry] = useState('+91');
    const options = [{
      label: 'India',
      value: '+91',
      flag: '🇮🇳'
    }, {
      label: 'United States',
      value: '+1',
      flag: '🇺🇸'
    }, {
      label: 'United Kingdom',
      value: '+44',
      flag: '🇬🇧'
    }, {
      label: 'Canada',
      value: '+1-CA',
      flag: '🇨🇦'
    }, {
      label: 'Australia',
      value: '+61',
      flag: '🇦🇺'
    }, {
      label: 'Germany',
      value: '+49',
      flag: '🇩🇪'
    }, {
      label: 'France',
      value: '+33',
      flag: '🇫🇷'
    }, {
      label: 'Japan',
      value: '+81',
      flag: '🇯🇵'
    }, {
      label: 'Brazil',
      value: '+55',
      flag: '🇧🇷'
    }];
    return <div style={{
      width: '400px'
    }}>\r
                <Input type="tel" label="Phone Number" placeholder="8888 888 888" countrySelector={{
        value: country,
        onChange: setCountry,
        options: options,
        showSearch: true,
        dropdownWidth: '250px',
        placeholder: 'Search country...'
      }} />\r
            </div>;
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Website',
    addonBefore: 'https://',
    addonAfter: '.com',
    placeholder: 'google'
  }
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Processing Data',
    placeholder: 'Wait a moment...',
    loading: true
  }
}`,...z.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '350px'
  }}>\r
            <Input size="sm" placeholder="Small input (sm)" prefixIcon={<Search size={14} />} />\r
            <Input size="md" placeholder="Medium input (md)" prefixIcon={<Search size={18} />} />\r
            <Input size="lg" placeholder="Large input (lg)" prefixIcon={<Search size={22} />} />\r
        </div>
}`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Card Details',
    prefixIcon: <CreditCard size={18} />,
    placeholder: '0000 0000 0000 0000',
    suffixIcon: <div style={{
      fontSize: '0.8rem',
      fontWeight: 700,
      opacity: 0.5
    }}>VISA</div>
  }
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '450px'
  }}>\r
            {/* Search group - Using actionButton prop */}\r
            <div>\r
                <p style={{
        fontSize: '0.75rem',
        fontWeight: 700,
        opacity: 0.5,
        marginBottom: '8px',
        textTransform: 'uppercase'
      }}>Seamless Search Button</p>\r
                <Input placeholder="Search items..." prefixIcon={<Search size={18} />} actionButton={{
        label: 'Search',
        onClick: () => alert('Search clicked')
      }} />\r
            </div>\r
\r
            {/* Domain group - Using addonBefore and addonAfter */}\r
            <div>\r
                <p style={{
        fontSize: '0.75rem',
        fontWeight: 700,
        opacity: 0.5,
        marginBottom: '8px',
        textTransform: 'uppercase'
      }}>Built-in Addons</p>\r
                <Input placeholder="yourwebsite" addonBefore="https://" addonAfter=".com" />\r
            </div>\r
\r
            {/* Combined - Using both for complex cases */}\r
            <div>\r
                <p style={{
        fontSize: '0.75rem',
        fontWeight: 700,
        opacity: 0.5,
        marginBottom: '8px',
        textTransform: 'uppercase'
      }}>Complex Pairing</p>\r
                <Input placeholder="username" addonBefore={<User size={16} />} actionButton={{
        label: 'Check Availability',
        variant: 'secondary',
        onClick: () => {}
      }} />\r
            </div>\r
        </div>
}`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '450px'
  }}>\r
            <Input multiline label="Long Description" placeholder="Can resize..." resize="both" showCount maxLength={500} />\r
            <Input multiline label="Message (Fixed Height)" placeholder="Resize disabled..." resize="none" rows={6} showCount countPosition="outside" maxLength={100} />\r
        </div>
}`,...q.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [charVal, setCharVal] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      width: '450px'
    }}>\r
                <Input label="Username (Character Limit)" placeholder="Type up to 20 characters..." maxLength={20} showCount countPosition="inside" value={charVal} onChange={e => setCharVal(e.target.value)} />\r
                <Input label="Bio (Outside Count)" placeholder="Count is shown below..." maxLength={100} showCount countPosition="outside" />\r
                <Input label="Short Note (Word Limit)" placeholder="Maximum 5 words..." maxLength={5} limitType="word" showCount />\r
            </div>;
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: '400px'
    }}>\r
                <OTPInput value={value} onChange={setValue} label="Temp OTP Check" />\r
            </div>;
  }
}`,...R.parameters?.docs?.source}}};const $e=["Default","ShortHandIcon","Variants","WithIcons","SearchInput","PasswordField","ValidationStates","PhoneInput","UrlInput","Loading","Sizes","PaymentInput","CompactStyle","Multiline","CharacterLimits","OTPField"];export{P as CharacterLimits,k as CompactStyle,x as Default,z as Loading,q as Multiline,R as OTPField,j as PasswordField,T as PaymentInput,S as PhoneInput,w as SearchInput,v as ShortHandIcon,N as Sizes,I as UrlInput,C as ValidationStates,y as Variants,b as WithIcons,$e as __namedExportsOrder,He as default};
