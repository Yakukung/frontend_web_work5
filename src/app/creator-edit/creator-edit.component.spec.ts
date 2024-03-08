import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorEditComponent } from './creator-edit.component';

describe('CreatorEditComponent', () => {
  let component: CreatorEditComponent;
  let fixture: ComponentFixture<CreatorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
