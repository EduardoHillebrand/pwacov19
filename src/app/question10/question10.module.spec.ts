import { Question10Module } from './question10.module';

describe('Question10Module', () => {
  let question10Module: Question10Module;

  beforeEach(() => {
    question10Module = new Question10Module();
  });

  it('should create an instance', () => {
    expect(question10Module).toBeTruthy();
  });
});
