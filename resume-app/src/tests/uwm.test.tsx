import { render, screen, fireEvent } from '@testing-library/react';
import * as UWM from '../components/uwm';
import * as Nav from '../lib/navigation';

describe('UWMImage', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('navigates to linkUrl on click', () => {
    jest.spyOn(Nav, 'navigateTo').mockImplementation(() => {});
  const Component = UWM.default;
  render(<Component imageUrl="/uwm.png" linkUrl="https://uwm.edu/" altText="UWM" />);
    const button = screen.getByRole('link');
    fireEvent.click(button);
    expect(Nav.navigateTo).toHaveBeenCalledWith('https://uwm.edu/');
  });

  it('renders image with alt text', () => {
  const Component = UWM.default;
  render(<Component imageUrl="/uwm.png" linkUrl="https://uwm.edu/" altText="UWM" />);
    expect(screen.getByAltText('UWM')).toBeInTheDocument();
  });
});
