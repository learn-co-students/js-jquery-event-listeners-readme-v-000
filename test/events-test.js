const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')

describe('Selectors', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')
  const scripts = [
    path.resolve(__dirname, '..', 'js', 'events.js')
  ]


  const virtualConsole = jsdom.createVirtualConsole();

  virtualConsole.on("log", function (message) {
    console.log("console.log called ->", message);
  })

  let $, window

  before(done => {
    window = jsdom.jsdom(html, { scripts, virtualConsole }).defaultView

    jsdom.jQueryify(window, "http://code.jquery.com/jquery-2.1.1.js", () => {
      done()
    })
  })

  it('getIt() binds a click event to the paragraph', function() {
    window.alert = expect.createSpy()

    window.getIt();

    window.$('p')[0].click()

    expect(window.alert).toHaveBeenCalled();
  });

  it('frameIt() binds an event that frames the minion when the page loads', function() {
    window.frameIt()

    const img = window.$('img')

    img.trigger('load');

    expect(img.attr("class")).toEqual("tasty");
  });

  describe('pressIt()', () => {
    it('pressIt() binds an event that alerts the user when the g key was pressed down', function() {
      window.alert = expect.createSpy()

      window.pressIt();

      const input = window.$('#typing');
      const event = window.$.Event('keydown', { which: 71 })
      input.trigger(event)

      expect(window.alert).toHaveBeenCalled()
    })

    it('does not alert if another key is pressed', () => {
      window.alert = expect.createSpy()

      window.pressIt();

      const input = window.$('#typing');
      const event = window.$.Event('keydown', { which: 70 })
      input.trigger(event)

      expect(window.alert).toNotHaveBeenCalled()
    })
  })

  it('submitIt() binds an event that alerts "Your form is going to be submitted now." when the form is submitted', function() {
    window.alert = expect.createSpy()

    window.submitIt();

    const form = window.$('form')[0]

    window.$(form).trigger('submit')

    expect(window.alert).toHaveBeenCalledWith('Your form is going to be submitted now.');
  });

});
