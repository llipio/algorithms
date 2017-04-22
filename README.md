# algorithms

### Setup:

***step1***: Fork the main repository (llipio/algorithms)

***step2***: Pick an issue that you would like to work on

***step3***: Create a `feature branch` for each problem only.

***step4***: Add your algorithm to corresponding issue file in the solutions folder.

***step5***: To test your function, simply add .only() to the test and run `npm run test`. The test should rerun automatically thereafter.

***step6***: See Problem Solution - Code Review Process

### Add new problems

***step1***: If you would like to add new problems, please add problems by creating an issue. Make sure the issue does not already exists.

### Problem Solution - Code Review Process
***step1***: Create a file under the solutions folder using the issue number as the name. Ex: 1.js, 2.js, and so on.
If a file already exists, only add your solution the top of the file if it's unique. Do not remove any previous solutions.

***step2***: Tag your name in the comment for your solution like below:

```javascript
  // Bill Ma
  const solutionToProblem = () => {
    // solution implementation ...
  }
```
***step3***: Run `npm run test` to make sure your solution works.

***step4***: Create a pull request to `master branch` with your solution and assign a reviewer (note: if someone has already worked on the problem, pick that person as the reviewer, otherwise just randomly pick a person to review your solution)

***step5***: Once your solution has been reviewed and merged to master, the next person who works on the same problem will know to assign you as the reviewer for this problem.  
