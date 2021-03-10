import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
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
  save(): void {
    this.albumService.updateAlbum(this.album)
      .subscribe(() => this.goBack());
  }
  goBack(): void{
    this.location.back();
  }

}
