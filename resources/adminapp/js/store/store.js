import Vue from 'vue'
import Vuex from 'vuex'

import Alert from './modules/alert'
import I18NStore from './modules/i18n'
import PermissionsIndex from './cruds/Permissions'
import PermissionsSingle from './cruds/Permissions/single'
import RolesIndex from './cruds/Roles'
import RolesSingle from './cruds/Roles/single'
import UsersIndex from './cruds/Users'
import UsersSingle from './cruds/Users/single'
import GadListIndex from './cruds/GadList'
import GadListSingle from './cruds/GadList/single'
import BarangaySanggunianIndex from './cruds/BarangaySanggunian'
import BarangaySanggunianSingle from './cruds/BarangaySanggunian/single'
import BarangayIndex from './cruds/Barangay'
import BarangaySingle from './cruds/Barangay/single'
import HouseholdIndex from './cruds/Household'
import HouseholdSingle from './cruds/Household/single'
import PurokIndex from './cruds/Purok'
import PurokSingle from './cruds/Purok/single'
import SitioIndex from './cruds/Sitio'
import SitioSingle from './cruds/Sitio/single'
import ProvinceIndex from './cruds/Province'
import ProvinceSingle from './cruds/Province/single'
import CityIndex from './cruds/City'
import CitySingle from './cruds/City/single'
import ValidIDIndex from './cruds/ValidID'
import ValidIDSingle from './cruds/ValidID/single'
import SectorIndex from './cruds/Sector'
import SectorSingle from './cruds/Sector/single'
import GenderIndex from './cruds/Gender'
import GenderSingle from './cruds/Gender/single'
import GenderPreferenceIndex from './cruds/GenderPreference'
import GenderPreferenceSingle from './cruds/GenderPreference/single'
import CivilStatusIndex from './cruds/CivilStatus'
import CivilStatusSingle from './cruds/CivilStatus/single'
import HealthIndex from './cruds/Health'
import HealthSingle from './cruds/Health/single'
import GovernmentAssistanceIndex from './cruds/GovernmentAssistance'
import GovernmentAssistanceSingle from './cruds/GovernmentAssistance/single'
import MonthlyIncomeIndex from './cruds/MonthlyIncome'
import MonthlyIncomeSingle from './cruds/MonthlyIncome/single'
import EducationalAttaintmentIndex from './cruds/EducationalAttaintment'
import EducationalAttaintmentSingle from './cruds/EducationalAttaintment/single'
import EducationalStatusIndex from './cruds/EducationalStatus'
import EducationalStatusSingle from './cruds/EducationalStatus/single'
import EducationalAssistanceIndex from './cruds/EducationalAssistance'
import EducationalAssistanceSingle from './cruds/EducationalAssistance/single'
import EthnicityIndex from './cruds/Ethnicity'
import EthnicitySingle from './cruds/Ethnicity/single'
import HouseOwnershipIndex from './cruds/HouseOwnership'
import HouseOwnershipSingle from './cruds/HouseOwnership/single'
import HouseTypeIndex from './cruds/HouseType'
import HouseTypeSingle from './cruds/HouseType/single'
import HouseMakeIndex from './cruds/HouseMake'
import HouseMakeSingle from './cruds/HouseMake/single'
import OrganizationIndex from './cruds/Organization'
import OrganizationSingle from './cruds/Organization/single'
import ResidentStatusIndex from './cruds/ResidentStatus'
import ResidentStatusSingle from './cruds/ResidentStatus/single'
import DashboardIndex from './cruds/Dashboard'
import ReportsSingle from './cruds/Reports/single'
import BarangayPermitSingle from './cruds/BarangayPermit/single'
import BarangayRecordsIndex from './cruds/BarangayRecords/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Alert,
    I18NStore,
    PermissionsIndex,
    PermissionsSingle,
    RolesIndex,
    RolesSingle,
    UsersIndex,
    UsersSingle,
    GadListIndex,
    GadListSingle,
    BarangayIndex,
    BarangaySingle,
    HouseholdIndex,
    HouseholdSingle,
    PurokIndex,
    PurokSingle,
    SitioIndex,
    SitioSingle,
    ProvinceIndex,
    ProvinceSingle,
    CityIndex,
    CitySingle,
    ValidIDIndex,
    ValidIDSingle,
    SectorIndex,
    SectorSingle,
    GenderIndex,
    GenderSingle,
    GenderPreferenceIndex,
    GenderPreferenceSingle,
    CivilStatusIndex,
    CivilStatusSingle,
    HealthIndex,
    HealthSingle,
    GovernmentAssistanceIndex,
    GovernmentAssistanceSingle,
    MonthlyIncomeIndex,
    MonthlyIncomeSingle,
    EducationalAttaintmentIndex,
    EducationalAttaintmentSingle,
    EducationalStatusIndex,
    EducationalStatusSingle,
    EducationalAssistanceIndex,
    EducationalAssistanceSingle,
    EthnicityIndex,
    EthnicitySingle,
    HouseOwnershipIndex,
    HouseOwnershipSingle,
    HouseTypeIndex,
    HouseTypeSingle,
    HouseMakeIndex,
    HouseMakeSingle,
    OrganizationIndex,
    OrganizationSingle,
    ResidentStatusIndex,
    ResidentStatusSingle,
    DashboardIndex,
    ReportsSingle,
    BarangayPermitSingle,
    BarangayRecordsIndex,
    BarangaySanggunianIndex,
    BarangaySanggunianSingle,
  },
  strict: debug
})
