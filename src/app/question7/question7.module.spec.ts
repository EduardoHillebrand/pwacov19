import { Question7Module } from './question7.module';

describe('Question7Module', () => {
  let question7Module: Question7Module;

  beforeEach(() => {
    question7Module = new Question7Module();
  });

  it('should create an instance', () => {
    expect(question7Module).toBeTruthy();
  });
});
