import {AppService} from "./app.service";

describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  })

  it('проверка метода getNow', () => {
    expect(appService.getNow()).toBe(2);
  })
})
