import { Injectable } from '@nestjs/common';

@Injectable()
export class ExceptionService {
  fetch: (id: string) => string = (id) => `hello world! ${id}`;

  save: (message: string) => string = (message) => `add hello done. ${message}`;

  update: (id: string, message: string) => string = (id, message) =>
    `update hello done. ${id}: ${message}`;

  remove: (id: string) => string = (id) => `${id} hello has removed`;
}
