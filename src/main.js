import "./styles.css";
import { PageState } from "./PageState.js";
import { GiphyService } from "./GiphyService.js";
import { UIHandler } from "./UIHandler.js";

const pageState = new PageState(
  "T9V72F3KAEU68NHBDQNM5C335",
  "london",
  "NtNc7orE9l9uZDU0qRc69bP19gBk5ZUX",
  "cats"
);
pageState.updateURLs();

const giphyService = new GiphyService(pageState);
new UIHandler(pageState, giphyService);

// Initialize by drawing the initial Giphy
giphyService.fetchGiphy();
