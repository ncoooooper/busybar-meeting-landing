import {desk} from "@shared/desk";
import {wrap} from "@shared/surface";
let decisions=["Review design","Send estimate","Book demo"],owners=["Ari","Bo","Cam"];
type Item={owner:string;due:number;closed:boolean};type S={at:number;stage:number;who:number;days:number;items:Record<string,Item>};
desk<S>({name:"Meeting Landing",accent:"#A9DA64",motion:{"motif":"bookmark","color":"#A9DA64","shine":"#EFFDB9"},initial:()=>({at:0,stage:0,who:0,days:1,items:{}}),configure:(s,v)=>{const vals=(k:string)=>String(v[k]||"").split(",").map(x=>x.trim()).filter(Boolean).slice(0,6);
 if(vals("decisions").length)decisions=vals("decisions");if(vals("owners").length)owners=vals("owners");s.at%=decisions.length;s.who%=owners.length;},
 render:(s,now)=>{const task=decisions[s.at],it=s.items[task],remain=it?Math.ceil((it.due-now)/86400000):0;
 return {title:["Decision","Assign owner","Due after"][s.stage],value:s.stage===1?owners[s.who]:s.stage===2?s.days+" days":it?.closed?"Done":it?it.owner:"Unassigned",
 lines:[task,it?"Owner "+it.owner:"Needs an owner",it?"Due "+new Date(it.due).toISOString().slice(0,10)+(remain<0?" LATE":""):"Set a due date",
 "Wheel: choose / click: next","Start: back to list","Hold OK: done / reopen"]};},
 action:(s,k,now)=>{const name=decisions[s.at],it=s.items[name];if(k==="start"){s.stage=0;return;}
 if(k==="up"||k==="down"){const d=k==="up"?1:-1;if(!s.stage)s.at=wrap(s.at+d,decisions.length);else if(s.stage===1)s.who=wrap(s.who+d,owners.length);else s.days=Math.max(0,Math.min(90,s.days+d));}
 if(k==="ok"){if(!s.stage&&it){s.who=Math.max(0,owners.indexOf(it.owner));s.days=Math.max(0,Math.ceil((it.due-now)/86400000));}
 if(s.stage===2)s.items[name]={owner:owners[s.who],due:now+s.days*86400000,closed:false};s.stage=wrap(s.stage+1,3);}
 if(k==="hold-ok"&&!s.stage&&it)it.closed=!it.closed;}});
