import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-QywSF6W6.js";import{c as w}from"./cn-BQHNewu7.js";import{A as le,a as ce}from"./arrow-up-CyWoDW5D.js";import{c as me}from"./createLucideIcon-B-6-c5fd.js";import{S as ue}from"./search-BLKqZgPB.js";import{C as pe}from"./chevron-left-Tn_oAlSe.js";import{C as he}from"./chevron-right-B7G5iz4Z.js";import{D as ge}from"./dropdown-BjBcu1F8.js";import{S as fe}from"./spinner-BLi69KHB.js";import{B as xe}from"./badge-CTfYqYTi.js";import{D as ye}from"./download-ouUGacro.js";import"./preload-helper-PPVm8Dsz.js";import"./x-DSESRrVS.js";import"./chevron-down-BNiyiuGD.js";import"./check-BPnGGwGE.js";import"./settings-CE_Qmr37.js";const be=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],ve=me("arrow-up-down",be),k=({columns:l,dataSource:o,loading:h=!1,rowSelection:i,pagination:u,infiniteScroll:N=!1,scrollThreshold:f=.8,onLoadMore:q,hasMore:M=!1,rowKey:S,stickyHeader:_=!1,height:G,emptyText:U="No Data Available",variant:W="default",size:$="md",colors:x,onRow:D,className:Y="",style:Q})=>{const[p,X]=m.useState(null),[K,Z]=m.useState({}),[P,ee]=m.useState({}),O=m.useRef(null),b=m.useCallback((e,t)=>typeof S=="function"?S(e):e[S]||t,[S]),H=e=>{const t=[];return e.forEach(s=>{s.children?t.push(...H(s.children)):t.push(s)}),t},y=m.useMemo(()=>H(l),[l]),ae=e=>{const t=[],s=(n,r)=>{t[r]||(t[r]=[]),n.forEach(d=>{t[r].push(d),d.children&&s(d.children,r+1)})};return s(e,0),t},z=m.useMemo(()=>ae(l),[l]),V=e=>e.children?e.children.reduce((t,s)=>t+V(s),0):1,te=z.length,se=(e,t)=>e.children?1:te-t,re=e=>{if(!e.sortable||!e.dataIndex)return;let t="asc";p?.key===e.dataIndex&&(p.order==="asc"?t="desc":p.order==="desc"&&(t=null)),X(t?{key:e.dataIndex,order:t}:null)},F=m.useMemo(()=>{let e=[...o];return Object.entries(K).forEach(([t,s])=>{s&&(e=e.filter(n=>{const r=n[t];return String(r).toLowerCase().includes(s.toLowerCase())}))}),p&&e.sort((t,s)=>{const n=t[p.key],r=s[p.key];return n<r?p.order==="asc"?-1:1:n>r?p.order==="asc"?1:-1:0}),e},[o,K,p]),j=m.useMemo(()=>{const e={},t={};let s=i?48:0;y.forEach(r=>{if(r.fixed==="left"||r.fixed===!0){const d=r.key||r.dataIndex;e[d]=s,s+=Number(r.width)||150}});let n=0;return[...y].reverse().forEach(r=>{if(r.fixed==="right"){const d=r.key||r.dataIndex;t[d]=n,n+=Number(r.width)||150}}),{left:e,right:t}},[y,i]),ne=e=>{if(i)if(e.target.checked){const t=o.map((s,n)=>b(s,n));i.onChange(t,o)}else i.onChange([],[])},ie=(e,t)=>{if(!i)return;const s=b(e,t),n=i.selectedRowKeys.includes(s);let r;n?r=i.selectedRowKeys.filter(c=>c!==s):r=[...i.selectedRowKeys,s];const d=o.filter((c,g)=>r.includes(b(c,g)));i.onChange(r,d)};m.useEffect(()=>{if(!N||!q||!M||h)return;const e={root:O.current,rootMargin:"20px",threshold:f},t=r=>{r[0].isIntersecting&&q()},s=new IntersectionObserver(t,e),n=document.getElementById("table-sentinel");return n&&s.observe(n),()=>s.disconnect()},[N,q,M,h,f]);const de=(e,t)=>{const s=V(e),n=se(e,t),r=e.sortable&&!!e.dataIndex,d=p?.key===e.dataIndex,c=e.key||e.dataIndex,g=e.fixed==="left"||e.fixed===!0,J=e.fixed==="right";return a.jsxs("th",{colSpan:s,rowSpan:n,className:w("table-header-cell",r&&"is-sortable",g&&"is-fixed-left",J&&"is-fixed-right",P[e.dataIndex]&&"search-active",e.className),style:{...e.style,width:e.width,textAlign:e.align||"left",left:g?j.left[c]:void 0,right:J?j.right[c]:void 0},onClick:()=>re(e),children:[a.jsxs("div",{className:"header-cell-content",children:[a.jsx("span",{className:"header-title",children:e.title}),a.jsxs("div",{className:"header-actions",children:[r&&a.jsx("span",{className:w("sort-icon",d&&"active"),children:p?.order==="asc"?a.jsx(le,{size:12}):p?.order==="desc"?a.jsx(ce,{size:12}):a.jsx(ve,{size:12})}),e.searchable&&a.jsx("span",{className:"action-btn",onClick:v=>{v.stopPropagation(),ee(C=>({...C,[e.dataIndex]:!C[e.dataIndex]}))},children:a.jsx(ue,{size:12})}),e.headerWidgets]})]}),e.searchable&&P[e.dataIndex]&&a.jsx("div",{className:"header-search-popover",onClick:v=>v.stopPropagation(),children:a.jsx("input",{type:"text",className:"header-search-input",placeholder:`Search ${e.title}...`,autoFocus:!0,value:K[e.dataIndex]||"",onChange:v=>Z(C=>({...C,[e.dataIndex]:v.target.value}))})})]},c||t)},oe=()=>{if(u===!1||!u)return null;const{current:e=1,pageSize:t=10,total:s=0,showSizeChanger:n=!0}=u,r=Math.ceil(s/t);return a.jsxs("div",{className:"table-pagination",children:[a.jsxs("div",{className:"pagination-info",children:["Showing ",(e-1)*t+1," to ",Math.min(e*t,s)," of ",s," items"]}),a.jsxs("div",{className:"pagination-controls",children:[a.jsx("button",{className:"page-btn",disabled:e<=1,onClick:()=>u.onChange?.(e-1,t),children:a.jsx(pe,{size:16})}),a.jsxs("div",{className:"page-numbers",children:[Array.from({length:Math.min(r,5)}).map((d,c)=>a.jsx("button",{className:w("page-num",e===c+1&&"active"),onClick:()=>u.onChange?.(c+1,t),children:c+1},c)),r>5&&a.jsx("span",{className:"page-ellipsis",children:"..."})]}),a.jsx("button",{className:"page-btn",disabled:e>=r,onClick:()=>u.onChange?.(e+1,t),children:a.jsx(he,{size:16})}),n&&a.jsx(ge,{size:"sm",variant:"outline",placement:"top",className:"page-size-dropdown",value:String(t),onChange:d=>u.onShowSizeChange?.(e,Number(d)),options:[10,20,50,100].map(d=>({id:String(d),name:`${d} / page`}))})]})]})};return a.jsxs("div",{className:w("mango-table-container",`table-variant-${W}`,`table-size-${$}`,_&&"sticky-header",Y),style:{...Q,"--table-header-bg":x?.headerBg,"--table-header-color":x?.headerColor,"--table-row-bg":x?.rowBg,"--table-row-hover-bg":x?.rowHoverBg,"--table-border-color":x?.borderColor,"--table-text-color":x?.textColor},children:[a.jsx("div",{className:"table-scroll-wrapper",ref:O,style:{height:G},children:a.jsxs("table",{className:"mango-table",children:[a.jsx("thead",{children:z.map((e,t)=>a.jsxs("tr",{children:[t===0&&i&&a.jsx("th",{rowSpan:z.length,className:"table-header-cell selection-cell is-fixed-left",style:{left:0},children:a.jsx("div",{className:"checkbox-wrapper",children:a.jsx("input",{type:"checkbox",onChange:ne,checked:i.selectedRowKeys.length===o.length&&o.length>0})})}),e.map(s=>de(s,t))]},t))}),a.jsxs("tbody",{className:"table-body",children:[F.length>0?F.map((e,t)=>a.jsxs("tr",{className:"table-row",...D?D(e,t):{},children:[i&&a.jsx("td",{className:"table-cell selection-cell is-fixed-left",style:{left:0},children:a.jsx("div",{className:"checkbox-wrapper",children:a.jsx("input",{type:"checkbox",checked:i.selectedRowKeys.includes(b(e,t)),onChange:()=>ie(e,t)})})}),y.map((s,n)=>{const r=s.dataIndex?e[s.dataIndex]:void 0,d=s.key||s.dataIndex,c=s.fixed==="left"||s.fixed===!0,g=s.fixed==="right";return a.jsx("td",{className:w("table-cell",c&&"is-fixed-left",g&&"is-fixed-right",s.className),style:{...s.style,textAlign:s.align||"left",left:c?j.left[d]:void 0,right:g?j.right[d]:void 0},children:s.render?s.render(r,e,t):r},d||n)})]},b(e,t))):!h&&a.jsx("tr",{children:a.jsx("td",{colSpan:y.length+(i?1:0),className:"table-empty-cell",children:U})}),h&&a.jsx("tr",{children:a.jsx("td",{colSpan:y.length+(i?1:0),className:"table-loading-cell",children:a.jsxs("div",{className:"loading-overlay",children:[a.jsx(fe,{}),a.jsx("span",{children:"Loading data..."})]})})}),a.jsx("tr",{id:"table-sentinel",style:{height:"1px"}})]})]})}),oe()]})};k.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"T"}],raw:"TableColumn<T>"}],raw:"TableColumn<T>[]"},description:"Array of columns"},dataSource:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Array of data"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},rowSelection:{required:!1,tsType:{name:"TableSelection",elements:[{name:"T"}],raw:"TableSelection<T>"},description:"Selection config"},pagination:{required:!1,tsType:{name:"union",raw:"PaginationConfig | false",elements:[{name:"PaginationConfig"},{name:"literal",value:"false"}]},description:"Pagination config"},infiniteScroll:{required:!1,tsType:{name:"boolean"},description:"Enable infinite scroll",defaultValue:{value:"false",computed:!1}},scrollThreshold:{required:!1,tsType:{name:"number"},description:"Threshold for infinite scroll (0-1)",defaultValue:{value:"0.8",computed:!1}},onLoadMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback for infinite scroll"},hasMore:{required:!1,tsType:{name:"boolean"},description:"Whether there is more data to load (for infinite scroll)",defaultValue:{value:"false",computed:!1}},rowKey:{required:!0,tsType:{name:"union",raw:"string | ((record: T) => string | number)",elements:[{name:"string"},{name:"unknown"}]},description:"Unique key for rows"},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Sticky header toggle",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Fixed height for scrolling"},emptyText:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Message shown when no data",defaultValue:{value:"'No Data Available'",computed:!1}},onRow:{required:!1,tsType:{name:"signature",type:"function",raw:"(record: T, index: number) => object",signature:{arguments:[{type:{name:"T"},name:"record"},{type:{name:"number"},name:"index"}],return:{name:"object"}}},description:"Row hover callback"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'ghost' | 'plain'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'plain'"}]},description:"Table variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Visual density",defaultValue:{value:"'md'",computed:!1}},colors:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  headerBg?: string;\r
  headerColor?: string;\r
  rowBg?: string;\r
  rowHoverBg?: string;\r
  borderColor?: string;\r
  textColor?: string;\r
}`,signature:{properties:[{key:"headerBg",value:{name:"string",required:!1}},{key:"headerColor",value:{name:"string",required:!1}},{key:"rowBg",value:{name:"string",required:!1}},{key:"rowHoverBg",value:{name:"string",required:!1}},{key:"borderColor",value:{name:"string",required:!1}},{key:"textColor",value:{name:"string",required:!1}}]}},description:"Theming"},className:{required:!1,tsType:{name:"string"},description:"Custom className",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom styles"}}};const De={title:"Components/Table",component:k,parameters:{layout:"fullscreen"},tags:["autodocs"]},B=[{id:1,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["NICE","DEVELOPER"],email:"john@example.com",company:"Google",phone:"+1 234 567 890"},{id:2,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["LOSER"],email:"jim@example.com",company:"Apple",phone:"+44 20 7946 0958"},{id:3,name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["COOL","TEACHER"],email:"joe@example.com",company:"Microsoft",phone:"+61 2 9876 5432"},{id:4,name:"Jane Doe",age:28,address:"Paris No. 4 Rue de Rivoli",tags:["NICE","DESIGNER"],email:"jane@example.com",company:"Figma",phone:"+33 1 42 68 53 00"},{id:5,name:"Sam Smith",age:45,address:"Tokyo No. 2 Shibuya",tags:["COOL","PRODUCT"],email:"sam@example.com",company:"Sony",phone:"+81 3 3448 2111"}],E=[{title:"ID",dataIndex:"id",key:"id",fixed:"left",width:60},{title:"Name",dataIndex:"name",key:"name",sortable:!0,searchable:!0,fixed:"left",width:160,render:l=>a.jsx("a",{style:{color:"var(--primaryColor)",fontWeight:600},children:l})},{title:"Age",dataIndex:"age",key:"age",sortable:!0,width:100},{title:"Email",dataIndex:"email",key:"email",width:250,render:l=>a.jsx("span",{children:l||"user@example.com"})},{title:"Company",dataIndex:"company",key:"company",width:200},{title:"Address",dataIndex:"address",key:"address",width:300},{title:"Phone",dataIndex:"phone",key:"phone",width:150},{title:"Tags",dataIndex:"tags",key:"tags",render:l=>a.jsx("div",{style:{display:"flex",gap:"4px"},children:l.map(o=>a.jsx(xe,{variant:o==="LOSER"?"outline":"primary",size:"sm",children:o},o))})},{title:"Action",key:"action",fixed:"right",width:200,headerWidgets:a.jsx(ye,{size:14,style:{cursor:"pointer",opacity:.6}}),render:(l,o)=>a.jsxs("div",{style:{display:"flex",gap:"12px",fontSize:"0.85rem"},children:[a.jsxs("a",{style:{color:"var(--primaryColor)"},children:["Invite ",o.name.split(" ")[0]]}),a.jsx("a",{style:{color:"#ef4444"},children:"Delete"})]})}],T={render:()=>{const[l,o]=m.useState([]),[h,i]=m.useState(1);return a.jsx("div",{style:{width:"100%",padding:"24px",boxSizing:"border-box"},children:a.jsx(k,{columns:E,dataSource:B,rowKey:"id",stickyHeader:!0,height:400,rowSelection:{selectedRowKeys:l,onChange:u=>o(u)},pagination:{current:h,pageSize:10,total:100,onChange:u=>i(u)}})})}},I={render:()=>{const l=[{title:"User Info",children:[{title:"First Name",dataIndex:"firstName",key:"firstName",width:120},{title:"Last Name",dataIndex:"lastName",key:"lastName",width:120}]},{title:"Age",dataIndex:"age",key:"age",width:80},{title:"Address",dataIndex:"address",key:"address",width:300},{title:"Status",dataIndex:"status",key:"status",width:100}],o=[{id:1,firstName:"John",lastName:"Brown",age:32,address:"New York",status:"Active"},{id:2,firstName:"Jim",lastName:"Green",age:42,address:"London",status:"Inactive"},{id:3,firstName:"Joe",lastName:"Black",age:32,address:"Sydney",status:"Active"}];return a.jsx("div",{style:{width:"100%",minWidth:"800px",padding:"24px",boxSizing:"border-box"},children:a.jsx(k,{columns:l,dataSource:o,rowKey:"id",variant:"bordered"})})}},R={render:()=>{const[l,o]=m.useState(B),[h,i]=m.useState(!1),u=()=>{i(!0),setTimeout(()=>{const N=B.map(f=>({...f,id:Math.random()}));o(f=>[...f,...N]),i(!1)},1500)};return a.jsx("div",{style:{width:"100%",padding:"24px",boxSizing:"border-box"},children:a.jsx(k,{columns:E.slice(0,4),dataSource:l,rowKey:"id",height:300,infiniteScroll:!0,onLoadMore:u,hasMore:l.length<50,loading:h,stickyHeader:!0})})}},A={args:{columns:E,dataSource:[],loading:!0,rowKey:"id"}},L={args:{columns:E,dataSource:[],rowKey:"id",emptyText:"No orders found matching your criteria."}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    return <div style={{
      width: '100%',
      padding: '24px',
      boxSizing: 'border-box'
    }}>\r
                <Table columns={columns} dataSource={dataSource} rowKey="id" stickyHeader height={400} rowSelection={{
        selectedRowKeys: selectedKeys,
        onChange: keys => setSelectedKeys(keys)
      }} pagination={{
        current: page,
        pageSize: 10,
        total: 100,
        onChange: p => setPage(p)
      }} />\r
            </div>;
  }
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const groupedColumns: any[] = [{
      title: 'User Info',
      children: [{
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        width: 120
      }, {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        width: 120
      }]
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 80
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 300
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 100
    }];
    const data = [{
      id: 1,
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York',
      status: 'Active'
    }, {
      id: 2,
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London',
      status: 'Inactive'
    }, {
      id: 3,
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sydney',
      status: 'Active'
    }];
    return <div style={{
      width: '100%',
      minWidth: '800px',
      padding: '24px',
      boxSizing: 'border-box'
    }}>\r
                <Table columns={groupedColumns} dataSource={data} rowKey="id" variant="bordered" />\r
            </div>;
  }
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(dataSource);
    const [loading, setLoading] = useState(false);
    const loadMore = () => {
      setLoading(true);
      setTimeout(() => {
        const nextBatch = dataSource.map(d => ({
          ...d,
          id: Math.random()
        }));
        setData(prev => [...prev, ...nextBatch]);
        setLoading(false);
      }, 1500);
    };
    return <div style={{
      width: '100%',
      padding: '24px',
      boxSizing: 'border-box'
    }}>\r
                <Table columns={columns.slice(0, 4)} dataSource={data} rowKey="id" height={300} infiniteScroll onLoadMore={loadMore} hasMore={data.length < 50} loading={loading} stickyHeader />\r
            </div>;
  }
}`,...R.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns,
    dataSource: [],
    loading: true,
    rowKey: 'id'
  }
}`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    columns: columns,
    dataSource: [],
    rowKey: 'id',
    emptyText: 'No orders found matching your criteria.'
  }
}`,...L.parameters?.docs?.source}}};const Pe=["Enterprise","GroupedHeaders","InfiniteScroll","LoadingState","EmptyState"];export{L as EmptyState,T as Enterprise,I as GroupedHeaders,R as InfiniteScroll,A as LoadingState,Pe as __namedExportsOrder,De as default};
