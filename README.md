# Bar Chart
(Originally a stretch assignment for Lighthouse Labs, involving creating a basic web app that can be used to create dynamic bar charts. Uses HTML, CSS, Javascript and Jquery.)

## Scope
This simple API takes in a few parameters and outputs a bar graph for use on your webpage or app. Some customization options exist, as described below, although you are free to input as few details as you'd like and go with the default options.

## Setup

Place main.js into your scripts folder, and main.css into your styles folder. Assuming your folder structure has your html file as a sibling to your styles and scripts folders, the following will work - otherwise the href and src will need to be adjusted.

Within your html head, paste the following:  
> `<link rel="stylesheet" href="./styles/main.css" type="text/css" />`  
> `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`  
> `<script type="text/javascript" src="./scripts/main.js"></script>`  

Within your html body, paste the following:  
> `<script type="text/javascript">`  
> const data = [  
> ];  
> const options = {  
> };  
> const element = EXAMPLE;  
> $(() => {  
>   drawBarChart(data, options, element);  
> });  
> `</script>`  

## Input

**Mandatory**

- data  
    *Data must be provided as positive numbers (decimals allowed) enclosed in square array [] brackets. This can be input as a simple array of numbers with each number being a bar value for a very simple bar graph, but this will severely limit your ability to edit individual features. For additional features, an array of objects should be used. Each individual bar will be enclosed within its own object enclosed in curly brackets {}, with values being stored under keys for either 'value' for single bar graph, or 'value1', 'value2', etc. for stacked bar graphs. All data must be presented consistently: either all with one value, or all with the same number of stacks with stacked bar values. Further optional keys can be included, as described in the Optional section below. For example:*
    > const data = [20,54,89];  
    
    *or*  

    > const data = [  
    >      {  
    >        value: 20,  
    >      },  
    >      {  
    >        value: 54,  
    >      },  
    >      {  
    >        value: 89,  
    >      }  
    >];  

    *or*  

    > const data = [  
    >      {  
    >        value1: 5,  
    >        value2: 12,  
    >      },  
    >      {  
    >        value1: 15,  
    >        value2: 23,  
    >      },  
    >      {  
    >        value1: 31,  
    >        value2: 12,  
    >      }  
    >];  


- options  
    *The options object can be left blank if no customization options are desired, but it must be included. Customization is implemented using keys as described below in the Optional section*

- element id  
    *The id of the element into which the bar graph will be placed (appended) must be provided as the value for the 'element' constant. For example:*
    > `<div id="chart"></div>`  
    > ...  
    > const element = chart;  

**Optional**

- data (name)  
    *Data within an object can include keys for 'name'. The 'name' key must be consistent - all values must have it, or none. For example:*
    > const data = [  
    >      {  
    >        value: 20,  
    >        name: "A",  
    >      },  
    >      {  
    >        value: 54,  
    >        name: "B",  
    >      },  
    >      {  
    >        value: 89,  
    >        name: "C",  
    >      }  
    >];  

- data (colour)  
    *Data within an object can include keys for 'colour'. Within a stacked bar graph, individual stack colours can be assigned using 'colour1', 'colour2', etc. instead of 'colour' (without this designation, stacks will be automatically differentiated by altering brightness of the base colour, however this becomes ineffective at distinguishing unique colours after about 5-10 iterations depending on the colour used). In a stacked bar graph, all different bars should have the same colour scheme, with each corresponding stack on each different bar having matching colours. This can be overwritten with the customization option, however this will not be properly reflected in the legend. Colours are not required to be consistent and will revert to default options whenever not included (this may cause issues if you provide customizable colours on stacked bars, as these should by design be consistent). Colours can be presented in any way that is interpretable by CSS. For example:*
    > const data = [  
    >      {  
    >        value: 20,  
    >        colour: blue,  
    >      },  
    >      {  
    >        value: 54,  
    >        colour: red,  
    >      },  
    >      {  
    >        value: 89,  
    >      }  
    >];  

    *or*  
    
    > const data = [  
    >      {  
    >        value1: 5,  
    >        value2: 12,  
    >        colour1: blue,  
    >        colour2: purple,  
    >      },  
    >      {  
    >        value1: 15,  
    >        value2: 23,  
    >        colour1: blue,  
    >        colour2: purple,  
    >      },  
    >      {  
    >        value1: 31,  
    >        value2: 12,  
    >        colour1: blue,  
    >        colour2: purple,  
    >      }  
    >];  

- options (title)  
    *Within the options object, a 'title' key can be included. The value for this key will be included as a title at the top of the bar graph. The default value if not included is no title. For example:*
    > title: "This is my bar graph",

- options (titleFont)  
    *Within the options object, a 'titleFont' key can be included. This sets up the font face to use for the title. The default value if not included is the browser default. For example:*
    > titleFont: "Arial",

- options (titleFontSize)  
    *Within the options object, a 'titleFontSize' key can be included. This sets the size of the title using px. The default value if not included is 16px. For example:*
    > titleFontSize: 20,

- options (titleFontColour)  
    *Within the options object, a 'titleFontColour' key can be included. This sets the colour of the title, and can be input using any value interpretable by CSS. The default value if not included is black. For example:*
    > titleFontColour: "orange",

- options (graphBackground)  
    *Within the options object, a 'graphBackground' key can be included. This sets the colour of the background of the main portion of the graph, and can be input using any value interpretable by CSS. The default value if not included is lightgray. For example:*
    > graphBackground: "gray",

- options (sort)  
    *Within the options object, a 'sort' key can be included. This will sort the data values in ascending or descending order (for stacked bars, this will sort using the total value of each stacked bar). Possible inputs include "asc" for ascending, or "des" for descending (technically false would be accepted, but is not required as this is the default value). The default value if not included is false, and no sorting will occur. For example:*
    > sort: "asc",

- options (width)  
    *Within the options object, a 'width' key can be included. This will set the width of the entire space taken by the graph, and all elements within it, using px. The default value if not included is 500px. For example:*
    > width: 700,

- options (height)  
    *Within the options object, a 'height' key can be included. This will set the height of the entire space taken by the graph, and all elements within it, using px. The default value if not included is 500px. For example:*
    > height: 700,

- options (yAxisTicks)  
    *Within the options object, a 'yAxisTicks' key can be included. This will set how many tickmarks will be used along the y axis. The default value if not included is 5. For example:*
    > yAxisTicks: 10,

- options (yAxisMaxValue)  
    *Within the options object, a 'yAxisMaxValue' key can be included. This will set the max value along the Y axis of the graph. The default value if not included is to take the highest value included in the graph, add 10%, then round up to the nearest 10. For example:*
    > yAxisMaxValue: 100,

- options (yAxisMinValue)  
    *Within the options object, a 'yAxisMinValue' key can be included. This will set the min value along the Y axis of the graph. This input is ignored for a stacked bar graph. The default value if not included (or if ignored) is 0. For example:*
    > yAxisMinValue: 10,

- options (dataAlign)  
    *Within the options object, a 'dataAlign' key can be included. This will set where the data label will be aligned vertically on the bar. Possible inputs include "top" for top, "mid" for the middle, and "bot" for at the bottom. The default value if not included is middle. For example:*
    > dataAlign: "top",

- options (dataColour)  
    *Within the options object, a 'dataColour' key can be included. This will set the background of the label for individual data values, and can be input using any value interpretable by CSS. The default value if not included is white. For example:*
    > dataColour: "pink",

- options (dataHide)  
    *Within the options object, a 'dataHide' key can be included. This will toggle the display of all data value labels on the bar graph. Possible inputs include true (which will not display the values) or false (which will display the values). The default value if not included is false. For example:*
    > dataHide: true,

- options (barGap)  
    *Within the options object, a 'barGap' key can be included. This will set the gap between the bars based on a percentage of possible width alloted for each bar. Possible inputs include any number between 0 and 100, although functionally any number between 5 and 95 should be used (0 creates an overlap due to the bars design elements, 100 creates invisible bars). The default value if not included is 10. For example:*
    > barGap: 40,

- options (annotate)  
    *Within the options object, an 'annotate' key can be included. This will toggle and set the type of annotation for large values on the entire graph. Possible inputes include "US" (for US annotation: K, M, B, T for thousand, million, billion, trillion respectively), "UK" (for UK/European annotation: k, m, bn, tn for thousand, million, billion, trillion respectively), or false (for no annotation). The default value if not included is "US". For example:*
    > annotate: false,

- options (annotateDecimals)  
    *Within the options object, an 'annotateDecimals' key can be included. This will set how many decimal places to use for annotated values (1.1M or 1.14M, etc.). The default value if not included is 1. For example:*
    > annotateDecimals: 2,

- options (legend)  
    *Within the options object, a 'legend' key can be included. This should only be included for stacked bars, this sets up a legend in the top right of the bar graph container. This should be set up as an object with keys corresponding to the 'value1', 'value2', etc. keys in your stacked bar graph, except with the appropriate value description in place of the value. The colours will be assigned automatically with the colours that appear on the first bar (this will be an issue if all of your stacked bars don't have matching colours assigned). There is no default value if not included, it is not placed. For example:*
    > legend: {  
    >   value1: "This is bar 1",  
    >   value2: "This is bar 2",  
    >   },  

## Bugs and upcoming features

These are features that are not yet implemented, or bugs that need fixing. Basically, this is a to-do list that I will get around to with time.
- Data validation / Error outputs / Testing edge cases
- Different default colour palettes
- Show 0 value on y-axis (unfortunately more complicated than it seems, may need a redesign of the way the y-axis is set up)
- More prettification (default and optional)
- More customization for bar labels (including individual and not just global customization)
- Negative values on y-axis
- Host on npm, easier install
- And as always, more refactoring!
