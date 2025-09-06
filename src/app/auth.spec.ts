import { TestBed } from '@angular/core/testing';
import { AuthService, AuthModule } from '@auth0/auth0-angular'; // Importa AuthModule

describe('Auth', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthModule.forRoot({
          domain: 'dev-pvzzaueuqbmt31f6.us.auth0.com',
          clientId: 'GvU0zT3jYx08geYMICM0nha1VaJWftiQ',
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        })
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});