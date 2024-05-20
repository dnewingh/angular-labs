import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoteActorsService {
  url: string = 'http://localhost:3000/remoteActors';

  constructor() { }

    async getActors(): Promise<any> {
      const response = await fetch(this.url);
      return  await response.json();
    }

    async addActor(actorTitle: string): Promise<any> {      
      const newActor = {
        id: Math.random().toString(),
        title: actorTitle,
        views: 0
      }

      const requestionOptions = {
        method: 'POST', // Specify the method as POST
        headers: {
          'Content-Type': 'application/json' // Set the Content-Type header to application/json
        },
        body: JSON.stringify(newActor)
      };

      

      const response = await fetch(this.url, requestionOptions,);
      return await response.json();
    }

    async getActorDetails(actorId: string) {
      const response = await fetch(this.url + '/' + actorId);
      return await response.json();
    }

}
