import { Question2Module } from './question2.module';

describe('Question2Module', () => {
  let question2Module: Question2Module;

  beforeEach(() => {
    question2Module = new Question2Module();
  });

  it('should create an instance', () => {
    expect(question2Module).toBeTruthy();
  });
});
