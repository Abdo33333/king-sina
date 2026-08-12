'use client';

import { useState } from 'react';
import { ArrowLeft, BusFront, CalendarDays, ChevronDown, Clock3, Headphones, MapPin, ShieldCheck, Sparkles, Users } from 'lucide-react';

const destinations = [
  { name:'دهب', en:'DAHAB', note:'مياه صافية، جبال، وهدوء لا يُنسى.' },
  { name:'شرم الشيخ', en:'SHARM EL SHEIKH', note:'رحلتك إلى واحدة من أجمل مدن البحر الأحمر.' },
  { name:'طابا', en:'TABA', note:'بوابتك إلى طبيعة سيناء الساحرة.' },
  { name:'نويبع', en:'NUWEIBA', note:'السفر إلى سيناء بروح مختلفة.' },
];

export default function Home() {
  const [to,setTo] = useState('');
  const [date,setDate] = useState('');
  const [passengers,setPassengers] = useState('1');

  return <main>
    <nav style={{position:'absolute',zIndex:10,width:'100%',top:0,color:'#fff'}}>
      <div className="container" style={{height:86,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}><div style={{width:42,height:42,border:'1px solid rgba(255,255,255,.35)',borderRadius:12,display:'grid',placeItems:'center',background:'rgba(255,255,255,.08)'}}><BusFront size={22}/></div><div><strong style={{fontFamily:'Manrope',letterSpacing:1.5,fontSize:19}}>KING SINA</strong><div style={{fontSize:10,opacity:.7}}>النقل البري</div></div></div>
        <div style={{display:'flex',gap:30,fontSize:14,alignItems:'center'}}><a href="#routes">الرحلات</a><a href="#why">لماذا نحن</a><a href="#faq">الأسئلة</a><a href="#contact">تواصل معنا</a><button style={{border:'1px solid rgba(255,255,255,.35)',background:'rgba(255,255,255,.08)',color:'#fff',padding:'10px 16px',borderRadius:999}}>EN</button></div>
      </div>
    </nav>

    <section style={{minHeight:690,background:'linear-gradient(180deg,rgba(4,16,25,.72),rgba(4,16,25,.86)),url(https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2200&q=85) center/cover',color:'#fff',display:'flex',alignItems:'center',paddingTop:70}}>
      <div className="container" style={{padding:'80px 0 55px'}}>
        <div style={{maxWidth:760}}><div style={{display:'inline-flex',gap:8,alignItems:'center',padding:'8px 13px',borderRadius:999,background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.16)',fontSize:13}}><Sparkles size={15}/> طريقك إلى سيناء يبدأ هنا</div>
        <h1 style={{fontSize:'clamp(48px,7vw,88px)',lineHeight:1.02,letterSpacing:-2.5,margin:'22px 0 18px',fontWeight:700}}>سافر أبعد.<br/><span style={{color:'#e8d6b3'}}>وسافر براحة.</span></h1>
        <p style={{fontSize:18,lineHeight:1.9,color:'rgba(255,255,255,.76)',maxWidth:610,margin:0}}>رحلات نقل بري مريحة وموثوقة من القاهرة إلى دهب، شرم الشيخ، طابا ونويبع.</p></div>

        <div style={{marginTop:42,maxWidth:1080,background:'#fff',color:'var(--ink)',borderRadius:24,padding:8,boxShadow:'0 25px 70px rgba(0,0,0,.25)'}}>
          <div style={{display:'grid',gridTemplateColumns:'1.15fr 1.15fr 1fr .75fr auto',gap:6}} className="booking-grid">
            <Field icon={<MapPin size={18}/>} label="من" value="القاهرة" />
            <label style={{padding:'14px 17px',borderRadius:17,background:'#f5f6f5',display:'block'}}><span style={{fontSize:11,color:'#7a838a'}}>إلى</span><div style={{display:'flex',alignItems:'center',gap:8,marginTop:4}}><MapPin size={18}/><select value={to} onChange={e=>setTo(e.target.value)} style={{border:0,outline:0,background:'transparent',width:'100%',fontWeight:600}}><option value="">اختر الوجهة</option>{destinations.map(x=><option key={x.name}>{x.name}</option>)}</select></div></label>
            <label style={{padding:'14px 17px',borderRadius:17,background:'#f5f6f5',display:'block'}}><span style={{fontSize:11,color:'#7a838a'}}>التاريخ</span><div style={{display:'flex',alignItems:'center',gap:8,marginTop:4}}><CalendarDays size={18}/><input type="date" value={date} onChange={e=>setDate(e.target.value)} style={{border:0,outline:0,background:'transparent',width:'100%',fontWeight:600}}/></div></label>
            <label style={{padding:'14px 17px',borderRadius:17,background:'#f5f6f5',display:'block'}}><span style={{fontSize:11,color:'#7a838a'}}>المسافرون</span><div style={{display:'flex',alignItems:'center',gap:8,marginTop:4}}><Users size={18}/><select value={passengers} onChange={e=>setPassengers(e.target.value)} style={{border:0,outline:0,background:'transparent',width:'100%',fontWeight:600}}>{[1,2,3,4,5,6].map(n=><option key={n}>{n} {n===1?'مسافر':'مسافرين'}</option>)}</select></div></label>
            <button onClick={()=>document.getElementById('routes')?.scrollIntoView()} style={{border:0,borderRadius:17,background:'var(--navy)',color:'#fff',padding:'0 25px',fontWeight:700,cursor:'pointer'}}>ابحث عن رحلة <ArrowLeft size={17} style={{verticalAlign:'middle',marginRight:5}}/></button>
          </div>
        </div>
      </div>
    </section>

    <section style={{background:'#fff',borderBottom:'1px solid var(--line)'}}><div className="container" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',padding:'25px 0',gap:20}}><Trust icon={<ShieldCheck/>} text="حجز آمن"/><Trust icon={<BusFront/>} text="مواصلات مريحة"/><Trust icon={<Clock3/>} text="مواعيد منظمة"/><Trust icon={<Headphones/>} text="دعم للعملاء"/></div></section>

    <section id="routes" className="container" style={{padding:'105px 0'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'end',marginBottom:40}}><div><span style={{color:'var(--sea)',fontWeight:700,fontSize:13}}>وجهاتنا</span><h2 style={{fontSize:42,margin:'8px 0 0',letterSpacing:-1}}>اكتشف سيناء بطريقتك.</h2></div><a href="#routes" style={{display:'flex',alignItems:'center',gap:8,fontWeight:600}}>كل الوجهات <ArrowLeft size={17}/></a></div><div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:15}}>{destinations.map((d,i)=><article key={d.name} style={{height:390,borderRadius:24,overflow:'hidden',position:'relative',background:`linear-gradient(180deg,transparent 20%,rgba(0,0,0,.8)),url(${['https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=900&q=80','https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=900&q=80','https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&q=80','https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'][i]}) center/cover`}}><div style={{position:'absolute',bottom:0,padding:23,color:'#fff',width:'100%'}}><span className="english" style={{fontSize:10,letterSpacing:2,opacity:.7}}>{d.en}</span><h3 style={{fontSize:28,margin:'5px 0'}}>{d.name}</h3><p style={{fontSize:13,opacity:.78,lineHeight:1.7,margin:0}}>{d.note}</p></div></article>)}</div></section>

    <section id="why" style={{background:'var(--navy)',color:'#fff',padding:'100px 0'}}><div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}}><div><span style={{color:'var(--sand)',fontWeight:700,fontSize:13}}>لماذا KING SINA؟</span><h2 style={{fontSize:48,lineHeight:1.2,margin:'12px 0 20px'}}>رحلة منظمة.<br/>من أول خطوة لآخر محطة.</h2><p style={{color:'rgba(255,255,255,.65)',lineHeight:2,fontSize:16,maxWidth:500}}>نحن نبني تجربة سفر بسيطة وواضحة؛ تعرف رحلتك، تختار موعدك، تحجز وتدفع بأمان — وكل شيء في مكان واحد.</p></div><div style={{display:'grid',gap:12}}>{[['01','اختار وجهتك','ابحث عن الرحلة المناسبة لك في ثوانٍ.'],['02','احجز بسهولة','أدخل بيانات المسافرين وراجع تفاصيل الحجز.'],['03','ادفع بأمان','دفع إلكتروني آمن مع تأكيد فوري للحجز.'],['04','استعد للرحلة','احتفظ بتذكرتك الرقمية واستمتع برحلتك.']].map(x=><div key={x[0]} style={{display:'grid',gridTemplateColumns:'50px 1fr',gap:18,padding:'20px 0',borderBottom:'1px solid rgba(255,255,255,.1)'}}><span className="english" style={{color:'var(--sand)',fontSize:13}}>{x[0]}</span><div><strong style={{fontSize:17}}>{x[1]}</strong><p style={{margin:'5px 0 0',color:'rgba(255,255,255,.55)',fontSize:13}}>{x[2]}</p></div></div>)}</div></div></section>

    <section id="faq" className="container" style={{padding:'100px 0'}}><div style={{maxWidth:720}}><span style={{color:'var(--sea)',fontWeight:700,fontSize:13}}>FAQ</span><h2 style={{fontSize:42,margin:'8px 0 35px'}}>أسئلة قبل السفر؟</h2>{['كيف يمكنني حجز رحلة؟','هل يمكنني الدفع بالفيزا؟','هل يمكنني تعديل أو إلغاء الحجز؟','متى أحصل على تذكرة الحجز؟'].map(q=><details key={q} style={{padding:'20px 0',borderBottom:'1px solid var(--line)'}}><summary style={{cursor:'pointer',fontWeight:600}}>{q}</summary><p style={{color:'var(--muted)',lineHeight:1.9,fontSize:14}}>سيتم توضيح هذه التفاصيل وفق سياسة الشركة ومعلومات الرحلة عند اكتمال بيانات التشغيل.</p></details>)}</div></section>

    <footer id="contact" style={{background:'#06131d',color:'#fff',padding:'60px 0 30px'}}><div className="container"><div style={{display:'flex',justifyContent:'space-between',gap:30,flexWrap:'wrap'}}><div><strong className="english" style={{fontSize:21,letterSpacing:1.5}}>KING SINA</strong><p style={{color:'rgba(255,255,255,.55)',maxWidth:360,lineHeight:1.9}}>النقل البري من القاهرة إلى أجمل وجهات سيناء.</p></div><div><span style={{color:'rgba(255,255,255,.45)',fontSize:12}}>تواصل معنا</span><p style={{marginTop:10}}>بيانات التواصل سيتم إضافتها</p></div></div><div style={{borderTop:'1px solid rgba(255,255,255,.1)',marginTop:50,paddingTop:20,color:'rgba(255,255,255,.35)',fontSize:12}}>© 2026 KING SINA. جميع الحقوق محفوظة.</div></div></footer>
  </main>
}

function Field({icon,label,value}:{icon:React.ReactNode,label:string,value:string}){return <div style={{padding:'14px 17px',borderRadius:17,background:'#f5f6f5'}}><span style={{fontSize:11,color:'#7a838a'}}>{label}</span><div style={{display:'flex',alignItems:'center',gap:8,marginTop:4}}>{icon}<strong>{value}</strong></div></div>}
function Trust({icon,text}:{icon:React.ReactNode,text:string}){return <div style={{display:'flex',alignItems:'center',gap:12,color:'var(--muted)',fontSize:13}}><span style={{width:38,height:38,borderRadius:12,background:'#f2f5f4',display:'grid',placeItems:'center',color:'var(--sea)'}}>{icon}</span>{text}</div>}
