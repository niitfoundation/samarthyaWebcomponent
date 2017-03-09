import { TestBed, async } from '@angular/core/testing';
import { CandidateAvatar } from './candidateavata.component';

describe('Testing for Component::CandidateAvatar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CandidateAvatar
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(CandidateAvatar);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as name as data`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).not.equal(undefined);
  }));

  it('should render name in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).not.equal(undefined);
  }));
});
