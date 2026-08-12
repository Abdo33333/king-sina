export type Destination = { slug:string; name:string; en:string; description:string; duration:string; image:string };
export type Trip = { id:string; destination:string; time:string; arrival:string; duration:string; vehicle:string; seats:number; price:number };

export const destinations: Destination[] = [
  {slug:'dahab',name:'دهب',en:'DAHAB',description:'مياه صافية، جبال، وهدوء لا يُنسى.',duration:'حسب جدول التشغيل',image:'https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=1200&q=85'},
  {slug:'sharm-el-sheikh',name:'شرم الشيخ',en:'SHARM EL SHEIKH',description:'رحلتك إلى واحدة من أجمل مدن البحر الأحمر.',duration:'حسب جدول التشغيل',image:'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85'},
  {slug:'taba',name:'طابا',en:'TABA',description:'بوابتك إلى طبيعة سيناء الساحرة.',duration:'حسب جدول التشغيل',image:'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85'},
  {slug:'nuweiba',name:'نويبع',en:'NUWEIBA',description:'السفر إلى سيناء بروح مختلفة.',duration:'حسب جدول التشغيل',image:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85'}
];

// Operational data is intentionally empty until the company supplies real schedules/prices.
export const trips: Trip[] = [];

export const getDestination = (slug:string) => destinations.find(d=>d.slug===slug);
