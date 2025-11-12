## Markets Treasury Deep Dive Notes

### 1. Treasury Mandate & Operating Model
- **Core Responsibilities**
  - Liquidity management: intraday funding, wholesale markets access, liquidity buffer sizing.
  - Balance sheet optimization: asset/liability mix, term structure, FTP policy, capital allocation.
  - Interest rate & FX risk hedging for banking book exposures.
  - Regulatory engagement: LCR/NSFR submissions, ILAAP, ALCO reporting.
- **Organizational Interfaces**
  - Markets/Treasury trading desk (execution, hedging).
  - Asset-Liability Management (strategic positioning, forecasting).
  - Liquidity Risk & Finance (measurement, stress testing, reporting).
  - Business segments (pricing guidance, funding costs, product structuring).

### 2. Funding & Liquidity Instruments
- **Short-Term Funding**
  - Central bank facilities, repo/reverse repo, commercial paper, certificates of deposit.
  - Intraday liquidity lines; collateral management considerations.
- **Term Funding**
  - Senior unsecured debt, covered bonds, securitizations, TLAC/MREL instruments.
  - Callable vs bullet structures; currency diversification via cross-currency swaps.
- **Liquidity Buffers**
  - HQLA composition (Level 1 vs Level 2 assets); haircut impacts.
  - Contingent liquidity sources (back-up lines, committed facilities).
- **Pricing & FTP**
  - Construction of FTP curves: base curve + liquidity premium + capital charge.
  - Behavioral modeling of non-maturity deposits; beta assumptions.

### 3. Risk Measurement Toolset
- **Structural Interest Rate Risk**
  - Earnings-at-Risk (EaR), Economic Value of Equity (EVE), duration of equity.
  - Scenario analysis (parallel shifts, steepeners/flatteners, basis moves).
- **Liquidity Risk**
  - LCR, NSFR, survival horizon metrics, liquidity stress testing.
  - Concentration analysis (counterparty, product, market access).
- **Capital & Leverage**
  - RWA optimization, leverage ratio constraints, internal capital adequacy (ICAAP).
  - Impact of derivative collateral and netting on leverage exposure.
- **Stress & Contingency Planning**
  - Recovery & Resolution planning: playbooks, MPE/SPE strategies.
  - Contingent funding plan triggers, early warning indicators, escalation paths.

### 4. Market Context & Macro Drivers
- **Yield Curve Dynamics**
  - Policy rate expectations, term premium, supply/demand from sovereign issuance.
  - Implications of curve inversion/steepening on funding and asset portfolios.
- **Cross-Currency Funding**
  - Basis swap spreads, USD funding scarcity episodes, central bank swap lines.
- **Credit & Liquidity Spreads**
  - CDS and bond spread monitoring; pricing term funding vs market appetite.
  - Repo market conditions, GC vs specials, collateral upgrade trades.
- **Macro Themes**
  - Monetary policy shifts, QT/QE flows, regulatory changes (Basel, TLAC).
  - Geo-political shocks affecting market access and liquidity buffers.

### 5. Advanced Hedging Topics
- **Optionality in Banking Book**
  - Prepayment risk in mortgages, callable liabilities, structured notes.
  - Hedging strategies: swaptions, caps/floors, Bermudan structures.
- **Basis & Cross-Gamma Risks**
  - IBOR vs risk-free rate transition (SOFR/€STR): basis swaps, fallback spreads.
  - Cross-gamma between rates and FX in multi-currency balance sheets.
- **Macro Hedges**
  - Macro overlay strategies (e.g., payer swaptions to guard against rate spikes).
  - Dynamic vs static hedging; governance for macro positions.

### 6. Governance & Controls
- **Committees**
  - ALCO, Treasury Risk Committee, Liquidity Steering, FTP Committee.
- **Policy Framework**
  - Liquidity risk appetite metrics, structural FX policy, collateral eligibility.
- **Model Governance**
  - Behavioral models (deposits, prepayments), valuation adjustments (FVA, XVA).
  - Validation, independent review, benchmarking vs market data.
- **Data & Systems**
  - Treasury management systems (TMS), risk engines, collateral platforms.
  - Intraday liquidity dashboards, stress-testing automation.

### 7. Interview Angles & Storylines
- **Scenario Storytelling**
  - Funding squeeze due to rating downgrade → propose funding mix, collateral actions, communication plan.
  - Rapid rate hikes → adapt FTP, hedge duration, rebalance liquidity buffers.
- **Behavioral + Technical**
  - Times you managed conflicting objectives (liquidity vs profitability).
  - Influencing stakeholders (business heads, regulators) with data.
- **Quantitative Drills**
  - Compute impact of 100 bps parallel shift on EVE given duration profile.
  - Reconstruct LCR under stress with given runoff rates and HQLA.

### 8. Reference Materials & Benchmarks
- **Key Regulatory Documents**
  - Basel Committee liquidity standards (BCBS 238), IRRBB guidelines.
  - EBA/FRB supervisory statements on interest rate risk management.
- **Industry Reports**
  - BIS Quarterly Reviews on funding markets.
  - FSB TLAC progress reports, IMF Global Financial Stability Reports.
- **Best Practice Guides**
  - Liquidity risk management handbooks (e.g., Matz & Neu).
  - Bank treasury management textbooks (e.g., Morini, “Understanding Treasury Management”).

### 9. Integration Ideas for the App
- Tag question bank entries with these themes for targeted drills.
- Create case-study generators using macro drivers + funding constraints.
- Add governance checkpoints in panel simulations (e.g., “Which committee approves?” prompts).
- Provide context cards summarizing current market conditions for scenario questions.
- Offer downloadable templates (FTP policy summary, LCR calculator).

