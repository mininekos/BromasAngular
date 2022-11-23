import { Servicio } from './servicio';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
describe('Servicio', () => {
  it('should create an instance', () => {
    expect(new Servicio()).toBeTruthy();
  });
});
