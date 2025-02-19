export function getStringValue(key) {
  if (key in tamilStrings) {
    return tamilStrings[key];
  }
  console.error(key +  " not found in tamilStrings");
  return "";
}

const tamilStrings = {
  INACCURATE_DATE_AND_TIME: "துல்லியமற்ற தேதி & நேரம்!",
  ADJUST_YOUR_DEVICE_DATE_AND_TIME_AND_TRY_AGAIN: "உங்கள் மொபைல் தேதி மற்றும் நேரத்தை சரிசெய்து மீண்டும் முயற்சிக்கவும்",
  THE_CURRENT_DATE_AND_TIME_IS: "தற்போதைய தேதி மற்றும் நேரம்",
  GO_TO_SETTING: "அமைப்புகளுக்குச் செல்லவும்",
  LETS_GET_STARTED: "ஆரம்பிக்கலாம்",
  YOUR_APPLICATION_HAS_BEEN_SUBMITTED_SUCCESSFULLY_AND_IS_UNDER_VERIFICATION: "உங்கள் விண்ணப்பம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டு சரிபார்ப்பின் கீழ் உள்ளது",
  VIEW_STATUS: "நிலையைக் காண்க",
  GO_HOME: "முகப்பு பக்கத்திற்கு செல்லவும்",
  SELECT_LANGUAGE: "மொழியை தேர்ந்தெடுங்கள்",
  WHICH_LANGUAGE_DO_YOU_PREFER: "நீங்கள் எந்த மொழியை விரும்புகிறீர்கள்?",
  NEXT: "அடுத்தது",
  T_C: "விதிமுறைகளும் நிபந்தனைகளும்",
  ENTER_MOBILE_NUMBER: "மொபைல் எண்ணை உள்ளிடவும்",
  BY_CLICKING_CONTINUE_YOU_WILL_BE_AGREEING_TO_OUR: "தொடரவும் என்பதைக் கிளிக் செய்வதன் மூலம், எங்களுடையதை ஒப்புக்கொள்கிறீர்கள்",
  ENTER_OTP: "OTP ஐ உள்ளிடவும்",
  DIDNT_RECIEVE_OTP: "OTP ஐப் பெறவில்லையா?",
  RESEND_OTP: "OTP ஐ மீண்டும் அனுப்பவும்",
  PLEASE_ENTER_VALID_OTP: "செல்லுபடியாகும் OTP ஐ உள்ளிடவும்",
  INVALID_MOBILE_NUMBER: "மொபைல் எண்ணை சரிபார்க்கவும்",
  REGISTER: "பதிவு",
  MOBILE_NUMBER: "கைபேசி எண்",
  AUTO_READING_OTP: "otp தானாக படிக்கப்படுகிறது",
  UPLOAD_DRIVING_LICENSE: "ஓட்டுநர் உரிமத்தை பதிவேற்றவும்",
  UPLOAD_BACK_SIDE: "பின் பக்கத்தை பதிவேற்றவும்",
  UPLOAD_FRONT_SIDE: "உங்கள் ஓட்டுநர் உரிமத்தின் புகைப்படப் பக்கத்தைப் பதிவேற்றவும்",
  BACK_SIDE: "பின்புறம்",
  FRONT_SIDE: "உங்கள் ஓட்டுநர் உரிமத்தின் புகைப்பட பக்கம்",
  LICENSE_INSTRUCTION_PICTURE: "ஓட்டுநர் உரிமத்தின் இருபுறமும் தெளிவான படங்களை பதிவேற்றவும்",
  LICENSE_INSTRUCTION_CLARITY: "புகைப்படம் மற்றும் அனைத்து விவரங்களும் தெளிவாகத் தெரியும் என்பதை உறுதிப்படுத்தவும்",
  REGISTRATION_STEPS: "பதிவு படிகள்",
  PROGRESS_SAVED: "உங்கள் முன்னேற்றம் பதிவு செய்யப்பட்டது, எந்தவொரு தகவலையும் மாற்ற முந்தைய படிகளுக்கும் நீங்கள் செல்லலாம்",
  DRIVING_LICENSE: "ஓட்டுனர் உரிமம்",
  AADHAR_CARD: "ஆதார் அட்டை",
  BANK_DETAILS: "வங்கி விவரங்கள்",
  VEHICLE_DETAILS: "வாகன விவரங்கள்",
  UPLOAD_FRONT_BACK: "முன் மற்றும் பின் பக்கத்தைப் பதிவேற்றவும்",
  EARNINGS_WILL_BE_CREDITED: "உங்கள் வருமானம் இங்கே வரவு வைக்கப்படும்",
  FILL_VEHICLE_DETAILS: "உங்கள் வாகன விவரங்களை நிரப்பவும்",
  FOLLOW_STEPS: "பதிவு செய்ய கீழே உள்ள படிகளைப் பின்பற்றவும்",
  REGISTRATION: "பதிவு",
  UPLOAD_ADHAAR_CARD: "ஆதார் அட்டையைப் பதிவேற்றவும்",
  ADHAAR_INTRUCTION_PICTURE: "ஆதார் அட்டையின் இருபுறமும் தெளிவான படங்களை தயவுசெய்து பதிவேற்றவும்",
  ADD_VEHICLE_DETAILS: "வாகன விவரங்களைச் நிரப்பவும்",
  VEHICLE_REGISTRATION_NUMBER: "வாகன பதிவு எண்",
  RE_ENTER_VEHICLE_REGISTRATION_NUMBER: "வாகன பதிவு எண்ணை மீண்டும் உள்ளிடவும்",
  ENTER_VEHICLE_NO: "வாகனம் எண் உள்ளிடவும்.",
  VEHICLE_TYPE: "வாகனம் வகை",
  VEHICLE_MODEL_NAME: "வாகன மாடல் பெயர்",
  ENTER_MODEL_NAME: "மாடல் பெயரை உள்ளிடவும்",
  VEHICLE_COLOUR: "வாகன நிறம்",
  ENTER_VEHICLE_COLOUR: "வாகன நிறத்தை உள்ளிடவும்",
  UPLOAD_REGISTRATION_CERTIFICATE: "பதிவு சான்றிதழ் (ஆர்.சி) பதிவேற்றவும்",
  UPLOAD_RC: "ஆர்.சி. பதிவேற்றவும்",
  PREVIEW: "முன்னோட்டம்",
  CHOOSE_VEHICLE_TYPE: "வாகன வகையைத் தேர்வுசெய்க",
  BENIFICIARY_NUMBER: "பயனாளி கணக்கு எண்",
  RE_ENTER_BENIFICIARY_NUMBER: "பயனாளி கணக்கு எண்ணை மீண்டும் உள்ளிடவும்.",
  IFSC_CODE: "IFSC குறியீடு",
  SENDING_OTP: "otp அனுப்பப்படுகிறது",
  PLEASE_WAIT_WHILE_IN_PROGRESS: "தயவுசெய்து காத்திருங்கள். செயல்பாட்டில் உள்ளது",
  YOUR_REQUEST_HAS_TIMEOUT_TRY_AGAIN: "உங்கள் கோரிக்கை நேரம் முடிந்தது. மீண்டும் முயற்சிக்கவும்",
  ERROR_OCCURED_PLEASE_TRY_AGAIN_LATER: "பிழை ஏற்பட்டது, பின்னர் மீண்டும் முயற்சிக்கவும்",
  ENTER_OTP_SENT_TO: " க்கு அனுப்பப்பட்ட otp ஐ உள்ளிடவும்",
  OTP_SENT_TO: "க்கு OTP அனுப்பப்பட்டது",
  COUNTRY_CODE_INDIA: "91",
  ENTER_ACCOUNT_NUMBER: "வங்கி கணக்கு எண் உள்ளிடவும்",
  ADD_BANK_DETAILS: "வங்கி விவரங்களைச் சேர்க்கவும்",
  ENTER_IFSC_CODE: "IFSC குறியீட்டை உள்ளிடவும்",
  SUBMIT: "படிவம் சமர்ப்பிக்கவும்",
  PERSONAL_DETAILS: "தங்களின் விவரங்கள்",
  LANGUAGES: "மொழிகள்",
  HELP_AND_FAQ: "உதவி & கேள்விகள்",
  ABOUT: "விவரம்",
  LOGOUT: "வெளியேறு",
  UPDATE: "புதுப்பிப்பு",
  EDIT: "திருத்தவும்",
  AUTO: "ஆட்டோ",
  NAME: "பெயர்",
  PRIVACY_POLICY: "தனியுரிமைக் கொள்கை",
  LOGO: "லோகோ",
  ABOUT_APP_DESCRIPTION: "நம்மா யாத்திரி கூட்டாளர் இயக்கிகளை ரைடர்ஸுடன் இணைக்க ஒரு திறந்த தளமாகும். முன்மொழியப்பட்ட விரும்பிய விகிதங்களைக் கொண்ட ரைடர்ஸைக் கண்டுபிடிப்பதை ஓட்டுநர்களுக்கு பயன்பாடு வசதியாக ஆக்குகிறது. சவாரி அடிப்படையிலான கமிஷன் இல்லை, மாதாந்திர சந்தா வடிவத்தில் சிறிய தொகையை செலுத்துங்கள்",
  TERMS_AND_CONDITIONS: "விதிமுறைகளும் நிபந்தனைகளும்",
  UPDATE_VEHICLE_DETAILS: "வாகன விவரங்களை புதுப்பிக்கவும்",
  Help_AND_SUPPORT: "உதவி மற்றும் ஆதரவு",
  NOTE: "குறிப்பு:",
  VISIT_MY_RIDES_SCREEN_FOR_SPECIFIC_COMPLAINTS: "குறிப்பிட்ட புகார்களுக்கு எனது சவாரி பிரிவைப் பார்வையிடவும்",
  THANK_YOU_FOR_WRTITTING_US: "எங்களுக்கு எழுதியதற்கு நன்றி!",
  WE_HAVE_RECIEVED_YOUR_ISSUE: "உங்கள் பிரச்சினையை நாங்கள் பெற்றுள்ளோம். நாங்கள் உங்களை அணுகுவோம்.",
  GO_TO_HOME: "முகப்புத் திரைக்குச் செல்லவும்",
  YOUR_RECENT_RIDE: "உங்கள் சமீபத்திய சவாரி",
  YOUR_RECENT_TRIP: "Your Recent Trip",
  ALL_TOPICS: "அனைத்து தலைப்புகளும்",
  REPORT_AN_ISSUE_WITH_THIS_TRIP: "இந்த பயணத்தில் சிக்கலைப் புகாரளிக்கவும்",
  YOU_RATED: "நீங்கள் மதிப்பிட்டீர்கள்:",
  VIEW_ALL_RIDES: "எல்லா சவாரிகளையும் காண்க",
  WRITE_TO_US: "எங்களுக்கு எழுதுங்கள்",
  SUBJECT: "பொருள்",
  YOUR_EMAIL_ID: "உங்கள் மின்னஞ்சல் ஐடி",
  DESCRIBE_YOUR_ISSUE: "உங்கள் பிரச்சினையை விவரிக்கவும்",
  GETTING_STARTED_AND_FAQ: "தொடங்குதல் மற்றும் கேள்விகள்",
  FOR_OTHER_ISSUES_WRITE_TO_US: "பிற சிக்கல்களுக்கு, எங்களுக்கு எழுதுங்கள்",
  CALL_SUPPORT_CENTER: "அழைப்பு ஆதரவு மையம்",
  YOU_CAN_DESCRIBE_ISSUE_THAT_YOU_FACED_HERE: "நீங்கள் இங்கே எதிர்கொண்ட சிக்கலை விவரிக்கலாம்",
  REGISTRATION_CERTIFICATE_IMAGE: "பதிவு சான்றிதழ் (ஆர்.சி) படம்",
  HOME: "முகப்புப்பக்கம்",
  RIDES: "சவாரி",
	TRIPS: "பயணங்கள்",
  PROFILE: "சுயவிவரம்",
  ENTER_DRIVING_LICENSE_NUMBER: "ஓட்டுநர் உரிம எண்ணை உள்ளிடவும்",
  WHERE_IS_MY_LICENSE_NUMBER: "எனது உரிம எண் எங்கே?",
  TRIP_DETAILS: "பயண விவரங்கள்",
  BY_CASH: "பணத்தால்",
  ONLINE_: "ஆன்லைன்",
  REPORT_AN_ISSUE: "சிக்கலைப் புகாரளிக்கவும்",
  DISTANCE: "தூரம்",
  TIME_TAKEN: "எடுக்கப்பட்ட நேரம்",
  OPEN_GOOGLE_MAPS: "Google வரைபடம்",
  CALL: "அழைப்பு",
  START_RIDE: "சவாரி செய்யத் தொடங்குங்கள்",
  CANCEL_RIDE: "சவாரி ரத்து செய்ய",
  PLEASE_TELL_US_WHY_YOU_WANT_TO_CANCEL: "நீங்கள் ஏன் ரத்து செய்ய விரும்புகிறீர்கள் என்று கூறுங்கள்",
  MANDATORY: "கட்டாயமாகும்",
  END_RIDE: "சவாரி முடிக்க",
  RIDE_COMPLETED_WITH: "வாடிக்கையாளருடன் சவாரி முடிந்தது",
  COLLECT_AMOUNT_IN_CASH: "தொகையை ரொக்கமாக பெறுங்கள்",
  CASH_COLLECTED: "பணம் பெறப்பட்டது",
  OFFLINE: "ஆஃப்லைன்",
  ACCEPT_FOR: "இதற்கு ஏற்றுக்கொள்:",
  DECLINE: "நிராகரிக்க",
  REQUEST: "கோரிக்கை",
  YOU_ARE_OFFLINE: "நீங்கள் ஆஃப்லைனில் இருக்கிறீர்கள்",
  YOU_ARE_CURRENTLY_BUSY_GO_ONLINE_TO_RECIEVE_TRIP_REQUESTS: "நீங்கள் தற்போது பிஸியாக இருக்கிறீர்கள். பயண கோரிக்கைகளைப் பெற ஆன்லைனில் செல்லுங்கள்",
  GOING_OFFLINE_WILL_NOT_GET_YOU_ANY_RIDE: "ஆஃப்லைனில் செல்வது உங்களுக்கு எந்த சவாரிக்கும் கிடைக்காது",
  CANCEL: "ரத்துசெய்",
  GO_OFFLINE: "ஆஃப்லைனில் செல்லுங்கள்",
  IS_WAITING_FOR_YOU: "பிக்கப் போகிறது",
  YOU_ARE_ON_A_RIDE: "சவாரி தொடங்கியது...",
  PLEASE_ASK_RIDER_FOR_THE_OTP: "OTP க்கு ரைடரிடம் கேளுங்கள்",
  COMPLETED_: "நிறைவு",
  CANCELLED_: "ரத்து செய்யப்பட்டது",
  WE_NEED_SOME_ACCESS: "பின்வரும் அணுகலை எங்களுக்கு வழங்கவும்!",
  ALLOW_ACCESS: "அணுகலை அனுமதிக்கவும்",
  THANK_YOU_FOR_WRITING_TO_US: "எங்களுக்கு எழுதியதற்கு நன்றி!",
  RIDER: "சவாரி",
  TRIP_ID: "பயண ஐடி",
  NEED_IT_TO_SHOW_YOU_INCOMING_RIDE_REQUEST: "பயன்பாடு பின்னணியில் இருக்கும்போது உள்வரும் சவாரி கோரிக்கையைப் பெறுங்கள்",
  NEED_IT_TO_DISABLE_BATTERY_OPTIMIZATION_FOR_THE_APP: "பரிந்துரைக்கப்படுகிறது, பயன்பாட்டை நீண்ட நேரம் பின்னணியில் இயக்க உதவுகிறது",
  NEED_IT_TO_AUTOSTART_YOUR_APP: "பயன்பாட்டை பின்னணியில் வைத்திருப்பதன் மூலம் உதவுகிறது",
  NEED_IT_TO_ENABLE_LOCATION: "பயன்பாடு மூடப்பட்டிருந்தாலும் கூட, இயக்கி தற்போதைய இருப்பிடத்தை கண்காணிக்க உங்கள் இருப்பிடத்தைப் பகிர்வதற்கு நம்மா யாத்ரி கூட்டாளர் இருப்பிடத் தரவை சேகரிக்கவும்",
  OVERLAY_TO_DRAW_OVER_APPLICATIONS: "பயன்பாட்டை அனுமதிக்கவும்",
  BATTERY_OPTIMIZATIONS: "பேட்டரி தேர்வுமுறை",
  AUTO_START_APPLICATION_IN_BACKGROUND: "பின்னணியில் ஆட்டோஸ்டார்ட் பயன்பாடு",
  LOCATION_ACCESS: "இருப்பிட அணுகல்",
  ENTER_RC_NUMBER: "ஆர்.சி எண்ணை உள்ளிடவும்",
  WHERE_IS_MY_RC_NUMBER: "எனது ஆர்.சி எண் எங்கே?",
  STEP: "படி",
  PAID: "பணம்",
  ENTERED_WRONG_OTP: "தவறான OTP உள் நுழைந்தது",
  COPIED: "நகலெடுக்கப்பட்டது",
  BANK_NAME: "வங்கி பெயர்",
  AADHAR_DETAILS: "ஆதார் விவரங்கள்",
  AADHAR_NUMBER: "ஆதார் எண்",
  FRONT_SIDE_IMAGE: "முன் பக்க படம்",
  BACK_SIDE_IMAGE: "பின் பக்க படம்",
  STILL_NOT_RESOLVED: "இன்னும் தீர்க்கப்படவில்லை? எங்களை அழைக்கவும்",
  CASE_TWO: "b) க்கு",
  NON_DISCLOUSER_AGREEMENT: "ஒப்பந்தம்",
  DATA_COLLECTION_AUTHORITY: "c) எனது தகவல்களைச் சேகரிக்க ஜஸ்பேவை நான் இதன்மூலம் நியமிக்கிறேன் மற்றும் அங்கீகரிக்கிறேன், தொடர்வதன் மூலம், பயன்பாட்டு விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஒப்புக்கொள்கிறேன்.",
  SOFTWARE_LICENSE: "மென்பொருள் உரிமம்",
  LOAD_MORE: "அதிகமாய் ஏற்று",
  ARE_YOU_SURE_YOU_WANT_TO_LOGOUT: "நீங்கள் நிச்சயமாக வெளியேற விரும்புகிறீர்களா?",
  GO_BACK: "திரும்பிச் செல்லுங்கள்",
  THANK_YOU_FOR_REGISTERING_US: "எங்களுடன் பதிவு செய்ததற்கு நன்றி!",
  UNFORTANUTELY_WE_ARE_NOT_AVAILABLE__YET_FOR_YOU: "துரதிர்ஷ்டவசமாக, உங்களுக்கான சவாரிகள் எங்களிடம் இல்லை. விரைவில் உங்களுக்கு அறிவிப்போம்.",
  ARE_YOU_SURE_YOU_WANT_TO_END_THE_RIDE: "சவாரி முடிக்க விரும்புகிறீர்களா?",
  EMPTY_RIDES: "வெற்று சவாரிகள்",
  YOU_HAVE_NOT_TAKEN_A_TRIP_YET: "நீங்கள் இன்னும் பயணம் எடுக்கவில்லை",
  BOOK_NOW: "பதிவு",
  RESEND_OTP_IN: "OTP ஐ மீண்டும் அனுப்பவும்",
  WE_NEED_ACCESS_TO_YOUR_LOCATION: "உங்கள் இருப்பிடத்திற்கான அணுகல் எங்களுக்கு தேவை!",
  YOUR_LOCATION_HELPS_OUR_SYSTEM: "உங்கள் இருப்பிடம் எங்கள் கணினியை ஆட்டோக்கள் மூலம் அருகிலுள்ள அனைத்து வரைபடத்தையும், விரைவாக சவாரி செய்ய உதவுகிறது.",
  NO_INTERNET_CONNECTION: "இணைய இணைப்பு இல்லை",
  PLEASE_CHECK_YOUR_INTERNET_CONNECTION_AND_TRY_AGAIN: "இணைய இணைப்பை சரிபார்த்து மீண்டும் முயற்சிக்கவும்",
  TRY_AGAIN: "மீண்டும் முயற்சி செய்",
  GRANT_ACCESS: "அனுமதி வழங்கு",
  YOUR_LIMIT_EXCEEDED_TRY_AGAIN_AFTER_10_MIN: "நீங்கள் வரம்பை மீறுகிறீர்கள், 10 நிமிடங்களுக்குப் பிறகு மீண்டும் முயற்சிக்கவும்",
  ENTER_REFERRAL_MOBILE_NUMBER: "பரிந்துரை மொபைல் எண்ணை உள்ளிடவும்",
  APPLY: "விண்ணப்பிக்கவும்",
  HAVE_A_REFERRAL: "பரிந்துரை உள்ளதா?",
  ADD_HERE: "இங்கே சேர்க்கவும்",
  REFERRAL_APPLIED: "பரிந்துரை குறியீடு பயன்படுத்தப்பட்டது",
  SMALLEDIT: "திருத்துதல்",
  ADD_DRIVING_LICENSE: "ஓட்டுநர் உரிமத்தைச் சேர்க்கவும்",
  HELP: "உதவி?",
  INVALID_DL_NUMBER: "தவறான டி.எல் எண்",
  DRIVING_LICENSE_NUMBER: "ஓட்டுநர் உரிம எண்",
  RE_ENTER_DRIVING_LICENSE_NUMBER: "ஓட்டுநர் உரிம எண்ணை மீண்டும் உள்ளிடவும்",
  ENTER_DL_NUMBER: "டி.எல் எண்ணை உள்ளிடவும்",
  SELECT_DATE_OF_BIRTH: "பிறந்த தேதியைத் தேர்ந்தெடுக்கவும்",
  DATE_OF_BIRTH: "பிறந்த தேதி",
  WATCH_A_TUTORIAL_FOR_EASY_REGISTRATION: "எளிதான \n பதிவுக்கான டுடோரியலைப் பார்க்கவும்",
  ENTER_MINIMUM_FIFTEEN_CHARACTERS: "குறைந்தபட்சம் 15 எழுத்துகளை உள்ளிடவும்",
  ADD_YOUR_FRIEND: "உங்கள் நண்பரைச் சேர்க்கவும்",
  PLEASE_WAIT_WHILE_VALIDATING_THE_IMAGE: "படத்தை சரிபார்க்கும்போது காத்திருங்கள்",
  VALIDATING: "சரிபார்ப்பு",
  VERIFICATION_PENDING: "சரிபார்ப்பு நிலுவையில் உள்ளது",
  VERIFICATION_FAILED: "சரிபார்ப்பு தோல்வியடைந்தது",
  NO_DOC_AVAILABLE: "எந்த ஆவணமும் கிடைக்கவில்லை",
  ISSUE_WITH_DL_IMAGE: "உங்கள் டி.எல் படத்தில் சில சிக்கல்கள் இருப்பதாகத் தெரிகிறது, எங்கள் ஆதரவு குழு விரைவில் உங்களைத் தொடர்பு கொள்ளும்.",
  STILL_HAVE_SOME_DOUBT: "இன்னும் சில சந்தேகங்கள் உள்ளதா?",
  ISSUE_WITH_RC_IMAGE: "உங்கள் ஆர்.சி படத்தில் சில சிக்கல்கள் இருப்பதாகத் தெரிகிறது, எங்கள் ஆதரவு குழு விரைவில் உங்களைத் தொடர்பு கொள்ளும்.",
  PLEASE_CHECK_FOR_IMAGE_IF_VALID_DOCUMENT_IMAGE_OR_NOT: "செல்லுபடியாகும் ஆவணப் படம் அல்லது இல்லையென்றால் படத்தை சரிபார்க்கவும்",
  OOPS_YOUR_APPLICATION_HAS_BEEN_REJECTED: "உங்கள் விண்ணப்பம் நிராகரிக்கப்பட்டுள்ளது. தயவுசெய்து மீண்டும் முயற்சி செய்க",
  INVALID_DRIVING_LICENSE: "தவறான ஓட்டுநர் உரிமம்",
  LIMIT_EXCEEDED_FOR_DL_UPLOAD: "டி.எல் பதிவேற்றத்திற்கு வரம்பு மீறுகிறது",
  INVALID_VEHICLE_REGISTRATION_CERTIFICATE: "தவறான வாகன பதிவு சான்றிதழ்",
  LIMIT_EXCEEDED_FOR_RC_UPLOAD: "ஆர்.சி பதிவேற்றத்திற்கு வரம்பு மீறுகிறது",
  YOUR_DOCUMENTS_ARE_APPROVED: "உங்கள் ஆவணங்கள் அங்கீகரிக்கப்பட்டுள்ளன. ஆதரவு குழு விரைவில் உங்கள் கணக்கை இயக்கும். உங்கள் கணக்கை இயக்க ஆதரவு குழுவையும் அழைக்கலாம்",
  APPLICATION_STATUS: "பயன்பாட்டு நிலை",
  FOR_SUPPORT: "ஆதரவுக்கு",
  CONTACT_US: "எங்களை தொடர்பு கொள்ள",
  IMAGE_VALIDATION_FAILED: "படத்தின் சரிபார்ப்பு தோல்வியடைந்தது",
  IMAGE_NOT_READABLE: "படம் படிக்க முடியாது",
  IMAGE_LOW_QUALITY: "படத்தின் தரம் நன்றாக இல்லை",
  IMAGE_INVALID_TYPE: "வழங்கப்பட்ட பட வகை உண்மையான வகையுடன் பொருந்தாது",
  IMAGE_DOCUMENT_NUMBER_MISMATCH: "இந்த படத்தில் ஆவண எண் உள்ளீட்டுடன் பொருந்தவில்லை",
  IMAGE_EXTRACTION_FAILED: "படம் பிரித்தெடுத்தல் தோல்வியடைந்தது",
  IMAGE_NOT_FOUND: "படம் கிடைக்கவில்லை",
  IMAGE_NOT_VALID: "படம் செல்லுபடியாகாது",
  DRIVER_ALREADY_LINKED: "மற்ற ஆவணங்கள் ஏற்கனவே டிரைவருடன் இணைக்கப்பட்டுள்ளன",
  DL_ALREADY_UPDATED: "எந்த நடவடிக்கையும் தேவையில்லை. ஓட்டுநர் உரிமம் ஏற்கனவே டிரைவருடன் இணைக்கப்பட்டுள்ளது",
  RC_ALREADY_LINKED: "வாகனம் ஆர்.சி கிடைக்கவில்லை. மற்ற டிரைவருடன் இணைக்கப்பட்டுள்ளது",
  RC_ALREADY_UPDATED: "எந்த நடவடிக்கையும் தேவையில்லை. வாகன ஆர்.சி ஏற்கனவே டிரைவருடன் இணைக்கப்பட்டுள்ளது",
  DL_ALREADY_LINKED: "ஓட்டுநர் உரிமம் கிடைக்கவில்லை. மற்ற டிரைவருடன் இணைக்கப்பட்டுள்ளது",
  SOMETHING_WENT_WRONG: "ஏதோ தவறு நடைபெற்றிருக்கிறது",
  PICKUP: "பிக் அப்",
  TRIP: "பயணம்",
  CURRENTLY_WE_ALLOW_ONLY_KARNATAKA_REGISTERED_NUMBER: "தற்போது,   கர்நாடகா பதிவு செய்யப்பட்ட எண்ணை மட்டுமே அனுமதிக்கிறோம்",
  UPDATED_AT: "புதுப்பிக்கப்பட்டது",
  TRIP_COUNT: "இன்றைய பயணங்கள்",
  TODAYS_EARNINGS: "வருவாய்",
  BONUS_EARNED : "போனஸ் கிடைத்தது",
  GOT_IT : "அறிந்துகொண்டேன்!",
  WHAT_IS_NAMMA_YATRI_BONUS : "போனஸ் என்றால் என்ன?",
  BONUS_PRIMARY_TEXT : "நம்ம யாத்ரி போனஸ் என்பது பிக்அப் கட்டணங்கள், வாடிக்கையாளர் உதவிக்குறிப்புகள் மற்றும் ஓட்டுனர் சேர்த்தல் போன்ற வடிவங்களில் மீட்டர் கட்டணத்திற்கு மேல் நீங்கள் பெற்ற கூடுதல் தொகையாகும்.",
  BONUS_SECONDARY_TEXT : "நம்ம யாத்ரி போனஸ் தொகை உங்கள் மொத்த வருவாயில் ஒரு பகுதியாகும்.",
  DATE_OF_REGISTRATION: "பதிவு செய்த தேதி",
  SELECT_DATE_OF_ISSUE: "வெளியீட்டு தேதியைத் தேர்ந்தெடுக்கவும்",
  DATE_OF_ISSUE: "வெளியீட்டு தேதி",
  PROVIDE_DATE_OF_ISSUE_TEXT: "மன்னிக்கவும், உங்கள் விவரங்களை எங்களால் சரிபார்க்க முடியவில்லை, தயவுசெய்து உங்கள் ஓட்டுநர் உரிமத்தை சரிபார்க்க <b> வெளியீட்டு தேதி </b> ஐ வழங்கவும்.",
  PROVIDE_DATE_OF_REGISTRATION_TEXT: "மன்னிக்கவும், உங்கள் விவரங்களை எங்களால் சரிபார்க்க முடியவில்லை, உங்கள் வாகன விவரங்களை சரிபார்க்க <b> பதிவு தேதி </b> ஐ வழங்கவும்.",
  SELECT_DATE_OF_REGISTRATION: "பதிவு தேதியைத் தேர்ந்தெடுக்கவும்",
  SAME_REENTERED_RC_MESSAGE: "மீண்டும் உள்ளிடப்பட்ட RC எண்ணும் மேலே கொடுக்கப்பட்டுள்ள RC எண்ணும் ஒன்றே என்பதை உறுதிப்படுத்தவும்",
  SAME_REENTERED_DL_MESSAGE: "மீண்டும் உள்ளிடப்பட்ட DL எண்ணும் மேலே வழங்கப்பட்ட DL எண்ணும் பொருந்தவில்லை",
  WHERE_IS_MY_ISSUE_DATE: "வெளியீட்டு தேதி எங்கே?",
  WHERE_IS_MY_REGISTRATION_DATE: "பதிவு தேதி எங்கே?",
  EARNINGS_CREDITED_IN_ACCOUNT: "உங்கள் வருவாய் இந்த கணக்கில் வரவு வைக்கப்படும்",
  INVALID_PARAMETERS: "தவறான அளவுருக்கள்",
  UNAUTHORIZED: "அங்கீகரிக்கப்படாதது",
  INVALID_TOKEN: "செல்லுபடியாகாத டோக்கன்",
  SOME_ERROR_OCCURED_IN_OFFERRIDE: "ஆஃபர் ரைடில் சில பிழை ஏற்பட்டது",
  SELECT_VEHICLE_TYPE: "வாகன வகையைத் தேர்ந்தெடுக்கவும்",
  RIDE: "சவாரி",
  NO_LOCATION_UPDATE: "இருப்பிட புதுப்பிப்பு இல்லை",
  GOT_IT_TELL_US_MORE: "புரிந்தது, மேலும் சொல்லுங்கள்?",
  WRITE_A_COMMENT: "கருத்தை எழுதுங்கள்",
  HOW_WAS_YOUR_RIDE_WITH: "உங்கள் சவாரி எப்படி இருந்தது",
  RUDE_BEHAVIOUR: "முரட்டுத்தனமான நடத்தை",
  LONG_WAITING_TIME: "நீண்ட காத்திருப்பு நேரம்",
  DIDNT_COME_TO_PICUP_LOCATION: "பிக்அப் இடத்திற்கு வரவில்லை",
  HELP_US_WITH_YOUR_REASON: "உங்கள் காரணத்துடன் எங்களுக்கு உதவுங்கள்",
  MAX_CHAR_LIMIT_REACHED: "அதிகபட்ச எழுத்து வரம்பை அடைந்தது,",
  SHOW_ALL_OPTIONS: "அனைத்து விருப்பங்களையும் காட்டு",
  UPDATE_REQUIRED: "புதுப்பித்தல் தேவை",
  PLEASE_UPDATE_APP_TO_CONTINUE_SERVICE: "சேவையைத் தொடர, பயன்பாட்டைப் புதுப்பிக்கவும்",
  NOT_NOW: "இப்போது இல்லை",
  OF: "இல்",
  DROP: "டிராப்",
  PLEASE_WAIT: "தயவுசெய்து காத்திருக்கவும்",
  SETTING_YOU_OFFLINE: "நாங்கள் உங்கள் ஆஃப்லைனை அமைக்கிறோம்",
  SETTING_YOU_ONLINE: "நாங்கள் உங்களை ஆன்லைனில் அமைக்கிறோம்",
  SETTING_YOU_SILENT: "நாங்கள் உங்களை சைலன்ட் அமைக்கிறோம்",
  VIEW_BREAKDOWN: "முறிவைக் காண்க",
  APP_INFO: "ஆப் அமைப்புகள்",
  OTHER: "வேறு சில காரணம்",
  VEHICLE_ISSUE: "வாகனப் பிரச்சினை",
  FARE_UPDATED: "கட்டணம் புதுப்பிக்கப்பட்டது",
  FREQUENT_CANCELLATIONS_WILL_LEAD_TO_LESS_RIDES: "சவாரிகளை அடிக்கடி ரத்து செய்வது குறைவான சவாரிகளுக்கு வழிவகுக்கும் மற்றும் மதிப்பீட்டைக் குறைக்கும்.",
  CONTINUE: "தொடரவும்",
  MORE: "more",
  LESS: "less",
  YOU_ARE_AT_PICKUP: "நீங்கள் பிக்அப் இடத்தில் இருக்கிறீர்கள்",
  WAITING_FOR_CUSTOMER: "-க்காக காத்திருக்கிறீர்கள்",
  CUSTOMER_NOTIFIED: "வாடிக்கையாளருக்கு அறிவிக்கப்பட்டது",
  I_ARRIVED: "வந்துவிட்டேன்",
  ESTIMATED_RIDE_FARE: "மதிப்பிடப்பட்ட சவாரி கட்டணம்: ",
  CONFIRM_PASSWORD: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
  DEMO_MODE: "டெமோ பயன்முறை",
  PASSWORD: "கடவுச்சொல்லை",
  ENTER_DEMO_MODE_PASSWORD: "டெமோ பயன்முறை கடவுச்சொல்லை உள்ளிடவும்",
  DEMO_MODE_DISABLED: "டெமோ பயன்முறை முடக்கப்பட்டது",
  ONLINE_VIA_DEMO_MODE: "ஆன்லைன் (டெமோ)",
  PICKUP_TOO_FAR: "பிக்அப் வெகு தொலைவில் உள்ளது",
  CUSTOMER_NOT_PICKING_CALL: "வாடிக்கையாளர் அழைப்பை எடுக்கவில்லை",
  TRAFFIC_JAM: "போக்குவரத்து நெரிசல்",
  CUSTOMER_WAS_RUDE: "வாடிக்கையாளர் முரட்டுத்தனமாக நடந்து கொண்டார்",
  ALL_MESSAGES: "அனைத்து செய்திகளும்",
  MESSAGES: "செய்திகள்",
  ADD_A_COMMENT: "கருத்தைச் சேர்",
  POST_COMMENT: "கருத்து பதிவு",
  ENTER_YOUR_COMMENT: "உங்கள் கருத்தை உள்ளிடவும்",
  NO_NOTIFICATIONS_RIGHT_NOW: "தற்போது அறிவிப்புகள் இல்லை",
  NO_NOTIFICATIONS_RIGHT_NOW_DESC: "புதிய அறிவிப்புகள் வரும்போது உங்களுக்குத் தெரிவிப்போம்",
  ALERTS: "அறிவிப்புகள்",
  YOUR_COMMENT: "தங்கள் கருத்து",
  SHOW_MORE: "மேலும் காட்ட",
  LOAD_OLDER_ALERTS: "பழைய எச்சரிக்கைகளை ஏற்றவும்",
  CONTEST: "போட்டி",
  YOUR_REFERRAL_CODE_IS_LINKED: "உங்கள் பரிந்துரை குறியீடு இணைக்கப்பட்டுள்ளது!",
  YOU_CAN_NOW_EARN_REWARDS: "வாடிக்கையாளர்களைப் பரிந்துரைப்பதற்காக நீங்கள் இப்போது வெகுமதிகளைப் பெறலாம்!",
  COMING_SOON: "விரைவில்!",
  COMING_SOON_DESCRIPTION: "பரிந்துரை திட்டத்தில் உங்களை சேர்க்க நாங்கள் பணியாற்றி வருகிறோம். மேலும் தகவலுக்கு விழிப்பூட்டல்கள் பக்கத்தைப் பார்க்கவும்.",
  REFERRAL_CODE: "பரிந்துரை குறியீடு",
  REFERRAL_CODE_HINT: "6 இலக்க பரிந்துரைக் குறியீட்டை உள்ளிடவும்",
  CONFIRM_REFERRAL_CODE: "பரிந்துரை குறியீட்டை உறுதிப்படுத்தவும்",
  CONFIRM_REFERRAL_CODE_HINT: "பரிந்துரை குறியீட்டை மீண்டும் உள்ளிடவும்",
  YOUR_REFERRAL_CODE: "உங்கள் பரிந்துரை குறியீடு",
  FIRST_REFERRAL_SUCCESSFUL: "முதல் பரிந்துரை வெற்றி!\nரிவார்டு திறக்கப்பட்டது!",
  AWAITING_REFERRAL_RIDE: "பரிந்துரை சவாரிக்காக காத்திருக்கிறது",
  CHECK_THIS_SPACE_WHEN_YOU_GET_REFERRAL_ALERT: "பரிந்துரை எச்சரிக்கையைப் பெறும்போது \nஇந்த இடத்தைச் சரிபார்க்கவும்",
  REFERRED_CUSTOMERS: "பரிந்துரைக்கப்பட்ட வாடிக்கையாளர்கள்",
  ACTIVATED_CUSTOMERS: "செயல்படுத்தப்பட்ட வாடிக்கையாளர்கள்",
  REFERRAL_CODE_LINKING: "பரிந்துரை குறியீடு இணைப்பு",
  CONTACT_SUPPORT: "ஆதரவைத் தொடர்பு கொள்ளவும்",
  CALL_SUPPORT: "அழைப்பு ஆதரவு",
  YOU_ARE_ABOUT_TO_CALL_NAMMA_YATRI_SUPPORT: "நீங்கள் நம்ம யாத்ரி ஆதரவுக் குழுவிற்கு அழைப்பு விடுக்க உள்ளீர்கள். தொடர வேண்டுமா?",
  REFERRAL_ENROLMENT: "பரிந்துரை பதிவு",
  REFERRALS: "பரிந்துரைகள்",
  LINK_REFERRAL_CODE: "இணைப்பு பரிந்துரை குறியீடு",
  DRIVER_DETAILS: "டிரைவர் விவரங்கள்",
  FOR_UPDATES_SEE_ALERTS: "புதுப்பிப்புகளுக்கு, விழிப்பூட்டல்களைப் பார்க்கவும்",
  SHARE_OPTIONS: "பகிர்வு விருப்பங்கள்",
  ENTER_PASSWORD: "கடவுச்சொல்லை உள்ளிடவும்",
  OTP: "OTP",
  RIDE_DISTANCE : "சவாரி தூரம்",
  START_YOUR_CHAT_USING_THESE_QUICK_CHAT_SUGGESTIONS : "இந்த விரைவான அரட்டை பரிந்துரைகளைப் பயன்படுத்தி உங்கள் அரட்டையைத் தொடங்கவும்",
  MESSAGE : "செய்தி",
  START_YOUR_CHAT_WITH_THE_DRIVER : "டிரைவருடன் உங்கள் அரட்டையைத் தொடங்கவும்",
  I_AM_ON_MY_WAY : "வந்து கொண்டிருக்கிறேன்",
  GETTING_DELAYED_PLEASE_WAIT : "தாமதமாகிறது, காத்திருக்கவும்",
  UNREACHABLE_PLEASE_CALL_BACK : "எனக்கு கால் செய்யுங்கள்",
  ARE_YOU_STARING : "வந்து கொண்டிருக்கிறீர்களா?",
  PLEASE_COME_SOON : "சீக்கிரம் வாருங்கள்",
  OK_I_WILL_WAIT : "நான் காத்திருக்கிறேன்",
  I_HAVE_ARRIVED : "நான் வந்துவிட்டேன்",
  PLEASE_COME_FAST_I_AM_WAITING : "சீக்கிரம் வாருங்கள்",
  PLEASE_WAIT_I_WILL_BE_THERE : "வந்துகொண்டிருக்கிறேன்",
  LOOKING_FOR_YOU_AT_PICKUP : "பிக்-அப்பில் உள்ளேன்",
  SILENT : "சைலண்ட்",
  TRY_SILENT_MODE : "சைலண்ட் பயன்முறையை முயற்சிக்கவா?",
  SILENT_MODE_PROMPT : "நீங்கள் தொந்தரவை தவிர்க்க விரும்பினால், நீங்கள் சைலண்ட் பயன்முறைக்கு மாறலாம்",
  GO_SILENT : "சைலண்ட் மோடுக்கு செல்லவும்",
  GO_ONLINE : "போ!",
  GO_ONLINE_PROMPT : "நீங்கள் தற்போது ஆஃப்லைனில் உள்ளீர்கள். \n சவாரிகளைப் பெற, இப்போதே ஆன்லைனில் செல்லுங்கள்!",
  LIVE_DASHBOARD : "நேரடி புள்ளிவிவரங்கள் டாஷ்போர்டு",
  CLICK_TO_ACCESS_YOUR_ACCOUNT : "உங்கள் சுயவிவரத்தைக் காண இங்கே கிளிக் செய்யவும்",
  LOAD_OLDER_ALERTS : "அதிகமாய் ஏற்று",
  ADD_ALTERNATE_NUMBER : "மற்றொரு எண்ணைச் சேர்க்கவும்",
  ENTER_ALTERNATE_MOBILE_NUMBER : "மற்றொரு மொபைல் எண்ணை உள்ளிடவும்",
  PLEASE_ENTER_A_VALID_10_DIGIT_NUMBER : "சரியான 10 இலக்க எண்ணை உள்ளிடவும்",
  ALTERNATE_MOBILE_NUMBER : "மற்றொரு மொபைல் எண்",
  REMOVE : "அகற்று",
  REMOVE_ALTERNATE_NUMBER : "மற்றொரு எண்ணை அகற்று",
  ARE_YOU_SURE_YOU_WANT_TO_REMOVE_YOUR_ALTERNATE_MOBILE_NUMBER : "உங்கள் மற்றொரு மொபைல் எண்ணை நிச்சயமாக அகற்ற விரும்புகிறீர்களா?",
  YES_REMOVE_IT : "ஆம், அதை அகற்று",
  NUMBER_REMOVED_SUCCESSFULLY : "எண் வெற்றிகரமாக அகற்றப்பட்டது",
  EDIT_ALTERNATE_MOBILE_NUMBER : "மற்றொரு மொபைல் எண்ணைத் திருத்தவும்",
  NUMBER_ADDED_SUCCESSFULLY : "எண் வெற்றிகரமாக சேர்க்கப்பட்டது",
  NUMBER_EDITED_SUCCESSFULLY : "எண் வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
  ALTERNATE_MOBILE_OTP_LIMIT_EXCEED : "மற்றொரு மொபைல் எண் OTP வரம்பு மீறப்பட்டுள்ளது",
  WRONG_OTP : "சரியான OTP ஐ உள்ளிடவும் ",
  ATTEMPTS_LEFT : " முயற்சிகள் எஞ்சியுள்ளன",
  OTP_LIMIT_EXCEEDED : "OTP வரம்பு மீறப்பட்டது",
  OTP_LIMIT_EXCEEDED_MESSAGE : "உங்கள் OTP வரம்பை அடைந்துவிட்டீர்கள். 10 நிமிடங்களுக்குப் பிறகு மீண்டும் முயற்சிக்கவும்.",
  TRY_AGAIN_LATER : "பின்னர் மீண்டும் முயற்சிக்கவும்",
  ATTEMPT_LEFT : " முயற்சி எஞ்சியுள்ளன",
  NUMBER_ALREADY_EXIST_ERROR : "மற்றொரு கணக்குடன் எண் இணைக்கப்பட்டது! தயவுசெய்து வேறு எண்ணைப் பயன்படுத்தவும்",
  ADD_ALTERNATE_NUMBER_IN_MEANTIME : "இந்தச் செயல்முறை முடிய 2 வேலை நாட்கள் வரை ஆகலாம். இதற்கிடையில், நீங்கள் \nமாற்று மொபைல் எண்ணைச் சேர்க்கலாம்.",
  VERIFICATION_IS_TAKING_A_BIT_LONGER : "உங்கள் சரிபார்ப்பு \nஎதிர்பார்த்ததை விட சற்று அதிகமாகிறது போல் தெரிகிறது.\nஉங்களுக்கு உதவ நீங்கள் ஆதரவை தொடர்பு கொள்ளலாம்.",
  COMPLETE_ONBOARDING : "ஆன்போர்டிங்கை முடிக்கவும்",
  PERSON_WITH_THIS_NUMBER_ALREADY_EXISTS : "இந்த மொபைல் எண்ணைக் கொண்ட நபர் ஏற்கனவே இருக்கிறார்.",
  OTP_ : "OTP",
  MAPS: "Maps",
  DEMO : "டெமோ",
  PLEASE_ASK_THE_CUSTOMER_FOR_THE_OTP : "OTP ஐ வாடிக்கையாளரிடம் கேளுங்கள்",
  DELETE : "அழி",
  VIEW : "பார்வை",
  ISSUE_NO : "வெளியீடு எண்",
  ADD_VOICE_NOTE : "குரல் குறிப்பைச் சேர்க்கவும்",
  VOICE_NOTE_ADDED : "குரல் குறிப்பு சேர்க்கப்பட்டது",
  SUBMIT_ISSUE_DETAILS : "பிரச்சினை விவரங்களை சமர்ப்பிக்கவும்",
  IMAGE_PREVIEW : "பட முன்னோட்டம்",
  RIDE_REPORT_ISSUE : "சிக்கலைப் புகாரளிக்க சவாரி என்பதைத் தேர்ந்தெடுக்கவும்",
  ADDED_IMAGES : "படங்களைச் சேர்த்தது",
  NO_IMAGES_ADDED : "படங்கள் எதுவும் சேர்க்கப்படவில்லை",
  ASK_DETAILS_MESSAGE : "மேலும் சில விவரங்களைத் தரவும். மேலும் சிறப்பாக விவரிக்க படங்கள் அல்லது குரல் குறிப்புகளை அனுப்பலாம்.",
  ASK_DETAILS_MESSAGE_REVERSED : "இழந்த பொருளைப் பற்றிய கூடுதல் விவரங்களைப் பகிரவும். மேலும் சிறப்பாக விவரிக்க படங்கள் அல்லது குரல் குறிப்புகளை அனுப்பலாம்.",
  SELECT_OPTION : "இவற்றில் ஏதேனும் ஒன்றை நீங்கள் எதிர்கொண்டால் எங்களிடம் கூறுங்கள்",
  SELECT_OPTION_REVERSED : "இந்த சிக்கலை எவ்வாறு தீர்க்க விரும்புகிறீர்கள்?",
  ISSUE_SUBMITTED_MESSAGE : "பெறப்பட்ட விவரங்கள்! உங்கள் பிரச்சினைக்கு உதவ எங்கள் குழு 24 மணி நேரத்திற்குள் உங்களை அழைக்கும்.",
  I_DONT_KNOW_WHICH_RIDE : "எந்த சவாரி என்று தெரியவில்லை",
  REPORT_ISSUE_CHAT_PLACEHOLDER : "உங்கள் பிரச்சினையை விவரிக்கவும். நம்ம யாத்ரி 24 மணி நேரத்திற்குள் அதைத் தீர்க்க முயற்சிக்கும்.",
  ADDED_VOICE_NOTE : "குரல் குறிப்பு சேர்க்கப்பட்டது",
  NO_VOICE_NOTE_ADDED : "குரல் குறிப்பு சேர்க்கப்படவில்லை",
  CALL_CUSTOMER_TITLE : "வாடிக்கையாளரை அழைக்கவா?",
  CALL_CUSTOMER_DESCRIPTION : "வாடிக்கையாளருக்கு அழைப்பை மேற்கொள்ள உள்ளீர்கள். தொடர வேண்டுமா?",
  PLACE_CALL : "அழைப்பு",
  ADD_IMAGE : "படத்தை சேர்க்க",
  ADD_ANOTHER : "இன்னொன்றை சேர்",
  IMAGES_ADDED : "படங்கள் சேர்க்கப்பட்டது",
  ISSUE_SUBMITTED_TEXT : "பொறுங்கள்! உங்கள் பிரச்சினையைத் தீர்ப்பதில் நாங்கள் பணியாற்றி வருகிறோம்",
  CHOOSE_AN_OPTION : "தொடர விருப்பத்தைத் தேர்வு செய்யவும்",
  IMAGE_ADDED : "படம் சேர்க்கப்பட்டது",
  DONE : "முடிந்தது",
  RECORD_VOICE_NOTE : "பதிவு குரல் குறிப்பு",
  HELP_AND_SUPPORT : "உதவி மற்றும் ஆதரவு",
  MORE_OPTIONS : "மேலும் விருப்பங்கள்",
  ONGOING_ISSUES : "தொடர்ந்து பிரச்சினைகள்",
  RESOLVED_ISSUES : "தீர்க்கப்பட்ட பிரச்சினைகள்",
  RESOLVED_ISSUE : "தீர்க்கப்பட்ட  சிக்கல்கள்",
  ONGOING_ISSUE : "தொடரும்  சிக்கல்கள்",
  LOST_ITEM : "இழந்த   பொருள்",
  RIDE_RELATED_ISSUE : "சவாரி தொடர்பான பிரச்சினை",
  APP_RELATED_ISSUE : "பயன்பாடு தொடர்பான சிக்கல்",
  FARE_RELATED_ISSUE : "கட்டணம் தொடர்பான பிரச்சினை",
  ISSUE_NUMBER : "வெளியீடு   எண்   ",
  REMOVE_ISSUE : "சிக்கலை   அகற்று" ,
  CALL_SUPPORT_NUMBER : "ஆதரவைத்  தொடர்பு  கொள்ளவும்",
  YEARS_AGO : "ஆண்டுகளுக்கு முன்பு",
  MONTHS_AGO : " மாதங்களுக்கு முன்பு",
  DAYS_AGO : " நாட்களுக்கு முன்பு",
  HOURS_AGO : " மணி நேரத்திற்க்கு முன்பு",
  MIN_AGO : " நிமிடத்திற்கு முன்பு",
  SEC_AGO : " இரண்டாவது முன்பு",
  LOADING : "ஏற்றுகிறது",
  APP_RELATED : "பயன்பாடு தொடர்பானது",
  FARE_RELATED : "கட்டணம் தொடர்பானது",
  RIDE_RELATED : "சவாரி தொடர்பானது",
  LOST_AND_FOUND : "தொலைந்து போனது",
  REPORT_LOST_ITEM : "இழந்த பொருளைப் புகாரளிக்கவும",
  MAKE_YOURSELF_AVAILABLE_FOR : "பின்வருவனவற்றிற்கு உங்களைக் கிடைக்கச் செய்யுங்கள்",
  CONFIRM_AND_CHANGE : "உறுதிப்படுத்தி மாற்றவும்",
  SELECT_YOUR_GENDER: "உங்கள் பாலினத்தை தேர்வுசெய்யவும்",
  FEMALE: "பெண",
  MALE: "ஆண்",
  PREFER_NOT_TO_SAY: "சொல்ல வேண்டாம் என்று விருப்பம்",
  GENDER : "பாலினம்",
  SET_NOW : "இப்போது அமைக்கவும்",
  COMPLETE_YOUR_PROFILE_AND_FIND_MORE_RIDES : "உங்கள் சுயவிவரத்தை நிறைவுசெய்து மேலும் சவாரிகளைக் கண்டறியவும்!",
  UPDATE_NOW : "இப்பொழுது மேம்படுத்து",
  CORPORATE_ADDRESS : "கார்ப்பரேட் முகவரி",
  CORPORATE_ADDRESS_DESCRIPTION : "ஜுஸ்பே டெக்னாலஜிஸ் பிரைவேட் லிமிடெட் <br> கிரிஜா பில்டிங், எண் 817, கணபதி கோயில் சாலை, 8வது பிளாக், கோரமங்களா, பெங்களூரு, கர்நாடகா 560095, இந்தியா.",
  CORPORATE_ADDRESS_DESCRIPTION_ADDITIONAL : "இணையதளம் : <u>https://nammayatri.in/</u>",
  REGISTERED_ADDRESS : "பதிவு செய்யப்பட்ட முகவரி",
  REGISTERED_ADDRESS_DESCRIPTION : "ஜஸ்பே டெக்னாலஜிஸ் பிரைவேட் லிமிடெட் <br> ஸ்டாலியன் பிசினஸ் சென்டர், எண். 444, 3வது & 4வது தளம், 18வது மெயின், 6வது பிளாக், கோரமங்களா பெங்களூரு, கர்நாடகா- 560095, இந்தியா.",
  REGISTERED_ADDRESS_DESCRIPTION_ADDITIONAL : "இணையதளம் : <u>https://nammayatri.in/</u>",
  CONFIRM : "உறுதி",
  GENDER_UPDATED : "பாலினம் புதுப்பிக்கப்பட்டது",
  ZONE_CANCEL_TEXT_DROP : "உங்கள் வாடிக்கையாளர் சரியான நேரத்தில் மெட்ரோ நிலையத்தை அடையும் அவசரத்தில் இருக்கலாம்! \n ரத்து செய்ய வேண்டாம் என்று கேட்டுக்கொள்கிறோம்.",
  ZONE_CANCEL_TEXT_PICKUP : "உங்கள் வாடிக்கையாளர் தங்கள் இலக்கை அடைவதற்கான அவசரத்தில் இருக்கலாம். \n ரத்து செய்ய வேண்டாம் என்று கேட்டுக்கொள்கிறோம்.",
  RANKINGS : "தரவரிசை",
  GETTING_THE_LEADERBOARD_READY : "லீடர்போர்டை உருவாக்குகிறது!",
  PLEASE_WAIT_WHILE_WE_UPDATE_THE_DETAILS : "நாங்கள் விவரங்களைப் புதுப்பிக்கும் வரை காத்திருக்கவும்",
  LAST_UPDATED : "கடைசியாக புதுப்பிக்கப்பட்டது: ",
  CONGRATULATIONS_YOU_ARE_RANK : "வாழ்த்துகள் ! உங்கள் ரேங்க் ",
  YOU : " (நீங்கள்)",
  DAILY : "தினசரி",
  WEEKLY : "வாரந்தோறும்",
  ACCEPT_RIDES_TO_ENTER_RANKINGS : "தரவரிசையில் நுழைய சவாரிகளை ஏற்கவும்!",
  OTP_HAS_BEEN_RESENT : "OTP மீண்டும் அனுப்பப்பட்டது",
  OTP_ENTERING_LIMIT_EXHAUSTED_PLEASE_TRY_RESENDING_OTP : "OTP ஐ உள்ளிடுவதற்கான வரம்பை அடைந்து விட்டது, மீண்டும் OTP ஐ அனுப்ப முயற்சிக்கவும்",
  OTP_RESENT_LIMIT_EXHAUSTED_PLEASE_TRY_AGAIN_LATER : "OTP மறுபரிசீலனை வரம்பை அடைந்து விட்டது, பிறகு முயற்சிக்கவும்",
  OTP_PAGE_HAS_BEEN_EXPIRED_PLEASE_REQUEST_OTP_AGAIN : "OTP பக்கம் காலாவதியானது, OTP ஐ மீண்டும் கோரவும்",
  SOMETHING_WENT_WRONG_PLEASE_TRY_AGAIN : "சில தொழில்நுட்ப சிக்கல் ஏற்பட்டுள்ளது, மீண்டும் முயற்சிக்கவும்",
  INVALID_REFERRAL_CODE : "தவறான பரிந்துரை குறியீடு",
  ISSUE_REMOVED_SUCCESSFULLY : "சிக்கல் வெற்றிகரமாக தீர்க்கப்பட்டது",
  OTP_ENTERING_LIMIT_EXHAUSTED_PLEASE_TRY_AGAIN_LATER : "OTP உள்ளீட்டு வரம்பை அடைந்து விட்டது, பிறகு முயற்சிக்கவும்",
  TOO_MANY_ATTEMPTS_PLEASE_TRY_AGAIN_LATER : "நீங்கள் பல தவறான முயற்சிகளைச் செய்துள்ளீர்கள், பிறகு முயற்சிக்கவும்",
  INVALID_REFERRAL_NUMBER : "தவறான பரிந்துரை எண்",
  SOMETHING_WENT_WRONG_TRY_AGAIN_LATER : "சில தொழில்நுட்பச் சிக்கல் ஏற்பட்டுள்ளது, பிறகு முயற்சிக்கவும்",
  WAIT_TIME : "காத்திருக்கும் நேரம்",
  WAIT_TIMER : "காத்திரு டைமர்",
  HOW_LONG_WAITED_FOR_PICKUP : "பிக்அப்பில்\nஎவ்வளவு நேரம் காத்திருந்தீர்கள் என்பதைக் காட்டுகிறது.",
  CUSTOMER_WILL_PAY_FOR_EVERY_MINUTE : "முதல் 3 நிமிடங்களுக்குப் பிறகு ஒவ்வொரு நிமிட காத்திருப்பு நேரத்திற்கும் வாடிக்கையாளர் ₹1.5 செலுத்துவார்.",
  OTHERS : "மற்றவைகள்",
  ENTER_SECOND_SIM_NUMBER : "இரண்டாவது சிம் எண்ணை உள்ளிடவும்",
  ALTERNATE_NUMBER : "மாற்று எண்",
  OTP_RESEND_LIMIT_EXCEEDED : "மீண்டும் OTP அனுப்புவதற்கான வரம்பு மீறப்பட்டது",
  LIMIT_EXCEEDED_FOR_ALTERNATE_NUMBER : "பல தவறான முயற்சிகள். பின்னர் மீண்டும் முயற்சிக்கவும்",
  ALTERNATE_NUMBER_CANNOT_BE_ADDED : "மற்றொரு எண்ணைச் சேர்க்க முடியாது",
  ADD_ALTERNATE_NUMBER_IN_MEANTIME : "இந்தச் செயல்முறை முடிய 2 வேலை நாட்கள் வரை ஆகலாம். இதற்கிடையில், நீங்கள் \nமாற்று மொபைல் எண்ணைச் சேர்க்கலாம்.",
  SELECT_THE_LANGUAGES_YOU_CAN_SPEAK : "நீங்கள் பேசக்கூடிய மொழிகளைத் தேர்ந்தெடுக்கவும்",
  ALTERNATE_NUMBER_CANNOT_BE_ADDED : "மாற்று எண்ணைச் சேர்க்க முடியாது",
  OTP_RESENT : "OTP மீண்டும் அனுப்பவும்",
  SEDAN : "செடான்",
  SUV : "SUV",
  HATCHBACK : "ஹேட்ச்பேக்",
  AUTO_RICKSHAW : "ஆட்டோ ரிக்ஷா",
  TAXI : "ஏசி அல்லாத டாக்ஸி",
  TAXI_PLUS : "ஏசி டாக்ஸி",
  MY_PROFILE : "எனது சுயவிவரம்",
  SETTINGS : "அமைப்புகள்",
  REG_NUMBER : "பதிவு எண்",
  TYPE : "வகை",
  MODEL_NAME : "மாடல் பெயர்",
  COLOUR : "நிறம்",
  BADGES: "பேட்ஜ்கள்",
  CALL_CUSTOMER_SUPPORT : "வாடிக்கையாளர் ஆதரவை அழைக்கவும்",
  EDIT_RC : "RC ஐ திருத்து",
  DELETE_RC : "RC ஐ நீக்கு",
  DEACTIVATE_RC : "RC ஐ செயலிழக்கச் செய்யவும்",
  ACTIVATE_RC : "RC ஐ செயல்படுத்தவும்",
  ACTIVE_RC_ON_ANOTHER_DRIVER : " மற்றொரு இயக்கி கணக்கில் செயலில் உள்ளது!",
  CALL_DRIVER_OR_CONTACT_SUPPORT : "RC ஐ செயலிழக்க டிரைவரை அழைக்கவும் அல்லது இயக்கியை அணுக முடியவில்லை என்றால் ஆதரவைத் தொடர்பு கொள்ளவும்",
  CALL_DRIVER : "டிரைவரை அழைக்கவும்",
  SKIP : "தவிர்க்கவும்",
  ACTIVE_RC : "செயலில்",
  INACTIVE_RC : "செயலற்றது",
  CONFIRMATION_FOR_DELETING_RC : "உங்கள் RC ஐ நிச்சயமாக நீக்க விரும்புகிறீர்களா",
  CONFIRMATION_FOR_DEACTIVATING_RC : "உங்கள் RC ஐ செயலிழக்கச் செய்ய விரும்புகிறீர்களா?- ",
  CONFIRMATION_FOR_ACTIVATING_RC : "RC ஐச் செயல்படுத்த விரும்புகிறீர்களா?- ",
  YES_DELETE : "ஆம், நீக்கு",
  ADD_NEW_RC : "RC ஐச் சேர்க்கவும்",
  CONNECT_CALL_ANONYMOUSLY: "டிரைவருடன் அநாமதேயமாக உங்களை இணைக்க முயற்சிப்போம், RC ஐ செயலிழக்கக் கோரும் முன் உங்களை அறிமுகப்படுத்திக் கொள்ளவும்.",
  YES_ACTIVATE : "ஆம், செயல்படுத்து",
  YES_DEACTIVATE : "ஆம், செயலிழக்கச் செய்",
  THIS_WILL_DEACTIVATE_CURRENTLY_ACTIVE_RC : "இது தற்போது செயலில் உள்ள உங்கள் RC ஐ செயலிழக்கச் செய்யும்.",
  PLEASE_WAIT_WHILE_WE_CONNECT_WITH_DRIVER : "நாங்கள் உங்களை டிரைவருடன் இணைக்கும் வரை காத்திருக்கவும்",
  REMOVED : "அகற்றப்பட்டது",
  IS_ACTIVE_NOW : " இப்போது செயலில் உள்ளது.",
  DEACTIVATED : "செயலிழக்கப்பட்டது",
  LANGUAGE_UPDATED : "भाषा अद्यतन",
  SINGLE_RC_CANNOT_BE_DELETED : "மொழி புதுப்பிக்கப்பட்டது",
  CANCELLATION_RATE : "ரத்து விகிதம்",
  RIDES_CANCELLED : "ரரத்து செய்யப்பட்ட சவாரிகள்",
  EARNINGS_MISSED : "தவறவிட்ட வருவாய்",
  SUMMARY : "சுருக்கம்",
  NAMMA_BONUS  : "நம்ம போனஸ்",
  TRIPS_COMPLETED : "முடிந்த பயணங்கள்",
  LATE_NIGHT_TRIPS  :"தாமதமான இரவு பயணங்கள்",
  ABOUT_ME  : "என்னைப் பற்றி",
  ABOUT_VEHICLE : "வாகனம் பற்றி",
  ADD : "சேர்",
  YEARS_OLD  : "வயது",
  HOMETOWN  : "சொந்த ஊர்",
  MISSED_OPPORTUNITY : "தவறவிட்ட வாய்ப்புகள்",
  HOW_OLD_IS_YOUR_VEHICLE : "உங்கள் வாகனம் (ஆண்டுகளில்) எவ்வளவு பழையது?",
  ENTER_NAME_OF_VEHICLE : "உங்கள் வாகனத்தின் பெயரை உள்ளிடவும்",
  NEW_ : "புதியது",
  TODAY : "இன்று",
  ENTER_AADHAAR_NUMBER : "ஆதார் எண்/யுஐடியை உள்ளிடவும்",
  ENTER_AADHAAR_OTP_ : "ஆதார் OTP ஐ உள்ளிடவும்",
  AADHAAR_LINKING_REQUIRED : "ஆதார் இணைப்பு தேவை",
  AADHAAR_LINKING_REQUIRED_DESCRIPTION : "யாத்ரி சதிக்கு வாகனம் ஓட்டத் தொடங்க, தயவுசெய்து \n உங்கள் ஆதார் ஐடியை இணைக்கவும்",
  BY_CLICKING_THIS_YOU_WILL_BE_AGREEING_TO_OUR_TC : "தொடரவும் என்பதைக் கிளிக் செய்வதன் மூலம், எங்களின் ",
  TERMS_AND_CONDITIONS_SHORT : "T&C",
  TC_TAIL : "ஐ ஏற்கிறீர்கள்",
  OTP_SENT_TO_AADHAAR_NUMBER: "OTP உங்கள் ஆதாருடன் இணைக்கப்பட்ட மொபைல் எண்ணுக்கு அனுப்பப்பட்டது",
  ENTER_SIX_DIGIT_OTP : "ஆறு இலக்க OTP ஐ உள்ளிடவும்",
  LINK_AADHAAR_ID : "ஆதார் ஐடியை இணைக்கவும்",
  NO_MOBILE_NUMBER_REGISTERED : "ஆதார் எண்ணில் பதிவு செய்யப்பட்ட மொபைல் எண் இல்லை.",
  EXCEED_OTP_GENERATION_LIMIT : "அதிகபட்ச OTP உருவாக்க வரம்பை மீறியது. சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.",
  AADHAAR_NUMBER_NOT_EXIST : "ஆதார் எண் இல்லை.",
  INVALID_OTP : "தவறான OTP",
  NO_SHARE_CODE : "பங்கு குறியீடு வழங்கப்படவில்லை",
  WRONG_SHARE_CODE : "தவறான பகிர்வு குறியீடு",
  INVALID_SHARE_CODE : "தவறான பகிர்வு குறியீடு. நீளம் 4 ஆக இருக்க வேண்டும் மற்றும் எண்களை மட்டுமே கொண்டிருக்க வேண்டும்.",
  SESSION_EXPIRED : "அமர்வு காலாவதியானது. செயல்முறையை மீண்டும் தொடங்கவும்.",
  OTP_ATTEMPT_EXCEEDED : "OTP முயற்சிகள் மீறப்பட்டுள்ளன. செயல்முறையை மீண்டும் தொடங்கவும்",
  UPSTREAM_INTERNAL_SERVER_ERROR : "அப்ஸ்ட்ரீம் மூல/அரசு மூல உள் சேவையகப் பிழை. செயல்முறையை மீண்டும் தொடங்கவும்.",
  TRANSACTION_ALREADY_COMPLETED : "பரிவர்த்தனை ஏற்கனவே முடிந்தது. இந்த பரிவர்த்தனையின் மீது மேற்கொண்டு செயல்பட முடியாது.",
  AADHAAR_ALREADY_LINKED : "ஆதார் ஏற்கனவே இணைக்கப்பட்டுள்ளது",
  OPTIONAL : " (விருப்பமானது)",
  DOWNLOAD_STATEMENT : "அறிக்கையைப் பதிவிறக்கு",
  SELECT_A_DATE_RANGE : "அறிக்கையைப் பதிவிறக்க தேதி வரம்பைத் தேர்ந்தெடுக்கவும்",
  FEE_PAYMENT_HISTORY : "கட்டணம் செலுத்திய வரலாறு",
  LANGUAGES_SPOKEN : "பேசும் மொழிகள்",
  VIEW_PAYMENT_HISTORY : "கட்டண வரலாற்றைக் காண்க",
  RIDE_TYPE : "சவாரி வகை",
  PLACE_CALL_REQUEST : "Place Call Request",
  RC_STATUS : "RC நிலை",
  BOOKING_OPTIONS : "முன்பதிவு விருப்பங்கள்",
  RATED_BY_USERS1 : "",
  RATED_BY_USERS2 : "பயனர்கள் மூலம் மதிப்பிடப்பட்டது",
  MONTHS : "மாதங்கள்"
}