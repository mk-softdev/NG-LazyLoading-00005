import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {  BehaviorSubject } from 'rxjs';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  sub1:any;sub2:any;

  constructor() { }

  ngOnInit() {
    //Observale are unicast
    // const observable = new Observable(obj => obj.next(Math.random()));
    //subsriber 1
    // observable.subscribe(d =>{ console.log(d);this.sub1 = d});
    //subsriber 2
    // observable.subscribe(d => {console.log(d);this.sub2=d});
    //Subject are multicast
    // const subject = new Subject();
    //subscriber 1
    // subject.subscribe(d => {console.log(d);this.sub1 = d;});
    //subscriber 2
    // subject.subscribe(d => { console.log(d); this.sub2 = d; });
    //method allocation to subject || data allocation
    // subject.next(Math.random());
    //ajax api call
    // const subject = new Subject();
    // const data = ajax('https://jsonplaceholder.typicode.com/users');
    //subscribe 1
    // subject.subscribe(d =>{console.log(d)});
    //subscribe 2
    // subject.subscribe(d =>{console.log(d)});
    // const result = data.subscribe(subject);
    //Normal Subject
    // const subject = new Subject();
    // subject.subscribe(d => {console.log(`sub1:- ${d}`)});
    // subject.next(2020);
    // subject.subscribe(d => { console.log(`sub2:- ${d}`)});
  //Behavoiur Subject
  //   const behaSubject = new BehaviorSubject<number>(12);
  //   behaSubject.subscribe(d=>{console.log(d);this.sub1=d});
  //   behaSubject.next(200);
  //   behaSubject.subscribe(d => { console.log(d); this.sub2 = d });
  // const asyncSubject$ = new AsyncSubject();
  //   asyncSubject$.next('Message 1');
  //   asyncSubject$.next('Message 2');
  //   asyncSubject$.next('Message 3 loaded?');
  //   asyncSubject$.subscribe(msg => { console.log(msg); this.sub2 = msg; });
  //   // asyncSubject$.complete();
  //   asyncSubject$.next('Message 4');
  //   asyncSubject$.subscribe(msg => {console.log(msg);this.sub1=msg;});
  //   asyncSubject$.complete();

    const url = "https://restcountries.eu/rest/v2/name/india?fullText=true";
    const cache = {};

    function getCountryInfo(url){
      if(!cache[url]){
        //api call using fetch
        cache[url] = new AsyncSubject();
        fetch(url).then(res => res.json())
        .then(d => {
          cache[url].next(d);
          cache[url].complete();
        })
      }
      return cache[url].asObservable();
    }

    setTimeout(()=>{
      getCountryInfo(url).subscribe(d => {console.log(d);this.sub1 = JSON.stringify(d)});
    },2000)
    
 
 }

}
