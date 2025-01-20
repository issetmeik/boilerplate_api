import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get()
  check() {
    const version = process.env.VERSION;
    return { version };
  }
}
