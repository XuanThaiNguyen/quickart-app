const COUNTRIES = [
  {
    name: 'Afghanistan',
    phoneCode: '+93',
    alpha2code: 'AF',
    alpha3code: 'AFG',
    displayName: {
      en: 'Afghanistan',
      vi: 'Afghanistan',
    },
  },
  {
    name: 'Albania',
    phoneCode: '+355',
    alpha2code: 'AL',
    alpha3code: 'ALB',
    displayName: {
      en: 'Albania',
      vi: 'Albania',
    },
  },
  {
    name: 'Algeria',
    phoneCode: '+213',
    alpha2code: 'DZ',
    alpha3code: 'DZA',
    displayName: {
      en: 'Algeria',
      vi: 'Algeria',
    },
  },
  // {
  //   name: 'American Samoa',
  //   phoneCode: '+1',
  //   alpha2code: 'AS',
  //   alpha3code: 'ASM',
  //   displayName: {
  //       en: 'American Samoa',
  //       vi: 'American Samoa',
  //   },
  // },
  // {
  //   name: 'Andorra',
  //   phoneCode: '+376',
  //   alpha2code: 'AD',
  //   alpha3code: 'AND',
  //   displayName: {
  //       en: 'Andorra',
  //       vi: 'Andorra',
  //   },
  // },
  {
    name: 'Angola',
    phoneCode: '+244',
    alpha2code: 'AO',
    alpha3code: 'AGO',
    displayName: {
      en: 'Angola',
      vi: 'Angola',
    },
  },
  // {
  //   name: 'Anguilla',
  //   phoneCode: '+1',
  //   alpha2code: 'AI',
  //   alpha3code: 'AIA',
  //   displayName: {
  //       en: 'Anguilla',
  //       vi: 'Anguilla',
  //   },
  // },
  // {
  //   name: 'Antigua and Barbuda',
  //   phoneCode: '+1',
  //   alpha2code: 'AG',
  //   alpha3code: 'ATG',
  //   displayName: {
  //       en: 'Antigua and Barbuda',
  //       vi: 'Antigua and Barbuda',
  //   },
  // },
  {
    name: 'Argentina',
    phoneCode: '+54',
    alpha2code: 'AR',
    alpha3code: 'ARG',
    displayName: {
      en: 'Argentina',
      vi: 'Argentina',
    },
  },
  {
    name: 'Armenia',
    phoneCode: '+374',
    alpha2code: 'AM',
    alpha3code: 'ARM',
    displayName: {
      en: 'Armenia',
      vi: 'Armenia',
    },
  },
  // {
  //   name: 'Aruba',
  //   phoneCode: '+297',
  //   alpha2code: 'AW',
  //   alpha3code: 'ABW',
  //   displayName: {
  //       en: 'Aruba',
  //       vi: 'Aruba',
  //   },
  // },
  {
    name: 'Australia',
    phoneCode: '+61',
    alpha2code: 'AU',
    alpha3code: 'AUS',
    displayName: {
      en: 'Australia',
      vi: 'Úc',
    },
  },
  {
    name: 'Austria',
    phoneCode: '+43',
    alpha2code: 'AT',
    alpha3code: 'AUT',
    displayName: {
      en: 'Austria',
      vi: 'Áo',
    },
  },
  {
    name: 'Azerbaijan',
    phoneCode: '+994',
    alpha2code: 'AZ',
    alpha3code: 'AZE',
    displayName: {
      en: 'Azerbaijan',
      vi: 'Azerbaijan',
    },
  },
  // {
  //   name: 'Bahrain',
  //   phoneCode: '+973',
  //   alpha2code: 'BH',
  //   alpha3code: 'BHR',
  //   displayName: {
  //       en: 'Bahrain',
  //       vi: 'Bahrain',
  //   },
  // },
  {
    name: 'Bangladesh',
    phoneCode: '+880',
    alpha2code: 'BD',
    alpha3code: 'BGD',
    displayName: {
      en: 'Bangladesh',
      vi: 'Bangladesh',
    },
  },
  // {
  //   name: 'Barbados',
  //   phoneCode: '+1',
  //   alpha2code: 'BB',
  //   alpha3code: 'BRB',
  //   displayName: {
  //       en: 'Barbados',
  //       vi: 'Barbados',
  //   },
  // },
  {
    name: 'Belarus',
    phoneCode: '+375',
    alpha2code: 'BY',
    alpha3code: 'BLR',
    displayName: {
      en: 'Belarus',
      vi: 'Belarus',
    },
  },
  {
    name: 'Belgium',
    phoneCode: '+32',
    alpha2code: 'BE',
    alpha3code: 'BEL',
    displayName: {
      en: 'Belgium',
      vi: 'Belgium',
    },
  },
  {
    name: 'Belize',
    phoneCode: '+501',
    alpha2code: 'BZ',
    alpha3code: 'BLZ',
    displayName: {
      en: 'Belize',
      vi: 'Belize',
    },
  },
  {
    name: 'Benin',
    phoneCode: '+229',
    alpha2code: 'BJ',
    alpha3code: 'BEN',
    displayName: {
      en: 'Benin',
      vi: 'Benin',
    },
  },
  // {
  //   name: 'Bermuda',
  //   phoneCode: '+1',
  //   alpha2code: 'BM',
  //   alpha3code: 'BMU',
  //   displayName: {
  //       en: 'Bermuda',
  //       vi: 'Bermuda',
  //   },
  // },
  {
    name: 'Bhutan',
    phoneCode: '+975',
    alpha2code: 'BT',
    alpha3code: 'BTN',
    displayName: {
      en: 'Bhutan',
      vi: 'Bhutan',
    },
  },
  {
    name: 'Bolivia',
    phoneCode: '+591',
    alpha2code: 'BO',
    alpha3code: 'BOL',
    displayName: {
      en: 'Bolivia',
      vi: 'Bolivia',
    },
  },
  // {
  //   name: 'Bonaire, Sint Eustatius and Saba',
  //   phoneCode: '+599',
  //   alpha2code: 'BQ',
  //   alpha3code: 'BES',
  //   displayName: {
  //       en: 'Bonaire, Sint Eustatius and Saba',
  //       vi: 'Bonaire, Sint Eustatius and Saba',
  //   },
  // },
  {
    name: 'Bosnia and Herzegovina',
    phoneCode: '+387',
    alpha2code: 'BA',
    alpha3code: 'BIH',
    displayName: {
      en: 'Bosnia and Herzegovina',
      vi: 'Bosnia and Herzegovina',
    },
  },
  {
    name: 'Botswana',
    phoneCode: '+267',
    alpha2code: 'BW',
    alpha3code: 'BWA',
    displayName: {
      en: 'Botswana',
      vi: 'Botswana',
    },
  },
  {
    name: 'Brazil',
    phoneCode: '+55',
    alpha2code: 'BR',
    alpha3code: 'BRA',
    displayName: {
      en: 'Brazil',
      vi: 'Brazil',
    },
  },
  // {
  //   name: 'British Indian Ocean Territory',
  //   phoneCode: '+246',
  //   alpha2code: 'IO',
  //   alpha3code: 'IOT',
  //   displayName: {
  //       en: 'British Indian Ocean Territory',
  //       vi: 'British Indian Ocean Territory',
  //   },
  // },
  // {
  //   name: 'British Virgin Islands',
  //   phoneCode: '+1',
  //   alpha2code: 'VG',
  //   alpha3code: 'VGB',
  //   displayName: {
  //       en: 'British Virgin Islands',
  //       vi: 'British Virgin Islands',
  //   },
  // },
  {
    name: 'Brunei Darussalam',
    phoneCode: '+673',
    alpha2code: 'BN',
    alpha3code: 'BRN',
    displayName: {
      en: 'Brunei Darussalam',
      vi: 'Brunei Darussalam',
    },
  },
  {
    name: 'Bulgaria',
    phoneCode: '+359',
    alpha2code: 'BG',
    alpha3code: 'BGR',
    displayName: {
      en: 'Bulgaria',
      vi: 'Bulgaria',
    },
  },
  {
    name: 'Burkina Faso', // / cho nay
    phoneCode: '+226',
    alpha2code: 'BF',
    alpha3code: 'BFA',
    displayName: {
      en: 'Burkina Faso',
      vi: 'Burkina Faso',
    },
  },
  {
    name: 'Myanmar',
    phoneCode: '+95',
    alpha2code: 'MM',
    alpha3code: 'MMR',
    displayName: {
      en: 'Myanmar',
      vi: 'Myanmar',
    },
  },
  {
    name: 'Burundi',
    phoneCode: '+257',
    alpha2code: 'BI',
    alpha3code: 'BDI',
    displayName: {
      en: 'Burundi',
      vi: 'Burundi',
    },
  },
  {
    name: 'Cambodia',
    phoneCode: '+855',
    alpha2code: 'KH',
    alpha3code: 'KHM',
    displayName: {
      en: 'Cambodia',
      vi: 'Cambodia',
    },
  },
  {
    name: 'Cameroon',
    phoneCode: '+237',
    alpha2code: 'CM',
    alpha3code: 'CMR',
    displayName: {
      en: 'Cameroon',
      vi: 'Cameroon',
    },
  },
  {
    name: 'Canada',
    phoneCode: '+1',
    alpha2code: 'CA',
    alpha3code: 'CAN',
    displayName: {
      en: 'Canada',
      vi: 'Canada',
    },
  },
  // {
  //   name: 'Cabo Verde',
  //   phoneCode: '+238',
  //   alpha2code: 'CV',
  //   alpha3code: 'CPV',
  //   displayName: {
  //       en: 'Cabo Verde',
  //       vi: 'Cabo Verde',
  //   },
  // },
  // {
  //   name: 'Cayman Islands',
  //   phoneCode: '+1',
  //   alpha2code: 'KY',
  //   alpha3code: 'CYM',
  //   displayName: {
  //       en: 'Cayman Islands',
  //       vi: 'Cayman Islands',
  //   },
  // },
  {
    name: 'Central African Republic',
    phoneCode: '+236',
    alpha2code: 'CF',
    alpha3code: 'CAF',
    displayName: {
      en: 'Central African Republic',
      vi: 'Central African Republic',
    },
  },
  {
    name: 'Chad',
    phoneCode: '+235',
    alpha2code: 'ID',
    alpha3code: 'TCD',
    displayName: {
      en: 'Chad',
      vi: 'Chad',
    },
  },
  {
    name: 'Chile',
    phoneCode: '+56',
    alpha2code: 'CL',
    alpha3code: 'CHL',
    displayName: {
      en: 'Chile',
      vi: 'Chile',
    },
  },
  {
    name: 'China',
    phoneCode: '+86',
    alpha2code: 'CN',
    alpha3code: 'CHN',
    displayName: {
      en: 'China',
      vi: 'Trung Quốc',
    },
  },
  {
    name: 'Colombia',
    phoneCode: '+57',
    alpha2code: 'CO',
    alpha3code: 'COL',
    displayName: {
      en: 'Colombia',
      vi: 'Colombia',
    },
  },
  // {
  //   name: 'Comoros',
  //   phoneCode: '+269',
  //   alpha2code: 'KM',
  //   alpha3code: 'COM',
  //   displayName: {
  //       en: 'Comoros',
  //       vi: 'Comoros',
  //   },
  // },
  // {
  //   name: 'Cook Islands',
  //   phoneCode: '+682',
  //   alpha2code: 'CK',
  //   alpha3code: 'COK',
  //   displayName: {
  //       en: 'Cook Islands',
  //       vi: 'Cook Islands',
  //   },
  // },
  {
    name: 'Costa Rica',
    phoneCode: '+506',
    alpha2code: 'CR',
    alpha3code: 'CRI',
    displayName: {
      en: 'Costa Rica',
      vi: 'Costa Rica',
    },
  },
  {
    name: "Côte d'Ivoire",
    phoneCode: '+225',
    alpha2code: 'CI',
    alpha3code: 'CIV',
    displayName: {
      en: "Côte d'Ivoire",
      vi: "Côte d'Ivoire",
    },
  },
  {
    name: 'Croatia',
    phoneCode: '+385',
    alpha2code: 'HR',
    alpha3code: 'HRV',
    displayName: {
      en: 'Croatia',
      vi: 'Croatia',
    },
  },
  {
    name: 'Cuba',
    phoneCode: '+53',
    alpha2code: 'CU',
    alpha3code: 'CUB',
    displayName: {
      en: 'Cuba',
      vi: 'Cuba',
    },
  },
  // {
  //   name: 'Curaçao',
  //   phoneCode: '+599',
  //   alpha2code: 'CW',
  //   alpha3code: 'CUW',
  //   displayName: {
  //       en: 'Curaçao',
  //       vi: 'Curaçao',
  //   },
  // },
  {
    name: 'Cyprus',
    phoneCode: '+357',
    alpha2code: 'CY',
    alpha3code: 'CYP',
    displayName: {
      en: 'Cyprus',
      vi: 'Cyprus',
    },
  },
  {
    name: 'Czechia',
    phoneCode: '+420',
    alpha2code: 'CZ',
    alpha3code: 'CZE',
    displayName: {
      en: 'Czechia',
      vi: 'Czechia',
    },
  },
  {
    name: 'Denmark',
    phoneCode: '+45',
    alpha2code: 'DK',
    alpha3code: 'DNK',
    displayName: {
      en: 'Denmark',
      vi: 'Denmark',
    },
  },
  {
    name: 'Djibouti',
    phoneCode: '+253',
    alpha2code: 'DJ',
    alpha3code: 'DJI',
    displayName: {
      en: 'Djibouti',
      vi: 'Djibouti',
    },
  },
  // {
  //   name: 'Dominica',
  //   phoneCode: '+1',
  //   alpha2code: 'DM',
  //   alpha3code: 'DMA',
  //   displayName: {
  //       en: 'Dominica',
  //       vi: 'Dominica',
  //   },
  // },
  {
    name: 'Dominican Republic',
    phoneCode: '+1',
    alpha2code: 'DO',
    alpha3code: 'DOM',
    displayName: {
      en: 'Dominican Republic',
      vi: 'Dominican Republic',
    },
  },
  {
    name: 'Ecuador',
    phoneCode: '+593',
    alpha2code: 'EC',
    alpha3code: 'ECU',
    displayName: {
      en: 'Ecuador',
      vi: 'Ecuador',
    },
  },
  {
    name: 'Egypt',
    phoneCode: '+20',
    alpha2code: 'EG',
    alpha3code: 'EGY',
    displayName: {
      en: 'Egypt',
      vi: 'Egypt',
    },
  },
  {
    name: 'El Salvador',
    phoneCode: '+503',
    alpha2code: 'SV',
    alpha3code: 'SLV',
    displayName: {
      en: 'El Salvador',
      vi: 'El Salvador',
    },
  },
  {
    name: 'Equatorial Guinea',
    phoneCode: '+240',
    alpha2code: 'GQ',
    alpha3code: 'GNQ',
    displayName: {
      en: 'Equatorial Guinea',
      vi: 'Equatorial Guinea',
    },
  },
  {
    name: 'Eritrea',
    phoneCode: '+291',
    alpha2code: 'ER',
    alpha3code: 'ERI',
    displayName: {
      en: 'Eritrea',
      vi: 'Eritrea',
    },
  },
  {
    name: 'Estonia',
    phoneCode: '+372',
    alpha2code: 'EE',
    alpha3code: 'EST',
    displayName: {
      en: 'Estonia',
      vi: 'Estonia',
    },
  },
  {
    name: 'Ethiopia',
    phoneCode: '+251',
    alpha2code: 'ET',
    alpha3code: 'ETH',
    displayName: {
      en: 'Ethiopia',
      vi: 'Ethiopia',
    },
  },
  {
    name: 'Falkland Islands',
    phoneCode: '+500',
    alpha2code: 'FK',
    alpha3code: 'FLK',
    displayName: {
      en: 'Falkland Islands',
      vi: 'Falkland Islands',
    },
  },
  // {
  //   name: 'Faroe Islands',
  //   phoneCode: '+298',
  //   alpha2code: 'FO',
  //   alpha3code: 'FRO',
  //   displayName: {
  //       en: 'Faroe Islands',
  //       vi: 'Faroe Islands',
  //   },
  // },
  // {
  //   name: 'Federated States of Micronesia',
  //   phoneCode: '+691',
  //   alpha2code: 'FM',
  //   alpha3code: 'FSM',
  //   displayName: {
  //       en: 'Federated States of Micronesia',
  //       vi: 'Federated States of Micronesia',
  //   },
  // },
  {
    name: 'Fiji',
    phoneCode: '+679',
    alpha2code: 'FJ',
    alpha3code: 'FJI',
    displayName: {
      en: 'Fiji',
      vi: 'Fiji',
    },
  },
  {
    name: 'Finland',
    phoneCode: '+358',
    alpha2code: 'FI',
    alpha3code: 'FIN',
    displayName: {
      en: 'Finland',
      vi: 'Finland',
    },
  },
  {
    name: 'France',
    phoneCode: '+33',
    alpha2code: 'FR',
    alpha3code: 'FRA',
    displayName: {
      en: 'France',
      vi: 'Pháp',
    },
  },
  // {
  //   name: 'French Guiana',
  //   phoneCode: '+594',
  //   alpha2code: 'GF',
  //   alpha3code: 'GUF',
  //   displayName: {
  //       en: 'French Guiana',
  //       vi: 'French Guiana',
  //   },
  // },
  // {
  //   name: 'French Polynesia',
  //   phoneCode: '+689',
  //   alpha2code: 'PF',
  //   alpha3code: 'PYF',
  //   displayName: {
  //       en: 'French Polynesia',
  //       vi: 'French Polynesia',
  //   },
  // },
  {
    name: 'Gabon',
    phoneCode: '+241',
    alpha2code: 'GA',
    alpha3code: 'GAB',
    displayName: {
      en: 'Gabon',
      vi: 'Gabon',
    },
  },
  {
    name: 'Georgia',
    phoneCode: '+995',
    alpha2code: 'GE',
    alpha3code: 'GEO',
    displayName: {
      en: 'Georgia',
      vi: 'Georgia',
    },
  },
  {
    name: 'Germany',
    phoneCode: '+49',
    alpha2code: 'DE',
    alpha3code: 'DEU',
    displayName: {
      en: 'Germany',
      vi: 'Đức',
    },
  },
  {
    name: 'Ghana',
    phoneCode: '+233',
    alpha2code: 'GH',
    alpha3code: 'GHA',
    displayName: {
      en: 'Ghana',
      vi: 'Ghana',
    },
  },
  // {
  //   name: 'Gibraltar',
  //   phoneCode: '+350',
  //   alpha2code: 'GI',
  //   alpha3code: 'GIB',
  //   displayName: {
  //       en: 'Gibraltar',
  //       vi: 'Gibraltar',
  //   },
  // },
  {
    name: 'Greece',
    phoneCode: '+30',
    alpha2code: 'GR',
    alpha3code: 'GRC',
    displayName: {
      en: 'Greece',
      vi: 'Greece',
    },
  },
  {
    name: 'Greenland',
    phoneCode: '+299',
    alpha2code: 'GL',
    alpha3code: 'GRL',
    displayName: {
      en: 'Greenland',
      vi: 'Greenland',
    },
  },
  // {
  //   name: 'Grenada',
  //   phoneCode: '+1',
  //   alpha2code: 'GD',
  //   alpha3code: 'GRD',
  //   displayName: {
  //       en: 'Grenada',
  //       vi: 'Grenada',
  //   },
  // },
  // {
  //   name: 'Guadeloupe',
  //   phoneCode: '+590',
  //   alpha2code: 'GP',
  //   alpha3code: 'GLP',
  //   displayName: {
  //       en: 'Guadeloupe',
  //       vi: 'Guadeloupe',
  //   },
  // },
  // {
  //   name: 'Guam',
  //   phoneCode: '+1',
  //   alpha2code: 'GU',
  //   alpha3code: 'GUM',
  //   displayName: {
  //       en: 'Guam',
  //       vi: 'Guam',
  //   },
  // },
  {
    name: 'Guatemala',
    phoneCode: '+502',
    alpha2code: 'GT',
    alpha3code: 'GTM',
    displayName: {
      en: 'Guatemala',
      vi: 'Guatemala',
    },
  },
  {
    name: 'Guinea',
    phoneCode: '+224',
    alpha2code: 'GN',
    alpha3code: 'GIN',
    displayName: {
      en: 'Guinea',
      vi: 'Guinea',
    },
  },
  {
    name: 'Guinea-Bissau',
    phoneCode: '+245',
    alpha2code: 'GW',
    alpha3code: 'GNB',
    displayName: {
      en: 'Guinea-Bissau',
      vi: 'Guinea-Bissau',
    },
  },
  {
    name: 'Guyana',
    phoneCode: '+592',
    alpha2code: 'GY',
    alpha3code: 'GUY',
    displayName: {
      en: 'Guyana',
      vi: 'Guyana',
    },
  },
  {
    name: 'Haiti',
    phoneCode: '+509',
    alpha2code: 'HT',
    alpha3code: 'HTI',
    displayName: {
      en: 'Haiti',
      vi: 'Haiti',
    },
  },
  {
    name: 'Honduras',
    phoneCode: '+504',
    alpha2code: 'HN',
    alpha3code: 'HND',
    displayName: {
      en: 'Honduras',
      vi: 'Honduras',
    },
  },
  // {
  //   name: 'Hong Kong',
  //   phoneCode: '+852',
  //   alpha2code: 'HK',
  //   alpha3code: 'HKG',
  //   displayName: {
  //       en: 'Hong Kong',
  //       vi: 'Hong Kong',
  //   },
  // },
  {
    name: 'Hungary',
    phoneCode: '+36',
    alpha2code: 'HU',
    alpha3code: 'HUN',
    displayName: {
      en: 'Hungary',
      vi: 'Hungary',
    },
  },
  {
    name: 'Iceland',
    phoneCode: '+354',
    alpha2code: 'IS',
    alpha3code: 'ISL',
    displayName: {
      en: 'Iceland',
      vi: 'Iceland',
    },
  },
  {
    name: 'India',
    phoneCode: '+91',
    alpha2code: 'IN',
    alpha3code: 'IND',
    displayName: {
      en: 'India',
      vi: 'Ấn Độ',
    },
  },
  {
    name: 'Indonesia',
    phoneCode: '+62',
    alpha2code: 'ID',
    alpha3code: 'IDN',
    displayName: {
      en: 'Indonesia',
      vi: 'Indonesia',
    },
  },
  {
    name: 'Iran',
    phoneCode: '+98',
    alpha2code: 'IR',
    alpha3code: 'IRN',
    displayName: {
      en: 'Iran',
      vi: 'Iran',
    },
  },
  {
    name: 'Iraq',
    phoneCode: '+964',
    alpha2code: 'IQ',
    alpha3code: 'IRQ',
    displayName: {
      en: 'Iraq',
      vi: 'Iraq',
    },
  },
  {
    name: 'Ireland',
    phoneCode: '+353',
    alpha2code: 'IE',
    alpha3code: 'IRL',
    displayName: {
      en: 'Ireland',
      vi: 'Ireland',
    },
  },
  {
    name: 'Israel',
    phoneCode: '+972',
    alpha2code: 'IL',
    alpha3code: 'ISR',
    displayName: {
      en: 'Israel',
      vi: 'Israel',
    },
  },
  {
    name: 'Italy',
    phoneCode: '+39',
    alpha2code: 'IT',
    alpha3code: 'ITA',
    displayName: {
      en: 'Italy',
      vi: 'Ý',
    },
  },
  {
    name: 'Jamaica',
    phoneCode: '+1',
    alpha2code: 'JM',
    alpha3code: 'JAM',
    displayName: {
      en: 'Jamaica',
      vi: 'Jamaica',
    },
  },
  {
    name: 'Japan',
    phoneCode: '+81',
    alpha2code: 'JP',
    alpha3code: 'JPN',
    displayName: {
      en: 'Japan',
      vi: 'Nhật Bản',
    },
  },
  {
    name: 'Jordan',
    phoneCode: '+962',
    alpha2code: 'JO',
    alpha3code: 'JOR',
    displayName: {
      en: 'Jordan',
      vi: 'Jordan',
    },
  },
  {
    name: 'Kazakhstan',
    phoneCode: '+7',
    alpha2code: 'KZ',
    alpha3code: 'KAZ',
    displayName: {
      en: 'Kazakhstan',
      vi: 'Kazakhstan',
    },
  },
  {
    name: 'Kenya',
    phoneCode: '+254',
    alpha2code: 'KE',
    alpha3code: 'KEN',
    displayName: {
      en: 'Kenya',
      vi: 'Kenya',
    },
  },
  // {
  //   name: 'Kiribati',
  //   phoneCode: '+686',
  //   alpha2code: 'KI',
  //   alpha3code: 'KIR',
  //   displayName: {
  //       en: 'Kiribati',
  //       vi: 'Kiribati',
  //   },
  // },
  {
    name: 'Kuwait',
    phoneCode: '+965',
    alpha2code: 'KW',
    alpha3code: 'KWT',
    displayName: {
      en: 'Kuwait',
      vi: 'Kuwait',
    },
  },
  {
    name: 'Kyrgyzstan',
    phoneCode: '+996',
    alpha2code: 'KG',
    alpha3code: 'KGZ',
    displayName: {
      en: 'Kyrgyzstan',
      vi: 'Kyrgyzstan',
    },
  },
  {
    name: 'Laos',
    phoneCode: '+856',
    alpha2code: 'LA',
    alpha3code: 'LAO',
    displayName: {
      en: 'Laos',
      vi: 'Lào',
    },
  },
  {
    name: 'Latvia',
    phoneCode: '+371',
    alpha2code: 'LV',
    alpha3code: 'LVA',
    displayName: {
      en: 'Latvia',
      vi: 'Latvia',
    },
  },
  {
    name: 'Lebanon',
    phoneCode: '+961',
    alpha2code: 'LB',
    alpha3code: 'LBN',
    displayName: {
      en: 'Lebanon',
      vi: 'Lebanon',
    },
  },
  {
    name: 'Lesotho',
    phoneCode: '+266',
    alpha2code: 'LS',
    alpha3code: 'LSO',
    displayName: {
      en: 'Lesotho',
      vi: 'Lesotho',
    },
  },
  {
    name: 'Liberia',
    phoneCode: '+231',
    alpha2code: 'LR',
    alpha3code: 'LBR',
    displayName: {
      en: 'Liberia',
      vi: 'Liberia',
    },
  },
  {
    name: 'Libya',
    phoneCode: '+218',
    alpha2code: 'LY',
    alpha3code: 'LBY',
    displayName: {
      en: 'Libya',
      vi: 'Libya',
    },
  },
  // {
  //   name: 'Liechtenstein',
  //   phoneCode: '+423',
  //   alpha2code: 'LI',
  //   alpha3code: 'LIE',
  //   displayName: {
  //       en: 'Liechtenstein',
  //       vi: 'Liechtenstein',
  //   },
  // },
  {
    name: 'Lithuania',
    phoneCode: '+370',
    alpha2code: 'LT',
    alpha3code: 'LTU',
    displayName: {
      en: 'Lithuania',
      vi: 'Lithuania',
    },
  },
  {
    name: 'Luxembourg',
    phoneCode: '+352',
    alpha2code: 'LU',
    alpha3code: 'LUX',
    displayName: {
      en: 'Luxembourg',
      vi: 'Luxembourg',
    },
  },
  // {
  //   name: 'Macao',
  //   phoneCode: '+853',
  //   alpha2code: 'MO',
  //   alpha3code: 'MAC',
  //   displayName: {
  //       en: 'Macao',
  //       vi: 'Macao',
  //   },
  // },
  {
    name: 'Macedonia',
    phoneCode: '+389',
    alpha2code: 'MK',
    alpha3code: 'MKD',
    displayName: {
      en: 'Macedonia',
      vi: 'Macedonia',
    },
  },
  {
    name: 'Madagascar',
    phoneCode: '+261',
    alpha2code: 'MG',
    alpha3code: 'MDG',
    displayName: {
      en: 'Madagascar',
      vi: 'Madagascar',
    },
  },
  {
    name: 'Malawi',
    phoneCode: '+265',
    alpha2code: 'MW',
    alpha3code: 'MWI',
    displayName: {
      en: 'Malawi',
      vi: 'Malawi',
    },
  },
  {
    name: 'Malaysia',
    phoneCode: '+60',
    alpha2code: 'MY',
    alpha3code: 'MYS',
    displayName: {
      en: 'Malaysia',
      vi: 'Malaysia',
    },
  },
  // {
  //   name: 'Maldives',
  //   phoneCode: '+960',
  //   alpha2code: 'MV',
  //   alpha3code: 'MDV',
  //   displayName: {
  //       en: 'Maldives',
  //       vi: 'Maldives',
  //   },
  // },
  {
    name: 'Mali',
    phoneCode: '+223',
    alpha2code: 'ML',
    alpha3code: 'MLI',
    displayName: {
      en: 'Mali',
      vi: 'Mali',
    },
  },
  // {
  //   name: 'Malta',
  //   phoneCode: '+356',
  //   alpha2code: 'MT',
  //   alpha3code: 'MLT',
  //   displayName: {
  //       en: 'Malta',
  //       vi: 'Malta',
  //   },
  // },
  // {
  //   name: 'Marshall Islands',
  //   phoneCode: '+692',
  //   alpha2code: 'MH',
  //   alpha3code: 'MHL',
  //   displayName: {
  //       en: 'Marshall Islands',
  //       vi: 'Marshall Islands',
  //   },
  // },
  // {
  //   name: 'Martinique',
  //   phoneCode: '+596',
  //   alpha2code: 'MQ',
  //   alpha3code: 'MTQ',
  //   displayName: {
  //       en: 'Martinique',
  //       vi: 'Martinique',
  //   },
  // },
  {
    name: 'Mauritania',
    phoneCode: '+222',
    alpha2code: 'MR',
    alpha3code: 'MRT',
    displayName: {
      en: 'Mauritania',
      vi: 'Mauritania',
    },
  },
  // {
  //   name: 'Mauritius',
  //   phoneCode: '+230',
  //   alpha2code: 'MU',
  //   alpha3code: 'MUS',
  //   displayName: {
  //       en: 'Mauritius',
  //       vi: 'Mauritius',
  //   },
  // },
  // {
  //   name: 'Mayotte',
  //   phoneCode: '+262',
  //   alpha2code: 'YT',
  //   alpha3code: 'MYT',
  //   displayName: {
  //       en: 'Mayotte',
  //       vi: 'Mayotte',
  //   },
  // },
  {
    name: 'Mexico',
    phoneCode: '+52',
    alpha2code: 'MX',
    alpha3code: 'MEX',
    displayName: {
      en: 'Mexico',
      vi: 'Mexico',
    },
  },
  {
    name: 'Moldova',
    phoneCode: '+373',
    alpha2code: 'MD',
    alpha3code: 'MDA',
    displayName: {
      en: 'Moldova',
      vi: 'Moldova',
    },
  },
  // {
  //   name: 'Monaco',
  //   phoneCode: '+377',
  //   alpha2code: 'MC',
  //   alpha3code: 'MCO',
  //   displayName: {
  //       en: 'Monaco',
  //       vi: 'Monaco',
  //   },
  // },
  {
    name: 'Mongolia',
    phoneCode: '+976',
    alpha2code: 'MN',
    alpha3code: 'MNG',
    displayName: {
      en: 'Mongolia',
      vi: 'Mongolia',
    },
  },
  {
    name: 'Montenegro',
    phoneCode: '+382',
    alpha2code: 'ME',
    alpha3code: 'MNE',
    displayName: {
      en: 'Montenegro',
      vi: 'Montenegro',
    },
  },
  // {
  //   name: 'Montserrat',
  //   phoneCode: '+1',
  //   alpha2code: 'MS',
  //   alpha3code: 'MSR',
  //   displayName: {
  //       en: 'Montserrat',
  //       vi: 'Montserrat',
  //   },
  // },
  {
    name: 'Morocco',
    phoneCode: '+212',
    alpha2code: 'MA',
    alpha3code: 'MAR',
    displayName: {
      en: 'Morocco',
      vi: 'Morocco',
    },
  },
  {
    name: 'Mozambique',
    phoneCode: '+258',
    alpha2code: 'MZ',
    alpha3code: 'MOZ',
    displayName: {
      en: 'Mozambique',
      vi: 'Mozambique',
    },
  },
  {
    name: 'Namibia',
    phoneCode: '+264',
    alpha2code: 'NA',
    alpha3code: 'NAM',
    displayName: {
      en: 'Namibia',
      vi: 'Namibia',
    },
  },
  // {
  //   name: 'Nauru',
  //   phoneCode: '+674',
  //   alpha2code: 'NR',
  //   alpha3code: 'NRU',
  //   displayName: {
  //       en: 'Nauru',
  //       vi: 'Nauru',
  //   },
  // },
  {
    name: 'Nepal',
    phoneCode: '+977',
    alpha2code: 'NP',
    alpha3code: 'NPL',
    displayName: {
      en: 'Nepal',
      vi: 'Nepal',
    },
  },
  {
    name: 'Netherlands',
    phoneCode: '+31',
    alpha2code: 'NL',
    alpha3code: 'NLD',
    displayName: {
      en: 'Netherlands',
      vi: 'Netherlands',
    },
  },
  // {
  //   name: 'Netherlands Antilles',
  //   phoneCode: '+599',
  //   alpha2code: 'AN',
  //   alpha3code: 'ANT',
  //   displayName: {
  //       en: 'Netherlands Antilles',
  //       vi: 'Netherlands Antilles',
  //   },
  // },
  {
    name: 'New Caledonia',
    phoneCode: '+687',
    alpha2code: 'NC',
    alpha3code: 'NCL',
    displayName: {
      en: 'New Caledonia',
      vi: 'New Caledonia',
    },
  },
  {
    name: 'New Zealand',
    phoneCode: '+64',
    alpha2code: 'NZ',
    alpha3code: 'NZL',
    displayName: {
      en: 'New Zealand',
      vi: 'New Zealand',
    },
  },
  {
    name: 'Nicaragua',
    phoneCode: '+505',
    alpha2code: 'NI',
    alpha3code: 'NIC',
    displayName: {
      en: 'Nicaragua',
      vi: 'Nicaragua',
    },
  },
  {
    name: 'Niger',
    phoneCode: '+227',
    alpha2code: 'NE',
    alpha3code: 'NER',
    displayName: {
      en: 'Niger',
      vi: 'Niger',
    },
  },
  {
    name: 'Nigeria',
    phoneCode: '+234',
    alpha2code: 'NG',
    alpha3code: 'NGA',
    displayName: {
      en: 'Nigeria',
      vi: 'Nigeria',
    },
  },
  // {
  //   name: 'Niue',
  //   phoneCode: '+683',
  //   alpha2code: 'NU',
  //   alpha3code: 'NIU',
  //   displayName: {
  //       en: 'Niue',
  //       vi: 'Niue',
  //   },
  // },
  // {
  //   name: 'Norfolk Island',
  //   phoneCode: '+672',
  //   alpha2code: 'NF',
  //   alpha3code: 'NFK',
  //   displayName: {
  //       en: 'Norfolk Island',
  //       vi: 'Norfolk Island',
  //   },
  // },
  {
    name: 'North Korea',
    phoneCode: '+850',
    alpha2code: 'KP',
    alpha3code: 'PRK',
    displayName: {
      en: 'North Korea',
      vi: 'Triều Tiên',
    },
  },
  // {
  //   name: 'Northern Mariana Islands',
  //   phoneCode: '+1',
  //   alpha2code: 'MP',
  //   alpha3code: 'MNP',
  //   displayName: {
  //       en: 'Northern Mariana Islands',
  //       vi: 'Northern Mariana Islands',
  //   },
  // },
  {
    name: 'Norway',
    phoneCode: '+47',
    alpha2code: 'NO',
    alpha3code: 'NOR',
    displayName: {
      en: 'Norway',
      vi: 'Norway',
    },
  },
  {
    name: 'Oman',
    phoneCode: '+968',
    alpha2code: 'OM',
    alpha3code: 'OMN',
    displayName: {
      en: 'Oman',
      vi: 'Oman',
    },
  },
  {
    name: 'Pakistan',
    phoneCode: '+92',
    alpha2code: 'PK',
    alpha3code: 'PAK',
    displayName: {
      en: 'Pakistan',
      vi: 'Pakistan',
    },
  },
  // {
  //   name: 'Palau',
  //   phoneCode: '+680',
  //   alpha2code: 'PW',
  //   alpha3code: 'PLW',
  //   displayName: {
  //       en: 'Palau',
  //       vi: 'Palau',
  //   },
  // },
  {
    name: 'Palestine',
    phoneCode: '+970',
    alpha2code: 'PS',
    alpha3code: 'PSE',
    displayName: {
      en: 'Palestine',
      vi: 'Palestine',
    },
  },
  {
    name: 'Panama',
    phoneCode: '+507',
    alpha2code: 'PA',
    alpha3code: 'PAN',
    displayName: {
      en: 'Panama',
      vi: 'Panama',
    },
  },
  {
    name: 'Papua New Guinea',
    phoneCode: '+675',
    alpha2code: 'PG',
    alpha3code: 'PNG',
    displayName: {
      en: 'Papua New Guinea',
      vi: 'Papua New Guinea',
    },
  },
  {
    name: 'Paraguay',
    phoneCode: '+595',
    alpha2code: 'PY',
    alpha3code: 'PRY',
    displayName: {
      en: 'Paraguay',
      vi: 'Paraguay',
    },
  },
  {
    name: 'Peru',
    phoneCode: '+51',
    alpha2code: 'PE',
    alpha3code: 'PER',
    displayName: {
      en: 'Peru',
      vi: 'Peru',
    },
  },
  {
    name: 'Philippines',
    phoneCode: '+63',
    alpha2code: 'PH',
    alpha3code: 'PHL',
    displayName: {
      en: 'Philippines',
      vi: 'Philippines',
    },
  },
  {
    name: 'Poland',
    phoneCode: '+48',
    alpha2code: 'PL',
    alpha3code: 'POL',
    displayName: {
      en: 'Poland',
      vi: 'Ba Lan',
    },
  },
  {
    name: 'Portugal',
    phoneCode: '+351',
    alpha2code: 'PT',
    alpha3code: 'PRT',
    displayName: {
      en: 'Portugal',
      vi: 'Bồ Đào Nha',
    },
  },
  {
    name: 'Puerto Rico',
    phoneCode: '+1',
    alpha2code: 'PR',
    alpha3code: 'PRI',
    displayName: {
      en: 'Puerto Rico',
      vi: 'Puerto Rico',
    },
  },
  {
    name: 'Qatar',
    phoneCode: '+974',
    alpha2code: 'QA',
    alpha3code: 'QAT',
    displayName: {
      en: 'Qatar',
      vi: 'Qatar',
    },
  },
  {
    name: 'Congo',
    phoneCode: '+242',
    alpha2code: 'CG',
    alpha3code: 'COG',
    displayName: {
      en: 'Congo',
      vi: 'Congo',
    },
  },
  // {
  //   name: 'Réunion',
  //   phoneCode: '+262',
  //   alpha2code: 'RE',
  //   alpha3code: 'REU',
  //   displayName: {
  //       en: 'Réunion',
  //       vi: 'Réunion',
  //   },
  // },
  {
    name: 'Romania',
    phoneCode: '+40',
    alpha2code: 'RO',
    alpha3code: 'ROU',
    displayName: {
      en: 'Romania',
      vi: 'Romania',
    },
  },
  {
    name: 'Russia',
    phoneCode: '+7',
    alpha2code: 'RU',
    alpha3code: 'RUS',
    displayName: {
      en: 'Russia',
      vi: 'Nga',
    },
  },
  {
    name: 'Rwanda',
    phoneCode: '+250',
    alpha2code: 'RW',
    alpha3code: 'RWA',
    displayName: {
      en: 'Rwanda',
      vi: 'Rwanda',
    },
  },
  // {
  //   name: 'Saint Barthélemy',
  //   phoneCode: '+590',
  //   alpha2code: 'BL',
  //   alpha3code: 'BLM',
  //   displayName: {
  //       en: 'Saint Barthélemy',
  //       vi: 'Saint Barthélemy',
  //   },
  // },
  // {
  //   name: 'Saint Helena',
  //   phoneCode: '+290',
  //   alpha2code: 'SH',
  //   alpha3code: 'SHN',
  //   displayName: {
  //       en: 'Saint Helena',
  //       vi: 'Saint Helena',
  //   },
  // },
  // {
  //   name: 'Saint Kitts and Nevis',
  //   phoneCode: '+1',
  //   alpha2code: 'KN',
  //   alpha3code: 'KNA',
  //   displayName: {
  //       en: 'Saint Kitts and Nevis',
  //       vi: 'Saint Kitts and Nevis',
  //   },
  // },
  // {
  //   name: 'Saint Martin',
  //   phoneCode: '+590',
  //   alpha2code: 'MF',
  //   alpha3code: 'MAF',
  //   displayName: {
  //       en: 'Saint Martin',
  //       vi: 'Saint Martin',
  //   },
  // },
  // {
  //   name: 'Saint Pierre and Miquelon',
  //   phoneCode: '+508',
  //   alpha2code: 'PM',
  //   alpha3code: 'SPM',
  //   displayName: {
  //       en: 'Saint Pierre and Miquelon',
  //       vi: 'Saint Pierre and Miquelon',
  //   },
  // },
  // {
  //   name: 'Saint Vincent and the Grenadines',
  //   phoneCode: '+1',
  //   alpha2code: 'VC',
  //   alpha3code: 'VCT',
  //   displayName: {
  //       en: 'Saint Vincent and the Grenadines',
  //       vi: 'Saint Vincent and the Grenadines',
  //   },
  // },
  // {
  //   name: 'Samoa',
  //   phoneCode: '+685',
  //   alpha2code: 'WS',
  //   alpha3code: 'WSM',
  //   displayName: {
  //       en: 'Samoa',
  //       vi: 'Samoa',
  //   },
  // },
  // {
  //   name: 'San Marino',
  //   phoneCode: '+378',
  //   alpha2code: 'SM',
  //   alpha3code: 'SMR',
  //   displayName: {
  //       en: 'San Marino',
  //       vi: 'San Marino',
  //   },
  // },
  // {
  //   name: 'São Tomé and Príncipe',
  //   phoneCode: '+239',
  //   alpha2code: 'ST',
  //   alpha3code: 'STP',
  //   displayName: {
  //       en: 'São Tomé and Príncipe',
  //       vi: 'São Tomé and Príncipe',
  //   },
  // },
  {
    name: 'Saudi Arabia',
    phoneCode: '+966',
    alpha2code: 'SA',
    alpha3code: 'SAU',
    displayName: {
      en: 'Saudi Arabia',
      vi: 'Saudi Arabia',
    },
  },
  {
    name: 'Senegal',
    phoneCode: '+221',
    alpha2code: 'SN',
    alpha3code: 'SEN',
    displayName: {
      en: 'Senegal',
      vi: 'Senegal',
    },
  },
  {
    name: 'Serbia',
    phoneCode: '+381',
    alpha2code: 'RS',
    alpha3code: 'SRB',
    displayName: {
      en: 'Serbia',
      vi: 'Serbia',
    },
  },
  // {
  //   name: 'Seychelles',
  //   phoneCode: '+248',
  //   alpha2code: 'SC',
  //   alpha3code: 'SYC',
  //   displayName: {
  //       en: 'Seychelles',
  //       vi: 'Seychelles',
  //   },
  // },
  {
    name: 'Sierra Leone',
    phoneCode: '+232',
    alpha2code: 'SL',
    alpha3code: 'SLE',
    displayName: {
      en: 'Sierra Leone',
      vi: 'Sierra Leone',
    },
  },
  {
    name: 'Singapore',
    phoneCode: '+65',
    alpha2code: 'SG',
    alpha3code: 'SGP',
    displayName: {
      en: 'Singapore',
      vi: 'Singapore',
    },
  },
  // {
  //   name: 'Sint Maarten (Dutch part)',
  //   phoneCode: '+1',
  //   alpha2code: 'SX',
  //   alpha3code: 'SXM',
  //   displayName: {
  //       en: 'Sint Maarten (Dutch part)',
  //       vi: 'Sint Maarten (Dutch part)',
  //   },
  // },
  {
    name: 'Slovakia',
    phoneCode: '+421',
    alpha2code: 'SK',
    alpha3code: 'SVK',
    displayName: {
      en: 'Slovakia',
      vi: 'Slovakia',
    },
  },
  {
    name: 'Slovenia',
    phoneCode: '+386',
    alpha2code: 'SI',
    alpha3code: 'SVN',
    displayName: {
      en: 'Slovenia',
      vi: 'Slovenia',
    },
  },
  {
    name: 'Solomon Islands',
    phoneCode: '+677',
    alpha2code: 'SB',
    alpha3code: 'SLB',
    displayName: {
      en: 'Solomon Islands',
      vi: 'Solomon Islands',
    },
  },
  {
    name: 'Somalia',
    phoneCode: '+252',
    alpha2code: 'SO',
    alpha3code: 'SOM',
    displayName: {
      en: 'Somalia',
      vi: 'Somalia',
    },
  },
  {
    name: 'South Africa',
    phoneCode: '+27',
    alpha2code: 'ZA',
    alpha3code: 'ZAF',
    displayName: {
      en: 'South Africa',
      vi: 'South Africa',
    },
  },
  {
    name: 'South Korea',
    phoneCode: '+82',
    alpha2code: 'KR',
    alpha3code: 'KOR',
    displayName: {
      en: 'South Korea',
      vi: 'Hàn Quốc',
    },
  },
  {
    name: 'South Sudan',
    phoneCode: '+211',
    alpha2code: 'SS',
    alpha3code: 'SSD',
    displayName: {
      en: 'South Sudan',
      vi: 'South Sudan',
    },
  },
  {
    name: 'Spain',
    phoneCode: '+34',
    alpha2code: 'ES',
    alpha3code: 'ESP',
    displayName: {
      en: 'Spain',
      vi: 'Spain',
    },
  },
  {
    name: 'Sri Lanka',
    phoneCode: '+94',
    alpha2code: 'LK',
    alpha3code: 'LKA',
    displayName: {
      en: 'Sri Lanka',
      vi: 'Sri Lanka',
    },
  },
  // {
  //   name: 'Saint Lucia',
  //   phoneCode: '+1',
  //   alpha2code: 'LC',
  //   alpha3code: 'LCA',
  //   displayName: {
  //       en: 'Saint Lucia',
  //       vi: 'Saint Lucia',
  //   },
  // },
  {
    name: 'Sudan',
    phoneCode: '+249',
    alpha2code: 'SD',
    alpha3code: 'SDN',
    displayName: {
      en: 'Sudan',
      vi: 'Sudan',
    },
  },
  {
    name: 'Suriname',
    phoneCode: '+597',
    alpha2code: 'SR',
    alpha3code: 'SUR',
    displayName: {
      en: 'Suriname',
      vi: 'Suriname',
    },
  },
  {
    name: 'Swaziland',
    phoneCode: '+268',
    alpha2code: 'SZ',
    alpha3code: 'SWZ',
    displayName: {
      en: 'Swaziland',
      vi: 'Swaziland',
    },
  },
  {
    name: 'Sweden',
    phoneCode: '+46',
    alpha2code: 'SE',
    alpha3code: 'SWE',
    displayName: {
      en: 'Sweden',
      vi: 'Sweden',
    },
  },
  {
    name: 'Switzerland',
    phoneCode: '+41',
    alpha2code: 'CH',
    alpha3code: 'CHE',
    displayName: {
      en: 'Switzerland',
      vi: 'Switzerland',
    },
  },
  {
    name: 'Syrian Arab Republic',
    phoneCode: '+963',
    alpha2code: 'SY',
    alpha3code: 'SYR',
    displayName: {
      en: 'Syrian Arab Republic',
      vi: 'Syrian Arab Republic',
    },
  },
  {
    name: 'Taiwan',
    phoneCode: '+886',
    alpha2code: 'TW',
    alpha3code: 'TWN',
    displayName: {
      en: 'Taiwan',
      vi: 'Đài Loan',
    },
  },
  {
    name: 'Tajikistan',
    phoneCode: '+992',
    alpha2code: 'TJ',
    alpha3code: 'TJK',
    displayName: {
      en: 'Tajikistan',
      vi: 'Tajikistan',
    },
  },
  {
    name: 'Tanzania',
    phoneCode: '+255',
    alpha2code: 'TZ',
    alpha3code: 'TZA',
    displayName: {
      en: 'Tanzania',
      vi: 'Tanzania',
    },
  },
  {
    name: 'Thailand',
    phoneCode: '+66',
    alpha2code: 'TH',
    alpha3code: 'THA',
    displayName: {
      en: 'Thailand',
      vi: 'Thái',
    },
  },
  {
    name: 'Bahamas',
    phoneCode: '+1',
    alpha2code: 'BS',
    alpha3code: 'BHS',
    displayName: {
      en: 'Bahamas',
      vi: 'Bahamas',
    },
  },
  {
    name: 'Gambia',
    phoneCode: '+220',
    alpha2code: 'GM',
    alpha3code: 'GMB',
    displayName: {
      en: 'Gambia',
      vi: 'Gambia',
    },
  },
  {
    name: 'Timor-Leste',
    phoneCode: '+670',
    alpha2code: 'TL',
    alpha3code: 'TLS',
    displayName: {
      en: 'Timor-Leste',
      vi: 'Timor-Leste',
    },
  },
  {
    name: 'Togo',
    phoneCode: '+228',
    alpha2code: 'TG',
    alpha3code: 'TGO',
    displayName: {
      en: 'Togo',
      vi: 'Togo',
    },
  },
  // {
  //   name: 'Tokelau',
  //   phoneCode: '+690',
  //   alpha2code: 'TK',
  //   alpha3code: 'TKL',
  //   displayName: {
  //       en: 'Tokelau',
  //       vi: 'Tokelau',
  //   },
  // },
  // {
  //   name: 'Tonga',
  //   phoneCode: '+676',
  //   alpha2code: 'TO',
  //   alpha3code: 'TON',
  //   displayName: {
  //       en: 'Tonga',
  //       vi: 'Tonga',
  //   },
  // },
  {
    name: 'Trinidad and Tobago',
    phoneCode: '+1',
    alpha2code: 'TT',
    alpha3code: 'TTO',
    displayName: {
      en: 'Trinidad and Tobago',
      vi: 'Trinidad and Tobago',
    },
  },
  {
    name: 'Tunisia',
    phoneCode: '+216',
    alpha2code: 'TN',
    alpha3code: 'TUN',
    displayName: {
      en: 'Tunisia',
      vi: 'Tunisia',
    },
  },
  {
    name: 'Turkey',
    phoneCode: '+90',
    alpha2code: 'TR',
    alpha3code: 'TUR',
    displayName: {
      en: 'Turkey',
      vi: 'Turkey',
    },
  },
  {
    name: 'Turkmenistan',
    phoneCode: '+993',
    alpha2code: 'TM',
    alpha3code: 'TKM',
    displayName: {
      en: 'Turkmenistan',
      vi: 'Turkmenistan',
    },
  },
  // {
  //   name: 'Turks and Caicos Islands',
  //   phoneCode: '+1',
  //   alpha2code: 'TC',
  //   alpha3code: 'TCA',
  //   displayName: {
  //       en: 'Turks and Caicos Islands',
  //       vi: 'Turks and Caicos Islands',
  //   },
  // },
  // {
  //   name: 'Tuvalu',
  //   phoneCode: '+688',
  //   alpha2code: 'TV',
  //   alpha3code: 'TUV',
  //   displayName: {
  //       en: 'Tuvalu',
  //       vi: 'Tuvalu',
  //   },
  // },
  {
    name: 'Uganda',
    phoneCode: '+256',
    alpha2code: 'UG',
    alpha3code: 'UGA',
    displayName: {
      en: 'Uganda',
      vi: 'Uganda',
    },
  },
  {
    name: 'Ukraine',
    phoneCode: '+380',
    alpha2code: 'UA',
    alpha3code: 'UKR',
    displayName: {
      en: 'Ukraine',
      vi: 'Ukraine',
    },
  },
  {
    name: 'United Arab Emirates',
    phoneCode: '+971',
    alpha2code: 'AE',
    alpha3code: 'ARE',
    displayName: {
      en: 'United Arab Emirates',
      vi: 'Ả Rập',
    },
  },
  {
    name: 'United Kingdom',
    phoneCode: '+44',
    alpha2code: 'GB',
    alpha3code: 'GBR',
    displayName: {
      en: 'United Kingdom',
      vi: 'Anh',
    },
  },
  {
    name: 'United States',
    phoneCode: '+1',
    alpha2code: 'US',
    alpha3code: 'USA',
    displayName: {
      en: 'United States',
      vi: 'Mỹ',
    },
  },
  {
    name: 'Uruguay',
    phoneCode: '+598',
    alpha2code: 'UY',
    alpha3code: 'URY',
    displayName: {
      en: 'Uruguay',
      vi: 'Uruguay',
    },
  },
  // {
  //   name: 'U.S. Virgin Islands',
  //   phoneCode: '+1',
  //   alpha2code: 'VI',
  //   alpha3code: 'VIR',
  //   displayName: {
  //       en: 'U.S. Virgin Islands',
  //       vi: 'U.S. Virgin Islands',
  //   },
  // },
  {
    name: 'Uzbekistan',
    phoneCode: '+998',
    alpha2code: 'UZ',
    alpha3code: 'UZB',
    displayName: {
      en: 'Uzbekistan',
      vi: 'Uzbekistan',
    },
  },
  {
    name: 'Vanuatu',
    phoneCode: '+678',
    alpha2code: 'VU',
    alpha3code: 'VUT',
    displayName: {
      en: 'Vanuatu',
      vi: 'Vanuatu',
    },
  },
  // {
  //   name: 'Vatican City',
  //   phoneCode: '+39',
  //   alpha2code: 'VA',
  //   alpha3code: 'VAT',
  //   displayName: {
  //       en: 'Vatican City',
  //       vi: 'Vatican City',
  //   },
  // },
  {
    name: 'Venezuela',
    phoneCode: '+58',
    alpha2code: 'VE',
    alpha3code: 'VEN',
    displayName: {
      en: 'Venezuela',
      vi: 'Venezuela',
    },
  },
  {
    name: 'Vietnam',
    phoneCode: '+84',
    alpha2code: 'VN',
    alpha3code: 'VNM',
    displayName: {
      en: 'Vietnam',
      vi: 'Việt Nam',
    },
  },
  // {
  //   name: 'Wallis and Futuna',
  //   phoneCode: '+681',
  //   alpha2code: 'WF',
  //   alpha3code: 'WLF',
  //   displayName: {
  //       en: 'Wallis and Futuna',
  //       vi: 'Wallis and Futuna',
  //   },
  // },
  {
    name: 'Yemen',
    phoneCode: '+967',
    alpha2code: 'YE',
    alpha3code: 'YEM',
    displayName: {
      en: 'Yemen',
      vi: 'Yemen',
    },
  },
  {
    name: 'Zambia',
    phoneCode: '+260',
    alpha2code: 'ZM',
    alpha3code: 'ZMB',
    displayName: {
      en: 'Zambia',
      vi: 'Zambia',
    },
  },
  {
    name: 'Zimbabwe',
    phoneCode: '+263',
    alpha2code: 'ZW',
    alpha3code: 'ZWE',
    displayName: {
      en: 'Zimbabwe',
      vi: 'Zimbabwe',
    },
  },
];

export const FLAG_URL = 'https://countryflagsapi.com/png/VN';

export default COUNTRIES;
