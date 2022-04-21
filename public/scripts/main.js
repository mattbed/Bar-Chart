const drawBarChart = function(data, options, element) {
  const parsedData = sortData(data, options);
  const title = parseTitle(options);
  const graphSetup = parseGraphSetup(options);
  const XAxis = parseXAxis(parsedData);
  const container = setGraphContainer(options);
  const YAxis = setYAxis(data, options);
  const $output=`<main class="container">
  ${container}
    ${title}
    <section class="main">
      ${YAxis}
      <section class="graph">
        ${graphSetup}
          <!-- Dynamic elements: .graph-bar- width, height, background, align-items   .graph-value- background, value -->
          <div class="graph-bar" style="align-items: flex-start; width: 45%; height: 80%; background: blue;"><div class="graph-value" style="background: white;">80</div></div>
          <div class="graph-bar" style="align-items: flex-end; width: 45%; height: 40%; background: red;"><div class="graph-value" style="background: white;">40</div></div>
        </div>
        ${XAxis}
      </section>
    </section>
  </section>
</main>`;
$(element).append($output);
};

const parseData = function(data) {

}

// sort Data if sort = "asc" (ascending) or sort = "des" (descending), do not sort if sort is omitted or false
const sortData = function(data, options) {
  let sortedData = data;
  if (options.sort) {
    if (options.sort === "asc") {
      if (isObject(data[0])) {
        sortedData.sort((a, b) => a.value - b.value);
      } else if (!isObject(data[0])) {
        sortedData.sort((a, b) => a - b);
      }
    } else if (options.sort === "des") {
      if (isObject(data[0])) {
        sortedData.sort((a, b) => b.value - a.value);
      } else if (!isObject(data[0])) {
        sortedData.sort((a, b) => b - a);
      }
    }
  }
  return sortedData;
}

// checks if object is a true object or not (typeof returns true for array, null, etc.)
const isObject = function(objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
};

// applies input height and width to overall bounding box, defaults to 500 if not given
const setGraphContainer = function(options) {
  let parsedContainer = `<!-- Dynamic elements: width, height -->
  <section class="outer-container" style="width: ${(options.width ? options.width : 500)}px; height: ${options.height ? options.height : 500}px;">`
  return parsedContainer;
}

// parses labels for x axis, returns parsed labels if present, otherwise returns empty container
const parseXAxis = function(data) {
  let parsedXAxis = `<!-- Dynamic elements: label-values -->
  <section class="x-axis">
  </section>`
  if (isObject(data[0])) {
    parsedXAxis = `<!-- Dynamic elements: label-values -->
    <section class="x-axis">
      ${data.map((element) => {
        return `<span class="label-value">${element.name}</span>`
      }).join('')}
    </section>`
  }
  return parsedXAxis;
}

// returns basic table setup with background color if included, or lightgray as default if not
const parseGraphSetup = function(options) {
  let parsedGraph = `<!-- Dynamic elements: background -->
  <div class="graph-border" style="background: lightgray;">`
  if (options.graphBackground) {
    parsedGraph = `<!-- Dynamic elements: background -->
    <div class="graph-border" style="background: ${options.graphBackground};">`
  }
  return parsedGraph;
}

// returns properly parsed title with attributes as included, or default values if not - nothing returned if no title is included
const parseTitle = function(options) {
  let parsedTitle = ""
  if (options.title) {
    parsedTitle = `<section class="title">
      <!-- Dynamic elements: font-size, color, font-family, VALUE-->
      <p style="
      ${(options.titleFontSize ? "font-size: " + options.titleFontSize + "px;" : "font-size: 16px;")}
      ${(options.titleFontColour ? "color: " + options.titleFontColour + ";" : "color: black;")}
      ${(options.titleFont ? "font-family: " + options.titleFont + ";" : "")}">
      ${options.title}
      </p>
    </section>`
  }
  return parsedTitle;
}

// Sets Y axis values and tickmarks (default is 5 tick marks, max value +10% rounded up to nearest 10 - these are customizable)
const setYAxis = function(data, options) {
  let maxValue = 0;
  if (!options.yAxisMaxValue) {
    // find max value
    if (isObject(data[0])) {
      data.forEach((element) => {
        if (element.value > maxValue) {
          maxValue = element.value;
        }
      });
    }
    if (!isObject(data[0])) {
      data.forEach((element) => {
        if (element > maxValue) {
          maxValue = element;
        }
      });
    }
    // increase max value by 10% (*1.1)
    maxValue = Math.floor(maxValue * 1.1);
    // round up to nearest whole number that is a multiple of 10
    while ((maxValue % 10) !== 0) {
      maxValue++;
    }
  };
  if (options.yAxisMaxValue) {
    maxValue = options.yAxisMaxValue;
  };
  // number of marks
  const ticks = options.yAxisTicks || 5;
  const YValues = [];
  for (let x = 1; x <= ticks; x++) {
    // divide by number of ticks to get a default set of Y axis markers (x = max value/5 will get the first waypoint, 2x, 3x, 4x will be the next steps)
    let value = (maxValue/ticks)*x;
    YValues.unshift(value);
  };
  // map through and set each waypoint at the corresponding marker
  parsedYAxis = `
    <section class="y-axis">
      <div class="label-container">
      <!-- Dynamic elements: label-values -->
        ${YValues.map((element) => {
        return `<span class="label">
        <span class="label-value">${element}</span>
        </span>`}).join('')}
      </div>
    </section>`;
  return parsedYAxis;
}

// FIX EVENTUALLY
// list of edge cases and other fixes to work on eventually
// - check data inputs to see that they are all proper key/value pairs or all just values
// - check that all values are proper numbers
// - test improper values being input across the board. Does it break everything? Does it throw an error? Should it?

// STRETCH FEATURES
// animations/prettification
// custom min/max values for y axis
// stacked bar graph? combined bars? etc.
