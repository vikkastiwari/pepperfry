import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      ServeStaticModule.forRoot({
      rootPath: join(__dirname, './', 'my-app')
    }),
    ConfigModule.forRoot({isGlobal:true}),
    // MongooseModule.forRoot( process.env.database ),
    TypeOrmModule.forRoot({
        type: 'postgres',
        url: process.env.database,
        autoLoadEntities: true,
        synchronize: true,
    } ),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
