import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './post/entities/post.entity';
import { PostModule } from './post/post.module';

const config: SqliteConnectionOptions = {
  type: "sqlite",
  database: "../db",
  entities: [Post],
  synchronize: true
}

@Module({
  imports: [PostModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
