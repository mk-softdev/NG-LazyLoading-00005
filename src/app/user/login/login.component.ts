import { Component, OnDestroy, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Observable, Subscription, Subscriber } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private muSub:Subscription | undefined;  

  constructor() { }

  ngOnInit(){
    //promise
    const promise = new Promise(res => {
      console.log('Promise call...');
      setTimeout(() => {
        res('Promise working!');
        res('Promise working1!');
        res('Promise working2!');
        res('Promise working3!');
      }, 1000)
    })

    //promise.then(result => console.log(result));

    //observable
    const observable = new Observable(sub => {
      //console.log('Observable call...');
      // setTimeout(()=>{
      //     sub.next('Observable working!');
      //     sub.next('Observable working1!');
      //     sub.next('Observable working2!');
      //     sub.next('Observable working3!');
      // },1000)
      let counter = 0;
      setInterval(() => {
        counter = counter + 1;
        sub.next(counter);
      }, 1000);
    });

    // observable.pipe(
    //   filter(d => d === 'Observable working2!')
    // ).subscribe(result => console.log(result));

  this.muSub =  observable.subscribe(result => console.log(`Subscribe counter ${result}`));

  }

  ngOnDestroy(){
    this.muSub?.unsubscribe();
  }

}
