import {position} from '../src/shared/language/php-source';
export class PluginHost{
 constructor(private files:any,private plugins:any[]){}
 async define(path:string,text:string,offset:number){for(const p of this.plugins){const result=await p.defineCode?.({path,text,offset},this.files);if(result)return result}return null}
 async defineCode(path:string,text:string,offset:number){return this.define(path,text,offset)}
 async completeCode(path:string,text:string,offset:number){for(const p of this.plugins){const r=await p.completeCode?.({path,text,offset},this.files);if(r)return{items:r.items.map((i:any)=>({...i,textEdit:{newText:i.label,range:{start:position(text,r.from),end:position(text,offset)}}}))}}return null}
 async diagnose(path:string,text:string){return(await Promise.all(this.plugins.map(p=>p.diagnose?.(path,text,this.files)??[]))).flat()}
}
