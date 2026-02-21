import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as D}from"./iframe-QywSF6W6.js";import{c as q}from"./cn-BQHNewu7.js";import{c as k}from"./createLucideIcon-B-6-c5fd.js";import{C as M}from"./chevron-left-Tn_oAlSe.js";import{E as O}from"./ellipsis-BayfGuDk.js";import{C as E}from"./chevron-right-B7G5iz4Z.js";import"./preload-helper-PPVm8Dsz.js";const $=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],F=k("chevrons-left",$);const G=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],H=k("chevrons-right",G),y=({currentPage:a,totalPages:t,onPageChange:P,variant:z="modern",size:l="md",siblingCount:i=1,showFirstLast:W=!0,showLabels:C=!1,labels:d,disabled:o=!1,className:L="",align:B="center",color:S,style:_})=>{const V=D.useMemo(()=>{if(i+5>=t)return Array.from({length:t},(n,p)=>p+1);const m=Math.max(a-i,1),w=Math.min(a+i,t),j=m>2,b=w<t-2,T=1,A=t;if(!j&&b){let n=3+2*i;return[...Array.from({length:n},(N,R)=>R+1),"DOTS",t]}if(j&&!b){let n=3+2*i,p=Array.from({length:n},(N,R)=>t-n+R+1);return[T,"DOTS",...p]}if(j&&b){let n=Array.from({length:w-m+1},(p,N)=>m+N);return[T,"DOTS",...n,"DOTS",A]}return[]},[t,i,a]),c=s=>{s>=1&&s<=t&&!o&&P(s)};if(t<=1)return null;const I={..._,...S?{"--pagination-active-bg":S}:{}};return e.jsx("nav",{className:q("mango-pagination",`is-${z}`,`size-${l}`,`align-${B}`,L),style:I,"aria-label":"Pagination",children:e.jsxs("ul",{className:"pagination-list",children:[W&&e.jsx("li",{className:"pagination-item",children:e.jsx("button",{className:"pagination-btn nav-btn",onClick:()=>c(1),disabled:a===1||o,title:"First Page",children:d?.first||e.jsx(F,{size:l==="lg"?20:16})})}),e.jsx("li",{className:"pagination-item",children:e.jsxs("button",{className:"pagination-btn nav-btn",onClick:()=>c(a-1),disabled:a===1||o,title:"Previous Page",children:[d?.prev||e.jsx(M,{size:l==="lg"?20:16}),C&&e.jsx("span",{className:"btn-text",children:"Prev"})]})}),V.map((s,m)=>s==="DOTS"?e.jsx("li",{className:"pagination-item dots",children:e.jsx(O,{size:16})},`dots-${m}`):e.jsx("li",{className:"pagination-item",children:e.jsx("button",{className:q("pagination-btn page-num",a===s&&"is-active"),onClick:()=>c(s),disabled:o,"aria-current":a===s?"page":void 0,children:s})},s)),e.jsx("li",{className:"pagination-item",children:e.jsxs("button",{className:"pagination-btn nav-btn",onClick:()=>c(a+1),disabled:a===t||o,title:"Next Page",children:[C&&e.jsx("span",{className:"btn-text",children:"Next"}),d?.next||e.jsx(E,{size:l==="lg"?20:16})]})}),W&&e.jsx("li",{className:"pagination-item",children:e.jsx("button",{className:"pagination-btn nav-btn",onClick:()=>c(t),disabled:a===t||o,title:"Last Page",children:d?.last||e.jsx(H,{size:l==="lg"?20:16})})})]})})};y.displayName="Pagination";y.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"Current active page (1-indexed)"},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback when page changes"},variant:{required:!1,tsType:{name:"union",raw:"'classic' | 'modern' | 'pills' | 'minimal' | 'simple' | 'ghost'",elements:[{name:"literal",value:"'classic'"},{name:"literal",value:"'modern'"},{name:"literal",value:"'pills'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'simple'"},{name:"literal",value:"'ghost'"}]},description:"Visual style variant",defaultValue:{value:"'modern'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of pagination buttons",defaultValue:{value:"'md'",computed:!1}},siblingCount:{required:!1,tsType:{name:"number"},description:"Number of pages to show around current page",defaultValue:{value:"1",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:'Whether to show "First" and "Last" buttons',defaultValue:{value:"true",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:'Whether to show "Prev" and "Next" text labels',defaultValue:{value:"false",computed:!1}},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
    first?: React.ReactNode;\r
    last?: React.ReactNode;\r
    prev?: React.ReactNode;\r
    next?: React.ReactNode;\r
}`,signature:{properties:[{key:"first",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"last",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"prev",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"next",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}},description:"Custom labels for buttons"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Horizontal alignment",defaultValue:{value:"'center'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Custom accent color"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"}}};const ae={title:"Components/Pagination",component:y,parameters:{layout:"centered"},tags:["autodocs"]},r=a=>{const[t,P]=D.useState(a.currentPage||1);return e.jsx(y,{...a,currentPage:t,onPageChange:P})},g={render:a=>e.jsx(r,{...a}),args:{totalPages:10,currentPage:1}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"12px"},children:"Modern (Default)"}),e.jsx(r,{totalPages:8,variant:"modern"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"12px"},children:"Pills"}),e.jsx(r,{totalPages:8,variant:"pills"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"12px"},children:"Classic"}),e.jsx(r,{totalPages:8,variant:"classic"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"12px"},children:"Simple (Grouped)"}),e.jsx(r,{totalPages:8,variant:"simple"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"12px"},children:"Minimal"}),e.jsx(r,{totalPages:8,variant:"minimal"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:700,marginBottom:"12px"},children:"Ghost"}),e.jsx(r,{totalPages:8,variant:"ghost"})]})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(r,{totalPages:5,size:"sm"}),e.jsx(r,{totalPages:5,size:"md"}),e.jsx(r,{totalPages:5,size:"lg"})]})},x={render:a=>e.jsx(r,{...a}),args:{totalPages:20,showLabels:!0,showFirstLast:!0}},h={render:a=>e.jsx(r,{...a}),args:{totalPages:100,currentPage:50,siblingCount:1}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(r,{totalPages:10,color:"#8b5cf6",variant:"pills"}),e.jsx(r,{totalPages:10,color:"#10b981",variant:"modern"}),e.jsx(r,{totalPages:10,color:"#f43f5e",variant:"classic"})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 10,
    currentPage: 1
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  }}>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '12px'
      }}>Modern (Default)</p>\r
                <PaginationWrapper totalPages={8} variant="modern" />\r
            </div>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '12px'
      }}>Pills</p>\r
                <PaginationWrapper totalPages={8} variant="pills" />\r
            </div>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '12px'
      }}>Classic</p>\r
                <PaginationWrapper totalPages={8} variant="classic" />\r
            </div>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '12px'
      }}>Simple (Grouped)</p>\r
                <PaginationWrapper totalPages={8} variant="simple" />\r
            </div>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '12px'
      }}>Minimal</p>\r
                <PaginationWrapper totalPages={8} variant="minimal" />\r
            </div>\r
            <div>\r
                <p style={{
        fontWeight: 700,
        marginBottom: '12px'
      }}>Ghost</p>\r
                <PaginationWrapper totalPages={8} variant="ghost" />\r
            </div>\r
        </div>
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>\r
            <PaginationWrapper totalPages={5} size="sm" />\r
            <PaginationWrapper totalPages={5} size="md" />\r
            <PaginationWrapper totalPages={5} size="lg" />\r
        </div>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 20,
    showLabels: true,
    showFirstLast: true
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    totalPages: 100,
    currentPage: 50,
    siblingCount: 1
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>\r
            <PaginationWrapper totalPages={10} color="#8b5cf6" variant="pills" />\r
            <PaginationWrapper totalPages={10} color="#10b981" variant="modern" />\r
            <PaginationWrapper totalPages={10} color="#f43f5e" variant="classic" />\r
        </div>
}`,...v.parameters?.docs?.source}}};const te=["Default","AllVariants","Sizes","WithLabels","LargePageRange","CustomColors"];export{u as AllVariants,v as CustomColors,g as Default,h as LargePageRange,f as Sizes,x as WithLabels,te as __namedExportsOrder,ae as default};
