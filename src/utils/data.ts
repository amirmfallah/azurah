import { artists } from "../data/artists";
import { releases, type Release } from "../data/releases";
import { events, type Event } from "../data/events";
import type { Artist } from "../data/artists";

export function getArtistsByIds(artistIds: string[]): Artist[] {
  return artistIds
    .map((id) => artists.find((artist) => artist.id === id))
    .filter((artist): artist is Artist => artist !== undefined);
}

export function getArtistNames(artistIds: string[]): string {
  const artistList = getArtistsByIds(artistIds);
  if (artistList.length === 0) return "Various Artists";
  return artistList.map((artist) => artist.name).join(", ");
}

export function getReleasesByArtistId(artistId: string): Release[] {
  return releases.filter((release) => release.artistIds.includes(artistId));
}

export function getUpcomingEvents(): Event[] {
  const now = new Date();
  return events
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getPastEvents(): Event[] {
  const now = new Date();
  return events
    .filter((event) => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
