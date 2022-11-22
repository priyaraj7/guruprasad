import { render, screen } from "@testing-library/react";

import * as api from "../../../api/thirdPartyApi";
import ReviewPage from "../ReviewPage.js";

const mockGoogleApiData = {
  html_attributions: [],
  result: {
    adr_address:
      '<span class="locality">Ujire</span>, <span class="region">Karnataka</span> <span class="postal-code">574240</span>, <span class="country-name">India</span>',
    business_status: "OPERATIONAL",
    curbside_pickup: false,
    current_opening_hours: {
      open_now: true,
    },
    delivery: true,
    dine_in: true,
    formatted_address: "Ujire, Karnataka 574240, India",
    geometry: {
      location: {
        lat: 12.9958384,
        lng: 75.3291491,
      },
      viewport: {
        northeast: {
          lat: 12.99711358029151,
          lng: 75.3304780802915,
        },
        southwest: {
          lat: 12.9944156197085,
          lng: 75.32778011970849,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    name: "Hotel GURUPRASAD",
    opening_hours: {
      open_now: true,
    },

    reviews: [
      {
        author_name: "Shivakiran Holla",
        author_url:
          "https://www.google.com/maps/contrib/100349982341522168328/reviews",
        language: "en",
        original_language: "en",
        profile_photo_url:
          "https://lh3.googleusercontent.com/a-/ACNPEu-Fsc_X51OTuJSOFdTG-dEpv9uaDdKCRtlq9PfNvh4=s128-c0x00000000-cc-rp-mo-ba3",
        rating: 4,
        relative_time_description: "5 months ago",
        text: "Great food is your traveling early morning",
        time: 1653976834,
        translated: false,
      },
    ],
    takeout: true,
    types: ["restaurant", "point_of_interest", "food", "establishment"],
    url: "https://maps.google.com/?cid=5149673375893793708",
    user_ratings_total: 17,
    utc_offset: 330,
    vicinity: "Ujire",
  },
  status: "OK",
};

beforeEach(() => {
  // spyOn need property
  jest.spyOn(api, "getReviews").mockResolvedValue([]);
});

describe("should render restaurant reviews", () => {
  it("loads all the users", async () => {
    api.getReviews.mockResolvedValue(mockGoogleApiData);

    render(<ReviewPage />);
    expect(api.getReviews).toHaveBeenCalled();
    expect(await screen.findByText("Shivakiran Holla")).toBeInTheDocument();
    expect(
      await screen.findByText("Great food is your traveling early morning")
    ).toBeInTheDocument();
  });
});

describe("should render restaurant title", () => {
  it("loads all the users", async () => {
    api.getReviews.mockResolvedValue(mockGoogleApiData);

    render(<ReviewPage />);
    expect(api.getReviews).toHaveBeenCalled();
    expect(await screen.findByText("Shivakiran Holla")).toBeInTheDocument();
    expect(
      await screen.findByText("Great food is your traveling early morning")
    ).toBeInTheDocument();
  });
});
