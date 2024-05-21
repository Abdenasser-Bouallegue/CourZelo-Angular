import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/pages/chat/chat.component';
import { UserComponent } from './chat/pages/user/user.component';
import { MainComponent } from './chat/pages/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { FeedbackAdminComponent } from './feedback/feedback-admin/feedback-admin.component';
import { FeedbackArchivedComponent } from './feedback/feedback-archived/feedback-archived.component';
import { MyfeedbackComponent } from './feedback/myfeedback/myfeedback.component';
import { FeedbackAboutMeComponent } from './feedback/feedback-about-me/feedback-about-me.component';
import { VideoCallComponent } from './feedback/video-call/video-call.component';
import { ForumComponent } from './forum/forum/forum.component';
import { ShowForumComponent } from './forum/show-forum/show-forum.component';
import { UpdateForumComponent } from './forum/update-forum/update-forum.component';
import { ForumadminComponent } from './forum/forumadmin/forumadmin.component';
import { MailingComponent } from './forum/mailing/mailing.component';
import { AdmindashComponent } from './forum/admindash/admindash.component';
import { QuizComponent } from './quiz/quiz/quiz.component';
import { TakeQuizComponent } from './quiz/take-quiz/take-quiz.component';
import { TestPageComponent } from './quiz/test-page/test-page.component';
import { RecruiterQuizComponent } from './quiz/recruiter-quiz/recruiter-quiz.component';
import { DepCourseComponent } from './quiz/dep-course/dep-course.component';
import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';
import { ClassesDepComponent } from './quiz/classes-dep/classes-dep.component';



const routes: Routes = [
   { path: 'auth',
               loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
              { path: 'home',
              component: HomeComponent},
  { path: 'chat', component: ChatComponent,
  canActivate: [AuthGuard],
  data: {
    expectedRoles: [
      'SUPERADMIN',
      'ADMIN',
      'STUDENT',

      'HEADOFDEPARTEMENT'
    ],
  },
   },
  { path: 'user', component: UserComponent ,
  canActivate: [AuthGuard],
  data: {
    expectedRoles: [
      'SUPERADMIN',
      'ADMIN',
      'STUDENT',

      'HEADOFDEPARTEMENT'
    ],
  },
  },
  { path: '', component: MainComponent,
  canActivate: [AuthGuard],
  data: {
    expectedRoles: [
      'SUPERADMIN',
      'ADMIN',
      'STUDENT',

      'HEADOFDEPARTEMENT'
    ],
  }, },
  {
    path: 'courses',
    loadChildren: ()=>import('./courses/courses.module')
                      .then(m => m.CoursesModule)
  },
  {
    path: 'scheduler',
    loadChildren: () => import('./sheduler/sheduler.module')
                          .then(m => m.ShedulerModule)
  },
  //NACER
  {path:"feedback",component:FeedbackComponent},
  {path:"adminfeedback",component:FeedbackAdminComponent},
  {path:"feedbackarchived",component:FeedbackArchivedComponent},
  {path:"myfeedback",component:MyfeedbackComponent},
  {path:"feedbackAbout",component:FeedbackAboutMeComponent},
  {path:"video",component:VideoCallComponent},
  //sarra
  {path:"forum",component:ForumComponent},
  { path: 'showforum/:id', component: ShowForumComponent },
  {path:"updateforum",component:UpdateForumComponent},
  {path:"forumadmin",component:ForumadminComponent},
  {path:"mailing",component:MailingComponent},
  {path:"dash",component:AdmindashComponent},
  //chirine
  { path: 'Quiz', component: QuizComponent },
  { path: 'take/:id', component: TakeQuizComponent },
  { path: 'test/:id', component: TestPageComponent },
  { path: 'recruiterQuiz', component: RecruiterQuizComponent },
  { path: 'createQuiz', component: CreateQuizComponent },
  { path: 'depcourse', component: DepCourseComponent },
  { path: 'viewClass', component: ClassesDepComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
