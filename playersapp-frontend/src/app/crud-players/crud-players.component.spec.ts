import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPlayersComponent } from './crud-players.component';

describe('CrudPlayersComponent', () => {
  let component: CrudPlayersComponent;
  let fixture: ComponentFixture<CrudPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
