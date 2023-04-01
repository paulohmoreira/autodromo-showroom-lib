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

class WhatsappFlutuante {
  /**
   * Creates a new instance of WhatsappFlutuante
   */
  constructor() {}

  /**
   * Create the floating whatsapp element
   * @param {String} number The whatsapp number
   * @param {String} imagePath The URL of the Whatsapp icon image
   * @returns {Node} The floating Whatsapp element
   */
  create(number, imagePath) {
    const whatsapp = document.createElement('div');
    whatsapp.id = 'popup-whats';
    whatsapp.style.cssText = `
                                position: fixed; 
                                width: 50px; 
                                height: 50px; 
                                cursor: pointer; 
                                bottom: 20px; 
                                right: 20px; 
                                z-index: 999;
                                background-image: url(${imagePath})
                              `;
    whatsapp.setAttribute('onclick', `javascript:window.open('https://api.whatsapp.com/send?phone=${number}')`);
    return whatsapp;
  }

  /**
   * Add the floating whatsapp element to the page
   * @param {String} number The whatsapp number
   * @param {String} imagePath The URL of the Whatsapp icon image
   */
  add(number, imagePath = '//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png') {
    const body = document.querySelector('body');
    const whatsapp = this.create(number, imagePath);
    body.appendChild(whatsapp);
  }
}
