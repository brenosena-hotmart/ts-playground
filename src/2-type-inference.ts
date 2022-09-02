(() => {
  let myText = 'My Text';
  /**
   * myText = 2
   * This causes an error because myText is of type string because of the type inference
   */

  let myNumber = 2;
  /**
   * myNumber = 'Text'
   * This causes an error because myNumber is of type number because of the type inference
   */
})();
