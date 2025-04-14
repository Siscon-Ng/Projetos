import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [ClientesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
