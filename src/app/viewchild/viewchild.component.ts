import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit {

  
  
  // @ViewChild("demo")marker:ElementRef;
  @ViewChildren("demo") marker: QueryList<any>;
  @ViewChild("childView")x:ChildComponent;
  
  

  constructor() {
    

  }
  ngOnInit(){
  }
  
  ngAfterViewInit(){
    console.log(this.marker)
    setTimeout(()=>{
      this.marker.first.nativeElement.style.color = 'red';
      
      this.marker.last.nativeElement.style.color = 'green';
    },2000)
    
  }

  inc(){
    this.x.incerement();
  }

  dec(){
    this.x.decrement();
    
  }

   

}
