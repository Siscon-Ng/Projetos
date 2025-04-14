import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly users = [
    { id: 1, email: 'admin@gmail.com', password: '123456' },
  ];

  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );
    return user || null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
