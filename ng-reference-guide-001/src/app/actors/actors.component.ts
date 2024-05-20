import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalActorsService } from '../local-actors.service';
import { ActivatedRoute } from '@angular/router';
import { RemoteActorsService } from '../remote-actors.service';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="name" required />

    <p>Value: {{ name }}</p>

    <button type="button" (click)="addNewItem()">Add</button>

    <ul>
      @for(actor of componentActors; track actor) {
        <li>{{ actor }}</li>
      }
    </ul>

    <h6>Activated Route Snapshot</h6>
    <pre>{{ route.snapshot }}</pre>

    <section>
      <button type="button" (click)="getRemoteActors()">Get Remote Actors</button>
      @if(remoteActorsIsRefreshing) {
        <p>Loading...</p>
      } @else {
        <ul>
          @for(actor of remoteActors; track actor) {
            <li>{{ actor }}</li>
          }
        </ul>
      }
    </section>
  `,
  styles: ``
})
export class ActorsComponent {
  name: string = '';
  localActorsService: LocalActorsService = inject(LocalActorsService);
  componentActors: string[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  remoteActorsService: RemoteActorsService = inject(RemoteActorsService);
  remoteActors: string[] = [];
  remoteActorsIsRefreshing: boolean = false;

  async addNewItem() {
    this.localActorsService.addActor(this.name);
    this.componentActors = this.localActorsService.getActors();

    this.remoteActorsIsRefreshing = true;
    await this.remoteActorsService.addActor(this.name);
    await this.getRemoteActors();
  }

  async getRemoteActors() {
    this.remoteActorsIsRefreshing = true;
    const actorsResponse: {id: string, title: string, view: number }[] = await this.remoteActorsService.getActors();
    this.remoteActors = actorsResponse.map(el => el.title);
    this.remoteActorsIsRefreshing = false;
  }

}
