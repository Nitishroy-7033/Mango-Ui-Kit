import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as A}from"./iframe-QywSF6W6.js";import{c as S}from"./cn-BQHNewu7.js";import{X as j}from"./x-DSESRrVS.js";import{I as x}from"./info-CClOfhqI.js";import{C as w}from"./circle-x-C3JCPPc1.js";import{T as C,C as N}from"./triangle-alert-CdYaPWxY.js";import{R as T}from"./rocket-DSBeRKUx.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B-6-c5fd.js";const D={info:e.jsx(x,{size:20}),success:e.jsx(N,{size:20}),warning:e.jsx(C,{size:20}),error:e.jsx(w,{size:20}),neutral:e.jsx(x,{size:20})},s=({variant:r="info",alertStyle:c="soft",title:d,children:u,icon:m,dismissible:g=!1,onDismiss:h,actionLabel:p,onAction:f,className:y="",style:b})=>{const v=m===null?null:m??D[r];return e.jsxs("div",{className:S("mango-alert",`variant-${r}`,`style-${c}`,y),role:"alert",style:b,children:[v&&e.jsx("span",{className:"alert-icon","aria-hidden":"true",children:v}),e.jsxs("div",{className:"alert-body",children:[d&&e.jsx("p",{className:"alert-title",children:d}),u&&e.jsx("div",{className:"alert-description",children:u}),p&&f&&e.jsx("button",{className:"alert-action",onClick:f,children:p})]}),g&&e.jsx("button",{className:"alert-dismiss",onClick:h,"aria-label":"Dismiss alert",children:e.jsx(j,{size:16})})]})};s.displayName="Alert";s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"Visual style variant",defaultValue:{value:"'info'",computed:!1}},alertStyle:{required:!1,tsType:{name:"union",raw:"'filled' | 'soft' | 'outline' | 'glass'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'glass'"}]},description:"Rendering style",defaultValue:{value:"'soft'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Title / headline"},children:{required:!1,tsType:{name:"ReactNode"},description:"Body text or ReactNode"},icon:{required:!1,tsType:{name:"union",raw:"ReactNode | null",elements:[{name:"ReactNode"},{name:"null"}]},description:"Custom icon override (pass null to hide it)"},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the alert can be dismissed",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when dismissed"},actionLabel:{required:!1,tsType:{name:"string"},description:"Inline action button label"},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when action is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const L={title:"Components/Alert",component:s,parameters:{layout:"padded"},tags:["autodocs"]},a={args:{variant:"info",alertStyle:"soft",title:"Heads up!",children:"This is an informational message to keep you in the loop.",dismissible:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"600px"},children:[e.jsx(s,{variant:"info",title:"Info",children:"Your changes have been synced."}),e.jsx(s,{variant:"success",title:"Success",children:"Profile updated successfully!"}),e.jsx(s,{variant:"warning",title:"Warning",children:"Your subscription expires in 3 days."}),e.jsx(s,{variant:"error",title:"Error",children:"Failed to connect to the server."}),e.jsx(s,{variant:"neutral",title:"Note",children:"Some features may be unavailable at this time."})]})},i={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"600px"},children:["soft","filled","outline","glass"].map(r=>e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"8px",textTransform:"capitalize"},children:r}),e.jsx(s,{variant:"success",alertStyle:r,title:"Payment Received",children:"Your invoice #1024 has been paid."})]},r))})},n={render:()=>{const[r,c]=A.useState(!0);return r?e.jsx(s,{variant:"warning",title:"Storage Almost Full",dismissible:!0,onDismiss:()=>c(!1),style:{maxWidth:"500px"},children:"You are using 90% of your 5GB plan. Upgrade for more space."}):e.jsx("p",{style:{color:"var(--labelSecondaryColor)",fontSize:"14px"},children:"Alert dismissed."})}},l={args:{variant:"warning",title:"Session Expiring",children:"Your session will expire in 5 minutes.",actionLabel:"Keep me logged in",onAction:()=>alert("Session extended!"),dismissible:!0}},o={args:{variant:"info",icon:e.jsx(T,{size:20}),title:"New Feature Live!",children:"Check out the new Dashboard Analytics. Available now for all users.",actionLabel:"Explore →",onAction:()=>{}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    alertStyle: 'soft',
    title: 'Heads up!',
    children: 'This is an informational message to keep you in the loop.',
    dismissible: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '600px'
  }}>\r
            <Alert variant="info" title="Info">Your changes have been synced.</Alert>\r
            <Alert variant="success" title="Success">Profile updated successfully!</Alert>\r
            <Alert variant="warning" title="Warning">Your subscription expires in 3 days.</Alert>\r
            <Alert variant="error" title="Error">Failed to connect to the server.</Alert>\r
            <Alert variant="neutral" title="Note">Some features may be unavailable at this time.</Alert>\r
        </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '600px'
  }}>\r
            {(['soft', 'filled', 'outline', 'glass'] as const).map(s => <div key={s}>\r
                    <p style={{
        fontWeight: 700,
        marginBottom: '8px',
        textTransform: 'capitalize'
      }}>{s}</p>\r
                    <Alert variant="success" alertStyle={s} title="Payment Received">\r
                        Your invoice #1024 has been paid.\r
                    </Alert>\r
                </div>)}\r
        </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? <Alert variant="warning" title="Storage Almost Full" dismissible onDismiss={() => setVisible(false)} style={{
      maxWidth: '500px'
    }}>\r
                You are using 90% of your 5GB plan. Upgrade for more space.\r
            </Alert> : <p style={{
      color: 'var(--labelSecondaryColor)',
      fontSize: '14px'
    }}>Alert dismissed.</p>;
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Session Expiring',
    children: 'Your session will expire in 5 minutes.',
    actionLabel: 'Keep me logged in',
    onAction: () => alert('Session extended!'),
    dismissible: true
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    icon: <Rocket size={20} />,
    title: 'New Feature Live!',
    children: 'Check out the new Dashboard Analytics. Available now for all users.',
    actionLabel: 'Explore →',
    onAction: () => {}
  }
}`,...o.parameters?.docs?.source}}};const P=["Default","AllVariants","AllStyles","Dismissible","WithAction","CustomIcon"];export{i as AllStyles,t as AllVariants,o as CustomIcon,a as Default,n as Dismissible,l as WithAction,P as __namedExportsOrder,L as default};
