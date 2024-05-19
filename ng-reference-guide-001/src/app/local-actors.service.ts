import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalActorsService {
  actors: string[] = [];

  constructor() { }

  addActor(actorName: string) {
    this.actors.push(actorName);
  }

  getActors() {
    return this.actors;
  }
}
