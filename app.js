import React from "react";
import ReactDOM from "react-dom/client";

const imgPrefix =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const ResData = [
  {
    info: {
      id: "371422",
      name: "Handi punjab ki",
      cloudinaryImageId: "vozwrqdkvfcfutehx4ld",
      locality: "Rajpur Road",
      areaName: "Hathibarkala Salwala",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Tandoor"],
      avgRating: 4.3,
      veg: true,
      parentId: "93115",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 17:30:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/handi-punjab-ki-rajpur-road-hathibarkala-salwala-dehradun-371422",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "657142",
      name: "Punjabi Angithi (Delhi Wale)",
      cloudinaryImageId: "0a59d45ca92d85e5f63f5bc79f3dbb33",
      locality: "Rajpur Road",
      areaName: "Hathibarkala",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Chinese", "Punjabi", "Kebabs", "Tandoor"],
      avgRating: 4.4,
      veg: true,
      parentId: "471145",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-05 00:00:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/punjabi-angithi-delhi-wale-rajpur-road-hathibarkala-dehradun-657142",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "311806",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Chakrata Road",
      areaName: "Ballupur",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-05 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-chakrata-road-ballupur-dehradun-311806",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "73011",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Chakrata Road",
      areaName: "Prem Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-05 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-chakrata-road-prem-nagar-dehradun-73011",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "621142",
      name: "McDonald's",
      cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
      locality: "New Cantonment Road",
      areaName: "Hathibarkala Salwala",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-new-cantonment-road-hathibarkala-salwala-dehradun-621142",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "74796",
      name: "Five Star Janta",
      cloudinaryImageId: "avlujvfa7huclgj7e8z8",
      locality: "Chakrata Road",
      areaName: "Ballupur",
      costForTwo: "₹500 for two",
      cuisines: ["Sweets", "Bakery", "Chinese", "South Indian", "North Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "15743",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 21:45:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/five-star-janta-chakrata-road-ballupur-dehradun-74796",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "88166",
      name: "Nath'S Chinese",
      cloudinaryImageId: "fsm15mqsuninmtb6twec",
      locality: "Lakkhi Bagh",
      areaName: "Khurbura",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Chinese", "Tandoor"],
      avgRating: 4.3,
      parentId: "13608",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/naths-chinese-lakkhi-bagh-khurbura-dehradun-88166",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69769",
      name: "Aman Vegetarian",
      cloudinaryImageId: "ygczg6efdbjietl1req7",
      locality: "Paltan Bazaar Road",
      areaName: "Paltan Bazaar",
      costForTwo: "₹260 for two",
      cuisines: ["North Indian", "Chinese", "Continental"],
      avgRating: 4.3,
      veg: true,
      parentId: "13687",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:30:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/aman-vegetarian-road-paltan-bazaar-dehradun-69769",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69447",
      name: "Gaylord Express",
      cloudinaryImageId: "uj68ybtfwbydewraxzhm",
      locality: "Paltan Bazaar Road",
      areaName: "Paltan Bazaar",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Bakery", "South Indian", "Pizzas", "Beverages"],
      avgRating: 3.8,
      parentId: "13696",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-11 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/gaylord-express-road-paltan-bazaar-dehradun-69447",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "532213",
      name: "Chilli'Z Restro",
      cloudinaryImageId: "mzsuzzznrww2mpzwk27d",
      locality: "Prem Nagar",
      areaName: "Prem Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Snacks", "Beverages"],
      avgRating: 4.2,
      parentId: "13645",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:50:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chilliz-restro-prem-nagar-dehradun-532213",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69499",
      name: "Uss Da Dhaba",
      cloudinaryImageId: "j6w0gbsy2pdoivjjlymp",
      locality: "Court Road",
      areaName: "Race Course",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Continental"],
      avgRating: 4.1,
      veg: true,
      parentId: "13693",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:00:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/uss-da-dhaba-court-road-race-course-dehradun-69499",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "83069",
      name: "Anandam",
      cloudinaryImageId: "rmloixavqsck6jnpchsf",
      locality: "Chakrata Road",
      areaName: "Ballupur",
      costForTwo: "₹600 for two",
      cuisines: ["Sweets", "North Indian", "South Indian", "Snacks"],
      avgRating: 4.5,
      veg: true,
      parentId: "2649",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 22:00:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/anandam-chakrata-road-ballupur-dehradun-83069",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "116792",
      name: "Pandit Ji Sweets & Restaurant Dairy",
      cloudinaryImageId: "rl9dpxvvqemh7khblvvz",
      locality: "Canal Road",
      areaName: "Chironwali",
      costForTwo: "₹200 for two",
      cuisines: [
        "Sweets",
        "North Indian",
        "Chaat",
        "Fast Food",
        "Bakery",
        "South Indian",
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "13530",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.9,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "6.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 22:30:00",
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
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pandit-ji-sweets-and-restaurant-dairy-canal-road-chironwali-dehradun-116792",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "78973",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Vasant Vihar",
      areaName: "Balliwala",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.9,
      parentId: "721",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-05 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-vasant-vihar-balliwala-dehradun-78973",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "91350",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Chakrata Road",
      areaName: "Ballupur",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-05 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-chakrata-road-ballupur-dehradun-91350",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "365569",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Rajpur Road",
      areaName: "Rajpur",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "21809",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-road-rajpur-dehradun-365569",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "365574",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId: "zpfjhtdmeedg8tkkcg9n",
      locality: "Rajpur Road",
      areaName: "Rajpur",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "4925",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-road-rajpur-dehradun-365574",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "734631",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "f44bc9708c514cd2dd6ae0d8b4677214",
      locality: "RAJPUR ROAD",
      areaName: "PACIFIC HILLS",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.1,
      parentId: "4961",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 8.3,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "8.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-05 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-rajpur-road-pacific-hills-dehradun-734631",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "648742",
      name: "Social",
      cloudinaryImageId: "7d2bfa7cfdc0f19cd6693e0dfdede1b6",
      locality: "RABINDRANATH TAGORE MARG",
      areaName: "DEHRADUN",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Fast Food",
        "Biryani",
        "Pizzas",
        "Salads",
        "Kebabs",
        "Juices",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "2146",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-04 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/social-rabindranath-tagore-marg-dehradun-dehradun-648742",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "258058",
      name: "Walk In Woods",
      cloudinaryImageId: "shazu3f8od15s6wwwm28",
      locality: "Sudhowala",
      areaName: "Dharampur",
      costForTwo: "₹500 for two",
      cuisines: ["Chinese", "Italian", "Biryani"],
      avgRating: 4.3,
      parentId: "7148",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-05 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
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
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/walk-in-woods-sudhowala-dharampur-dehradun-258058",
      type: "WEBLINK",
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
};

const FoodCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRatingString, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData.info.sla;

  return (
    <div className="res-card">
      <div className="res-information">
        <img
          className="res-img"
          alt="res-logo"
          src={imgPrefix + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {ResData.map((restaurant) => (
          <FoodCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="links">Links</div>
      <div className="cr">Copyright</div>
      <div className="tc">Terms&Conditions</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Body />

      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
