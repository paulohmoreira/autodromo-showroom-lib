class CurrentPage {
  /**
   * Creates an object representing the current page.
   * The object exposes the current pathname and provides a method to compare it against a string.
   */
  constructor() {
    this.pagePathname = window.location.pathname;
    this.pageUrl = window.location.href;
  }

  /**
   * Returns the full URL of the current page.
   * @returns {String} The URL of the current page.
   */
  getUrl() {
    return this.pageUrl;
  }

  /**
   * Returns the pathname of the current page.
   * @returns {String} The pathname of the current page.
   */
  getPathname() {
    return this.pagePathname;
  }

  /**
   * Compares the pathname of the current page with a given string.
   *  @param {String} str - The string to compare against the current pathname.
   *  @returns {Boolean} `true` if the current pathname matches the given string, otherwise `false`.
   */
  comparePathname(str) {
    return str === this.pagePathname;
  }

  /**
   * Checks if the current pathname contains a given string.
   * @param {String} str - The string to check for.
   * @returns {Boolean} `true` if the current pathname contains the given string, otherwise `false`.
   */
  containsPathname(str) {
    return this.pagePathname.includes(str);
  }
}
