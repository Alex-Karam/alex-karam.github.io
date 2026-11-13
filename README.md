# Alexandros Karam — Data Analytics Portfolio

Source for the [portfolio website](https://alex-karam.github.io/).

The homepage presents four completed analytics projects with case studies and Power BI
reports. Each case study links to its technical repository. Index Put Options remains
in development.

- [Customer Activation and Feature Adoption](https://alex-karam.github.io/projects/customer-activation/index.html)
  uses course student observations under a fictional financial-services interpretation.
- [Small Business Sales and Order Analytics](https://alex-karam.github.io/projects/small-business-sales-and-order-analytics/index.html)
  uses real aggregate results approved for publication by the owner.
- [FX Time Range Breakout](https://alex-karam.github.io/projects/fx-time-range-breakout/index.html)
  covers the historical 28-pair study and the separate USDJPY comparison.
- [Credit Card Repayment Risk](https://alex-karam.github.io/projects/credit-card-repayment-risk/index.html)
  uses the same historical 2005 Taiwanese cohort for training, validation and held-out model evaluation.

## Files

- `index.html`: responsive homepage.
- `styles.css`: shared responsive styles, with no external dependencies.
- `portrait.png`: author's supplied portrait, at its original available resolution.
- `favicon.svg` and `favicon.ico`: the blue AK browser-tab icon, in vector and
  multi-size raster formats, shared by every page.
- `projects/customer-activation/index.html`: case study with findings, methods,
  validation and limitations.
- `projects/customer-activation/customer-activation-report.pdf`: unchanged,
  three-page Power BI export supplied by the author.
- Three PNG previews in the same project folder, unchanged from the reviewed
  report renders.
- `projects/small-business-sales-and-order-analytics/index.html`: case study
  with findings, methods, report links and limitations.
- `projects/small-business-sales-and-order-analytics/small-business-sales-and-order-analytics-report.pdf`:
  unchanged four-page Power BI export, published with the owner's permission.
- `projects/fx-time-range-breakout/index.html`: historical research case study
  with findings, methodology, metric definitions and limitations.
- `projects/fx-time-range-breakout/fx-time-range-breakout-report.pdf` contains the
  14-page Power BI report with the updated validation table and chart labels.
- `projects/fx-time-range-breakout/usdjpy-exit-profit.png`: selected original
  Python figure comparing three exits on a common timing set.
- `projects/credit-card-repayment-risk/index.html` covers the historical cohort, model
  evaluation and hypothetical review queue.
- `projects/credit-card-repayment-risk/credit-card-repayment-risk-report.pdf` contains
  the two-page Power BI report.

## GitHub Pages setup

Upload the contents of this folder, preserving the `projects/` directory. Under **Settings → Pages**, select
**Deploy from a branch**, **main**, **/(root)**, then **Save**.

This repository contains website presentation files. It contains no raw project
datasets, database dumps, embedded Power BI models or private research exports.
