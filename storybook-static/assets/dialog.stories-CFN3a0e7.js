import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-QywSF6W6.js";import{c as x}from"./cn-BQHNewu7.js";import{X as U}from"./x-DSESRrVS.js";import{I as _}from"./info-CClOfhqI.js";import{C as G}from"./circle-alert-VONkAnIf.js";import{T as X,C as Y}from"./triangle-alert-CdYaPWxY.js";import{B as i}from"./button-01qaZYzQ.js";import{L as H}from"./lock-DIYna_al.js";import{T as K}from"./trash-2--y-KK5Rq.js";import{c as $}from"./createLucideIcon-B-6-c5fd.js";import"./preload-helper-PPVm8Dsz.js";import"./spinner-BLi69KHB.js";import"./settings-CE_Qmr37.js";const J=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Q=$("database",J),s=({isOpen:a,onClose:t,title:g,description:f,icon:k,variant:o="primary",iconBgColor:O,iconColor:T,primaryButton:y,secondaryButton:h,showClose:S=!0,showHeader:D=!0,showFooter:R=!0,closeOnOverlayClick:B=!0,width:b=440,borderRadius:N,className:I,style:q,children:C})=>{if(n.useEffect(()=>{const r=l=>{l.key==="Escape"&&a&&t()};return a&&(document.body.style.overflow="hidden",window.addEventListener("keydown",r)),()=>{document.body.style.overflow="",window.removeEventListener("keydown",r)}},[a,t]),!a)return null;const z=()=>{switch(o){case"success":return e.jsx(Y,{size:24});case"warning":return e.jsx(X,{size:24});case"danger":return e.jsx(G,{size:24});default:return e.jsx(_,{size:24})}},E={"--dialog-width":typeof b=="number"?`${b}px`:b,"--dialog-radius":N,"--icon-custom-bg":O,"--icon-custom-color":T,...q},L=r=>{B&&r.target===r.currentTarget&&t()},v=(r,l)=>{const{label:A,onClick:V,variant:w,loading:M,disabled:P,className:F,style:W}=r;let j=w||(l?"primary":"secondary"),c;return l&&!w&&(o==="success"&&(c="#10b981"),o==="warning"&&(c="#f59e0b"),o==="danger"&&(j="danger"),o==="info"&&(c="#3b82f6")),e.jsx(i,{variant:j,bgColor:c,onClick:V,isLoading:M,disabled:P,className:x("mango-dialog-btn-wrapper",F),style:W,fullWidth:!0,rounded:"lg",children:A})};return e.jsx("div",{className:"mango-dialog-overlay animate-fade-in",onClick:L,children:e.jsxs("div",{className:x("mango-dialog-container animate-slide-up",I),role:"dialog","aria-modal":"true",style:E,children:[D&&e.jsxs("div",{className:"mango-dialog-header",children:[e.jsx("div",{className:x("mango-dialog-icon-badge",o),children:k||z()}),S&&e.jsx("button",{className:"mango-dialog-close",onClick:t,"aria-label":"Close dialog",children:e.jsx(U,{size:20})})]}),(g||f||C)&&e.jsxs("div",{className:"mango-dialog-body",children:[g&&e.jsx("h2",{className:"mango-dialog-title",children:g}),(f||C)&&e.jsx("div",{className:"mango-dialog-description",children:C||f})]}),R&&(y||h)&&e.jsxs("div",{className:"mango-dialog-footer",children:[h&&v(h,!1),y&&v(y,!0)]})]})})};s.displayName="Dialog";s.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the dialog is visible"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the dialog wants to close"},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Main heading of the dialog"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Subtext or description"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon shown at the top"},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:"Color scheme for presets (affects icon bg and primary button)",defaultValue:{value:"'primary'",computed:!1}},iconBgColor:{required:!1,tsType:{name:"string"},description:"Custom background color for the icon badge"},iconColor:{required:!1,tsType:{name:"string"},description:"Custom color for the icon itself"},primaryButton:{required:!1,tsType:{name:"DialogButtonProps"},description:"Primary action button configuration"},secondaryButton:{required:!1,tsType:{name:"DialogButtonProps"},description:"Secondary/Cancel action button configuration"},showClose:{required:!1,tsType:{name:"boolean"},description:"Whether to show a close (X) icon in the top right",defaultValue:{value:"true",computed:!1}},showHeader:{required:!1,tsType:{name:"boolean"},description:"Whether to show the entire header section (icon + close button)",defaultValue:{value:"true",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:"Whether to show the entire footer section (action buttons)",defaultValue:{value:"true",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"Allow closing by clicking on the backdrop",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Custom width for the dialog (default: 440px)",defaultValue:{value:"440",computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Custom border radius for the dialog container"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the container"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for the container"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content passed as children (replaces description if provided)"}}};const me={title:"Components/Dialog",component:s,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>{const[a,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"danger",onClick:()=>t(!0),children:"Delete Template"}),e.jsx(s,{isOpen:a,onClose:()=>t(!1),variant:"danger",icon:e.jsx(K,{size:24}),title:"Delete Template?",description:'Are you sure you want to delete "4 Sharing"? This action cannot be undone.',primaryButton:{label:"Delete Template",onClick:()=>{console.log("Deleted"),t(!1)}},secondaryButton:{label:"Cancel"}})]})}},u={render:()=>{const[a,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"Custom Dialog"}),e.jsx(s,{isOpen:a,onClose:()=>t(!1),icon:e.jsx(H,{size:24}),iconBgColor:"#f5f3ff",iconColor:"#7c3aed",title:"Enable Security?",description:"Activating two-factor authentication will add an extra layer of security to your account.",borderRadius:"16px",primaryButton:{label:"Enable Now",style:{background:"#7c3aed"},onClick:()=>t(!1)},secondaryButton:{label:"Later"}})]})}},p={render:()=>{const[a,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"Finalize Process"}),e.jsx(s,{isOpen:a,onClose:()=>t(!1),variant:"success",title:"Success!",description:"Your changes have been successfully saved to the cloud database.",primaryButton:{label:"Done",onClick:()=>t(!1)}})]})}},m={render:()=>{const[a,t]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outline",onClick:()=>t(!0),children:"Data Report"}),e.jsx(s,{isOpen:a,onClose:()=>t(!1),width:600,icon:e.jsx(Q,{size:24}),title:"Monthly Usage Report",children:e.jsxs("div",{style:{marginTop:"20px",padding:"16px",borderRadius:"12px",background:"var(--secondaryColor)"},children:[e.jsx("p",{style:{margin:0,fontWeight:600},children:"Summary"}),e.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px",color:"var(--labelColor)"},children:[e.jsx("li",{children:"CPU Usage: 45%"}),e.jsx("li",{children:"Memory: 2.4 GB"}),e.jsx("li",{children:"Requests: 1.2M"})]})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
                <Button variant="danger" onClick={() => setIsOpen(true)}>Delete Template</Button>\r
                <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} variant="danger" icon={<Trash2 size={24} />} title="Delete Template?" description='Are you sure you want to delete "4 Sharing"? This action cannot be undone.' primaryButton={{
        label: 'Delete Template',
        onClick: () => {
          console.log('Deleted');
          setIsOpen(false);
        }
      }} secondaryButton={{
        label: 'Cancel'
      }} />\r
            </>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
                <Button onClick={() => setIsOpen(true)}>Custom Dialog</Button>\r
                <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} icon={<Lock size={24} />} iconBgColor="#f5f3ff" iconColor="#7c3aed" title="Enable Security?" description="Activating two-factor authentication will add an extra layer of security to your account." borderRadius="16px" primaryButton={{
        label: 'Enable Now',
        style: {
          background: '#7c3aed'
        },
        onClick: () => setIsOpen(false)
      }} secondaryButton={{
        label: 'Later'
      }} />\r
            </>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
                <Button onClick={() => setIsOpen(true)}>Finalize Process</Button>\r
                <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} variant="success" title="Success!" description="Your changes have been successfully saved to the cloud database." primaryButton={{
        label: 'Done',
        onClick: () => setIsOpen(false)
      }} />\r
            </>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
                <Button variant="outline" onClick={() => setIsOpen(true)}>Data Report</Button>\r
                <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} width={600} icon={<Database size={24} />} title="Monthly Usage Report">\r
                    <div style={{
          marginTop: '20px',
          padding: '16px',
          borderRadius: '12px',
          background: 'var(--secondaryColor)'
        }}>\r
                        <p style={{
            margin: 0,
            fontWeight: 600
          }}>Summary</p>\r
                        <ul style={{
            margin: '8px 0 0 0',
            paddingLeft: '20px',
            color: 'var(--labelColor)'
          }}>\r
                            <li>CPU Usage: 45%</li>\r
                            <li>Memory: 2.4 GB</li>\r
                            <li>Requests: 1.2M</li>\r
                        </ul>\r
                    </div>\r
                </Dialog>\r
            </>;
  }
}`,...m.parameters?.docs?.source}}};const ge=["DeleteExample","CustomColors","SuccessState","LargeCustomContent"];export{u as CustomColors,d as DeleteExample,m as LargeCustomContent,p as SuccessState,ge as __namedExportsOrder,me as default};
