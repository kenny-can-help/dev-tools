import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, debounceTime, distinctUntilChanged, Subject} from "rxjs";

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.less']
})
export class Base64Component implements OnInit, OnDestroy{

  ciphertextSubject = new Subject<string>();

  plainTextSubject = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.plainTextSubject
      .pipe(
        // 请求防抖 300毫秒
        debounceTime(300),
        distinctUntilChanged())
      .subscribe(value => {
        this.http.post<{data:string}>("http://localhost:3000/coding/base64/encode", {data : value})
          .subscribe(res=>{
            this.ciphertextSubject.next(res.data);
          })
      })

    this.ciphertextSubject
      .pipe(
        // 请求防抖 300毫秒
        debounceTime(300),
        distinctUntilChanged())
      .subscribe(value => {
        this.http.post<{data:string}>("http://localhost:3000/coding/base64/decode", {data : value})
          .subscribe(res=>{
            this.plainTextSubject.next(res.data);
          })
      })
  }

  ngOnDestroy(): void {
    this.ciphertextSubject.unsubscribe();
    this.plainTextSubject.unsubscribe();
  }



}
