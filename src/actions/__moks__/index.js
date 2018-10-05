import shows from '../samples/shows';

export const fetchPosterIfNeeded = urlParams => {
  Promise.resolve({
    json: shows,
  })
}