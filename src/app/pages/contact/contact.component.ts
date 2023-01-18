import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { debounceTime, fromEvent, map, tap  } from 'rxjs';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = 'Angular ' + VERSION.major;
  title = 'nodeMailerApp';

  constructor(private MessageService:MessageService){}

    ngOnInit(){
    }

    // sendMail(){
    //   this.http.mes.sendMessage().subscribe(data=>{
    //     console.log(data)
    //   })
    // }

  showBtn$ = fromEvent(document, 'scroll').pipe(
    debounceTime(50),
    map(() => window.scrollY > 500),
    tap(() => console.log('sas'))
  );

  // not Cross browsing (works on chrome - firefox)
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
