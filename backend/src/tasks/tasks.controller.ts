import { Body, Controller, Get, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { createTaskSchema } from "./schema/create-task.schema";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() body: { title: string }) {
    createTaskSchema.parse(body);

    return this.tasksService.create(body.title);
  }
}