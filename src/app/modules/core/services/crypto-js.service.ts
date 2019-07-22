import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

export const secret: string = 'XR3WHXmpDG3cRXJ79JK5YUIID3';

@Injectable({
  providedIn: 'root'
})
export class CryptoJsService {

  constructor() { }

  encryptText(value){
    if(Object.keys(localStorage).length > 0 ){
      return Object.keys(localStorage)
    }else{
      return CryptoJS.AES.encrypt(value, secret).toString();
    }
  }

  decryptText(value){
    return CryptoJS.AES.decrypt(value, secret).toString(CryptoJS.enc.Utf8);
  }

  decryptTextArray(value){
    if(Array.isArray(value)){
      return CryptoJS.AES.decrypt(value[0], secret).toString(CryptoJS.enc.Utf8);
    }else{
      return CryptoJS.AES.decrypt(value, secret).toString(CryptoJS.enc.Utf8);
    }
  }

}
