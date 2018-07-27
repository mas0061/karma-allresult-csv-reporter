# karma-allresult-csv-reporter

A Karma plugin. Output all test results to CSV.

## Installation

```
npm install --save-dev karma-allresult-csv-reporter
```

## Configuration
- outputDir : Directory where output is saved (default : '.')
- outputFile : File name to be saved in **outputDir** (default : 'all-result.csv')

### Example
```karma.config.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'allresultcsv'],

    allresultCsvReporter: {
      outputDir: 'build/front-report',
      outputFile: 'all_result.csv'
    },
  })
}
```

## Output example
### Plain text image
```
Browser name, Spec description, result
HeadlessChrome 0.0.0 (Mac OS X 10.11.6),Test of something 1,success
HeadlessChrome 0.0.0 (Mac OS X 10.11.6),Test of Something 2,skip
HeadlessChrome 0.0.0 (Mac OS X 10.11.6),Test of Something 3,fail
```

### Image when opened in Excel
|Browser name|Spec description|result|
|------------|----------------|------|
|HeadlessChrome 0.0.0 (Mac OS X 10.11.6)|Test of something 1|success|
|HeadlessChrome 0.0.0 (Mac OS X 10.11.6)|Test of Something 2|skip|
|HeadlessChrome 0.0.0 (Mac OS X 10.11.6)|Test of Something 3|fail|

## License (MIT)
Copyright 2018 mas0061

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.