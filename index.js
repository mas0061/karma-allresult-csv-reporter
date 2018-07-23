var fs = require('fs');

var AllresultCSVReporter = function(baseReporterDecorator, config, logger) {
  var log = logger.create('reporter.allresultcsv');
  var arcsvConfig = config.allresultCsvReporter || {};
  var outputDir = arcsvConfig.outputDir || '.';
  var outputFile = arcsvConfig.outpuFile || 'all-result.csv';

  var result4csv = ['Browser name, Spec description, result\n'];

  baseReporterDecorator(this);

  this.adapters = [];

  this.onRunComplete = function(browserCollection, results) {
    fs.writeFile(`${outputDir}/${outputFile}`, result4csv.join(''), err => {
      if (err) {
        log.error(err);
      } else {
        log.info(`write all results to ${outputFile}`);
      }
    });
  };

  this.onSpecComplete = function (browser, result) {
    var resultMsg;
    if (result.skipped) {
      resultMsg = 'skip';
    } else if (result.success) {
      resultMsg = 'success';
    } else {
      resultMsg = 'failure';
    }
    result4csv.push(`${browser.name},${result.description},${resultMsg}\n`);
  };
}

AllresultCSVReporter.$inject = ['baseReporterDecorator', 'config', 'logger'];
module.exports = {
  'reporter:allresultcsv': ['type', AllresultCSVReporter]
};
