import { Schema,models,model } from "mongoose";

const facilitySchema = new Schema({
    FacilityLocation:{
        FacilityName:{
            type:String,
            require:true,
            trim: true,
        },
        CountryHealthOfficeLatitude:{
            type:String,
            require:true,
            trim: true,
        },
        CountryHealthOfficeLongitude:{
            type:String,
            require:true,
            trim: true,
        },
        ApparentNetworkAccessibilityOfTheFacility:{
            type:String,
            require:true,
            trim: true,
        }
    },
    Network:{
        DoYouHaveGSMNetworkCoverageAtYourFacility:{
            type:Boolean,
            require:true,
        },
        HowManyNetworkOperatorsDoYouHaveAccessTo:{
            type:String,
            require:true,
        },
        DoYouHaveSMSCoverageInYourFacility:{
            type:Boolean,
            require:true,
        },
        AreYouAbleToMakePhoneCallUsingTheGSMNetworkAtYourFacility:{
            type:Boolean,
            require:true,
        },
        DoYouHaveMobileInternetCoverageAtYourFacility:{
            type:Boolean,
            require:true,
        },
        DoYouHaveAWorkingInternetSubscriptionAtYourFacility:{
            type:Boolean,
            require:true,
        },
        WhoIsPayingForTheSubscription:{
            type:String,
            require:true,
        },
        HowCanYouClassifyTheSpeedQualityOfYourInternetConnection:{
            type:String,
            require:true,
        },
        IfPossibleProvideAInternetSpeedTestResult:{
            type:String,
            require:true,
        },
        IsTheQualityOfInternetConnectivityGoodEnough_for_health_workers_to_perform_their_work:{
            type:String,
            require:true,
        },
        Is_there_a_cable_or_wireless_network_that_connects_the_Facility_computers_to_Internet:{
            type:Boolean,
            require:true,
        },
        Is_your_Facility_connecting_to_Internet_over_VSAT_network_dish:{
            type:Boolean,
            require:true,
        },
        Is_your_Facility_connecting_to_Internet_using_technologies_others_than_VSAT_and_Mobile_network:{
            type:Boolean,
            require:true,
        },
        If_yes_please_provide_the_name_of_technology_in_use:{
            type:String,
            require:true,
        },
        Is_there_any_corporate_or_governmental_WAN_within_3_km_of_the_Facility:{
            type:Boolean,
            require:true,
        }

    },
    3:{
        Number_of_computers_in_the_Facility:{
            type:Number,
            require:true,
            trim: true,
        },
        Number_of_functional_computers:{
            type:Number,
            require:true,
            trim: true,
        },
        Number_of_computers_connected_to_Internet:{
            type:Number,
            require:true,
            trim: true,
        },
        Is_the_number_of_computers_available_sufficient_to_perform_the_work_to_be_carried_out:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Number_of_3G_USB_modem_in_the_Facility:{
            type:Number,
            require:true,
            trim: true,
        },
        Number_of_smartphones_own_by_the_Facility:{
            type:Number,
            require:true,
            trim: true,
        },
        Number_of_health_workers_owning_a_smartphones:{
            type:Number,
            require:true,
            trim: true,
        },
        Number_of_health_workers_owning_basics_or_features_phones:{
            type:Number,
            require:true,
            trim: true,
        },
        Number_of_regular_line_handset_in_the_Facility:{
            type:Number,
            require:true,
            trim: true,
        },
        Number_of_basic_features_phones_in_the_Facility:{
            type:Number,
            require:true,
            trim: true,
        },
        Number_of_scanners_in_the_Facility:{
            type:Number,
            require:true,
            trim: true,
        },
        Number_of_printers_in_the_Facility:{
            type:Number,
            require:true,
            trim: true,
        },
        Number_of_GPS_devices_GPS_or_Phone_with_GPS_capability_in_the_Facility:{
            type:Number,
            require:true,
            trim: true,
        }
        
    },
    Governance:{
        Does_your_Facility_have_a_budget_line_to_cover_Internet_expenses:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Does_your_Facility_have_policy_in_place_to_guide_the_use_of_Internet_at_work:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Does_your_Facility_have_policy_in_place_to_help_manage_network_security:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Does_your_Facility_have_policy_in_place_for_computer_maintenance:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Does_your_Facility_have_policy_in_place_to_deal_with_lost_of_hardware:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Does_your_Facility_in_inventory_of_hardware_own_by_the_Facility:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Does_your_Facility_have_a_policy_document_to_guide_data_backup:{
            type:Boolean,
            require:true,
            trim: true,
        }
    },
    Finance:{
        Average_amount_paid_by_health_Workers_to_support_Internet_fees_for_work:{
            type:Number,
            require:true,
            trim: true,
        },
        Internet_subscription_fees_supported_by_the_facility:{
            type:Number,
            require:true,
            trim: true,
        },
        Internet_subscription_fees_supported_by_donors:{
            type:Number,
            require:true,
            trim: true,
        },
        Monthly_hardware_maintenance_cost_at_facility_level:{
            type:Number,
            require:true,
            trim: true,
        },
        Monthly_network_maintenance_cost_at_facility_level:{
            type:Number,
            require:true,
            trim: true,
        }
    },
    Security:{
        Are_the_buildings_protecting_the_computers_secure:{
            type:Boolean,
            require:true,
            trim: true,
        },
        How_many_computers_in_the_Facility_have_an_updated_antivirus_system:{
            type:Number,
            require:true,
            trim: true,
        },
        Does_the_Facility_already_report_lost_of_computer_or_any_IT_related_hardware:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Do_you_perform_routine_backup_of_the_Facility_data_on_an_external_hard_drive:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Do_you_keep_routinely_a_backup_copy_of_the_Facility_data_at_a_different_physical_location:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Do_you_use_a_cloud_based_system_to_backup_your_data:{
            type:Boolean,
            require:true,
            trim: true,
        }
    },
    Maintenance:{
        HR_Internal_or_external_available_to_perform_maintenance_of_the_IT_infrastructure:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Number_of_computer_aged_more_than_3_years:{
            type:Number,
            require:true,
            trim: true,
        }
    },
    Users:{
        Total_number_of_health_workers_in_the_Facility_owning_an_email_account:{
            type:String,
            require:true,
            trim: true,
        },
        Number_of_health_worker_that_considers_them_self_comfortable_with_the_use_of_a_computer:{
            type:String,
            require:true,
            trim: true,
        },
        How_many_data_managers_do_you_have_in_the_Facility:{
            type:String,
            require:true,
            trim: true,
        },
        MS_Excel:{
            type:String,
            require:true,
            trim: true,
        },
        MS_Word:{
            type:String,
            require:true,
            trim: true,
        },
        MS_PowerPoint:{
            type:String,
            require:true,
            trim: true,
        },
        Internet_email:{
            type:String,
            require:true,
            trim: true,
        },
        MS_Access:{
            type:String,
            require:true,
            trim: true,
        },
        Basic_computer_trouble_shooting:{
            type:String,
            require:true,
            trim: true,
        },
        DHIS2:{
            type:String,
            require:true,
            trim: true,
        },
        Please_rate_the_computer_literacy_skills_for_the_M_E_Officer:{
            type:String,
            require:true,
            trim: true,
        },
        MS_Excel_Officer:{
            type:String,
            require:true,
            trim: true,
        },
        MS_Word_Officer:{
            type:String,
            require:true,
            trim: true,
        },
        MS_PowerPoint_Officer:{
            type:String,
            require:true,
            trim: true,
        },
        Internet_email_Officer:{
            type:String,
            require:true,
            trim: true,
        },
        MS_Access_Officer:{
            type:String,
            require:true,
            trim: true,
        },
        Basic_computer_trouble_shooting_Officer:{
            type:String,
            require:true,
            trim: true,
        },
        DHIS2_Officer:{
            type:String,
            require:true,
            trim: true,
        },
    },
    Connectivity:{
        Are_you_able_to_access_the_Liberia_DHIS2_server_from_your_facility:{
            type:String,
            require:true,
            trim: true,
        },
        If_yes_provide_average_time_required_to_load_the_data_entry_screen:{
            type:String,
            trim: true,
        },
        Please_provide_average_time_required_to_load_the_DHIS2_pivot_table_module_screen:{
            type:String,
            require:true,
            trim: true,
        },
        Are_you_able_to_access_the_Liberia_iHRIS_server_from_your_facility:{
            type:Boolean,
            require:true,
            trim: true,
        },
        If_yes_provide_average_time_required_to_load_the_home_screen:{
            type:String,
            trim: true,
        },
        Are_you_able_to_receive_SMS_from_the_MoH_using_the_mHERO_platform:{
            type:Boolean,
            require:true,
            trim: true,
        },
        if_yes_are_you_able_to_reply_to_SMS_surveys_sent_to_you:{
            type:Boolean,
            trim: true,
        },
        If_you_dont_have_access_to_DHIS2_how_are_you_reporting_to_the_MoH_HMIS:{
            type:String,
            require:true,
            trim: true,
        },
        SMS:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Paper_form_that_are_physically_carried_to_the_upper_level:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Going_to_another_office_Facility_to_send_your_data:{
            type:Boolean,
            require:true,
            trim: true,
        },
        Others_Please_specify:{
            type:String,
            require:true,
            trim: true,
        },
        Are_you_using_instant_messaging_service_like_Skype_Viber_WhatsApp_Telegram_Tango_etc:{
            type:Boolean,
            require:true,
            trim: true,
        },
        If_yes_are_you_using_them_to_convey_work_related_message:{
            type:Boolean,
            trim: true,
        },
        if_yes_provide_the_name_of_the_instant_messaging_service_you_use_the_most:{
            type:String,
            trim: true,
        }
    },
    Power_Availability:{
        Duration_in_hours_of_power_supply_per_day:{
            type:String,
            require:true,
            trim: true,
        },
        Number_of_hours_the_power_supply_is_available_during_the_weekend:{
            type:String,
            require:true,
            trim: true,
        },
        Source_of_power:{
            type:String,
            require:true,
            trim: true,
        }
    },
    location: {
        type:String,
        coordinates: [],
    },
})
 facilitySchema.index({location: "2dsphere"});
const Facility = models.Facility || model("Facility",facilitySchema);

export default Facility;