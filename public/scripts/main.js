const drawBarChart = function(data, options, element) {
  const parsedData = sortData(data, options);
  const title = parseTitle(options);
  const tableSetup = parseTableSetup(options);
  const XAxis = parseXAxis(parsedData);
  const $output=`<main class="container">
  <!-- Dynamic elements: width, height -->
  <section class="outer-container" style="width: 500px; height: 500px;">
    ${title}
    <section class="main">
      <section class="y-axis">
        <div class="label-container">
          <!-- Dynamic elements: label-values -->
          <span class="label">
            <span class="label-value">100</span>
          </span>
          <span class="label">
            <span class="label-value">80</span>
          </span>
          <span class="label">
            <span class="label-value">60</span>
          </span>
          <span class="label">
            <span class="label-value">40</span>
          </span>
          <span class="label">
            <span class="label-value">20</span>
          </span>
        </div>
      </section>
      <section class="graph">
        ${tableSetup}
          <!-- Dynamic elements: .table-bar- width, height, background, align-items   .table-value- background, value -->
          <div class="table-bar" style="align-items: flex-start; width: 45%; height: 80%; background: blue;"><div class="table-value" style="background: white;">80</div></div>
          <div class="table-bar" style="align-items: flex-end; width: 45%; height: 40%; background: red;"><div class="table-value" style="background: white;">40</div></div>
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
const parseTableSetup = function(options) {
  let parsedTable = `<!-- Dynamic elements: background -->
  <div class="table-border" style="background: lightgray;">`
  if (options.tableBackground) {
    parsedTable = `<!-- Dynamic elements: background -->
    <div class="table-border" style="background: ${options.tableBackground};">`
  }
  return parsedTable;
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

// FIX EVENTUALLY
// list of edge cases and other fixes to work on eventually
// - check data inputs to see that they are all proper key/value pairs or all just values
// - check that all values are proper numbers
// - test improper values being input across the board. Does it break everything? Does it throw an error? Should it?
