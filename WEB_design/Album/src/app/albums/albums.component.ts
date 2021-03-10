import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album';
import { Location } from '@angular/common';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  constructor(  private albumService: AlbumService,
                private location: Location
  ) { }

  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums(): void {
    this.albumService.getAlbums().subscribe(ALBUMS => this.albums = ALBUMS);
  }
  delete(album: Album): void {
    this.albums = this.albums.filter(h => h !== album);
    this.albumService.deleteHero(album).subscribe();
  }
  getBack(): void {
    this.location.back();
  }
}
