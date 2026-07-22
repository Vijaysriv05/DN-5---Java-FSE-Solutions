# Student Course Portal - Cognizant (CTS) Digital Nurture 5.0 Angular (v20.0) Hands-On Solutions

Complete, production-ready Angular SPA solution for all 10 Hands-On Exercises of the **Digital Nurture 5.0 .NET Full Stack Engineer Track - Angular (v20.0) Exercise Book**.

---

## 📁 Repository & Submission Folder Structure

Organized inside `Angular_HandsOn/` per submission guidelines:

```
Angular_HandsOn/
├── notes.txt                        # Hands-On 1 Task 1: Configuration file explanations
├── db.json                          # Hands-On 8 & 9: Mock REST API database for JSON Server
├── README.md                        # Documentation & submission guide
└── student-course-portal/           # Complete Angular Project
    ├── dist/                        # Production build output
    ├── src/
    │   ├── app/
    │   │   ├── components/          # Reusable UI components
    │   │   │   ├── header/          # Navigation bar with portal links
    │   │   │   ├── course-card/     # Course card component (@Input/@Output, ngClass, ngStyle, ngSwitch)
    │   │   │   ├── course-summary-widget/ # Shared service test widget
    │   │   │   └── notification/    # Component-scoped provider test
    │   │   ├── pages/               # Page view components
    │   │   │   ├── home/            # Dashboard with data bindings & stats
    │   │   │   ├── course-list/     # Course catalogue (isLoading, trackBy, ngFor, ngIf else)
    │   │   │   ├── course-detail/   # Course details page (route params)
    │   │   │   ├── student-profile/ # Profile & enrolled courses view
    │   │   │   ├── enrollment-form/ # Template-driven form with built-in validation
    │   │   │   ├── reactive-enrollment-form/ # Reactive form with custom sync/async validators & FormArray
    │   │   │   └── not-found/       # Wildcard 404 route component
    │   │   ├── features/            # Feature modules & nested routing layouts
    │   │   │   └── enrollment/
    │   │   │       └── courses-layout.component.ts
    │   │   ├── directives/          # Custom attribute directives
    │   │   │   └── highlight.directive.ts # HostListener mouseenter/mouseleave hover directive
    │   │   ├── pipes/               # Custom Pipes
    │   │   │   └── credit-label.pipe.ts   # CreditLabelPipe formatting numbers to text
    │   │   ├── services/            # Angular DI Services
    │   │   │   ├── course.service.ts  # HttpClient GET, POST, PUT, DELETE with RxJS operators
    │   │   │   ├── enrollment.service.ts # Service-to-service injection & switchMap
    │   │   │   ├── auth.service.ts    # Authentication state
    │   │   │   ├── loading.service.ts # BehaviorSubject spinner state
    │   │   │   └── notification.service.ts # Component-level scoped provider
    │   │   ├── guards/              # Angular Route Guards
    │   │   │   ├── auth.guard.ts      # CanActivate route guard
    │   │   │   └── unsaved-changes.guard.ts # CanDeactivate dirty form confirmation guard
    │   │   ├── interceptors/        # HTTP Interceptors
    │   │   │   ├── auth.interceptor.ts # Authorization Bearer token header interceptor
    │   │   │   ├── error-handler.interceptor.ts # Global 401/500 error handler
    │   │   │   └── loading.interceptor.ts # Loading spinner interceptor via finalize
    │   │   ├── store/               # NgRx Redux State Management
    │   │   │   ├── course/          # Actions, Reducer, Selectors, Effects
    │   │   │   └── enrollment/      # Actions, Reducer, Cross-slice Selectors
    │   │   ├── models/              # TypeScript Interfaces
    │   │   │   └── course.model.ts  # Course, Student, Enrollment interfaces
    │   │   ├── app.routes.ts        # Portal route definitions with nested routes & guards
    │   │   ├── app.config.ts        # Standalone application configuration (Store, Effects, Interceptors)
    │   │   └── app.ts               # Root component shell
    │   ├── styles.css               # Design system & global styles
    │   └── index.html
    └── package.json
```

---

## 📝 Hands-On Exercises Breakdown & Technical Implementation

### Hands-On 1: Setup, Structure & First Component
- **Task 1**: Project scaffolded with Angular CLI. `notes.txt` created with one-line descriptions for `angular.json`, `tsconfig.json`, `tsconfig.app.json`, `package.json`, `src/main.ts`, `src/app/app.config.ts`, `src/app/app.component.ts`, and `src/index.html`.
- **Task 2**: Scaffolded page components (`header`, `home`, `course-list`, `student-profile`). Added navbar with title "Student Course Portal" and links. Header and Home page rendered with statistics cards.

### Hands-On 2: Data Binding, Lifecycle Hooks & Component Communication
- **Task 1**: Implemented String Interpolation (`{{ portalName }}`), Property Binding (`[disabled]="!isPortalActive"`), Event Binding (`(click)="onEnrollClick()"`), and Two-Way Binding (`[(ngModel)]="searchTerm"`). Documented difference between property and two-way binding.
- **Task 2**: Implemented `ngOnInit` and `ngOnDestroy` lifecycle hooks in `HomeComponent`. Created `CourseCardComponent` implementing `ngOnChanges` logging input property changes via `SimpleChanges`.
- **Task 3**: `@Input() course` data flow down to `CourseCardComponent`. `@Output() enrollRequested = new EventEmitter<number>()` bubbling course ID event up to `CourseListComponent`. Displayed selected course ID below list.

### Hands-On 3: Directives & Pipes (Built-in & Custom)
- **Task 1**: Implemented `*ngIf` showing "Loading courses..." spinner, setting `isLoading = false` after 1.5s delay. `*ngFor` with `trackByCourseId` for optimal DOM re-rendering. `*ngSwitch` for grade status badges (`Passed` green, `Failed` red, `Pending` grey). `*ngIf` `else` block for empty array template.
- **Task 2**: Applied `[ngClass]` dynamically (`card--enrolled`, `card--full`). `[ngStyle]` setting left border color dynamically. `isExpanded` state toggled by "Show Details" button. Encapsulated class evaluation in `get cardClasses()` getter with explanatory comment.
- **Task 3**: Created `HighlightDirective` with `@HostListener('mouseenter')` and `@HostListener('mouseleave')` supporting custom background color via `@Input() appHighlight`. Created `CreditLabelPipe` (`1 Credit`, `2+ Credits`, `No Credits`).

### Hands-On 4: Template-Driven Forms & Validation
- **Task 1**: Created `EnrollmentFormComponent` (`/enroll`) template-driven form with `#enrollForm="ngForm"`. Fields: `studentName` (required, minlength 3), `studentEmail` (required, email), `courseId` (required), `preferredSemester` (Odd/Even select), `agreeToTerms` (checkbox). `onSubmit` logging `form.value` and `form.valid`.
- **Task 2**: Added contextual error messages (`#nameCtrl="ngModel"`). Styled `.ng-invalid.ng-touched` with red borders and `.ng-valid.ng-touched` with green borders. Displayed success alert on submit and added `enrollForm.resetForm()` reset button.

### Hands-On 5: Reactive Forms - FormBuilder, FormGroup, FormArray & Custom Validators
- **Task 1**: Created `ReactiveEnrollmentFormComponent` (`/enroll-reactive`) with `FormBuilder`. Documented difference between `enrollForm.value` (excludes disabled controls) and `enrollForm.getRawValue()` (includes all controls).
- **Task 2**: Custom synchronous validator `noCourseCode` disallowing codes starting with 'XX'. Custom async validator `simulateEmailCheck` returning Promise checking `test@`. Added `FormArray` for `additionalCourses` with typed getter `get additionalCourses()` and add/remove controls.

### Hands-On 6: Services & Dependency Injection
- **Task 1**: Created `CourseService` provided in root. Created `Course` interface in `models/course.model.ts`. Injected into `CourseListComponent`, `HomeComponent` (live count), and `CourseSummaryWidgetComponent` to confirm shared singleton state.
- **Task 2**: Created `EnrollmentService` injecting `CourseService` (service-to-service injection). Injected into `CourseCardComponent` (Enroll/Unenroll toggle) and `StudentProfileComponent`. Created `NotificationComponent` providing `NotificationService` at component level (`providers: [NotificationService]`) with explanatory scoping comment.

### Hands-On 7: Angular Routing - Guards, Lazy Loading & Route Data
- **Task 1**: Configured router with paths `/`, `/courses` (nested route layout with `CourseListComponent` and `CourseDetailComponent`), `/profile`, `/enroll`, `/enroll-reactive`, and wildcard `**` -> `NotFoundComponent`. Read `:id` route parameter via `ActivatedRoute.snapshot.paramMap.get('id')`. Query parameter search `/courses?search=`.
- **Task 2**: Configured lazy loading. Created `authGuard` (`CanActivate`) protecting `/profile` and `/enroll`. Created `unsavedChangesGuard` (`CanDeactivate`) prompting confirmation dialog when navigating away from dirty reactive form.

### Hands-On 8: HTTP Client - API Integration, Observables & Interceptors
- **Task 1**: Refactored `CourseService` and `EnrollmentService` to use `HttpClient` against JSON Server `http://localhost:3000/courses` (GET, POST, PUT, DELETE).
- **Task 2**: Chained RxJS operators: `map` for data filtering, `tap` for side-effect logging (with comment explaining why `tap` is preferred over `map` for side effects), `retry(2)` retry strategy, `catchError` for error propagation, and `switchMap` for request cancellation.
- **Task 3**: Implemented `authInterceptor` (Injecting Bearer token header `Authorization: Bearer mock-token-12345`), `errorHandlerInterceptor` (global 401/500 handling), and `loadingInterceptor` using `LoadingService` BehaviorSubject and `finalize` operator.

### Hands-On 9: State Management - NgRx Store, Actions, Reducers, Effects & Selectors
- **Task 1**: Installed `@ngrx/store`, `@ngrx/effects`, `@ngrx/entity`, `@ngrx/store-devtools`. Configured Course state (`loadCourses`, `loadCoursesSuccess`, `loadCoursesFailure` actions; `courseReducer`; `selectAllCourses`, `selectCoursesLoading`, `selectCoursesError` selectors). Connected `CourseListComponent` via `this.store.select()` and `this.store.dispatch()`.
- **Task 2**: Implemented `CourseEffects` for HTTP async dispatching. Created Enrollment store (`enrollInCourse`, `unenrollFromCourse` actions; `enrollmentReducer`; `selectEnrolledIds` and cross-slice `selectEnrolledCourses` selector).

### Hands-On 10: Unit Testing Angular Applications - Jasmine, Karma & TestBed / Vitest
- **Task 1**: Written unit tests for `CourseCardComponent` in `course-card.component.spec.ts` covering component creation, `@Input()` title rendering, `@Output()` `enrollRequested` emission, and `ngOnChanges` spy verification.
- **Task 2**: Written unit tests for `CourseService` in `course.service.spec.ts` using `HttpClientTestingModule` & `HttpTestingController` testing GET response flushing, 500 error fallback, and `httpMock.verify()`.

---

## ⚡ Execution Instructions

### 1. Install Dependencies
```bash
cd Angular_HandsOn/student-course-portal
npm install
```

### 2. Start Mock Backend (JSON Server)
```bash
npx json-server --watch ../db.json --port 3000
```

### 3. Run Application
```bash
npx ng serve
```
Open browser at `http://localhost:4200`

### 4. Run Unit Tests
```bash
npx ng test --watch=false
```

### 5. Build Production Bundle
```bash
npx ng build
```

---

## ✅ Test Execution Results (100% Passed)

```
 RUN  student-course-portal  src/app/services/course.service.spec.ts
 ✓ should fetch courses via GET
 ✓ should handle HTTP error gracefully and return fallback dataset after retries

 RUN  student-course-portal  src/app/components/course-card/course-card.component.spec.ts
 ✓ should create
 ✓ should render course name in h3 element
 ✓ should emit enrollRequested with courseId when enroll button is clicked
 ✓ should log previous and current values in ngOnChanges

 RUN  student-course-portal  src/app/app.spec.ts
 ✓ should create the app
 ✓ should render header with portal title

 Test Files  3 passed (3)
      Tests  8 passed (8)
   Duration  2.86s
```

---

## 🏗️ Production Build Output Verification

```
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-DSETPVZ7.js    | main          | 397.70 kB |                99.56 kB
styles-O76G662J.css | styles        |  10.68 kB |               645 bytes

                    | Initial total | 408.38 kB |               100.20 kB

Application bundle generation complete. [5.344 seconds]
Output location: dist/student-course-portal
```
