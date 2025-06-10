import { infiniteCarousel as renderInfiniteCarousel } from './infiniteCarousel';

export default {
  title: 'components/InfiniteCarousel',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return renderInfiniteCarousel({ ...args });
  },
  argTypes: {},
};

export const infiniteCarousel = {
  args: {},
};
