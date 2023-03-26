class DirectSalesBanner {
  /**
   * Create the constructor object
   * @param {String} selector The banner selector
   */
  constructor(selector = '.default-bg__new_vehicle') {
    this.banner = document.querySelector(selector);

    if (!this.banner) throw new Error(`Element with selector ${selector} not found in DOM`);
  }

  /**
   * Change the banner background-image
   * @param {String} newBannerUrl The new banner url path
   */
  change(newBannerUrl) {
    this.banner.style.backgroundImage = 'url(' + newBannerUrl + ')';
  }

  /**
   * Hide the banner background-image
   */
  hide() {
    this.banner.style.backgroundImage = 'none';
  }
}
