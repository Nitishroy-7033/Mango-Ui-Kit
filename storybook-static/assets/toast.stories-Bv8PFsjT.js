import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-QywSF6W6.js";import{c as T}from"./cn-BQHNewu7.js";import{X as j}from"./x-DSESRrVS.js";import{I as k}from"./info-CClOfhqI.js";import{T as N,C as S}from"./triangle-alert-CdYaPWxY.js";import{C as q}from"./circle-x-C3JCPPc1.js";import{B as l}from"./button-01qaZYzQ.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B-6-c5fd.js";import"./spinner-BLi69KHB.js";import"./settings-CE_Qmr37.js";const B={success:t.jsx(S,{size:20}),error:t.jsx(q,{size:20}),warning:t.jsx(N,{size:20}),info:t.jsx(k,{size:20}),message:null},v=({id:e,title:s,description:i,variant:a="message",duration:n=5e3,icon:b,closable:x=!0,action:d,onClose:m,visible:w=!0})=>{g.useEffect(()=>{if(n>0){const p=setTimeout(()=>{e&&m(e)},n);return()=>clearTimeout(p)}},[n,e,m]);const C=()=>{e&&m(e)},h=b||B[a];return t.jsxs("div",{className:T("mango-toast-item",`mango-toast-${a}`,w?"mango-toast-enter-active":"mango-toast-exit",n>0&&"has-duration"),role:"alert",children:[h&&t.jsx("div",{className:"mango-toast-icon",children:h}),t.jsxs("div",{className:"mango-toast-content",children:[s&&t.jsx("h4",{className:"mango-toast-title",children:s}),t.jsx("div",{className:"mango-toast-description",children:i}),d&&t.jsx("button",{className:"mango-toast-action",onClick:p=>{p.stopPropagation(),d.onClick()},children:d.label})]}),x&&t.jsx("button",{className:"mango-toast-close",onClick:C,children:t.jsx(j,{size:16})}),n>0&&t.jsx("div",{className:"mango-toast-progress",style:{animationDuration:`${n}ms`}})]})};v.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{title:{required:!1,tsType:{name:"string"},description:"The title of the toast"},description:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main message content"},variant:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'info' | 'message'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'message'"}]},description:"Visual style variant",defaultValue:{value:"'message'",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"Duration in ms before auto-closing (0 to disable)",defaultValue:{value:"5000",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether the toast can be dismissed manually",defaultValue:{value:"true",computed:!1}},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    label: string;\r
    onClick: () => void;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:"Action button"},id:{required:!1,tsType:{name:"string"},description:"Unique ID for the toast"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};let o=[],u=[];const f=()=>{u.forEach(e=>e([...o]))},r=e=>{const s=Math.random().toString(36).substring(2,9),a={id:s,visible:!0,variant:"message",duration:5e3,...typeof e=="string"?{description:e}:e};return o=[...o,a],f(),s};r.success=e=>r({...typeof e=="string"?{description:e}:e,variant:"success"});r.error=e=>r({...typeof e=="string"?{description:e}:e,variant:"error"});r.warning=e=>r({...typeof e=="string"?{description:e}:e,variant:"warning"});r.info=e=>r({...typeof e=="string"?{description:e}:e,variant:"info"});r.dismiss=e=>{o=o.map(s=>s.id===e?{...s,visible:!1}:s),f(),setTimeout(()=>{o=o.filter(s=>s.id!==e),f()},400)};const E=()=>{const[e,s]=g.useState(o);return g.useEffect(()=>(u.push(s),()=>{u=u.filter(i=>i!==s)}),[]),{toasts:e,toast:r,dismiss:r.dismiss}},y=({position:e="top-right"})=>{const{toasts:s,dismiss:i}=E();return s.length===0?null:t.jsx("div",{className:`mango-toast-container ${e}`,children:s.map(a=>t.jsx(v,{...a,onClose:i},a.id))})};y.__docgenInfo={description:"",methods:[],displayName:"ToastContainer",props:{position:{required:!1,tsType:{name:"union",raw:"'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'",elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'bottom-center'"}]},description:"",defaultValue:{value:"'top-right'",computed:!1}}}};const M={title:"Components/Toast",parameters:{layout:"centered"},tags:["autodocs"]},c=()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(y,{position:"top-right"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[t.jsx(l,{variant:"outline",onClick:()=>r("This is a simple message"),children:"Show Message"}),t.jsx(l,{variant:"primary",onClick:()=>r.success({title:"Success!",description:"Your changes have been saved successfully."}),children:"Show Success"}),t.jsx(l,{style:{backgroundColor:"#ef4444",color:"white"},onClick:()=>r.error({title:"Error Occurred",description:"Failed to upload files. Please try again."}),children:"Show Error"}),t.jsx(l,{style:{backgroundColor:"#f59e0b",color:"white"},onClick:()=>r.warning({title:"Warning",description:"Your subscription is about to expire."}),children:"Show Warning"}),t.jsx(l,{variant:"secondary",onClick:()=>r.info({title:"New Update",description:"A new version of the app is available.",action:{label:"Update Now",onClick:()=>alert("Updating...")}}),children:"Show Info with Action"}),t.jsx(l,{variant:"ghost",onClick:()=>r({description:"This toast will stay forever until you close it.",duration:0}),children:"Persistent Toast"})]})]});c.__docgenInfo={description:"",methods:[],displayName:"Demo"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>\r
            <ToastContainer position="top-right" />\r
\r
            <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px'
    }}>\r
                <Button variant="outline" onClick={() => toast('This is a simple message')}>\r
                    Show Message\r
                </Button>\r
                <Button variant="primary" onClick={() => toast.success({
        title: 'Success!',
        description: 'Your changes have been saved successfully.'
      })}>\r
                    Show Success\r
                </Button>\r
                <Button style={{
        backgroundColor: '#ef4444',
        color: 'white'
      }} onClick={() => toast.error({
        title: 'Error Occurred',
        description: 'Failed to upload files. Please try again.'
      })}>\r
                    Show Error\r
                </Button>\r
                <Button style={{
        backgroundColor: '#f59e0b',
        color: 'white'
      }} onClick={() => toast.warning({
        title: 'Warning',
        description: 'Your subscription is about to expire.'
      })}>\r
                    Show Warning\r
                </Button>\r
                <Button variant="secondary" onClick={() => toast.info({
        title: 'New Update',
        description: 'A new version of the app is available.',
        action: {
          label: 'Update Now',
          onClick: () => alert('Updating...')
        }
      })}>\r
                    Show Info with Action\r
                </Button>\r
                <Button variant="ghost" onClick={() => toast({
        description: 'This toast will stay forever until you close it.',
        duration: 0
      })}>\r
                    Persistent Toast\r
                </Button>\r
            </div>\r
        </div>;
}`,...c.parameters?.docs?.source}}};const $=["Demo"];export{c as Demo,$ as __namedExportsOrder,M as default};
