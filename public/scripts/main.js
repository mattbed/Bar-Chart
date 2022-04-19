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

const sortData = function(data, options) {
  let sortedData = data;
  if (options.sort) {
    if (options.sort === "asc") {
      // sort data ascending
    } else if (options.sort === "des") {
      // sort data descending
    }
  }
  return sortedData;
}

const parseXAxis = function(data) {
  let parsedXAxis = ""
  const isObject = function(objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
  };
  if (isObject(data[0])) {
    parsedXAxis = `<!-- Dynamic elements: label-values -->
    <section class="x-axis">
      ${data.map((element) => {
        return `<span class="label-value">${Object.keys(element)[0]}</span>`
      }).join('')}
    </section>`
  }
  return parsedXAxis;
}

const parseTableSetup = function(options) {
  let parsedTable = `<!-- Dynamic elements: background -->
  <div class="table-border" style="background: lightgray;">`
  if (options.tableBackground) {
    parsedTable = `<!-- Dynamic elements: background -->
    <div class="table-border" style="background: ${options.tableBackground};">`
  }
  return parsedTable;
}

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

