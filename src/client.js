import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'wph124a0',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skzJldb8qGMeVdUwlUezIFgk8dd6qXY2egX6E8osp6EQOMearIF1GShg3jRLl3ICe2WeZop8rFoaALXMuP7OwZ8STIoFu6y0Gl5hMO9TXVM7Q9JD03CtsBIaLgExWkomsSBFPd2eI4FT287vNX7egrKwE6zHcPLTjURoRUF5v02815jxZTDI',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
