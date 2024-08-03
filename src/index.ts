import LoadingBar from "./loading-bar/loading-bar";

// Used for Angular Implmentation
const definePTSElements = function(window: Window) {
  if (window.customElements.get('loading-bar') === undefined) {
    import('./loading-bar/loading-bar').then(module => {}).catch(err => {
      console.error('Failed to load loading-bar component', err)
    });
  }
}

export { 
  LoadingBar,
  definePTSElements
};