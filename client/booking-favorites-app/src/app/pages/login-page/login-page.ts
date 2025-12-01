import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPage {
  email: string = '';
  password: string = '';
  name: string = '';
  isRegisterMode: boolean = false;
  error: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  toggleMode(): void {
    this.isRegisterMode = !this.isRegisterMode;
    this.error = '';
  }

  onSubmit(): void {
    this.error = '';
    this.isLoading = true;

    if (this.isRegisterMode) {
      this.authService.register(this.email, this.password, this.name).subscribe({
        next: () => {
          this.isLoading = false;
          this.isRegisterMode = false;
          this.error = 'Registration successful! Please log in.';
        },
        error: (err) => {
          this.isLoading = false;
          this.error = err.error?.message || 'Registration failed. Please try again.';
        }
      });
    } else {
      this.authService.login(this.email, this.password).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/favorites']);
        },
        error: (err) => {
          this.isLoading = false;
          this.error = err.error?.message || 'Login failed. Please check your credentials.';
        }
      });
    }
  }
}
