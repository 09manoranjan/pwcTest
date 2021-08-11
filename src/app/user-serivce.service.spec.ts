import { TestBed } from '@angular/core/testing';

import { UserSerivceService } from './user-serivce.service';

describe('UserSerivceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSerivceService = TestBed.get(UserSerivceService);
    expect(service).toBeTruthy();
  });
});
