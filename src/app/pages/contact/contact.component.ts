import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { debounceTime, fromEvent, map, tap  } from 'rxjs';
import { Email } from 'src/app/modele/email';
import { EmailService } from 'src/app/services/email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageValid = false;
  submitted = false;
  email: Email = new Email;
  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    phone: new FormControl(),
  });


  constructor(private service: EmailService, private builder: FormBuilder){}

    ngOnInit(): void {
      this.form = this.builder.group({
        nom: [''],
        email: [''],
        message: [''],
        phone: [''],
      })
    }

get f(): { [key: string]: AbstractControl} {
  return this.form.controls;
}

    sendMail(form: any){
      console.log(form);
      this.submitted = true;
      this.email = new Email();
      this.email.civilite = "M";
      this.email.nom = form.nom;
      this.email.message = form.message;
      this.service.send(this.email).subscribe({
        next : (data) => {
          this.onReset();
          alert("ca marche")
        },
        error : (error) => alert("oups erreur"),
        complete: () => alert('complete !!')
      });
    }

    onReset(): void {
      this.submitted = false;
      this.form.reset();
      this.messageValid = true;
    }

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
