export const COUNTRY_LIST = [
  { countryCode: 'gl', countryName: 'Global' },
  { countryCode: 'us', countryName: 'United States' },
  { countryCode: 'au', countryName: 'Australia' },
  { countryCode: 'gb', countryName: 'United Kingdom' },
  { countryCode: 'ca', countryName: 'Canada' },
  { countryCode: 'in', countryName: 'India' },
  { countryCode: 'cn', countryName: 'China' },
  { countryCode: 'ar', countryName: 'Argentina' },
  { countryCode: 'at', countryName: 'Austria' },
  { countryCode: 'bh', countryName: 'Bahrain' },
  { countryCode: 'bd', countryName: 'Bangladesh' },
  { countryCode: 'be', countryName: 'Belgium' },
  { countryCode: 'bm', countryName: 'Bermuda' },
  { countryCode: 'bw', countryName: 'Botswana' },
  { countryCode: 'br', countryName: 'Brazil' },
  { countryCode: 'bg', countryName: 'Bulgaria' },
  { countryCode: 'cl', countryName: 'Chile' },
  { countryCode: 'co', countryName: 'Colombia' },
  { countryCode: 'hr', countryName: 'Croatia' },
  { countryCode: 'cy', countryName: 'Cyprus' },
  { countryCode: 'cz', countryName: 'Czech Republic' },
  { countryCode: 'dk', countryName: 'Denmark' },
  { countryCode: 'eg', countryName: 'Egypt' },
  { countryCode: 'ee', countryName: 'Estonia' },
  { countryCode: 'fi', countryName: 'Finland' },
  { countryCode: 'fr', countryName: 'France' },
  { countryCode: 'de', countryName: 'Germany' },
  { countryCode: 'gh', countryName: 'Ghana' },
  { countryCode: 'gr', countryName: 'Greece' },
  { countryCode: 'hk', countryName: 'Hong Kong' },
  { countryCode: 'hu', countryName: 'Hungary' },
  { countryCode: 'is', countryName: 'Iceland' },
  { countryCode: 'id', countryName: 'Indonesia' },
  { countryCode: 'ie', countryName: 'Ireland' },
  { countryCode: 'il', countryName: 'Israel' },
  { countryCode: 'it', countryName: 'Italy' },
  { countryCode: 'ci', countryName: 'Ivory Coast' },
  { countryCode: 'jm', countryName: 'Jamaica' },
  { countryCode: 'jp', countryName: 'Japan' },
  { countryCode: 'jo', countryName: 'Jordan' },
  { countryCode: 'ke', countryName: 'Kenya' },
  { countryCode: 'kw', countryName: 'Kuwait' },
  { countryCode: 'lv', countryName: 'Latvia' },
  { countryCode: 'lt', countryName: 'Lithuania' },
  { countryCode: 'lu', countryName: 'Luxembourg' },
  { countryCode: 'mw', countryName: 'Malawi' },
  { countryCode: 'my', countryName: 'Malaysia' },
  { countryCode: 'mt', countryName: 'Malta' },
  { countryCode: 'mu', countryName: 'Mauritius' },
  { countryCode: 'mx', countryName: 'Mexico' },
  { countryCode: 'ma', countryName: 'Morocco' },
  { countryCode: 'na', countryName: 'Namibia' },
  { countryCode: 'nl', countryName: 'Netherlands' },
  { countryCode: 'nz', countryName: 'New Zealand' },
  { countryCode: 'ng', countryName: 'Nigeria' },
  { countryCode: 'no', countryName: 'Norway' },
  { countryCode: 'om', countryName: 'Oman' },
  { countryCode: 'pk', countryName: 'Pakistan' },
  { countryCode: 'ps', countryName: 'Palestinian Authority' },
  { countryCode: 'pe', countryName: 'Peru' },
  { countryCode: 'ph', countryName: 'Philippines' },
  { countryCode: 'pl', countryName: 'Poland' },
  { countryCode: 'pt', countryName: 'Portugal' },
  { countryCode: 'qa', countryName: 'Qatar' },
  { countryCode: 'ro', countryName: 'Romania' },
  { countryCode: 'ru', countryName: 'Russia' },
  { countryCode: 'sa', countryName: 'Saudi Arabia' },
  { countryCode: 'rs', countryName: 'Serbia' },
  { countryCode: 'sg', countryName: 'Singapore' },
  { countryCode: 'sk', countryName: 'Slovakia' },
  { countryCode: 'si', countryName: 'Slovenia' },
  { countryCode: 'za', countryName: 'South Africa' },
  { countryCode: 'kr', countryName: 'South Korea' },
  { countryCode: 'es', countryName: 'Spain' },
  { countryCode: 'lk', countryName: 'Sri Lanka' },
  { countryCode: 'se', countryName: 'Sweden' },
  { countryCode: 'ch', countryName: 'Switzerland' },
  { countryCode: 'tw', countryName: 'Taiwan' },
  { countryCode: 'tz', countryName: 'Tanzania' },
  { countryCode: 'th', countryName: 'Thailand' },
  { countryCode: 'tt', countryName: 'Trinidad &amp; Tobago' },
  { countryCode: 'tn', countryName: 'Tunisia' },
  { countryCode: 'tr', countryName: 'Turkey' },
  { countryCode: 'ug', countryName: 'Uganda' },
  { countryCode: 'ua', countryName: 'Ukraine' },
  { countryCode: 'ae', countryName: 'United Arab Emirates' },
  { countryCode: 've', countryName: 'Venezuela' },
  { countryCode: 'vn', countryName: 'Vietnam' },
  { countryCode: 'zm', countryName: 'Zambia' },
  { countryCode: 'zw', countryName: 'Zimbabwe' }
]

export const ORDER_BY_LIST = [
  { field: 'market_cap', direction: 'desc', label: 'Market Cap - High to low' },
  { field: 'market_cap', direction: 'asc', label: 'Market Cap - Low to high' }
]

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English - Australia' },
  { code: 'br', name: 'Português - Brazil' }
]

export const STOCK_PER_PAGE = 20

export const FILTER_BY_COUNTRY = "FILTER_BY_COUNTRY";
export const ORDER_BY = "ORDER_BY";
export const SELECT_LANGUAGE = "SELECT_LANGUAGE";
export const VALUE = "VALUE";
export const DIVIDEND = "DIVIDEND";
export const INCOME = "INCOME";
export const PAST = "PAST";
export const FUTURE = "FUTURE";
export const HEALTH = "HEALTH";
