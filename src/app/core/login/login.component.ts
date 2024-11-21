import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  )

  {
     
  }

  public urlVehicle: string | any[] | null | undefined = "/veiculo"

  public navigateTo(url: string): void {
    this.router.navigate([url])

  }

    //PRIMEIRA IMPLEMENTACAO
    public emailFormControl: FormControl = new FormControl(
      "teste",
      [Validators.email, Validators.required]
    );

    public passwordFormControl: FormControl = new FormControl(
      "",
      [Validators.required, Validators.minLength(5)]
    );


      // SEGUNDA IMPLEMENTACAO
  public loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl(
      "teste", 
      [Validators.email, Validators.required]
    ),
    password: new FormControl(
      "", 
      [Validators.required, Validators.minLength(5)]
    )
  })

    //TERCEIRA IMPLEMENTACAO
    public LoginForm: FormGroup = this.fb.group( {
      email: ['teste', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]

})

    //Envio
    public submit(): void {
      console.log("Email: " + this.emailFormControl.value)
      this.emailFormControl.setValue("email:")
      console.log("Password:" + this.passwordFormControl.value)
      this.passwordFormControl.setValue("password:")
    }

    //Validações
    public IsFormInvalid(): boolean {
      return this.LoginForm.invalid

    }

    public validateEmail(): string {
      const email = this.LoginForm.get('email')

      if (email?.getError('email') && !email.getError('required')) {
        return 'Email está fora da formatação'
      }

      if(email?.getError('required')) {
        return 'Email obrigatório'
      }

      return ''
      }

      public ValidatePassword(): string {
        if(this.LoginForm.get('password')?.hasError) {
          return 'Senha é obrigatório'
        }
        return ""
      }
    }

