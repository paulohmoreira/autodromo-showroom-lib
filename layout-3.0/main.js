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
   * Create the floating whatsapp element
   * @param {String} number The whatsapp number
   * @param {String} imagePath The URL of the Whatsapp icon image
   * @returns {Node} The floating Whatsapp element
   */
  create(number, imagePath) {
    const whatsapp = document.createElement('div');
    const whatsappAnchor = document.createElement('a');
    const whatsappIcone = document.createElement('img');

    whatsapp.id = 'popup-whats';
    whatsapp.style.cssText = 'position: fixed; cursor: pointer; bottom: 20px; right: 20px; z-index: 999;';

    whatsappAnchor.style.cssText = 'text-decoration: none;';
    whatsappAnchor.setAttribute('href', `https://api.whatsapp.com/send?phone=${number}`);
    whatsappAnchor.setAttribute('target', '_blank');

    whatsappIcone.style.cssText = 'width: 50px; height: 50px;';
    whatsappIcone.setAttribute('src', imagePath);

    whatsappAnchor.appendChild(whatsappIcone);
    whatsapp.appendChild(whatsappAnchor);

    return whatsapp;
  }

  /**
   * Create the floating whatsapp element with text
   * @param {String} number WhatsApp number to which the button will redirect the user when clicked
   * @param {String} message The message that appears on the button
   * @param {String} imagePath URL of the WhatsApp icon image. If not provided, a default icon will be used.
   * @returns {Node} The floating Whatsapp element
   */
  createWithText(number, message, imagePath) {
    const whatsapp = document.createElement('div');
    const whatsappAnchor = document.createElement('a');
    const whatsappIcone = document.createElement('img');
    const messageSpan = document.createElement('span');

    whatsapp.id = 'popup-whats';
    whatsapp.style.cssText =
      'position: fixed; cursor: pointer; bottom: 20px; right: 20px; z-index: 999; background: #fff; padding: 15px 30px; border-radius: 50px; font-size: 20px; font-weight: bold;';
    whatsapp.classList.add('shadow');

    whatsappAnchor.style.cssText = 'text-decoration: none;';
    whatsappAnchor.setAttribute('href', `https://api.whatsapp.com/send?phone=${number}`);
    whatsappAnchor.setAttribute('target', '_blank');

    whatsappIcone.style.cssText = 'width: 30px; height: 30px;';
    whatsappIcone.setAttribute('src', imagePath);

    messageSpan.style.cssText = 'color: #4ec859; margin-left: 5px;';
    messageSpan.innerText = message;

    whatsappAnchor.appendChild(whatsappIcone);
    whatsappAnchor.appendChild(messageSpan);
    whatsapp.appendChild(whatsappAnchor);

    return whatsapp;
  }

  /**
   * Add the floating whatsapp element to the page
   * @param {String} number WhatsApp number to which the button will redirect the user when clicked
   * @param {String} message The message that appears on the button
   * @param {String} imagePath URL of the WhatsApp icon image. If not provided, a default icon will be used
   * @returns {void}
   */
  add(number, message, imagePath = '//legado.autoforce.com.br/mods/plugins/WhatsApp/img/whatsapp-icone-7.png') {
    const body = document.querySelector('body');
    const whatsapp =
      message === undefined ? this.create(number, imagePath) : this.createWithText(number, message, imagePath);
    body.appendChild(whatsapp);
  }

  /**
   * Adds conversion form to the floating whatsapp
   * @param {String} datasetWrapper
   * @param {String} floatingWhatsappSelector
   * @param {String} floatingWhatsappAttribute
   * @returns {void}
   */
  addForm(
    datasetWrapper = '.card-collapse__content .header-mobile__whatsapp-link',
    floatingWhatsappSelector = '#popup-whats',
    floatingWhatsappAttribute = 'href'
  ) {
    document.addEventListener('readystatechange', (event) => {
      if (event.target.readyState === 'complete') {
        const headerWppElementsWrapper = document.querySelector(datasetWrapper);
        if (!headerWppElementsWrapper) return;

        const { toBool } = window.helpers;

        const wrapperData = headerWppElementsWrapper.dataset;

        const units = wrapperData.units ? JSON.parse(wrapperData.units) : [];
        const product = wrapperData.product;
        const channel = wrapperData.channel;
        const brand = wrapperData.brand;
        const showUnits = JSON.parse(wrapperData.showUnits);
        const showCpf = !!JSON.parse(wrapperData.showCpf);
        const phones = JSON.parse(wrapperData.phones);
        const versions = JSON.parse(wrapperData.versions);
        const showLocationFields = toBool(wrapperData.showLocationFields);
        const shouldShowDataPermissions = toBool(wrapperData.shouldShowDataPermissions);
        const dataPermissionsCustomText = wrapperData.dataPermissionsCustomText;

        const formWrapper = document.querySelector('.header-conversion-form-whatsapp-modal');
        const linkPrivacyPolicy = formWrapper.dataset.linkPrivacyPolicy || '';

        formWrapper.innerHTML = '';

        $(`${floatingWhatsappSelector} a`).removeAttr(floatingWhatsappAttribute);

        $(`${floatingWhatsappSelector} a`).on('click', function () {
          const data = wrapperData;

          const unit = data.unit;
          const category = data.category;
          const link = data.link;

          render(
            h(window.WhatsAppFormModal, {
              modalId: 'header-conversion-form-whatsapp-modal',
              open: true,
              unit,
              units,
              product,
              channel,
              category,
              brand,
              link,
              showUnits,
              showCpf,
              phones,
              versions,
              showLocationFields,
              shouldShowDataPermissions,
              dataPermissionsCustomText,
              linkPrivacyPolicy,
            }),
            formWrapper
          );
        });
      }
    });
  }
}
