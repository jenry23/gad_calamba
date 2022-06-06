<?php

namespace App\Imports;

use App\Models\Gad;
use App\Models\Barangay;
use App\Models\Sitio;
use App\Models\Purok;
use App\Models\CivilStatus;
use App\Models\Disability;
use App\Models\Gender;
use App\Models\Utilities;
use App\Models\Appliances;
use App\Models\Religion;
use App\Models\GenderPreference;
use App\Models\ValidID;
use App\Models\GovernmentAssistance;
use App\Models\Medical;
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
use App\Models\SoftSkill;
use App\Models\HardSkill;
use App\Models\Hobbies;
use App\Models\Sports;
use App\Models\GadItemDetails;
use App\Models\MonthlyIncome;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithCalculatedFormulas;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;
use Maatwebsite\Excel\Concerns\RemembersChunkOffset;
// use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ImportGads implements ToCollection, WithHeadingRow, WithCalculatedFormulas, WithCustomCsvSettings, SkipsEmptyRows, SkipsOnError, WithValidation
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

    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            DB::transaction(function () use ($row) {
                $barangay_id = $this->convertStringToID(Barangay::class, 'barangay_name', $row['barangay_dropdown_option']);
                $birthday = Carbon::parse($row["concatenated_format_mmddyyyy_auto_generated"])->format('Y-m-d');
                $full_name = substr(trim($row['first_name']), 0, 1) . substr(trim($row['middle_name']), 0, 1) . substr(trim($row['last_name']), 0, 1);

                $gad_unique_id = 'LAG-CAL' . $barangay_id . '-' . $row['household_number'] . $full_name
                    . substr($birthday, -2) . '-00-0000';
                $gad = new Gad();
                $gad->gad_id = $gad_unique_id ?? null;
                $gad->building_no = $row['building_no'] ?? null;
                $gad->household_no = $row['household_number'] ?? null;
                $gad->house_no = $row['house_no'] ?? null;
                $gad->family_code = $row['family_code'] ?? null;
                $gad->household_id = $this->getHousehold($row['relationship_to_head_of_the_family_dropdown_option']);
                $gad->last_name = trim($row['last_name']) ?? null;
                $gad->first_name = trim($row['first_name']) ?? null;
                $gad->middle_name = trim($row['middle_name']) ?? null;
                $gad->extension_name = trim($row['extension_name']) ?? null;
                $gad->barangay_id = $barangay_id ?? null;
                $gad->barangay_code  = $row["barangay_code_id_auto_generated"];
                $gad->purok_id = $this->convertStringToID(Purok::class, 'purok_name', $row['purok_code_dropdown_option']);
                $gad->block_lot_house_id = $row['blocklotno_of_house_street_name'];
                $gad->sitio_id = $this->convertStringToID(Sitio::class, 'sitio_name', $row['sitio_subdivision_dropdown_option']);
                $gad->native_province_id = $this->convertStringToID(Province::class, 'province_name', $row["native_province_dropdown_option"]);
                $gad->native_city_id = $this->convertStringToID(City::class, 'city_name', $row["native_citymunicipality_dropdown_option"]);
                $gad->valid_id = $this->convertStringToID(ValidID::class, 'name', $row["valid_id_dropdown_option"]);
                $gad->id_number = $row["id_no"] ?? null;
                $gad->birth_date = $birthday ?? null;
                $gad->gender_id = $this->convertStringToID(Gender::class, 'gender_name', $row["sex_dropdown_option"]);
                $gad->gender_preference_id = $this->convertStringToID(GenderPreference::class, 'gender_preference_name', $row["gender_preference_dropdown_option"]);
                $gad->civil_status_id = $this->convertStringToID(CivilStatus::class, 'civil_status_name', $row["civil_status_dropdown_option"]);
                $gad->no_of_dependents = $row["no_of_dependents"] ?? null;
                $gad->mobile_no = $row["cellphone_number"] ?? null;
                $gad->landline_number = $row["landline_number_not_required"] ?? null;
                $gad->email = $row["email_address"] ?? null;
                $gad->nutrition_status = $row["nutritional_status_ideal_wasted_stunted_obese_overweight"] ?? null;
                $gad->occupation_id = $this->convertStringToID(Occupation::class, 'occupation_name', $row["occupation_dropdown_option"]);
                $gad->employer = $row["employer"] ?? null;
                $gad->work_location_province_id = $this->convertStringToID(Province::class, 'province_name', $row["work_location_province_dropdown_option"]);
                $gad->work_location_city_id = $this->convertStringToID(City::class, 'city_name', $row["work_location_citymunicipality_dropdown_option"]);
                $gad->monthly_income_id = $this->convertStringToID(MonthlyIncome::class, 'monthly_income_name', $row["economic_status_auto_generated"]);
                $gad->educational_attaintment_id = $this->convertStringToID(EducationalAttaintment::class, 'educational_attaintment_name', $row["highest_educational_attainment_dropdown_option"]);
                $gad->educational_status_id = $this->convertStringToID(EducationalStatus::class, 'educational_status_name', $row["educational_status_dropdown_option"]) ?? null;
                $gad->last_school_attended = $row["last_school_attended"];
                $gad->religion_id = $this->convertStringToID(Religion::class, 'religion_name', $row["religion_catholic_iglesia_ni_cristo_etc"]);
                $gad->political_province_registered_id = $this->convertStringToID(Province::class, 'province_name', $row["province_registered_not_required_dropdown_option"]);
                $gad->political_city_registered_id = $this->convertStringToID(City::class, 'city_name', $row["city_municipality_registered_not_required_dropdown_option"]);
                $gad->political_brgy_registered = $row['brgy_registered_not_required_dropdown_option'] ?? null;
                $gad->political_precinct_no = $row['precinct_no_not_required_dropdown_option'] ?? null;
                $gad->house_ownership_id = $this->convertStringToID(HouseOwnership::class, 'house_ownership_name', $row["house_ownership_dropdown_option"]);
                $gad->house_type_id = $this->convertStringToID(HouseType::class, 'house_type_name', $row["house_type_dropdown_option"]);
                $gad->house_make_id = $this->convertStringToID(HouseMake::class, 'house_make_name', $row["house_make_dropdown_option"]);
                $gad->no_nuclear_family_household_id = is_numeric($row["no_of_nuclear_family_in_household"]) ? (int) $row["no_of_bedrooms"] : null;
                $gad->no_bedrooms_id = is_numeric($row["no_of_bedrooms"]) ? (int) $row["no_of_bedrooms"] : null;
                $gad->no_cr_id = is_numeric($row["no_of_crs"]) ? (int) $row["no_of_bedrooms"] : null;
                $gad->full_immunization = $row["full_immunization_yes_public_hosp_center_yes_private_hosp_clinic_no"] ?? null;
                $gad->covid_19_test = $row["covid_19_test_no_covid_test_tested_positive_for_covid19_tested_negative_for_covid19"] ?? null;
                $gad->first_date_vaccination = Carbon::parse($row["date_of_1st_dosage_covid_19_vaccination_format_mmddyyyy"])->format('Y-m-d') ?? null;
                $gad->brand1 = $row["brand_1"] ?? null;
                $gad->second_date_vaccination = Carbon::parse($row["date_of_2nd_dosage_covid_19_vaccination_format_mmddyyyy"])->format('Y-m-d') ?? null;
                $gad->brand2 = $row["brand_2"] ?? null;
                $gad->pregnancy_age = $row["pregnancy_age"] ?? null;
                $gad->prental_checkup = $row["with_prenatal_check_up_yes_public_hosp_center_yes_private_hosp_clinic_no"] ?? null;
                $gad->postnatal_checkup = $row["with_postnatal_check_up_yes_public_hosp_center_yes_private_hosp_clinic_no"] ?? null;
                $gad->barangay_residence_year = (int) $row["barangay_residence_year"] ?? null;
                $gad->calamba_residence_year = (int) $row["calamba_residence_year"] ?? null;
                $gad->remarks = $row["remarks"] ?? null;
                $gad->save();

                $gad_id = $gad->id;
                $this->addGadDetailsItem($gad_id, Health::class, $this->convertStringToID(Health::class, 'health_name', $row["health_condition_1_not_required_dropdown_option"]), 'health');
                $this->addGadDetailsItem($gad_id, Health::class, $this->convertStringToID(Health::class, 'health_name', $row["health_condition_2_not_required_dropdown_option"]), 'health');
                $this->addGadDetailsItem($gad_id, Health::class, $this->convertStringToID(Health::class, 'health_name', $row["health_condition_3_not_required_dropdown_option"]), 'health');
                $this->addGadDetailsItem($gad_id, Disability::class, $this->convertStringToID(Health::class, 'health_name', $row["disability_condition_2_not_required_dropdown_option"]), 'disability');
                $this->addGadDetailsItem($gad_id, Disability::class, $this->convertStringToID(Health::class, 'health_name', $row["disability_condition_3_not_required_dropdown_option"]), 'disability');
                $this->addGadDetailsItem($gad_id, GovernmentAssistance::class, $this->convertStringToID(GovernmentAssistance::class, 'government_assistance_name', $row["government_assistance_no_02_dropdown_option"]), 'government_assistance');
                $this->addGadDetailsItem($gad_id, GovernmentAssistance::class, $this->convertStringToID(GovernmentAssistance::class, 'government_assistance_name', $row["government_assistance_no_03_dropdown_option"]), 'government_assistance');
                $this->addGadDetailsItem($gad_id, SoftSkill::class, $this->convertStringToID(SoftSkill::class, 'soft_skill_name', $row["soft_skills_1_not_required_dropdown_option"]), 'soft_skill');
                $this->addGadDetailsItem($gad_id, SoftSkill::class, $this->convertStringToID(SoftSkill::class, 'soft_skill_name', $row["soft_skills_2_not_required_dropdown_option"]), 'soft_skill');
                $this->addGadDetailsItem($gad_id, HardSkill::class, $this->convertStringToID(HardSkill::class, 'hard_skill_name', $row["hard_skills_1_not_required_dropdown_option"]), 'hard_skill');
                $this->addGadDetailsItem($gad_id, HardSkill::class, $this->convertStringToID(HardSkill::class, 'hard_skill_name', $row["hard_skills_2_not_required_dropdown_option"]), 'hard_skill');
                $this->addGadDetailsItem($gad_id, Hobbies::class, $this->convertStringToID(Hobbies::class, 'hobbies_name', $row["hobbies_1_not_required_dropdown_option"]), 'hobbies');
                $this->addGadDetailsItem($gad_id, Hobbies::class, $this->convertStringToID(Hobbies::class, 'hobbies_name', $row["hobbies_2_not_required_dropdown_option"]), 'hobbies');
                $this->addGadDetailsItem($gad_id, Sports::class, $this->convertStringToID(Sports::class, 'sports_name', $row["sports_1_not_required_dropdown_option"]), 'sports');
                $this->addGadDetailsItem($gad_id, Sports::class, $this->convertStringToID(Sports::class, 'sports_name', $row["sports_2_not_required_dropdown_option"]), 'sports');
                $this->addGadDetailsItem($gad_id, Ethnicity::class, $this->convertStringToID(Ethnicity::class, 'ethnicity_name', $row["ethnicity_no_01_not_required_dropdown_option"]), 'ethnicity');
                $this->addGadDetailsItem($gad_id, Sector::class, $this->convertStringToID(Sector::class, 'sector_name', $row["sector_no_01_not_required_dropdown_option"]), 'sector');
                $this->addGadDetailsItem($gad_id, Sector::class, $this->convertStringToID(Sector::class, 'sector_name', $row["sector_no_02_not_required_dropdown_option"]), 'sector');
                $this->addGadDetailsItem($gad_id, Utilities::class, $this->convertStringToID(Utilities::class, 'utilities_name', $row["utilities_no_01_not_required_dropdown_option"]), 'utilities');
                $this->addGadDetailsItem($gad_id, Utilities::class, $this->convertStringToID(Utilities::class, 'utilities_name', $row["utilities_no_02_not_required_dropdown_option"]), 'utilities');
                $this->addGadDetailsItem($gad_id, Utilities::class, $this->convertStringToID(Utilities::class, 'utilities_name', $row["utilities_no_03_not_required_dropdown_option"]), 'utilities');
                $this->addGadDetailsItem($gad_id, Utilities::class, $this->convertStringToID(Utilities::class, 'utilities_name', $row["utilities_no_04_not_required_dropdown_option"]), 'utilities');
                $this->addGadDetailsItem($gad_id, Appliances::class, $this->convertStringToID(Appliances::class, 'appliance_name', $row["appliances_no_01_not_required_dropdown_option"]), 'appliance');
                $this->addGadDetailsItem($gad_id, Appliances::class, $this->convertStringToID(Appliances::class, 'appliance_name', $row["appliances_no_02_not_required_dropdown_option"]), 'appliance');
                $this->addGadDetailsItem($gad_id, Appliances::class, $this->convertStringToID(Appliances::class, 'appliance_name', $row["appliances_no_03_not_required_dropdown_option"]), 'appliance');
                $this->addGadDetailsItem($gad_id, Appliances::class, $this->convertStringToID(Appliances::class, 'appliance_name', $row["appliances_no_04_not_required_dropdown_option"]), 'appliance');
                $this->addGadDetailsItem($gad_id, Vehicles::class, $this->convertStringToID(Vehicles::class, 'vehicles_name', $row["vehicles_no_01_not_required_dropdown_option"]), 'vehicle');
                $this->addGadDetailsItem($gad_id, Vehicles::class, $this->convertStringToID(Vehicles::class, 'vehicles_name', $row["vehicles_no_02_not_required_dropdown_option"]), 'vehicle');
                $this->addGadDetailsItem($gad_id, Organization::class, $this->convertStringToID(Organization::class, 'organization_name', $row["organizations_involved_no_01_not_required"]), 'organization');
                $this->addGadDetailsItem($gad_id, Organization::class, $this->convertStringToID(Organization::class, 'organization_name', $row["organizations_involved_no_02_not_required"]), 'organization');
                $this->addGadDetailsItem($gad_id, Organization::class, $this->convertStringToID(Organization::class, 'organization_name', $row["organizations_involved_no_02_not_required"]), 'organization');
                $this->addGadDetailsItem($gad_id, Medical::class, $this->convertStringToID(Medical::class, 'health_name', $row["maintaining_medicine_no_01"]), 'medical');
                $this->addGadDetailsItem($gad_id, Medical::class, $this->convertStringToID(Medical::class, 'health_name', $row["maintaining_medicine_no_02"]), 'medical');
            });
        }
        return true;
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

    private function addGadDetailsItem(int $gad_id, $class, $item_id, $item_name)
    {
        if (!empty($item_id)) {
            $data = [
                'gad_id' => $gad_id,
                'item_type' => $class,
                'item_id' => $item_id,
                'item_name' => $item_name,
                'status' => 1
            ];
            GadItemDetails::create($data);
        }
    }

    public function headingRow(): int
    {
        return 3;
    }

    // public function chunkSize(): int
    // {
    //     return 1000;
    // }

    public function getCsvSettings(): array
    {
        return [
            'input_encoding' => 'ISO-8859-1'
        ];
    }
}
