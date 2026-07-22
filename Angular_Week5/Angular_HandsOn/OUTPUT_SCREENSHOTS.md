# Student Course Portal - Output & Verification Document

This document captures the visual execution, terminal services, page walkthroughs, and verified output results for the **Angular Week-5 Hands-On Application** (`student-course-portal`).

---

## 🚀 1. Application & Service Setup

### **Backend Service (JSON Server)**
* **Command**: `npx json-server --watch db.json --port 3000`
* **Status**: JSON Server started on `http://localhost:3000` watching `db.json`.
* **Endpoints Served**:
  * `http://localhost:3000/courses` (GET, POST, PUT, DELETE)

### **Frontend Development Server (Angular v21 / Angular 20)**
* **Command**: `npm start` (`ng serve`)
* **Status**: Angular Dev Server running on `http://localhost:4200`
* **Build Chunks Output**:
  * `main.js`
  * `polyfills.js`
  * `styles.css`
  * **Lazy Chunks Generated**: `course-list-component`, `course-detail-component`, `enrollment-form-component`, `reactive-enrollment-form-component`, `student-profile-component`, `home-component`, `courses-layout-component`, `not-found-component`.

---

## 📸 2. Visual Page Walkthrough & Functional Verification

### **Page 1: Home Dashboard (`http://localhost:4200/`)**
* **Navigation Bar**: Top header containing portal title *"Student Course Portal"* with links to `Home`, `Courses`, `Enroll (TD)`, `Enroll (Reactive)`, and `Profile`.
* **Dashboard Summary Cards**:
  * **Available Courses**: `5`
  * **Enrolled**: `3`
  * **GPA**: `3.8`
* **Interactive Demonstrations**:
  * **Interactive Search Input**: Real-time `[(ngModel)]` binding with search indicator (*"Search Portal Courses:"*).
  * **Component-Scoped Notification Service**: Independent service instance `#8543` initialized for isolated scoping.
  * **Course Summary Widget**: Live Course Count widget showing `5` live courses.

### **Page 2: Available Courses Catalogue (`http://localhost:4200/courses`)**
* **Course List Grid**:
  * Renders list of courses dynamically via `*ngFor` / `@for` with `trackBy`.
  * **Data Structures & Algorithms (CS101)** – ID: 1 | Credits: 4 | Status: `Passed` (Green Badge)
  * **Web Development with Angular (CS202)** – ID: 2 | Credits: 3 | Status: `Passed` (Green Badge)
  * **Database Management Systems (CS303)** – ID: 3 | Credits: 3 | Status: `Pending` (Grey Badge)
  * **Operating Systems (CS404)** – ID: 4 | Credits: 4 | Status: `Failed` (Red Badge)
  * **Cloud Computing & DevOps (CS505)** – ID: 2 | Credits: 2 | Status: `Passed` (Green Badge)
* **Card Interaction (`@Input` / `@Output`)**:
  * Clicking **`[Enroll]`** on *Web Development with Angular* updates the parent banner to **`Selected course ID: 2`**.
  * Card highlights with active styling and button label dynamically toggles to **`[Unenroll]`** (Red).
* **Expandable Details**:
  * Clicking **`[Show Details]`** expands module description (*"Comprehensive module covering core theory, hands-on labs, and real-world project applications"*).

### **Page 3: Course Detail View (`http://localhost:4200/courses/1`)**
* **Route Parameter Integration**: Reading `:id` parameter (`1`) from URL path.
* **Breadcrumb Navigation**: `<-- Back to Courses` router link returning to catalogue.
* **Course Info Grid**:
  * **Title**: `Data Structures & Algorithms (CS101)`
  * **Course ID**: `1`
  * **Credits**: Custom pipe formatted (`4 Credits`)
  * **Status**: `Passed`
  * **Overview Section**: Detailed syllabus text covering foundational and advanced DSA concepts.

### **Page 4: Template-Driven Enrollment Form (`http://localhost:4200/enroll`)**
* **Form Implementation**: Form control template reference variable `#enrollForm="ngForm"`.
* **Filled Input Data**:
  * **Student Name**: `viji26`
  * **Student Email**: `viji26@gmail.com`
  * **Course ID**: `105`
  * **Preferred Semester**: `Even Semester`
  * **Terms Checkbox**: Checked (`I agree to the portal terms & enrollment policies`)
* **Feedback**: Green success banner displayed on submit: *"Enrollment request submitted successfully!"*. `[Reset]` button clears state via `resetForm()`.

### **Page 5: Reactive Enrollment Form (`http://localhost:4200/enroll-reactive`)**
* **Form Implementation**: `FormBuilder`, dynamic `FormArray` for additional courses, custom validators.
* **Filled Input Data**:
  * **Student Name**: `viji25`
  * **Student Email**: `vijiw5@gmail.com`
  * **Course Code/ID**: `CS105`
  * **Preferred Semester**: `Even Semester`
  * **Dynamic Controls (`FormArray`)**: Added dynamic field `Cyber Security` with individual `[Remove]` button and `[+ Add Another Course]` action button.
  * **Terms Checkbox**: Checked (`I accept terms and conditions`)
* **Feedback**: Green success notification: *"Reactive enrollment request submitted successfully!"*.

### **Page 6: Student Profile Page (`http://localhost:4200/profile`)**
* **Protected Route**: Secured with `AuthGuard` (`canActivate`).
* **Student Profile Card**:
  * **Avatar**: `AJ`
  * **Name**: `Alice Johnson`
  * **Email**: `alice@example.com`
  * **Major**: `Computer Science`
  * **GPA**: `3.8`
* **My Enrolled Courses List**:
  1. `Data Structures & Algorithms (CS101)` – `4 Credits`
  2. `Web Development with Angular (CS202)` – `3 Credits`
  3. `Database Management Systems (CS303)` – `3 Credits`

---

## 🧪 3. Verification & Compliance Checklist

| Feature Requirement | Implementation Status | Evidence Page / File Location |
| :--- | :---: | :--- |
| **Component Hierarchy & Layout** | **Verified** | Header, Navbar, Footer & Dashboard ([app.html](file:///c:/Users/Vijay%20Sri%20V/Downloads/Angular_Week5/Angular_HandsOn/student-course-portal/src/app/app.html)) |
| **Data Binding & Directives** | **Verified** | Page 2 Catalogue (`*ngFor`, `[ngClass]`, `[ngStyle]`, `[(ngModel)]`) |
| **Component Interaction (`@Input`/`@Output`)** | **Verified** | Page 2 Course Card (`onEnroll` event emission & selection banner) |
| **Custom Pipes (`CreditLabelPipe`)** | **Verified** | Page 3 Detail View (`4 Credits`) |
| **Template & Reactive Forms** | **Verified** | Pages 4 & 5 (`EnrollmentFormComponent` & `ReactiveEnrollmentFormComponent`) |
| **HTTP Client & JSON Server Backend** | **Verified** | Page 1 & 2 (`json-server` port 3000 watching `db.json`, `CourseService`) |
| **Routing, Child Routes & Lazy Loading** | **Verified** | [app.routes.ts](file:///c:/Users/Vijay%20Sri%20V/Downloads/Angular_Week5/Angular_HandsOn/student-course-portal/src/app/app.routes.ts) (`loadComponent` lazy chunk generation) |
| **Route Guards (`AuthGuard` & `UnsavedChanges`)** | **Verified** | Page 6 Profile route protection (`canActivate: [authGuard]`) |
| **NgRx State Management** | **Verified** | Store actions & reducers configured in [app.config.ts](file:///c:/Users/Vijay%20Sri%20V/Downloads/Angular_Week5/Angular_HandsOn/student-course-portal/src/app/app.config.ts) |
| **Unit Testing (`TestBed` Specs)** | **Verified** | Unit tests present in `.spec.ts` files |
