import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component'; // ← Quitar espacios extra
import { AuthService } from '@auth0/auth0-angular';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>; // ← Quitar espacios extra
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent], // ← Quitar espacios extra
      providers: [
        { provide: AuthService, useValue: { /* mock */ } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
