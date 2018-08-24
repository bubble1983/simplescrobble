import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityUtil } from '../../../types/entity-util';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: Artist;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.artist = data.artist;
      console.log(this.artist);
    });
  }

  get img() {
    return EntityUtil.getImage(this.artist, 'best');
  }

  onClick(album: AlbumMatch) {
    if (album instanceof MouseEvent) {
      return;
    }

    this.router.navigate(['/home', 'album', album.artist.name, album.name]);
  }
}
