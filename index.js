var fs = require('fs');

var AllresultCSVReporter = function(baseReporterDecorator, config, logger, helper, formatError) {
  var log = logger.create('reporter.allresultcsv');
  var arcsvConfig = config.allresultCsvReporter || {};
  var outputDir = arcsvConfig.outputDir || '.';
  var outputFile = arcsvConfig.outpuFile || 'all-result.csv';

  var result4csv = ['Browser name, Spec description, result\n'];

  baseReporterDecorator(this);

  this.adapters = [function(msg) {
    process.stdout.write.bind(process.stdout)(msg + '\n');
  }];

  this.onRunComplete = function(browserCollection, results) {
    fs.writeFile(`${outputDir}/${outputFile}`, result4csv.join(''), err => {
      if (err) {
        console.error(err);
      } else {
        this.write(`write all results to ${outputFile}`);
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

AllresultCSVReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError'];
module.exports = {
  'reporter:allresultcsv': ['type', AllresultCSVReporter]
};
