import{j as e}from"./jsx-runtime-u17CrQMm.js";import{O as t}from"./otp-input-bEbfCWjh.js";import{r as a}from"./iframe-QywSF6W6.js";import"./cn-BQHNewu7.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Components/OTP Input",component:t,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>{const[s,r]=a.useState("");return e.jsx(t,{label:"Enter Verification Code",value:s,onChange:r,helperText:"We sent a 6-digit code to your email."})}},l={render:()=>{const[s,r]=a.useState(""),[i,d]=a.useState(""),[c,p]=a.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsx(t,{label:"Outlined (Default)",variant:"outlined",value:s,onChange:r}),e.jsx(t,{label:"Filled",variant:"filled",value:i,onChange:d}),e.jsx(t,{label:"Underlined",variant:"underlined",value:c,onChange:p})]})}},o={render:()=>{const[s,r]=a.useState(""),[i,d]=a.useState(""),[c,p]=a.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsx(t,{label:"Small",size:"sm",length:4,value:s,onChange:r}),e.jsx(t,{label:"Medium",size:"md",length:6,value:i,onChange:d}),e.jsx(t,{label:"Large",size:"lg",length:6,value:c,onChange:p})]})}},u={render:()=>{const[s,r]=a.useState("123");return e.jsx(t,{label:"Invalid Code",value:s,onChange:r,error:"The code you entered is incorrect. Please try again."})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <OTPInput label="Enter Verification Code" value={value} onChange={setValue} helperText="We sent a 6-digit code to your email." />;
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '40px'
    }}>\r
                <OTPInput label="Outlined (Default)" variant="outlined" value={v1} onChange={setV1} />\r
                <OTPInput label="Filled" variant="filled" value={v2} onChange={setV2} />\r
                <OTPInput label="Underlined" variant="underlined" value={v3} onChange={setV3} />\r
            </div>;
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [s1, setS1] = useState('');
    const [s2, setS2] = useState('');
    const [s3, setS3] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '40px'
    }}>\r
                <OTPInput label="Small" size="sm" length={4} value={s1} onChange={setS1} />\r
                <OTPInput label="Medium" size="md" length={6} value={s2} onChange={setS2} />\r
                <OTPInput label="Large" size="lg" length={6} value={s3} onChange={setS3} />\r
            </div>;
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('123');
    return <OTPInput label="Invalid Code" value={value} onChange={setValue} error="The code you entered is incorrect. Please try again." />;
  }
}`,...u.parameters?.docs?.source}}};const C=["Default","Variants","Sizes","ErrorState"];export{n as Default,u as ErrorState,o as Sizes,l as Variants,C as __namedExportsOrder,h as default};
