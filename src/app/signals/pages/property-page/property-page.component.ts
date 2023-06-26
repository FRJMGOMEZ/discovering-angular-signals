import { Component, signal, computed, effect } from '@angular/core';
import { User } from '../../services/user-request.interface';

@Component({
  selector: 'app-property-page',
  templateUrl: './property-page.component.html',
  styleUrls: ['./property-page.component.scss']
})
export class PropertyPageComponent {

  counter = signal(10);
  user = signal<User>({
    id:0,
    email: '',
    first_name:'',
    last_name: '',
    avatar: ''
  });

  fullName = computed<string>( ()=> {
    const user = this.user();
    return `${user?.first_name} ${user?.last_name}`;
  });

  userChangedEffect = effect(()=>{
    console.log(`My name : ${this.user().first_name}, My count : ${this.counter()}`);
  })

  onFieldUpdated(field: keyof User,value:string){
     this.user.update( (user) =>({...user,[field]:value}));
  }

  increaseCount(value:number){
    this.counter.update(count => count+value);
  }

}
