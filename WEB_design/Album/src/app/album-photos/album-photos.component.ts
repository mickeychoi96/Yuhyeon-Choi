import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  album;
  constructor(    private route: ActivatedRoute,
                  private albumService: AlbumService,
                  private location: Location
  ) { }

  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbum(id)
      .subscribe(ALBUMS => this.album = ALBUMS);
  }
  goBack(): void{
    this.location.back();
  }

}
