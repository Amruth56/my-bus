import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsrtcComponent } from './ksrtc.component';

describe('KsrtcComponent', () => {
  let component: KsrtcComponent;
  let fixture: ComponentFixture<KsrtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsrtcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KsrtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
