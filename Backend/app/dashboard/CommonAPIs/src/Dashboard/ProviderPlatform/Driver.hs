{-
 Copyright 2022-23, Juspay India Pvt Ltd

 This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License

 as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program

 is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY

 or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. You should have received a copy of

 the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE TemplateHaskell #-}

module Dashboard.ProviderPlatform.Driver
  ( module Dashboard.ProviderPlatform.Driver,
    module Reexport,
  )
where

import Dashboard.Common as Reexport
import Kernel.External.Maps.Types
import Kernel.Prelude
import Kernel.Storage.Esqueleto (derivePersistField)
import Kernel.Types.APISuccess (APISuccess)
import Kernel.Types.Id
import Kernel.Types.Predicate
import qualified Kernel.Utils.Predicates as P
import Kernel.Utils.Validation
import Servant hiding (Summary, throwError)

-- we need to save endpoint transactions only for POST, PUT, DELETE APIs
data DriverEndpoint
  = EnableDriverEndpoint
  | DisableDriverEndpoint
  | BlockDriverEndpoint
  | UnblockDriverEndpoint
  | DeleteDriverEndpoint
  | UnlinkVehicleEndpoint
  | UnlinkDLEndpoint
  | EndRCAssociationEndpoint
  | UpdatePhoneNumberEndpoint
  | AddVehicleEndpoint
  | UpdateDriverNameEndpoint
  deriving (Show, Read)

derivePersistField "DriverEndpoint"

newtype DriverIds = EnableDriversRequest
  { driverIds :: [Id Driver]
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

---------------------------------------------------------
-- driver list ------------------------------------------

type DriverListAPI =
  "list"
    :> QueryParam "limit" Int
    :> QueryParam "offset" Int
    :> QueryParam "verified" Bool
    :> QueryParam "enabled" Bool
    :> QueryParam "blocked" Bool
    :> QueryParam "phone" Text
    :> QueryParam "vehicleNumberSearchString" Text
    :> Get '[JSON] DriverListRes

data DriverListRes = DriverListRes
  { totalItems :: Int, -- for backward compatibility
    summary :: Summary,
    drivers :: [DriverListItem]
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data DriverListItem = DriverListItem
  { driverId :: Id Driver,
    firstName :: Text,
    middleName :: Maybe Text,
    lastName :: Maybe Text,
    vehicleNo :: Maybe Text,
    phoneNo :: Maybe Text,
    enabled :: Bool,
    blocked :: Bool,
    verified :: Bool,
    onRide :: Bool,
    active :: Bool
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data DocumentInfo a = DocumentInfo
  { documentNumber :: Text,
    status :: Text,
    details :: Maybe a
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data LicDetails = LicDetails
  { licExpiry :: UTCTime,
    vehicleClass :: [Text]
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data RCDetails = RCDetails
  { vehicleClass :: Text,
    fitnessExpiry :: UTCTime,
    insuranceExpiry :: Maybe UTCTime
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

---------------------------------------------------------
-- documents info ---------------------------------------

type DriverDocumentsInfoAPI =
  "documents"
    :> "info"
    :> Get '[JSON] DriverDocumentsInfoRes

data DriverDocumentsInfoRes = DriverDocumentsInfoRes
  { registered :: !Int,
    verified :: !Int,
    enabled :: !Int,
    blocked :: !Int,
    validDocuments :: !DocumentsByStateInfo,
    invalidDocuments :: !DocumentsByStateInfo,
    verificationPending :: !DocumentsByStateInfo,
    verificationFailed :: !DocumentsByStateInfo,
    verificationLimitExceeded :: !DocumentsByStateInfo,
    docsExpiringInMonth :: !DocumentsByStateInfo
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data DocumentsByStateInfo = DocumentsByStateInfo
  { driverLicense :: !Int,
    vehicleRegistrationCertificate :: !Int
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

emptyDocumentsByStateInfo :: DocumentsByStateInfo
emptyDocumentsByStateInfo = DocumentsByStateInfo 0 0

emptyInfo :: DriverDocumentsInfoRes
emptyInfo =
  DriverDocumentsInfoRes
    { registered = 0,
      verified = 0,
      enabled = 0,
      blocked = 0,
      validDocuments = emptyDocumentsByStateInfo,
      invalidDocuments = emptyDocumentsByStateInfo,
      verificationPending = emptyDocumentsByStateInfo,
      verificationFailed = emptyDocumentsByStateInfo,
      verificationLimitExceeded = emptyDocumentsByStateInfo,
      docsExpiringInMonth = emptyDocumentsByStateInfo
    }

---------------------------------------------------------
-- driver activity --------------------------------------

type DriverActivityAPI =
  "activity"
    :> Get '[JSON] DriverActivityRes

data DriverActivityRes = DriverActivityRes
  { activeDriversInApp :: !Int,
    --    activeDriversInLastHour :: !Int,
    inactiveDrivers :: !Int
    --    inactiveDriversSinceTwoDays :: !Int,
    --    trendFrequency :: !Seconds,
    --    trend :: ![ActivityTrendItem]
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

{-
data ActivityTrendItem = ActivityTrendItem
  { timestamp :: UTCTime,
    active :: Int,
    inactive :: Int
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)
oneHour :: Seconds
oneHour = 3600
-}

mkDriverActivityRes :: (Int, Int) -> DriverActivityRes
mkDriverActivityRes (active, inactive) =
  DriverActivityRes
    { activeDriversInApp = active,
      --      activeDriversInLastHour = 0,
      inactiveDrivers = inactive
      --      inactiveDriversSinceTwoDays = 0,
      --      trendFrequency = oneHour,
      --      trend = []
    }

---------------------------------------------------------
-- enable driver ----------------------------------------

type EnableDriverAPI =
  Capture "driverId" (Id Driver)
    :> "enable"
    :> Post '[JSON] APISuccess

---------------------------------------------------------
-- disable driver ---------------------------------------

type DisableDriverAPI =
  Capture "driverId" (Id Driver)
    :> "disable"
    :> Post '[JSON] APISuccess

---------------------------------------------------------
-- block driver ----------------------------------------

type BlockDriverAPI =
  Capture "driverId" (Id Driver)
    :> "block"
    :> Post '[JSON] APISuccess

---------------------------------------------------------
-- unblock driver ---------------------------------------

type UnblockDriverAPI =
  Capture "driverId" (Id Driver)
    :> "unblock"
    :> Post '[JSON] APISuccess

---------------------------------------------------------
-- driver location --------------------------------------

type DriverLocationAPI =
  "location"
    :> QueryParam "limit" Int
    :> QueryParam "offset" Int
    :> ReqBody '[JSON] DriverIds
    :> Get '[JSON] DriverLocationRes

data DriverLocationRes = DriverLocationRes
  { driverLocationsNotFound :: Maybe (NonEmpty (Id Driver)),
    driverLocations :: [DriverLocationItem]
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data DriverLocationItem = DriverLocationItem
  { driverId :: Id Driver,
    firstName :: Text,
    middleName :: Maybe Text,
    lastName :: Maybe Text,
    vehicleNo :: Text,
    phoneNo :: Text,
    active :: Bool,
    onRide :: Bool,
    location :: LatLong,
    lastLocationTimestamp :: UTCTime
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

---------------------------------------------------------
-- driver info ------------------------------------------

type DriverInfoAPI =
  "info"
    :> QueryParam "mobileNumber" Text
    :> QueryParam "mobileCountryCode" Text
    :> QueryParam "vehicleNumber" Text
    :> QueryParam "dlNumber" Text
    :> QueryParam "rcNumber" Text
    :> Get '[JSON] DriverInfoRes

data DriverInfoRes = DriverInfoRes
  { driverId :: Id Driver,
    firstName :: Text,
    middleName :: Maybe Text,
    lastName :: Maybe Text,
    numberOfRides :: Int,
    mobileNumber :: Maybe Text,
    mobileCountryCode :: Maybe Text,
    enabled :: Bool,
    blocked :: Bool,
    verified :: Bool,
    canDowngradeToSedan :: Bool,
    canDowngradeToHatchback :: Bool,
    canDowngradeToTaxi :: Bool,
    vehicleNumber :: Maybe Text,
    driverLicenseDetails :: Maybe DriverLicenseAPIEntity,
    vehicleRegistrationDetails :: [DriverRCAssociationAPIEntity]
  }
  deriving stock (Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data DriverLicense

data VehicleRegistrationCertificate

data DriverLicenseAPIEntity = DriverLicenseAPIEntity
  { driverLicenseId :: Id DriverLicense,
    documentImageId1 :: Id Image,
    documentImageId2 :: Maybe (Id Image),
    driverDob :: Maybe UTCTime,
    driverName :: Maybe Text,
    licenseNumber :: Text,
    licenseExpiry :: UTCTime,
    classOfVehicles :: [Text],
    failedRules :: [Text],
    verificationStatus :: VerificationStatus,
    consent :: Bool,
    consentTimestamp :: UTCTime
    -- createdAt :: UTCTime, -- do we need it?
    -- updatedAt UTCTime,
  }
  deriving stock (Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data DriverRCAssociationAPIEntity = DriverRCAssociationAPIEntity
  { associatedOn :: UTCTime,
    associatedTill :: Maybe UTCTime,
    details :: VehicleRegistrationCertificateAPIEntity
    -- consent :: Bool, -- do we need it?
    -- consentTimestamp :: UTCTime
  }
  deriving stock (Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data VehicleRegistrationCertificateAPIEntity = VehicleRegistrationCertificateAPIEntity
  { registrationCertificateId :: Id VehicleRegistrationCertificate,
    documentImageId :: Id Image,
    certificateNumber :: Text,
    fitnessExpiry :: UTCTime,
    permitExpiry :: Maybe UTCTime,
    pucExpiry :: Maybe UTCTime,
    insuranceValidity :: Maybe UTCTime,
    vehicleClass :: Maybe Text,
    failedRules :: [Text],
    vehicleManufacturer :: Maybe Text,
    vehicleCapacity :: Maybe Int,
    vehicleModel :: Maybe Text,
    vehicleColor :: Maybe Text,
    vehicleEnergyType :: Maybe Text,
    verificationStatus :: VerificationStatus
    -- createdAt :: UTCTime, -- do we need it?
    -- updatedAt UTCTime,
  }
  deriving stock (Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data VerificationStatus = PENDING | VALID | INVALID
  deriving stock (Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

---------------------------------------------------------
-- delete driver ----------------------------------------

type DeleteDriverAPI =
  Capture "driverId" (Id Driver)
    :> "permanentlyDelete"
    :> Delete '[JSON] APISuccess

---------------------------------------------------------
-- unlink vehicle ---------------------------------------

type UnlinkVehicleAPI =
  Capture "driverId" (Id Driver)
    :> "unlinkVehicle"
    :> Post '[JSON] APISuccess

---------------------------------------------------------
-- unlink dl ---------------------------------------

type UnlinkDLAPI =
  Capture "driverId" (Id Driver)
    :> "unlinkDL"
    :> Post '[JSON] APISuccess

---------------------------------------------------------
-- end rc association -----------------------------------

type EndRCAssociationAPI =
  Capture "driverId" (Id Driver)
    :> "endRCAssociation"
    :> Post '[JSON] APISuccess

---------------------------------------------------------
-- update phone number ----------------------------------

type UpdatePhoneNumberAPI =
  Capture "driverId" (Id Driver)
    :> "updatePhoneNumber"
    :> ReqBody '[JSON] UpdatePhoneNumberReq
    :> Post '[JSON] APISuccess

data UpdatePhoneNumberReq = UpdatePhoneNumberReq
  { newPhoneNumber :: Text,
    newCountryCode :: Text
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

validateUpdatePhoneNumberReq :: Validate UpdatePhoneNumberReq
validateUpdatePhoneNumberReq UpdatePhoneNumberReq {..} =
  sequenceA_
    [ validateField "newPhoneNumber" newPhoneNumber P.mobileNumber,
      validateField "newCountryCode" newCountryCode P.mobileIndianCode
    ]

instance HideSecrets UpdatePhoneNumberReq where
  hideSecrets = identity

---------------------------------------------------------
-- add vehicle ------------------------------------------

type AddVehicleAPI =
  Capture "driverId" (Id Driver)
    :> "addVehicle"
    :> ReqBody '[JSON] AddVehicleReq
    :> Post '[JSON] APISuccess

data AddVehicleReq = AddVehicleReq
  { variant :: Variant,
    registrationNo :: Text,
    vehicleClass :: Text,
    capacity :: Maybe Int,
    colour :: Text,
    energyType :: Maybe Text,
    model :: Text,
    make :: Maybe Text,
    driverName :: Text
  }
  deriving stock (Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

data Variant = SEDAN | SUV | HATCHBACK | AUTO_RICKSHAW | TAXI | TAXI_PLUS
  deriving stock (Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)

validateAddVehicleReq :: Validate AddVehicleReq
validateAddVehicleReq AddVehicleReq {..} =
  sequenceA_
    [ validateField "color" colour $ NotEmpty `And` P.name,
      validateField "registrationNo" registrationNo $
        LengthInRange 1 11 `And` star (P.latinUC \/ P.digit)
    ]

instance HideSecrets AddVehicleReq where
  hideSecrets = identity

---------------------------------------------------------
-- update driver name -----------------------------------

type UpdateDriverNameAPI =
  Capture "driverId" (Id Driver)
    :> "updateName"
    :> ReqBody '[JSON] UpdateDriverNameReq
    :> Post '[JSON] APISuccess

data UpdateDriverNameReq = UpdateDriverNameReq
  { firstName :: Text,
    middleName :: Maybe Text,
    lastName :: Maybe Text
  }
  deriving (Generic, ToJSON, FromJSON, ToSchema)

validateUpdateDriverNameReq :: Validate UpdateDriverNameReq
validateUpdateDriverNameReq UpdateDriverNameReq {..} =
  sequenceA_
    [ validateField "firstName" firstName $ MinLength 3 `And` P.name,
      validateField "middleName" middleName $ InMaybe P.name,
      validateField "lastName" lastName $ InMaybe P.name
    ]

instance HideSecrets UpdateDriverNameReq where
  hideSecrets = identity

---------------------------------------------------------
-- Get Route driver ids ---------------------------------------

type ClearOnRideStuckDrivers =
  "clearStuck"
    :> "onRide"
    :> Get '[JSON] ClearOnRideStuckDriversRes

newtype ClearOnRideStuckDriversRes = ClearOnRideStuckDriversRes
  { driverIds :: [Id Driver]
  }
  deriving stock (Eq, Show, Generic)
  deriving anyclass (ToJSON, FromJSON, ToSchema)
