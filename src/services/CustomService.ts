export class CustomService {
  private counter = 1
  constructor() {
    this.counter++;
  }

  public get cnt() {
    return this.counter
  }
}