import React from "react"
import SearchResult from "../types/SearchResult"
import Tile from "./Tile"
import Stock from "../types/Stock"
import StyledList from "./styles/StyledList.style"
const API_MOCK: SearchResult = {
  "data": [
    {
      "id": 109809,
      "company_id": "1592FD9F-BF5B-469D-B8F3-D33379E0C0DE",
      "trading_item_id": 2643913,
      "name": "Royal Bank of Canada",
      "slug": "royal-bank-of-canada",
      "exchange_symbol": "TSX",
      "ticker_symbol": "RY",
      "unique_symbol": "TSX:RY",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-ry\/royal-bank-of-canada-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-ry\/royal-bank-of-canada-shares",
      "is_searchable": true,
      "isin_symbol": "CA7800871021",
      "score": {
        "data": {
          "value": 3,
          "income": 5,
          "health": 6,
          "past": 3,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 18,
          "sentence": "Flawless balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1864,
          "description": "Royal Bank of Canada operates as a diversified financial service company worldwide.",
          "logo_url": "\/api\/company\/image\/TSX:RY.PRJ\/logo",
          "share_price": 134.87,
          "market_cap": 190690799290.0,
          "pe": 12.663753,
          "pb": 1.75979,
          "price_to_sales": 3.5637810000000001,
          // @ts-ignore
          "return_1d": 0.0066429999999999996,
          "return_7d": 0.022440000000000002,
          "return_1yr_abs": 0.027424,
          "price_target": 139.80267000000001,
          "growth_3y": 0.024378,
          "net_income_growth_annual": 0.024378,
          "revenue_growth_annual": 0.049882000000000003,
          "dividend_yield": 0.040927999999999999,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/109809-main-thumb\/1585186601074",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/109809-main-header\/1585186941972"
        }
      }
    },
    {
      "id": 23515,
      "company_id": "21024E62-1300-4F57-980C-5A7DFE86B7EC",
      "trading_item_id": 2658411,
      "name": "Toronto-Dominion Bank",
      "slug": "toronto-dominion-bank",
      "exchange_symbol": "TSX",
      "ticker_symbol": "TD",
      "unique_symbol": "TSX:TD",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-td\/toronto-dominion-bank-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-td\/toronto-dominion-bank-shares",
      "is_searchable": true,
      "isin_symbol": "CA8911605092",
      "score": {
        "data": {
          "value": 3,
          "income": 4,
          "health": 6,
          "past": 2,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Flawless balance sheet average dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1855,
          "description": "The Toronto-Dominion Bank, together with its subsidiaries, provides various financial products and services in Canada, the United States, and internationally.",
          "logo_url": "\/api\/company\/image\/NYSE:TD\/logo",
          "share_price": 81.560000000000002,
          "market_cap": 144534033306.0,
          "pe": 12.599951000000001,
          "pb": 1.347486,
          "price_to_sales": 2.8675679999999999,
          // @ts-ignore
          "return_1d": 0.002212,
          "return_7d": 0.016577000000000001,
          "return_1yr_abs": 0.0081580000000000003,
          "price_target": 87.191879999999998,
          "growth_3y": 0.068448999999999996,
          "net_income_growth_annual": 0.068448999999999996,
          "revenue_growth_annual": 0.032635999999999998,
          "dividend_yield": 0.050025,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/23515-main-thumb\/1585186605219",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/23515-main-header\/1585187598492"
        }
      }
    },
    {
      "id": 884393,
      "company_id": "38396920-A9DD-4825-AB04-AB7B13C53F05",
      "trading_item_id": 2597605,
      "name": "Canadian Pacific Kansas City",
      "slug": "canadian-pacific-kansas-city",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CP",
      "unique_symbol": "TSX:CP",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/transportation\/tsx-cp\/canadian-pacific-kansas-city-shares",
      "primary_canonical_url": "\/stocks\/ca\/transportation\/tsx-cp\/canadian-pacific-kansas-city-shares",
      "is_searchable": true,
      "isin_symbol": "CA13646K1084",
      "score": {
        "data": {
          "value": 0,
          "income": 0,
          "health": 2,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 6,
          "sentence": "Limited growth with questionable track record."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1881,
          "description": "Canadian Pacific Kansas City Limited, together with its subsidiaries, owns and operates a transcontinental freight railway in Canada, the United States, and Mexico.",
          "logo_url": "\/api\/company\/image\/BOVESPA:CPRL34\/logo",
          "share_price": 120.83,
          "market_cap": 112654598822.0,
          "pe": 28.687190999999999,
          "pb": 2.7150919999999998,
          "price_to_sales": 8.9728870000000001,
          // @ts-ignore
          "return_1d": -0.002065,
          "return_7d": 0.032118000000000001,
          "return_1yr_abs": 0.19966200000000001,
          "price_target": 118.45545,
          "growth_3y": 0.091630000000000003,
          "net_income_growth_annual": 0.091630000000000003,
          "revenue_growth_annual": 0.088097999999999996,
          "dividend_yield": 0.0062899999999999996,
          "primary_industry": {
            "id": 3200000,
            "name": "Transportation"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/3241000-choice2-main-thumb\/1585186602288",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/3241000-choice2-main-header\/1585187134183"
        }
      }
    },
    {
      "id": 353020,
      "company_id": "73F6CA5E-FBEE-4915-9156-5C20A716288E",
      "trading_item_id": 2597582,
      "name": "Canadian National Railway",
      "slug": "canadian-national-railway",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CNR",
      "unique_symbol": "TSX:CNR",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/transportation\/tsx-cnr\/canadian-national-railway-shares",
      "primary_canonical_url": "\/stocks\/ca\/transportation\/tsx-cnr\/canadian-national-railway-shares",
      "is_searchable": true,
      "isin_symbol": "CA1363751027",
      "score": {
        "data": {
          "value": 2,
          "income": 4,
          "health": 2,
          "past": 6,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Outstanding track record average dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1919,
          "description": "Canadian National Railway Company, together with its subsidiaries, engages in the rail, intermodal, trucking, and marine transportation and logistics business in Canada and the United States.",
          "logo_url": "\/api\/company\/image\/NYSE:CNI\/logo",
          "share_price": 173.44,
          "market_cap": 111123008000.0,
          "pe": 19.755201,
          "pb": 5.5238360000000002,
          "price_to_sales": 6.603459,
          // @ts-ignore
          "return_1d": -0.001439,
          "return_7d": -0.014376999999999999,
          "return_1yr_abs": 0.087056999999999995,
          "price_target": 177.27667,
          "growth_3y": 0.024493000000000001,
          "net_income_growth_annual": 0.024493000000000001,
          "revenue_growth_annual": 0.051293999999999999,
          "dividend_yield": 0.019487999999999998,
          "primary_industry": {
            "id": 3200000,
            "name": "Transportation"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/353020-main-thumb\/1585186796456",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/353020-main-header\/1585186950473"
        }
      }
    },
    {
      "id": 527692,
      "company_id": "CC04CDA7-56BA-4D38-9C79-40A602AE4CD0",
      "trading_item_id": 2597588,
      "name": "Canadian Natural Resources",
      "slug": "canadian-natural-resources",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CNQ",
      "unique_symbol": "TSX:CNQ",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/energy\/tsx-cnq\/canadian-natural-resources-shares",
      "primary_canonical_url": "\/stocks\/ca\/energy\/tsx-cnq\/canadian-natural-resources-shares",
      "is_searchable": true,
      "isin_symbol": "CA1363851017",
      "score": {
        "data": {
          "value": 2,
          "income": 5,
          "health": 4,
          "past": 3,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Established dividend payer with adequate balance sheet."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1973,
          "description": "Canadian Natural Resources Limited acquires, explores for, develops, produces, markets, and sells crude oil, natural gas, and natural gas liquids (NGLs).",
          "logo_url": "\/api\/company\/image\/TSX:CNQ\/logo",
          "share_price": 97.260000000000005,
          "market_cap": 104209359079.0,
          "pe": 12.65752,
          "pb": 2.616222,
          "price_to_sales": 2.8972799999999999,
          // @ts-ignore
          "return_1d": 0.0055830000000000003,
          "return_7d": 0.015876000000000001,
          "return_1yr_abs": 0.301311,
          "price_target": 101.31182,
          "growth_3y": 0.026445,
          "net_income_growth_annual": 0.026445,
          "revenue_growth_annual": 0.026452,
          "dividend_yield": 0.043182999999999999,
          "primary_industry": {
            "id": 1010000,
            "name": "Energy"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/1032000-choice1-main-thumb\/1585186584085",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/1032000-choice1-main-header\/1585186548616"
        }
      }
    },
    {
      "id": 280420,
      "company_id": "4435B67B-5094-421B-A719-277427AEA8C1",
      "trading_item_id": 2609173,
      "name": "Enbridge",
      "slug": "enbridge",
      "exchange_symbol": "TSX",
      "ticker_symbol": "ENB",
      "unique_symbol": "TSX:ENB",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/energy\/tsx-enb\/enbridge-shares",
      "primary_canonical_url": "\/stocks\/ca\/energy\/tsx-enb\/enbridge-shares",
      "is_searchable": true,
      "isin_symbol": "CA29250N1050",
      "score": {
        "data": {
          "value": 3,
          "income": 5,
          "health": 0,
          "past": 5,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 14,
          "sentence": "Solid track record established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1949,
          "description": "Enbridge Inc., together with its subsidiaries, operates as an energy infrastructure company.",
          "logo_url": "\/api\/company\/image\/TSX:ENB.PRD\/logo",
          "share_price": 48.57,
          "market_cap": 103239729796.0,
          "pe": 17.681063999999999,
          "pb": 1.8895919999999999,
          "price_to_sales": 2.3652259999999998,
          // @ts-ignore
          "return_1d": 0.0043420000000000004,
          "return_7d": 0.030335000000000001,
          "return_1yr_abs": -0.074505000000000002,
          "price_target": 52.133330000000001,
          "growth_3y": 0.093067999999999998,
          "net_income_growth_annual": 0.093067999999999998,
          "revenue_growth_annual": 0.054545999999999997,
          "dividend_yield": 0.075355000000000005,
          "primary_industry": {
            "id": 1010000,
            "name": "Energy"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/280420-main-thumb\/1585186700840",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/280420-main-header\/1585186603174"
        }
      }
    },
    {
      "id": 515275,
      "company_id": "C4E1D793-D87B-4275-BA3A-1D399ED55C1E",
      "trading_item_id": 2657893,
      "name": "Thomson Reuters",
      "slug": "thomson-reuters",
      "exchange_symbol": "TSX",
      "ticker_symbol": "TRI",
      "unique_symbol": "TSX:TRI",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/commercial-services\/tsx-tri\/thomson-reuters-shares",
      "primary_canonical_url": "\/stocks\/ca\/commercial-services\/tsx-tri\/thomson-reuters-shares",
      "is_searchable": true,
      "isin_symbol": "CA8849038085",
      "score": {
        "data": {
          "value": 2,
          "income": 3,
          "health": 4,
          "past": 6,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Outstanding track record with adequate balance sheet."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1851,
          "description": "Thomson Reuters Corporation engages in the provision of business information services in the Americas, Europe, the Middle East, Africa, and the Asia Pacific.",
          "logo_url": "\/api\/company\/image\/TSX:TRI\/logo",
          "share_price": 213.43000000000001,
          "market_cap": 96334484059.0,
          "pe": 27.053910999999999,
          "pb": 6.5226749999999996,
          "price_to_sales": 10.516541,
          // @ts-ignore
          "return_1d": 0.0088389999999999996,
          "return_7d": -0.0082249999999999997,
          "return_1yr_abs": 0.24012900000000001,
          "price_target": 205.27735899999999,
          "growth_3y": -0.096918000000000004,
          "net_income_growth_annual": -0.096918000000000004,
          "revenue_growth_annual": 0.064042000000000002,
          "dividend_yield": 0.013644999999999999,
          "primary_industry": {
            "id": 3100000,
            "name": "Commercial Services"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/9612012-choice2-main-thumb\/1585186565655",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/9612012-choice2-main-header\/1585186803878"
        }
      }
    },
    {
      "id": 19053,
      "company_id": "39986DEE-9C77-44CA-AEFF-25B35E0405C3",
      "trading_item_id": 2592992,
      "name": "Bank of Montreal",
      "slug": "bank-of-montreal",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BMO",
      "unique_symbol": "TSX:BMO",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-bmo\/bank-of-montreal-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-bmo\/bank-of-montreal-shares",
      "is_searchable": true,
      "isin_symbol": "CA0636711016",
      "score": {
        "data": {
          "value": 2,
          "income": 5,
          "health": 5,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Excellent balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1817,
          "description": "Bank of Montreal provides diversified financial services primarily in North America.",
          "logo_url": "\/api\/company\/image\/TSX:BMO\/logo",
          "share_price": 127.33,
          "market_cap": 92362029309.0,
          "pe": 17.799582000000001,
          "pb": 1.2489790000000001,
          "price_to_sales": 2.96184,
          // @ts-ignore
          "return_1d": 0.0033089999999999999,
          "return_7d": 0.026606000000000001,
          "return_1yr_abs": 0.064365000000000006,
          "price_target": 132.495,
          "growth_3y": 0.13652,
          "net_income_growth_annual": 0.13652,
          "revenue_growth_annual": 0.044590999999999999,
          "dividend_yield": 0.047435999999999999,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/19053-main-thumb\/1585186545969",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/19053-main-header\/1585186583965"
        }
      }
    },
    {
      "id": 364332,
      "company_id": "0CB6FFFA-D576-422E-8652-18EBC60E15C3",
      "trading_item_id": 24791410,
      "name": "Brookfield",
      "slug": "brookfield",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BN",
      "unique_symbol": "TSX:BN",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/diversified-financials\/tsx-bn\/brookfield-shares",
      "primary_canonical_url": "\/stocks\/ca\/diversified-financials\/tsx-bn\/brookfield-shares",
      "is_searchable": true,
      "isin_symbol": "CA11271J1075",
      "score": {
        "data": {
          "value": 0,
          "income": 0,
          "health": 0,
          "past": 1,
          "future": 0,
          "management": 0,
          "misc": 0,
          "total": 1,
          "sentence": "Poor track record with weak fundamentals."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1997,
          "description": "Brookfield Corporation is an alternative asset manager and REIT\/Real Estate Investment Manager firm focuses on real estate, renewable power, infrastructure and venture capital and private equity assets.",
          "logo_url": "\/api\/company\/image\/BOVESPA:B1AM34\/logo",
          "share_price": 56.719999999999999,
          "market_cap": 88551634721.0,
          "pe": 68.129661999999996,
          "pb": 1.5759700000000001,
          // @ts-ignore
          "price_to_sales": null,
          // @ts-ignore
          "return_1d": 0.0085349999999999992,
          "return_7d": 0.010511,
          "return_1yr_abs": 0.42119800000000002,
          "price_target": 66.430736999999993,
          "growth_3y": null,
          "net_income_growth_annual": null,
          "revenue_growth_annual": null,
          "dividend_yield": 0.007607,
          "primary_industry": {
            "id": 7100000,
            "name": "Diversified Financials"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/7131000-choice1-main-thumb\/1585186655004",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/7131000-choice2-main-header\/1585186813996"
        }
      }
    },
    {
      "id": 873647,
      "company_id": "FC0C7962-B9C8-4C2C-83BB-2552C3628829",
      "trading_item_id": 2593034,
      "name": "Bank of Nova Scotia",
      "slug": "bank-of-nova-scotia",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BNS",
      "unique_symbol": "TSX:BNS",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-bns\/bank-of-nova-scotia-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-bns\/bank-of-nova-scotia-shares",
      "is_searchable": true,
      "isin_symbol": "CA0641491075",
      "score": {
        "data": {
          "value": 4,
          "income": 5,
          "health": 6,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 19,
          "sentence": "Flawless balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1832,
          "description": "The Bank of Nova Scotia provides various banking products and services in Canada, the United States, Mexico, Peru, Chile, Colombia, the Caribbean and Central America, and internationally.",
          "logo_url": "\/api\/company\/image\/NYSE:BNS\/logo",
          "share_price": 67.329999999999998,
          "market_cap": 82286214890.0,
          "pe": 11.064437,
          "pb": 1.1759040000000001,
          "price_to_sales": 2.7989459999999999,
          // @ts-ignore
          "return_1d": -0.0045830000000000003,
          "return_7d": 0.010050999999999999,
          "return_1yr_abs": 0.023875,
          "price_target": 67.35154,
          "growth_3y": 0.068156999999999995,
          "net_income_growth_annual": 0.068156999999999995,
          "revenue_growth_annual": 0.085845000000000005,
          "dividend_yield": 0.062973000000000001,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/873647-main-thumb\/1585186651037",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/873647-main-header\/1585187501096"
        }
      }
    },
    {
      "id": 105057,
      "company_id": "C7251DC1-43E4-4B4D-943D-EC40FF5F4ADC",
      "trading_item_id": 27273763,
      "name": "Constellation Software",
      "slug": "constellation-software",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CSU",
      "unique_symbol": "TSX:CSU",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/software\/tsx-csu\/constellation-software-shares",
      "primary_canonical_url": "\/stocks\/ca\/software\/tsx-csu\/constellation-software-shares",
      "is_searchable": true,
      "isin_symbol": "CA21037X1006",
      "score": {
        "data": {
          "value": 1,
          "income": 0,
          "health": 2,
          "past": 3,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 8,
          "sentence": "Acceptable track record with limited growth."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1995,
          "description": "Constellation Software Inc., together with its subsidiaries, acquires, builds, and manages vertical market software businesses in Canada, the United States, Europe, and internationally.",
          "logo_url": "\/api\/company\/image\/TSX:CSU\/logo",
          "share_price": 3794.9899999999998,
          "market_cap": 80421644434.0,
          "pe": 105.570162,
          "pb": 31.794851999999999,
          "price_to_sales": 7.0966259999999997,
          // @ts-ignore
          "return_1d": 0.00030299999999999999,
          "return_7d": 0.00067500000000000004,
          "return_1yr_abs": 0.64285300000000001,
          "price_target": 4104.6784589999997,
          "growth_3y": 0.104531,
          "net_income_growth_annual": 0.104531,
          "revenue_growth_annual": 0.18077799999999999,
          "dividend_yield": 0.001421,
          "primary_industry": {
            "id": 8010000,
            "name": "Software"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/8041000-choice1-main-thumb\/1585186568758",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/8041000-choice1-main-header\/1585186668959"
        }
      }
    },
    {
      "id": 876162,
      "company_id": "4613ACB9-DFB9-44E5-8CE6-9DEF9E6FB683",
      "trading_item_id": 1791883166,
      "name": "Alimentation Couche-Tard",
      "slug": "alimentation-couche-tard",
      "exchange_symbol": "TSX",
      "ticker_symbol": "ATD",
      "unique_symbol": "TSX:ATD",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/consumer-retailing\/tsx-atd\/alimentation-couche-tard-shares",
      "primary_canonical_url": "\/stocks\/ca\/consumer-retailing\/tsx-atd\/alimentation-couche-tard-shares",
      "is_searchable": true,
      "isin_symbol": "CA01626P1484",
      "score": {
        "data": {
          "value": 3,
          "income": 0,
          "health": 5,
          "past": 4,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 13,
          "sentence": "Excellent balance sheet with proven track record."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1980,
          "description": "Alimentation Couche-Tard Inc. operates and licenses convenience stores in North America, Europe, and Asia.",
          "logo_url": "\/api\/company\/image\/TSX:ATD\/logo",
          "share_price": 82.530000000000001,
          "market_cap": 79373587413.0,
          "pe": 19.229704999999999,
          "pb": 4.5059870000000002,
          // @ts-ignore
          "price_to_sales": null,
          // @ts-ignore
          "return_1d": -0.00036299999999999999,
          "return_7d": -0.012208,
          "return_1yr_abs": 0.32005800000000001,
          "price_target": 85.749371999999994,
          "growth_3y": 0.0053340000000000002,
          "net_income_growth_annual": 0.0053340000000000002,
          "revenue_growth_annual": 0.067588999999999996,
          "dividend_yield": 0.0084110000000000001,
          "primary_industry": {
            "id": 5010000,
            "name": "Consumer Retailing"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/5023000-choice1-main-thumb\/1585186797358",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/5023000-choice1-main-header\/1585186815097"
        }
      }
    }, {
      "id": 109809,
      "company_id": "1592FD9F-BF5B-469D-B8F3-D33379E0C0DE",
      "trading_item_id": 2643913,
      "name": "Royal Bank of Canada",
      "slug": "royal-bank-of-canada",
      "exchange_symbol": "TSX",
      "ticker_symbol": "RY",
      "unique_symbol": "TSX:RY",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-ry\/royal-bank-of-canada-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-ry\/royal-bank-of-canada-shares",
      "is_searchable": true,
      "isin_symbol": "CA7800871021",
      "score": {
        "data": {
          "value": 3,
          "income": 5,
          "health": 6,
          "past": 3,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 18,
          "sentence": "Flawless balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1864,
          "description": "Royal Bank of Canada operates as a diversified financial service company worldwide.",
          "logo_url": "\/api\/company\/image\/TSX:RY.PRJ\/logo",
          "share_price": 134.87,
          "market_cap": 190690799290.0,
          "pe": 12.663753,
          "pb": 1.75979,
          "price_to_sales": 3.5637810000000001,
          // @ts-ignore
          "return_1d": 0.0066429999999999996,
          "return_7d": 0.022440000000000002,
          "return_1yr_abs": 0.027424,
          "price_target": 139.80267000000001,
          "growth_3y": 0.024378,
          "net_income_growth_annual": 0.024378,
          "revenue_growth_annual": 0.049882000000000003,
          "dividend_yield": 0.040927999999999999,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/109809-main-thumb\/1585186601074",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/109809-main-header\/1585186941972"
        }
      }
    },
    {
      "id": 23515,
      "company_id": "21024E62-1300-4F57-980C-5A7DFE86B7EC",
      "trading_item_id": 2658411,
      "name": "Toronto-Dominion Bank",
      "slug": "toronto-dominion-bank",
      "exchange_symbol": "TSX",
      "ticker_symbol": "TD",
      "unique_symbol": "TSX:TD",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-td\/toronto-dominion-bank-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-td\/toronto-dominion-bank-shares",
      "is_searchable": true,
      "isin_symbol": "CA8911605092",
      "score": {
        "data": {
          "value": 3,
          "income": 4,
          "health": 6,
          "past": 2,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Flawless balance sheet average dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1855,
          "description": "The Toronto-Dominion Bank, together with its subsidiaries, provides various financial products and services in Canada, the United States, and internationally.",
          "logo_url": "\/api\/company\/image\/NYSE:TD\/logo",
          "share_price": 81.560000000000002,
          "market_cap": 144534033306.0,
          "pe": 12.599951000000001,
          "pb": 1.347486,
          "price_to_sales": 2.8675679999999999,
          // @ts-ignore
          "return_1d": 0.002212,
          "return_7d": 0.016577000000000001,
          "return_1yr_abs": 0.0081580000000000003,
          "price_target": 87.191879999999998,
          "growth_3y": 0.068448999999999996,
          "net_income_growth_annual": 0.068448999999999996,
          "revenue_growth_annual": 0.032635999999999998,
          "dividend_yield": 0.050025,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/23515-main-thumb\/1585186605219",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/23515-main-header\/1585187598492"
        }
      }
    },
    {
      "id": 884393,
      "company_id": "38396920-A9DD-4825-AB04-AB7B13C53F05",
      "trading_item_id": 2597605,
      "name": "Canadian Pacific Kansas City",
      "slug": "canadian-pacific-kansas-city",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CP",
      "unique_symbol": "TSX:CP",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/transportation\/tsx-cp\/canadian-pacific-kansas-city-shares",
      "primary_canonical_url": "\/stocks\/ca\/transportation\/tsx-cp\/canadian-pacific-kansas-city-shares",
      "is_searchable": true,
      "isin_symbol": "CA13646K1084",
      "score": {
        "data": {
          "value": 0,
          "income": 0,
          "health": 2,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 6,
          "sentence": "Limited growth with questionable track record."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1881,
          "description": "Canadian Pacific Kansas City Limited, together with its subsidiaries, owns and operates a transcontinental freight railway in Canada, the United States, and Mexico.",
          "logo_url": "\/api\/company\/image\/BOVESPA:CPRL34\/logo",
          "share_price": 120.83,
          "market_cap": 112654598822.0,
          "pe": 28.687190999999999,
          "pb": 2.7150919999999998,
          "price_to_sales": 8.9728870000000001,
          // @ts-ignore
          "return_1d": -0.002065,
          "return_7d": 0.032118000000000001,
          "return_1yr_abs": 0.19966200000000001,
          "price_target": 118.45545,
          "growth_3y": 0.091630000000000003,
          "net_income_growth_annual": 0.091630000000000003,
          "revenue_growth_annual": 0.088097999999999996,
          "dividend_yield": 0.0062899999999999996,
          "primary_industry": {
            "id": 3200000,
            "name": "Transportation"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/3241000-choice2-main-thumb\/1585186602288",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/3241000-choice2-main-header\/1585187134183"
        }
      }
    },
    {
      "id": 353020,
      "company_id": "73F6CA5E-FBEE-4915-9156-5C20A716288E",
      "trading_item_id": 2597582,
      "name": "Canadian National Railway",
      "slug": "canadian-national-railway",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CNR",
      "unique_symbol": "TSX:CNR",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/transportation\/tsx-cnr\/canadian-national-railway-shares",
      "primary_canonical_url": "\/stocks\/ca\/transportation\/tsx-cnr\/canadian-national-railway-shares",
      "is_searchable": true,
      "isin_symbol": "CA1363751027",
      "score": {
        "data": {
          "value": 2,
          "income": 4,
          "health": 2,
          "past": 6,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Outstanding track record average dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1919,
          "description": "Canadian National Railway Company, together with its subsidiaries, engages in the rail, intermodal, trucking, and marine transportation and logistics business in Canada and the United States.",
          "logo_url": "\/api\/company\/image\/NYSE:CNI\/logo",
          "share_price": 173.44,
          "market_cap": 111123008000.0,
          "pe": 19.755201,
          "pb": 5.5238360000000002,
          "price_to_sales": 6.603459,
          // @ts-ignore
          "return_1d": -0.001439,
          "return_7d": -0.014376999999999999,
          "return_1yr_abs": 0.087056999999999995,
          "price_target": 177.27667,
          "growth_3y": 0.024493000000000001,
          "net_income_growth_annual": 0.024493000000000001,
          "revenue_growth_annual": 0.051293999999999999,
          "dividend_yield": 0.019487999999999998,
          "primary_industry": {
            "id": 3200000,
            "name": "Transportation"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/353020-main-thumb\/1585186796456",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/353020-main-header\/1585186950473"
        }
      }
    },
    {
      "id": 527692,
      "company_id": "CC04CDA7-56BA-4D38-9C79-40A602AE4CD0",
      "trading_item_id": 2597588,
      "name": "Canadian Natural Resources",
      "slug": "canadian-natural-resources",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CNQ",
      "unique_symbol": "TSX:CNQ",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/energy\/tsx-cnq\/canadian-natural-resources-shares",
      "primary_canonical_url": "\/stocks\/ca\/energy\/tsx-cnq\/canadian-natural-resources-shares",
      "is_searchable": true,
      "isin_symbol": "CA1363851017",
      "score": {
        "data": {
          "value": 2,
          "income": 5,
          "health": 4,
          "past": 3,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Established dividend payer with adequate balance sheet."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1973,
          "description": "Canadian Natural Resources Limited acquires, explores for, develops, produces, markets, and sells crude oil, natural gas, and natural gas liquids (NGLs).",
          "logo_url": "\/api\/company\/image\/TSX:CNQ\/logo",
          "share_price": 97.260000000000005,
          "market_cap": 104209359079.0,
          "pe": 12.65752,
          "pb": 2.616222,
          "price_to_sales": 2.8972799999999999,
          // @ts-ignore
          "return_1d": 0.0055830000000000003,
          "return_7d": 0.015876000000000001,
          "return_1yr_abs": 0.301311,
          "price_target": 101.31182,
          "growth_3y": 0.026445,
          "net_income_growth_annual": 0.026445,
          "revenue_growth_annual": 0.026452,
          "dividend_yield": 0.043182999999999999,
          "primary_industry": {
            "id": 1010000,
            "name": "Energy"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/1032000-choice1-main-thumb\/1585186584085",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/1032000-choice1-main-header\/1585186548616"
        }
      }
    },
    {
      "id": 280420,
      "company_id": "4435B67B-5094-421B-A719-277427AEA8C1",
      "trading_item_id": 2609173,
      "name": "Enbridge",
      "slug": "enbridge",
      "exchange_symbol": "TSX",
      "ticker_symbol": "ENB",
      "unique_symbol": "TSX:ENB",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/energy\/tsx-enb\/enbridge-shares",
      "primary_canonical_url": "\/stocks\/ca\/energy\/tsx-enb\/enbridge-shares",
      "is_searchable": true,
      "isin_symbol": "CA29250N1050",
      "score": {
        "data": {
          "value": 3,
          "income": 5,
          "health": 0,
          "past": 5,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 14,
          "sentence": "Solid track record established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1949,
          "description": "Enbridge Inc., together with its subsidiaries, operates as an energy infrastructure company.",
          "logo_url": "\/api\/company\/image\/TSX:ENB.PRD\/logo",
          "share_price": 48.57,
          "market_cap": 103239729796.0,
          "pe": 17.681063999999999,
          "pb": 1.8895919999999999,
          "price_to_sales": 2.3652259999999998,
          // @ts-ignore
          "return_1d": 0.0043420000000000004,
          "return_7d": 0.030335000000000001,
          "return_1yr_abs": -0.074505000000000002,
          "price_target": 52.133330000000001,
          "growth_3y": 0.093067999999999998,
          "net_income_growth_annual": 0.093067999999999998,
          "revenue_growth_annual": 0.054545999999999997,
          "dividend_yield": 0.075355000000000005,
          "primary_industry": {
            "id": 1010000,
            "name": "Energy"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/280420-main-thumb\/1585186700840",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/280420-main-header\/1585186603174"
        }
      }
    },
    {
      "id": 515275,
      "company_id": "C4E1D793-D87B-4275-BA3A-1D399ED55C1E",
      "trading_item_id": 2657893,
      "name": "Thomson Reuters",
      "slug": "thomson-reuters",
      "exchange_symbol": "TSX",
      "ticker_symbol": "TRI",
      "unique_symbol": "TSX:TRI",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/commercial-services\/tsx-tri\/thomson-reuters-shares",
      "primary_canonical_url": "\/stocks\/ca\/commercial-services\/tsx-tri\/thomson-reuters-shares",
      "is_searchable": true,
      "isin_symbol": "CA8849038085",
      "score": {
        "data": {
          "value": 2,
          "income": 3,
          "health": 4,
          "past": 6,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Outstanding track record with adequate balance sheet."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1851,
          "description": "Thomson Reuters Corporation engages in the provision of business information services in the Americas, Europe, the Middle East, Africa, and the Asia Pacific.",
          "logo_url": "\/api\/company\/image\/TSX:TRI\/logo",
          "share_price": 213.43000000000001,
          "market_cap": 96334484059.0,
          "pe": 27.053910999999999,
          "pb": 6.5226749999999996,
          "price_to_sales": 10.516541,
          // @ts-ignore
          "return_1d": 0.0088389999999999996,
          "return_7d": -0.0082249999999999997,
          "return_1yr_abs": 0.24012900000000001,
          "price_target": 205.27735899999999,
          "growth_3y": -0.096918000000000004,
          "net_income_growth_annual": -0.096918000000000004,
          "revenue_growth_annual": 0.064042000000000002,
          "dividend_yield": 0.013644999999999999,
          "primary_industry": {
            "id": 3100000,
            "name": "Commercial Services"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/9612012-choice2-main-thumb\/1585186565655",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/9612012-choice2-main-header\/1585186803878"
        }
      }
    },
    {
      "id": 19053,
      "company_id": "39986DEE-9C77-44CA-AEFF-25B35E0405C3",
      "trading_item_id": 2592992,
      "name": "Bank of Montreal",
      "slug": "bank-of-montreal",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BMO",
      "unique_symbol": "TSX:BMO",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-bmo\/bank-of-montreal-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-bmo\/bank-of-montreal-shares",
      "is_searchable": true,
      "isin_symbol": "CA0636711016",
      "score": {
        "data": {
          "value": 2,
          "income": 5,
          "health": 5,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Excellent balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1817,
          "description": "Bank of Montreal provides diversified financial services primarily in North America.",
          "logo_url": "\/api\/company\/image\/TSX:BMO\/logo",
          "share_price": 127.33,
          "market_cap": 92362029309.0,
          "pe": 17.799582000000001,
          "pb": 1.2489790000000001,
          "price_to_sales": 2.96184,
          // @ts-ignore
          "return_1d": 0.0033089999999999999,
          "return_7d": 0.026606000000000001,
          "return_1yr_abs": 0.064365000000000006,
          "price_target": 132.495,
          "growth_3y": 0.13652,
          "net_income_growth_annual": 0.13652,
          "revenue_growth_annual": 0.044590999999999999,
          "dividend_yield": 0.047435999999999999,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/19053-main-thumb\/1585186545969",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/19053-main-header\/1585186583965"
        }
      }
    },
    {
      "id": 364332,
      "company_id": "0CB6FFFA-D576-422E-8652-18EBC60E15C3",
      "trading_item_id": 24791410,
      "name": "Brookfield",
      "slug": "brookfield",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BN",
      "unique_symbol": "TSX:BN",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/diversified-financials\/tsx-bn\/brookfield-shares",
      "primary_canonical_url": "\/stocks\/ca\/diversified-financials\/tsx-bn\/brookfield-shares",
      "is_searchable": true,
      "isin_symbol": "CA11271J1075",
      "score": {
        "data": {
          "value": 0,
          "income": 0,
          "health": 0,
          "past": 1,
          "future": 0,
          "management": 0,
          "misc": 0,
          "total": 1,
          "sentence": "Poor track record with weak fundamentals."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1997,
          "description": "Brookfield Corporation is an alternative asset manager and REIT\/Real Estate Investment Manager firm focuses on real estate, renewable power, infrastructure and venture capital and private equity assets.",
          "logo_url": "\/api\/company\/image\/BOVESPA:B1AM34\/logo",
          "share_price": 56.719999999999999,
          "market_cap": 88551634721.0,
          "pe": 68.129661999999996,
          "pb": 1.5759700000000001,
          // @ts-ignore
          "price_to_sales": null,
          // @ts-ignore
          "return_1d": 0.0085349999999999992,
          "return_7d": 0.010511,
          "return_1yr_abs": 0.42119800000000002,
          "price_target": 66.430736999999993,
          "growth_3y": null,
          "net_income_growth_annual": null,
          "revenue_growth_annual": null,
          "dividend_yield": 0.007607,
          "primary_industry": {
            "id": 7100000,
            "name": "Diversified Financials"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/7131000-choice1-main-thumb\/1585186655004",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/7131000-choice2-main-header\/1585186813996"
        }
      }
    },
    {
      "id": 873647,
      "company_id": "FC0C7962-B9C8-4C2C-83BB-2552C3628829",
      "trading_item_id": 2593034,
      "name": "Bank of Nova Scotia",
      "slug": "bank-of-nova-scotia",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BNS",
      "unique_symbol": "TSX:BNS",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-bns\/bank-of-nova-scotia-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-bns\/bank-of-nova-scotia-shares",
      "is_searchable": true,
      "isin_symbol": "CA0641491075",
      "score": {
        "data": {
          "value": 4,
          "income": 5,
          "health": 6,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 19,
          "sentence": "Flawless balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1832,
          "description": "The Bank of Nova Scotia provides various banking products and services in Canada, the United States, Mexico, Peru, Chile, Colombia, the Caribbean and Central America, and internationally.",
          "logo_url": "\/api\/company\/image\/NYSE:BNS\/logo",
          "share_price": 67.329999999999998,
          "market_cap": 82286214890.0,
          "pe": 11.064437,
          "pb": 1.1759040000000001,
          "price_to_sales": 2.7989459999999999,
          // @ts-ignore
          "return_1d": -0.0045830000000000003,
          "return_7d": 0.010050999999999999,
          "return_1yr_abs": 0.023875,
          "price_target": 67.35154,
          "growth_3y": 0.068156999999999995,
          "net_income_growth_annual": 0.068156999999999995,
          "revenue_growth_annual": 0.085845000000000005,
          "dividend_yield": 0.062973000000000001,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/873647-main-thumb\/1585186651037",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/873647-main-header\/1585187501096"
        }
      }
    },
    {
      "id": 105057,
      "company_id": "C7251DC1-43E4-4B4D-943D-EC40FF5F4ADC",
      "trading_item_id": 27273763,
      "name": "Constellation Software",
      "slug": "constellation-software",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CSU",
      "unique_symbol": "TSX:CSU",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/software\/tsx-csu\/constellation-software-shares",
      "primary_canonical_url": "\/stocks\/ca\/software\/tsx-csu\/constellation-software-shares",
      "is_searchable": true,
      "isin_symbol": "CA21037X1006",
      "score": {
        "data": {
          "value": 1,
          "income": 0,
          "health": 2,
          "past": 3,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 8,
          "sentence": "Acceptable track record with limited growth."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1995,
          "description": "Constellation Software Inc., together with its subsidiaries, acquires, builds, and manages vertical market software businesses in Canada, the United States, Europe, and internationally.",
          "logo_url": "\/api\/company\/image\/TSX:CSU\/logo",
          "share_price": 3794.9899999999998,
          "market_cap": 80421644434.0,
          "pe": 105.570162,
          "pb": 31.794851999999999,
          "price_to_sales": 7.0966259999999997,
          // @ts-ignore
          "return_1d": 0.00030299999999999999,
          "return_7d": 0.00067500000000000004,
          "return_1yr_abs": 0.64285300000000001,
          "price_target": 4104.6784589999997,
          "growth_3y": 0.104531,
          "net_income_growth_annual": 0.104531,
          "revenue_growth_annual": 0.18077799999999999,
          "dividend_yield": 0.001421,
          "primary_industry": {
            "id": 8010000,
            "name": "Software"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/8041000-choice1-main-thumb\/1585186568758",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/8041000-choice1-main-header\/1585186668959"
        }
      }
    },
    {
      "id": 876162,
      "company_id": "4613ACB9-DFB9-44E5-8CE6-9DEF9E6FB683",
      "trading_item_id": 1791883166,
      "name": "Alimentation Couche-Tard",
      "slug": "alimentation-couche-tard",
      "exchange_symbol": "TSX",
      "ticker_symbol": "ATD",
      "unique_symbol": "TSX:ATD",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/consumer-retailing\/tsx-atd\/alimentation-couche-tard-shares",
      "primary_canonical_url": "\/stocks\/ca\/consumer-retailing\/tsx-atd\/alimentation-couche-tard-shares",
      "is_searchable": true,
      "isin_symbol": "CA01626P1484",
      "score": {
        "data": {
          "value": 3,
          "income": 0,
          "health": 5,
          "past": 4,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 13,
          "sentence": "Excellent balance sheet with proven track record."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1980,
          "description": "Alimentation Couche-Tard Inc. operates and licenses convenience stores in North America, Europe, and Asia.",
          "logo_url": "\/api\/company\/image\/TSX:ATD\/logo",
          "share_price": 82.530000000000001,
          "market_cap": 79373587413.0,
          "pe": 19.229704999999999,
          "pb": 4.5059870000000002,
          // @ts-ignore
          "price_to_sales": null,
          // @ts-ignore
          "return_1d": -0.00036299999999999999,
          "return_7d": -0.012208,
          "return_1yr_abs": 0.32005800000000001,
          "price_target": 85.749371999999994,
          "growth_3y": 0.0053340000000000002,
          "net_income_growth_annual": 0.0053340000000000002,
          "revenue_growth_annual": 0.067588999999999996,
          "dividend_yield": 0.0084110000000000001,
          "primary_industry": {
            "id": 5010000,
            "name": "Consumer Retailing"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/5023000-choice1-main-thumb\/1585186797358",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/5023000-choice1-main-header\/1585186815097"
        }
      }
    }, {
      "id": 109809,
      "company_id": "1592FD9F-BF5B-469D-B8F3-D33379E0C0DE",
      "trading_item_id": 2643913,
      "name": "Royal Bank of Canada",
      "slug": "royal-bank-of-canada",
      "exchange_symbol": "TSX",
      "ticker_symbol": "RY",
      "unique_symbol": "TSX:RY",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-ry\/royal-bank-of-canada-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-ry\/royal-bank-of-canada-shares",
      "is_searchable": true,
      "isin_symbol": "CA7800871021",
      "score": {
        "data": {
          "value": 3,
          "income": 5,
          "health": 6,
          "past": 3,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 18,
          "sentence": "Flawless balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1864,
          "description": "Royal Bank of Canada operates as a diversified financial service company worldwide.",
          "logo_url": "\/api\/company\/image\/TSX:RY.PRJ\/logo",
          "share_price": 134.87,
          "market_cap": 190690799290.0,
          "pe": 12.663753,
          "pb": 1.75979,
          "price_to_sales": 3.5637810000000001,
          // @ts-ignore
          "return_1d": 0.0066429999999999996,
          "return_7d": 0.022440000000000002,
          "return_1yr_abs": 0.027424,
          "price_target": 139.80267000000001,
          "growth_3y": 0.024378,
          "net_income_growth_annual": 0.024378,
          "revenue_growth_annual": 0.049882000000000003,
          "dividend_yield": 0.040927999999999999,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/109809-main-thumb\/1585186601074",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/109809-main-header\/1585186941972"
        }
      }
    },
    {
      "id": 23515,
      "company_id": "21024E62-1300-4F57-980C-5A7DFE86B7EC",
      "trading_item_id": 2658411,
      "name": "Toronto-Dominion Bank",
      "slug": "toronto-dominion-bank",
      "exchange_symbol": "TSX",
      "ticker_symbol": "TD",
      "unique_symbol": "TSX:TD",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-td\/toronto-dominion-bank-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-td\/toronto-dominion-bank-shares",
      "is_searchable": true,
      "isin_symbol": "CA8911605092",
      "score": {
        "data": {
          "value": 3,
          "income": 4,
          "health": 6,
          "past": 2,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Flawless balance sheet average dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1855,
          "description": "The Toronto-Dominion Bank, together with its subsidiaries, provides various financial products and services in Canada, the United States, and internationally.",
          "logo_url": "\/api\/company\/image\/NYSE:TD\/logo",
          "share_price": 81.560000000000002,
          "market_cap": 144534033306.0,
          "pe": 12.599951000000001,
          "pb": 1.347486,
          "price_to_sales": 2.8675679999999999,
          // @ts-ignore
          "return_1d": 0.002212,
          "return_7d": 0.016577000000000001,
          "return_1yr_abs": 0.0081580000000000003,
          "price_target": 87.191879999999998,
          "growth_3y": 0.068448999999999996,
          "net_income_growth_annual": 0.068448999999999996,
          "revenue_growth_annual": 0.032635999999999998,
          "dividend_yield": 0.050025,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/23515-main-thumb\/1585186605219",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/23515-main-header\/1585187598492"
        }
      }
    },
    {
      "id": 884393,
      "company_id": "38396920-A9DD-4825-AB04-AB7B13C53F05",
      "trading_item_id": 2597605,
      "name": "Canadian Pacific Kansas City",
      "slug": "canadian-pacific-kansas-city",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CP",
      "unique_symbol": "TSX:CP",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/transportation\/tsx-cp\/canadian-pacific-kansas-city-shares",
      "primary_canonical_url": "\/stocks\/ca\/transportation\/tsx-cp\/canadian-pacific-kansas-city-shares",
      "is_searchable": true,
      "isin_symbol": "CA13646K1084",
      "score": {
        "data": {
          "value": 0,
          "income": 0,
          "health": 2,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 6,
          "sentence": "Limited growth with questionable track record."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1881,
          "description": "Canadian Pacific Kansas City Limited, together with its subsidiaries, owns and operates a transcontinental freight railway in Canada, the United States, and Mexico.",
          "logo_url": "\/api\/company\/image\/BOVESPA:CPRL34\/logo",
          "share_price": 120.83,
          "market_cap": 112654598822.0,
          "pe": 28.687190999999999,
          "pb": 2.7150919999999998,
          "price_to_sales": 8.9728870000000001,
          // @ts-ignore
          "return_1d": -0.002065,
          "return_7d": 0.032118000000000001,
          "return_1yr_abs": 0.19966200000000001,
          "price_target": 118.45545,
          "growth_3y": 0.091630000000000003,
          "net_income_growth_annual": 0.091630000000000003,
          "revenue_growth_annual": 0.088097999999999996,
          "dividend_yield": 0.0062899999999999996,
          "primary_industry": {
            "id": 3200000,
            "name": "Transportation"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/3241000-choice2-main-thumb\/1585186602288",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/3241000-choice2-main-header\/1585187134183"
        }
      }
    },
    {
      "id": 353020,
      "company_id": "73F6CA5E-FBEE-4915-9156-5C20A716288E",
      "trading_item_id": 2597582,
      "name": "Canadian National Railway",
      "slug": "canadian-national-railway",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CNR",
      "unique_symbol": "TSX:CNR",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/transportation\/tsx-cnr\/canadian-national-railway-shares",
      "primary_canonical_url": "\/stocks\/ca\/transportation\/tsx-cnr\/canadian-national-railway-shares",
      "is_searchable": true,
      "isin_symbol": "CA1363751027",
      "score": {
        "data": {
          "value": 2,
          "income": 4,
          "health": 2,
          "past": 6,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Outstanding track record average dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1919,
          "description": "Canadian National Railway Company, together with its subsidiaries, engages in the rail, intermodal, trucking, and marine transportation and logistics business in Canada and the United States.",
          "logo_url": "\/api\/company\/image\/NYSE:CNI\/logo",
          "share_price": 173.44,
          "market_cap": 111123008000.0,
          "pe": 19.755201,
          "pb": 5.5238360000000002,
          "price_to_sales": 6.603459,
          // @ts-ignore
          "return_1d": -0.001439,
          "return_7d": -0.014376999999999999,
          "return_1yr_abs": 0.087056999999999995,
          "price_target": 177.27667,
          "growth_3y": 0.024493000000000001,
          "net_income_growth_annual": 0.024493000000000001,
          "revenue_growth_annual": 0.051293999999999999,
          "dividend_yield": 0.019487999999999998,
          "primary_industry": {
            "id": 3200000,
            "name": "Transportation"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/353020-main-thumb\/1585186796456",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/353020-main-header\/1585186950473"
        }
      }
    },
    {
      "id": 527692,
      "company_id": "CC04CDA7-56BA-4D38-9C79-40A602AE4CD0",
      "trading_item_id": 2597588,
      "name": "Canadian Natural Resources",
      "slug": "canadian-natural-resources",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CNQ",
      "unique_symbol": "TSX:CNQ",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/energy\/tsx-cnq\/canadian-natural-resources-shares",
      "primary_canonical_url": "\/stocks\/ca\/energy\/tsx-cnq\/canadian-natural-resources-shares",
      "is_searchable": true,
      "isin_symbol": "CA1363851017",
      "score": {
        "data": {
          "value": 2,
          "income": 5,
          "health": 4,
          "past": 3,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Established dividend payer with adequate balance sheet."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1973,
          "description": "Canadian Natural Resources Limited acquires, explores for, develops, produces, markets, and sells crude oil, natural gas, and natural gas liquids (NGLs).",
          "logo_url": "\/api\/company\/image\/TSX:CNQ\/logo",
          "share_price": 97.260000000000005,
          "market_cap": 104209359079.0,
          "pe": 12.65752,
          "pb": 2.616222,
          "price_to_sales": 2.8972799999999999,
          // @ts-ignore
          "return_1d": 0.0055830000000000003,
          "return_7d": 0.015876000000000001,
          "return_1yr_abs": 0.301311,
          "price_target": 101.31182,
          "growth_3y": 0.026445,
          "net_income_growth_annual": 0.026445,
          "revenue_growth_annual": 0.026452,
          "dividend_yield": 0.043182999999999999,
          "primary_industry": {
            "id": 1010000,
            "name": "Energy"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/1032000-choice1-main-thumb\/1585186584085",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/1032000-choice1-main-header\/1585186548616"
        }
      }
    },
    {
      "id": 280420,
      "company_id": "4435B67B-5094-421B-A719-277427AEA8C1",
      "trading_item_id": 2609173,
      "name": "Enbridge",
      "slug": "enbridge",
      "exchange_symbol": "TSX",
      "ticker_symbol": "ENB",
      "unique_symbol": "TSX:ENB",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/energy\/tsx-enb\/enbridge-shares",
      "primary_canonical_url": "\/stocks\/ca\/energy\/tsx-enb\/enbridge-shares",
      "is_searchable": true,
      "isin_symbol": "CA29250N1050",
      "score": {
        "data": {
          "value": 3,
          "income": 5,
          "health": 0,
          "past": 5,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 14,
          "sentence": "Solid track record established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1949,
          "description": "Enbridge Inc., together with its subsidiaries, operates as an energy infrastructure company.",
          "logo_url": "\/api\/company\/image\/TSX:ENB.PRD\/logo",
          "share_price": 48.57,
          "market_cap": 103239729796.0,
          "pe": 17.681063999999999,
          "pb": 1.8895919999999999,
          "price_to_sales": 2.3652259999999998,
          // @ts-ignore
          "return_1d": 0.0043420000000000004,
          "return_7d": 0.030335000000000001,
          "return_1yr_abs": -0.074505000000000002,
          "price_target": 52.133330000000001,
          "growth_3y": 0.093067999999999998,
          "net_income_growth_annual": 0.093067999999999998,
          "revenue_growth_annual": 0.054545999999999997,
          "dividend_yield": 0.075355000000000005,
          "primary_industry": {
            "id": 1010000,
            "name": "Energy"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/280420-main-thumb\/1585186700840",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/280420-main-header\/1585186603174"
        }
      }
    },
    {
      "id": 515275,
      "company_id": "C4E1D793-D87B-4275-BA3A-1D399ED55C1E",
      "trading_item_id": 2657893,
      "name": "Thomson Reuters",
      "slug": "thomson-reuters",
      "exchange_symbol": "TSX",
      "ticker_symbol": "TRI",
      "unique_symbol": "TSX:TRI",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/commercial-services\/tsx-tri\/thomson-reuters-shares",
      "primary_canonical_url": "\/stocks\/ca\/commercial-services\/tsx-tri\/thomson-reuters-shares",
      "is_searchable": true,
      "isin_symbol": "CA8849038085",
      "score": {
        "data": {
          "value": 2,
          "income": 3,
          "health": 4,
          "past": 6,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Outstanding track record with adequate balance sheet."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1851,
          "description": "Thomson Reuters Corporation engages in the provision of business information services in the Americas, Europe, the Middle East, Africa, and the Asia Pacific.",
          "logo_url": "\/api\/company\/image\/TSX:TRI\/logo",
          "share_price": 213.43000000000001,
          "market_cap": 96334484059.0,
          "pe": 27.053910999999999,
          "pb": 6.5226749999999996,
          "price_to_sales": 10.516541,
          // @ts-ignore
          "return_1d": 0.0088389999999999996,
          "return_7d": -0.0082249999999999997,
          "return_1yr_abs": 0.24012900000000001,
          "price_target": 205.27735899999999,
          "growth_3y": -0.096918000000000004,
          "net_income_growth_annual": -0.096918000000000004,
          "revenue_growth_annual": 0.064042000000000002,
          "dividend_yield": 0.013644999999999999,
          "primary_industry": {
            "id": 3100000,
            "name": "Commercial Services"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/9612012-choice2-main-thumb\/1585186565655",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/9612012-choice2-main-header\/1585186803878"
        }
      }
    },
    {
      "id": 19053,
      "company_id": "39986DEE-9C77-44CA-AEFF-25B35E0405C3",
      "trading_item_id": 2592992,
      "name": "Bank of Montreal",
      "slug": "bank-of-montreal",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BMO",
      "unique_symbol": "TSX:BMO",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-bmo\/bank-of-montreal-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-bmo\/bank-of-montreal-shares",
      "is_searchable": true,
      "isin_symbol": "CA0636711016",
      "score": {
        "data": {
          "value": 2,
          "income": 5,
          "health": 5,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Excellent balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1817,
          "description": "Bank of Montreal provides diversified financial services primarily in North America.",
          "logo_url": "\/api\/company\/image\/TSX:BMO\/logo",
          "share_price": 127.33,
          "market_cap": 92362029309.0,
          "pe": 17.799582000000001,
          "pb": 1.2489790000000001,
          "price_to_sales": 2.96184,
          // @ts-ignore
          "return_1d": 0.0033089999999999999,
          "return_7d": 0.026606000000000001,
          "return_1yr_abs": 0.064365000000000006,
          "price_target": 132.495,
          "growth_3y": 0.13652,
          "net_income_growth_annual": 0.13652,
          "revenue_growth_annual": 0.044590999999999999,
          "dividend_yield": 0.047435999999999999,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/19053-main-thumb\/1585186545969",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/19053-main-header\/1585186583965"
        }
      }
    },
    {
      "id": 364332,
      "company_id": "0CB6FFFA-D576-422E-8652-18EBC60E15C3",
      "trading_item_id": 24791410,
      "name": "Brookfield",
      "slug": "brookfield",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BN",
      "unique_symbol": "TSX:BN",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/diversified-financials\/tsx-bn\/brookfield-shares",
      "primary_canonical_url": "\/stocks\/ca\/diversified-financials\/tsx-bn\/brookfield-shares",
      "is_searchable": true,
      "isin_symbol": "CA11271J1075",
      "score": {
        "data": {
          "value": 0,
          "income": 0,
          "health": 0,
          "past": 1,
          "future": 0,
          "management": 0,
          "misc": 0,
          "total": 1,
          "sentence": "Poor track record with weak fundamentals."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1997,
          "description": "Brookfield Corporation is an alternative asset manager and REIT\/Real Estate Investment Manager firm focuses on real estate, renewable power, infrastructure and venture capital and private equity assets.",
          "logo_url": "\/api\/company\/image\/BOVESPA:B1AM34\/logo",
          "share_price": 56.719999999999999,
          "market_cap": 88551634721.0,
          "pe": 68.129661999999996,
          "pb": 1.5759700000000001,
          // @ts-ignore
          "price_to_sales": null,
          // @ts-ignore
          "return_1d": 0.0085349999999999992,
          "return_7d": 0.010511,
          "return_1yr_abs": 0.42119800000000002,
          "price_target": 66.430736999999993,
          "growth_3y": null,
          "net_income_growth_annual": null,
          "revenue_growth_annual": null,
          "dividend_yield": 0.007607,
          "primary_industry": {
            "id": 7100000,
            "name": "Diversified Financials"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/7131000-choice1-main-thumb\/1585186655004",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/7131000-choice2-main-header\/1585186813996"
        }
      }
    },
    {
      "id": 873647,
      "company_id": "FC0C7962-B9C8-4C2C-83BB-2552C3628829",
      "trading_item_id": 2593034,
      "name": "Bank of Nova Scotia",
      "slug": "bank-of-nova-scotia",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BNS",
      "unique_symbol": "TSX:BNS",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-bns\/bank-of-nova-scotia-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-bns\/bank-of-nova-scotia-shares",
      "is_searchable": true,
      "isin_symbol": "CA0641491075",
      "score": {
        "data": {
          "value": 4,
          "income": 5,
          "health": 6,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 19,
          "sentence": "Flawless balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1832,
          "description": "The Bank of Nova Scotia provides various banking products and services in Canada, the United States, Mexico, Peru, Chile, Colombia, the Caribbean and Central America, and internationally.",
          "logo_url": "\/api\/company\/image\/NYSE:BNS\/logo",
          "share_price": 67.329999999999998,
          "market_cap": 82286214890.0,
          "pe": 11.064437,
          "pb": 1.1759040000000001,
          "price_to_sales": 2.7989459999999999,
          // @ts-ignore
          "return_1d": -0.0045830000000000003,
          "return_7d": 0.010050999999999999,
          "return_1yr_abs": 0.023875,
          "price_target": 67.35154,
          "growth_3y": 0.068156999999999995,
          "net_income_growth_annual": 0.068156999999999995,
          "revenue_growth_annual": 0.085845000000000005,
          "dividend_yield": 0.062973000000000001,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/873647-main-thumb\/1585186651037",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/873647-main-header\/1585187501096"
        }
      }
    },
    {
      "id": 105057,
      "company_id": "C7251DC1-43E4-4B4D-943D-EC40FF5F4ADC",
      "trading_item_id": 27273763,
      "name": "Constellation Software",
      "slug": "constellation-software",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CSU",
      "unique_symbol": "TSX:CSU",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/software\/tsx-csu\/constellation-software-shares",
      "primary_canonical_url": "\/stocks\/ca\/software\/tsx-csu\/constellation-software-shares",
      "is_searchable": true,
      "isin_symbol": "CA21037X1006",
      "score": {
        "data": {
          "value": 1,
          "income": 0,
          "health": 2,
          "past": 3,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 8,
          "sentence": "Acceptable track record with limited growth."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1995,
          "description": "Constellation Software Inc., together with its subsidiaries, acquires, builds, and manages vertical market software businesses in Canada, the United States, Europe, and internationally.",
          "logo_url": "\/api\/company\/image\/TSX:CSU\/logo",
          "share_price": 3794.9899999999998,
          "market_cap": 80421644434.0,
          "pe": 105.570162,
          "pb": 31.794851999999999,
          "price_to_sales": 7.0966259999999997,
          // @ts-ignore
          "return_1d": 0.00030299999999999999,
          "return_7d": 0.00067500000000000004,
          "return_1yr_abs": 0.64285300000000001,
          "price_target": 4104.6784589999997,
          "growth_3y": 0.104531,
          "net_income_growth_annual": 0.104531,
          "revenue_growth_annual": 0.18077799999999999,
          "dividend_yield": 0.001421,
          "primary_industry": {
            "id": 8010000,
            "name": "Software"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/8041000-choice1-main-thumb\/1585186568758",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/8041000-choice1-main-header\/1585186668959"
        }
      }
    },
    {
      "id": 876162,
      "company_id": "4613ACB9-DFB9-44E5-8CE6-9DEF9E6FB683",
      "trading_item_id": 1791883166,
      "name": "Alimentation Couche-Tard",
      "slug": "alimentation-couche-tard",
      "exchange_symbol": "TSX",
      "ticker_symbol": "ATD",
      "unique_symbol": "TSX:ATD",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/consumer-retailing\/tsx-atd\/alimentation-couche-tard-shares",
      "primary_canonical_url": "\/stocks\/ca\/consumer-retailing\/tsx-atd\/alimentation-couche-tard-shares",
      "is_searchable": true,
      "isin_symbol": "CA01626P1484",
      "score": {
        "data": {
          "value": 3,
          "income": 0,
          "health": 5,
          "past": 4,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 13,
          "sentence": "Excellent balance sheet with proven track record."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1980,
          "description": "Alimentation Couche-Tard Inc. operates and licenses convenience stores in North America, Europe, and Asia.",
          "logo_url": "\/api\/company\/image\/TSX:ATD\/logo",
          "share_price": 82.530000000000001,
          "market_cap": 79373587413.0,
          "pe": 19.229704999999999,
          "pb": 4.5059870000000002,
          // @ts-ignore
          "price_to_sales": null,
          // @ts-ignore
          "return_1d": -0.00036299999999999999,
          "return_7d": -0.012208,
          "return_1yr_abs": 0.32005800000000001,
          "price_target": 85.749371999999994,
          "growth_3y": 0.0053340000000000002,
          "net_income_growth_annual": 0.0053340000000000002,
          "revenue_growth_annual": 0.067588999999999996,
          "dividend_yield": 0.0084110000000000001,
          "primary_industry": {
            "id": 5010000,
            "name": "Consumer Retailing"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/5023000-choice1-main-thumb\/1585186797358",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/5023000-choice1-main-header\/1585186815097"
        }
      }
    }, {
      "id": 109809,
      "company_id": "1592FD9F-BF5B-469D-B8F3-D33379E0C0DE",
      "trading_item_id": 2643913,
      "name": "Royal Bank of Canada",
      "slug": "royal-bank-of-canada",
      "exchange_symbol": "TSX",
      "ticker_symbol": "RY",
      "unique_symbol": "TSX:RY",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-ry\/royal-bank-of-canada-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-ry\/royal-bank-of-canada-shares",
      "is_searchable": true,
      "isin_symbol": "CA7800871021",
      "score": {
        "data": {
          "value": 3,
          "income": 5,
          "health": 6,
          "past": 3,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 18,
          "sentence": "Flawless balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1864,
          "description": "Royal Bank of Canada operates as a diversified financial service company worldwide.",
          "logo_url": "\/api\/company\/image\/TSX:RY.PRJ\/logo",
          "share_price": 134.87,
          "market_cap": 190690799290.0,
          "pe": 12.663753,
          "pb": 1.75979,
          "price_to_sales": 3.5637810000000001,
          // @ts-ignore
          "return_1d": 0.0066429999999999996,
          "return_7d": 0.022440000000000002,
          "return_1yr_abs": 0.027424,
          "price_target": 139.80267000000001,
          "growth_3y": 0.024378,
          "net_income_growth_annual": 0.024378,
          "revenue_growth_annual": 0.049882000000000003,
          "dividend_yield": 0.040927999999999999,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/109809-main-thumb\/1585186601074",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/109809-main-header\/1585186941972"
        }
      }
    },
    {
      "id": 23515,
      "company_id": "21024E62-1300-4F57-980C-5A7DFE86B7EC",
      "trading_item_id": 2658411,
      "name": "Toronto-Dominion Bank",
      "slug": "toronto-dominion-bank",
      "exchange_symbol": "TSX",
      "ticker_symbol": "TD",
      "unique_symbol": "TSX:TD",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-td\/toronto-dominion-bank-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-td\/toronto-dominion-bank-shares",
      "is_searchable": true,
      "isin_symbol": "CA8911605092",
      "score": {
        "data": {
          "value": 3,
          "income": 4,
          "health": 6,
          "past": 2,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Flawless balance sheet average dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1855,
          "description": "The Toronto-Dominion Bank, together with its subsidiaries, provides various financial products and services in Canada, the United States, and internationally.",
          "logo_url": "\/api\/company\/image\/NYSE:TD\/logo",
          "share_price": 81.560000000000002,
          "market_cap": 144534033306.0,
          "pe": 12.599951000000001,
          "pb": 1.347486,
          "price_to_sales": 2.8675679999999999,
          // @ts-ignore
          "return_1d": 0.002212,
          "return_7d": 0.016577000000000001,
          "return_1yr_abs": 0.0081580000000000003,
          "price_target": 87.191879999999998,
          "growth_3y": 0.068448999999999996,
          "net_income_growth_annual": 0.068448999999999996,
          "revenue_growth_annual": 0.032635999999999998,
          "dividend_yield": 0.050025,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/23515-main-thumb\/1585186605219",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/23515-main-header\/1585187598492"
        }
      }
    },
    {
      "id": 884393,
      "company_id": "38396920-A9DD-4825-AB04-AB7B13C53F05",
      "trading_item_id": 2597605,
      "name": "Canadian Pacific Kansas City",
      "slug": "canadian-pacific-kansas-city",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CP",
      "unique_symbol": "TSX:CP",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/transportation\/tsx-cp\/canadian-pacific-kansas-city-shares",
      "primary_canonical_url": "\/stocks\/ca\/transportation\/tsx-cp\/canadian-pacific-kansas-city-shares",
      "is_searchable": true,
      "isin_symbol": "CA13646K1084",
      "score": {
        "data": {
          "value": 0,
          "income": 0,
          "health": 2,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 6,
          "sentence": "Limited growth with questionable track record."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1881,
          "description": "Canadian Pacific Kansas City Limited, together with its subsidiaries, owns and operates a transcontinental freight railway in Canada, the United States, and Mexico.",
          "logo_url": "\/api\/company\/image\/BOVESPA:CPRL34\/logo",
          "share_price": 120.83,
          "market_cap": 112654598822.0,
          "pe": 28.687190999999999,
          "pb": 2.7150919999999998,
          "price_to_sales": 8.9728870000000001,
          // @ts-ignore
          "return_1d": -0.002065,
          "return_7d": 0.032118000000000001,
          "return_1yr_abs": 0.19966200000000001,
          "price_target": 118.45545,
          "growth_3y": 0.091630000000000003,
          "net_income_growth_annual": 0.091630000000000003,
          "revenue_growth_annual": 0.088097999999999996,
          "dividend_yield": 0.0062899999999999996,
          "primary_industry": {
            "id": 3200000,
            "name": "Transportation"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/3241000-choice2-main-thumb\/1585186602288",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/3241000-choice2-main-header\/1585187134183"
        }
      }
    },
    {
      "id": 353020,
      "company_id": "73F6CA5E-FBEE-4915-9156-5C20A716288E",
      "trading_item_id": 2597582,
      "name": "Canadian National Railway",
      "slug": "canadian-national-railway",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CNR",
      "unique_symbol": "TSX:CNR",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/transportation\/tsx-cnr\/canadian-national-railway-shares",
      "primary_canonical_url": "\/stocks\/ca\/transportation\/tsx-cnr\/canadian-national-railway-shares",
      "is_searchable": true,
      "isin_symbol": "CA1363751027",
      "score": {
        "data": {
          "value": 2,
          "income": 4,
          "health": 2,
          "past": 6,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Outstanding track record average dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1919,
          "description": "Canadian National Railway Company, together with its subsidiaries, engages in the rail, intermodal, trucking, and marine transportation and logistics business in Canada and the United States.",
          "logo_url": "\/api\/company\/image\/NYSE:CNI\/logo",
          "share_price": 173.44,
          "market_cap": 111123008000.0,
          "pe": 19.755201,
          "pb": 5.5238360000000002,
          "price_to_sales": 6.603459,
          // @ts-ignore
          "return_1d": -0.001439,
          "return_7d": -0.014376999999999999,
          "return_1yr_abs": 0.087056999999999995,
          "price_target": 177.27667,
          "growth_3y": 0.024493000000000001,
          "net_income_growth_annual": 0.024493000000000001,
          "revenue_growth_annual": 0.051293999999999999,
          "dividend_yield": 0.019487999999999998,
          "primary_industry": {
            "id": 3200000,
            "name": "Transportation"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/353020-main-thumb\/1585186796456",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/353020-main-header\/1585186950473"
        }
      }
    },
    {
      "id": 527692,
      "company_id": "CC04CDA7-56BA-4D38-9C79-40A602AE4CD0",
      "trading_item_id": 2597588,
      "name": "Canadian Natural Resources",
      "slug": "canadian-natural-resources",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CNQ",
      "unique_symbol": "TSX:CNQ",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/energy\/tsx-cnq\/canadian-natural-resources-shares",
      "primary_canonical_url": "\/stocks\/ca\/energy\/tsx-cnq\/canadian-natural-resources-shares",
      "is_searchable": true,
      "isin_symbol": "CA1363851017",
      "score": {
        "data": {
          "value": 2,
          "income": 5,
          "health": 4,
          "past": 3,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Established dividend payer with adequate balance sheet."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1973,
          "description": "Canadian Natural Resources Limited acquires, explores for, develops, produces, markets, and sells crude oil, natural gas, and natural gas liquids (NGLs).",
          "logo_url": "\/api\/company\/image\/TSX:CNQ\/logo",
          "share_price": 97.260000000000005,
          "market_cap": 104209359079.0,
          "pe": 12.65752,
          "pb": 2.616222,
          "price_to_sales": 2.8972799999999999,
          // @ts-ignore
          "return_1d": 0.0055830000000000003,
          "return_7d": 0.015876000000000001,
          "return_1yr_abs": 0.301311,
          "price_target": 101.31182,
          "growth_3y": 0.026445,
          "net_income_growth_annual": 0.026445,
          "revenue_growth_annual": 0.026452,
          "dividend_yield": 0.043182999999999999,
          "primary_industry": {
            "id": 1010000,
            "name": "Energy"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/1032000-choice1-main-thumb\/1585186584085",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/1032000-choice1-main-header\/1585186548616"
        }
      }
    },
    {
      "id": 280420,
      "company_id": "4435B67B-5094-421B-A719-277427AEA8C1",
      "trading_item_id": 2609173,
      "name": "Enbridge",
      "slug": "enbridge",
      "exchange_symbol": "TSX",
      "ticker_symbol": "ENB",
      "unique_symbol": "TSX:ENB",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/energy\/tsx-enb\/enbridge-shares",
      "primary_canonical_url": "\/stocks\/ca\/energy\/tsx-enb\/enbridge-shares",
      "is_searchable": true,
      "isin_symbol": "CA29250N1050",
      "score": {
        "data": {
          "value": 3,
          "income": 5,
          "health": 0,
          "past": 5,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 14,
          "sentence": "Solid track record established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1949,
          "description": "Enbridge Inc., together with its subsidiaries, operates as an energy infrastructure company.",
          "logo_url": "\/api\/company\/image\/TSX:ENB.PRD\/logo",
          "share_price": 48.57,
          "market_cap": 103239729796.0,
          "pe": 17.681063999999999,
          "pb": 1.8895919999999999,
          "price_to_sales": 2.3652259999999998,
          // @ts-ignore
          "return_1d": 0.0043420000000000004,
          "return_7d": 0.030335000000000001,
          "return_1yr_abs": -0.074505000000000002,
          "price_target": 52.133330000000001,
          "growth_3y": 0.093067999999999998,
          "net_income_growth_annual": 0.093067999999999998,
          "revenue_growth_annual": 0.054545999999999997,
          "dividend_yield": 0.075355000000000005,
          "primary_industry": {
            "id": 1010000,
            "name": "Energy"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/280420-main-thumb\/1585186700840",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/280420-main-header\/1585186603174"
        }
      }
    },
    {
      "id": 515275,
      "company_id": "C4E1D793-D87B-4275-BA3A-1D399ED55C1E",
      "trading_item_id": 2657893,
      "name": "Thomson Reuters",
      "slug": "thomson-reuters",
      "exchange_symbol": "TSX",
      "ticker_symbol": "TRI",
      "unique_symbol": "TSX:TRI",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/commercial-services\/tsx-tri\/thomson-reuters-shares",
      "primary_canonical_url": "\/stocks\/ca\/commercial-services\/tsx-tri\/thomson-reuters-shares",
      "is_searchable": true,
      "isin_symbol": "CA8849038085",
      "score": {
        "data": {
          "value": 2,
          "income": 3,
          "health": 4,
          "past": 6,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Outstanding track record with adequate balance sheet."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1851,
          "description": "Thomson Reuters Corporation engages in the provision of business information services in the Americas, Europe, the Middle East, Africa, and the Asia Pacific.",
          "logo_url": "\/api\/company\/image\/TSX:TRI\/logo",
          "share_price": 213.43000000000001,
          "market_cap": 96334484059.0,
          "pe": 27.053910999999999,
          "pb": 6.5226749999999996,
          "price_to_sales": 10.516541,
          // @ts-ignore
          "return_1d": 0.0088389999999999996,
          "return_7d": -0.0082249999999999997,
          "return_1yr_abs": 0.24012900000000001,
          "price_target": 205.27735899999999,
          "growth_3y": -0.096918000000000004,
          "net_income_growth_annual": -0.096918000000000004,
          "revenue_growth_annual": 0.064042000000000002,
          "dividend_yield": 0.013644999999999999,
          "primary_industry": {
            "id": 3100000,
            "name": "Commercial Services"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/9612012-choice2-main-thumb\/1585186565655",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/9612012-choice2-main-header\/1585186803878"
        }
      }
    },
    {
      "id": 19053,
      "company_id": "39986DEE-9C77-44CA-AEFF-25B35E0405C3",
      "trading_item_id": 2592992,
      "name": "Bank of Montreal",
      "slug": "bank-of-montreal",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BMO",
      "unique_symbol": "TSX:BMO",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-bmo\/bank-of-montreal-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-bmo\/bank-of-montreal-shares",
      "is_searchable": true,
      "isin_symbol": "CA0636711016",
      "score": {
        "data": {
          "value": 2,
          "income": 5,
          "health": 5,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Excellent balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1817,
          "description": "Bank of Montreal provides diversified financial services primarily in North America.",
          "logo_url": "\/api\/company\/image\/TSX:BMO\/logo",
          "share_price": 127.33,
          "market_cap": 92362029309.0,
          "pe": 17.799582000000001,
          "pb": 1.2489790000000001,
          "price_to_sales": 2.96184,
          // @ts-ignore
          "return_1d": 0.0033089999999999999,
          "return_7d": 0.026606000000000001,
          "return_1yr_abs": 0.064365000000000006,
          "price_target": 132.495,
          "growth_3y": 0.13652,
          "net_income_growth_annual": 0.13652,
          "revenue_growth_annual": 0.044590999999999999,
          "dividend_yield": 0.047435999999999999,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/19053-main-thumb\/1585186545969",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/19053-main-header\/1585186583965"
        }
      }
    },
    {
      "id": 364332,
      "company_id": "0CB6FFFA-D576-422E-8652-18EBC60E15C3",
      "trading_item_id": 24791410,
      "name": "Brookfield",
      "slug": "brookfield",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BN",
      "unique_symbol": "TSX:BN",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/diversified-financials\/tsx-bn\/brookfield-shares",
      "primary_canonical_url": "\/stocks\/ca\/diversified-financials\/tsx-bn\/brookfield-shares",
      "is_searchable": true,
      "isin_symbol": "CA11271J1075",
      "score": {
        "data": {
          "value": 0,
          "income": 0,
          "health": 0,
          "past": 1,
          "future": 0,
          "management": 0,
          "misc": 0,
          "total": 1,
          "sentence": "Poor track record with weak fundamentals."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1997,
          "description": "Brookfield Corporation is an alternative asset manager and REIT\/Real Estate Investment Manager firm focuses on real estate, renewable power, infrastructure and venture capital and private equity assets.",
          "logo_url": "\/api\/company\/image\/BOVESPA:B1AM34\/logo",
          "share_price": 56.719999999999999,
          "market_cap": 88551634721.0,
          "pe": 68.129661999999996,
          "pb": 1.5759700000000001,
          // @ts-ignore
          "price_to_sales": null,
          // @ts-ignore
          "return_1d": 0.0085349999999999992,
          "return_7d": 0.010511,
          "return_1yr_abs": 0.42119800000000002,
          "price_target": 66.430736999999993,
          "growth_3y": null,
          "net_income_growth_annual": null,
          "revenue_growth_annual": null,
          "dividend_yield": 0.007607,
          "primary_industry": {
            "id": 7100000,
            "name": "Diversified Financials"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/7131000-choice1-main-thumb\/1585186655004",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/7131000-choice2-main-header\/1585186813996"
        }
      }
    },
    {
      "id": 873647,
      "company_id": "FC0C7962-B9C8-4C2C-83BB-2552C3628829",
      "trading_item_id": 2593034,
      "name": "Bank of Nova Scotia",
      "slug": "bank-of-nova-scotia",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BNS",
      "unique_symbol": "TSX:BNS",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-bns\/bank-of-nova-scotia-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-bns\/bank-of-nova-scotia-shares",
      "is_searchable": true,
      "isin_symbol": "CA0641491075",
      "score": {
        "data": {
          "value": 4,
          "income": 5,
          "health": 6,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 19,
          "sentence": "Flawless balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1832,
          "description": "The Bank of Nova Scotia provides various banking products and services in Canada, the United States, Mexico, Peru, Chile, Colombia, the Caribbean and Central America, and internationally.",
          "logo_url": "\/api\/company\/image\/NYSE:BNS\/logo",
          "share_price": 67.329999999999998,
          "market_cap": 82286214890.0,
          "pe": 11.064437,
          "pb": 1.1759040000000001,
          "price_to_sales": 2.7989459999999999,
          // @ts-ignore
          "return_1d": -0.0045830000000000003,
          "return_7d": 0.010050999999999999,
          "return_1yr_abs": 0.023875,
          "price_target": 67.35154,
          "growth_3y": 0.068156999999999995,
          "net_income_growth_annual": 0.068156999999999995,
          "revenue_growth_annual": 0.085845000000000005,
          "dividend_yield": 0.062973000000000001,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/873647-main-thumb\/1585186651037",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/873647-main-header\/1585187501096"
        }
      }
    },
    {
      "id": 105057,
      "company_id": "C7251DC1-43E4-4B4D-943D-EC40FF5F4ADC",
      "trading_item_id": 27273763,
      "name": "Constellation Software",
      "slug": "constellation-software",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CSU",
      "unique_symbol": "TSX:CSU",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/software\/tsx-csu\/constellation-software-shares",
      "primary_canonical_url": "\/stocks\/ca\/software\/tsx-csu\/constellation-software-shares",
      "is_searchable": true,
      "isin_symbol": "CA21037X1006",
      "score": {
        "data": {
          "value": 1,
          "income": 0,
          "health": 2,
          "past": 3,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 8,
          "sentence": "Acceptable track record with limited growth."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1995,
          "description": "Constellation Software Inc., together with its subsidiaries, acquires, builds, and manages vertical market software businesses in Canada, the United States, Europe, and internationally.",
          "logo_url": "\/api\/company\/image\/TSX:CSU\/logo",
          "share_price": 3794.9899999999998,
          "market_cap": 80421644434.0,
          "pe": 105.570162,
          "pb": 31.794851999999999,
          "price_to_sales": 7.0966259999999997,
          // @ts-ignore
          "return_1d": 0.00030299999999999999,
          "return_7d": 0.00067500000000000004,
          "return_1yr_abs": 0.64285300000000001,
          "price_target": 4104.6784589999997,
          "growth_3y": 0.104531,
          "net_income_growth_annual": 0.104531,
          "revenue_growth_annual": 0.18077799999999999,
          "dividend_yield": 0.001421,
          "primary_industry": {
            "id": 8010000,
            "name": "Software"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/8041000-choice1-main-thumb\/1585186568758",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/8041000-choice1-main-header\/1585186668959"
        }
      }
    },
    {
      "id": 876162,
      "company_id": "4613ACB9-DFB9-44E5-8CE6-9DEF9E6FB683",
      "trading_item_id": 1791883166,
      "name": "Alimentation Couche-Tard",
      "slug": "alimentation-couche-tard",
      "exchange_symbol": "TSX",
      "ticker_symbol": "ATD",
      "unique_symbol": "TSX:ATD",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/consumer-retailing\/tsx-atd\/alimentation-couche-tard-shares",
      "primary_canonical_url": "\/stocks\/ca\/consumer-retailing\/tsx-atd\/alimentation-couche-tard-shares",
      "is_searchable": true,
      "isin_symbol": "CA01626P1484",
      "score": {
        "data": {
          "value": 3,
          "income": 0,
          "health": 5,
          "past": 4,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 13,
          "sentence": "Excellent balance sheet with proven track record."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1980,
          "description": "Alimentation Couche-Tard Inc. operates and licenses convenience stores in North America, Europe, and Asia.",
          "logo_url": "\/api\/company\/image\/TSX:ATD\/logo",
          "share_price": 82.530000000000001,
          "market_cap": 79373587413.0,
          "pe": 19.229704999999999,
          "pb": 4.5059870000000002,
          // @ts-ignore
          "price_to_sales": null,
          // @ts-ignore
          "return_1d": -0.00036299999999999999,
          "return_7d": -0.012208,
          "return_1yr_abs": 0.32005800000000001,
          "price_target": 85.749371999999994,
          "growth_3y": 0.0053340000000000002,
          "net_income_growth_annual": 0.0053340000000000002,
          "revenue_growth_annual": 0.067588999999999996,
          "dividend_yield": 0.0084110000000000001,
          "primary_industry": {
            "id": 5010000,
            "name": "Consumer Retailing"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/5023000-choice1-main-thumb\/1585186797358",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/5023000-choice1-main-header\/1585186815097"
        }
      }
    }, {
      "id": 109809,
      "company_id": "1592FD9F-BF5B-469D-B8F3-D33379E0C0DE",
      "trading_item_id": 2643913,
      "name": "Royal Bank of Canada",
      "slug": "royal-bank-of-canada",
      "exchange_symbol": "TSX",
      "ticker_symbol": "RY",
      "unique_symbol": "TSX:RY",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-ry\/royal-bank-of-canada-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-ry\/royal-bank-of-canada-shares",
      "is_searchable": true,
      "isin_symbol": "CA7800871021",
      "score": {
        "data": {
          "value": 3,
          "income": 5,
          "health": 6,
          "past": 3,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 18,
          "sentence": "Flawless balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1864,
          "description": "Royal Bank of Canada operates as a diversified financial service company worldwide.",
          "logo_url": "\/api\/company\/image\/TSX:RY.PRJ\/logo",
          "share_price": 134.87,
          "market_cap": 190690799290.0,
          "pe": 12.663753,
          "pb": 1.75979,
          "price_to_sales": 3.5637810000000001,
          // @ts-ignore
          "return_1d": 0.0066429999999999996,
          "return_7d": 0.022440000000000002,
          "return_1yr_abs": 0.027424,
          "price_target": 139.80267000000001,
          "growth_3y": 0.024378,
          "net_income_growth_annual": 0.024378,
          "revenue_growth_annual": 0.049882000000000003,
          "dividend_yield": 0.040927999999999999,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/109809-main-thumb\/1585186601074",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/109809-main-header\/1585186941972"
        }
      }
    },
    {
      "id": 23515,
      "company_id": "21024E62-1300-4F57-980C-5A7DFE86B7EC",
      "trading_item_id": 2658411,
      "name": "Toronto-Dominion Bank",
      "slug": "toronto-dominion-bank",
      "exchange_symbol": "TSX",
      "ticker_symbol": "TD",
      "unique_symbol": "TSX:TD",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-td\/toronto-dominion-bank-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-td\/toronto-dominion-bank-shares",
      "is_searchable": true,
      "isin_symbol": "CA8911605092",
      "score": {
        "data": {
          "value": 3,
          "income": 4,
          "health": 6,
          "past": 2,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Flawless balance sheet average dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1855,
          "description": "The Toronto-Dominion Bank, together with its subsidiaries, provides various financial products and services in Canada, the United States, and internationally.",
          "logo_url": "\/api\/company\/image\/NYSE:TD\/logo",
          "share_price": 81.560000000000002,
          "market_cap": 144534033306.0,
          "pe": 12.599951000000001,
          "pb": 1.347486,
          "price_to_sales": 2.8675679999999999,
          // @ts-ignore
          "return_1d": 0.002212,
          "return_7d": 0.016577000000000001,
          "return_1yr_abs": 0.0081580000000000003,
          "price_target": 87.191879999999998,
          "growth_3y": 0.068448999999999996,
          "net_income_growth_annual": 0.068448999999999996,
          "revenue_growth_annual": 0.032635999999999998,
          "dividend_yield": 0.050025,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/23515-main-thumb\/1585186605219",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/23515-main-header\/1585187598492"
        }
      }
    },
    {
      "id": 884393,
      "company_id": "38396920-A9DD-4825-AB04-AB7B13C53F05",
      "trading_item_id": 2597605,
      "name": "Canadian Pacific Kansas City",
      "slug": "canadian-pacific-kansas-city",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CP",
      "unique_symbol": "TSX:CP",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/transportation\/tsx-cp\/canadian-pacific-kansas-city-shares",
      "primary_canonical_url": "\/stocks\/ca\/transportation\/tsx-cp\/canadian-pacific-kansas-city-shares",
      "is_searchable": true,
      "isin_symbol": "CA13646K1084",
      "score": {
        "data": {
          "value": 0,
          "income": 0,
          "health": 2,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 6,
          "sentence": "Limited growth with questionable track record."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1881,
          "description": "Canadian Pacific Kansas City Limited, together with its subsidiaries, owns and operates a transcontinental freight railway in Canada, the United States, and Mexico.",
          "logo_url": "\/api\/company\/image\/BOVESPA:CPRL34\/logo",
          "share_price": 120.83,
          "market_cap": 112654598822.0,
          "pe": 28.687190999999999,
          "pb": 2.7150919999999998,
          "price_to_sales": 8.9728870000000001,
          // @ts-ignore
          "return_1d": -0.002065,
          "return_7d": 0.032118000000000001,
          "return_1yr_abs": 0.19966200000000001,
          "price_target": 118.45545,
          "growth_3y": 0.091630000000000003,
          "net_income_growth_annual": 0.091630000000000003,
          "revenue_growth_annual": 0.088097999999999996,
          "dividend_yield": 0.0062899999999999996,
          "primary_industry": {
            "id": 3200000,
            "name": "Transportation"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/3241000-choice2-main-thumb\/1585186602288",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/3241000-choice2-main-header\/1585187134183"
        }
      }
    },
    {
      "id": 353020,
      "company_id": "73F6CA5E-FBEE-4915-9156-5C20A716288E",
      "trading_item_id": 2597582,
      "name": "Canadian National Railway",
      "slug": "canadian-national-railway",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CNR",
      "unique_symbol": "TSX:CNR",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/transportation\/tsx-cnr\/canadian-national-railway-shares",
      "primary_canonical_url": "\/stocks\/ca\/transportation\/tsx-cnr\/canadian-national-railway-shares",
      "is_searchable": true,
      "isin_symbol": "CA1363751027",
      "score": {
        "data": {
          "value": 2,
          "income": 4,
          "health": 2,
          "past": 6,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Outstanding track record average dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1919,
          "description": "Canadian National Railway Company, together with its subsidiaries, engages in the rail, intermodal, trucking, and marine transportation and logistics business in Canada and the United States.",
          "logo_url": "\/api\/company\/image\/NYSE:CNI\/logo",
          "share_price": 173.44,
          "market_cap": 111123008000.0,
          "pe": 19.755201,
          "pb": 5.5238360000000002,
          "price_to_sales": 6.603459,
          // @ts-ignore
          "return_1d": -0.001439,
          "return_7d": -0.014376999999999999,
          "return_1yr_abs": 0.087056999999999995,
          "price_target": 177.27667,
          "growth_3y": 0.024493000000000001,
          "net_income_growth_annual": 0.024493000000000001,
          "revenue_growth_annual": 0.051293999999999999,
          "dividend_yield": 0.019487999999999998,
          "primary_industry": {
            "id": 3200000,
            "name": "Transportation"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/353020-main-thumb\/1585186796456",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/353020-main-header\/1585186950473"
        }
      }
    },
    {
      "id": 527692,
      "company_id": "CC04CDA7-56BA-4D38-9C79-40A602AE4CD0",
      "trading_item_id": 2597588,
      "name": "Canadian Natural Resources",
      "slug": "canadian-natural-resources",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CNQ",
      "unique_symbol": "TSX:CNQ",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/energy\/tsx-cnq\/canadian-natural-resources-shares",
      "primary_canonical_url": "\/stocks\/ca\/energy\/tsx-cnq\/canadian-natural-resources-shares",
      "is_searchable": true,
      "isin_symbol": "CA1363851017",
      "score": {
        "data": {
          "value": 2,
          "income": 5,
          "health": 4,
          "past": 3,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Established dividend payer with adequate balance sheet."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1973,
          "description": "Canadian Natural Resources Limited acquires, explores for, develops, produces, markets, and sells crude oil, natural gas, and natural gas liquids (NGLs).",
          "logo_url": "\/api\/company\/image\/TSX:CNQ\/logo",
          "share_price": 97.260000000000005,
          "market_cap": 104209359079.0,
          "pe": 12.65752,
          "pb": 2.616222,
          "price_to_sales": 2.8972799999999999,
          // @ts-ignore
          "return_1d": 0.0055830000000000003,
          "return_7d": 0.015876000000000001,
          "return_1yr_abs": 0.301311,
          "price_target": 101.31182,
          "growth_3y": 0.026445,
          "net_income_growth_annual": 0.026445,
          "revenue_growth_annual": 0.026452,
          "dividend_yield": 0.043182999999999999,
          "primary_industry": {
            "id": 1010000,
            "name": "Energy"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/1032000-choice1-main-thumb\/1585186584085",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/1032000-choice1-main-header\/1585186548616"
        }
      }
    },
    {
      "id": 280420,
      "company_id": "4435B67B-5094-421B-A719-277427AEA8C1",
      "trading_item_id": 2609173,
      "name": "Enbridge",
      "slug": "enbridge",
      "exchange_symbol": "TSX",
      "ticker_symbol": "ENB",
      "unique_symbol": "TSX:ENB",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/energy\/tsx-enb\/enbridge-shares",
      "primary_canonical_url": "\/stocks\/ca\/energy\/tsx-enb\/enbridge-shares",
      "is_searchable": true,
      "isin_symbol": "CA29250N1050",
      "score": {
        "data": {
          "value": 3,
          "income": 5,
          "health": 0,
          "past": 5,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 14,
          "sentence": "Solid track record established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1949,
          "description": "Enbridge Inc., together with its subsidiaries, operates as an energy infrastructure company.",
          "logo_url": "\/api\/company\/image\/TSX:ENB.PRD\/logo",
          "share_price": 48.57,
          "market_cap": 103239729796.0,
          "pe": 17.681063999999999,
          "pb": 1.8895919999999999,
          "price_to_sales": 2.3652259999999998,
          // @ts-ignore
          "return_1d": 0.0043420000000000004,
          "return_7d": 0.030335000000000001,
          "return_1yr_abs": -0.074505000000000002,
          "price_target": 52.133330000000001,
          "growth_3y": 0.093067999999999998,
          "net_income_growth_annual": 0.093067999999999998,
          "revenue_growth_annual": 0.054545999999999997,
          "dividend_yield": 0.075355000000000005,
          "primary_industry": {
            "id": 1010000,
            "name": "Energy"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/280420-main-thumb\/1585186700840",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/280420-main-header\/1585186603174"
        }
      }
    },
    {
      "id": 515275,
      "company_id": "C4E1D793-D87B-4275-BA3A-1D399ED55C1E",
      "trading_item_id": 2657893,
      "name": "Thomson Reuters",
      "slug": "thomson-reuters",
      "exchange_symbol": "TSX",
      "ticker_symbol": "TRI",
      "unique_symbol": "TSX:TRI",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/commercial-services\/tsx-tri\/thomson-reuters-shares",
      "primary_canonical_url": "\/stocks\/ca\/commercial-services\/tsx-tri\/thomson-reuters-shares",
      "is_searchable": true,
      "isin_symbol": "CA8849038085",
      "score": {
        "data": {
          "value": 2,
          "income": 3,
          "health": 4,
          "past": 6,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Outstanding track record with adequate balance sheet."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1851,
          "description": "Thomson Reuters Corporation engages in the provision of business information services in the Americas, Europe, the Middle East, Africa, and the Asia Pacific.",
          "logo_url": "\/api\/company\/image\/TSX:TRI\/logo",
          "share_price": 213.43000000000001,
          "market_cap": 96334484059.0,
          "pe": 27.053910999999999,
          "pb": 6.5226749999999996,
          "price_to_sales": 10.516541,
          // @ts-ignore
          "return_1d": 0.0088389999999999996,
          "return_7d": -0.0082249999999999997,
          "return_1yr_abs": 0.24012900000000001,
          "price_target": 205.27735899999999,
          "growth_3y": -0.096918000000000004,
          "net_income_growth_annual": -0.096918000000000004,
          "revenue_growth_annual": 0.064042000000000002,
          "dividend_yield": 0.013644999999999999,
          "primary_industry": {
            "id": 3100000,
            "name": "Commercial Services"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/9612012-choice2-main-thumb\/1585186565655",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/9612012-choice2-main-header\/1585186803878"
        }
      }
    },
    {
      "id": 19053,
      "company_id": "39986DEE-9C77-44CA-AEFF-25B35E0405C3",
      "trading_item_id": 2592992,
      "name": "Bank of Montreal",
      "slug": "bank-of-montreal",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BMO",
      "unique_symbol": "TSX:BMO",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-bmo\/bank-of-montreal-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-bmo\/bank-of-montreal-shares",
      "is_searchable": true,
      "isin_symbol": "CA0636711016",
      "score": {
        "data": {
          "value": 2,
          "income": 5,
          "health": 5,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 16,
          "sentence": "Excellent balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1817,
          "description": "Bank of Montreal provides diversified financial services primarily in North America.",
          "logo_url": "\/api\/company\/image\/TSX:BMO\/logo",
          "share_price": 127.33,
          "market_cap": 92362029309.0,
          "pe": 17.799582000000001,
          "pb": 1.2489790000000001,
          "price_to_sales": 2.96184,
          // @ts-ignore
          "return_1d": 0.0033089999999999999,
          "return_7d": 0.026606000000000001,
          "return_1yr_abs": 0.064365000000000006,
          "price_target": 132.495,
          "growth_3y": 0.13652,
          "net_income_growth_annual": 0.13652,
          "revenue_growth_annual": 0.044590999999999999,
          "dividend_yield": 0.047435999999999999,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/19053-main-thumb\/1585186545969",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/19053-main-header\/1585186583965"
        }
      }
    },
    {
      "id": 364332,
      "company_id": "0CB6FFFA-D576-422E-8652-18EBC60E15C3",
      "trading_item_id": 24791410,
      "name": "Brookfield",
      "slug": "brookfield",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BN",
      "unique_symbol": "TSX:BN",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/diversified-financials\/tsx-bn\/brookfield-shares",
      "primary_canonical_url": "\/stocks\/ca\/diversified-financials\/tsx-bn\/brookfield-shares",
      "is_searchable": true,
      "isin_symbol": "CA11271J1075",
      "score": {
        "data": {
          "value": 0,
          "income": 0,
          "health": 0,
          "past": 1,
          "future": 0,
          "management": 0,
          "misc": 0,
          "total": 1,
          "sentence": "Poor track record with weak fundamentals."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1997,
          "description": "Brookfield Corporation is an alternative asset manager and REIT\/Real Estate Investment Manager firm focuses on real estate, renewable power, infrastructure and venture capital and private equity assets.",
          "logo_url": "\/api\/company\/image\/BOVESPA:B1AM34\/logo",
          "share_price": 56.719999999999999,
          "market_cap": 88551634721.0,
          "pe": 68.129661999999996,
          "pb": 1.5759700000000001,
          // @ts-ignore
          "price_to_sales": null,
          // @ts-ignore
          "return_1d": 0.0085349999999999992,
          "return_7d": 0.010511,
          "return_1yr_abs": 0.42119800000000002,
          "price_target": 66.430736999999993,
          "growth_3y": null,
          "net_income_growth_annual": null,
          "revenue_growth_annual": null,
          "dividend_yield": 0.007607,
          "primary_industry": {
            "id": 7100000,
            "name": "Diversified Financials"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/7131000-choice1-main-thumb\/1585186655004",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/7131000-choice2-main-header\/1585186813996"
        }
      }
    },
    {
      "id": 873647,
      "company_id": "FC0C7962-B9C8-4C2C-83BB-2552C3628829",
      "trading_item_id": 2593034,
      "name": "Bank of Nova Scotia",
      "slug": "bank-of-nova-scotia",
      "exchange_symbol": "TSX",
      "ticker_symbol": "BNS",
      "unique_symbol": "TSX:BNS",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/banks\/tsx-bns\/bank-of-nova-scotia-shares",
      "primary_canonical_url": "\/stocks\/ca\/banks\/tsx-bns\/bank-of-nova-scotia-shares",
      "is_searchable": true,
      "isin_symbol": "CA0641491075",
      "score": {
        "data": {
          "value": 4,
          "income": 5,
          "health": 6,
          "past": 2,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 19,
          "sentence": "Flawless balance sheet established dividend payer."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1832,
          "description": "The Bank of Nova Scotia provides various banking products and services in Canada, the United States, Mexico, Peru, Chile, Colombia, the Caribbean and Central America, and internationally.",
          "logo_url": "\/api\/company\/image\/NYSE:BNS\/logo",
          "share_price": 67.329999999999998,
          "market_cap": 82286214890.0,
          "pe": 11.064437,
          "pb": 1.1759040000000001,
          "price_to_sales": 2.7989459999999999,
          // @ts-ignore
          "return_1d": -0.0045830000000000003,
          "return_7d": 0.010050999999999999,
          "return_1yr_abs": 0.023875,
          "price_target": 67.35154,
          "growth_3y": 0.068156999999999995,
          "net_income_growth_annual": 0.068156999999999995,
          "revenue_growth_annual": 0.085845000000000005,
          "dividend_yield": 0.062973000000000001,
          "primary_industry": {
            "id": 7010000,
            "name": "Banks"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "CAD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "CA$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/company-cover\/873647-main-thumb\/1585186651037",
          "main_header": "https:\/\/images.simplywall.st\/asset\/company-cover\/873647-main-header\/1585187501096"
        }
      }
    },
    {
      "id": 105057,
      "company_id": "C7251DC1-43E4-4B4D-943D-EC40FF5F4ADC",
      "trading_item_id": 27273763,
      "name": "Constellation Software",
      "slug": "constellation-software",
      "exchange_symbol": "TSX",
      "ticker_symbol": "CSU",
      "unique_symbol": "TSX:CSU",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/software\/tsx-csu\/constellation-software-shares",
      "primary_canonical_url": "\/stocks\/ca\/software\/tsx-csu\/constellation-software-shares",
      "is_searchable": true,
      "isin_symbol": "CA21037X1006",
      "score": {
        "data": {
          "value": 1,
          "income": 0,
          "health": 2,
          "past": 3,
          "future": 2,
          "management": 0,
          "misc": 0,
          "total": 8,
          "sentence": "Acceptable track record with limited growth."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1995,
          "description": "Constellation Software Inc., together with its subsidiaries, acquires, builds, and manages vertical market software businesses in Canada, the United States, Europe, and internationally.",
          "logo_url": "\/api\/company\/image\/TSX:CSU\/logo",
          "share_price": 3794.9899999999998,
          "market_cap": 80421644434.0,
          "pe": 105.570162,
          "pb": 31.794851999999999,
          "price_to_sales": 7.0966259999999997,
          // @ts-ignore
          "return_1d": 0.00030299999999999999,
          "return_7d": 0.00067500000000000004,
          "return_1yr_abs": 0.64285300000000001,
          "price_target": 4104.6784589999997,
          "growth_3y": 0.104531,
          "net_income_growth_annual": 0.104531,
          "revenue_growth_annual": 0.18077799999999999,
          "dividend_yield": 0.001421,
          "primary_industry": {
            "id": 8010000,
            "name": "Software"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/8041000-choice1-main-thumb\/1585186568758",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/8041000-choice1-main-header\/1585186668959"
        }
      }
    },
    {
      "id": 876162,
      "company_id": "4613ACB9-DFB9-44E5-8CE6-9DEF9E6FB683",
      "trading_item_id": 1791883166,
      "name": "Alimentation Couche-Tard",
      "slug": "alimentation-couche-tard",
      "exchange_symbol": "TSX",
      "ticker_symbol": "ATD",
      "unique_symbol": "TSX:ATD",
      "primary_ticker": true,
      "last_updated": 1710115200000,
      "canonical_url": "\/stocks\/ca\/consumer-retailing\/tsx-atd\/alimentation-couche-tard-shares",
      "primary_canonical_url": "\/stocks\/ca\/consumer-retailing\/tsx-atd\/alimentation-couche-tard-shares",
      "is_searchable": true,
      "isin_symbol": "CA01626P1484",
      "score": {
        "data": {
          "value": 3,
          "income": 0,
          "health": 5,
          "past": 4,
          "future": 1,
          "management": 0,
          "misc": 0,
          "total": 13,
          "sentence": "Excellent balance sheet with proven track record."
        }
      },
      "grid": {
        "data": {
          "year_founded": 1980,
          "description": "Alimentation Couche-Tard Inc. operates and licenses convenience stores in North America, Europe, and Asia.",
          "logo_url": "\/api\/company\/image\/TSX:ATD\/logo",
          "share_price": 82.530000000000001,
          "market_cap": 79373587413.0,
          "pe": 19.229704999999999,
          "pb": 4.5059870000000002,
          // @ts-ignore
          "price_to_sales": null,
          // @ts-ignore
          "return_1d": -0.00036299999999999999,
          "return_7d": -0.012208,
          "return_1yr_abs": 0.32005800000000001,
          "price_target": 85.749371999999994,
          "growth_3y": 0.0053340000000000002,
          "net_income_growth_annual": 0.0053340000000000002,
          "revenue_growth_annual": 0.067588999999999996,
          "dividend_yield": 0.0084110000000000001,
          "primary_industry": {
            "id": 5010000,
            "name": "Consumer Retailing"
          },
          "currency_info": {
            "reporting_unit_abs": 1,
            "reporting_currency_iso": "USD",
            "trading_item_currency_iso": "CAD",
            "reporting_unit_text": "Millions",
            "reporting_unit_text_abs": "Absolute",
            "primary_trading_item_currency_symbol": "CA$",
            "reporting_currency_symbol": "$",
            "reporting_unit": 1000000,
            "trading_item_currency_symbol": "CA$",
            "primary_trading_item_currency_iso": "CAD"
          },
          "main_thumb": "https:\/\/images.simplywall.st\/asset\/industry\/5023000-choice1-main-thumb\/1585186797358",
          "main_header": "https:\/\/images.simplywall.st\/asset\/industry\/5023000-choice1-main-header\/1585186815097"
        }
      }
    }
  ],
  "meta": {
    "total_records": 3308,
    "real_total_records": 3308,
    "state": "read",
    "noResultIfLimit": false,
    "pe": 13.670696123999999,
    "return_1yr_abs": 0.085763479939999998,
    "return_7d": 0.0101393957
  }
}

const List = () => {
  const data = API_MOCK.data
  return (
    <StyledList>
      <div className="row listContainer">
        {data.map((stock: Stock) => (<Tile stock={stock} />))}
      </div>
    </StyledList>
  )
}



export default List