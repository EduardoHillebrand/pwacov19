import { Question13Module } from './question13.module';

describe('Question13Module', () => {
  let question13Module: Question13Module;

  beforeEach(() => {
    question13Module = new Question13Module();
  });

  it('should create an instance', () => {
    expect(question13Module).toBeTruthy();
  });
});
