<?php

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::resource('users', 'UsersApiController');

    //Gad
    Route::post('gad/media', 'GadApiController@storeMedia')->name('gad.storeMedia');
    Route::get('gad/get-data/{id}', 'GadApiController@getData')->name('gad.getData');
    Route::get('gad/get-name', 'GadApiController@getName')->name('gad.getName');
    Route::get('gad/first-data', 'GadApiController@firstData')->name('gad.firstData');
    Route::get('gad/third-data', 'GadApiController@thirdData')->name('gad.thirdData');
    Route::get('gad/show-data/{id}/{barangay_id}', 'GadApiController@showData')->name('gad.showData');
    Route::post('gad/import-excel', 'GadApiController@importExcel');
    Route::resource('gad', 'GadApiController');

    //Barangay
    Route::resource('barangay', 'BarangayApiController');

    //Household
    Route::resource('household', 'HouseholdApiController');

    //Purok
    Route::resource('purok', 'PurokApiController');

    //Sitio
    Route::resource('sitio', 'SitioApiController');

    //Province
    Route::resource('province', 'ProvinceApiController');

    //City
    Route::resource('city', 'CityApiController');

    //Valid ID
    Route::resource('valid-id', 'ValidApiController');

    //Sector
    Route::resource('sector', 'SectorApiController');

    //Gender
    Route::resource('gender', 'GenderApiController');

    //Gender Preference
    Route::resource('gender-preference', 'GenderPreferenceApiController');

    //Civil Status
    Route::resource('civil-status', 'CivilStatusApiController');

    //Health
    Route::resource('health', 'HealthApiController');

    //Government Assistancce
    Route::resource('government-assistance', 'GovernmentAssistanceApiController');

    //Monthly Income
    Route::resource('monthly-income', 'MonthlyIncomeApiController');

    //Educational Attaintment
    Route::resource('educational-attaintment', 'EducationalAttaintmentApiController');

    //Educational Status
    Route::resource('educational-status', 'EducationalStatusApiController');

    //Ethnicity
    Route::resource('ethnicity', 'EthnicityApiController');

    //House Owner
    Route::resource('house-ownership', 'HouseOwnershipApiController');

    //House Type
    Route::resource('house-type', 'HouseTypeApiController');

    //House Make
    Route::resource('house-make', 'HouseMakeApiController');

    //Organization
    Route::resource('organization', 'OrganizationApiController');

    //Resident Status
    Route::resource('resident-status', 'ResidentStatusApiController');

    //Educational Assistance
    Route::resource('educational-assistance', 'EducationalAssistanceApiController');

    //Dashboard
    Route::get('dashboard/government-assistance', 'DashboardApiController@getGoverment')->name('dashboard.getGoverment');
    Route::get('dashboard/monthly-income', 'DashboardApiController@getMonthlyIncome')->name('dashboard.getMonthlyIncome');
    Route::resource('dashboard', 'DashboardApiController');

    //Generate Reports
    Route::get('reports/get-data', 'ReportsApiController@getData')->name('reports.getData');
    Route::get('reports/get-sitpurok/{id}', 'ReportsApiController@getSitioPurok')->name('reports.getSitioPurok');
    Route::resource('reports', 'ReportsApiController');

    //Survey
    Route::resource('survey', 'SurveyApiController');
});
