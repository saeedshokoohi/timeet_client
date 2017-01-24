import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';

import { routes } from './app.routing';
import { rootReducer } from './reducers';
import { StoreDevToolsModule } from './features/store-devtools.module';
import { UserEffects } from './user/user.effects';
import { Ng2SelectModule } from 'ng2-material-select';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { ReCaptchaModule } from 'angular2-recaptcha';

const STORE_DEV_TOOLS_IMPORTS = [];
if (ENV === 'development' && !AOT &&
  ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
) STORE_DEV_TOOLS_IMPORTS.push(...[
  StoreDevtoolsModule.instrumentStore({
    monitor: useLogMonitor({
      visible: true,
      position: 'right'
    })
  })
]);

export const APP_IMPORTS = [
  EffectsModule.run(UserEffects),
  MaterialModule.forRoot(),
  ReactiveFormsModule,
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  RouterStoreModule.connectRouter(),
  StoreModule.provideStore(rootReducer),
  Ng2SelectModule,
  STORE_DEV_TOOLS_IMPORTS,
  StoreDevToolsModule,
  ModalModule.forRoot(),
  BootstrapModalModule,
  CustomFormsModule,ReCaptchaModule
];

