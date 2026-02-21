import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as s,C as t}from"./progress-bar-BDDhuMYv.js";import{r as f}from"./iframe-QywSF6W6.js";import"./cn-BQHNewu7.js";import"./preload-helper-PPVm8Dsz.js";const w={title:"Components/ProgressBar",component:s,parameters:{layout:"padded"},tags:["autodocs"]},l=(r,a=0)=>{const[o,x]=f.useState(0);return f.useEffect(()=>{const h=setTimeout(()=>{const b=setInterval(()=>{x(v=>v>=r?(clearInterval(b),r):Math.min(v+1,r))},18);return()=>clearInterval(b)},a);return()=>clearTimeout(h)},[r]),o},i={render:()=>{const r=l(72),a=Math.min(r+15,100);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"28px",maxWidth:"600px"},children:[e.jsx(s,{label:"Linear (Default)",progress:r,showPercentage:!0,size:"md"}),e.jsx(s,{label:"Striped (Animated)",progress:r,variant:"striped",size:"md",showPercentage:!0}),e.jsx(s,{label:"Animated Shimmer",progress:r,animated:!0,size:"md",showPercentage:!0}),e.jsx(s,{label:"Indeterminate",variant:"indeterminate",size:"sm"}),e.jsx(s,{label:"Gradient (Orange → Pink)",progress:r,variant:"gradient",gradient:["#fa8029","#f43f5e"],size:"md",showPercentage:!0}),e.jsx(s,{label:"Gradient (Blue → Violet)",progress:r,variant:"gradient",gradient:["#3b82f6","#8b5cf6"],size:"md",showPercentage:!0}),e.jsx(s,{label:"Glass Effect",progress:r,variant:"glass",size:"lg",showPercentage:!0}),e.jsx(s,{label:"Neon Glow",progress:r,variant:"neon",size:"md",customColor:"#fa8029",showPercentage:!0}),e.jsx(s,{label:`Buffer (Loading… ${r}% of ${a}%)`,progress:r,buffer:a,variant:"buffer",size:"md"})]})}},n={render:()=>{const r=l(68),a=["primary","success","warning","error","info"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"500px"},children:a.map(o=>e.jsx(s,{label:o.charAt(0).toUpperCase()+o.slice(1),progress:r,color:o,showPercentage:!0,size:"md"},o))})}},c={render:()=>{const r=l(60);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"500px"},children:[e.jsx(s,{label:"XS (3px)",progress:r,size:"xs"}),e.jsx(s,{label:"SM (6px)",progress:r,size:"sm"}),e.jsx(s,{label:"MD (10px)",progress:r,size:"md"}),e.jsx(s,{label:"LG (18px) — label inside",progress:r,size:"lg",labelInside:!0}),e.jsx(s,{label:"XL (30px) — label inside",progress:r,size:"xl",labelInside:!0,variant:"gradient",gradient:["#fa8029","#f43f5e"]})]})}},d={render:()=>{const[r,a]=f.useState(40);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"500px"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{fontWeight:600,fontSize:"0.85rem",marginBottom:8,display:"block"},children:["Progress: ",r,"%"]}),e.jsx("input",{type:"range",min:0,max:100,value:r,onChange:o=>a(+o.target.value),style:{width:"100%",marginBottom:"16px"}}),e.jsx(s,{label:"5 Steps",progress:r,variant:"stepped",steps:5,size:"md",showPercentage:!0})]}),e.jsx(s,{label:"8 Steps (Success)",progress:r,variant:"stepped",steps:8,color:"success",size:"sm"}),e.jsx(s,{label:"10 Steps (Gradient customColor)",progress:r,variant:"stepped",steps:10,customColor:"#8b5cf6",size:"lg"})]})}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"560px"},children:[e.jsx(s,{label:"Storage Usage",variant:"stacked",size:"lg",rounded:"md",segments:[{value:35,color:"#fa8029",label:"Documents"},{value:25,color:"#3b82f6",label:"Media"},{value:20,color:"#22c55e",label:"Apps"},{value:10,color:"#8b5cf6",label:"Other"}]}),e.jsx(s,{label:"Team Contribution",variant:"stacked",size:"md",rounded:"full",segments:[{value:45,color:"#f43f5e",label:"Alice"},{value:30,color:"#0ea5e9",label:"Bob"},{value:25,color:"#eab308",label:"Carol"}]})]})},g={render:()=>{const r=l(76);return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{progress:r,showPercentage:!0,size:100}),e.jsx("p",{style:{marginTop:8,fontSize:"0.78rem",color:"var(--labelSecondaryColor)"},children:"Default"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{progress:r,color:"success",showPercentage:!0,size:100}),e.jsx("p",{style:{marginTop:8,fontSize:"0.78rem",color:"var(--labelSecondaryColor)"},children:"Success"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{progress:r,color:"error",showPercentage:!0,size:100}),e.jsx("p",{style:{marginTop:8,fontSize:"0.78rem",color:"var(--labelSecondaryColor)"},children:"Error"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{progress:r,gradient:["#fa8029","#f43f5e"],showPercentage:!0,size:100}),e.jsx("p",{style:{marginTop:8,fontSize:"0.78rem",color:"var(--labelSecondaryColor)"},children:"Gradient"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{indeterminate:!0,size:80}),e.jsx("p",{style:{marginTop:8,fontSize:"0.78rem",color:"var(--labelSecondaryColor)"},children:"Indeterminate"})]})]})}},m={render:()=>{const r=l(65);return e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{progress:r,size:48,strokeWidth:5,showPercentage:!0}),e.jsx(t,{progress:r,size:72,strokeWidth:6,showPercentage:!0}),e.jsx(t,{progress:r,size:96,strokeWidth:8,showPercentage:!0}),e.jsx(t,{progress:r,size:130,strokeWidth:10,showPercentage:!0,label:"Storage"}),e.jsx(t,{progress:r,size:160,strokeWidth:12,showPercentage:!0,label:"CPU Usage",gradient:["#3b82f6","#8b5cf6"]})]})}},u={render:()=>{const r=l(72,0),a=l(55,200),o=l(88,400),x=l(34,600);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"580px"},children:[e.jsx("h3",{style:{margin:0,fontSize:"1rem",fontWeight:700},children:"📊 System Resources"}),e.jsx(s,{label:"CPU Usage",progress:r,showPercentage:!0,animated:!0,size:"md",color:r>80?"error":r>60?"warning":"success"}),e.jsx(s,{label:"Memory",progress:a,showPercentage:!0,variant:"striped",size:"md",color:"info"}),e.jsx(s,{label:"Disk",progress:o,showPercentage:!0,labelInside:!0,size:"lg",gradient:["#ef4444","#dc2626"]}),e.jsx(s,{label:"Network",progress:x,variant:"neon",showPercentage:!0,size:"sm"}),e.jsx(s,{label:"Loading resources…",variant:"indeterminate",size:"xs"}),e.jsx(s,{label:"Storage Breakdown",variant:"stacked",size:"md",rounded:"md",segments:[{value:40,color:"#fa8029",label:"System"},{value:25,color:"#3b82f6",label:"Media"},{value:23,color:"#22c55e",label:"Docs"}]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const p = useAnimatedProgress(72);
    const buf = Math.min(p + 15, 100);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
      maxWidth: '600px'
    }}>\r
                <ProgressBar label="Linear (Default)" progress={p} showPercentage size="md" />\r
                <ProgressBar label="Striped (Animated)" progress={p} variant="striped" size="md" showPercentage />\r
                <ProgressBar label="Animated Shimmer" progress={p} animated size="md" showPercentage />\r
                <ProgressBar label="Indeterminate" variant="indeterminate" size="sm" />\r
                <ProgressBar label="Gradient (Orange → Pink)" progress={p} variant="gradient" gradient={['#fa8029', '#f43f5e']} size="md" showPercentage />\r
                <ProgressBar label="Gradient (Blue → Violet)" progress={p} variant="gradient" gradient={['#3b82f6', '#8b5cf6']} size="md" showPercentage />\r
                <ProgressBar label="Glass Effect" progress={p} variant="glass" size="lg" showPercentage />\r
                <ProgressBar label="Neon Glow" progress={p} variant="neon" size="md" customColor="#fa8029" showPercentage />\r
                <ProgressBar label={\`Buffer (Loading… \${p}% of \${buf}%)\`} progress={p} buffer={buf} variant="buffer" size="md" />\r
            </div>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const p = useAnimatedProgress(68);
    const colors = ['primary', 'success', 'warning', 'error', 'info'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '500px'
    }}>\r
                {colors.map(c => <ProgressBar key={c} label={c.charAt(0).toUpperCase() + c.slice(1)} progress={p} color={c} showPercentage size="md" />)}\r
            </div>;
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const p = useAnimatedProgress(60);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '500px'
    }}>\r
                <ProgressBar label="XS (3px)" progress={p} size="xs" />\r
                <ProgressBar label="SM (6px)" progress={p} size="sm" />\r
                <ProgressBar label="MD (10px)" progress={p} size="md" />\r
                <ProgressBar label="LG (18px) — label inside" progress={p} size="lg" labelInside />\r
                <ProgressBar label="XL (30px) — label inside" progress={p} size="xl" labelInside variant="gradient" gradient={['#fa8029', '#f43f5e']} />\r
            </div>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [p, setP] = useState(40);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '500px'
    }}>\r
                <div>\r
                    <label style={{
          fontWeight: 600,
          fontSize: '0.85rem',
          marginBottom: 8,
          display: 'block'
        }}>\r
                        Progress: {p}%\r
                    </label>\r
                    <input type="range" min={0} max={100} value={p} onChange={e => setP(+e.target.value)} style={{
          width: '100%',
          marginBottom: '16px'
        }} />\r
                    <ProgressBar label="5 Steps" progress={p} variant="stepped" steps={5} size="md" showPercentage />\r
                </div>\r
                <ProgressBar label="8 Steps (Success)" progress={p} variant="stepped" steps={8} color="success" size="sm" />\r
                <ProgressBar label="10 Steps (Gradient customColor)" progress={p} variant="stepped" steps={10} customColor="#8b5cf6" size="lg" />\r
            </div>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '560px'
  }}>\r
            <ProgressBar label="Storage Usage" variant="stacked" size="lg" rounded="md" segments={[{
      value: 35,
      color: '#fa8029',
      label: 'Documents'
    }, {
      value: 25,
      color: '#3b82f6',
      label: 'Media'
    }, {
      value: 20,
      color: '#22c55e',
      label: 'Apps'
    }, {
      value: 10,
      color: '#8b5cf6',
      label: 'Other'
    }]} />\r
            <ProgressBar label="Team Contribution" variant="stacked" size="md" rounded="full" segments={[{
      value: 45,
      color: '#f43f5e',
      label: 'Alice'
    }, {
      value: 30,
      color: '#0ea5e9',
      label: 'Bob'
    }, {
      value: 25,
      color: '#eab308',
      label: 'Carol'
    }]} />\r
        </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const p = useAnimatedProgress(76);
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '32px',
      alignItems: 'center'
    }}>\r
                <div style={{
        textAlign: 'center'
      }}>\r
                    <CircularProgress progress={p} showPercentage size={100} />\r
                    <p style={{
          marginTop: 8,
          fontSize: '0.78rem',
          color: 'var(--labelSecondaryColor)'
        }}>Default</p>\r
                </div>\r
                <div style={{
        textAlign: 'center'
      }}>\r
                    <CircularProgress progress={p} color="success" showPercentage size={100} />\r
                    <p style={{
          marginTop: 8,
          fontSize: '0.78rem',
          color: 'var(--labelSecondaryColor)'
        }}>Success</p>\r
                </div>\r
                <div style={{
        textAlign: 'center'
      }}>\r
                    <CircularProgress progress={p} color="error" showPercentage size={100} />\r
                    <p style={{
          marginTop: 8,
          fontSize: '0.78rem',
          color: 'var(--labelSecondaryColor)'
        }}>Error</p>\r
                </div>\r
                <div style={{
        textAlign: 'center'
      }}>\r
                    <CircularProgress progress={p} gradient={['#fa8029', '#f43f5e']} showPercentage size={100} />\r
                    <p style={{
          marginTop: 8,
          fontSize: '0.78rem',
          color: 'var(--labelSecondaryColor)'
        }}>Gradient</p>\r
                </div>\r
                <div style={{
        textAlign: 'center'
      }}>\r
                    <CircularProgress indeterminate size={80} />\r
                    <p style={{
          marginTop: 8,
          fontSize: '0.78rem',
          color: 'var(--labelSecondaryColor)'
        }}>Indeterminate</p>\r
                </div>\r
            </div>;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const p = useAnimatedProgress(65);
    return <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>\r
                <CircularProgress progress={p} size={48} strokeWidth={5} showPercentage />\r
                <CircularProgress progress={p} size={72} strokeWidth={6} showPercentage />\r
                <CircularProgress progress={p} size={96} strokeWidth={8} showPercentage />\r
                <CircularProgress progress={p} size={130} strokeWidth={10} showPercentage label="Storage" />\r
                <CircularProgress progress={p} size={160} strokeWidth={12} showPercentage label="CPU Usage" gradient={['#3b82f6', '#8b5cf6']} />\r
            </div>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const cpu = useAnimatedProgress(72, 0);
    const mem = useAnimatedProgress(55, 200);
    const disk = useAnimatedProgress(88, 400);
    const net = useAnimatedProgress(34, 600);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '580px'
    }}>\r
                <h3 style={{
        margin: 0,
        fontSize: '1rem',
        fontWeight: 700
      }}>📊 System Resources</h3>\r
                <ProgressBar label="CPU Usage" progress={cpu} showPercentage animated size="md" color={cpu > 80 ? 'error' : cpu > 60 ? 'warning' : 'success'} />\r
                <ProgressBar label="Memory" progress={mem} showPercentage variant="striped" size="md" color="info" />\r
                <ProgressBar label="Disk" progress={disk} showPercentage labelInside size="lg" gradient={['#ef4444', '#dc2626']} />\r
                <ProgressBar label="Network" progress={net} variant="neon" showPercentage size="sm" />\r
                <ProgressBar label="Loading resources…" variant="indeterminate" size="xs" />\r
                <ProgressBar label="Storage Breakdown" variant="stacked" size="md" rounded="md" segments={[{
        value: 40,
        color: '#fa8029',
        label: 'System'
      }, {
        value: 25,
        color: '#3b82f6',
        label: 'Media'
      }, {
        value: 23,
        color: '#22c55e',
        label: 'Docs'
      }]} />\r
            </div>;
  }
}`,...u.parameters?.docs?.source}}};const C=["AllLinearVariants","SemanticColors","Sizes","Stepped","Stacked","Circular","CircularSizes","RealWorldDashboard"];export{i as AllLinearVariants,g as Circular,m as CircularSizes,u as RealWorldDashboard,n as SemanticColors,c as Sizes,p as Stacked,d as Stepped,C as __namedExportsOrder,w as default};
