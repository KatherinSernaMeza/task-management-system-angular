import { HomeComponent } from './components/home/home.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';
import { EditPlaylistComponent } from './components/edit-playlist/edit-playlist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'playlist', component: PlaylistsComponent },
  { path: 'playlist-detail/:id', component: PlaylistDetailComponent },
  { path: 'create-playlist', component: CreatePlaylistComponent },
  { path: 'edit-playlist/:id', component: EditPlaylistComponent },
  { path: '**', component: PageNotFoundComponent },
];
