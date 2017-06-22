export class Time {
  id: number;
  time: string;
  available: boolean;

  constructor(time: Time) {
    this.id = time.id;
    this.time = time.time;
    this.available = time.available;
  }
}