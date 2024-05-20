import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RemoteActorsService } from '../remote-actors.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-actor-details',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <pre>{{actorDetails | json}}</pre>
  `,
  styles: ``
})
export class ActorDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  actorId: string = '';
  actorDetails: {id: string, title: string, views: number} | undefined;
  remoteActorsService: RemoteActorsService = inject(RemoteActorsService);

  constructor() {
    this.actorId = this.route.snapshot.params["id"];
    this.remoteActorsService.getActorDetails(this.actorId).then(res => this.actorDetails = res);
  }
}
