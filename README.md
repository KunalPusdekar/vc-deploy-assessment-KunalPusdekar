# VC Deploy Assessment

**Name:** Kunal Pusdekar

## 📌 What does version control mean to me?

To me, version control is a system that helps developers track changes in their code, collaborate efficiently, and revert to previous versions if something goes wrong. It provides a secure history of project development and makes teamwork easier by resolving conflicts and keeping work organized.

## 👤 Usernames

| Platform | Username        |
|----------|----------------|
| Git      | KunalPusdekar  |
| GitHub   | KunalPusdekar  |
| Vercel   | kunalpusdekar  |

## Live Deployment
You can access the deployed TODO project here: [Vercel Link](https://vc-deploy-assessment-kunal-git-7e4706-kunal-pusdekars-projects.vercel.app/)

## 🚀 Deployment Environments & Safety

### 🔹 1. Vercel Deployment Environments

Vercel provides two main deployment stages for this project, allowing for safe testing and reliable production releases.

| Environment | When It Deploys | Purpose | Example Env Variable |
|-------------|----------------|---------|--------------------|
| **Preview** | When pushing to any non-main branch or opening a Pull Request | Used for testing new features before going live | `TODO_APP_MODE=development` |
| **Production** | When changes are merged into the main branch | The live version of the app used by users | `TODO_APP_MODE=production` |

🟢 **Explanation:**  
This two-stage process allows testing safely in the Preview environment without affecting the live Production version.

---

### 🔹 2. Environment Variables Per Stage

Environment variables are configured differently based on the deployment stage in Vercel:

| Deployment Type       | Vercel Environment     | `TODO_APP_MODE` value |
|----------------------|----------------------|---------------------|
| Preview Deployments   | Feature branches / PRs | `development`       |
| Production Deployment | `main` branch          | `production`        |

In the codebase, you can use this variable to toggle behavior and features depending on the deployment stage.

---

### 🔹 3. Which Branch Triggers Production Deployment & Why?

The `main` branch is the **production branch**.

- When a Pull Request is merged into `main`, **Vercel automatically triggers a Production Deployment**.

#### ✅ Why?
- `main` represents stable and completed work.
- Using only one production branch prevents unfinished or buggy code from being deployed live.

---

### 🔹 4. Deployment Safety: Protected Branch & Approval Rule

To make deployments safer, I applied GitHub’s branch protection on `main`.

#### ✅ Enabled Rules:
- ✔ Require pull request before merging
- ✔ Block direct pushes to `main`
- ✔ Restrict deletion of `main`

#### 🔒 Why This Improves Safety:
- Developers cannot directly push to production `main`.
- All changes must go through a **Pull Request**, allowing for code reviews.
- This reduces the chance of accidental bugs or breaking changes going live.
- Protects the branch from force pushes or accidental deletions.

---

> ✅ This setup ensures **safe, stable, and reviewable deployments**, with clear separation between development and production environments.

## ✅ Conceptual Questions

### 1. What is a branch, and why is the use of feature branches recommended?

A branch in Git is a separate line of development. It allows you to work on new features, bug fixes, or experiments **without affecting the main codebase**.

Using feature branches is recommended because:

- It keeps the `main` branch stable and production-ready.
- Multiple developers can work simultaneously on different features without conflicts.
- It makes code reviews easier, since each feature is isolated.

**Example from our project:**  
We created a `feature-todo-app` branch to build and test the TODO application before merging it into `main`. This allowed us to safely develop new features and perform preview deployments without touching the live app.

---

### 2. What is the primary role of a Pull Request in a modern deployment workflow?

A Pull Request (PR) is a way to propose changes from one branch to another (usually from a feature branch to `main`). Its main roles are:

- **Code review:** Other team members can check the code for errors, readability, and best practices.
- **Testing:** PRs can trigger automated builds or previews to ensure new changes don’t break anything.
- **Controlled merging:** Ensures that only reviewed and approved changes are merged into the production branch.

**Example from our workflow:**  
We opened a PR from `feature-todo-app` to `main`, which allowed us to preview the app deployment and merge safely into production.

---

### 3. How can you automate deploys to Vercel directly from GitHub?

Automating deployments to Vercel is straightforward:

1. Connect your GitHub repository to Vercel when creating a project.
2. Push code to any branch; Vercel automatically creates a **Preview Deployment** for PRs or feature branches.
3. Merge a Pull Request into the production branch (`main`); Vercel automatically triggers a **Production Deployment**.
4. Set environment variables in Vercel for different stages (Preview, Production) to control app behavior.

This workflow allows seamless deployments **without manually uploading files**.

---

### 4. Explain the purpose of different "environment" types (e.g., Development, Staging, Production) in deployment.

Different deployment environments help manage and test applications safely:

- **Development:** Used for daily coding and testing; developers can experiment freely.
- **Staging / Preview:** Mimics production but is isolated; used to test new features before they go live. In our project, Vercel created Preview Deployments for feature branches.
- **Production:** The live environment accessible by end users. Only stable, reviewed, and tested code is deployed here.

Using separate environments reduces the risk of bugs reaching production and ensures proper testing at each stage.

---

### 5. How do you set and securely use environment variables in platforms like Vercel or GitHub Actions?

Environment variables store sensitive information or configuration values (e.g., API keys, mode settings) **without hardcoding them** into the code.

**How we did it in Vercel:**

- Added `TODO_APP_MODE` in the Vercel dashboard.
- Assigned `development` value for Preview and `production` value for Production.
- Redeployed the app to make these variables effective.

**Best practices for security:**

- Never commit secrets to GitHub.
- Use platform-specific dashboards to set variables.
- Only expose public-prefixed variables (like `REACT_APP_` or `NEXT_PUBLIC_`) to client-side code if necessary.
- Keep sensitive variables server-side whenever possible.

---

### 6. When and why should you use a protected branch or a required approval rule before deploying to production?

A protected branch ensures that critical branches (like `main`) **cannot be changed accidentally**. Required approval rules enforce that code must be reviewed before merging.

**Why this is important:**

- Prevents direct pushes that could break production.
- Forces code review and discussion before deployment.
- Reduces the risk of bugs, security issues, or accidental deletions.
- Ensures that deployments to production happen only after careful review and testing.

**Example from our project:**  
We applied branch protection to `main` and required PRs to merge. This ensured **safe and controlled production deployments**.

---

## ✅ Advanced Multi-Environment Setup

We use multiple branches and Vercel environments to manage deployments:

| Branch | Vercel Environment | Environment Variable |
|--------|-----------------|--------------------|
| dev    | Preview         | TODO_APP_MODE=development |
| test   | Preview         | TODO_APP_MODE=test |
| main   | Production      | TODO_APP_MODE=production |

### Workflow
1. **dev branch** → push changes → Vercel triggers a **Preview Deployment** (`development` mode).  
2. **test branch** → push changes → Vercel triggers a **Preview Deployment** (`test` mode).  
3. **main branch** → merge PR → Vercel triggers a **Production Deployment** (`production` mode).  

---

## ✅ Checklist

- [x] Public GitHub repo shared
- [x] README.md has all requested answers and links (Vercel URL)
- [x] Feature branch created, PR opened and merged
- [x] Project successfully deployed to Vercel
- [x] Environment variable configured on Vercel
- [x] All six conceptual questions answered
