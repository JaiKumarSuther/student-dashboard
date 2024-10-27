import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedModulesComponent } from './completed-modules.component';

describe('CompletedModulesComponent', () => {
  let component: CompletedModulesComponent;
  let fixture: ComponentFixture<CompletedModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
