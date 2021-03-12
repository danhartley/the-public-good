See: https://web.dev/use-lighthouse-for-performance-budgets/

## run lighthouse against URL

lighthouse https://the-public-good.netlify.app --output-path=./src/lighthouse/report.html

## run lighthouse against URL with budget (report appears in the Performance category)

lighthouse https://the-public-good.netlify.app --budget-path=./lighthouse/budget.json --output-path=./lighthouse/report.html
