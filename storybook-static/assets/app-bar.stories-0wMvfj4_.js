import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-QywSF6W6.js";import{c as i}from"./cn-BQHNewu7.js";import{c as v}from"./createLucideIcon-B-6-c5fd.js";import{S as G}from"./search-BLKqZgPB.js";import{M as J,S as K}from"./sun-BaXMpgoR.js";import{B as W}from"./bell-06A52uJJ.js";import{C as S}from"./chevron-down-BNiyiuGD.js";import{U as Q}from"./user-DfzXYxb_.js";import{S as X}from"./settings-CE_Qmr37.js";import{L as Y}from"./log-out-HqmCTDqW.js";import{B as l}from"./button-01qaZYzQ.js";import{H as Z}from"./house-DfGxNmEd.js";import{I as ee}from"./info-CClOfhqI.js";import{R as ae}from"./rocket-DSBeRKUx.js";import{C as re}from"./circle-question-mark-CUwy4as9.js";import"./preload-helper-PPVm8Dsz.js";import"./spinner-BLi69KHB.js";const se=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],ne=v("crown",se);const te=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],oe=v("menu",te);const ie=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],z=v("package",ie);const le=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],ce=v("panels-top-left",le),de=({item:a})=>{const[c,d]=g.useState(!1),n=a.icon,r=a.children&&a.children.length>0;return e.jsxs("div",{className:i("nav-item-dropdown",r&&"has-children"),onMouseEnter:()=>r&&d(!0),onMouseLeave:()=>r&&d(!1),children:[e.jsxs("button",{className:i("nav-link",a.active&&"active"),onClick:()=>a.onClick?.(),children:[n&&e.jsx(n,{size:18}),e.jsx("span",{children:a.label}),r&&e.jsx(S,{size:14,className:i("nav-arrow",c&&"rotated")})]}),r&&c&&e.jsx("div",{className:"nav-dropdown-menu",children:a.children?.map((t,y)=>e.jsxs("button",{className:"dropdown-item",onClick:()=>t.onClick?.(),children:[t.icon&&e.jsx(t.icon,{size:16}),e.jsx("span",{children:t.label})]},y))})]})},q=({variant:a="glass",sticky:c=!0,fixed:d=!1,logo:n,brandName:r,leftContent:t,centerContent:y,rightContent:B,navItems:I=[],user:s,onLogout:M,subscriptionPlan:b,notificationCount:w=0,showThemeToggle:L=!0,theme:R="light",onToggleTheme:k,showSidebarToggle:U=!1,onToggleSidebar:V,showSearch:A=!0,searchPlaceholder:_="Search...",onSearch:D,className:P,bgColor:E,textColor:F,borderColor:O,accentColor:H})=>{const[x,T]=g.useState(!1),j=g.useRef(null);g.useEffect(()=>{const o=N=>{j.current&&!j.current.contains(N.target)&&T(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]);const $={"--primaryContainercolor":E,"--textColor":F,"--borderColor":O,"--primaryColor":H};return e.jsxs("header",{className:i("app-bar",`app-bar-variant-${a}`,c&&"app-bar-sticky",d&&"app-bar-fixed",P),style:$,children:[e.jsxs("div",{className:"app-bar-left",children:[U&&e.jsx("button",{className:"mobile-menu-btn",onClick:V,children:e.jsx(oe,{size:24})}),(n||r)&&e.jsxs("div",{className:"app-bar-brand",children:[n&&e.jsx("div",{className:"app-bar-logo",children:n}),r&&e.jsx("span",{className:"app-bar-brand-name",children:r})]}),t,e.jsx("nav",{className:"app-bar-nav",children:I.map((o,N)=>e.jsx(de,{item:o},N))})]}),e.jsxs("div",{className:"app-bar-center",children:[y,A&&e.jsxs("div",{className:"app-bar-search",children:[e.jsx(G,{size:18,className:"search-icon"}),e.jsx("input",{type:"text",className:"app-bar-search-input",placeholder:_,onChange:o=>D?.(o.target.value)})]})]}),e.jsxs("div",{className:"app-bar-right",children:[B,b&&e.jsxs("div",{className:i("plan-badge",b.toLowerCase()),children:[e.jsx(ne,{size:14}),e.jsx("span",{children:b})]}),e.jsxs("div",{className:"app-bar-actions",children:[L&&k&&e.jsx("button",{className:"nav-link icon-only",onClick:k,children:R==="light"?e.jsx(J,{size:20}):e.jsx(K,{size:20})}),e.jsxs("button",{className:"nav-link icon-only notification-btn",children:[e.jsx(W,{size:20}),w>0&&e.jsx("span",{className:"notification-badge",children:w})]}),s&&e.jsxs("div",{className:"user-profile",ref:j,children:[e.jsxs("button",{className:"user-profile-trigger",onClick:()=>T(!x),children:[e.jsx("div",{className:"user-avatar",children:s.avatarUrl?e.jsx("img",{src:s.avatarUrl,alt:s.fullName}):e.jsx("div",{className:"fallback-avatar",children:s.fullName?.[0]||"U"})}),e.jsx(S,{size:14,className:i("dropdown-icon",x&&"rotated")})]}),x&&e.jsxs("div",{className:"user-dropdown-menu",children:[e.jsxs("div",{className:"dropdown-header",children:[e.jsx("p",{className:"dropdown-name",children:s.fullName}),e.jsx("p",{className:"dropdown-email",children:s.email})]}),e.jsx("div",{className:"dropdown-divider"}),e.jsxs("button",{className:"dropdown-item",children:[e.jsx(Q,{size:16})," Profile"]}),e.jsxs("button",{className:"dropdown-item",children:[e.jsx(X,{size:16})," Settings"]}),e.jsx("div",{className:"dropdown-divider"}),e.jsxs("button",{className:"dropdown-item logout",onClick:M,children:[e.jsx(Y,{size:16})," Logout"]})]})]})]})]})]})};q.__docgenInfo={description:"",methods:[],displayName:"AppBar",props:{variant:{required:!1,tsType:{name:"union",raw:"'glass' | 'flat' | 'bordered' | 'sticky' | 'floating'",elements:[{name:"literal",value:"'glass'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'sticky'"},{name:"literal",value:"'floating'"}]},description:"",defaultValue:{value:"'glass'",computed:!1}},sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},fixed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},logo:{required:!1,tsType:{name:"ReactNode"},description:""},brandName:{required:!1,tsType:{name:"string"},description:""},leftContent:{required:!1,tsType:{name:"ReactNode"},description:""},centerContent:{required:!1,tsType:{name:"ReactNode"},description:""},rightContent:{required:!1,tsType:{name:"ReactNode"},description:""},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"NavItem"}],raw:"NavItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},user:{required:!1,tsType:{name:"AppBarUser"},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onUpgrade:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},subscriptionPlan:{required:!1,tsType:{name:"string"},description:""},notificationCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},showThemeToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},onToggleTheme:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showSidebarToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onToggleSidebar:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search...'",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},accentColor:{required:!1,tsType:{name:"string"},description:""}}};const qe={title:"Components/AppBar",component:q,parameters:{layout:"fullscreen",backgrounds:{default:"dark"}},tags:["autodocs"]},C=[{label:"Home",icon:Z,active:!0},{label:"Products",icon:z,children:[{label:"Electronics"},{label:"Clothing"},{label:"Books"}]},{label:"About",icon:ee}],u={args:{brandName:"MangoUI",logo:e.jsx("div",{style:{background:"#f97316",width:32,height:32,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff"},children:e.jsx(z,{size:20})}),navItems:C,user:{fullName:"John Doe",avatarUrl:"https://i.pravatar.cc/150?u=john",email:"john@example.com"},showSearch:!0,notificationCount:3,subscriptionPlan:"Business"}},m={args:{variant:"glass",brandName:"MangoKit",navItems:[{label:"Features"},{label:"Pricing"},{label:"Resources",children:[{label:"Docs"},{label:"Tutorials"}]}],showSearch:!1,rightContent:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(l,{variant:"ghost",size:"sm",children:"Log in"}),e.jsx(l,{variant:"primary",size:"sm",rounded:"full",children:"Get Started"})]})}},p={args:{variant:"floating",brandName:"FloatingApp",navItems:C,rightContent:e.jsx(l,{variant:"outline",size:"sm",rounded:"full",icon:e.jsx(ae,{size:16}),children:"Deploy"}),showSearch:!1,showThemeToggle:!0,theme:"dark"}},h={args:{variant:"bordered",leftContent:e.jsx(l,{variant:"ghost",size:"sm",icon:e.jsx(ce,{size:16}),children:"Dashboard"}),centerContent:e.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center"},children:[e.jsx("a",{href:"#",style:{color:"var(--primaryColor)",fontWeight:600},children:"Overview"}),e.jsx("a",{href:"#",style:{color:"var(--labelSecondaryColor)"},children:"Analytics"}),e.jsx("a",{href:"#",style:{color:"var(--labelSecondaryColor)"},children:"Reports"})]}),rightContent:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(l,{variant:"outline",size:"sm",icon:e.jsx(re,{size:16})}),e.jsx(l,{variant:"primary",size:"sm",children:"New Project"})]}),showSearch:!1,showThemeToggle:!1}},f={args:{brandName:"CustomColor",bgColor:"#1e1b4b",textColor:"#e0e7ff",accentColor:"#818cf8",borderColor:"#312e81",navItems:C,user:{fullName:"Indigo User"},showSearch:!1}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'MangoUI',
    logo: <div style={{
      background: '#f97316',
      width: 32,
      height: 32,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }}><Package size={20} /></div>,
    navItems: navItems,
    user: {
      fullName: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=john',
      email: 'john@example.com'
    },
    showSearch: true,
    notificationCount: 3,
    subscriptionPlan: 'Business'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'glass',
    brandName: 'MangoKit',
    navItems: [{
      label: 'Features'
    }, {
      label: 'Pricing'
    }, {
      label: 'Resources',
      children: [{
        label: 'Docs'
      }, {
        label: 'Tutorials'
      }]
    }],
    showSearch: false,
    rightContent: <div style={{
      display: 'flex',
      gap: '8px'
    }}>\r
                <Button variant="ghost" size="sm">Log in</Button>\r
                <Button variant="primary" size="sm" rounded="full">Get Started</Button>\r
            </div>
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'floating',
    brandName: 'FloatingApp',
    navItems: navItems,
    rightContent: <Button variant="outline" size="sm" rounded="full" icon={<Rocket size={16} />}>Deploy</Button>,
    showSearch: false,
    showThemeToggle: true,
    theme: 'dark'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bordered',
    leftContent: <Button variant="ghost" size="sm" icon={<Layout size={16} />}>Dashboard</Button>,
    centerContent: <div style={{
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }}>\r
                <a href="#" style={{
        color: 'var(--primaryColor)',
        fontWeight: 600
      }}>Overview</a>\r
                <a href="#" style={{
        color: 'var(--labelSecondaryColor)'
      }}>Analytics</a>\r
                <a href="#" style={{
        color: 'var(--labelSecondaryColor)'
      }}>Reports</a>\r
            </div>,
    rightContent: <div style={{
      display: 'flex',
      gap: 12
    }}>\r
                <Button variant="outline" size="sm" icon={<HelpCircle size={16} />} />\r
                <Button variant="primary" size="sm">New Project</Button>\r
            </div>,
    showSearch: false,
    showThemeToggle: false
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'CustomColor',
    bgColor: '#1e1b4b',
    // Indigo-950
    textColor: '#e0e7ff',
    accentColor: '#818cf8',
    borderColor: '#312e81',
    navItems: navItems,
    user: {
      fullName: 'Indigo User'
    },
    showSearch: false
  }
}`,...f.parameters?.docs?.source}}};const Be=["ModernDashboard","MarketingNavBar","FloatingNavBar","FullControl","BrandedTheme"];export{f as BrandedTheme,p as FloatingNavBar,h as FullControl,m as MarketingNavBar,u as ModernDashboard,Be as __namedExportsOrder,qe as default};
