import { Component, ElementRef, ViewChild, asNativeElements } from '@angular/core';

@Component({
  selector: 'app-main-pg',
  templateUrl: './main-pg.component.html',
  styleUrls: ['./main-pg.component.css']
})
export class MainPgComponent {

  @ViewChild('containerRef',{static:true})containerEle!:ElementRef;
  @ViewChild('c1Ref',{static:true})btn1Ele!:ElementRef;
  @ViewChild('c2Ref',{static:true})btn2Ele!:ElementRef;
  @ViewChild('c3Ref',{static:true})btn3Ele!:ElementRef;
  elhtml:string ='red';

  fcolor_1(){
    this.containerEle.nativeElement.style.backgroundColor = '#AEA4F9';
  }
  fcolor_2(){
    this.containerEle.nativeElement.style.backgroundColor = '#EB9CD9';
    
  }
  fcolor_3(){
    this.containerEle.nativeElement.style.backgroundColor = '#B2EB9C';
  }

  

}


