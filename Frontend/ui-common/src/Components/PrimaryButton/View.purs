{-

  Copyright 2022-23, Juspay India Pvt Ltd

  This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License

  as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program

  is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY

  or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. You should have received a copy of

  the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
-}
module Components.PrimaryButton.View where

import Effect (Effect)
import Prelude (Unit, bind, const, discard, pure, unit, void, ($), (&&), (==), (<>))
import Components.PrimaryButton.Controller (Action(..), Config)
import PrestoDOM (Gravity(..), Length(..), Orientation(..), PrestoDOM, Visibility(..), afterRender, alpha, background, clickable, color, cornerRadius, fontStyle, gravity, height, id, imageView, lineHeight, linearLayout, lottieAnimationView, margin, onClick, orientation, padding, relativeLayout, stroke, text, textSize, textView, visibility, width, imageWithFallback, gradient)
import JBridge (toggleBtnLoader, getKeyInSharedPrefKeys, startLottieProcess, lottieAnimationConfig)
import Engineering.Helpers.Commons (getNewIDWithTag, os)
import MerchantConfig.Utils (getValueFromConfig)
import Font.Style as FontStyle
import Common.Styles.Colors as Color
import Common.Types.App (LazyCheck(..))

view :: forall w. (Action -> Effect Unit) -> Config -> PrestoDOM (Effect Unit) w
view push config =
  linearLayout
    [ height config.height
    , width config.width
    , margin config.margin
    , visibility config.visibility
    , background Color.white900
    , cornerRadius config.cornerRadius
    ]
    [ relativeLayout
        [ height config.height
        , width config.width
        , visibility config.visibility
        ]
        [ linearLayout
            ([ height config.height
            , width config.width
            , cornerRadius config.cornerRadius
            , background config.background
            , gravity config.gravity
            , clickable if config.enableLoader then false else config.isClickable
            , onClick
                ( \action -> do
                    _ <- pure $ toggleBtnLoader config.id true
                    _ <- pure $ startLottieProcess lottieAnimationConfig{ rawJson = getValueFromConfig "apiLoaderLottie", lottieId = getNewIDWithTag config.id}
                    push action
                )
                (const OnClick)
            , orientation HORIZONTAL
            , afterRender
                ( \action -> do
                    _ <- pure $ toggleBtnLoader "" false
                    pure unit
                )
                (const NoAction)
            , alpha if config.enableLoader then 0.5 else config.alpha
            , stroke config.stroke
            ]  <> if config.isGradient then [gradient config.gradient] else [background config.background])
            [ linearLayout
                [ width config.width
                , height config.height
                , orientation HORIZONTAL
                , gravity config.gravity
                , visibility if config.enableLoader then GONE else VISIBLE
                ]
                [ prefixImageLayout config
                , textView
                    $ [ height config.textConfig.height
                      , width config.textConfig.width
                      , text config.textConfig.text
                      , color config.textConfig.color
                      , gravity config.textConfig.gravity
                      , lineHeight "20"
                      ]
                    <> (FontStyle.getFontStyle config.textConfig.textStyle LanguageStyle)
                , suffixImageLayout config
                ]
            ]
        , linearLayout
            [ height config.height
            , width config.width
            , gravity CENTER
            ]
            [ lottieAnimationView
                [ id (getNewIDWithTag config.id)
                , visibility if config.enableLoader then VISIBLE else GONE
                , height $ V 30
                , width $ V 150
                ]
            ]
        ]
    ]

prefixImageLayout :: forall w. Config -> PrestoDOM (Effect Unit) w
prefixImageLayout config =
  imageView
    [ height config.prefixImageConfig.height
    , width $ if config.isPrefixImage then config.prefixImageConfig.width else V 0
    , imageWithFallback config.prefixImageConfig.imageUrl
    , padding config.prefixImageConfig.padding
    , visibility if config.isPrefixImage then VISIBLE else GONE
    , margin config.prefixImageConfig.margin
    ]

suffixImageLayout :: forall w . Config -> PrestoDOM (Effect Unit) w
suffixImageLayout config =
  imageView
    [ height config.suffixImageConfig.height
    , width $ if config.isSuffixImage then config.suffixImageConfig.width else V 0
    , imageWithFallback config.suffixImageConfig.imageUrl
    , padding config.suffixImageConfig.padding
    , visibility if config.isSuffixImage then VISIBLE else GONE
    , margin config.suffixImageConfig.margin
    ]
