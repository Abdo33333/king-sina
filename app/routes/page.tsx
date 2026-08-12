import Link from 'next/link';
import { ArrowLeft, Clock3, MapPin } from 'lucide-react';
import { destinations } from '@/lib/data';

export default function RoutesPage(){
  return <main style={{minHeight:'100vh',padding:'48px 0 90px'}}><div className="container">
    <Link href="/" style={{display:'inline-flex',gap:8,alignItems:'center',color:'var(--muted)',fontSize:14}}>العودة للرئيسية <ArrowLeft size={16}/></Link>
    <div style={{padding:'70px 0 45px'}}><span style={{color:'var(--sea)',fontWeight:700,fontSize:13}}>ROUTES</span><h1 style={{fontSize:'clamp(42px,6vw,72px)',lineHeight:1.05,margin:'10px 0 18px'}}>رحلاتك إلى سيناء.</h1><p style={{color:'var(--muted)',maxWidth:650,lineHeight:1.9,fontSize:17}}>استكشف الوجهات المتاحة من القاهرة. مواعيد وأسعار التشغيل ستظهر هنا فور اعتمادها من الشركة.</p></div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:18}}>{destinations.map(d=><Link key={d.slug} href={`/routes/${d.slug}`} style={{background:'#fff',border:'1px solid var(--line)',borderRadius:28,padding:12,display:'grid',gridTemplateColumns:'190px 1fr',gap:22,boxShadow:'0 12px 35px rgba(8,21,33,.05)'}}><div style={{minHeight:220,borderRadius:20,background:`linear-gradient(180deg,transparent,rgba(0,0,0,.45)),url(${d.image}) center/cover`}}/><div style={{padding:'18px 8px 18px 0'}}><span className="english" style={{fontSize:11,letterSpacing:2,color:'var(--sea)'}}>{d.en}</span><h2 style={{fontSize:31,margin:'7px 0'}}>{d.name}</h2><p style={{color:'var(--muted)',lineHeight:1.8,fontSize:14}}>{d.description}</p><div style={{display:'flex',gap:18,color:'var(--muted)',fontSize:13,marginTop:25}}><span><MapPin size={15} style={{verticalAlign:'middle',marginLeft:5}}/>القاهرة → {d.name}</span><span><Clock3 size={15} style={{verticalAlign:'middle',marginLeft:5}}/>{d.duration}</span></div><div style={{marginTop:25,fontWeight:700,display:'flex',alignItems:'center',gap:7}}>تفاصيل الرحلة <ArrowLeft size={16}/></div></div></Link>)}</div>
    <div style={{marginTop:35,padding:24,borderRadius:20,background:'var(--navy)',color:'#fff'}}>المواعيد والأسعار الحقيقية سيتم إدخالها من لوحة التحكم بعد استلام بيانات التشغيل من KING SINA.</div>
  </div></main>
}
