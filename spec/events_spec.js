describe('jQuery Methods', function() {

  beforeEach(function() {
    functionWithAlert = jasmine.createSpy("functionWithAlert"); 

    functionWithAlert("function uses an alert");

    setFixtures('<body><p> This is some text to click</p><img src="https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg"><form><input id="typing" type="text"><input id="submit" type="submit"></form><div></div></body><style>.tasty { border-width: 5px; border-color: red; border-style: solid;}</style></body>');
  });

  it('#doIt binds a click event to the paragraph', function() {
    getIt();
    var p = $('p')[0];
    var pClickEvent = $._data(p, "events");
    var myKey = [];
    for (var key in pClickEvent){ myKey.push(key);}
    expect(myKey[0]).toEqual("click");
  });

  it('#frameIt frames the minion when the page loads', function() {
    frameIt()
    $("img").trigger('load');

    expect($('img').attr("class")).toEqual("tasty");
  });

   it('#pressIt alerts the user when the g key was pressed down', function() {
    pressIt();
    // debugger;
    var input = $('#typing')[0];
    var inputPressEvent = $._data(input, "events");
    var myKey = [];
    for (var key in inputPressEvent){ myKey.push(key);}

    expect(myKey[0]).toEqual("keydown");
  });

  it('#submitIt submits the form if the user enters "I love jQuery', function() {
    submitIt();
    var myForm = $('form')[0];
    var formSubmitEvent = $._data(myForm, "events");
    var myKey = [];
    for (var key in formSubmitEvent){ myKey.push(key);}
    expect(myKey[0]).toEqual("submit");
    expect(functionWithAlert).toHaveBeenCalledWith('function uses an alert');
  });


});
  