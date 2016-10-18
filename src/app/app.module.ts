import {Data} from '../providers/data/data';
import {GamePage} from '../pages/game/game';
import {NgModule} from '@angular/core';
import {IonicModule, IonicApp} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage
  ],
  providers: [
    Data
  ]
})
export class AppModule {}
