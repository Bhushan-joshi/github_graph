# github Graph Hack

## To start Hacking github graph

Step 1: Clone the repo:

```bash
git clone https://github.com/Bhushan-joshi/github_graph.git
```

Step 2: Remove .git :

```bash
rm -rf .git
```
Step 3: create new git init:
 
```bash
git init
```
Step 4: Create new Github [REPO](https://github.com/new):

Step 5: Add remote origin and Create commit:

```bash
git remote add origin https://github.com/{USERNAME}/{REPO_NAME}.git
git add data.json
git commit -m "init"
```

Step 6: set upstream and push:

```bash
git push -set-upstream origin master
```
Step 7: Your good to GO:

```javascript
npm i
node index.js
```
---

> Requirements:
   * [Node.js](https://nodejs.org/en/) v14.15.4
   * [npm](https://www.npmjs.com/) v6.14.10

---
