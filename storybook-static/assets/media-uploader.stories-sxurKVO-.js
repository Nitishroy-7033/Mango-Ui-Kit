import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as M}from"./iframe-QywSF6W6.js";import{c as n}from"./cn-BQHNewu7.js";import{P as H}from"./progress-bar-BDDhuMYv.js";import{T as J}from"./trash-2--y-KK5Rq.js";import{U as C,L as K}from"./upload-DRV5ZfXD.js";import{c as q}from"./createLucideIcon-B-6-c5fd.js";import{C as Q,F as X,a as Y}from"./film-DCNc2lPl.js";import{P as Z}from"./plus-D8H5l7vy.js";import{C as ee}from"./circle-alert-VONkAnIf.js";import{I as ae}from"./image-Bd7DuAI6.js";import{F as re}from"./file-text-n9cfvCak.js";import{S as se}from"./spinner-BLi69KHB.js";import{B as F}from"./button-01qaZYzQ.js";import"./preload-helper-PPVm8Dsz.js";import"./settings-CE_Qmr37.js";const te=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],ie=q("circle-plus",te);const oe=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],ne=q("music",oe),o=({multiple:l=!0,maxSize:y=10,accept:v="*",onFilesAdded:A,onFileRemoved:I,files:c,trigger:z="button",layout:j="list",label:d="Upload",disabled:t=!1,className:T="",showPreviews:W=!0,style:B})=>{const[P,b]=M.useState([]),N=M.useRef(null),p=c||P,D=a=>{a.target.files&&a.target.files.length>0&&(R(Array.from(a.target.files)),a.target.value="")},R=a=>{const r=a.map(s=>{const k=Math.random().toString(36).substr(2,9),w=s.size>y*1024*1024,E={id:k,file:s,name:s.name,size:s.size,type:s.type,status:w?"error":"uploading",progress:0,error:w?`File exceeds ${y}MB limit`:void 0};if(W&&s.type.startsWith("image/")){const U=new FileReader;U.onload=G=>{S(k,{thumbnail:G.target?.result})},U.readAsDataURL(s)}return E}),i=l?[...p,...r]:[r[0]];c||b(i),A?.(r),r.forEach(s=>{s.status==="uploading"&&_(s.id)})},_=a=>{let r=0;const i=setInterval(()=>{r+=Math.floor(Math.random()*30)+10,r>=100?(r=100,clearInterval(i),S(a,{status:"success",progress:100})):S(a,{progress:r})},500)},S=(a,r)=>{c||b(i=>i.map(s=>s.id===a?{...s,...r}:s))},V=a=>{c||b(r=>r.filter(i=>i.id!==a)),I?.(a)},L=a=>a.status==="error"?e.jsx(ee,{className:"mango-uploader-icon error"}):a.type?.startsWith("image/")?e.jsx(ae,{className:"mango-uploader-icon image"}):a.type?.startsWith("video/")?e.jsx(X,{className:"mango-uploader-icon video"}):a.type?.startsWith("audio/")?e.jsx(ne,{className:"mango-uploader-icon audio"}):a.type?.includes("pdf")?e.jsx(re,{className:"mango-uploader-icon pdf"}):e.jsx(Y,{className:"mango-uploader-icon generic"}),O=()=>{const a=()=>!t&&N.current?.click();switch(z){case"avatar":const r=p.find(i=>i.thumbnail)?.thumbnail;return e.jsxs("div",{className:n("mango-uploader-avatar",t&&"is-disabled"),onClick:a,children:[r?e.jsx("img",{src:r,alt:"Avatar",className:"avatar-img"}):e.jsx("div",{className:"avatar-placeholder",children:e.jsx(Q,{size:24})}),e.jsx("div",{className:"avatar-overlay",children:e.jsx(Z,{size:16})})]});case"card":return e.jsxs("div",{className:n("mango-uploader-card-trigger",t&&"is-disabled"),onClick:a,children:[e.jsx(ie,{size:32,strokeWidth:1.5}),e.jsx("span",{children:d})]});case"link":return e.jsxs("button",{className:"mango-uploader-link-trigger",onClick:a,disabled:t,children:[e.jsx(K,{size:16}),e.jsx("span",{children:d})]});case"icon-only":return e.jsx(F,{variant:"ghost",size:"sm",iconOnly:!0,icon:e.jsx(C,{size:18}),onClick:a,disabled:t});case"dropzone":return e.jsx("div",{className:n("mango-uploader-dropzone",t&&"is-disabled"),onClick:a,children:e.jsxs("div",{className:"dropzone-inner",children:[e.jsx(C,{size:32,className:"upload-icon"}),e.jsx("p",{children:d||"Drag & Drop files or click to browse"}),e.jsxs("span",{className:"limit-hint",children:["Max ",y,"MB per file"]})]})});default:return e.jsx(F,{variant:"primary",onClick:a,disabled:t,icon:e.jsx(C,{size:18}),children:d})}},$=Array.isArray(v)?v.join(","):v;return e.jsxs("div",{className:n("mango-media-uploader",T),style:B,children:[e.jsx("input",{type:"file",ref:N,onChange:D,multiple:l,accept:$,disabled:t,className:"mango-uploader-input",style:{display:"none"}}),e.jsx("div",{className:"mango-uploader-trigger-wrapper",children:O()}),p.length>0&&z!=="avatar"&&e.jsx("div",{className:n("mango-uploader-display",`layout-${j}`),children:p.map(a=>e.jsx("div",{className:n("mango-uploader-item",`is-${a.status}`,a.status==="uploading"&&"is-dashed",j==="grid"&&"is-grid-item"),children:e.jsxs("div",{className:"item-main",children:[e.jsx("div",{className:"item-preview",children:a.status==="uploading"?e.jsx(se,{size:j==="grid"?24:32,variant:"circular",style:{color:"var(--primaryColor)"}}):a.thumbnail?e.jsx("img",{src:a.thumbnail,alt:a.name,className:"thumbnail"}):L(a)}),e.jsxs("div",{className:"item-content",children:[e.jsxs("div",{className:"item-info",children:[e.jsx("span",{className:n("item-name",`status-${a.status}`),children:a.name}),a.status==="error"&&e.jsx("span",{className:"item-error",children:a.error})]}),a.status==="uploading"&&e.jsx("div",{className:"item-progress",children:e.jsx(H,{progress:a.progress,size:"xs",customColor:"var(--primaryColor)",rounded:"full"})})]}),e.jsx("button",{className:"item-remove",onClick:r=>{r.stopPropagation(),V(a.id)},disabled:t,title:"Remove file",children:e.jsx(J,{size:18})})]})},a.id))})]})};o.displayName="MediaUploader";o.__docgenInfo={description:"",methods:[],displayName:"MediaUploader",props:{multiple:{required:!1,tsType:{name:"boolean"},description:"Whether to allow multiple file uploads",defaultValue:{value:"true",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"Maximum file size in MB",defaultValue:{value:"10",computed:!1}},accept:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Allowed file formats (e.g. ['image/*', '.pdf', 'video/*'])",defaultValue:{value:"'*'",computed:!1}},onFilesAdded:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: UploadedFile[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},name:"files"}],return:{name:"void"}}},description:"Callback when files are added"},onFileRemoved:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when a file is removed"},files:{required:!1,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:"Initial list of files"},trigger:{required:!1,tsType:{name:"union",raw:"'button' | 'dropzone' | 'avatar' | 'card' | 'link' | 'icon-only' | 'compact'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'dropzone'"},{name:"literal",value:"'avatar'"},{name:"literal",value:"'card'"},{name:"literal",value:"'link'"},{name:"literal",value:"'icon-only'"},{name:"literal",value:"'compact'"}]},description:"Customize the trigger button/area",defaultValue:{value:"'button'",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'list' | 'grid' | 'compact'",elements:[{name:"literal",value:"'list'"},{name:"literal",value:"'grid'"},{name:"literal",value:"'compact'"}]},description:"How to display the uploaded files",defaultValue:{value:"'list'",computed:!1}},label:{required:!1,tsType:{name:"ReactNode"},description:"Custom label for the button/area",defaultValue:{value:"'Upload'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},showPreviews:{required:!1,tsType:{name:"boolean"},description:"Show actual image previews for images",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const ze={title:"Components/MediaUploader",component:o,parameters:{layout:"padded"},tags:["autodocs"]},m={args:{label:"Upload Files",maxSize:5,multiple:!0}},u={args:{trigger:"avatar",accept:"image/*",multiple:!1,label:"Change Photo"},render:l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[e.jsx(o,{...l}),e.jsx("p",{style:{fontSize:"14px",color:"var(--labelSecondaryColor)"},children:"Click to update profile photo"})]})},g={args:{label:"Add Photos",trigger:"card",layout:"grid",multiple:!0,files:[{id:"1",name:"beach_vacation.jpg",status:"success",thumbnail:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200&auto=format&fit=crop"},{id:"2",name:"mountain_hike.jpg",status:"success",thumbnail:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=200&auto=format&fit=crop"}]}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"8px"},children:"Link Style"}),e.jsx(o,{trigger:"link",label:"Attach document",accept:".pdf"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"8px"},children:"Icon Only (Small Space)"}),e.jsx(o,{trigger:"icon-only"})]})]})},h={args:{label:"Upload",trigger:"button",files:[{id:"1",name:"xxx.png",status:"uploading",progress:45},{id:"2",name:"yyy.png",status:"success",thumbnail:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",progress:100},{id:"3",name:"zzz.png",status:"error",error:"File format not supported",progress:0}]}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"500px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"8px"},children:"Strict Size (Max 1MB)"}),e.jsx(o,{maxSize:1,label:"Upload Small File"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"8px"},children:"Images Only"}),e.jsx(o,{accept:"image/*",label:"Choose Photos",trigger:"dropzone"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"8px"},children:"Single PDF Only"}),e.jsx(o,{accept:".pdf",multiple:!1,label:"Upload Agreement"})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload Files',
    maxSize: 5,
    multiple: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: 'avatar',
    accept: 'image/*',
    multiple: false,
    label: 'Change Photo'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px'
  }}>\r
            <MediaUploader {...args} />\r
            <p style={{
      fontSize: '14px',
      color: 'var(--labelSecondaryColor)'
    }}>Click to update profile photo</p>\r
        </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Add Photos',
    trigger: 'card',
    layout: 'grid',
    multiple: true,
    files: [{
      id: '1',
      name: 'beach_vacation.jpg',
      status: 'success',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200&auto=format&fit=crop'
    }, {
      id: '2',
      name: 'mountain_hike.jpg',
      status: 'success',
      thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=200&auto=format&fit=crop'
    }]
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '8px'
      }}>Link Style</p>\r
                <MediaUploader trigger="link" label="Attach document" accept=".pdf" />\r
            </div>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '8px'
      }}>Icon Only (Small Space)</p>\r
                <MediaUploader trigger="icon-only" />\r
            </div>\r
        </div>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload',
    trigger: 'button',
    files: [{
      id: '1',
      name: 'xxx.png',
      status: 'uploading',
      progress: 45
    }, {
      id: '2',
      name: 'yyy.png',
      status: 'success',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop',
      progress: 100
    }, {
      id: '3',
      name: 'zzz.png',
      status: 'error',
      error: 'File format not supported',
      progress: 0
    }]
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '500px'
  }}>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '8px'
      }}>Strict Size (Max 1MB)</p>\r
                <MediaUploader maxSize={1} label="Upload Small File" />\r
            </div>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '8px'
      }}>Images Only</p>\r
                <MediaUploader accept="image/*" label="Choose Photos" trigger="dropzone" />\r
            </div>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '8px'
      }}>Single PDF Only</p>\r
                <MediaUploader accept=".pdf" multiple={false} label="Upload Agreement" />\r
            </div>\r
        </div>
}`,...x.parameters?.docs?.source}}};const Ne=["Default","AvatarMode","GridGalleryLayout","MiniTriggers","CustomUIReference","Constraints"];export{u as AvatarMode,x as Constraints,h as CustomUIReference,m as Default,g as GridGalleryLayout,f as MiniTriggers,Ne as __namedExportsOrder,ze as default};
