# Meteor C3 (0.4.8)

A Meteor wrapper for the [C3.js](http://c3js.org/) charting library.

## Installation

`meteor add peernohell:c3`

## Usage

This package includes the necessary assets (css/js) in your project. From there, you can begin to add charts according to the [C3 documentation](http://c3js.org/).


to insert a graph. add a dom element in a template

```<div class="chart"></div>```

and in template rendered event create the chart and use autorun to get chart update dynammically

```javascript
Template.chart.rendered = function () {
  Session.set('x', ['x', 30, 50, 75, 100, 120]);
  Session.set('data1', ['data1', 30, 200, 100, 400, 150]);
  Session.set('data2', ['data2', 20, 180, 240, 100, 190]);
  var chart = c3.generate({
    bindto: this.find('.chart'),
      data: {
        xs: {
          'data1': 'x',
          'data2': 'x'
        },
        columns: [['x'],['data1'],['data2']]
      }
  });

  this.autorun(function (tracker) {
    chart.load({columns: [
      Session.get('x'),
      Session.get('data1'),
      Session.get('data2'),
      []
    ]});
  });
}
```
