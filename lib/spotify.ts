import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  // "user-library-modify",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(",");

const params = {
  scopes,
};

const queryParamsString = new URLSearchParams(params).toString();

export const AUTH_URL =
  "https://accounts.spotify.com/authorize?" + queryParamsString;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSeceret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;
