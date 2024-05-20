import { Strategy, Profile } from 'passport-texr';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';

config();

@Injectable()
export class texrStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.texr_REST_API_KEY,
      clientSecret: '',
      callbackURL: 'http://127.0.0.1:3000/api/users/texr/callback',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done,
  ) {
    done(null, profile);
  }
}
