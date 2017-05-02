# algorithms

### Discovering Issues

***step1***: Find a problem that you would like to work on under the Issues Section. Each problem has a difficulty label and description of the input and the expected output.

### Setup

***step1***: Clone the (llipio/algorithms) repository locally

***step2***: To install all of the dependencies, run `npm install`

***step3***: Pick an issue that you would like to work on

***step4***: Add your solution to the `yourSolution.js` file in the solutions folder.

***step5***: To test your function, import your solution to the corresponding issue and simply add .only() to the test and run `npm run test`. The test should rerun automatically thereafter.

### Add new problems

***step1***: If you would like to add new problems, please add problems by creating an issue using the guidelines below.
    1. Make sure the issue does not already exists.
    2. Name the issue and add a difficulty label.
    3. Describe the problem including an input and the expected output.

### Contributing

***step1***: Make sure to fork the repo before start working on a problem and create a feature branch for each problem only.

***step2***: Create a file under the solutions folder using the issue number as the name. Ex: 1.js, 2.js, and so on.
If a file already exists, only add your solution the top of the file if it's unique. Do not remove any previous solutions.

***step3***: Tag your name in the comment for your solution like below:

```javascript
  // Bill Ma
  const solution = () => {
    // solution implementation ...
  }
```

***step4***: Run `npm run test` to make sure your solution works. If running on Windows, run `npm run twin`.

***step5***: Create a pull request to `master branch` with your solution and assign a reviewer (note: if someone has already worked on the problem, pick that person as the reviewer, otherwise just randomly pick a person to review your solution)

***step6***: Once your solution has been reviewed and merged to master, the next person who works on the same problem will know to assign you as the reviewer for this problem.  
