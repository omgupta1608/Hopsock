import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { WsAdapter, socketio } from 'socket.io';
// import { passport } from 'passport';
// import { expressSession } from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useWebSocketAdapter(new WsAdapter(app.getHttpServer()));

  // const io = socketio(app.getHttpServer());
  // app.use('io', io);
  // app.use(passport.initialize());
  // app.use(passport.session());
  // app.use(expressSession({
  //   secret: 'SECRET_SESSION',
  //   resave: true,
  //   saveUninitialized: true,
  // }));
  await app.listen(3000);
}
bootstrap();
