export class AppService {
  count = 0;

  getNow() {
    this.count += 2;
    return this.count;
  }
}
