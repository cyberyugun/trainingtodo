import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent   },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuardService]  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService]  },
  { path: 'userlist', component: UserlistComponent},
  // All your other routes should come first    
  { path: '404', redirectTo: '', },
  { path: '**', redirectTo: '', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
