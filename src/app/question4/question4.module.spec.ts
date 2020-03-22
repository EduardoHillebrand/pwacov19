import { Question4Module } from './question4.module';

describe('Question4Module', () => {
  let question4Module: Question4Module;

  beforeEach(() => {
    question4Module = new Question4Module();
  });

  it('should create an instance', () => {
    expect(question4Module).toBeTruthy();
  });
});
