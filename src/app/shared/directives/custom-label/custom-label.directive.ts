import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription, fromEvent } from 'rxjs';
import { getErrorMessage} from './custom-label-error-messages';

@Directive({
  standalone: true,
  selector: 'input[formControlName]'
})
export class CustomLabelDirective implements AfterViewInit, OnDestroy{

  private labelRef?:HTMLElement;

  private eventsSubscriptions:Subscription[] = [];

  constructor(private el: ElementRef, private control: NgControl, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.listenValueChanges();
    this.listenBlur();
  }

  ngOnDestroy(): void {
    this.eventsSubscriptions.forEach(sub => sub.unsubscribe());
  }
  private listenValueChanges(){
    const sub = this.control.valueChanges?.subscribe(()=>{
        this.setBorder();
        this.setLabel();  
    });
    this.eventsSubscriptions.push(sub as Subscription);
  }
  private listenBlur(){
    const sub = fromEvent(this.el.nativeElement, 'blur').subscribe(()=>{
       setTimeout(() => {
             this.setBorder();
             this.setLabel(); 
       });
    });
    this.eventsSubscriptions.push(sub);
  }

  private setLabel(){
    if (this.control.touched && this.control.errors) {
      this.removeLabel();
      this.labelRef = this.renderer.createElement('span');
      this.renderer.setStyle(this.labelRef, 'color', 'red');
      this.renderer.setStyle(this.labelRef, 'margin-left', '10px');
      this.renderer.appendChild(this.el.nativeElement.parentElement, this.labelRef);
      if(this.labelRef){
        const firstError = Object.keys(this.control.errors)[0];
        this.labelRef.innerHTML = getErrorMessage(firstError,this.control);
      }
    } else{
       this.removeLabel();
    }
  }

  private removeLabel(){
    if (this.labelRef?.parentElement)
        this.renderer.removeChild(this.labelRef?.parentElement, this.labelRef);
  }

  private setBorder(){
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.control.errors ? 'red' : 'blue');
  }
}
