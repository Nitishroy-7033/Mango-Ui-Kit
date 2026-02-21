import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-QywSF6W6.js";import{c as m}from"./cn-BQHNewu7.js";import{c as i}from"./createLucideIcon-B-6-c5fd.js";import{U as p}from"./users-B9_schhY.js";import"./preload-helper-PPVm8Dsz.js";const f=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],u=i("dollar-sign",f);const j=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],v=i("shopping-cart",j);const N=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],S=i("trending-down",N);const T=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],h=i("trending-up",T),a=({label:y,value:g,icon:d,trend:r,trendLabel:l,variant:b="primary",className:x=""})=>{const c=r&&r>0;return e.jsxs("div",{className:m("stat-card",`stat-${b}`,x),children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-info",children:e.jsx("span",{className:"stat-label",children:y})}),d&&e.jsx("div",{className:"icon-wrapper",children:e.jsx(d,{size:24})})]}),e.jsx("div",{className:"stat-main",children:e.jsx("span",{className:"stat-value",children:g})}),(r!==void 0||l)&&e.jsxs("div",{className:"stat-footer",children:[r!==void 0&&e.jsxs("div",{className:m("trend-badge",c?"trend-up":"trend-down"),children:[c?e.jsx(h,{size:14}):e.jsx(S,{size:14}),e.jsxs("span",{children:[Math.abs(r),"%"]})]}),l&&e.jsx("span",{className:"trend-label",children:l})]})]})};a.displayName="StatCard";a.__docgenInfo={description:"",methods:[],displayName:"StatCard",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},icon:{required:!1,tsType:{name:"ComponentType",elements:[{name:"any"}],raw:"ComponentType<any>"},description:""},trend:{required:!1,tsType:{name:"number"},description:""},trendLabel:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const D={title:"Components/StatCard",component:a,parameters:{layout:"padded"},tags:["autodocs"]},n={args:{label:"Total Users",value:"12,430",icon:p,trend:12,trendLabel:"from last month"}},s={args:{label:"Revenue",value:"$48,295",icon:u,trend:-4,trendLabel:"from last month",variant:"error"}},t={args:{label:"Monthly Sales",value:"3,821",icon:v,trend:8,trendLabel:"Compared to last month",variant:"success"}},o={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",style:{width:600},children:[e.jsx(a,{label:"Total Users",value:"12,430",icon:p,trend:12,variant:"primary"}),e.jsx(a,{label:"Revenue",value:"$48,295",icon:u,trend:8,variant:"secondary"}),e.jsx(a,{label:"Growth",value:"+24%",icon:h,trend:3,variant:"success"}),e.jsx(a,{label:"Orders",value:"1,029",icon:v,trend:-2,variant:"error"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Users',
    value: '12,430',
    icon: Users,
    trend: 12,
    trendLabel: 'from last month'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Revenue',
    value: '$48,295',
    icon: DollarSign,
    trend: -4,
    trendLabel: 'from last month',
    variant: 'error'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Monthly Sales',
    value: '3,821',
    icon: ShoppingCart,
    trend: 8,
    trendLabel: 'Compared to last month',
    variant: 'success'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4" style={{
    width: 600
  }}>\r
            <StatCard label="Total Users" value="12,430" icon={Users} trend={12} variant="primary" />\r
            <StatCard label="Revenue" value="$48,295" icon={DollarSign} trend={8} variant="secondary" />\r
            <StatCard label="Growth" value="+24%" icon={TrendingUp} trend={3} variant="success" />\r
            <StatCard label="Orders" value="1,029" icon={ShoppingCart} trend={-2} variant="error" />\r
        </div>
}`,...o.parameters?.docs?.source}}};const L=["Default","Negative","WithDescription","Grid"];export{n as Default,o as Grid,s as Negative,t as WithDescription,L as __namedExportsOrder,D as default};
