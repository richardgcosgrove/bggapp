import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  inputs: ['id'],
  selector: 'game',
  templateUrl: 'game.html',
})
export class GamePage implements OnInit {
  id: string;
  thing: JSON;
  showDescription: boolean = true;
  isExpansion: boolean;
  Description: string;

  constructor(private navCtrl: NavController, private params: NavParams, private data: Data) {
    this.id = params.get('id');
  }

  ngOnInit(): void {
    this.data.getThing(this.id)
    .subscribe(res =>
    {
      this.thing = res;
      this.isExpansion = res['isExpansion'] !== null || false;
      if (res['description'] !== null) {
        this.Description = ((String)(res['description'])).replace(/&#10;/g, '\r\n').replace(/&ldquo;|&rdquo;/g, '"');
      }
    });
  }

  toggleShowDescription(): void {
    this.showDescription = !this.showDescription;
  }

  openGame(id: string): void {
    console.log(id);
    this.navCtrl.push(GamePage, {
      id: id
    });
  }

}
