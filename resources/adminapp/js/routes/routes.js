import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },

      {
        path: 'reports',
        name: 'reports',
        component: View,
        redirect: { name: 'generate_reports.index' },
        children: [
          {
            path: 'generate-reports',
            name: 'generate_reports.index',
            component: () => import('@cruds/Reports/Index.vue'),
            meta: { title: 'Generate Reports' }
          },
          {
            path: 'barangay-records',
            name: 'barangay_records.index',
            component: () => import('@cruds/BarangayRecords/Index.vue'),
            meta: { title: 'Barangay Records' }
          },
        ]
      },

      {
        path: 'transaction',
        name: 'transaction',
        component: View,
        redirect: { name: 'barangay_permit.index' },
        children: [
          {
            path: 'barangay-permit',
            name: 'barangay_permit.index',
            component: () => import('@cruds/BarangayPermit/Index.vue'),
            meta: { title: 'Barangay Permit' }
          },
        ]
      },

      {
        path: 'gad',
        name: 'gad',
        component: View,
        redirect: { name: 'gad_list.index' },
        children: [
          {
            path: 'gad-list',
            name: 'gad_list.index',
            component: () => import('@cruds/GadList/Index.vue'),
            meta: { title: 'Gad' }
          },
          {
            path: 'gad-list/:id/edit',
            name: 'gad_list.edit',
            component: () => import('@cruds/GadList/Edit.vue'),
            meta: { title: 'Gad' }
          },
          {
            path: 'gad-list/create',
            name: 'gad_list.create',
            component: () => import('@cruds/GadList/Create.vue'),
            meta: { title: 'Gad' }
          },
          {
            path: 'gad-list/:id/:barangay_id',
            name: 'gad_list.show',
            component: () => import('@cruds/GadList/Show.vue'),
            meta: { title: 'Gad' }
          },
        ]
      },
      {
        path: 'system_maintenance',
        name: 'system_maintenance',
        component: View,
        redirect: { name: 'barangay.index' },
        children: [
          {
            path: 'barangay',
            name: 'barangay.index',
            component: () => import('@cruds/Barangay/Index.vue'),
            meta: { title: 'Barangay' }
          },
          {
            path: 'barangay/create',
            name: 'barangay.create',
            component: () => import('@cruds/Barangay/Create.vue'),
            meta: { title: 'Barangay' }
          },
          {
            path: 'barangay/:id',
            name: 'barangay.show',
            component: () => import('@cruds/Barangay/Show.vue'),
            meta: { title: 'Barangay' }
          },
          {
            path: 'barangay/:id/edit',
            name: 'barangay.edit',
            component: () => import('@cruds/Barangay/Edit.vue'),
            meta: { title: 'Barangay' }
          },

          {
            path: 'household',
            name: 'household.index',
            component: () => import('@cruds/Household/Index.vue'),
            meta: { title: 'Household' }
          },
          {
            path: 'household/create',
            name: 'household.create',
            component: () => import('@cruds/Household/Create.vue'),
            meta: { title: 'Household' }
          },
          {
            path: 'household/:id',
            name: 'household.show',
            component: () => import('@cruds/Household/Show.vue'),
            meta: { title: 'Household' }
          },
          {
            path: 'household/:id/edit',
            name: 'household.edit',
            component: () => import('@cruds/Household/Edit.vue'),
            meta: { title: 'Household' }
          },

          {
            path: 'purok',
            name: 'purok.index',
            component: () => import('@cruds/Purok/Index.vue'),
            meta: { title: 'Purok' }
          },
          {
            path: 'purok/create',
            name: 'purok.create',
            component: () => import('@cruds/Purok/Create.vue'),
            meta: { title: 'Purok' }
          },
          {
            path: 'purok/:id',
            name: 'purok.show',
            component: () => import('@cruds/Purok/Show.vue'),
            meta: { title: 'Purok' }
          },
          {
            path: 'purok/:id/edit',
            name: 'purok.edit',
            component: () => import('@cruds/Purok/Edit.vue'),
            meta: { title: 'Purok' }
          },

          {
            path: 'sitio',
            name: 'sitio.index',
            component: () => import('@cruds/Sitio/Index.vue'),
            meta: { title: 'Sitio' }
          },
          {
            path: 'sitio/create',
            name: 'sitio.create',
            component: () => import('@cruds/Sitio/Create.vue'),
            meta: { title: 'Sitio' }
          },
          {
            path: 'sitio/:id',
            name: 'sitio.show',
            component: () => import('@cruds/Sitio/Show.vue'),
            meta: { title: 'Sitio' }
          },
          {
            path: 'sitio/:id/edit',
            name: 'sitio.edit',
            component: () => import('@cruds/Sitio/Edit.vue'),
            meta: { title: 'Sitio' }
          },

          {
            path: 'province',
            name: 'province.index',
            component: () => import('@cruds/Province/Index.vue'),
            meta: { title: 'Province' }
          },
          {
            path: 'province/create',
            name: 'province.create',
            component: () => import('@cruds/Province/Create.vue'),
            meta: { title: 'Province' }
          },
          {
            path: 'province/:id',
            name: 'province.show',
            component: () => import('@cruds/Province/Show.vue'),
            meta: { title: 'Province' }
          },
          {
            path: 'province/:id/edit',
            name: 'province.edit',
            component: () => import('@cruds/Province/Edit.vue'),
            meta: { title: 'Province' }
          },

          {
            path: 'city',
            name: 'city.index',
            component: () => import('@cruds/City/Index.vue'),
            meta: { title: 'City' }
          },
          {
            path: 'city/create',
            name: 'city.create',
            component: () => import('@cruds/City/Create.vue'),
            meta: { title: 'City' }
          },
          {
            path: 'city/:id',
            name: 'city.show',
            component: () => import('@cruds/City/Show.vue'),
            meta: { title: 'City' }
          },
          {
            path: 'city/:id/edit',
            name: 'city.edit',
            component: () => import('@cruds/City/Edit.vue'),
            meta: { title: 'City' }
          },

          {
            path: 'valid-id',
            name: 'valid_id.index',
            component: () => import('@cruds/ValidID/Index.vue'),
            meta: { title: 'Valid ID' }
          },
          {
            path: 'valid-id/create',
            name: 'valid_id.create',
            component: () => import('@cruds/ValidID/Create.vue'),
            meta: { title: 'Valid ID' }
          },
          {
            path: 'valid-id/:id',
            name: 'valid_id.show',
            component: () => import('@cruds/ValidID/Show.vue'),
            meta: { title: 'Valid ID' }
          },
          {
            path: 'valid-id/:id/edit',
            name: 'valid_id.edit',
            component: () => import('@cruds/ValidID/Edit.vue'),
            meta: { title: 'Valid ID' }
          },

          {
            path: 'sector',
            name: 'sector.index',
            component: () => import('@cruds/Sector/Index.vue'),
            meta: { title: 'Sector' }
          },
          {
            path: 'sector/create',
            name: 'sector.create',
            component: () => import('@cruds/Sector/Create.vue'),
            meta: { title: 'Sector' }
          },
          {
            path: 'sector/:id',
            name: 'sector.show',
            component: () => import('@cruds/Sector/Show.vue'),
            meta: { title: 'Sector' }
          },
          {
            path: 'sector/:id/edit',
            name: 'sector.edit',
            component: () => import('@cruds/Sector/Edit.vue'),
            meta: { title: 'Sector' }
          },

          {
            path: 'gender',
            name: 'gender.index',
            component: () => import('@cruds/Gender/Index.vue'),
            meta: { title: 'Gender' }
          },
          {
            path: 'gender/create',
            name: 'gender.create',
            component: () => import('@cruds/Gender/Create.vue'),
            meta: { title: 'Gender' }
          },
          {
            path: 'gender/:id',
            name: 'gender.show',
            component: () => import('@cruds/Gender/Show.vue'),
            meta: { title: 'Gender' }
          },
          {
            path: 'gender/:id/edit',
            name: 'gender.edit',
            component: () => import('@cruds/Gender/Edit.vue'),
            meta: { title: 'Gender' }
          },

          {
            path: 'gender-preference',
            name: 'gender_preference.index',
            component: () => import('@cruds/GenderPreference/Index.vue'),
            meta: { title: 'Gender Preference' }
          },
          {
            path: 'gender-preference/create',
            name: 'gender_preference.create',
            component: () => import('@cruds/GenderPreference/Create.vue'),
            meta: { title: 'Gender Preference' }
          },
          {
            path: 'gender-preference/:id',
            name: 'gender_preference.show',
            component: () => import('@cruds/GenderPreference/Show.vue'),
            meta: { title: 'Gender Preference' }
          },
          {
            path: 'gender-preference/:id/edit',
            name: 'gender_preference.edit',
            component: () => import('@cruds/GenderPreference/Edit.vue'),
            meta: { title: 'Gender Preference' }
          },

          {
            path: 'civil-status',
            name: 'civil_status.index',
            component: () => import('@cruds/CivilStatus/Index.vue'),
            meta: { title: 'Civil Status' }
          },
          {
            path: 'civil-status/create',
            name: 'civil_status.create',
            component: () => import('@cruds/CivilStatus/Create.vue'),
            meta: { title: 'Civil Status' }
          },
          {
            path: 'civil-status/:id',
            name: 'civil_status.show',
            component: () => import('@cruds/CivilStatus/Show.vue'),
            meta: { title: 'Civil Status' }
          },
          {
            path: 'civil-status/:id/edit',
            name: 'civil_status.edit',
            component: () => import('@cruds/CivilStatus/Edit.vue'),
            meta: { title: 'Civil Status' }
          },

          {
            path: 'health',
            name: 'health.index',
            component: () => import('@cruds/Health/Index.vue'),
            meta: { title: 'Health' }
          },
          {
            path: 'health/create',
            name: 'health.create',
            component: () => import('@cruds/Health/Create.vue'),
            meta: { title: 'Health' }
          },
          {
            path: 'health/:id',
            name: 'health.show',
            component: () => import('@cruds/Health/Show.vue'),
            meta: { title: 'Health' }
          },
          {
            path: 'health/:id/edit',
            name: 'health.edit',
            component: () => import('@cruds/Health/Edit.vue'),
            meta: { title: 'Health' }
          },

          {
            path: 'educational-assistance',
            name: 'educational_assistance.index',
            component: () => import('@cruds/EducationalAssistance/Index.vue'),
            meta: { title: 'educational Assistance' }
          },
          {
            path: 'educational-assistance/create',
            name: 'educational_assistance.create',
            component: () => import('@cruds/EducationalAssistance/Create.vue'),
            meta: { title: 'educational Assistance' }
          },
          {
            path: 'educational-assistance/:id',
            name: 'educational_assistance.show',
            component: () => import('@cruds/EducationalAssistance/Show.vue'),
            meta: { title: 'educational Assistance' }
          },
          {
            path: 'educational-assistance/:id/edit',
            name: 'educational_assistance.edit',
            component: () => import('@cruds/EducationalAssistance/Edit.vue'),
            meta: { title: 'educational Assistance' }
          },

          {
            path: 'monthly-income',
            name: 'monthly_income.index',
            component: () => import('@cruds/MonthlyIncome/Index.vue'),
            meta: { title: 'Monthly Income' }
          },
          {
            path: 'monthly-income/create',
            name: 'monthly_income.create',
            component: () => import('@cruds/MonthlyIncome/Create.vue'),
            meta: { title: 'Monthly Income' }
          },
          {
            path: 'monthly-income/:id',
            name: 'monthly_income.show',
            component: () => import('@cruds/MonthlyIncome/Show.vue'),
            meta: { title: 'Monthly Income' }
          },
          {
            path: 'monthly-income/:id/edit',
            name: 'monthly_income.edit',
            component: () => import('@cruds/MonthlyIncome/Edit.vue'),
            meta: { title: 'Monthly Income' }
          },

          {
            path: 'educational-attaintment',
            name: 'educational_attaintment.index',
            component: () => import('@cruds/EducationalAttaintment/Index.vue'),
            meta: { title: 'Educational Attaintment' }
          },
          {
            path: 'educational-attaintment/create',
            name: 'educational_attaintment.create',
            component: () => import('@cruds/EducationalAttaintment/Create.vue'),
            meta: { title: 'Educational Attaintment' }
          },
          {
            path: 'educational-attaintment/:id',
            name: 'educational_attaintment.show',
            component: () => import('@cruds/EducationalAttaintment/Show.vue'),
            meta: { title: 'Educational Attaintment' }
          },
          {
            path: 'educational-attaintment/:id/edit',
            name: 'educational_attaintment.edit',
            component: () => import('@cruds/EducationalAttaintment/Edit.vue'),
            meta: { title: 'Educational Attaintment' }
          },

          {
            path: 'educational-status',
            name: 'educational_status.index',
            component: () => import('@cruds/EducationalStatus/Index.vue'),
            meta: { title: 'Educational Status' }
          },
          {
            path: 'educational-status/create',
            name: 'educational_status.create',
            component: () => import('@cruds/EducationalStatus/Create.vue'),
            meta: { title: 'Educational Status' }
          },
          {
            path: 'educational-status/:id',
            name: 'educational_status.show',
            component: () => import('@cruds/EducationalStatus/Show.vue'),
            meta: { title: 'Educational Status' }
          },
          {
            path: 'educational-status/:id/edit',
            name: 'educational_status.edit',
            component: () => import('@cruds/EducationalStatus/Edit.vue'),
            meta: { title: 'Educational Status' }
          },

          {
            path: 'ethnicity',
            name: 'ethnicity.index',
            component: () => import('@cruds/Ethnicity/Index.vue'),
            meta: { title: 'Ethnicity' }
          },
          {
            path: 'ethnicity/create',
            name: 'ethnicity.create',
            component: () => import('@cruds/Ethnicity/Create.vue'),
            meta: { title: 'Ethnicity' }
          },
          {
            path: 'ethnicity/:id',
            name: 'ethnicity.show',
            component: () => import('@cruds/Ethnicity/Show.vue'),
            meta: { title: 'Ethnicity' }
          },
          {
            path: 'ethnicity/:id/edit',
            name: 'ethnicity.edit',
            component: () => import('@cruds/Ethnicity/Edit.vue'),
            meta: { title: 'Ethnicity' }
          },

          {
            path: 'house-ownership',
            name: 'house_ownership.index',
            component: () => import('@cruds/HouseOwnership/Index.vue'),
            meta: { title: 'House Ownership' }
          },
          {
            path: 'house-ownership/create',
            name: 'house_ownership.create',
            component: () => import('@cruds/HouseOwnership/Create.vue'),
            meta: { title: 'House Ownership' }
          },
          {
            path: 'house-ownership/:id',
            name: 'house_ownership.show',
            component: () => import('@cruds/HouseOwnership/Show.vue'),
            meta: { title: 'House Ownership' }
          },
          {
            path: 'house-ownership/:id/edit',
            name: 'house_ownership.edit',
            component: () => import('@cruds/HouseOwnership/Edit.vue'),
            meta: { title: 'House Ownership' }
          },

          {
            path: 'house-type',
            name: 'house_type.index',
            component: () => import('@cruds/HouseType/Index.vue'),
            meta: { title: 'House Type' }
          },
          {
            path: 'house-type/create',
            name: 'house_type.create',
            component: () => import('@cruds/HouseType/Create.vue'),
            meta: { title: 'House Type' }
          },
          {
            path: 'house-type/:id',
            name: 'house_type.show',
            component: () => import('@cruds/HouseType/Show.vue'),
            meta: { title: 'House Type' }
          },
          {
            path: 'house-type/:id/edit',
            name: 'house_type.edit',
            component: () => import('@cruds/HouseType/Edit.vue'),
            meta: { title: 'House Type' }
          },

          {
            path: 'house-make',
            name: 'house_make.index',
            component: () => import('@cruds/HouseMake/Index.vue'),
            meta: { title: 'House Make' }
          },
          {
            path: 'house-make/create',
            name: 'house_make.create',
            component: () => import('@cruds/HouseMake/Create.vue'),
            meta: { title: 'House Make' }
          },
          {
            path: 'house-make/:id',
            name: 'house_make.show',
            component: () => import('@cruds/HouseMake/Show.vue'),
            meta: { title: 'House Make' }
          },
          {
            path: 'house-make/:id/edit',
            name: 'house_make.edit',
            component: () => import('@cruds/HouseMake/Edit.vue'),
            meta: { title: 'House Make' }
          },

          {
            path: 'organization',
            name: 'organization.index',
            component: () => import('@cruds/Organization/Index.vue'),
            meta: { title: 'Organization' }
          },
          {
            path: 'organization/create',
            name: 'organization.create',
            component: () => import('@cruds/Organization/Create.vue'),
            meta: { title: 'Organization' }
          },
          {
            path: 'organization/:id',
            name: 'organization.show',
            component: () => import('@cruds/Organization/Show.vue'),
            meta: { title: 'Organization' }
          },
          {
            path: 'organization/:id/edit',
            name: 'organization.edit',
            component: () => import('@cruds/Organization/Edit.vue'),
            meta: { title: 'Organization' }
          },

          {
            path: 'resident-status',
            name: 'resident_status.index',
            component: () => import('@cruds/ResidentStatus/Index.vue'),
            meta: { title: 'Resident Status' }
          },
          {
            path: 'resident-status/create',
            name: 'resident_status.create',
            component: () => import('@cruds/ResidentStatus/Create.vue'),
            meta: { title: 'Resident Status' }
          },
          {
            path: 'resident-status/:id',
            name: 'resident_status.show',
            component: () => import('@cruds/ResidentStatus/Show.vue'),
            meta: { title: 'Resident Status' }
          },
          {
            path: 'resident-status/:id/edit',
            name: 'resident_status.edit',
            component: () => import('@cruds/ResidentStatus/Edit.vue'),
            meta: { title: 'Resident Status' }
          },
        ]
      },

      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
