import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn-icons-png.freepik.com/256/958/958170.png?semt=ais_hybrid"
        />
        <h3 className="food-heading">Food App</h3>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "749554",
          name: "Goila Butter Chicken",
          cloudinaryImageId: "2acf0681a049dea7dac7271cf7ccc560",
          locality: "PASCHIM BARDHAMAN",
          areaName: "Durgapur",
          costForTwo: "₹600 for two",
          cuisines: ["North Indian", "Biryani", "Kebabs", "Desserts"],
          avgRating: 4.5,
          parentId: "322587",
          avgRatingString: "4.5",
          totalRatingsString: "100+",
          promoted: true,
          adTrackingId:
            "cid=15965984~p=0~adgrpid=15965984#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=749554~eid=b6f979e6-d996-41af-b282-1b6efc4fb4c7~srvts=1725086536969~collid=83633",
          sla: {
            deliveryTime: 43,
            lastMileTravel: 5.9,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "5.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-09-01 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹80",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=749554&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "151555",
          name: "Hotel Kohetoor",
          cloudinaryImageId: "npvtkpgxgbn2jvymirm1",
          locality: "City Center",
          areaName: "City Center",
          costForTwo: "₹300 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Chinese",
            "Kebabs",
            "Mughlai",
            "Tandoor",
          ],
          avgRating: 4.2,
          parentId: "471738",
          avgRatingString: "4.2",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-08-31 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=151555&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "150018",
          name: "City Hotel & Restaurant",
          cloudinaryImageId: "pu8pg4uhqmak3lryjig8",
          locality: "City Center",
          areaName: "City Center",
          costForTwo: "₹300 for two",
          cuisines: ["North Indian", "Chinese", "Indian"],
          avgRating: 4.3,
          parentId: "63444",
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          promoted: true,
          adTrackingId:
            "cid=17779137~p=1~adgrpid=17779137#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=150018~eid=9af78d6d-bd3f-441d-9ab7-df9343008d24~srvts=1725086536969~collid=83633",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-08-31 22:55:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=150018&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "187531",
          name: "Live Barbeque",
          cloudinaryImageId: "hhqqoygrr8ypqjkat1ro",
          locality: "Hudco More",
          areaName: "Bidhan Nagar",
          costForTwo: "₹300 for two",
          cuisines: [
            "Biryani",
            "Chinese",
            "North Indian",
            "Tandoor",
            "Fast Food",
            "Snacks",
          ],
          avgRating: 4.1,
          parentId: "125593",
          avgRatingString: "4.1",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 3.8,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-08-31 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=187531&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "380786",
          name: "Rannaghar",
          cloudinaryImageId: "qbiccyovvqxwre2q8c5v",
          locality: "Jadabendra",
          areaName: "Sagar Bhanga",
          costForTwo: "₹300 for two",
          cuisines: [
            "Bengali",
            "North Indian",
            "Chinese",
            "Fast Food",
            "Snacks",
            "Tandoor",
          ],
          avgRating: 4.4,
          parentId: "19869",
          avgRatingString: "4.4",
          totalRatingsString: "1K+",
          promoted: true,
          adTrackingId:
            "cid=17779151~p=2~adgrpid=17779151#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=380786~eid=201b37ab-144e-4e9b-b8df-e79e7d808d01~srvts=1725086536969~collid=83633",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 4.6,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "4.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-08-31 15:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=380786&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "242764",
          name: "Haldiram's",
          cloudinaryImageId: "mgekubum2smlygaauzg6",
          locality: "Suhatta Mall",
          areaName: "City Center",
          costForTwo: "₹350 for two",
          cuisines: ["Sweets", "South Indian", "North Indian", "Fast Food"],
          avgRating: 4.3,
          veg: true,
          parentId: "377669",
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 4.2,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "4.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-08-31 22:20:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=242764&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "439353",
          name: "Skai Garam Masala",
          cloudinaryImageId: "umeam9zahgkcemf0c3wg",
          locality: "Nachan Road",
          areaName: "Benachity",
          costForTwo: "₹300 for two",
          cuisines: ["Indian", "Chinese", "Biryani", "rolls", "French"],
          avgRating: 4.4,
          parentId: "454353",
          avgRatingString: "4.4",
          totalRatingsString: "100+",
          promoted: true,
          adTrackingId:
            "cid=17779171~p=4~adgrpid=17779171#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=439353~eid=e0ddc198-5402-4dad-ae8e-36c48bb41223~srvts=1725086536969~collid=83633",
          sla: {
            deliveryTime: 49,
            lastMileTravel: 8,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "8.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-08-31 23:15:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹175 OFF",
            subHeader: "ABOVE ₹399",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=439353&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
{
  /* <RestaurantCard resData={resList[0]} /> */
} //Old Code
const RestaurantCard = (props) => {
  const { resData } = props; //Destructuring
  const { cloudinaryImageId, name, cuisines, locality, costForTwo, avgRating } =
    resData?.card?.card?.info;
  console.log(props);
  return (
    <div className="res-card">
      <img
        alt="card"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
      <p>{locality}</p>
      <p>{costForTwo}</p>
      <p>{resData.card.card.info.sla.slaString}</p>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
