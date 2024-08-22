import { LoadingBar } from '../src/loading-bar/loading-bar';

const loadingBar = new LoadingBar();

test('LoadingBar: animation-duration should be default value when no value is set', () => {
  if (loadingBar.animationDuration) {
    expect(loadingBar.animationDuration).toBe('3s');
  }
});

test('LoadingBar: animation-duration should be 1s after setting value to 1s', () => {
  loadingBar.animationDuration = '1s';
  expect(loadingBar.animationDuration).toBe('1s');
});

test('LoadingBar: animation-duration should be 3s after setting value to junk', () => {
  loadingBar.animationDuration = 'hbafohuoSUFIYEG';
  expect(loadingBar.animationDuration).toBe('3s');
});

test('LoadingBar: animation-duration should be 1s after value is set by setAttribute', () => {
  loadingBar.setAttribute('animation-duration', '1s')
  if (loadingBar.animationDuration) {
    expect(loadingBar.animationDuration).toBe('1s');
  }
});

test('LoadingBar: animation-duration should be 3s after junk value is set by setAttribute', () => {
  loadingBar.setAttribute('animation-duration', 'lhsfboihefb')
  if (loadingBar.animationDuration) {
    expect(loadingBar.animationDuration).toBe('3s');
  }
});

test('LoadingBar: animation-duration should be 3s after setting value to null', () => {
  loadingBar.animationDuration = null;
  if (loadingBar.animationDuration) {
    expect(loadingBar.animationDuration).toBe('3s');
  }
});