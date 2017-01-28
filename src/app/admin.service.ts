import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable()
export class AdminService {
  token:number = 0;
  tokenSet:number;
  constructor() { }
  tokenSetter(){
    this.token += 1;
  }
  tokenGet(){
    this.tokenSet = this.token % 2;
  }
}
