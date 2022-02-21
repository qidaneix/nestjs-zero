import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  fetch(id: string): string {
    return `${id} get something`;
  }

  save(message: string): string {
    return message;
  }

  update(id: string, message: string): string {
    return id + message;
  }

  remove(id: string): string {
    return String(true);
  }
}
