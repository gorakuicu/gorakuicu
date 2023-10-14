// `useNextuiFixes` is a custom React hook that applies specific styles to certain DOM elements
// to fix an issue related to tooltip overlays. It specifically targets div elements that have
// a `data-overlay-container="true"` attribute and contain children with `role="tooltip"`.
//
// The hook uses the MutationObserver API to watch for changes in the DOM. When an element
// that meets the criteria is added, it applies the styles `overflow: hidden;` and `height: 0px;`
// to hide the overlay container without affecting the tooltip itself.
//
// Usage:
// Simply import and call this hook at the top-level of your component or application.
// It doesn't take any arguments and doesn't return any values.

import { useEffect } from 'react';

export function useNextuiFixes() {
  // This effect is triggered after each render when the DOM updates
  useEffect(() => {
    // A helper function that applies styles to overlay containers that meet specific conditions
    const applyStylesToOverlayContainers = (node: Node) => {
      // Checks if the node is an HTMLElement, has a `data-overlay-container="true"` attribute,
      // and contains at least one child with `role="tooltip"`
      if (
        node instanceof HTMLElement &&
        node.dataset.overlayContainer === 'true' &&
        Array.from(node.children).some(
          (child) => child.getAttribute('role') === 'tooltip',
        )
      ) {
        // Applies styles to hide the container
        const { style } = node;
        style.overflow = 'hidden';
        style.height = '0px';
      }
    };

    // Creates a new MutationObserver instance to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      // Iterates over each mutation record
      for (const mutation of mutations) {
        // If the type of mutation is 'childList', indicating that child nodes have been added or removed
        if (mutation.type === 'childList') {
          // Iterates over each added node
          for (const node of Array.from(mutation.addedNodes)) {
            // Calls the helper function to apply styles if conditions are met
            applyStylesToOverlayContainers(node);
          }
        }
      }
    });

    // Starts observing the body of the document for child list mutations and subtree mutations
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup: disconnects the observer when the component unmounts or before the next render
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array means this useEffect runs after each render
}
