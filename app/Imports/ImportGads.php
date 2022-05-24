<?php

namespace App\Imports;

use App\Models\Gad;
use App\Models\Barangay;
use App\Models\Sitio;
use App\Models\Purok;
use App\Models\CivilStatus;
use App\Models\Household;
use App\Models\Gender;
use App\Models\Utilities;
use App\Models\Appliances;
use App\Models\Religion;
use App\Models\GenderPreference;
use App\Models\ValidID;
use App\Models\GovernmentAssistance;
use App\Models\MonthlyIncome;
use App\Models\Medicine;
use App\Models\Health;
use App\Models\EducationalAssistance;
use App\Models\EducationalAttaintment;
use App\Models\EducationalStatus;
use App\Models\Province;
use App\Models\City;
use App\Models\Occupation;
use App\Models\Organization;
use App\Models\Ethnicity;
use App\Models\HouseMake;
use App\Models\HouseOwnership;
use App\Models\HouseType;
use App\Models\Sector;
use App\Models\Vehicles;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithCalculatedFormulas;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;
use Maatwebsite\Excel\Concerns\RemembersChunkOffset;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsOnError;

class ImportGads implements ToModel, WithHeadingRow, WithCalculatedFormulas, WithChunkReading, WithCustomCsvSettings, SkipsEmptyRows, SkipsOnError, WithValidation
{
    use RemembersChunkOffset;
    use Importable;

    public function rules(): array
    {
        return [
            'item_no' => [
                'required',
                'numeric',
            ],
        ];
    }

    public function onError(\Throwable $e)
    {
        return $e->getMessage();
    }

    public function model(array $row)
    {
        $result = [
            "building_no" => $row['building_no'],
            "house_unit" => $row['house_no'],
            "household_no" => $row['household_no'],
            "family_code" => $row['family_code'],
            "household_id" => $this->getHousehold($row['relationship_to_head_of_the_family_dropdown_option']),
            "last_name" => trim($row['last_name']),
            "first_name" => trim($row['first_name']),
            "middle_name" => trim($row['middle_name']),
            "extension_name" => trim($row['extension_name']),
            "barangay_id" => $this->convertStringToID(Barangay::class, 'barangay_name', $row['barangay_dropdown_option']),
            "barangay_code"  => $row["barangay_code_id_auto_generated"],
            "purok_id" => $this->convertStringToID(Purok::class, 'purok_name', $row['purok_code_dropdown_option']),
            "block_lot_house_id" => $row['blocklotno_of_house_street_name'],
            "sitio_id" => $this->convertStringToID(Sitio::class, 'sitio_name', $row['sitio_subdivision_dropdown_option']),
            "native_province_id" => $this->convertStringToID(Province::class, 'province_name', $row["native_province_dropdown_option"]),
            "native_city_id" => $this->convertStringToID(City::class, 'city_name', $row["native_citymunicipality_dropdown_option"]),
            "valid_id" => $this->convertStringToID(ValidID::class, 'name', $row["valid_id_dropdown_option"]),
            "id_number" => $row["id_no"],
            "birthdate" => $row["concatenated_format_mmddyyyy_auto_generated"],
            "gender_id" => $this->convertStringToID(Gender::class, 'gender_name', $row["sex_dropdown_option"]),
            "gender_preference_id" => $this->convertStringToID(GenderPreference::class, 'gender_preference_name', $row["gender_preference_dropdown_option"]),
            "civil_status_id" => $this->convertStringToID(CivilStatus::class, 'civil_status_name', $row["civil_status_dropdown_option"]),
            "no_of_dependents" => $row["no_of_dependents"],
            "mobile_no" => $row["cellphone_number"],
            "landline_number" => $row["landline_number_not_required"],
            "email" => $row["email_address"],
            "health_id" => $this->convertStringToID(Health::class, 'health_name', $row["health_condition_1_not_required_dropdown_option"]),
            // "" => $row["health_condition_2_not_required_dropdown_option"]),
            // "" => $row["health_condition_3_not_required_dropdown_option"]),
            "disability_id" => $this->convertStringToID(Health::class, 'health_name', $row["disability_condition_1_not_required_dropdown_option"]),
            // "" => $row["disability_condition_2_not_required_dropdown_option"]),
            // "" => $row["disability_condition_3_not_required_dropdown_option"]),
            // "" => $row["nutritional_status_ideal_wasted_stunted_obese_overweight"],TODO: what is this?
            "government_assistance_id" => $this->convertStringToID(GovernmentAssistance::class, 'government_assistance_name', $row["government_assistance_no_01_dropdown_option"]),
            // "" => $row["government_assistance_no_02_dropdown_option"]),
            // "" => $row["government_assistance_no_03_dropdown_option"]),
            "occupation" => $this->convertStringToID(Occupation::class, 'occupation_name', $row["occupation_dropdown_option"]),
            "employer" => $row["employer"],
            "work_location_province_id" => $this->convertStringToID(Province::class, 'province_name', $row["work_location_province_dropdown_option"]),
            "work_location_city_id" => $this->convertStringToID(City::class, 'city_name', $row["work_location_citymunicipality_dropdown_option"]),
            "household_monthly_income_id" => $row["household_monthly_income"],
            "economic_status_id" => $row["economic_status_auto_generated"],
            "educational_attaintment_id" => $this->convertStringToID(EducationalAttaintment::class, 'educational_attaintment_name', $row["highest_educational_attainment_dropdown_option"]),
            "educational_status_id" => $this->convertStringToID(EducationalStatus::class, 'educational_status_name', $row["educational_status_dropdown_option"]),
            "last_school_attended" => $row["last_school_attended"],
            "government_educational_assistance_id" => $this->convertStringToID(EducationalAssistance::class, 'educational_assistance_name', $row["government_educational_assistance_1_dropdown_option"]),
            // "" => $row["soft_skills_1_not_required_dropdown_option"]),
            // "" => $row["soft_skills_2_not_required_dropdown_option"]),
            // "" => $row["hard_skills_1_not_required_dropdown_option"]),
            // "" => $row["hard_skills_2_not_required_dropdown_option"]),
            // "" => $row["hobbies_1_not_required_dropdown_option"]),
            // "" => $row["hobbies_2_not_required_dropdown_option"]),
            // "" => $row["sports_1_not_required_dropdown_option"]),
            // "" => $row["sports_2_not_required_dropdown_option"]),
            "ethnicity_id" => $this->convertStringToID(Ethnicity::class, 'ethnicity_name', $row["ethnicity_no_01_not_required_dropdown_option"]),
            // "" => $row["ethnicity_no_02_not_required_dropdown_option"]),
            "religion_id" => $this->convertStringToID(Religion::class, 'religion_name', $row["religion_catholic_iglesia_ni_cristo_etc"]),
            "sector_id" => $this->convertStringToID(Sector::class, 'sector_name', $row["sector_no_01_not_required_dropdown_option"]),
            // "" => $row["sector_no_02_not_required_dropdown_option"]),
            // "" => $row["sector_no_03_not_required_dropdown_option"]),
            "political_province_registered_id" => $this->convertStringToID(Province::class, 'province_name', $row["province_registered_not_required_dropdown_option"]),
            "political_city_registered_id" => $this->convertStringToID(City::class, 'city_name', $row["city_municipality_registered_not_required_dropdown_option"]),
            // "barangay_residence_year" => $row["year_registered_not_required_dropdown_option"]),
            // "no_of_years_in_calamba" => $row["year_registered_in_calamba_not_required_dropdown_option"]),
            "house_ownership_id" => $this->convertStringToID(HouseOwnership::class, 'house_ownership_name', $row["house_ownership_dropdown_option"]),
            "house_type_id" => $this->convertStringToID(HouseType::class, 'house_type_name', $row["house_type_dropdown_option"]),
            "house_make_id" => $this->convertStringToID(HouseMake::class, 'house_make_name', $row["house_make_dropdown_option"]),
            "no_nuclear_family_household_id" => $row["no_of_nuclear_family_in_household"],
            "no_bedrooms_id" => $row["no_of_bedrooms"],
            "no_cr_id" => $row["no_of_crs"],
            "utilities_no1" => $this->convertStringToID(Utilities::class, 'utilities_name', $row["utilities_no_01_not_required_dropdown_option"]),
            "utilities_no2" => $this->convertStringToID(Utilities::class, 'utilities_name', $row["utilities_no_02_not_required_dropdown_option"]),
            "utilities_no3" => $this->convertStringToID(Utilities::class, 'utilities_name', $row["utilities_no_03_not_required_dropdown_option"]),
            "utilities_no4" => $this->convertStringToID(Utilities::class, 'utilities_name', $row["utilities_no_04_not_required_dropdown_option"]),
            "appliance_no1" => $this->convertStringToID(Appliances::class, 'appliance_name', $row["appliances_no_01_not_required_dropdown_option"]),
            "appliance_no2" => $this->convertStringToID(Appliances::class, 'appliance_name', $row["appliances_no_02_not_required_dropdown_option"]),
            "appliance_no3" => $this->convertStringToID(Appliances::class, 'appliance_name', $row["appliances_no_03_not_required_dropdown_option"]),
            "appliance_no4" => $this->convertStringToID(Appliances::class, 'appliance_name', $row["appliances_no_04_not_required_dropdown_option"]),
            "vehicle_no" => $this->convertStringToID(Vehicles::class, 'vehicles_name', $row["vehicles_no_01_not_required_dropdown_option"]),
            // "" => $row["vehicles_no_02_not_required_dropdown_option"]),
            "full_immunization" => $row["full_immunization_yes_public_hosp_center_yes_private_hosp_clinic_no"],
            "covid_19_test" => $row["covid_19_test_no_covid_test_tested_positive_for_covid19_tested_negative_for_covid19"],
            "first_vaccination" => $row["date_of_1st_dosage_19_vaccination_mmddyyyy"],
            "brand" => $row["brand_1"],
            "second_vaccination" => $row["date_of_2nd_dosage_19_vaccination_mmddyyyy"],
            "brand2" => $row["brand_2"],
            "pregnancy_age" => $row["pregnancy_age"],
            "prental_checkup" => $row["with_prenatal_check_up_yes_public_hosp_center_yes_private_hosp_clinic_no"],
            "postnatal_checkup" => $row["with_postnatal_check_up_yes_public_hosp_center_yes_private_hosp_clinic_no"],
            "medical_id" => $this->convertStringToID(Medicine::class, 'medicine_name', $row["maintaining_medicine_no_01"]),
            "organization_id" => $this->convertStringToID(
                Organization::class,
                'organization_name',
                $row["organizations_involved_no_01_not_required"]
            ),
            // "" => $row["organizations_involved_no_02_not_required"],
            "barangay_residence_year" => $row["barangay_residence_year"],
            "no_of_years_in_calamba" => $row["calamba_residence_year"],
            // "house_type_id" => $row["type_of_house"],
            "remarks" => $row["owner_name"],
        ];
        return new Gad($result);
    }
    private function getHousehold($data)
    {
        $result = substr($data, 0, 2);
        return (int) $result;
    }
    private function convertStringToID($class, $fields, $query)
    {
        $id = null;
        if (!empty($query)) {
            $result = $class::where($fields, 'LIKE', '%' . $query . '%')->first();
            $id = isset($result) ? $result->id : null;
        }

        return $id;
    }

    public function headingRow(): int
    {
        return 3;
    }

    public function chunkSize(): int
    {
        return 1000;
    }

    public function getCsvSettings(): array
    {
        return [
            'input_encoding' => 'ISO-8859-1'
        ];
    }
}
