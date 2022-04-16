const drawBarChart = function(data, options, element) {
  const title = parseTitle(options);
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
        <!-- Dynamic elements: background -->
        <div class="table-border" style="background: lightgray;">
          <!-- Dynamic elements: .table-bar- width, height, background, align-items   .table-value- background, value -->
          <div class="table-bar" style="align-items: flex-start; width: 45%; height: 80%; background: blue;"><div class="table-value" style="background: white;">80</div></div>
          <div class="table-bar" style="align-items: flex-end; width: 45%; height: 40%; background: red;"><div class="table-value" style="background: white;">40</div></div>
        </div>
        <!-- Dynamic elements: label-values -->
        <section class="x-axis">
            <span class="label-value">blue</span>
            <span class="label-value">red</span>
        </section>
      </section>
    </section>
  </section>
</main>`;
$(element).append($output);
};

const parseData = function(data) {

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

