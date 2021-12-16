<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Seeder;

class CountryTableSeeder extends Seeder
{
    public function run()
    {
        $country = [
        [
            "title" => "AF", 
            "description" => "Afghanistan"
        ],[
            "title" => "AL", 
            "description" => "Albania"
        ],[
            "title" => "DZ", 
            "description" => "Algeria"
        ],[
            "title" => "AS", 
            "description" => "American Samoa"
        ],[
            "title" => "AD", 
            "description" => "Andorra"
        ],[
            "title" => "AO", 
            "description" => "Angola"
        ],[
            "title" => "AI", 
            "description" => "Anguilla"
        ],[
            "title" => "AQ", 
            "description" => "Antarctica"
        ],[
            "title" => "AG", 
            "description" => "Antigua and Barbuda"
        ],[
            "title" => "AR", 
            "description" => "Argentina"
        ],[
            "title" => "AM", 
            "description" => "Armenia"
        ],[
            "title" => "AW", 
            "description" => "Aruba"
        ],[
            "title" => "AU", 
            "description" => "Australia"
        ],[
            "title" => "AT", 
            "description" => "Austria"
        ],[
            "title" => "AZ", 
            "description" => "Azerbaijan"
        ],[
            "title" => "BS", 
            "description" => "Bahamas"
        ],[
            "title" => "BH", 
            "description" => "Bahrain"
        ],[
            "title" => "BD", 
            "description" => "Bangladesh"
        ],[
            "title" => "BB", 
            "description" => "Barbados"
        ],[
            "title" => "BY", 
            "description" => "Belarus"
        ],[
            "title" => "BE", 
            "description" => "Belgium"
        ],[
            "title" => "BZ", 
            "description" => "Belize"
        ],[
            "title" => "BJ", 
            "description" => "Benin"
        ],[
            "title" => "BM", 
            "description" => "Bermuda"
        ],[
            "title" => "BT", 
            "description" => "Bhutan"
        ],[
            "title" => "BO", 
            "description" => "Bolivia"
        ],[
            "title" => "BA", 
            "description" => "Bosnia and Herzegovina"
        ],[
            "title" => "BW", 
            "description" => "Botswana"
        ],[
            "title" => "BV", 
            "description" => "Bouvet Island"
        ],[
            "title" => "BR", 
            "description" => "Brazil"
        ],[
            "title" => "IO", 
            "description" => "British Indian Ocean Territory"
        ],[
            "title" => "BN", 
            "description" => "Brunei Darussalam"
        ],[
            "title" => "BG", 
            "description" => "Bulgaria"
        ],[
            "title" => "BF", 
            "description" => "Burkina Faso"
        ],[
            "title" => "BI", 
            "description" => "Burundi"
        ],[
            "title" => "KH", 
            "description" => "Cambodia"
        ],[
            "title" => "CM", 
            "description" => "Cameroon"
        ],[
            "title" => "CA", 
            "description" => "Canada"
        ],[
            "title" => "CV", 
            "description" => "Cape Verde"
        ],[
            "title" => "KY", 
            "description" => "Cayman Islands"
        ],[
            "title" => "CF", 
            "description" => "Central African Republic"
        ],[
            "title" => "TD", 
            "description" => "Chad"
        ],[
            "title" => "CL", 
            "description" => "Chile"
        ],[
            "title" => "CN", 
            "description" => "China"
        ],[
            "title" => "CX", 
            "description" => "Christmas Island"
        ],[
            "title" => "CC", 
            "description" => "Cocos (Keeling) Islands"
        ],[
            "title" => "CO", 
            "description" => "Colombia"
        ],[
            "title" => "KM", 
            "description" => "Comoros"
        ],[
            "title" => "CG", 
            "description" => "Congo"
        ],[
            "title" => "CD", 
            "description" => "Congo, the Democratic Republic of the"
        ],[
            "title" => "CK", 
            "description" => "Cook Islands"
        ],[
            "title" => "CR", 
            "description" => "Costa Rica"
        ],[
            "title" => "CI", 
            "description" => "Cote D'Ivoire"
        ],[
            "title" => "HR", 
            "description" => "Croatia"
        ],[
            "title" => "CU", 
            "description" => "Cuba"
        ],[
            "title" => "CY", 
            "description" => "Cyprus"
        ],[
            "title" => "CZ", 
            "description" => "Czech Republic"
        ],[
            "title" => "DK", 
            "description" => "Denmark"
        ],[
            "title" => "DJ", 
            "description" => "Djibouti"
        ],[
            "title" => "DM", 
            "description" => "Dominica"
        ],[
            "title" => "DO", 
            "description" => "Dominican Republic"
        ],[
            "title" => "EC", 
            "description" => "Ecuador"
        ],[
            "title" => "EG", 
            "description" => "Egypt"
        ],[
            "title" => "SV", 
            "description" => "El Salvador"
        ],[
            "title" => "GQ", 
            "description" => "Equatorial Guinea"
        ],[
            "title" => "ER", 
            "description" => "Eritrea"
        ],[
            "title" => "EE", 
            "description" => "Estonia"
        ],[
            "title" => "ET", 
            "description" => "Ethiopia"
        ],[
            "title" => "FK", 
            "description" => "Falkland Islands (Malvinas)"
        ],[
            "title" => "FO", 
            "description" => "Faroe Islands"
        ],[
            "title" => "FJ", 
            "description" => "Fiji"
        ],[
            "title" => "FI", 
            "description" => "Finland"
        ],[
            "title" => "FR", 
            "description" => "France"
        ],[
            "title" => "GF", 
            "description" => "French Guiana"
        ],[
            "title" => "PF", 
            "description" => "French Polynesia"
        ],[
            "title" => "TF", 
            "description" => "French Southern Territories"
        ],[
            "title" => "GA", 
            "description" => "Gabon"
        ],[
            "title" => "GM", 
            "description" => "Gambia"
        ],[
            "title" => "GE", 
            "description" => "Georgia"
        ],[
            "title" => "DE", 
            "description" => "Germany"
        ],[
            "title" => "GH", 
            "description" => "Ghana"
        ],[
            "title" => "GI", 
            "description" => "Gibraltar"
        ],[
            "title" => "GR", 
            "description" => "Greece"
        ],[
            "title" => "GL", 
            "description" => "Greenland"
        ],[
            "title" => "GD", 
            "description" => "Grenada"
        ],[
            "title" => "GP", 
            "description" => "Guadeloupe"
        ],[
            "title" => "GU", 
            "description" => "Guam"
        ],[
            "title" => "GT", 
            "description" => "Guatemala"
        ],[
            "title" => "GN", 
            "description" => "Guinea"
        ],[
            "title" => "GW", 
            "description" => "Guinea-Bissau"
        ],[
            "title" => "GY", 
            "description" => "Guyana"
        ],[
            "title" => "HT", 
            "description" => "Haiti"
        ],[
            "title" => "HM", 
            "description" => "Heard Island and Mcdonald Islands"
        ],[
            "title" => "VA", 
            "description" => "Holy See (Vatican City State)"
        ],[
            "title" => "HN", 
            "description" => "Honduras"
        ],[
            "title" => "HK", 
            "description" => "Hong Kong"
        ],[
            "title" => "HU", 
            "description" => "Hungary"
        ],[
            "title" => "IS", 
            "description" => "Iceland"
        ],[
            "title" => "IN", 
            "description" => "India"
        ],[
            "title" => "ID", 
            "description" => "Indonesia"
        ],[
            "title" => "IR", 
            "description" => "Iran, Islamic Republic of"
        ],[
            "title" => "IQ", 
            "description" => "Iraq"
        ],[
            "title" => "IE", 
            "description" => "Ireland"
        ],[
            "title" => "IL", 
            "description" => "Israel"
        ],[
            "title" => "IT", 
            "description" => "Italy"
        ],[
            "title" => "JM", 
            "description" => "Jamaica"
        ],[
            "title" => "JP", 
            "description" => "Japan"
        ],[
            "title" => "JO", 
            "description" => "Jordan"
        ],[
            "title" => "KZ", 
            "description" => "Kazakhstan"
        ],[
            "title" => "KE", 
            "description" => "Kenya"
        ],[
            "title" => "KI", 
            "description" => "Kiribati"
        ],[
            "title" => "KP", 
            "description" => "Korea, Democratic People's Republic of"
        ],[
            "title" => "KR", 
            "description" => "Korea, Republic of"
        ],[
            "title" => "KW", 
            "description" => "Kuwait"
        ],[
            "title" => "KG", 
            "description" => "Kyrgyzstan"
        ],[
            "title" => "LA", 
            "description" => "Lao People's Democratic Republic"
        ],[
            "title" => "LV", 
            "description" => "Latvia"
        ],[
            "title" => "LB", 
            "description" => "Lebanon"
        ],[
            "title" => "LS", 
            "description" => "Lesotho"
        ],[
            "title" => "LR", 
            "description" => "Liberia"
        ],[
            "title" => "LY", 
            "description" => "Libyan Arab Jamahiriya"
        ],[
            "title" => "LI", 
            "description" => "Liechtenstein"
        ],[
            "title" => "LT", 
            "description" => "Lithuania"
        ],[
            "title" => "LU", 
            "description" => "Luxembourg"
        ],[
            "title" => "MO", 
            "description" => "Macao"
        ],[
            "title" => "MK", 
            "description" => "Macedonia, the Former Yugoslav Republic of"
        ],[
            "title" => "MG", 
            "description" => "Madagascar"
        ],[
            "title" => "MW", 
            "description" => "Malawi"
        ],[
            "title" => "MY", 
            "description" => "Malaysia"
        ],[
            "title" => "MV", 
            "description" => "Maldives"
        ],[
            "title" => "ML", 
            "description" => "Mali"
        ],[
            "title" => "MT", 
            "description" => "Malta"
        ],[
            "title" => "MH", 
            "description" => "Marshall Islands"
        ],[
            "title" => "MQ", 
            "description" => "Martinique"
        ],[
            "title" => "MR", 
            "description" => "Mauritania"
        ],[
            "title" => "MU", 
            "description" => "Mauritius"
        ],[
            "title" => "YT", 
            "description" => "Mayotte"
        ],[
            "title" => "MX", 
            "description" => "Mexico"
        ],[
            "title" => "FM", 
            "description" => "Micronesia, Federated States of"
        ],[
            "title" => "MD", 
            "description" => "Moldova, Republic of"
        ],[
            "title" => "MC", 
            "description" => "Monaco"
        ],[
            "title" => "MN", 
            "description" => "Mongolia"
        ],[
            "title" => "MS", 
            "description" => "Montserrat"
        ],[
            "title" => "MA", 
            "description" => "Morocco"
        ],[
            "title" => "MZ", 
            "description" => "Mozambique"
        ],[
            "title" => "MM", 
            "description" => "Myanmar"
        ],[
            "title" => "NA", 
            "description" => "Namibia"
        ],[
            "title" => "NR", 
            "description" => "Nauru"
        ],[
            "title" => "NP", 
            "description" => "Nepal"
        ],[
            "title" => "NL", 
            "description" => "Netherlands"
        ],[
            "title" => "AN", 
            "description" => "Netherlands Antilles"
        ],[
            "title" => "NC", 
            "description" => "New Caledonia"
        ],[
            "title" => "NZ", 
            "description" => "New Zealand"
        ],[
            "title" => "NI", 
            "description" => "Nicaragua"
        ],[
            "title" => "NE", 
            "description" => "Niger"
        ],[
            "title" => "NG", 
            "description" => "Nigeria"
        ],[
            "title" => "NU", 
            "description" => "Niue"
        ],[
            "title" => "NF", 
            "description" => "Norfolk Island"
        ],[
            "title" => "MP", 
            "description" => "Northern Mariana Islands"
        ],[
            "title" => "NO", 
            "description" => "Norway"
        ],[
            "title" => "OM", 
            "description" => "Oman"
        ],[
            "title" => "PK", 
            "description" => "Pakistan"
        ],[
            "title" => "PW", 
            "description" => "Palau"
        ],[
            "title" => "PS", 
            "description" => "Palestinian Territory, Occupied"
        ],[
            "title" => "PA", 
            "description" => "Panama"
        ],[
            "title" => "PG", 
            "description" => "Papua New Guinea"
        ],[
            "title" => "PY", 
            "description" => "Paraguay"
        ],[
            "title" => "PE", 
            "description" => "Peru"
        ],[
            "title" => "PH", 
            "description" => "Philippines"
        ],[
            "title" => "PN", 
            "description" => "Pitcairn"
        ],[
            "title" => "PL", 
            "description" => "Poland"
        ],[
            "title" => "PT", 
            "description" => "Portugal"
        ],[
            "title" => "PR", 
            "description" => "Puerto Rico"
        ],[
            "title" => "QA", 
            "description" => "Qatar"
        ],[
            "title" => "RE", 
            "description" => "Reunion"
        ],[
            "title" => "RO", 
            "description" => "Romania"
        ],[
            "title" => "RU", 
            "description" => "Russian Federation"
        ],[
            "title" => "RW", 
            "description" => "Rwanda"
        ],[
            "title" => "SH", 
            "description" => "Saint Helena"
        ],[
            "title" => "KN", 
            "description" => "Saint Kitts and Nevis"
        ],[
            "title" => "LC", 
            "description" => "Saint Lucia"
        ],[
            "title" => "PM", 
            "description" => "Saint Pierre and Miquelon"
        ],[
            "title" => "VC", 
            "description" => "Saint Vincent and the Grenadines"
        ],[
            "title" => "WS", 
            "description" => "Samoa"
        ],[
            "title" => "SM", 
            "description" => "San Marino"
        ],[
            "title" => "ST", 
            "description" => "Sao Tome and Principe"
        ],[
            "title" => "SA", 
            "description" => "Saudi Arabia"
        ],[
            "title" => "SN", 
            "description" => "Senegal"
        ],[
            "title" => "CS", 
            "description" => "Serbia and Montenegro"
        ],[
            "title" => "SC", 
            "description" => "Seychelles"
        ],[
            "title" => "SL", 
            "description" => "Sierra Leone"
        ],[
            "title" => "SG", 
            "description" => "Singapore"
        ],[
            "title" => "SK", 
            "description" => "Slovakia"
        ],[
            "title" => "SI", 
            "description" => "Slovenia"
        ],[
            "title" => "SB", 
            "description" => "Solomon Islands"
        ],[
            "title" => "SO", 
            "description" => "Somalia"
        ],[
            "title" => "ZA", 
            "description" => "South Africa"
        ],[
            "title" => "GS", 
            "description" => "South Georgia and the South Sandwich Islands"
        ],[
            "title" => "ES", 
            "description" => "Spain"
        ],[
            "title" => "LK", 
            "description" => "Sri Lanka"
        ],[
            "title" => "SD", 
            "description" => "Sudan"
        ],[
            "title" => "SR", 
            "description" => "Suriname"
        ],[
            "title" => "SJ", 
            "description" => "Svalbard and Jan Mayen"
        ],[
            "title" => "SZ", 
            "description" => "Swaziland"
        ],[
            "title" => "SE", 
            "description" => "Sweden"
        ],[
            "title" => "CH", 
            "description" => "Switzerland"
        ],[
            "title" => "SY", 
            "description" => "Syrian Arab Republic"
        ],[
            "title" => "TW", 
            "description" => "Taiwan, Province of China"
        ],[
            "title" => "TJ", 
            "description" => "Tajikistan"
        ],[
            "title" => "TZ", 
            "description" => "Tanzania, United Republic of"
        ],[
            "title" => "TH", 
            "description" => "Thailand"
        ],[
            "title" => "TL", 
            "description" => "Timor-Leste"
        ],[
            "title" => "TG", 
            "description" => "Togo"
        ],[
            "title" => "TK", 
            "description" => "Tokelau"
        ],[
            "title" => "TO", 
            "description" => "Tonga"
        ],[
            "title" => "TT", 
            "description" => "Trinidad and Tobago"
        ],[
            "title" => "TN", 
            "description" => "Tunisia"
        ],[
            "title" => "TR", 
            "description" => "Turkey"
        ],[
            "title" => "TM", 
            "description" => "Turkmenistan"
        ],[
            "title" => "TC", 
            "description" => "Turks and Caicos Islands"
        ],[
            "title" => "TV", 
            "description" => "Tuvalu"
        ],[
            "title" => "UG", 
            "description" => "Uganda"
        ],[
            "title" => "UA", 
            "description" => "Ukraine"
        ],[
            "title" => "AE", 
            "description" => "United Arab Emirates"
        ],[
            "title" => "GB", 
            "description" => "United Kingdom"
        ],[
            "title" => "US", 
            "description" => "United States"
        ],[
            "title" => "UM", 
            "description" => "United States Minor Outlying Islands"
        ],[
            "title" => "UY", 
            "description" => "Uruguay"
        ],[
            "title" => "UZ", 
            "description" => "Uzbekistan"
        ],[
            "title" => "VU", 
            "description" => "Vanuatu"
        ],[
            "title" => "VE", 
            "description" => "Venezuela"
        ],[
            "title" => "VN", 
            "description" => "Viet Nam"
        ],[
            "title" => "VG", 
            "description" => "Virgin Islands, British"
        ],[
            "title" => "VI", 
            "description" => "Virgin Islands, U.s."
        ],[
            "title" => "WF", 
            "description" => "Wallis and Futuna"
        ],[
            "title" => "EH", 
            "description" => "Western Sahara"
        ],[
            "title" => "YE", 
            "description" => "Yemen"
        ],[
            "title" => "ZM", 
            "description" => "Zambia"
        ],[
            "title" => "ZW", 
            "description" => "Zimbabwe"
            ]
        ];
        Country::insert($country);
    }
}