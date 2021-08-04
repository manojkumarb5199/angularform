import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{ map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorserviceService {

  constructor(private _http:HttpClient) { }
  postactor(data:any){
    return this._http.post('http://localhost:4000/result',data)
    .pipe(map(res =>res))
  }
  getactor(){
    return this._http.get('http://localhost:4000/result')
    .pipe(map(res =>res))
  }
  updateactor(data:any,id:any){
    return this._http.put('http://localhost:4000/result/'+id,data)
    .pipe(map(res =>res))
  }
  deleteactor(id:any){
    return this._http.delete('http://localhost:4000/result/'+id)
    .pipe(map(res =>res))
  }
}
