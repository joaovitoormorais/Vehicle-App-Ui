import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  public urlVehicle: string | any[] | null | undefined = "/veiculo"

  public navigateTo(url: string): void {
    this.router.navigate([url])
}

}