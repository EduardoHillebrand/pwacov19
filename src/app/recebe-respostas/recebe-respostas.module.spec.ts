import { RecebeRespostasModule } from './recebe-respostas.module';

describe('RecebeRespostasModule', () => {
  let recebeRespostasModule: RecebeRespostasModule;

  beforeEach(() => {
    recebeRespostasModule = new RecebeRespostasModule();
  });

  it('should create an instance', () => {
    expect(recebeRespostasModule).toBeTruthy();
  });
});
