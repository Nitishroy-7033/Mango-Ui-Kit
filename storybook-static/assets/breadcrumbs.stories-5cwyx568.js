import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as f,R as D}from"./iframe-QywSF6W6.js";import{c as y}from"./cn-BQHNewu7.js";import{E}from"./ellipsis-BayfGuDk.js";import{C as v}from"./chevron-right-B7G5iz4Z.js";import{H as R}from"./house-DfGxNmEd.js";import{U as _}from"./user-DfzXYxb_.js";import{Z as M}from"./zap-DA5sd4l-.js";import{S as W}from"./shield-BVJfn6Gp.js";import{c as A}from"./createLucideIcon-B-6-c5fd.js";import"./preload-helper-PPVm8Dsz.js";const F=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],G=A("slash",F),s=({items:l=[],separator:h=e.jsx(v,{size:14}),variant:C="default",size:u="md",maxItems:i=0,activeColor:S,textColor:j,hoverColor:z,bgColor:B,className:I="",style:q,showLastSeparator:N=!1})=>{const[T,V]=f.useState(!1),g=(()=>{if(i<=0||l.length<=i||T)return l;const r=Math.ceil((i-1)/2),a=Math.floor((i-1)/2),o=l.slice(0,r),p=l.slice(l.length-a);return[...o,{label:"collapsed",isCollapsedIndicator:!0},...p]})(),k=(r,a)=>{const o=r.icon,p=!!r.icon,b=D.isValidElement(r.icon)?r.icon:o?e.jsx(o,{size:u==="sm"?14:16}):null,w={color:a?S||void 0:r.color||j||void 0},x=e.jsxs("div",{className:y("breadcrumb-item",a&&"active",p&&"has-icon"),style:w,children:[b&&e.jsx("span",{className:"breadcrumb-icon",children:b}),e.jsx("span",{className:"breadcrumb-text",children:r.label})]});return a||!r.href?x:e.jsx("a",{href:r.href,className:"breadcrumb-link",style:{"--hover-color":z},children:x})};return e.jsx("nav",{className:y("breadcrumbs-root",`breadcrumbs-${C}`,`breadcrumbs-${u}`,I),"aria-label":"Breadcrumb",style:{...q,backgroundColor:B||void 0},children:g.map((r,a)=>{const o=a===g.length-1;return r.isCollapsedIndicator?e.jsxs(f.Fragment,{children:[e.jsx("button",{className:"breadcrumb-collapsed-btn",onClick:()=>V(!0),title:"Show all items",children:e.jsx(E,{size:u==="sm"?14:16})}),e.jsx("span",{className:"breadcrumb-separator",children:h})]},"collapsed"):e.jsxs(f.Fragment,{children:[k(r,o),(!o||N)&&e.jsx("span",{className:"breadcrumb-separator",children:h})]},`${r.label}-${a}`)})})};s.displayName="Breadcrumbs";s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Array of breadcrumb items",defaultValue:{value:"[]",computed:!1}},separator:{required:!1,tsType:{name:"ReactNode"},description:"Custom separator element",defaultValue:{value:"<ChevronRight size={14} />",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"Selection for visual style",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the breadcrumbs",defaultValue:{value:"'md'",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:"Maximum number of items to show before collapsing",defaultValue:{value:"0",computed:!1}},activeColor:{required:!1,tsType:{name:"string"},description:"Custom color for active item"},textColor:{required:!1,tsType:{name:"string"},description:"Custom color for idle items"},hoverColor:{required:!1,tsType:{name:"string"},description:"Custom color for hover state"},bgColor:{required:!1,tsType:{name:"string"},description:"Custom background color (mainly for filled variant)"},className:{required:!1,tsType:{name:"string"},description:"Custom CSS classes",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom styles"},showLastSeparator:{required:!1,tsType:{name:"boolean"},description:"Whether to show a separator after the last item (useful for certain layouts)",defaultValue:{value:"false",computed:!1}}}};const ee={title:"Components/Breadcrumbs",component:s,parameters:{layout:"centered"},tags:["autodocs"]},t=[{label:"Home",href:"/",icon:R},{label:"Users",href:"/users",icon:_},{label:"Acknowledge",href:"/users/ack",icon:M},{label:"Security Settings",href:"/settings/security",icon:W},{label:"Current Page"}],n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("section",{children:[e.jsx("p",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"8px"},children:"Default with Icons"}),e.jsx(s,{items:t.slice(0,3)})]}),e.jsxs("section",{children:[e.jsx("p",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"8px"},children:"Filled Variant (Premium)"}),e.jsx(s,{items:t.slice(0,4),variant:"filled"})]}),e.jsxs("section",{children:[e.jsx("p",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"8px"},children:"Outline & Small Size"}),e.jsx(s,{items:t.slice(0,3),variant:"outline",size:"sm"})]}),e.jsxs("section",{children:[e.jsx("p",{style:{fontSize:"0.8rem",color:"#888",marginBottom:"8px"},children:"Ghost Variant & Large Size"}),e.jsx(s,{items:t.slice(0,3),variant:"ghost",size:"lg"})]})]})},c={args:{items:t.slice(0,4),activeColor:"#f97316",hoverColor:"#3b82f6",textColor:"#64748b",variant:"filled",bgColor:"#fff7ed"}},m={args:{items:t,maxItems:3,variant:"filled"}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsx(s,{items:t.slice(0,3),separator:e.jsx(G,{size:14,style:{transform:"rotate(-20deg)"}})}),e.jsx(s,{items:t.slice(0,3),separator:e.jsx("span",{style:{fontWeight:800},children:"/"})}),e.jsx(s,{items:t.slice(0,3),separator:e.jsx(v,{size:14,strokeWidth:3})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
            <section>\r
                <p style={{
        fontSize: '0.8rem',
        color: '#888',
        marginBottom: '8px'
      }}>Default with Icons</p>\r
                <Breadcrumbs items={items.slice(0, 3)} />\r
            </section>\r
\r
            <section>\r
                <p style={{
        fontSize: '0.8rem',
        color: '#888',
        marginBottom: '8px'
      }}>Filled Variant (Premium)</p>\r
                <Breadcrumbs items={items.slice(0, 4)} variant="filled" />\r
            </section>\r
\r
            <section>\r
                <p style={{
        fontSize: '0.8rem',
        color: '#888',
        marginBottom: '8px'
      }}>Outline & Small Size</p>\r
                <Breadcrumbs items={items.slice(0, 3)} variant="outline" size="sm" />\r
            </section>\r
\r
            <section>\r
                <p style={{
        fontSize: '0.8rem',
        color: '#888',
        marginBottom: '8px'
      }}>Ghost Variant & Large Size</p>\r
                <Breadcrumbs items={items.slice(0, 3)} variant="ghost" size="lg" />\r
            </section>\r
        </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: items.slice(0, 4),
    activeColor: '#f97316',
    // Mango Orange
    hoverColor: '#3b82f6',
    // Blue
    textColor: '#64748b',
    variant: 'filled',
    bgColor: '#fff7ed'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: items,
    maxItems: 3,
    variant: 'filled'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>\r
            <Breadcrumbs items={items.slice(0, 3)} separator={<Slash size={14} style={{
      transform: 'rotate(-20deg)'
    }} />} />\r
            <Breadcrumbs items={items.slice(0, 3)} separator={<span style={{
      fontWeight: 800
    }}>/</span>} />\r
            <Breadcrumbs items={items.slice(0, 3)} separator={<ChevronRight size={14} strokeWidth={3} />} />\r
        </div>
}`,...d.parameters?.docs?.source}}};const re=["Gallery","CustomColors","Collapsed","CustomSeparators"];export{m as Collapsed,c as CustomColors,d as CustomSeparators,n as Gallery,re as __namedExportsOrder,ee as default};
