{-

  Copyright 2022-23, Juspay India Pvt Ltd

  This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License

  as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program

  is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY

  or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. You should have received a copy of

  the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
-}

module Screens.TripDetailsScreen.View where

import Animation as Anim
import Components.PrimaryButton as PrimaryButton
import Components.PopUpModal as PopUpModal
import Effect (Effect)
import Language.Types (STR(..))
import Language.Strings (getString)
import Prelude (Unit, const, map, ($), (&&), (/=), (<<<), (<=), (<>), (==))
import PrestoDOM (Length(..), Margin(..), Orientation(..), Padding(..), Gravity(..), Visibility(..), PrestoDOM, Screen, linearLayout, frameLayout, gravity, orientation, height, width, imageView, imageUrl, text, textSize, textView, padding, color, margin, fontStyle, background, cornerRadius, stroke, editText, weight, hint, onClick, visibility, pattern, onChange, scrollView, relativeLayout, alignParentBottom, onBackPressed, afterRender, multiLineEditText, disableClickFeedback, imageWithFallback, hintColor, adjustViewWithKeyboard)
import Screens.Types as ST 
import Screens.Types (PaymentMode(..))
import Screens.TripDetailsScreen.Controller (Action(..), ScreenOutput, eval)
import Font.Size as FontSize
import Font.Style as FontStyle
import Components.GenericHeader as GenericHeader
import Components.SourceToDestination as SourceToDestination
import Engineering.Helpers.Commons as EHC
import Styles.Colors as Color
import Debug (spy)
import Common.Types.App
import Screens.CustomerUtils.TripDetailsScreen.ComponentConfig
import Helpers.Utils (getAssetStoreLink, getCommonAssetStoreLink)
import Prelude ((<>))
import Data.Maybe(fromMaybe, isJust)

screen :: ST.TripDetailsScreenState -> Screen Action ST.TripDetailsScreenState ScreenOutput
screen initialState =
  { initialState
  , view
  , name : "TripDetailsScreen"
  , globalEvents : []
  , eval : \state  action -> do
      let _ = spy  "TripDetailsScreen action " state
      let _ = spy  "TripDetailsScreen state " action
      eval state action
  }

view
  :: forall w
  . (Action -> Effect Unit) -> ST.TripDetailsScreenState -> PrestoDOM (Effect Unit) w
view push state =
  Anim.screenAnimation $ relativeLayout
  [ height MATCH_PARENT
  , width MATCH_PARENT
  , orientation VERTICAL
  , background Color.white900
  , padding $ Padding 0 EHC.safeMarginTop 0 EHC.safeMarginBottom
  , onBackPressed push (const BackPressed)
  , afterRender push (const AfterRender)
  ][  linearLayout
      [ height MATCH_PARENT
      , width MATCH_PARENT
      , orientation VERTICAL
  ][ GenericHeader.view (push <<< GenericHeaderActionController) (genericHeaderConfig state)
    , relativeLayout
      [ width MATCH_PARENT
      , height MATCH_PARENT
      , visibility if state.props.issueReported then GONE else VISIBLE
      , adjustViewWithKeyboard "true"
      ][  tripDetailsLayout state push
        , linearLayout
          [ height WRAP_CONTENT
          , width MATCH_PARENT
          , alignParentBottom "true,-1"
          , background Color.white900
          , visibility if state.props.reportIssue then VISIBLE else GONE
          ][PrimaryButton.view (push <<< PrimaryButtonActionController) (primaryButtonConfig state)]

        ]]
    , issueReportedView state push
    , lostAndFoundPopUpView push state
    ]

tripDetailsLayout :: forall w. ST.TripDetailsScreenState -> (Action -> Effect Unit) -> PrestoDOM (Effect Unit) w
tripDetailsLayout state push =
  scrollView
  [height MATCH_PARENT
  , width MATCH_PARENT
  ][  linearLayout
      [ height WRAP_CONTENT
      , width MATCH_PARENT
      , orientation VERTICAL
      ][  linearLayout
          [ height WRAP_CONTENT
          , width MATCH_PARENT
          , orientation VERTICAL
          , background Color.blue600
          , visibility if state.props.issueReported then GONE else VISIBLE
          , padding (Padding 16 16 16 10)
          ][ tripDetailsView state
           , separatorView
           , tripIdView push state
           , SourceToDestination.view (push <<< SourceToDestinationActionController) (sourceToDestinationConfig state)
           , ratingAndInvoiceView state push
           ]
        , linearLayout
          [ height WRAP_CONTENT
          , width MATCH_PARENT
          , padding (Padding 16 0 16 50)
          , margin (MarginBottom 40)
          , visibility if state.props.issueReported then GONE else VISIBLE
          , orientation VERTICAL
          ][ invoiceView state push
            , linearLayout
             [ height (V 1)
             , width MATCH_PARENT
             , background Color.lightGreyShade
             , visibility if state.data.selectedItem.status == "CANCELLED" then GONE else VISIBLE
             ][]
            , lostAndFoundView push state
            , linearLayout
              [ height (V 1)
              , width MATCH_PARENT
              , background Color.lightGreyShade
              , visibility if (state.data.selectedItem.status /= "CANCELLED" && state.props.canConnectWithDriver)  then VISIBLE else GONE
              ][]
            , reportIssueView state push
           ]
        ]]

lostAndFoundView :: forall w . (Action -> Effect Unit) -> ST.TripDetailsScreenState -> PrestoDOM (Effect Unit) w
lostAndFoundView push state =
  linearLayout
  [ height WRAP_CONTENT
  , width MATCH_PARENT
  , gravity CENTER_VERTICAL
  , orientation HORIZONTAL
  , padding (Padding 0 16 0 16)
  , disableClickFeedback false
  , visibility if (state.data.selectedItem.status /= "CANCELLED" && state.props.canConnectWithDriver) then VISIBLE else GONE
  , onClick push $ (const ShowPopUp)
  ][  textView $
      [ text (getString LOST_SOMETHING)
      , color Color.darkDescriptionText
      ] <> FontStyle.body1 LanguageStyle
    , linearLayout
      [ height WRAP_CONTENT
      , width MATCH_PARENT
      , gravity RIGHT
      ][  imageView
          [ imageWithFallback $ "ny_ic_chevron_right," <> (getAssetStoreLink FunctionCall) <> "ny_ic_chevron_right.png"
          , height (V 15)
          , width (V 15)
          ]
        ]
  ]

---------------------- tripIdView ---------------------------
tripIdView :: forall w . (Action -> Effect Unit) -> ST.TripDetailsScreenState -> PrestoDOM (Effect Unit) w
tripIdView push state =
  linearLayout
  [ orientation VERTICAL
  , height WRAP_CONTENT
  , width WRAP_CONTENT
  , visibility if state.data.tripId == "" then GONE else VISIBLE
  , margin (MarginBottom 16)
  , gravity LEFT
  ][  textView $
      [ text (getString RIDE_ID)
      , color Color.black700
      ] <> FontStyle.body1 LanguageStyle
    , linearLayout
      [ height WRAP_CONTENT
      , width WRAP_CONTENT
      , orientation HORIZONTAL
      , onClick push (const Copy)
      , gravity CENTER_VERTICAL
      ][ textView $
          [ text state.data.tripId
          , width WRAP_CONTENT
          , color Color.black900
          ] <> FontStyle.paragraphText LanguageStyle
        , imageView
          [ imageWithFallback $ "ny_ic_copy," <> (getCommonAssetStoreLink FunctionCall) <> "ny_ic_copy.png"
          , height (V 13)
          , width (V 11)
          , margin (Margin 10 0 0 0)
          ]
      ]

  ]

lostAndFoundPopUpView :: forall w . (Action -> Effect Unit) -> ST.TripDetailsScreenState -> PrestoDOM (Effect Unit) w
lostAndFoundPopUpView push state =
  linearLayout
    [ height MATCH_PARENT
    , width MATCH_PARENT
    , visibility if state.props.showConfirmationPopUp then VISIBLE else GONE
    ][PopUpModal.view (push <<< PopUpModalAction) (confirmLostAndFoundConfig state)]

---------------------- tripDetails ---------------------------
tripDetailsView ::  forall w . ST.TripDetailsScreenState -> PrestoDOM (Effect Unit) w
tripDetailsView state =
  linearLayout
  [ height WRAP_CONTENT
  , width MATCH_PARENT
  , orientation HORIZONTAL
  , gravity CENTER_VERTICAL
  ][   frameLayout
          [ height WRAP_CONTENT
          , width WRAP_CONTENT
          , orientation HORIZONTAL
          ][  imageView
              [ margin if (isJust state.data.vehicleVariant) then (MarginLeft 28) else (MarginLeft 0)
              , cornerRadius 18.0
              -- , background Color.grey800
              , width (V 36)
              , height (V 36)
              , imageWithFallback $ "ny_ic_profile_image," <> (getCommonAssetStoreLink FunctionCall) <> "ny_ic_profile_image.png"
              ]
            , imageView
              [ imageWithFallback case (fromMaybe ST.AUTO_RICKSHAW state.data.vehicleVariant) of 
                                      ST.TAXI -> "ic_sedan_non_ac,"<> (getAssetStoreLink FunctionCall) <>"ic_sedan_non_ac.png"
                                      ST.TAXI_PLUS -> "ic_sedan_ac,"<> (getAssetStoreLink FunctionCall) <>"ic_sedan_ac.png"
                                      ST.SEDAN -> "ic_sedan,"<> (getAssetStoreLink FunctionCall) <>"ic_sedan.png"
                                      ST.SUV -> "ic_suv,"<> (getAssetStoreLink FunctionCall) <>"ic_suv.png"
                                      ST.HATCHBACK -> "ic_hatchback,"<> (getAssetStoreLink FunctionCall) <>"ic_hatchback.png"
                                      ST.AUTO_RICKSHAW -> "ic_vehicle_side,"<> (getAssetStoreLink FunctionCall) <>"ic_auto_side_view.png"
                                      _ -> "ic_sedan_non_ac," <> (getAssetStoreLink FunctionCall) <> "ic_sedan_non_ac.png"
              , width (V 40)
              , visibility if (isJust state.data.vehicleVariant) then VISIBLE else GONE
              , height (V 40)
              ]
            ]

    , linearLayout
      [ height WRAP_CONTENT
      , width WRAP_CONTENT
      , orientation VERTICAL
      , margin (MarginLeft 10)
      ][  textView $
          [ text state.data.driverName
          , color Color.darkDescriptionText
          ] <> FontStyle.body1 LanguageStyle
        , linearLayout
          [ height WRAP_CONTENT
          , width WRAP_CONTENT
          , orientation HORIZONTAL
          , gravity CENTER_VERTICAL
          ][  textView $
              [ text state.data.date
              , color Color.greyShade
              ] <> FontStyle.body16 LanguageStyle
            , linearLayout
              [ height MATCH_PARENT
              , width WRAP_CONTENT
              , gravity CENTER
              , orientation VERTICAL
              ][  linearLayout
                  [ background Color.greyishBlue
                  , cornerRadius 2.5
                  , margin (Margin 5 3 5 0)
                  , height (V 5)
                  , width (V 5)
                  ][]
               ]
            , textView $
              [ text state.data.time
              , color Color.greyShade
              ] <> FontStyle.body16 LanguageStyle
            ]
        ]
    , linearLayout
      [ height WRAP_CONTENT
      , width MATCH_PARENT
      , gravity RIGHT
      , orientation VERTICAL
      ][  textView $
          [ text (state.data.totalAmount)
          , color Color.black
          ] <> FontStyle.h2 LanguageStyle
        , textView $
          [ text $ if state.data.selectedItem.status == "CANCELLED" then (getString CANCELLED) else (getString PAID) <> " " <> if state.data.paymentMode == CASH then (getString BY_CASH) else (getString ONLINE_)
          , color if state.data.selectedItem.status == "CANCELLED" then Color.red else Color.greyShade
          ] <> FontStyle.captions LanguageStyle
        ]
    ]

------------------- separator -------------------
separatorView ::  forall w . PrestoDOM (Effect Unit) w
separatorView =
  linearLayout
  [ height (V 1)
  , width MATCH_PARENT
  , margin (Margin 0 16 0 8)
  , background Color.lightGreyShade
  ][]

-------------------- ratingAndInvoice ----------------
ratingAndInvoiceView ::  forall w . ST.TripDetailsScreenState -> (Action -> Effect Unit) -> PrestoDOM (Effect Unit) w
ratingAndInvoiceView state push =
  linearLayout
  [ height WRAP_CONTENT
  , width MATCH_PARENT
  , gravity CENTER_VERTICAL
  , orientation HORIZONTAL
  , visibility if state.data.selectedItem.status == "CANCELLED" then GONE else VISIBLE
  ][  textView $ 
      [ text $ (getString YOU_RATED)
      , color Color.greyDavy
      ] <> FontStyle.tags LanguageStyle
    , linearLayout
        [ height WRAP_CONTENT
        , width WRAP_CONTENT
        , padding (Padding 0 10 0 10)
        , gravity CENTER
        , margin (MarginLeft 5)
        ](map (\ item ->  linearLayout
                          [ height WRAP_CONTENT
                          , width WRAP_CONTENT
                          , margin (Margin 0 0 4 0)
                          ][imageView
                              [ height $ V 14
                              , width $ V 14
                              , imageWithFallback if item <= state.data.rating then "ny_ic_star_active," <> (getCommonAssetStoreLink FunctionCall) <> "ny_ic_star_active.png" else "ny_ic_star_inactive," <> (getCommonAssetStoreLink FunctionCall) <> "ny_ic_star_inactive.png" 
                              ]
                            ]) [1 ,2 ,3 ,4 ,5])
    -- , linearLayout
    --   [ height WRAP_CONTENT
    --   , width MATCH_PARENT
    --   , gravity RIGHT
    --   , onClick push $ (const DownloadInvoice)
    --   ][  textView
    --       [ text (getString DOWNLOAD_INVOICE)
    --       , textSize FontSize.a_12
    --       , color Color.blue900
    --       , visibility if not state.props.invoiceDownloaded then VISIBLE else GONE
    --       ]
    --     ]
    ]

-------- invoice --------
invoiceView ::  forall w . ST.TripDetailsScreenState -> (Action -> Effect Unit) -> PrestoDOM (Effect Unit) w
invoiceView state push =
  linearLayout
    [ height WRAP_CONTENT
    , width MATCH_PARENT
    , gravity CENTER_VERTICAL
    , orientation HORIZONTAL
    , padding (Padding 0 16 0 16)
    , disableClickFeedback false
    , onClick push $ (const ViewInvoice)
    , visibility if state.data.selectedItem.status == "CANCELLED" then GONE else VISIBLE
    ][  textView $
        [ text (getString VIEW_INVOICE)
        , color Color.darkDescriptionText
        ] <> FontStyle.body1 LanguageStyle
     ,  linearLayout
        [ height WRAP_CONTENT
        , width MATCH_PARENT
        , gravity RIGHT
        ][  imageView
            [ imageWithFallback $     "ny_ic_chevron_right," <> (getAssetStoreLink FunctionCall) <> "ny_ic_chevron_right.png"
            , height (V 15)
            , width (V 15)
            ]
          ]
      ]

----------------- report Isssue ----------------
reportIssueView ::  forall w . ST.TripDetailsScreenState -> (Action -> Effect Unit) -> PrestoDOM (Effect Unit) w
reportIssueView state push =
  linearLayout
    [ orientation VERTICAL
    , width MATCH_PARENT
    , height WRAP_CONTENT
    , padding (Padding 0 16 0 16)
    , disableClickFeedback true
    , onClick push $ const ReportIssue
    ][  linearLayout
        [ height WRAP_CONTENT
        , width MATCH_PARENT
        , gravity CENTER_VERTICAL
        , orientation HORIZONTAL
        , margin (MarginBottom 16)
        ][  textView $
            [ text (getString REPORT_AN_ISSUE)
            , color Color.darkDescriptionText
            ] <> FontStyle.body1 LanguageStyle
          , linearLayout
            [ height WRAP_CONTENT
            , width MATCH_PARENT
            , gravity RIGHT
            ][  imageView
                [ imageWithFallback if state.props.reportIssue then "ny_ic_chevron_up," <> (getCommonAssetStoreLink FunctionCall) <> "ny_ic_chevron_up.png" else "ny_ic_chevron_right," <> (getAssetStoreLink FunctionCall) <> "ny_ic_chevron_right.png"
                , height $ if state.props.reportIssue then V 6 else V 15
                , width $ if state.props.reportIssue then V 12 else V 15
                ]
              ]
          ]
          -- TODO add animations
          -- , PrestoAnim.animationSet[
          --   fadeIn state.props.reportIssue
          -- , fadeOut $ not state.props.reportIssue
          -- ] $
          , linearLayout
            [ width MATCH_PARENT
            , height WRAP_CONTENT
            , orientation VERTICAL
            , visibility if state.props.reportIssue then VISIBLE else GONE
            ][ linearLayout
               [ width MATCH_PARENT
               , height $ V 120
               , orientation HORIZONTAL
               , cornerRadius 5.0
               , padding ( Padding 2 2 2 2)
               , gravity LEFT
               , stroke ("1," <> Color.borderColorLight)
               ][  (if EHC.os == "ANDROID" then editText else multiLineEditText)
                      $ [ height MATCH_PARENT
                      , width WRAP_CONTENT
                      , weight 1.0
                      , padding (Padding 14 14 14 14)
                      , color Color.black800
                      , gravity LEFT
                      , background Color.white900
                      , text ""
                      , hint $ getString YOU_CAN_DESCRIBE_THE_ISSUE_YOU_FACED_HERE
                      , hintColor $ Color.blueGrey
                      , pattern "[^\n]*,255"
                      , onChange push $ MessageTextChanged
                      ] <> FontStyle.body6 LanguageStyle

                 ]
              ]

        ]

-------------------------- issueReportedView -----------------------
issueReportedView ::  forall w . ST.TripDetailsScreenState -> (Action -> Effect Unit) -> PrestoDOM (Effect Unit) w
issueReportedView state push =
  relativeLayout
  [ height MATCH_PARENT
  , width MATCH_PARENT
  , orientation VERTICAL
  , gravity CENTER
  , visibility if state.props.issueReported then VISIBLE else GONE
  ][  linearLayout
      [ height MATCH_PARENT
      , width MATCH_PARENT
      , gravity CENTER
      , orientation VERTICAL
      ][ imageView
          [ imageWithFallback $ "ny_ic_letter," <> (getAssetStoreLink FunctionCall) <> "ny_ic_letter.png"
          , height $ V 149
          , width $ V 149
          , margin (MarginBottom 32)
          ]
        , textView $
          [ text $ getString THANK_YOU_FOR_WRITING
          , gravity CENTER
          , width MATCH_PARENT
          , color Color.black900
          , margin (MarginBottom 12)
          ] <> FontStyle.h1 LanguageStyle
        , textView $
          [ text $ getString WE_HAVE_RECEIVED_YOUR_ISSUE
          , margin (Margin 42 0 42 0)
          , gravity CENTER
          , width MATCH_PARENT
          , color Color.blackLightGrey
          ] <> FontStyle.body3 TypoGraphy
        ]
        , linearLayout
          [ width MATCH_PARENT
          , height MATCH_PARENT
          , alignParentBottom "true,-1"
          , gravity BOTTOM
          , margin (MarginBottom 16)
          ][  PrimaryButton.view (push <<< PrimaryButtonActionController) (primaryButtonConfig state)]
      ]

