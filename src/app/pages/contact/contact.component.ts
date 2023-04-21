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
        nom:  ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        message:  ['', [Validators.required]],
        phone:  [''],
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
      console.log(this.email.message);
    this.service.send(this.email).subscribe({
      next : (data) => {
        this.onReset();
        alert("ca fonctionne")
      },
      error : (error) => alert("oups erreur "),
      complete: () => alert('complete')
  });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.messageValid = true;
  }

}
