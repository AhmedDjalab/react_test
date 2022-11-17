/**
 * @jest-environment jsdom
 */
import {
  fireEvent,
  queryAllByTestId,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Home } from "./Home";
import { StarredProvider } from "../../context/starred_context";

// in your test:

const MOCK_Articles = [
  {
    id: 17313,
    title:
      "Artemis I releases 10 cubesats, including a Moon lander, for technology and research",
    url: "https://www.nasaspaceflight.com/2022/11/artemis-i-cubesats/",
    imageUrl:
      "https://www.nasaspaceflight.com/wp-content/uploads/2022/11/ENGN7551-min-1170x878.jpg",
    newsSite: "NASASpaceflight",
    summary:
      "The Artemis I mission, the first flight of the Orion spacecraft and SLS, is now underway after a successful launch from Pad 39B at the Kennedy Space Center at 1:47:44 AM EST (06:47:44 UTC) on Nov. 16.",
    publishedAt: "2022-11-16T22:05:00.000Z",
    updatedAt: "2022-11-17T06:26:29.047Z",
    featured: false,
    launches: [
      {
        id: "65896761-b6ca-4df3-9699-e077a360c52a",
        provider: "Launch Library 2",
      },
    ],
    events: [],
  },
  {
    id: 17312,
    title: "Spire Global reveals larger, new-gen 16U satellite bus",
    url: "https://spacenews.com/spire-global-reveals-larger-new-gen-16u-satellite-bus/",
    imageUrl:
      "https://spacenews.com/wp-content/uploads/2022/11/Spire-16U-satellite-bus.jpg",
    newsSite: "SpaceNews",
    summary:
      "Spire Global has unveiled a new-generation satellite bus to meet demand for larger and more capable satellites.",
    publishedAt: "2022-11-16T21:27:24.000Z",
    updatedAt: "2022-11-16T21:27:24.563Z",
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 17311,
    title: "Apple bringing SOS via satellite services to Europe in December",
    url: "https://spacenews.com/apple-bringing-sos-via-satellite-services-to-europe-in-december/",
    imageUrl:
      "https://spacenews.com/wp-content/uploads/2022/09/iphone-satellitesos.jpg",
    newsSite: "SpaceNews",
    summary:
      "Apple is extending its SOS via satellite service for iPhone 14 smartphones to parts of Europe in December, the company said Nov. 15 after bringing the capability online across the United States and Canada.",
    publishedAt: "2022-11-16T20:27:14.000Z",
    updatedAt: "2022-11-16T20:27:14.731Z",
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 17310,
    title:
      "On the NRO’s wish list: AI technologies to manage satellites and data",
    url: "https://spacenews.com/on-the-nros-wish-list-ai-technologies-to-manage-satellites-and-data/",
    imageUrl:
      "https://spacenews.com/wp-content/uploads/2022/11/FhpwvpwXwAAKIyf.jpeg",
    newsSite: "SpaceNews",
    summary:
      "NRO Director Chris Scolese said the agency wants to use artificial intelligence and machine learning to orchestrate the operation of imaging satellites and to analyze data in orbit",
    publishedAt: "2022-11-16T19:57:24.000Z",
    updatedAt: "2022-11-16T19:57:24.081Z",
    featured: false,
    launches: [],
    events: [],
  },
  {
    id: 17309,
    title: "SpaceRyde announces multiple launches with ISILaunch",
    url: "https://spacenews.com/spaceryde-and-isilaunch/",
    imageUrl:
      "https://spacenews.com/wp-content/uploads/2022/11/rsz_isispace-quadpacks-scaled-1.jpg",
    newsSite: "SpaceNews",
    summary:
      "Canadian launch startup SpaceRyde revealed plans Nov. 15 to launch four private commercial flights for ISILaunch, a subsidiary of Innovative Solutions In Space B.V. of the Netherlands.",
    publishedAt: "2022-11-16T19:07:12.000Z",
    updatedAt: "2022-11-16T19:07:13.091Z",
    featured: false,
    launches: [],
    events: [],
  },
];

jest.mock("../../hooks/useArticles", () => {
  const originalModule = jest.requireActual("../../hooks/useArticles");
  return {
    __esModule: true,
    ...originalModule,
    default: () => ({
      getArticles: jest.fn,
      setArticles: jest.fn,
      articles: MOCK_Articles,
    }),
  };
});

describe("Home Page", () => {
  test("it renders", () => {
    render(
      <StarredProvider>
        <Home />
      </StarredProvider>
    );

    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
