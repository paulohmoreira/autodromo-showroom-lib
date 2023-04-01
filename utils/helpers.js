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
   * Compares the URL of the current page with a given string.
   *  @param {String} str - The string to compare against the current URL.
   *  @returns {Boolean} `true` if the current URL matches the given string, otherwise `false`.
   */
  compareUrl(str) {
    return str === this.pageUrl;
  }

  /**
   * Checks if the current URL contains a given string.
   * @param {String} str - The string to check for.
   * @returns {Boolean} `true` if the current URL contains the given string, otherwise `false`.
   */
  containsUrl(str) {
    return this.pageUrl.includes(str);
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

class StyleSheet {
  /**
   * Adds the specified CSS styles to the web page.
   * @param {String} styles - The CSS styles to be added.
   * @returns {void}
   */

  add(styles) {
    const css = styles,
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
    head.appendChild(style);
    style.setAttribute('type', 'text/css');
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
}
