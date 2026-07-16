import { Injectable } from '@nestjs/common';
import { db } from '../database/drizzle';
import { tasks } from '../database/schema/task.schema';

@Injectable()
export class TasksService {
  async create(title: string) {
    await db.insert(tasks).values({
      title,
    });
  }

  async findAll() {
    return db.select().from(tasks);
  }
}