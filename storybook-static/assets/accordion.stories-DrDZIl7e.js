import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as X,R as Z}from"./iframe-QywSF6W6.js";import{c as p}from"./cn-BQHNewu7.js";import{C as Y}from"./chevron-down-BNiyiuGD.js";import{S as J}from"./settings-CE_Qmr37.js";import{S as ee}from"./shield-BVJfn6Gp.js";import{C as ae}from"./credit-card-DV0cfzNO.js";import{B as re}from"./bell-06A52uJJ.js";import{H as te}from"./heart-ySDmphwf.js";import{C as ne}from"./circle-question-mark-CUwy4as9.js";import{M as se}from"./minus-ByLZpyaW.js";import{P as oe}from"./plus-D8H5l7vy.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-B-6-c5fd.js";const ie=({title:t,content:c,icon:r,disabled:o,isOpen:i,onClick:P,iconPosition:g="left",arrowPosition:v="right",hideArrow:y=!1,expandIcon:d,collapseIcon:l,itemClassName:R,headerClassName:D,contentClassName:F,accentColor:_,headerBg:$,contentBg:E,titleColor:m,contentColor:H,iconColor:h,arrowColor:b,borderColor:L})=>{const C=d||l,G={"--primaryColor":_,"--primaryContainercolor":$,"--secondaryContainercolor":E,"--textColor":m,"--labelSecondaryColor":H,"--borderColor":L},Q=h?{color:h}:void 0,w=b?{color:b}:void 0;return e.jsxs("div",{className:p("accordion-item",i&&"open",o&&"disabled",R),style:G,children:[e.jsxs("button",{className:p("accordion-trigger",D),onClick:P,disabled:o,"aria-expanded":i,children:[v==="left"&&!y&&e.jsx("div",{className:"accordion-arrow left",style:w,children:C?i?l:d:e.jsx(Y,{size:18})}),e.jsxs("div",{className:p("trigger-content",g==="right"&&"reverse"),children:[r&&e.jsx(r,{size:20,className:"accordion-icon",style:Q}),e.jsx("span",{className:"accordion-title",style:m?{color:m}:void 0,children:t})]}),v==="right"&&!y&&e.jsx("div",{className:"accordion-arrow",style:w,children:C?i?l:d:e.jsx(Y,{size:18})})]}),e.jsx("div",{className:"accordion-content-wrapper",children:e.jsx("div",{className:p("accordion-content",g==="left"&&r&&"indent-content",F),children:c})})]})},M=({items:t=[],allowMultiple:c=!1,variant:r="default",size:o="md",rounded:i="lg",iconPosition:P="left",arrowPosition:g="right",hideArrow:v=!1,expandIcon:y,collapseIcon:d,activeItems:l,onChange:R,defaultOpen:D=[],className:F,itemClassName:_,headerClassName:$,contentClassName:E,accentColor:m,headerBg:H,contentBg:h,titleColor:b,contentColor:L,iconColor:C,arrowColor:G,borderColor:Q})=>{const[w,K]=X.useState(D),u=l!==void 0?l:w,U=n=>{let s;c?s=u.includes(n)?u.filter(W=>W!==n):[...u,n]:s=u.includes(n)?[]:[n],l===void 0&&K(s),R?.(s)};return e.jsx("div",{className:p("accordion-container",`accordion-variant-${r}`,`accordion-size-${o}`,`accordion-rounded-${i}`,F),children:t.map((n,s)=>e.jsx(ie,{...n,variant:r,size:o,rounded:i,iconPosition:P,arrowPosition:g,hideArrow:v,expandIcon:y,collapseIcon:d,isOpen:u.includes(s),onClick:()=>U(s),itemClassName:_,headerClassName:$,contentClassName:E,accentColor:m,headerBg:H,contentBg:h,titleColor:b,contentColor:L,iconColor:C,arrowColor:G,borderColor:Q},n.id||s))})};M.displayName="Accordion";M.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'filled' | 'separated' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'separated'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},arrowPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},hideArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandIcon:{required:!1,tsType:{name:"ReactNode"},description:""},collapseIcon:{required:!1,tsType:{name:"ReactNode"},description:""},activeItems:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(indices: number[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"indices"}],return:{name:"void"}}},description:""},defaultOpen:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},itemClassName:{required:!1,tsType:{name:"string"},description:""},headerClassName:{required:!1,tsType:{name:"string"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:""},headerBg:{required:!1,tsType:{name:"string"},description:""},contentBg:{required:!1,tsType:{name:"string"},description:""},titleColor:{required:!1,tsType:{name:"string"},description:""},contentColor:{required:!1,tsType:{name:"string"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},arrowColor:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},compact:{required:!1,tsType:{name:"boolean"},description:""}}};const xe={title:"Components/Accordion",component:M,parameters:{layout:"padded",backgrounds:{default:"dark"}},tags:["autodocs"]},a=[{title:"Account Settings",icon:J,content:"Manage your account preferences, security settings, and personal information. You can change your password, update your email, and manage connected third-party services."},{title:"Privacy & Security",icon:ee,content:"Control your visibility and security options. Enable two-factor authentication, manage app permissions, and view login activity."},{title:"Billing Information",icon:ae,content:"View your subscription status, update payment methods, and download your billing history and invoices."},{title:"Notifications",icon:re,content:"Configure how and when you receive notifications from the platform. Choose between email, push notifications, and SMS alerts."}],x={args:{items:a,defaultOpen:[0]}},S={args:{items:a,variant:"bordered",defaultOpen:[0]}},O={args:{items:a,variant:"separated",allowMultiple:!0,defaultOpen:[0]}},T={args:{items:a,variant:"filled",defaultOpen:[0]}},q={args:{items:a,variant:"ghost",defaultOpen:[0]}},N={args:{items:a,size:"sm",defaultOpen:[0]}},A={args:{items:a,size:"lg",defaultOpen:[0]}},j={args:{items:a,expandIcon:e.jsx(oe,{size:18}),collapseIcon:e.jsx(se,{size:18}),defaultOpen:[0]}},I={args:{items:a,arrowPosition:"left",defaultOpen:[0]}},z={args:{items:a,iconPosition:"right",defaultOpen:[0]}},V={args:{items:a,rounded:"full",defaultOpen:[0]}},k={args:{items:[...a.slice(0,2),{title:"Archived Settings (Disabled)",icon:ne,content:"This content is archived.",disabled:!0},...a.slice(2)],defaultOpen:[0]}},B={args:{items:[{title:"Premium Feature",icon:te,content:"This section has custom colors for a more branded look."},{title:"Analytics",icon:J,content:"View detailed performance metrics here."}],accentColor:"#ec4899",headerBg:"#fdf2f8",contentBg:"#ffffff",titleColor:"#be185d",contentColor:"#db2777",iconColor:"#db2777",arrowColor:"#db2777",borderColor:"#fbcfe8",variant:"separated",rounded:"xl",defaultOpen:[0]}},f=()=>{const[t,c]=Z.useState([0]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex gap-2 mb-4",children:[0,1,2,3].map(r=>e.jsxs("button",{onClick:()=>c(t.includes(r)?t.filter(o=>o!==r):[...t,r]),className:`px-3 py-1 rounded-md text-sm ${t.includes(r)?"bg-mango-500 text-white":"bg-neutral-800 text-neutral-400"}`,children:["Toggle ",r]},r))}),e.jsx(M,{items:a,activeItems:t,onChange:c,allowMultiple:!0})]})};f.__docgenInfo={description:"",methods:[],displayName:"Controlled"};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    defaultOpen: [0]
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    variant: 'bordered',
    defaultOpen: [0]
  }
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    variant: 'separated',
    allowMultiple: true,
    defaultOpen: [0]
  }
}`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    variant: 'filled',
    defaultOpen: [0]
  }
}`,...T.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    variant: 'ghost',
    defaultOpen: [0]
  }
}`,...q.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    size: 'sm',
    defaultOpen: [0]
  }
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    size: 'lg',
    defaultOpen: [0]
  }
}`,...A.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    expandIcon: <Plus size={18} />,
    collapseIcon: <Minus size={18} />,
    defaultOpen: [0]
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    arrowPosition: 'left',
    defaultOpen: [0]
  }
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    iconPosition: 'right',
    defaultOpen: [0]
  }
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    rounded: 'full',
    defaultOpen: [0]
  }
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: [...items.slice(0, 2), {
      title: 'Archived Settings (Disabled)',
      icon: HelpCircle,
      content: 'This content is archived.',
      disabled: true
    }, ...items.slice(2)],
    defaultOpen: [0]
  }
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      title: 'Premium Feature',
      icon: Heart,
      content: 'This section has custom colors for a more branded look.'
    }, {
      title: 'Analytics',
      icon: Settings,
      content: 'View detailed performance metrics here.'
    }],
    accentColor: '#ec4899',
    // Pink
    headerBg: '#fdf2f8',
    contentBg: '#ffffff',
    titleColor: '#be185d',
    contentColor: '#db2777',
    iconColor: '#db2777',
    arrowColor: '#db2777',
    borderColor: '#fbcfe8',
    variant: 'separated',
    rounded: 'xl',
    defaultOpen: [0]
  }
}`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [active, setActive] = React.useState<number[]>([0]);
  return <div className="space-y-4">\r
            <div className="flex gap-2 mb-4">\r
                {[0, 1, 2, 3].map(i => <button key={i} onClick={() => setActive(active.includes(i) ? active.filter(x => x !== i) : [...active, i])} className={\`px-3 py-1 rounded-md text-sm \${active.includes(i) ? 'bg-mango-500 text-white' : 'bg-neutral-800 text-neutral-400'}\`}>\r
                        Toggle {i}\r
                    </button>)}\r
            </div>\r
            <Accordion items={items} activeItems={active} onChange={setActive} allowMultiple />\r
        </div>;
}`,...f.parameters?.docs?.source}}};const Se=["Default","Bordered","Separated","Filled","Ghost","Small","Large","CustomIcons","ArrowOnLeft","IconsOnRight","FullRounded","DisabledItems","CustomColors","Controlled"];export{I as ArrowOnLeft,S as Bordered,f as Controlled,B as CustomColors,j as CustomIcons,x as Default,k as DisabledItems,T as Filled,V as FullRounded,q as Ghost,z as IconsOnRight,A as Large,O as Separated,N as Small,Se as __namedExportsOrder,xe as default};
